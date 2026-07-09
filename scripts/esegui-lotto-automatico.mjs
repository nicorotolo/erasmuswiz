// scripts/esegui-lotto-automatico.mjs
// ORCHESTRATORE per il PC dedicato (Task Scheduler). Un solo processo fluido
// per batch, Gemini E Codex incatenati automaticamente:
//
//   inizia-batch (include prepara-batch)
//     -> gemini-sgrossatura        (T1: Gemini cerca, gratis)
//     -> verifica-link             (controllo oggettivo sulle fonti)
//     -> codex exec (T2: Codex verifica/corregge, vedi PROMPT_CODEX_verifica.md)
//     -> applica-batch             (merge deterministico nei file dati)
//     -> valida-stato
//     -> commit + push (branch mappatura/lotto-...)
//     -> verifica-pubblicazione
//
// Se un passo fallisce, si ferma SUBITO e non committa nulla di rotto.
// Sostituisce la vecchia automazione "app Codex ogni 9 minuti": QUELLA va
// disattivata nell'app Codex (Automations) prima di usare questo script,
// altrimenti girerebbero due processi sullo stesso repo in parallelo.
//
// Uso:  node scripts/esegui-lotto-automatico.mjs
// Richiede: variabile d'ambiente GEMINI_API_KEY, e `codex` CLI installato e
// autenticato sul PC dedicato (vedi AUTOMAZIONE_GEMINI.md).

import { execSync } from "node:child_process";
import fs from "node:fs";

function esegui(comando) {
  console.log(`\n$ ${comando}`);
  execSync(comando, { stdio: "inherit", shell: true });
}

function eseguiCatturando(comando) {
  return execSync(comando, { shell: true }).toString();
}

console.log(`=== Lotto automatico avviato: ${new Date().toISOString()} ===`);

// --- STEP 0: sync + prepara batch ---
try {
  esegui("node scripts/inizia-batch.mjs");
} catch (e) {
  const codice = e.status;
  if (codice === 3) { console.log("Un altro run e' gia' in corso. Termino senza fare nulla."); process.exit(0); }
  if (codice === 2) { console.log("Nessun batch pendente in mappatura-stato.json. Mappatura completata (per ora)."); process.exit(0); }
  console.error("inizia-batch.mjs ha fallito. Termino senza commit.");
  process.exit(1);
}

if (!fs.existsSync("batch/INPUT.json")) {
  console.error("batch/INPUT.json non trovato dopo inizia-batch.mjs. Termino.");
  process.exit(1);
}
const input = JSON.parse(fs.readFileSync("batch/INPUT.json", "utf8"));

if (input.tipo === "nuovo_dipartimento") {
  console.log(
    "Batch 'nuovo_dipartimento': serve un intervento umano (creazione del " +
    "fileJs) o Codex in modalita' interattiva, non questo script. Termino " +
    "senza fare nulla (nessun file toccato)."
  );
  process.exit(0);
}

// --- STEP 1 (T1): Gemini cerca ---
try {
  esegui("node scripts/gemini-sgrossatura.mjs");
} catch {
  console.error("gemini-sgrossatura.mjs ha fallito (vedi eventuale batch/GEMINI-RAW.txt). Termino senza commit.");
  process.exit(1);
}

try {
  esegui("node scripts/verifica-link.mjs");
} catch {
  console.error("verifica-link.mjs ha fallito. Termino senza commit.");
  process.exit(1);
}

// --- STEP 2 (T2): Codex verifica la bozza Gemini e scrive OUTPUT.json ---
// codex exec: modalita' non-interattiva della CLI Codex (non l'app con le
// "Automations" a orario). --sandbox workspace-write: puo' leggere/scrivere
// file nella cartella del repo (serve per scrivere batch/OUTPUT.json) ma non
// ha accesso pieno al sistema.
const promptVerifica = fs.readFileSync("automazioni/PROMPT_CODEX_verifica.md", "utf8");
try {
  esegui(
    `codex exec --sandbox workspace-write ` +
    `"Leggi batch/INPUT.json e batch/SGROSSATURA.json in questa cartella. ` +
    `Segui ESATTAMENTE queste istruzioni:\\n\\n${promptVerifica.replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`
  );
} catch {
  console.error("codex exec (verifica) ha fallito. Termino senza commit.");
  process.exit(1);
}

if (!fs.existsSync("batch/OUTPUT.json")) {
  console.error("Codex non ha scritto batch/OUTPUT.json. Termino senza commit.");
  process.exit(1);
}

// --- STEP 3-5: merge, validazione ---
try {
  esegui("node scripts/applica-batch.mjs");
} catch {
  console.error("applica-batch.mjs ha fallito. Termino senza commit (nessun file dati committato).");
  process.exit(1);
}

try {
  esegui("node scripts/valida-stato.mjs");
} catch {
  console.error("valida-stato.mjs ha fallito: stato incoerente. NON committo.");
  process.exit(1);
}

// --- STEP 6-7: commit, push, verifica pubblicazione ---
const timestamp = new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 13);
const branch = `mappatura/lotto-${timestamp}`;
const batchId = input.batchId;

try {
  esegui(`git checkout -b ${branch}`);
  esegui(`git add js/atenei/ mappatura-stato.json "batch/FONTI-${batchId}.json"`);
  esegui(`git commit -m "mete: batch automatico Gemini+Codex - ${new Date().toISOString().slice(0, 10)}"`);
  esegui(`git push origin ${branch}`);
} catch {
  console.error("Commit/push falliti. Controllare lo stato di git a mano sul PC dedicato.");
  process.exit(1);
}

try {
  esegui(`node scripts/verifica-pubblicazione.mjs ${branch}`);
  console.log(`\n=== Lotto ${batchId} pubblicato con successo (branch ${branch}). ===`);
} catch {
  console.error(
    `Lotto ${batchId} NON confermato pubblicato (branch ${branch}). ` +
    "Controllare manualmente la GitHub Action auto-merge / l'eventuale Issue di conflitto."
  );
  process.exit(1);
}
