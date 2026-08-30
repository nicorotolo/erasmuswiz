import test from "node:test";
import assert from "node:assert/strict";
import { normalizzaPaese, Limitatore } from "../scripts/raccogli-partner.mjs";

test("raccogli-partner normalizza il paese del CSV senza perdere le parole composte", () => {
  assert.equal(normalizzaPaese("AUSTRIA"), "Austria");
  assert.equal(normalizzaPaese("CZECH REPUBLIC"), "Czech Republic");
});

// Il 30/08 la raccolta e' morta con codice 13 ("unsettled top-level await"):
// il limitatore si era bloccato con la rete ferma. Caso costruito: un indirizzo
// che non e' un URL assoluto fa saltare le righe fra la presa del posto e il
// try/finally, e il posto non torna piu' indietro. Dopo tanti errori quanti
// sono i posti, nessuna richiesta parte piu', e non resta niente in coda che possa svegliarla.
test("il limitatore restituisce il posto anche quando l'indirizzo e' malformato", async () => {
  const lim = new Limitatore(2);
  for (let i = 0; i < 2; i++) await assert.rejects(() => lim.esegui("/sitemap.xml", async () => "mai"));
  assert.equal(lim.attivi, 0, "i posti presi vanno restituiti anche in caso di errore");
  const scaduto = Symbol("scaduto");
  const esito = await Promise.race([
    lim.esegui("https://esempio.it/", async () => "fatto"),
    new Promise((r) => setTimeout(() => r(scaduto), 500)),
  ]);
  assert.equal(esito, "fatto", "dopo due errori il limitatore deve ancora far passare una richiesta buona");
});
