// applica-batch.mjs — IMBUTO IN USCITA.
// Fonde batch/OUTPUT.json (prodotto dall'LLM: solo campi trovati) nel fileJs con
// sostituzione SURGICALE campo-per-campo su TUTTI i blocchi di ogni codice
// (codiceErasmus non è univoco). Poi RICALCOLA lo stato leggendo il file
// (stessa logica del validatore), gestisce tentativi lingua / linguaNonTrovabile,
// avanzamento dipartimento e crea batch di follow-up per le mete pending rimaste.
//
// Uso:  node scripts/applica-batch.mjs

import fs from "node:fs";
import { execSync } from "node:child_process";
import {
  leggiStato, spanTutteMete, valoreCampo, serializza, caricaMete,
  CAMPI_RIEMPIBILI,
} from "./lib-mete.mjs";

const vuoto = (a) => !Array.isArray(a) || a.length === 0;

const stato = leggiStato();
const batch = (stato.prossimiBatch || [])[0];
if (!batch) { console.error("Nessun batch da applicare."); process.exit(2); }

const out = JSON.parse(fs.readFileSync("batch/OUTPUT.json", "utf8"));
const dip = batch.dipartimento;
const sd = stato.statoDipartimenti[dip];
const fileJs = sd.fileJs;
const tipo = batch.tipo || "scadenze+lingua";
let text = fs.readFileSync(fileJs, "utf8");

// --- Patch di un singolo blocco (testo) con i campi trovati ---
function applicaPatchBlocco(blocco, patch) {
  const aggiunti = [];
  for (const campo of CAMPI_RIEMPIBILI) {
    if (!(campo in patch)) continue;
    const raw = valoreCampo(blocco, campo);
    if (raw == null) continue;
    const re = new RegExp(`((?:^|[\\s,{])${campo}\\s*:\\s*)`, "m");
    const m = re.exec(blocco);
    const from = m.index + m[0].length;
    blocco = blocco.slice(0, from) + serializza(patch[campo]) + blocco.slice(from + raw.length);
    aggiunti.push(campo);
  }
  if (patch.notePraticheAppend) {
    blocco = appendNota(blocco, patch.notePraticheAppend);
    aggiunti.push("notePratiche");
  }
  return { blocco, aggiunti };
}

