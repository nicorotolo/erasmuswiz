// applica-partner.mjs — applica nei dati le proposte gia' passate dai cancelli.
// Uso: node scripts/applica-partner.mjs [--prova]

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { fileMete } from "./cancelli.mjs";
import { campoVuoto, caricaMete, codiceCanonico, impostaCampo, normalizzaNonTrovato, serializza, spanTutteMete, statoCampo, valoreCampo } from "./lib-mete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const leggiJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const dataLettura = (lettura) => String(lettura?.lettoIl || new Date().toISOString()).slice(0, 10);

function cancelliDiSistemaVeri(radice) {
  // Le prove usano una radice finta senza gli altri script del progetto.
  if (radice !== RADICE) return;
  execFileSync(process.execPath, ["scripts/verifica-completezza.mjs"], { cwd: radice, stdio: "inherit" });
  execFileSync(process.execPath, ["scripts/valida-stato.mjs"], { cwd: radice, stdio: "inherit" });
}

function valoreUguale(grezzo, proposto) {
  try { return isDeepStrictEqual(Function(`"use strict"; return (${grezzo});`)(), proposto); }
  catch { return grezzo === serializza(proposto); }
}

function contaCaratteriCambiati(prima, dopo) {
  let inizio = 0;
  while (inizio < prima.length && inizio < dopo.length && prima[inizio] === dopo[inizio]) inizio++;
  let finePrima = prima.length - 1, fineDopo = dopo.length - 1;
  while (finePrima >= inizio && fineDopo >= inizio && prima[finePrima] === dopo[fineDopo]) { finePrima--; fineDopo--; }
  return Math.max(finePrima - inizio + 1, fineDopo - inizio + 1);
}

function lettureDaCartella(radice) {
  const cartella = path.join(radice, "raccolta", "letture");
  if (!fs.existsSync(cartella)) return [];
  return fs.readdirSync(cartella)
    .filter((file) => file.endsWith(".json"))
    .map((file) => leggiJson(path.join(cartella, file)));
}

function fontiEsistenti(radice) {
  const file = path.join(radice, "raccolta", "FONTI-partner.json");
  if (!fs.existsSync(file)) return {};
  const normalizzate = {};
  for (const [codice, campi] of Object.entries(leggiJson(file))) {
    Object.assign(normalizzate[codiceCanonico(codice)] ||= {}, campi);
  }
  return normalizzate;
}

function chiaveDisaccordo(disaccordo) {
  return [codiceCanonico(disaccordo.codiceNorm), disaccordo.campo, path.resolve(disaccordo.file)].join("\u0000");
}

function disaccordiEsistenti(radice) {
  const file = path.join(radice, "raccolta", "riconciliazione", "disaccordi.json");
  return fs.existsSync(file) ? leggiJson(file) : [];
}

// Il giro del 01/09 su un solo campo aveva cancellato le prove raccolte dagli
// altri giri. La chiave comprende codice, campo e file: una prova aggiornata
// sostituisce la propria versione precedente, senza distruggere le altre.
export function unisciDisaccordi(esistenti, nuovi) {
  const uniti = new Map(esistenti.map((voce) => [chiaveDisaccordo(voce), voce]));
  for (const voce of nuovi) uniti.set(chiaveDisaccordo(voce), voce);
  return [...uniti.values()];
}

// La misura 0c parte da 8 chiavi: impedire nuove perdite non recupera quelle
// gia' avvenute. Una fonte storica torna affidabile solo se il valore della
// proposta coincide esattamente con quello oggi pubblicato; gli altri casi
// vengono scritti in chiaro, non nascosti da un file incompleto.
export function ricostruisciFonti({ radice = RADICE, approvati } = {}) {
  const raccolta = path.join(radice, "raccolta");
  const proposte = approvati || leggiJson(path.join(raccolta, "approvati.json"));
  const fonti = fontiEsistenti(radice);
  const mete = fileMete(radice).flatMap((file) => caricaMete(fs.readFileSync(file, "utf8")));
  const irrecuperabili = [];
  let recuperate = 0;
  for (const proposta of proposte) {
    const codice = codiceCanonico(proposta.codiceNorm);
    const pubblicato = mete.some((meta) => codiceCanonico(meta.codiceErasmus) === codice
      && isDeepStrictEqual(meta[proposta.campo], proposta.valore));
    if (pubblicato && proposta.fonte?.url) {
      const campi = fonti[codice] ||= {};
      if (!campi[proposta.campo]) recuperate++;
      campi[proposta.campo] ||= proposta.fonte.url;
    } else {
      irrecuperabili.push({ codiceNorm: proposta.codiceNorm, codiceCanonico: codice,
        campo: proposta.campo, causa: pubblicato ? "fonteAssente" : "valoreNonPubblicato" });
    }
  }
  fs.mkdirSync(raccolta, { recursive: true });
  fs.writeFileSync(path.join(raccolta, "FONTI-partner.json"), JSON.stringify(fonti, null, 2) + "\n");
  fs.writeFileSync(path.join(raccolta, "fonti-irrecuperabili.json"), JSON.stringify(irrecuperabili, null, 2) + "\n");
  return { fonti, recuperate, irrecuperabili };
}

