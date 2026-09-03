// La catena della Fase 5: raccolta -> riestrazione PDF -> lettura -> cancelli ->
// applicazione -> commit/push, a blocchi e ripartibile.
//
// Applica da sola SOLO i tre campi che l'arbitrato umano del 31/08 ha promosso
// 16 su 16. linkCatalogo e requisitoLingua vanno in coda di arbitrato: per
// entrambi e' MISURATO che nessun cancello automatico li separa (tre ipotesi
// provate sui casi etichettati a mano, tutte e tre bocciate). Non e' prudenza,
// e' un risultato.
//
// Uso: node scripts/esegui-partner.mjs [--limite=N] [--blocco=N] [--paralleli=N]
//                                      [--prova] [--solo=PASSO] [--codici=A,B]

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { caricaMete, codiceCanonico, statoCampo } from "./lib-mete.mjs";
import { fileMete } from "./cancelli.mjs";
import { scegliPagine } from "./leggi-partner.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// I tre promossi dall'arbitrato del 31/08, e i due che non si applicano mai
// senza occhi umani. Sono due insiemi diversi apposta: mescolarli e' il difetto
// che questa fase esiste per non commettere.
export const CAMPI_AUTOMATICI = Object.freeze(["scadenzeOspitante", "linkSito", "notaDisponibilita"]);
export const CAMPI_ARBITRATO = Object.freeze(["linkCatalogo", "requisitoLingua"]);

const dir = (radice) => path.join(radice, "raccolta");
const leggiJson = (file, fallback = null) => {
  if (!fs.existsSync(file)) return fallback;
  try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return fallback; }
};

// .tmp + rename: un blackout lascia il file vecchio O quello nuovo, mai meta'.
// Non basta da solo per venti file insieme - per quello c'e' la transazione del
// §2.7 - ma e' il mattone su cui la transazione poggia.
export function scriviAtomico(file, contenuto) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, contenuto);
  fs.renameSync(tmp, file);
}

// L'impronta di un oggetto senza ordine stabile cambierebbe da sola a ogni giro,
// e il registro dei giudizi diventerebbe inutile: la stessa proposta tornerebbe
// in coda con un'impronta diversa.
export function improntaValore(valore) {
  const canonico = (v) => {
    if (v === null || typeof v !== "object") return v;
    if (Array.isArray(v)) return v.map(canonico);
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canonico(v[k])]));
  };
  return createHash("sha256").update(JSON.stringify(canonico(valore)), "utf8").digest("hex");
}

// ---------------------------------------------------------------- LOCK

const vivo = (pid) => { try { process.kill(pid, 0); return true; } catch (e) { return e.code === "EPERM"; } };

// `wx` fallisce se il file esiste: e' una creazione esclusiva, atomica.
// "Controllo se esiste, poi lo scrivo" e' due operazioni, e fra le due entrano
// due processi.
export function apriLock(radice, { pid = process.pid, quando = "" } = {}) {
  const file = path.join(dir(radice), ".esegui.lock");
  fs.mkdirSync(dir(radice), { recursive: true });
  const scrivi = () => {
    const fd = fs.openSync(file, "wx");
    fs.writeFileSync(fd, JSON.stringify({ pid, quando }) + "\n");
    fs.closeSync(fd);
    return { file, preso: true };
  };
  try { return scrivi(); } catch (errore) {
    if (errore.code !== "EEXIST") throw errore;
  }
  const dentro = leggiJson(file, {}) || {};
  if (dentro.pid && vivo(dentro.pid)) {
    return { file, preso: false, motivo: `un altro processo sta gia' lavorando (PID ${dentro.pid})` };
  }
  // Lock abbandonato. Rimuoverlo e riprenderlo NON e' un'operazione sola: due
  // processi possono vedere lo stesso PID morto, e il secondo rimuoverebbe il
  // lock appena preso dal primo. Il recupero si serializza con un secondo lock.
  const recupero = path.join(dir(radice), ".esegui.recupero.lock");
  let fdRec;
  try { fdRec = fs.openSync(recupero, "wx"); } catch (errore) {
    if (errore.code !== "EEXIST") throw errore;
    // Rinuncia deliberata: NON si rimuove da soli il lock di recupero.
    // "Riconosci che e' scaduto, poi rimuovilo" e' la STESSA corsa un piano piu'
    // in basso. Senza un compare-and-swap vero ogni automatismo la ripete.
    return { file, preso: false, motivo:
      `lock di recupero orfano: ${recupero}\nRimuovilo a mano e rilancia:\n  rm "${recupero}"` };
  }
  try {
    fs.writeFileSync(fdRec, JSON.stringify({ pid, quando }) + "\n");
    fs.closeSync(fdRec);
    const ancora = leggiJson(file, {}) || {};
    if (ancora.pid !== dentro.pid) return { file, preso: false, motivo: "il lock e' cambiato durante il recupero" };
    fs.rmSync(file, { force: true });
    return { ...scrivi(), recuperatoDa: dentro.pid };
  } finally { fs.rmSync(recupero, { force: true }); }
}

export const rilasciaLock = (radice) => fs.rmSync(path.join(dir(radice), ".esegui.lock"), { force: true });

// ------------------------------------------------- REGISTRO DEI GIUDIZI

export const chiaveGiudizio = (codice, campo, impronta) => `${codiceCanonico(codice)}\u0000${campo}\u0000${impronta}`;

