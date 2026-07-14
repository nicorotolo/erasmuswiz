#!/usr/bin/env node
// Orchestratore unattended Gemini T1 -> Codex T2 -> merge -> pubblicazione.
// Un'invocazione tratta UN solo batch. Usa --preflight per controllare
// l'ambiente senza modificare file, chiamare modelli o pubblicare.

import { spawnSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const PREFLIGHT = process.argv.includes("--preflight");
const PREFLIGHT_ONLINE = process.argv.includes("--online");
const PREFLIGHT_CODEX = process.argv.includes("--codex-smoke");
const MODEL = process.env.GEMINI_MODEL || "gemini-3.5-flash";
const LOCK_PATH = path.join(
  os.tmpdir(),
  `erasmuswiz-mappatura-${crypto.createHash("sha256").update(ROOT.toLowerCase()).digest("hex").slice(0, 16)}.lock`,
);
const LOCK_TOKEN = crypto.randomUUID();
let lockPosseduto = false;
let codexRisolto;

function esegui(programma, args = [], { cattura = false, input, timeout = 20 * 60_000 } = {}) {
  console.log(`\n$ ${programma} ${args.join(" ")}`);
  const risultato = spawnSync(programma, args, {
    cwd: ROOT,
    encoding: "utf8",
    input,
    timeout,
    windowsHide: true,
    stdio: cattura ? [input == null ? "ignore" : "pipe", "pipe", "pipe"] : [input == null ? "ignore" : "pipe", "inherit", "inherit"],
  });
  if (risultato.error) throw risultato.error;
  if (risultato.status !== 0) {
    const dettaglio = `${risultato.stderr || ""}\n${risultato.stdout || ""}`.trim();
    const coda = dettaglio ? `\n${dettaglio.slice(-2000)}` : "";
    const errore = new Error(`${programma} terminato con exit code ${risultato.status ?? "n/d"}${coda}`);
    errore.status = risultato.status;
    errore.stdout = risultato.stdout || "";
    errore.stderr = risultato.stderr || "";
    throw errore;
  }
  return (risultato.stdout || "").trim();
}

function risolviCodex() {
  if (codexRisolto) return codexRisolto;
  if (process.env.CODEX_BIN) {
    codexRisolto = { programma: process.env.CODEX_BIN, prefisso: [] };
    return codexRisolto;
  }
  if (process.platform !== "win32") {
    codexRisolto = { programma: "codex", prefisso: [] };
    return codexRisolto;
  }

  const ricerca = spawnSync("where.exe", ["codex"], { encoding: "utf8", windowsHide: true });
  const candidati = (ricerca.stdout || "").split(/\r?\n/).map((p) => p.trim()).filter(Boolean);
  for (const candidato of candidati.filter((p) => p.toLowerCase().endsWith(".cmd"))) {
    const dir = path.dirname(candidato);
    const cliJs = path.join(dir, "node_modules", "@openai", "codex", "bin", "codex.js");
    if (!fs.existsSync(cliJs)) continue;
    const nodeLocale = path.join(dir, "node.exe");
    codexRisolto = {
      programma: fs.existsSync(nodeLocale) ? nodeLocale : process.execPath,
      prefisso: [cliJs],
    };
    return codexRisolto;
  }
  throw new Error("Codex CLI non trovata. Installa la CLI o imposta CODEX_BIN con il percorso dell'eseguibile.");
}

function eseguiCodex(args, opzioni = {}) {
  const codex = risolviCodex();
  return esegui(codex.programma, [...codex.prefisso, ...args], opzioni);
}

function processoVivo(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try { process.kill(pid, 0); return true; }
  catch (errore) { return errore?.code === "EPERM"; }
}

function acquisisciLock() {
  const prova = () => {
    const fd = fs.openSync(LOCK_PATH, "wx");
    fs.writeFileSync(fd, JSON.stringify({ pid: process.pid, token: LOCK_TOKEN, root: ROOT, iniziato: new Date().toISOString() }));
    fs.closeSync(fd);
    lockPosseduto = true;
  };
  try { prova(); }
  catch (errore) {
    if (errore.code !== "EEXIST") throw errore;
    let proprietario = {};
    try { proprietario = JSON.parse(fs.readFileSync(LOCK_PATH, "utf8")); } catch {}
    if (processoVivo(proprietario.pid)) {
      console.log(`Un processo locale e' gia' attivo (PID ${proprietario.pid}). Termino senza modifiche.`);
      process.exit(0);
    }
    try { fs.unlinkSync(LOCK_PATH); } catch (unlinkErrore) {
      if (unlinkErrore.code !== "ENOENT") throw unlinkErrore;
    }
    prova();
  }
}

function rilasciaLock() {
  if (!lockPosseduto) return;
  try {
    const proprietario = JSON.parse(fs.readFileSync(LOCK_PATH, "utf8"));
    if (proprietario.token === LOCK_TOKEN) fs.unlinkSync(LOCK_PATH);
  } catch {}
  lockPosseduto = false;
}

process.on("exit", rilasciaLock);
process.on("SIGINT", () => process.exit(130));
process.on("SIGTERM", () => process.exit(143));

function eliminaSeEsiste(file) {
  try { fs.unlinkSync(file); }
  catch (errore) { if (errore.code !== "ENOENT") throw errore; }
}

function pulisciArtefattiEffimeri() {
  for (const file of [
    "batch/OUTPUT.json",
    "batch/SGROSSATURA.json",
    "batch/GEMINI-RAW.txt",
  ]) eliminaSeEsiste(file);
}

async function preflight() {
  console.log("=== Preflight automazione Gemini + Codex (nessuna modifica) ===");
  const script = [
    "scripts/inizia-batch.mjs",
    "scripts/prepara-batch.mjs",
    "scripts/gemini-sgrossatura.mjs",
    "scripts/verifica-link.mjs",
    "scripts/valida-output-batch.mjs",
    "scripts/applica-batch.mjs",
    "scripts/setup-dipartimento.mjs",
    "scripts/valida-stato.mjs",
    "scripts/verifica-pubblicazione.mjs",
  ];
  for (const file of script) esegui(process.execPath, ["--check", file], { cattura: true });
  console.log(`OK sintassi: ${script.length} script.`);
  console.log(`Git: ${esegui("git", ["rev-parse", "--show-toplevel"], { cattura: true })}`);
  const modifiche = esegui("git", ["status", "--short", "--branch"], { cattura: true });
  console.log(modifiche || "Working tree pulito.");
  esegui(process.execPath, ["scripts/valida-stato.mjs"]);
  console.log(eseguiCodex(["--version"], { cattura: true }));
  eseguiCodex(["login", "status"]);
  console.log("Codex login: OK.");
  if (PREFLIGHT_CODEX) {
    const risposta = eseguiCodex([
      "exec", "--sandbox", "read-only", "--ephemeral",
      "-c", 'approval_policy="never"', "-",
    ], { cattura: true, input: "Rispondi soltanto con: CODEX_SMOKE_OK", timeout: 5 * 60_000 });
    if (!risposta.includes("CODEX_SMOKE_OK")) throw new Error("Codex smoke test: risposta inattesa");
    console.log("Codex exec: smoke test OK.");
  } else console.log("Codex exec non invocato; aggiungi --codex-smoke per il test minimo.");
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY assente nell'ambiente di questo processo.");
  console.log("GEMINI_API_KEY: presente (valore non mostrato).");

  const stato = JSON.parse(fs.readFileSync("mappatura-stato.json", "utf8"));
  const primo = stato.prossimiBatch?.[0];
  if (primo) {
    const file = primo.fileJs || stato.statoDipartimenti?.[primo.dipartimento]?.fileJs;
    console.log(`Primo batch: ${primo.id} | tipo=${primo.tipo || "standard"} | file=${file || "n/d"} | esiste=${file ? fs.existsSync(file) : false}`);
  } else console.log("Coda vuota: nessun batch pendente.");

  if (PREFLIGHT_ONLINE) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20_000);
    try {
      const risposta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}`, {
        headers: { "x-goog-api-key": process.env.GEMINI_API_KEY },
        signal: controller.signal,
      });
      if (!risposta.ok) throw new Error(`Probe Gemini HTTP ${risposta.status}`);
      const dati = await risposta.json();
      if (!(dati.supportedGenerationMethods || []).includes("generateContent")) throw new Error(`${MODEL} non espone generateContent`);
      console.log(`Gemini: ${dati.displayName || MODEL}, generateContent disponibile.`);
    } finally { clearTimeout(timeout); }
  } else console.log("Probe Gemini non eseguito; aggiungi --online per verificarlo senza generare contenuti.");
  console.log("=== PREFLIGHT OK ===");
}

function percorsiModificati() {
  const raw = esegui("git", ["status", "--porcelain=v1", "-z"], { cattura: true });
  if (!raw) return [];
  const record = raw.split("\0").filter(Boolean);
  const percorsi = [];
  for (let i = 0; i < record.length; i++) {
    const separatore = record[i][2] === " " ? 3 : 2;
    const stato = record[i].slice(0, separatore - 1);
    let file = record[i].slice(separatore);
    if (stato.includes("R") || stato.includes("C")) file = record[++i] || file;
    percorsi.push(file.replace(/\\/g, "/"));
  }
  return [...new Set(percorsi)];
}

function percorsoConsentito(file, batchId, setup) {
  if (file === "mappatura-stato.json") return true;
  if (/^js\/atenei\/.+\.js$/i.test(file)) return true;
  return !setup && file === `batch/FONTI-${batchId}.json`;
}

function timestampBranch() {
  return new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
}

function pubblica(input, { setup = false } = {}) {
  const modificati = percorsiModificati();
  if (!modificati.length) throw new Error("Nessuna modifica da pubblicare.");
  const vietati = modificati.filter((file) => !percorsoConsentito(file, input.batchId, setup));
  if (vietati.length) throw new Error(`File fuori scope dopo il batch: ${vietati.join(", ")}`);
  if (!modificati.includes("mappatura-stato.json")) throw new Error("mappatura-stato.json non e' stato aggiornato.");

  esegui("git", ["add", "--", ...modificati]);
  const staged = esegui("git", ["diff", "--cached", "--name-only", "-z"], { cattura: true })
    .split("\0").filter(Boolean).map((p) => p.replace(/\\/g, "/"));
  const stagedVietati = staged.filter((file) => !percorsoConsentito(file, input.batchId, setup));
  if (stagedVietati.length) throw new Error(`File staged fuori scope: ${stagedVietati.join(", ")}`);

  const branch = `mappatura/lotto-${timestampBranch()}`;
  esegui("git", ["switch", "-c", branch]);
  const descrizione = setup ? `setup ${input.dipartimento}` : `batch Gemini+Codex ${input.batchId}`;
  esegui("git", ["commit", "-m", `mete: ${descrizione} - ${new Date().toISOString().slice(0, 10)}`]);
  esegui("git", ["push", "origin", branch]);
  esegui(process.execPath, ["scripts/verifica-pubblicazione.mjs", branch], { timeout: 25 * 60_000 });
  console.log(`\n=== Lotto ${input.batchId} pubblicato con successo (branch ${branch}). ===`);
}

async function main() {
  if (PREFLIGHT) return preflight();
  acquisisciLock();
  pulisciArtefattiEffimeri();
  console.log(`=== Lotto automatico avviato: ${new Date().toISOString()} ===`);

  const inizia = spawnSync(process.execPath, ["scripts/inizia-batch.mjs"], { cwd: ROOT, stdio: "inherit", windowsHide: true });
  if (inizia.error) throw inizia.error;
  if (inizia.status === 3) return console.log("Un altro lotto remoto e' in corso. Termino senza modifiche.");
  if (inizia.status === 2) return console.log("Nessun batch pendente. Mappatura completata per ora.");
  if (inizia.status !== 0) throw new Error(`inizia-batch.mjs ha fallito con exit code ${inizia.status}`);
  if (!fs.existsSync("batch/INPUT.json")) throw new Error("batch/INPUT.json non trovato dopo inizia-batch.mjs");

  const input = JSON.parse(fs.readFileSync("batch/INPUT.json", "utf8"));
  if (input.tipo === "nuovo_dipartimento") {
    if (!input.fileGiaCreato || !input.fileJs || !fs.existsSync(input.fileJs)) {
      throw new Error(`Seed umano mancante per ${input.dipartimento}: ${input.fileJs || "fileJs non indicato"}`);
    }
    esegui(process.execPath, ["scripts/setup-dipartimento.mjs"]);
    esegui(process.execPath, ["scripts/valida-stato.mjs"]);
    pubblica(input, { setup: true });
    return;
  }

  esegui(process.execPath, ["scripts/gemini-sgrossatura.mjs"], { timeout: 5 * 60_000 });
  esegui(process.execPath, ["scripts/verifica-link.mjs"], { timeout: 5 * 60_000 });
  eliminaSeEsiste("batch/OUTPUT.json");

  const prompt = fs.readFileSync("automazioni/PROMPT_CODEX_verifica.md", "utf8");
  const istruzione = [
    "Lavora esclusivamente come verificatore del batch corrente.",
    "Leggi batch/INPUT.json e batch/SGROSSATURA.json nella cartella di lavoro.",
    "Segui tutte le istruzioni seguenti e scrivi batch/OUTPUT.json.",
    "Non modificare nessun altro file e non eseguire merge, commit o push.",
    "",
    prompt,
  ].join("\n");
  eseguiCodex([
    "--search", "exec",
    "--sandbox", "workspace-write",
    "--ephemeral",
    "-c", 'approval_policy="never"',
    "-c", "sandbox_workspace_write.network_access=true",
    "-",
  ], { input: istruzione, timeout: 30 * 60_000 });

  if (!fs.existsSync("batch/OUTPUT.json")) throw new Error("Codex non ha scritto batch/OUTPUT.json");
  esegui(process.execPath, ["scripts/valida-output-batch.mjs"]);
  esegui(process.execPath, ["scripts/applica-batch.mjs"]);
  esegui(process.execPath, ["scripts/valida-stato.mjs"]);
  pubblica(input);
}

main().catch((errore) => {
  console.error(`\nERRORE: ${errore.message}`);
  process.exitCode = 1;
});
