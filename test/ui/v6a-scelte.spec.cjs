const { test, expect } = require("@playwright/test");

const PAGINA = "/index.html";
const IDS = [
  "00-cz-brno05-0210-arts",
  "01-cz-praha07-0210-arts",
  "02-d-berlin02-0210-arts",
  "03-d-kassel01-0210-arts",
  "04-d-gotting01-0210-arts",
  "05-d-frankfu01-0310-social-and-behavioural-sciences",
];

function raccogliErrori(page) {
  const errori = [];
  page.on("console", messaggio => {
    if (messaggio.type() === "error") errori.push(messaggio.text());
  });
  page.on("pageerror", errore => errori.push(errore.message));
  return errori;
}

async function preparaZaino(page, {
  ateneo = "cafoscari",
  preferite = [],
  schedina = preferite,
  profilo = null,
  ateneoSalvato = ateneo,
} = {}) {
  await page.addInitScript(({ ateneo, preferite, schedina, profilo, ateneoSalvato }) => {
    // L'init script gira anche ai reload: si semina solo al primo caricamento,
    // altrimenti la prova di persistenza cancellerebbe lo stato da verificare.
    if (localStorage.getItem("erasmuswiz-zaino")) return;
    localStorage.clear();
    sessionStorage.clear();
    if (ateneoSalvato) {
      localStorage.setItem("erasmuswiz_ateneo", ateneoSalvato);
    }
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        [ateneo]: {
          profilo,
          checklist: {},
          metePreferite: preferite,
          schedina,
          fase: "esplorando",
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
  }, { ateneo, preferite, schedina, profilo, ateneoSalvato });
}

test("V6a rotta: Ca' Foscari si apre a freddo sull'elenco e senza errori", async ({ page }) => {
  const errori = raccogliErrori(page);
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.goto(`${PAGINA}#mete/scelte/cafoscari`, {
    waitUntil: "domcontentloaded",
  });

  await expect(page.locator("#tab-mete")).toBeVisible();
  await expect(page.locator("#sezione-preferite")).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.activeElement?.id))
    .toBe("sezione-preferite");
  await expect.poll(() => page.evaluate(() => location.hash))
    .toBe("#mete/scelte/cafoscari");
  expect(await page.evaluate(() => window.ATENEO_ATTIVO)).toBe("cafoscari");
  expect(errori).toEqual([]);
});

test("V6a rotta: Sapienza prevale sul Ca' Foscari salvato senza riscriverlo", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
  });
  await page.goto(`${PAGINA}#mete/scelte/sapienza`, {
    waitUntil: "domcontentloaded",
  });

  await expect(page.locator("#tab-mete")).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.activeElement?.id))
    .toBe("sezione-preferite");
  const stato = await page.evaluate(() => ({
    attivo: window.ATENEO_ATTIVO,
    salvato: localStorage.getItem("erasmuswiz_ateneo"),
    hash: location.hash,
  }));
  expect(stato).toEqual({
    attivo: "sapienza",
    salvato: "cafoscari",
    hash: "#mete/scelte/sapienza",
  });
});

test("V6a lista: si stellano più di cinque mete e l'ordine sopravvive al ricaricamento", async ({ page }) => {
  await preparaZaino(page);
  await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });

  for (let i = 0; i < 6; i += 1) {
    await page.locator(".btn-preferita:not(.preferita)").first().click();
  }
  await expect(page.locator(".schedina-slot")).toHaveCount(6);
  const prima = await page.locator(".schedina-nome").allTextContents();
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator(".schedina-slot")).toHaveCount(6);
  expect(await page.locator(".schedina-nome").allTextContents()).toEqual(prima);
});

test("V6a riordino da tastiera: fuoco, annuncio e bordi restano coerenti", async ({ page }) => {
  await preparaZaino(page, { preferite: IDS.slice(0, 3) });
  await page.goto(`${PAGINA}#mete/scelte/cafoscari`, {
    waitUntil: "domcontentloaded",
  });

  const regionePrima = await page.locator("#annunci-scelte").elementHandle();
  const nomiPrima = await page.locator(".schedina-nome").allTextContents();
  const giuSeconda = page.locator(".schedina-slot").nth(1)
    .getByTitle("Sposta giù");
  const titoloComando = await giuSeconda.getAttribute("title");
  await giuSeconda.focus();
  await page.keyboard.press("Enter");

  const nomiDopo = await page.locator(".schedina-nome").allTextContents();
  expect(nomiDopo).toEqual([nomiPrima[0], nomiPrima[2], nomiPrima[1]]);
  await expect(page.locator("#annunci-scelte")).toContainText(
    `${nomiPrima[1]} spostata in posizione 3 di 3.`
  );
  const dopoSpostamento = await page.evaluate(() => ({
    stessoSlot: document.activeElement?.closest(".schedina-slot")
      === document.querySelectorAll(".schedina-slot")[2],
    stessoComando: document.activeElement?.title,
  }));
  expect(dopoSpostamento.stessoSlot).toBe(true);
  expect(dopoSpostamento.stessoComando).toBe(titoloComando);
  expect(await page.evaluate(
    nodo => nodo === document.querySelector("#annunci-scelte") && nodo.isConnected,
    regionePrima
  )).toBe(true);

  const ordinePrimaBordi = await page.evaluate(() => ZAINO.schedina.slice());
  for (const comando of [
    page.locator(".schedina-slot").first().getByTitle("Sposta su"),
    page.locator(".schedina-slot").last().getByTitle("Sposta giù"),
  ]) {
    await comando.focus();
    await page.evaluate(() => document.activeElement.click());
  }
  expect(await page.evaluate(() => ZAINO.schedina.slice()))
    .toEqual(ordinePrimaBordi);
});

