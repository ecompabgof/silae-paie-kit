// Client Silae Paie REST : configuration, jeton OAuth2, appels, garde-fous et fichiers.
// Aucune dépendance : Node 18+ (fetch natif).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
export const catalog = JSON.parse(fs.readFileSync(path.join(here, "..", "data", "catalog.json"), "utf8"));
const byName = new Map(catalog.fonctions.map((f) => [f.nom.toLowerCase(), f]));

const DEFAULTS = {
  SILAE_BASE_URL: "https://payroll-api.silae.fr/payroll",
  SILAE_AUTH_URL: "https://payroll-api-auth.silae.fr/oauth2/v2.0/token",
  SILAE_SCOPE: "https://silaecloudb2c.onmicrosoft.com/36658aca-9556-41b7-9e48-77e90b006f34/.default",
  SILAE_MODE: "lecture",
};

// Une valeur userConfig non renseignée peut arriver vide ou sous forme littérale "${user_config.x}".
const val = (v) => (typeof v === "string" && v.trim() && !v.includes("${") ? v.trim() : "");

function readEnvFile(file) {
  const out = {};
  if (!file || !fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*(?:export\s+)?([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}

export function loadConfig(env = process.env) {
  const fileEnv = readEnvFile(val(env.SILAE_ENV_FILE) || path.join(os.homedir(), ".silae.env"));
  const get = (k) => val(env[k]) || val(fileEnv[k]) || DEFAULTS[k] || "";
  const dataDir = val(env.CLAUDE_PLUGIN_DATA) || path.join(os.homedir(), ".silae-paie");
  const mode = get("SILAE_MODE").toLowerCase();
  return {
    clientId: get("SILAE_CLIENT_ID"),
    clientSecret: get("SILAE_CLIENT_SECRET"),
    subscriptionKey: get("SILAE_SUBSCRIPTION_KEY"),
    dossierDefaut: get("SILAE_DOSSIER_DEFAUT"),
    mode: ["lecture", "ecriture", "complet"].includes(mode) ? mode : "lecture",
    modele: get("SILAE_MODELE"),
    environnement: get("SILAE_ENVIRONNEMENT") || "non précisé",
    baseUrl: get("SILAE_BASE_URL").replace(/\/$/, ""),
    authUrl: get("SILAE_AUTH_URL"),
    scope: get("SILAE_SCOPE"),
    sortie: get("SILAE_DOSSIER_SORTIE") || path.join(os.homedir(), "Documents", "Silae"),
    dataDir,
  };
}

export function missingConfig(cfg) {
  const miss = [];
  if (!cfg.clientId) miss.push("Client ID (SILAE_CLIENT_ID)");
  if (!cfg.clientSecret) miss.push("Client Secret (SILAE_CLIENT_SECRET)");
  if (!cfg.subscriptionKey) miss.push("Clé de configuration d'accès API (SILAE_SUBSCRIPTION_KEY)");
  return miss;
}

export class SilaeError extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
  }
}

export function findFunction(name) {
  if (!name) return null;
  const n = String(name).trim().replace(/^\/?v1\/[^/]+\//i, "").toLowerCase();
  return byName.get(n) || null;
}

const SYNONYMES = { dpae: "due", conge: "repos", cp: "repos", rtt: "repos", embauche: "creationsalarie", salarie: "salarie", maladie: "absence", arret: "absence", bulletins: "bulletin", fiche: "fiche", ecriture: "ecritures", compta: "comptable" };

export function search({ requete = "", categorie, acces, modele, limite = 40 } = {}) {
  const norm = (s) => (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const STOP = new Set(["de", "des", "du", "la", "le", "les", "un", "une", "et", "ou", "a", "au", "aux", "en", "pour", "sur", "par", "d", "l"]);
  const words = norm(requete)
    .split(/[^a-z0-9]+/)
    .filter((w) => w && !STOP.has(w))
    .map((w) => (w.length > 4 ? w.replace(/(es|s|x)$/, "") : w))
    .map((w) => SYNONYMES[w] || w);
  const needed = Math.max(1, Math.ceil(words.length / 2));
  const scored = [];
  for (const f of catalog.fonctions) {
    if (categorie && norm(f.categorie) !== norm(categorie)) continue;
    if (acces && f.acces !== acces) continue;
    if (modele && !f.modeles.includes(modele)) continue;
    const hayName = norm(f.nom);
    const hay = `${hayName} ${norm(f.categorie)} ${norm(f.description)}`;
    let score = 0;
    let hits = 0;
    for (const w of words) {
      if (hayName.includes(w)) (score += 3), hits++;
      else if (hay.includes(w)) (score += 1), hits++;
    }
    if (words.length && hits < needed) continue;
    if (/^Statut/.test(f.nom)) score -= 0.5;
    scored.push([score + hits * 2, f]);
  }
  scored.sort((a, b) => b[0] - a[0] || a[1].nom.localeCompare(b[1].nom));
  return { total: scored.length, resultats: scored.slice(0, limite).map(([, f]) => summary(f)) };
}

export function summary(f) {
  return {
    nom: f.nom,
    categorie: f.categorie,
    acces: f.acces,
    modeles: f.modeles,
    description: (f.description || "").split("\n")[0].slice(0, 220),
  };
}

export function categories() {
  const m = {};
  for (const f of catalog.fonctions) {
    m[f.categorie] ??= { lecture: 0, ecriture: 0, critique: 0 };
    m[f.categorie][f.acces]++;
  }
  return m;
}

// ---------- Garde-fous ----------
export function checkAccess(f, cfg, confirmer) {
  if (f.acces === "lecture") return;
  if (cfg.mode === "lecture")
    throw new SilaeError(
      `${f.nom} modifie des données Silae (${f.acces}). Le plugin est en mode lecture seule. Pour autoriser l'écriture, passer le réglage "mode_acces" du plugin à "ecriture"${f.acces === "critique" ? ' ou "complet"' : ""} via /plugin.`
    );
  if (f.acces === "critique" && cfg.mode !== "complet")
    throw new SilaeError(
      `${f.nom} est une opération critique (déclaration, paramétrage du dossier, droits, banque ou cumuls). Elle exige le mode "complet".`
    );
  if (confirmer !== true)
    throw new SilaeError(
      `${f.nom} modifie des données Silae. Montrer d'abord à l'utilisateur exactement ce qui va être envoyé, obtenir son accord explicite, puis rappeler avec confirmer=true.`
    );
}

// ---------- Jeton ----------
let tokenCache = null;
export async function getToken(cfg, force = false) {
  const miss = missingConfig(cfg);
  if (miss.length) throw new SilaeError(`Configuration incomplète : ${miss.join(", ")}. Renseigner ces valeurs via /plugin (réglages du plugin silae-paie) ou dans ~/.silae.env.`);
  const now = Date.now() / 1000;
  if (!force && tokenCache && tokenCache.clientId === cfg.clientId && tokenCache.exp - 300 > now) return tokenCache.token;
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: cfg.clientId,
    client_secret: cfg.clientSecret,
    scope: cfg.scope,
  });
  const r = await fetch(cfg.authUrl, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token)
    throw new SilaeError(`Authentification Silae refusée (${r.status}) : ${j.error || ""} ${j.error_description || ""}`.trim(), j);
  tokenCache = { token: j.access_token, exp: Number(j.expires_on) || now + Number(j.expires_in || 3600), clientId: cfg.clientId };
  return tokenCache.token;
}

export function maintenanceWarning(d = new Date()) {
  const h = Number(new Intl.DateTimeFormat("fr-FR", { hour: "numeric", hourCycle: "h23", timeZone: "Europe/Paris" }).format(d));
  return h >= 1 && h < 5 ? "Attention : Silae met à jour ses plateformes entre 1 h et 5 h (heure de Paris), des erreurs sont possibles sur ce créneau." : null;
}

// ---------- Appel ----------
export async function call(cfg, f, { corps, dossier, query, confirmer } = {}) {
  checkAccess(f, cfg, confirmer);
  let body = corps && typeof corps === "object" ? structuredClone(corps) : corps;
  const numero = dossier || (body && typeof body === "object" && body.numeroDossier) || cfg.dossierDefaut || "";
  const wantsNumero = f.corps && typeof f.corps === "object" && Object.keys(f.corps).some((k) => k.replace("*", "") === "numeroDossier");
  if (f.methode === "POST") {
    body ??= {};
    if (wantsNumero && typeof body === "object" && !body.numeroDossier && numero) body.numeroDossier = numero;
  }
  const url = new URL(cfg.baseUrl + f.chemin);
  for (const [k, v] of Object.entries(query || {})) if (v !== undefined && v !== null) url.searchParams.set(k, String(v));

  const send = async (force) => {
    const headers = {
      Authorization: `Bearer ${await getToken(cfg, force)}`,
      "Ocp-Apim-Subscription-Key": cfg.subscriptionKey,
      Accept: "application/json",
      dossiers: numero,
    };
    const init = { method: f.methode, headers };
    if (f.methode !== "GET") {
      headers["Content-Type"] = "application/json";
      init.body = JSON.stringify(body ?? {});
    }
    return fetch(url, init);
  };
  let r = await send(false);
  if (r.status === 401) r = await send(true);
  const text = await r.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (f.acces !== "lecture") journal(cfg, { fonction: f.nom, dossier: numero, corps: body, statut: r.status, reponse: r.ok ? data : undefined, erreur: r.ok ? undefined : data });
  if (!r.ok) throw new SilaeError(`Silae a répondu ${r.status} sur ${f.nom}${explainError(data)}`, data);
  return { data, dossier: numero, statutHttp: r.status };
}

function explainError(data) {
  const errs = data?.errors || data?.Errors;
  if (!Array.isArray(errs)) return typeof data === "string" && data ? ` : ${data.slice(0, 500)}` : "";
  const hints = {
    1001: "problème de communication (en-têtes ou corps vide)",
    1011: "numéro de dossier absent, ou dossier non inclus dans la configuration d'accès API (après ajout, attendre quelques minutes puis regénérer un jeton)",
    1016: "numéro de dossier avec espace ou accent",
  };
  return " : " + errs.map((e) => `[${e.code}] ${e.message}${hints[e.code] ? ` (${hints[e.code]})` : ""}`).join(" ; ");
}

// ---------- Asynchrone ----------
const DONE = /termin|fini|succes|success|complet|ok$/i;
const FAIL = /erreur|error|echec|échec|fail|annul/i;
export async function callAsync(cfg, f, opts = {}, { delaiMaxS = 300, intervalleS = 3 } = {}) {
  let launch = f;
  if (!f.statut && f.asynchrone) launch = findFunction(f.asynchrone);
  if (!launch?.statut) throw new SilaeError(`${f.nom} n'a pas de version asynchrone. Utiliser silae_appeler.`);
  const statutFn = findFunction(launch.statut);
  const { data, dossier } = await call(cfg, launch, opts);
  const guid = typeof data === "string" ? data : data?.guidTache || data?.idTache || data?.identifiantTache || data?.guid || Object.values(data || {}).find((v) => typeof v === "string" && /^[0-9a-f-]{32,36}$/i.test(v));
  if (!guid) throw new SilaeError(`Identifiant de tâche introuvable dans la réponse de ${launch.nom}.`, data);
  const t0 = Date.now();
  for (;;) {
    await new Promise((r) => setTimeout(r, intervalleS * 1000));
    const st = await call(cfg, statutFn, { dossier, query: { guidTache: guid } });
    const s = st.data || {};
    const statut = String(s.statut ?? "");
    if (s.messageErreur || FAIL.test(statut)) throw new SilaeError(`Tâche ${launch.nom} en erreur : ${s.messageErreur || statut}`, s);
    const hasPayload = Object.entries(s).some(([k, v]) => !["statut", "messageErreur", "progression", "dureeExecution"].includes(k) && v != null && !(Array.isArray(v) && !v.length));
    if (DONE.test(statut) || (Number(s.progression) >= 100 && hasPayload) || (!statut && hasPayload)) return { data: s, dossier, guidTache: guid, fonction: launch.nom };
    if ((Date.now() - t0) / 1000 > delaiMaxS)
      return { data: s, dossier, guidTache: guid, fonction: launch.nom, enCours: true, message: `Toujours en cours après ${delaiMaxS} s. Relancer ${statutFn.nom} avec guidTache=${guid}.` };
  }
}

// ---------- Fichiers et réponses volumineuses ----------
function sniffExt(buf) {
  if (buf.subarray(0, 4).toString() === "%PDF") return "pdf";
  if (buf[0] === 0x50 && buf[1] === 0x4b) return buf.includes(Buffer.from("xl/")) ? "xlsx" : "zip";
  if (buf[0] === 0xd0 && buf[1] === 0xcf) return "xls";
  if (buf.subarray(0, 5).toString() === "<?xml") return "xml";
  return "bin";
}

export function extractFiles(cfg, f, data, { prefixe } = {}) {
  const saved = [];
  const dir = cfg.sortie;
  const stamp = new Date().toISOString().replace(/[:T]/g, "-").slice(0, 19);
  const keys = new Set([...(f.champsFichier || []), "document", "fichier", "contenu", "image"]);
  const walk = (node, trail) => {
    if (Array.isArray(node)) return node.map((v, i) => walk(v, `${trail}-${i + 1}`));
    if (!node || typeof node !== "object") return node;
    for (const [k, v] of Object.entries(node)) {
      if (typeof v === "string" && v.length > 200 && (keys.has(k) || v.length > 5000) && /^[A-Za-z0-9+/=\r\n]+$/.test(v.slice(0, 2000))) {
        const buf = Buffer.from(v, "base64");
        if (buf.length < 64) continue;
        fs.mkdirSync(dir, { recursive: true });
        const file = path.join(dir, `${prefixe || f.nom}${trail}-${k}-${stamp}.${sniffExt(buf)}`);
        fs.writeFileSync(file, buf);
        saved.push(file);
        node[k] = `[fichier enregistré : ${file}]`;
      } else node[k] = walk(v, trail);
    }
    return node;
  };
  const cleaned = walk(data, "");
  return { data: cleaned, fichiers: saved };
}

export function formatResult(cfg, f, result, maxChars = 60000) {
  const { data, fichiers } = extractFiles(cfg, f, result.data);
  const payload = { fonction: f.nom, dossier: result.dossier || undefined, ...(result.guidTache ? { guidTache: result.guidTache } : {}), ...(result.enCours ? { enCours: true, message: result.message } : {}), fichiers: fichiers.length ? fichiers : undefined, resultat: data };
  let text = JSON.stringify(payload, null, 1);
  if (text.length > maxChars) {
    fs.mkdirSync(cfg.sortie, { recursive: true });
    const file = path.join(cfg.sortie, `${f.nom}-${Date.now()}.json`);
    fs.writeFileSync(file, JSON.stringify(payload, null, 2));
    text = JSON.stringify({ fonction: f.nom, tronque: true, fichierComplet: file, taille: text.length, apercu: text.slice(0, 8000) }, null, 1);
  }
  return text;
}

// ---------- Journal des écritures ----------
export function journal(cfg, entry) {
  try {
    fs.mkdirSync(cfg.dataDir, { recursive: true });
    fs.appendFileSync(path.join(cfg.dataDir, "journal-ecritures.jsonl"), JSON.stringify({ date: new Date().toISOString(), ...entry }) + "\n");
  } catch {}
}

export function readJournal(cfg, n = 50) {
  const file = path.join(cfg.dataDir, "journal-ecritures.jsonl");
  if (!fs.existsSync(file)) return { fichier: file, lignes: [] };
  const lines = fs.readFileSync(file, "utf8").trim().split("\n").filter(Boolean);
  return { fichier: file, total: lines.length, lignes: lines.slice(-n).map((l) => JSON.parse(l)) };
}

export function describe(f) {
  return {
    nom: f.nom,
    categorie: f.categorie,
    methode: f.methode,
    chemin: f.chemin,
    acces: f.acces,
    modeles: f.modeles.length ? f.modeles : "non listée dans les périmètres publiés (modèle à vérifier auprès de Silae)",
    groupe: f.groupe,
    description: f.description || "(pas de fiche détaillée dans la documentation)",
    corpsAttendu: f.corps,
    parametresUrl: f.query.length ? f.query : undefined,
    aideParametres: Object.keys(f.aideParametres || {}).length ? f.aideParametres : undefined,
    exemple: f.exemple,
    reponse: f.reponse,
    erreursConnues: f.erreurs?.length ? f.erreurs : undefined,
    versionAsynchrone: f.asynchrone,
    statutAsynchrone: f.statut,
    versionSynchrone: f.synchrone,
    documentation: f.doc,
    note: "Les champs suffixés * sont obligatoires. Périodes au format AAAA-MM-JJT00:00:00 (seuls mois et année comptent pour PeriodeDebut/PeriodeFin).",
  };
}
