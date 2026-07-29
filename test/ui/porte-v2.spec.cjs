const { test, expect } = require("@playwright/test");

const PAGINA = "/index.html#percorso";

async function preparaZaino(
  page,
  ateneo,
  checklistPost = {},
  profilo = null,
  cicli = { percorso: "2026/27", dati: "2026/27" }
) {
  await page.addInitScript(({ ateneo, checklistPost, profilo, cicli }) => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        [ateneo]: {
          profilo,
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
          cicloPercorso: cicli.percorso,
          cicloDati: cicli.dati,
          storico: {},
          schedinaCiclo: {},
        },
      },
    }));
  }, { ateneo, checklistPost, profilo, cicli });
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
      page.locator("#stazione-partenza .gruppo-post > .gruppo-post-titolo").first()
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

for (const ateneo of ["cafoscari", "sapienza"]) {
  test(`${ateneo}: missione e avanzamento usano lo stesso denominatore personalizzato`, async ({ page }) => {
    await preparaZaino(page, ateneo, {}, {
      area: "",
      livello: "L",
      lingue: [],
      extraUE: null,
      ricercaTesi: null,
    });
    await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

    for (const valore of [true, false, null]) {
      const esito = await page.evaluate(({ valore }) => {
        window.eval(`ZAINO.fase = "selezionato";
          ZAINO.profilo.extraUE = ${JSON.stringify(valore)};
          ZAINO.profilo.ricercaTesi = ${JSON.stringify(valore)};`);
        const applicabili = window.vociPostApplicabili();
        const spunte = Object.fromEntries(applicabili.map(voce => [voce.id, true]));
        window.eval(`ZAINO.checklistPost = ${JSON.stringify(spunte)}`);
        const missione = window.calcolaMissione();
        const partenza = window.calcolaFasi().find(fase => fase.tappa === "partenza");
        window.renderMissione();
        return {
          n: applicabili.length,
          missione: missione.tipo,
          stepperFatto: partenza.fatto,
          riassunto: partenza.riassunto,
        };
      }, { valore });

      const base = ateneo === "cafoscari" ? 24 : 26;
      const condizioniAttive = valore === true ? (ateneo === "cafoscari" ? 2 : 1) : 0;
      expect(esito.n).toBe(base + condizioniAttive);
      expect(esito.missione).toBe("completo");
      expect(esito.stepperFatto).toBe(true);
      expect(esito.riassunto).toContain(`${esito.n}/${esito.n}`);
    }
  });
}

test("le avvertenze non hanno checkbox, le opzioni restano spuntabili e le risposte mancanti sono indicate", async ({ page }) => {
  await preparaZaino(page, "cafoscari", {}, {
    area: "0311",
    livello: "L",
    lingue: [],
    extraUE: null,
    ricercaTesi: null,
  });
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await usaPorta(page, "#fase-selezionato", false);

  await expect(page.locator(".profilo-post-invito")).toBeVisible();
  await expect(page.locator(".zaino-da-sapere")).not.toHaveCount(0);
  await expect(page.locator(".zaino-da-sapere input[type='checkbox']")).toHaveCount(0);
  await expect(page.locator(".zaino-opzioni input[type='checkbox']")).not.toHaveCount(0);
});

test("il form profilo e un successivo onboarding conservano extraUE e ricercaTesi", async ({ page }) => {
  await preparaZaino(page, "cafoscari", {}, {
    area: "0311",
    livello: "L",
    lingue: [],
    extraUE: null,
    ricercaTesi: null,
  });
  await page.goto("/index.html#profilo", { waitUntil: "domcontentloaded" });

  await page.locator("#extra-ue-v2").selectOption("true");
  await page.locator("#ricerca-tesi-v2").selectOption("false");
  await page.locator("#form-profilo-v2 button[type='submit']").click();

  const risposte = await page.evaluate(() => {
    window.eval(`
      window._onboardingArea = ZAINO.profilo.area;
      window._onboardingDipartimento = ZAINO.profilo.dipartimento;
    `);
    window.completaOnboarding("L", []);
    return window.eval(`({
      extraUE: ZAINO.profilo.extraUE,
      ricercaTesi: ZAINO.profilo.ricercaTesi
    })`);
  });

  expect(risposte).toEqual({ extraUE: true, ricercaTesi: false });
});

