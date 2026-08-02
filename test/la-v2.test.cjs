const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const puro = require("../js/puro.js");

const RADICE = path.resolve(__dirname, "..");

function caricaDato(file, nome) {
  const contesto = {};
  vm.runInNewContext(fs.readFileSync(path.join(RADICE, file), "utf8"), contesto);
  return contesto[nome];
}

const REGOLE = caricaDato("js/la-regole.js", "ERASMUSWIZ_LA_REGOLE");

function creaDossierCompleto(university = "cafoscari") {
  let la = puro.creaLaV2();
  la.examLibrary.e1 = { id: "e1", codice: "EC1", nome: "Economia", cfu: 6, stato: "da-sostenere" };
  const creato = puro.creaDossierLA(la, {
    metaId: "meta-1",
    meta: { id: "meta-1", universita: "Università host", citta: "Parigi", paese: "Francia" },
    university,
    cycle: "2026/27",
    at: "2026-08-02T10:00:00.000Z",
  });
  la = creato.la;
  const dossier = la.dossiersById[creato.dossierId];
  const versione = puro.versioneCorrenteLA(dossier);
  versione.homeExamSnapshots.push({
    snapshotId: `${versione.versionId}:home-1`, sourceExamId: "e1",
    codice: "EC1", nome: "Economia", cfu: 6, stato: "da-sostenere",
  });
  versione.hostCourseSnapshots.push({
    snapshotId: `${versione.versionId}:host-1`, codice: "",
    nome: "Economics", ects: 7.5, lingua: "Inglese", semestre: "1",
    officialUrl: "https://example.edu/course", availabilityState: "disponibile",
    verifiedAt: "2026-08-02", sourceDate: "2026-08-02",
  });
  versione.mappings.push({
    mappingId: `${versione.versionId}:map-1`,
    homeExamSnapshotIds: [`${versione.versionId}:home-1`],
    hostCourseSnapshotIds: [`${versione.versionId}:host-1`],
  });
  for (const key of puro.LA_PREFLIGHT) versione.preflight[key] = true;
  return { la, dossier, versione, dossierId: dossier.id };
}

test("LA parser: header, punto/virgola, tab, decimali e righe vuote restano tracciati", () => {
  const parsed = puro.parsePianoStudiLA(
    "codice; nome; CFU\nDIR1; Diritto privato; 6,5\n\nECO1\tEconomia\t9.5"
  );
  assert.equal(parsed.rows.length, 2);
  assert.equal(parsed.rows[0].values.cfu, 6.5);
  assert.equal(parsed.rows[1].values.cfu, 9.5);
  assert.equal(parsed.unresolvedCount, 0);
});

test("LA parser: una riga ambigua non sparisce e richiede una decisione", () => {
  const parsed = puro.parsePianoStudiLA("questa riga non ha separatori");
  assert.equal(parsed.rows.length, 1);
  assert.equal(parsed.unresolvedCount, 1);
  assert.deepEqual(parsed.rows[0].issues, [
    "ambiguous-columns", "missing-name", "invalid-credits",
  ]);
  assert.equal(puro.finalizzaImportPianoLA(parsed, {}).unresolvedRows.length, 1);
  assert.equal(puro.finalizzaImportPianoLA(parsed, {
    "row-1": { action: "exclude" },
  }).unresolvedRows.length, 0);
});

test("LA parser: i CFU corretti con la virgola diventano un numero prima del salvataggio", () => {
  const parsed = puro.parsePianoStudiLA("; ; ");
  const finale = puro.finalizzaImportPianoLA(parsed, {
    "row-1": {
      action: "confirm",
      values: { codice: "MAT", nome: "Matematica", cfu: "6,5" },
    },
  });
  assert.equal(finale.unresolvedRows.length, 0);
  assert.equal(finale.exams[0].cfu, 6.5);
  assert.equal(typeof finale.exams[0].cfu, "number");
});

