// scripts/raccogli-partner.mjs
// Fase 4a della pipeline: conserva le pagine prima di chiedere a qualcuno di
// leggerle. Tenere raccolta e interpretazione separate rende verificabile ogni
// informazione che verra' proposta agli studenti.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CAMPI_RIEMPIBILI, caricaMete, codiceCanonico, statoCampo } from "./lib-mete.mjs";
import { fetchSicuro, Limitatore } from "./lib-rete.mjs";
import { forzaMotivo, motiviDelLink, unisciMotivi } from "./lib-motivi.mjs";
import { improntaMateriale, improntaPagina } from "./leggi-partner.mjs";
export { Limitatore } from "./lib-rete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RACCOLTA = path.join(RADICE, "raccolta");
const USER_AGENT = "ErasmusWizBot/1.0 (+https://nicorotolo.github.io/erasmuswiz)";
const PAROLE = [
  // RADICI, non parole intere: il dizionario della specifica cercava
  // "internazionale" e mancava "internazionalità", cercava "exchange student" e
  // mancava "student exchange" - che in inglese e' la forma piu' comune.
  // Le radici non devono sovrapporsi fra loro: due voci che aggredissero lo
  // stesso testo lo conterebbero due volte.
  [4, ["incoming", "exchange student", "student exchange", "erasmus", "study abroad", "studenti in scambio", "austausch", "etudiants en echange", "intercambio", "wymiana", "değişim", "degisim", "csereprogram", "schimb", "utbytesstudent"]],
  [3, ["course catalog", "course catalogue", "module catalog", "programme catalogue", "vorlesungsverzeichnis", "modulhandbuch", "studienangebot", "catalogue de cours", "offre de formation", "oferta academica", "guia docente", "catalogo dei corsi", "ders katalogu", "katalog przedmiotow", "kursutbud"]],
  [3, ["language requirement", "sprachnachweis", "niveau de langue", "requisitos de idioma", "language of instruction", "cefr"]],
  [2, ["deadline", "nomination", "application period", "frist", "bewerbungsschluss", "date limite", "plazo", "termin", "son basvuru"]],
  [1, ["internation", "internazional", "internacional", "nemzetkozi", "mezinarodni", "uluslararasi", "mobilit", "movilidad"]],
  [-3, ["news", "notizie", "alumni", "press", "vacancies", "research", "phd", "doctoral", "outgoing", "staff mobility", "summer school"]],
];
// Il tetto ordinario resta 25: e' quello che ha raccolto 585 partner. Le
// pagine MOTIVATE hanno un budget a parte, perche' altrimenti non
// competerebbero ad armi pari: la pagina che parla dell'Erasmus vale 4 punti,
// il catalogo vero ne vale 3, e la ventesima pagina di notizie vince sempre.
// Otto in piu' e' anche il tetto dell'esposizione: un sito ostile puo' farci
// aprire al piu' otto indirizzi in piu', tutti passati dal Passo 0.
export const TETTO_PAGINE = 25;
export const TETTO_MOTIVATE = 8;
export const MOTIVATE_PER_CAMPO = 2;

// La regola dei posti, isolata dal ciclo perche' sia provabile da sola.
// `usiPerCampo` dice quante pagine sono gia' state aperte per ciascun motivo.
// Una pagina motivata prende prima un posto del budget motivato; se quello e'
// esaurito puo' ancora entrare fra le 25 ordinarie, ma non le sottrae mai un
// posto quando un posto motivato c'e'.
// I due filtri che tenevano fuori proprio le pagine che cerchiamo: un link
// entrava in coda solo se valeva punti E stava sullo stesso host. Il catalogo di
// Cork si chiama "Book of Modules" (zero parole del punteggio) e vive su
// courseleaf.com (altro host): era escluso due volte. Un link MOTIVATO entra
// comunque; il tetto di otto pagine limita quanto lontano si puo' finire, e il
// Passo 0 valida ogni indirizzo prima di chiederlo.
export function daAccodare(motivi, punti, urlPagina, urlLink) {
  if (motivi.length) return true;
  return punti > 0 && stessoAteneo(urlPagina, urlLink);
}

export function posteggia(motivi = [], { ordinarie = 0, motivate = 0, usiPerCampo = {} } = {}) {
  const campiLiberi = motivi.filter((c) => (usiPerCampo[c] || 0) < MOTIVATE_PER_CAMPO);
  const comeMotivata = campiLiberi.length > 0 && motivate < TETTO_MOTIVATE;
  const ammessa = comeMotivata || ordinarie < TETTO_PAGINE;
  return { ammessa, comeMotivata, campiLiberi };
}
const NON_TESTUALI = /\.(?:avif|bmp|css|csv|docx?|gif|ico|jpe?g|m4a|mov|mp3|mp4|odp|ods|odt|png|pptx?|rar|svg|tar|webm|webp|xlsx?|zip)$/i;
const AMBITI = ["ARCHI", "ECON", "FARM", "IUS", "INGE", "IIIS", "IIIS1", "IIIS2", "STATIS", "LETFIL", "MEDPROFSANIT", "PSICO1", "MEDIC2", "POLAT", "MATEM", "COMM", "SOCIO", "POLIT"];

