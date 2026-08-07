const { test, expect } = require("@playwright/test");
const path = require("node:path");

const PAGINA = "/index.html";
const FIXTURE = path.resolve(__dirname, "..", "..", "validazione", "fixture-la-lisbona-iniziale.json");

test("kit Bruno: il caso storico si ripristina nell'interfaccia con numeri e fase corretti", async ({ page }) => {
  const errori = [];
  page.on("console", messaggio => {
    if (messaggio.type() === "error") errori.push(`console: ${messaggio.text()}`);
  });
  page.on("pageerror", errore => errori.push(`pagina: ${errore.message}`));

  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });

  await page.locator("#la-restore-file").setInputFiles(FIXTURE);
  await expect(page.locator(".la-restore-preview")).toContainText(
    "Anteprima: Sapienza Roma, ciclo 2025/26, 1 dossier e 1 versioni."
  );

  page.once("dialog", dialog => dialog.accept());
  await page.getByRole("button", { name: "Conferma e sostituisci solo il Learning Agreement" }).click();

  await expect(page.getByText("Ripristino completato.")).toBeVisible();
  await expect(page.locator("#la-dossier .la-panel-title")).toContainText(
    "Universidade Católica Portuguesa · versione 1"
  );
  await expect(page.locator("#la-dossier .la-muted").first()).toContainText(
    "Lisbona · ciclo 2025/26 · fase mobility"
  );
  await expect(page.locator("#la-dossier input[aria-label='Nome esame di casa']")).toHaveCount(6);
  await expect(page.locator("#la-dossier .la-host-row")).toHaveCount(8);

  const numeri = await page.evaluate(() => {
    const dossier = window.eval("ZAINO.la.dossiersById[ZAINO.la.openDossierId]");
    const versione = dossier.versions.find(v => v.versionId === dossier.currentVersionId);
    return {
      host: versione.hostCourseSnapshots.length,
      ects: versione.hostCourseSnapshots.reduce((totale, corso) => totale + Number(corso.ects), 0),
      casa: versione.homeExamSnapshots.length,
      cfu: versione.homeExamSnapshots.reduce((totale, esame) => totale + Number(esame.cfu), 0),
    };
  });
  expect(numeri).toEqual({ host: 8, ects: 44, casa: 6, cfu: 45 });
  expect(errori).toEqual([]);
});
