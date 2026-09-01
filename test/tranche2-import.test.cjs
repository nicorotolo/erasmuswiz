// Tranche 2 pre-Bruno — importazione multipla, fotografia riepilogativa e
// ricostruzione storica (PLAN.md, addendum 2026-08-07, tranche 2 §1-§7).
//
// Le prove qui sotto guardano i FATTI prodotti, non il fatto che una funzione
// venga chiamata: contano righe, versioni e conferme, e provano anche i casi
// in cui la scrittura NON deve avvenire.
const test = require("node:test");
const assert = require("node:assert/strict");
const puro = require("../js/puro.js");

const ORA = "2026-08-07T10:00:00.000Z";
const DOPO = "2026-08-07T12:00:00.000Z";

function laConDossier({ bloccata = false } = {}) {
  let la = puro.creaLaV2();
  la.examLibrary.e1 = {
    id: "e1", codice: "CASA01", nome: "Diritto europeo", cfu: 6, stato: "da-sostenere",
  };
  const creato = puro.creaDossierLA(la, {
    metaId: "meta-ucp",
    meta: { id: "meta-ucp", universita: "Universidade Católica Portuguesa", citta: "Lisbona", paese: "Portogallo" },
    university: "sapienza",
    cycle: "2025/26",
    at: ORA,
  });
  la = creato.la;
  const dossier = la.dossiersById[creato.dossierId];
  const versione = puro.versioneCorrenteLA(dossier);
  versione.homeExamSnapshots.push({
    snapshotId: `${versione.versionId}:home-1`, sourceExamId: "e1",
    codice: "CASA01", nome: "Diritto europeo", cfu: 6, stato: "da-sostenere",
  });
  versione.hostCourseSnapshots.push({
    snapshotId: `${versione.versionId}:host-1`, codice: "144001", nome: "European Law",
    ects: 6, lingua: "English", semestre: "1", officialUrl: "https://example.edu/eu",
    availabilityState: "disponibile", verifiedAt: "2026-08-02", sourceDate: "2026-08-02",
  });
  versione.mappings.push({
    mappingId: `${versione.versionId}:map-1`,
    homeExamSnapshotIds: [`${versione.versionId}:home-1`],
    hostCourseSnapshotIds: [`${versione.versionId}:host-1`],
  });
  if (bloccata) {
    versione.lockedAt = ORA;
    versione.lockReason = "sent-home";
    dossier.confirmationsByVersion = {
      [versione.versionId]: {
        "sent-home": { versionId: versione.versionId, markedAt: ORA, subject: "sent-home", note: "" },
      },
    };
    dossier.lifecycle = { firstExternalAt: ORA };
  }
  return { la: puro.normalizzaLaV2(la), dossierId: creato.dossierId };
}

function importaHost(righe) {
  const anteprima = puro.parseImportLA(righe, { tipo: "host" });
  const finale = puro.finalizzaImportLA(anteprima, {});
  return finale.items;
}

// ---------------------------------------------------------------
// §1 — formato chiuso e limiti applicati PRIMA del parsing
// ---------------------------------------------------------------

test("§1 il formato accetta Nome;Crediti, ;Nome;Crediti e Codice;Nome;Crediti", () => {
  const anteprima = puro.parseImportLA(
    "Diritto internazionale;6\n;Public International Law;6\n144213;Introduction to Global Law;6",
    { tipo: "host" }
  );
  assert.equal(anteprima.ok, true);
  assert.deepEqual(anteprima.rows.map(r => r.kind), ["valid", "valid", "valid"]);
  assert.deepEqual(anteprima.rows.map(r => r.values.codice), ["", "", "144213"]);
  assert.deepEqual(anteprima.rows.map(r => r.values.crediti), [6, 6, 6]);
});

test("§1 il tab vale come il punto e virgola", () => {
  const anteprima = puro.parseImportLA("144297\tPublic International Law Code\t6", { tipo: "host" });
  assert.equal(anteprima.rows[0].kind, "valid");
  assert.deepEqual(anteprima.rows[0].values, {
    codice: "144297", nome: "Public International Law Code", crediti: 6,
  });
});

