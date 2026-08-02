const { test, expect } = require("@playwright/test");

const PAGINA = "/index.html";

function raccogliErrori(page) {
  const errori = [];
  page.on("console", messaggio => {
    if (messaggio.type() === "error") errori.push(`console: ${messaggio.text()}`);
  });
  page.on("pageerror", errore => errori.push(`pagina: ${errore.message}`));
  return errori;
}

function laCompleto(ateneo, { passed = false } = {}) {
  const dossierId = "la-1";
  const versionId = `${dossierId}:v1`;
  return {
    schemaVersion: 2,
    nextId: 2,
    examLibrary: {
      e1: {
        id: "e1", codice: "CASA01", nome: "Diritto europeo",
        cfu: 6, stato: passed ? "gia-sostenuto" : "da-sostenere",
      },
    },
    dossiersById: {
      [dossierId]: {
        id: dossierId,
        metaId: "meta-test",
        meta: { id: "meta-test", universita: "Université Test", citta: "Paris", paese: "Francia" },
        university: ateneo,
        cycle: "2026/27",
        createdAt: "2026-08-02T10:00:00.000Z",
        updatedAt: "2026-08-02T10:00:00.000Z",
        versions: [{
          versionId, number: 1, createdAt: "2026-08-02T10:00:00.000Z",
          reason: "initial", note: "",
          homeExamSnapshots: [{
            snapshotId: `${versionId}:home-1`, sourceExamId: "e1",
            codice: "CASA01", nome: "Diritto europeo", cfu: 6,
            stato: passed ? "gia-sostenuto" : "da-sostenere",
          }],
          hostCourseSnapshots: [{
            snapshotId: `${versionId}:host-1`, codice: "", nome: "European Law",
            ects: 7.5, lingua: "English", semestre: "1",
            officialUrl: "https://example.edu/law", availabilityState: "disponibile",
            verifiedAt: "2026-08-02", sourceDate: "2026-08-02",
          }],
          mappings: [{
            mappingId: `${versionId}:map-1`,
            homeExamSnapshotIds: [`${versionId}:home-1`],
            hostCourseSnapshotIds: [`${versionId}:host-1`],
          }],
          preflight: {
            "course-data-checked": true,
            "credits-compared": true,
            "mapping-reviewed": true,
          },
        }],
        currentVersionId: versionId,
        confirmationsByVersion: {},
        lifecycle: {},
      },
    },
    openDossierId: dossierId,
    assignedDossierIdByCycle: {},
  };
}

async function preparaZaino(page, ateneo, la, { ateneoSalvato = ateneo } = {}) {
  await page.addInitScript(({ ateneo, ateneoSalvato, la }) => {
    if (localStorage.getItem("erasmuswiz-zaino")) return;
    localStorage.clear(); sessionStorage.clear();
    if (ateneoSalvato) localStorage.setItem("erasmuswiz_ateneo", ateneoSalvato);
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        [ateneo]: {
          profilo: {
            nome: "Ada", area: "0421", dipartimento: ateneo === "sapienza" ? "Giurisprudenza" : "Economia",
            livello: "L", lingue: [], extraUE: false, ricercaTesi: false,
          },
          checklist: {}, metePreferite: [], schedina: [], fase: "selezionato",
          checklistPost: {}, onboardingFatto: true, autoverifica: {},
          zainoCelebrato: true, wizardMete: true,
          la,
          cicloPercorso: "2026/27", cicloDati: "2026/27", storico: {}, schedinaCiclo: {},
        },
      },
    }));
  }, { ateneo, ateneoSalvato, la });
}

