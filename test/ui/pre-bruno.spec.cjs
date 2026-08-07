// Regressioni dell'interfaccia per la tranche 1 pre-Bruno
// (PLAN.md, "Addendum operativo 2026-08-07"). Coprono l'elenco dichiarato
// nell'acceptance: primo LA, modifica LA, meta catalogata, UCP manuale,
// omonimo fuori ambito, facoltà manuale, pendingIntent per ateneo/ciclo,
// reload/ripresa/annullamento, salvataggio fallito, utente esistente,
// output/backup/ripristino manuale, separazione atenei, analytics.
const { test, expect } = require("@playwright/test");

const PAGINA = "/index.html";

function raccogliErrori(page) {
  const errori = [];
  page.on("console", messaggio => {
    if (messaggio.type() === "error") errori.push(`console: ${messaggio.text()}`);
  });
  page.on("pageerror", errore => errori.push(`pagina: ${errore.message}`));
  return errori;
}

// ⚠️ La semina deve avvenire UNA VOLTA SOLA. `addInitScript` gira a ogni
// caricamento, reload compreso: senza il guardiano, una prova che ricarica
// cancellerebbe proprio lo stato che sta verificando.
async function pulisci(page, ateneo = "cafoscari") {
  await page.addInitScript(({ ateneo }) => {
    if (localStorage.getItem("__pre_bruno_pronto")) return;
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("__pre_bruno_pronto", "1");
  }, { ateneo });
}

// Uno studente già dentro il prodotto: serve a provare che la tranche 1 NON
// gli fa ripetere l'onboarding.
function zainoCompleto(ateneo, extra = {}) {
  return {
    v: 3,
    zaini: {
      [ateneo]: Object.assign({
        profilo: {
          nome: "Ada", area: "0421", dipartimento: "Giurisprudenza",
          livello: "LM", lingue: [], extraUE: null, ricercaTesi: null,
        },
        checklist: { c1: true },
        metePreferite: ["m1", "m2"],
        schedina: ["m1"],
        fase: "esplorando",
        checklistPost: {},
        onboardingFatto: true,
        autoverifica: { r1: true },
        zainoCelebrato: false,
        wizardMete: true,
        la: {
          schemaVersion: 2, nextId: 1, examLibrary: {}, dossiersById: {},
          openDossierId: null, assignedDossierIdByCycle: {},
        },
        cicloPercorso: "2026/27",
        cicloDati: "2026/27",
        storico: {},
        schedinaCiclo: {},
      }, extra),
    },
  };
}

async function seminaZaino(page, contenitore, ateneo) {
  await page.addInitScript(({ contenitore, ateneo }) => {
    if (localStorage.getItem("__pre_bruno_pronto")) return;
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify(contenitore));
    localStorage.setItem("__pre_bruno_pronto", "1");
  }, { contenitore, ateneo });
}

// Percorre l'onboarding fino al passo indicato, nel ramo "sono stato
// selezionato".
async function onboardingFinoA(page, passo, { facoltaManuale = null, ciclo = null } = {}) {
  await page.locator("#benvenuto-inizia").click();
  await page.locator("#benvenuto-scelte [data-fase='selezionato']").click();
  if (passo === "ateneo") return;
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Ca' Foscari" }).click();
  if (passo === "lavoro") return;
  await page.locator("[data-lavoro='modifica']").click();
  if (passo === "facolta") return;
  if (facoltaManuale) {
    await page.locator(".benvenuto-manuale summary").click();
    await page.locator("#benvenuto-facolta-manuale").fill(facoltaManuale);
    await page.locator("[data-facolta-manuale='conferma']").click();
  } else {
    await page.locator("#benvenuto-scelte .benvenuto-scelte-riga .benvenuto-scelta").first().click();
  }
  if (passo === "livello") return;
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Magistrale" }).click();
  if (passo === "ciclo") return;
  await page.locator(`[data-ciclo='${ciclo || "2026/27"}']`).click();
}

// ------------------------------------------------------------
// §1 — gerarchia primaria e Menu
// ------------------------------------------------------------

