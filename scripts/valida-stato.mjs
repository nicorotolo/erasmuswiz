#!/usr/bin/env node
// =============================================================
// valida-stato.mjs — Validatore di coerenza per ErasmusWiz
// -------------------------------------------------------------
// Controlla che mappatura-stato.json e i file js/dati-mete*.js
// siano coerenti fra loro. Esce con codice != 0 se trova errori,
// cosi' il workflow puo' bloccare PR incoerenti.
//   Uso:  node scripts/valida-stato.mjs
// =============================================================
import { readFileSync } from "node:fs";

const ROOT = process.cwd();
const errors = [], warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const vuoto = (a) => !Array.isArray(a) || a.length === 0;

let stato;
try { stato = JSON.parse(readFileSync(`${ROOT}/mappatura-stato.json`, "utf8")); }
catch (e) { console.error("✗ mappatura-stato.json non e' JSON valido:", e.message); process.exit(1); }

if (!stato.config) err("manca il blocco 'config'");
else {
  if (typeof stato.config.maxTentativiLingua !== "number") err("config.maxTentativiLingua mancante/non numerico");
  if (typeof stato.config.sogliaAvanzamentoDipartimento !== "number") err("config.sogliaAvanzamentoDipartimento mancante/non numerico");
}
if (!Array.isArray(stato.prossimiBatch)) err("prossimiBatch non e' un array");
if (!stato.statoDipartimenti) err("statoDipartimenti mancante");

function caricaMete(fileJs) {
  const src = readFileSync(`${ROOT}/${fileJs}`, "utf8");
  return Function(`"use strict"; ${src}; return METE;`)();
}
function indicizza(mete) {
  const idx = new Map();
  for (const m of mete) { if (!idx.has(m.codiceErasmus)) idx.set(m.codiceErasmus, []); idx.get(m.codiceErasmus).push(m); }
  return idx;
}

for (const [dip, info] of Object.entries(stato.statoDipartimenti || {})) {
  if (info.stato === "non_iniziato") continue;
  let mete;
  try { mete = caricaMete(info.fileJs); }
  catch (e) { err(`[${dip}] impossibile caricare ${info.fileJs}: ${e.message}`); continue; }

  const idx = indicizza(mete);
  const visti = new Set();
  for (const m of mete) { if (visti.has(m.id)) err(`[${dip}] id duplicato: ${m.id}`); visti.add(m.id); }

  const emptyLingua = new Set(), emptyScad = new Set();
  for (const [cod, bl] of idx) {
    if (bl.some((b) => vuoto(b.requisitoLingua))) emptyLingua.add(cod);
    if (bl.some((b) => vuoto(b.scadenzeOspitante))) emptyScad.add(cod);
  }
  const pendingLingua = new Set(info.pendingLingua || []);
  const pendingScad = new Set(info.pendingScadenze || []);
  const nonTrovabile = new Set(info.linguaNonTrovabile || []);

  for (const cod of emptyLingua)
    if (!pendingLingua.has(cod) && !nonTrovabile.has(cod))
      err(`[${dip}] ${cod} ha requisitoLingua vuoto ma non e' in pendingLingua ne' linguaNonTrovabile`);
  for (const cod of pendingLingua)
    if (!emptyLingua.has(cod)) warn(`[${dip}] ${cod} e' in pendingLingua ma ha gia' la lingua: rimuoverlo`);
  for (const cod of emptyScad)
    if (!pendingScad.has(cod)) err(`[${dip}] ${cod} ha scadenzeOspitante vuoto ma non e' in pendingScadenze`);

  const inBatch = new Set();
  for (const b of stato.prossimiBatch) if (b.dipartimento === dip) for (const c of b.mete || []) inBatch.add(c);
  for (const cod of pendingLingua)
    if (!nonTrovabile.has(cod) && !inBatch.has(cod))
      err(`[${dip}] ${cod} e' pending ma non e' in nessun batch di prossimiBatch (resterebbe orfano)`);

  const completeRighe = mete.filter((m) => !vuoto(m.requisitoLingua) && !vuoto(m.scadenzeOspitante)).length;
  if (typeof info.totale === "number" && info.totale !== mete.length)
    warn(`[${dip}] totale=${info.totale} ma il file ha ${mete.length} righe`);
  if (typeof info.completate === "number" && info.completate !== completeRighe)
    warn(`[${dip}] completate=${info.completate} ma le righe complete sono ${completeRighe}`);
}

const batchIds = (stato.prossimiBatch || []).map((b) => b.id);
const dup = batchIds.filter((x, i) => batchIds.indexOf(x) !== i);
if (dup.length) err(`id batch duplicati: ${[...new Set(dup)].join(", ")}`);

for (const w of warnings) console.warn("⚠  " + w);
if (errors.length) { for (const e of errors) console.error("✗ " + e); console.error(`\n${errors.length} errore/i. Stato NON valido.`); process.exit(1); }
console.log(`✓ Stato coerente (${warnings.length} avvisi non bloccanti).`);
