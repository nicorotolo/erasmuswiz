// Prove sulla definizione di "completo" (Fase 3 della pipeline V2).
//
// Non e' un dettaglio tecnico: da questa funzione dipendono le percentuali di
// copertura che diranno quando la mappatura e' finita. Il rischio vero e' che
// qualcuno, per far salire i numeri, faccia contare come coperti i 168 casi
// ereditati dalla V1 - che sono dichiarati non trovabili SENZA che nessuno
// abbia registrato dove ha cercato e quando. La quarta prova qui sotto esiste
// per impedirlo.

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  caricaMete, statoCampo, copertoDavvero, campoVuoto, valoreParsato, impostaCampo,
} from "../scripts/lib-mete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("un campo con il valore vale 'dato' e conta come coperto", () => {
  const meta = { requisitoLingua: [{ lingua: "Inglese", livello: "B2" }] };
  assert.equal(statoCampo(meta, "requisitoLingua"), "dato");
  assert.equal(copertoDavvero("dato"), true);
});

test("un campo vuoto e mai cercato vale 'vuoto'", () => {
  assert.equal(statoCampo({ requisitoLingua: [] }, "requisitoLingua"), "vuoto");
  assert.equal(statoCampo({}, "linkCatalogo"), "vuoto");
  // Il segnaposto dei seed non e' un dato.
  assert.equal(statoCampo({ linkSito: "Da verificare sulla scheda" }, "linkSito"), "vuoto");
});

test("non trovabile CON fonte e data e' copertura onesta", () => {
  const meta = {
    requisitoLingua: [],
    nonTrovabile: { requisitoLingua: { cercatoIl: "2026-09-01", fonte: "https://esempio.edu/incoming" } },
  };
  assert.equal(statoCampo(meta, "requisitoLingua"), "nonTrovabile");
  assert.equal(copertoDavvero("nonTrovabile"), true);
});

test("non trovabile SENZA fonte o data NON conta come copertura", () => {
  const senzaNulla = { requisitoLingua: [], nonTrovabile: { requisitoLingua: { origine: "pipeline V1" } } };
  const senzaFonte = { requisitoLingua: [], nonTrovabile: { requisitoLingua: { cercatoIl: "2026-09-01" } } };
  const senzaData = { requisitoLingua: [], nonTrovabile: { requisitoLingua: { fonte: "https://esempio.edu" } } };
  for (const meta of [senzaNulla, senzaFonte, senzaData]) {
    assert.equal(statoCampo(meta, "requisitoLingua"), "daRiconfermare");
  }
  assert.equal(copertoDavvero("daRiconfermare"), false, "i 168 ereditati dalla V1 non sono copertura");
  assert.equal(copertoDavvero("vuoto"), false);
});

test("un albero di lingua senza foglie non e' un dato", () => {
  // E' la forma che il modello restituisce quando NON trova il requisito:
  // l'oggetto ha tre chiavi ma non dice niente. Contarlo come dato lo
  // toglierebbe dalla coda e lo farebbe figurare come copertura.
  const vuoto = { requisitoLingua: { op: "ANY", figli: [], fonte: "https://esempio.edu" } };
  const pieno = { requisitoLingua: { op: "ANY", figli: [{ lingua: "Inglese", livello: "B2" }] } };
  assert.equal(statoCampo(vuoto, "requisitoLingua"), "vuoto");
  assert.equal(statoCampo(pieno, "requisitoLingua"), "dato");
});

test("chi legge e chi scrive sono d'accordo su cosa e' vuoto", () => {
  // campoVuoto lavora sul testo grezzo, statoCampo sul valore letto: se i due
  // non concordano, un campo diventa inarrivabile - chi legge lo dichiara da
  // fare, chi scrive lo salta perche' lo crede pieno.
  assert.equal(campoVuoto("[]"), true);
  assert.equal(campoVuoto("[\n    ]"), true, "array vuoto scritto su piu' righe");
  assert.equal(campoVuoto('{ op: "ANY", figli: [] }'), true, "albero senza foglie");
  assert.equal(campoVuoto('"Da verificare sulla scheda"'), true);
  assert.equal(campoVuoto('[{ lingua: "Inglese" }]'), false);
  assert.equal(campoVuoto('"https://esempio.edu"'), false);
});

test("dichiarare non trovabile un campo non cancella le dichiarazioni degli altri", () => {
  const blocco = [
    "  {",
    '    id: "x",',
    '    codiceErasmus: "A  TEST01",',
    "    requisitoLingua: [],",
    '    nonTrovabile: { scadenzeOspitante: { cercatoIl: "2026-09-01", fonte: "https://esempio.edu" } },',
    '    notePratiche: ""',
    "  }",
  ].join("\n");
  const esistente = valoreParsato(/nonTrovabile: (\{[^\n]*\}),/.exec(blocco)[1]) || {};
  const unito = { ...esistente, requisitoLingua: { origine: "pipeline V1" } };
  const { blocco: dopo } = impostaCampo(blocco, "nonTrovabile", unito, { soloSeVuoto: false });
  assert.match(dopo, /scadenzeOspitante/, "la dichiarazione precedente deve restare");
  assert.match(dopo, /https:\/\/esempio\.edu/, "con la sua fonte, che e' cio' che la rende copertura");
  assert.match(dopo, /requisitoLingua/, "e la nuova deve essersi aggiunta");
});

