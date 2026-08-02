const path = require("node:path");
const { test, expect } = require("@playwright/test");

const PAGINA = "/index.html";

function raccogliErrori(page) {
  const errori = [];
  page.on("console", messaggio => {
    if (messaggio.type() === "error") {
      errori.push(`console: ${messaggio.text()}`);
    }
  });
  page.on("pageerror", errore => {
    errori.push(`pagina: ${errore.message}`);
  });
  return errori;
}

async function preparaAvvioFreddo(page) {
  await page.addInitScript(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (errore) {}
  });
}

async function attendiSezione(page, tab, hashAtteso) {
  const sezione = page.locator(`#tab-${tab}`);
  await expect(sezione).toBeVisible();
  await expect.poll(() => page.evaluate(() => location.hash)).toBe(hashAtteso);
  await expect.poll(() => page.evaluate(() => document.activeElement?.id))
    .toBe(`tab-${tab}`);
  await expect(sezione).toHaveClass(/attivo/);
}

const avviiFreddi = [
  { nome: "hash vuoto", hash: "", tab: "oggi", canonico: "" },
  { nome: "#oggi", hash: "#oggi", tab: "oggi", canonico: "#oggi" },
  { nome: "#mete", hash: "#mete", tab: "mete", canonico: "#mete" },
  { nome: "#percorso", hash: "#percorso", tab: "percorso", canonico: "#percorso" },
  { nome: "#profilo", hash: "#profilo", tab: "profilo", canonico: "#profilo" },
  { nome: "alias #timeline", hash: "#timeline", tab: "percorso", canonico: "#percorso" },
  { nome: "hash sconosciuto", hash: "#non-esiste", tab: "oggi", canonico: "#oggi" },
  {
    nome: "rotta futura #learning-agreement/sapienza",
    hash: "#learning-agreement/sapienza",
    tab: "oggi",
    canonico: "#oggi",
  },
];

for (const caso of avviiFreddi) {
  test(`avvio a freddo — ${caso.nome}`, async ({ page }) => {
    const errori = raccogliErrori(page);
    await preparaAvvioFreddo(page);
    await page.goto(`${PAGINA}${caso.hash}`, { waitUntil: "domcontentloaded" });

    await attendiSezione(page, caso.tab, caso.canonico);
    const nomeAccessibile = await page.locator(`#tab-${caso.tab}`).evaluate(sezione => {
      const id = sezione.getAttribute("aria-labelledby");
      return id ? document.getElementById(id)?.textContent.trim() : "";
    });
    expect(nomeAccessibile).not.toBe("");
    expect(errori).toEqual([]);
  });
}

test("la rotta Sapienza carica Sapienza senza cambiare l'ateneo salvato", async ({ page }) => {
  const errori = raccogliErrori(page);
  await preparaAvvioFreddo(page);
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, {
    waitUntil: "domcontentloaded",
  });
  await attendiSezione(page, "oggi", "#oggi");

  const stato = await page.evaluate(() => ({
    ateneoAttivo: window.ATENEO_ATTIVO,
    ateneiCaricati: window.ATENEI_CARICATI,
    etichetta: window.ATENEO_LABEL,
    meteAttive: window.METE.length,
    meteSapienza: window.ATENEI.sapienza?.mete.length,
    ateneoPersistito: localStorage.getItem("erasmuswiz_ateneo"),
  }));

  expect(stato.ateneoAttivo).toBe("sapienza");
  expect(stato.ateneiCaricati).toEqual(["sapienza"]);
  expect(stato.etichetta).toContain("Sapienza");
  expect(stato.meteAttive).toBeGreaterThan(0);
  expect(stato.meteAttive).toBe(stato.meteSapienza);
  expect(stato.ateneoPersistito).toBeNull();
  expect(errori).toEqual([]);
});

async function navigaDallInterfaccia(page, tab) {
  if (tab === "profilo") {
    await page.locator("#btn-drawer").click();
    await expect(page.locator("#drawer")).toBeVisible();
    await page.locator('[data-drawer-goto="profilo"]').click();
  } else {
    await page.locator(`.nav-item[data-tab="${tab}"]`).click();
  }
  await attendiSezione(page, tab, `#${tab}`);
}