export function ricostruisciDisaccordi({ radice = RADICE, approvati } = {}) {
  const raccolta = path.join(radice, "raccolta");
  const proposte = approvati || leggiJson(path.join(raccolta, "approvati.json"));
  const originali = new Map(fileMete(radice).map((file) => [file, fs.readFileSync(file, "utf8")]));
  const automatici = new Set(["scadenzeOspitante", "linkSito", "notaDisponibilita"]);
  const primoGiro = preparaApplicazione({ originali,
    proposte: proposte.filter((p) => automatici.has(p.campo)), letture: [] });
  const secondoGiro = preparaApplicazione({ originali,
    proposte: proposte.filter((p) => !automatici.has(p.campo)), letture: [] });
  const disaccordi = unisciDisaccordi(disaccordiEsistenti(radice),
    [...primoGiro.disaccordi, ...secondoGiro.disaccordi]);
  fs.mkdirSync(path.join(raccolta, "riconciliazione"), { recursive: true });
  fs.writeFileSync(path.join(raccolta, "riconciliazione", "disaccordi.json"), JSON.stringify(disaccordi, null, 2) + "\n");
  return { disaccordi, automatici: primoGiro.disaccordi.length, restanti: secondoGiro.disaccordi.length };
}

function sostituisciBlocchi(testo, codice, modifica) {
  const spans = spanTutteMete(testo, codice).sort((a, b) => b.start - a.start);
  let nuovo = testo;
  for (const { start, end } of spans) {
    const esito = modifica(nuovo.slice(start, end));
    nuovo = nuovo.slice(0, start) + esito + nuovo.slice(end);
  }
  return nuovo;
}

function codiciNelFile(testo, codiceNorm) {
  return [...new Set(caricaMete(testo)
    .filter((meta) => codiceCanonico(meta.codiceErasmus) === codiceNorm)
    .map((meta) => meta.codiceErasmus))];
}

function aggiungiNonTrovabile(blocco, campo, lettura) {
  let meta;
  try { meta = Function(`"use strict"; return (${blocco});`)(); }
  catch { throw new Error("Blocco meta non leggibile"); }
  // Rete di sicurezza, non la decisione: chi chiama entra qui solo quando
  // statoCampo dice "vuoto", e con una voce nonTrovabile presente statoCampo
  // non dice mai "vuoto". Oggi questa riga non scatta mai; resta perche' se un
  // giorno la guardia del chiamante cambia, il dato esistente e' comunque
  // protetto. Chi cerca la regola vera la trova nel secondo ciclo, non qui.
  if (meta?.nonTrovabile?.[campo]) return { blocco, modificato: false };
  // La forma vecchia era un numero nudo, la nuova un oggetto con ambito: si
  // legge una sola definizione, cosi' le 479 letture gia' fatte continuano a
  // valere e non serve una migrazione di massa.
  const assenza = normalizzaNonTrovato(lettura.nonTrovati?.[campo]);
  const pagina = new Map((lettura.pagineInviate || []).map((p) => [p.n, p])).get(assenza?.paginaCitata);
  if (!pagina?.url) return { blocco, modificato: false, saltato: true };
  const nonTrovabile = { ...(meta.nonTrovabile || {}), [campo]: { cercatoIl: dataLettura(lettura), fonte: pagina.url,
    // L'ambito viaggia col marcatore: il Passo 3 ne ha bisogno per decidere se
    // l'assenza vale su tutte le mete del codice o solo su una facolta'.
    livello: assenza.livello, ambito: assenza.ambito } };
  return impostaCampo(blocco, "nonTrovabile", nonTrovabile);
}

// Il gemello di aggiungiNonTrovabile: quando il dato arriva, "cercato senza
// esito" ha smesso di essere vero e va tolto. Non tocca gli altri campi.
export function togliNonTrovabile(blocco, campo) {
  let meta;
  try { meta = Function(`"use strict"; return (${blocco});`)(); }
  catch { return { blocco, modificato: false }; }
  if (!meta?.nonTrovabile?.[campo]) return { blocco, modificato: false };
  const resto = { ...meta.nonTrovabile };
  delete resto[campo];
  return impostaCampo(blocco, "nonTrovabile", resto);
}

