import test from "node:test";
import assert from "node:assert/strict";
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