// Registro di EVENTI, non di voci mutabili: "si" -> "applicato" sono due righe,
// e la storia del giudizio resta leggibile. Dal 02/09 sappiamo che guardare solo
// l'ultima riga nasconde sia `no -> si` sia un esito ignoto chiuso da applicato:
// ogni ultimo evento porta quindi con se' tutta la sequenza della propria chiave.
export function leggiRegistro(radice) {
  const file = path.join(dir(radice), "giudizi.jsonl");
  const quarantenaFile = path.join(dir(radice), "giudizi-quarantena.json");
  const gruppi = new Map();
  if (!fs.existsSync(file)) return gruppi;
  const quarantena = [];
  const righe = fs.readFileSync(file, "utf8").split(/\r?\n/);
  for (let indice = 0; indice < righe.length; indice++) {
    const riga = righe[indice];
    if (!riga.trim()) continue;
    let e;
    try { e = JSON.parse(riga); }
    catch { quarantena.push({ riga: indice + 1, causa: "jsonNonValido", contenuto: riga }); continue; }
    if (!e?.codiceCanonico || !e?.campo || !e?.improntaProposta) {
      quarantena.push({ riga: indice + 1, causa: "chiaveIncompleta", contenuto: riga });
      continue;
    }
    const chiave = chiaveGiudizio(e.codiceCanonico, e.campo, e.improntaProposta);
    (gruppi.get(chiave) || gruppi.set(chiave, []).get(chiave)).push(e);
  }
  if (quarantena.length) {
    scriviAtomico(quarantenaFile, JSON.stringify(quarantena, null, 2) + "\n");
    throw new Error(`registro giudizi non valido: ${quarantena.length} righe in quarantena (${quarantenaFile})`);
  }
  fs.rmSync(quarantenaFile, { force: true });
  const stato = new Map();
  for (const [chiave, eventi] of gruppi) {
    const ultimo = { ...eventi[eventi.length - 1] };
    Object.defineProperty(ultimo, "eventi", { value: eventi, enumerable: false });
    stato.set(chiave, ultimo);
  }
  return stato;
}

// Unica grammatica dello storico. Gli ingressi diretti `applicato` e
// `legacyGiudicato` vengono dalla semina; i doppioni identici esistono nelle
// 254 righe vere e sono idempotenti. Ogni altra regressione resta visibile.
export function statoGiudizio(voce) {
  const eventi = Array.isArray(voce) ? voce : (voce?.eventi || (voce ? [voce] : []));
  let corrente = null;
  const noti = new Set(["si", "no", "nonSo", "applicato", "legacyGiudicato"]);
  for (const evento of eventi) {
    const esito = evento?.esito;
    if (!noti.has(esito)) return "statoSconosciuto";
    if (esito === corrente) continue;
    if (corrente === null) { corrente = esito; continue; }
    if (corrente === "nonSo" && (esito === "si" || esito === "no")) { corrente = esito; continue; }
    if (corrente === "si" && esito === "applicato") { corrente = esito; continue; }
    return "statoSconosciuto";
  }
  return ({
    null: "daGiudicare", nonSo: "nonSo", no: "no", si: "siNonApplicato",
    applicato: "applicato", legacyGiudicato: "legacyGiudicato",
  })[corrente === null ? "null" : corrente];
}

export function appendiEventi(radice, eventi) {
  if (!eventi.length) return 0;
  const file = path.join(dir(radice), "giudizi.jsonl");
  fs.mkdirSync(dir(radice), { recursive: true });
  fs.appendFileSync(file, eventi.map((e) => JSON.stringify(e)).join("\n") + "\n");
  return eventi.length;
}

export function costruisciCode({ radice = RADICE, approvati, partner } = {}) {
  const registro = leggiRegistro(radice);
  const proposte = approvati || leggiJson(path.join(dir(radice), "approvati.json"), []) || [];
  const elenco = partner || leggiJson(path.join(dir(radice), "partner.json"), []) || [];
  const ateneoDi = new Map(elenco.map((p) => [codiceCanonico(p.codiceNorm), p.ateneo || ""]));
  const code = {};
  for (const campo of CAMPI_ARBITRATO) {
    const voci = [];
    for (const p of proposte.filter((x) => x.campo === campo)) {
      const codice = codiceCanonico(p.codiceNorm);
      const impronta = improntaValore(p.valore);
      const stato = statoGiudizio(registro.get(chiaveGiudizio(codice, campo, impronta)));
      if (stato === "statoSconosciuto") throw new Error(`stato giudizio sconosciuto: ${codice}/${campo}`);
      if (stato !== "daGiudicare") continue;
      voci.push({ codiceCanonico: codice, codiceNorm: p.codiceNorm, ateneo: ateneoDi.get(codice) || "",
        campo, valore: p.valore, citazione: p.fonte?.citazione || "", fonte: p.fonte?.url || "",
        paginaCitata: p.paginaCitata ?? null, improntaProposta: impronta });
    }
    code[campo] = voci;
    scriviAtomico(path.join(dir(radice), `arbitrato-${campo}.json`), JSON.stringify(voci, null, 2) + "\n");
  }
  scriviAtomico(path.join(dir(radice), "da-riesaminare.json"),
    JSON.stringify(codaRiesame({ radice, approvati: proposte, partner: elenco, registro }), null, 2) + "\n");
  scriviAtomico(path.join(dir(radice), "da-recuperare.json"),
    JSON.stringify(codaRecupero({ radice, approvati: proposte, partner: elenco, registro }), null, 2) + "\n");
  return code;
}

function indiceProposte(proposte) {
  const indice = new Map();
  for (const p of proposte) {
    if (!CAMPI_ARBITRATO.includes(p.campo)) continue;
    const chiave = chiaveGiudizio(p.codiceNorm, p.campo, improntaValore(p.valore));
    (indice.get(chiave) || indice.set(chiave, []).get(chiave)).push(p);
  }
  const ambigue = [...indice].filter(([, v]) => v.length > 1).map(([chiave]) => chiave);
  if (ambigue.length) throw new Error(`propostaAmbigua: ${ambigue.length} chiavi hanno piu' proposte`);
  return new Map([...indice].map(([chiave, v]) => [chiave, v[0]]));
}

