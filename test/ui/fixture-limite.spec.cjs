// Le fixture limite (test/ui/aiuti/fixture-limite.cjs) trovano davvero un caso
// per ateneo e lo rendono visibile: se i dati cambiano e un caso sparisce, la
// baseline e la canvas perderebbero lo stress test senza accorgersene.
const { test, expect } = require("./aiuti/guardia.cjs");
const limite = require("./aiuti/fixture-limite.cjs");

for (const ateneo of ["cafoscari", "sapienza"]) {
  test(`fixture limite ${ateneo}: ogni caso esiste nei dati e si vede in Mete`, async ({ page }) => {
    await limite.apri(page, ateneo, "#mete");
    const casi = await limite.trovaCasi(page);
    test.info().annotations.push({ type: "casi", description: JSON.stringify(casi) });

    expect(casi.nomeLungo.universita.length).toBeGreaterThan(40);
    expect(casi.senzaLingua, "una meta senza requisito di lingua").not.toBeNull();
    expect(casi.rossa, "una combinazione meta/profilo 🔒").not.toBeNull();
    expect(casi.schedinaPiena.ids).toHaveLength(5);

    // Schedina piena: 5 slot.
    await limite.applicaZaino(page, ateneo, limite.zaino({
      profilo: casi.schedinaPiena.profilo,
      preferite: casi.schedinaPiena.ids,
    }), "#mete");
    await expect(page.locator(".schedina-slot")).toHaveCount(5);

    // Zero risultati: la griglia non mostra card.
    await limite.zeroRisultati(page);
    await expect(page.locator("#griglia-mete-v2 .card-meta-v2")).toHaveCount(0);
  });
}
