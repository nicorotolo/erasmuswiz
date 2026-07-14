// setup-dipartimento.mjs — BOOTSTRAP DETERMINISTICO di un NUOVO dipartimento.
//
// Precondizione: prossimiBatch[0].tipo === "nuovo_dipartimento" e il fileJs e'
// GIA' stato creato (dall'agente per Ca' Foscari, da un umano per Sapienza).
// Effetto: (1) RIUSO — pre-compila requisitoLingua/scadenzeOspitante copiandoli
// dalle mete GIA' MAPPATE negli altri dipartimenti che condividono lo stesso
// codice Erasmus (stesso ateneo partner => stesse scadenze incoming; lingua
// riusata come base); (2) crea l'entry statoDipartimenti; (3) accoda i
// sotto-batch (DIM_BATCH mete) SOLO sulle mete ancora scoperte; (4) eredita
// linguaNonTrovabile per i codici gia' cercati senza esito altrove (niente
// nuovi tentativi a vuoto). NESSUNA modifica a mano.
//
// Uso:  node scripts/setup-dipartimento.mjs

import fs from "node:fs";
import { execSync } from "node:child_process";
import {
  leggiStato, caricaMete, spanTutteMete, valoreCampo, campoVuoto,
  impostaCampo,
} from "./lib-mete.mjs";

const vuoto = (a) => !Array.isArray(a) || a.length === 0;
const DIM_BATCH = 8; // mete per sotto-batch (era 5: alzato per ridurre l'overhead per-run)

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
let text = fs.readFileSync(fileJs, "utf8");
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

// === 2-bis) RIUSO: base di conoscenza dai dipartimenti gia' mappati =========
// I codici Erasmus sono normalizzati sugli spazi (Ca' Foscari usa "E GRANADA01",
// Sapienza "E  GRANADA01": stesso ateneo partner).
const norm = (c) => String(c).replace(/\s+/g, " ").trim().toUpperCase();

const kb = new Map(); // norm(codice) -> dati riusabili + note + nonTrovabile
for (const [, info] of Object.entries(stato.statoDipartimenti || {})) {
  if (!info.fileJs || info.fileJs === fileJs) continue;
  let altre;
  try { altre = caricaMete(fs.readFileSync(info.fileJs, "utf8")); } catch { continue; }
  const nonTrov = new Set((info.linguaNonTrovabile || []).map(norm));
  for (const m of altre) {
    const k = norm(m.codiceErasmus);
    const e = kb.get(k) || { note: new Set() };
    if (!e.requisitoLingua && !vuoto(m.requisitoLingua)) e.requisitoLingua = m.requisitoLingua;
    if (!e.scadenzeOspitante && !vuoto(m.scadenzeOspitante)) e.scadenzeOspitante = m.scadenzeOspitante;
    if (!e.linkSito && typeof m.linkSito === "string" && m.linkSito.trim()) e.linkSito = m.linkSito;
    if (!e.linkCatalogo && typeof m.linkCatalogo === "string" && m.linkCatalogo.trim()) e.linkCatalogo = m.linkCatalogo;
    if (!e.notaDisponibilita && typeof m.notaDisponibilita === "string" && m.notaDisponibilita.trim()) e.notaDisponibilita = m.notaDisponibilita;
    if (typeof m.notePratiche === "string") {
      for (const seg of m.notePratiche.split(" || ").slice(1)) {
        if (/^(Scadenze|Lingua):/i.test(seg) && !/CEFR non trovato/i.test(seg)) e.note.add(seg.trim());
      }
    }
    if (nonTrov.has(k)) e.nonTrovabile = true;
    kb.set(k, e);
  }
}

