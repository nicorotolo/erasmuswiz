// ============================================================
// GATE G1 — "nessun contenuto vecchio presentato come attuale"
// ------------------------------------------------------------
// Prove dell'inventario in INVENTARIO_G1.md. T1-T4 proteggono completezza,
// ancoraggi e dati; T5 esercita nel DOM tutti i 19 punti nello stato
// pre-bando introdotto da V4. Il gate G1 è superato solo se passano insieme.
//
// NB: gli array che arrivano da vm.runInNewContext hanno il prototipo di
// un altro realm, quindi assert.deepEqual(arr, []) fallisce anche da
// vuoto. Qui si confrontano lunghezze e stringhe, mai array.
// ============================================================

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const vm = require("node:vm");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");

const RADICE = path.join(__dirname, "..");
const ATENEI = ["cafoscari", "sapienza"];

function caricaDati(ateneo, file) {
  const percorso = path.join(RADICE, "js", "atenei", ateneo, file);
  const contesto = {};
  vm.runInNewContext(fs.readFileSync(percorso, "utf8"), contesto, { filename: percorso });
  return contesto;
}

const APP = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");

// ------------------------------------------------------------
// §1 dell'inventario: i campi dipendenti dal ciclo.
// ------------------------------------------------------------
const CAMPI_BANDO_INFO   = [
  "annoAccademico", "titolo", "linkUfficiale", "dataVerificaDati", "finestraAttesa"
];
const CAMPI_SCADENZE_INFO = ["annoAccademico", "fineCiclo"];
// I sei campi testuali di REQUISITI_BANDO che possono contenere il ciclo.
const CAMPI_REQUISITO = ["valore", "descrizione", "spiegazione", "azione", "citazione", "fonte"];
// I campi di ogni scadenza che dipendono dal ciclo.
const CAMPI_SCADENZA = ["data", "descrizione", "cosa"];

// ------------------------------------------------------------
// §2 dell'inventario: i punti di render, ancorati a FRAMMENTI DI CODICE
// e non a numeri di riga (i numeri muoiono al primo commit — e' gia'
// successo alla §V2 del piano, che citava righe morte).
// ------------------------------------------------------------
const PUNTI_DI_RENDER = [
  { n: 1,  dove: "motore statoBando()",        ancora: "SCADENZE_INFO.fineCiclo" },
  { n: 2,  dove: "badge in cima",              ancora: 'getElementById("badge-bando")' },
  { n: 3,  dove: "missione: bando chiuso",     ancora: "Il bando ${anno} è chiuso" },
  { n: 4,  dove: "missione: data chiusura",    ancora: "dataChiusuraCandidature()" },
  { n: 5,  dove: "missione: prossima scadenza", ancora: "${m.prossima.cosa} — ${formattaData(" },
  { n: 6,  dove: "missione: porta in-attesa",  ancora: "window.ATTESA_INFO?.titolo" },
  { n: 7,  dove: "landing benvenuto",          ancora: "finestraAttesaBando()" },
  { n: 8,  dove: "card questa settimana",      ancora: "settimana-item-scadenza" },
  { n: 9,  dove: "timeline candidatura",       ancora: "cand-scadenza-countdown" },
  { n: 10, dove: "badge prossimo passo",       ancora: "prossimo-passo-scadenza" },
  { n: 11, dove: "countdown inline",           ancora: 'getAttribute("data-scadenza")' },
  { n: 12, dove: "badge per id scadenza",      ancora: "${scad.cosa} — ${countdownConCiclo(scad.data)}" },
  { n: 13, dove: "calendario .ics",            ancora: "function scaricaICSScadenza" },
  { n: 14, dove: "riga fonte / disclaimer",    ancora: "infoBando.dataVerificaDati" },
  { n: 15, dove: "stazione requisiti",         ancora: "ZAINO.autoverifica[r.id]" },
  { n: 16, dove: "stepper tappa requisiti",    ancora: "const requisiti     = REQUISITI_BANDO" },
  { n: 17, dove: "dettaglio meta",             ancora: "meta.scadenzeOspitante" },
  { n: 18, dove: "pannello attesa",            ancora: "const info = window.ATTESA_INFO" },
  { n: 19, dove: "banner provvisorieta'",      ancora: "window.BANDO_INFO.inVerifica" },
];