test("nei dati pubblicati nessuna meta dichiara insieme il dato e il non trovabile", () => {
  const stato = JSON.parse(fs.readFileSync(path.join(RADICE, "mappatura-stato.json"), "utf8"));
  const campi = ["requisitoLingua", "scadenzeOspitante", "linkSito", "linkCatalogo", "notaDisponibilita"];
  const contraddizioni = [];
  for (const info of Object.values(stato.statoDipartimenti || {})) {
    if (!info.fileJs) continue;
    const percorso = path.join(RADICE, info.fileJs);
    if (!fs.existsSync(percorso)) continue;
    for (const meta of caricaMete(fs.readFileSync(percorso, "utf8"))) {
      if (!meta.nonTrovabile) continue;
      for (const campo of campi) {
        if (meta.nonTrovabile[campo] && statoCampo(meta, campo) === "dato") {
          contraddizioni.push(`${meta.codiceErasmus} ${campo}`);
        }
      }
    }
  }
  assert.deepEqual(contraddizioni, [], "un campo non puo' avere il dato e dirsi non trovabile");
});

// Il 01/09, applicando 147 cataloghi, il diff sembrava pulito e conteneva 147
// righe a fine-riga misto: impostaCampo inseriva un a-capo nudo dentro file che
// usano CRLF. E' il difetto §8.5 di STATO_DEL_SITO, misurato e chiuso qui.
// Il 01/09 la prova qui sotto copriva solo il ramo che INSERISCE un campo
// assente, e solo con un valore di una riga. Il difetto stava nell'altro ramo:
// quando il campo c'e' gia' con un valore vuoto (`scadenzeOspitante: []`) si
// SOSTITUISCE, e quella chiamata dimenticava di passare il fine-riga. Con un
// valore multi-riga - una lista di scadenze - nascevano a-capo nudi dentro un
// file CRLF. Misurato sul blocco zero: 15 in 3 file su 23, visti dal cancello
// della catena e da nessuna prova.
test("impostaCampo: anche SOSTITUENDO un valore multi-riga rispetta il CRLF", () => {
  const CR = String.fromCharCode(13, 10);
  const LF = String.fromCharCode(10);
  const blocco = ["{", "    id: 1,", "    scadenzeOspitante: [],", "    notePratiche: 'x',", "}"].join(CR);
  const valore = [{ cosa: "Apertura", periodo: "25 marzo" }, { cosa: "Chiusura", periodo: "13 aprile" }];
  const esito = impostaCampo(blocco, "scadenzeOspitante", valore, { soloSeVuoto: true });
  assert.ok(esito.modificato, "un array vuoto e' un campo vuoto: va sostituito");
  assert.ok(esito.blocco.includes("Apertura"), "il valore deve entrare davvero");
  const nudi = esito.blocco.split(CR).join("").split(LF).length - 1;
  assert.equal(nudi, 0, "sostituendo un valore multi-riga non devono restare a-capo nudi");
});

test("impostaCampo inserisce con il fine-riga che il blocco gia' usa", () => {
  const CR = String.fromCharCode(13, 10);
  const blocco = ["{", "    id: 1,", "    notePratiche: 'x',", "}"].join(CR);
  const esito = impostaCampo(blocco, "linkCatalogo", "https://esempio/catalogo");
  assert.ok(esito.modificato);
  assert.ok(esito.blocco.includes("linkCatalogo"));
  const soloLf = esito.blocco.split(CR).join("").split(String.fromCharCode(10)).length - 1;
  assert.equal(soloLf, 0, "nel blocco CRLF non deve restare nessun a-capo nudo");
  // Non basta l'assenza di a-capo nudi: inserendo PRIMA dell'a-capo invece che
  // dopo, il campo finisce incollato alla riga precedente e nasce una riga
  // vuota. Nessun a-capo nudo, e il file rovinato lo stesso.
  const righe = esito.blocco.split(CR);
  const suaRiga = righe.filter((r) => r.includes("linkCatalogo"));
  assert.equal(suaRiga.length, 1, "il campo deve stare su una riga sola");
  assert.ok(suaRiga[0].trim().startsWith("linkCatalogo:"), "il campo non puo' essere incollato alla riga precedente: " + JSON.stringify(suaRiga[0]));
  assert.equal(righe.filter((r) => r.trim() === "").length, 0, "l'inserimento non deve lasciare righe vuote");
  // e un blocco a LF resta a LF, senza CR di ritorno
  const lf = ["{", "    id: 1,", "    notePratiche: 'x',", "}"].join(String.fromCharCode(10));
  const b2 = impostaCampo(lf, "linkCatalogo", "https://esempio/catalogo").blocco;
  assert.equal(b2.indexOf(String.fromCharCode(13)), -1, "un blocco LF non deve prendere CR");
});

// Un array (scadenzeOspitante) va a capo dentro serializza: anche quello.
test("anche un valore su piu' righe rispetta il fine-riga del blocco", () => {
  const CR = String.fromCharCode(13, 10);
  const blocco = ["{", "    id: 1,", "}"].join(CR);
  const esito = impostaCampo(blocco, "scadenzeOspitante", [{ cosa: "Nomination", periodo: "10 aprile" }]);
  assert.ok(esito.modificato);
  const soloLf = esito.blocco.split(CR).join("").split(String.fromCharCode(10)).length - 1;
  assert.equal(soloLf, 0, "nemmeno l'array serializzato puo' lasciare a-capo nudi");
});
