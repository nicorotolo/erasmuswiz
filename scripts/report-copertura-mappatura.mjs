#!/usr/bin/env node
// Report read-only della copertura dati. Non modifica file o stato.
//
// Dal 2026-08-30 (Fase 3 della pipeline V2) le percentuali dicono la verita' su
// una distinzione che prima non esisteva: un campo cercato invano e uno mai
// cercato erano tutti e due "vuoti", e sembravano lo stesso buco.
//
// Le percentuali contano come coperto:
//   - il campo che HA il dato;
//   - il campo dichiarato non trovabile CON la fonte tentata e la data
//     (l'ateneo non lo pubblica: e' una risposta onesta, non un buco).
// NON contano:
//   - i "da riconfermare", cioe' dichiarati non trovabili senza fonte ne' data
//     (i 168 ereditati dalla V1): stanno nella colonna a parte;
//   - i campi mai cercati.
// La definizione sta in un posto solo: statoCampo() in lib-mete.mjs.

import fs from "node:fs";
import { caricaMete, statoCampo, copertoDavvero } from "./lib-mete.mjs";

const stato = JSON.parse(fs.readFileSync("mappatura-stato.json", "utf8"));
const campi = ["requisitoLingua", "scadenzeOspitante", "linkSito", "linkCatalogo", "notaDisponibilita"];
const percentuale = (n, totale) => (totale ? `${Math.round((n * 100) / totale)}%` : "-");

const sorgenti = new Map();
for (const [dipartimento, info] of Object.entries(stato.statoDipartimenti || {})) {
  if (info.fileJs) sorgenti.set(dipartimento, info.fileJs);
}
for (const batch of stato.prossimiBatch || []) {
  if (batch.tipo === "nuovo_dipartimento" && batch.fileJs && !sorgenti.has(batch.dipartimento)) {
    sorgenti.set(batch.dipartimento, batch.fileJs);
  }
}

// Si caricano una volta sola: il file dati e' la fonte autorevole.
const metePerDip = new Map();
for (const [dipartimento, fileJs] of sorgenti) {
  if (!fs.existsSync(fileJs)) continue;
  try { metePerDip.set(dipartimento, caricaMete(fs.readFileSync(fileJs, "utf8"))); } catch { /* salta */ }
}

const righe = [];
const totali = Object.fromEntries(campi.map((c) => [c, 0]));
let totaleRighe = 0, totaleDaRiconfermare = 0;

for (const [dipartimento, mete] of metePerDip) {
  const conteggi = Object.fromEntries(campi.map((campo) => [
    campo, mete.filter((m) => copertoDavvero(statoCampo(m, campo))).length,
  ]));
  const daRiconfermare = mete.filter((m) => campi.some((c) => statoCampo(m, c) === "daRiconfermare")).length;

  righe.push({ dipartimento, totale: mete.length, conteggi, daRiconfermare });
  totaleRighe += mete.length;
  totaleDaRiconfermare += daRiconfermare;
  for (const campo of campi) totali[campo] += conteggi[campo];
}

console.log("| Dipartimento/Facolta | Mete | Lingua | Scadenze | Sito | Catalogo | Disponibilita | Da riconfermare |");
console.log("|---|---:|---:|---:|---:|---:|---:|---:|");
for (const r of righe) {
  console.log(
    `| ${r.dipartimento.replace(/\|/g, "/")} | ${r.totale}` +
    ` | ${percentuale(r.conteggi.requisitoLingua, r.totale)}` +
    ` | ${percentuale(r.conteggi.scadenzeOspitante, r.totale)}` +
    ` | ${percentuale(r.conteggi.linkSito, r.totale)}` +
    ` | ${percentuale(r.conteggi.linkCatalogo, r.totale)}` +
    ` | ${percentuale(r.conteggi.notaDisponibilita, r.totale)}` +
    ` | ${r.daRiconfermare || ""} |`
  );
}
console.log(
  `| **TOTALE** | **${totaleRighe}**` +
  ` | **${percentuale(totali.requisitoLingua, totaleRighe)}**` +
  ` | **${percentuale(totali.scadenzeOspitante, totaleRighe)}**` +
  ` | **${percentuale(totali.linkSito, totaleRighe)}**` +
  ` | **${percentuale(totali.linkCatalogo, totaleRighe)}**` +
  ` | **${percentuale(totali.notaDisponibilita, totaleRighe)}**` +
  ` | **${totaleDaRiconfermare}** |`
);

// Il dettaglio degli stati: e' il vero motivo per cui la Fase 3 esiste.
console.log("\nStato campo per campo (mete, non partner):");
console.log("| Campo | Ha il dato | Non trovabile (con fonte) | Da riconfermare | Mai cercato |");
console.log("|---|---:|---:|---:|---:|");
for (const campo of campi) {
  const conta = { dato: 0, nonTrovabile: 0, daRiconfermare: 0, vuoto: 0 };
  for (const mete of metePerDip.values()) for (const m of mete) conta[statoCampo(m, campo)]++;
  console.log(`| ${campo} | ${conta.dato} | ${conta.nonTrovabile} | ${conta.daRiconfermare} | ${conta.vuoto} |`);
}
