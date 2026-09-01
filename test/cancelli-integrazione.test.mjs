import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { applicaCancelli, codiciValidi } from "../scripts/cancelli.mjs";

function impronta(testo) {
  return createHash("sha256").update(testo, "utf8").digest("hex");
}

function ambiente() {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-cancelli-"));
  const codice = "TEST 01";
  const cartella = path.join(radice, "raccolta", "pagine", "TEST01");
  fs.mkdirSync(cartella, { recursive: true });
  const inviato = "A".repeat(40_000);
  const testo = `${inviato} Questa citazione compare soltanto dopo il brano inviato al modello.`;
  fs.writeFileSync(path.join(cartella, "001.json"), JSON.stringify({
    url: "https://example.test/incoming", titolo: "Incoming students", testo,
  }));
  const lettura = {
    codiceNorm: codice,
    pagineInviate: [{ n: 1, file: "001.json", url: "https://example.test/incoming", titolo: "Incoming students", caratteri: inviato.length, impronta: impronta(inviato) }],
    campi: { notaDisponibilita: { valore: "Disponibile per studenti Erasmus", livello: "ateneo", ambito: null, paginaCitata: 1, fonte: { url: "https://example.test/incoming", citazione: "Questa citazione compare soltanto dopo il brano inviato al modello.", verificataIl: "2026-08-30" } } },
  };
  return { radice, lettura, codice };
}

test("il cancello scarta la citazione fuori dal pezzo inviato", async (t) => {
  const { radice, lettura, codice } = ambiente();
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const esito = await applicaCancelli([lettura], { radice, codici: new Set([codice]) });
  assert.equal(esito.scartati[0].causa, "citazioneAssente");
});

test("il cancello scarta una pagina cambiata dopo la lettura", async (t) => {
  const { radice, lettura, codice } = ambiente();
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  lettura.pagineInviate[0].impronta = impronta("un testo diverso");
  const esito = await applicaCancelli([lettura], { radice, codici: new Set([codice]) });
  assert.equal(esito.scartati[0].causa, "paginaCambiata");
});

test("i codici Ca' Foscari sono validi e un elenco vuoto blocca il cancello", async () => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-cancelli-"));
  try {
    const file = path.join(radice, "js", "atenei", "cafoscari", "dati-mete.js");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, 'var METE = [{ codiceErasmus: "I VENEZIA01" }];');
    assert.equal(codiciValidi(radice).has("IVENEZIA01"), true);
    await assert.rejects(applicaCancelli([], { radice, codici: new Set() }), /nessun codice valido/i);
  } finally { fs.rmSync(radice, { recursive: true, force: true }); }
});

test("il cancello usa lo statoLink passato dal test, senza chiamare la rete", async (t) => {
  const { radice, lettura, codice } = ambiente();
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  lettura.campi = { linkSito: { ...lettura.campi.notaDisponibilita, // Deve essere un indirizzo con un'origine lecita (qui: la pagina stessa),
  // altrimenti il cancello lo ferma prima e statoLink non viene mai chiamato.
  valore: "https://example.test/incoming", fonte: { ...lettura.campi.notaDisponibilita.fonte, citazione: "A".repeat(20) } } };
  let chiamate = 0;
  const esito = await applicaCancelli([lettura], { radice, codici: new Set([codice]), statoLink: async () => { chiamate++; return { stato: "morto" }; } });
  assert.equal(chiamate, 1);
  assert.equal(esito.scartati[0].causa, "urlMorto");
});