function voceCoda(p, ateneoDi, extra = {}) {
  const codice = codiceCanonico(p.codiceNorm || p.codiceCanonico);
  const impronta = p.improntaProposta || improntaValore(p.valore);
  return { codiceCanonico: codice, ateneo: ateneoDi.get(codice) || "", campo: p.campo,
    ...(Object.hasOwn(p, "valore") ? { valore: p.valore, citazione: p.fonte?.citazione || "",
      fonte: p.fonte?.url || "" } : {}), improntaProposta: impronta, ...extra };
}

// "Non so" NON e' "no", ed e' l'unico esito che descrive un lavoro invece di
// chiuderlo. Il registro lo tiene fuori dalla coda - giusto, o Nicola
// rivedrebbe ogni volta le stesse voci su cui si era gia' fermato - ma tenerlo
// fuori non deve voler dire perderlo. Qui torna a galla, con il motivo per cui
// e' difficile: il 02/09, sugli 11 "non so", 6 erano PDF e 4 portavano un anno
// vecchio nel testo, mentre fra i 15 "no" i PDF erano ZERO. Un PDF non e' un
// valore sbagliato: e' un valore che a colpo d'occhio non si puo' verificare.
export function codaRiesame({ radice = RADICE, approvati, partner, registro } = {}) {
  const reg = registro || leggiRegistro(radice);
  const proposte = approvati || leggiJson(path.join(dir(radice), "approvati.json"), []) || [];
  const elenco = partner || leggiJson(path.join(dir(radice), "partner.json"), []) || [];
  const ateneoDi = new Map(elenco.map((p) => [codiceCanonico(p.codiceNorm), p.ateneo || ""]));
  const perChiave = indiceProposte(proposte);
  const visitate = new Set();
  const voci = [];
  for (const [chiave, p] of perChiave) {
    const stato = statoGiudizio(reg.get(chiave));
    if (stato === "statoSconosciuto") throw new Error(`stato giudizio sconosciuto: ${chiave}`);
    if (stato !== "nonSo") continue;
    visitate.add(chiave);
    const testo = `${p.valore} ${p.fonte?.citazione || ""}`;
    const anno = testo.match(/20(?:1[0-9]|2[0-4])/);
    const motivi = [];
    if (/\.pdf(?:$|\?)/i.test(String(p.valore)) || /dumpFile/i.test(String(p.valore))) motivi.push("pdf");
    if (anno) motivi.push(`annoVecchio:${anno[0]}`);
    if (!motivi.length) motivi.push("nonSiCapisceSeElencoDiCorsi");
    voci.push(voceCoda(p, ateneoDi, { motivi }));
  }
  for (const [chiave, evento] of reg) {
    if (visitate.has(chiave) || statoGiudizio(evento) !== "nonSo" || perChiave.has(chiave)) continue;
    voci.push(voceCoda(evento, ateneoDi, { causa: "propostaAssente", quando: evento.quando || "" }));
  }
  return voci;
}

// Il si' gia' dato non torna sotto gli occhi di Nicola: ha una coda tecnica
// propria, costruita anche dagli eventi per non perdere proposte poi rifuse.
export function codaRecupero({ radice = RADICE, approvati, partner, registro, motivi = new Map() } = {}) {
  const reg = registro || leggiRegistro(radice);
  const proposte = approvati || leggiJson(path.join(dir(radice), "approvati.json"), []) || [];
  const elenco = partner || leggiJson(path.join(dir(radice), "partner.json"), []) || [];
  const ateneoDi = new Map(elenco.map((p) => [codiceCanonico(p.codiceNorm), p.ateneo || ""]));
  const perChiave = indiceProposte(proposte);
  const voci = [];
  for (const [chiave, evento] of reg) {
    const stato = statoGiudizio(evento);
    if (stato === "statoSconosciuto") throw new Error(`stato giudizio sconosciuto: ${chiave}`);
    if (stato !== "siNonApplicato") continue;
    const proposta = perChiave.get(chiave);
    if (!proposta) {
      voci.push(voceCoda(evento, ateneoDi, { causa: "propostaAssente", quando: evento.quando || "" }));
      continue;
    }
    voci.push(voceCoda(proposta, ateneoDi, { causa: motivi.get(chiave) || "daRecuperare",
      quando: evento.quando || "" }));
  }
  return voci;
}

// ------------------------------------------------------- STATO PARTNER

// Il passo PDF e' completato solo quando OGNI pagina PDF dell'indice ha `testo`
// oppure `estrazioneFallita`. Il valore di ritorno di riscaricaPdf non basta:
// ritorna normalmente anche con dei falliti. Senza questo controllo, la lettura
// parte su PDF svuotati e i valori che ne venivano spariscono - e' successo il
// 01/09 su A GRAZ02.
export function pdfCompleto(radice, codice) {
  const cartella = path.join(dir(radice), "pagine", codiceCanonico(codice));
  const indice = leggiJson(path.join(cartella, "indice.json"));
  if (!indice) return false;
  for (const rif of indice.pagine || []) {
    const pagina = leggiJson(path.join(cartella, rif.file));
    if (!pagina || pagina.tipo !== "pdf") continue;
    if (pagina.estrazioneFallita) continue;
    if (typeof pagina.testo !== "string" || !pagina.testo.length) return false;
  }
  return true;
}