test("pre-Bruno §1: la nav è Mete · Home · Learning Agreement e il Menu sta in alto a destra", async ({ page }) => {
  const errori = raccogliErrori(page);
  await seminaZaino(page, zainoCompleto("cafoscari"), "cafoscari");
  await page.goto(`${PAGINA}#oggi`, { waitUntil: "domcontentloaded" });

  await expect(page.locator(".nav-item[data-tab]")).toHaveCount(3);
  await expect(page.locator(".nav-item[data-tab] .nav-label")).toHaveText([
    "Mete", "Home", "Learning Agreement",
  ]);
  // Percorso non è più una voce di nav, ma la rotta resta viva.
  await expect(page.locator(".nav-item[data-tab='percorso']")).toHaveCount(0);

  // Il Menu è fuori dalla barra e sta in alto a destra a ogni larghezza.
  await expect(page.locator("#barra-alto #btn-drawer")).toBeVisible();
  for (const larghezza of [375, 390, 768, 1280]) {
    await page.setViewportSize({ width: larghezza, height: 812 });
    const posizione = await page.evaluate(() => {
      const menu = document.getElementById("btn-drawer").getBoundingClientRect();
      const voci = [...document.querySelectorAll(".nav-item[data-tab]")]
        .map(v => v.getBoundingClientRect());
      return {
        distanzaDaDestra: Math.round(innerWidth - menu.right),
        inAlto: menu.top < 80,
        copreVoci: voci.some(v => v.right > menu.left && v.left < menu.right &&
          v.bottom > menu.top && v.top < menu.bottom),
        scrollOrizzontale: document.documentElement.scrollWidth > innerWidth,
      };
    });
    expect(posizione.inAlto, `Menu in alto a ${larghezza}px`).toBe(true);
    expect(posizione.distanzaDaDestra, `Menu a destra a ${larghezza}px`).toBeLessThan(60);
    expect(posizione.copreVoci, `nessuna sovrapposizione a ${larghezza}px`).toBe(false);
    expect(posizione.scrollOrizzontale, `niente scroll orizzontale a ${larghezza}px`).toBe(false);
  }
  expect(errori).toEqual([]);
});