test("§1 la virgola resta decimale e non divide colonne", () => {
  const decimale = puro.parseImportLA("Economia aziendale;7,5", { tipo: "casa" });
  assert.equal(decimale.rows[0].kind, "valid");
  assert.equal(decimale.rows[0].values.crediti, 7.5);

  const fintaColonna = puro.parseImportLA("Economia aziendale, 7", { tipo: "casa" });
  assert.equal(fintaColonna.rows[0].kind, "ambiguous");
  assert.ok(fintaColonna.rows[0].issues.includes("ambiguous-columns"));
  assert.equal(fintaColonna.rows[0].requiresDecision, true);
});

test("§1 oltre 200 righe l'incolla è rifiutato per intero, non troncato", () => {
  const righe = Array.from({ length: 201 }, (_, i) => `Corso ${i + 1};6`).join("\n");
  const esito = puro.parseImportLA(righe, { tipo: "host" });
  assert.equal(esito.ok, false);
  assert.equal(esito.error, "too-many-rows");
  assert.equal(esito.actual, 201);
  assert.equal(esito.rows.length, 0);

  const limite = puro.parseImportLA(
    Array.from({ length: 200 }, (_, i) => `Corso ${i + 1};6`).join("\n"), { tipo: "host" }
  );
  assert.equal(limite.ok, true);
  assert.equal(limite.rows.length, 200);
});

test("§1 oltre 100 KiB complessivi l'incolla è rifiutato prima del parsing", () => {
  // Campi dentro il limite dei 500 caratteri: qui a sfondare è la dimensione
  // complessiva, non la singola cella, così la prova non misura due cose.
  const riga = `${"a".repeat(500)};${"b".repeat(500)};6`;
  const sotto = Array.from({ length: 100 }, () => riga).join("\n");
  assert.ok(puro.byteUtf8LA(sotto) < puro.LA_IMPORT_LIMITI.byte);
  assert.equal(puro.parseImportLA(sotto, { tipo: "host" }).ok, true);

  const sopra = Array.from({ length: 200 }, () => riga).join("\n");
  assert.ok(puro.byteUtf8LA(sopra) > puro.LA_IMPORT_LIMITI.byte);
  const esito = puro.parseImportLA(sopra, { tipo: "host" });
  assert.equal(esito.ok, false);
  assert.equal(esito.error, "too-large");
  assert.equal(esito.rows.length, 0);
});

test("§1 il conto dei byte è UTF-8, non il numero di caratteri", () => {
  assert.equal(puro.byteUtf8LA("abc"), 3);
  assert.equal(puro.byteUtf8LA("è"), 2);
  assert.equal(puro.byteUtf8LA("€"), 3);
  assert.equal(puro.byteUtf8LA("😀"), 4);
});

test("§1 un campo oltre 500 caratteri e un URL oltre 2048 fermano l'importazione", () => {
  const campo = puro.parseImportLA(`${"x".repeat(501)};6`, { tipo: "host" });
  assert.equal(campo.ok, false);
  assert.equal(campo.error, "field-too-long");
  assert.deepEqual(campo.lines, [1]);

  const campoAlLimite = puro.parseImportLA(`${"x".repeat(500)};6`, { tipo: "host" });
  assert.equal(campoAlLimite.ok, true);

  // Un URL ha un'allowance più larga: 2048, non 500.
  const urlLungoMaValido = "https://example.edu/" + "a".repeat(2000);
  assert.equal(puro.parseImportLA(`${urlLungoMaValido};6`, { tipo: "host" }).ok, true);
  const urlTroppoLungo = "https://example.edu/" + "a".repeat(2100);
  const esitoUrl = puro.parseImportLA(`${urlTroppoLungo};6`, { tipo: "host" });
  assert.equal(esitoUrl.ok, false);
  assert.equal(esitoUrl.error, "url-too-long");
});

