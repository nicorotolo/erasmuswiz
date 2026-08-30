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
// "A2/B1", "B1-B2", "B2.1" sono ambigui e il progetto vieta di tradurli: si
// omette il campo, non si sceglie per conto della pagina. Misurato il 30/08
// sera: E MADRID05 leggeva "advisable to have a Spanish language level
// equivalent to, at least, A2/B1" e proponeva DUE foglie, Spagnolo A2 e
// Spagnolo B1, sotto una radice ANY. Il cancello dei livelli citati non lo
// ferma, perche' sia A2 sia B1 compaiono davvero nella citazione: e' proprio
// la forma ambigua a doverlo fermare.
// Non solo "A2/B1": anche "B1 o B2" scritto a parole e' una forma ambigua, e la
// pagina puo' dirlo in qualunque lingua. Visto su IS AKUREYR01: "B1 eda B2
// kunnattu i ensku". Il separatore dev'essere l'UNICA cosa fra i due livelli,
// altrimenti "B1. Fur Kurse auf Englisch ... B2" - due requisiti distinti e
// legittimi, visti su D ERFURT05 - verrebbe scambiato per un'ambiguita'.
const CEFR_SEP = "[/\\-–—]|\\b(?:or|oder|ou|o|e[ðd]a|eller|of|veya|lub|vagy|nebo|alebo|sau|ili)\\b";
const CEFR_AMBIGUO = new RegExp(`\\b[ABC][12]\\s*(?:${CEFR_SEP})\\s*[ABC][12]\\b|\\b[ABC][12]\\.[0-9]`, "i");

export function livelloAmbiguo(citazione) {
  return CEFR_AMBIGUO.test(norm(citazione)) ? { ok: false, causa: "livelloAmbiguo" } : { ok: true };
}

// Anche la LINGUA dev'essere scritta nella citazione, non dedotta. Misurato il
// 30/08 sera: F PARIS063 leggeva "une bonne connaissance de la langue des cours
// choisi (B2 recommande)" e proponeva Inglese; TR ERZURUM01 leggeva
// "Yapilacak olan Dil sinavindan en az B1 duzeyi" (esame di lingua) e proponeva
// Turco. In entrambi i casi la pagina dice il livello ma NON quale lingua.
// La citazione e' nella lingua del sito, quindi non basta cercare la parola
// italiana: si cercano le radici con cui quella lingua si scrive in giro.
// Una lingua che non compare in questa tabella NON viene bloccata: meglio
// lasciar passare una lingua rara che scartare un dato buono.
const RADICI_LINGUA = {
  // 'ensk' e' l'islandese (enska/ensku), visto su IS AKUREYR01: senza, il
  // cancello scartava un dato buono. Le radici si allargano solo davanti a un
  // falso positivo misurato, mai per prudenza.
  inglese: /ingl|engl|angl|ensk|ingiliz|αγγλ/i,
  tedesco: /tedesc|german|deutsch|allemand|aleman|duits|tysk|saksa|niemieck|nemeck|almanca|γερμαν/i,
  // 'francoph' copre "etudiants non francophones", visto su F ALES02.
  francese: /frances|french|franzos|francais|francoph|frans|ransk|francuz|franciao|fransizca|γαλλ/i,
  spagnolo: /spagnol|spanish|spanisch|espagnol|espanol|spaans|spansk|espanja|hiszpan|spanyol|ispanyolca|ισπαν/i,
  italiano: /italian|italien|italiaans|wlosk|ιταλ/i,
  portoghese: /portug|portekiz|πορτογαλ/i,
  olandese: /olandes|dutch|nederland|niederland|neerland|hollan/i,
  svedese: /svedes|swedish|svensk|schwedisch|ruotsi/i,
  finlandese: /finland|finnish|suomi|finnisch/i,
  danese: /danes|danish|dansk|danisch/i,
  norvegese: /norveg|norwegian|norsk|norwegisch/i,
  polacco: /polacc|polish|polski|polnisch|polsk/i,
  ceco: /cec|czech|cesk|tschech/i,
  slovacco: /slovacc|slovak|slowak/i,
  ungherese: /unghere|hungarian|magyar|ungarisch/i,
  rumeno: /rumen|romanian|romana|romanisch/i,
  bulgaro: /bulgar|blgarski/i,
  greco: /grec|greek|hellenic|ellinik|griech|ελλην/i,
  turco: /turc|turkish|turkce|turkisch|τουρκ/i,
  croato: /croat|hrvat|kroat/i,
  sloveno: /sloven/i,
  lituano: /lituan|lithuanian|lietuv|litauisch/i,
  lettone: /letton|latvian|latvie|lettisch/i,
  estone: /eston|eesti/i,
  catalano: /catalan|catala|katalan/i,
};

export function lingueCitate(valore, citazione) {
  if (!valore || typeof valore !== "object") return { ok: true };
  const c = norm(citazione);
  const lingue = new Set();
  const gira = (nodo) => {
    if (!nodo || typeof nodo !== "object") return;
    if (Array.isArray(nodo.figli)) nodo.figli.forEach(gira);
    else if (typeof nodo.lingua === "string") lingue.add(nodo.lingua.trim().toLowerCase());
  };
  gira(valore);
  const assenti = [...lingue].filter((l) => RADICI_LINGUA[l] && !RADICI_LINGUA[l].test(c));
  return assenti.length ? { ok: false, causa: "linguaNonCitata", assenti } : { ok: true };
}

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
      if (!causa && campo === "requisitoLingua") {
        causa = livelloAmbiguo(proposta.fonte?.citazione).causa
          || livelliCitati(proposta.valore, proposta.fonte?.citazione).causa
          || lingueCitate(proposta.valore, proposta.fonte?.citazione).causa;
      }
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