// Funzione pura 0f: riceve testi e decisioni gia' caricati e prepara l'intera
// applicazione senza leggere o scrivere il disco. Prima --prova restituiva 0
// contenuti prospettici; ora anteprima e scrittura vera consumano la stessa
// mappa file -> testo, quindi non possono divergere silenziosamente.
export function preparaApplicazione({ originali, proposte, letture }) {
  const fileNuovi = new Map(originali);
  const disaccordi = [];
  const fontiNuove = {};
  let scritti = 0, uguali = 0, nonTrovabili = 0, nonTrovatiSaltati = 0, nonTrovabileSaltatiPieni = 0;

  for (const proposta of proposte) {
    const codiceNorm = codiceCanonico(proposta.codiceNorm);
    for (const [file] of originali) {
      const codici = codiciNelFile(fileNuovi.get(file), codiceNorm);
      for (const codice of codici) {
        fileNuovi.set(file, sostituisciBlocchi(fileNuovi.get(file), codice, (blocco) => {
          const grezzo = valoreCampo(blocco, proposta.campo);
          if (!campoVuoto(grezzo)) {
            if (valoreUguale(grezzo, proposta.valore)) uguali++;
            else disaccordi.push({ codiceNorm: proposta.codiceNorm, campo: proposta.campo, file,
              valoreEsistente: grezzo, valoreProposto: proposta.valore, fonte: proposta.fonte });
            return blocco;
          }
          const esito = impostaCampo(blocco, proposta.campo, proposta.valore, { soloSeVuoto: true });
          if (esito.modificato) {
            scritti++;
            ((fontiNuove[codiceNorm] ||= {})[proposta.campo] = proposta.fonte?.url);
            // Scrivere il dato e lasciare il marcatore farebbe dire alla meta due
            // cose incompatibili: "ecco il valore" e "cercato senza esito". E' un
            // invariante dei dati pubblicati (test/stato-campo.test.mjs), e il
            // 03/09 si e' rotto per davvero riempiendo PL KATOWIC01 e
            // RO TIMISOA01, che erano `daRiconfermare` con un marcatore V1.
            return togliNonTrovabile(esito.blocco, proposta.campo).blocco;
          }
          return esito.blocco;
        }));
      }
    }
  }

  for (const lettura of letture) {
    const codiceNorm = codiceCanonico(lettura.codiceNorm);
    for (const campo of Object.keys(lettura.nonTrovati || {})) {
      for (const [file] of originali) {
        const codici = codiciNelFile(fileNuovi.get(file), codiceNorm);
        for (const codice of codici) {
          fileNuovi.set(file, sostituisciBlocchi(fileNuovi.get(file), codice, (blocco) => {
            let meta;
            try { meta = Function(`"use strict"; return (${blocco});`)(); } catch { meta = null; }
            const stato = statoCampo(meta, campo);
            if (stato !== "vuoto") {
              if (stato === "dato") nonTrovabileSaltatiPieni++;
              return blocco;
            }
            const esito = aggiungiNonTrovabile(blocco, campo, lettura);
            if (esito.modificato) nonTrovabili++;
            if (esito.saltato) nonTrovatiSaltati++;
            return esito.blocco;
          }));
        }
      }
    }
  }

  const fileToccati = [...fileNuovi].filter(([file, testo]) => testo !== originali.get(file)).map(([file]) => file);
  return { fileNuovi, scritti, uguali, nonTrovabili, nonTrovatiSaltati,
    nonTrovabileSaltatiPieni, disaccordi, fontiNuove, fileToccati };
}

// Il recupero dell'arbitrato non deve inventare una seconda uguaglianza. Passa
// una proposta alla STESSA preparazione che applica a tutte le occorrenze del
// codice (anche su file diversi) e ne legge il risultato senza scrivere nulla.
export function statoApplicazioneProposta({ radice = RADICE, proposta } = {}) {
  const originali = new Map(fileMete(radice).map((file) => [file, fs.readFileSync(file, "utf8")]));
  const esito = preparaApplicazione({ originali, proposte: [proposta], letture: [] });
  const diverse = esito.disaccordi.length;
  const occorrenze = esito.scritti + esito.uguali + diverse;
  if (!occorrenze) return { stato: "metaAssente", ...esito };
  if (diverse) return { stato: "conflitto", ...esito };
  if (esito.scritti && esito.uguali) return { stato: "misto", ...esito };
  if (esito.scritti) return { stato: "vuoto", ...esito };
  return { stato: "uguale", ...esito };
}

