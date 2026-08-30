import test from "node:test";
import assert from "node:assert/strict";
import { applicaCancelloLivello } from "../scripts/cancelli.mjs";

test("un URL di facolta declassa senza mai alzare il livello", () => {
  const lingua = { livello: "ateneo", fonte: { url: "https://example.edu/faculty-of-law", citazione: "A sufficiently long citation for this test", verificataIl: "2026-08-30" } };
  assert.equal(applicaCancelloLivello("requisitoLingua", lingua).livello, "facolta");
  assert.equal(applicaCancelloLivello("requisitoLingua", lingua).approvato, false);
  const catalogo = applicaCancelloLivello("linkCatalogo", lingua);
  assert.equal(catalogo.livello, "facolta");
  assert.equal(catalogo.approvato, true);
  const giaStretto = applicaCancelloLivello("requisitoLingua", { ...lingua, livello: "facolta", fonte: { ...lingua.fonte, url: "https://example.edu/incoming" } });
  assert.equal(giaStretto.livello, "facolta");
  assert.equal(giaStretto.approvato, false);
  const titoloFacolta = applicaCancelloLivello("requisitoLingua", { ...lingua, fonte: { ...lingua.fonte, url: "https://example.edu/incoming" } }, { titolo: "Faculty of Law incoming" });
  assert.equal(titoloFacolta.livello, "facolta");
});
