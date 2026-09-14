// Uso: node scatta-onb.cjs <cartella-uscita>
const { spawn } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");
const { chromium } = require("C:/erasmuswiz/node_modules/playwright");
const RADICE = "C:/erasmuswiz-redesign-v4";
const OUT = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const srv = spawn("node", [path.join(RADICE, "test/server-statico.cjs")], { stdio: "ignore" });
  await new Promise((r) => setTimeout(r, 800));
  const browser = await chromium.launch();
  const larghezze = (process.env.LARGHEZZE || "390,1280").split(",").map(Number);
  try {
    for (const w of larghezze) {
      for (const ateneo of ["sapienza"]) {
        const ctx = await browser.newContext({ viewport: { width: w, height: w < 768 ? 844 : 900 }, reducedMotion: "reduce" });
        const page = await ctx.newPage();
        const errori = [];
        page.on("pageerror", (e) => errori.push(e.message));
        await page.addInitScript(() => {
          if (localStorage.getItem("__p")) return;
          localStorage.clear(); sessionStorage.clear();
          localStorage.setItem("erasmuswiz_ateneo", "cafoscari");
          localStorage.setItem("__p", "1");
        });
        await page.goto("http://127.0.0.1:8123/index.html#oggi", { waitUntil: "networkidle" });
        const shot = async (n) => {
          await page.evaluate(async () => { if (document.fonts) await document.fonts.ready; });
          await page.waitForTimeout(500);
          await page.screenshot({ path: path.join(OUT, `onb-${w}-${n}.png`), animations: "disabled", caret: "hide" });
        };
        const s = (t) => page.locator("#benvenuto-scelte .benvenuto-scelta", { hasText: t });
        await shot("0-scena");
        await page.locator("#benvenuto-inizia").click();
        await shot("1-momento");
        await page.locator("#benvenuto-scelte [data-fase='esplorando']").click();
        await shot("2-ateneo");
        await s("Ca' Foscari").click();
        await shot("3-facolta");
        await page.locator("#benvenuto-scelte .benvenuto-scelte-riga .benvenuto-scelta").first().click();
        await shot("4-livello");
        await s("Triennale").click();
        await shot("5-lingue");
        await page.locator("#benvenuto-scelte select").first().selectOption("Inglese");
        await page.locator("#benvenuto-scelte select").nth(1).selectOption("B2");
        await s("Fatto").click();
        await page.waitForTimeout(800);
        await page.evaluate(() => window.scrollTo(0, 0));
        await shot("6-esito");
        await page.screenshot({ path: path.join(OUT, `onb-${w}-6-esito-full.png`), fullPage: true });
        await page.locator("[data-esito-mete='si']").click();
        await shot("7-sveglia");
        if (errori.length) console.log(w, "ERRORI", errori);
        await ctx.close();
      }
    }
  } finally {
    await browser.close();
    srv.kill();
  }
})();
