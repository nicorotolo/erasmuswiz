// Redesign v4, Fase 0 (PLAN_REDESIGN_V4.md, «Verifica»): ogni prova
// Playwright fallisce se la pagina produce un'eccezione non gestita
// (`pageerror`), un errore di console inatteso o una risposta HTTP 4xx/5xx.
// Prima questo controllo esisteva solo nelle prove che chiamavano
// `raccogliErrori` e ignorava le risposte di rete: un CSS o un'immagine
// sparita durante il redesign sarebbe passata in silenzio.
//
// Uso: al posto di `require("@playwright/test")`
//   const { test, expect } = require("./aiuti/guardia.cjs");
// Errori che una prova provoca di proposito (es. salvataggio fallito):
//   test.use({ erroriAttesi: [/testo atteso/] });   // a livello di file/describe
//   async ({ page, ammettiErrori }) => { ammettiErrori(/testo atteso/); }  // una prova
const base = require("@playwright/test");

const test = base.test.extend({
  erroriAttesi: [[], { option: true }],

  // Per una singola prova: `async ({ page, ammettiErrori }) => { ammettiErrori(/re/); … }`
  _ammessi: async ({}, use) => { await use([]); },
  ammettiErrori: async ({ _ammessi }, use) => {
    await use((...espressioni) => _ammessi.push(...espressioni));
  },

  page: async ({ page, erroriAttesi, _ammessi }, use, testInfo) => {
    const problemi = [];
    page.on("pageerror", errore => problemi.push(`pageerror: ${errore.message}`));
    page.on("console", messaggio => {
      if (messaggio.type() === "error") problemi.push(`console: ${messaggio.text()}`);
    });
    page.on("response", risposta => {
      if (risposta.status() >= 400) {
        problemi.push(`HTTP ${risposta.status()}: ${risposta.url()}`);
      }
    });

    await use(page);

    const ammessi = [...erroriAttesi, ..._ammessi];
    const inattesi = problemi.filter(p => !ammessi.some(re => re.test(p)));
    if (inattesi.length && testInfo.status === "passed") {
      throw new Error(
        `guardia: ${inattesi.length} problemi inattesi nella pagina\n  ` +
        inattesi.join("\n  ")
      );
    }
  },
});

module.exports = { test, expect: base.expect, devices: base.devices };