for (const ateneo of ["cafoscari", "sapienza"]) {
  test(`LA cold deep link ${ateneo}: guida e piano senza onboarding o selettori vuoti`, async ({ page }) => {
    const errori = raccogliErrori(page);
    await page.addInitScript(() => { localStorage.clear(); sessionStorage.clear(); });
    await page.goto(`${PAGINA}#learning-agreement/${ateneo}`, { waitUntil: "domcontentloaded" });

    await expect(page.locator("#tab-learning-agreement")).toBeVisible();
    await expect(page.locator("#tab-learning-agreement")).toBeFocused();
    await expect(page.locator(".la-stage")).toHaveCount(5);
    await expect(page.locator("#la-v2-app .btn-primary")).toHaveCount(1);
    await expect(page.getByText("Inserisci il tuo piano", { exact: true })).toBeVisible();
    await expect(page.locator("#la-guide")).toContainText(ateneo === "sapienza" ? "Sapienza" : "Ca' Foscari");
    await expect(page.locator("#la-guide")).not.toContainText(
      ateneo === "sapienza" ? "Prima la proposta al coordinatore" : "Gli esami di casa devono essere ancora da sostenere"
    );
    await expect(page.locator(`#la-guide a[href*="${ateneo === "sapienza" ? "unive.it" : "uniroma1.it"}"]`)).toHaveCount(0);
    await expect(page.locator("#home-benvenuto")).toBeHidden();
    await expect(page.locator("#la-meta-select")).toHaveCount(0);
    await expect(page.locator(".la-suggestions")).toHaveCount(0);
    expect(await page.evaluate(() => Object.keys(window.eval("ZAINO.la.dossiersById")).length)).toBe(0);
    expect(await page.evaluate(() => window.ATENEO_ATTIVO)).toBe(ateneo);
    expect(errori).toEqual([]);
  });
}

test("LA piano: anteprima obbligatoria, riga ambigua esplicita e importazione persistente", async ({ page }) => {
  await page.addInitScript(() => {
    if (sessionStorage.getItem("la-test-seeded")) return;
    localStorage.clear(); sessionStorage.clear(); sessionStorage.setItem("la-test-seeded", "1");
  });
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  await page.locator("#la-plan-paste").fill("codice; nome; CFU\nDIR1; Diritto privato; 6\nriga ambigua");
  await page.getByRole("button", { name: "Mostra anteprima" }).click();
  await expect(page.locator(".la-import-row")).toHaveCount(2);
  await expect(page.locator(".la-import-row.ambigua")).toHaveCount(1);
  await page.locator(".la-import-row.ambigua select").selectOption("exclude");
  await page.getByRole("button", { name: "Conferma il piano" }).click();
  await expect(page.locator(".la-exam-row")).toHaveCount(1);
  expect(await page.evaluate(() => Object.keys(window.eval("ZAINO.la.examLibrary")).length)).toBe(1);
  await page.reload({ waitUntil: "domcontentloaded" });
  const nomeInLibreria = page.locator('.la-exam-row input[aria-label="Nome dell\'esame in libreria"]');
  await expect(nomeInLibreria).toHaveValue("Diritto privato");
  await nomeInLibreria.fill("Diritto privato modificato");
  await nomeInLibreria.press("Tab");
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator('.la-exam-row input[aria-label="Nome dell\'esame in libreria"]'))
    .toHaveValue("Diritto privato modificato");
});

