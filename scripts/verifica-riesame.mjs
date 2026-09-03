// Le voci che l'arbitrato umano ha messo in "non so" non sono scarti: sono
// domande rimaste aperte. Questo strumento le trasforma in numeri, separando le
// DUE domande che dentro un "non so" stanno appiccicate:
//
//   1. "e' vecchio?"        -> si risponde dai METADATI e dall'intestazione
//                              HTTP, quindi ANCHE sui PDF che il nostro
//                              estrattore non sa decodificare;
//   2. "e' un elenco di corsi?" -> serve il testo, e per i PDF a font con
//                              codifica propria (la classe E8, ~335 file
//                              misurati) il testo non c'e'.
//
// Il 02/09, sui primi sei PDF, questa separazione ha risolto quattro casi su
// sei: ENTPE era una scheda informativa Erasmus del 2022, Baskent un opuscolo
// istituzionale nonostante il file si chiamasse university_catalogue.pdf,
// Rennes 2 aveva 17 "crediti" e 11 "semestri" in 6.500 caratteri, e i due
// illeggibili di Gonesse e Cluj sono risultati comunque RECENTI (2025) - cioe'
// la meta' vecchia del dubbio era infondata.
//
// Non produce verdetti: quelli restano di chi guarda. Produce fatti.
//
// Uso: node scripts/verifica-riesame.mjs [--limite=N]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Limitatore } from "./raccogli-partner.mjs";
import { testoDaPdf } from "./lib-pdf.mjs";
import { fetchSicuro } from "./lib-rete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UA = "ErasmusWizBot/1.0 (+mappatura Erasmus)";

// "D:20240912103000+02'00'" -> "2024-09-12". Nessuna libreria: il formato e'
// definito dallo standard PDF e sta in chiaro nei byte.
export function dataPdf(grezza) {
  const m = /D:(\d{4})(\d{2})(\d{2})/.exec(String(grezza || ""));
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

// Il dizionario Info sta in testa o in coda al file, e in chiaro: si legge anche
// quando il TESTO non si lascia decodificare. E' l'unica ragione per cui i tre
// PDF illeggibili del 02/09 hanno comunque risposto alla domanda sulla data.
export function metadatiPdf(buffer) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 8) return {};
  const dove = buffer.subarray(0, 4000).toString("latin1")
    + buffer.subarray(Math.max(0, buffer.length - 6000)).toString("latin1");
  const pulisci = (s) => String(s || "").replace(/[^\x20-\x7EÀ-ɏ]/g, "").trim() || null;
  return {
    creato: dataPdf(/\/CreationDate\s*\(([^)]*)\)/.exec(dove)?.[1]),
    modificato: dataPdf(/\/ModDate\s*\(([^)]*)\)/.exec(dove)?.[1]),
    titoloPdf: pulisci(/\/Title\s*\(([^)]{0,120})\)/.exec(dove)?.[1]),
    produttore: pulisci(/\/Producer\s*\(([^)]{0,80})\)/.exec(dove)?.[1]),
  };
}

// Segnali che un documento ELENCHI dei corsi invece di parlarne. Non sono un
// giudizio e non vanno usati come cancello: il 01/09 tre segnali simili sono
// stati misurati come cancelli automatici e bocciati tutti e tre. Servono a
// dire dove guardare.
export function segnaliElenco(testo) {
  const t = String(testo || "");
  const conta = (re) => (t.match(re) || []).length;
  return {
    crediti: conta(/\b(ECTS|credit[si]?|cr[ée]dits?|kredi|credite)\b/gi),
    codiciCorso: conta(/\b[A-Z]{2,5}[ -]?\d{3,5}\b/g),
    semestri: conta(/\b(semester|semestre|semestr|d[oö]nem|winter|summer|autumn|spring|fall)\b/gi),
    caratteri: t.length,
  };
}

export const eUnPdf = (buffer) =>
  Buffer.isBuffer(buffer) && buffer.subarray(0, 4).toString("latin1") === "%PDF";

// L'unica data che si ottiene sempre, anche da un HTML: quella che dice il
// server. Meno affidabile dei metadati (un server puo' rigenerarla) ma e' la
// sola disponibile quando il file non ha un dizionario Info.
// Un Last-Modified pari a OGGI non e' la data del documento: e' un server che
// la genera al momento della richiesta. Il 02/09 tre voci su undici uscivano
// con la data di oggi, e presentarla come "data del documento" sarebbe un
// numero che sembra un'informazione senza esserlo - il tipo di errore che
// questo progetto paga da settimane. Meglio dire "non attendibile".
export function dataHttp(valore, oggi = new Date()) {
  if (!valore) return { data: null, attendibile: false, motivo: "assente" };
  const d = new Date(valore);
  if (Number.isNaN(d.getTime())) return { data: null, attendibile: false, motivo: "illeggibile" };
  const iso = d.toISOString().slice(0, 10);
  const oggiIso = oggi.toISOString().slice(0, 10);
  if (iso >= oggiIso) return { data: iso, attendibile: false, motivo: "generata dal server alla richiesta" };
  return { data: iso, attendibile: true };
}