test("LA parser: duplicati per codice o nome+CFU richiedono merge o separazione", () => {
  const library = {
    e1: { id: "e1", codice: "DIR-1", nome: "Diritto", cfu: 6 },
    e2: { id: "e2", codice: "", nome: "Economia politica", cfu: 9 },
  };
  const parsed = puro.parsePianoStudiLA(
    "dir 1; Altro nome; 6\n; economia politica; 9", library
  );
  assert.equal(parsed.unresolvedCount, 2);
  assert.deepEqual(parsed.rows.map(r => r.duplicateExamId), ["e1", "e2"]);
  const merged = puro.finalizzaImportPianoLA(parsed, {
    "row-1": { action: "merge", examId: "e1" },
    "row-2": { action: "keep-separate", values: parsed.rows[1].values },
  });
  assert.equal(merged.unresolvedRows.length, 0);
  assert.equal(merged.exams[0].mergeIntoExamId, "e1");
  assert.equal(merged.exams[1].mergeIntoExamId, undefined);
});

test("LA parser: riconosce anche un duplicato tra due righe della stessa anteprima", () => {
  const parsed = puro.parsePianoStudiLA("DIR1; Diritto; 6\ndir1; Diritto duplicato; 6", {});
  assert.equal(parsed.rows[0].requiresDecision, false);
  assert.equal(parsed.rows[1].duplicateExamId, "preview:1");
  const finale = puro.finalizzaImportPianoLA(parsed, {
    "row-2": { action: "merge" },
  });
  assert.equal(finale.unresolvedRows.length, 0);
  assert.equal(finale.exams[0].importRowId, "row-1");
  assert.equal(finale.exams[1].mergeIntoExamId, "preview:1");
});

test("LA migrazione: id deterministici, collisioni stabili, snapshot e nessuna assegnazione inferita", () => {
  const legacy = {
    metaAperta: "À",
    futuro: { daConservare: true },
    bozzePerMeta: {
      A: {
        meta: { id: "A", universita: "Host A" }, ciclo: "2026/27", ateneo: "sapienza",
        versioni: [{ numero: 1, esamiCasa: [{ id: "e1", nome: "Casa", cfu: 6 }], corsiHost: [], gruppi: [] }],
      },
      "À": {
        meta: { id: "À", universita: "Host B" }, ciclo: "2026/27", ateneo: "sapienza",
        versioni: [{ numero: 1, esamiCasa: [], corsiHost: [], gruppi: [] }],
      },
    },
  };
  const una = puro.normalizzaLaV2(legacy, { ateneo: "sapienza", ciclo: "2026/27" });
  const ids = Object.keys(una.dossiersById);
  assert.deepEqual(ids, [
    "legacy:sapienza:2026-27:a",
    "legacy:sapienza:2026-27:a-2",
  ]);
  assert.equal(una.dossiersById[ids[0]].versions[0].versionId, `${ids[0]}:v1`);
  assert.equal(una.dossiersById[ids[0]].versions[0].homeExamSnapshots[0].sourceExamId, undefined);
  assert.deepEqual(una.assignedDossierIdByCycle, {});
  assert.equal(una.futuro.daConservare, true);
  assert.deepEqual(puro.normalizzaLaV2(una), una);
});

test("LA migrazione: bozze malformate restano in recovery e la verifica consente la seconda scrittura", () => {
  const legacy = {
    bozzePerMeta: {
      buona: { meta: { id: "buona", universita: "Host" }, versioni: [{ numero: 1, esamiCasa: [], corsiHost: [], gruppi: [] }] },
      rotta: "testo illeggibile",
    },
  };
  const la = puro.normalizzaLaV2(legacy, { ateneo: "cafoscari", ciclo: "2026/27" });
  assert.equal(Object.keys(la.dossiersById).length, 1);
  assert.equal(la.recovery.legacyCorrupt.rotta, "testo illeggibile");
  assert.equal(puro.verificaRecoveryLegacyLA(la, { ateneo: "cafoscari", ciclo: "2026/27" }), true);
  const alterataSenzaCambiareConteggi = structuredClone(la);
  const dossierId = Object.keys(alterataSenzaCambiareConteggi.dossiersById)[0];
  alterataSenzaCambiareConteggi.dossiersById[dossierId].meta.universita = "Contenuto alterato";
  assert.equal(puro.verificaRecoveryLegacyLA(
    alterataSenzaCambiareConteggi, { ateneo: "cafoscari", ciclo: "2026/27" }
  ), false);
  const pulita = puro.rimuoviRecoveryLegacyLA(la);
  assert.equal(pulita.recovery.legacyRecovery, undefined);
  assert.equal(pulita.recovery.legacyCorrupt.rotta, "testo illeggibile");
});