// ============================================================
// T1 — ogni campo dichiarato esiste ancora nei dati.
// ============================================================
ATENEI.forEach(ateneo => {
  test(`G1/T1 ${ateneo}: i campi dichiarati in INVENTARIO_G1.md §1 esistono ancora`, () => {
    const bando = caricaDati(ateneo, "dati-bando.js");
    const scad  = caricaDati(ateneo, "dati-scadenze.js");

    CAMPI_BANDO_INFO.forEach(c => assert.ok(
      bando.BANDO_INFO[c],
      `BANDO_INFO.${c} non c'e' piu' in ${ateneo}: aggiorna INVENTARIO_G1.md §1.1`
    ));
    CAMPI_SCADENZE_INFO.forEach(c => assert.ok(
      scad.SCADENZE_INFO[c],
      `SCADENZE_INFO.${c} non c'e' piu' in ${ateneo}: aggiorna INVENTARIO_G1.md §1.3`
    ));
    assert.ok(bando.REQUISITI_BANDO.length > 0, `${ateneo}: REQUISITI_BANDO vuoto`);
    assert.ok(scad.SCADENZE_CAFOSCARI.length > 0, `${ateneo}: nessuna scadenza`);
    scad.SCADENZE_CAFOSCARI.forEach(s => assert.ok(
      s.data && s.cosa,
      `${ateneo}: scadenza "${s.id}" senza data o senza "cosa"`
    ));
  });
});

// ============================================================
// T2 — ogni punto di render dichiarato esiste ancora in app.js.
// E' il test che impedisce all'inventario di marcire in silenzio.
// ============================================================
test("G1/T2: i 19 punti di render dell'inventario esistono ancora in app.js", () => {
  const mancanti = PUNTI_DI_RENDER
    .filter(p => !APP.includes(p.ancora))
    .map(p => `#${p.n} ${p.dove} (ancora: ${p.ancora})`);
  assert.equal(
    mancanti.length,
    0,
    "Punti di render spariti o riscritti — l'inventario non descrive piu' il codice.\n" +
    "Vanno ritrovati e l'ancoraggio aggiornato in INVENTARIO_G1.md §2:\n  " +
    mancanti.join("\n  ")
  );
});

// ============================================================
// T3 — nessun campo dipendente dal ciclo comparso di nascosto.
// Fa fallire l'AGGIUNTA silenziosa, che e' il modo in cui un
// inventario smette di essere vero senza che nessuno se ne accorga.
// ============================================================
const CICLO = /\b(20\d\d\/20\d\d|20\d\d\/\d{2}|\d{1,2}\/\d{1,2}\/20\d\d|20\d\d-\d{2}-\d{2})\b/;

