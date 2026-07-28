const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  ESITI_LINGUA,
  presentazioneLinguaSconosciuta,
  presentaCompatibilita,
  requisitiLinguaNormalizzati,
  foglieRequisitoLingua,
  valutaRequisitoLingua,
} = require("../js/puro.js");

function profilo(lingue, livello = "L") {
  return { livello, lingue };
}

function certificata(lingua, livello) {
  return { lingua, livello, certificata: true };
}

// Riproduce i due punteggi strutturali calcolati da app.js e passa tutto
// all'unica funzione che decide l'icona effettivamente mostrata nell'interfaccia.
function compatibilitaPresentata(meta, profiloStudente) {
  const postiLivello = (meta.posti || [])
    .filter((posto) => posto.livello === profiloStudente.livello);
  const pLivello = postiLivello.length ? 30 : 0;
  const numeroPosti = postiLivello.reduce(
    (somma, posto) => somma + (posto.numero || 0), 0
  );
  const pPosti = numeroPosti <= 0 ? 0 : Math.min(20, 5 + (numeroPosti - 1) * 3);
  return presentaCompatibilita(
    valutaRequisitoLingua(meta, profiloStudente),
    {
      livello: pLivello,
      posti: pPosti,
      livelloTesto: profiloStudente.livello === "L" ? "triennale" : "magistrale",
    }
  );
}

test("golden 1 — requisito assente: esito sconosciuto", () => {
  const meta = {
    requisitoLingua: [],
    posti: [{ livello: "L", numero: 2 }],
  };
  const studente = profilo([]);
  const esito = valutaRequisitoLingua(meta, studente);
  assert.equal(esito.esito, ESITI_LINGUA.SCONOSCIUTO);
  assert.equal(esito.assente, true);
  assert.equal(esito.punteggio, null);
  assert.deepEqual(presentazioneLinguaSconosciuta(esito), {
    icona: "🟡",
    stato: "Verifica la lingua",
    verificaLingua: true,
  });
  assert.equal(compatibilitaPresentata(meta, studente).icona, "🟡");
});

test("golden 2 — alternativa ANY accertata: basta una delle due lingue", () => {
  const meta = {
    requisitoLingua: {
      op: "ANY",
      figli: [
        { lingua: "Tedesco", livello: "B2" },
        { lingua: "Inglese", livello: "B2" },
      ],
      fonte: "https://example.edu/incoming",
      verificatoIl: "2026-07-27",
    },
  };
  const normalizzato = requisitiLinguaNormalizzati(meta);
  assert.equal(normalizzato.op, "ANY");
  assert.deepEqual(normalizzato.figli.map((f) => f.lingua), ["Tedesco", "Inglese"]);
  assert.equal(
    valutaRequisitoLingua(meta, profilo([certificata("Inglese", "B2")])).esito,
    ESITI_LINGUA.SODDISFATTO
  );
});

test("V0 — il separatore lessicale «o» viene convertito, la barra no", () => {
  const alternativa = requisitiLinguaNormalizzati({
    requisitoLingua: [{ lingua: "Tedesco o Inglese", livello: "B2" }],
  });
  assert.equal(alternativa.op, "ANY");
  assert.deepEqual(alternativa.figli.map((f) => f.lingua), ["Tedesco", "Inglese"]);

  const barra = requisitiLinguaNormalizzati({
    requisitoLingua: [{ lingua: "Tedesco/Inglese", livello: "B2" }],
  });
  assert.equal(barra.daVerificare, true);
});

test("V0 — ANY e ALL propagano «sconosciuto» secondo la tabella a tre valori", () => {
  const ignoto = { lingua: "Non specificata", livello: "B2" };
  const inglese = { lingua: "Inglese", livello: "B2" };
  const francese = { lingua: "Francese", livello: "B2" };
  const soloInglese = profilo([certificata("Inglese", "B2")]);

  assert.equal(valutaRequisitoLingua({
    requisitoLingua: { op: "ANY", figli: [ignoto, inglese] },
  }, soloInglese).esito, ESITI_LINGUA.SODDISFATTO);
  assert.equal(valutaRequisitoLingua({
    requisitoLingua: { op: "ANY", figli: [ignoto, francese] },
  }, soloInglese).esito, ESITI_LINGUA.SCONOSCIUTO);
  assert.equal(valutaRequisitoLingua({
    requisitoLingua: { op: "ALL", figli: [ignoto, francese] },
  }, soloInglese).esito, ESITI_LINGUA.NON_SODDISFATTO);
  assert.equal(valutaRequisitoLingua({
    requisitoLingua: { op: "ALL", figli: [ignoto, inglese] },
  }, soloInglese).esito, ESITI_LINGUA.SCONOSCIUTO);
});

