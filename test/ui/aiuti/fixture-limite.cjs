// Redesign v4, Fase 0 punto 5 (PLAN_REDESIGN_V4.md): fixture "limite" per
// baseline, canvas e verifica visiva. I casi si cercano NEI DATI VERI caricati
// dalla pagina, non si scrivono a mano: quando il cantiere dati aggiunge o
// corregge mete, la fixture continua a puntare al caso più estremo esistente.
//
// Casi:
//   nomeLungo      — meta con il nome università più lungo (con la sua città)
//   cittaLunga     — meta con il nome città più lungo
//   senzaLingua    — meta con requisitoLingua vuoto ("da verificare")
//   rossa          — meta + profilo per cui la compatibilità esce 🔒
//   schedinaPiena  — 5 mete dell'area del profilo, già in schedina
//   zeroRisultati  — testo di ricerca che non trova nulla
//
// Uso tipico:
//   const limite = require("./aiuti/fixture-limite.cjs");
//   await limite.apri(page, "cafoscari");                 // dati caricati
//   const casi = await limite.trovaCasi(page);
//   await limite.applicaZaino(page, "cafoscari", limite.zaino({ … }), "#mete");
const PAGINA = "/index.html";
const RICERCA_VUOTA = "zzqx nessuna meta";
const PROFILO_BASE = {
  livello: "L",
  lingue: [{ lingua: "Inglese", livello: "B2", certificata: false }],
};

// Stesso formato di zaino v3 usato dalle altre spec (v6a-scelte).
function zaino({
  profilo = null,
  preferite = [],
  schedina = preferite,
  fase = "esplorando",
  onboardingFatto = true,
} = {}) {
  return {
    profilo,
    checklist: {},
    metePreferite: preferite,
    schedina,
    fase,
    checklistPost: {},
    onboardingFatto,
    autoverifica: {},
    zainoCelebrato: false,
    wizardMete: true,
    la: { metaAperta: null, bozzePerMeta: {} },
    cicloPercorso: "2027/28",
    cicloDati: "2026/27",
    storico: {},
    schedinaCiclo: {},
  };
}

// Pagina pulita con l'ateneo scelto: serve solo a far caricare METE.
async function apri(page, ateneo, hash = "") {
  await page.goto(PAGINA, { waitUntil: "domcontentloaded" });
  await page.evaluate(a => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", a);
  }, ateneo);
  // Cambiare solo l'hash non ricarica il documento: l'ateneo si legge all'avvio.
  await page.goto(`${PAGINA}${hash}`, { waitUntil: "domcontentloaded" });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => Array.isArray(window.METE) && window.METE.length > 0);
}

// Scrive lo zaino e ricarica sulla rotta indicata.
async function applicaZaino(page, ateneo, contenuto, hash = "#oggi") {
  await page.evaluate(({ ateneo, contenuto }) => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("erasmuswiz_ateneo", ateneo);
    localStorage.setItem("erasmuswiz-zaino", JSON.stringify({
      v: 3, zaini: { [ateneo]: contenuto },
    }));
  }, { ateneo, contenuto });
  await page.goto(`${PAGINA}${hash}`, { waitUntil: "domcontentloaded" });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => Array.isArray(window.METE) && window.METE.length > 0);
}

async function trovaCasi(page) {
  return page.evaluate(({ PROFILO_BASE }) => {
    const mete = window.METE;
    const area = m => (m.areeDisciplinari && m.areeDisciplinari[0] && m.areeDisciplinari[0].codice) || null;
    const breve = m => m && ({ id: m.id, universita: m.universita, citta: m.citta, paese: m.paese, area: area(m) });
    const piuLungo = campo => mete.reduce((a, m) => (String(m[campo] || "").length > String(a[campo] || "").length ? m : a));

    const senzaLingua = mete.find(m => !m.requisitoLingua || m.requisitoLingua.length === 0) || null;

    // Rossa: profilo senza lingue utili contro una meta con requisito esplicito.
    let rossa = null;
    const profiloDebole = { livello: "L", lingue: [{ lingua: "Inglese", livello: "A1", certificata: false }] };
    if (typeof window.calcolaCompatibilita === "function") {
      for (const m of mete) {
        if (!m.requisitoLingua || !m.requisitoLingua.length) continue;
        const p = Object.assign({}, profiloDebole, { area: area(m) });
        const c = window.calcolaCompatibilita(m, p);
        if (c && c.icona === "🔒") { rossa = { meta: breve(m), profilo: p, stato: c.stato }; break; }
      }
    }

    // Schedina piena: l'area con più mete, prime 5.
    const perArea = {};
    mete.forEach(m => { const a = area(m); if (a) (perArea[a] = perArea[a] || []).push(m.id); });
    const areaPiena = Object.keys(perArea).sort((a, b) => perArea[b].length - perArea[a].length)[0];

    return {
      ateneo: localStorage.getItem("erasmuswiz_ateneo"),
      totaleMete: mete.length,
      nomeLungo: breve(piuLungo("universita")),
      cittaLunga: breve(piuLungo("citta")),
      senzaLingua: breve(senzaLingua),
      rossa,
      schedinaPiena: {
        profilo: Object.assign({}, PROFILO_BASE, { area: areaPiena }),
        ids: perArea[areaPiena].slice(0, 5),
      },
    };
  }, { PROFILO_BASE });
}

async function zeroRisultati(page) {
  await page.locator("#cerca-mete").fill(RICERCA_VUOTA);
}

module.exports = { PAGINA, PROFILO_BASE, RICERCA_VUOTA, zaino, apri, applicaZaino, trovaCasi, zeroRisultati };