test("pre-Bruno §1: Percorso resta raggiungibile da Home e da Menu, e la rotta LA porta l'ateneo", async ({ page }) => {
  await seminaZaino(page, zainoCompleto("sapienza"), "sapienza");
  await page.goto(`${PAGINA}#oggi`, { waitUntil: "domcontentloaded" });

  // dalla Home
  await page.locator(".percorso-link-rapido").click();
  await expect(page.locator("#tab-percorso")).toBeVisible();
  await expect(page).toHaveURL(/#percorso$/);

  // dal Menu
  await page.locator(".nav-item[data-tab='oggi']").click();
  await page.locator("#btn-drawer").click();
  await expect(page.locator("#drawer")).toBeVisible();
  await page.locator("[data-drawer-goto='percorso']").click();
  await expect(page.locator("#tab-percorso")).toBeVisible();

  // la voce di nav LA non naviga al nome nudo: porta l'ateneo attivo
  await page.locator(".nav-item[data-tab='learning-agreement']").click();
  await expect(page).toHaveURL(/#learning-agreement\/sapienza$/);
  await expect(page.locator("#tab-learning-agreement")).toBeVisible();

  // gli alias storici continuano a funzionare
  await page.goto(`${PAGINA}#timeline`, { waitUntil: "domcontentloaded" });
  await expect(page.locator("#tab-percorso")).toBeVisible();
});

test("pre-Bruno §1: il Menu si apre e si chiude da tastiera e restituisce il fuoco", async ({ page }) => {
  await seminaZaino(page, zainoCompleto("cafoscari"), "cafoscari");
  await page.goto(`${PAGINA}#oggi`, { waitUntil: "domcontentloaded" });

  await page.locator("#btn-drawer").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#drawer")).toBeVisible();
  await expect(page.locator("#btn-drawer")).toHaveAttribute("aria-expanded", "true");
  await page.locator("#drawer-chiudi").click();
  await expect(page.locator("#drawer")).toBeHidden();
  await expect(page.locator("#btn-drawer")).toBeFocused();
  await expect(page.locator("#btn-drawer")).toHaveAttribute("aria-expanded", "false");
});

// ------------------------------------------------------------
// §2-§3 — l'onboarding smista davvero
// ------------------------------------------------------------

test("pre-Bruno §2-§3: la domanda sulla fase apre tre rami diversi", async ({ page }) => {
  const errori = raccogliErrori(page);
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  // Ramo "selezionato": chiede il lavoro, non le lingue.
  await onboardingFinoA(page, "lavoro");
  await expect(page.locator("[data-lavoro='primo']")).toBeVisible();
  await expect(page.locator("[data-lavoro='modifica']")).toBeVisible();
  // Il riconoscimento NON è un terzo ingresso iniziale.
  await expect(page.locator("#benvenuto-scelte")).not.toContainText("onoscimento");

  // Ramo "esplorando": nessuna domanda sul lavoro, si arriva alle lingue.
  await page.evaluate(() => { localStorage.clear(); sessionStorage.clear(); });
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await page.locator("#benvenuto-inizia").click();
  await page.locator("#benvenuto-scelte [data-fase='esplorando']").click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Ca' Foscari" }).click();
  await expect(page.locator("[data-lavoro='primo']")).toHaveCount(0);
  expect(errori).toEqual([]);
});

test("pre-Bruno §2-§3: il ramo selezionato arriva al dossier con l'intento salvato", async ({ page }) => {
  const errori = raccogliErrori(page);
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await onboardingFinoA(page, "fine");

  await expect(page).toHaveURL(/#learning-agreement\/cafoscari$/);
  await expect(page.locator("#tab-learning-agreement")).toBeVisible();
  await expect(page.locator("#la-intento")).toBeVisible();

  const stato = await page.evaluate(() => ({
    intento: window.eval("ZAINO.la.pendingIntent"),
    dossier: Object.keys(window.eval("ZAINO.la.dossiersById")),
    fase: window.eval("ZAINO.fase"),
  }));
  expect(stato.intento.work).toBe("modifica");
  expect(stato.intento.university).toBe("cafoscari");
  expect(stato.intento.cycle).toBe("2026/27");
  expect(stato.dossier, "nessun dossier vuoto nasce in anticipo").toEqual([]);
  expect(stato.fase).toBe("selezionato");
  expect(errori).toEqual([]);
});

test("pre-Bruno §2: un ciclo storico entra nell'intento e la Home resta neutra", async ({ page }) => {
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await onboardingFinoA(page, "ciclo");

  await expect(page.locator("[data-ciclo='2024/25']")).toHaveAttribute("data-storico", "true");
  await page.locator("[data-ciclo='2024/25']").click();

  const stato = await page.evaluate(() => ({
    ciclo: window.eval("ZAINO.la.pendingIntent.cycle"),
    cicloPercorso: window.eval("ZAINO.cicloPercorso"),
    cicloDati: window.eval("ZAINO.cicloDati"),
  }));
  expect(stato.ciclo).toBe("2024/25");
  // Il ciclo storico vive nel contesto LA, non nel ciclo della Home.
  expect(stato.cicloPercorso).not.toBe("2024/25");
  await expect(page.locator("#la-intento")).toContainText("ciclo 2024/25");
});

// ------------------------------------------------------------
// §4 — facoltà manuale
// ------------------------------------------------------------

test("pre-Bruno §4: la facoltà manuale non deriva area, compatibilità o regole di facoltà", async ({ page }) => {
  const errori = raccogliErrori(page);
  await pulisci(page, "sapienza");
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });

  await page.locator("#benvenuto-inizia").click();
  await page.locator("#benvenuto-scelte [data-fase='selezionato']").click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Sapienza" }).click();
  await page.locator("[data-lavoro='primo']").click();
  await page.locator(".benvenuto-manuale summary").click();
  // Nome volutamente simile a una facoltà vera: non deve attivarne le regole.
  await page.locator("#benvenuto-facolta-manuale").fill("  Giurisprudenza   internazionale  ");
  await page.locator("[data-facolta-manuale='conferma']").click();
  await page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: "Magistrale" }).click();
  await page.locator("[data-ciclo='2026/27']").click();

  const profilo = await page.evaluate(() => window.eval("ZAINO.profilo"));
  expect(profilo.dipartimento, "spazi normalizzati").toBe("Giurisprudenza internazionale");
  expect(profilo.dipartimentoSource).toBe("manual");
  expect(profilo.dipartimentoId).toMatch(/^manual:/);
  expect(profilo.area, "nessuna area dedotta da un'etichetta").toBe(null);
  // Le regole specifiche di Giurisprudenza non si attivano per assonanza.
  expect(await page.evaluate(() => window.laScopeAttivo())).toBe("all");
  // Nessun accordo viene attribuito a un ambito manuale.
  expect(await page.evaluate(() => window.laMeteCandidabili().length)).toBe(0);
  await expect(page.locator("#la-meta-select")).toHaveCount(0);
  await expect(page.locator(".la-meta-manuale")).toBeVisible();
  expect(errori).toEqual([]);
});

