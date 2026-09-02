// Versa nel registro i verdetti umani, e applica ai dati i soli "si".
//
// E' un atto separato dalla catena, e deve restarlo: `esegui-partner.mjs` ha un
// cancello che gli vieta linkCatalogo e requisitoLingua, perche' per quei campi
// tre ipotesi di cancello automatico sono state misurate il 01/09 sui casi
// etichettati a mano e bocciate tutte e tre. Qui il cancello non sparisce,
// cambia: ogni valore deve dimostrare di avere un "si" nel registro, e la prova
// e' l'impronta del valore. Se il valore e' cambiato dopo il giudizio,
// l'impronta non combacia e quel giudizio non vale piu'.
//
// Il "no" e il "non so" NON toccano i dati: diventano eventi, e basta. Il "no"
// non torna mai piu' in coda; il "non so" resta riconoscibile per un riesame.
//
// Uso: node scripts/applica-arbitrato.mjs <file-verdetti.json> [--prova]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { codiceCanonico } from "./lib-mete.mjs";
import { applicaPartner } from "./applica-partner.mjs";
import {
  CAMPI_ARBITRATO, appendiEventi, applicaEControlla, chiaveGiudizio, costruisciCode,
  gitVero, improntaValore, leggiRegistro,
} from "./esegui-partner.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ESITI = new Set(["si", "no", "nonSo"]);

// Un verdetto vale solo se punta a una proposta che esiste ANCORA con quel
// valore. Senza questo controllo, un verdetto vecchio incollato per sbaglio
// applicherebbe un valore che nessuno ha giudicato.
export function abbinaVerdetti({ radice = RADICE, verdetti, approvati } = {}) {
  const proposte = approvati || JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "approvati.json"), "utf8"));
  const perImpronta = new Map();
  for (const p of proposte) {
    if (!CAMPI_ARBITRATO.includes(p.campo)) continue;
    perImpronta.set(chiaveGiudizio(p.codiceNorm, p.campo, improntaValore(p.valore)), p);
  }
  const abbinati = [], orfani = [];
  for (const v of verdetti) {
    if (!ESITI.has(v.esito)) { orfani.push({ ...v, causa: "esitoSconosciuto" }); continue; }
    const p = perImpronta.get(chiaveGiudizio(v.codiceCanonico, v.campo, v.improntaProposta));
    if (!p) { orfani.push({ ...v, causa: "improntaSenzaProposta" }); continue; }
    abbinati.push({ verdetto: v, proposta: p });
  }
  return { abbinati, orfani };
}

export async function applicaArbitrato({
  radice = RADICE, verdetti, approvati, prova = false, git = gitVero, applica = applicaPartner, quando = "",
} = {}) {
  const { abbinati, orfani } = abbinaVerdetti({ radice, verdetti, approvati });
  // Un solo orfano ferma tutto: se un verdetto non si abbina, o l'elenco non e'
  // quello che credo o il valore e' cambiato. In entrambi i casi applicare
  // sarebbe indovinare.
  if (orfani.length) {
    throw new Error(`${orfani.length} verdetti non abbinati a nessuna proposta: `
      + orfani.map((o) => `${o.codiceCanonico}/${o.campo} (${o.causa})`).join(", "));
  }

  const registro = leggiRegistro(radice);
  // LA STESSA funzione che costruisce le chiavi del registro. Averla riscritta
  // qui con un separatore diverso rendeva il controllo "esiste gia'" sempre falso,
  // e gli eventi finivano scritti due volte. E' il secondo caso oggi di una
  // chiave costruita in due posti: adesso il posto e' uno solo.
  const chiave = (v) => chiaveGiudizio(v.codiceCanonico, v.campo, v.improntaProposta);
  const nuovi = abbinati.filter(({ verdetto }) => !registro.has(chiave(verdetto)));
  const eventi = nuovi.map(({ verdetto }) => ({
    codiceCanonico: codiceCanonico(verdetto.codiceCanonico), campo: verdetto.campo,
    improntaProposta: verdetto.improntaProposta, esito: verdetto.esito, quando, fonte: "arbitrato umano",
  }));
  // Gli eventi si scrivono ANCHE in anteprima, ed e' voluto: registrare cio' che
  // Nicola ha deciso non e' applicarlo ai dati del sito. Il giudizio e' un fatto
  // avvenuto, e il registro e' il posto dove i fatti si annotano; l'anteprima
  // riguarda la scrittura nelle mete, che e' l'atto revisionabile. Tenerli
  // insieme aveva un effetto assurdo: l'anteprima si rifiutava da sola, perche'
  // il cancello cercava nel registro un "si" che l'anteprima non aveva scritto.
  appendiEventi(radice, eventi);

  const daApplicare = abbinati.filter(({ verdetto }) => verdetto.esito === "si").map(({ proposta }) => proposta);
  const campi = [...new Set(daApplicare.map((p) => p.campo))];
  const conti = { verdetti: verdetti.length, eventiNuovi: eventi.length,
    si: abbinati.filter((a) => a.verdetto.esito === "si").length,
    no: abbinati.filter((a) => a.verdetto.esito === "no").length,
    nonSo: abbinati.filter((a) => a.verdetto.esito === "nonSo").length };

  if (!daApplicare.length) return { ...conti, scritti: 0, confronto: null, commit: null };

  const esito = await applicaEControlla({
    radice, proposte: daApplicare, campi,
    etichetta: `arbitrato: ${campi.join(", ")}`,
    idTransazione: `arb-${improntaValore(verdetti).slice(0, 12)}`,
    prova, git, applica,
  });

  // Il "si" diventa "applicato" solo DOPO che la scrittura e' passata: un
  // secondo evento, non una riga riscritta, cosi' la storia resta leggibile.
  if (!prova && !esito.annullato && esito.commit) {
    appendiEventi(radice, abbinati.filter(({ verdetto }) => verdetto.esito === "si").map(({ verdetto }) => ({
      codiceCanonico: codiceCanonico(verdetto.codiceCanonico), campo: verdetto.campo,
      improntaProposta: verdetto.improntaProposta, esito: "applicato", quando, fonte: esito.commit,
    })));
  }
  if (!prova) costruisciCode({ radice });
  return { ...conti, ...esito };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const file = process.argv.slice(2).find((a) => !a.startsWith("--"));
  if (!file) { console.error("Uso: node scripts/applica-arbitrato.mjs <file-verdetti.json> [--prova]"); process.exitCode = 1; }
  else {
    const prova = process.argv.includes("--prova");
    const verdetti = JSON.parse(fs.readFileSync(file, "utf8"));
    applicaArbitrato({ verdetti, prova, quando: new Date().toISOString().slice(0, 10) }).then((e) => {
      console.log(`${prova ? "Anteprima" : "Arbitrato"}: ${e.verdetti} verdetti — ${e.si} si, ${e.nonSo} non so, ${e.no} no; ${e.eventiNuovi} eventi nuovi.`);
      if (e.confronto) {
        console.log(`Confronto: ${e.confronto.ok ? "ok" : "FALLITO"} — ${JSON.stringify(e.confronto.scritti)}; mete ${e.confronto.mete}.`);
        if (!e.confronto.ok) console.log("Problemi:", JSON.stringify(e.confronto.problemi.slice(0, 5)));
      }
      console.log(`Campi-meta scritti: ${e.scritti}. Commit: ${e.commit || "nessuno"}.`);
    }).catch((errore) => { console.error(errore.message); process.exitCode = 1; });
  }
}