test("LA normalizzazione v2: è idempotente e conserva i campi futuri", () => {
  const fixture = creaDossierCompleto();
  fixture.la.campoFuturo = { resta: true };
  fixture.dossier.campoDossierFuturo = "resta";
  fixture.versione.campoVersioneFuturo = 42;
  const una = puro.normalizzaLaV2(fixture.la, { ateneo: "cafoscari", ciclo: "2026/27" });
  const due = puro.normalizzaLaV2(una, { ateneo: "cafoscari", ciclo: "2026/27" });
  assert.deepEqual(due, una);
  assert.deepEqual(due.campoFuturo, { resta: true });
  assert.equal(due.dossiersById[fixture.dossierId].campoDossierFuturo, "resta");
  assert.equal(puro.versioneCorrenteLA(due.dossiersById[fixture.dossierId]).campoVersioneFuturo, 42);
});

test("LA readiness: una proposta completa è pronta anche con ECTS diversi e codice host vuoto", () => {
  const { dossier, versione } = creaDossierCompleto("cafoscari");
  const regole = puro.filtraRegoleLA(REGOLE, {
    university: "cafoscari", cycle: "2026/27", scope: "all", asOf: "2026-08-02",
  });
  assert.deepEqual(puro.valutaProntezzaLA(dossier, versione, regole.rules), {
    state: "ready", missingCodes: [],
  });
});

test("LA readiness: tabella completa dei codici stabili", () => {
  const base = creaDossierCompleto("cafoscari");
  const casi = [
    ["missing-meta", d => { d.metaId = ""; d.meta = null; }],
    ["missing-cycle", d => { d.cycle = ""; }],
    ["no-home-course", (d, v) => { v.homeExamSnapshots = []; v.mappings = []; }],
    ["no-host-course", (d, v) => { v.hostCourseSnapshots = []; v.mappings = []; }],
    ["missing-home-name", (d, v) => { v.homeExamSnapshots[0].nome = ""; }],
    ["missing-host-name", (d, v) => { v.hostCourseSnapshots[0].nome = ""; }],
    ["invalid-home-credits", (d, v) => { v.homeExamSnapshots[0].cfu = 0; }],
    ["invalid-host-credits", (d, v) => { v.hostCourseSnapshots[0].ects = -1; }],
    ["unmapped-home", (d, v) => { v.mappings[0].homeExamSnapshotIds = []; }],
    ["unmapped-host", (d, v) => { v.mappings[0].hostCourseSnapshotIds = []; }],
    ["orphan-reference", (d, v) => { v.mappings[0].hostCourseSnapshotIds.push("sparita"); }],
    ["unresolved-import", (d, v) => { v.unresolvedImportRows = [{ raw: "?" }]; }],
    ["preflight:course-data-checked", (d, v) => { v.preflight["course-data-checked"] = false; }],
    ["preflight:credits-compared", (d, v) => { v.preflight["credits-compared"] = false; }],
    ["preflight:mapping-reviewed", (d, v) => { v.preflight["mapping-reviewed"] = false; }],
  ];
  for (const [codice, muta] of casi) {
    const d = structuredClone(base.dossier);
    const v = puro.versioneCorrenteLA(d);
    muta(d, v);
    assert.ok(puro.valutaProntezzaLA(d, v, []).missingCodes.includes(codice), codice);
  }
});

