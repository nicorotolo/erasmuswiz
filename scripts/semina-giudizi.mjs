// Migrazione una-tantum: porta nel registro l'arbitrato umano del 01/09, che
// su disco non esiste piu'.
//
// Nicola giudico' a mano 103 linkCatalogo (68 si', 12 non so, 23 no; poi 8 dei
// non so promossi come motori di ricerca) e boccio' 12 requisitoLingua il
// 31/08. Di quei verdetti sopravvive solo la meta': chi ha il valore PUBBLICATO
// fu un si'. Per gli altri non sappiamo se furono "no" o "non so", e fonderli
// in "no" cancellerebbe la differenza fra bocciato e da riesaminare.
//
// Senza questa migrazione la coda di arbitrato ripropone i valori gia' scartati:
// misurato il 01/09, la coda usciva con 107 voci invece di 4.
//
// NON e' un passo della catena, ed e' importante che non lo sia: una proposta
// NUOVA non e' mai stata giudicata da nessuno, e seminarla la seppellirebbe
// senza che nessuno l'abbia guardata. Percio' si escludono i partner che la
// catena ha gia' lavorato, leggendoli dal suo diario.
//
// Uso: node scripts/semina-giudizi.mjs [--prova]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { caricaMete, codiceCanonico } from "./lib-mete.mjs";
import { fileMete } from "./cancelli.mjs";
import { CAMPI_ARBITRATO, appendiEventi, improntaValore, leggiRegistro } from "./esegui-partner.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const leggi = (f, fallback) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : fallback);

// I partner gia' lavorati dalla catena: le loro proposte sono nate DOPO
// l'arbitrato, quindi nessuno le ha mai viste.
export function codiciDopoArbitrato(radice = RADICE) {
  const file = path.join(radice, "raccolta", "esegui-partner.jsonl");
  const codici = new Set();
  if (!fs.existsSync(file)) return codici;
  for (const riga of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    if (!riga.trim()) continue;
    try { for (const c of JSON.parse(riga).codici || []) codici.add(codiceCanonico(c)); } catch { /* riga rotta: si salta */ }
  }
  return codici;
}

export function seminaArbitrato({ radice = RADICE, approvati, mete, esclusi, quando = "2026-09-01", prova = false } = {}) {
  const raccolta = path.join(radice, "raccolta");
  if (fs.existsSync(path.join(raccolta, "giudizi.jsonl"))) {
    return { giaFatta: true, voci: leggiRegistro(radice).size };
  }
  const proposte = approvati || leggi(path.join(raccolta, "approvati.json"), []);
  const tutteMete = mete || fileMete(radice).flatMap((f) => caricaMete(fs.readFileSync(f, "utf8")));
  const fuori = esclusi || codiciDopoArbitrato(radice);
  const eventi = [];
  const conti = { applicato: 0, legacyGiudicato: 0, saltatiPerchePosteriori: 0 };
  for (const p of proposte.filter((x) => CAMPI_ARBITRATO.includes(x.campo))) {
    const codice = codiceCanonico(p.codiceNorm);
    if (fuori.has(codice)) { conti.saltatiPerchePosteriori++; continue; }
    // "Campo pieno" non basta: dev'essere UGUAGLIANZA PROFONDA fra la proposta e
    // il valore pubblicato, o un campo riempito da un'altra fonte verrebbe
    // scambiato per un si' dato a QUESTA proposta.
    const pubblicato = tutteMete.some((m) => codiceCanonico(m.codiceErasmus) === codice
      && isDeepStrictEqual(m[p.campo], p.valore));
    const esito = pubblicato ? "applicato" : "legacyGiudicato";
    conti[esito]++;
    eventi.push({ codiceCanonico: codice, campo: p.campo, improntaProposta: improntaValore(p.valore),
      esito, quando, fonte: p.fonte?.url || null });
  }
  if (!prova) appendiEventi(radice, eventi);
  return { ...conti, eventi: eventi.length, prova };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const esito = seminaArbitrato({ prova: process.argv.includes("--prova") });
  if (esito.giaFatta) console.log(`Registro gia' seminato: ${esito.voci} voci. Non tocco niente.`);
  else console.log(`${esito.prova ? "Anteprima" : "Semina"}: ${esito.eventi} eventi — ${esito.applicato} applicato, ${esito.legacyGiudicato} legacyGiudicato; ${esito.saltatiPerchePosteriori} saltati perche' posteriori all'arbitrato.`);
}
