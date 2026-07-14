// ==========================================================
// METE ERASMUS - SAPIENZA - INGEGNERIA DELL'INFORMAZIONE - Dip. di Informatica
// ----------------------------------------------------------
// Fonte: database ufficiale Go Erasmus+ Sapienza (ambito=IIIS2).
// Export ufficiale /goerasmus/export. Bando Erasmus+ 2026/27.
// Seed automatico (2026-07-04): 50 destinazioni con posti L/LM.
// Righe riservate SOLO a Phd/Specializzandi escluse (0).
// codiceErasmus = codice Erasmus UFFICIALE dall'export.
// citta = derivata dal token del codice Erasmus (da rifinire in futuro).
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (vuoti;
// il riuso in setup-dipartimento.mjs puo' pre-compilarli da altri dipartimenti).
// ==========================================================

var METE = [
  {
    id: "sap-inf-salzbur",
    universita: "PARIS LODRON UNIVERSITÄT SALZBURG",
    citta: "Salzbur",
    paese: "Austria",
    codiceErasmus: "A  SALZBUR01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.uni-salzburg.at",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68390."
  },
  {
    id: "sap-inf-wels",
    universita: "UPPER AUSTRIA UNIVERSITY OF APPLIED SCIENCES-FH OO STUDIENBETRIEBS, HAGENBERG CAMPUS",
    citta: "Wels",
    paese: "Austria",
    codiceErasmus: "A  WELS01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://fh-ooe.at/en/campus-hagenberg",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68112."
  },
  {
    id: "sap-inf-bruxel",
    universita: "UNIVERSITÉ LIBRE DE BRUXELLES",
    citta: "Bruxel",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 2 settimane dallo Starter Pack" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 2 settimane dallo Starter Pack" }
      ],
    linkSito: "https://www.ulb.be/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68395. || Scadenze: factsheet ULB Phisoc 2025/26 || Lingua: Phisoc richiede francese B1; nessun certificato richiesto"
  },
  {
    id: "sap-inf-veliko",
    universita: "VELIKOTURNOVSKI UNIVERSITET SV. SV. KIRIL I METODII",
    citta: "Veliko",
    paese: "Bulgaria",
    codiceErasmus: "BG VELIKO01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-vt.bg/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68127."
  },
  {
    id: "sap-inf-varna",
    universita: "University of Economics - Varna - IKONOMICHESKI UNIVERSITET - VARNA",
    citta: "Varna",
    paese: "Bulgaria",
    codiceErasmus: "BG VARNA04",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.ue-varna.bg/en/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68126."
  },
  {
    id: "sap-inf-split",
    universita: "UNIVERSITY OF SPLIT",
    citta: "Split",
    paese: "Croazia",
    codiceErasmus: "HR SPLIT01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68294."
  },
  {
    id: "sap-inf-tallinn",
    universita: "TALLINN UNIVERSITY",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN05",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.tlu.ee/en/university",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68231."
  },
  {
    id: "sap-inf-tallinn-2",
    universita: "TALLINNA TEHNIKAULIKOOL",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN04",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://taltech.ee/en/tallinn-university-of-technolog",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68230."
  },
  {
    id: "sap-inf-bicetre",
    universita: "ECOLE POUR L'INFORMATIQUE ET LES TECHNIQUES AVANCEES (EPITA)",
    citta: "Bicetre",
    paese: "Francia",
    codiceErasmus: "F  BICETRE02",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.epita.fr",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Accordo ERA68238."
  },
  {
    id: "sap-inf-marseil",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
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
    notePratiche: "Posti dell'accordo: 3. Accordo ERA68406."
  },
  {
    id: "sap-inf-marseil-2",
    universita: "AIX-MARSEILLE UNIVERSITY (AMU)",
    citta: "Marseil",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0613", nome: "Software and applications development and analysis" }],
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
    notePratiche: "Posti dell'accordo: 4. Accordo ERA68410."
  },
  {
    id: "sap-inf-paris",
    universita: "UNIVERSITÉ DE PARIS-SACLAY [former UNIVERSITÉ DE PARIS-SUD (PARIS XI), F  PARIS011]",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F  PARIS481",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.universite-paris-saclay.fr/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68270."
  },
  {
    id: "sap-inf-noisy",
    universita: "ESIEE PARIS [former ECOLE SUPERIEURE D'INGENIEURS EN ELECTROTECHNIQUE ET ELECTRONIQUE]",
    citta: "Noisy",
    paese: "Francia",
    codiceErasmus: "F  NOISY02",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.esiee.fr",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68257."
  },
  {
    id: "sap-inf-grenobl",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68245."
  },
  {
    id: "sap-inf-grenobl-2",
    universita: "INSTITUT NATIONAL POLYTECHNIQUE DE GRENOBLE",
    citta: "Grenobl",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL22",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.inpg.fr",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71484."
  },
  {
    id: "sap-inf-siegen",
    universita: "UNIVERSITAT-GESAMTHOCHSCHULE SIEGEN",
    citta: "Siegen",
    paese: "Germania",
    codiceErasmus: "D  SIEGEN01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.uni-siegen.de/start/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68166."
  },
  {
    id: "sap-inf-tubinge",
    universita: "EBERHARD-KARLS-UNIVERSITÄT TÜBINGEN",
    citta: "Tubinge",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 8, livello: "L", note: "" },
      { numero: 1, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "raccomandato nella lingua di insegnamento dei corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 15 novembre 2025" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre 2025" }
      ],
    linkSito: "https://uni-tuebingen.de/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68396."
  },
  {
    id: "sap-inf-freisin",
    universita: "HOCHSCHULE WEIHENSTEPHAN-TRIESDORF",
    citta: "Freisin",
    paese: "Germania",
    codiceErasmus: "D  FREISIN01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0613", nome: "Software and applications development and analysis" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.hswt.de/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA71677."
  },
  {
    id: "sap-inf-koln",
    universita: "FACHHOCHSCHULE KÖLN  UNIVERSITY OF APPLIED SCIENCES COLOGNE",
    citta: "Koln",
    paese: "Germania",
    codiceErasmus: "D  KOLN04",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0714", nome: "Electronics and automation" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.fh-koeln.de",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68160."
  },
  {
    id: "sap-inf-athine",
    universita: "OIKONOMIKO PANEPISTIMIO ATHINON /ATHENS UNIVERSITY OF ECONOMICS AND BUSINESS",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE04",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesta padronanza dell'inglese generale e accademico: IELTS 5.5-6.0 / TOEFL iBT 72-94 / TOEIC 785-940 / Cambridge 160-179, oppure certificato ufficiale dell'universita di provenienza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Documenti (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Documenti (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.aueb.gr/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68283."
  },
  {
    id: "sap-inf-patra",
    universita: "PANEPISTIMIO PATRON",
    citta: "Patra",
    paese: "Grecia",
    codiceErasmus: "G  PATRA01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 20 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 20 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "http://www.upatras.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68291. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-inf-athine-2",
    universita: "ETHNIKÒ KAI KAPODISTRIAKÒ PANEPISTIMIO ATHINÒN -National and Kapodistrian University of Athens -NKUA",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68415."
  },
  {
    id: "sap-inf-kritis",
    universita: "PANEPISTIMIO KRITIS",
    citta: "Kritis",
    paese: "Grecia",
    codiceErasmus: "G  KRITIS01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito standard UoC; lingua principale dei corsi: greco, alcuni corsi/valutazioni alternative in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (anno intero/sem. invernale)", periodo: "entro 15 giugno" },
        { cosa: "Application (sem. primaverile)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.uoc.gr/",
    notePratiche: "Posti dell'accordo: 2. L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68290."
  },
  {
    id: "sap-inf-athine-3",
    universita: "IONIO PANEPISTIMIO",
    citta: "Athine",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE42",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Greco", livello: "B1", condizione: "lingua principale di insegnamento ed esame, livello raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "seconda lingua, livello richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://ionio.gr/rc/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68286."
  },
  {
    id: "sap-inf-ioannin",
    universita: "PANEPISTIMIO IOANNINON",
    citta: "Ioannin",
    paese: "Grecia",
    codiceErasmus: "G  IOANNIN01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://uoi.gr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68289."
  },
  {
    id: "sap-inf-irlsetu",
    universita: "WATERFORD INSTITUTE OF TECHNOLOGY [former WATERFORD INSTITUTE OF TECHNOLOGY IRLWATERFO01]",
    citta: "Irlsetu",
    paese: "Irlanda",
    codiceErasmus: "IRLSETU01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.setu.ie/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68383."
  },
  {
    id: "sap-inf-riga",
    universita: "University of Latvia",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "LV RIGA01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.lu.lv/eng/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68297."
  },
  {
    id: "sap-inf-rzeszow",
    universita: "UNIWERSYTET RZESZOWSKI",
    citta: "Rzeszow",
    paese: "Polonia",
    codiceErasmus: "PL RZESZOW02",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.univ.rzeszow.pl",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68341."
  },
  {
    id: "sap-inf-lodz",
    universita: "POLITECHNIKA LODZKA",
    citta: "Lodz",
    paese: "Polonia",
    codiceErasmus: "PL LODZ02",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.p.lodz.pl",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68334."
  },
  {
    id: "sap-inf-krakow",
    universita: "UNIWERSYTET JAGIELLONSKI",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "PAOLA VELARDI",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale per studiare alla Jagiellonian University" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "1 maggio - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 30 novembre" }
      ],
    linkSito: "https://www.uj.edu.pl/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68331."
  },
  {
    id: "sap-inf-poznan",
    universita: "POLITECHNIKA POZNANSKA",
    citta: "Poznan",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN02",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "http://www.put.poznan.pl",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68340."
  },
  {
    id: "sap-inf-porto",
    universita: "UNIVERSIDADE DO PORTO",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0211", nome: "Audio-visual techniques and media production" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Portoghese", livello: "B2", condizione: "per corsi in portoghese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 marzo" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 agosto" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    linkSito: "http://www.up.pt",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68318. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-timisoa",
    universita: "UNIVERSITATEA TIBISCUS",
    citta: "Timisoa",
    paese: "Romania",
    codiceErasmus: "RO TIMISOA07",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "061", nome: "Information and Communication Technologies (ICTs)" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://tibiscus.ro/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68352."
  },
  {
    id: "sap-inf-clujnap",
    universita: "UNIVERSITATEA BABES-BOLYAI",
    citta: "Clujnap",
    paese: "Romania",
    codiceErasmus: "RO CLUJNAP01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1-B2", condizione: "per corsi in inglese o nella lingua di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.ubbcluj.ro/ro/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68348."
  },
  {
    id: "sap-inf-bucures",
    universita: "UNIVERSITATEA NATIONALA DE STIINTA  SI TEHNOLOGIE POLITEHNICA BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES43",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Francese", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Tedesco", livello: "B1", condizione: "per mobilita di studio" },
        { lingua: "Rumeno", livello: "B1", condizione: "per mobilita di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.upb.ro",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68347."
  },
  {
    id: "sap-inf-bucures-2",
    universita: "UNIVERSITATEA DIN BUCURESTI",
    citta: "Bucures",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi della Faculty of Journalism and Communication Science e della Faculty of Sociology and Social Work" },
        { lingua: "Francese", livello: "B2", condizione: "per il programma Medias, Developpement, Societe" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registration (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Application/registration (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "http://www.unibuc.ro",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68416. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-ljublja",
    universita: "UNIVERZA V LJUBLJANI - UNIVERSITY OF LJUBLJANA",
    citta: "Ljublja",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Sloveno", livello: "B2", condizione: "per studiare in sloveno" },
        { lingua: "Inglese", livello: "B2", condizione: "per studiare in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.uni-lj.si",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68356."
  },
  {
    id: "sap-inf-oviedo",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "ANTONIO D'ALESSANDRO",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "fortemente raccomandato per studenti Erasmus incoming undergraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Documentazione/application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Documentazione/application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68209. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-palma",
    universita: "UNIVERSIDAD DE LAS ISLAS BALEARES",
    citta: "Palma",
    paese: "Spagna",
    codiceErasmus: "E  PALMA01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (1 sem./anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (2 semestre)", periodo: "entro 30 settembre" },
        { cosa: "Application (1 sem./anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application (2 semestre)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://sri.uib.es/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68212. || Lingua: la scheda non indica un livello CEFR (corsi prevalentemente in spagnolo/catalano; corsi di lingua per exchange: spagnolo 100 EUR, catalano 25 EUR, 6 ECTS) - da verificare. [Fonte: scheda destinazione] || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato in mappature precedenti"
  },
  {
    id: "sap-inf-oviedo-2",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0688", nome: "Information and Communication Technologies (ICTs), inter-disciplinary programmes" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "fortemente raccomandato per studenti Erasmus incoming undergraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Documentazione/application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Documentazione/application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti dell'accordo: 2. Accordo ERA68211. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-oviedo-3",
    universita: "UNIVERSIDAD DE OVIEDO",
    citta: "Oviedo",
    paese: "Spagna",
    codiceErasmus: "E  OVIEDO01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "fortemente raccomandato per studenti Erasmus incoming undergraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Documentazione/application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Documentazione/application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://WWW.UNIOVI.ES/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68210. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-murcia",
    universita: "UNIVERSIDAD DE MURCIA",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per corsi regolari in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi regolari in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "1 aprile - 15 giugno" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre" }
      ],
    linkSito: "http://www.um.es/internacionales",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Accordo ERA68207. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-cordoba",
    universita: "UNIVERSIDAD LOYOLA ANDALUCIA",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E  CORDOBA23",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "certificato obbligatorio per corsi in inglese (non serve un esame ufficiale; da caricare nell'application)" },
        { lingua: "Spagnolo", livello: "B1", condizione: "certificato obbligatorio per corsi in spagnolo; alcuni corsi richiedono B2-C1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 marzo - 1 giugno" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre" }
      ],
    linkSito: "https://www.uloyola.es/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Accordo ERA68183."
  },
  {
    id: "sap-inf-barcelo",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; certificato ufficiale o attestazione dell'universita di provenienza" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo; certificato ufficiale o attestazione dell'universita di provenienza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 15 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro il 31 ottobre 2026" }
      ],
    linkSito: "http://www.ub.es",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68172. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-inf-cadiz",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per studenti Erasmus incoming; B2 per studenti della Faculty of Medicine" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 25 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 25 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
    linkSito: "HTTP://WWW.UCA.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68181."
  },
  {
    id: "sap-inf-cadiz-2",
    universita: "UNIVERSIDAD DE CÁDIZ",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per studenti Erasmus incoming; B2 per studenti della Faculty of Medicine" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 25 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 25 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
    linkSito: "HTTP://WWW.UCA.ES",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA70463."
  },
  {
    id: "sap-inf-barcelo-2",
    universita: "UNIVERSIDAD POMPEU FABRA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO15",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0611", nome: "Computer use" }],
    coordinatoreCf: "ROBERTO NAVIGLI",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo/Catalano", livello: "B1", condizione: "per corsi in spagnolo o catalano" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" }
      ],
    linkSito: "https://www.upf.edu/",
    notePratiche: "Posti dell'accordo: 1. Accordo ERA68179. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-inf-vitoria",
    universita: "Universidad EUNEIZ S.A.",
    citta: "Vitoria",
    paese: "Spagna",
    codiceErasmus: "E  VITORIA26",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0719", nome: "Engineering and engineering trades, not elsewhere classified" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    linkSito: "https://www.euneiz.com",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA68225."
  },
  {
    id: "sap-inf-barcelo-3",
    universita: "UNIVERSIDAD DE BARCELONA",
    citta: "Barcelo",
    paese: "Spagna",
    codiceErasmus: "E  BARCELO01",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0619", nome: "Information and Communication Technologies (ICTs), not elsewhere classified" }],
    coordinatoreCf: "SILVIA BONOMI",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; certificato ufficiale o attestazione dell'universita di provenienza" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo; certificato ufficiale o attestazione dell'universita di provenienza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro il 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro il 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro il 15 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro il 31 ottobre 2026" }
      ],
    linkSito: "http://www.ub.es",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Accordo ERA71675. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-inf-ankara",
    universita: "CANKAYA UNIVERSITESI",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA08",
    dipartimentoCf: "Informatica",
    areeDisciplinari: [{ codice: "0610", nome: "Information and Communication Technologies (ICTs), not further defined" }],
    coordinatoreCf: "DANIELE GORLA",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato; certificato non obbligatorio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 agosto" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    linkSito: "http://www.cankaya.edu.tr/index_en.php",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). L'accordo include anche posti Phd/Specializzandi (non gestiti dal sito). Accordo ERA68360."
  }
];