test("LA readiness: gruppi monchi non si completano e i corsi host inattivi non contano", () => {
  const uno = creaDossierCompleto("cafoscari");
  const homeId = uno.versione.homeExamSnapshots[0].snapshotId;
  const hostId = uno.versione.hostCourseSnapshots[0].snapshotId;
  uno.versione.mappings = [
    { mappingId: "solo-casa", homeExamSnapshotIds: [homeId], hostCourseSnapshotIds: [] },
    { mappingId: "solo-host", homeExamSnapshotIds: [], hostCourseSnapshotIds: [hostId] },
  ];
  const monchi = puro.valutaProntezzaLA(uno.dossier, uno.versione, []);
  assert.ok(monchi.missingCodes.includes("unmapped-home"));
  assert.ok(monchi.missingCodes.includes("unmapped-host"));

  const due = creaDossierCompleto("cafoscari");
  due.versione.hostCourseSnapshots.push({
    snapshotId: `${due.versione.versionId}:host-inactive`, nome: "Corso ritirato",
    ects: 6, availabilityState: "non-disponibile",
  });
  assert.deepEqual(puro.valutaProntezzaLA(due.dossier, due.versione, []), {
    state: "ready", missingCodes: [],
  });
  due.versione.hostCourseSnapshots[0].availabilityState = "non-disponibile";
  const soloInattivi = puro.valutaProntezzaLA(due.dossier, due.versione, []);
  assert.ok(soloInattivi.missingCodes.includes("no-host-course"));
  assert.ok(soloInattivi.missingCodes.includes("unmapped-home"));
});

test("LA readiness: i blocchi universitari valgono solo quando applicabili", () => {
  const cf = creaDossierCompleto("cafoscari");
  cf.versione.homeExamSnapshots[0].codice = "";
  const cfRules = puro.filtraRegoleLA(REGOLE, { university: "cafoscari", cycle: "2026/27", scope: "all", asOf: "2026-08-02" });
  assert.ok(puro.valutaProntezzaLA(cf.dossier, cf.versione, cfRules.rules).missingCodes.includes("rule:cf-home-code-required"));
  const sap = creaDossierCompleto("sapienza");
  sap.versione.homeExamSnapshots[0].stato = "gia-sostenuto";
  const sapRules = puro.filtraRegoleLA(REGOLE, { university: "sapienza", cycle: "2026/27", scope: "all", asOf: "2026-08-02" });
  assert.ok(puro.valutaProntezzaLA(sap.dossier, sap.versione, sapRules.rules).missingCodes.includes("rule:sap-home-not-passed"));
});

test("LA phase: deriva solo dai fatti e rispetta la precedenza", () => {
  const fixture = creaDossierCompleto();
  assert.equal(puro.derivaFaseLA(fixture.la, "2026/27"), "exploration");
  fixture.la.assignedDossierIdByCycle["2026/27"] = fixture.dossierId;
  assert.equal(puro.derivaFaseLA(fixture.la, "2026/27"), "preparation");
  fixture.dossier.lifecycle.firstExternalAt = "2026-09-01T00:00:00Z";
  assert.equal(puro.derivaFaseLA(fixture.la, "2026/27"), "approval");
  fixture.dossier.lifecycle.mobilityStartedAt = "2026-10-01T00:00:00Z";
  assert.equal(puro.derivaFaseLA(fixture.la, "2026/27"), "mobility");
  fixture.dossier.lifecycle.returnedAt = "2027-03-01T00:00:00Z";
  assert.equal(puro.derivaFaseLA(fixture.la, "2026/27"), "recognition");
  fixture.dossier.lifecycle.recognitionRecordedAt = "2027-04-01T00:00:00Z";
  assert.equal(puro.derivaFaseLA(fixture.la, "2026/27"), "closed");
  assert.equal(Object.hasOwn(fixture.dossier, "phase"), false);
});