// Gli ultimi due stati non sono derivabili dai file: una lettura con `campi: {}`,
// una proposta finita in `facolta`, un valore `uguale` e un `disaccordo` non
// scrivono NIENTE da nessuna parte. Per questo esiste avanzamento.json.
export function statoPartner({ radice = RADICE, partner, avanzamento = {}, collisi = new Set() } = {}) {
  const codice = codiceCanonico(partner.codiceNorm);
  if (collisi.has(codice)) return "colliso";
  if (!(partner.campiMancanti || []).length) return "fatto";
  const cartella = path.join(dir(radice), "pagine", codice);
  const indice = leggiJson(path.join(cartella, "indice.json"));
  if (!indice) return "daRaccogliere";
  if (indice.esito !== "raggiunto") return "nonRaggiunto";
  if (!pdfCompleto(radice, codice)) return "daPdf";
  if (!fs.existsSync(path.join(dir(radice), "letture", `${codice}.json`))) {
    // "raggiunto" e' un criterio largo: basta UNA pagina, anche vuota. Sei
    // partner sono stati raggiunti con pagine da 32-173 caratteri - sono siti
    // costruiti in JavaScript, il testo non sta nell'HTML - e `scegliPagine`
    // giustamente non ha niente da mandare al modello. Senza questo stato
    // restavano `daLeggere` per sempre, ripresi a ogni giro senza che
    // succedesse nulla: un capolinea mancante, non lavoro rimasto. Vanno alla
    // riserva L4 come i partner senza indirizzo, ed e' Fase 6.
    if (!scegliPagine(indice, cartella).length) return "senzaTestoUtile";
    return "daLeggere";
  }
  const voce = avanzamento[codice];
  if (!voce?.fuso) return "daFondere";
  if (!voce.applicato) return "daApplicare";
  return "fatto";
}

// --------------------------------------------------- FUSIONE DEI CANCELLI

// Per ogni (codice, campo) si toglie la voce vecchia da TUTTI E TRE gli esiti e
// poi si inserisce nel solo esito nuovo. Sostituire dentro ciascun file
// separatamente lascerebbe lo stesso dato in due esiti incompatibili quando una
// rilettura passa dagli approvati agli scarti.
export function fondiEsiti({ radice = RADICE, nuovi, scrivi = true } = {}) {
  const percorsi = {
    approvati: path.join(dir(radice), "approvati.json"),
    scartati: path.join(dir(radice), "scartati.json"),
    facolta: path.join(dir(radice), "riconciliazione", "facolta.json"),
  };
  const vecchi = Object.fromEntries(Object.entries(percorsi).map(([k, f]) => [k, leggiJson(f, []) || []]));
  const chiave = (v) => `${codiceCanonico(v.codiceNorm)}\u0000${v.campo}`;
  const rimpiazzate = new Set();
  for (const gruppo of Object.values(nuovi)) for (const v of gruppo) rimpiazzate.add(chiave(v));
  const uniti = {};
  for (const [nome, elenco] of Object.entries(vecchi)) {
    uniti[nome] = elenco.filter((v) => !rimpiazzate.has(chiave(v))).concat(nuovi[nome] || []);
  }
  if (scrivi) for (const [nome, f] of Object.entries(percorsi)) {
    scriviAtomico(f, JSON.stringify(uniti[nome], null, 2) + "\n");
  }
  return { uniti, rimpiazzate: rimpiazzate.size };
}

// ------------------------------------------------ FOTOGRAFIA E CONFRONTO

// Una sola costruzione della chiave, usata sia per i file su disco sia per i
// testi prospettici dell'anteprima. Se le due divergessero, il confronto
// vedrebbe ogni meta sparita e ricomparsa: e' successo davvero mentre
// scrivevo questa funzione, e il numero era 1.987 problemi su 1.987 mete.
export function fotografiaDaTesti(testiPerFile) {
  const foto = new Map();
  for (const [file, testo] of testiPerFile) {
    for (const meta of caricaMete(testo)) {
      foto.set(`${file}\u0000${meta.id ?? codiceCanonico(meta.codiceErasmus)}`, meta);
    }
  }
  return foto;
}

export function fotografiaMete(radice = RADICE) {
  return fotografiaDaTesti(fileMete(radice).map((f) => [f, fs.readFileSync(f, "utf8")]));
}

// Anteprima e run vero devono guardare le STESSE cose, o l'anteprima diventa
// una cerimonia. Il 01/09 l'anteprima diceva "zero problemi" mentre la scrittura
// preparava 15 a-capo nudi in 3 file: il controllo del fine-riga stava solo nel
// ramo vero. Ora e' uno solo, e lo chiamano tutti e due.
export function aggiungiFineRigaMista(confronto, testiPerFile, radice = RADICE) {
  const misti = [...testiPerFile].filter(([, testo]) => fineRigaMista(testo))
    .map(([file]) => path.relative(radice, file));
  if (misti.length) confronto.problemi.push({ causa: "fineRigaMista", file: misti });
  confronto.ok = confronto.problemi.length === 0;
  return confronto;
}

export function fineRigaMista(testo) {
  return /\r\n/.test(testo) && /(^|[^\r])\n/.test(testo);
}

// Il confronto che le prove verdi non fanno. Torna SEMPRE un resoconto: chi lo
// chiama deve stamparlo, perche' un confronto che nessuno guarda e' una prova
// verde che non vede niente.
export function confrontaMete(prima, dopo, { campiAmmessi = CAMPI_AUTOMATICI } = {}) {
  const ammessi = new Set(campiAmmessi);
  const problemi = [];
  const scritti = {};
  if (prima.size !== dopo.size) problemi.push({ causa: "numeroMeteCambiato", prima: prima.size, dopo: dopo.size });
  for (const [chiave, meta] of prima) {
    const nuovo = dopo.get(chiave);
    if (!nuovo) { problemi.push({ causa: "metaSparita", chiave }); continue; }
    for (const campo of new Set([...Object.keys(meta), ...Object.keys(nuovo)])) {
      if (isDeepStrictEqual(meta[campo], nuovo[campo])) continue;
      const eraVuoto = statoCampo(meta, campo) === "vuoto";
      if (!ammessi.has(campo)) problemi.push({ causa: "campoNonAmmesso", chiave, campo });
      else if (!eraVuoto) problemi.push({ causa: "campoGiaPienoModificato", chiave, campo });
      else scritti[campo] = (scritti[campo] || 0) + 1;
    }
  }
  return { ok: problemi.length === 0, problemi, scritti, mete: dopo.size };
}

// ------------------------------------------------------- TRANSAZIONE