test("LA dossier esplorativo: prepara e prontezza restano, workflow e convalida no", async ({ page }) => {
  const la = laCompleto("cafoscari");
  const d1 = la.dossiersById["la-1"];
  d1.lifecycle = {
    firstExternalAt: "2026-09-01T00:00:00.000Z",
    mobilityStartedAt: "2026-10-01T00:00:00.000Z",
    returnedAt: "2027-02-01T00:00:00.000Z",
  };
  const d2 = JSON.parse(JSON.stringify(d1).replaceAll("la-1", "la-2"));
  d2.id = "la-2";
  d2.metaId = "meta-esplorativa";
  d2.meta = { id: "meta-esplorativa", universita: "Meta esplorativa", citta: "Lione", paese: "Francia" };
  d2.lifecycle = {};
  d2.confirmationsByVersion = {};
  la.dossiersById["la-2"] = d2;
  la.nextId = 3;
  la.openDossierId = "la-2";
  la.assignedDossierIdByCycle["2026/27"] = "la-1";
  await preparaZaino(page, "cafoscari", la);
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  await expect(page.locator("#la-dossier")).toContainText("dossier esplorativo, non ancora operativo");
  await expect(page.locator("#la-dossier")).toContainText("puoi prepararlo e controllarne la prontezza");
  await expect(page.locator("#la-prepare")).toBeVisible();
  await expect(page.locator(".la-stage.attiva")).toContainText("Confronta le mete");
  await expect(page.locator("#la-workflow")).toHaveCount(0);
  await expect(page.locator(".la-recognition")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Segna l'inizio della mobilità" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Segna il rientro" })).toHaveCount(0);
});

test("LA fatto reale incompleto: avviso forte, freeze e backup senza approvazione inventata", async ({ page }) => {
  const la = laCompleto("cafoscari");
  la.assignedDossierIdByCycle["2026/27"] = "la-1";
  la.dossiersById["la-1"].versions[0].preflight["mapping-reviewed"] = false;
  await preparaZaino(page, "cafoscari", la);
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  const avvisi = [];
  page.on("dialog", dialog => { avvisi.push(dialog.message()); dialog.accept(); });
  await page.getByRole("button", { name: "Segna l'inizio della mobilità" }).click();
  await expect(page.getByRole("button", { name: "Segna il rientro" })).toBeVisible();
  await page.getByRole("button", { name: "Segna il rientro" }).click();
  expect(avvisi).toHaveLength(2);
  expect(avvisi[0]).toContain("La prontezza non può cancellare un fatto reale");
  expect(avvisi[1]).toContain("La prontezza non può cancellare un fatto reale");
  const stato = await page.evaluate(() => window.eval(`({
    lifecycle: ZAINO.la.dossiersById['la-1'].lifecycle,
    lock: ZAINO.la.dossiersById['la-1'].versions[0].lockedAt,
    conferme: ZAINO.la.dossiersById['la-1'].confirmationsByVersion,
    backup: ZAINO.la.backupReminder
  })`));
  expect(stato.lifecycle.firstExternalAt).toBeTruthy();
  expect(stato.lifecycle.mobilityStartedAt).toBeTruthy();
  expect(stato.lifecycle.returnedAt).toBeTruthy();
  expect(stato.lock).toBeTruthy();
  expect(stato.conferme).toEqual({});
  expect(stato.backup.reason).toBe("first-external");
});

test("LA link contestuale meta: con piano crea o apre solo quel dossier", async ({ page }) => {
  const la = laCompleto("cafoscari");
  la.dossiersById = {};
  la.openDossierId = null;
  la.assignedDossierIdByCycle = {};
  la.nextId = 1;
  await preparaZaino(page, "cafoscari", la);
  await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });
  await page.locator(".card-meta-v2").first().click();
  const azione = page.locator(".la-destination-action");
  await expect(azione).toBeVisible();
  const metaId = await azione.getAttribute("data-la-destination-id");
  await azione.click();
  await expect(page).toHaveURL(/#learning-agreement\/cafoscari$/);
  const stato = await page.evaluate(() => window.eval(`({
    ids: Object.keys(ZAINO.la.dossiersById),
    open: ZAINO.la.openDossierId,
    metaId: ZAINO.la.dossiersById[ZAINO.la.openDossierId]?.metaId
  })`));
  expect(stato.ids).toHaveLength(1);
  expect(stato.open).toBe(stato.ids[0]);
  expect(stato.metaId).toBe(metaId);
});

test("LA link contestuale meta: senza piano apre il piano e non crea dossier", async ({ page }) => {
  const la = laCompleto("cafoscari");
  la.examLibrary = {};
  la.dossiersById = {};
  la.openDossierId = null;
  la.assignedDossierIdByCycle = {};
  await preparaZaino(page, "cafoscari", la);
  await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });
  await page.locator(".card-meta-v2").first().click();
  await page.locator(".la-destination-action").click();
  await expect(page).toHaveURL(/#learning-agreement\/cafoscari$/);
  await expect(page.getByText("Inserisci il tuo piano", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => Object.keys(window.eval("ZAINO.la.dossiersById")).length)).toBe(0);
});

