#!/usr/bin/env node
// Serveur MCP Silae Paie (stdio, sans dépendance). Expose les 299 fonctions de l'API REST Silae
// via un petit nombre d'outils génériques : rechercher, décrire, appeler (simple, asynchrone, par lot).
import readline from "node:readline";
import {
  catalog, loadConfig, missingConfig, findFunction, search, describe, categories, call, callAsync,
  formatResult, getToken, maintenanceWarning, readJournal, SilaeError,
} from "../lib/silae.mjs";

const VERSION = "1.0.0";
const cfg = loadConfig();

const fonctionProp = { type: "string", description: "Nom exact de la fonction Silae, par exemple ListeSalaries ou SalarieAjouterElementVariable" };
const corpsProp = { type: "object", description: "Corps JSON de la requête, tel que décrit par silae_decrire. numeroDossier est ajouté automatiquement s'il manque.", additionalProperties: true };
const dossierProp = { type: "string", description: "Numéro du dossier de paie. Par défaut : celui du corps, sinon le dossier par défaut configuré." };
const confirmerProp = { type: "boolean", description: "Obligatoire à true pour toute fonction qui modifie Silae, après accord explicite de l'utilisateur sur le contenu exact." };

const TOOLS = [
  {
    name: "silae_statut",
    description: "État du connecteur Silae : configuration, mode d'accès (lecture, ecriture, complet), dossier par défaut, dossier de sortie des fichiers. Avec tester_connexion=true, vérifie l'authentification.",
    inputSchema: { type: "object", properties: { tester_connexion: { type: "boolean" } } },
    annotations: { readOnlyHint: true },
  },
  {
    name: "silae_categories",
    description: "Liste les catégories de fonctions de l'API Silae avec le nombre de fonctions en lecture, écriture et critiques.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
  },
  {
    name: "silae_rechercher",
    description: `Cherche parmi les ${catalog.fonctions.length} fonctions de l'API Silae Paie par mots clés (français, sans accents requis), catégorie, niveau d'accès ou modèle de contrat API (1A, 1B, 2, 4). Toujours commencer par là pour trouver le bon nom de fonction.`,
    inputSchema: {
      type: "object",
      properties: {
        requete: { type: "string", description: "Mots clés, par exemple 'absence', 'journal paie', 'element variable', 'dpae'" },
        categorie: { type: "string", description: "Catégorie exacte (voir silae_categories)" },
        acces: { type: "string", enum: ["lecture", "ecriture", "critique"] },
        modele: { type: "string", enum: ["1A", "1B", "2", "4"] },
        limite: { type: "number", description: "Nombre maximum de résultats (40 par défaut)" },
      },
    },
    annotations: { readOnlyHint: true },
  },
  {
    name: "silae_decrire",
    description: "Décrit une fonction Silae : description officielle, corps attendu (champs * obligatoires), aide sur chaque paramètre, exemple, format de réponse, erreurs connues, niveau d'accès, modèles de contrat et lien vers la doc. À appeler avant tout appel.",
    inputSchema: { type: "object", properties: { fonction: fonctionProp }, required: ["fonction"] },
    annotations: { readOnlyHint: true },
  },
  {
    name: "silae_appeler",
    description: "Appelle une fonction de l'API Silae. Les documents renvoyés (PDF, Excel, ZIP) sont enregistrés dans le dossier de sortie et leur chemin est renvoyé. Les fonctions qui modifient Silae exigent le mode d'accès adapté et confirmer=true.",
    inputSchema: {
      type: "object",
      properties: {
        fonction: fonctionProp,
        corps: corpsProp,
        dossier: dossierProp,
        parametres_url: { type: "object", description: "Paramètres de requête pour les fonctions GET (par exemple guidTache)", additionalProperties: true },
        confirmer: confirmerProp,
      },
      required: ["fonction"],
    },
    annotations: { destructiveHint: true, openWorldHint: true },
  },
  {
    name: "silae_appeler_asynchrone",
    description: "Lance la version asynchrone d'une fonction Silae (gros volumes, éditions, bulletins en masse), attend la fin en interrogeant la fonction Statut correspondante, puis renvoie le résultat. Accepte le nom de base (EditionJournalDePaie) ou le nom Asynchrone.",
    inputSchema: {
      type: "object",
      properties: {
        fonction: fonctionProp,
        corps: corpsProp,
        dossier: dossierProp,
        confirmer: confirmerProp,
        delai_max_secondes: { type: "number", description: "Attente maximale avant de rendre la main (300 par défaut)" },
      },
      required: ["fonction"],
    },
    annotations: { destructiveHint: true, openWorldHint: true },
  },
  {
    name: "silae_appeler_lot",
    description: "Exécute la même fonction Silae sur une liste de corps (par exemple saisir les éléments variables de tout un dossier). Renvoie le résultat ligne par ligne. Maximum 500 lignes par lot.",
    inputSchema: {
      type: "object",
      properties: {
        fonction: fonctionProp,
        lignes: { type: "array", items: { type: "object", additionalProperties: true }, description: "Un corps JSON par appel" },
        dossier: dossierProp,
        confirmer: confirmerProp,
        arreter_sur_erreur: { type: "boolean", description: "Arrêter au premier échec (false par défaut)" },
      },
      required: ["fonction", "lignes"],
    },
    annotations: { destructiveHint: true, openWorldHint: true },
  },
  {
    name: "silae_journal",
    description: "Affiche les dernières écritures faites dans Silae par ce connecteur (date, fonction, dossier, corps envoyé, statut).",
    inputSchema: { type: "object", properties: { nombre: { type: "number" } } },
    annotations: { readOnlyHint: true },
  },
];