export async function scaricaConIntestazioni(url, limitatore) {
  const r = await fetchSicuro(url, { headers: { "user-agent": UA }, timeoutMs: 30_000, limitatore });
  return { stato: r.status, ok: r.ok, urlFinale: r.url,
    lastModified: r.headers.get("last-modified"), corpo: r.corpo, troncato: r.troncato };
}

export async function verificaVoce({ voce, scarica, estrai = testoDaPdf }) {
  const r = { codiceCanonico: voce.codiceCanonico, ateneo: voce.ateneo, campo: voce.campo,
    valore: voce.valore, motivi: voce.motivi || [] };
  let risposta;
  try { risposta = await scarica(voce.valore); }
  catch (e) { r.esito = "scaricoFallito"; r.dettaglio = e.name === "TimeoutError" ? "timeout" : e.message; return r; }
  if (!risposta?.ok) { r.esito = "scaricoFallito"; r.dettaglio = `HTTP ${risposta?.stato ?? "?"}`; return r; }

  r.kb = Math.round((risposta.corpo?.length || 0) / 1024);
  const http = dataHttp(risposta.lastModified);
  r.dataHttp = http.data;
  r.dataHttpAttendibile = http.attendibile;
  if (!http.attendibile && http.motivo) r.dataHttpMotivo = http.motivo;
  if (!eUnPdf(risposta.corpo)) {
    // Non e' un PDF: la domanda sulla data ha comunque una risposta.
    r.esito = "nonEPdf";
    return r;
  }
  Object.assign(r, metadatiPdf(risposta.corpo));
  r.dataMigliore = r.modificato || r.creato || (r.dataHttpAttendibile ? r.dataHttp : null);
  const testo = estrai(risposta.corpo);
  if (testo === null) {
    // La classe E8: font a codifica propria. L'estrattore torna null invece di
    // produrre testo sporco, ed e' una scelta - un testo sbagliato sarebbe
    // peggio di nessun testo.
    r.esito = "illeggibile";
    return r;
  }
  r.esito = "letto";
  r.segnali = segnaliElenco(testo);
  r.assaggio = testo.replace(/\s+/g, " ").slice(0, 200);
  return r;
}

export async function verificaRiesame({ radice = RADICE, voci, limite = Infinity, scarica, estrai = testoDaPdf } = {}) {
  const file = path.join(radice, "raccolta", "da-riesaminare.json");
  const elenco = (voci || (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : []))
    .slice(0, Number.isFinite(limite) ? limite : undefined);
  const limitatore = new Limitatore(2);
  const scaricaVero = scarica || ((url) => scaricaConIntestazioni(url, limitatore));
  const esiti = [];
  for (const voce of elenco) esiti.push(await verificaVoce({ voce, scarica: scaricaVero, estrai }));
  if (!voci) {
    fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
    fs.writeFileSync(path.join(radice, "raccolta", "verifica-riesame.json"), JSON.stringify(esiti, null, 2) + "\n");
  }
  return esiti;
}

export function stampa(esiti) {
  const righe = [];
  righe.push("");
  righe.push("=============== VOCI DA RIESAMINARE, MISURATE ===============");
  righe.push("");
  for (const e of esiti) {
    righe.push(`${e.codiceCanonico}  —  ${(e.ateneo || "").slice(0, 46)}`);
    righe.push(`  ${String(e.valore).slice(0, 100)}`);
    if (e.esito === "scaricoFallito") { righe.push(`  NON SCARICATO: ${e.dettaglio}`, ""); continue; }
    const data = e.dataMigliore
      || (e.dataHttpAttendibile ? e.dataHttp : null)
      || (e.dataHttp ? `NON ATTENDIBILE (${e.dataHttpMotivo})` : "sconosciuta");
    righe.push(`  ${e.kb} KB · data: ${data}`
      + (e.titoloPdf ? ` · titolo interno: "${e.titoloPdf}"` : "")
      + (e.produttore ? ` · prodotto da: ${e.produttore}` : ""));
    if (e.esito === "illeggibile") righe.push("  TESTO NON DECODIFICABILE (font a codifica propria, classe E8)");
    else if (e.esito === "nonEPdf") righe.push("  NON e' un PDF: l'indirizzo serve altro");
    else righe.push(`  crediti ${e.segnali.crediti} · codici corso ${e.segnali.codiciCorso} · semestri ${e.segnali.semestri} · ${e.segnali.caratteri.toLocaleString("it-IT")} caratteri`,
      `  inizio: "${e.assaggio}"`);
    righe.push("");
  }
  const per = {};
  for (const e of esiti) per[e.esito] = (per[e.esito] || 0) + 1;
  righe.push(`${esiti.length} voci — ${Object.entries(per).map(([k, n]) => `${k}: ${n}`).join(", ")}`);
  righe.push("I numeri non sono un giudizio: dicono dove guardare, non cosa concludere.");
  return righe.join("\n");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const limite = Number((process.argv.find((a) => a.startsWith("--limite=")) || "").split("=")[1]) || Infinity;
  verificaRiesame({ limite })
    .then((esiti) => { console.log(stampa(esiti)); console.log("\nDettaglio in raccolta/verifica-riesame.json"); })
    .catch((errore) => { console.error(errore.message); process.exitCode = 1; });
}