test("LA Ca' Foscari: assegnazione, freeze, nuova versione, mobilità e convalida", async ({ page }) => {
  const errori = raccogliErrori(page);
  await preparaZaino(page, "cafoscari", laCompleto("cafoscari"));
  page.on("dialog", dialog => dialog.accept());
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  await expect(page.locator("#la-v2-app .btn-primary")).toHaveCount(1);
  await expect(page.locator("#la-dossier")).toContainText("Proposta pronta");
  await page.getByRole("button", { name: "Assegna questa meta al ciclo" }).click();
  expect(await page.evaluate(() => window.eval("ZAINO.la.assignedDossierIdByCycle['2026/27']"))).toBe("la-1");

  await page.getByRole("button", { name: "Segna come inviata al referente" }).click();
  await expect(page.locator("#la-workflow")).toContainText("Segnato da te come inviata al referente");
  expect(await page.evaluate(() => window.eval("ZAINO.la.dossiersById['la-1'].versions[0].lockedAt"))).toBeTruthy();

  const nomeHost = page.locator('input[aria-label="Nome corso host"]');
  await nomeHost.fill("European Law updated");
  await nomeHost.press("Tab");
  await expect(page.locator("#la-dossier .la-panel-title")).toContainText("versione 2");
  const versioni = await page.evaluate(() => window.eval(`({
    n: ZAINO.la.dossiersById['la-1'].versions.length,
    vecchia: ZAINO.la.dossiersById['la-1'].confirmationsByVersion['la-1:v1']['sent-home'].versionId,
    nuova: ZAINO.la.dossiersById['la-1'].currentVersionId
  })`));
  expect(versioni).toEqual({ n: 2, vecchia: "la-1:v1", nuova: "la-1:v2" });

  const linguaHost = page.locator('input[aria-label="Lingua corso host"]');
  await linguaHost.fill("French");
  await linguaHost.press("Tab");
  const dopoSecondaModifica = await page.evaluate(() => window.eval(`({
    n: ZAINO.la.dossiersById['la-1'].versions.length,
    corrente: ZAINO.la.dossiersById['la-1'].currentVersionId,
    lingua: ZAINO.la.dossiersById['la-1'].versions[1].hostCourseSnapshots[0].lingua,
    confermaVecchia: ZAINO.la.dossiersById['la-1'].confirmationsByVersion['la-1:v1']['sent-home'].versionId
  })`));
  expect(dopoSecondaModifica).toEqual({
    n: 2, corrente: "la-1:v2", lingua: "French", confermaVecchia: "la-1:v1",
  });

  await page.getByRole("button", { name: "Segna come approvata dall'ateneo di casa" }).click();
  await page.getByRole("button", { name: "Segna l'inizio della mobilità" }).click();
  await expect(page.locator('#la-workflow input[type="date"]')).toBeVisible();
  await page.locator('#la-workflow input[type="date"]').fill("2026-10-01");
  await page.getByRole("button", { name: "Segna il rientro" }).click();
  await expect(page.locator(".la-recognition")).toBeVisible();
  await expect(page.locator(".la-recognition")).toContainText("attività host assente dal confronto");
  await page.getByRole("button", { name: "Segna la convalida come registrata dall'università" }).click();
  await expect(page.locator(".la-recognition")).toContainText("Segnato da te come registrato dall'università");
  expect(await page.evaluate(() => window.eval("ZAINO.la.dossiersById['la-1'].lifecycle.recognitionRecordedAt"))).toBeTruthy();
  expect(errori).toEqual([]);
});

