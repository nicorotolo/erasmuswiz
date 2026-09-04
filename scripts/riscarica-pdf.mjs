// Riscarica i PDF che la Fase 4a aveva censito senza conservarne i byte.
// Il testo estratto diventa parte della cache della pagina, come il testo HTML.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { testoDaPdf } from "./lib-pdf.mjs";
import { aggiornaImprontaIndice } from "./leggi-partner.mjs";
import { apriLock, rilasciaLock } from "./esegui-partner.mjs";
import {
  Limitatore,
  scarica as scaricaVera,
  regoleRobots as regoleRobotsVere,
  consentitoDaRobots,
} from "./raccogli-partner.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIMENSIONE_MASSIMA = 8 * 1024 * 1024;

const normalizzaCodice = (codice) => String(codice || "").replace(/\s+/g, " ").trim().toUpperCase();
const cartellaCodice = (codice) => normalizzaCodice(codice).replace(/\s+/g, "");

function aggiungiFallimento(file, pagina, motivo) {
  const aggiornata = { ...pagina, testo: null, estrazioneFallita: motivo };
  fs.writeFileSync(file, JSON.stringify(aggiornata, null, 2) + "\n");
  aggiornaImprontaIndice(file, aggiornata);
}

function elencoPdf(radice, partner) {
  const pagine = path.join(radice, "raccolta", "pagine");
  if (!fs.existsSync(pagine)) return [];
  const voluto = partner ? normalizzaCodice(partner) : null;
  const trovati = [];
  for (const voce of fs.readdirSync(pagine, { withFileTypes: true })) {
    if (!voce.isDirectory()) continue;
    const cartella = path.join(pagine, voce.name);
    const indiceFile = path.join(cartella, "indice.json");
    if (!fs.existsSync(indiceFile)) continue;
    let indice;
    try { indice = JSON.parse(fs.readFileSync(indiceFile, "utf8")); }
    catch { continue; }
    if (voluto && normalizzaCodice(indice.codice) !== voluto && voce.name !== cartellaCodice(voluto)) continue;
    for (const riferimento of indice.pagine || []) {
      const file = path.join(cartella, riferimento.file || "");
      if (!riferimento.file || !fs.existsSync(file)) continue;
      try {
        const pagina = JSON.parse(fs.readFileSync(file, "utf8"));
        if (pagina.tipo === "pdf" && pagina.testo === null) trovati.push({ file, pagina });
      } catch { /* una pagina corrotta non deve bloccare gli altri partner */ }
    }
  }
  return trovati;
}

/**
 * Riscarica pochi o tutti i PDF pendenti. `scarica` e `regoleRobots` sono
 * parametri per rendere le prove ripetibili e senza rete; in produzione usano
 * esattamente le funzioni della Fase 4a.
 */
export async function riscaricaPdf({
  radice = RADICE,
  partner,
  limite = Infinity,
  riprovaFalliti = false,
  scarica = scaricaVera,
  regoleRobots = regoleRobotsVere,
  limitatore = new Limitatore(1),
} = {}) {
  const conti = { riscaricati: 0, letti: 0, richiesteHttp: 0, falliti: { robotsVieta: 0, nonScaricato: 0, troppoGrande: 0, nonPdf: 0, illeggibile: 0 } };
  const richiestePrima = Number(limitatore.richieste) || 0;
  const daFare = elencoPdf(radice, partner)
    .filter(({ pagina }) => riprovaFalliti || !pagina.estrazioneFallita)
    .slice(0, Number.isFinite(limite) && limite >= 0 ? limite : Infinity);

  for (const { file, pagina } of daFare) {
    const url = pagina.urlFinale;
    if (!url) { aggiungiFallimento(file, pagina, "nonScaricato"); conti.falliti.nonScaricato++; continue; }

    let regole;
    try { ({ regole } = await regoleRobots(url, limitatore)); }
    catch { aggiungiFallimento(file, pagina, "nonScaricato"); conti.falliti.nonScaricato++; continue; }
    if (!consentitoDaRobots(url, regole || [])) {
      aggiungiFallimento(file, pagina, "robotsVieta"); conti.falliti.robotsVieta++; continue;
    }

    let risposta;
    try { risposta = await scarica(url, limitatore); conti.richiesteHttp++; }
    catch { risposta = null; }
    if (!risposta?.ok || !Buffer.isBuffer(risposta.corpo)) {
      aggiungiFallimento(file, pagina, "nonScaricato"); conti.falliti.nonScaricato++; continue;
    }
    conti.riscaricati++;
    if (risposta.corpo.length > DIMENSIONE_MASSIMA) {
      aggiungiFallimento(file, pagina, "troppoGrande"); conti.falliti.troppoGrande++; continue;
    }
    if (!risposta.corpo.subarray(0, 4).equals(Buffer.from("%PDF"))) {
      aggiungiFallimento(file, pagina, "nonPdf"); conti.falliti.nonPdf++; continue;
    }
    const testo = testoDaPdf(risposta.corpo);
    if (testo === null) {
      aggiungiFallimento(file, pagina, "illeggibile"); conti.falliti.illeggibile++; continue;
    }
    const aggiornata = { ...pagina, testo, estrattoIl: new Date().toISOString() };
    delete aggiornata.estrazioneFallita;
    fs.writeFileSync(file, JSON.stringify(aggiornata, null, 2) + "\n");
    // Il testo del PDF e' materiale nuovo: senza questa riga la lettura
    // continuerebbe a credere di aver gia' visto tutto.
    aggiornaImprontaIndice(file, aggiornata);
    conti.letti++;
  }
  // Il Limitatore conta anche robots.txt; con lo scaricatore finto dei test
  // resta invece utile il conteggio delle sole chiamate PDF fatto qui sopra.
  conti.richiesteHttp = Math.max(conti.richiesteHttp, (Number(limitatore.richieste) || 0) - richiestePrima);
  return conti;
}

// Il LOCK sta qui, non dentro `riscaricaPdf`: dentro la catena il padre lo ha
// gia' preso, e prenderlo due volte fermerebbe la catena con se stessa. Da solo
// invece serve davvero: dal 03/09 questo script scrive anche `indice.json` (per
// tenere aggiornata l'impronta del contenuto), e potrebbe correre insieme a
// `recupera-motivi`, rileggere un indice prima dell'aggiunta e riscriverlo
// dopo - perdendo le pagine appena aggiunte.
async function main() {
  const lock = apriLock(RADICE, { pid: process.pid, quando: "" });
  if (!lock.preso) { console.error(`Fermato: ${lock.motivo}`); process.exitCode = 1; return; }
  try { await eseguiDaSolo(); } finally { rilasciaLock(RADICE); }
}

async function eseguiDaSolo() {
  const argomento = (nome) => process.argv.find((arg) => arg.startsWith(`--${nome}=`))?.slice(nome.length + 3);
  const limiteGrezz = argomento("limite");
  const limite = limiteGrezz == null ? Infinity : Number(limiteGrezz);
  if (limiteGrezz != null && (!Number.isInteger(limite) || limite < 0)) throw new Error("--limite deve essere un intero non negativo");
  const esito = await riscaricaPdf({ partner: argomento("partner"), limite, riprovaFalliti: process.argv.includes("--riprova-falliti") });
  const falliti = Object.entries(esito.falliti).map(([motivo, quanti]) => `${motivo}: ${quanti}`).join("; ");
  console.log(`PDF riscaricati: ${esito.riscaricati}; letti: ${esito.letti}; falliti (${falliti}); richieste HTTP: ${esito.richiesteHttp}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((errore) => { console.error(errore.message); process.exitCode = 1; });
}
