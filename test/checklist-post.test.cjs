const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const FASE_CHECKLIST_LEARNING_AGREEMENT = "Learning Agreement";
// Ricopiati da app.js come gia' si fa qui sopra: se cambiano la', vanno
// cambiati anche qui (app.js:2568 CAPITOLI_ZAINO).
const CAPITOLI_ZAINO = ["Prima", "Durante", "Dopo"];
const ATENEI = ["cafoscari", "sapienza"];

function caricaChecklistPost(ateneo) {
  const file = path.join(
    __dirname,
    "..",
    "js",
    "atenei",
    ateneo,
    "dati-postselezione.js"
  );
  const contesto = {};
  vm.runInNewContext(fs.readFileSync(file, "utf8"), contesto, { filename: file });
  return contesto.CHECKLIST_POST;
}

ATENEI.forEach(ateneo => {
  test(`${ateneo}: la checklist post-selezione contiene il gruppo del Learning Agreement`, () => {
    const checklist = caricaChecklistPost(ateneo);
    assert.ok(Array.isArray(checklist));
    assert.ok(
      checklist.some(voce => voce.fase === FASE_CHECKLIST_LEARNING_AGREEMENT),
      `Nessuna voce usa fase "${FASE_CHECKLIST_LEARNING_AGREEMENT}" nei dati di ${ateneo}`
    );
  });

  test(`${ateneo}: ogni voce ha id, testo e un gruppoZaino noto, e gli id sono unici`, () => {
    const checklist = caricaChecklistPost(ateneo);
    const ids = checklist.map(v => v.id);
    // NB: `checklist` arriva da vm.runInNewContext, quindi i suoi array hanno
    // il prototipo di un altro realm: assert.deepEqual(arr, []) fallisce anche
    // quando arr e' vuoto. Si confrontano lunghezze e stringhe, mai array.
    const duplicati = ids.filter((x, i) => ids.indexOf(x) !== i);
    assert.equal(
      duplicati.length,
      0,
      `id duplicati (${duplicati.join(", ")}): sono chiavi dello zaino, un duplicato fonde due spunte`
    );
    checklist.forEach(voce => {
      assert.ok(voce.id && voce.testo && voce.testo.trim(), `voce senza id o testo: ${voce.id}`);
      assert.ok(
        CAPITOLI_ZAINO.includes(voce.gruppoZaino),
        `${voce.id}: gruppoZaino "${voce.gruppoZaino}" non e' fra ${CAPITOLI_ZAINO.join("/")} — cadrebbe nel fallback "Prima" svuotando un capitolo`
      );
    });
  });

  // La regola nasce da un difetto reale: aggiungendo le voci condizionali a
  // Ca' Foscari (2026-07-28) la prova UI "la prima azione post-selezione e'
  // calcolata" e' diventata rossa, perche' chi aveva fatto le quattro azioni
  // vere dell'accettazione restava fermo su una voce che nessuno spunta mai
  // ("Se hai deciso di non partire..."). vociPostPromuovibili() in app.js
  // salta le condizionali: perche' possa farlo, ne deve restare almeno una
  // NON condizionale per ogni capitolo dello zaino, altrimenti quel capitolo
  // non produce piu' nessuna mossa.
  test(`${ateneo}: ogni capitolo dello zaino ha almeno una voce promuovibile`, () => {
    const checklist = caricaChecklistPost(ateneo);
    const capitoliUsati = [...new Set(checklist.map(v => v.gruppoZaino))];
    capitoliUsati.forEach(capitolo => {
      const promuovibili = checklist.filter(
        v => v.gruppoZaino === capitolo && !v.condizionale
      );
      assert.ok(
        promuovibili.length > 0,
        `capitolo "${capitolo}" di ${ateneo}: tutte le voci sono condizionali, nessuna puo' diventare la prossima mossa`
      );
    });
  });

  test(`${ateneo}: nessuna voce mostra una data assoluta del ciclo (gate G1)`, () => {
    const checklist = caricaChecklistPost(ateneo);
    const mesi = "gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre";
    // \b per non inciampare in "forza maggiore" e "contributo maggiorato".
    const dataAssoluta = new RegExp(`\\b(20\\d\\d(?:/\\d{2,4})?|\\d{1,2}/\\d{1,2}/\\d{4}|${mesi})\\b`, "i");
    const colpevoli = checklist
      .filter(voce => dataAssoluta.test(voce.testo))
      // Ammessa la vendemmia dichiarata al passato ("nel 2025/26 il minimo ERA"):
      // e' la forma onesta, non una promessa sul ciclo corrente.
      .filter(voce => !/\bera\b|\bnel 20\d\d\/\d{2}\b/i.test(voce.testo))
      .map(voce => voce.id);
    assert.equal(
      colpevoli.length,
      0,
      `Voci con una data del ciclo scritta come attuale: ${colpevoli.join(", ")}. I termini che dipendono dall'anno vanno rimandati al bando o al contratto.`
    );
  });
});