// ---------------------------------------------------------------
// §2 — anteprima senza perdite silenziose
// ---------------------------------------------------------------

test("§2 l'anteprima distingue valide, incomplete, ambigue e duplicate", () => {
  const anteprima = puro.parseImportLA(
    [
      "144213;Introduction to Global Law;6",
      "CASA01;Diritto europeo;6",
      "Corso senza crediti;",
      "Corso senza colonne 4",
    ].join("\n"),
    { tipo: "casa", esistenti: [{ id: "e1", codice: "CASA01", nome: "Diritto europeo", cfu: 6 }] }
  );
  assert.deepEqual(anteprima.counts, { valid: 1, incomplete: 1, ambiguous: 1, duplicate: 1 });
  assert.equal(anteprima.rows[1].duplicateId, "e1");
  assert.equal(anteprima.unresolvedCount, 3);
});

test("§2 una riga problematica senza decisione non entra e non sparisce", () => {
  const anteprima = puro.parseImportLA("Corso senza crediti;\n144213;Global Law;6", { tipo: "host" });
  const finale = puro.finalizzaImportLA(anteprima, {});
  assert.equal(finale.items.length, 1);
  assert.equal(finale.unresolvedRows.length, 1);
  assert.equal(finale.unresolvedRows[0].line, 1);
});

test("§2 correggere, escludere o tenere separata sono decisioni esplicite", () => {
  const anteprima = puro.parseImportLA(
    "Corso senza crediti;\nCASA01;Diritto europeo;6\nAltro corso, 3",
    { tipo: "casa", esistenti: [{ id: "e1", codice: "CASA01", nome: "Diritto europeo", cfu: 6 }] }
  );
  const finale = puro.finalizzaImportLA(anteprima, {
    "row-1": { action: "confirm", values: { crediti: "4" } },
    "row-2": { action: "keep-separate" },
    "row-3": { action: "exclude" },
  });
  assert.equal(finale.unresolvedRows.length, 0);
  assert.equal(finale.excludedRows.length, 1);
  assert.deepEqual(finale.items.map(v => [v.nome, v.crediti, v.mergeIntoId]), [
    ["Corso senza crediti", 4, ""],
    ["Diritto europeo", 6, ""],
  ]);
});

test("§2 una correzione che resta incompleta torna irrisolta", () => {
  const anteprima = puro.parseImportLA("Corso senza crediti;", { tipo: "host" });
  const finale = puro.finalizzaImportLA(anteprima, {
    "row-1": { action: "confirm", values: { crediti: "zero" } },
  });
  assert.equal(finale.items.length, 0);
  assert.equal(finale.unresolvedRows.length, 1);
});

// ---------------------------------------------------------------
// §3 — una sola transazione coerente sulla versione modificabile
// ---------------------------------------------------------------

test("§3 su una versione modificabile l'import non crea versioni nuove", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6\n144334;Right to a Fair Trial;3"),
  }, { at: DOPO });
  assert.equal(esito.ok, true);
  assert.equal(esito.createdVersion, false);
  const dossier = esito.la.dossiersById[dossierId];
  assert.equal(dossier.versions.length, 1);
  const versione = puro.versioneCorrenteLA(dossier);
  assert.equal(versione.hostCourseSnapshots.length, 3);
  assert.equal(esito.counts.hostAdded, 2);
});