test("LA versioni: il primo evento congela la fotografia e il clone azzera controlli e conferme", () => {
  const { dossier } = creaDossierCompleto();
  const registrato = puro.registraFattoEsternoLA(dossier, "sent-home", {
    markedAt: "2026-09-01T12:00:00Z", subject: "invio coordinatore",
  });
  assert.equal(registrato.ok, true);
  const v1 = puro.versioneCorrenteLA(registrato.dossier);
  assert.equal(v1.lockReason, "sent-home");
  assert.equal(registrato.dossier.confirmationsByVersion[v1.versionId]["sent-home"].versionId, v1.versionId);
  const clone = puro.preparaModificaVersioneLA(registrato.dossier, {
    reason: "change", at: "2026-09-02T00:00:00Z",
  });
  const v2 = puro.versioneCorrenteLA(clone);
  assert.notEqual(v2.versionId, v1.versionId);
  assert.equal(v2.lockedAt, undefined);
  assert.deepEqual(v2.preflight, {
    "course-data-checked": false,
    "credits-compared": false,
    "mapping-reviewed": false,
  });
  assert.equal(clone.confirmationsByVersion[v2.versionId], undefined);
  assert.ok(clone.confirmationsByVersion[v1.versionId]["sent-home"]);
  assert.equal(clone.lifecycle.firstExternalAt, "2026-09-01T12:00:00.000Z");
  const secondaModifica = puro.preparaModificaVersioneLA(clone, {
    reason: "change", at: "2026-09-03T00:00:00Z",
  });
  assert.equal(secondaModifica.versions.length, 2);
  assert.equal(puro.versioneCorrenteLA(secondaModifica).versionId, v2.versionId);
  assert.ok(secondaModifica.confirmationsByVersion[v1.versionId]["sent-home"]);
});

test("LA lifecycle: un fatto reale congela la versione senza inventare approvazioni", () => {
  const fixture = creaDossierCompleto();
  const iniziata = puro.registraFattoLifecycleLA(fixture.dossier, "mobilityStartedAt", {
    markedAt: "2026-09-15T09:30:00Z",
  });
  assert.equal(iniziata.ok, true);
  assert.equal(iniziata.firstExternal, true);
  assert.equal(iniziata.dossier.lifecycle.mobilityStartedAt, "2026-09-15T09:30:00.000Z");
  assert.equal(iniziata.dossier.lifecycle.firstExternalAt, "2026-09-15T09:30:00.000Z");
  assert.equal(puro.versioneCorrenteLA(iniziata.dossier).lockedAt, "2026-09-15T09:30:00.000Z");
  assert.deepEqual(iniziata.dossier.confirmationsByVersion, {});
  const modificabile = puro.preparaModificaVersioneLA(iniziata.dossier, {
    at: "2026-09-16T00:00:00Z",
  });
  assert.equal(modificabile.versions.length, 2);
  const rientro = puro.registraFattoLifecycleLA(modificabile, "returnedAt", {
    markedAt: "2027-02-01",
  });
  assert.equal(rientro.firstExternal, false);
  assert.equal(puro.versioneCorrenteLA(rientro.dossier).lockReason, "returnedAt");
  assert.deepEqual(rientro.dossier.confirmationsByVersion, {});
  assert.equal(puro.registraFattoLifecycleLA(fixture.dossier, "inventato", {}).error, "unknown-lifecycle-fact");
});

test("LA assegnazione: cambio libero prima degli eventi, conferma forte e archivio dopo", () => {
  const uno = creaDossierCompleto();
  let la = puro.assegnaDossierLA(uno.la, uno.dossierId, "2026/27", {}).la;
  const due = puro.creaDossierLA(la, {
    metaId: "meta-2", meta: { id: "meta-2", universita: "Seconda" },
    university: "cafoscari", cycle: "2026/27",
  });
  la = puro.assegnaDossierLA(due.la, due.dossierId, "2026/27", {} ).la;
  assert.equal(la.assignedDossierIdByCycle["2026/27"], due.dossierId);
  const evento = puro.registraFattoEsternoLA(la.dossiersById[due.dossierId], "sent-home", {});
  la.dossiersById[due.dossierId] = evento.dossier;
  assert.equal(puro.assegnaDossierLA(la, uno.dossierId, "2026/27", {}).error, "strong-confirmation-required");
  const forte = puro.assegnaDossierLA(la, uno.dossierId, "2026/27", { strongConfirmation: true });
  assert.equal(forte.ok, true);
  assert.ok(forte.la.dossiersById[due.dossierId].archivedAt);
  assert.ok(forte.la.dossiersById[due.dossierId].confirmationsByVersion);
});

