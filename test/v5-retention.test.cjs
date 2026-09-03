const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const puro = require("../js/puro.js");

const RADICE = path.resolve(__dirname, "..");
const ATENEI = ["cafoscari", "sapienza"];

function eseguiFile(percorso) {
  const contesto = {};
  vm.runInNewContext(fs.readFileSync(percorso, "utf8"), contesto, {
    filename: percorso,
  });
  return contesto;
}

function datiBando(ateneo) {
  return eseguiFile(
    path.join(RADICE, "js", "atenei", ateneo, "dati-bando.js")
  ).BANDO_INFO;
}

function datiScadenze(ateneo) {
  return eseguiFile(
    path.join(RADICE, "js", "atenei", ateneo, "dati-scadenze.js")
  ).SCADENZE_CAFOSCARI;
}

function registroAtenei() {
  return eseguiFile(
    path.join(RADICE, "js", "atenei", "registro.js")
  ).ATENEI_REGISTRO;
}

function meteAteneo(ateneo) {
  const voce = registroAtenei()[ateneo];
  return voce.mete.flatMap((file) => {
    const contesto = eseguiFile(path.join(RADICE, voce.cartella, file));
    return Array.from(contesto.METE || []);
  });
}

function compatibilitaPresentata(meta, profilo) {
  const posti = (meta.posti || []).filter((p) => p.livello === profilo.livello);
  const numero = posti.reduce((somma, posto) => somma + (posto.numero || 0), 0);
  return puro.presentaCompatibilita(
    puro.valutaRequisitoLingua(meta, profilo),
    {
      livello: posti.length ? 30 : 0,
      posti: numero <= 0 ? 0 : Math.min(20, 5 + (numero - 1) * 3),
      livelloTesto: "triennale",
    }
  );
}

ATENEI.forEach((ateneo) => {
  test(`V5.1 ${ateneo}: la finestra attesa è futura, documentata e vicina all'anniversario`, () => {
    const info = datiBando(ateneo);
    const finestra = puro.finestraAttesaValida(info);
    assert.ok(finestra, `${ateneo}: finestraAttesa assente o incompleta`);
    assert.ok(finestra.precedente.fonte.trim(), `${ateneo}: fonte vuota`);

    const inizio = new Date(`${finestra.inizio}T00:00:00Z`);
    const precedente = new Date(`${finestra.precedente.data}T00:00:00Z`);
    const anniversario = new Date(precedente);
    anniversario.setUTCFullYear(inizio.getUTCFullYear());
    const distanza = Math.abs(inizio - anniversario) / 86400000;

    assert.ok(inizio > new Date(), `${ateneo}: la sveglia non è più futura`);
    assert.ok(
      distanza <= 45,
      `${ateneo}: la sveglia dista ${distanza} giorni dall'anniversario`
    );
  });
});

test("V5.1 assenza = silenzio: niente mesi nella frase e nessun evento", () => {
  const senzaFinestra = {
    titolo: "Bando di prova",
    linkUfficiale: "https://example.test/bando",
    dataVerificaDati: "2026-07-29",
  };
  const frase = puro.fraseFinestraAttesaBando(senzaFinestra);
  assert.equal(frase, "Il bando non è ancora uscito.");
  assert.doesNotMatch(
    frase,
    /gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre/i
  );
  assert.equal(
    puro.creaCalendarioICS({
      ateneo: "prova",
      bandoInfo: senzaFinestra,
      scadenze: [{
        id: "passata",
        cosa: "Data passata",
        data: "2026-01-01T09:00",
      }],
      ora: "2026-07-29T12:00:00Z",
    }),
    ""
  );
});

// RFC 5545 §3.1: le righe lunghe si spezzano a 75 ottetti e la continuazione
// comincia con uno spazio. Srotolare è l'operazione inversa, ed è quella che
// ogni calendario fa in lettura: se il testo torna intero, la piegatura è
// corretta.
function srotola(ics) {
  return ics.replace(/\r\n /g, "").replace(/\r\n/g, "\n");
}

