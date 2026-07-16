// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA DELL'INFORMAZIONE - Dip. Ingegneria dell'informazione, elettronica e TLC (DIET)
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=IIIS).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 26 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-diet-split",
    universita: "UNIVERSITY OF SPLIT",
    citta: "Split",
    paese: "Croazia",
    codiceErasmus: "HR SPLIT01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "MARTA CAVAGNARO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato necessario (certificazione ufficiale o attestato dell'universita di provenienza); la Faculty of Economics puo avere requisiti aggiuntivi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (sem. invernale/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (sem. estivo)", periodo: "entro 15 ottobre" },
        { cosa: "Application (sem. invernale/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Application (sem. estivo)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.unist.hr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68295."
  },
  {
    id: "sap-diet-lille",
    universita: "Institut Mines-Télécom Nord Europe  - IMT LILLE DOUAI",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE91",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://imt-lille-douai.fr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68248."
  },
  {
    id: "sap-diet-lille-2",
    universita: "Institut Mines-Télécom Nord Europe  - IMT LILLE DOUAI",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE91",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://imt-lille-douai.fr/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68247."
  },
  {
    id: "sap-diet-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68407."
  },
  {
    id: "sap-diet-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68408."
  },
  {
    id: "sap-diet-marseil-3",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per i corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per i corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 1 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "https://www.univ-amu.fr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68411."
  },
  {
    id: "sap-diet-paris",
    universita: "UNIVERSITE PARIS 13 - PARIS NORD",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS013",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "STEFANIA COLONNESE",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello B1 richiesto (B2 fortemente raccomandato)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno e anno intero)", periodo: "entro il 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro il 31 ottobre" }
      ],
    linkSito: "https://www.univ-spn.fr/",
    linkCatalogo: "https://odf.univ-spn.fr/",

    notaDisponibilita: "Alcuni corsi di Master 1 e Master 2 potrebbero non essere aperti agli studenti di scambio.",

    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68263."
  },
  {
    id: "sap-diet-paris-2",
    universita: "SORBONNE UNIVERSITE[FORMER UNIVERSITÉ PIERRE ET MARIE CURIE PARIS VI, F PARIS006 & UNIVERSITÉ DE PARIS-SORBONNE PARIS IV, F PARIS004]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "PAOLO BURGHIGNOLI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per i corsi della Facolta di Lettere; C1 raccomandato per Storia dell'arte" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre" }
      ],
    linkSito: "http://sciences.sorbonne-universite.fr/fr/international/vos_contacts.html",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68269."
  },
  {
    id: "sap-diet-braunsc",
    universita: "TECHNISCHE UNIVERSITÄT CAROLO-WILHELMINA ZU BRAUNSCHWEIG",
    citta: "Braunsc",
    paese: "Germania",
    codiceErasmus: "D  BRAUNSC01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo raccomandato per seguire con profitto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.tu-braunschweig.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68145."
  },
  {
    id: "sap-diet-hannove",
    universita: "GOTTFRIED WILHELM LEIBNIZ UNIVERSITAET HANNOVER",
    citta: "Hannove",
    paese: "Germania",
    codiceErasmus: "D  HANNOVE01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.uni-hannover.de",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA68155."
  },
  {
    id: "sap-diet-landshu",
    universita: "HOCHSCHULE LANDSHUT - HOCHSCHULE FÜR ANGEWANDTE WISSENSCHAFTEN",
    citta: "Landshu",
    paese: "Germania",
    codiceErasmus: "D  LANDSHU01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.haw-landshut.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68161."
  },
  {
    id: "sap-diet-athine",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" },
        { lingua: "Inglese", livello: "B2", condizione: "requisito minimo in greco o inglese definito negli accordi bilaterali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile-15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "15 settembre-15 novembre 2026" }
      ],
    linkSito: "http://www.uoa.gr/socrates-erasmus",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68414."
  },
  {
    id: "sap-diet-pireas",
    universita: "PANEPISTIMIO PIREOS (EX A.V.S.P.)",
    citta: "Pireas",
    paese: "Grecia",
    codiceErasmus: "G  PIREAS01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "LUCA DE NARDIS",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.unipi.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68293."
  },
  {
    id: "sap-diet-czestoc",
    universita: "POLITECHNIKA CZESTOCHOWSKA",
    citta: "Czestoc",
    paese: "Polonia",
    codiceErasmus: "PL CZESTOC01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Christian Napoli",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "almeno B1+" },
        { lingua: "Polacco", livello: "B1", condizione: "almeno B1+" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.pcz.pl/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA71656."
  },
  {
    id: "sap-diet-lisboa",
    universita: "Lusofona University",
    citta: "Lisboa",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA52",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0611", nome: "Computer use" }],
    coordinatoreCf: "Danilo Comminiello",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato richiesto per la candidatura" },
        { lingua: "Portoghese", livello: "B1", condizione: "certificato accettato prima della mobilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "http://www.ulusofona.pt",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71679."
  },
  {
    id: "sap-diet-santiag",
    universita: "UNIVERSIDAD DE SANTIAGO DE COMPOSTELA",
    citta: "Santiag",
    paese: "Spagna",
    codiceErasmus: "E  SANTIAG01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "MARCO BALSI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "certificato di spagnolo obbligatorio per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.usc.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68213. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-diet-barcelo",
    universita: "UNIVERSIDAD AUTONOMA DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO02",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "LUCA DE NARDIS",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese/Spagnolo/Catalano", livello: "B2", condizione: "richiesto dalla Faculty of Economics and Business nella lingua di insegnamento dei corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "15 febbraio - 1 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Application (2 semestre)", periodo: "15 settembre - 15 novembre" }
      ],
    linkSito: "http://www.uab.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68174. || Lingua: la Faculty of Economics and Business UAB richiede CEFR B2 nella lingua di insegnamento dei corsi scelti (inglese, spagnolo o catalano); nessun certificato richiesto per lingue in cui non si scelgono corsi. [Fonti: factsheet UAB 2026/27; UAB Faculty of Economics and Business] || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-diet-laspal",
    universita: "UNIVERSIDAD DE LAS PALMAS DE GRAN CANARIA",
    citta: "Las-pal",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ALESSANDRO TRIFILETTI",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "richiesto solo per il Degree in Spanish Philology" },
        { lingua: "Spagnolo", livello: "B2", condizione: "richiesto per il corso 44006 Standard Spanish: Techniques of Expression and Comprehension" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 24 febbraio al 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 2 ottobre al 10 novembre 2026" },
        { cosa: "Application/documenti (autunno/anno)", periodo: "entro 31 luglio" },
        { cosa: "Application/documenti (primavera)", periodo: "entro 30 gennaio" }
      ],
    linkSito: "http://www.ulpgc.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68189. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-diet-granada",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANDREA BAIOCCHI",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.ugr.es/",
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68185. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-diet-granada-2",
    universita: "UNIVERSIDAD DE GRANADA",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "ANDREA BAIOCCHI",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 30 aprile" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 31 ottobre" }
      ],
    linkSito: "https://www.ugr.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68186. || Scadenze: UGR Faculty of Economics and Business fact sheet 2026/27, nomination 1/4-30/4 e 1/10-31/10, application 1/4-15/5 e 1/10-31/10 || Lingua: spagnolo B1 per corsi in spagnolo; inglese B1 per corsi in inglese || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-diet-avila",
    universita: "UNIVERSIDAD CATOLICA DE AVILA \"SANTA TERESA DE JESUS\"",
    citta: "Avila",
    paese: "Spagna",
    codiceErasmus: "E  AVILA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Fabrizio Frezza",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "certificato richiesto per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Documentazione (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Documentazione (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.ucavila.es/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68170."
  },
  {
    id: "sap-diet-madrid",
    universita: "UNIVERSIDAD REY JUAN CARLOS",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID26",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "PAOLO BURGHIGNOLI",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per i bachelor in inglese (certificato richiesto)" },
        { lingua: "Spagnolo", livello: "B1", condizione: "per gli altri bachelor (B2 fortemente raccomandato, certificato richiesto)" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 semestre)", periodo: "22 aprile - 22 maggio" },
        { cosa: "Nomination (2 semestre)", periodo: "23 settembre - 23 ottobre" },
        { cosa: "Application (1 semestre)", periodo: "entro 16 giugno" },
        { cosa: "Application (2 semestre)", periodo: "entro 16 dicembre" }
      ],
    linkSito: "http://www.urjc.es",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68201."
  },
  {
    id: "sap-diet-mataro",
    universita: "FUNDACIO´ PUBLICA TECNOCAMPUS MATARO´-MARESME",
    citta: "Mataro",
    paese: "Spagna",
    codiceErasmus: "E  MATARO01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "Danilo Comminiello",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "fortemente raccomandato per i corsi in inglese; certificato del livello da allegare all'application" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (term autunnale)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (term primaverile/estivo)", periodo: "entro 15 ottobre" },
        { cosa: "Application (term autunnale)", periodo: "entro 30 giugno" },
        { cosa: "Application (term primaverile/estivo)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "https://www.tecnocampus.cat/",
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68206."
  },
  {
    id: "sap-diet-lugano",
    universita: "SCUOLA UNIVERSITARIA PROFESSIONALE DELLA SVIZZERA ITALIANA",
    citta: "Lugano",
    paese: "Svizzera",
    codiceErasmus: "CH LUGANO02",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (semestre autunnale)", periodo: "entro il 30 aprile" },
        { cosa: "Application (semestre autunnale)", periodo: "entro il 15 maggio" },
        { cosa: "Nomination (semestre primaverile)", periodo: "entro il 31 ottobre" },
        { cosa: "Application (semestre primaverile)", periodo: "entro il 15 novembre" }
      ],
    linkSito: "http://www.supsi.ch/international/",
    linkCatalogo: "https://exchange.supsi.ch/en/incoming-students",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68131."
  },
  {
    id: "sap-diet-ankara",
    universita: "ANKARA UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA01",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "PIERFRANCESCO LOMBARDO",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Turco", livello: "B2", condizione: "certificato di competenza in turco" },
        { lingua: "Inglese", livello: "B2", condizione: "certificato di competenza in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 18 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2025" }
      ],
    linkSito: "http://en.ankara.edu.tr/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68358."
  },
  {
    id: "sap-diet-istanbu",
    universita: "MILLI SAVUNMA UNIVERSITESI",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU63",
    dipartimentoCf: "Ingegneria elettronica e delle comunicazioni (DIET)",
    areeDisciplinari: [{ codice: "0710", nome: "Engineering and engineering trades, not further defined" }],
    coordinatoreCf: "Fabrizio Frezza",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://msu.edu.tr/eng/default",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68366."
  }
];