test("V6a rimozione: Annulla ripristina lo slot; navigare rende definitiva la rimozione", async ({ page }) => {
  await preparaZaino(page, { preferite: IDS.slice(0, 3) });
  await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });
  const nome = await page.locator(".schedina-nome").nth(1).textContent();

  await page.locator(".schedina-slot").nth(1)
    .getByTitle("Rimuovi dalle tue preferite").click();
  const annulla = page.getByRole("button", { name: "Annulla" });
  await expect(page.locator(".schedina-slot-rimosso")).toHaveCount(1);
  await expect(annulla).toBeFocused();
  await annulla.press("Enter");
  await expect(page.locator(".schedina-nome").nth(1)).toHaveText(nome);

  await page.locator(".schedina-slot").nth(1)
    .getByTitle("Rimuovi dalle tue preferite").click();
  await page.locator(".nav-item[data-tab='oggi']").click();
  await page.locator(".nav-item[data-tab='mete']").click();
  await expect(page.locator(".schedina-slot-rimosso")).toHaveCount(0);
  expect(await page.locator(".schedina-nome").allTextContents())
    .not.toContain(nome);
});

test("V6a orfana: una meta sparita dai dati resta visibile e rimovibile", async ({ page }) => {
  await preparaZaino(page, {
    preferite: [IDS[0], "meta-non-piu-nei-dati"],
    schedina: ["meta-non-piu-nei-dati", IDS[0]],
  });
  await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });

  const orfana = page.locator(".schedina-slot-orfano");
  await expect(orfana).toHaveCount(1);
  await expect(orfana).toContainText("meta-non-piu-nei-dati");
  await expect(orfana.getByTitle("Rimuovi dalle tue preferite")).toBeEnabled();
});

for (const profilo of [
  null,
  {
    area: "0210",
    livello: "L",
    lingue: [{ lingua: "Inglese", livello: "B2", certificata: false }],
  },
]) {
  test(`V6a copy: nessuna promessa nel tab Mete (${profilo ? "profilo pieno" : "profilo vuoto"})`, async ({ page }) => {
    await preparaZaino(page, { preferite: IDS.slice(0, 2), profilo });
    await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });
    const testo = await page.locator("#tab-mete").textContent();

    expect(testo).not.toMatch(/\b\d+\s*\/\s*5\b|\bn di 5\b|restano 2/i);
    expect(testo).not.toMatch(/invierai|che invii|porterai|consegni|riunione di assegnazione|candidatura/i);
    expect(testo).not.toMatch(/schedina/i);
    expect(testo).not.toContain("Le tue 5 scelte");
    expect(testo).not.toContain("Massimo 5: l'ordine conta");
  });
}

test("V6a ordine blocchi: ricerca precede filtri; sul telefono la mappa è sotto l'elenco", async ({ page }) => {
  await preparaZaino(page, {
    preferite: IDS.slice(0, 2),
    profilo: {
      area: "0210",
      dipartimento: "Economia",
      livello: "L",
      lingue: [{ lingua: "Inglese", livello: "B2", certificata: false }],
    },
  });
  await page.goto(`${PAGINA}#mete`, { waitUntil: "domcontentloaded" });

  for (const larghezza of [390, 768, 1280]) {
    await page.setViewportSize({ width: larghezza, height: 900 });
    const top = await page.evaluate(() => {
      const y = selettore => {
        const r = document.querySelector(selettore).getBoundingClientRect();
        return r.width > 0 && r.height > 0 ? r.top : null;
      };
      return {
        ricerca: y(".cerca-mete-barra"),
        filtri: y("#filtri-mete-chip"),
        elenco: y("#sezione-preferite"),
        griglia: y("#griglia-mete-v2"),
        mappa: y("#card-mappa-mete"),
      };
    });
    expect(top.ricerca, "la ricerca deve avere un riquadro").not.toBeNull();
    expect(top.filtri, "i filtri devono avere un riquadro").not.toBeNull();
    expect(top.elenco, "l'elenco deve avere un riquadro").not.toBeNull();
    expect(top.griglia, "la griglia deve avere un riquadro").not.toBeNull();
    expect(top.ricerca).toBeLessThan(top.filtri);
    if (top.mappa === null) {
      test.info().annotations.push({
        type: "mappa non disegnata",
        description: `${larghezza}px: nessuna asserzione geometrica sulla mappa`,
      });
    } else if (larghezza < 768) {
      expect(top.elenco).toBeLessThan(top.mappa);
      expect(top.griglia).toBeLessThan(top.mappa);
    } else {
      expect(top.mappa).toBeLessThan(top.elenco);
    }
  }
});

test("V6a router: i tab scrivono hash nudi e una rotta a due livelli ignota cade su Oggi", async ({ page }) => {
  await preparaZaino(page);
  await page.goto(`${PAGINA}#mete/scelte/cafoscari`, {
    waitUntil: "domcontentloaded",
  });
  for (const tab of ["oggi", "mete", "percorso"]) {
    await page.locator(`.nav-item[data-tab="${tab}"]`).click();
    await expect.poll(() => page.evaluate(() => location.hash)).toBe(`#${tab}`);
  }
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, {
    waitUntil: "domcontentloaded",
  });
  await expect(page.locator("#tab-oggi")).toBeVisible();
  await expect.poll(() => page.evaluate(() => location.hash)).toBe("#oggi");
});
