import test from "node:test";
import assert from "node:assert/strict";
import { punteggioLink } from "../scripts/raccogli-partner.mjs";

test("un ingresso incoming batte le notizie", () => {
  assert.ok(punteggioLink("Incoming exchange students") > punteggioLink("News"));
});

test("un link outgoing va sotto zero", () => {
  assert.ok(punteggioLink("Outgoing students") < 0);
});

test("il confronto ignora accenti e maiuscole", () => {
  assert.equal(punteggioLink("MOBILITÀ INTERNACIONÁL"), punteggioLink("mobilita internacional"));
});

// Le tre prove seguenti nascono da buchi veri, trovati misurando sul campo il
// 2026-08-30: il dizionario cercava parole intere dove servivano radici, e
// ignorava l'ordine delle parole. Su un campione di 100 partner questo costava
// ingressi che esistevano ed erano leggibili.

test("le forme derivate contano quanto la radice", () => {
  // "Internazionalità" e' il link che porta alla sezione internazionale di
  // parecchi atenei italiani, e valeva zero.
  for (const testo of ["Internazionalità", "Internationalisering", "Internacionalización"]) {
    assert.ok(punteggioLink(testo) > 0, `"${testo}" deve valere qualcosa`);
  }
});

test("l'ordine delle parole non cambia il senso", () => {
  // In inglese "student exchange" e' piu' comune di "exchange students".
  assert.ok(punteggioLink("Student exchange") > 0);
  assert.equal(punteggioLink("Student exchange"), punteggioLink("Exchange students"));
});

test("una parola composta tedesca vale come la parola sola", () => {
  assert.ok(punteggioLink("Studentenaustausch") > 0);
  assert.ok(punteggioLink("Austauschstudierende") > 0);
});

test("nessuna voce del dizionario ne contiene un'altra dello stesso peso", () => {
  // Due radici sovrapposte conterebbero due volte lo stesso testo, gonfiando il
  // punteggio di un link senza motivo.
  const doppio = punteggioLink("international mobility");
  const singolo = punteggioLink("international");
  assert.ok(doppio > singolo, "due concetti distinti devono sommare");
  assert.equal(punteggioLink("internationalisation"), punteggioLink("internation"),
    "la stessa radice non deve essere contata piu' volte");
});
