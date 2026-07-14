#!/usr/bin/env node
// Report read-only della copertura dati. Non modifica file o stato.
import fs from "node:fs";
import { caricaMete } from "./lib-mete.mjs";

const stato = JSON.parse(fs.readFileSync("mappatura-stato.json", "utf8"));
const campi = ["requisitoLingua", "scadenzeOspitante", "linkSito", "linkCatalogo", "notaDisponibilita"];
const pieno = (valore) => Array.isArray(valore) ? valore.length > 0 : typeof valore === "string" && valore.trim().length > 0;
const percentuale = (n, totale) => totale ? `${Math.round(n * 100 / totale)}%` : "-";
const righe = [];
const totali = Object.fromEntries(campi.map((c) => [c, 0]));
let totaleRighe = 0;
const sorgenti = new Map();
for (const [dipartimento, info] of Object.entries(stato.statoDipartimenti || {})) {
  if (info.fileJs) sorgenti.set(dipartimento, info.fileJs);
}
for (const batch of stato.prossimiBatch || []) {
  if (batch.tipo === "nuovo_dipartimento" && batch.fileJs && !sorgenti.has(batch.dipartimento)) {
    sorgenti.set(batch.dipartimento, batch.fileJs);
  }
}

for (const [dipartimento, fileJs] of sorgenti) {
  if (!fs.existsSync(fileJs)) continue;
  let mete;
  try { mete = caricaMete(fs.readFileSync(fileJs, "utf8")); }
  catch { continue; }
  const conteggi = Object.fromEntries(campi.map((campo) => [campo, mete.filter((m) => pieno(m[campo])).length]));
  righe.push({ dipartimento, totale: mete.length, conteggi });
  totaleRighe += mete.length;
  for (const campo of campi) totali[campo] += conteggi[campo];
}

console.log("| Dipartimento/Facolta | Mete | Lingua | Scadenze | Sito | Catalogo | Disponibilita |");
console.log("|---|---:|---:|---:|---:|---:|---:|");
for (const r of righe) {
  console.log(`| ${r.dipartimento.replace(/\|/g, "/")} | ${r.totale} | ${percentuale(r.conteggi.requisitoLingua, r.totale)} | ${percentuale(r.conteggi.scadenzeOspitante, r.totale)} | ${percentuale(r.conteggi.linkSito, r.totale)} | ${percentuale(r.conteggi.linkCatalogo, r.totale)} | ${percentuale(r.conteggi.notaDisponibilita, r.totale)} |`);
}
console.log(`| **TOTALE** | **${totaleRighe}** | **${percentuale(totali.requisitoLingua, totaleRighe)}** | **${percentuale(totali.scadenzeOspitante, totaleRighe)}** | **${percentuale(totali.linkSito, totaleRighe)}** | **${percentuale(totali.linkCatalogo, totaleRighe)}** | **${percentuale(totali.notaDisponibilita, totaleRighe)}** |`);