function ottetti(riga) {
  return Buffer.byteLength(riga, "utf8");
}

test("V5.3: il calendario usa UID stabili, SEQUENCE, due sveglie e CRLF", () => {
  const info = {
    titolo: "Bando 2026/2027 di prova",
    linkUfficiale: "https://example.test/bando",
    dataVerificaDati: "2026-07-28",
    finestraAttesa: {
      inizio: "2027-01-14",
      precedente: {
        ciclo: "2026/2027",
        data: "2026-01-14",
        fonte: "DR 13/2026 del 14/01/2026",
      },
      stato: "atteso",
    },
  };
  const ics = puro.creaCalendarioICS({
    ateneo: "cafoscari",
    etichettaAteneo: "Ca' Foscari Venezia",
    bandoInfo: info,
    scadenze: [
      {
        id: "futura",
        cosa: "Chiusura candidature",
        data: "2027-02-25T12:00",
        descrizione: "Completa la domanda.",
      },
      {
        id: "passata",
        cosa: "Vecchia data",
        data: "2026-02-25T12:00",
        descrizione: "Non deve entrare.",
      },
    ],
    ora: "2026-07-29T12:00:00Z",
  });

  assert.match(ics, /UID:bando-atteso-cafoscari@erasmuswiz\r\n/);
  assert.match(ics, /UID:futura@erasmuswiz\r\n/);
  assert.doesNotMatch(ics, /UID:[^\r\n]*20270114/);
  assert.doesNotMatch(ics, /UID:passata|SUMMARY:Vecchia data/);
  assert.match(
    ics,
    /SUMMARY:Controlla se è uscito il bando Erasmus Ca' Foscari Venezia/
  );
  assert.doesNotMatch(ics, /SUMMARY:Esce il bando/i);

  const eventi = ics.match(/BEGIN:VEVENT\r\n[\s\S]*?END:VEVENT\r\n/g) || [];
  assert.equal(eventi.length, 2);
  eventi.forEach((evento) => {
    assert.match(evento, /\r\nSEQUENCE:\d+\r\n/);
    assert.equal((evento.match(/BEGIN:VALARM/g) || []).length, 2);
    assert.equal((evento.match(/TRIGGER:-P7D/g) || []).length, 1);
    assert.equal((evento.match(/TRIGGER:-P1D/g) || []).length, 1);
    const allarmi = evento.match(/BEGIN:VALARM\r\n[\s\S]*?END:VALARM/g) || [];
    assert.equal(allarmi.length, 2);
    allarmi.forEach((allarme) => {
      assert.match(allarme, /ACTION:DISPLAY/);
      assert.match(allarme, /DESCRIPTION:.+/);
    });
    const descrizione = srotola(evento).match(/\nDESCRIPTION:([^\n]+)/)?.[1] || "";
    assert.match(descrizione, /Fonte:/);
    assert.match(descrizione, /Dati verificati il 2026-07-28/);
    assert.match(descrizione, /https:\/\/example\.test\/bando/);
    assert.match(descrizione, /non si aggiorna da solo/);
  });

  assert.ok(ics.endsWith("\r\n"));
  assert.equal(ics.replace(/\r\n/g, "").includes("\n"), false);
  assert.equal(ics.replace(/\r\n/g, "").includes("\r"), false);

  const singolo = puro.creaCalendarioICS({
    ateneo: "cafoscari",
    bandoInfo: info,
    scadenze: [{
      id: "futura",
      cosa: "Chiusura candidature",
      data: "2027-02-25T12:00",
    }],
    includiFinestra: false,
    ora: "2026-07-29T12:00:00Z",
  });
  assert.match(singolo, /UID:futura@erasmuswiz\r\n/);
});

