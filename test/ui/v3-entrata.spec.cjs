const { test, expect } = require("@playwright/test");

const CHIAVE_RIPRESA = "ew-onboarding-ripresa";

// ⛔ `addInitScript` gira a OGNI documento, quindi anche dopo il
// `location.reload()` del cambio ateneo. Ripulire lì dentro senza guardia
// cancellava la chiave di ripresa in `sessionStorage` prima che l'app la
// leggesse (§8.2 rossa) e azzerava lo zaino appena costruito (§8.4 verde per
// il motivo sbagliato: mostrava l'entrata perché aveva perso tutto, non
// perché l'ateneo era cambiato). La preparazione si fa UNA volta sola.
async function preparaNuovo(page, ateneo = "cafoscari") {
  await page.addInitScript(({ ateneo }) => {
    if (localStorage.getItem("__prova_pronta")) return;
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("__prova_pronta", "1");
  }, { ateneo });
}

async function preparaCompletato(
  page,
  { ateneo = "cafoscari", fase = "esplorando", wizardMete = true } = {}
) {
  await page.addInitScript(({ ateneo, fase, wizardMete }) => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3,
      zaini: {
        [ateneo]: {
          profilo: {
            nome: "Ada",
            area: "0311",
            dipartimento: "Dipartimento di prova",
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
          wizardMete,
          la: { metaAperta: null, bozzePerMeta: {} },
          cicloPercorso: "2027/28",
          cicloDati: "2026/27",
          storico: {},
          schedinaCiclo: {},
        },
      },
    }));
  }, { ateneo, fase, wizardMete });
}

async function tabFinoAlTesto(page, testo) {
  for (let tentativo = 0; tentativo < 30; tentativo += 1) {
    await page.keyboard.press("Tab");
    const fermata = await page.evaluate(() => {
      const attivo = document.activeElement;
      return {
        dentroEntrata: !!attivo?.closest("#home-benvenuto"),
        pin: !!attivo?.classList.contains("mappa-pin"),
        testo: attivo?.textContent?.trim() || "",
      };
    });
    if (fermata.dentroEntrata) expect(fermata.pin).toBe(false);
    if (fermata.testo === testo) return;
  }
  throw new Error(`Nessuna fermata di Tab ha raggiunto «${testo}».`);
}

async function completaEntrataConClick(page) {
  await page.locator("#benvenuto-inizia").click();
  await page.locator(
    "#benvenuto-scelte .benvenuto-scelta[data-fase='esplorando']"
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
}

test("V3 §8.1: la tastiera completa P1→P4→E senza attraversare i pin", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  const entrata = page.locator("#home-benvenuto");
  await expect(entrata).toHaveClass(/modo-scena/);
  await page.locator("#benvenuto-inizia").focus();
  await page.keyboard.press("Enter");

  await tabFinoAlTesto(page, "🧭 Sto esplorando");
  await page.keyboard.press("Enter");
  await expect(entrata.locator(".mappa-pin[tabindex='-1']")).toHaveCount(2);

  await tabFinoAlTesto(page, "Ca' Foscari Venezia");
  await page.keyboard.press("Enter");
  const primoDipartimento = await page.locator(
    "#benvenuto-scelte .benvenuto-scelte-riga .benvenuto-scelta"
  ).first().textContent();
  await tabFinoAlTesto(page, primoDipartimento.trim());
  await page.keyboard.press("Enter");

  await tabFinoAlTesto(page, "Triennale");
  await page.keyboard.press("Enter");
  await expect(entrata.locator(".mappa-pin:not([tabindex='-1'])")).toHaveCount(0);
  await expect(entrata.locator(".mappa-pin-layer")).toHaveAttribute("aria-hidden", "true");

  await tabFinoAlTesto(page, "Salta per ora");
  await page.keyboard.press("Enter");
  await expect(entrata.locator("[data-esito-mete='si']")).toBeVisible();

  await tabFinoAlTesto(page, "Sì: le cerco e le metto in ordine");
  await page.keyboard.press("Enter");

  // V5 (D‑V5.2) interpone UNA schermata fra l'esito e l'uscita: l'offerta
  // della sveglia. Lo smistamento di D‑V3.4 non è sparito, avviene un passo
  // dopo — e la coda si attraversa da tastiera come tutto il resto.
  await expect(page.locator("[data-sveglia='no']")).toBeVisible();
  await tabFinoAlTesto(page, "No, grazie");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#mete$/);
  await expect(entrata).not.toBeVisible();
});

