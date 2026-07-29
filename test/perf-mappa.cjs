const { spawn } = require("node:child_process");
const http = require("node:http");
const net = require("node:net");
const path = require("node:path");
const { chromium } = require("@playwright/test");

const RADICE = path.resolve(__dirname, "..");
const HOST = "127.0.0.1";
const PORTA = 8123;
const URL = `http://${HOST}:${PORTA}/index.html#mete`;
// 41, non 5. Le singole misure valgono 2–40 ms su una macchina il cui rumore
// è dello stesso ordine: con 5 giri la mediana del rapporto oscillava fra
// 0,98× e 3,81× A CODICE INVARIATO, e con 9 andava peggio. Solo un numero
// alto di ripetizioni rende la mediana stabile. Costa qualche secondo.
const GIRI = 41;
// Il nuovo algoritmo non deve essere più lento del vecchio oltre questi
// fattori (mediane della STESSA esecuzione).
//
// ⚠️ IL LIMITE SUL RAGGRUPPAMENTO È 3× PER SCELTA DICHIARATA, NON PERCHÉ VA
// BENE COSÌ. Misurato il 2026-07-29 su 5 esecuzioni interlacciate: la griglia
// a celle introdotta da V3 rende `mappaClusterizza()` costantemente
// 2,19–2,66× PIÙ LENTA della ricerca lineare che sostituisce. Sui numeri veri
// (385 città → ~44 gruppi) scorrere una lista di 44 elementi costa meno che
// indicizzare una griglia; la griglia converrebbe su numeri molto maggiori.
// Nicola ha deciso di tenerla comunque, in previsione di più atenei: questo
// limite è la forma scritta di quella decisione. Se un giorno si torna alla
// ricerca lineare, questo numero torna a 1.25 e il banco lo dimostra.
const PEGGIORAMENTO_MAX_CLUSTER = 3.0;
// ⛔ SUL DISEGNO IL BANCO NON GIUDICA, E LA RAGIONE È SCRITTA QUI.
// Su ~24 esecuzioni a codice invariato (29/07) il rapporto sul disegno è
// andato da 0,61× a 1,68×, con code lunghe a ogni numero di giri provato
// (5, 9, 41). I due algoritmi sono INDISTINGUIBILI da questo strumento: la
// singola misura vale pochi ms su una macchina il cui rumore è dello stesso
// ordine. Alzare il limite finché non passa sarebbe la stessa disonestà del
// criterio assoluto che questo banco ha sostituito. Quindi il rapporto sul
// disegno si STAMPA come informazione e non fa da cancello.
// Il disegno resta comunque sorvegliato da ciò che NON balla: le invarianti
// I1–I3 (deterministiche), le tre grandezze, i long task e il tetto assoluto.
const GIUDICA_RENDER = false;
// Tetto assoluto largo: intercetta un disastro, non fa da cronometro.
const TETTO_MS = 150;
// La soglia di fusione dipende dalla larghezza: il banco non eredita più
// una misura transitoria del layout della pagina.
const LARGHEZZA_BANCO_PX = 340;

function verificaPortaLibera() {
  return new Promise((risolvi, rifiuta) => {
    const sonda = net.createServer();
    sonda.once("error", errore => {
      if (errore.code === "EADDRINUSE") {
        rifiuta(new Error(
          `La porta ${PORTA} è occupata. Il banco si ferma senza terminare il processo esistente.`
        ));
        return;
      }
      rifiuta(errore);
    });
    sonda.listen(PORTA, HOST, () => sonda.close(risolvi));
  });
}

