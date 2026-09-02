// ============================================================
// METE ERASMUS — SAPIENZA · Facoltà di ARCHITETTURA
// ------------------------------------------------------------
// Fonte: database ufficiale "Go Erasmus+" Sapienza, filtro Facoltà =
//   Architettura (ambito=ARCHI). Bando Erasmus+ 2026/27.
//   https://accordi-didattica.web.uniroma1.it/goerasmus?ambito=ARCHI
//
// 2026-07-02: seed iniziale, 113 destinazioni su 118 righe reali del DB
// (12 pagine). 5 righe erano riservate esclusivamente a PhD/Specializzandi
// (nessun posto Laurea o Laurea Magistrale) e NON sono state modellate come
// mete separate, seguendo lo stesso criterio già usato per Giurisprudenza
// (il sito gestisce solo i livelli L e LM).
//
// Come in Medicina/Psicologia, il promotore NON è unico per tutta la Facoltà:
// ogni accordo ha il suo docente referente (coordinatoreCf).
//
// NOTA duplicati: alcuni atenei partner compaiono più volte come accordi
// SEPARATI (stesso ateneo, promotore/posti/livelli diversi). Modellati come
// mete distinte con suffisso -a/-b/-c su id e codiceErasmus.
//
// Campi DA ARRICCHIRE col bot: requisitoLingua, scadenzeOspitante (tutti vuoti).
//
// ⚠️ codiceErasmus: chiave-join PROVVISORIA e sintetica (prefisso
//   "SAP-ARCHI-"). Il DB lista non espone il codice Erasmus ufficiale.
// ⚠️ città: per alcuni atenei multi-campus (es. Universidad de Castilla-La
//   Mancha, HES-SO) la città indicata è quella della sede principale/rete;
//   da verificare sulla scheda ufficiale se rilevante per lo studente.
// ============================================================

