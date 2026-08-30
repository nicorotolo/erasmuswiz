import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { caricaMete } from "./lib-mete.mjs";
import { validaFonte, validaValore } from "./lib-output-batch.mjs";
import { statoLink as statoLinkVero } from "./lib-link.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PAROLE_FACOLTA = /faculty|fakultat|faculte|facolta|facultad|department|departement|dipartiment|institut|school of|wydzial|kar|fakulteta/i;
const CAMPI_STRETTI = new Set(["requisitoLingua", "scadenzeOspitante", "notaDisponibilita"]);

const norm = (s) => String(s || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();
const normCodice = (s) => String(s || "").replace(/\s+/g, " ").trim().toUpperCase();
const impronta = (testo) => createHash("sha256").update(testo, "utf8").digest("hex");
const pausa = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function citazioneValida(citazione, testoInviato) {
  const c = norm(citazione);
  if (c.length < 20 || c.split(/\s+/).filter(Boolean).length > 35) return { ok: false, causa: "citazioneFuoriMisura" };
  return norm(testoInviato).includes(c) ? { ok: true } : { ok: false, causa: "citazioneAssente" };
}

// Il cancello della citazione garantisce che la FRASE esista, non che il DATO
// ci sia dentro. Misurato il 30/08 sera sulle 244 letture vere: 6 requisitoLingua
// su 33 (18%) proponevano un livello CEFR che nella citazione non compariva.
// Il modello legge "fluent in English", "Good command of English", "IELTS 6.0"
// e ci attacca un livello di sua iniziativa - che e' esattamente la traduzione
// di valori ambigui che il progetto vieta. Dirlo nel prompt non e' bastato:
// una regola e' un suggerimento, un cancello e' legge.
export function livelliCitati(valore, citazione) {
  if (!valore || typeof valore !== "object") return { ok: true };
  const c = norm(citazione);
  const livelli = new Set();
  const gira = (nodo) => {
    if (!nodo || typeof nodo !== "object") return;
    if (Array.isArray(nodo.figli)) nodo.figli.forEach(gira);
    else if (typeof nodo.livello === "string") livelli.add(nodo.livello.trim().toUpperCase());
  };
  gira(valore);
  const assenti = [...livelli].filter((l) => !c.includes(l.toLowerCase()));
  return assenti.length ? { ok: false, causa: "livelloNonCitato", assenti } : { ok: true };
}

export function applicaCancelloLivello(campo, proposta, pagina = {}) {
  // Un livello che non e' ne' "ateneo" ne' "facolta" NON e' un livello di
  // ateneo. Misurato il 30/08 sera: S GOTEBOR01 scriveva "level" invece di
  // "livello" e dichiarava "facolta" con ambito "Institutionen for svenska";
  // leggendo la chiave giusta il cancello trovava undefined e lo trattava come
  // "ateneo", quindi un dato di dipartimento sarebbe entrato nei file del sito.
  // Il dubbio va sempre verso il livello piu' stretto (§3.2 punto 3).
  const dichiarato = proposta.livello === "ateneo" || proposta.livello === "facolta" ? proposta.livello : null;
  const declassato = dichiarato === "ateneo" && PAROLE_FACOLTA.test(`${proposta.fonte?.url || ""} ${pagina.titolo || proposta.titoloPagina || ""}`);
  const livello = dichiarato === "ateneo" && !declassato ? "ateneo" : "facolta";
  return { ...proposta, livello, dichiarato, declassato, approvato: !(CAMPI_STRETTI.has(campo) && livello === "facolta") };
}

function fileMete(radice) {
  const trovati = [];
  const visita = (cartella) => {
    if (!fs.existsSync(cartella)) return;
    for (const voce of fs.readdirSync(cartella, { withFileTypes: true })) {
      const file = path.join(cartella, voce.name);
      if (voce.isDirectory()) visita(file);
      else if (/^dati-mete.*\.js$/.test(voce.name)) trovati.push(file);
    }
  };
  visita(path.join(radice, "js", "atenei"));
  return trovati;
}

export function codiciValidi(radice = RADICE) {
  const codici = new Set();
  const dirCsv = path.join(radice, "fonti", "sapienza", "goerasmus");
  if (fs.existsSync(dirCsv)) {
    for (const file of fs.readdirSync(dirCsv).filter((nome) => nome.endsWith(".csv"))) {
      for (const riga of fs.readFileSync(path.join(dirCsv, file), "utf8").split(/\r?\n/).slice(1)) {
        const codice = riga.split(";")[3];
        if (codice) codici.add(normCodice(codice));
      }
    }
  }
  for (const file of fileMete(radice)) {
    for (const meta of caricaMete(fs.readFileSync(file, "utf8"))) {
      if (meta.codiceErasmus) codici.add(normCodice(meta.codiceErasmus));
    }
  }
  return codici;
}

function testoVerificato(lettura, pagina, radice) {
  const file = path.join(radice, "raccolta", "pagine", lettura.codiceNorm.replace(/\s+/g, ""), pagina.file);
  if (!fs.existsSync(file) || !Number.isInteger(pagina.caratteri) || pagina.caratteri < 0 || typeof pagina.impronta !== "string") return { causa: "paginaCambiata" };
  const testo = JSON.parse(fs.readFileSync(file, "utf8")).testo;
  const inviato = String(testo || "").slice(0, pagina.caratteri);
  return impronta(inviato) === pagina.impronta ? { testo: inviato } : { causa: "paginaCambiata" };
}

export async function applicaCancelli(letture, { radice = RADICE, codici = codiciValidi(radice), statoLink = statoLinkVero, attendi = pausa } = {}) {
  if (!codici.size) throw new Error("Nessun codice valido disponibile: il cancello non puo procedere.");
  const approvati = [], scartati = [], facolta = [];
  for (const lettura of letture) {
    const inviati = new Map((lettura.pagineInviate || []).map((pagina) => [pagina.n, pagina]));
    for (const [campo, propostaIniziale] of Object.entries(lettura.campi || {})) {
      let proposta = structuredClone(propostaIniziale);
      let causa;
      const pagina = inviati.get(proposta.paginaCitata);
      if (!pagina || proposta.fonte?.url !== pagina.url) causa = "fonteNonInviata";
      if (!causa) {
        const verifica = testoVerificato(lettura, pagina, radice);
        if (verifica.causa) causa = verifica.causa;
        else causa = citazioneValida(proposta.fonte?.citazione, verifica.testo).causa;
      }
      if (!causa && ["linkSito", "linkCatalogo"].includes(campo)) {
        let esito = await statoLink(proposta.valore);
        if (esito.stato === "inconcludente") { await attendi(2000); esito = await statoLink(proposta.valore); }
        if (esito.stato === "morto") causa = "urlMorto";
        if (esito.stato === "inconcludente") causa = "urlInconcludente";
      }
      if (!causa) try { validaValore(campo, proposta.valore, campo); validaFonte(proposta.fonte, `${campo}.fonte`); } catch { causa = "formaNonValida"; }
      if (!causa && campo === "requisitoLingua") causa = livelliCitati(proposta.valore, proposta.fonte?.citazione).causa;
      // E3: il codice si valuta PRIMA che il campo devii in riconciliazione, ma
      // resta l'ultimo a dare la causa, cosi' il resoconto per causa del §6.2
      // resta confrontabile. Senza questo, un partner con codice inventato e un
      // campo di facolta' finiva in riconciliazione invece che negli scarti, ed
      // entrava nel materiale della Fase 6 un dato senza un partner vero a cui
      // appartenere.
      const codiceIgnoto = !codici.has(normCodice(lettura.codiceNorm));
      if (!causa) {
        proposta = applicaCancelloLivello(campo, proposta, pagina);
        if (!proposta.approvato && !codiceIgnoto) { facolta.push({ codiceNorm: lettura.codiceNorm, campo, ...proposta }); continue; }
      }
      if (!causa && codiceIgnoto) causa = "codiceSconosciuto";
      (causa ? scartati : approvati).push({ codiceNorm: lettura.codiceNorm, campo, ...(causa ? { causa, proposta } : proposta) });
    }
  }
  return { approvati, scartati, facolta };
}

async function main() {
  const raccolta = path.join(RADICE, "raccolta");
  const lettureDir = path.join(raccolta, "letture");
  if (!fs.existsSync(lettureDir)) throw new Error("raccolta/letture non esiste");
  const letture = fs.readdirSync(lettureDir).filter((file) => file.endsWith(".json")).map((file) => JSON.parse(fs.readFileSync(path.join(lettureDir, file), "utf8")));
  const esito = await applicaCancelli(letture);
  fs.mkdirSync(path.join(raccolta, "riconciliazione"), { recursive: true });
  fs.writeFileSync(path.join(raccolta, "approvati.json"), JSON.stringify(esito.approvati, null, 2) + "\n");
  fs.writeFileSync(path.join(raccolta, "scartati.json"), JSON.stringify(esito.scartati, null, 2) + "\n");
  fs.writeFileSync(path.join(raccolta, "riconciliazione", "facolta.json"), JSON.stringify(esito.facolta, null, 2) + "\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((errore) => { console.error(errore.message); process.exitCode = 1; });