ATENEI.forEach((ateneo) => {
  test(`V5.3 ${ateneo}: con i dati reali oggi il file unico ha un solo evento`, () => {
    const ics = puro.creaCalendarioICS({
      ateneo,
      etichettaAteneo: ateneo,
      bandoInfo: datiBando(ateneo),
      scadenze: datiScadenze(ateneo),
      ora: "2026-07-29T12:00:00Z",
    });
    assert.equal((ics.match(/BEGIN:VEVENT/g) || []).length, 1);
  });
});

[
  {
    nome: "già installata",
    ambiente: { standalone: true, promptDisponibile: true },
    tipo: "niente",
  },
  {
    nome: "rifiutata e rinviata",
    ambiente: { rinviatoFino: "2026-08-28", promptDisponibile: true },
    tipo: "niente",
  },
  {
    nome: "Android con prompt disponibile",
    ambiente: { promptDisponibile: true },
    tipo: "prompt",
  },
  {
    nome: "iPhone Safari senza prompt nativo",
    ambiente: { iOS: true, safari: true },
    tipo: "istruzioni-ios",
  },
  {
    nome: "iPhone con browser non Safari",
    ambiente: { iOS: true, safari: false },
    tipo: "niente",
  },
  {
    nome: "desktop",
    ambiente: { desktop: true, promptDisponibile: true },
    tipo: "niente",
  },
].forEach(({ nome, ambiente, tipo }) => {
  test(`V5.4 matrice installazione: ${nome} → ${tipo}`, () => {
    const esito = puro.invitoInstallazione(ambiente);
    assert.equal(esito.tipo, tipo);
    if (tipo === "niente") assert.equal(esito.testo, "");
    else assert.match(esito.testo, /Niente iscrizione.*dati restano su questo telefono/i);
  });
});

test("V5.5: inglese B2 dichiarato e non certificato produce i verdi misurati sui dati presenti", () => {
  const profilo = {
    livello: "L",
    lingue: [{ lingua: "Inglese", livello: "B2", certificata: false }],
  };
  // La spec congelata misura 184/643 sul dataset del 29 luglio. I file mete
  // presenti ora (riscritti dall'automazione e vietati a V5) producono
  // 183/608: il report dichiara lo scostamento invece di falsare la prova.
  // 03/09, in due passi, ed e' tutto l'arbitrato dei venti.
  //  - sapienza 600 -> 605: quattro partner (G IOANNIN01, IRL SETU01,
  //    PL OPOLE02, RO TIMISOA07) hanno ricevuto un requisitoLingua approvato a
  //    mano, cinque mete, tutti inglese B2 e quindi verdi per questo profilo.
  //    Ca' Foscari non si muove, ed e' la conferma che l'aumento e' quello.
  //  - poi +3 sapienza e +1 cafoscari: PL KATOWIC01 e RO TIMISOA01, che erano
  //    rimasti fuori perche' la guardia del confronto chiedeva stato `vuoto`
  //    mentre quelle mete erano `daRiconfermare`. Quattro campi, quattro verdi.
  // Questa soglia va rialzata solo quando si sa DA COSA: un numero che cresce da
  // solo e' una prova che ha smesso di guardare.
  const attesi = { cafoscari: 183, sapienza: 608 };
  ATENEI.forEach((ateneo) => {
    const verdi = meteAteneo(ateneo)
      .filter((meta) => compatibilitaPresentata(meta, profilo).icona === "✅")
      .length;
    assert.equal(verdi, attesi[ateneo], `${ateneo}: conteggio verde inatteso`);
  });
});