test("pre-Bruno §8: l'etichetta manuale rispetta il limite dichiarato", async ({ page }) => {
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await onboardingFinoA(page, "facolta");
  await page.locator(".benvenuto-manuale summary").click();
  const input = page.locator("#benvenuto-facolta-manuale");
  await expect(input).toHaveAttribute("maxlength", "200");
  await input.fill("G".repeat(400));
  await page.locator("[data-facolta-manuale='conferma']").click();
  const lunghezza = await page.evaluate(() => window._onboardingDipartimento.length);
  expect(lunghezza).toBe(200);
});

// ------------------------------------------------------------
// §5-§7 — ambito, meta manuale e avvisi
// ------------------------------------------------------------

test("pre-Bruno §5: l'omonimo fuori ambito non è proponibile (caso UCP)", async ({ page }) => {
  const errori = raccogliErrori(page);
  const contenitore = zainoCompleto("sapienza");
  contenitore.zaini.sapienza.la.examLibrary = {
    e1: { id: "e1", codice: "DIR01", nome: "Diritto internazionale", cfu: 9, stato: "da-sostenere" },
  };
  await seminaZaino(page, contenitore, "sapienza");
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });

  // L'accordo UCP esiste nei dati Sapienza, ma per Psicologia.
  const ucp = await page.evaluate(() => (window.METE || [])
    .filter(m => /catolica portuguesa/i.test(m.universita))
    .map(m => m.dipartimentoCf));
  expect(ucp.length, "il caso UCP deve esistere nei dati, o la prova non prova nulla")
    .toBeGreaterThan(0);
  expect(ucp).not.toContain("Giurisprudenza");

  await page.locator("#la-meta-cerca").fill("Portuguesa");
  const opzioni = await page.locator("#la-meta-select option").allTextContents();
  expect(opzioni.some(o => /Portuguesa/i.test(o)),
    "l'accordo di un altro dipartimento non è una meta valida").toBe(false);
  await expect(page.locator("#la-avviso-fuori-ambito")).toBeVisible();
  await expect(page.locator("#la-avviso-fuori-ambito")).toContainText("Giurisprudenza");
  await expect(page.locator("#la-avviso-fuori-ambito")).toContainText("a mano");
  expect(errori).toEqual([]);
});

test("pre-Bruno §5: una meta catalogata in ambito crea il dossier senza avviso manuale", async ({ page }) => {
  const contenitore = zainoCompleto("sapienza");
  contenitore.zaini.sapienza.la.examLibrary = {
    e1: { id: "e1", codice: "DIR01", nome: "Diritto internazionale", cfu: 9, stato: "da-sostenere" },
  };
  await seminaZaino(page, contenitore, "sapienza");
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });

  await expect(page.locator("#la-meta-select")).toBeVisible();
  const metaId = await page.locator("#la-meta-select option").first().getAttribute("value");
  await page.locator(".la-create-dossier button").click();

  const dossier = await page.evaluate(() => {
    const la = window.eval("ZAINO.la");
    return Object.values(la.dossiersById)[0];
  });
  expect(dossier.metaId).toBe(metaId);
  expect(dossier.metaId).not.toMatch(/^manual:/);
  expect(dossier.meta.source).toBeUndefined();
  await expect(page.locator("[data-avviso-manuale='dossier']")).toHaveCount(0);
});