test("LA assegnazione: i fatti lifecycle legacy senza firstExternalAt richiedono conferma forte", () => {
  const uno = creaDossierCompleto();
  const due = puro.creaDossierLA(uno.la, {
    metaId: "meta-2", meta: { id: "meta-2", universita: "Seconda" },
    university: "cafoscari", cycle: "2026/27",
  });
  let la = puro.assegnaDossierLA(due.la, uno.dossierId, "2026/27", {}).la;
  la.dossiersById[uno.dossierId].lifecycle.mobilityStartedAt = "2026-10-01";
  assert.equal(puro.haFattiEsterniLA(la.dossiersById[uno.dossierId]), true);
  assert.equal(
    puro.assegnaDossierLA(la, due.dossierId, "2026/27", {}).error,
    "strong-confirmation-required"
  );
});

test("LA nuovo ciclo: riusa la libreria ma non corsi host, fatti, conferme o assegnazione", () => {
  const fixture = creaDossierCompleto();
  fixture.la.assignedDossierIdByCycle["2026/27"] = fixture.dossierId;
  fixture.dossier.lifecycle.mobilityStartedAt = "2026-10-01";
  fixture.dossier.confirmationsByVersion[fixture.versione.versionId] = { "sent-home": { versionId: fixture.versione.versionId } };
  const nuovo = puro.duplicaDossierNuovoCicloLA(fixture.la, fixture.dossierId, "2027/28");
  const dossier = nuovo.la.dossiersById[nuovo.dossierId];
  const versione = puro.versioneCorrenteLA(dossier);
  assert.equal(versione.homeExamSnapshots.length, 1);
  assert.equal(versione.hostCourseSnapshots.length, 0);
  assert.deepEqual(dossier.lifecycle, {});
  assert.deepEqual(dossier.confirmationsByVersion, {});
  assert.equal(nuovo.la.assignedDossierIdByCycle["2027/28"], undefined);
  const ripetuto = puro.duplicaDossierNuovoCicloLA(nuovo.la, fixture.dossierId, "2027/28");
  assert.equal(ripetuto.created, false);
  assert.equal(ripetuto.dossierId, nuovo.dossierId);
  assert.equal(puro.versioneCorrenteLA(ripetuto.la.dossiersById[ripetuto.dossierId]).homeExamSnapshots.length, 1);
});

test("LA regole: ciclo, scope, metadati e stale gate non vengono riusati", () => {
  assert.equal(puro.filtraRegoleLA(REGOLE, {
    university: "sapienza", cycle: "2027/28", scope: "all", asOf: "2026-08-02",
  }).state, "verify");
  const regolaSintetica = {
    ...structuredClone(REGOLE[0]),
    id: "test-scope-giurisprudenza",
    scope: "giurisprudenza",
    severity: "info",
    title: "Regola sintetica di ambito",
    message: "Solo per provare il filtro.",
  };
  const regoleGenerali = puro.filtraRegoleLA([regolaSintetica], {
    university: "sapienza", cycle: "2026/27", scope: "all", asOf: "2026-08-02",
  });
  assert.equal(regoleGenerali.state, "verify");
  const regoleGiurisprudenza = puro.filtraRegoleLA([regolaSintetica], {
    university: "sapienza", cycle: "2026/27", scope: "giurisprudenza", asOf: "2026-08-02",
  });
  assert.equal(regoleGiurisprudenza.state, "verified");
  assert.deepEqual(regoleGiurisprudenza.rules.map(r => r.id), ["test-scope-giurisprudenza"]);
  assert.equal(puro.filtraRegoleLA(REGOLE, {
    university: "sapienza", cycle: "2026/27", scope: "all", asOf: "2028-01-01",
  }).state, "verify");
  const rotta = structuredClone(REGOLE[0]); rotta.sources = [{ url: "http://non-sicuro", title: "x" }];
  assert.equal(puro.filtraRegoleLA([rotta], {
    university: "sapienza", cycle: "2026/27", scope: "all", asOf: "2026-08-02",
  }).state, "verify");
  assert.equal(puro.filtraRegoleLA([REGOLE[0], rotta], {
    university: "sapienza", cycle: "2026/27", scope: "all", asOf: "2026-08-02",
  }).state, "verify");
});