test("§3 su un dossier bloccato nasce UNA sola versione e l'import finisce lì", () => {
  const { la, dossierId } = laConDossier({ bloccata: true });
  const primaVersione = puro.versioneCorrenteLA(la.dossiersById[dossierId]);
  const esito = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6\n144334;Right to a Fair Trial;3"),
    home: [{ nome: "Analisi delle Politiche Pubbliche", codice: "1052282", crediti: 6 }],
  }, { at: DOPO });
  assert.equal(esito.ok, true);
  assert.equal(esito.createdVersion, true);
  const dossier = esito.la.dossiersById[dossierId];
  assert.equal(dossier.versions.length, 2);
  const bloccata = dossier.versions[0];
  const nuova = puro.versioneCorrenteLA(dossier);
  assert.notEqual(nuova.versionId, primaVersione.versionId);
  // La fotografia precedente non è stata toccata.
  assert.equal(bloccata.hostCourseSnapshots.length, 1);
  assert.equal(bloccata.lockedAt, ORA);
  assert.equal(nuova.hostCourseSnapshots.length, 3);
  assert.equal(nuova.homeExamSnapshots.length, 2);
  assert.equal(nuova.lockedAt, undefined);
  // Le conferme della versione bloccata non si trasferiscono.
  assert.deepEqual(Object.keys(dossier.confirmationsByVersion[nuova.versionId] || {}), []);
});

test("§3 selezionare una versione storica non la modifica", () => {
  const { la, dossierId } = laConDossier({ bloccata: true });
  const storica = puro.versioneCorrenteLA(la.dossiersById[dossierId]).versionId;
  const primo = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6"),
  }, { at: DOPO });
  assert.equal(primo.ok, true);
  const esito = puro.applicaImportLA(primo.la, dossierId, {
    host: importaHost("144297;Public International Law Code;6"),
  }, { at: DOPO, targetVersionId: storica });
  assert.equal(esito.ok, false);
  assert.equal(esito.error, "historical-version");
  assert.equal(esito.la, undefined);
});

test("§3 la transazione collega i sourceExamId e aggiorna la libreria una volta sola", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, {
    home: [
      { nome: "Analisi delle Politiche Pubbliche", codice: "1052282", crediti: 6 },
      { nome: "Diritto dell'Immigrazione", codice: "10612400", crediti: 6 },
    ],
  }, { at: DOPO });
  assert.equal(esito.ok, true);
  const versione = puro.versioneCorrenteLA(esito.la.dossiersById[dossierId]);
  const nuovi = versione.homeExamSnapshots.filter(s => s.importBatchId);
  assert.equal(nuovi.length, 2);
  nuovi.forEach(snap => {
    assert.ok(snap.sourceExamId, "ogni snapshot importato punta alla libreria");
    assert.ok(esito.la.examLibrary[snap.sourceExamId], "la voce di libreria esiste davvero");
  });
  assert.equal(Object.keys(esito.la.examLibrary).length, 3);
});

test("§3 un merge verso un id inesistente importa comunque, non perde la riga", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, {
    home: [{ nome: "Corso nuovo", crediti: 6, mergeIntoId: "exam-che-non-esiste" }],
  }, { at: DOPO });
  assert.equal(esito.ok, true);
  assert.equal(esito.counts.homeAdded, 1);
  assert.equal(esito.counts.homeMerged, 0);
  assert.equal(Object.keys(esito.la.examLibrary).length, 2);
  assert.equal(esito.la.examLibrary["exam-che-non-esiste"], undefined);
});

test("§3 un merge verso un esame esistente aggiorna, non duplica", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, {
    home: [{ nome: "Diritto europeo (nuovo nome)", codice: "CASA01", crediti: 9, mergeIntoId: "e1" }],
  }, { at: DOPO });
  assert.equal(esito.ok, true);
  assert.equal(esito.counts.homeMerged, 1);
  assert.equal(esito.counts.homeAdded, 0);
  assert.equal(Object.keys(esito.la.examLibrary).length, 1);
  assert.equal(esito.la.examLibrary.e1.cfu, 9);
  const versione = puro.versioneCorrenteLA(esito.la.dossiersById[dossierId]);
  assert.equal(versione.homeExamSnapshots.length, 1);
  assert.equal(versione.homeExamSnapshots[0].cfu, 9);
});

test("§3 una riga senza crediti non arriva mai alla transazione", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, {
    host: [{ nome: "Corso rotto", crediti: 0 }],
  }, { at: DOPO });
  assert.equal(esito.ok, false);
  assert.equal(esito.error, "invalid-row");
  assert.equal(esito.la, undefined);
});

