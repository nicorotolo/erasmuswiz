import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import test from "node:test";
import { once } from "node:events";
import { Limitatore, paginaSalvata, scarica } from "../scripts/raccogli-partner.mjs";
import { chiamaGeminiVero } from "../scripts/leggi-partner.mjs";
import {
  ErroreIndirizzo, eIpGlobalUnicast, fetchSicuro, validaDestinazione,
} from "../scripts/lib-rete.mjs";

const headers = (valori = {}) => ({ get: (nome) => valori[nome.toLowerCase()] ?? null });
const risposta = (status, valori = {}, corpo = Buffer.alloc(0)) => ({
  status, stato: status, ok: status >= 200 && status < 300,
  headers: headers(valori), corpo, troncato: false,
});
const dnsPubblico = async () => [{ address: "93.184.216.34", family: 4 }];

test("rete: ammette soltanto indirizzi global unicast, classe per classe", () => {
  const casi = {
    "non specificato IPv4": "0.0.0.0",
    loopback: "127.0.0.1",
    privato: "10.1.2.3",
    CGNAT: "100.64.0.1",
    "link-local IPv4": "169.254.1.2",
    documentazione: "192.0.2.10",
    benchmarking: "198.18.0.1",
    multicast: "224.0.0.1",
    riservato: "240.0.0.1",
    "non specificato IPv6": "::",
    ULA: "fd00::1",
    "link-local IPv6": "fe80::1",
    "multicast IPv6": "ff02::1",
    "documentazione IPv6": "2001:db8::1",
    "benchmarking IPv6": "2001:2::1",
    "riservato IPv6": "3000::1",
    "documentazione IPv6 nuova": "3fff::1",
    "IPv4 mappato in IPv6": "::ffff:8.8.8.8",
    "NAT64 verso IPv4 privato": "64:ff9b::a00:1",
  };
  for (const [classe, ip] of Object.entries(casi)) assert.equal(eIpGlobalUnicast(ip), false, `${classe}: ${ip}`);
  assert.equal(eIpGlobalUnicast("8.8.8.8"), true);
  assert.equal(eIpGlobalUnicast("2001:4860:4860::8888"), true);
});

test("rete: rifiuta schema, mDNS, credenziali e porte fuori politica", async () => {
  const casi = [
    ["ftp://example.com/x", "schemaNonAmmesso"],
    ["http://stampante.local/x", "mdns"],
    ["https://utente:segreto@example.com/", "credenziali"],
    ["https://example.com:444/", "portaNonAmmessa"],
  ];
  for (const [url, codice] of casi) await assert.rejects(
    validaDestinazione(url, { risolvi: dnsPubblico }),
    (errore) => errore instanceof ErroreIndirizzo && errore.codice === codice,
  );
});

test("rete: i 37 cambi di dominio della regressione restano ammessi, senza rete", async () => {
  const fixture = JSON.parse(fs.readFileSync(new URL("./fixtures/regressione-dominio-cambiato.json", import.meta.url), "utf8"));
  assert.equal(fixture.casi.length, 37);
  for (const caso of fixture.casi) {
    await validaDestinazione(caso.partenza, { risolvi: dnsPubblico });
    await validaDestinazione(caso.dominioArrivo, { risolvi: dnsPubblico });
  }
});

test("rete: un redirect privato viene fermato prima della seconda richiesta", async () => {
  const chiamate = [];
  const trasporto = async (destinazione) => {
    chiamate.push(destinazione.url.href);
    return risposta(302, { location: "http://10.0.0.8/segreto" });
  };
  await assert.rejects(
    fetchSicuro("https://pubblico.test/", { risolvi: dnsPubblico, trasporto }),
    (errore) => errore instanceof ErroreIndirizzo && errore.codice === "ipNonGlobale",
  );
  assert.deepEqual(chiamate, ["https://pubblico.test/"], "la destinazione privata non deve arrivare al trasporto");
});

test("rete: usa per la connessione esattamente l'IP gia' validato", async () => {
  let risoluzioni = 0; let visto;
  await fetchSicuro("https://esempio.test/", {
    risolvi: async () => { risoluzioni++; return [{ address: "93.184.216.34", family: 4 }]; },
    trasporto: async (destinazione) => { visto = destinazione.indirizzo; return risposta(200); },
  });
  assert.equal(risoluzioni, 1);
  assert.equal(visto, "93.184.216.34");
});

