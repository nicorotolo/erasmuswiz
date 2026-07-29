const { test, expect } = require("@playwright/test");

async function preparaHomePreBando(page, profilo) {
  await page.addInitScript(({ profilo }) => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        cafoscari: {
          profilo,
          checklist: {},
          metePreferite: [],
          schedina: [],
          fase: "esplorando",
          checklistPost: {},
          onboardingFatto: true,
          autoverifica: {},
          zainoCelebrato: true,
          wizardMete: false,
          la: { metaAperta: null, bozzePerMeta: {} },
          cicloPercorso: "2027/28",
          cicloDati: "2026/27",
          storico: {},
          schedinaCiclo: {},
        },
      },
    }));
  }, { profilo });
}

test("il saluto usa il nome e torna neutro quando il nome manca", async ({ page }) => {
  await preparaHomePreBando(page, {
    nome: "Marco",
    area: "0311",
    dipartimento: "0311",
    livello: "L",
    lingue: [],
    extraUE: false,
    ricercaTesi: false,
  });
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  const saluto = page.locator("#tab-oggi .home-saluto");
  await expect(saluto).toHaveAttribute("id", "titolo-tab-oggi-home");
  await expect(saluto).toHaveText("Ciao, Marco");

  await page.evaluate(() => {
    window.eval("delete ZAINO.profilo.nome");
    document.querySelector("#tab-oggi .home-saluto").textContent = "testo sentinella";
    window.renderHome();
  });
  await expect(saluto).toHaveText("Il tuo percorso Erasmus");
});

test("in pre-bando la mossa completa prima il profilo, poi esplora le mete", async ({ page }) => {
  await preparaHomePreBando(page, null);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  await expect(page.locator("#missione-titolo")).toHaveText(
    "Il bando 2027/28 non è ancora uscito"
  );
  await expect(page.locator("#missione-dettaglio")).toContainText(
    "quelle date restano qui come riferimento storico"
  );
  await expect(page.locator("#missione-dettaglio")).toContainText(
    "Completa il profilo per filtrare le mete compatibili"
  );
  await expect(page.locator("#btn-fatto")).toHaveText("Completa il profilo");

  await page.locator("#btn-fatto").click();
  await expect(page).toHaveURL(/#profilo$/);
  await expect(page.locator("#tab-profilo")).toHaveClass(/attivo/);

  await page.evaluate(() => {
    window.eval(`ZAINO.profilo = {
      nome: "Marco",
      area: "0311",
      dipartimento: "0311",
      livello: "L",
      lingue: [],
      extraUE: false,
      ricercaTesi: false
    }`);
    window.renderHome();
    window.renderMissione();
  });

  await expect(page.locator("#missione-titolo")).toHaveText(
    "Il bando 2027/28 non è ancora uscito"
  );
  await expect(page.locator("#btn-fatto")).toHaveText("Esplora le mete");
});
