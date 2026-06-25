// setup-dipartimento.mjs — BOOTSTRAP DETERMINISTICO di un NUOVO dipartimento.
//
// Precondizione: prossimiBatch[0].tipo === "nuovo_dipartimento" e il fileJs e'
// GIA' stato creato dall'agente (tutte le mete; requisitoLingua/scadenzeOspitante
// possono essere [] o gia' compilati). Effetto: crea l'entry statoDipartimenti,
// accoda i sotto-batch da 5 su tutte le mete ancora da completare, rimuove il
// batch di creazione, aggiorna i metadati di run. NESSUNA modifica a mano.
//
// Uso:  node scripts/setup-dipartimento.mjs

import fs from "node:fs";
import { execSync } from "node:child_process";
import { leggiStato, caricaMete } from "./lib-mete.mjs";

const vuoto = (a) => !Array.isArray(a) || a.length === 0;

const stato = leggiStato();
const batch = (stato.prossimiBatch || [])[0];
if (!batch || batch.tipo !== "nuovo_dipartimento") {
  console.error("Il primo batch in coda non e' un nuovo_dipartimento. Niente da fare.");
  process.exit(2);
}

const dip = batch.dipartimento;
const fileJs = batch.fileJs || stato.statoDipartimenti?.[dip]?.fileJs;
if (!fileJs) { console.error(`Manca fileJs per "${dip}".`); process.exit(1); }
if (!fs.existsSync(fileJs)) {
  console.error(`File dati non trovato: ${fileJs}. Crealo PRIMA di questo step.`);
  process.exit(1);
}

// 1) Sintassi JS
try { execSync(`node --check "${fileJs}"`, { stdio: "pipe" }); }
catch (e) {
  console.error(`ERRORE: ${fileJs} non e' JS valido. Niente modifiche allo stato.`);
  console.error(e.stderr?.toString() || e.message);
  process.exit(1);
}

// 2) Carica mete + controlli minimi (id unici, codiceErasmus presente)
const text = fs.readFileSync(fileJs, "utf8");
let mete;
try { mete = caricaMete(text); }
catch (e) { console.error(`Impossibile caricare METE da ${fileJs}: ${e.message}`); process.exit(1); }
if (!Array.isArray(mete) || mete.length === 0) { console.error("METE vuoto o non valido."); process.exit(1); }

const idsVisti = new Set();
for (const m of mete) {
  if (!m.id) { console.error("Una meta non ha 'id'."); process.exit(1); }
  if (idsVisti.has(m.id)) { console.error(`id duplicato nel file: ${m.id}`); process.exit(1); }
  idsVisti.add(m.id);
  if (!m.codiceErasmus) { console.error(`Meta ${m.id} senza codiceErasmus.`); process.exit(1); }
}

// 3) Pending iniziali calcolati dal file (gestisce anche pre-compilazioni parziali)
const byCodice = new Map();
for (const m of mete) {
  if (!byCodice.has(m.codiceErasmus)) byCodice.set(m.codiceErasmus, []);
  byCodice.get(m.codiceErasmus).push(m);
}
const emptyLinguaSet = new Set(), emptyScadSet = new Set();
for (const [cod, bl] of byCodice) {
  if (bl.some((b) => vuoto(b.requisitoLingua))) emptyLinguaSet.add(cod);
  if (bl.some((b) => vuoto(b.scadenzeOspitante))) emptyScadSet.add(cod);
}
const completate = mete.filter((m) => !vuoto(m.requisitoLingua) && !vuoto(m.scadenzeOspitante)).length;

// 4) Entry statoDipartimenti (stessa forma usata dal validatore e da applica-batch)
stato.statoDipartimenti[dip] = {
  fileJs,
  stato: "in_corso",
  totale: mete.length,
  completate,
  pendingScadenze: [...emptyScadSet],
  pendingLingua: [...emptyLinguaSet],
  tentativiLingua: {},
  linguaNonTrovabile: [],
};

// 5) Sotto-batch da 5 su tutti i codici ancora pending (union, ordine stabile)
const slug = (fileJs.match(/dati-mete-([a-z0-9-]+)\.js/i)?.[1])
  || dip.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const pendingTutti = [];
const visto = new Set();
for (const cod of [...emptyScadSet, ...emptyLinguaSet]) {
  if (!visto.has(cod)) { visto.add(cod); pendingTutti.push(cod); }
}

stato.prossimiBatch.shift();                       // rimuovi il batch di creazione
const esistenti = new Set(stato.prossimiBatch.map((b) => b.id));
esistenti.add(batch.id);                           // non riusare l'id del batch di creazione
let n = 1, nuovi = 0;
for (let i = 0; i < pendingTutti.length; i += 5) {
  let id; do { id = `${slug}-batch-${n++}`; } while (esistenti.has(id));
  esistenti.add(id);
  const mete5 = pendingTutti.slice(i, i + 5);
  const conScad = mete5.some((c) => emptyScadSet.has(c));
  stato.prossimiBatch.push({
    id, priorita: 5, dipartimento: dip,
    descrizione: `${dip} - lotto iniziale`,
    tipo: conScad ? "scadenze+lingua" : "lingua",
    mete: mete5,
  });
  nuovi++;
}

stato.dipartimentoCorrente = dip;

// 6) Metadati run + storico
const oggi = new Date().toISOString().slice(0, 10);
stato.runCompletati = (stato.runCompletati || 0) + 1;
stato.aggiornato = oggi;
(stato.storico ||= []).push({
  batch: stato.runCompletati, data: oggi, mete: mete.length,
  note: `Avvio ${dip}: creato ${fileJs} con ${mete.length} mete; accodati ${nuovi} sotto-batch.`,
});

fs.writeFileSync("mappatura-stato.json", JSON.stringify(stato, null, 2) + "\n");
console.log(`Dipartimento "${dip}" avviato: ${mete.length} mete, ${nuovi} sotto-batch (slug '${slug}'), completate ${completate}.`);
console.log("Ora esegui: node scripts/valida-stato.mjs");
