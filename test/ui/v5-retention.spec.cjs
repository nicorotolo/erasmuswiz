const fs = require("node:fs");
const { test, expect } = require("@playwright/test");

async function preparaNuovo(page) {
  await page.addInitScript(() => {
    if (localStorage.getItem("__v5_nuovo_pronto")) return;
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
    localStorage.setItem("__v5_nuovo_pronto", "1");
  });
}

async function preparaCompletato(page, fase = "esplorando") {
  await page.addInitScript(({ fase }) => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        cafoscari: {
          profilo: {
            nome: "Ada",
            area: "0311",
            dipartimento: "Economia",
            livello: "L",
            lingue: [],
            extraUE: false,
            ricercaTesi: false,
          },
          checklist: {},
          metePreferite: [],
          schedina: [],
          fase,
          checklistPost: {},
          onboardingFatto: true,
          autoverifica: {},
          zainoCelebrato: false,
          wizardMete: true,
          la: { metaAperta: null, bozzePerMeta: {} },
          cicloPercorso: "2027/28",
          cicloDati: "2026/27",
          storico: {},
          schedinaCiclo: {},
        },
      },
    }));
  }, { fase });
}

async function arrivaAllaCodaSveglia(page, esitoMete = "salta") {
  await page.locator("#benvenuto-inizia").click();
  await page.locator(
    "#benvenuto-scelte [data-fase='esplorando']"
  ).click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", {
    hasText: "Ca' Foscari",
  }).click();
  await page.locator(
    "#benvenuto-scelte .benvenuto-scelte-riga .benvenuto-scelta"
  ).first().click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", {
    hasText: "Triennale",
  }).click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", {
    hasText: "Salta per ora",
  }).click();
  await page.locator(
    `#benvenuto-scelte [data-esito-mete='${esitoMete}']`
  ).click();
}

test("V5 §8.8: la coda della sveglia compare dopo l'esito e conserva modo-entrata", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await arrivaAllaCodaSveglia(page);

  await expect(page.locator("#benvenuto-scelte[data-coda-sveglia='true']")).toBeVisible();
  await expect(page.locator("#benvenuto-scelte")).toContainText(
    "Ti avviso quando esce il bando?"
  );
  await expect(page.locator("[data-sveglia='si']")).toHaveText(
    "Sì, mettimelo in calendario"
  );
  await expect(page.locator("[data-sveglia='no']")).toHaveText("No, grazie");
  await expect(page.locator("body")).toHaveClass(/modo-entrata/);
});

test("V5 §8.9: No porta alla home e il reload non riapre la coda", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await arrivaAllaCodaSveglia(page);
  await page.locator("[data-sveglia='no']").click();

  await expect(page.locator("body")).not.toHaveClass(/modo-entrata/);
  await expect(page.locator("#missione-card")).toBeVisible();
  await expect(page.locator("#home-benvenuto")).not.toBeVisible();

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#home-benvenuto")).not.toBeVisible();
  await expect(page.locator("[data-coda-sveglia='true']")).not.toBeVisible();
});

test("V5 review: l'esito sì attraversa la coda e arriva alla ricerca Mete", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await arrivaAllaCodaSveglia(page, "si");

  const downloadPromise = page.waitForEvent("download");
  await page.locator("[data-sveglia='si']").click();
  await downloadPromise;

  await expect(page).toHaveURL(/#mete$/);
  await expect(page.locator("#cerca-mete")).toBeFocused();
});

test("V5 §8.10: la nav abbandona la coda e #mete a freddo non impila l'entrata", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await arrivaAllaCodaSveglia(page);
  await page.locator(".nav-item[data-tab='mete']").click();

  await expect(page.locator("body")).not.toHaveClass(/modo-entrata/);
  await expect(page.locator("#tab-mete")).toBeVisible();
  await expect(page.locator("#home-benvenuto")).not.toBeVisible();

  await page.goto("/index.html#mete", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#tab-mete")).toBeVisible();
  await expect(page.locator("body")).not.toHaveClass(/modo-entrata/);
  await expect(page.locator("[data-coda-sveglia='true']")).not.toBeVisible();
});