test("rete: il corpo viene interrotto a flusso con limiti HTML e PDF distinti", async (t) => {
  const server = http.createServer((req, res) => {
    res.on("error", () => {});
    res.writeHead(200, { "content-type": req.url.endsWith(".pdf") ? "application/pdf" : "text/html" });
    for (let i = 0; i < 20; i++) res.write(Buffer.alloc(128, 65));
    res.end();
  });
  server.listen(0, "127.0.0.1"); await once(server, "listening");
  t.after(() => server.close());
  const porta = server.address().port;
  const comuni = { risolvi: async () => [{ address: "127.0.0.1", family: 4 }],
    consentiIp: () => true, porteAmmesse: new Set([porta]), limiteHtml: 300, limitePdf: 700,
    limitatore: false };
  const html = await fetchSicuro(`http://prova.test:${porta}/pagina`, comuni);
  const pdf = await fetchSicuro(`http://prova.test:${porta}/file.pdf`, comuni);
  assert.equal(html.troncato, true); assert.equal(html.corpo.length, 300);
  assert.equal(pdf.troncato, true); assert.equal(pdf.corpo.length, 700);
});

test("rete: ogni redirect prende il turno dell'hostname di arrivo", async () => {
  const limitatore = new Limitatore(4); const arrivi = [];
  const trasporto = async (destinazione) => {
    if (destinazione.hostname === "arrivo.test") {
      arrivi.push(Date.now()); return risposta(200);
    }
    return risposta(302, { location: `https://arrivo.test/${destinazione.hostname}` });
  };
  await Promise.all([
    fetchSicuro("https://uno.test/", { risolvi: dnsPubblico, trasporto, limitatore }),
    fetchSicuro("https://due.test/", { risolvi: dnsPubblico, trasporto, limitatore }),
  ]);
  assert.equal(arrivi.length, 2);
  assert.ok(arrivi[1] - arrivi[0] >= 1000, `intervallo osservato: ${arrivi[1] - arrivi[0]} ms`);
});

test("rete: il controllo dell'origine di arrivo precede la richiesta reindirizzata", async () => {
  const ordine = [];
  const trasporto = async (destinazione) => {
    ordine.push(`richiesta:${destinazione.hostname}`);
    return destinazione.hostname === "prima.test"
      ? risposta(301, { location: "https://seconda.test/pagina" }) : risposta(200);
  };
  await fetchSicuro("https://prima.test/", {
    risolvi: dnsPubblico, trasporto,
    primaDellaRichiesta: async (url) => ordine.push(`robots:${new URL(url).hostname}`),
  });
  assert.deepEqual(ordine, [
    "robots:prima.test", "richiesta:prima.test",
    "robots:seconda.test", "richiesta:seconda.test",
  ]);
});

test("crawler: rilegge robots.txt prima della pagina a ogni cambio di origine", async () => {
  const ordine = [];
  const limitatore = { esegui: async (url, fn) => { ordine.push(`turno:${new URL(url).hostname}${new URL(url).pathname}`); return fn(); } };
  const trasporto = async (destinazione) => {
    const chiave = `${destinazione.hostname}${destinazione.url.pathname}`;
    ordine.push(`richiesta:${chiave}`);
    if (destinazione.url.pathname === "/robots.txt") return risposta(200, {}, Buffer.from("User-agent: *\nDisallow:"));
    if (destinazione.hostname === "vecchia.test") return risposta(302, { location: "https://nuova.test/pagina" });
    return risposta(200, { "content-type": "text/html" }, Buffer.from("ok"));
  };
  const esito = await scarica("https://vecchia.test/", limitatore, [], { rete: { risolvi: dnsPubblico, trasporto } });
  assert.equal(esito.ok, true);
  assert.deepEqual(ordine.filter((x) => x.startsWith("richiesta:")), [
    "richiesta:vecchia.test/robots.txt", "richiesta:vecchia.test/",
    "richiesta:nuova.test/robots.txt", "richiesta:nuova.test/pagina",
  ]);
});

// ---------------------------------------------------------------------------
// Le quattro prove qui sotto le ha scritte il revisore, non chi ha costruito:
// coprono i due difetti trovati leggendo il diff del Passo 0, e la prova di un
// difetto non la scrive chi l'ha commesso.
// ---------------------------------------------------------------------------