test("§3 un import vuoto non è una transazione riuscita", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, { home: [], host: [] }, { at: DOPO });
  assert.equal(esito.ok, false);
  assert.equal(esito.error, "empty-import");
});

test("§3 un dossier archiviato o inesistente rifiuta l'import", () => {
  const { la, dossierId } = laConDossier();
  assert.equal(puro.applicaImportLA(la, "non-esiste", {
    host: importaHost("144213;Global Law;6"),
  }, { at: DOPO }).error, "missing-dossier");
  const archiviato = puro.normalizzaLaV2(la);
  archiviato.dossiersById[dossierId].archivedAt = DOPO;
  assert.equal(puro.applicaImportLA(archiviato, dossierId, {
    host: importaHost("144213;Global Law;6"),
  }, { at: DOPO }).error, "archived-dossier");
});

// ---------------------------------------------------------------
// §7 — nessuna equivalenza automatica
// ---------------------------------------------------------------

test("§7 l'importazione crea righe, non corrispondenze", () => {
  const { la, dossierId } = laConDossier();
  const prima = puro.versioneCorrenteLA(la.dossiersById[dossierId]).mappings.length;
  const esito = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6"),
    home: [{ nome: "Analisi delle Politiche Pubbliche", crediti: 6 }],
  }, { at: DOPO });
  const versione = puro.versioneCorrenteLA(esito.la.dossiersById[dossierId]);
  assert.equal(versione.mappings.length, prima, "nessun gruppo nuovo");
  const scollegati = puro.elementiScollegatiLA(versione);
  assert.equal(scollegati.host.length, 1);
  assert.equal(scollegati.home.length, 1);
  // Il corso importato nasce da verificare: importare non è verificare.
  const importato = versione.hostCourseSnapshots.find(c => c.importBatchId);
  assert.equal(importato.availabilityState, "da-verificare");
  assert.equal(importato.officialUrl, "");
});

test("§7 un gruppo monco non collega niente", () => {
  const versione = {
    homeExamSnapshots: [{ snapshotId: "h1", nome: "A", cfu: 6 }],
    hostCourseSnapshots: [{ snapshotId: "k1", nome: "B", ects: 6, availabilityState: "disponibile" }],
    mappings: [{ mappingId: "m1", homeExamSnapshotIds: ["h1"], hostCourseSnapshotIds: [] }],
  };
  assert.deepEqual(puro.elementiScollegatiLA(versione), { home: ["h1"], host: ["k1"] });
});

// ---------------------------------------------------------------
// §4 — prima la fotografia, poi i fatti storici
// ---------------------------------------------------------------

test("§4 il riepilogo conta righe, totali e corsi senza fonte", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6\n144334;Right to a Fair Trial;3"),
  }, { at: DOPO });
  const riepilogo = esito.summary;
  assert.equal(riepilogo.hostCount, 3);
  assert.equal(riepilogo.hostActiveCount, 3);
  assert.equal(riepilogo.hostCredits, 15);
  assert.equal(riepilogo.homeCount, 1);
  assert.equal(riepilogo.homeCredits, 6);
  assert.equal(riepilogo.unlinkedHost, 2);
  assert.equal(riepilogo.hostWithoutSource, 2);
});

test("§4 i fatti storici non si possono dichiarare prima della fotografia", () => {
  const { la, dossierId } = laConDossier();
  const esito = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "sent-home", occurredOn: "2026-03-01" }],
    markedAt: DOPO,
  });
  assert.equal(esito.ok, false);
  assert.equal(esito.error, "summary-not-confirmed");
});

