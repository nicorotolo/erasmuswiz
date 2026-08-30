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
import { caricaMete, statoCampo, copertoDavvero } from "../scripts/lib-mete.mjs";

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