test("pre-Bruno §6-§7: la meta manuale ha id opaco e l'avviso viaggia con il dossier", async ({ page }) => {
  const errori = raccogliErrori(page);
  const contenitore = zainoCompleto("sapienza");
  contenitore.zaini.sapienza.la.examLibrary = {
    e1: { id: "e1", codice: "DIR01", nome: "Diritto internazionale", cfu: 9, stato: "da-sostenere" },
  };
  await seminaZaino(page, contenitore, "sapienza");
  await page.goto(`${PAGINA}#learning-agreement/sapienza`, { waitUntil: "domcontentloaded" });

  await page.locator(".la-meta-manuale summary").click();
  await page.locator("#la-meta-manuale-universita").fill("Universidade Católica Portuguesa");
  await page.locator("#la-meta-manuale-citta").fill("Lisbona");
  await page.locator("#la-meta-manuale-paese").fill("Portogallo");
  await page.locator(".la-meta-manuale button").click();

  const dossier = await page.evaluate(() => Object.values(window.eval("ZAINO.la.dossiersById"))[0]);
  expect(dossier.metaId).toMatch(/^manual:/);
  expect(dossier.metaId).not.toContain("catolica");
  expect(dossier.meta.source).toBe("manual");

  // Avviso nel dossier…
  await expect(page.locator("[data-avviso-manuale='dossier']")).toBeVisible();
  await expect(page.locator("[data-avviso-manuale='dossier']"))
    .toHaveText("Destinazione inserita da te — dati dell'ospitante da verificare");
  // …e le regole dell'ateneo di partenza NON vengono spente.
  await expect(page.locator("#la-dossier")).toContainText("regole del tuo ateneo di partenza restano valide");
  await expect(page.locator("#la-guide")).toContainText("Sapienza");

  // …e nel testo copiato / stampato.
  const testo = await page.evaluate(() => {
    const d = Object.values(window.eval("ZAINO.la.dossiersById"))[0];
    return window.laTestoVersione(d, d.versions[d.versions.length - 1]);
  });
  expect(testo).toContain("Destinazione inserita da te");
  expect(errori).toEqual([]);
});

test("pre-Bruno §6: due destinazioni manuali omonime restano due dossier distinti", async ({ page }) => {
  const contenitore = zainoCompleto("cafoscari");
  contenitore.zaini.cafoscari.la.examLibrary = {
    e1: { id: "e1", codice: "E01", nome: "Economia", cfu: 6, stato: "da-sostenere" },
  };
  await seminaZaino(page, contenitore, "cafoscari");
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  for (let i = 0; i < 2; i += 1) {
    await page.locator(".la-meta-manuale summary").click();
    await page.locator("#la-meta-manuale-universita").fill("Universidade Católica");
    await page.locator(".la-meta-manuale button").click();
  }
  const ids = await page.evaluate(() => Object.keys(window.eval("ZAINO.la.dossiersById")));
  expect(ids.length, "nessuna fusione automatica tra omonime scritte a mano").toBe(2);
});

test("pre-Bruno §7: l'avviso manuale sopravvive a backup e ripristino, e un file incoerente si blocca", async ({ page }) => {
  const contenitore = zainoCompleto("cafoscari");
  contenitore.zaini.cafoscari.la.examLibrary = {
    e1: { id: "e1", codice: "E01", nome: "Economia", cfu: 6, stato: "da-sostenere" },
  };
  await seminaZaino(page, contenitore, "cafoscari");
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  await page.locator(".la-meta-manuale summary").click();
  await page.locator("#la-meta-manuale-universita").fill("Universidade Católica Portuguesa");
  await page.locator(".la-meta-manuale button").click();

  // Il backup porta con sé lo stato manuale…
  const envelope = await page.evaluate(() => window.ErasmusWizPuro.creaBackupLA({
    university: "cafoscari", cycle: "2026/27",
    payload: window.eval("ZAINO.la"), exportedAt: "2026-08-07T10:00:00.000Z",
  }));
  const metaBackup = Object.values(envelope.payload.dossiersById)[0].meta;
  expect(metaBackup.source).toBe("manual");
  expect(metaBackup.id).toMatch(/^manual:/);

  // …e l'anteprima di ripristino lo mostra PRIMA di confermare.
  await page.setInputFiles("#la-restore-file", {
    name: "backup.json", mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(envelope)),
  });
  await expect(page.locator("[data-avviso-manuale='ripristino']")).toBeVisible();

  // Un file che dichiara `manual` su un id di catalogo non si importa.
  const rotto = JSON.parse(JSON.stringify(envelope));
  const dossier = Object.values(rotto.payload.dossiersById)[0];
  dossier.metaId = "meta-di-catalogo";
  dossier.meta.id = "meta-di-catalogo";
  dossier.meta.source = "manual";
  await page.setInputFiles("#la-restore-file", {
    name: "rotto.json", mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(rotto)),
  });
  await expect(page.locator(".la-restore-preview .la-error")).toContainText("File rifiutato");
  await expect(page.locator(".la-restore-preview button")).toHaveCount(0);
  const dossierDopo = await page.evaluate(() => Object.keys(window.eval("ZAINO.la.dossiersById")));
  expect(dossierDopo.length, "nessun dato modificato da un file rifiutato").toBe(1);
});

