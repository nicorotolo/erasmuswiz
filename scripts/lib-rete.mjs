// Un solo confine di rete per tutta la pipeline. Ogni indirizzo viene
// controllato e risolto prima della richiesta; l'indirizzo IP scelto viene poi
// passato a net.connect tramite lookup, cosi' il DNS non puo' cambiare fra il
// controllo e la connessione (DNS rebinding).

import dns from "node:dns";
import http from "node:http";
import https from "node:https";
import net from "node:net";

export const LIMITE_HTML = 5 * 1024 * 1024;
// Il tetto PDF coincide con quello gia' usato da riscarica-pdf.mjs: alzarlo
// qui farebbe accumulare fino a 25 MiB per poi rifiutare comunque oltre 8 MiB.
export const LIMITE_PDF = 8 * 1024 * 1024;
export const PORTE_HTTP_AMMESSE = new Set([80, 443, 8080, 8443]);
export const MASSIMO_REDIRECT = 8;
const pausa = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class Limitatore {
  constructor(paralleli) { this.paralleli = paralleli; this.attivi = 0; this.attese = []; this.ultime = new Map(); this.catene = new Map(); this.richieste = 0; this.minimo = Infinity; }
  async esegui(url, fn) {
    await new Promise((resolve) => { const entra = () => this.attivi < this.paralleli ? (this.attivi++, resolve()) : this.attese.push(entra); entra(); });
    // Il posto va restituito anche quando l'URL e' malformato o la richiesta
    // fallisce, altrimenti dopo pochi errori l'intera pipeline resta sospesa.
    let libera;
    try {
      const dominio = new URL(url).hostname.toLowerCase();
      const precedente = this.catene.get(dominio) || Promise.resolve();
      const miaCoda = new Promise((resolve) => { libera = resolve; }); this.catene.set(dominio, miaCoda);
      await precedente;
      const ultima = this.ultime.get(dominio);
      if (ultima) {
        let intervallo = Date.now() - ultima;
        while (intervallo < 1000) { await pausa(1000 - intervallo); intervallo = Date.now() - ultima; }
        this.minimo = Math.min(this.minimo, intervallo);
      }
      this.ultime.set(dominio, Date.now()); this.richieste++;
      return await fn();
    } finally { libera?.(); this.attivi--; this.attese.shift()?.(); }
  }
}

// Anche gli strumenti che prima non avevano un limitatore proprio condividono
// questa istanza: la garanzia "un turno per ogni salto" vale cosi' per tutta la
// pipeline, non soltanto per raccogli-partner.mjs.
const LIMITATORE_PREDEFINITO = new Limitatore(6);

const V4_MASSIMO_UNICAST = 0xdfffffffn;

const v4Numero = (ip) => ip.split(".").reduce((n, parte) => (n << 8n) + BigInt(parte), 0n);

function v6Numero(ip) {
  let testo = ip.toLowerCase().split("%")[0];
  if (testo.includes(".")) {
    const pos = testo.lastIndexOf(":");
    const v4 = v4Numero(testo.slice(pos + 1));
    testo = `${testo.slice(0, pos)}:${(v4 >> 16n).toString(16)}:${(v4 & 0xffffn).toString(16)}`;
  }
  const lati = testo.split("::");
  const sinistra = lati[0] ? lati[0].split(":") : [];
  const destra = lati[1] ? lati[1].split(":") : [];
  const zeri = Array(Math.max(0, 8 - sinistra.length - destra.length)).fill("0");
  return [...sinistra, ...zeri, ...destra].reduce((n, parte) => (n << 16n) + BigInt(`0x${parte || "0"}`), 0n);
}

const cidr = (base, prefisso) => {
  const famiglia = net.isIP(base);
  const bit = famiglia === 4 ? 32n : 128n;
  const valore = famiglia === 4 ? v4Numero(base) : v6Numero(base);
  const spostamento = bit - BigInt(prefisso);
  const inizio = (valore >> spostamento) << spostamento;
  return { famiglia, inizio, fine: inizio + ((1n << spostamento) - 1n) };
};

const dentro = (valore, intervallo) => valore >= intervallo.inizio && valore <= intervallo.fine;
const v4DaNumero = (valore) => [24n, 16n, 8n, 0n]
  .map((spostamento) => Number((valore >> spostamento) & 0xffn)).join(".");

