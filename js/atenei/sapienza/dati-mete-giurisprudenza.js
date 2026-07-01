// ============================================================
// METE ERASMUS — SAPIENZA · Facoltà di GIURISPRUDENZA  (SEED CAMPIONE)
// ------------------------------------------------------------
// Fonte: database ufficiale "Go Erasmus+" Sapienza, filtro Facoltà =
//   Giurisprudenza (ambito=IUS). Bando Erasmus+ 2026/27.
//   https://accordi-didattica.web.uniroma1.it/goerasmus?ambito=IUS
//
// CAMPIONE per il test con studenti: 20 destinazioni su 56 totali,
// scelte per varietà di Paese. Le altre 36 si aggiungono dopo.
//
// Campi REALI dal DB (lista): paese, universita, posti, durata (mesi),
//   livello, coordinatore (promotore = Gianluca Scarchillo per tutta la
//   Facoltà). Area = ISCED Law (0421), comune a Giurisprudenza.
//
// Campi DA ARRICCHIRE col bot (vuoti qui): requisitoLingua, scadenzeOspitante.
//
// ⚠️ codiceErasmus: chiave-join PROVVISORIA e sintetica (prefisso "SAP-IUS-").
//   Il DB lista non espone il codice Erasmus ufficiale; serve solo come
//   identificatore stabile per la pipeline di arricchimento (che cerca per
//   nome ateneo). Da sostituire col codice ufficiale quando disponibile.
//
// NOTA posti: il DB dà UN numero di posti per accordo, condiviso tra i
//   livelli. Qui ogni livello (L/LM) riporta lo stesso "numero" totale; il
//   dettaglio è in notePratiche. PhD/Specializzandi, dove previsto, è segnalato
//   in notePratiche (il profilo del sito gestisce solo L e LM).
// ============================================================

var METE = [
  {
    id: "sap-ius-salzburg",
    universita: "Paris Lodron Universität Salzburg",
    citta: "Salisburgo",
    paese: "Austria",
    codiceErasmus: "SAP-IUS-SALZBURG",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
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
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-innsbruck",
    universita: "Leopold-Franzens-Universität Innsbruck",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "SAP-IUS-INNSBRUCK",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-ulb-bxl",
    universita: "Université Libre de Bruxelles",
    citta: "Bruxelles",
    paese: "Belgio",
    codiceErasmus: "SAP-IUS-ULB-BXL",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 8, mesi: 10, livello: "L", note: "" },
      { numero: 8, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per corsi in francese; B2 fortemente raccomandato" },
        { lingua: "Inglese", livello: "B1", condizione: "minimo per corsi in inglese; B2 fortemente raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-sofia",
    universita: "Sofiiki Universitet \"Sveti Kliment Ohridski\"",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "SAP-IUS-SOFIA",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" },
        { lingua: "Bulgaro", livello: "B1", condizione: "per corsi in bulgaro" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ius-assas-p2",
    universita: "Université Panthéon-Assas (Paris II)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "SAP-IUS-ASSAS-P2",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-ius-amu",
    universita: "Aix-Marseille Université (AMU)",
    citta: "Aix-en-Provence / Marsiglia",
    paese: "Francia",
    codiceErasmus: "SAP-IUS-AMU",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-bordeaux",
    universita: "Université de Bordeaux",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "SAP-IUS-BORDEAUX",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-lmu-muc",
    universita: "Ludwig-Maximilians-Universität München",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "SAP-IUS-LMU-MUC",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-hu-berlin",
    universita: "Humboldt-Universität zu Berlin",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "SAP-IUS-HU-BERLIN",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 5. Solo livello triennale."
  },
  {
    id: "sap-ius-tubingen",
    universita: "Eberhard-Karls-Universität Tübingen",
    citta: "Tubinga",
    paese: "Germania",
    codiceErasmus: "SAP-IUS-TUBINGEN",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 8, livello: "L", note: "" },
      { numero: 4, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-koln",
    universita: "Universität zu Köln",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "SAP-IUS-KOLN",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-warsaw",
    universita: "University of Warsaw",
    citta: "Varsavia",
    paese: "Polonia",
    codiceErasmus: "SAP-IUS-WARSAW",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-porto",
    universita: "Universidade do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "SAP-IUS-PORTO",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-coimbra",
    universita: "Universidade de Coimbra",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "SAP-IUS-COIMBRA",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-bucuresti",
    universita: "Universitatea din Bucuresti",
    citta: "Bucarest",
    paese: "Romania",
    codiceErasmus: "SAP-IUS-BUCURESTI",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-ljubljana",
    universita: "Univerza v Ljubljani (University of Ljubljana)",
    citta: "Lubiana",
    paese: "Slovenia",
    codiceErasmus: "SAP-IUS-LJUBLJANA",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-olomouc",
    universita: "Univerzita Palackého v Olomouci",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "SAP-IUS-OLOMOUC",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-complutense",
    universita: "Universidad Complutense de Madrid",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "SAP-IUS-COMPLUTENSE",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-uam-madrid",
    universita: "Universidad Autónoma de Madrid",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "SAP-IUS-UAM-MADRID",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale (esiste un accordo separato per PhD)."
  },
  {
    id: "sap-ius-stockholm",
    universita: "Stockholms Universitet",
    citta: "Stoccolma",
    paese: "Svezia",
    codiceErasmus: "SAP-IUS-STOCKHOLM",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello triennale."
  }
];
