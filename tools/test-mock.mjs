#!/usr/bin/env node
// Test de bout en bout du connecteur contre un faux serveur Silae local (auth, appels, fichiers, asynchrone, lot, journal).
import http from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "plugins", "silae-paie");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "silae-test-"));
const pdf = Buffer.from("%PDF-1.4\n" + "x".repeat(500)).toString("base64");
const seen = [];
let polls = 0;

const server = http.createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    const send = (code, obj) => {
      res.writeHead(code, { "Content-Type": "application/json" });
      res.end(typeof obj === "string" ? obj : JSON.stringify(obj));
    };
    if (req.url.startsWith("/token")) return send(200, { access_token: "tok", expires_in: 3600 });
    seen.push({ url: req.url, auth: req.headers.authorization, key: req.headers["ocp-apim-subscription-key"], dossiers: req.headers.dossiers, body });
    if (req.headers.authorization !== "Bearer tok") return send(401, { errors: [{ code: "401", message: "no" }] });
    if (req.url.includes("ListeDossiers")) return send(200, { listeDossiers: [{ numero: "D1", raisonSociale: "Test" }] });
    if (req.url.endsWith("EditionJournalDePaie")) return send(200, { document: pdf });
    if (req.url.endsWith("EditionJournalDePaieAsynchrone")) return send(200, JSON.stringify("3f2b7c1e-1111-2222-3333-444455556666"));
    if (req.url.includes("StatutEditionJournalDePaieAsynchrone")) {
      polls++;
      return send(200, polls < 2 ? { statut: "EnCours", progression: 40 } : { statut: "Termine", progression: 100, document: pdf });
    }
    if (req.url.includes("SalarieAjouterHeures")) {
      const b = JSON.parse(body);
      if (b.matriculeSalarie === "BAD") return send(400, { errors: [{ code: "1011", message: "la valeur de la liste de dossiers est nulle ou vide" }] });
      return send(200, "");
    }
    send(404, { errors: [{ code: "404", message: "inconnu" }] });
  });
});

await new Promise((r) => server.listen(0, r));
const port = server.address().port;
const env = {
  ...process.env,
  SILAE_CLIENT_ID: "id",
  SILAE_CLIENT_SECRET: "secret",
  SILAE_SUBSCRIPTION_KEY: "key",
  SILAE_DOSSIER_DEFAUT: "D1",
  SILAE_MODE: "ecriture",
  SILAE_AUTH_URL: `http://127.0.0.1:${port}/token`,
  SILAE_BASE_URL: `http://127.0.0.1:${port}/payroll`,
  SILAE_DOSSIER_SORTIE: path.join(tmp, "sortie"),
  CLAUDE_PLUGIN_DATA: path.join(tmp, "data"),
};
const child = spawn("node", [path.join(root, "mcp", "server.mjs")], { env });
let buf = "";
const pending = new Map();
child.stdout.on("data", (d) => {
  buf += d;
  let i;
  while ((i = buf.indexOf("\n")) >= 0) {
    const m = JSON.parse(buf.slice(0, i));
    buf = buf.slice(i + 1);
    pending.get(m.id)?.(m);
  }
});
let id = 0;
const rpc = (method, params) =>
  new Promise((r) => {
    pending.set(++id, r);
    child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
  });
const tool = async (name, args) => {
  const m = await rpc("tools/call", { name, arguments: args });
  return { err: !!m.result.isError, text: m.result.content[0].text };
};

let fails = 0;
const check = (label, cond, extra = "") => {
  console.log(`${cond ? "OK  " : "FAIL"} ${label}${cond ? "" : " " + extra}`);
  if (!cond) fails++;
};

await rpc("initialize", { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "t", version: "1" } });
let r = await tool("silae_appeler", { fonction: "ListeDossiers" });
check("lecture ListeDossiers", !r.err && r.text.includes("D1"), r.text);
check("en-têtes envoyés", seen[0]?.key === "key" && seen[0]?.dossiers === "D1" && seen[0]?.auth === "Bearer tok", JSON.stringify(seen[0]));

r = await tool("silae_appeler", { fonction: "EditionJournalDePaie", corps: { format: "Pdf", periodeDebut: "2026-10-01T00:00:00", periodeFin: "2026-10-01T00:00:00" } });
const file = (r.text.match(/"(\/[^"]+\.pdf)"/) || [])[1];
check("PDF enregistré sur disque", !!file && fs.existsSync(file) && fs.readFileSync(file).subarray(0, 4).toString() === "%PDF", r.text.slice(0, 400));
check("numeroDossier injecté", JSON.parse(seen.at(-1).body).numeroDossier === "D1");

r = await tool("silae_appeler_asynchrone", { fonction: "EditionJournalDePaie", corps: { format: "Pdf" } });
check("asynchrone avec attente du statut", !r.err && /\.pdf/.test(r.text) && polls >= 2, r.text.slice(0, 400));

r = await tool("silae_appeler", { fonction: "SalarieAjouterHeures", corps: { matriculeSalarie: "1" } });
check("écriture refusée sans confirmer", r.err && /confirmer=true/.test(r.text));

r = await tool("silae_appeler_lot", {
  fonction: "SalarieAjouterHeures",
  confirmer: true,
  lignes: [
    { matriculeSalarie: "1", heures: { periodeHeures: "2026-11-01T00:00:00", codeHeures: "HS25", nombreHeures: 2, ajouter: false } },
    { matriculeSalarie: "BAD", heures: { periodeHeures: "2026-11-01T00:00:00", codeHeures: "HS25", nombreHeures: 1, ajouter: false } },
    { matriculeSalarie: "3", heures: { periodeHeures: "2026-11-01T00:00:00", codeHeures: "HS50", nombreHeures: 3, ajouter: false } },
  ],
});
const lot = JSON.parse(r.text);
check("lot : 2 réussies, 1 échec expliqué", lot.reussies === 2 && lot.echecs === 1 && /1011/.test(JSON.stringify(lot.details)), r.text.slice(0, 500));

r = await tool("silae_appeler", { fonction: "SalarieDUE", confirmer: true });
check("opération critique refusée en mode ecriture", r.err && /complet/.test(r.text));

r = await tool("silae_journal", {});
check("journal des écritures", JSON.parse(r.text).lignes.length === 3, r.text.slice(0, 300));

r = await tool("silae_appeler", { fonction: "ListeDosier" });
check("suggestion sur faute de frappe", r.err && r.text.includes("ListeDossiers"), r.text);

child.kill();
server.close();
fs.rmSync(tmp, { recursive: true, force: true });
console.log(fails ? `${fails} échec(s)` : "Tous les tests passent");
process.exit(fails ? 1 : 0);
