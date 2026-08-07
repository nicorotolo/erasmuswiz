const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const puro = require("../js/puro.js");

const RADICE = path.resolve(__dirname, "..");
const PERCORSO = path.join(RADICE, "validazione", "fixture-la-lisbona-iniziale.json");

test("fixture Bruno: backup anonimo, importabile e fedele al LA iniziale", () => {
  const testo = fs.readFileSync(PERCORSO, "utf8");
  const grezzo = JSON.parse(testo);
  const analisi = puro.analizzaBackupLA(grezzo, ["cafoscari", "sapienza"]);

  assert.equal(analisi.ok, true);
  assert.equal(analisi.university, "sapienza");
  assert.equal(analisi.cycle, "2025/26");
  assert.equal(analisi.counts.dossier, 1);
  assert.equal(analisi.counts.versioni, 1);

  const dossier = analisi.payload.dossiersById["caso-storico-lisbona"];
  const versione = puro.versioneCorrenteLA(dossier);
  const ects = versione.hostCourseSnapshots.reduce((totale, corso) => totale + Number(corso.ects), 0);
  const cfu = versione.homeExamSnapshots.reduce((totale, esame) => totale + Number(esame.cfu), 0);

  assert.equal(versione.hostCourseSnapshots.length, 8);
  assert.equal(ects, 44);
  assert.equal(versione.homeExamSnapshots.length, 6);
  assert.equal(cfu, 45);
  assert.equal(dossier.lifecycle.mobilityStartedAt, "2025-09-13T00:00:00.000Z");
  assert.equal(analisi.payload.assignedDossierIdByCycle["2025/26"], dossier.id);
  assert.equal(puro.valutaProntezzaLA(dossier, versione, []).state, "ready");

  assert.doesNotMatch(testo, /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  assert.doesNotMatch(testo, /\b(?:0[1-9]|[12]\d|3[01])[/.](?:0[1-9]|1[0-2])[/.](?:19|20)\d{2}\b/);
  assert.doesNotMatch(testo, /"(?:studentName|dateOfBirth|matricola|email|signature|referent[ei]?)"\s*:/i);
});