test("V5 §8.11: un utente completato non viene intercettato e i vecchi rami restano", async ({ page }) => {
  await preparaCompletato(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  for (const tab of ["oggi", "mete", "percorso"]) {
    await page.locator(`.nav-item[data-tab='${tab}']`).click();
    await expect(page.locator(`#tab-${tab}`)).toBeVisible();
    await expect(page.locator("[data-coda-sveglia='true']")).not.toBeVisible();
    await expect(page.locator(".nav-item[data-tab]")).toHaveCount(3);
  }

  const tipi = await page.evaluate(() => {
    const risultato = {};
    window.eval('ZAINO.cicloPercorso = ZAINO.cicloDati; ZAINO.fase = "esplorando"');
    risultato.chiuso = window.calcolaMissione().tipo;
    window.eval('ZAINO.fase = "in-attesa"');
    risultato.attesa = window.calcolaMissione().tipo;
    window.eval('ZAINO.fase = "selezionato"');
    risultato.selezionato = window.calcolaMissione().tipo;
    return risultato;
  });
  expect(tipi.chiuso).toBe("bando-chiuso");
  expect(tipi.attesa).toBe("in-attesa");
  expect(tipi.selezionato).not.toBe("pre-bando");
});

test("V5 §8.12: la home offre la sveglia solo nel ramo pre-bando", async ({ page }) => {
  await preparaCompletato(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  const btn = page.locator("#btn-come");
  await expect(btn).toHaveText("Avvisami quando esce");
  await btn.click();
  await expect(page.locator("[data-offerta-sveglia-home='true']")).toBeVisible();
  await expect(page.locator("[data-offerta-sveglia-home='true']")).toContainText(
    "Sì, mettimelo in calendario"
  );

  await page.evaluate(() => {
    window.eval("ZAINO.cicloPercorso = ZAINO.cicloDati");
    window.renderMissione();
  });
  await expect(btn).toHaveText("Vedi le date del ciclo");
  await expect(page.locator("[data-offerta-sveglia-home='true']")).not.toBeVisible();
});

test("V5 §8.13: Aggiungi tutte le date scarica un file con un evento e conserva i singoli", async ({ page }) => {
  await preparaCompletato(page);
  await page.goto("/index.html#percorso", { waitUntil: "domcontentloaded" });

  const singoli = page.locator(".cand-btn-ics:not(.cand-btn-ics-tutte)");
  await expect(singoli).toHaveCount(4);
  await expect(singoli.first()).toHaveText("🗓 Aggiungi al calendario");

  // Il calendario vive dentro la stazione 3, che è un `<details>` chiuso
  // finché non è la tappa corrente: senza aprirla il bottone esiste nel DOM
  // ma non è cliccabile. È il motivo per cui l'offerta principale della
  // sveglia sta altrove (entrata e Home), non qui dentro.
  await page.locator("#stazione-candidatura .stazione-testa").click();
  await expect(page.locator(".cand-btn-ics-tutte")).toBeVisible();

  const downloadPromise = page.waitForEvent("download");
  await page.locator(".cand-btn-ics-tutte").click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("erasmuswiz-date.ics");
  const percorso = await download.path();
  const ics = fs.readFileSync(percorso, "utf8");
  expect((ics.match(/BEGIN:VEVENT/g) || []).length).toBe(1);
  expect(ics).toContain("UID:bando-atteso-cafoscari@erasmuswiz");
  expect(ics).toContain("TRIGGER:-P7D");
  expect(ics).toContain("TRIGGER:-P1D");
});

// Revisione V5 (Nicola, 29/07). Il difetto che nessuna prova poteva vedere:
// `click()` di Playwright scorre da solo prima di premere, quindi un bottone
// sotto il bordo dello schermo passa comunque. Qui non si clicca: si MISURA
// dove cade il bottone rispetto alla finestra, sulle DUE schermate finali
// dell'entrata — quella di esito (V3, già online) e la coda della sveglia.
test("V5 review: a 375×812 i bottoni delle due schermate finali stanno dentro lo schermo", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  await page.locator("#benvenuto-inizia").click();
  await page.locator("#benvenuto-scelte [data-fase='esplorando']").click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Ca' Foscari" }).click();
  await page.locator("#benvenuto-scelte .benvenuto-scelte-riga .benvenuto-scelta").first().click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Triennale" }).click();

  // ⚠️ Le lingue si DICHIARANO, non si saltano: con una lingua dichiarata
  // compare la legenda della compatibilità sulla mappa, e la pagina si
  // allunga. È in quella condizione che il difetto è stato misurato — con
  // «Salta per ora» la prova resterebbe verde anche col difetto dentro.
  await page.locator("#benvenuto-scelte select").first().selectOption("Inglese");
  await page.locator("#benvenuto-scelte select").nth(1).selectOption("B2");
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Fatto" }).click();

  // ⚠️ Misurare subito dopo il clic dà un fotogramma a scorrimento ancora in
  // corso, e la posizione letta non è quella che lo studente vede: con lo
  // scorrimento in volo la prova passava anche col difetto dentro. Si aspetta
  // che `scrollY` smetta di cambiare, poi si misura.
  const scorrimentoFermo = async () => {
    let precedente = null;
    for (let i = 0; i < 30; i++) {
      const ora = await page.evaluate(() => Math.round(window.scrollY));
      if (ora === precedente) return;
      precedente = ora;
      await page.waitForTimeout(100);
    }
  };
  const dentroLoSchermo = async (selettore) => {
    await scorrimentoFermo();
    return page.evaluate((sel) => {
      const e = document.querySelector(sel);
      if (!e) return { trovato: false };
      const r = e.getBoundingClientRect();
      return { trovato: true, top: Math.round(r.top), bottom: Math.round(r.bottom), h: window.innerHeight };
    }, selettore);
  };

  // Schermata di esito: l'ULTIMO dei tre bottoni deve essere visibile senza
  // scorrere, altrimenti si legge la domanda e non tutte le risposte.
  const salta = await dentroLoSchermo("[data-esito-mete='salta']");
  expect(salta.trovato).toBe(true);
  expect(salta.bottom, `ultimo bottone dell'esito a ${salta.bottom}px su ${salta.h}px`).toBeLessThanOrEqual(salta.h);
  expect(salta.top).toBeGreaterThanOrEqual(0);

  // Coda della sveglia: stessa misura sui suoi due bottoni.
  await page.locator("[data-esito-mete='si']").click();
  await expect(page.locator("[data-sveglia='no']")).toBeVisible();
  const no = await dentroLoSchermo("[data-sveglia='no']");
  expect(no.bottom, `«No, grazie» a ${no.bottom}px su ${no.h}px`).toBeLessThanOrEqual(no.h);
  const domanda = await dentroLoSchermo("#benvenuto-scelte .benvenuto-landing-titolo");
  expect(domanda.top, "la domanda è sopra il bordo alto").toBeGreaterThanOrEqual(0);
});