test("§4 la conferma si rifiuta se i numeri sono cambiati sotto gli occhi", () => {
  const { la, dossierId } = laConDossier();
  const importato = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6"),
  }, { at: DOPO });
  const vecchi = { hostCount: 1, hostCredits: 6, homeCount: 1, homeCredits: 6, hostActiveCount: 1 };
  const rifiutata = puro.confermaFotografiaImportLA(importato.la, dossierId, {
    at: DOPO, counts: vecchi,
  });
  assert.equal(rifiutata.ok, false);
  assert.equal(rifiutata.error, "counts-changed");
  assert.equal(rifiutata.summary.hostCount, 2);

  const buona = puro.confermaFotografiaImportLA(importato.la, dossierId, {
    at: DOPO, counts: rifiutata.summary,
  });
  assert.equal(buona.ok, true);
  assert.equal(
    puro.versioneCorrenteLA(buona.la.dossiersById[dossierId]).reconstruction.summaryConfirmedAt,
    DOPO
  );
});

test("§4 un import successivo invalida la fotografia già confermata", () => {
  const { la, dossierId } = laConDossier();
  const importato = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6"),
  }, { at: DOPO });
  const confermata = puro.confermaFotografiaImportLA(importato.la, dossierId, { at: DOPO });
  assert.equal(puro.fotografiaConfermataLA(
    puro.versioneCorrenteLA(confermata.la.dossiersById[dossierId])
  ), true);
  const secondo = puro.applicaImportLA(confermata.la, dossierId, {
    host: importaHost("144297;Public International Law Code;6"),
  }, { at: DOPO });
  assert.equal(puro.fotografiaConfermataLA(
    puro.versioneCorrenteLA(secondo.la.dossiersById[dossierId])
  ), false);
});

// ---------------------------------------------------------------
// §5-§6 — fatti indipendenti, cronologia onesta, versioni aderenti
// ---------------------------------------------------------------

function laPronta() {
  const { la, dossierId } = laConDossier();
  const importato = puro.applicaImportLA(la, dossierId, {
    host: importaHost("144213;Introduction to Global Law;6"),
  }, { at: DOPO });
  const confermata = puro.confermaFotografiaImportLA(importato.la, dossierId, { at: DOPO });
  return { la: confermata.la, dossierId, versionId: confermata.versionId };
}

test("§5 Bozza significa nessun fatto esterno: niente blocco, niente versione", () => {
  const { la, dossierId } = laPronta();
  const prima = la.dossiersById[dossierId].versions.length;
  const esito = puro.applicaFattiRicostruzioneLA(la, dossierId, { facts: [], markedAt: DOPO });
  assert.equal(esito.ok, true);
  assert.equal(esito.locked, false);
  assert.equal(esito.newVersionId, null);
  const dossier = esito.la.dossiersById[dossierId];
  assert.equal(dossier.versions.length, prima);
  assert.equal(puro.versioneCorrenteLA(dossier).lockedAt, undefined);
});

test("§5 una scelta non ne inventa un'altra", () => {
  const { la, dossierId, versionId } = laPronta();
  const esito = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "sent-home", occurredOn: "2026-03-01" }],
    markedAt: DOPO,
  });
  assert.equal(esito.ok, true);
  const conferme = esito.la.dossiersById[dossierId].confirmationsByVersion[versionId];
  assert.deepEqual(Object.keys(conferme), ["sent-home"]);
  assert.equal(conferme["home-approved"], undefined);
  assert.equal(conferme["host-approved"], undefined);
});

test("§5 markedAt resta sempre, occurredOn può mancare e si dichiara ignoto", () => {
  const { la, dossierId, versionId } = laPronta();
  const esito = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [
      { key: "sent-home", occurredOn: "2026-03-01" },
      { key: "home-approved", occurredOn: "" },
    ],
    markedAt: DOPO,
  });
  assert.equal(esito.ok, true);
  const conferme = esito.la.dossiersById[dossierId].confirmationsByVersion[versionId];
  assert.equal(conferme["sent-home"].occurredOn, "2026-03-01");
  assert.equal(conferme["sent-home"].occurredOnUnknown, false);
  assert.equal(conferme["sent-home"].markedAt, DOPO);
  assert.equal(conferme["home-approved"].occurredOn, "");
  assert.equal(conferme["home-approved"].occurredOnUnknown, true);
  assert.equal(conferme["home-approved"].markedAt, DOPO);
  // La fotografia si blocca comunque, anche con la data dell'evento ignota.
  assert.equal(esito.locked, true);
});