test("10 navigazioni, 10 Indietro e 10 Avanti conservano URL, schermata e fuoco", async ({ page }) => {
  const errori = raccogliErrori(page);
  await preparaAvvioFreddo(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await attendiSezione(page, "oggi", "");

  const rotte = [
    "mete", "percorso", "profilo", "oggi", "profilo",
    "mete", "oggi", "percorso", "mete", "profilo",
  ];

  for (const tab of rotte) {
    await navigaDallInterfaccia(page, tab);
  }

  for (let i = rotte.length - 1; i >= 0; i -= 1) {
    await page.evaluate(() => history.back());
    const tab = i === 0 ? "oggi" : rotte[i - 1];
    const hash = i === 0 ? "" : `#${tab}`;
    await attendiSezione(page, tab, hash);
  }

  for (const tab of rotte) {
    await page.evaluate(() => history.forward());
    await attendiSezione(page, tab, `#${tab}`);
  }

  expect(errori).toEqual([]);
});

test("ri-cliccare la voce attiva non muove ne' il fuoco ne' la pagina (F6)", async ({ page }) => {
  const errori = raccogliErrori(page);
  await page.addInitScript(() => {
    window.__scrollF6 = [];
    const scrollToNativo = window.scrollTo;
    window.scrollTo = function (...argomenti) {
      window.__scrollF6.push(argomenti[0]);
      return scrollToNativo.apply(this, argomenti);
    };
  });
  await preparaAvvioFreddo(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await navigaDallInterfaccia(page, "mete");

  // Si porta la pagina in uno stato che un riclic NON deve rimettere a posto:
  // fuoco fuori dalla sezione e pagina scesa. Senza questo la prova passerebbe
  // anche con un router che rifa' tutto da capo.
  await page.keyboard.press("Tab");
  await page.evaluate(() => window.scrollTo({ top: 400, behavior: "auto" }));
  const prima = await page.evaluate(() => {
    window.__scrollF6 = []; // lo scroll di preparazione non e' sotto esame
    return { voci: history.length, y: Math.round(window.scrollY) };
  });
  expect(prima.y, "la pagina deve poter scorrere, o la prova non prova niente")
    .toBeGreaterThan(0);

  // (a) riclic dall'interfaccia. La nav prende il fuoco come qualunque
  //     bottone — e' il browser, non il router: quel che conta e' che la
  //     SEZIONE non se lo riprenda e che la pagina non risalga.
  await page.locator('.nav-item[data-tab="mete"]').click();
  const dopoClic = await page.evaluate(() => ({
    hash: location.hash,
    voci: history.length,
    y: Math.round(window.scrollY),
    sezioneHaIlFuoco: document.activeElement?.id === "tab-mete",
    chiamateScroll: window.__scrollF6.length,
  }));
  expect(dopoClic.hash).toBe("#mete");
  expect(dopoClic.voci, "la cronologia non si sporca").toBe(prima.voci);
  expect(dopoClic.y, "la pagina non risale").toBe(prima.y);
  expect(dopoClic.sezioneHaIlFuoco, "la sezione non si riprende il fuoco").toBe(false);
  expect(dopoClic.chiamateScroll, "nessuno scroll richiesto").toBe(0);

  // (b) la stessa regola chiesta al router in purezza: senza il clic di mezzo,
  //     il fuoco su un controllo qualunque deve restare esattamente dov'e'.
  await page.keyboard.press("Tab");
  await page.evaluate(() => { document.activeElement.dataset.f6 = "1"; });
  const dopoRouter = await page.evaluate(() => {
    const esito = window.vaiA("mete");
    return {
      esito,
      fuocoFermo: document.activeElement?.dataset.f6 === "1",
      y: Math.round(window.scrollY),
      chiamateScroll: window.__scrollF6.length,
    };
  });
  expect(dopoRouter.esito, "la rotta e' valida...").toBe(true);
  expect(dopoRouter.fuocoFermo, "...ma non tocca il fuoco").toBe(true);
  expect(dopoRouter.y).toBe(prima.y);
  expect(dopoRouter.chiamateScroll).toBe(0);

  expect(errori).toEqual([]);
});

test("il drawer restituisce il fuoco, poi la destinazione o la tendina prevalgono", async ({ page }) => {
  await preparaAvvioFreddo(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  await page.locator("#btn-drawer").click();
  await page.locator('[data-drawer-goto="profilo"]').click();
  await attendiSezione(page, "profilo", "#profilo");

  await page.locator('.nav-item[data-tab="oggi"]').click();
  await attendiSezione(page, "oggi", "#oggi");
  await page.locator("#btn-drawer").click();
  await page.locator("#drawer-cambia-ateneo").click();

  await expect(page.locator("#tab-profilo")).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.activeElement?.id))
    .toBe("select-ateneo");
});

test("il mouse non mostra l'anello sulla sezione; il Tab lo mostra alla prima fermata", async ({ page }) => {
  await preparaAvvioFreddo(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await page.locator('.nav-item[data-tab="mete"]').click();
  await attendiSezione(page, "mete", "#mete");

  expect(await page.locator("#tab-mete").evaluate(
    sezione => sezione.matches(":focus-visible")
  )).toBe(false);

  await page.keyboard.press("Tab");
  const fermata = await page.evaluate(() => {
    const el = document.activeElement;
    const stile = getComputedStyle(el);
    return {
      id: el.id,
      focusVisible: el.matches(":focus-visible"),
      anelloVisibile:
        (stile.outlineStyle !== "none" && parseFloat(stile.outlineWidth) > 0) ||
        stile.boxShadow !== "none",
    };
  });
  expect(fermata.id).not.toBe("tab-mete");
  expect(fermata.focusVisible).toBe(true);
  expect(fermata.anelloVisibile).toBe(true);
});

test("prefers-reduced-motion elimina lo scorrimento animato, anche in Cambia ateneo", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript(() => {
    window.__scrollV1 = [];
    const scrollToNativo = window.scrollTo;
    window.scrollTo = function (...argomenti) {
      window.__scrollV1.push({ tipo: "window", opzioni: argomenti[0] });
      return scrollToNativo.apply(this, argomenti);
    };
    const scrollIntoViewNativo = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (...argomenti) {
      window.__scrollV1.push({
        tipo: "elemento",
        id: this.id,
        opzioni: argomenti[0],
      });
      return scrollIntoViewNativo.apply(this, argomenti);
    };
  });
  await preparaAvvioFreddo(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  await page.locator('.nav-item[data-tab="mete"]').click();
  await page.locator("#btn-drawer").click();
  await page.locator("#drawer-cambia-ateneo").click();

  const misura = await page.evaluate(() => ({
    scrollCss: getComputedStyle(document.documentElement).scrollBehavior,
    chiamate: window.__scrollV1,
  }));
  expect(misura.scrollCss).toBe("auto");
  expect(misura.chiamate.some(chiamata => chiamata.tipo === "window")).toBe(true);
  expect(misura.chiamate.some(
    chiamata => chiamata.tipo === "elemento" && chiamata.id === "select-ateneo"
  )).toBe(true);
  for (const chiamata of misura.chiamate) {
    if (chiamata.opzioni && typeof chiamata.opzioni === "object") {
      expect(chiamata.opzioni.behavior).not.toBe("smooth");
    }
  }
});

test("diff visivo nullo sulle sei invarianti DOM della baseline", async ({ page }) => {
  // La baseline F0 non era una finestra anonima: README.md fissa questo
  // identico profilo Ca' Foscari. Confrontare un altro stato nasconderebbe
  // legittimamente alcuni blocchi e produrrebbe un falso diff.
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 2,
      zaini: {
        cafoscari: {
          profilo: {
            area: "0311",
            livello: "L",
            lingue: [
              { lingua: "Inglese", livello: "B2", certificata: true },
            ],
          },
          checklist: {},
          metePreferite: [],
          schedina: [],
          fase: "domanda",
          checklistPost: {},
          onboardingFatto: true,
          autoverifica: {},
          zainoCelebrato: false,
          wizardMete: false,
          la: { metaAperta: null, bozzePerMeta: {} },
        },
      },
    }));
  });
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await page.addScriptTag({
    path: path.resolve(
      __dirname,
      "../../design/redesign-2026-07/baseline/probe-invarianti.js"
    ),
  });

  const ordineBaseline = {
    // README.md dichiara una fixture con onboarding completato ma, per Oggi,
    // riporta ancora il vecchio solo blocco di benvenuto. V4 applica
    // l'inventario della Home "Adesso": la mappa-riepilogo esce dalla Home,
    // mentre restano intestazione, mossa e progresso.
    oggi: [
      "div.home-header",
      "div#missione-card.missione-card",
      "div.percorso-wrap",
    ],
    mete: [
      "div.sezione-header",
      "div#profilo-strip",
      "div.cerca-mete-barra",
      "div#filtri-mete-chip",
      "div#card-mappa-mete",
      "div#sezione-preferite",
      "div#annunci-scelte",
      "div#griglia-mete-v2",
    ],
    percorso: ["div.sezione-header", "ol.stazioni"],
    profilo: ["div.sezione-header", "form#form-profilo-v2"],
  };

  for (const larghezza of [390, 768, 1280]) {
    await page.setViewportSize({ width: larghezza, height: 900 });
    const esito = await page.evaluate(() => window.__run());

    for (const [tab, misura] of Object.entries(esito)) {
      expect(misura.overflowX, `${larghezza}px ${tab}: overflow`).toBe(0);
      expect(misura.sporgenti, `${larghezza}px ${tab}: elementi sporgenti`).toEqual([]);
      expect(misura.testoTagliato, `${larghezza}px ${tab}: testo tagliato`).toEqual([]);
      expect(misura.cardSovrapposte, `${larghezza}px ${tab}: card sovrapposte`).toEqual([]);
      expect(misura.nav.presente, `${larghezza}px ${tab}: nav presente`).toBe(true);
      expect(misura.nav.visibile, `${larghezza}px ${tab}: nav visibile`).toBe(true);
      expect(misura.nav.pos, `${larghezza}px ${tab}: posizione nav`).toBe("fixed");

      const ordine = misura.blocchi.map(blocco => blocco.sel);
      expect(ordine).toHaveLength(ordineBaseline[tab].length);
      ordineBaseline[tab].forEach((selettore, indice) => {
        expect(
          ordine[indice].startsWith(selettore),
          `${larghezza}px ${tab}: blocco ${indice} deve iniziare con ${selettore}`
        ).toBe(true);
      });
    }
  }
});