test("LA Sapienza: la regola sugli esami già sostenuti blocca e resta isolata", async ({ page }) => {
  await preparaZaino(page, "sapienza", laCompleto("sapienza", { passed: true }), { ateneoSalvato: "cafoscari" });
  page.on("dialog", dialog => dialog.accept());
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });
  await expect(page.locator("#la-dossier")).toContainText("Gli esami di casa devono essere ancora da sostenere");
  await page.locator('select[aria-label="Stato esame di casa nel dossier"]').selectOption("da-sostenere");
  await expect(page.locator("#la-dossier")).toContainText("Proposta pronta");
  await page.locator('select[aria-label="Disponibilità del corso host"]').selectOption("non-disponibile");
  await expect(page.locator("#la-dossier")).toContainText("aggiungi almeno un corso host disponibile");
  await page.locator('select[aria-label="Disponibilità del corso host"]').selectOption("disponibile");
  await expect(page.locator("#la-dossier")).toContainText("Proposta pronta");
  await page.getByRole("button", { name: "Assegna questa meta al ciclo" }).click();
  await page.locator('select[aria-label="Percorso ufficiale usato per la pratica"]').selectOption("traditional");
  await page.getByRole("button", { name: "Segna come inviata al referente" }).click();
  await page.getByRole("button", { name: "Segna come approvata dall'ateneo di casa" }).click();
  await page.getByRole("button", { name: "Segna l'inizio della mobilità" }).click();
  await page.getByRole("button", { name: "Segna il rientro" }).click();
  await page.getByRole("button", { name: "Segna la convalida come registrata dall'università" }).click();
  await expect(page.locator(".la-recognition")).toContainText("Segnato da te come registrato dall'università");
  const stato = await page.evaluate(() => ({
    attivo: window.ATENEO_ATTIVO,
    salvato: localStorage.getItem("erasmuswiz_ateneo"),
    uniDossier: window.eval("ZAINO.la.dossiersById['la-1'].university"),
    percorso: window.eval("ZAINO.la.dossiersById['la-1'].lifecycle.officialRoute"),
    chiuso: !!window.eval("ZAINO.la.dossiersById['la-1'].lifecycle.recognitionRecordedAt"),
  }));
  expect(stato).toEqual({
    attivo: "sapienza", salvato: "cafoscari", uniDossier: "sapienza",
    percorso: "traditional", chiuso: true,
  });
});

test("LA due mete: cambio prima dell'evento senza perdita, dopo con conferma e archivio", async ({ page }) => {
  const la = laCompleto("cafoscari");
  const d1 = la.dossiersById["la-1"];
  const d2 = JSON.parse(JSON.stringify(d1).replaceAll("la-1", "la-2"));
  d2.id = "la-2"; d2.metaId = "meta-due";
  d2.meta = { id: "meta-due", universita: "Università Seconda", citta: "Berlin", paese: "Germania" };
  la.dossiersById["la-2"] = d2;
  la.nextId = 3;
  la.assignedDossierIdByCycle["2026/27"] = "la-1";
  await preparaZaino(page, "cafoscari", la);
  page.on("dialog", dialog => dialog.accept());
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  const seconda = page.locator(".la-dossier-card", { hasText: "Università Seconda" });
  await seconda.getByRole("button", { name: "Apri dossier" }).click();
  await page.getByRole("button", { name: "Rendi questa la meta operativa" }).click();
  expect(await page.evaluate(() => window.eval("ZAINO.la.assignedDossierIdByCycle['2026/27']"))).toBe("la-2");
  expect(await page.evaluate(() => window.eval("ZAINO.la.dossiersById['la-1'].archivedAt"))).toBeUndefined();

  await page.getByRole("button", { name: "Segna come inviata al referente" }).click();
  const prima = page.locator(".la-dossier-card", { hasText: "Université Test" });
  await prima.getByRole("button", { name: "Apri dossier" }).click();
  await page.getByRole("button", { name: "Rendi questa la meta operativa" }).click();
  const stato = await page.evaluate(() => window.eval(`({
    assegnato: ZAINO.la.assignedDossierIdByCycle['2026/27'],
    archiviato: !!ZAINO.la.dossiersById['la-2'].archivedAt,
    conferma: ZAINO.la.dossiersById['la-2'].confirmationsByVersion['la-2:v1']['sent-home'].versionId
  })`));
  expect(stato).toEqual({ assegnato: "la-1", archiviato: true, conferma: "la-2:v1" });
  await expect(page.getByText(/Dossier archiviati \(1\)/)).toBeVisible();
});

test("LA errore quota: nessun falso completamento, stato attivo salvo e recupero immediato", async ({ page }) => {
  await page.addInitScript(() => { localStorage.clear(); sessionStorage.clear(); });
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  await page.locator("#la-plan-paste").fill("DIR1; Diritto; 6");
  await page.getByRole("button", { name: "Mostra anteprima" }).click();
  await page.evaluate(() => {
    const originale = Storage.prototype.setItem;
    Storage.prototype.setItem = function (chiave, valore) {
      if (chiave === "erasmuswiz-zaino") throw new DOMException("Quota superata", "QuotaExceededError");
      return originale.call(this, chiave, valore);
    };
  });
  await page.getByRole("button", { name: "Conferma il piano" }).click();
  await expect(page.getByText(/Modifiche non salvate/).first()).toBeVisible();
  await expect(page.getByRole("button", { name: "Scarica recupero delle modifiche non salvate" })).toBeVisible();
  expect(await page.evaluate(() => Object.keys(window.eval("ZAINO.la.examLibrary")).length)).toBe(0);
  const suDisco = await page.evaluate(() => JSON.parse(localStorage.getItem("erasmuswiz-zaino")));
  expect(Object.keys(suDisco.zaini.cafoscari.la.examLibrary)).toHaveLength(0);
});