// Append " || testo" dentro notePratiche, preservando la parte iniziale.
function appendNota(blocco, testo) {
  const raw = valoreCampo(blocco, "notePratiche");
  if (!raw || !/^"/.test(raw)) return blocco;
  const interno = JSON.parse(raw);
  if (interno.includes(testo)) return blocco; // niente doppioni
  const nuovo = JSON.stringify(interno + " || " + testo);
  const re = new RegExp(`((?:^|[\\s,{])notePratiche\\s*:\\s*)`, "m");
  const m = re.exec(blocco);
  const from = m.index + m[0].length;
  return blocco.slice(0, from) + nuovo + blocco.slice(from + raw.length);
}

// Applica una funzione a TUTTI i blocchi di un codice (dall'ultimo al primo,
// così gli offset dei blocchi precedenti restano validi).
function perOgniBlocco(codice, fn) {
  const spans = spanTutteMete(text, codice).sort((a, b) => b.start - a.start);
  const risultati = [];
  for (const { start, end } of spans) {
    const nuovo = fn(text.slice(start, end));
    risultati.push(nuovo.aggiunti || []);
    text = text.slice(0, start) + nuovo.blocco + text.slice(end);
  }
  return risultati.flat();
}

// --- 1) Applica i dati trovati ---
const fonti = {};
const riepilogo = [];
for (const codice of [...new Set(batch.mete)]) {
  const patch = out[codice];
  if (!patch) { riepilogo.push(`${codice}: nessun dato`); continue; }
  const agg = perOgniBlocco(codice, (b) => applicaPatchBlocco(b, patch));
  if (patch.fonti) fonti[codice] = patch.fonti;
  riepilogo.push(`${codice}: ${[...new Set(agg)].join(", ") || "(nessuna modifica)"}`);
}

// --- 2) Gestione tentativi lingua / linguaNonTrovabile ---
const cercaLingua = tipo.includes("lingua");
const ultimoTentativo = tipo === "lingua_ultimo_tentativo";
sd.tentativiLingua ||= {};
sd.linguaNonTrovabile ||= [];

if (cercaLingua) {
  for (const codice of [...new Set(batch.mete)]) {
    // ancora senza lingua in almeno un blocco?
    const ancoraVuota = caricaMete(text)
      .filter((m) => m.codiceErasmus === codice)
      .some((m) => vuoto(m.requisitoLingua));
    if (!ancoraVuota) { delete sd.tentativiLingua[codice]; continue; }

    sd.tentativiLingua[codice] = (sd.tentativiLingua[codice] || 0) + 1;
    if (sd.tentativiLingua[codice] >= stato.config.maxTentativiLingua || ultimoTentativo) {
      if (!sd.linguaNonTrovabile.includes(codice)) sd.linguaNonTrovabile.push(codice);
      perOgniBlocco(codice, (b) => ({
        blocco: appendNota(b, "Lingua: CEFR non trovato dopo ricerca approfondita"),
        aggiunti: [],
      }));
    }
  }
}

fs.writeFileSync(fileJs, text);

// --- 3) Verifica sintassi ---
try {
  execSync(`node --check "${fileJs}"`, { stdio: "pipe" });
} catch (e) {
  console.error("ERRORE: fileJs non è JS valido dopo il merge. Niente commit.");
  console.error(e.stderr?.toString() || e.message);
  process.exit(1);
}

// --- 4) Ricalcolo stato dal file (autorevole, come il validatore) ---
const mete = caricaMete(text);
const byCodice = new Map();
for (const m of mete) {
  if (!byCodice.has(m.codiceErasmus)) byCodice.set(m.codiceErasmus, []);
  byCodice.get(m.codiceErasmus).push(m);
}
const emptyLingua = new Set(), emptyScad = new Set();
for (const [cod, bl] of byCodice) {
  if (bl.some((b) => vuoto(b.requisitoLingua))) emptyLingua.add(cod);
  if (bl.some((b) => vuoto(b.scadenzeOspitante))) emptyScad.add(cod);
}
const nonTrov = new Set(sd.linguaNonTrovabile);
sd.pendingLingua = [...emptyLingua].filter((c) => !nonTrov.has(c));
sd.pendingScadenze = [...emptyScad];
sd.completate = mete.filter((m) => !vuoto(m.requisitoLingua) && !vuoto(m.scadenzeOspitante)).length;
sd.totale = mete.length;

// --- 5) Avanzamento batch e stato ---
stato.prossimiBatch.shift();

const soglia = stato.config.sogliaAvanzamentoDipartimento;
const fraz = sd.totale ? sd.completate / sd.totale : 0;
const tutteRestantiNonTrov = sd.pendingLingua.length === 0;
if (sd.pendingScadenze.length === 0 && (sd.pendingLingua.length === 0 ||
    (tutteRestantiNonTrov && fraz >= soglia))) {
  sd.stato = "completo";
  const prossimoDip = (stato.prossimiBatch.find((b) =>
    stato.statoDipartimenti[b.dipartimento]?.stato !== "completo"))?.dipartimento;
  if (prossimoDip) stato.dipartimentoCorrente = prossimoDip;
}

// --- 6) Anti-orfani: copri con nuovi batch le pending non in coda ---
const inCoda = new Set();
for (const b of stato.prossimiBatch) if (b.dipartimento === dip) for (const c of b.mete) inCoda.add(c);
const scoperte = [...new Set([...sd.pendingLingua, ...sd.pendingScadenze])].filter((c) => !inCoda.has(c));
if (scoperte.length && sd.stato !== "completo") {
  const esistenti = new Set(stato.prossimiBatch.map((b) => b.id));
  let n = 1;
  for (let i = 0; i < scoperte.length; i += 5) {
    let id;
    do { id = `${dip.toLowerCase()}-batch-followup-${n++}`; } while (esistenti.has(id));
    esistenti.add(id);
    const mete5 = scoperte.slice(i, i + 5);
    const conScad = mete5.some((c) => sd.pendingScadenze.includes(c));
    stato.prossimiBatch.push({
      id, priorita: 6, dipartimento: dip,
      descrizione: `${dip} - follow-up pending`,
      tipo: conScad ? "scadenze+lingua" : "lingua",
      mete: mete5,
    });
  }
}

// --- 7) Metadati run ---
const oggi = new Date().toISOString().slice(0, 10);
stato.runCompletati = (stato.runCompletati || 0) + 1;
stato.aggiornato = oggi;
(stato.storico ||= []).push({
  batch: stato.runCompletati, data: oggi, mete: [...new Set(batch.mete)].length,
  note: `${dip} ${batch.id}: merge automatico via applica-batch.mjs.`,
});

fs.writeFileSync("mappatura-stato.json", JSON.stringify(stato, null, 2) + "\n");

// --- 8) Sidecar fonti per la revisione umana ---
fs.mkdirSync("batch", { recursive: true });
fs.writeFileSync(`batch/FONTI-${batch.id}.json`, JSON.stringify(fonti, null, 2) + "\n");

console.log(`Merge applicato (${fileJs}). node --check OK.`);
riepilogo.forEach((r) => console.log("  - " + r));
console.log(`Dipartimento ${dip}: ${sd.completate}/${sd.totale} complete, stato=${sd.stato}.`);
console.log(`Batch rimanenti: ${stato.prossimiBatch.length}.`);
