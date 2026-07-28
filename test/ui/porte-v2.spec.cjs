const { test, expect } = require("@playwright/test");

const PAGINA = "/index.html#percorso";

async function preparaZaino(page, ateneo, checklistPost = {}) {
  await page.addInitScript(({ ateneo, checklistPost }) => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        [ateneo]: {
          profilo: null,
          checklist: {},
          metePreferite: [],
          schedina: [],
          fase: "esplorando",
          checklistPost,
          onboardingFatto: true,
          autoverifica: {},
          zainoCelebrato: true,
          wizardMete: false,
          la: { metaAperta: null, bozzePerMeta: {} },
          cicloPercorso: "2026/27",
          cicloDati: "2026/27",
          storico: {},
          schedinaCiclo: {},
        },
      },
    }));
  }, { ateneo, checklistPost });
}

async function usaPorta(page, selettore, conTastiera) {
  const porta = page.locator(selettore);
  if (conTastiera) {
    await porta.focus();
    await page.keyboard.press("Enter");
  } else {
    await porta.click();
  }
}

for (const ateneo of ["cafoscari", "sapienza"]) {
  test(`${ateneo}: la porta esplorando atterra sui Requisiti`, async ({ page }) => {
    await preparaZaino(page, ateneo);
    await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
    await usaPorta(page, "#fase-esplorando", true);

    await expect(page.locator("#stazione-requisiti > details")).toHaveAttribute("open", "");
    await expect(page.locator("#stazione-esito > details")).not.toHaveAttribute("open", "");
    await expect(page.locator("#fase-esplorando")).toHaveAttribute("aria-pressed", "true");
  });

  test(`${ateneo}: la porta in attesa atterra sull'Esito e mostra contenuti reali`, async ({ page }) => {
    await preparaZaino(page, ateneo);
    await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
    await usaPorta(page, "#fase-in-attesa", false);

    await expect(page.locator("#stazione-esito > details")).toHaveAttribute("open", "");
    await expect(page.locator("#attesa-info")).toBeVisible();
    await expect(page.locator("#attesa-info")).toContainText(
      "Hai inviato la domanda. Adesso si aspetta."
    );
    await expect(page.locator("#attesa-info .gruppo-post")).not.toHaveCount(0);
  });

  test(`${ateneo}: selezionato con accettazione incompleta apre l'Accettazione, non il LA`, async ({ page }) => {
    await preparaZaino(page, ateneo);
    await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
    await usaPorta(page, "#fase-selezionato", true);

    await expect(page.locator("#stazione-partenza > details")).toHaveAttribute("open", "");
    await expect(page.locator("#stazione-la > details")).not.toHaveAttribute("open", "");
    await expect(
      page.locator("#stazione-partenza .gruppo-post-titolo").first()
    ).toHaveText("Accettazione");
  });
}

test("la prima azione post-selezione è calcolata: dopo l'Accettazione si apre il LA", async ({ page }) => {
  await preparaZaino(page, "cafoscari", {
    "post-acc-1": true,
    "post-acc-2": true,
    "post-acc-3": true,
    "post-acc-4": true,
  });
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await usaPorta(page, "#fase-selezionato", false);

  await expect(page.locator("#stazione-la > details")).toHaveAttribute("open", "");
  await expect(page.locator("#stazione-partenza > details")).not.toHaveAttribute("open", "");
});

// Le due prove qui sotto nascono da difetti trovati GUARDANDO il sito, non
// dai test: con le suite tutte verdi lo stepper diceva "fatto" sopra a "0/9
// passi completati", e lo stesso passo si chiamava "Requisiti" nello stepper e
// "Prepara la candidatura" nella stazione — collidendo con la tappa 3.
// Restano qui perche' la prossima volta se ne accorga una prova, non uno studente.
test("una tappa data per fatta non mostra un riassunto che chiede di farla", async ({ page }) => {
  await preparaZaino(page, "cafoscari");
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  for (const porta of ["#fase-in-attesa", "#fase-selezionato"]) {
    await usaPorta(page, porta, false);
    const fatte = page.locator("#fase-stepper .fase-card.fase-fatto");
    await expect(fatte).not.toHaveCount(0);

    for (const testo of await fatte.locator(".fase-riassunto").allTextContents()) {
      // "0/9 passi completati" o "…prima di iniziare" sotto l'etichetta "fatto"
      // e' la spunta falsa che questo progetto rifiuta sulle checklist: una
      // tappa superata per dichiarazione deve dichiararlo, non fingere misure.
      expect(testo, `${porta}: tappa data per fatta, ma il riassunto dice «${testo}»`)
        .not.toMatch(/\b0\s*\/\s*\d|prima di iniziare/i);
    }
  }
});

test("lo stesso passo ha lo stesso nome nello stepper e nella stazione", async ({ page }) => {
  await preparaZaino(page, "cafoscari");
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  const nelloStepper = (await page.locator("#fase-stepper .fase-card")
    .first().locator(".fase-domanda").textContent()).trim();
  const nellaStazione = (await page.locator("#stazione-requisiti .stazione-titolo")
    .textContent()).trim();
  expect(nellaStazione).toBe(nelloStepper);

  // E nessun altro titolo di stazione puo' ripetere quel nome: due tappe con
  // lo stesso nome sono due tappe che lo studente non sa distinguere.
  const titoli = (await page.locator(".stazioni .stazione-titolo").allTextContents())
    .map(t => t.trim());
  expect(titoli.filter(t => t === nellaStazione)).toHaveLength(1);
});

test("lo stepper espone sempre sei tappe, tutte raggiungibili da tastiera", async ({ page }) => {
  await preparaZaino(page, "cafoscari");
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  await expect(page.locator("#fase-stepper .fase-card")).toHaveCount(6);
  await expect(page.locator("#fase-stepper .fase-cta")).toHaveCount(6);
  await expect(page.locator(".stazioni > .stazione")).toHaveCount(6);

  const controlli = page.locator(
    ".stazioni > .stazione > details > summary, .stazioni > .stazione > button"
  );
  await expect(controlli).toHaveCount(6);
  for (let indice = 0; indice < 6; indice += 1) {
    await controlli.nth(indice).focus();
    await expect(controlli.nth(indice)).toBeFocused();
  }
});