const text = (t, isError = false) => ({ content: [{ type: "text", text: typeof t === "string" ? t : JSON.stringify(t, null, 1) }], isError });

function distance(a, b) {
  const d = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = d[0];
    d[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return d[b.length];
}

function need(name) {
  const f = findFunction(name);
  if (!f) {
    const n = String(name || "").toLowerCase();
    const proches = catalog.fonctions
      .map((x) => [distance(n, x.nom.toLowerCase()), x.nom])
      .sort((a, b) => a[0] - b[0])
      .slice(0, 5)
      .map((x) => x[1]);
    throw new SilaeError(`Fonction "${name}" inconnue. Proches : ${proches.join(", ")}. Utiliser silae_rechercher.`);
  }
  return f;
}

async function handle(name, a = {}) {
  const warn = maintenanceWarning();
  switch (name) {
    case "silae_statut": {
      const miss = missingConfig(cfg);
      const out = {
        version: VERSION,
        configure: miss.length === 0,
        manquant: miss.length ? miss : undefined,
        environnement: cfg.environnement,
        modeAcces: cfg.mode,
        modeleContrat: cfg.modele || "non précisé",
        dossierParDefaut: cfg.dossierDefaut || "aucun",
        dossierSortie: cfg.sortie,
        clientId: cfg.clientId ? cfg.clientId.slice(0, 6) + "…" : undefined,
        fonctionsDisponibles: catalog.fonctions.length,
        specSilae: `${catalog.versionSpec}, catalogue généré le ${catalog.genereLe}`,
        avertissement: warn || undefined,
      };
      if (a.tester_connexion && !miss.length) {
        try {
          await getToken(cfg, true);
          out.connexion = "OK, jeton obtenu";
        } catch (e) {
          out.connexion = `ÉCHEC : ${e.message}`;
        }
      }
      return text(out);
    }
    case "silae_categories":
      return text(categories());
    case "silae_rechercher":
      return text(search(a));
    case "silae_decrire":
      return text(describe(need(a.fonction)));
    case "silae_appeler": {
      const f = need(a.fonction);
      const r = await call(cfg, f, { corps: a.corps, dossier: a.dossier, query: a.parametres_url, confirmer: a.confirmer });
      return text((warn ? warn + "\n" : "") + formatResult(cfg, f, r));
    }
    case "silae_appeler_asynchrone": {
      const f = need(a.fonction);
      const r = await callAsync(cfg, f, { corps: a.corps, dossier: a.dossier, confirmer: a.confirmer }, { delaiMaxS: a.delai_max_secondes || 300 });
      return text(formatResult(cfg, findFunction(r.fonction) || f, r));
    }
    case "silae_appeler_lot": {
      const f = need(a.fonction);
      const lignes = Array.isArray(a.lignes) ? a.lignes : [];
      if (!lignes.length) throw new SilaeError("Aucune ligne à traiter.");
      if (lignes.length > 500) throw new SilaeError("Plus de 500 lignes : découper en plusieurs lots.");
      const res = [];
      let ok = 0;
      for (const [i, corps] of lignes.entries()) {
        try {
          const r = await call(cfg, f, { corps, dossier: a.dossier, confirmer: a.confirmer });
          ok++;
          res.push({ ligne: i + 1, ok: true, reponse: r.data ?? null });
        } catch (e) {
          res.push({ ligne: i + 1, ok: false, erreur: e.message, corps });
          if (a.arreter_sur_erreur || /mode|confirmer|Configuration|Authentification/.test(e.message)) break;
        }
      }
      return text({ fonction: f.nom, total: lignes.length, traitees: res.length, reussies: ok, echecs: res.length - ok, details: res }, ok === 0);
    }
    case "silae_journal":
      return text(readJournal(cfg, a.nombre || 30));
    default:
      throw new SilaeError(`Outil inconnu : ${name}`);
  }
}

// ---------- Transport JSON-RPC sur stdio ----------
const send = (msg) => process.stdout.write(JSON.stringify(msg) + "\n");
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", async (line) => {
  if (!line.trim()) return;
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return send({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } });
  }
  const { id, method, params } = msg;
  const reply = (result) => id !== undefined && send({ jsonrpc: "2.0", id, result });
  const fail = (code, message) => id !== undefined && send({ jsonrpc: "2.0", id, error: { code, message } });
  try {
    switch (method) {
      case "initialize":
        return reply({
          protocolVersion: params?.protocolVersion || "2025-06-18",
          capabilities: { tools: {} },
          serverInfo: { name: "silae-paie", version: VERSION },
          instructions:
            "Connecteur API Silae Paie. Toujours : silae_rechercher puis silae_decrire avant silae_appeler. Toute écriture dans Silae se montre d'abord à l'utilisateur et ne part qu'après son accord, avec confirmer=true.",
        });
      case "notifications/initialized":
      case "notifications/cancelled":
        return;
      case "ping":
        return reply({});
      case "tools/list":
        return reply({ tools: TOOLS });
      case "tools/call":
        try {
          return reply(await handle(params?.name, params?.arguments || {}));
        } catch (e) {
          const details = e.details && typeof e.details === "object" ? "\n" + JSON.stringify(e.details).slice(0, 2000) : "";
          return reply(text(`${e.message}${details}`, true));
        }
      default:
        if (method?.startsWith("notifications/")) return;
        return fail(-32601, `Method not found: ${method}`);
    }
  } catch (e) {
    fail(-32603, e.message);
  }
});
