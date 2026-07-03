// Script UNA TANTUM di riparazione: le 4 Facolta' Sapienza rimaste
// (Farmacia, Comunicazione, Scienze Sociali, Psicologia) sono state
// registrate in mappatura-stato.json usando il campo "id" delle mete al
// posto di "codiceErasmus" dentro pendingScadenze/pendingLingua/prossimiBatch.
// Questo script rigenera SOLO quei 4 dipartimenti con la stessa identica
// logica di scripts/setup-dipartimento.mjs (chiavi = codiceErasmus, dedup,
// sotto-batch da 5), senza toccare nient'altro. Nessun batch di queste 4 e'
// mai stato completato (completate=0 ovunque), quindi rigenerare da zero e'
// equivalente e sicuro.
import fs from "node:fs";
import { leggiStato, caricaMete } from "./scripts/lib-mete.mjs";

const DIPARTIMENTI_ROTTI = [
  "Farmacia (Sapienza)",
  "Comunicazione e Ricerca Sociale (Sapienza)",
  "Scienze Sociali ed Economiche (Sapienza)",
  "Psicologia e Servizio Sociale (Sapienza)",
];

const vuoto = (a) => !Array.isArray(a) || a.length === 0;
const stato = leggiStato();

// Verifica di sicurezza: nessuno dei 4 deve avere lavoro gia' fatto.
for (const dip of DIPARTIMENTI_ROTTI) {
  const v = stato.statoDipartimenti[dip];
  if (!v) throw new Error(`Dipartimento non trovato in stato: ${dip}`);
  if (v.completate !== 0) {
    throw new Error(`${dip} ha gia' ${v.completate} mete completate: STOP, non rigenerare a cuor leggero.`);
  }
}

// Rimuovi dal prossimiBatch tutti i batch dei 4 dipartimenti rotti (li
// ricreiamo da zero); conserva l'ordine e i batch di ALTRI dipartimenti
// (al momento non ce ne sono, ma per sicurezza filtriamo per nome).
stato.prossimiBatch = stato.prossimiBatch.filter((b) => !DIPARTIMENTI_ROTTI.includes(b.dipartimento));

const riepilogo = [];

for (const dip of DIPARTIMENTI_ROTTI) {
  const fileJs = stato.statoDipartimenti[dip].fileJs;
  const text = fs.readFileSync(fileJs, "utf8");
  const mete = caricaMete(text);

  const idsVisti = new Set();
  for (const m of mete) {
    if (!m.id) throw new Error(`${fileJs}: una meta senza 'id'.`);
    if (idsVisti.has(m.id)) throw new Error(`${fileJs}: id duplicato ${m.id}.`);
    idsVisti.add(m.id);
    if (!m.codiceErasmus) throw new Error(`${fileJs}: meta ${m.id} senza codiceErasmus.`);
  }

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

  const slug = (fileJs.match(/dati-mete-([a-z0-9-]+)\.js/i)?.[1])
    || dip.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const pendingTutti = [];
  const visto = new Set();
  for (const cod of [...emptyScadSet, ...emptyLinguaSet]) {
    if (!visto.has(cod)) { visto.add(cod); pendingTutti.push(cod); }
  }

  const esistenti = new Set(stato.prossimiBatch.map((b) => b.id));
  let n = 1, nuovi = 0;
  for (let i = 0; i < pendingTutti.length; i += 5) {
    let id; do { id = `${slug}-batch-${n++}`; } while (esistenti.has(id));
    esistenti.add(id);
    const mete5 = pendingTutti.slice(i, i + 5);
    const conScad = mete5.some((c) => emptyScadSet.has(c));
    stato.prossimiBatch.push({
      id, priorita: 6, dipartimento: dip,
      descrizione: `${dip} - scadenze+lingua`,
      tipo: conScad ? "scadenze+lingua" : "lingua",
      mete: mete5,
    });
    nuovi++;
  }
  riepilogo.push(`${dip}: ${mete.length} mete, ${pendingTutti.length} codici pendenti unici, ${nuovi} sotto-batch (slug '${slug}')`);
}

const oggi = new Date().toISOString().slice(0, 10);
stato.aggiornato = oggi;
(stato.storico ||= []).push({
  batch: stato.runCompletati || 0,
  data: oggi,
  mete: 0,
  note: "Riparazione: pendingScadenze/pendingLingua/prossimiBatch di Farmacia, Comunicazione, " +
        "Scienze Sociali, Psicologia (Sapienza) usavano il campo 'id' delle mete invece di " +
        "'codiceErasmus', causando 'Meta non trovata' in prepara-batch.mjs. Rigenerati da zero " +
        "con la stessa logica di setup-dipartimento.mjs (nessuna meta di questi 4 dipartimenti " +
        "era mai stata completata).",
});

fs.writeFileSync("mappatura-stato.json", JSON.stringify(stato, null, 2) + "\n");
console.log("Riparazione completata:");
riepilogo.forEach((r) => console.log(" - " + r));
