// scripts/importa-non-trovabile.mjs
// FASE 3 della pipeline V2 (vedi DISEGNO_PIPELINE_DATI.md).
//
// Porta dentro i dati il campo `nonTrovabile`, che finora esisteva solo dentro
// mappatura-stato.json e quindi il sito non poteva vederlo. Senza questo campo
// un requisito cercato invano e uno mai cercato sono indistinguibili - entrambi
// vuoti - e la definizione di "completo" della V2 non e' verificabile.
//
// COSA SI PUO' IMPORTARE, E COSA NO. La V1 marcava una meta come
// `linguaNonTrovabile` dopo due ricerche a vuoto, ma non registrava ne' la
// pagina consultata ne' la data: lo storico dei lotti ha UNA voce su 362 run, e
// i 282 file di fonti in batch/ elencano solo cio' che e' stato TROVATO. Quindi
// dei 153 casi ereditati sappiamo che qualcuno ci ha provato, e nient'altro.
//
// Per questo vengono importati SENZA fonte e SENZA data, e `statoCampo()` in
// lib-mete.mjs li classifica come "daRiconfermare": non contano come copertura.
// Importarli come coperti farebbe salire le percentuali senza che nessuno abbia
// verificato niente, ed e' esattamente il completismo che questo progetto
// rifiuta. Sono un promemoria per la Fase 5, che li riprovera' con il metodo
// nuovo: la V1 li cercava con la ricerca web, che su questi campi rende poco.
//
// Uso:
//   node scripts/importa-non-trovabile.mjs             (solo rapporto)
//   node scripts/importa-non-trovabile.mjs --applica   (scrive)

import fs from "node:fs";
import { execSync } from "node:child_process";
import { leggiStato, caricaMete, spanTutteMete, valoreCampo, valoreParsato, campoVuoto, impostaCampo, statoCampo } from "./lib-mete.mjs";

const APPLICA = process.argv.includes("--applica");
const stato = leggiStato();

const daScrivere = [];   // { fileJs, dipartimento, codice, mete }
let giaPresenti = 0, conDato = 0;

for (const [dipartimento, info] of Object.entries(stato.statoDipartimenti || {})) {
  const codici = info.linguaNonTrovabile || [];
  if (!codici.length || !info.fileJs || !fs.existsSync(info.fileJs)) continue;
  const mete = caricaMete(fs.readFileSync(info.fileJs, "utf8"));

  for (const codice of codici) {
    const blocchi = mete.filter((m) => m.codiceErasmus === codice);
    if (!blocchi.length) continue;
    // Se nel frattempo il dato e' arrivato (per ricerca o per propagazione),
    // "non trovabile" non ha piu' senso: si lascia stare.
    const conValore = blocchi.filter((m) => statoCampo(m, "requisitoLingua") === "dato").length;
    if (conValore) { conDato += conValore; if (conValore === blocchi.length) continue; }
    const daFare = blocchi.filter((m) => statoCampo(m, "requisitoLingua") === "vuoto").length;
    giaPresenti += blocchi.length - conValore - daFare;
    if (!daFare) continue;
    // Un codice puo' comparire due volte in linguaNonTrovabile: dopo la
    // bonifica, due codici inventati diversi possono essere diventati lo stesso
    // ateneo. Contarlo due volte faceva promettere alla prova a vuoto piu' mete
    // di quante lo scrittore ne facesse davvero, senza spiegare la differenza.
    if (daScrivere.some((d) => d.fileJs === info.fileJs && d.codice === codice)) continue;
    daScrivere.push({ fileJs: info.fileJs, dipartimento, codice, mete: daFare });
  }
}

const totaleMete = daScrivere.reduce((s, x) => s + x.mete, 0);
console.log("FASE 3 - il campo nonTrovabile entra nei dati\n");
console.log(`codici marcati non trovabili nello stato: ${Object.values(stato.statoDipartimenti || {}).reduce((s, i) => s + (i.linguaNonTrovabile || []).length, 0)}`);
console.log(`  gia' segnati nei dati: ${giaPresenti}`);
console.log(`  nel frattempo il dato e' arrivato (si lasciano stare): ${conDato}`);
console.log(`  da importare: ${daScrivere.length} codici, ${totaleMete} mete`);

const perDip = {};
for (const d of daScrivere) perDip[d.dipartimento] = (perDip[d.dipartimento] || 0) + d.mete;
for (const [dip, n] of Object.entries(perDip).sort((a, b) => b[1] - a[1])) console.log(`    ${dip}: ${n}`);

if (!APPLICA) {
  console.log("\nSolo rapporto. Per scrivere: node scripts/importa-non-trovabile.mjs --applica");
  console.log("Nota: entrano SENZA fonte e SENZA data, quindi valgono 'da riconfermare' e");
  console.log("non contano come copertura. La V1 non ha lasciato traccia dei tentativi.");
  process.exit(0);
}

const perFile = {};
for (const d of daScrivere) (perFile[d.fileJs] ||= []).push(d);

let scritte = 0;
const daSalvare = new Map();   // file -> testo nuovo, salvato solo a fine controlli

for (const [fileJs, elenco] of Object.entries(perFile)) {
  let testo = fs.readFileSync(fileJs, "utf8");
  for (const { codice } of elenco) {
    const spans = spanTutteMete(testo, codice).sort((a, b) => b.start - a.start);
    for (const { start, end } of spans) {
      const blocco = testo.slice(start, end);
      // Solo dove la lingua e' davvero assente.
      const rawLingua = valoreCampo(blocco, "requisitoLingua");
      if (!campoVuoto(rawLingua)) continue;

      // Si FONDE con quello che c'e' gia', non si sostituisce: se una meta
      // dichiara gia' non trovabile un altro campo - con fonte e data, che e'
      // l'unica forma che conta come copertura - riscrivere l'oggetto intero
      // cancellerebbe quella prova senza dirlo a nessuno.
      const esistente = valoreParsato(valoreCampo(blocco, "nonTrovabile")) || {};
      if (esistente.requisitoLingua) continue;
      const valore = {
        ...esistente,
        requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" },
      };
      const r = impostaCampo(blocco, "nonTrovabile", valore, { soloSeVuoto: false });
      if (!r.modificato) continue;
      testo = testo.slice(0, start) + r.blocco + testo.slice(end);
      scritte++;
    }
  }
  try { caricaMete(testo); }
  catch (e) {
    console.error(`\nERRORE: ${fileJs} non sarebbe JS valido. Niente e' stato scritto.`);
    console.error(e.message);
    process.exit(1);
  }
  daSalvare.set(fileJs, testo);
}

// Il conto promesso dalla prova a vuoto deve tornare: e' l'unica garanzia che
// questo script dichiara di dare, e prima non veniva mai verificata.
if (scritte !== totaleMete) {
  console.error(`\nERRORE: la prova a vuoto prometteva ${totaleMete} mete, ne risultano ${scritte}. Niente e' stato scritto.`);
  process.exit(1);
}

for (const [fileJs, testo] of daSalvare) {
  fs.writeFileSync(fileJs, testo);
  try { execSync(`node --check "${fileJs}"`, { stdio: "pipe" }); }
  catch (e) {
    console.error(`\nERRORE: ${fileJs} non e' JS valido su disco.`);
    console.error(e.stderr?.toString() || e.message);
    process.exit(1);
  }
  console.log(`${fileJs}: aggiornato`);
}

console.log(`\nFatto: ${scritte} mete ora dichiarano "cercato, non pubblicato dall'ateneo".`);
console.log(`Nessuna conta come copertura finche' non ha fonte e data: sono la coda della Fase 5.`);
