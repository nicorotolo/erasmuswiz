const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const puro = require("../js/puro.js");

const RADICE = path.resolve(__dirname, "..");

function datiBando(ateneo) {
  const percorso = path.join(
    RADICE, "js", "atenei", ateneo, "dati-bando.js"
  );
  const contesto = {};
  vm.runInNewContext(fs.readFileSync(percorso, "utf8"), contesto, {
    filename: percorso,
  });
  return contesto.BANDO_INFO;
}

test("V6a dato: Ca' Foscari espone il massimo storico e Sapienza tace", () => {
  const caFoscari = puro.massimoDestinazioniBando(datiBando("cafoscari"));
  assert.deepEqual(caFoscari, {
    presente: true,
    valore: 5,
    ciclo: "2026/2027",
    citazione: "fino a un massimo di 5 destinazioni, elencate in ordine di priorità",
    fonte: "Art. 7 c. 4 — Bando Erasmus+ studio (Europa) 2026/2027, DR 13/2026",
    stato: "storico",
  });
  assert.deepEqual(
    puro.massimoDestinazioniBando(datiBando("sapienza")),
    { presente: false }
  );
  assert.equal(
    puro.frasePassatoMassimo(caFoscari),
    "Il bando 2026/2027 ne ammetteva al massimo 5, elencate in ordine di priorità (Art. 7 c. 4)."
  );
  assert.equal(
    puro.frasePassatoMassimo({ presente: false }),
    null
  );
});

test("V6a dato: valori malformati non diventano un limite implicito", () => {
  for (const massimoDestinazioni of [
    { valore: 0, ciclo: "2026/2027", citazione: "x", fonte: "x", stato: "storico" },
    { valore: -1, ciclo: "2026/2027", citazione: "x", fonte: "x", stato: "storico" },
    { valore: 2.5, ciclo: "2026/2027", citazione: "x", fonte: "x", stato: "storico" },
    { valore: 5, ciclo: "2026/2027", citazione: "x", fonte: "x", stato: "ignoto" },
  ]) {
    assert.deepEqual(
      puro.massimoDestinazioniBando({ massimoDestinazioni }),
      { presente: false }
    );
  }
});

test("I-V6.1: una schedina che contiene un'id non preferito viola il sottoinsieme", () => {
  assert.equal(
    puro.schedinaSottoinsiemePreferite(["a", "b"], ["b", "orfana"]),
    false
  );
  assert.deepEqual(
    puro.normalizzaListeScelte(["a", "b"], ["b", "orfana"]),
    { metePreferite: ["a", "b"], schedina: ["b", "a"] }
  );
});

test("I-V6.2: duplicati e cardinalità diverse violano la corrispondenza", () => {
  assert.equal(
    puro.scelteSenzaDuplicatiECorrispondenti(["a", "a", "b"], ["a", "b"]),
    false
  );
  assert.equal(
    puro.scelteSenzaDuplicatiECorrispondenti(["a", "b"], ["a"]),
    false
  );
  const stato = puro.normalizzaListeScelte(["a", "a", "b"], ["b", "b"]);
  assert.deepEqual(stato, {
    metePreferite: ["a", "b"],
    schedina: ["b", "a"],
  });
  assert.equal(
    puro.scelteSenzaDuplicatiECorrispondenti(
      stato.metePreferite, stato.schedina
    ),
    true
  );
});

test("I-V6.3: un'id assente dal catalogo produce comunque una riga orfana", () => {
  const righe = puro.righeScelteConOrfane(
    ["presente", "sparita"],
    [{ id: "presente", universita: "Università presente" }]
  );
  assert.equal(righe.length, 2);
  assert.deepEqual(righe[1], {
    id: "sparita",
    indice: 1,
    meta: null,
    orfana: true,
  });
});

test("I-V6.4: l'eccedenza viene marcata senza troncare la lista", () => {
  const righe = puro.righeScelteConOrfane(
    ["a", "b", "c"],
    [{ id: "a" }, { id: "b" }, { id: "c" }]
  );
  const marcate = puro.marcaEccedenzeScelte(righe, 2);
  assert.equal(marcate.length, 3);
  assert.deepEqual(
    marcate.map((riga) => riga.eccedente),
    [false, false, true]
  );
});