function avviaServer() {
  return new Promise((risolvi, rifiuta) => {
    const processo = spawn(process.execPath, ["test/server-statico.cjs"], {
      cwd: RADICE,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    });
    let uscita = "";
    let errori = "";
    const timer = setTimeout(() => {
      rifiuta(new Error(`Il server non ha risposto entro 10 secondi.\n${uscita}${errori}`));
    }, 10_000);

    processo.stdout.on("data", blocco => {
      uscita += blocco.toString();
      if (uscita.includes("Server statico Playwright:")) {
        clearTimeout(timer);
        risolvi(processo);
      }
    });
    processo.stderr.on("data", blocco => { errori += blocco.toString(); });
    processo.once("exit", codice => {
      clearTimeout(timer);
      rifiuta(new Error(
        `Il server si è chiuso prima del banco (codice ${codice}).\n${uscita}${errori}`
      ));
    });
    processo.once("error", errore => {
      clearTimeout(timer);
      rifiuta(errore);
    });
  });
}

function attendiServer() {
  return new Promise((risolvi, rifiuta) => {
    const richiesta = http.get(URL, risposta => {
      risposta.resume();
      if (risposta.statusCode === 200) risolvi();
      else rifiuta(new Error(`Il server ha risposto ${risposta.statusCode}.`));
    });
    richiesta.once("error", rifiuta);
    richiesta.setTimeout(5_000, () => richiesta.destroy(new Error("Timeout HTTP.")));
  });
}

function fermaServer(processo) {
  return new Promise(risolvi => {
    if (!processo || processo.exitCode !== null) {
      risolvi();
      return;
    }
    processo.once("exit", () => risolvi());
    // È il solo processo avviato dal banco; server-statico gestisce SIGTERM
    // chiudendo prima il socket. Nessun processo estraneo viene toccato.
    processo.kill("SIGTERM");
  });
}

function listaTempi(valori) {
  return valori.map(valore => valore.toFixed(1)).join(" · ");
}

function peggiore(valori) {
  return Math.max(...valori);
}

function mediana(valori) {
  const ordinati = valori.slice().sort((a, b) => a - b);
  return ordinati[Math.floor(ordinati.length / 2)];
}

