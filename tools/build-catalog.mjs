#!/usr/bin/env node
// Génère plugins/silae-paie/data/catalog.json à partir de la spec OpenAPI Silae,
// de la collection Postman officielle et des fiches de la documentation (tools/sources/docs).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, "sources");
const out = path.join(here, "..", "plugins", "silae-paie", "data", "catalog.json");

const spec = JSON.parse(fs.readFileSync(path.join(src, "openapi.json"), "utf8"));
const postman = JSON.parse(fs.readFileSync(path.join(src, "postman.json"), "utf8").replace(/^\uFEFF/, ""));
const docsDir = path.join(src, "docs");
const DOC_BASE = "https://silae-api.document360.io/docs/";

// ---------- Fiches de documentation ----------
const docs = new Map();
if (fs.existsSync(docsDir)) {
  for (const f of fs.readdirSync(docsDir)) {
    if (!f.endsWith(".md")) continue;
    const txt = fs.readFileSync(path.join(docsDir, f), "utf8");
    if (!/^title:/m.test(txt)) continue;
    docs.set(f.replace(/\.md$/, "").toLowerCase(), txt);
  }
}

const clean = (s) =>
  s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .replace(/\*\*\*?|__/g, "")
    .replace(/^> .*$/gm, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

function section(txt, title) {
  const re = new RegExp(`^##\\s+${title}[^\\n]*\\n([\\s\\S]*?)(?=^##\\s|$(?![\\s\\S]))`, "mi");
  const m = txt.match(re);
  return m ? m[1] : "";
}

function parseDoc(txt) {
  const description = clean(section(txt, "Description")).replace(/^---\s*$/gm, "").trim();
  const groupe = (clean(section(txt, "Groupe de fonctions API")).match(/[A-Z]+\d+/) || [])[0] || null;
  const params = {};
  for (const line of txt.split("\n")) {
    const m = line.match(/^\|\s*([A-Za-z_][\w]*)\s*\|\s*([^|]*)\|\s*(.*)\|\s*$/);
    if (!m || /^(Paramètre|Erreur|Champs?)$/i.test(m[1])) continue;
    const desc = clean(m[3]).replace(/\s+/g, " ");
    if (desc && !params[m[1].toLowerCase()]) params[m[1].toLowerCase()] = desc.slice(0, 400);
  }
  const erreurs = [];
  for (const line of section(txt, "Messages d'erreur").split("\n")) {
    const m = line.match(/^\|[^|]*\|\s*"?([^|"]{8,})"?\s*\|\s*([^|]*)\|/);
    if (m && !/^(Message|---)/.test(m[1].trim())) erreurs.push(clean(m[1]).slice(0, 300));
  }
  return { description, groupe, params, erreurs };
}

// ---------- Périmètres par modèle (fiches de périmètre) ----------
function listFrom(slug) {
  const txt = docs.get(slug);
  if (!txt) return null;
  return new Set([...txt.matchAll(/^\s*-\s+([A-Z][A-Za-z0-9]+)\s*$/gm)].map((m) => m[1]));
}
const p1A = listFrom("api-usage-interne-paie");
const p1Bplus = listFrom("api-usage-interne-rh");
const p2 = listFrom("api-mise-a-disposition-modele-2");
const p4 = listFrom("api-ecritures-comptables");

// ---------- Exemples Postman ----------
const examples = new Map();
(function walk(items) {
  for (const it of items) {
    if (it.item) walk(it.item);
    else if (it.request) {
      const name = (it.request.url?.path || []).slice(-1)[0] || it.name;
      const raw = it.request.body?.raw;
      if (!raw) continue;
      let ex;
      try {
        ex = JSON.parse(raw);
      } catch {
        ex = raw;
      }
      examples.set(name, ex);
    }
  }
})(postman.item);

// ---------- Schémas ----------
const defs = spec.definitions || {};
function compact(schema, depth = 0, seen = new Set()) {
  if (!schema) return "any";
  if (schema.$ref) {
    const name = schema.$ref.split("/").pop();
    if (seen.has(name) || depth > 6) return `<${name}>`;
    return compact(defs[name], depth, new Set([...seen, name]));
  }
  if (schema.enum) return `enum(${schema.enum.join("|")})`;
  if (schema.type === "array") return [compact(schema.items, depth + 1, seen)];
  if (schema.type === "object" || schema.properties) {
    const req = new Set(schema.required || []);
    const o = {};
    for (const [k, v] of Object.entries(schema.properties || {})) o[req.has(k) ? `${k}*` : k] = compact(v, depth + 1, seen);
    return o;
  }
  return schema.format ? `${schema.type}(${schema.format})` : schema.type || "any";
}

function byteFields(schema, seen = new Set(), acc = new Set()) {
  if (!schema) return acc;
  if (schema.$ref) {
    const n = schema.$ref.split("/").pop();
    if (seen.has(n)) return acc;
    return byteFields(defs[n], new Set([...seen, n]), acc);
  }
  if (schema.type === "array") return byteFields(schema.items, seen, acc);
  for (const [k, v] of Object.entries(schema.properties || {})) {
    if (v.format === "byte") acc.add(k);
    else byteFields(v, seen, acc);
  }
  return acc;
}