// -- helpers di patch testuale (stessa tecnica chirurgica di applica-batch) --
function patchCampo(blocco, campo, valore) {
  return impostaCampo(blocco, campo, valore, { soloSeVuoto: true }).blocco;
}
function appendNota(blocco, testo) {
  const raw = valoreCampo(blocco, "notePratiche");
  if (!raw || !/^"/.test(raw)) return blocco;
  const interno = JSON.parse(raw);
  if (interno.includes(testo)) return blocco;
  const nuovo = JSON.stringify(interno + " || " + testo);
  const re = /((?:^|[\s,{])notePratiche\s*:\s*)/m;
  const m = re.exec(blocco);
  const from = m.index + m[0].length;
  return blocco.slice(0, from) + nuovo + blocco.slice(from + raw.length);
}
function perOgniBlocco(codice, fn) {
  const spans = spanTutteMete(text, codice).sort((a, b) => b.start - a.start);
  for (const { start, end } of spans) {
    text = text.slice(0, start) + fn(text.slice(start, end)) + text.slice(end);
  }
}

// -- applica il riuso --
const codiciFile = [...new Set(mete.map((m) => m.codiceErasmus))];
let riusoLingua = 0, riusoScad = 0, riusoSito = 0, riusoCatalogo = 0, riusoDisponibilita = 0;
const ereditaNonTrovabile = [];
for (const codice of codiciFile) {
  const e = kb.get(norm(codice));
  if (!e) continue;
  perOgniBlocco(codice, (b) => {
    let nb = b;
    if (e.requisitoLingua && campoVuoto(valoreCampo(nb, "requisitoLingua"))) {
      const prima = nb;
      nb = patchCampo(nb, "requisitoLingua", e.requisitoLingua);
      if (nb !== prima) riusoLingua++;
    }
    if (e.scadenzeOspitante && campoVuoto(valoreCampo(nb, "scadenzeOspitante"))) {
      const prima = nb;
      nb = patchCampo(nb, "scadenzeOspitante", e.scadenzeOspitante);
      if (nb !== prima) riusoScad++;
    }
    if (e.linkSito && campoVuoto(valoreCampo(nb, "linkSito"))) {
      const prima = nb;
      nb = patchCampo(nb, "linkSito", e.linkSito);
      if (nb !== prima) riusoSito++;
    }
    if (e.linkCatalogo && campoVuoto(valoreCampo(nb, "linkCatalogo"))) {
      const prima = nb;
      nb = patchCampo(nb, "linkCatalogo", e.linkCatalogo);
      if (nb !== prima) riusoCatalogo++;
    }
    if (e.notaDisponibilita && campoVuoto(valoreCampo(nb, "notaDisponibilita"))) {
      const prima = nb;
      nb = patchCampo(nb, "notaDisponibilita", e.notaDisponibilita);
      if (nb !== prima) riusoDisponibilita++;
    }
    if (nb !== b) for (const nota of e.note) nb = appendNota(nb, nota);
    return nb;
  });
}

// -- eredita linguaNonTrovabile per i codici ANCORA senza lingua --
mete = caricaMete(text); // ricarica dopo il patch
const ancoraSenzaLingua = new Set(
  mete.filter((m) => vuoto(m.requisitoLingua)).map((m) => m.codiceErasmus)
);
for (const codice of codiciFile) {
  const e = kb.get(norm(codice));
  if (e?.nonTrovabile && ancoraSenzaLingua.has(codice)) {
    ereditaNonTrovabile.push(codice);
    perOgniBlocco(codice, (b) =>
      appendNota(b, "Lingua: CEFR non trovato in mappature precedenti"));
  }
}

if (riusoLingua || riusoScad || riusoSito || riusoCatalogo || riusoDisponibilita || ereditaNonTrovabile.length) {
  fs.writeFileSync(fileJs, text);
  try { execSync(`node --check "${fileJs}"`, { stdio: "pipe" }); }
  catch (e) {
    console.error("ERRORE: fileJs non valido dopo il riuso. Interrotto.");
    console.error(e.stderr?.toString() || e.message);
    process.exit(1);
  }
  mete = caricaMete(text);
}
// ============================================================================

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

const nonTrovSet = new Set(ereditaNonTrovabile);
const tentativi = {};
for (const c of ereditaNonTrovabile) tentativi[c] = stato.config.maxTentativiLingua;

// 4) Entry statoDipartimenti (stessa forma usata dal validatore e da applica-batch)
stato.statoDipartimenti[dip] = {
  fileJs,
  stato: emptyScadSet.size === 0 && [...emptyLinguaSet].every((c) => nonTrovSet.has(c)) ? "completo" : "in_corso",
  totale: mete.length,
  completate,
  pendingScadenze: [...emptyScadSet],
  pendingLingua: [...emptyLinguaSet].filter((c) => !nonTrovSet.has(c)),
  tentativiLingua: tentativi,
  linguaNonTrovabile: ereditaNonTrovabile,
  ateneo: batch.ateneo || stato.universitaCorrente,
};

// 5) Sotto-batch su tutti i codici ancora pending (union, ordine stabile)
const slug = (fileJs.match(/dati-mete-([a-z0-9-]+)\.js/i)?.[1])
  || dip.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const pendingTutti = [];
const visto = new Set();
for (const cod of [...emptyScadSet, ...emptyLinguaSet]) {
  if (visto.has(cod)) continue;
  if (nonTrovSet.has(cod) && !emptyScadSet.has(cod)) continue; // solo lingua non trovabile: non accodare
  visto.add(cod); pendingTutti.push(cod);
}

stato.prossimiBatch.shift();                       // rimuovi il batch di creazione
const esistenti = new Set(stato.prossimiBatch.map((b) => b.id));
esistenti.add(batch.id);                           // non riusare l'id del batch di creazione
let n = 1, nuovi = 0;
for (let i = 0; i < pendingTutti.length; i += DIM_BATCH) {
  let id; do { id = `${slug}-batch-${n++}`; } while (esistenti.has(id));
  esistenti.add(id);
  const meteB = pendingTutti.slice(i, i + DIM_BATCH);
  const conScad = meteB.some((c) => emptyScadSet.has(c));
  stato.prossimiBatch.push({
    id, priorita: 5, dipartimento: dip,
    descrizione: `${dip} - lotto iniziale`,
    tipo: conScad ? "scadenze+lingua" : "lingua",
    mete: meteB,
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
  note: `Avvio ${dip}: ${fileJs}, ${mete.length} mete; riuso ${riusoLingua} lingue/${riusoScad} scadenze/${riusoSito} siti/${riusoCatalogo} cataloghi/${riusoDisponibilita} disponibilita; ereditati ${ereditaNonTrovabile.length} CEFR non trovabili; ${nuovi} sotto-batch da ${DIM_BATCH}.`,
});

fs.writeFileSync("mappatura-stato.json", JSON.stringify(stato, null, 2) + "\n");
console.log(`Dipartimento "${dip}" avviato: ${mete.length} mete, completate ${completate} (riuso: ${riusoLingua} lingua, ${riusoScad} scadenze, ${riusoSito} siti, ${riusoCatalogo} cataloghi, ${riusoDisponibilita} disponibilita; non-trovabili ereditati: ${ereditaNonTrovabile.length}), ${nuovi} sotto-batch da ${DIM_BATCH} (slug '${slug}').`);
console.log("Ora esegui: node scripts/valida-stato.mjs");