// La regola e' positiva: un IP passa soltanto se cade negli intervalli global
// unicast. Gli intervalli sono ricavati dal registro IANA Special-Purpose: lo
// spazio unicast ordinario e' ammesso, le assegnazioni con "Globally Reachable"
// falso sono sottratte, e le eccezioni globali piu' specifiche sono riaggiunte.
const NON_GLOBALI_V4 = [
  ["0.0.0.0", 8], ["10.0.0.0", 8], ["100.64.0.0", 10], ["127.0.0.0", 8],
  ["169.254.0.0", 16], ["172.16.0.0", 12], ["192.0.0.0", 24],
  ["192.0.2.0", 24], ["192.88.99.0", 24], ["192.168.0.0", 16],
  ["198.18.0.0", 15], ["198.51.100.0", 24], ["203.0.113.0", 24],
].map(([ip, p]) => cidr(ip, p));
const ECCEZIONI_GLOBALI_V4 = [cidr("192.0.0.9", 32), cidr("192.0.0.10", 32)];

// Per IPv6 l'elenco e' davvero positivo: solo prefissi ALLOCATED nel registro
// IANA Global Unicast (aggiornato 2025-10-10), piu' le assegnazioni speciali
// marcate esplicitamente "Globally Reachable = True". I blocchi riservati
// dentro 2000::/3 non passano soltanto perche' hanno la forma di un unicast.
const GLOBALI_V6 = [
  ["64:ff9b::", 96],
  ["2001:1::1", 128], ["2001:1::2", 128], ["2001:1::3", 128],
  ["2001:3::", 32], ["2001:4:112::", 48], ["2001:20::", 28], ["2001:30::", 28],
  ["2001:200::", 23], ["2001:400::", 23], ["2001:600::", 23], ["2001:800::", 22],
  ["2001:c00::", 23], ["2001:e00::", 23], ["2001:1200::", 23], ["2001:1400::", 22],
  ["2001:1800::", 23], ["2001:1a00::", 23], ["2001:1c00::", 22],
  ["2001:2000::", 19], ["2001:4000::", 23], ["2001:4200::", 23],
  ["2001:4400::", 23], ["2001:4600::", 23], ["2001:4800::", 23],
  ["2001:4a00::", 23], ["2001:4c00::", 23], ["2001:5000::", 20],
  ["2001:8000::", 19], ["2001:a000::", 20], ["2001:b000::", 20],
  ["2003::", 18], ["2400::", 12], ["2410::", 12], ["2600::", 12],
  ["2610::", 23], ["2620::", 23], ["2630::", 12], ["2800::", 12],
  ["2a00::", 12], ["2a10::", 12], ["2c00::", 12],
].map(([ip, p]) => cidr(ip, p));
const SPECIALI_NON_GLOBALI_V6 = [cidr("2001:db8::", 32)];

export function eIpGlobalUnicast(ip) {
  const famiglia = net.isIP(ip);
  if (famiglia === 4) {
    const valore = v4Numero(ip);
    if (ECCEZIONI_GLOBALI_V4.some((r) => dentro(valore, r))) return true;
    return valore <= V4_MASSIMO_UNICAST && !NON_GLOBALI_V4.some((r) => dentro(valore, r));
  }
  if (famiglia === 6) {
    const valore = v6Numero(ip);
    // Le forme IPv4-mapped restano escluse anche quando l'IPv4 incorporato e'
    // pubblico: la pipeline accetta una sola classificazione non ambigua.
    if (dentro(valore, cidr("::ffff:0:0", 96))) return false;
    const nat64 = cidr("64:ff9b::", 96);
    if (dentro(valore, nat64) && !eIpGlobalUnicast(v4DaNumero(valore & 0xffffffffn))) return false;
    return GLOBALI_V6.some((r) => dentro(valore, r))
      && !SPECIALI_NON_GLOBALI_V6.some((r) => dentro(valore, r));
  }
  return false;
}

export class ErroreIndirizzo extends Error {
  constructor(messaggio, codice = "indirizzoNonAmmesso") {
    super(messaggio); this.name = "ErroreIndirizzo"; this.codice = codice;
  }
}

const lookupPredefinito = (hostname, opzioni) => dns.promises.lookup(hostname, opzioni);