test("LA Ca' Foscari: i 30 giorni si calcolano solo dalla data lezioni inserita", () => {
  const regola = REGOLE.find(r => r.id === "cf-change-30-days");
  assert.equal(puro.calcolaScadenzaRelativaLA(regola, {}), null);
  assert.equal(
    puro.calcolaScadenzaRelativaLA(regola, { classesStartedAt: "2026-10-01" }),
    "2026-10-31T00:00:00.000Z"
  );
});

test("LA matching gate: dati incompleti, stale, inaccessibili o non revisionati non rendono", () => {
  const valida = {
    university: "sapienza", scope: "giurisprudenza", cycle: "2026/27",
    reusable: false, verifiedAt: "2026-08-02", humanReviewed: true, reviewer: "Revisore umano",
    sources: {
      home: { url: "https://uni.example/home", title: "Fonte home sintetica", official: true, accessible: true, stable: true },
      host: { url: "https://host.example/course", title: "Fonte host sintetica", official: true, accessible: true, stable: true },
    },
    rationale: { contents: "x", credits: "x", semester: "x", language: "x", missingData: "nessuno" },
  };
  const contesto = { university: "sapienza", scope: "giurisprudenza", cycle: "2026/27", asOf: "2026-08-02" };
  assert.equal(puro.filtraSuggerimentiLA([valida], contesto).length, 1);
  for (const muta of [
    v => { v.humanReviewed = false; },
    v => { delete v.reusable; },
    v => { v.sources.host.accessible = false; },
    v => { v.sources.host.official = false; },
    v => { delete v.sources.home.title; },
    v => { delete v.rationale.language; },
    v => { v.verifiedAt = "2024-01-01"; },
  ]) {
    const voce = structuredClone(valida); muta(voce);
    assert.equal(puro.filtraSuggerimentiLA([voce], contesto).length, 0);
  }
  assert.equal(caricaDato("js/la-suggerimenti.js", "ERASMUSWIZ_LA_SUGGERIMENTI").length, 0);
});