const ACCESSORI = [
  "FONTI-partner.json", "approvati.json", "scartati.json", "avanzamento.json",
  "giudizi.jsonl", "esegui-partner.jsonl",
  path.join("riconciliazione", "disaccordi.json"), path.join("riconciliazione", "facolta.json"),
  "arbitrato-linkCatalogo.json", "arbitrato-requisitoLingua.json",
];

export const gitVero = {
  esegui: (radice, argomenti) => execFileSync("git", argomenti, { cwd: radice, encoding: "utf8" }).trim(),
};

const percorsiMete = (radice) => fileMete(radice).map((f) => path.relative(radice, f).split(path.sep).join("/"));

// Il manifesto si arma PER ULTIMO: prima tutte le copie, poi il manifesto.
// Armarlo prima significherebbe, dopo un blackout durante le copie, avere un
// manifesto che ordina un ripristino da copie incomplete.
export function preparaTransazione({ radice = RADICE, blocco, idTransazione, git = gitVero } = {}) {
  const cartella = path.join(dir(radice), ".transazione");
  fs.rmSync(cartella, { recursive: true, force: true });
  fs.mkdirSync(cartella, { recursive: true });
  const accessori = [];
  for (const rel of ACCESSORI) {
    const origine = path.join(dir(radice), rel);
    const esisteva = fs.existsSync(origine);
    // `esisteva: false` non e' un dettaglio: senza, il rollback non saprebbe che
    // un file NATO in questo blocco va cancellato, non ripristinato.
    if (esisteva) {
      const copia = path.join(cartella, rel.split(path.sep).join("__"));
      fs.mkdirSync(path.dirname(copia), { recursive: true });
      fs.copyFileSync(origine, copia);
    }
    accessori.push({ file: rel, esisteva });
  }
  const manifesto = { stato: "preparato", blocco, idTransazione,
    baseHead: git.esegui(radice, ["rev-parse", "HEAD"]),
    fileMete: percorsiMete(radice), accessori, commit: null };
  scriviAtomico(path.join(dir(radice), ".transazione.json"), JSON.stringify(manifesto, null, 2) + "\n");
  return manifesto;
}

export function ripristinaAccessori(radice, manifesto) {
  const cartella = path.join(dir(radice), ".transazione");
  for (const { file, esisteva } of manifesto.accessori || []) {
    const destinazione = path.join(dir(radice), file);
    const copia = path.join(cartella, file.split(path.sep).join("__"));
    if (!esisteva) { fs.rmSync(destinazione, { force: true }); continue; }
    if (fs.existsSync(copia)) { fs.mkdirSync(path.dirname(destinazione), { recursive: true }); fs.copyFileSync(copia, destinazione); }
  }
}

export function chiudiTransazione(radice) {
  fs.rmSync(path.join(dir(radice), ".transazione.json"), { force: true });
  fs.rmSync(path.join(dir(radice), ".transazione"), { recursive: true, force: true });
}

// All'avvio, un manifesto `preparato` significa "interrotto a meta'".
// `HEAD === baseHead` -> rollback completo. `HEAD` avanzata -> il commit c'e'
// gia': non si torna indietro su un commit che esiste, ma nemmeno si pubblica
// una HEAD che non e' dimostrabilmente NOSTRA.
export function recuperaTransazione({ radice = RADICE, git = gitVero } = {}) {
  const manifesto = leggiJson(path.join(dir(radice), ".transazione.json"));
  if (!manifesto || manifesto.stato !== "preparato") return { azione: "nessuna" };
  const testa = git.esegui(radice, ["rev-parse", "HEAD"]);
  if (testa === manifesto.baseHead) {
    // NON `git checkout --`: quello legge l'INDICE, e se il processo e' morto
    // fra `git add` e `git commit` l'indice contiene gia' i file nuovi.
    git.esegui(radice, ["restore", `--source=${manifesto.baseHead}`, "--staged", "--worktree", "--", ...manifesto.fileMete]);
    ripristinaAccessori(radice, manifesto);
    chiudiTransazione(radice);
    return { azione: "ripristinato", baseHead: manifesto.baseHead };
  }
  const genitore = git.esegui(radice, ["rev-parse", `${testa}^`]);
  const toccati = git.esegui(radice, ["diff-tree", "--no-commit-id", "--name-only", "-r", testa])
    .split(/\r?\n/).filter(Boolean).sort();
  const messaggio = git.esegui(radice, ["log", "-1", "--format=%B", testa]);
  const attesi = [...manifesto.fileMete].sort();
  const nostro = genitore === manifesto.baseHead
    && toccati.every((f) => attesi.includes(f))
    && messaggio.includes(manifesto.idTransazione);
  if (!nostro) {
    return { azione: "fermato", motivo:
      `HEAD ${testa} e' avanzata ma non e' della pipeline (genitore, percorsi o identificativo non combaciano). Guarda a mano.` };
  }
  return { azione: "daCompletare", commit: testa, manifesto };
}

// ------------------------------------------------------------ IL DIARIO

export function annota(radice, voce) {
  const file = path.join(dir(radice), "esegui-partner.jsonl");
  fs.mkdirSync(dir(radice), { recursive: true });
  fs.appendFileSync(file, JSON.stringify(voce) + "\n");
}

// ------------------------------------------------------------ IL BLOCCO