export async function validaDestinazione(valore, {
  risolvi = lookupPredefinito,
  consentiIp = eIpGlobalUnicast,
  porteAmmesse = PORTE_HTTP_AMMESSE,
} = {}) {
  let url;
  try { url = new URL(valore); }
  catch { throw new ErroreIndirizzo(`URL non valido: ${valore}`, "urlNonValido"); }
  if (!/^https?:$/.test(url.protocol)) throw new ErroreIndirizzo(`Schema non ammesso: ${url.protocol}`, "schemaNonAmmesso");
  if (url.username || url.password) throw new ErroreIndirizzo("Credenziali nell'URL non ammesse", "credenziali");
  const hostname = url.hostname.replace(/^\[|\]$/g, "").replace(/\.$/, "").toLowerCase();
  if (hostname === "local" || hostname.endsWith(".local")) throw new ErroreIndirizzo("Nome mDNS .local non ammesso", "mdns");
  const porta = Number(url.port || (url.protocol === "https:" ? 443 : 80));
  if (!porteAmmesse.has(porta)) throw new ErroreIndirizzo(`Porta non ammessa: ${porta}`, "portaNonAmmessa");

  let risultati;
  if (net.isIP(hostname)) risultati = [{ address: hostname, family: net.isIP(hostname) }];
  else {
    try { risultati = await risolvi(hostname, { all: true, verbatim: true }); }
    catch (errore) { throw new ErroreIndirizzo(`DNS non risolto per ${hostname}: ${errore.message}`, "dns"); }
  }
  if (!Array.isArray(risultati)) risultati = [risultati];
  const scelto = risultati.find((r) => r?.address && consentiIp(r.address));
  if (!scelto) throw new ErroreIndirizzo(`Nessun IP global unicast per ${hostname}`, "ipNonGlobale");
  return { url, hostname, indirizzo: scelto.address, famiglia: Number(scelto.family || net.isIP(scelto.address)), porta };
}

class Intestazioni {
  constructor(valori = {}) { this.valori = valori; }
  get(nome) {
    const valore = this.valori[String(nome).toLowerCase()];
    return Array.isArray(valore) ? valore.join(", ") : valore == null ? null : String(valore);
  }
}

function rispostaPubblica({ stato, url, intestazioni, corpo, troncato = false }) {
  const headers = intestazioni instanceof Intestazioni ? intestazioni : new Intestazioni(intestazioni);
  return {
    status: stato, stato, ok: stato >= 200 && stato < 300, url, urlFinale: url,
    headers, corpo, troncato,
    async text() { return corpo.toString("utf8"); },
    async json() { return JSON.parse(corpo.toString("utf8")); },
    async arrayBuffer() { return corpo.buffer.slice(corpo.byteOffset, corpo.byteOffset + corpo.byteLength); },
  };
}

function trasportoNode(destinazione, { method, headers, body, signal, timeoutMs, limiteHtml, limitePdf }) {
  return new Promise((resolve, reject) => {
    const modulo = destinazione.url.protocol === "https:" ? https : http;
    let conclusa = false;
    const termina = (fn, valore) => { if (conclusa) return; conclusa = true; fn(valore); };
    // node:http inoltra lookup a net.connect. Non usiamo undici perche' il
    // progetto non lo installa e aggiungere dipendenze runtime e' fuori fase.
    const req = modulo.request(destinazione.url, {
      method, headers,
      lookup: (_host, opzioni, callback) => opzioni?.all
        ? callback(null, [{ address: destinazione.indirizzo, family: destinazione.famiglia }])
        : callback(null, destinazione.indirizzo, destinazione.famiglia),
    }, (res) => {
      const intestazioni = new Intestazioni(res.headers);
      const tipo = intestazioni.get("content-type") || "";
      const pdf = /application\/pdf/i.test(tipo) || /\.pdf(?:$|\?)/i.test(destinazione.url.pathname);
      const limite = pdf ? limitePdf : limiteHtml;
      const pezzi = []; let ricevuti = 0;
      res.on("data", (pezzo) => {
        if (conclusa) return;
        const spazio = Math.max(0, limite - ricevuti);
        if (spazio) { pezzi.push(pezzo.subarray(0, spazio)); ricevuti += Math.min(spazio, pezzo.length); }
        if (pezzo.length > spazio) {
          const corpo = Buffer.concat(pezzi, ricevuti);
          termina(resolve, rispostaPubblica({ stato: res.statusCode || 0, url: destinazione.url.href, intestazioni, corpo, troncato: true }));
          res.destroy(); req.destroy();
        }
      });
      res.on("end", () => termina(resolve, rispostaPubblica({ stato: res.statusCode || 0, url: destinazione.url.href, intestazioni, corpo: Buffer.concat(pezzi, ricevuti) })));
      res.on("error", (errore) => { if (!conclusa) termina(reject, errore); });
    });
    req.setTimeout(timeoutMs, () => {
      const errore = Object.assign(new Error("timeout"), { name: "TimeoutError" });
      req.destroy(errore);
    });
    req.on("error", (errore) => termina(reject, errore));
    if (signal) {
      // AbortSignal.timeout porta gia' una ragione TimeoutError: conservarla e'
      // essenziale perche' il crawler registri ancora la causa "timeout".
      const annulla = () => req.destroy(signal.reason instanceof Error
        ? signal.reason : Object.assign(new Error("richiesta annullata"), { name: "AbortError" }));
      if (signal.aborted) annulla(); else signal.addEventListener("abort", annulla, { once: true });
    }
    if (body != null) req.write(body);
    req.end();
  });
}

const eRedirect = (stato) => [301, 302, 303, 307, 308].includes(stato);

