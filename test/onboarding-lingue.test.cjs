const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");

const RADICE = path.resolve(__dirname, "..");

function serverStatico() {
  return http.createServer((req, res) => {
    const relativo = decodeURIComponent(new URL(req.url, "http://localhost").pathname)
      .replace(/^\/+/, "") || "index.html";
    const file = path.resolve(RADICE, relativo);
    if (file !== RADICE && !file.startsWith(RADICE + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    fs.readFile(file, (errore, contenuto) => {
      if (errore) {
        res.writeHead(404).end();
        return;
      }
      res.writeHead(200, {
        "Content-Type": file.endsWith(".js") ? "text/javascript" : "text/html",
      });
      res.end(contenuto);
    });
  });
}

class SoloLocale extends ResourceLoader {
  constructor(origin) {
    super();
    this.origin = origin;
  }

  fetch(url, opzioni) {
    if (url.startsWith(this.origin)) return super.fetch(url, opzioni);
    return Promise.resolve(Buffer.from(""));
  }
}

async function attendi(condizione, timeoutMs = 5000) {
  const inizio = Date.now();
  while (!condizione()) {
    if (Date.now() - inizio >= timeoutMs) throw new Error("timeout caricamento app");
    await new Promise((risolvi) => setTimeout(risolvi, 50));
  }
}

test("onboarding V0 — Italiano C2 è visibile, rimovibile e Salta salva zero lingue", async () => {
  const server = serverStatico();
  await new Promise((risolvi) => server.listen(0, "127.0.0.1", risolvi));
  const porta = server.address().port;
  const origin = `http://127.0.0.1:${porta}`;
  const consoleVirtuale = new VirtualConsole();
  const risorse = new SoloLocale(origin);
  let dom;

  try {
    dom = await JSDOM.fromURL(`${origin}/index.html`, {
      runScripts: "dangerously",
      resources: risorse,
      pretendToBeVisual: true,
      virtualConsole: consoleVirtuale,
    });
    const w = dom.window;
    await attendi(() =>
      typeof w.benvPassoLingue === "function" &&
      typeof w.lingueDaiDati === "function" &&
      w.ErasmusWizPuro &&
      Array.isArray(w.METE) &&
      w.METE.length > 0 &&
      w.lingueDaiDati().includes("Italiano"));

    w.benvPassoLingue("L");
    const primaRiga = w.document.querySelector(".benvenuto-riga-lingua");
    const [lingua, livello] = primaRiga.querySelectorAll("select");
    const rimuovi = primaRiga.querySelector("button.schedina-rimuovi");
    assert.equal(lingua.value, "Italiano");
    assert.equal(livello.value, "C2");
    assert.ok(rimuovi, "manca il comando per rimuovere Italiano");

    rimuovi.click();
    assert.equal(lingua.value, "");

    let lingueSalvate = null;
    w.completaOnboarding = (_livello, lingue) => {
      lingueSalvate = lingue;
    };
    w.benvPassoLingue("L");
    const salta = [...w.document.querySelectorAll("#benvenuto-scelte button")]
      .find((bottone) => bottone.textContent === "Salta per ora");
    assert.ok(salta, "manca il comando Salta per ora");
    salta.click();
    assert.equal(Array.isArray(lingueSalvate), true);
    assert.equal(lingueSalvate.length, 0);
  } finally {
    if (dom) dom.window.close();
    await new Promise((risolvi) => server.close(risolvi));
  }
});

test("dettaglio V0 — il verde condizionato mostra l'avviso sui corsi e la lingua concreta", async () => {
  const server = serverStatico();
  await new Promise((risolvi) => server.listen(0, "127.0.0.1", risolvi));
  const porta = server.address().port;
  const origin = `http://127.0.0.1:${porta}`;
  const consoleVirtuale = new VirtualConsole();
  const risorse = new SoloLocale(origin);
  let dom;

  try {
    dom = await JSDOM.fromURL(`${origin}/index.html`, {
      runScripts: "dangerously",
      resources: risorse,
      pretendToBeVisual: true,
      virtualConsole: consoleVirtuale,
    });
    const w = dom.window;
    await attendi(() =>
      typeof w.apriDettaglioMeta === "function" &&
      w.ErasmusWizPuro &&
      Array.isArray(w.METE) &&
      w.METE.length > 0);

    w.eval(`ZAINO.profilo = {
      area: "0410",
      livello: "L",
      lingue: [{ lingua: "Inglese", livello: "C2", certificata: true }]
    }`);
    const meta = {
      id: "test-dettaglio-corsi",
      universita: "Università di prova",
      citta: "Città di prova",
      paese: "",
      areeDisciplinari: [],
      posti: [{ livello: "L", numero: 8, mesi: 5 }],
      requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
      ],
      linkPdf: "https://example.edu/incoming",
    };

    w.apriDettaglioMeta(meta);
    const stato = w.document.querySelector("#meta-modal-corpo .dett-compat-stato");
    const avviso = w.document.querySelector(
      "#meta-modal-corpo .banner-stato.stato-riserve[role='note']"
    );
    assert.match(stato.textContent, /✅/);
    assert.ok(avviso, "manca l'avviso visibile sui corsi");
    assert.equal(avviso.tagName, "DIV");
    assert.equal(avviso.classList.contains("dett-vuoto"), false);
    assert.match(avviso.textContent, /corsi tenuti in inglese/i);
    assert.match(avviso.textContent, /offerta di corsi in inglese.*piano di studi/i);
  } finally {
    if (dom) dom.window.close();
    await new Promise((risolvi) => server.close(risolvi));
  }
});