test("a 390×844 la Home pre-bando mostra progresso e mossa principale nel primo schermo", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await preparaZaino(page, "cafoscari", {}, {
    area: "0311",
    livello: "L",
    lingue: [],
    extraUE: false,
    ricercaTesi: false,
  }, { percorso: "2027/28", dati: "2026/27" });
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  await expect(page.locator("#badge-bando")).toHaveText(
    "Bando 2027/28 non ancora uscito · dati 2026/27"
  );
  await expect(page.locator("#missione-titolo")).toHaveText(
    "Il bando 2027/28 non è ancora uscito"
  );
  await expect(page.locator("#btn-fatto")).toHaveText("Esplora le mete");
  await expect(page.locator(".home-hero-claim")).toHaveCount(0);
  await expect(page.locator("#card-mappa-home")).toHaveCount(0);
  await expect(page.locator(".percorso-modifica-profilo")).toHaveCount(0);

  const posizione = await page.evaluate(() => {
    const progresso = document.querySelector(".percorso-wrap").getBoundingClientRect();
    const missione = document.getElementById("missione-card").getBoundingClientRect();
    const titolo = document.getElementById("missione-titolo").getBoundingClientRect();
    const azione = document.getElementById("btn-fatto").getBoundingClientRect();
    return {
      progressoPrima: progresso.top < missione.top,
      titoloNelPrimoSchermo: titolo.bottom <= innerHeight,
      azioneNelPrimoSchermo: azione.bottom <= innerHeight,
    };
  });
  expect(posizione.progressoPrima).toBe(true);
  expect(posizione.titoloNelPrimoSchermo).toBe(true);
  expect(posizione.azioneNelPrimoSchermo).toBe(true);

  await page.screenshot({
    path: "test-results/v4-home-prebando-390.png",
    fullPage: true,
  });
});

test("le tre fasi per modo corrente e pre-bando producono sei Home coerenti", async ({ page }) => {
  await preparaZaino(page, "cafoscari", {}, {
    area: "0311",
    livello: "L",
    lingue: [],
    extraUE: false,
    ricercaTesi: false,
  });
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  const viste = await page.evaluate(() => {
    const risultati = {};
    for (const [modo, cicli] of Object.entries({
      corrente: { dati: "2026/27", percorso: "2026/27" },
      "pre-bando": { dati: "2026/27", percorso: "2027/28" },
    })) {
      for (const fase of ["esplorando", "in-attesa", "selezionato"]) {
        window.eval(`
          ZAINO.cicloDati = "${cicli.dati}";
          ZAINO.cicloPercorso = "${cicli.percorso}";
          ZAINO.fase = "${fase}";
        `);
        window.renderHome();
        window.renderChecklistPost();
        window.renderMissione();
        risultati[`${modo}/${fase}`] = {
          titolo: document.getElementById("missione-titolo").textContent,
          dettaglio: document.getElementById("missione-dettaglio").textContent,
          badge: document.getElementById("badge-bando").textContent,
          badgeVisibile: document.getElementById("badge-bando").style.display !== "none",
          modoPreBando: window.inPreBando(),
        };
      }
    }
    return risultati;
  });

  expect(Object.keys(viste)).toHaveLength(6);
  expect(viste["corrente/esplorando"].modoPreBando).toBe(false);
  expect(viste["corrente/esplorando"].titolo).toContain("Il bando 2026/2027 è chiuso");
  expect(viste["pre-bando/esplorando"].modoPreBando).toBe(true);
  expect(viste["pre-bando/esplorando"].titolo).toBe("Il bando 2027/28 non è ancora uscito");
  for (const modo of ["corrente", "pre-bando"]) {
    expect(viste[`${modo}/in-attesa`].titolo).toContain("Hai inviato la domanda");
    expect(viste[`${modo}/selezionato`].titolo).toContain("Accetta il posto");
  }
  expect(viste["pre-bando/in-attesa"].badge).toBe(
    "Bando 2027/28 non ancora uscito · dati 2026/27"
  );
  expect(viste["corrente/in-attesa"].badge).toContain("Bando 2026/27");
  expect(viste["corrente/selezionato"].badgeVisibile).toBe(false);
  expect(viste["pre-bando/selezionato"].badgeVisibile).toBe(false);
});