ATENEI.forEach(ateneo => {
  test(`G1/T3 ${ateneo}: nessun campo con il ciclo fuori da quelli dichiarati`, () => {
    const bando = caricaDati(ateneo, "dati-bando.js");
    const scad  = caricaDati(ateneo, "dati-scadenze.js");
    const fuori = [];

    Object.keys(bando.BANDO_INFO).forEach(k => {
      if (CAMPI_BANDO_INFO.includes(k)) return;
      if (CICLO.test(String(bando.BANDO_INFO[k]))) fuori.push(`BANDO_INFO.${k}`);
    });
    Object.keys(scad.SCADENZE_INFO).forEach(k => {
      if (CAMPI_SCADENZE_INFO.includes(k)) return;
      if (CICLO.test(String(scad.SCADENZE_INFO[k]))) fuori.push(`SCADENZE_INFO.${k}`);
    });
    bando.REQUISITI_BANDO.forEach(r => {
      Object.keys(r).forEach(k => {
        if (k === "id" || k === "titolo" || CAMPI_REQUISITO.includes(k)) return;
        if (CICLO.test(String(r[k]))) fuori.push(`REQUISITI_BANDO[${r.id}].${k}`);
      });
    });
    scad.SCADENZE_CAFOSCARI.forEach(s => {
      Object.keys(s).forEach(k => {
        if (k === "id" || CAMPI_SCADENZA.includes(k)) return;
        if (CICLO.test(String(s[k]))) fuori.push(`SCADENZE[${s.id}].${k}`);
      });
    });

    assert.equal(
      fuori.length,
      0,
      `Campi con una data/ciclo NON dichiarati in INVENTARIO_G1.md §1: ${fuori.join(", ")}.\n` +
      "O si dichiarano nell'inventario (e G1 ne tiene conto), o non devono contenere il ciclo."
    );
  });
});

// ============================================================
// T4 — i due file dello stesso ateneo dichiarano lo stesso ciclo.
// ============================================================
ATENEI.forEach(ateneo => {
  test(`G1/T4 ${ateneo}: dati-bando e dati-scadenze dichiarano lo stesso anno accademico`, () => {
    const a = caricaDati(ateneo, "dati-bando.js").BANDO_INFO.annoAccademico;
    const b = caricaDati(ateneo, "dati-scadenze.js").SCADENZE_INFO.annoAccademico;
    assert.equal(
      a, b,
      `${ateneo}: dati-bando dice "${a}" e dati-scadenze dice "${b}". ` +
      "Con due cicli diversi nello stesso ateneo, meta' del sito mente qualunque cosa faccia V4."
    );
  });
});

// ============================================================
// T5 — i 19 punti sono provati sul testo realmente reso dal browser.
// Ogni `assert.ok` qui sotto corrisponde allo stesso numero della §2:
// togliere un cartellino di ciclo rende rossa la relativa asserzione.
// ============================================================
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
    if (Date.now() - inizio >= timeoutMs) throw new Error("timeout caricamento app per T5");
    await new Promise(risolvi => setTimeout(risolvi, 50));
  }
}

