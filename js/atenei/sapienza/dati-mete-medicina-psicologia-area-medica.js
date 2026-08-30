// ============================================================
// METE ERASMUS — SAPIENZA · Medicina e Psicologia
//   Area medica e professioni sanitarie
// ------------------------------------------------------------
// Fonte: database ufficiale "Go Erasmus+" Sapienza, filtro Facoltà =
//   Medicina e Psicologia - Area medica e professioni sanitarie (ambito=MEDIC2).
//   Bando Erasmus+ 2026/27.
//   https://accordi-didattica.web.uniroma1.it/goerasmus?ambito=MEDIC2
//
// 2026-07-01: seed iniziale, 15 destinazioni (tutte quelle disponibili, 2
// pagine del DB). A differenza di Giurisprudenza, qui il promotore/coordinatore
// NON è unico per tutta la Facoltà: ogni accordo ha il suo docente promotore
// (riportato in coordinatoreCf).
//
// NOTA duplicati: alcuni atenei partner compaiono due volte come accordi
// SEPARATI (stesso ateneo, promotore diverso): Universidad San Pablo-CEU
// (Daniele De Nuzzo / Maria Chiara Vulpiani) e Universidad Pontificia Comillas
// (Maria Chiara Vulpiani / Flavia Pantaleo). Modellati come mete distinte con
// suffisso -A/-B su id e codiceErasmus.
//
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (tutti vuoti).
//
// ⚠️ codiceErasmus: chiave-join PROVVISORIA e sintetica (prefisso
//   "SAP-MEDIC2-"). Il DB lista non espone il codice Erasmus ufficiale.
// ============================================================

var METE = [
  {
    id: "sap-medic2-innsbruck",
    universita: "Medizinische Universität Innsbruck",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU21",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Giovanni Battista Orsi",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 29 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 27 novembre 2026" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 3. Solo livello Magistrale. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-medic2-luebeck",
    universita: "Universität zu Lübeck",
    citta: "Lubecca",
    paese: "Germania",
    codiceErasmus: "D  LUBECK01",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Giovanni Battista Orsi",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi/corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.uni-luebeck.de/universitaet/universitaet.html",

    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-medic2-bochum",
    universita: "Ruhr-Universität Bochum",
    citta: "Bochum",
    paese: "Germania",
    codiceErasmus: "D  BOCHUM01",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Marco Salvetti",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1/B2", condizione: "per Medicina" },
        { lingua: "Tedesco", livello: "B2", condizione: "per clinical traineeship in Medicina" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application/pre-registration (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 dicembre" },
        { cosa: "Application/pre-registration (primavera)", periodo: "entro 1 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-medic2-malta",
    universita: "University of Malta",
    citta: "Msida",
    paese: "Malta",
    codiceErasmus: "MT MALTA01",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Mario Vetrano",
    posti: [
      { numero: 3, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "OLS per studenti Erasmus; C1 per corsi del Department of English" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale."
  },
  {
    id: "sap-medic2-lisboa",
    universita: "Universidade Nova de Lisboa",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA03",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Giovanni Battista Orsi",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "per Studies Mobility" },
        { lingua: "Portoghese", livello: "B2", condizione: "per Traineeship Mobility" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno e primavera)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno e primavera)", periodo: "entro 15 giugno" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello Magistrale."
  },
  {
    id: "sap-medic2-sanpabloceu-a",
    universita: "Universidad San Pablo-CEU",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID21",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniele De Nuzzo",
    posti: [
      { numero: 2, mesi: 3, livello: "L", note: "" },
      { numero: 2, mesi: 3, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Secondo accordo distinto con lo stesso ateneo (promotore Daniele De Nuzzo, vedi anche sap-medic2-sanpabloceu-b). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-medic2-alicante",
    universita: "Universidad de Alicante",
    citta: "Alicante",
    paese: "Spagna",
    codiceErasmus: "E  ALICANT01",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Daniele De Nuzzo",
    posti: [
      { numero: 2, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale."
  },
  {
    id: "sap-medic2-comillas-a",
    universita: "Universidad Pontificia Comillas",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID02",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Maria Chiara Vulpiani",
    posti: [
      { numero: 1, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno per studenti Erasmus" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre per studenti Erasmus" }
      ],
    linkSito: "https://www.comillas.edu/",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1. Solo livello triennale. Secondo accordo distinto con lo stesso ateneo (promotore Maria Chiara Vulpiani, vedi anche sap-medic2-comillas-b con promotore Flavia Pantaleo). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-medic2-salamanca",
    universita: "Universidad de Salamanca",
    citta: "Salamanca",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN02",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Maria Chiara Vulpiani",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application / registrazione Erasmus (autunno)", periodo: "dal 15 aprile al 1 luglio 2026" },
        { cosa: "Application / registrazione Erasmus (primavera)", periodo: "dal 15 aprile al 1 luglio 2026; non e' prevista una seconda scadenza" },
        { cosa: "Learning Agreement (autunno)", periodo: "entro 1 luglio 2026" },
        { cosa: "Learning Agreement (primavera)", periodo: "entro 1 luglio 2026; non e' prevista una seconda scadenza" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale."
  },
  {
    id: "sap-medic2-sanpabloceu-b",
    universita: "Universidad San Pablo-CEU",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID21",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Maria Chiara Vulpiani",
    posti: [
      { numero: 2, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Secondo accordo distinto con lo stesso ateneo (promotore Maria Chiara Vulpiani, vedi anche sap-medic2-sanpabloceu-a con promotore Daniele De Nuzzo). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-medic2-valencia",
    universita: "Universidad Católica de Valencia \"San Vicente Mártir\"",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI11",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Franco Giubilei",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per tirocini in Medicina, Infermieristica, Nutrizione, Fisioterapia e Podologia" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale."
  },
  {
    id: "sap-medic2-alfonsox",
    universita: "Universidad Alfonso X El Sabio",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID17",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Mario Vetrano",
    posti: [
      { numero: 4, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "lingua di insegnamento" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese, soggetti a disponibilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 marzo - 31 marzo" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "18 settembre - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4. Solo livello triennale. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-medic2-coruna",
    universita: "Universidad de La Coruña",
    citta: "La Coruña",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Mario Vetrano",
    posti: [
      { numero: 3, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato; non e richiesta certificazione" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" }
      ],
    linkSito: "http://www.udc.es",

    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-medic2-barcelona",
    universita: "Universidad de Barcelona",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Flavia Pantaleo",
    posti: [
      { numero: 4, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Catalano, Spagnolo o Inglese", livello: "B1", condizione: "in base alla lingua di insegnamento degli insegnamenti scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 6 marzo al 28 aprile 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 4. Solo livello triennale."
  },
  {
    id: "sap-medic2-comillas-b",
    universita: "Universidad Pontificia Comillas",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID02",
    dipartimentoCf: "Medicina e Psicologia - Area medica e professioni sanitarie",
    areeDisciplinari: [{ codice: "0912", nome: "Medicine" }],
    coordinatoreCf: "Flavia Pantaleo",
    posti: [
      { numero: 2, mesi: 3, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno 2026 per studenti Erasmus" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026 per studenti Erasmus" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026 per studenti Erasmus" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026 per studenti Erasmus" }
      ],
    linkSito: "https://www.comillas.edu/",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Secondo accordo distinto con lo stesso ateneo (promotore Flavia Pantaleo, vedi anche sap-medic2-comillas-a con promotore Maria Chiara Vulpiani). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  }
];