test("V5.5: rootPresunta resta non verde, un livello sotto resta a 12 e le soglie sono 80/40", () => {
  const rootPresunta = {
    posti: [{ livello: "L", numero: 8 }],
    requisitoLingua: [
      { lingua: "Inglese", livello: "B2", condizione: "requisito generale" },
      { lingua: "Francese", livello: "B2", condizione: "raccomandato" },
    ],
  };
  const profiloAlto = {
    livello: "L",
    lingue: [
      { lingua: "Inglese", livello: "C2", certificata: false },
      { lingua: "Francese", livello: "C2", certificata: false },
    ],
  };
  const presentata = compatibilitaPresentata(rootPresunta, profiloAlto);
  assert.equal(presentata.totale, 100);
  assert.notEqual(presentata.icona, "✅");

  const sotto = puro.valutaRequisitoLingua(
    { requisitoLingua: [{ lingua: "Inglese", livello: "C1" }] },
    {
      livello: "L",
      lingue: [{ lingua: "Inglese", livello: "B2", certificata: false }],
    }
  );
  assert.equal(sotto.punteggio, 12);

  const sorgente = fs.readFileSync(path.join(RADICE, "js", "puro.js"), "utf8");
  const inizio = sorgente.indexOf("function presentaCompatibilita");
  const fine = sorgente.indexOf("\n  return Object.freeze({", inizio);
  const funzione = sorgente.slice(inizio, fine);
  assert.match(funzione, /totale >= 80/);
  assert.match(funzione, /totale >= 40/);
});

test("V5.5: il verde spiega la dichiarazione e l'eventuale prova successiva", () => {
  const valutazione = {
    esito: puro.ESITI_LINGUA.SODDISFATTO,
    punteggio: 50,
  };
  const esito = puro.presentaCompatibilita(valutazione, {
    livello: 30,
    posti: 20,
    livelloTesto: "triennale",
  });
  assert.equal(esito.icona, "✅");
  assert.equal(
    esito.dettaglio,
    "Hai i requisiti principali. Il livello lo dichiari tu: la prova, se richiesta, si presenta dopo la selezione."
  );
});

test("V5.5 citaCertificato rileva la citazione senza giudicarla", () => {
  assert.equal(puro.citaCertificato({
    requisitoLingua: [{ condizione: "Serve un certificato B2" }],
  }), true);
  assert.equal(puro.citaCertificato({
    requisitoLingua: [{ condizione: "Certificato non richiesto" }],
  }), true);
  assert.equal(puro.citaCertificato({
    requisitoLingua: [{ condizione: "Livello B2 dichiarato" }],
  }), false);
});

test("V5.5 citaCertificato copre i documenti nominati nei due cataloghi", () => {
  const attesi = { cafoscari: 43, sapienza: 135 };
  ATENEI.forEach((ateneo) => {
    const citazioni = meteAteneo(ateneo)
      .filter((meta) => puro.citaCertificato(meta))
      .length;
    assert.equal(
      citazioni,
      attesi[ateneo],
      `${ateneo}: il conteggio dei documenti di prova è cambiato`
    );
  });
});

test("V5.5: l'avviso certificato si spegne quando la lingua soddisfacente è certificata", () => {
  const meta = {
    requisitoLingua: [{
      lingua: "Inglese",
      livello: "B2",
      condizione: "certificato non richiesto",
    }],
  };
  assert.equal(puro.certificatoDaRicordare(meta, {
    livello: "L",
    lingue: [{ lingua: "Inglese", livello: "B2", certificata: false }],
  }), true);
  assert.equal(puro.certificatoDaRicordare(meta, {
    livello: "L",
    lingue: [{ lingua: "Inglese", livello: "B2", certificata: true }],
  }), false);

  const app = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");
  assert.match(app, /classe: "banner-stato stato-riserve"/);
  assert.match(app, /Questa destinazione parla di un certificato: leggi la condizione qui sopra/);
});

test("V5.6: entrambi i conteggi dell'entrata usano il dipartimento", () => {
  const app = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");
  const conteggioPasso4 =
    "const mete = (METE || []).filter(m => m.dipartimentoCf === dip);";
  const conteggioEsito =
    "const nMete = (METE || []).filter(m => m.dipartimentoCf === dip).length;";
  assert.ok(app.includes(conteggioPasso4), "il conteggio prima dell'esito non usa il dipartimento");
  assert.ok(app.includes(conteggioEsito), "il conteggio dell'esito non usa il dipartimento");
});