test("golden 3 — congiunto ALL: una lingua mancante impedisce il superamento", () => {
  const meta = {
    requisitoLingua: {
      op: "ALL",
      figli: [
        { lingua: "Inglese", livello: "B2" },
        { lingua: "Francese", livello: "B1" },
      ],
    },
  };
  const esito = valutaRequisitoLingua(meta, profilo([certificata("Inglese", "C1")]));
  assert.equal(esito.esito, ESITI_LINGUA.NON_SODDISFATTO);
  assert.equal(esito.punteggio, 0);
});

test("golden 4 — rootPresunta ordina ma non produce mai il verde", () => {
  const meta = {
    posti: [{ livello: "L", numero: 8 }],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per studenti incoming" },
      { lingua: "Francese", livello: "B1", condizione: "per studenti incoming" },
    ],
  };
  const normalizzato = requisitiLinguaNormalizzati(meta);
  assert.equal(normalizzato.rootPresunta, "ANY");
  const studente = profilo([
    certificata("Inglese", "C2"),
    certificata("Francese", "C2"),
  ]);
  const esito = valutaRequisitoLingua(meta, studente);
  assert.equal(esito.punteggio, 50);
  assert.equal(esito.rootPresunta, true);
  assert.equal(esito.esito, ESITI_LINGUA.CONDIZIONATO);
  const presentazione = compatibilitaPresentata(meta, studente);
  assert.equal(presentazione.totale, 100);
  assert.notEqual(presentazione.icona, "✅");
  assert.equal(presentazione.icona, "⚠️");
});

test("golden 5 — bachelor B2/master C1: un magistrale con B2 non passa", () => {
  // Leggiamo il record reale: così la prova fallisce anche se in futuro i dati
  // di Groningen cambiano forma senza che l'adattatore venga aggiornato.
  const file = path.join(__dirname, "..", "js", "atenei", "cafoscari", "dati-mete.js");
  const sorgente = fs.readFileSync(file, "utf8");
  const mete = Function(`"use strict"; ${sorgente}; return METE;`)();
  const meta = mete.find((m) => m.codiceErasmus === "NL GRONING01");
  assert.ok(meta, "record reale di Groningen non trovato");
  const esito = valutaRequisitoLingua(
    meta,
    profilo([certificata("Inglese", "B2")], "LM")
  );
  assert.equal(esito.esito, ESITI_LINGUA.NON_SODDISFATTO);
  assert.equal(esito.punteggio, 12);
  assert.notEqual(
    compatibilitaPresentata(
      meta,
      profilo([certificata("Inglese", "B2")], "LM")
    ).icona,
    "✅"
  );
});

test("V0 — condizioni di livello contraddittorie restano sconosciute", () => {
  const meta = {
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per bachelor exchange" },
      { lingua: "Inglese", livello: "C1", condizione: "per studenti undergraduate" },
    ],
  };
  const esito = valutaRequisitoLingua(
    meta,
    profilo([certificata("Inglese", "C2")], "L")
  );
  assert.equal(esito.esito, ESITI_LINGUA.SCONOSCIUTO);
  assert.equal(esito.punteggio, null);
  assert.match(esito.motivi.join(" "), /più requisiti applicabili/);
});

test("golden 6 — due lingue per corsi diversi possono raggiungere il verde", () => {
  const meta = {
    posti: [{ livello: "L", numero: 8 }],
    requisitoLingua: [
      { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
    ],
  };
  const studente = profilo([certificata("Inglese", "B2")]);
  const esito = valutaRequisitoLingua(meta, studente);
  assert.equal(esito.esito, ESITI_LINGUA.CONDIZIONATO);
  assert.equal(esito.punteggio, 50);
  assert.equal(compatibilitaPresentata(meta, studente).icona, "✅");
});

test("V0 — rootPresunta e corsi insieme: vince la radice, mai verde", () => {
  const meta = {
    posti: [{ livello: "L", numero: 8 }],
    requisitoLingua: {
      op: "ANY",
      rootPresunta: "ANY",
      figli: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
      ],
    },
  };
  const studente = profilo([
    certificata("Inglese", "C2"),
    certificata("Tedesco", "C2"),
  ]);
  const presentazione = compatibilitaPresentata(meta, studente);
  assert.equal(presentazione.totale, 100);
  assert.equal(presentazione.icona, "⚠️");
  assert.notEqual(presentazione.icona, "✅");
});

