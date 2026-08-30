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

export function applicaCancelloLivello(campo, proposta, pagina = {}) {
  const declassato = proposta.livello === "ateneo" && PAROLE_FACOLTA.test(`${proposta.fonte?.url || ""} ${pagina.titolo || proposta.titoloPagina || ""}`);
  const livello = declassato || proposta.livello === "facolta" ? "facolta" : "ateneo";
  return { ...proposta, livello, declassato, approvato: !(CAMPI_STRETTI.has(campo) && livello === "facolta") };
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
      if (!causa) {
        proposta = applicaCancelloLivello(campo, proposta, pagina);
        if (!proposta.approvato) { facolta.push({ codiceNorm: lettura.codiceNorm, campo, ...proposta }); continue; }
      }
      if (!causa && !codici.has(normCodice(lettura.codiceNorm))) causa = "codiceSconosciuto";
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