export function punteggioLink(testo, url = "") {
  const haystack = `${testo} ${url}`.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
  return PAROLE.reduce((totale, [punti, parole]) => totale + parole.reduce((n, parola) => n + (haystack.includes(parola) ? punti : 0), 0), 0);
}

const norm = (valore) => String(valore || "").replace(/\s+/g, " ").trim().toUpperCase();
export const normalizzaPaese = (valore) => String(valore || "").trim().toLocaleLowerCase("it-IT").replace(/(^|[\s-])(\p{L})/gu, (_, prima, lettera) => prima + lettera.toLocaleUpperCase("it-IT"));
const senzaAccenti = (s) => String(s || "").normalize("NFD").replace(/\p{Diacritic}/gu, "");
// Un indirizzo dentro l'HTML (e dentro un sitemap XML) ha la e commerciale
// scritta come entita': "?a=1&amp;b=2". Fino al 31/08 non veniva decodificata e
// l'indirizzo restava rotto: 142 delle 5.555 pagine sono state scaricate cosi',
// e il catalogo approvato di Dresda porta ancora "&amp;" dentro il valore.
const decodificaEntita = (grezzo) => String(grezzo).replace(/&(?:amp|#0*38|#[xX]0*26);/g, "&");
const pulisciUrl = (grezzo, base) => {
  try {
    const u = new URL(decodificaEntita(grezzo), base);
    if (!/^https?:$/.test(u.protocol)) return null;
    u.hash = "";
    for (const chiave of [...u.searchParams.keys()]) if (/^(utm_|fbclid$|gclid$)/i.test(chiave)) u.searchParams.delete(chiave);
    return u.href;
  } catch { return null; }
};
const dominioRegistrabile = (hostname) => {
  const parti = hostname.toLowerCase().replace(/^www\./, "").split(".");
  if (parti.length < 3 || /^\d+(\.\d+){3}$/.test(hostname)) return parti.join(".");
  return /^(ac|co|com|edu|gov|net|org)$/.test(parti.at(-2)) && parti.at(-1).length === 2 ? parti.slice(-3).join(".") : parti.slice(-2).join(".");
};
const stessoAteneo = (a, b) => dominioRegistrabile(new URL(a).hostname) === dominioRegistrabile(new URL(b).hostname);
export const testoVisibile = (html) => senzaAccenti(html) && html
  .replace(/<\s*(script|style|nav|footer)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, " ")
  .replace(/<!--([\s\S]*?)-->/g, " ").replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"')
  .replace(/\s+/g, " ").trim();
const titoloPagina = (html) => (/<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const linkHtml = (html, base) => [...html.matchAll(/<a\b[^>]*?href\s*=\s*(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a\s*>/gi)]
  .map((m) => ({ url: pulisciUrl(m[2], base), testo: m[3].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() }))
  .filter((x) => x.url && !NON_TESTUALI.test(new URL(x.url).pathname));
// I link della pagina si SALVANO, non si buttano. Fino al 31/08 di ogni pagina
// restava solo il testo, e i tag - href compresi - venivano cancellati da
// testoVisibile: il modello leggeva \"Course Catalogue here\" senza sapere dove
// portasse \"here\", e l'unico indirizzo che poteva restituire era quello della
// pagina che aveva in mano. E' la causa misurata di 16 errori su 17 in
// linkCatalogo. Qui NON si filtra per punteggio ne' per dominio: il catalogo
// spesso sta su un altro host (Cork: courseleaf.com) e il suo testo vale zero
// punti (\"Book of Modules\"). Chi filtra e' la lettura, che puo' cambiare idea
// senza rifare la raccolta.
export const linkSalvati = (html, base) => {
  const visti = new Map();
  for (const l of linkHtml(html, base)) {
    // Le stesse tre entita' che decodifica testoVisibile, e per lo stesso
    // motivo: il modello cita il TESTO del link, e il cancello della citazione
    // lo ricerca dentro il testo della pagina. Se le due decodifiche non
    // coincidono la citazione non si ritrova e il dato buono viene scartato.
    const testo = l.testo.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/\s+/g, " ").trim().slice(0, 160);
    // A parita' di indirizzo si tiene il testo piu' lungo: lo stesso link
    // compare spesso due volte, una come icona muta e una con la sua etichetta.
    if (!visti.has(l.url) || visti.get(l.url).length < testo.length) visti.set(l.url, testo);
  }
  return [...visti].slice(0, 400).map(([url, testo]) => ({ testo, url }));
};
const locSitemap = (xml) => [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((m) => pulisciUrl(m[1].trim())).filter(Boolean);
// Un solo ritentativo sugli errori di rete, come consente la specifica ("non si
// ritenta piu' di una volta"): l'implementazione non ne faceva nessuno, e i
// guasti visti sul campo sono in parte INTERMITTENTI - www.ceu.edu risultava
// "fetch failed" durante la raccolta e rispondeva 200 pochi minuti dopo.
// Non si ritenta su una risposta HTTP valida (403, 404): quelle sono risposte,
// non guasti, e insistere sarebbe maleducato.
async function scaricaUnaVolta(url, limitatore, { controllaRobots = true, rete = {} } = {}) {
  try {
    const risposta = await fetchSicuro(url, {
      ...rete, headers: { "user-agent": USER_AGENT, ...(rete.headers || {}) }, limitatore,
      // Il controllo vive dentro la catena manuale: prima di OGNI salto si
      // leggono le regole dell'origine di arrivo. Cosi' un redirect non puo'
      // anticipare ne' robots.txt ne' il turno del nuovo hostname.
      primaDellaRichiesta: controllaRobots ? async (destinazione, { signal }) => {
        const { regole } = await regoleRobots(destinazione, limitatore, undefined,
          { rete: { ...rete, signal } });
        if (!consentitoDaRobots(destinazione, regole)) {
          const errore = new Error(`robots.txt vieta: ${destinazione}`);
          errore.name = "ErroreRobots";
          throw errore;
        }
      } : null,
    });
    return { stato: risposta.status, ok: risposta.ok, urlFinale: risposta.url,
      tipo: risposta.headers.get("content-type") || "", corpo: risposta.corpo,
      troncato: risposta.troncato, catena: risposta.catena || [] };
  } catch (errore) { return { errore: errore.name === "TimeoutError" ? "timeout" : errore.message }; }
}

export function registraTentativo(tentativi, url, risposta, extra = {}) {
  if (!tentativi) return;
  let causa = null;
  if (extra.causa) causa = extra.causa;
  else if (risposta?.errore === "timeout") causa = "timeout";
  else if (/^robots\.txt vieta:/.test(risposta?.errore || "")) causa = "robots";
  else if (risposta?.stato >= 500) causa = "http5xx";
  else if (risposta?.stato >= 400) causa = "http4xx";
  else if (!risposta?.ok) causa = "sconosciuta";
  const voce = { url: String(url || ""), esito: extra.esito || (causa ? "fallito" : "riuscito"),
    causa, stato: risposta?.stato ?? null, troncato: risposta?.troncato === true };
  // Un contenuto vuoto o un cambio dominio qualificano lo STESSO tentativo
  // HTTP appena registrato: non si aggiunge una seconda riga, altrimenti il
  // resoconto conterebbe due tentativi dove la rete ne ha eseguito uno.
  const precedente = tentativi.at(-1);
  if (extra.esito && precedente?.url === voce.url && precedente.causa == null) tentativi[tentativi.length - 1] = voce;
  else tentativi.push(voce);
}

export async function scarica(url, limitatore, tentativi, opzioni) {
  const primo = await scaricaUnaVolta(url, limitatore, opzioni);
  // Un divieto robots e una validazione negativa sono decisioni, non guasti di
  // rete intermittenti: ripeterli costerebbe una richiesta inutile.
  const nonRitentare = primo.errore && (/^robots\.txt vieta:/.test(primo.errore)
    || /non ammesso|global unicast|Credenziali|mDNS|URL non valido/.test(primo.errore));
  const risposta = primo.errore && !nonRitentare ? await scaricaUnaVolta(url, limitatore, opzioni) : primo;
  registraTentativo(tentativi, url, risposta);
  return risposta;
}

// Ritorna anche il TESTO di robots.txt, perche' le righe "Sitemap:" servono
// subito dopo: riscaricarlo per estrarle costava una richiesta in piu' per ogni
// sitemap trovata, ognuna col secondo di pausa obbligatorio sullo stesso
// dominio. La cache per host evita di richiederlo a ogni partner che lo
// condivide e per ogni sottodominio gia' visto.
const robotsPerHost = new Map();
export async function regoleRobots(base, limitatore, tentativi, { rete = {} } = {}) {
  const host = new URL(base).origin;
  if (robotsPerHost.has(host)) return robotsPerHost.get(host);
  // robots.txt non controlla se stesso, altrimenti la domanda sulle regole
  // richiederebbe le regole prima ancora di poterle leggere.
  const robots = await scarica(new URL("/robots.txt", base).href, limitatore, tentativi, { controllaRobots: false, rete });
  let esito = { regole: [], testo: "" };
  if (robots.ok) {
    const testo = robots.corpo.toString("utf8");
    const regole = []; let applica = false;
    for (const riga of testo.split(/\r?\n/)) {
      const m = /^\s*(user-agent|disallow)\s*:\s*(.*)$/i.exec(riga);
      if (!m) continue;
      if (m[1].toLowerCase() === "user-agent") applica = /^(\*|erasmuswizbot)$/i.test(m[2].trim());
      else if (applica && m[2].trim()) regole.push(m[2].trim());
    }
    esito = { regole, testo };
  }
  robotsPerHost.set(host, esito);
  return esito;
}
export const consentitoDaRobots = (url, regole) => !regole.some((r) => new URL(url).pathname.startsWith(r));

function leggiCsv(testo) {
  return testo.split(/\r?\n/).slice(1).filter((riga) => riga.trim()).map((riga) => {
    const celle = []; let corrente = "", virgolette = false;
    for (const carattere of riga) { if (carattere === '"') { virgolette = !virgolette; continue; } if (carattere === ";" && !virgolette) { celle.push(corrente); corrente = ""; } else corrente += carattere; }
    celle.push(corrente); return celle;
  });
}

async function caricaCsvSapienza() {
  const cartella = path.join(RADICE, "fonti", "sapienza", "goerasmus");
  const risultati = [];
  for (const ambito of AMBITI) {
    const file = path.join(cartella, `${ambito}.csv`);
    let testo;
    if (fs.existsSync(file)) testo = fs.readFileSync(file, "utf8");
    else {
      const risposta = await fetchSicuro(`https://accordi-didattica.web.uniroma1.it/goerasmus/export?ambito=${ambito}`, { headers: { "user-agent": USER_AGENT } });
      if (!risposta.ok) throw new Error(`${ambito}: HTTP ${risposta.status}`);
      testo = await risposta.text();
      if (!/Codice erasmus/i.test(testo)) throw new Error(`${ambito}: risposta inattesa`);
      fs.mkdirSync(cartella, { recursive: true }); fs.writeFileSync(file, testo);
    }
    risultati.push(...leggiCsv(testo).filter((c) => /Laurea/i.test(c[7] || "")).map((c) => ({ codice: c[3], ateneo: c[2], citta: c[10], paese: normalizzaPaese(c[1]), sito: c[11], areeIsced: c[9] })));
  }
  return risultati;
}

function fileMete(radice = RADICE) {
  const trovati = [];
  function visita(cartella) { for (const voce of fs.readdirSync(cartella, { withFileTypes: true })) { const p = path.join(cartella, voce.name); if (voce.isDirectory()) visita(p); else if (/^dati-mete.*\.js$/.test(voce.name)) trovati.push(p); } }
  const cartella = path.join(radice, "js", "atenei");
  if (fs.existsSync(cartella)) visita(cartella);
  return trovati;
}

export function separaCollisioni(partner) {
  const gruppi = new Map();
  for (const record of partner) {
    const chiave = codiceCanonico(record.codiceNorm || record.codice);
    if (!gruppi.has(chiave)) gruppi.set(chiave, []);
    gruppi.get(chiave).push(record);
  }
  const collisioni = [...gruppi]
    .filter(([chiave, record]) => chiave && record.length > 1)
    .map(([chiave, record]) => ({ codiceCanonico: chiave, record }));
  const collisi = new Set(collisioni.map((voce) => voce.codiceCanonico));
  return {
    sani: partner.filter((record) => !collisi.has(codiceCanonico(record.codiceNorm || record.codice))),
    collisioni,
  };
}

export function validaPartner(partner, collisioniDichiarate = []) {
  // Misura 0a: i partner sono ~615; i buchi possono invece scendere da 603 a
  // zero quando la pipeline riesce. Controllare i buchi contro 603 faceva
  // esplodere il lavoro proprio mentre migliorava i dati.
  if (Math.abs(partner.length - 615) > 31) {
    throw new Error(`elenco inatteso: ${partner.length} partner`);
  }
  const dichiarati = new Set(collisioniDichiarate.map((voce) => codiceCanonico(voce.codiceCanonico)));
  const gruppi = new Map();
  for (const record of partner) {
    const chiave = codiceCanonico(record.codiceNorm || record.codice);
    if (!chiave) throw new Error("elenco inatteso: codice canonico vuoto");
    if (!gruppi.has(chiave)) gruppi.set(chiave, []);
    gruppi.get(chiave).push(record);
  }
  const nonDichiarati = [...gruppi].filter(([chiave, record]) => record.length > 1 && !dichiarati.has(chiave));
  if (nonDichiarati.length) {
    throw new Error(`collisione non dichiarata: ${nonDichiarati.map(([chiave]) => chiave).join(", ")}`);
  }
  const sani = partner.filter((record) => !dichiarati.has(codiceCanonico(record.codiceNorm || record.codice)));
  const daRaccogliere = sani.filter((record) => (record.campiMancanti || []).length).length;
  if (daRaccogliere < 0 || daRaccogliere > sani.length) {
    throw new Error(`elenco inatteso: ${daRaccogliere} da raccogliere su ${sani.length}`);
  }
  return sani;
}

export async function costruisciPartner({ radice = RADICE, caricaCsv = caricaCsvSapienza, segnala = console.warn } = {}) {
  const raccolta = path.join(radice, "raccolta");
  const mappa = new Map();
  const aggiungi = (dati) => {
    const codiceNorm = norm(dati.codice); if (!codiceNorm) return;
    const p = mappa.get(codiceNorm) || { codice: dati.codice || codiceNorm, codiceNorm, ateneo: "", citta: "", paese: "", siti: [], areeIsced: [], mete: 0, _mete: [] };
    for (const chiave of ["ateneo", "citta", "paese"]) if (!p[chiave] && dati[chiave]) p[chiave] = String(dati[chiave]).trim();
    if (dati.sito) { const sito = pulisciUrl(dati.sito); if (sito && !p.siti.includes(sito)) p.siti.push(sito); }
    if (dati.areeIsced && !p.areeIsced.includes(dati.areeIsced)) p.areeIsced.push(dati.areeIsced);
    if (dati.meta) { p.mete++; p._mete.push(dati.meta); }
    mappa.set(codiceNorm, p);
  };
  for (const riga of await caricaCsv()) aggiungi(riga);
  for (const file of fileMete(radice)) for (const meta of caricaMete(fs.readFileSync(file, "utf8"))) aggiungi({ codice: meta.codiceErasmus, ateneo: meta.universita, citta: meta.citta, paese: meta.paese, sito: meta.linkSito, meta });
  const completi = [...mappa.values()].map((p) => ({ ...p, codiceNorm: codiceCanonico(p.codiceNorm), campiMancanti: CAMPI_RIEMPIBILI.filter((campo) => p._mete.some((meta) => !["dato", "nonTrovabile"].includes(statoCampo(meta, campo)))) })).map(({ _mete, ...p }) => p).sort((a, b) => a.codiceNorm.localeCompare(b.codiceNorm));
  const collisioniFile = path.join(raccolta, "collisioni.json");
  const collisioniPrecedenti = fs.existsSync(collisioniFile) ? JSON.parse(fs.readFileSync(collisioniFile, "utf8")) : [];
  const rilevate = separaCollisioni(completi).collisioni;
  const collisioniPerChiave = new Map(collisioniPrecedenti.map((voce) => [codiceCanonico(voce.codiceCanonico), voce]));
  for (const voce of rilevate) collisioniPerChiave.set(voce.codiceCanonico, voce);
  const collisioni = [...collisioniPerChiave.values()];
  fs.mkdirSync(raccolta, { recursive: true });
  fs.writeFileSync(collisioniFile, JSON.stringify(collisioni, null, 2) + "\n");
  // Una collisione nuova non deve fermare per sempre la catena: viene isolata,
  // ma resta rumorosa a ogni ricostruzione affinche' una persona possa decidere.
  for (const voce of rilevate) segnala(`Collisione isolata ${voce.codiceCanonico}: ${voce.record.map((record) => record.codice).join(" | ")}`);
  const partner = validaPartner(completi, collisioni);
  const daRaccogliere = partner.filter((p) => p.campiMancanti.length).length;
  fs.writeFileSync(path.join(raccolta, "partner.json"), JSON.stringify(partner, null, 2) + "\n");
  return partner;
}

export async function caricaPartner({ radice = RADICE, ricostruisci = false, costruisci = costruisciPartner } = {}) {
  const file = path.join(radice, "raccolta", "partner.json");
  return ricostruisci || !fs.existsSync(file)
    ? costruisci({ radice })
    : JSON.parse(fs.readFileSync(file, "utf8"));
}

async function candidatiPartner(partner, limitatore) {
  const candidati = new Map(), note = [], tentativi = [];
  // L'indirizzo dell'accordo ufficiale a volte punta a una pagina profonda che
  // nel frattempo e' sparita: "www.supsi.ch/international/" risponde 404 mentre
  // la radice dello stesso sito risponde 200. La radice va quindi provata come
  // ripiego, non come alternativa: si aggiunge in coda e solo se e' diversa.
  const daProvare = [];
  for (const sito of partner.siti) {
    if (!daProvare.includes(sito)) daProvare.push(sito);
    try {
      const radice = new URL(sito).origin + "/";
      if (radice !== sito && !daProvare.includes(radice)) daProvare.push(radice);
    } catch { /* indirizzo malformato: lo salta il ciclo sotto */ }
  }

  if (!daProvare.length) {
    note.push("nessun indirizzo noto per questo partner");
    registraTentativo(tentativi, "", null, { esito: "fallito", causa: "nessunCandidato" });
  }

  for (const sitoIniziale of daProvare) {
    if (candidati.size) break;   // basta un ingresso buono: non si insiste sugli altri

    // IL REINDIRIZZAMENTO CAMBIA CASA. "www.uni-salzburg.at" porta a
    // "www.plus.ac.at", "www.uni-karlsruhe.de" al KIT: gli atenei cambiano
    // dominio e i vecchi indirizzi restano negli accordi. Il confronto
    // "stesso ateneo" va fatto sull'indirizzo di ARRIVO, non su quello di
    // partenza, altrimenti si scarta l'intero sito - e' la causa piu' grossa
    // dei "nessun candidato" misurati il 30/08, quindici su ventinove.
    // Anche sitemap e sottodomini vanno cercati sul dominio d'arrivo.
    const primaVisita = await scarica(sitoIniziale, limitatore, tentativi);
    let sito = sitoIniziale;
    if (primaVisita.ok && primaVisita.urlFinale) {
      try {
        const arrivo = new URL(primaVisita.urlFinale).origin + "/";
        if (new URL(arrivo).hostname !== new URL(sitoIniziale).hostname) {
          note.push(`reindirizzato: ${sitoIniziale} -> ${arrivo}`);
          registraTentativo(tentativi, sitoIniziale, primaVisita, { esito: "reindirizzato", causa: "dominioCambiato" });
          sito = arrivo;
        }
      } catch { /* indirizzo finale illeggibile: si tiene quello di partenza */ }
    }

    let robots, testoRobots;
    try { ({ regole: robots, testo: testoRobots } = await regoleRobots(sito, limitatore, tentativi)); }
    catch { continue; }

    // I TRE SEGNALI SONO INDIPENDENTI, non una catena. Prima la homepage che
    // non risponde faceva saltare l'intero partner: sitemap e sottodomini non
    // venivano nemmeno provati. Ed e' l'errore che costa di piu', perche' sono
    // proprio i partner con la homepage rotta quelli che il sottodominio
    // recupera - nella misura sul campo del 30/08 sono tre su otto.
    if (!consentitoDaRobots(sito, robots)) {
      note.push(`robots.txt vieta la homepage: ${sito}`);
      registraTentativo(tentativi, sito, null, { esito: "saltato", causa: "robots" });
    } else {
      // La pagina e' gia' stata scaricata sopra per scoprire il
      // reindirizzamento: riusarla invece di chiederla una seconda volta.
      const home = primaVisita.ok ? primaVisita : await scarica(sito, limitatore, tentativi);
      if (!home.ok) {
        note.push(`homepage non disponibile: ${sito} (${home.errore || `HTTP ${home.stato}`})`);
      } else {
        const html = home.corpo.toString("utf8");
        for (const l of linkHtml(html, home.urlFinale)) { const punti = punteggioLink(l.testo, l.url); if (punti > 0 && stessoAteneo(sito, l.url) && consentitoDaRobots(l.url, robots)) candidati.set(l.url, Math.max(candidati.get(l.url) || -Infinity, punti)); }
      }
    }

    const sitemap = [...testoRobots.matchAll(/(?:^|\n)\s*Sitemap:\s*(\S+)/gi)].map((m) => m[1]);
    if (!sitemap.length) sitemap.push(new URL("/sitemap.xml", sito).href);
    for (const sm of sitemap.slice(0, 4)) {
      const risposta = await scarica(sm, limitatore, tentativi); if (!risposta.ok) continue;
      let loc = locSitemap(risposta.corpo.toString("utf8"));
      if (loc.some((u) => /\.xml(?:$|\?)/i.test(u))) {
        const figli = loc.filter((u) => /incoming|exchange|erasmus|international|mobility/i.test(senzaAccenti(u))).slice(0, 3);
        loc = []; for (const figlio of figli) { const r = await scarica(figlio, limitatore, tentativi); if (r.ok) loc.push(...locSitemap(r.corpo.toString("utf8"))); }
      }
      for (const u of loc) { const punti = punteggioLink("", u); if (punti > 0 && stessoAteneo(sito, u) && consentitoDaRobots(u, robots)) candidati.set(u, Math.max(candidati.get(u) || -Infinity, punti)); }
    }
    // Un sottodominio e' un altro host: le sue regole stanno nel SUO robots.txt,
    // non in quello dell'ateneo. Prima si applicavano le regole del dominio
    // padre, che per quell'indirizzo non dicono niente.
    const host = new URL(sito).hostname.replace(/^www\./, "");
    for (const prefisso of ["international", "erasmus", "io", "oia"]) {
      const u = `https://${prefisso}.${host}/`;
      const r = await scarica(u, limitatore, tentativi);
      if (!r.ok) continue;
      if (r.corpo.length <= 1500) { registraTentativo(tentativi, u, r, { esito: "fallito", causa: "paginaVuota" }); continue; }
      const { regole: robotsSub } = await regoleRobots(u, limitatore, tentativi);
      if (!consentitoDaRobots(u, robotsSub)) { registraTentativo(tentativi, u, null, { esito: "saltato", causa: "robots" }); continue; }
      candidati.set(u, Math.max(candidati.get(u) || 0, punteggioLink("international", u)));
    }
  }
  if (!candidati.size && daProvare.length) registraTentativo(tentativi, daProvare[0], null, { esito: "fallito", causa: "nessunCandidato" });
  return { candidati: [...candidati].sort((a, b) => b[1] - a[1]).slice(0, 8), note, tentativi };
}

// Il 31/08 una rottura di prova ha mostrato che togliere "link" dal punto di
// scrittura non faceva fallire niente: la prova copriva linkSalvati e non chi
// la chiamava - la stessa lacuna dei cancelli il 30/08. Ora la forma della
// pagina salvata sta qui, in una funzione provata, non nel corpo del ciclo.
export const paginaSalvata = (pagina, risposta, html, pdf, quando) => ({
  url: pagina.url,
  urlFinale: risposta.urlFinale,
  stato: risposta.stato,
  tipo: pdf ? "pdf" : "html",
  titolo: pdf ? "" : titoloPagina(html),
  testo: pdf ? null : testoVisibile(html),
  link: pdf ? [] : linkSalvati(html, risposta.urlFinale),
  troncato: risposta.troncato === true,
  // La provenienza, non solo il capolinea. Un catalogo vive spesso su un
  // dominio diverso da quello dell'ateneo (Cork sta su courseleaf.com): senza
  // sapere da QUALE pagina dell'ateneo ci si e' arrivati, e con quale
  // etichetta, non si puo' sostenere che sia l'ateneo a indicarlo.
  motivi: pagina.motivi || [],
  scopertaDa: pagina.scopertaDa || null,
  testoLink: pagina.testoLink || null,
  catenaRedirect: risposta.catena || [],
  scaricataIl: quando,
});

async function raccogliUnPartner(partner, limitatore, riprendiTutto) {
  const cartella = path.join(RACCOLTA, "pagine", codiceCanonico(partner.codiceNorm));
  const indiceFile = path.join(cartella, "indice.json");
  if (!riprendiTutto && fs.existsSync(indiceFile)) { try { const indice = JSON.parse(fs.readFileSync(indiceFile, "utf8")); if (indice.esito && Date.now() - Date.parse(indice.raccoltoIl) < 30 * 86400_000) return { saltato: true, esito: indice.esito }; } catch {} }
  fs.mkdirSync(cartella, { recursive: true });
  const ingresso = await candidatiPartner(partner, limitatore);
  const indice = { codice: partner.codice, esito: "nonRaggiunto", raccoltoIl: new Date().toISOString(), candidati: ingresso.candidati.map(([url]) => url), pagine: [], note: ingresso.note, tentativi: ingresso.tentativi };
  const coda = ingresso.candidati.map(([url, punteggio]) => ({ url, punteggio, profondita: 0, motivi: [], forza: 0 }));
  const visti = new Set();
  // Due contatori, non uno: le motivate non devono rubare posti alle ordinarie
  // ne' esserne escluse. E al piu' due per campo, cosi' un sito che ripete
  // venti volte "Course catalogue" non consuma da solo tutto il budget.
  let ordinarie = 0, motivate = 0; const usiPerCampo = {};
  const inCoda = new Map(coda.map((v) => [v.url, v]));
  const accoda = (voce) => {
    const gia = inCoda.get(voce.url);
    // I motivi si UNISCONO: lo stesso indirizzo compare nel menu, nel corpo e
    // nel pie' di pagina, ogni volta con un'etichetta diversa. Tenere solo
    // l'ultima perderebbe meta' dell'informazione.
    if (gia) {
      gia.motivi = unisciMotivi(gia.motivi, voce.motivi);
      gia.punteggio = Math.max(gia.punteggio, voce.punteggio);
      // Anche la forza si tiene la migliore: lo stesso indirizzo puo' comparire
      // una volta con l'etichetta piena e una dentro una frase.
      if ((voce.forza || 0) > (gia.forza || 0)) { gia.forza = voce.forza; gia.testoLink = voce.testoLink; }
      return;
    }
    inCoda.set(voce.url, voce); coda.push(voce);
  };
  while (coda.length) {
    if (ordinarie >= TETTO_PAGINE && motivate >= TETTO_MOTIVATE) break;
    // Prima le motivate, e fra loro la piu' "titolata": un partner ha in media
    // quindici link che parlano di catalogo e i posti sono due, quindi a
    // decidere e' l'ordine, non il classificatore. "Vorlesungsverzeichnis"
    // batte "An overview of all courses offered in English is available here".
    // Fra le non motivate resta il punteggio di sempre.
    coda.sort((a, b) => (b.motivi.length > 0) - (a.motivi.length > 0)
      || (b.forza || 0) - (a.forza || 0) || b.punteggio - a.punteggio);
    const pagina = coda.shift();
    if (visti.has(pagina.url)) {
      // Gia' scaricata, ma con motivi che allora non conoscevamo: si aggiornano
      // sulla voce d'indice, altrimenti la precedenza nell'invio al modello
      // (scegliPagine) non la vedrebbe mai.
      const riga = indice.pagine.find((r) => r.url === pagina.url);
      if (riga) riga.motivi = unisciMotivi(riga.motivi, pagina.motivi);
      continue;
    }
    // Quali motivi hanno ancora posto: se nessuno, la pagina puo' passare solo
    // come ordinaria, e solo se restano posti fra le 25.
    const { ammessa, comeMotivata, campiLiberi } = posteggia(pagina.motivi || [], { ordinarie, motivate, usiPerCampo });
    if (!ammessa) continue;
    visti.add(pagina.url);
    // Anche durante la discesa: prima il controllo valeva solo per i candidati
    // di partenza, quindi i link scoperti strada facendo venivano scaricati
    // senza guardare robots.txt. Le regole valgono per tutte le richieste, non
    // solo per la prima.
    const { regole: robotsPagina } = await regoleRobots(pagina.url, limitatore, indice.tentativi);
    if (!consentitoDaRobots(pagina.url, robotsPagina)) { indice.note.push(`robots.txt vieta: ${pagina.url}`); registraTentativo(indice.tentativi, pagina.url, null, { esito: "saltato", causa: "robots" }); continue; }
    const risposta = await scarica(pagina.url, limitatore, indice.tentativi);
    if (!risposta.ok) { indice.note.push(`pagina non disponibile: ${pagina.url} (${risposta.errore || `HTTP ${risposta.stato}`})`); continue; }
    const pdf = /application\/pdf/i.test(risposta.tipo) || /\.pdf(?:$|\?)/i.test(new URL(risposta.urlFinale).pathname);
    const file = `${String(indice.pagine.length + 1).padStart(3, "0")}.json`;
    const html = pdf ? "" : risposta.corpo.toString("utf8");
    if (!pdf && !testoVisibile(html)) registraTentativo(indice.tentativi, pagina.url, risposta, { esito: "fallito", causa: "paginaVuota" });
    const salvata = paginaSalvata(pagina, risposta, html, pdf, new Date().toISOString());
    fs.writeFileSync(path.join(cartella, file), JSON.stringify(salvata, null, 2) + "\n");
    indice.pagine.push({ file, url: pagina.url, punteggio: pagina.punteggio,
      profondita: pagina.profondita, troncato: risposta.troncato === true,
      motivi: pagina.motivi || [], improntaContenuto: improntaPagina(salvata) });
    if (comeMotivata) { motivate++; for (const c of campiLiberi) usiPerCampo[c] = (usiPerCampo[c] || 0) + 1; }
    else ordinarie++;
    if (!pdf && pagina.profondita < 3) for (const l of linkHtml(html, risposta.urlFinale)) {
      const motivi = motiviDelLink(l.testo);
      const punti = punteggioLink(l.testo, l.url);
      // Un link motivato entra ANCHE se vale zero punti e ANCHE se sta su un
      // altro host. Sono i due filtri che tenevano fuori proprio le pagine che
      // cerchiamo, e il commento di linkSalvati lo diceva gia': il catalogo di
      // Cork sta su courseleaf.com e si chiama "Book of Modules", che non
      // contiene nessuna parola del punteggio. Il tetto di otto pagine limita
      // quanto lontano si puo' finire; il Passo 0 valida ogni indirizzo.
      if (!daAccodare(motivi, punti, pagina.url, l.url)) continue;
      accoda({ url: l.url, punteggio: punti, profondita: pagina.profondita + 1,
        motivi, forza: motivi.length ? forzaMotivo(l.testo) : 0,
        scopertaDa: risposta.urlFinale, testoLink: l.testo });
    }
  }
  indice.esito = indice.pagine.length ? "raggiunto" : "nonRaggiunto";
  if (!indice.pagine.length && !indice.note.length) indice.note.push("nessun candidato dai tre punti d'ingresso");
  indice.raccoltoIl = new Date().toISOString();
  // L'impronta del materiale si scrive insieme all'indice: chi cambia le
  // pagine aggiorna anche il modo di accorgersene.
  indice.improntaMateriale = improntaMateriale(indice);
  fs.writeFileSync(indiceFile, JSON.stringify(indice, null, 2) + "\n");
  return { esito: indice.esito };
}

async function main() {
  const limite = Number((process.argv.find((a) => a.startsWith("--limite=")) || "").split("=")[1]) || Infinity;
  const paralleli = Number((process.argv.find((a) => a.startsWith("--paralleli=")) || "--paralleli=6").split("=")[1]) || 6;
  const riprendiTutto = process.argv.includes("--riprendi-tutto");
  let partner;
  try {
    partner = await caricaPartner({ ricostruisci: process.argv.includes("--ricostruisci-partner") });
  }
  catch (errore) { console.error(`Impossibile costruire l'elenco partner: ${errore.message}`); process.exitCode = 1; return; }
  // --codici=A GRAZ02,D WEIMAR01 raccoglie SOLO quei partner. Serve a rimisurare
  // una correzione sugli stessi casi su cui e' stata trovata, invece che su un
  // campione nuovo ogni volta.
  const chiesti = (process.argv.find((a) => a.startsWith("--codici=")) || "").split("=").slice(1).join("=");
  const soloQuesti = chiesti ? new Set(chiesti.split(",").map(codiceCanonico).filter(Boolean)) : null;
  const daRaccogliere = partner.filter((p) => p.campiMancanti.length && (!soloQuesti || soloQuesti.has(codiceCanonico(p.codiceNorm))));
  if (soloQuesti && daRaccogliere.length < soloQuesti.size) {
    const trovati = new Set(daRaccogliere.map((p) => codiceCanonico(p.codiceNorm)));
    console.error(`Codici chiesti e non trovati fra i partner con campi mancanti: ${[...soloQuesti].filter((c) => !trovati.has(c)).join(", ")}`);
  }
  // Il centro di ogni intervallo evita che il campione dipenda dal primo partner
  // ordinato alfabeticamente, senza trasformare la prova in una scelta comoda.
  const scelti = limite >= daRaccogliere.length ? daRaccogliere : Array.from({ length: limite }, (_, i) => daRaccogliere[Math.floor((i + 0.5) * daRaccogliere.length / limite)]);
  const limitatore = new Limitatore(Math.max(1, paralleli)); let raggiunti = 0, saltati = 0;
  for (let i = 0; i < scelti.length; i += paralleli) for (const risultato of await Promise.all(scelti.slice(i, i + paralleli).map((p) => raccogliUnPartner(p, limitatore, riprendiTutto)))) { if (risultato.saltato) saltati++; if (risultato.esito === "raggiunto") raggiunti++; }
  console.log(`Partner: ${scelti.length}; raggiunti: ${raggiunti}; non raggiunti: ${scelti.length - raggiunti}; cache saltata: ${saltati}`);
  console.log(`Richieste HTTP nuove: ${limitatore.richieste}; intervallo minimo per dominio: ${limitatore.minimo === Infinity ? "nessuna seconda richiesta" : `${limitatore.minimo} ms`}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