test("§5 tre fatti insieme producono un solo blocco e una sola versione nuova", () => {
  const { la, dossierId, versionId } = laPronta();
  const prima = la.dossiersById[dossierId].versions.length;
  const esito = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [
      { key: "sent-home", occurredOn: "2026-03-01" },
      { key: "home-approved", occurredOn: "2026-03-10" },
      { key: "host-approved", occurredOn: "" },
    ],
    markedAt: DOPO,
  });
  assert.equal(esito.ok, true);
  const dossier = esito.la.dossiersById[dossierId];
  assert.equal(dossier.versions.length, prima + 1);
  const bloccata = dossier.versions.find(v => v.versionId === versionId);
  assert.equal(bloccata.lockedAt, DOPO);
  assert.equal(bloccata.lockReason, "reconstruction");
  assert.equal(Object.keys(dossier.confirmationsByVersion[versionId]).length, 3);
  // Nessun fatto scivola sulla versione appena creata.
  assert.equal(dossier.confirmationsByVersion[esito.newVersionId], undefined);
  const nuova = puro.versioneCorrenteLA(dossier);
  assert.equal(nuova.versionId, esito.newVersionId);
  assert.equal(nuova.lockedAt, undefined);
  assert.deepEqual(Object.values(nuova.preflight), [false, false, false]);
  assert.equal(dossier.lifecycle.firstExternalAt, DOPO);
});

test("§5 un fatto sconosciuto o ripetuto non scrive niente", () => {
  const { la, dossierId } = laPronta();
  const sconosciuto = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "entered-portal" }], markedAt: DOPO,
  });
  assert.equal(sconosciuto.ok, false);
  assert.equal(sconosciuto.error, "unknown-fact");
  assert.equal(sconosciuto.la, undefined);

  const ripetuto = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "sent-home" }, { key: "sent-home" }], markedAt: DOPO,
  });
  assert.equal(ripetuto.error, "duplicate-fact");

  const dataStorta = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "sent-home", occurredOn: "01/03/2026" }], markedAt: DOPO,
  });
  assert.equal(dataStorta.error, "invalid-occurred-on");
});

test("§6 dopo il blocco la nuova versione resta modificabile e riparte pulita", () => {
  const { la, dossierId } = laPronta();
  const dopoFatti = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "sent-home", occurredOn: "2026-03-01" }], markedAt: DOPO,
  });
  const esito = puro.applicaImportLA(dopoFatti.la, dossierId, {
    host: importaHost("144462;International Arbitration;3"),
  }, { at: DOPO });
  assert.equal(esito.ok, true);
  // La versione di lavoro esiste già: l'import non ne crea una terza.
  assert.equal(esito.createdVersion, false);
  assert.equal(esito.la.dossiersById[dossierId].versions.length, 3 - 1);
  assert.equal(puro.fotografiaConfermataLA(
    puro.versioneCorrenteLA(esito.la.dossiersById[dossierId])
  ), false);
});

test("§6 i fatti si applicano solo alla versione corrente, mai a una storica", () => {
  const { la, dossierId, versionId } = laPronta();
  const dopoFatti = puro.applicaFattiRicostruzioneLA(la, dossierId, {
    facts: [{ key: "sent-home", occurredOn: "2026-03-01" }], markedAt: DOPO,
  });
  const secondo = puro.applicaFattiRicostruzioneLA(dopoFatti.la, dossierId, {
    snapshotVersionId: versionId,
    facts: [{ key: "home-approved" }],
    markedAt: DOPO,
  });
  assert.equal(secondo.ok, false);
  assert.equal(secondo.error, "historical-version");
  const conferme = dopoFatti.la.dossiersById[dossierId].confirmationsByVersion[versionId];
  assert.deepEqual(Object.keys(conferme), ["sent-home"]);
});