test("I-V6.5: una stella che aggiornasse una lista sola violerebbe il contratto", () => {
  const statoRotto = { metePreferite: ["a", "b"], schedina: ["a"] };
  assert.equal(
    puro.scelteSenzaDuplicatiECorrispondenti(
      statoRotto.metePreferite, statoRotto.schedina
    ),
    false
  );
  const aggiunta = puro.applicaStellaScelte(["a"], ["a"], "b", true);
  assert.deepEqual(aggiunta, {
    metePreferite: ["a", "b"],
    schedina: ["a", "b"],
  });
  const rimossa = puro.applicaStellaScelte(
    aggiunta.metePreferite, aggiunta.schedina, "a", false
  );
  assert.deepEqual(rimossa, {
    metePreferite: ["b"],
    schedina: ["b"],
  });
});

test("V6a migrazione LA v2: lo zaino resta identico fuori dal ramo LA", () => {
  const zaino = {
    profilo: { area: "0311", livello: "L" },
    checklist: { uno: true },
    metePreferite: ["a", "b", "c", "d", "e"],
    schedina: ["c", "a", "e", "b", "d"],
    fase: "esplorando",
    checklistPost: { due: true },
    onboardingFatto: true,
    autoverifica: { tre: "si" },
    zainoCelebrato: false,
    wizardMete: true,
    la: {
      metaAperta: "a",
      bozzePerMeta: {
        a: { ciclo: "2027/28", ateneo: "cafoscari", corsi: ["x"] },
      },
    },
    cicloPercorso: "2027/28",
    cicloDati: "2026/27",
    storico: { prova: true },
    schedinaCiclo: { prova: ["a"] },
  };
  const normalizzato = puro.normalizzaZainoV3(zaino, { ateneo: "cafoscari" });
  const { la, ...restoNormalizzato } = normalizzato;
  const { la: laLegacy, ...restoOriginale } = zaino;
  assert.deepEqual(restoNormalizzato, restoOriginale);
  assert.equal(la.schemaVersion, 2);
  assert.deepEqual(la.dossiersById, {});
  assert.deepEqual(la.recovery.legacyCorrupt.a, laLegacy.bozzePerMeta.a);
});

test("V6a migrazione difensiva: l'id estraneo esce solo dall'ordine", () => {
  const zaino = puro.creaZainoV3({
    cicloDati: "2026/27",
    cicloPercorso: "2027/28",
  });
  zaino.metePreferite = ["a", "b"];
  zaino.schedina = ["b", "estranea", "a"];
  const normalizzato = puro.normalizzaZainoV3(zaino);
  assert.deepEqual(normalizzato.metePreferite, ["a", "b"]);
  assert.deepEqual(normalizzato.schedina, ["b", "a"]);
});

test("V6a review A: i bordi restano focalizzabili e il fuoco non cambia comando", () => {
  const app = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");
  const css = fs.readFileSync(path.join(RADICE, "css", "style.css"), "utf8");
  const inizio = app.indexOf("const azioni = crea(\"div\", \"schedina-azioni\")");
  const fine = app.indexOf("\nfunction spostaSchedina(", inizio);
  const blocco = app.slice(inizio, fine);

  assert.match(blocco, /setAttribute\("aria-disabled"/);
  assert.doesNotMatch(blocco, /\.disabled\s*=|controllo\?\.disabled|find\(bottone => !bottone\.disabled\)/);
  assert.match(css, /\.schedina-freccia\[aria-disabled="true"\]/);
  assert.doesNotMatch(css, /\.schedina-freccia:disabled/);
});

test("V6a review B: la regione annunci è permanente e cambia nel frame successivo", () => {
  const app = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");
  const html = fs.readFileSync(path.join(RADICE, "index.html"), "utf8");
  assert.equal((html.match(/id="annunci-scelte"/g) || []).length, 1);
  assert.match(html, /id="annunci-scelte"[\s\S]*role="status" aria-live="polite"/);
  assert.match(app, /getElementById\("annunci-scelte"\)/);
  assert.match(app, /annunci\.textContent = ""[\s\S]*requestAnimationFrame/);
  assert.doesNotMatch(app, /crea\("div", "solo-lettori", ""\)/);
});

test("V6a review G: la regressione V3 prova lo stato, non il wizard rimosso", () => {
  const prova = fs.readFileSync(
    path.join(RADICE, "test", "ui", "v3-entrata.spec.cjs"),
    "utf8"
  );
  const inizio = prova.indexOf('test("V3 §8.4-bis:');
  const fine = prova.indexOf("\ntest(", inizio + 10);
  const blocco = prova.slice(inizio, fine);
  assert.match(blocco, /ZAINO\.wizardMete/);
  assert.doesNotMatch(blocco, /#wizard-mete|preferite-rilancia/);
});