test("V3 §8.2: il cambio ateneo riprende P3 e i dati sporchi tornano alla scena", async ({ page, context }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await page.locator("#benvenuto-inizia").click();
  await page.locator(
    "#benvenuto-scelte .benvenuto-scelta[data-fase='in-attesa']"
  ).click();

  const cambio = page.locator("#benvenuto-scelte .benvenuto-scelta", {
    hasText: "Sapienza",
  });
  await Promise.all([
    page.waitForEvent("framenavigated"),
    cambio.click(),
  ]);
  await expect(page.locator(".benvenuto-passo[data-passo='3']"))
    .toHaveAttribute("data-attivo", "true");
  await expect(page.locator("#home-benvenuto")).not.toHaveClass(/modo-scena/);
  const ripresa = await page.evaluate(() => ({
    porta: window._onboardingPorta,
    chiaveConsumata: sessionStorage.getItem("ew-onboarding-ripresa"),
    faseZaino: window.eval("ZAINO.fase"),
  }));
  expect(ripresa).toEqual({
    porta: "in-attesa",
    chiaveConsumata: null,
    faseZaino: "esplorando",
  });

  const casi = [
    { nome: "chiave assente", presente: false, valore: null },
    { nome: "JSON illeggibile", presente: true, valore: "{" },
    {
      nome: "passo fuori intervallo",
      presente: true,
      valore: JSON.stringify({
        passo: 9, porta: "esplorando", dipartimento: null, livello: null,
      }),
    },
    {
      nome: "porta sconosciuta",
      presente: true,
      valore: JSON.stringify({
        passo: 3, porta: "teletrasporto", dipartimento: null, livello: null,
      }),
    },
  ];
  for (const caso of casi) {
    const pagina = await context.newPage();
    const errori = [];
    pagina.on("pageerror", errore => errori.push(errore.message));
    await pagina.addInitScript(({ caso }) => {
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
      if (caso.presente) sessionStorage.setItem("ew-onboarding-ripresa", caso.valore);
    }, { caso });
    await pagina.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
    await expect(
      pagina.locator("#home-benvenuto"),
      caso.nome
    ).toHaveClass(/modo-scena/);
    expect(errori, caso.nome).toEqual([]);
    await pagina.close();
  }
});

test("V3 §8.3: onboarding già fatto non ricompare e una porta assente non retrocede la fase", async ({ page }) => {
  await preparaCompletato(page, { fase: "selezionato" });
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });

  await expect(page.locator("#home-benvenuto")).not.toBeVisible();
  await expect(page.locator("body")).not.toHaveClass(/modo-entrata/);
  const fase = await page.evaluate(() => {
    delete window._onboardingPorta;
    const primaMeta = window.METE[0];
    window._onboardingDipartimento = primaMeta.dipartimentoCf;
    window._onboardingArea = primaMeta.areeDisciplinari[0].codice;
    window.completaOnboarding("L", []);
    return window.eval("ZAINO.fase");
  });
  expect(fase).toBe("selezionato");
});

test("V3 §8.4: un nuovo ateneo prepara l'entrata senza impilarla sulle Mete", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await completaEntrataConClick(page);
  await page.locator("[data-esito-mete='salta']").click();

  await page.locator(".nav-item[data-tab='mete']").click();

  await page.evaluate(() => {
    localStorage.setItem("erasmuswiz_ateneo", "sapienza");
    location.reload();
  });
  await page.waitForLoadState("domcontentloaded");
  // Si ricarica restando su #mete: l'entrata è PRONTA (scena armata) ma NON
  // deve invadere la schermata che si sta guardando — era il difetto trovato
  // a schermo il 29/07, quando `modo-entrata` impilava Oggi sopra le Mete.
  await expect(page.locator("#home-benvenuto")).toHaveClass(/modo-scena/);
  await expect(page.locator("#home-benvenuto")).not.toBeVisible();
  await expect(page.locator("#tab-oggi")).not.toBeVisible();

  // Ed è lì che lo studente la ritrova: sulla home.
  await page.locator(".nav-item[data-tab='oggi']").click();
  await expect(page.locator("#home-benvenuto")).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/modo-entrata/);
});

