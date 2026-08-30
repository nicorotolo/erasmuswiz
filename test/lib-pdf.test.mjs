import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { deflateSync } from "node:zlib";
import { testoDaPdf } from "../scripts/lib-pdf.mjs";

function pdf(contenuto) {
  const flusso = deflateSync(Buffer.from(contenuto, "latin1"));
  return Buffer.concat([Buffer.from("%PDF-1.4\n1 0 obj\n<< /Length " + flusso.length + " /Filter /FlateDecode >>\nstream\n", "latin1"), flusso, Buffer.from("\nendstream\nendobj\n%%EOF", "latin1")]);
}

test("estrae Tj e TJ da un PDF FlateDecode e ricompone gli spazi", () => {
  const lungo = "Questo e un testo sufficientemente lungo per superare il limite minimo dell estrattore PDF. ".repeat(3);
  const risultato = testoDaPdf(pdf(`BT (${lungo}) Tj [(Prima) -120 (seconda)] TJ ET`));
  assert.match(risultato, /Prima seconda/);
});

test("rifiuta byte non PDF e testo troppo corto", () => {
  assert.equal(testoDaPdf(Buffer.from("non e un pdf")), null);
  assert.equal(testoDaPdf(pdf("BT (breve) Tj ET")), null);
});

test("rifiuta un testo lungo con piu del 10% di caratteri di controllo", () => {
  const sporco = `${"A".repeat(8)}\x01`.repeat(30);
  assert.equal(testoDaPdf(pdf(`BT (${sporco}) Tj ET`)), null);
});

function testoFixture(nome) {
  return testoDaPdf(readFileSync(new URL(`./fixtures/pdf/${nome}`, import.meta.url)));
}

function assertTestoPulito(testo) {
  assert.doesNotMatch(testo, /\b(?:Tj|TJ|BT|ET|Tf|Tm)\b|(?:Tj|TJ|BT|ET|Tf|Tm)(?=[A-Z/])|\/GS\S*|(?<!\S)[qQ](?!\S)/);
  assert.doesNotMatch(testo, /\p{L}\]\s/u, "una parentesi PDF non deve finire dentro una parola");
}

test("estrae pulito una factsheet universitaria vera", () => {
  const testo = testoFixture("factsheet-vera.pdf");
  assert.ok(testo);
  assert.match(testo, /Fact Sheet Student Exchange Programme/);
  assertTestoPulito(testo);
});

test("estrae pulito un secondo PDF universitario vero", () => {
  const testo = testoFixture("sporco-piccolo.pdf");
  assert.ok(testo);
  assert.match(testo, /ACADEMIC ADVISORS PER SCHOOL/);
  assertTestoPulito(testo);
});

test("rifiuta un PDF vero con font a codifica proprietaria", () => {
  assert.equal(testoFixture("font-illeggibile.pdf"), null);
});