// `campi` limita l'applicazione ad alcuni campi soltanto, e non e' un dettaglio
// tecnico: il 31/08 l'arbitrato umano dei 30 campi ha promosso linkSito,
// scadenzeOspitante e notaDisponibilita (16 su 16) e bocciato linkCatalogo
// (7 su 10) e requisitoLingua. Si applica cio' di cui ci si fida, il resto
// resta in cache e aspetta una lettura migliore: non si butta niente.
export async function applicaPartner({ radice = RADICE, approvati, letture, campi, prova = false, cancelliDiSistema = cancelliDiSistemaVeri } = {}) {
  const raccolta = path.join(radice, "raccolta");
  const ammessi = campi && campi.length ? new Set(campi) : null;
  const tutteProposte = approvati || leggiJson(path.join(raccolta, "approvati.json"));
  const proposte = ammessi ? tutteProposte.filter((p) => ammessi.has(p.campo)) : tutteProposte;
  const tutteLetture = letture || lettureDaCartella(radice);
  const originali = new Map(fileMete(radice).map((file) => [file, fs.readFileSync(file, "utf8")]));
  const fonti = fontiEsistenti(radice);
  const disaccordi = disaccordiEsistenti(radice);
  const preparata = preparaApplicazione({ originali, proposte, letture: tutteLetture });
  for (const [codice, campiFonte] of Object.entries(preparata.fontiNuove)) Object.assign(fonti[codice] ||= {}, campiFonte);
  const modificati = preparata.fileToccati.map((file) => [file, preparata.fileNuovi.get(file)]);
  const { fileNuovi, fontiNuove, ...conteggi } = preparata;
  const risultato = { ...conteggi, fonti, contenutoProspettico: new Map(modificati) };
  if (prova) {
    fs.mkdirSync(raccolta, { recursive: true });
    const { contenutoProspettico, disaccordi, ...riepilogo } = risultato;
    // Il chiamante ha bisogno dei testi prospettici, il file di consultazione
    // no: il 01/09 serializzarli lo aveva gonfiato da 5 KB a oltre 3 MB.
    riepilogo.fileProspettici = [...contenutoProspettico].map(([file, testo]) => ({
      file, caratteriCambiati: contaCaratteriCambiati(originali.get(file), testo),
    }));
    // I dettagli restano nel valore restituito e, nell'applicazione vera, nel
    // registro dedicato. Duplicarli nell'anteprima superava ancora 100 KB.
    riepilogo.disaccordi = disaccordi.length;
    fs.writeFileSync(path.join(raccolta, "anteprima-partner.json"), JSON.stringify(riepilogo, null, 2) + "\n");
    return risultato;
  }

  try {
    for (const [file, testo] of modificati) fs.writeFileSync(file, testo);
    for (const [file] of modificati) execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
    await cancelliDiSistema(radice);
  } catch (errore) {
    for (const [file] of modificati) fs.writeFileSync(file, originali.get(file));
    throw new Error(`Applicazione non valida: tutto annullato. ${errore.stderr?.toString() || errore.message}`);
  }

  fs.mkdirSync(path.join(raccolta, "riconciliazione"), { recursive: true });
  const disaccordiUniti = unisciDisaccordi(disaccordi, risultato.disaccordi);
  fs.writeFileSync(path.join(raccolta, "riconciliazione", "disaccordi.json"), JSON.stringify(disaccordiUniti, null, 2) + "\n");
  fs.writeFileSync(path.join(raccolta, "FONTI-partner.json"), JSON.stringify(fonti, null, 2) + "\n");

  return risultato;
}

async function main() {
  if (process.argv.includes("--ricostruisci-disaccordi")) {
    const esito = ricostruisciDisaccordi();
    console.log(`Disaccordi: ${esito.disaccordi.length} totali; ${esito.automatici} dai tre campi automatici; ${esito.restanti} dai campi restanti.`);
    return;
  }
  if (process.argv.includes("--ricostruisci-fonti")) {
    const esito = ricostruisciFonti();
    console.log(`Fonti: ${Object.keys(esito.fonti).length} chiavi; ${esito.recuperate} campi recuperati; ${esito.irrecuperabili.length} proposte irrecuperabili.`);
    return;
  }
  const prova = process.argv.includes("--prova");
  const campi = (process.argv.find((a) => a.startsWith("--campi=")) || "").slice(8).split(",").filter(Boolean);
  // Senza letture non si scrive nessun nonTrovabile: e' una scelta a parte
  // rispetto all'applicare i valori, e va poterla fare separatamente.
  const letture = process.argv.includes("--niente-non-trovabile") ? [] : undefined;
  const esito = await applicaPartner({ prova, campi, letture });
  console.log(`${prova ? "Anteprima" : "Applicazione"}: ${esito.scritti} campi scritti, ${esito.nonTrovabili} nonTrovabile, ${esito.nonTrovabileSaltatiPieni} nonTrovabile saltati per campo pieno, ${esito.disaccordi.length} disaccordi.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((errore) => { console.error(errore.message); process.exitCode = 1; });