async function misura(page) {
  return page.evaluate(async ({ giri, larghezzaBanco }) => {
    const mete = window.METE;
    if (!Array.isArray(mete) || !mete.length) throw new Error("Dataset METE non caricato.");
    if (typeof window.mappaClusterizza !== "function") {
      throw new Error("Motore mappa non disponibile.");
    }

    const larghezza = larghezzaBanco;
    const banco = document.createElement("div");
    banco.style.cssText =
      `position:fixed;left:-10000px;top:0;width:${larghezza}px;visibility:hidden;`;
    document.body.appendChild(banco);
    const layer = window.mappaCostruisci(banco);

    function perCittaRiferimento(elenco) {
      const gruppi = new Map();
      elenco.forEach(meta => {
        const coordinate = window.coordDiMeta(meta);
        if (!coordinate || coordinate.fuori || coordinate.x === undefined) return;
        const chiave = `${meta.citta}|${meta.paese}`;
        if (!gruppi.has(chiave)) {
          gruppi.set(chiave, {
            x: coordinate.x,
            y: coordinate.y,
            citta: meta.citta,
            paese: meta.paese,
            items: [],
          });
        }
        gruppi.get(chiave).items.push(meta);
      });
      return gruppi;
    }

    // Copia intenzionale dell'algoritmo precedente a V3. Resta nel banco
    // come termine di confronto: le ottimizzazioni valgono solo se producono
    // lo stesso ordine, gli stessi centri e le stesse etichette.
    function clusterizzaPrima(elenco, cont) {
      const gruppi = perCittaRiferimento(elenco);
      const proiezione = window.COORDINATE_CITTA.PROIEZIONE;
      const soglia = 30 *
        (proiezione.viewBoxW / Math.max(cont.clientWidth || 320, 280));
      const risultato = [];
      gruppi.forEach(gruppo => {
        const vicino = risultato.find(esistente =>
          Math.hypot(esistente.x - gruppo.x, esistente.y - gruppo.y) < soglia
        );
        if (vicino) vicino.items = vicino.items.concat(gruppo.items);
        else {
          risultato.push({
            x: gruppo.x,
            y: gruppo.y,
            citta: gruppo.citta,
            paese: gruppo.paese,
            items: gruppo.items.slice(),
          });
        }
      });
      return risultato;
    }

    function renderPrima(destinazione, elenco, opzioni) {
      opzioni = opzioni || {};
      destinazione.innerHTML = "";
      const proiezione = window.COORDINATE_CITTA.PROIEZIONE;
      clusterizzaPrima(elenco, destinazione.parentElement).forEach((gruppo, indice) => {
        const quanti = gruppo.items.length;
        const bottone = window.crea("button",
          "mappa-pin" + (quanti > 1 ? " mappa-pin-cluster" : "") +
          (opzioni.evidenzia ? " evidenzia" : "") +
          (opzioni.stellate && quanti === 1 &&
            opzioni.stellate.includes(gruppo.items[0].id) ? " mappa-pin-stella" : ""));
        bottone.type = "button";
        bottone.style.left = (gruppo.x / proiezione.viewBoxW * 100) + "%";
        bottone.style.top = (gruppo.y / proiezione.viewBoxH * 100) + "%";
        const punto = window.crea("span", "punto");
        if (quanti > 1) punto.textContent = String(quanti);
        if (opzioni.evidenzia) {
          punto.style.animationDelay = Math.min(indice, 25) * 30 + "ms";
        }
        bottone.appendChild(punto);
        bottone.setAttribute("aria-label", quanti === 1
          ? `${window.nomeUniversita(gruppo.items[0].universita)}, ${gruppo.citta} (${gruppo.paese}) — apri il dettaglio`
          : `${quanti} mete vicino a ${gruppo.citta} — apri l'elenco`);
        bottone.addEventListener("mouseenter", () =>
          window.mappaMostraTooltip(gruppo, bottone));
        bottone.addEventListener("mouseleave", window.mappaNascondiTooltip);
        bottone.addEventListener("focus", () =>
          window.mappaMostraTooltip(gruppo, bottone));
        bottone.addEventListener("blur", window.mappaNascondiTooltip);
        bottone.addEventListener("click", () => {
          window.mappaNascondiTooltip();
          if (quanti === 1) window.apriDettaglioMeta(gruppo.items[0]);
          else window.apriListaCluster(gruppo);
        });
        destinazione.appendChild(bottone);
      });
    }

    const tempiPrimaCluster = [];
    const tempiPrimaRender = [];
    const tempiDopoCluster = [];
    const tempiDopoRender = [];
    const longTask = [];
    const osservatore = typeof PerformanceObserver === "function"
      ? new PerformanceObserver(elenco => {
          elenco.getEntries().forEach(voce => {
            if (voce.duration > 50) longTask.push(voce.duration);
          });
        })
      : null;
    if (osservatore) {
      // Non si includono i long task del caricamento pagina: la soglia della
      // spec riguarda i cinque render misurati qui sotto.
      try { osservatore.observe({ type: "longtask" }); }
      catch (errore) {}
    }

    // ⛔ I due algoritmi si misurano ALTERNATI, non in due blocchi separati.
    // Misurandoli in blocco il secondo pagava la macchina com'era diventata
    // nel frattempo: il rapporto fra i due oscillava fra 0,95× e 1,42× a
    // codice invariato. Alternandoli, ogni coppia subisce lo stesso carico.
    // Un giro a vuoto per parte prima di misurare: il primo disegno di
    // `mappaRenderPins` costruisce tutti i pin, i successivi li riusano, e
    // mischiare le due cose falsava la mediana.
    clusterizzaPrima(mete, banco);
    renderPrima(layer, mete, {});
    layer.innerHTML = "";
    window.mappaClusterizza(mete, banco);
    window.mappaRenderPins(layer, mete, {});

    for (let giro = 0; giro < giri; giro += 1) {
      layer.innerHTML = "";
      let inizio = performance.now();
      clusterizzaPrima(mete, banco);
      tempiPrimaCluster.push(performance.now() - inizio);

      inizio = performance.now();
      renderPrima(layer, mete, {});
      tempiPrimaRender.push(performance.now() - inizio);

      layer.innerHTML = "";
      window.mappaRenderPins(layer, mete, {}); // ripristina i nodi riusabili
      inizio = performance.now();
      window.mappaClusterizza(mete, banco);
      tempiDopoCluster.push(performance.now() - inizio);

      inizio = performance.now();
      window.mappaRenderPins(layer, mete, {});
      tempiDopoRender.push(performance.now() - inizio);
    }

    await new Promise(risolvi => setTimeout(risolvi, 50));
    if (osservatore) osservatore.disconnect();

    const gruppiCitta = perCittaRiferimento(mete);
    const gruppiPrima = clusterizzaPrima(mete, banco);
    renderPrima(layer, mete, {});
    const snapshotPrima = [...layer.querySelectorAll(".mappa-pin")].map(pin => ({
      left: parseFloat(pin.style.left),
      top: parseFloat(pin.style.top),
      aria: pin.getAttribute("aria-label"),
      classi: pin.className,
    }));
    window.mappaRenderPins(layer, mete, {});
    const snapshotDopo = [...layer.querySelectorAll(".mappa-pin")].map(pin => ({
      left: parseFloat(pin.style.left),
      top: parseFloat(pin.style.top),
      aria: pin.getAttribute("aria-label"),
      classi: pin.className,
    }));

    const centriUguali = snapshotPrima.length === snapshotDopo.length &&
      snapshotPrima.every((pin, indice) =>
        Math.abs(pin.left - snapshotDopo[indice].left) <= 0.1 &&
        Math.abs(pin.top - snapshotDopo[indice].top) <= 0.1
      );
    const ariaUguali = snapshotPrima.length === snapshotDopo.length &&
      snapshotPrima.every((pin, indice) => pin.aria === snapshotDopo[indice].aria);
    const classiUguali = snapshotPrima.length === snapshotDopo.length &&
      snapshotPrima.every((pin, indice) => pin.classi === snapshotDopo[indice].classi);

    banco.remove();
    return {
      grandezze: {
        record: mete.length,
        gruppiGeografici: gruppiCitta.size,
        pulsantiPrima: gruppiPrima.length,
        pulsantiDopo: snapshotDopo.length,
        larghezza,
      },
      prima: { cluster: tempiPrimaCluster, render: tempiPrimaRender },
      dopo: { cluster: tempiDopoCluster, render: tempiDopoRender },
      longTask,
      invariantiMisurate: {
        I1: centriUguali,
        I2: ariaUguali,
        I3: classiUguali,
      },
    };
  }, { giri: GIRI, larghezzaBanco: LARGHEZZA_BANCO_PX });
}

