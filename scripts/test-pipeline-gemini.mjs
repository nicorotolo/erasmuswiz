#!/usr/bin/env node
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { impostaCampo, valoreCampo } from "./lib-mete.mjs";
import { validaContenitoreOutput } from "./lib-output-batch.mjs";

test("inserisce un nuovo campo prima di notePratiche", () => {
  const blocco = `{
    codiceErasmus: "E TEST01",
    requisitoLingua: [],
    notePratiche: "nota"
  }`;
  const risultato = impostaCampo(blocco, "linkCatalogo", "https://example.edu/catalogue", { soloSeVuoto: true });
  assert.equal(risultato.modificato, true);
  assert.equal(JSON.parse(valoreCampo(risultato.blocco, "linkCatalogo")), "https://example.edu/catalogue");
  assert.match(risultato.blocco, /linkCatalogo: .*\n\s*notePratiche:/);
});

test("non sovrascrive un campo pieno durante il riuso", () => {
  const blocco = `{ linkCatalogo: "https://old.example/catalogue", notePratiche: "nota" }`;
  const risultato = impostaCampo(blocco, "linkCatalogo", "https://new.example/catalogue", { soloSeVuoto: true });
  assert.equal(risultato.modificato, false);
  assert.equal(JSON.parse(valoreCampo(risultato.blocco, "linkCatalogo")), "https://old.example/catalogue");
});

const input = {
  batchId: "test-1",
  mete: [{ codiceErasmus: "E TEST01", campiDaRiempire: ["linkCatalogo", "notaDisponibilita"] }],
};

test("accetta output legato al batch con evidenza completa", () => {
  const output = {
    batchId: "test-1",
    dati: {
      "E TEST01": {
        linkCatalogo: "https://example.edu/catalogue",
        fonti: {
          linkCatalogo: {
            url: "https://example.edu/catalogue",
            citazione: "Exchange students can browse the course catalogue here.",
            verificataIl: "2026-07-14",
          },
        },
      },
    },
  };
  assert.deepEqual(validaContenitoreOutput(output, input), output);
});

test("rifiuta un output residuo di un altro batch", () => {
  assert.throws(() => validaContenitoreOutput({ batchId: "vecchio", dati: {} }, input), /batchId non corrispondente/);
});

test("rifiuta dati senza citazione", () => {
  const output = {
    batchId: "test-1",
    dati: {
      "E TEST01": {
        linkCatalogo: "https://example.edu/catalogue",
        fonti: { linkCatalogo: { url: "https://example.edu/catalogue", verificataIl: "2026-07-14" } },
      },
    },
  };
  assert.throws(() => validaContenitoreOutput(output, input), /citazione/);
});

function fixtureTemp() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-pipeline-test-"));
  fs.mkdirSync(path.join(dir, "scripts"), { recursive: true });
  fs.mkdirSync(path.join(dir, "batch"), { recursive: true });
  fs.mkdirSync(path.join(dir, "js", "atenei", "base"), { recursive: true });
  fs.mkdirSync(path.join(dir, "js", "atenei", "nuovo"), { recursive: true });
  for (const file of ["lib-mete.mjs", "lib-output-batch.mjs", "setup-dipartimento.mjs", "applica-batch.mjs"]) {
    fs.copyFileSync(path.join(process.cwd(), "scripts", file), path.join(dir, "scripts", file));
  }
  return dir;
}

function eseguiFixture(dir, script) {
  const r = spawnSync(process.execPath, [path.join("scripts", script)], { cwd: dir, encoding: "utf8" });
  assert.equal(r.status, 0, `${script} fallito:\n${r.stdout}\n${r.stderr}`);
  return r;
}