// Difetto 1: `req.setTimeout` e' un timeout di INATTIVITA', non una scadenza.
// Prima della correzione il crawler usava AbortSignal.timeout(20_000), che
// vale sull'intera richiesta: un server che manda un byte ogni 19 secondi
// restava attaccato per sempre e teneva occupato un posto del limitatore.
test("rete: la scadenza totale interrompe una risposta che arriva a goccia", { timeout: 20_000 }, async () => {
  const tentativi = [];
  // Il socket resta vivo e risponde solo dopo 300 ms, cinque volte la scadenza:
  // e' il caso che il timeout d'inattivita' da solo non chiuderebbe. Senza la
  // scadenza totale la prova fallisce per asserzione, non restando appesa.
  const trasporto = () => new Promise((resolve) => { setTimeout(() => resolve(risposta(200)), 300); });
  const esito = await scarica("https://lento.test/pagina", false, tentativi, {
    controllaRobots: false,
    rete: { risolvi: dnsPubblico, trasporto, scadenzaTotaleMs: 60, limitatore: false },
  });
  assert.equal(esito.errore, "timeout");
  assert.equal(tentativi.at(-1).causa, "timeout", "la causa registrata deve restare 'timeout'");
});

// Difetto 1, seconda meta': la scadenza vale sulla CATENA, non sul singolo
// salto. Nessun salto qui e' inattivo - ognuno risponde in fretta - ma la
// somma supera il tetto, ed e' la somma che il crawler deve rispettare.
// I margini sono larghi apposta: una prova che diventa rossa quando la macchina
// e' occupata insegna a non fidarsi della suite. La scadenza (260 ms) sta a
// sei volte il singolo salto (40 ms), cosi' anche con la macchina tre volte piu'
// lenta restano almeno due salti; e il tetto per prova e' 20 s, non 5, perche'
// serve solo da rete di sicurezza — senza la correzione questa prova fallisce
// per asserzione dopo mezzo secondo, non per scadenza.
test("rete: la scadenza totale vale sulla catena, non sul singolo salto", { timeout: 20_000 }, async () => {
  let salti = 0;
  const trasporto = async (destinazione) => {
    salti++;
    await new Promise((r) => setTimeout(r, 40));
    return risposta(302, { location: `https://tappa${salti}.test/` });
  };
  await assert.rejects(
    fetchSicuro("https://uno.test/", {
      risolvi: dnsPubblico, trasporto, limitatore: false, scadenzaTotaleMs: 260,
    }),
    (errore) => errore.name === "TimeoutError",
  );
  assert.ok(salti >= 2 && salti < 8, `salti eseguiti: ${salti} - deve fermarsi per tempo, non per numero`);
});

// Difetto 2: il troncamento non deve restare nella sola risposta HTTP. Una
// pagina tagliata salvata con la stessa forma di una intera farebbe verificare
// una citazione contro un frammento: il cancello dell'impronta SHA-256
// direbbe "verificato" su un testo che il sito non pubblica cosi'.
test("crawler: una pagina troncata viene salvata dichiarando il troncamento", () => {
  const rispostaHttp = { urlFinale: "https://ateneo.test/corsi", stato: 200, troncato: true };
  const salvata = paginaSalvata({ url: "https://ateneo.test/corsi" }, rispostaHttp,
    "<html><body>meta' documento</body></html>", false, "2026-09-03T00:00:00.000Z");
  assert.equal(salvata.troncato, true);
  const intera = paginaSalvata({ url: "https://ateneo.test/corsi" },
    { ...rispostaHttp, troncato: false }, "<html><body>tutto</body></html>", false, "2026-09-03T00:00:00.000Z");
  assert.equal(intera.troncato, false, "una pagina intera non deve risultare troncata");
});

// Difetto 2, seconda meta': senza questo controllo una risposta tagliata
// arrivava a JSON.parse e falliva con un errore di sintassi, che manda a
// cercare il difetto nel posto sbagliato.
test("lettura: una risposta Gemini troncata lo dice, invece di rompersi sul parsing", async () => {
  const chiaveVera = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = "chiave-di-prova";
  try {
    const fetchHttp = async () => ({ ok: true, status: 200, troncato: true,
      corpo: Buffer.from('{"candidates":[{"content":{"parts":[{"text":"{\\"campi\\"'),
      headers: headers(), async text() { return ""; }, async json() { return {}; } });
    await assert.rejects(
      chiamaGeminiVero("prompt", "gemini-2.5-flash", { fetchHttp }),
      (errore) => /troncata a \d+ byte/.test(errore.message),
    );
  } finally {
    if (chiaveVera === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = chiaveVera;
  }
});