test("V0 — una sola lingua legata ai corsi resta marcata nel motore", () => {
  const meta = {
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi Bachelor in inglese" },
    ],
  };
  const normalizzato = requisitiLinguaNormalizzati(meta);
  assert.deepEqual(normalizzato.quando, { livello: "L" });
  assert.equal(normalizzato.condizionatoCorsi, true);
  const esito = valutaRequisitoLingua(meta, profilo([certificata("Inglese", "B2")]));
  assert.equal(esito.esito, ESITI_LINGUA.CONDIZIONATO);
  assert.equal(esito.punteggio, 50);
});

test("V0 — un array storico misto resta condizionato dai corsi", () => {
  const meta = {
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2" },
      { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
    ],
  };
  const esito = valutaRequisitoLingua(
    meta,
    profilo([certificata("Inglese", "B2")])
  );
  assert.equal(esito.esito, ESITI_LINGUA.CONDIZIONATO);
  assert.equal(esito.punteggio, 50);
});

test("golden 7 — segnaposto: sconosciuto, mai promosso o bocciato", () => {
  const meta = {
    posti: [{ livello: "L", numero: 2 }],
    requisitoLingua: [
      { lingua: "Non specificata", livello: "B2", condizione: "da confermare" },
    ],
  };
  const studente = profilo([]);
  const esito = valutaRequisitoLingua(meta, studente);
  assert.equal(esito.esito, ESITI_LINGUA.SCONOSCIUTO);
  assert.equal(esito.punteggio, null);
  assert.equal(compatibilitaPresentata(meta, studente).icona, "🟡");
});

test("golden 8 — livelli non standard alti e bassi restano entrambi ambigui", () => {
  for (const livello of ["B1/B2", "B2.2"]) {
    const meta = {
      posti: [{ livello: "L", numero: 2 }],
      requisitoLingua: [{ lingua: "Inglese", livello, condizione: "da fonte" }],
    };
    const studente = profilo([certificata("Inglese", "C2")]);
    const esito = valutaRequisitoLingua(meta, studente);
    assert.equal(esito.esito, ESITI_LINGUA.SCONOSCIUTO, livello);
    assert.equal(esito.punteggio, null, livello);
    assert.equal(compatibilitaPresentata(meta, studente).icona, "🟡", livello);
  }
});

test("V0 — un requisito condizionato non nasconde l'assenza di posti", () => {
  const meta = {
    posti: [{ livello: "L", numero: 4 }],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
    ],
  };
  const presentazione = compatibilitaPresentata(
    meta,
    profilo([certificata("Inglese", "C2")], "LM")
  );
  assert.equal(presentazione.icona, "⚠️");
  assert.match(presentazione.dettaglio, /Nessun posto.*magistrale/i);
});

test("golden 9 — livello richiesto superiore a quello posseduto: non soddisfatto", () => {
  const meta = {
    requisitoLingua: [{ lingua: "Inglese", livello: "C1", condizione: "richiesto" }],
  };
  const esito = valutaRequisitoLingua(meta, profilo([certificata("Inglese", "B2")]));
  assert.equal(esito.esito, ESITI_LINGUA.NON_SODDISFATTO);
  assert.equal(esito.punteggio, 12);
});

test("golden 10 — livello sufficiente ma non certificato: riserva, non verde", () => {
  const meta = {
    requisitoLingua: [{ lingua: "Inglese", livello: "B2", condizione: "richiesto" }],
  };
  const esito = valutaRequisitoLingua(
    meta,
    profilo([{ lingua: "Inglese", livello: "C1", certificata: false }])
  );
  assert.equal(esito.esito, ESITI_LINGUA.NON_SODDISFATTO);
  assert.equal(esito.punteggio, 25);
  assert.match(esito.motivi.join(" "), /non certificata/);
});