// L'applicazione, il confronto, la transazione e il commit: la parte che tocca
// i dati del sito, e l'unica che puo' fare danno.
export async function applicaEControlla({
  radice = RADICE, proposte, campi = CAMPI_AUTOMATICI, etichetta, idTransazione,
  prova = false, git = gitVero, applica, avanzamento = null, spingi = false,
} = {}) {
  // CANCELLO, non promemoria. Il 01/09 tre ipotesi di cancello automatico per
  // linkCatalogo sono state misurate sui casi etichettati a mano e bocciate
  // tutte e tre; requisitoLingua fu bocciato il 31/08 e il suo difetto - una
  // tabella appiattita letta come "basta una delle due lingue" - nessun cancello
  // lo vede. Passarli di qui e' un errore di programmazione, non una scelta.
  // Un campo d'arbitrato passa SOLO se ogni singola proposta dimostra di avere
  // un "si" umano nel registro. Non e' un permesso dato al chiamante - quello
  // sarebbe un bypass - ma un cancello diverso: la prova si porta per valore,
  // non per intenzione. Un'impronta che non combacia significa che il valore e'
  // cambiato dopo il giudizio, e allora quel giudizio non vale piu'.
  const vietati = [...campi].filter((c) => !CAMPI_AUTOMATICI.includes(c));
  if (vietati.length) {
    const fuoriArbitrato = vietati.filter((c) => !CAMPI_ARBITRATO.includes(c));
    if (fuoriArbitrato.length) throw new Error(`campi che non esistono in questo schema: ${fuoriArbitrato.join(", ")}`);
    const registro = leggiRegistro(radice);
    const senzaSi = proposte.filter((p) => vietati.includes(p.campo)).filter((p) => {
      const e = registro.get(chiaveGiudizio(p.codiceNorm, p.campo, improntaValore(p.valore)));
      const stato = statoGiudizio(e);
      if (stato === "statoSconosciuto") throw new Error(`stato giudizio sconosciuto: ${codiceCanonico(p.codiceNorm)}/${p.campo}`);
      return stato !== "siNonApplicato" && stato !== "applicato";
    });
    if (senzaSi.length) {
      throw new Error(`${senzaSi.length} proposte su campi d'arbitrato senza un "si" nel registro: `
        + senzaSi.slice(0, 5).map((p) => `${codiceCanonico(p.codiceNorm)}/${p.campo}`).join(", "));
    }
  }
  const prima = fotografiaMete(radice);
  if (prova) {
    // In anteprima il confronto gira DAVVERO, sugli stessi testi che il run
    // vero scriverebbe: `contenutoProspettico` sovrapposto ai file originali.
    // Restituire un `ok` finto renderebbe `--prova` una cerimonia: direbbe
    // "nessun problema" anche mentre ne prepara mille.
    const esito = await applica({ radice, approvati: proposte, letture: [], campi, prova: true });
    const testi = new Map(fileMete(radice).map((f) => [f, fs.readFileSync(f, "utf8")]));
    for (const [file, testo] of esito.contenutoProspettico || []) testi.set(file, testo);
    const confronto = confrontaMete(prima, fotografiaDaTesti(testi), { campiAmmessi: campi });
    aggiungiFineRigaMista(confronto, testi, radice);
    return { prova: true, scritti: esito.scritti, disaccordi: esito.disaccordi.length, confronto };
  }
  const manifesto = preparaTransazione({ radice, blocco: etichetta, idTransazione, git });
  let esito;
  try {
    esito = await applica({ radice, approvati: proposte, letture: [], campi });
  } catch (errore) {
    git.esegui(radice, ["restore", `--source=${manifesto.baseHead}`, "--staged", "--worktree", "--", ...manifesto.fileMete]);
    ripristinaAccessori(radice, manifesto);
    chiudiTransazione(radice);
    throw errore;
  }
  const dopo = fotografiaMete(radice);
  const confronto = confrontaMete(prima, dopo, { campiAmmessi: campi });
  aggiungiFineRigaMista(confronto, new Map(fileMete(radice).map((f) => [f, fs.readFileSync(f, "utf8")])), radice);
  if (!confronto.ok) {
    git.esegui(radice, ["restore", `--source=${manifesto.baseHead}`, "--staged", "--worktree", "--", ...manifesto.fileMete]);
    ripristinaAccessori(radice, manifesto);
    chiudiTransazione(radice);
    return { scritti: 0, confronto, commit: null, annullato: true };
  }
  if (avanzamento) scriviAtomico(path.join(dir(radice), "avanzamento.json"), JSON.stringify(avanzamento, null, 2) + "\n");
  let commit = null;
  if (confronto.scritti && Object.values(confronto.scritti).some(Boolean)) {
    // `git add` con elenco ESPLICITO: il worktree contiene file non tracciati e
    // `raccolta/` e' ignorata. `git add -A` prenderebbe cose che non c'entrano.
    git.esegui(radice, ["add", "--", ...manifesto.fileMete]);
    const righe = Object.entries(confronto.scritti).map(([c, n]) => `${c}: ${n}`).join(", ");
    git.esegui(radice, ["commit", "-m",
      `pipeline: ${etichetta} — ${righe}\n\nTransazione ${idTransazione}. Applicati i soli campi promossi dall'arbitrato del 31/08.`]);
    commit = git.esegui(radice, ["rev-parse", "HEAD"]);
  }
  scriviAtomico(path.join(dir(radice), ".transazione.json"),
    JSON.stringify({ ...manifesto, stato: "commesso", commit }, null, 2) + "\n");
  chiudiTransazione(radice);

  // Il push per blocco e' cio' che rende il run davvero interrompibile: chiuso
  // il portatile, il lavoro fatto e' gia' su GitHub e non su un disco spento.
  // Se il push non riesce - rete assente, oppure `origin` e' andato avanti - la
  // catena SI FERMA e lo dice. Nessun merge automatico: un merge deciso da uno
  // script su dati del sito e' esattamente cio' che questa cartella e' separata
  // da `C:\erasmuswiz` per evitare.
  let push = null;
  if (commit && spingi) {
    try {
      git.esegui(radice, ["fetch", "origin"]);
      git.esegui(radice, ["push", "origin", "HEAD:main"]);
      push = "fatto";
    } catch (errore) {
      return { scritti: esito.scritti, confronto, commit, disaccordi: esito.disaccordi.length,
        annullato: false, push: "fallito",
        fermato: `push non riuscito dopo il commit ${commit}: ${String(errore.message).slice(0, 300)}` };
    }
  }
  return { scritti: esito.scritti, confronto, commit, disaccordi: esito.disaccordi.length, annullato: false, push };
}