// ------------------------------------------------------------
// §9-§10 — continuità, ripresa, annullamento, errore di salvataggio
// ------------------------------------------------------------

test("pre-Bruno §9: la meta scelta sopravvive al reload e il dossier nasce solo alla conferma", async ({ page }) => {
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await onboardingFinoA(page, "fine");

  await page.locator(".la-meta-manuale summary").click();
  await page.locator("#la-meta-manuale-universita").fill("Universidade Católica Portuguesa");
  await page.locator(".la-meta-manuale button").click();
  await expect(page.locator("#la-intento")).toContainText("Universidade Católica Portuguesa");
  expect(await page.evaluate(() => Object.keys(window.eval("ZAINO.la.dossiersById")).length))
    .toBe(0);

  // Reload: la meta è ancora lì.
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("#la-intento")).toContainText("Universidade Católica Portuguesa");
  await expect(page.locator("#la-intento")).toContainText("Manca il piano di studi");

  // Con il piano, il dossier nasce e l'intento si chiude.
  await page.locator("#la-plan-paste").fill("DIR01; Diritto internazionale; 9");
  await page.getByRole("button", { name: "Mostra anteprima" }).click();
  await page.getByRole("button", { name: "Conferma il piano" }).click();
  await page.locator("#la-intento button", { hasText: "Crea il dossier" }).click();

  const stato = await page.evaluate(() => ({
    intento: window.eval("ZAINO.la.pendingIntent"),
    dossier: Object.values(window.eval("ZAINO.la.dossiersById")),
    aperto: window.eval("ZAINO.la.openDossierId"),
  }));
  expect(stato.intento).toBeUndefined();
  expect(stato.dossier.length).toBe(1);
  expect(stato.dossier[0].metaId).toMatch(/^manual:/);
  expect(stato.aperto).toBe(stato.dossier[0].id);
});

test("pre-Bruno §9: annullare l'intento restituisce il dossier che era aperto", async ({ page }) => {
  const contenitore = zainoCompleto("cafoscari");
  const laPrecedente = contenitore.zaini.cafoscari.la;
  laPrecedente.examLibrary = {
    e1: { id: "e1", codice: "E01", nome: "Economia", cfu: 6, stato: "da-sostenere" },
  };
  laPrecedente.dossiersById = {
    "la-1": {
      id: "la-1", metaId: "meta-vecchia",
      meta: { id: "meta-vecchia", universita: "Université Test", citta: "Paris", paese: "Francia" },
      university: "cafoscari", cycle: "2026/27",
      createdAt: "2026-08-01T10:00:00.000Z", updatedAt: "2026-08-01T10:00:00.000Z",
      versions: [{
        versionId: "la-1:v1", number: 1, createdAt: "2026-08-01T10:00:00.000Z",
        homeExamSnapshots: [], hostCourseSnapshots: [], mappings: [], preflight: {},
      }],
      currentVersionId: "la-1:v1", confirmationsByVersion: {}, lifecycle: {},
    },
  };
  laPrecedente.openDossierId = "la-1";
  await seminaZaino(page, contenitore, "cafoscari");
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  await page.evaluate(() => window.eval(`
    laTransazione("prova", la => ErasmusWizPuro.impostaPendingIntentLA(la, {
      university: "cafoscari", cycle: "2026/27", work: "primo",
    }).la)
  `));
  await expect(page.locator("#la-intento")).toBeVisible();
  expect(await page.evaluate(() => window.eval("ZAINO.la.openDossierId"))).toBe(null);

  await page.locator("#la-intento button", { hasText: "Annulla" }).click();
  const dopo = await page.evaluate(() => ({
    intento: window.eval("ZAINO.la.pendingIntent"),
    aperto: window.eval("ZAINO.la.openDossierId"),
    dossier: Object.keys(window.eval("ZAINO.la.dossiersById")),
  }));
  expect(dopo.intento).toBeUndefined();
  expect(dopo.aperto, "il dossier precedente non è stato perso").toBe("la-1");
  expect(dopo.dossier).toEqual(["la-1"]);
});