// Regressione trovata da Claude in revisione, dopo la deroga di prodotto.
// Il vocabolario dei selettori di livello è per forza incompleto: "master" è
// riconosciuto, lo spagnolo "corsi di grado" no. Senza guardia, la foglia del
// triennale (che quindi risulta valida per tutti) soddisfa un magistrale a cui
// il master chiede di più: è il fallimento di Groningen da una porta laterale.
// Caso reale: sap-comm-madrid-5.
test("V0 — la foglia che dichiara il livello governa la sua lingua", () => {
  const meta = {
    requisitoLingua: [
      { lingua: "Spagnolo", livello: "B2", condizione: "per corsi di grado della Facultad" },
      { lingua: "Spagnolo", livello: "B2/C1", condizione: "per corsi di master della Facultad" },
    ],
  };
  // Il magistrale NON può soddisfare il requisito scritto per il ciclo triennale:
  // per il master il livello è ambiguo, quindi l'esito resta sconosciuto (🟡).
  const magistrale = valutaRequisitoLingua(meta, profilo([certificata("Spagnolo", "B2")], "LM"));
  assert.equal(magistrale.esito, ESITI_LINGUA.SCONOSCIUTO);
  assert.notEqual(
    presentaCompatibilita(magistrale, { livello: 30, posti: 20, livelloTesto: "magistrale" }).icona,
    "✅"
  );
  // Il triennale invece è governato dalla foglia senza livello dichiarato.
  const triennale = valutaRequisitoLingua(meta, profilo([certificata("Spagnolo", "B2")], "L"));
  assert.notEqual(triennale.esito, ESITI_LINGUA.SCONOSCIUTO);
});

// Smaltimento del debito `rootPresunta` (2026-07-28). La specifica prevede un
// solo caso che meriti il nome di ANY: quando la fonte dichiara davvero che una
// qualunque delle lingue basta. Molte condizioni lo scrivono in chiaro, e
// riconoscerle è ciò che fa scendere il debito — che è un criterio di uscita.
test("V0 — l'alternativa dichiarata nella condizione è ANY accertato, non presunto", () => {
  const dichiarata = {
    requisitoLingua: [
      { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
      { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
    ],
  };
  const nodo = requisitiLinguaNormalizzati(dichiarata);
  assert.ok(!nodo.rootPresunta, "la fonte dichiara l'alternativa: non è presunta");
  // Di conseguenza può raggiungere il verde, che a una rootPresunta è vietato.
  const esito = valutaRequisitoLingua(dichiarata, profilo([certificata("Inglese", "B2")]));
  assert.equal(esito.esito, ESITI_LINGUA.SODDISFATTO);
  assert.equal(
    presentaCompatibilita(esito, { livello: 30, posti: 20, livelloTesto: "triennale" }).icona,
    "✅"
  );
});

test("V0 — due lingue senza alternativa dichiarata restano rootPresunta e non verdi", () => {
  const presunta = {
    requisitoLingua: [
      { lingua: "Greco", livello: "B2", condizione: "raccomandato" },
      { lingua: "Inglese", livello: "B2", condizione: "requisito generale" },
    ],
  };
  const nodo = requisitiLinguaNormalizzati(presunta);
  assert.equal(nodo.rootPresunta, "ANY");
  const esito = valutaRequisitoLingua(presunta, profilo([certificata("Inglese", "B2")]));
  assert.notEqual(
    presentaCompatibilita(esito, { livello: 30, posti: 20, livelloTesto: "triennale" }).icona,
    "✅"
  );
});

test("V0 — «per studiare in X» dipende dai corsi quanto «per corsi in X»", () => {
  const meta = {
    requisitoLingua: [
      { lingua: "Sloveno", livello: "B2", condizione: "per studiare in sloveno" },
      { lingua: "Inglese", livello: "B2", condizione: "per studiare in inglese" },
    ],
  };
  const nodo = requisitiLinguaNormalizzati(meta);
  assert.ok(!nodo.rootPresunta, "la condizione discrimina: non è una radice presunta");
  assert.ok(
    foglieRequisitoLingua(nodo).every(f => f.condizionatoCorsi),
    "entrambe le foglie dipendono dalla lingua di studio scelta"
  );
});
