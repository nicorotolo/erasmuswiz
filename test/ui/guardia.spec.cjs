// Prova la guardia stessa (test/ui/aiuti/guardia.cjs): se smettesse di
// accorgersi degli errori, tutte le altre prove passerebbero in silenzio.
// `test.fail()` = la prova DEVE fallire; se la guardia non scatta, diventa rossa.
const { test, expect } = require("./aiuti/guardia.cjs");

test("guardia: un'eccezione non gestita fa fallire la prova", async ({ page }) => {
  test.fail();
  await page.goto("/index.html", { waitUntil: "domcontentloaded" });
  // Si aspetta l'EVENTO, non 100ms fissi: con la macchina carica (suite intera)
  // il setTimeout scattava dopo la fine della prova e la guardia risultava cieca
  // per un problema di tempi, non di logica (misurato: ritardi fino a 389ms).
  const errore = page.waitForEvent("pageerror");
  await page.evaluate(() => setTimeout(() => { throw new Error("guasto voluto"); }, 0));
  await errore;
});

test("guardia: un errore di console fa fallire la prova", async ({ page }) => {
  test.fail();
  await page.goto("/index.html", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => console.error("errore voluto"));
});

test("guardia: una risposta 404 fa fallire la prova", async ({ page }) => {
  test.fail();
  await page.goto("/index.html", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => fetch("/non-esiste-davvero.css").catch(() => {}));
  await page.waitForTimeout(200);
});

test("guardia: un errore ammesso esplicitamente non fa fallire", async ({ page, ammettiErrori }) => {
  ammettiErrori(/errore ammesso/);
  await page.goto("/index.html", { waitUntil: "domcontentloaded" });
  await page.evaluate(() => console.error("errore ammesso"));
  await expect(page.locator("body")).toBeVisible();
});
