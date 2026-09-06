// La pagina d'arbitrato ha un solo modo grave di sbagliare, e non e' l'aspetto:
// se `improntaProposta` non arriva IDENTICA dalla coda al verdetto, il giudizio
// non e' riconoscibile dal registro e una giornata di lavoro di Nicola va persa.
// Tutto il resto — avvisi, conteggi, contorno — serve a decidere meglio, ma un
// errore li' fa perdere tempo, non dati.

import assert from "node:assert/strict";
import test from "node:test";
import {
  avvisi, contestoMete, costruisciPagina, dominio, incorporaJson, preparaVoci,
} from "../scripts/pagina-arbitrato.mjs";

const METE = [
  { codiceErasmus: "D BERLIN01", citta: "Berlino", paese: "Germania",
    dipartimentoCf: "Informatica", posti: [{ numero: 2 }, { numero: 1 }] },
  { codiceErasmus: "DBERLIN01", citta: "Berlino", paese: "Germania",
    dipartimentoCf: "Lettere", posti: [{ numero: 3 }] },
  { codiceErasmus: "F TOURS01", citta: "Tours", paese: "Francia",
    dipartimentoCf: "Lettere", posti: [] },
];

const VOCE = {
  codiceCanonico: "DBERLIN01", codiceNorm: "D BERLIN01", ateneo: "Freie Universitat",
  campo: "linkCatalogo", valore: "https://www.fu-berlin.de/vv/",
  citazione: "Vorlesungsverzeichnis der Freien Universitat",
  fonte: "https://www.fu-berlin.de/studium/", paginaCitata: 4,
  improntaProposta: "a".repeat(64),
};

// --- la cosa che conta: l'impronta non si ricalcola mai --------------------

test("l'impronta arriva identica dalla coda alla voce, e non e' derivata dal valore", () => {
  const [v] = preparaVoci({ code: [VOCE], mete: METE });
  assert.equal(v.improntaProposta, VOCE.improntaProposta);
  // cambiando il valore l'impronta NON deve muoversi: se si muovesse vorrebbe
  // dire che qualcuno la ricalcola invece di copiarla.
  const [w] = preparaVoci({
    code: [{ ...VOCE, valore: "https://tutto-un-altro-indirizzo.test/" }], mete: METE,
  });
  assert.equal(w.improntaProposta, VOCE.improntaProposta);
});

test("la pagina porta l'impronta, il codice e il campo: i tre pezzi della chiave", () => {
  const html = costruisciPagina({ voci: preparaVoci({ code: [VOCE], mete: METE }) });
  assert.ok(html.includes(VOCE.improntaProposta), "manca l'impronta");
  assert.ok(html.includes("DBERLIN01"), "manca il codice");
  assert.ok(html.includes("linkCatalogo"), "manca il campo");
});

// --- il contorno che serve a decidere --------------------------------------

test("il contesto conta mete, posti e dipartimenti sul codice canonico", () => {
  // "D BERLIN01" e "DBERLIN01" sono lo stesso partner: se il conteggio non
  // passasse dal codice canonico, la pagina direbbe 1 meta invece di 2.
  const per = contestoMete(METE);
  const b = per.get("DBERLIN01");
  assert.equal(b.mete, 2);
  assert.equal(b.posti, 6);
  assert.deepEqual([...b.dipartimenti].sort(), ["Informatica", "Lettere"]);
  assert.equal(per.get("FTOURS01").posti, 0);
});

test("un partner senza mete non fa esplodere la preparazione", () => {
  const [v] = preparaVoci({ code: [{ ...VOCE, codiceCanonico: "XX IGNOTO99" }], mete: METE });
  assert.equal(v.mete, 0);
  assert.deepEqual(v.dipartimenti, []);
});

// --- gli avvisi -------------------------------------------------------------

const tipi = (voce) => avvisi(voce).map((a) => a.tipo).sort();

test("avvisa quando il catalogo e' un PDF", () => {
  assert.ok(tipi({ ...VOCE, valore: "https://x.test/guida.pdf" }).includes("pdf"));
  assert.ok(tipi({ ...VOCE, valore: "https://x.test/guida.pdf?v=2" }).includes("pdf"));
  assert.ok(!tipi({ ...VOCE, valore: "https://x.test/pdfs/corsi" }).includes("pdf"));
});

