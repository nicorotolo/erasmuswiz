// Redesign v4, Fase 0 punto 4: baseline visiva PRIMA di ogni modifica.
// Archivio di confronto, NON asserzione bloccante (PLAN_REDESIGN_V4, «Rejected»:
// snapshot fragili sui font CDN). Per questo gira solo su richiesta:
//   BASELINE_V4=1 npx playwright test test/ui/baseline-v4.spec.cjs
// e scrive in collaudo/redesign-v4/baseline/<cartella>/ (default: la data).
const path = require("node:path");
const { test, expect } = require("./aiuti/guardia.cjs");
const limite = require("./aiuti/fixture-limite.cjs");

const ATTIVA = process.env.BASELINE_V4 === "1";
const DESTINAZIONE = path.resolve(
  __dirname, "..", "..", "collaudo", "redesign-v4", "baseline",
  process.env.BASELINE_V4_CARTELLA || "prima"
);
const LARGHEZZE = [390, 1280];
const BRUNO = path.resolve(__dirname, "..", "..", "validazione", "fixture-la-lisbona-iniziale.json");

test.skip(!ATTIVA, "baseline visiva: solo con BASELINE_V4=1");

async function scatta(page, nome) {
  await page.evaluate(async () => {
    if (document.fonts) await document.fonts.ready;
    // Il router mette il fuoco sulla sezione: l'anello conta per la tastiera,
    // non per il confronto visivo. E fullPage con la nav fissa va scattato da
    // scroll 0, altrimenti la barra finisce disegnata a metà pagina.
    const attivo = document.activeElement;
    if (attivo && attivo.matches('[id^="tab-"]')) attivo.blur();
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(DESTINAZIONE, `${nome}.png`),
    fullPage: true,
    animations: "disabled",
    caret: "hide",
  });
}

for (const ateneo of ["cafoscari", "sapienza"]) {
  for (const larghezza of LARGHEZZE) {
    test(`baseline ${ateneo} ${larghezza}: Home, Mete, Percorso, Profilo, LA e casi limite`, async ({ page }) => {
      await page.setViewportSize({ width: larghezza, height: larghezza < 768 ? 844 : 900 });
      await limite.apri(page, ateneo);
      const casi = await limite.trovaCasi(page);
      const base = `${ateneo}-${larghezza}`;
      const normale = limite.zaino({
        profilo: casi.schedinaPiena.profilo,
        preferite: casi.schedinaPiena.ids.slice(0, 2),
      });

      for (const [scheda, hash, attesa] of [
        ["home", "#oggi", "#tab-oggi"],
        ["mete", "#mete", "#tab-mete"],
        ["percorso", "#percorso", "#tab-percorso"],
        ["profilo", "#profilo", "#tab-profilo"],
        ["la", `#learning-agreement/${ateneo}`, "#tab-learning-agreement"],
      ]) {
        await limite.applicaZaino(page, ateneo, normale, hash);
        await expect(page.locator(attesa)).toBeVisible();
        await scatta(page, `${base}-${scheda}`);
      }

      // Casi limite su Mete: schedina piena, profilo 🔒, zero risultati.
      await limite.applicaZaino(page, ateneo, limite.zaino({
        profilo: casi.schedinaPiena.profilo,
        preferite: casi.schedinaPiena.ids,
      }), "#mete");
      await expect(page.locator(".schedina-slot")).toHaveCount(5);
      await scatta(page, `${base}-limite-schedina-piena`);

      await limite.applicaZaino(page, ateneo, limite.zaino({
        profilo: casi.rossa.profilo,
        preferite: [casi.rossa.meta.id, casi.nomeLungo.id, casi.senzaLingua.id],
      }), "#mete");
      await scatta(page, `${base}-limite-rossa-nome-lungo-senza-lingua`);

      await limite.zeroRisultati(page);
      await scatta(page, `${base}-limite-zero-risultati`);

      test.info().annotations.push({ type: "casi", description: JSON.stringify(casi) });
    });
  }
}

// Percorso Bruno: il kit di validazione è un caso Sapienza (Lisbona, 2025/26).
for (const larghezza of LARGHEZZE) {
  test(`baseline percorso Bruno ${larghezza}: LA vuota → anteprima → dossier ripristinato`, async ({ page }) => {
    await page.setViewportSize({ width: larghezza, height: larghezza < 768 ? 844 : 900 });
    await page.addInitScript(() => {
      if (sessionStorage.getItem("__bruno")) return;
      localStorage.clear();
      sessionStorage.setItem("__bruno", "1");
    });
    await page.goto(`/index.html#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });
    await expect(page.locator("#tab-learning-agreement")).toBeVisible();
    await scatta(page, `bruno-${larghezza}-1-la-vuota`);

    await page.locator("#la-restore-file").setInputFiles(BRUNO);
    await expect(page.locator(".la-restore-preview")).toContainText("1 dossier");
    await scatta(page, `bruno-${larghezza}-2-anteprima-ripristino`);

    page.once("dialog", dialog => dialog.accept());
    await page.getByRole("button", { name: "Conferma e sostituisci solo il Learning Agreement" }).click();
    await expect(page.getByText("Ripristino completato.")).toBeVisible();
    await scatta(page, `bruno-${larghezza}-3-dossier-ripristinato`);

    await page.locator("#la-dossier .la-host-row").first().scrollIntoViewIfNeeded();
    await expect(page.locator("#la-dossier .la-host-row")).toHaveCount(8);
  });
}