test("setup riusa anche catalogo e disponibilita senza riscrivere il seed", () => {
  const dir = fixtureTemp();
  try {
    const base = `var METE = [{
      id: "base-1", codiceErasmus: "E TEST01", requisitoLingua: [{ lingua: "Inglese", livello: "B2" }],
      scadenzeOspitante: [{ cosa: "Application", periodo: "entro 1 maggio" }],
      linkSito: "https://example.edu/incoming", linkCatalogo: "https://example.edu/catalogue",
      notaDisponibilita: "Corsi aperti agli exchange", notePratiche: "base"
    }];\n`;
    const nuovo = `var METE = [{
      id: "nuovo-1", codiceErasmus: "E  TEST01", requisitoLingua: [],
      scadenzeOspitante: [], linkSito: "", notePratiche: "nuovo"
    }];\n`;
    fs.writeFileSync(path.join(dir, "js/atenei/base/dati.js"), base);
    fs.writeFileSync(path.join(dir, "js/atenei/nuovo/dati.js"), nuovo);
    const stato = {
      config: { maxTentativiLingua: 2, sogliaAvanzamentoDipartimento: 0.85 },
      universitaCorrente: "Test",
      runCompletati: 0,
      storico: [],
      prossimiBatch: [{ id: "setup-nuovo", tipo: "nuovo_dipartimento", dipartimento: "Nuovo", fileJs: "js/atenei/nuovo/dati.js", ateneo: "Test" }],
      statoDipartimenti: {
        Base: { fileJs: "js/atenei/base/dati.js", stato: "completo", totale: 1, completate: 1, pendingLingua: [], pendingScadenze: [], linguaNonTrovabile: [] },
      },
    };
    fs.writeFileSync(path.join(dir, "mappatura-stato.json"), JSON.stringify(stato));
    eseguiFixture(dir, "setup-dipartimento.mjs");
    const src = fs.readFileSync(path.join(dir, "js/atenei/nuovo/dati.js"), "utf8");
    const mete = Function(`${src}; return METE;`)();
    assert.equal(mete[0].linkCatalogo, "https://example.edu/catalogue");
    assert.equal(mete[0].notaDisponibilita, "Corsi aperti agli exchange");
    const dopo = JSON.parse(fs.readFileSync(path.join(dir, "mappatura-stato.json"), "utf8"));
    assert.equal(dopo.prossimiBatch.length, 0);
    assert.equal(dopo.statoDipartimenti.Nuovo.stato, "completo");
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});

test("applica inserisce campi nuovi e conserva evidenze strutturate", () => {
  const dir = fixtureTemp();
  try {
    const src = `var METE = [{
      id: "meta-1", codiceErasmus: "E TEST01", requisitoLingua: [{ lingua: "Inglese", livello: "B2" }],
      scadenzeOspitante: [{ cosa: "Application", periodo: "entro 1 maggio" }],
      linkSito: "https://example.edu/incoming", notePratiche: "nota"
    }];\n`;
    fs.writeFileSync(path.join(dir, "js/atenei/base/dati.js"), src);
    const stato = {
      config: { maxTentativiLingua: 2, sogliaAvanzamentoDipartimento: 0.85 },
      runCompletati: 0, storico: [], dipartimentoCorrente: "Base",
      prossimiBatch: [{ id: "catalogo-1", tipo: "catalogo", dipartimento: "Base", mete: ["E TEST01"] }],
      statoDipartimenti: {
        Base: { fileJs: "js/atenei/base/dati.js", stato: "in_corso", totale: 1, completate: 1, pendingLingua: [], pendingScadenze: [], tentativiLingua: {}, linguaNonTrovabile: [] },
      },
    };
    const inputFixture = { batchId: "catalogo-1", mete: [{ codiceErasmus: "E TEST01", campiDaRiempire: ["linkCatalogo", "notaDisponibilita"] }] };
    const outputFixture = {
      batchId: "catalogo-1",
      dati: {
        "E TEST01": {
          linkCatalogo: "https://example.edu/catalogue",
          notaDisponibilita: "Corsi aperti agli exchange",
          fonti: {
            linkCatalogo: { url: "https://example.edu/catalogue", citazione: "Exchange course catalogue is available online.", verificataIl: "2026-07-14" },
            notaDisponibilita: { url: "https://example.edu/incoming", citazione: "Courses are open to exchange students.", verificataIl: "2026-07-14" },
          },
        },
      },
    };
    fs.writeFileSync(path.join(dir, "mappatura-stato.json"), JSON.stringify(stato));
    fs.writeFileSync(path.join(dir, "batch/INPUT.json"), JSON.stringify(inputFixture));
    fs.writeFileSync(path.join(dir, "batch/OUTPUT.json"), JSON.stringify(outputFixture));
    eseguiFixture(dir, "applica-batch.mjs");
    const aggiornato = fs.readFileSync(path.join(dir, "js/atenei/base/dati.js"), "utf8");
    const mete = Function(`${aggiornato}; return METE;`)();
    assert.equal(mete[0].linkCatalogo, "https://example.edu/catalogue");
    assert.equal(mete[0].notaDisponibilita, "Corsi aperti agli exchange");
    const fonti = JSON.parse(fs.readFileSync(path.join(dir, "batch/FONTI-catalogo-1.json"), "utf8"));
    assert.equal(fonti["E TEST01"].linkCatalogo.citazione, "Exchange course catalogue is available online.");
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