test("V5 review: la coda conserva lo smistamento V3 verso le Mete", () => {
  const app = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");
  const inizio = app.indexOf("function terminaCodaEntrata()");
  const fine = app.indexOf("\nfunction benvMostraOffertaSveglia()", inizio);
  const funzione = app.slice(inizio, fine);
  assert.match(
    funzione,
    /if \(_esitoMetePendente && _esitoMetePendente !== "salta"\) \{\s+vaiA\("mete"\);/
  );
});

test("V5 review: l'installazione resta in pagina e non usa dialoghi nativi", () => {
  const app = fs.readFileSync(path.join(RADICE, "js", "app.js"), "utf8");
  const inizio = app.indexOf("function offriInstallazione(");
  const fine = app.indexOf("\nfunction testoCalendario(", inizio);
  const funzione = app.slice(inizio, fine);
  assert.doesNotMatch(funzione, /window\.(?:confirm|alert|prompt)\s*\(/);
  assert.match(funzione, /data-invito-installazione/);
  assert.match(funzione, /Aggiungi alla schermata Home/);
  assert.match(funzione, /Non ora/);
  assert.match(funzione, /Ho capito/);
});

// Trovata dal revisore guardando il file vero prodotto dal sito: la
// DESCRIPTION dell'evento del bando arriva a ~340 caratteri, e una riga
// così lunga è fuori standard. Google la accetta, altri client no — e il
// criterio di uscita di V5 chiede che il file si apra ANCHE su Apple.
test("V5.3: nessuna riga supera i 75 ottetti e il testo si ricompone srotolando", () => {
  const info = {
    titolo: "Bando 2026/2027 di prova",
    linkUfficiale: "https://example.test/bando",
    dataVerificaDati: "2026-07-28",
    finestraAttesa: {
      inizio: "2027-01-14",
      precedente: {
        ciclo: "2026/2027",
        data: "2026-01-14",
        fonte: "DR 13/2026 del 14/01/2026 — Bando Erasmus+ studio (Europa) 2026/2027",
      },
      stato: "atteso",
    },
  };
  const ics = puro.creaCalendarioICS({
    ateneo: "cafoscari",
    etichettaAteneo: "Ca' Foscari Venezia",
    bandoInfo: info,
    scadenze: [],
    ora: "2026-07-29T12:00:00Z",
  });

  const righe = ics.split("\r\n").filter((r) => r !== "");
  righe.forEach((riga) => {
    assert.ok(
      ottetti(riga) <= 75,
      `riga di ${ottetti(riga)} ottetti: ${riga.slice(0, 40)}…`
    );
  });

  // La piegatura è avvenuta davvero (se no la prova sopra passerebbe per caso
  // su un file di righe corte) e non ha perso né spezzato niente.
  assert.ok(righe.some((r) => r.startsWith(" ")), "nessuna riga piegata");
  const srotolato = srotola(ics);
  const attesa =
    "DESCRIPTION:Data attesa\\, non confermata\\, ricavata dal periodo del " +
    "bando precedente. Fonte: DR 13/2026 del 14/01/2026 — Bando Erasmus+ " +
    "studio (Europa) 2026/2027. Dati verificati il 2026-07-28. " +
    "https://example.test/bando. Questo promemoria non si aggiorna da solo: " +
    "se la data cambia\\, riscaricalo dal sito.";
  assert.ok(
    srotolato.includes("\n" + attesa + "\n"),
    "la DESCRIPTION non si ricompone intatta srotolando"
  );

  // Un carattere multibyte non deve mai finire spezzato a metà fra due righe.
  assert.equal(srotolato.includes("�"), false);
  assert.ok(srotolato.includes("è uscito il bando"));
});
