const test = require("node:test");
const assert = require("node:assert/strict");
const { destDaHash } = require("../js/puro.js");

const configurazioneV1 = {
  destinazioniValide: ["oggi", "mete", "percorso", "profilo"],
  aliasHash: {
    timeline: "percorso",
    checklist: "percorso",
    idoneita: "percorso",
  },
  ateneiValidi: ["cafoscari", "sapienza"],
};

test("router V1 — conserva hash nudi e normalizza gli alias registrati", () => {
  assert.deepEqual(destDaHash("#oggi", configurazioneV1), {
    rotta: "oggi",
    segmenti: ["oggi"],
    ateneo: null,
    destinazione: "oggi",
  });
  assert.deepEqual(destDaHash("#timeline", configurazioneV1), {
    rotta: "percorso",
    segmenti: ["timeline"],
    ateneo: null,
    destinazione: "percorso",
  });
  assert.equal(destDaHash("#/oggi", configurazioneV1), null);
});

test("router V1 — legge la forma canonica del Learning Agreement con ateneo", () => {
  assert.deepEqual(
    destDaHash("#learning-agreement/sapienza", configurazioneV1),
    {
      rotta: "learning-agreement",
      segmenti: ["learning-agreement"],
      ateneo: "sapienza",
      destinazione: null,
    }
  );
});

test("router V1 — prepara due livelli più ateneo senza registrare la rotta", () => {
  assert.deepEqual(destDaHash("#mete/scelte/cafoscari", configurazioneV1), {
    rotta: "mete/scelte",
    segmenti: ["mete", "scelte"],
    ateneo: "cafoscari",
    destinazione: null,
  });
});

test("router V1 — una futura registrazione abilita la rotta senza cambiare parser", () => {
  const futura = {
    ...configurazioneV1,
    destinazioniValide: [
      ...configurazioneV1.destinazioniValide,
      "mete/scelte",
    ],
  };
  assert.equal(
    destDaHash("#mete/scelte/sapienza", futura).destinazione,
    "mete/scelte"
  );
});

test("router V1 — ateneo ignoto, segmenti vuoti e profondità eccessiva non passano", () => {
  assert.deepEqual(
    destDaHash("#learning-agreement/ignoto", configurazioneV1),
    {
      rotta: "learning-agreement/ignoto",
      segmenti: ["learning-agreement", "ignoto"],
      ateneo: null,
      destinazione: null,
    }
  );
  assert.equal(destDaHash("#mete//sapienza", configurazioneV1), null);
  assert.equal(destDaHash("#uno/due/tre/quattro", configurazioneV1), null);
  assert.equal(destDaHash("#mete%2Fscelte/sapienza", configurazioneV1), null);
});