test("LA restore: file corrotto/futuro rifiutati e backup Sapienza non sovrascrive Ca' Foscari", async ({ page }) => {
  await preparaZaino(page, "cafoscari", laCompleto("cafoscari"));
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  const file = page.locator("#la-restore-file");
  await file.setInputFiles({ name: "rotto.json", mimeType: "application/json", buffer: Buffer.from("{") });
  await expect(page.locator(".la-restore-preview")).toContainText("malformed-json");

  const futuro = {
    format: "erasmuswiz-la-backup", schemaVersion: 99, university: "cafoscari",
    cycle: "2026/27", exportedAt: new Date().toISOString(), payload: {},
  };
  await file.setInputFiles({ name: "futuro.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(futuro)) });
  await expect(page.locator(".la-restore-preview")).toContainText("future-schema");

  const crossPayload = { schemaVersion: 2, nextId: 1, examLibrary: {}, dossiersById: {}, openDossierId: null, assignedDossierIdByCycle: {}, marcatore: "sap" };
  const cross = {
    format: "erasmuswiz-la-backup", schemaVersion: 2, university: "sapienza",
    cycle: "2026/27", exportedAt: new Date().toISOString(), payload: crossPayload,
  };
  await file.setInputFiles({ name: "sapienza.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(cross)) });
  await expect(page.locator(".la-restore-preview")).toContainText("Sapienza");
  page.once("dialog", dialog => dialog.accept());
  await page.getByRole("button", { name: "Conferma e sostituisci solo il Learning Agreement" }).click();
  const stato = await page.evaluate(() => {
    const c = JSON.parse(localStorage.getItem("erasmuswiz-zaino"));
    return {
      attivo: window.ATENEO_ATTIVO,
      cafoscariDossier: Object.keys(c.zaini.cafoscari.la.dossiersById).length,
      sapMarker: c.zaini.sapienza.la.marcatore,
    };
  });
  expect(stato).toEqual({ attivo: "cafoscari", cafoscariDossier: 1, sapMarker: "sap" });
});

test("LA restore fallito cross-ateneo: il recupero conserva payload, Sapienza e ciclo", async ({ page }) => {
  const errori = raccogliErrori(page);
  await preparaZaino(page, "cafoscari", laCompleto("cafoscari"));
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  const salvatoPrima = await page.evaluate(() => localStorage.getItem("erasmuswiz-zaino"));
  const crossPayload = {
    schemaVersion: 2, nextId: 1, examLibrary: {}, dossiersById: {},
    openDossierId: null, assignedDossierIdByCycle: {}, marcatore: "sap-recupero",
  };
  const cross = {
    format: "erasmuswiz-la-backup", schemaVersion: 2, university: "sapienza",
    cycle: "2027/28", exportedAt: new Date().toISOString(), payload: crossPayload,
  };
  await page.locator("#la-restore-file").setInputFiles({
    name: "sapienza.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(cross)),
  });
  await page.evaluate(() => {
    const originale = Storage.prototype.setItem;
    Storage.prototype.setItem = function (chiave, valore) {
      if (chiave === "erasmuswiz-zaino") throw new DOMException("Quota superata", "QuotaExceededError");
      return originale.call(this, chiave, valore);
    };
  });
  page.once("dialog", dialog => dialog.accept());
  await page.getByRole("button", { name: "Conferma e sostituisci solo il Learning Agreement" }).click();
  await expect(page.getByText(/Ripristino non salvato/).first()).toBeVisible();
  await page.evaluate(() => {
    window.__laDownload = null;
    window.eval("laScaricaJson = function (nome, dato) { window.__laDownload = { nome: nome, dato: dato }; }");
  });
  const bottone = page.locator(".la-backup").getByRole("button", { name: "Scarica recupero delle modifiche non salvate" });
  await bottone.click();
  await page.waitForTimeout(100);
  expect(errori).toEqual([]);
  await expect.poll(() => page.evaluate(() => window.__laDownload)).not.toBeNull();
  const scaricato = await page.evaluate(() => window.__laDownload);
  const envelope = scaricato.dato;
  expect(scaricato.nome).toContain("sapienza-2027-28");
  expect(envelope.university).toBe("sapienza");
  expect(envelope.cycle).toBe("2027/28");
  expect(envelope.payload.marcatore).toBe("sap-recupero");
  const stato = await page.evaluate(() => {
    const c = JSON.parse(localStorage.getItem("erasmuswiz-zaino"));
    return {
      attivo: window.ATENEO_ATTIVO,
      cfDossier: Object.keys(c.zaini.cafoscari.la.dossiersById).length,
      salvato: localStorage.getItem("erasmuswiz-zaino"),
    };
  });
  expect(stato.attivo).toBe("cafoscari");
  expect(stato.cfDossier).toBe(1);
  expect(stato.salvato).toBe(salvatoPrima);
});

test("LA migrazione browser: la recovery legacy viene tolta solo dopo rilettura verificata", async ({ page }) => {
  const legacy = {
    metaAperta: "meta-x",
    bozzePerMeta: {
      "meta-x": {
        meta: { id: "meta-x", universita: "Host legacy" }, ciclo: "2026/27", ateneo: "cafoscari",
        versioni: [{ numero: 1, esamiCasa: [{ id: "e1", nome: "Casa", cfu: 6 }], corsiHost: [], gruppi: [] }],
      },
    },
  };
  await preparaZaino(page, "cafoscari", legacy);
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  const la = await page.evaluate(() => JSON.parse(localStorage.getItem("erasmuswiz-zaino")).zaini.cafoscari.la);
  expect(la.schemaVersion).toBe(2);
  expect(Object.keys(la.dossiersById)).toHaveLength(1);
  expect(la.recovery?.legacyRecovery).toBeUndefined();
});

test("LA mobile/tastiera/tema: niente overflow a 390px e controlli raggiungibili", async ({ page }) => {
  await preparaZaino(page, "cafoscari", laCompleto("cafoscari"));
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  const misura = await page.evaluate(() => ({
    doc: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
    sporgenti: [...document.querySelectorAll("#tab-learning-agreement *")]
      .filter(el => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && (r.left < -1 || r.right > innerWidth + 1);
      }).map(el => el.className || el.tagName).slice(0, 10),
  }));
  expect(misura.doc).toBe(misura.viewport);
  expect(misura.sporgenti).toEqual([]);
  await page.locator("#tab-learning-agreement").press("Tab");
  expect(await page.evaluate(() => document.activeElement !== document.body)).toBe(true);
});

test("LA offline: dopo il primo caricamento la schermata resta disponibile senza rete", async ({ page, context }) => {
  await preparaZaino(page, "cafoscari", laCompleto("cafoscari"));
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "networkidle" });
  await page.evaluate(() => navigator.serviceWorker?.ready);
  await expect.poll(() => page.evaluate(async () => !!(await caches.match("/index.html")))).toBe(true);
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#tab-learning-agreement")).toBeVisible();
  await expect(page.locator("#la-dossier")).toContainText("Université Test");
});

test("LA analytics browser: il payload contiene soltanto nome fisso ed event", async ({ page }) => {
  await page.addInitScript(() => {
    window.__laEvents = [];
    Object.defineProperty(window, "goatcounter", {
      configurable: false,
      writable: false,
      value: { count(payload) { window.__laEvents.push(payload); } },
    });
    localStorage.clear(); sessionStorage.clear();
  });
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });
  const eventi = await page.evaluate(() => window.__laEvents);
  expect(eventi.length).toBeGreaterThan(0);
  for (const evento of eventi) {
    expect(Object.keys(evento).sort()).toEqual(["event", "path"]);
    expect(["la-open", "la-plan-confirmed", "la-ready", "la-version-created", "la-recognition-closed", "la-suggestion-used"]).toContain(evento.path);
    expect(evento.event).toBe(true);
  }
});
