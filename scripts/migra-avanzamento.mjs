// Migrazione 0g: ricostruisce una sola volta i checkpoint delle letture gia'
// lavorate. Non indovina: una coppia assente o duplicata ferma la migrazione.

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { codiciValidi, fileMete } from "./cancelli.mjs";
import { caricaMete, codiceCanonico } from "./lib-mete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const AUTOMATICI = new Set(["scadenzeOspitante", "linkSito", "notaDisponibilita"]);
const hash = (testo) => createHash("sha256").update(testo, "utf8").digest("hex");
const leggi = (file, fallback = []) => fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : fallback;
const chiave = (codice, campo) => `${codiceCanonico(codice)}\u0000${campo}`;

export function ricostruisciAvanzamento({ letture, approvati = [], scartati = [], facolta = [],
  disaccordi = [], mete = [], codici = new Set(), collisioni = [] } = {}) {
  const esiti = [...approvati, ...scartati, ...facolta];
  const conteggi = new Map();
  for (const voce of esiti) conteggi.set(chiave(voce.codiceNorm, voce.campo), (conteggi.get(chiave(voce.codiceNorm, voce.campo)) || 0) + 1);
  const collisi = new Set(collisioni.map((voce) => codiceCanonico(voce.codiceCanonico)));
  const validi = new Set([...codici].map(codiceCanonico));
  const avanzamento = {}, ambigui = [], collisioniSaltate = [];

  for (const lettura of letture) {
    const codice = codiceCanonico(lettura.dati.codiceNorm);
    if (collisi.has(codice)) { collisioniSaltate.push(codice); continue; }
    const problemi = [];
    if (!validi.has(codice)) problemi.push({ causa: "codiceSconosciuto" });
    for (const campo of Object.keys(lettura.dati.campi || {})) {
      const n = conteggi.get(chiave(codice, campo)) || 0;
      if (n !== 1) problemi.push({ campo, causa: n === 0 ? "esitoAssente" : "esitoDuplicato", occorrenze: n });
    }
    if (problemi.length) { ambigui.push({ codiceCanonico: codice, file: lettura.file, problemi }); continue; }

    const automatiche = approvati.filter((voce) => codiceCanonico(voce.codiceNorm) === codice && AUTOMATICI.has(voce.campo));
    const campiDaApplicare = new Set();
    for (const proposta of automatiche) {
      const pubblicata = mete.some((meta) => codiceCanonico(meta.codiceErasmus) === codice
        && isDeepStrictEqual(meta[proposta.campo], proposta.valore));
      const inDisaccordo = disaccordi.some((voce) => codiceCanonico(voce.codiceNorm) === codice && voce.campo === proposta.campo);
      if (!pubblicata && !inDisaccordo) campiDaApplicare.add(proposta.campo);
    }
    // Una proposta fusa ma non ancora scritta non e' ambigua: e' precisamente
    // lo stato daApplicare del piano. Il 01/09 erano 29 campi su 27 letture.
    avanzamento[codice] = { improntaLettura: hash(lettura.testo), fuso: true,
      applicato: campiDaApplicare.size === 0, campiDaApplicare: [...campiDaApplicare] };
  }
  return { avanzamento, ambigui, collisioniSaltate: [...new Set(collisioniSaltate)] };
}

export function migraAvanzamento({ radice = RADICE } = {}) {
  const raccolta = path.join(radice, "raccolta");
  const destinazione = path.join(raccolta, "avanzamento.json");
  if (fs.existsSync(destinazione)) return { giaPresente: true, avanzamento: leggi(destinazione, {}) };
  const lettureDir = path.join(raccolta, "letture");
  const letture = fs.existsSync(lettureDir) ? fs.readdirSync(lettureDir).filter((file) => file.endsWith(".json")).map((file) => {
    const testo = fs.readFileSync(path.join(lettureDir, file), "utf8");
    return { file, testo, dati: JSON.parse(testo) };
  }) : [];
  const mete = fileMete(radice).flatMap((file) => caricaMete(fs.readFileSync(file, "utf8")));
  const esito = ricostruisciAvanzamento({ letture, mete, codici: codiciValidi(radice),
    approvati: leggi(path.join(raccolta, "approvati.json")),
    scartati: leggi(path.join(raccolta, "scartati.json")),
    facolta: leggi(path.join(raccolta, "riconciliazione", "facolta.json")),
    disaccordi: leggi(path.join(raccolta, "riconciliazione", "disaccordi.json")),
    collisioni: leggi(path.join(raccolta, "collisioni.json")),
  });
  fs.writeFileSync(path.join(raccolta, "avanzamento-ambigui.json"), JSON.stringify(esito.ambigui, null, 2) + "\n");
  if (esito.ambigui.length) throw new Error(`Migrazione fermata: ${Object.keys(esito.avanzamento).length} letture ricostruibili, ${esito.collisioniSaltate.length} collisioni isolate, ${esito.ambigui.length} letture ambigue.`);
  fs.writeFileSync(destinazione, JSON.stringify(esito.avanzamento, null, 2) + "\n");
  return esito;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const esito = migraAvanzamento();
    console.log(esito.giaPresente ? `Avanzamento gia' presente: ${Object.keys(esito.avanzamento).length} letture.`
      : `Migrazione: ${Object.keys(esito.avanzamento).length} letture, ${esito.collisioniSaltate.length} collisioni isolate, 0 ambigue.`);
  } catch (errore) { console.error(errore.message); process.exitCode = 1; }
}
