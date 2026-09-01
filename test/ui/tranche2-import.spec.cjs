// Tranche 2 pre-Bruno — l'importazione multipla, la fotografia riepilogativa e
// la ricostruzione storica viste dal browser (PLAN.md, addendum 2026-08-07).
//
// Il caso guida è quello di Bruno: un Learning Agreement già inviato, sei corsi
// spariti, dieci sostituti trovati sul posto. Qui si prova che la fotografia
// vecchia non si perde, che l'import non inventa corrispondenze e che i fatti
// dichiarati bloccano una versione sola.
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

function laConDossier({ bloccata = false } = {}) {
  const dossierId = "la-1";
  const versionId = `${dossierId}:v1`;
  return {
    schemaVersion: 2,
    nextId: 2,
    examLibrary: {
      e1: { id: "e1", codice: "CASA01", nome: "Diritto europeo", cfu: 6, stato: "da-sostenere" },
    },
    dossiersById: {
      [dossierId]: {
        id: dossierId,
        metaId: "meta-ucp",
        meta: {
          id: "meta-ucp", universita: "Universidade Católica Portuguesa",
          citta: "Lisbona", paese: "Portogallo",
        },
        university: "sapienza",
        cycle: "2026/27",
        createdAt: "2026-08-02T10:00:00.000Z",
        updatedAt: "2026-08-02T10:00:00.000Z",
        versions: [{
          versionId, number: 1, createdAt: "2026-08-02T10:00:00.000Z",
          reason: "initial", note: "",
          homeExamSnapshots: [{
            snapshotId: `${versionId}:home-1`, sourceExamId: "e1",
            codice: "CASA01", nome: "Diritto europeo", cfu: 6, stato: "da-sostenere",
          }],
          hostCourseSnapshots: [{
            snapshotId: `${versionId}:host-1`, codice: "144001", nome: "European Law",
            ects: 6, lingua: "English", semestre: "1",
            officialUrl: "https://example.edu/eu", availabilityState: "disponibile",
            verifiedAt: "2026-08-02", sourceDate: "2026-08-02",
          }],
          mappings: [{
            mappingId: `${versionId}:map-1`,
            homeExamSnapshotIds: [`${versionId}:home-1`],
            hostCourseSnapshotIds: [`${versionId}:host-1`],
          }],
          preflight: {
            "course-data-checked": true, "credits-compared": true, "mapping-reviewed": true,
          },
          ...(bloccata ? { lockedAt: "2026-08-03T10:00:00.000Z", lockReason: "sent-home" } : {}),
        }],
        currentVersionId: versionId,
        confirmationsByVersion: bloccata ? {
          [versionId]: {
            "sent-home": {
              versionId, markedAt: "2026-08-03T10:00:00.000Z", subject: "sent-home", note: "",
            },
          },
        } : {},
        lifecycle: bloccata ? { firstExternalAt: "2026-08-03T10:00:00.000Z" } : {},
      },
    },
    openDossierId: dossierId,
    assignedDossierIdByCycle: { "2026/27": dossierId },
  };
}

async function preparaZaino(page, la) {
  await page.addInitScript(({ la }) => {
    if (localStorage.getItem("erasmuswiz-zaino")) return;
    localStorage.clear(); sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", "sapienza");
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        sapienza: {
          profilo: {
            nome: "Ada", area: "0421", dipartimento: "Giurisprudenza",
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
  }, { la });
}

async function apri(page, la) {
  await preparaZaino(page, la);
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });
  await expect(page.locator("#la-dossier")).toBeVisible();
  // La semina va guardata, non data per fatta: se il reload l'avesse persa
  // tutto il resto proverebbe il vuoto.
  expect(await page.evaluate(() => Object.keys(window.eval("ZAINO.la.dossiersById")).length)).toBe(1);
}

const DIECI_CORSI = [
  "144213; Introduction to Global Law; 6",
  "144297; Public International Law Code; 6",
  "144334; Right to a Fair Trial; 3",
  "144414; International Taxation; 4",
  "144415; Law and Literature; 4",
  "144432; The Law of Fighting Poverty; 3",
  "144462; International Arbitration; 3",
  "144463; EU Asylum and Migration Law; 4",
  "144485; Ius Cogens; 3",
  "144504; Climate Change; 3",
].join("\n");