test("LA runtime: app usa la data corrente per i gate, non una data congelata", () => {
  const app = fs.readFileSync(path.join(RADICE, "js/app.js"), "utf8");
  assert.doesNotMatch(app, /asOf\s*:\s*["']2026-08-02["']/);
});

test("LA riconoscimento: deve riferirsi alla versione approvata e segnala titoli, crediti e assenze", () => {
  const fixture = creaDossierCompleto("sapienza");
  const approvato = puro.registraFattoEsternoLA(fixture.dossier, "home-approved", { markedAt: "2026-09-01" }).dossier;
  const versione = puro.versioneCorrenteLA(approvato);
  const rec = {
    approvedVersionId: versione.versionId,
    hostCourses: [{
      hostCourseSnapshotId: versione.hostCourseSnapshots[0].snapshotId,
      transcriptStatus: "passed", transcriptTitle: "", transcriptCredits: 6,
    }],
    homeExams: [],
  };
  const confronto = puro.confrontaRiconoscimentoLA(approvato, rec);
  assert.equal(confronto.valid, true);
  assert.deepEqual(confronto.mismatches.map(m => m.type), [
    "missing-transcript-title", "credits", "missing-home-outcome",
  ]);
  const assente = structuredClone(rec);
  assente.hostCourses[0].transcriptStatus = "absent";
  assert.deepEqual(
    puro.confrontaRiconoscimentoLA(approvato, assente).mismatches.map(m => m.type),
    ["missing-host-activity", "missing-home-outcome"]
  );
  assert.equal(puro.confrontaRiconoscimentoLA(fixture.dossier, rec).error, "approved-version-not-confirmed");
});

test("LA backup: envelope valido, JSON corrotto, schema futuro e altro ateneo noto", () => {
  const fixture = creaDossierCompleto();
  const backup = puro.creaBackupLA({
    university: "cafoscari", cycle: "2026/27", payload: fixture.la,
    exportedAt: "2026-08-02T12:00:00Z",
  });
  assert.equal(backup.format, "erasmuswiz-la-backup");
  assert.match(backup.privacyWarning, /dati accademici/i);
  assert.equal(puro.analizzaBackupLA("{", ["cafoscari"]).error, "malformed-json");
  assert.equal(puro.analizzaBackupLA({ ...backup, schemaVersion: 99 }, ["cafoscari"]).error, "future-schema");
  assert.equal(puro.analizzaBackupLA({ ...backup, cycle: "" }, ["cafoscari"]).error, "invalid-cycle");
  assert.equal(puro.analizzaBackupLA({ ...backup, exportedAt: "" }, ["cafoscari"]).error, "invalid-exported-at");
  const cross = puro.analizzaBackupLA({ ...backup, university: "sapienza" }, ["cafoscari", "sapienza"]);
  assert.equal(cross.ok, true);
  assert.equal(cross.university, "sapienza");
  assert.equal(cross.counts.dossier, 1);
});

test("LA CTA: errore salvataggio, blocco, fase e backup rispettano l'ordine", () => {
  assert.equal(puro.scegliCtaLA({ saveError: true }).code, "recover-unsaved");
  assert.equal(puro.scegliCtaLA({
    readiness: { state: "incomplete", missingCodes: ["no-home-course"] },
    phase: "preparation", backupDue: true,
  }).code, "fix:no-home-course");
  assert.equal(puro.scegliCtaLA({
    readiness: { state: "ready", missingCodes: [] }, phase: "mobility", backupDue: true,
  }).code, "review-changes");
  assert.equal(puro.scegliCtaLA({
    readiness: { state: "ready", missingCodes: [] }, phase: "mobility",
    needsResubmission: true, backupDue: true,
  }).code, "resubmit-current");
  assert.equal(puro.scegliCtaLA({
    readiness: { state: "ready", missingCodes: [] }, phase: "mobility",
    phaseActionDue: false, backupDue: true,
  }).code, "backup-due");
  assert.equal(puro.scegliCtaLA({
    readiness: { state: "ready", missingCodes: [] }, phase: "recognition",
  }).code, "record-recognition");
});

test("LA analytics: nel codice i soli nomi evento ammessi sono fissi", () => {
  const app = fs.readFileSync(path.join(RADICE, "js/app.js"), "utf8");
  const blocco = app.slice(app.indexOf("const LA_EVENTI_ANALYTICS"), app.indexOf("// IDONEITÀ v2"));
  const nomi = [...blocco.matchAll(/laAnalytics(?:UnaVolta)?\(["'](la-[a-z-]+)["']/g)].map(m => m[1]);
  const ammessi = new Set([
    "la-open", "la-plan-confirmed", "la-ready", "la-version-created",
    "la-recognition-closed", "la-suggestion-used",
  ]);
  assert.ok(nomi.length > 0);
  assert.deepEqual([...new Set(nomi.filter(nome => !ammessi.has(nome)))], []);
  const invio = blocco.slice(blocco.indexOf("function laAnalytics(nome)"), blocco.indexOf("function laAnalyticsUnaVolta"));
  assert.match(invio, /count\(\{ path: nome, event: true \}\)/);
  assert.equal((invio.match(/count\(/g) || []).length, 1);
});
