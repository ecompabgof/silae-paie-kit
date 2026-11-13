#!/usr/bin/env node
// CLI Silae Paie : mêmes garde-fous que le connecteur MCP.
// Identifiants lus dans l'environnement (SILAE_*) ou dans ~/.silae.env (ou le fichier SILAE_ENV_FILE).
import fs from "node:fs";
import {
  loadConfig, missingConfig, findFunction, search, describe, categories, call, callAsync,
  formatResult, getToken, readJournal,
} from "../lib/silae.mjs";

const AIDE = `Usage : silae <commande> [options]

  statut [--tester]                  configuration et test d'authentification
  categories                         catégories de fonctions
  rechercher <mots...> [--acces lecture|ecriture|critique] [--modele 1A|1B|2|4]
  decrire <Fonction>                 corps attendu, exemple, aide, doc
  appeler <Fonction> [--corps JSON|@fichier.json] [--dossier N] [--query k=v] [--confirmer]
  async <Fonction> [--corps ...] [--dossier N] [--confirmer] [--delai 300]
  lot <Fonction> --lignes @lignes.json [--dossier N] [--confirmer] [--stop]
  journal [n]                        dernières écritures faites par le kit

Identifiants : SILAE_CLIENT_ID, SILAE_CLIENT_SECRET, SILAE_SUBSCRIPTION_KEY,
SILAE_DOSSIER_DEFAUT, SILAE_MODE (lecture|ecriture|complet), SILAE_DOSSIER_SORTIE,
dans l'environnement ou dans ~/.silae.env (chmod 600).`;

const argv = process.argv.slice(2);
const cmd = argv.shift();
const flags = {};
const pos = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith("--")) {
    const k = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) flags[k] = true;
    else if (k === "query") (flags.query ??= []).push(argv[++i]);
    else flags[k] = argv[++i];
  } else pos.push(a);
}
const json = (v) => {
  if (v === undefined || v === true) return undefined;
  const s = String(v).startsWith("@") ? fs.readFileSync(String(v).slice(1), "utf8") : String(v);
  return JSON.parse(s);
};
const print = (v) => console.log(typeof v === "string" ? v : JSON.stringify(v, null, 2));
const cfg = loadConfig();
const fn = (n) => {
  const f = findFunction(n);
  if (!f) throw new Error(`Fonction inconnue : ${n}. Essayer : silae rechercher <mots>`);
  return f;
};

try {
  switch (cmd) {
    case "statut": {
      const miss = missingConfig(cfg);
      const out = { configure: !miss.length, manquant: miss, mode: cfg.mode, dossierDefaut: cfg.dossierDefaut, sortie: cfg.sortie };
      if (flags.tester && !miss.length) out.connexion = (await getToken(cfg, true)) ? "OK" : "échec";
      print(out);
      break;
    }
    case "categories":
      print(categories());
      break;
    case "rechercher":
      print(search({ requete: pos.join(" "), acces: flags.acces, modele: flags.modele, categorie: flags.categorie, limite: Number(flags.limite) || 40 }));
      break;
    case "decrire":
      print(describe(fn(pos[0])));
      break;
    case "appeler": {
      const f = fn(pos[0]);
      const query = Object.fromEntries((flags.query || []).map((q) => q.split("=")));
      const r = await call(cfg, f, { corps: json(flags.corps), dossier: flags.dossier, query, confirmer: !!flags.confirmer });
      print(formatResult(cfg, f, r, 2_000_000));
      break;
    }
    case "async": {
      const f = fn(pos[0]);
      const r = await callAsync(cfg, f, { corps: json(flags.corps), dossier: flags.dossier, confirmer: !!flags.confirmer }, { delaiMaxS: Number(flags.delai) || 300 });
      print(formatResult(cfg, findFunction(r.fonction) || f, r, 2_000_000));
      break;
    }
    case "lot": {
      const f = fn(pos[0]);
      const lignes = json(flags.lignes);
      if (!Array.isArray(lignes)) throw new Error("--lignes doit pointer vers un tableau JSON");
      let ok = 0;
      for (const [i, corps] of lignes.entries()) {
        try {
          await call(cfg, f, { corps, dossier: flags.dossier, confirmer: !!flags.confirmer });
          ok++;
          console.log(`ligne ${i + 1} OK`);
        } catch (e) {
          console.log(`ligne ${i + 1} ÉCHEC ${e.message}`);
          if (flags.stop) break;
        }
      }
      console.log(`${ok}/${lignes.length} réussies`);
      break;
    }
    case "journal":
      print(readJournal(cfg, Number(pos[0]) || 30));
      break;
    default:
      console.log(AIDE);
      process.exit(cmd ? 1 : 0);
  }
} catch (e) {
  console.error(`Erreur : ${e.message}`);
  if (e.details) console.error(JSON.stringify(e.details, null, 2).slice(0, 3000));
  process.exit(1);
}