test("avvisa quando l'indirizzo porta un anno vecchio, non quando porta un numero qualunque", () => {
  assert.ok(tipi({ ...VOCE, valore: "https://x.test/catalogo-2019" }).includes("anno"));
  assert.ok(!tipi({ ...VOCE, valore: "https://x.test/catalogo-2026" }).includes("anno"));
  assert.ok(!tipi({ ...VOCE, valore: "https://x.test/id/920188" }).includes("anno"));
});

test("avvisa quando il catalogo vive su un altro sito, e tace fra sottodomini dello stesso", () => {
  assert.ok(tipi({
    ...VOCE, valore: "https://catalogo.courseleaf.com/x", fonte: "https://www.ucc.ie/p",
  }).includes("dominio"));
  assert.ok(!tipi({
    ...VOCE, valore: "https://studien.uni-graz.at/x", fonte: "https://international.uni-graz.at/p",
  }).includes("dominio"));
  // i domini accademici britannici hanno un suffisso a due livelli: senza la
  // regola, due sottodomini di ox.ac.uk sembrerebbero due siti diversi.
  assert.ok(!tipi({
    ...VOCE, valore: "https://courses.ox.ac.uk/x", fonte: "https://www.ox.ac.uk/p",
  }).includes("dominio"));
  assert.ok(tipi({
    ...VOCE, valore: "https://courses.cam.ac.uk/x", fonte: "https://www.ox.ac.uk/p",
  }).includes("dominio"));
});

test("avvisa quando la citazione e' corta", () => {
  assert.ok(tipi({ ...VOCE, citazione: "Catalogo" }).includes("citazione"));
  assert.ok(!tipi(VOCE).includes("citazione"));
});

test("avvisa su 'ANY' con piu' lingue: e' il difetto noto del campo", () => {
  const lingua = {
    codiceCanonico: "DFRANKFU08", campo: "requisitoLingua", improntaProposta: "b".repeat(64),
    valore: { op: "ANY", figli: [{ lingua: "Tedesco", livello: "B2" }, { lingua: "Inglese", livello: "B2" }] },
    citazione: "Deutsch B2 / Englisch B2", fonte: "https://x.test/p",
  };
  assert.ok(tipi(lingua).includes("any"));
  // una sola lingua sotto ANY non e' ambigua: "basta questa" e "serve questa"
  // dicono la stessa cosa, e avvisare li' sarebbe rumore.
  assert.ok(!tipi({ ...lingua, valore: { op: "ANY", figli: [{ lingua: "Spagnolo", livello: "B2" }] } }).includes("any"));
  assert.ok(!tipi({ ...lingua, valore: { op: "ALL", figli: lingua.valore.figli } }).includes("any"));
});

test("un valore malformato non fa esplodere gli avvisi", () => {
  assert.deepEqual(avvisi({ campo: "requisitoLingua", valore: null }), []);
  assert.doesNotThrow(() => avvisi({ campo: "linkCatalogo", valore: "non-un-url", fonte: "" }));
});

// --- l'incorporamento -------------------------------------------------------

test("un </script> dentro una citazione non chiude il blocco della pagina", () => {
  const veleno = { ...VOCE, citazione: 'chiudo qui </script><script>alert(1)</script>' };
  const html = costruisciPagina({ voci: preparaVoci({ code: [veleno], mete: METE }) });
  const dati = html.slice(html.indexOf("var VOCI ="), html.indexOf("var CHIAVE"));
  assert.ok(!dati.includes("</script"), "il blocco dei dati contiene un tag di chiusura");
  assert.ok(!dati.includes("<script"), "il blocco dei dati contiene un tag di apertura");
  // il contenuto non si perde: e' solo scritto con le fughe
  assert.ok(dati.includes("\\u003c"), "il minore non e' stato messo in fuga");
  assert.equal(JSON.parse(dati.match(/var VOCI = (\[.*\]);/s)[1])[0].citazione, veleno.citazione);
});

test("incorporaJson mette in fuga anche i separatori di riga invisibili", () => {
  const fuori = incorporaJson([{ x: "a\u2028b\u2029c" }]);
  assert.ok(!fuori.includes("\u2028") && !fuori.includes("\u2029"));
  assert.equal(JSON.parse(fuori)[0].x, "a\u2028b\u2029c");
});

test("la pagina si costruisce anche con la coda vuota", () => {
  const html = costruisciPagina({ voci: [] });
  assert.ok(html.includes("var VOCI = []"));
  assert.ok(html.includes("<title>"));
});

test("dominio toglie il www e sopravvive a un indirizzo rotto", () => {
  assert.equal(dominio("https://www.uni-graz.at/x"), "uni-graz.at");
  assert.equal(dominio("mica-un-url"), "");
});