// La prova qui sopra chiude la domanda passando dai tre bottoni dell'esito,
// che chiamano `chiudiWizardMete()`: non tocca la riga di `completaOnboarding()`
// e infatti resta VERDE anche togliendola (verificato per mutazione). Il «mai
// più» della spec vale anche per chi l'esito lo abbandona: è questo il caso.
test("V3 §8.4-bis: chi abbandona la schermata di esito non rivede la domanda", async ({ page }) => {
  await preparaNuovo(page);
  await page.goto("/index.html#oggi", { waitUntil: "domcontentloaded" });
  await completaEntrataConClick(page);
  await expect(page.locator("[data-esito-mete='si']")).toBeVisible();

  // Nessun esito scelto: si va alle Mete dalla nav, come farebbe uno studente
  // che si stanca della domanda.
  await page.locator(".nav-item[data-tab='mete']").click();
  expect(await page.evaluate(() => window.eval("ZAINO.wizardMete"))).toBe(true);
});

test("V3 I4–I6: clic riusati, tooltip confinato e nota di copertura conservano il contratto", async ({ page }) => {
  await page.setViewportSize({ width: 900, height: 844 });
  await preparaCompletato(page);
  await page.goto("/index.html#mete", { waitUntil: "domcontentloaded" });

  const clic = await page.evaluate(() => {
    const valide = window.METE.filter(meta => {
      const c = window.coordDiMeta(meta);
      return c && !c.fuori && c.x !== undefined;
    });
    const perCitta = new Map();
    valide.forEach(meta => {
      const chiave = `${meta.citta}|${meta.paese}`;
      if (!perCitta.has(chiave)) perCitta.set(chiave, []);
      perCitta.get(chiave).push(meta);
    });
    const coppia = [...perCitta.values()].find(gruppo => gruppo.length >= 2).slice(0, 2);
    const banco = document.createElement("div");
    banco.style.width = "340px";
    document.body.appendChild(banco);
    const layer = window.mappaCostruisci(banco);
    let dettaglio = 0;
    let lista = 0;
    const dettaglioOriginale = window.apriDettaglioMeta;
    const listaOriginale = window.apriListaCluster;
    window.apriDettaglioMeta = () => { dettaglio += 1; };
    window.apriListaCluster = () => { lista += 1; };
    window.mappaRenderPins(layer, [valide[0]], {});
    layer.querySelector(".mappa-pin").click();
    window.mappaRenderPins(layer, coppia, {});
    layer.querySelector(".mappa-pin").click();
    window.apriDettaglioMeta = dettaglioOriginale;
    window.apriListaCluster = listaOriginale;
    banco.remove();
    return { dettaglio, lista };
  });
  expect(clic).toEqual({ dettaglio: 1, lista: 1 });

  const tooltipDesktop = await page.evaluate(() => {
    const meta = window.METE.find(m => {
      const c = window.coordDiMeta(m);
      return c && !c.fuori && c.x !== undefined;
    });
    const layerBenv = window.mappaCostruisci(document.getElementById("mappa-benvenuto"));
    window.mappaRenderPins(layerBenv, [meta], {});
    const tooltip = document.getElementById("mappa-tooltip");
    const pinBenv = layerBenv.querySelector(".mappa-pin");
    tooltip.hidden = true;
    pinBenv.dispatchEvent(new MouseEvent("mouseenter"));
    const mouseDentro = !tooltip.hidden;
    tooltip.hidden = true;
    pinBenv.dispatchEvent(new FocusEvent("focus"));
    const fuocoDentro = !tooltip.hidden;

    const esterno = document.createElement("div");
    esterno.style.width = "340px";
    document.body.appendChild(esterno);
    const layerEsterno = window.mappaCostruisci(esterno);
    window.mappaRenderPins(layerEsterno, [meta], {});
    tooltip.hidden = true;
    layerEsterno.querySelector(".mappa-pin")
      .dispatchEvent(new MouseEvent("mouseenter"));
    const mouseFuori = !tooltip.hidden;
    esterno.remove();
    return { mouseDentro, fuocoDentro, mouseFuori };
  });
  expect(tooltipDesktop).toEqual({
    mouseDentro: true,
    fuocoDentro: true,
    mouseFuori: false,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  const tooltipMobile = await page.evaluate(() => {
    const tooltip = document.getElementById("mappa-tooltip");
    tooltip.hidden = true;
    document.querySelector("#mappa-benvenuto .mappa-pin")
      .dispatchEvent(new MouseEvent("mouseenter"));
    return !tooltip.hidden;
  });
  expect(tooltipMobile).toBe(false);

  const copertura = await page.evaluate(() => {
    const fuori = window.METE.find(meta => window.coordDiMeta(meta)?.fuori);
    const senza = window.METE.find(meta => !window.coordDiMeta(meta));
    const valida = window.METE.find(meta => {
      const c = window.coordDiMeta(meta);
      return c && !c.fuori && c.x !== undefined;
    });
    const nota = document.createElement("p");
    window.mappaNotaCopertura(nota, [fuori, senza]);
    const testo = nota.textContent;
    const visibile = !nota.hidden;
    window.mappaNotaCopertura(nota, [valida]);
    return { trovati: !!fuori && !!senza && !!valida, testo, visibile, nascosta: nota.hidden };
  });
  expect(copertura.trovati).toBe(true);
  expect(copertura.testo).toBe(
    "2 mete non sono sulla mappa — 1 fuori dall'inquadratura (es. Canarie), " +
    "1 senza posizione: le trovi tutte nell'elenco delle mete."
  );
  expect(copertura.visibile).toBe(true);
  expect(copertura.nascosta).toBe(true);
});

test("V3 I7–I8: il resize riclusterizza entrambe le mappe e la stellina segue lo zaino sul nodo riusato", async ({ page }) => {
  await page.setViewportSize({ width: 1200, height: 844 });
  await preparaNuovo(page);
  await page.goto("/index.html#mete", { waitUntil: "domcontentloaded" });

  const prima = await page.evaluate(() => {
    const oggi = document.getElementById("tab-oggi");
    oggi.style.cssText =
      "display:block;position:absolute;width:80vw;left:-10000px;visibility:hidden";
    const benv = document.getElementById("home-benvenuto");
    benv.classList.remove("modo-scena");
    benv.style.display = "block";
    const conteggi = {};
    window.METE.forEach(meta => {
      conteggi[meta.dipartimentoCf] = (conteggi[meta.dipartimentoCf] || 0) + 1;
    });
    const dip = Object.keys(conteggi).sort((a, b) => conteggi[b] - conteggi[a])[0];
    window.benvPassoLivello(dip);
    window.renderMappaMete(window.METE);
    return {
      dip,
      benv: document.querySelectorAll("#mappa-benvenuto .mappa-pin").length,
      mete: document.querySelectorAll("#mappa-mete .mappa-pin").length,
    };
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(100);
  const dopo = await page.evaluate(({ dip }) => {
    const elencoBenv = window.METE.filter(meta => meta.dipartimentoCf === dip);
    const contBenv = document.getElementById("mappa-benvenuto");
    const contMete = document.getElementById("mappa-mete");
    return {
      benv: document.querySelectorAll("#mappa-benvenuto .mappa-pin").length,
      mete: document.querySelectorAll("#mappa-mete .mappa-pin").length,
      attesiBenv: window.mappaClusterizza(elencoBenv, contBenv).length,
      attesiMete: window.mappaClusterizza(window.METE, contMete).length,
    };
  }, { dip: prima.dip });
  expect(dopo.benv).toBe(dopo.attesiBenv);
  expect(dopo.mete).toBe(dopo.attesiMete);
  expect(dopo.benv).not.toBe(prima.benv);
  expect(dopo.mete).not.toBe(prima.mete);

  const stella = await page.evaluate(() => {
    const meta = window.METE.find(m => {
      const c = window.coordDiMeta(m);
      return c && !c.fuori && c.x !== undefined;
    });
    window.eval(`ZAINO.metePreferite = [${JSON.stringify(meta.id)}]`);
    window.renderMappaMete([meta]);
    const primaNodo = document.querySelector("#mappa-mete .mappa-pin");
    const accesa = primaNodo.classList.contains("mappa-pin-stella");
    window.eval("ZAINO.metePreferite = []");
    window.renderMappaMete([meta]);
    const dopoNodo = document.querySelector("#mappa-mete .mappa-pin");
    return {
      accesa,
      spenta: !dopoNodo.classList.contains("mappa-pin-stella"),
      riusato: primaNodo === dopoNodo,
    };
  });
  expect(stella).toEqual({ accesa: true, spenta: true, riusato: true });
});