test("tranche 2 §1-§2: l'anteprima classifica le righe e nessuna sparisce da sola", async ({ page }) => {
  const errori = raccogliErrori(page);
  await apri(page, laConDossier());
  await page.locator("#la-import-host").fill([
    "144213; Introduction to Global Law; 6",
    "Corso senza crediti;",
    "Corso senza colonne 4",
    "144001; European Law; 6",
  ].join("\n"));
  await page.getByRole("button", { name: /Mostra anteprima — corsi dell'università ospitante/i }).click();

  const righe = page.locator('[data-anteprima-import="host"] .la-import-row');
  await expect(righe).toHaveCount(4);
  await expect(righe.filter({ has: page.locator('[data-kind="valid"]') })).toHaveCount(0);
  expect(await righe.nth(0).getAttribute("data-kind")).toBe("valid");
  expect(await righe.nth(1).getAttribute("data-kind")).toBe("incomplete");
  expect(await righe.nth(2).getAttribute("data-kind")).toBe("ambiguous");
  expect(await righe.nth(3).getAttribute("data-kind")).toBe("duplicate");

  // Senza decisione l'importazione non parte e non scrive niente.
  await page.getByRole("button", { name: "Importa tutto in una volta" }).click();
  await expect(page.locator(".la-import-messaggio")).toContainText("Restano 3 righe da decidere");
  expect(await page.evaluate(() => window.eval(
    "ZAINO.la.dossiersById['la-1'].versions[0].hostCourseSnapshots.length"
  ))).toBe(1);
  // Il testo incollato è ancora lì: le decisioni non si perdono per un errore.
  await expect(page.locator("#la-import-host")).toHaveValue(/Introduction to Global Law/);
  expect(errori).toEqual([]);
});

test("tranche 2 §1: oltre 200 righe l'incolla viene rifiutato per intero", async ({ page }) => {
  await apri(page, laConDossier());
  const troppe = Array.from({ length: 201 }, (_, i) => `Corso ${i + 1}; 6`).join("\n");
  await page.locator("#la-import-host").fill(troppe);
  await page.getByRole("button", { name: /Mostra anteprima — corsi dell'università ospitante/i }).click();
  await expect(page.locator(".la-import-messaggio")).toContainText("Troppe righe: 201");
  await expect(page.locator('[data-anteprima-import="host"]')).toHaveCount(0);
  expect(await page.evaluate(() => window.eval(
    "ZAINO.la.dossiersById['la-1'].versions[0].hostCourseSnapshots.length"
  ))).toBe(1);
});

test("tranche 2 §3-§7: dossier bloccato, dieci sostituti in una versione sola e nessuna corrispondenza inventata", async ({ page }) => {
  const errori = raccogliErrori(page);
  await apri(page, laConDossier({ bloccata: true }));
  await expect(page.locator("#la-import-multiplo")).toContainText("creerà la versione 2");

  await page.locator("#la-import-host").fill(DIECI_CORSI);
  await page.getByRole("button", { name: /Mostra anteprima — corsi dell'università ospitante/i }).click();
  await expect(page.locator('[data-anteprima-import="host"] .la-import-row')).toHaveCount(10);

  await page.locator("#la-import-casa").fill([
    "1052282; Analisi delle Politiche Pubbliche; 6",
    "10612400; Diritto dell'Immigrazione; 6",
  ].join("\n"));
  await page.getByRole("button", { name: /Mostra anteprima — esami del mio ateneo/i }).click();
  await expect(page.locator('[data-anteprima-import="casa"] .la-import-row')).toHaveCount(2);

  await page.getByRole("button", { name: "Importa tutto in una volta" }).click();

  const stato = await page.evaluate(() => {
    const d = window.eval("ZAINO.la.dossiersById['la-1']");
    const corrente = d.versions[d.versions.length - 1];
    return {
      versioni: d.versions.length,
      primaHost: d.versions[0].hostCourseSnapshots.length,
      primaHome: d.versions[0].homeExamSnapshots.length,
      primaBloccata: !!d.versions[0].lockedAt,
      correnteHost: corrente.hostCourseSnapshots.length,
      correnteHome: corrente.homeExamSnapshots.length,
      correnteBloccata: !!corrente.lockedAt,
      corrispondenze: corrente.mappings.length,
      confermeNuova: Object.keys(d.confirmationsByVersion[corrente.versionId] || {}).length,
      libreria: Object.keys(window.eval("ZAINO.la.examLibrary")).length,
      importatiDaVerificare: corrente.hostCourseSnapshots
        .filter(c => c.importBatchId).every(c => c.availabilityState === "da-verificare"),
    };
  });
  // Una sola versione nuova, e la fotografia precedente è intatta.
  expect(stato.versioni).toBe(2);
  expect(stato.primaHost).toBe(1);
  expect(stato.primaHome).toBe(1);
  expect(stato.primaBloccata).toBe(true);
  expect(stato.correnteHost).toBe(11);
  expect(stato.correnteHome).toBe(3);
  expect(stato.correnteBloccata).toBe(false);
  // §7: righe sì, corrispondenze no. E niente conferme trasferite.
  expect(stato.corrispondenze).toBe(1);
  expect(stato.confermeNuova).toBe(0);
  expect(stato.libreria).toBe(3);
  expect(stato.importatiDaVerificare).toBe(true);

  await expect(page.locator("#la-dossier .la-panel-title")).toContainText("versione 2");
  await expect(page.locator('[data-scollegato="host"]')).toHaveCount(10);
  await expect(page.locator('[data-scollegato="home"]')).toHaveCount(2);
  await expect(page.locator("#la-fotografia")).toContainText("Da collegare a mano: 2 esami di casa e 10 corsi host");
  expect(errori).toEqual([]);
});

test("tranche 2 §4-§6: prima la fotografia, poi i fatti; un solo blocco e una sola versione nuova", async ({ page }) => {
  const errori = raccogliErrori(page);
  await apri(page, laConDossier());
  await page.locator("#la-import-host").fill("144213; Introduction to Global Law; 6");
  await page.getByRole("button", { name: /Mostra anteprima — corsi dell'università ospitante/i }).click();
  await page.getByRole("button", { name: "Importa tutto in una volta" }).click();

  // Finché la fotografia non è confermata, i fatti non si possono dichiarare.
  await expect(page.locator("#la-ricostruzione")).toHaveCount(0);
  await expect(page.locator("#la-fotografia")).toContainText("2 corsi host attivi — 12 ECTS");
  await expect(page.locator("#la-fotografia")).toContainText("1 esami del tuo ateneo — 6 CFU");
  await page.getByRole("button", { name: "Conferma la fotografia riepilogativa" }).click();
  await expect(page.locator("#la-fotografia")).toContainText("Fotografia confermata da te");
  await expect(page.locator("#la-ricostruzione")).toBeVisible();

  // Nessun fatto = bozza: niente blocco, niente versione nuova.
  await page.getByRole("button", { name: "Registra quello che è successo" }).click();
  await expect(page.locator(".la-ricostruzione-messaggio")).toContainText("resta una bozza modificabile");
  expect(await page.evaluate(() => window.eval("ZAINO.la.dossiersById['la-1'].versions.length"))).toBe(1);

  page.once("dialog", dialog => dialog.accept());
  await page.locator('input[data-fatto="sent-home"]').check();
  await page.locator('input[data-fatto-data="sent-home"]').fill("2026-03-01");
  await page.locator('input[data-fatto="home-approved"]').check();
  await page.getByRole("button", { name: "Registra quello che è successo" }).click();

  const dopo = await page.evaluate(() => {
    const d = window.eval("ZAINO.la.dossiersById['la-1']");
    const bloccata = d.versions[0];
    const nuova = d.versions[d.versions.length - 1];
    const conferme = d.confirmationsByVersion[bloccata.versionId] || {};
    return {
      versioni: d.versions.length,
      lockedAt: !!bloccata.lockedAt,
      lockReason: bloccata.lockReason,
      chiavi: Object.keys(conferme).sort(),
      inviata: conferme["sent-home"],
      approvata: conferme["home-approved"],
      nuovaBloccata: !!nuova.lockedAt,
      confermeNuova: Object.keys(d.confirmationsByVersion[nuova.versionId] || {}).length,
      primoEsterno: d.lifecycle.firstExternalAt,
    };
  });
  expect(dopo.versioni).toBe(2);
  expect(dopo.lockedAt).toBe(true);
  expect(dopo.lockReason).toBe("reconstruction");
  // Una scelta non ne inventa un'altra: host-approved non è stato dichiarato.
  expect(dopo.chiavi).toEqual(["home-approved", "sent-home"]);
  expect(dopo.inviata.occurredOn).toBe("2026-03-01");
  expect(dopo.inviata.occurredOnUnknown).toBe(false);
  // Data dell'evento non ricordata ≠ data della dichiarazione.
  expect(dopo.approvata.occurredOn).toBe("");
  expect(dopo.approvata.occurredOnUnknown).toBe(true);
  expect(dopo.approvata.markedAt).toBeTruthy();
  expect(dopo.nuovaBloccata).toBe(false);
  expect(dopo.confermeNuova).toBe(0);
  expect(dopo.primoEsterno).toBeTruthy();

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#la-dossier .la-panel-title")).toContainText("versione 2");
  await expect(page.locator("#la-ricostruzione")).toHaveCount(0);
  expect(errori).toEqual([]);
});

test("tranche 2: a 390 px l'importazione non produce scorrimento orizzontale", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await apri(page, laConDossier());
  await page.locator("#la-import-host").fill(DIECI_CORSI);
  await page.getByRole("button", { name: /Mostra anteprima — corsi dell'università ospitante/i }).click();
  await page.getByRole("button", { name: "Importa tutto in una volta" }).click();
  await expect(page.locator("#la-fotografia")).toBeVisible();
  const scorre = await page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  expect(scorre).toBe(false);
});
