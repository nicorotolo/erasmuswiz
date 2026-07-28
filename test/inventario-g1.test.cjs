// ============================================================
// GATE G1 — "nessun contenuto vecchio presentato come attuale"
// ------------------------------------------------------------
// Prove dell'inventario in INVENTARIO_G1.md. Qui vive T1-T4, cioe' la
// parte eseguibile oggi: l'inventario e' completo, non e' marcito, e
// nessun campo dipendente dal ciclo e' comparso di nascosto.
//
// T5 — "in stato pre-bando nessun punto di render mostra un valore del
// ciclo se non dentro un'etichetta «storico»" — NON e' qui: lo stato
// pre-bando nasce in V4. T5 e' il criterio di uscita di V4, e finche'
// non esiste il gate G1 NON e' superato. Vedi INVENTARIO_G1.md §4.
//
// NB: gli array che arrivano da vm.runInNewContext hanno il prototipo di
// un altro realm, quindi assert.deepEqual(arr, []) fallisce anche da
// vuoto. Qui si confrontano lunghezze e stringhe, mai array.
// ============================================================

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

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
const CAMPI_BANDO_INFO   = ["annoAccademico", "titolo", "linkUfficiale", "dataVerificaDati"];
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
  { n: 7,  dove: "landing benvenuto",          ancora: "il prossimo esce in genere tra dicembre e gennaio" },
  { n: 8,  dove: "card questa settimana",      ancora: "settimana-item-scadenza" },
  { n: 9,  dove: "timeline candidatura",       ancora: "cand-scadenza-countdown" },
  { n: 10, dove: "badge prossimo passo",       ancora: "prossimo-passo-scadenza" },
  { n: 11, dove: "countdown inline",           ancora: 'getAttribute("data-scadenza")' },
  { n: 12, dove: "badge per id scadenza",      ancora: "${scad.cosa} — ${countdownInParole(c)}" },
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
// T5 — SEGNAPOSTO DICHIARATO, non un test che passa a vuoto.
// Il gate G1 non e' superato finche' questo non e' scritto e verde.
// ============================================================
test("G1/T5: il pre-bando non nasconde ancora i valori del ciclo — GATE NON SUPERATO", { skip: "Lo stato pre-bando nasce in V4: vedi INVENTARIO_G1.md §3 e §4. Rimuovere lo skip e scrivere le 19 asserzioni e' il criterio di uscita di V4." }, () => {});