// ---------- Niveau d'accès ----------
const CRITIQUE = new Set([
  "SalarieDUE", "SalariesDUE", "SalarieDUEAsynchrone", "GenererDSNEvenementielleFCTUAsynchrone",
  "ActivationDSN", "CreationEmetteurDSN", "ImportFichierDSN", "CreationDossierParImportFichierDSN",
  "CreationDossierPaie", "ImportXmlParametrageOrganismeDSN", "InitialisationAncienNumeroContratDSN",
  "AjouteCompteRenduEdi", "AjouteCompteRenduEdi94", "GererEtatDossierPaie", "GererEtatRobotDePaie",
  "GererCycleDePaie", "AffecterCleDossier", "ModificationInformationBancaireSociete",
  "CreationCompteCollaborateur", "CreationCompteCollaborateurDepuisModele", "AppliquerModeleCollaborateur",
  "AdministrationCollaborateurEnregistrement", "ModificationDroitsFonctionnelsProductionPaie",
  "AffectationDossierPaie", "CreationConfigurationAccesApi", "CreationUtilisateurClientPaie",
  "SiteGenereMotDePasseAlternatif", "SalarieInitialiserCumuls", "SalarieReinitialiserIdentifiantsEmplois",
  "SalarieReinitialiserIdentifiantsEmploisExternes", "ExtraSalarieCalculerBulletin",
  "SpectacleSalarieCalculerBulletin", "SpectacleSalarieCalculerBulletinAsynchrone",
  "ImportDossierDemoAsynchrone", "ModificationCCNSociete", "ModificationCCNEtablissement",
  "ModificationSaisieArret", "CreationOrganisme",
]);
const LECTURE_PREFIX = /^(Acquisition|Analyse|Lecture|Liste|Recherche|Recuperer|Statut|Edition|Ecritures|Historique|Existence|Matricule|SalarieBulletin|SalariesBulletins|SalariesStockVar|SalarieAbsences|SalarieActiviteJournaliere|SalarieRecuperer|SalarieSalaireDeBase|SalarieSyntheseCarriere|SoldeRepos|DossierRecuperer|EtatDeclarations|ValideCleDossier|Bureautique|ClassificationMetier|SalarieEmploiClassificationMetier|AdministrationCollaborateurLecture|AffectationDossierPaieLecture|Agencies|Domaines|Entites|ExtraListe|SpectacleListe|SpectacleSalarieAcquisition|ExtraSalarieAcquisition|GenerationFichierTR)/;
function acces(name) {
  if (CRITIQUE.has(name)) return "critique";
  if (LECTURE_PREFIX.test(name) && !/^EcritureReponses/.test(name)) return "lecture";
  return "ecriture";
}

// ---------- Assemblage ----------
const ops = [];
for (const [p, methods] of Object.entries(spec.paths)) {
  for (const [method, op] of Object.entries(methods)) {
    const name = op.operationId;
    const body = (op.parameters || []).find((x) => x.in === "body");
    const query = (op.parameters || []).filter((x) => x.in === "query").map((x) => ({ nom: x.name, type: x.type, requis: !!x.required }));
    const resp = op.responses?.["200"]?.schema;
    const doc = docs.get(name.toLowerCase());
    const parsed = doc ? parseDoc(doc) : { description: "", groupe: null, params: {}, erreurs: [] };
    const modeles = [];
    if (p1A?.has(name)) modeles.push("1A", "1B");
    else if (p1Bplus?.has(name)) modeles.push("1B");
    if (p2?.has(name)) modeles.push("2");
    if (p4?.has(name)) modeles.push("4");
    ops.push({
      nom: name,
      methode: method.toUpperCase(),
      chemin: p,
      categorie: (op.tags || [])[0] || "Autre",
      groupe: parsed.groupe,
      acces: acces(name),
      modeles,
      description: parsed.description,
      corps: body ? compact(body.schema) : null,
      query,
      reponse: resp ? compact(resp) : null,
      champsFichier: [...byteFields(resp)],
      exemple: examples.get(name) ?? null,
      aideParametres: parsed.params,
      erreurs: parsed.erreurs,
      doc: doc ? DOC_BASE + name.toLowerCase() : null,
    });
  }
}
const names = new Set(ops.map((o) => o.nom));
for (const o of ops) {
  if (/Asynchrone$/.test(o.nom) && !o.nom.startsWith("Statut")) {
    if (names.has("Statut" + o.nom)) o.statut = "Statut" + o.nom;
    const sync = o.nom.replace(/Asynchrone$/, "");
    if (names.has(sync)) o.synchrone = sync;
  }
  if (!o.statut && names.has(o.nom + "Asynchrone")) o.asynchrone = o.nom + "Asynchrone";
}
ops.sort((a, b) => a.categorie.localeCompare(b.categorie) || a.nom.localeCompare(b.nom));

const catalog = {
  source: "Silae Paie REST API (spec OpenAPI officielle + documentation silae-api.document360.io)",
  versionSpec: spec.info?.version,
  genereLe: new Date().toISOString().slice(0, 10),
  baseUrl: `https://${spec.host}${spec.basePath}`,
  fichesDocumentees: ops.filter((o) => o.doc).length,
  fonctions: ops,
};
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(catalog));
const count = (k) => ops.reduce((m, o) => ((m[o[k]] = (m[o[k]] || 0) + 1), m), {});
console.log(`${ops.length} fonctions, ${catalog.fichesDocumentees} documentées`, count("acces"));
console.log("sans modèle:", ops.filter((o) => !o.modeles.length).map((o) => o.nom).join(" "));
