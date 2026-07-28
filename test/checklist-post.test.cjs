const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const FASE_CHECKLIST_LEARNING_AGREEMENT = "Learning Agreement";
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
});
