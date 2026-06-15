// applica-batch.mjs — IMBUTO IN USCITA.
// Fonde batch/OUTPUT.json (prodotto dall'LLM: solo campi trovati) nel fileJs,
// con sostituzione SURGICALE campo-per-campo: i campi immutabili non vengono
// mai riscritti dall'LLM. Poi `node --check`, aggiorna mappatura-stato.json e
// salva le fonti in un sidecar per la revisione umana.
//
// Uso:  node scripts/applica-batch.mjs

import fs from "node:fs";
import { execSync } from "node:child_process";
import {
  leggiStato, spanMeta, valoreCampo, serializza, CAMPI_RIEMPIBILI,
} from "./lib-mete.mjs";

const stato = leggiStato();
const batch = (stato.prossimiBatch || [])[0];
if (!batch) { console.error("Nessun batch da applicare."); process.exit(2); }

const out = JSON.parse(fs.readFileSync("batch/OUTPUT.json", "utf8"));
const dip = batch.dipartimento;
const fileJs = stato.statoDipartimenti[dip].fileJs;
let text = fs.readFileSync(fileJs, "utf8");

const fonti = {};
const riepilogo = [];

for (const codice of batch.mete) {
  const patch = out[codice];
  if (!patch) { riepilogo.push(`${codice}: nessun dato (saltata)`); continue; }

  let { start, end } = spanMeta(text, codice);
  let blocco = text.slice(start, end);
  const aggiunti = [];

  // 1) Campi riempibili: sostituisci il valore esistente.
  for (const campo of CAMPI_RIEMPIBILI) {
    if (!(campo in patch)) continue;
    const nuovo = serializza(patch[campo]);
    const re = new RegExp(`((?:^|[\\s,{])${campo}\\s*:\\s*)`, "m");
    const m = re.exec(blocco);
    if (!m) continue;
    const from = m.index + m[0].length;
    // riusa lo scanner indirettamente: valoreCampo dà il testo, ne misuro la lunghezza
    const raw = valoreCampo(blocco, campo);
    const to = from + raw.length;
    blocco = blocco.slice(0, from) + nuovo + blocco.slice(to);
    aggiunti.push(campo);
  }

  // 2) notePratiche: append dopo " || " preservando la parte iniziale.
  if (patch.notePraticheAppend) {
    const raw = valoreCampo(blocco, "notePratiche");
    if (raw && /^"/.test(raw)) {
      const interno = raw.slice(1, -1); // togli apici
      const nuovo = JSON.stringify(interno + " || " + patch.notePraticheAppend);
      const re = new RegExp(`((?:^|[\\s,{])notePratiche\\s*:\\s*)`, "m");
      const m = re.exec(blocco);
      const from = m.index + m[0].length;
      const to = from + raw.length;
      blocco = blocco.slice(0, from) + nuovo + blocco.slice(to);
      aggiunti.push("notePratiche");
    }
  }

  text = text.slice(0, start) + blocco + text.slice(end);
  if (patch.fonti) fonti[codice] = patch.fonti;
  riepilogo.push(`${codice}: ${aggiunti.join(", ") || "(nessuna modifica)"}`);
}

fs.writeFileSync(fileJs, text);

// Verifica sintassi JS.
try {
  execSync(`node --check "${fileJs}"`, { stdio: "pipe" });
} catch (e) {
  console.error("ERRORE: il fileJs non è JS valido dopo il merge. Niente commit.");
  console.error(e.stderr?.toString() || e.message);
  process.exit(1);
}

// Salva le fonti per la revisione umana (fuori dal codice, come da regola).
fs.mkdirSync("batch", { recursive: true });
fs.writeFileSync(`batch/FONTI-${batch.id}.json`, JSON.stringify(fonti, null, 2) + "\n");

// --- Aggiornamento deterministico di mappatura-stato.json ---
const oggi = new Date().toISOString().slice(0, 10);
const sd = stato.statoDipartimenti[dip];

for (const codice of batch.mete) {
  const { start, end } = spanMeta(text, codice);
  const blocco = text.slice(start, end);
  const linguaOk = valoreCampo(blocco, "requisitoLingua") !== "[]";
  const scadOk = valoreCampo(blocco, "scadenzeOspitante") !== "[]";
  const inLingua = (sd.linguaNonTrovabile || []).includes(codice);
  if (linguaOk || inLingua) sd.pendingLingua = (sd.pendingLingua || []).filter((c) => c !== codice);
  if (scadOk) sd.pendingScadenze = (sd.pendingScadenze || []).filter((c) => c !== codice);
}
sd.completate = sd.totale - new Set([...(sd.pendingScadenze||[]), ...(sd.pendingLingua||[])]).size;
if ((sd.pendingScadenze||[]).length === 0 && (sd.pendingLingua||[]).length === 0) sd.stato = "completo";

stato.prossimiBatch.shift();
stato.runCompletati = (stato.runCompletati || 0) + 1;
stato.aggiornato = oggi;
(stato.storico ||= []).push({
  batch: stato.runCompletati, data: oggi, mete: batch.mete.length,
  note: `${dip} ${batch.id}: merge automatico via applica-batch.mjs.`,
});

fs.writeFileSync("mappatura-stato.json", JSON.stringify(stato, null, 2) + "\n");

console.log(`Merge applicato (${fileJs}). node --check OK.`);
riepilogo.forEach((r) => console.log("  - " + r));
console.log(`Batch rimanenti: ${stato.prossimiBatch.length}.`);