function entroScadenza(promessa, signal) {
  if (!signal) return promessa;
  if (signal.aborted) return Promise.reject(signal.reason);
  return new Promise((resolve, reject) => {
    const annulla = () => reject(signal.reason);
    signal.addEventListener("abort", annulla, { once: true });
    Promise.resolve(promessa).then(
      (valore) => { signal.removeEventListener("abort", annulla); resolve(valore); },
      (errore) => { signal.removeEventListener("abort", annulla); reject(errore); },
    );
  });
}

export async function fetchSicuro(valore, {
  method = "GET", headers = {}, body = null, signal,
  timeoutMs = 20_000,
  scadenzaTotaleMs = timeoutMs,
  massimoRedirect = MASSIMO_REDIRECT,
  limiteHtml = LIMITE_HTML,
  limitePdf = LIMITE_PDF,
  limitatore = LIMITATORE_PREDEFINITO,
  primaDellaRichiesta = null,
  risolvi,
  consentiIp,
  porteAmmesse,
  trasporto = trasportoNode,
} = {}) {
  const controllerTotale = new AbortController();
  const timerTotale = Number.isFinite(scadenzaTotaleMs) && scadenzaTotaleMs > 0
    ? setTimeout(() => controllerTotale.abort(Object.assign(new Error("timeout"), { name: "TimeoutError" })), scadenzaTotaleMs)
    : null;
  const segnali = [signal, timerTotale ? controllerTotale.signal : null].filter(Boolean);
  const segnaleEffettivo = segnali.length > 1 ? AbortSignal.any(segnali) : segnali[0];
  let corrente = new URL(valore).href;
  // La catena percorsa, non solo il capolinea. Serve al Passo 1: una fonte su
  // dominio esterno si puo' sostenere come "indicata dall'ateneo" solo se si sa
  // da dove ci si e' arrivati. `urlFinale` da solo dice dove si finisce, non
  // per quali mani si e' passati.
  const catena = [];
  let metodo = method.toUpperCase();
  let contenuto = body;
  let intestazioniRichiesta = Object.fromEntries(Object.entries(headers));
  if (!Object.keys(intestazioniRichiesta).some((k) => k.toLowerCase() === "accept-encoding")) {
    // Senza un decompressionatore a valle si chiede esplicitamente il corpo
    // leggibile. Il limite resta cosi' applicato ai byte che useremo davvero.
    intestazioniRichiesta["accept-encoding"] = "identity";
  }
  try {
    for (let salto = 0; salto <= massimoRedirect; salto++) {
      const destinazione = await entroScadenza(
        validaDestinazione(corrente, { risolvi, consentiIp, porteAmmesse }), segnaleEffettivo,
      );
      catena.push(destinazione.url.href);
      if (primaDellaRichiesta) await entroScadenza(
        primaDellaRichiesta(destinazione.url.href, { salto, signal: segnaleEffettivo }), segnaleEffettivo,
      );
      const esegui = () => trasporto(destinazione, { method: metodo, headers: intestazioniRichiesta,
        body: contenuto, signal: segnaleEffettivo, timeoutMs, limiteHtml, limitePdf });
      const richiesta = limitatore ? limitatore.esegui(destinazione.url.href, esegui) : esegui();
      const risposta = await entroScadenza(richiesta, segnaleEffettivo);
      if (!eRedirect(risposta.status)) return Object.assign(risposta, { catena: [...catena] });
      const posizione = risposta.headers.get("location");
      if (!posizione) return Object.assign(risposta, { catena: [...catena] });
      if (salto === massimoRedirect) throw new ErroreIndirizzo(`Troppi redirect (massimo ${massimoRedirect})`, "troppiRedirect");
      const successiva = new URL(posizione, destinazione.url);
      if (successiva.origin !== destinazione.url.origin) {
        // Una pagina ostile non deve poter ricevere su un altro host le chiavi o
        // i cookie destinati all'origine iniziale.
        const sensibili = /^(authorization|proxy-authorization|cookie|x-goog-api-key)$/i;
        intestazioniRichiesta = Object.fromEntries(Object.entries(intestazioniRichiesta).filter(([k]) => !sensibili.test(k)));
      }
      corrente = successiva.href;
      if (risposta.status === 303 || ((risposta.status === 301 || risposta.status === 302) && metodo === "POST")) {
        metodo = "GET"; contenuto = null;
        intestazioniRichiesta = Object.fromEntries(Object.entries(intestazioniRichiesta)
          .filter(([k]) => !/^(content-length|content-type)$/i.test(k)));
      }
    }
    throw new ErroreIndirizzo("Catena di redirect non conclusa", "troppiRedirect");
  } finally {
    if (timerTotale) clearTimeout(timerTotale);
  }
}