test("G1/T5: in pre-bando ciascuno dei 19 punti dichiara il ciclo o resta invariato per contratto", async () => {
  const server = serverStatico();
  await new Promise(risolvi => server.listen(0, "127.0.0.1", risolvi));
  const origin = `http://127.0.0.1:${server.address().port}`;
  let dom;

  try {
    dom = await JSDOM.fromURL(`${origin}/index.html`, {
      runScripts: "dangerously",
      resources: new SoloLocale(origin),
      pretendToBeVisual: true,
      virtualConsole: new VirtualConsole(),
    });
    const w = dom.window;
    await attendi(() =>
      typeof w.inPreBando === "function" &&
      typeof w.renderChecklist === "function" &&
      Array.isArray(w.METE) &&
      w.METE.length > 0
    );

    const cicloDati = "2026/27";
    const cicloPercorso = "2027/28";
    // jsdom esegue i tag emessi da document.write con un ordine diverso dal
    // browser reale: app.js può creare lo zaino prima che i dati dell'ateneo
    // abbiano esposto l'anno. T5 imposta esplicitamente la fixture che prova.
    w.eval(`ZAINO.cicloDati = "${cicloDati}"; ZAINO.cicloPercorso = "${cicloPercorso}"`);

    // 1 — la sorgente conserva il suo stato a quattro valori; il pre-bando
    // nasce dal lettore separato.
    assert.ok(
      w.statoBando() === "chiuso-ciclo-attivo" && w.inPreBando(),
      "#1 statoBando deve restare invariato e inPreBando deve leggere i due cicli: " +
        JSON.stringify({
          stato: w.statoBando(),
          preBando: w.inPreBando(),
          cicli: w.eval("({ dati: ZAINO.cicloDati, percorso: ZAINO.cicloPercorso })"),
        })
    );

    // 2 — badge in cima.
    w.renderHome();
    assert.ok(
      w.document.getElementById("badge-bando").textContent ===
        `Bando ${cicloPercorso} non ancora uscito · dati ${cicloDati}`,
      "#2 il badge deve dichiarare ciclo percorso e ciclo dati"
    );

    // 3 — titolo missione.
    w.renderMissione();
    assert.ok(
      w.document.getElementById("missione-titolo").textContent ===
        `Il bando ${cicloPercorso} non è ancora uscito`,
      "#3 la missione deve parlare del bando a cui punta lo studente"
    );

    // 4 — chiusura candidature resa al passato e attribuita al vecchio ciclo.
    const dettaglioPreBando = w.document.getElementById("missione-dettaglio").textContent;
    assert.ok(
      dettaglioPreBando.includes(`Le candidature del ${cicloDati} si sono chiuse`),
      "#4 la chiusura deve essere storica e attribuita al ciclo dati"
    );

    // 5 — nessuna falsa prossima scadenza.
    assert.ok(
      dettaglioPreBando.includes(
        "Il bando precedente è uscito il 14 gennaio 2026: quello nuovo è atteso in un periodo simile"
      ),
      "#5 la finestra attesa deve derivare dal dato documentato dell'ateneo"
    );

    // 6 — la porta in-attesa non dipende dal ciclo e resta intatta.
    w.eval('ZAINO.fase = "in-attesa"');
    w.renderMissione();
    assert.ok(
      w.document.getElementById("missione-titolo").textContent === w.ATTESA_INFO.titolo,
      "#6 il titolo della porta in-attesa deve restare quello dei dati dedicati"
    );

    // 7 — conclusione onboarding: stessa formulazione canonica del pre-bando.
    const metaProfilo = w.METE.find(meta => meta.dipartimentoCf && meta.areeDisciplinari?.length);
    w.eval('ZAINO.fase = "esplorando"');
    w._onboardingDipartimento = metaProfilo.dipartimentoCf;
    w._onboardingArea = metaProfilo.areeDisciplinari[0].codice;
    w.completaOnboarding("L", []);
    assert.ok(
      w.document.querySelector(".benvenuto-landing-dettaglio").textContent.includes(
        `Il bando ${cicloPercorso} non è ancora uscito. Il bando precedente è uscito il 14 gennaio 2026`
      ),
      "#7 il benvenuto deve riusare il testo canonico del pre-bando"
    );

    // 8 — il planner settimanale resta spento senza un ciclo azionabile.
    w.renderMissione();
    assert.ok(
      w.document.getElementById("settimana-card").style.display === "none",
      "#8 Questa settimana deve restare nascosta per il contratto del planner"
    );

    // 9 — intestazione di sezione e countdown storici.
    w.renderChecklist();
    const calendario = w.document.querySelector("#lista-checklist-v2 .cartellino-ciclo-sezione");
    assert.ok(
      calendario?.textContent === `Calendario del bando ${cicloDati} (concluso)`,
      "#9 il calendario deve avere un cartellino di sezione col ciclo"
    );

    // 10 — tutte le scadenze sono passate: nessun badge 'prossimo passo'.
    assert.ok(
      w.document.querySelectorAll(".prossimo-passo-scadenza").length === 0,
      "#10 in pre-bando non deve nascere un prossimo-passo-scadenza"
    );

    // 11 — countdown inline.
    const countdownInline = [...w.document.querySelectorAll(".cand-scadenza-countdown")];
    assert.ok(
      countdownInline.length > 0 &&
        countdownInline.every(el => el.textContent.includes(`bando ${cicloDati}`)),
      "#11 ogni countdown inline deve portare il cartellino del ciclo"
    );

    // 12 — badge aggiornato per data-scadenza-id, provato anche se nei dati
    // reali non nasce perché tutte le scadenze sono passate.
    const badgeSintetico = w.document.createElement("div");
    badgeSintetico.className = "prossimo-passo-scadenza";
    badgeSintetico.setAttribute("data-scadenza-id", w.SCADENZE_CAFOSCARI[0].id);
    w.document.body.appendChild(badgeSintetico);
    w.aggiornaCountdownV2();
    assert.ok(
      badgeSintetico.textContent.includes(`bando ${cicloDati}`),
      "#12 il badge per id scadenza deve portare il cartellino del ciclo"
    );
    badgeSintetico.remove();

    // 13 — export .ics visibile, disabilitato e motivato.
    const bottoniIcs = [...w.document.querySelectorAll(".cand-btn-ics:not(.cand-btn-ics-tutte)")];
    const motiviIcs = [...w.document.querySelectorAll(".cand-ics-motivo")];
    assert.ok(
      bottoniIcs.length > 0 &&
        bottoniIcs.every(btn => btn.disabled) &&
        motiviIcs.every(el => el.textContent.includes(`bando ${cicloDati}`)),
      "#13 gli export storici devono essere disabilitati con spiegazione"
    );

    // 14 — riga fonte.
    const fonte = w.document.querySelector(".cand-fonte-riga")?.textContent || "";
    assert.ok(
      fonte.includes(`Date del bando ${cicloDati}`) && fonte.includes("Dati verificati il"),
      "#14 la fonte deve dichiarare ciclo e data di verifica"
    );

    // 15 — requisiti.
    w.renderIdoneita();
    const cartellinoRequisiti =
      w.document.querySelector("#lista-requisiti-v2 .cartellino-ciclo-sezione")?.textContent || "";
    assert.ok(
      cartellinoRequisiti.includes(`Requisiti del bando ${cicloDati}`) &&
        cartellinoRequisiti.includes(`Il bando ${cicloPercorso} può cambiarli`),
      "#15 i requisiti devono essere attribuiti al vecchio ciclo"
    );

    // 16 — conteggio requisiti nello stepper, coerente col cartellino di 15.
    w.renderFaseStepper();
    const faseRequisiti = w.document.querySelector("#fase-stepper .fase-card")?.textContent || "";
    assert.ok(
      faseRequisiti.includes(`Requisiti del bando ${cicloDati}`),
      "#16 lo stepper deve attribuire al ciclo il conteggio requisiti"
    );

    // 17 — scadenze dell'università ospitante.
    const metaConScadenze = w.METE.find(meta => meta.scadenzeOspitante?.length);
    w.apriDettaglioMeta(metaConScadenze);
    const dettaglioMeta = w.document.getElementById("meta-modal-corpo").textContent;
    assert.ok(
      dettaglioMeta.includes(
        `Date del ciclo ${cicloDati} — l’università ospitante le ripubblica ogni anno.`
      ),
      "#17 le scadenze ospitante devono avere l'etichetta di sezione"
    );

    // 18 — pannello attesa invariato e non vuoto.
    w.eval('ZAINO.fase = "in-attesa"');
    w.renderAttesaInfo();
    const attesa = w.document.getElementById("attesa-info").textContent;
    assert.ok(
      attesa.includes(w.ATTESA_INFO.titolo) && attesa.includes("Cosa succede adesso"),
      "#18 il pannello attesa deve restare invariato e popolato"
    );

    // 19 — banner di provvisorietà indipendente dal gate G1.
    const valoreOriginale = w.BANDO_INFO.inVerifica;
    w.BANDO_INFO.inVerifica = true;
    w.renderBannerVerifica();
    const bannerVerifica = w.document.getElementById("banner-verifica-idoneita");
    assert.ok(
      bannerVerifica.style.display !== "none" &&
        bannerVerifica.textContent.includes("Dati in corso di verifica"),
      "#19 il banner inVerifica deve restare governato dal suo flag"
    );
    w.BANDO_INFO.inVerifica = valoreOriginale;
  } finally {
    if (dom) dom.window.close();
    await new Promise(risolvi => server.close(risolvi));
  }
});