// Il blocco zero: i campi gia' approvati dai cancelli e mai scritti. Vanno per
// primi e DA SOLI, in un commit loro, o l'effetto sui dati di due lavori diversi
// finisce in un diff solo e non si sa piu' a cosa attribuire un guaio.
export async function bloccoZero({ radice = RADICE, prova = false, git = gitVero, applica } = {}) {
  const fileAvanz = path.join(dir(radice), "avanzamento.json");
  const avanzamento = leggiJson(fileAvanz, {}) || {};
  const inAttesa = Object.entries(avanzamento).filter(([, v]) => v && v.applicato === false);
  if (!inAttesa.length) return { saltato: true, motivo: "nessuna voce in attesa" };
  const attesi = new Map(inAttesa.map(([c, v]) => [c, new Set(v.campiDaApplicare || [])]));
  const approvati = leggiJson(path.join(dir(radice), "approvati.json"), []) || [];
  const proposte = approvati.filter((p) => attesi.get(codiceCanonico(p.codiceNorm))?.has(p.campo));
  const campi = [...new Set(proposte.map((p) => p.campo))].filter((c) => CAMPI_AUTOMATICI.includes(c));
  const nuovo = { ...avanzamento };
  for (const [c] of inAttesa) nuovo[c] = { ...avanzamento[c], applicato: true, campiDaApplicare: [] };
  const esito = await applicaEControlla({ radice, proposte, campi, etichetta: "blocco zero",
    idTransazione: `bz-${improntaValore(inAttesa.map(([c]) => c)).slice(0, 12)}`,
    prova, git, applica, avanzamento: prova ? null : nuovo });
  return { ...esito, partner: inAttesa.length, campiAttesi: proposte.length, saltato: false };
}

// ------------------------------------------------------------ IL RESOCONTO

// Le cause dei falliti si leggono dall'array `tentativi` che la raccolta scrive
// nell'indice: le note in testo libero non sono raggruppabili, ed e' per questo
// che la Consegna A ha aggiunto i tentativi strutturati.
export function causeRaccolta({ radice = RADICE, codici } = {}) {
  const conti = {};
  for (const codice of codici) {
    const indice = leggiJson(path.join(dir(radice), "pagine", codiceCanonico(codice), "indice.json"));
    if (!indice) { conti.nessunIndice = (conti.nessunIndice || 0) + 1; continue; }
    if (indice.esito === "raggiunto") continue;
    const cause = (indice.tentativi || []).filter((t) => t.causa).map((t) => t.causa);
    const causa = cause.length ? cause[cause.length - 1] : "sconosciuta";
    conti[causa] = (conti[causa] || 0) + 1;
  }
  return conti;
}

export function riepilogoEsiti(esiti) {
  const conti = {};
  for (const v of esiti.scartati || []) conti[v.causa || "sconosciuta"] = (conti[v.causa || "sconosciuta"] || 0) + 1;
  return { approvati: (esiti.approvati || []).length, facolta: (esiti.facolta || []).length, scartatiPerCausa: conti };
}

// ------------------------------------------------------------ IL CICLO

const impronteLettura = (radice, codice) => {
  const f = path.join(dir(radice), "letture", `${codiceCanonico(codice)}.json`);
  return fs.existsSync(f) ? createHash("sha256").update(fs.readFileSync(f, "utf8"), "utf8").digest("hex") : null;
};

export const raccoltaVera = (radice, codici, paralleli) => execFileSync(
  process.execPath, ["scripts/raccogli-partner.mjs", `--codici=${codici.join(",")}`, `--paralleli=${paralleli}`],
  { cwd: radice, encoding: "utf8" });

