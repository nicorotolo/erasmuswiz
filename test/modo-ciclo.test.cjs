const test = require("node:test");
const assert = require("node:assert/strict");
const { modoCiclo } = require("../js/puro.js");

const STATI = [
  "aperto",
  "chiuso-ciclo-attivo",
  "dati-scaduti",
  "non-pubblicato",
];

for (const stato of STATI) {
  test(`modoCiclo — ${stato}, cicli uguali`, () => {
    assert.equal(modoCiclo({
      stato,
      cicloDati: "2026/27",
      cicloPercorso: "2026/27",
    }), "corrente");
  });

  test(`modoCiclo — ${stato}, cicli diversi`, () => {
    const atteso = ["chiuso-ciclo-attivo", "dati-scaduti"].includes(stato)
      ? "pre-bando"
      : "corrente";
    assert.equal(modoCiclo({
      stato,
      cicloDati: "2026/27",
      cicloPercorso: "2027/28",
    }), atteso);
  });
}

for (const [nome, configurazione] of [
  ["cicloDati mancante", { stato: "chiuso-ciclo-attivo", cicloPercorso: "2027/28" }],
  ["cicloPercorso mancante", { stato: "dati-scaduti", cicloDati: "2026/27" }],
  ["cicloDati vuoto", { stato: "chiuso-ciclo-attivo", cicloDati: " ", cicloPercorso: "2027/28" }],
  ["argomento mancante", undefined],
]) {
  test(`modoCiclo — ${nome}`, () => {
    assert.equal(modoCiclo(configurazione), "corrente");
  });
}