var METE = [
  {
    id: "sap-archi-innsbruck",
    universita: "Leopold-Franzens-Universität Innsbruck",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "consigliato per seguire corsi in tedesco; il certificato non e' normalmente richiesto per incoming exchange" },
        { lingua: "Inglese", livello: "B2", condizione: "consigliato per seguire corsi in inglese; il certificato non e' normalmente richiesto per incoming exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "https://www.uibk.ac.at/en/international-relations-office/student-mobility/incoming/mobility-programmes/erasmus-studmob/",

    notaDisponibilita: "Please note that the UIBK does not have a Faculty of Medicine because there is a separate Medical University of Innsbruck in the city.",
    linkCatalogo: "https://lfuonline.uibk.ac.at/public/lfuonline_lv.home",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-ulb-bxl",
    universita: "Université Libre de Bruxelles",
    citta: "Bruxelles",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 8, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.ulb.be/",

    notaDisponibilita: "Please note that our University does not accept free movers.",
    notePratiche: "Posti totali dell'accordo: 8. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-mons",
    universita: "University of Mons",
    citta: "Mons",
    paese: "Belgio",
    codiceErasmus: "B  MONS21",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "conoscenza operativa della lingua di studio; la fonte indica minimo B1/B2 CEFR" },
        { lingua: "Inglese", livello: "B1", condizione: "conoscenza operativa della lingua di studio; la fonte indica minimo B1/B2 CEFR" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-uclouvain",
    universita: "Université Catholique de Louvain",
    citta: "Louvain-la-Neuve",
    paese: "Belgio",
    codiceErasmus: "B  LOUVAIN01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Pisana Posocco",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi di Master in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre per studenti europei; entro 15 ottobre per non europei" }
      ],
    linkSito: "https://uclouvain.be/en/universite/international",
    notePratiche: "Posti totali dell'accordo: 3. Solo livello Magistrale."
  },
  {
    id: "sap-archi-liege",
    universita: "Université de Liège",
    citta: "Liegi",
    paese: "Belgio",
    codiceErasmus: "B  LIEGE01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 15 novembre" }
      ],
    linkSito: "https://www.international.uliege.be/cms/c_17661588/fr/international-exchange-student",

    notaDisponibilita: "La plupart des cours sont dispensés en français, mais certains sont disponibles en anglais.",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-kuleuven",
    universita: "Katholieke Universiteit Leuven",
    citta: "Lovanio",
    paese: "Belgio",
    codiceErasmus: "B  LEUVEN01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Spartaco Paris",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per Erasmus+; confermato dal coordinatore locale in nomination" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 1 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale."
  },
  {
    id: "sap-archi-uaceg-sofia",
    universita: "Universitet po Architectura, Stroitelstvo i Geodesia",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-archi-nicosia",
    universita: "Panepistimio Kyprou",
    citta: "Nicosia",
    paese: "Cipro",
    codiceErasmus: "CY NICOSIA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 20 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 20 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-zagabria-a",
    universita: "Sveučilište u Zagrebu",
    citta: "Zagabria",
    paese: "Croazia",
    codiceErasmus: "HR ZAGREB01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "alternativa per corsi in croato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 novembre" }
      ],
    linkSito: "http://international.unizg.hr/relations",

    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale. Ulteriore accordo distinto con lo stesso ateneo (promotore Francesca Giofrè)."
  },
  {
    id: "sap-archi-zagabria-b",
    universita: "Sveučilište u Zagrebu",
    citta: "Zagabria",
    paese: "Croazia",
    codiceErasmus: "HR ZAGREB01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carlo Martino",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se si seguono corsi in inglese" },
        { lingua: "Croato", livello: "B2", condizione: "alternativa per corsi in croato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 marzo al 15 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 novembre" }
      ],
    linkSito: "http://international.unizg.hr/relations",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Carlo Martino)."
  },
  {
    id: "sap-archi-taltech",
    universita: "Tallinna Tehnikaülikool",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2026" }
      ],
    linkSito: "https://taltech.ee/en/tallinn-university-of-technolog",

    linkCatalogo: "https://taltech.ee/en/courses-english",

    notaDisponibilita: "I corsi scelti devono corrispondere per circa il 70% al curriculum e al livello di studi dell'università d'origine. Non è possibile discutere la tesi finale a TalTech e il lavoro individuale non è consentito salvo supervisione confermata.",

    notePratiche: "Posti totali dell'accordo: 3. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-eka-tallinn",
    universita: "Eesti Kunstiakadeemia",
    citta: "Tallinn",
    paese: "Estonia",
    codiceErasmus: "EE TALLINN01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination/Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-lille",
    universita: "Ecole d'Architecture de Lille et Régions Nord",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE25",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carola Clemente",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    linkSito: "https://www.lille.archi.fr/etudiants-en-echange/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-montpellier",
    universita: "Ecole Nationale Supérieure d'Architecture de Montpellier",
    citta: "Montpellier",
    paese: "Francia",
    codiceErasmus: "F  MONTPEL14",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carola Clemente",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per seguire i corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-saint-etienne",
    universita: "Ecole d'Architecture de Saint-Étienne",
    citta: "Saint-Étienne",
    paese: "Francia",
    codiceErasmus: "F  ST-ETIE08",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carola Clemente",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "richiesto; corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    linkSito: "https://www.st-etienne.archi.fr/echanges-internationaux/",
    notaDisponibilita: "Exchange students are welcomed in the first or/and second semester of our Master of Architecture (4th year). ... Exchange students are welcomed in the first or/and second semester of our Licence of Architecture (2nd or 3rd year).",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-nantes-design",
    universita: "L'Ecole de Design Nantes Atlantique",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES43",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per international class e programmi Master internazionali insegnati in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 10 novembre" }
      ],
    linkSito: "https://lecolededesign.com/en/international/coming-nantes-exchange-student",

    notaDisponibilita: "Only students from one of our partner schools can join the school as an exchange student.",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-paris8",
    universita: "Université de Vincennes Saint-Denis (Paris VIII)",
    citta: "Saint-Denis (Parigi)",
    paese: "Francia",
    codiceErasmus: "F  PARIS008",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 12, livello: "L", note: "" },
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/enrolment (autunno o anno intero)", periodo: "entro 30 giugno" },
        { cosa: "Application/enrolment (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-grenoble-a",
    universita: "Ecole d'Architecture de Grenoble",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL16",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "A2-B1", condizione: "raccomandato per studenti non francofoni" },
        { lingua: "Inglese", livello: "B2", condizione: "per lezioni in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 1 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre 2026" }
      ],
    linkSito: "https://www.grenoble.archi.fr/venir-a-grenoble/",

    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco)."
  },
  {
    id: "sap-archi-gustave-eiffel",
    universita: "Université Gustave Eiffel",
    citta: "Champs-sur-Marne (Parigi)",
    paese: "Francia",
    codiceErasmus: "F  PARIS483",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo nella lingua di insegnamento per la maggior parte dei programmi" },
        { lingua: "Francese", livello: "B2", condizione: "per alcuni programmi o master in Urban Planning" },
        { lingua: "Inglese", livello: "C1", condizione: "per master in Urban Planning se i corsi scelti sono in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-lyon",
    universita: "Ecole Nationale Supérieure d'Architecture de Lyon",
    citta: "Lione",
    paese: "Francia",
    codiceErasmus: "F  LYON25",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "altamente raccomandato; certificazione ufficiale non richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.lyon.archi.fr/ecole-0/international/venir-etudier-lensal",
    notaDisponibilita: "Incoming exchange students are enrolled at the master level.",
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-rouen",
    universita: "Ecole Nationale Supérieure d'Architecture de Normandie",
    citta: "Rouen",
    paese: "Francia",
    codiceErasmus: "F  ROUEN19",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "necessario per la maggior parte dei corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-archi-paris-lavillette",
    universita: "Ecole Nationale Supérieure d'Architecture de Paris-La Villette",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F  PARIS126",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo fortemente raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 2 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 22 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 13 novembre 2026" }
      ],
    linkCatalogo: "https://admin.paris-lavillette.archi.fr/wp-content/uploads/2026/04/livret_international_FRA_web_26-27.pdf",
    notaDisponibilita: "Les étudiants suivent des cours de troisième année de Licence ou du Cycle Master en fonction de leur niveau d’études dans leur université d’origine. Les cours de Licence 1 et 2 ne leur sont pas ouverts.",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-archi-eavt-marne",
    universita: "Ecole d'Architecture de la Ville et des Territoires à Marne-la-Vallée",
    citta: "Marne-la-Vallée (Parigi)",
    paese: "Francia",
    codiceErasmus: "F  PARIS318",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Nicoletta Trasi",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1-B2", condizione: "raccomandato per corsi di Bachelor" },
        { lingua: "Francese", livello: "B2-C1", condizione: "raccomandato per corsi di Master" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "http://www.marnelavallee.archi.fr/international/venir-a-l-ecole",
    notaDisponibilita: "Attention, les étudiants en échange ne peuvent pas s’inscrire en deuxième semestre du Master 2 car ce semestre est entièrement consacré au diplôme de fin d’études (PFE).",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-rennes",
    universita: "Ecole Nationale Supérieure d'Architecture de Bretagne",
    citta: "Rennes",
    paese: "Francia",
    codiceErasmus: "F  RENNES16",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello fortemente raccomandato per corsi insegnati in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    linkSito: "https://www.rennes.archi.fr/international/mobietudiantes/echanges-internationaux-etudiants-mobilite-entrante/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-nancy",
    universita: "Ecole Nationale Supérieure d'Architecture de Nancy",
    citta: "Nancy",
    paese: "Francia",
    codiceErasmus: "F  NANCY38",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "richiesto per studenti in mobilita entrante" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 2 maggio 2025" },
        { cosa: "Application (primavera)", periodo: "entro 9 ottobre 2025" }
      ],
    linkSito: "https://www.nancy.archi.fr/fr/international.html",

    notaDisponibilita: "Les cours d'encadrement ou de suivi des MFE et PFE ne sont pas accessibles puisque les étudiants passeront leur mémoire ou projet de fin d'année dans leur université d'origine.",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-nantes-archi",
    universita: "Ecole Nationale Supérieure d'Architecture de Nantes",
    citta: "Nantes",
    paese: "Francia",
    codiceErasmus: "F  NANTES13",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio Tucci",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "certificazione raccomandata per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application/registrazione (autunno o anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Application/registrazione (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-grenoble-b",
    universita: "Ecole d'Architecture de Grenoble",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "F  GRENOBL16",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per mobilita incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno o anno intero)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre 2026" }
      ],
    linkSito: "https://www.grenoble.archi.fr/venir-a-grenoble/",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Barbara Pizzo)."
  },
  {
    id: "sap-archi-sorbonne",
    universita: "Sorbonne Université",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F  PARIS468",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-versailles-paysage",
    universita: "Ecole Nationale Supérieure de Paysage de Versailles",
    citta: "Versailles",
    paese: "Francia",
    codiceErasmus: "F  VERSAIL03",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per Bachelor" },
        { lingua: "Francese", livello: "B1", condizione: "per Master" },
        { lingua: "Inglese", livello: "B1", condizione: "per Master e International Master MIV-TTT" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno o anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 settembre" },
        { cosa: "Application (autunno o anno intero)", periodo: "entro 26 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 27 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-toulouse",
    universita: "Ecole Nationale Supérieure d'Architecture de Toulouse",
    citta: "Tolosa",
    paese: "Francia",
    codiceErasmus: "F  TOULOUS24",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "richiesto per studenti incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio 2025" },
        { cosa: "Application (autunno)", periodo: "entro 10 giugno 2025" },
        { cosa: "Application (primavera)", periodo: "entro 20 ottobre 2025" }
      ],
    linkSito: "https://www.toulouse.archi.fr/fr/international/venir-a-lecole",

    notaDisponibilita: "25 étudiants sont accueillis cette année universitaire 2025/26 en Licence 3 et en Master",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-marseille",
    universita: "Ecole Nationale Supérieure d'Architecture de Marseille-Luminy",
    citta: "Marsiglia",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL17",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi BA" },
        { lingua: "Francese", livello: "B2", condizione: "per corsi MA" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 13 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 7 dicembre 2026" }
      ],
    linkSito: "https://www.marseille.archi.fr/international/venir-lensamarseille",
    notaDisponibilita: "Certains enseignements ne sont pas ouverts aux étudiants en mobilité entrante/IN : S5 UE2 : Rapport d’études / méthodologie S6 UE3 : Rapport d’études Vous ne pouvez choisir qu’un seul studio de projet et un seul séminaire par semestre",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-versailles-archi",
    universita: "Ecole d'Architecture de Versailles",
    citta: "Versailles",
    paese: "Francia",
    codiceErasmus: "F  VERSAIL05",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" },
      { numero: 5, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per Bachelor" },
        { lingua: "Francese", livello: "B1", condizione: "per Master" },
        { lingua: "Inglese", livello: "B1", condizione: "per Master e International master MIV-TTT" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 26 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 16 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 27 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-bordeaux-paysage",
    universita: "Ecole Nationale Supérieure d'Architecture et de Paysage de Bordeaux",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU16",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Spartaco Paris",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "tutti i corsi sono in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-uni-stuttgart",
    universita: "Universität Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "D  STUTTGA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "C1", condizione: "per corsi solo in tedesco" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi solo in tedesco; B1 o B2 accettati" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi solo in tedesco; B1 o B2 accettati" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi solo in inglese o tesi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application/registrazione Mobility-Online (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application C@MPUS (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application/registrazione Mobility-Online (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application C@MPUS (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "https://www.uni-stuttgart.de/studium/bewerbung/international-non-degree/erasmus/",

    notaDisponibilita: "Englischsprachige Bachelor-Kurse sind selten. Die Teilnahme an englischsprachigen internationalen MSc-Kursen ist nur nach Anfrage möglich.",

    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-aachen",
    universita: "RWTH Aachen University",
    citta: "Aquisgrana",
    paese: "Germania",
    codiceErasmus: "D  AACHEN01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1.1", condizione: "in base alla scelta di corsi e facolta" },
        { lingua: "Tedesco", livello: "B2.1", condizione: "in base alla scelta di corsi e facolta" },
        { lingua: "Inglese", livello: "B1.1", condizione: "in base alla scelta di corsi e facolta" },
        { lingua: "Inglese", livello: "B2.1", condizione: "in base alla scelta di corsi e facolta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 31 dicembre" }
      ],
    linkSito: "http://www.rwth-aachen.de",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-koln-a",
    universita: "Fachhochschule Köln",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "D  KOLN04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per la lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "http://www.fh-koeln.de",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Alessandra Battisti)."
  },
  {
    id: "sap-archi-weimar",
    universita: "Bauhaus-Universität Weimar",
    citta: "Weimar",
    paese: "Germania",
    codiceErasmus: "D  WEIMAR01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 3, mesi: 12, livello: "L", note: "" },
      { numero: 3, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "corso intensivo obbligatorio se sotto B1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    linkSito: "https://www.uni-weimar.de/en/university/international/to-weimar/exchange-studies/",

    linkCatalogo: "http://www.uni-weimar.de/qisserver/rds?state=wtree&search=1&category=veranstaltung.browse&topitem=lectures&subitem=lectureindex&breadcrumb=lectureindex",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-hs-darmstadt",
    universita: "Hochschule Darmstadt",
    citta: "Darmstadt",
    paese: "Germania",
    codiceErasmus: "D  DARMSTA02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 4, mesi: 6, livello: "L", note: "" },
      { numero: 4, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-kassel-a",
    universita: "Universität Kassel",
    citta: "Kassel",
    paese: "Germania",
    codiceErasmus: "D  KASSEL01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Roberto Cherubini",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per candidatura incoming alla Faculty 06 ASL" },
        { lingua: "Inglese", livello: "B1", condizione: "se il livello di tedesco e' solo A2" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.uni-kassel.de/uni/en/study/before-the-application/study-guide-for-international-students/exchange-studies-at-the-university-of-kassel.html",

    notaDisponibilita: "Austauschstudierende können Kurse außerhalb ihrer Fakultät belegen.",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Roberto Cherubini). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-tu-darmstadt",
    universita: "Technische Universität Darmstadt",
    citta: "Darmstadt",
    paese: "Germania",
    codiceErasmus: "D  DARMSTA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Roberto Cherubini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "A2", condizione: "per corsi in tedesco nel programma Erasmus+; corso intensivo obbligatorio se livello A2" },
        { lingua: "Inglese", livello: "B2", condizione: "per seguire solo corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-bremen",
    universita: "Hochschule Bremen",
    citta: "Brema",
    paese: "Germania",
    codiceErasmus: "D  BREMEN04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Roberto Cherubini",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Tedesco", livello: "B1.2", condizione: "per studiare con studenti locali in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 gennaio" },
        { cosa: "Application (autunno)", periodo: "1 marzo - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 31 gennaio" }
      ],
    linkSito: "https://www.hs-bremen.de/informationen-fuer/internationale-studierende/austauschstudierende/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-kassel-b",
    universita: "Universität Kassel",
    citta: "Kassel",
    paese: "Germania",
    codiceErasmus: "D  KASSEL01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination e application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "https://www.uni-kassel.de/uni/en/study/before-the-application/study-guide-for-international-students/exchange-studies-at-the-university-of-kassel.html",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notaDisponibilita: "Austauschstudierende können Kurse außerhalb ihrer Fakultät belegen.",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-hft-stuttgart-a",
    universita: "Hochschule für Technik Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "D  STUTTGA05",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "A1", condizione: "per corsi nei programmi di Architecture, Interior Architecture e General Management; frequenza di un corso di tedesco richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notaDisponibilita: "Aufgrund der Innenstadtlage gibt es keine Unterkunft auf dem Campus der HFT Stuttgart.",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-mainz",
    universita: "Hochschule Mainz",
    citta: "Magonza",
    paese: "Germania",
    codiceErasmus: "D  MAINZ08",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio De Cesaris",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per incoming School of Design" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.hs-mainz.de/en/international/study/incoming-exchange-students/",

    notePratiche: "Posti totali dell'accordo: 4. Solo livello triennale."
  },
  {
    id: "sap-archi-freising",
    universita: "Hochschule Weihenstephan-Triesdorf",
    citta: "Freising",
    paese: "Germania",
    codiceErasmus: "D  FREISIN01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Lingua di insegnamento", livello: "B1", condizione: "per la lingua dei corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "15 maggio - 15 giugno per il semestre invernale" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 1 dicembre per il semestre estivo" }
      ],
    linkSito: "https://www.hswt.de/",

    linkCatalogo: "https://www.hswt.de/en/study/study-offer",

    notaDisponibilita: "Du kannst Lehrveranstaltungen nur an einem der beiden HSWT Standorte besuchen.",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-archi-cottbus",
    universita: "Brandenburgische Technische Universität Cottbus-Senftenberg",
    citta: "Cottbus",
    paese: "Germania",
    codiceErasmus: "D  COTTBUS03",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 gennaio" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-hildesheim",
    universita: "HAWK Hochschule Hildesheim",
    citta: "Hildesheim",
    paese: "Germania",
    codiceErasmus: "D  HILDESH02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.hawk.de/de",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-hannover",
    universita: "Gottfried Wilhelm Leibniz Universität Hannover",
    citta: "Hannover",
    paese: "Germania",
    codiceErasmus: "D  HANNOVE01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 1, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi esclusivamente in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi esclusivamente in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "http://www.uni-hannover.de",

    notaDisponibilita: "Research projects can only be carried out and included in your Learning Agreement if you have found a supervisor at Leibniz University Hannover beforehand.",
    notePratiche: "Posti totali dell'accordo: 1. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-frankfurt",
    universita: "Frankfurt University of Applied Sciences",
    citta: "Francoforte sul Meno",
    paese: "Germania",
    codiceErasmus: "D  FRANKFU04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alfonso Ippolito",
    posti: [
      { numero: 2, mesi: 12, livello: "L", note: "" },
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "https://www.frankfurt-university.de/de/studium/dezernat-internationales/incomings/austauschstudium/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-karlsruhe",
    universita: "Karlsruhe Institute of Technology",
    citta: "Karlsruhe",
    paese: "Germania",
    codiceErasmus: "D  KARLSRU01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alfonso Ippolito",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per soli corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per soli corsi in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco e inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in tedesco e inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://www.uni-karlsruhe.de",

    linkCatalogo: "https://campus.studium.kit.edu/events/catalog.php",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-hft-stuttgart-b",
    universita: "Hochschule für Technik Stuttgart",
    citta: "Stoccarda",
    paese: "Germania",
    codiceErasmus: "D  STUTTGA05",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alfonso Ippolito",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "A1", condizione: "per corsi nei programmi di Architecture, Interior Architecture e General Management; frequenza di un corso di tedesco richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notaDisponibilita: "Aufgrund der Innenstadtlage gibt es keine Unterkunft auf dem Campus der HFT Stuttgart.",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Alfonso Ippolito). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-koln-b",
    universita: "Fachhochschule Köln",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "D  KOLN04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per la maggioranza dei corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "http://www.fh-koeln.de",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Angela Giambattista)."
  },
  {
    id: "sap-archi-tum-a",
    universita: "Technische Universität München",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti, Eliana Cangelli",
    posti: [
      { numero: 4, mesi: 12, livello: "L", note: "" },
      { numero: 4, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" },
        { lingua: "Tedesco", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "da meta marzo a 30 aprile" },
        { cosa: "Application (autunno)", periodo: "da meta marzo a 10 maggio" },
        { cosa: "Nomination (primavera)", periodo: "da meta settembre a 17 ottobre" },
        { cosa: "Application (primavera)", periodo: "da meta settembre a 31 ottobre" }
      ],
    linkSito: "http://www.tum.de/international",

    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Alessandra Battisti, Eliana Cangelli)."
  },
  {
    id: "sap-archi-tum-b",
    universita: "Technische Universität München",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Benedetta Di Donato",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" },
        { lingua: "Tedesco", livello: "B1/B2", condizione: "secondo il dipartimento e i corsi scelti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "da meta marzo a 30 aprile" },
        { cosa: "Application (autunno)", periodo: "da meta marzo a 10 maggio" },
        { cosa: "Nomination (primavera)", periodo: "da meta settembre a 17 ottobre" },
        { cosa: "Application (primavera)", periodo: "da meta settembre a 31 ottobre" }
      ],
    linkSito: "http://www.tum.de/international",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Benedetta Di Donato)."
  },
  {
    id: "sap-archi-braunschweig",
    universita: "Technische Universität Braunschweig",
    citta: "Braunschweig",
    paese: "Germania",
    codiceErasmus: "D  BRAUNSC01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Balducci",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per studenti visiting in Architettura; B1 accettato con indicazione nel motivation letter del percorso verso B2" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per studenti visiting in Architettura; B1 accettato con indicazione nel motivation letter del percorso verso B2" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-hvanneyri",
    universita: "Landbúnaðarháskóli Íslands",
    citta: "Hvanneyri",
    paese: "Islanda",
    codiceErasmus: "IS BORGARN02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Islandese", livello: "B1", condizione: "per corsi non erogati in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "1 marzo - 1 maggio" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-riga",
    universita: "Rīgas Tehniskā Universitāte",
    citta: "Riga",
    paese: "Lettonia",
    codiceErasmus: "LV RIGA02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Barbara Pizzo",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 novembre" }
      ],
    linkSito: "http://www.rtu.lv/",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-vilnius",
    universita: "Vilniaus Gedimino Technikos Universitetas",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Donatella Scatena",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.vgtu.lt",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-malta",
    universita: "University of Malta",
    citta: "Msida",
    paese: "Malta",
    codiceErasmus: "MT MALTA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi del Department of English" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "https://www.um.edu.mt/studentlife/internationalopportunities/erasmus/incoming/",
    notePratiche: "Posti totali dell'accordo: 4. Solo livello triennale."
  },
  {
    id: "sap-archi-zwolle",
    universita: "Christelijke Hogeschool Windesheim",
    citta: "Zwolle",
    paese: "Olanda",
    codiceErasmus: "NL ZWOLLE05",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Loredana Di Lucchio",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per programmi exchange in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-wageningen",
    universita: "Landbouwuniversiteit Wageningen",
    citta: "Wageningen",
    paese: "Olanda",
    codiceErasmus: "NL WAGENIN01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Di Carlo",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno, studenti non-UE)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno, studenti non-UE)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (autunno, studenti UE/EFTA)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno, studenti UE/EFTA)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera, studenti non-UE)", periodo: "entro 15 settembre" },
        { cosa: "Application (primavera, studenti non-UE)", periodo: "entro 1 ottobre" },
        { cosa: "Nomination (primavera, studenti UE/EFTA)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera, studenti UE/EFTA)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "https://www.wur.nl/en/Education-Programmes/Study-Abroad-and-Exchange-Students.htm",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-poznan",
    universita: "Politechnika Poznańska",
    citta: "Poznań",
    paese: "Polonia",
    codiceErasmus: "PL POZNAN02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per mobilita exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.put.poznan.pl",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-pw-warszawa",
    universita: "Politechnika Warszawska",
    citta: "Varsavia",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "con certificato internazionale o dell'universita di origine" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "4-31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "2-30 novembre" }
      ],
    linkSito: "http://www.arch.pw.edu.pl",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-lublin",
    universita: "Politechnika Lubelska",
    citta: "Lublino",
    paese: "Polonia",
    codiceErasmus: "PL LUBLIN03",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Davide Benarnardini",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" },
      { numero: 3, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "minimo per studenti Erasmus+ exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-covilha",
    universita: "Universidade da Beira Interior",
    citta: "Covilhã",
    paese: "Portogallo",
    codiceErasmus: "P  COVILHA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "richiesto dall'Universidade da Beira Interior" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-viana-castelo",
    universita: "Instituto Politécnico de Viana do Castelo",
    citta: "Viana do Castelo",
    paese: "Portogallo",
    codiceErasmus: "P  VIANA-D01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-madeira",
    universita: "Universidade da Madeira",
    citta: "Funchal",
    paese: "Portogallo",
    codiceErasmus: "P  FUNCHAL03",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B2", condizione: "per mobilita' di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-porto-a",
    universita: "Universidade do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Quici",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Fabio Quici). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-evora",
    universita: "Universidade de Évora",
    citta: "Évora",
    paese: "Portogallo",
    codiceErasmus: "P  EVORA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkSito: "HTTP://WWW.UEVORA.PT",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-archi-porto-b",
    universita: "Universidade do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 21 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 15 ottobre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Romeo Di Pietro). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-lusiada-lisboa",
    universita: "Universidade Lusíada",
    citta: "Lisbona",
    paese: "Portogallo",
    codiceErasmus: "P  LISBOA12",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Massimo Zammerini",
    posti: [
      { numero: 5, mesi: 12, livello: "L", note: "" },
      { numero: 5, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "raccomandato per lezioni e valutazioni in portoghese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno intero)", periodo: "31 maggio - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "31 ottobre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-aveiro",
    universita: "Universidade de Aveiro",
    citta: "Aveiro",
    paese: "Portogallo",
    codiceErasmus: "P  AVEIRO01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 2, mesi: 12, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-timisoara-a",
    universita: "Universitatea Politehnica din Timișoara",
    citta: "Timișoara",
    paese: "Romania",
    codiceErasmus: "RO TIMISOA04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 3, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per programmi/corsi disponibili in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per programmi disponibili in tedesco" },
        { lingua: "Rumeno", livello: "B1", condizione: "per corsi in rumeno" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 dicembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 10 dicembre" }
      ],
    linkSito: "http://www.upt.ro/",

    linkCatalogo: "https://international.upt.ro/en/incoming-students/course-catalogue/",
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-timisoara-b",
    universita: "Universitatea Politehnica din Timișoara",
    citta: "Timișoara",
    paese: "Romania",
    codiceErasmus: "RO TIMISOA04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Daniela Esposito",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per programmi/corsi disponibili in inglese" },
        { lingua: "Tedesco", livello: "B1", condizione: "per programmi disponibili in tedesco" },
        { lingua: "Rumeno", livello: "B1", condizione: "per corsi in rumeno" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 10 dicembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 18 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 10 dicembre" }
      ],
    linkSito: "http://www.upt.ro/",

    linkCatalogo: "https://international.upt.ro/en/incoming-students/course-catalogue/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Daniela Esposito). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-archi-ion-mincu-bucarest",
    universita: "Universitatea de Arhitectură și Urbanism \"Ion Mincu\"",
    citta: "Bucarest",
    paese: "Romania",
    codiceErasmus: "RO BUCURES07",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi/esami in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.uauim.ro/universitatea/relatii-internationale/erasmus/incoming/",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-cluj-napoca",
    universita: "Universitatea Tehnică din Cluj-Napoca",
    citta: "Cluj-Napoca",
    paese: "Romania",
    codiceErasmus: "RO CLUJNAP05",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Augusto Roca De Amicis",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-stu-bratislava-a",
    universita: "Slovenská Technická Univerzita v Bratislave",
    citta: "Bratislava",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 10 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Alessandra Capanna). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-stu-bratislava-b",
    universita: "Slovenská Technická Univerzita v Bratislave",
    citta: "Bratislava",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Carmela Mariano",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 30 giugno" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 10 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Carmela Mariano). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-ljubljana",
    universita: "Univerza v Ljubljani",
    citta: "Lubiana",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Spartaco Paris",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Sloveno o inglese", livello: "B2", condizione: "per studiare presso l'ateneo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.uni-lj.si",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-alcala",
    universita: "Universidad de Alcalá",
    citta: "Alcalá de Henares",
    paese: "Spagna",
    codiceErasmus: "E  ALCAL-H01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Battisti",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "requisito standard per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre 2026" }
      ],
    linkSito: "http://www.uah.es",

    notaDisponibilita: "La admisión del estudiante no garantiza que se pueda matricular de todas las asignaturas solicitadas, ya que algunas tienen un número limitado de plazas.",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-ucam-murcia",
    universita: "Universidad Católica San Antonio de Murcia",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA05",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "A2", condizione: "raccomandato per corsi teorici, corsi principalmente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 12 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 10 novembre" }
      ],
    linkSito: "https://www.ucam.edu/servicios/oficina-relaciones-internacionales/incoming-students",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-uc-valencia",
    universita: "Universidad Católica de Valencia \"San Vicente Mártir\"",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI11",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile-15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre-31 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-ucjc-madrid",
    universita: "Universidad Camilo José Cela",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID33",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1. Solo livello triennale. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-upv-valencia-a",
    universita: "Universidad Politécnica de Valencia",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi della laurea in Technical Architecture" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi dei master in Building Constructions e Building Rehabilitation and Sustainability" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.upv.es",

    notaDisponibilita: "La UPV es una universidad pública, sus precios están subvencionados por la administración y son definidos por la Generalitat Valenciana.",
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco)."
  },
  {
    id: "sap-archi-upv-valencia-b",
    universita: "Universidad Politécnica de Valencia",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi della laurea in Technical Architecture" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi dei master in Building Constructions e Building Rehabilitation and Sustainability" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "http://www.upv.es",

    notaDisponibilita: "La UPV es una universidad pública, sus precios están subvencionados por la administración y son definidos por la Generalitat Valenciana.",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale. Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Federica Dal Falco)."
  },
  {
    id: "sap-archi-ufv-madrid",
    universita: "Universidad Francisco de Vitoria",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID28",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabrizio De Cesaris",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "lingua di insegnamento principale; B2 consigliato" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "20 aprile - 22 maggio 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "22 aprile - 29 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "21 settembre - 24 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "21 settembre - 30 ottobre 2026" }
      ],
    linkSito: "http://www.ufvinternational.com/",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-unav-pamplona",
    universita: "Universidad de Navarra",
    citta: "Pamplona",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 marzo 2026" },
        { cosa: "Application (autunno)", periodo: "entro 4 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre 2026" }
      ],
    linkSito: "http://www.unav.es",

    linkCatalogo: "https://www.unav.edu/estudiantes/programas-de-intercambio/incoming#courses",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-upct-cartagena",
    universita: "Universidad Politécnica de Cartagena",
    citta: "Cartagena",
    paese: "Spagna",
    codiceErasmus: "E  MURCIA04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Quici",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per seguire corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato per seguire corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.upct.es/",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-coruna",
    universita: "Universidad de La Coruña",
    citta: "La Coruña",
    paese: "Spagna",
    codiceErasmus: "E  LA-CORU01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Fabio Quici",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato; il certificato non e' richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    linkSito: "http://www.udc.es",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-upv-valencia-c",
    universita: "Universidad Politécnica de Valencia",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E  VALENCI02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Emanuela Chiavoni",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "nella maggior parte dei casi per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "nella maggior parte dei casi per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "1 marzo - 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 giugno - 30 settembre" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 15 ottobre" }
      ],
    linkSito: "http://www.upv.es",

    notaDisponibilita: "La UPV es una universidad pública, sus precios están subvencionados por la administración y son definidos por la Generalitat Valenciana.",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Emanuela Chiavoni)."
  },
  {
    id: "sap-archi-girona",
    universita: "Universitat de Girona",
    citta: "Girona",
    paese: "Spagna",
    codiceErasmus: "E  GIRONA02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Pisana Posocco",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre 2026" }
      ],
    linkSito: "http://www.udg.edu",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-zaragoza",
    universita: "Universidad de Zaragoza",
    citta: "Saragozza",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Simona Salvo",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 29 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 23 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "16 febbraio - 19 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 6 novembre 2026" }
      ],
    linkSito: "HTTP://WWW.UNIZAR.ES",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-valladolid",
    universita: "Universidad de Valladolid",
    citta: "Valladolid",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 5, mesi: 9, livello: "L", note: "" },
      { numero: 5, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "se la lingua di insegnamento scelta non e' lingua madre" },
        { lingua: "Inglese", livello: "B1", condizione: "se la lingua di insegnamento scelta non e' lingua madre" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi inclusi negli International Semester Programmes" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-nebrija-madrid",
    universita: "Universitas Nebrissensis (Universidad Nebrija)",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID12",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "per seguire insegnamenti in spagnolo; richiesta per non madrelingua" },
        { lingua: "Inglese", livello: "B2", condizione: "per seguire insegnamenti in inglese; richiesta per non madrelingua" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "16 marzo - 20 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 giugno - 15 luglio 2026" },
        { cosa: "Application (autunno)", periodo: "documentazione entro 15 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "documentazione entro 1 settembre 2026" }
      ],
    linkSito: "https://www.nebrija.com/en/international-programmes/nebrija-your-destination/",

    notaDisponibilita: "Programas Integrados de Ciencias Sociales, Comunicación y Artes, Politécnica, Lenguas y Educación",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-malaga",
    universita: "Universidad de Málaga",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Giacinto Donvito",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello consigliato, necessario per seguire le lezioni" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "da meta aprile a meta giugno" },
        { cosa: "Nomination (anno intero)", periodo: "da meta aprile a meta giugno" },
        { cosa: "Nomination (primavera)", periodo: "da meta aprile a fine ottobre" }
      ],
    linkSito: "https://www.uma.es/relaciones-internacionales/cms/menu/erasmus/incoming-students/",
    notaDisponibilita: "50% de tus asignaturas deben ser del centro en el que te nominaron",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-uclm-ciudadreal",
    universita: "Universidad de Castilla-La Mancha",
    citta: "Ciudad Real (sede principale)",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Laura Ricci",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-uax-madrid",
    universita: "Universidad Alfonso X el Sabio",
    citta: "Villanueva de la Cañada (Madrid)",
    paese: "Spagna",
    codiceErasmus: "E  MADRID17",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Luca Ribichini",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "lingua di insegnamento 1" },
        { lingua: "Inglese", livello: "B2", condizione: "lingua di insegnamento 2, soggetta a disponibilita" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 1 aprile al 30 aprile" },
        { cosa: "Application (autunno)", periodo: "dal 1 maggio al 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "dal 18 settembre al 30 settembre" },
        { cosa: "Application (primavera)", periodo: "dal 1 ottobre al 31 ottobre" }
      ],
    linkSito: "https://www.uax.com/programas-movilidad-incoming",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-archi-vic-a",
    universita: "Universitat de Vic",
    citta: "Vic",
    paese: "Spagna",
    codiceErasmus: "E  VIC01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 28 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
    linkSito: "https://www.uvic.cat/en",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    linkCatalogo: "https://www.uvic.cat/en/international/exchange-programmes/courses",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale. Ulteriore accordo distinto con lo stesso ateneo (promotore Angela Giambattista). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-vic-b",
    universita: "Universitat de Vic",
    citta: "Vic",
    paese: "Spagna",
    codiceErasmus: "E  VIC01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Angela Giambattista",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 28 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 25 ottobre" }
      ],
    linkSito: "https://www.uvic.cat/en",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    linkCatalogo: "https://www.uvic.cat/en/international/exchange-programmes/courses",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Angela Giambattista). || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-vaxjo",
    universita: "Linnéuniversitetet",
    citta: "Växjö",
    paese: "Svezia",
    codiceErasmus: "S  VAXJO03",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Lorenzo Imbesi",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti exchange non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    linkSito: "https://www.lnu.se/en/student/international-possibilities/study-abroad/",
    notaDisponibilita: "You can only apply for placements within your faculty or university-wide placements.",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-umea",
    universita: "Umeå University",
    citta: "Umeå",
    paese: "Svezia",
    codiceErasmus: "S  UMEA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Svedese", livello: "B2/C1", condizione: "per corsi impartiti in svedese, secondo il corso scelto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-hesso",
    universita: "Haute Ecole Spécialisée de Suisse Occidentale (HES-SO)",
    citta: "Losanna (rete multi-sede)",
    paese: "Svizzera",
    codiceErasmus: "CH DELEMON02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Marc'Antonio Liotta",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "C1", condizione: "per la sede principale HES-SO e i moduli selezionati in francese" },
        { lingua: "Tedesco", livello: "C1", condizione: "per la sede principale BFH e i moduli selezionati in tedesco" },
        { lingua: "Inglese", livello: "C1", condizione: "per i moduli selezionati in inglese" },
        { lingua: "Francese/Tedesco/Inglese", livello: "B1", condizione: "per almeno una seconda lingua tra le tre lingue di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 dicembre al 31 maggio" },
        { cosa: "Application (autunno, candidati con visto)", periodo: "dal 1 dicembre al 15 febbraio" },
        { cosa: "Application (primavera)", periodo: "dal 1 settembre al 31 ottobre" },
        { cosa: "Application (primavera, candidati con visto)", periodo: "dal 1 settembre al 30 settembre" }
      ],
    linkSito: "https://www.hes-so.ch/accueil",

    notaDisponibilita: "I corsi di livello Master sono accessibili solo agli studenti selezionati in base a un accordo specifico per il Master of Science.",

    linkCatalogo: "https://virtual-mobilities.univ-smb.fr/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-ozyegin-istanbul",
    universita: "Özyeğin Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU31",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Rosalba Belibani",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti exchange non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giorni prima della deadline application" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 giorni prima della deadline application" },
        { cosa: "Application (primavera)", periodo: "entro 2 novembre" }
      ],
    linkSito: "https://www.ozyegin.edu.tr/en/international-exchange-and-partnership-programs/erasmus-international-credit-mobility-ka171/incoming",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-tobb-ankara",
    universita: "TOBB Ekonomi ve Teknoloji Üniversitesi",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA10",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 4, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "a seconda del programma di studio" },
        { lingua: "Turco", livello: "B1", condizione: "a seconda del programma di studio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    linkSito: "https://www.etu.edu.tr/en/uluslararasi/sayfa/erasmus-mobility-ka131",

    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale."
  },
  {
    id: "sap-archi-aybu-ankara",
    universita: "Ankara Yıldırım Beyazıt Üniversitesi",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA15",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti in mobilita Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-archi-gazi-ankara",
    universita: "Gazi Üniversitesi",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Francesca Giofrè",
    posti: [
      { numero: 1, mesi: 6, livello: "L", note: "" },
      { numero: 1, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 maggio - 20 giugno" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 20 novembre" }
      ],
    linkSito: "http://www.gazi.edu.tr",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-msgsu-istanbul-a",
    universita: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU06",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Romeo Di Pietro",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Turco", livello: "B1", condizione: "per corsi in turco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "https://msgsu.edu.tr/",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Ulteriore accordo distinto con lo stesso ateneo (promotore Romeo Di Pietro). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-itu-istanbul",
    universita: "Istanbul Teknik Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Loredana Di Lucchio",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per studenti exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 22 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "https://www.itu.edu.tr/",

    linkCatalogo: "https://global.itu.edu.tr/students/international-programs/global-exchange-students",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-msgsu-istanbul-b",
    universita: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU06",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Loredana Di Lucchio",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Turco", livello: "B1", condizione: "per corsi in turco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "https://msgsu.edu.tr/",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. Ulteriore accordo distinto con lo stesso ateneo (promotore Loredana Di Lucchio). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-archi-izmir-ekonomi",
    universita: "İzmir Ekonomi Üniversitesi",
    citta: "Smirne (Izmir)",
    paese: "Turchia",
    codiceErasmus: "TR IZMIR04",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Lorenzo Imbesi",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination/Application (primavera)", periodo: "entro 30 dicembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    linkSito: "https://www.ieu.edu.tr/international/en/gelen-uluslararasi-degisim-ogrencileri",

    notaDisponibilita: "The medium of instruction at IUE is English. However, some faculties such as Law, Health Sciences and Vocational School are taught in Turkish.",

    linkCatalogo: "http://ects.ieu.edu.tr/new/idari.php?id=57",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-bursa",
    universita: "Uludağ Üniversitesi",
    citta: "Bursa",
    paese: "Turchia",
    codiceErasmus: "TR BURSA01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Alessandra Capanna",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "" },
      { numero: 2, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 aprile - 15 giugno" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 30 novembre" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 30 novembre" }
      ],
    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    linkSito: "https://ukey.uludag.edu.tr/erasmus/incoming",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-archi-pecs",
    universita: "Pécsi Tudományegyetem",
    citta: "Pécs",
    paese: "Ungheria",
    codiceErasmus: "HU PECS01",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Federica Dal Falco",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato equivalente B2 richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile - 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 30 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre - 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 novembre 2026" }
      ],
    linkSito: "https://www.pte.hu",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-archi-bme-budapest",
    universita: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES02",
    dipartimentoCf: "Architettura",
    areeDisciplinari: [{ codice: "0731", nome: "Architecture and town planning" }],
    coordinatoreCf: "Donatella Scatena",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se l'inglese non e' lingua madre" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli)."
  }
];