// Un blocco, dal passo in cui ogni partner si trova. I passi non si saltano e
// non si riordinano: il PDF viene DOPO la raccolta perche' la raccolta azzera
// il testo dei PDF, e la lettura viene dopo il PDF perche' altrimenti legge
// pagine svuotate.
export async function eseguiBlocco({
  radice = RADICE, codici, paralleli = 6, prova = false, passi = null, spingi = false,
  raccogli = raccoltaVera, riscarica, leggi, cancelli, applica, git = gitVero,
  limitatore = null,
} = {}) {
  const fa = (passo) => !passi || passi.includes(passo);
  const esito = { codici, raccolta: null, pdf: null, lettura: null, cancelli: null, applicazione: null };

  if (fa("raccolta")) {
    const daRaccogliere = codici.filter((c) => !fs.existsSync(path.join(dir(radice), "pagine", codiceCanonico(c), "indice.json")));
    if (daRaccogliere.length) raccogli(radice, daRaccogliere, paralleli);
    esito.raccolta = { chiesti: codici.length, nuovi: daRaccogliere.length,
      raggiunti: codici.filter((c) => leggiJson(path.join(dir(radice), "pagine", codiceCanonico(c), "indice.json"))?.esito === "raggiunto").length,
      cause: causeRaccolta({ radice, codici }) };
  }

  if (fa("pdf")) {
    // Limitatore CONDIVISO: il default di riscaricaPdf e' per-chiamata, quindi
    // venticinque partner sullo stesso dominio partirebbero senza pause.
    const conti = { partner: 0, letti: 0, falliti: 0 };
    for (const c of codici) {
      if (!leggiJson(path.join(dir(radice), "pagine", codiceCanonico(c), "indice.json"))) continue;
      const r = await riscarica({ radice, partner: c, ...(limitatore ? { limitatore } : {}) });
      conti.partner++; conti.letti += r.letti || 0;
      conti.falliti += Object.values(r.falliti || {}).reduce((a, b) => a + b, 0);
    }
    const incompleti = codici.filter((c) => fs.existsSync(path.join(dir(radice), "pagine", codiceCanonico(c), "indice.json")) && !pdfCompleto(radice, c));
    esito.pdf = { ...conti, stato: incompleti.length ? "iniziato" : "completato", incompleti };
    // Il rifiuto e' il punto: senza, i valori che venivano dai PDF spariscono e
    // sembra una regressione del modello. E' successo il 01/09 su A GRAZ02.
    if (incompleti.length && fa("lettura")) {
      esito.fermato = `passo PDF non completato per ${incompleti.length} partner: non proseguo alla lettura`;
      return esito;
    }
  }

  if (fa("lettura")) {
    const r = await leggi({ radice, partner: codici.join(",") });
    esito.lettura = { letti: r.partnerLetti, falliti: r.chiamateFallite, attese429: r.attese429 || 0,
      msAttesi: r.msAttesi || 0, quota429: !!r.quota429, giornaliera: !!r.quota429Giornaliera };
    if (r.quota429Giornaliera) { esito.fermato = "quota giornaliera esaurita"; esito.quotaGiornaliera = true; return esito; }
  }

  const avanzFile = path.join(dir(radice), "avanzamento.json");
  const avanzamento = leggiJson(avanzFile, {}) || {};

  if (fa("cancelli")) {
    const letture = [];
    for (const c of codici) {
      const f = path.join(dir(radice), "letture", `${codiceCanonico(c)}.json`);
      if (!fs.existsSync(f)) continue;
      const impronta = impronteLettura(radice, c);
      if (avanzamento[codiceCanonico(c)]?.fuso && avanzamento[codiceCanonico(c)]?.improntaLettura === impronta) continue;
      letture.push(leggiJson(f));
    }
    // Solo le letture NUOVE: rilanciare i cancelli su tutte rifarebbe centinaia
    // di controlli HTTP e rimetterebbe in coda i 115 gia' giudicati.
    const nuovi = letture.length ? await cancelli(letture, { radice }) : { approvati: [], scartati: [], facolta: [] };
    if (letture.length && !prova) fondiEsiti({ radice, nuovi });
    esito.cancelli = { letture: letture.length, ...riepilogoEsiti(nuovi) };
    if (!prova) for (const c of codici) {
      const k = codiceCanonico(c);
      const impronta = impronteLettura(radice, c);
      if (impronta) avanzamento[k] = { ...(avanzamento[k] || {}), improntaLettura: impronta, fuso: true, applicato: avanzamento[k]?.applicato ?? false };
    }
  }

  if (fa("applica")) {
    const insieme = new Set(codici.map(codiceCanonico));
    const approvati = (leggiJson(path.join(dir(radice), "approvati.json"), []) || [])
      .filter((p) => insieme.has(codiceCanonico(p.codiceNorm)) && CAMPI_AUTOMATICI.includes(p.campo));
    const nuovo = { ...avanzamento };
    for (const c of codici) { const k = codiceCanonico(c); if (nuovo[k]) nuovo[k] = { ...nuovo[k], applicato: true, campiDaApplicare: [] }; }
    esito.applicazione = await applicaEControlla({ radice, proposte: approvati, campi: CAMPI_AUTOMATICI,
      etichetta: `blocco ${codici.length} partner`, idTransazione: `bl-${improntaValore(codici).slice(0, 12)}`,
      prova, git, applica, spingi, avanzamento: prova ? null : nuovo });
    if (esito.applicazione.fermato) esito.fermato = esito.applicazione.fermato;
  } else if (!prova) {
    scriviAtomico(avanzFile, JSON.stringify(avanzamento, null, 2) + "\n");
  }

  if (!prova) annota(radice, { quando: "", codici, ...esito });
  return esito;
}

export async function eseguiPartner({
  radice = RADICE, limite = Infinity, blocco = 25, paralleli = 6, prova = false,
  passi = null, codiciChiesti = null, spingi = false, git = gitVero, ...iniezioni
} = {}) {
  const recupero = recuperaTransazione({ radice, git });
  if (recupero.azione === "fermato") return { fermato: recupero.motivo, recupero };

  const lock = apriLock(radice, { pid: process.pid, quando: "" });
  if (!lock.preso) return { fermato: lock.motivo };
  try {
    const partner = leggiJson(path.join(dir(radice), "partner.json"), []) || [];
    const collisi = new Set(((leggiJson(path.join(dir(radice), "collisioni.json"), []) || [])).map((v) => codiceCanonico(v.codiceCanonico)));
    const avanzamento = leggiJson(path.join(dir(radice), "avanzamento.json"), {}) || {};

    const zero = passi ? { saltato: true, motivo: "--solo attivo" }
      : await bloccoZero({ radice, prova, git, applica: iniezioni.applica });

    const conStato = partner.map((p) => ({ p, stato: statoPartner({ radice, partner: p, avanzamento, collisi }) }));
    const daFare = conStato.filter(({ p, stato }) => !["fatto", "colliso", "nonRaggiunto", "senzaTestoUtile"].includes(stato)
      && (p.siti || []).length
      && (!codiciChiesti || codiciChiesti.has(codiceCanonico(p.codiceNorm))));
    const scelti = daFare.slice(0, Number.isFinite(limite) ? limite : daFare.length);

    const blocchi = [];
    for (let i = 0; i < scelti.length; i += blocco) {
      const codici = scelti.slice(i, i + blocco).map(({ p }) => p.codiceNorm);
      const esito = await eseguiBlocco({ radice, codici, paralleli, prova, passi, spingi, git, ...iniezioni });
      blocchi.push(esito);
      if (esito.quotaGiornaliera) break;
      if (esito.applicazione?.annullato) { esito.fermato = "confronto fallito: blocco annullato"; break; }
    }
    const code = prova ? null : costruisciCode({ radice });
    return { bloccoZero: zero, blocchi, code: code && Object.fromEntries(Object.entries(code).map(([k, v]) => [k, v.length])),
      partnerDaFare: daFare.length, lavorati: scelti.length };
  } finally { rilasciaLock(radice); }
}

export default { CAMPI_AUTOMATICI, CAMPI_ARBITRATO };
