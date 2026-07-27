import test from "node:test";
import assert from "node:assert/strict";
import { validaContenitoreOutput } from "../scripts/lib-output-batch.mjs";

const input = {
  batchId: "lingue-v0",
  mete: [{ codiceErasmus: "TEST 01", campiDaRiempire: ["requisitoLingua"] }],
};

function output(requisitoLingua) {
  return {
    batchId: "lingue-v0",
    dati: {
      "TEST 01": {
        requisitoLingua,
        fonti: {
          requisitoLingua: {
            url: "https://example.edu/incoming",
            citazione: "English B2 is required for incoming exchange students.",
            verificataIl: "2026-07-27",
          },
        },
      },
    },
  };
}

function albero(figli, op = "ALL") {
  return {
    op,
    figli,
    fonte: "https://example.edu/incoming",
    verificatoIl: "2026-07-27",
  };
}

test("pipeline V0 — accetta un albero dichiarativo con condizioni sulle foglie", () => {
  assert.doesNotThrow(() => validaContenitoreOutput(
    output(albero([
      { lingua: "Tedesco", livello: "B2" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
    ], "ANY")),
    input
  ));
});

test("pipeline V0 — la radice è obbligatoria anche con una sola foglia", () => {
  assert.throws(
    () => validaContenitoreOutput(
      output({
        lingua: "Inglese",
        livello: "B2",
        fonte: "https://example.edu/incoming",
        verificatoIl: "2026-07-27",
      }),
      input
    ),
    /la radice deve dichiarare sempre/
  );
});

test("pipeline V0 — rifiuta il vecchio array e i gruppi con campi estranei", () => {
  assert.throws(
    () => validaContenitoreOutput(
      output([{ lingua: "Inglese", livello: "B2" }]),
      input
    ),
    /oggetto dichiarativo atteso/
  );
  assert.throws(
    () => validaContenitoreOutput(
      output(albero([{
        op: "ANY",
        figli: [{ lingua: "Inglese", livello: "B2" }],
        condizione: "campo illegittimo sul gruppo",
      }])),
      input
    ),
    /chiave non prevista/
  );
});

test("pipeline V0 — rifiuta una lingua composta", () => {
  assert.throws(
    () => validaContenitoreOutput(
      output(albero([{ lingua: "Tedesco o Inglese", livello: "B2", condizione: "incoming" }])),
      input
    ),
    /lingua composta/
  );
});

test("pipeline V0 — rifiuta un livello CEFR fuori scala", () => {
  assert.throws(
    () => validaContenitoreOutput(
      output(albero([{ lingua: "Inglese", livello: "B1\/B2", condizione: "incoming" }])),
      input
    ),
    /livello CEFR non valido/
  );
});