test("pre-Bruno §10: la bozza sopravvive al reload e offre ripresa o ripartenza", async ({ page }) => {
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await onboardingFinoA(page, "livello", { facoltaManuale: "Giurisprudenza internazionale" });

  const bozza = await page.evaluate(() => JSON.parse(localStorage.getItem("ew-onboarding-bozza")));
  expect(bozza.version).toBe(1);
  expect(bozza.branch).toBe("learning-agreement");
  expect(bozza.step).toBe("livello");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("[data-ripresa-onboarding='true']")).toBeVisible();
  // La lettura NON consuma la bozza.
  expect(await page.evaluate(() => localStorage.getItem("ew-onboarding-bozza"))).not.toBeNull();

  await page.locator("[data-ripresa='riprendi']").click();
  await expect(page.locator("#benvenuto-scelte")).toContainText("Giurisprudenza internazionale");

  // "Ricomincia" è l'unico punto che cancella la bozza prima del salvataggio.
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.locator("[data-ripresa='ricomincia']").click();
  expect(await page.evaluate(() => localStorage.getItem("ew-onboarding-bozza"))).toBeNull();
  await expect(page.locator("#benvenuto-scelte [data-fase='selezionato']")).toBeVisible();
});

test("pre-Bruno §10: un salvataggio fallito non dichiara concluso il passaggio", async ({ page }) => {
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await onboardingFinoA(page, "ciclo");

  // Da qui in poi localStorage rifiuta le scritture dello zaino.
  await page.evaluate(() => {
    const originale = localStorage.setItem.bind(localStorage);
    localStorage.setItem = (chiave, valore) => {
      if (chiave === "erasmuswiz-zaino") throw new Error("quota simulata");
      return originale(chiave, valore);
    };
  });
  await page.locator("[data-ciclo='2026/27']").click();

  await expect(page.locator("#benvenuto-errore-salvataggio")).toBeVisible();
  await expect(page.locator("[data-riprova-onboarding='1']")).toBeVisible();
  const stato = await page.evaluate(() => ({
    onboardingFatto: window.eval("ZAINO.onboardingFatto"),
    bozza: localStorage.getItem("ew-onboarding-bozza"),
    salvato: localStorage.getItem("erasmuswiz-zaino"),
  }));
  expect(stato.onboardingFatto, "lo stato precedente resta attivo").toBeFalsy();
  expect(stato.bozza, "la bozza non si cancella se il salvataggio fallisce").not.toBeNull();
  // Su disco resta lo zaino di PRIMA (quello scritto all'avvio): il profilo
  // dell'onboarding non è mai arrivato.
  const suDisco = JSON.parse(stato.salvato).zaini.cafoscari;
  expect(suDisco.onboardingFatto).toBe(false);
  expect(suDisco.profilo).toBeNull();

  // Riprovando con lo storage di nuovo funzionante, il passaggio si chiude.
  await page.evaluate(() => { delete localStorage.setItem; });
  await page.locator("[data-riprova-onboarding='1']").click();
  await expect(page).toHaveURL(/#learning-agreement\/cafoscari$/);
  expect(await page.evaluate(() => localStorage.getItem("ew-onboarding-bozza"))).toBeNull();
});

// ------------------------------------------------------------
// §11 — utenti esistenti e separazione degli atenei
// ------------------------------------------------------------

test("pre-Bruno §11: un utente esistente non ripete l'onboarding e non perde nulla", async ({ page }) => {
  const errori = raccogliErrori(page);
  await seminaZaino(page, zainoCompleto("cafoscari"), "cafoscari");
  await page.goto(`${PAGINA}#oggi`, { waitUntil: "domcontentloaded" });

  await expect(page.locator("#home-benvenuto")).toBeHidden();
  await expect(page.locator("body")).not.toHaveClass(/modo-entrata/);
  const stato = await page.evaluate(() => ({
    profilo: window.eval("ZAINO.profilo"),
    preferite: window.eval("ZAINO.metePreferite"),
    schedina: window.eval("ZAINO.schedina"),
    checklist: window.eval("ZAINO.checklist"),
    autoverifica: window.eval("ZAINO.autoverifica"),
    intento: window.eval("ZAINO.la.pendingIntent"),
  }));
  expect(stato.profilo.dipartimento).toBe("Giurisprudenza");
  expect(stato.preferite).toEqual(["m1", "m2"]);
  // La schedina resta un sottoinsieme delle preferite (contratto V6a): qui
  // conta che nulla venga perso, non il numero esatto di righe.
  expect(stato.schedina).toContain("m1");
  stato.schedina.forEach(id => expect(stato.preferite).toContain(id));
  expect(stato.checklist).toEqual({ c1: true });
  expect(stato.autoverifica).toEqual({ r1: true });
  expect(stato.intento, "nessun intento nasce da solo").toBeUndefined();
  expect(errori).toEqual([]);
});

test("pre-Bruno §9-§11: l'intento resta nello zaino del suo ateneo", async ({ page }) => {
  const contenitore = zainoCompleto("cafoscari");
  contenitore.zaini.sapienza = JSON.parse(JSON.stringify(contenitore.zaini.cafoscari));
  await seminaZaino(page, contenitore, "cafoscari");
  await page.goto(`${PAGINA}#learning-agreement/cafoscari`, { waitUntil: "domcontentloaded" });

  await page.evaluate(() => window.eval(`
    laTransazione("prova", la => ErasmusWizPuro.impostaPendingIntentLA(la, {
      university: "cafoscari", cycle: "2026/27", work: "primo",
    }).la)
  `));
  const separazione = await page.evaluate(() => {
    const c = JSON.parse(localStorage.getItem("erasmuswiz-zaino"));
    return {
      cafoscari: !!c.zaini.cafoscari.la.pendingIntent,
      sapienza: !!c.zaini.sapienza.la.pendingIntent,
    };
  });
  expect(separazione.cafoscari).toBe(true);
  expect(separazione.sapienza, "lo zaino dell'altro ateneo non viene toccato").toBe(false);
});

// ------------------------------------------------------------
// Analytics — nessun dato accademico o di destinazione
// ------------------------------------------------------------

test("pre-Bruno: le analytics restano nomi fissi, senza dati accademici o destinazioni", async ({ page }) => {
  await pulisci(page);
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  // ⚠️ Il registratore si installa DOPO il caricamento: lo script ufficiale
  // di GoatCounter definisce `window.goatcounter` da sé e sovrascriverebbe
  // uno stub messo a document-start.
  await page.evaluate(() => {
    window.__eventi = [];
    window.goatcounter = { count: dati => window.__eventi.push(dati) };
  });
  await onboardingFinoA(page, "fine");

  await page.locator(".la-meta-manuale summary").click();
  await page.locator("#la-meta-manuale-universita").fill("Universidade Católica Portuguesa");
  await page.locator(".la-meta-manuale button").click();
  await page.locator("#la-plan-paste").fill("DIR01; Diritto internazionale; 9");
  await page.getByRole("button", { name: "Mostra anteprima" }).click();
  await page.getByRole("button", { name: "Conferma il piano" }).click();
  await page.locator("#la-intento button", { hasText: "Crea il dossier" }).click();

  const eventi = await page.evaluate(() => window.__eventi);
  const ammessi = new Set([
    "la-open", "la-plan-confirmed", "la-ready", "la-version-created",
    "la-recognition-closed", "la-suggestion-used",
  ]);
  expect(eventi.length).toBeGreaterThan(0);
  for (const evento of eventi) {
    expect(ammessi.has(evento.path), `evento inatteso: ${evento.path}`).toBe(true);
    expect(Object.keys(evento).sort()).toEqual(["event", "path"]);
    const serializzato = JSON.stringify(evento);
    for (const proibito of ["Portuguesa", "Diritto", "cafoscari", "sapienza", "manual:", "2026/27"]) {
      expect(serializzato, `analytics non deve contenere "${proibito}"`).not.toContain(proibito);
    }
  }
});