async function main() {
  let server = null;
  let browser = null;
  try {
    await verificaPortaLibera();
    server = await avviaServer();
    await attendiServer();

    browser = await chromium.launch({ headless: true });
    const contesto = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    await contesto.addInitScript(() => {
      localStorage.clear();
      sessionStorage.clear();
      localStorage.setItem("erasmuswiz_ateneo", "sapienza");
    });
    const page = await contesto.newPage();
    const sessioneCdp = await contesto.newCDPSession(page);
    await sessioneCdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() =>
      Array.isArray(window.METE) &&
      window.METE.length > 0 &&
      typeof window.mappaRenderPins === "function" &&
      document.querySelectorAll("#mappa-mete .mappa-pin").length > 0
    );

    const risultato = await misura(page);
    const primaClusterPeggiore = peggiore(risultato.prima.cluster);
    const primaRenderPeggiore = peggiore(risultato.prima.render);
    const dopoClusterPeggiore = peggiore(risultato.dopo.cluster);
    const dopoRenderPeggiore = peggiore(risultato.dopo.render);
    const dopoClusterMediana = mediana(risultato.dopo.cluster);
    const dopoRenderMediana = mediana(risultato.dopo.render);

    console.log("BANCO MAPPA V3 — Chromium headless · viewport 390×844 · CPU 4×");
    console.log(
      `Grandezze: ${risultato.grandezze.record} record elaborati · ` +
      `${risultato.grandezze.gruppiGeografici} gruppi geografici · ` +
      `${risultato.grandezze.pulsantiDopo} pulsanti creati ` +
      `(contenitore ${risultato.grandezze.larghezza}px)`
    );
    console.log(
      `PRIMA  cluster (ms): ${listaTempi(risultato.prima.cluster)} ` +
      `· peggiore ${primaClusterPeggiore.toFixed(1)}`
    );
    console.log(
      `PRIMA  render  (ms): ${listaTempi(risultato.prima.render)} ` +
      `· peggiore ${primaRenderPeggiore.toFixed(1)}`
    );
    const primaClusterMediana = mediana(risultato.prima.cluster);
    const primaRenderMediana = mediana(risultato.prima.render);
    const rapportoCluster = dopoClusterMediana / primaClusterMediana;
    const rapportoRender = dopoRenderMediana / primaRenderMediana;

    console.log(
      `DOPO   cluster (ms): ${listaTempi(risultato.dopo.cluster)} ` +
      `· mediana ${dopoClusterMediana.toFixed(1)} ` +
      `· peggiore ${dopoClusterPeggiore.toFixed(1)}`
    );
    console.log(
      `DOPO   render  (ms): ${listaTempi(risultato.dopo.render)} ` +
      `· mediana ${dopoRenderMediana.toFixed(1)} ` +
      `· peggiore ${dopoRenderPeggiore.toFixed(1)}`
    );
    console.log(
      `RAPPORTO dopo/prima (mediane): ` +
      `cluster ${rapportoCluster.toFixed(2)}× (ammesso ${PEGGIORAMENTO_MAX_CLUSTER.toFixed(2)}× — scelta dichiarata, vedi il commento in cima) ` +
      `· render ${rapportoRender.toFixed(2)}× (SOLO INFORMATIVO: sotto ±40% questo banco non discrimina)`
    );
    console.log(`Long task > 50 ms durante i render: ${risultato.longTask.length}`);
    console.log(
      "Confronto automatico: " +
      `I1 centri/pin ${risultato.invariantiMisurate.I1 ? "uguali" : "DIVERSI"} · ` +
      `I2 aria-label ${risultato.invariantiMisurate.I2 ? "uguali" : "DIVERSI"} · ` +
      `I3 classi ${risultato.invariantiMisurate.I3 ? "uguali" : "DIVERSE"}`
    );

    // Il giudizio è RELATIVO, non assoluto. Sette esecuzioni dello stesso
    // identico codice (29/07) hanno dato un peggiore fra 3,8 e 73,5 ms: con
    // una soglia fissa il banco misurava il carico del computer, non la
    // mappa, e diventava rosso 2 volte su 7 senza che nulla fosse cambiato.
    // Vecchio e nuovo algoritmo vengono misurati NELLA STESSA esecuzione,
    // quindi subiscono lo stesso rumore: il loro rapporto è stabile.
    // Il tetto assoluto resta, ma largo: serve solo a intercettare un
    // disastro (un ciclo che esplode), non a fare da cronometro.
    const soglieVerdi =
      rapportoCluster <= PEGGIORAMENTO_MAX_CLUSTER &&
      (!GIUDICA_RENDER || rapportoRender <= 1.5) &&
      dopoClusterPeggiore < TETTO_MS &&
      dopoRenderPeggiore < TETTO_MS &&
      risultato.longTask.length === 0;
    const esitoInvarianti = Object.values(risultato.invariantiMisurate).every(Boolean);
    const grandezzeUguali =
      risultato.grandezze.pulsantiPrima === risultato.grandezze.pulsantiDopo;
    if (!soglieVerdi || !esitoInvarianti || !grandezzeUguali) {
      process.exitCode = 1;
      console.error("ESITO: ROSSO — soglia o invariante superata.");
    } else {
      console.log("ESITO: VERDE");
    }
  } finally {
    if (browser) await browser.close();
    if (server) await fermaServer(server);
  }
}

main().catch(errore => {
  console.error(`BANCO NON ESEGUITO: ${errore.message}`);
  process.exitCode = 1;
});
