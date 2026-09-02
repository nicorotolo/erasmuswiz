// ============================================================
// METE ERASMUS — SAPIENZA · Facoltà di GIURISPRUDENZA
// ------------------------------------------------------------
// Fonte: database ufficiale "Go Erasmus+" Sapienza, filtro Facoltà =
//   Giurisprudenza (ambito=IUS). Bando Erasmus+ 2026/27.
//   https://accordi-didattica.web.uniroma1.it/goerasmus?ambito=IUS
//
// 2026-07-01: espanso da 20 a 55 destinazioni (tutte quelle disponibili).
// Il DB elenca 56 righe, ma la 56ª è un secondo accordo Universidad Autónoma
// de Madrid riservato a PhD/Specializzandi (duplicato dello stesso ateneo
// già presente in riga L/LM): il sito non gestisce il livello PhD, quindi
// non è stato modellato come meta separata, seguendo lo stesso criterio già
// usato per le altre mete con posti anche PhD (annotati in notePratiche).
// Le prime 20 mete sono già arricchite dall'automazione Codex (lingua +
// scadenze); le 35 nuove sono seed grezzo da arricchire.
//
// Campi REALI dal DB (lista): paese, universita, posti, durata (mesi),
//   livello, coordinatore (promotore = Gianluca Scarchillo per tutta la
//   Facoltà). Area = ISCED Law (0421), comune a Giurisprudenza.
//
// Campi DA ARRICCHIRE col bot (vuoti per le 35 nuove): requisitoLingua, scadenzeOspitante.
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
    codiceErasmus: "A  SALZBUR01",
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
    linkSito: "https://www.uni-salzburg.at",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-innsbruck",
    universita: "Leopold-Franzens-Universität Innsbruck",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "A  INNSBRU01",
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
    linkSito: "https://www.uibk.ac.at/en/international-relations-office/student-mobility/incoming/mobility-programmes/erasmus-studmob/",

    notaDisponibilita: "Please note that the UIBK does not have a Faculty of Medicine because there is a separate Medical University of Innsbruck in the city.",
    linkCatalogo: "https://lfuonline.uibk.ac.at/public/lfuonline_lv.home",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-ulb-bxl",
    universita: "Université Libre de Bruxelles",
    citta: "Bruxelles",
    paese: "Belgio",
    codiceErasmus: "B  BRUXEL04",
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
    linkSito: "https://www.ulb.be/",

    notaDisponibilita: "Please note that our University does not accept free movers.",
    notePratiche: "Posti totali dell'accordo: 8 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-sofia",
    universita: "Sofiiki Universitet \"Sveti Kliment Ohridski\"",
    citta: "Sofia",
    paese: "Bulgaria",
    codiceErasmus: "BG SOFIA06",
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
    linkSito: "http://www.uni-sofia.bg",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ius-assas-p2",
    universita: "Université Panthéon-Assas (Paris II)",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F  PARIS002",
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
    notaDisponibilita: "En tant qu'étudiant en programme d'échange, vous avez accès à des matières allant de la 1re à la 4e année d'études (1re, 2e, 3e année de licence et 1re année de master).",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello Magistrale."
  },
  {
    id: "sap-ius-amu",
    universita: "Aix-Marseille Université (AMU)",
    citta: "Aix-en-Provence / Marsiglia",
    paese: "Francia",
    codiceErasmus: "F  MARSEIL84",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese presso la Faculty of Law" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; per la Faculty of Law e' richiesto anche Francese B1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 1 aprile 2026" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 21 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 21 ottobre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-bordeaux",
    universita: "Université de Bordeaux",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F  BORDEAU58",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "minimo per la Faculty of Law and Political Science; B2 raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-lmu-muc",
    universita: "Ludwig-Maximilians-Universität München",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D  MUNCHEN01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "entro l'inizio degli studi; almeno B1 al momento della domanda" },
        { lingua: "Inglese", livello: "B2", condizione: "entro l'inizio degli studi per corsi in inglese; almeno B1 al momento della domanda" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.lmu.de/de/studium/studienangebot/angebote-fuer-internationale-gast-und-austauschstudierende/erasmus-und-lmuexchange/",

    notaDisponibilita: "Erasmus+, UK/SEMP-Studierende müssen mindestens 60% ihrer Kurse in dem Fachbereich des Erasmus+/UK/SEMP-Austauschabkommens belegen.",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-hu-berlin",
    universita: "Humboldt-Universität zu Berlin",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "D  BERLIN13",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 5, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per la Facolta' di Giurisprudenza" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 5. Solo livello triennale."
  },
  {
    id: "sap-ius-tubingen",
    universita: "Eberhard-Karls-Universität Tübingen",
    citta: "Tubinga",
    paese: "Germania",
    codiceErasmus: "D  TUBINGE01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 8, livello: "L", note: "" },
      { numero: 4, mesi: 8, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "minimo obbligatorio nella lingua di insegnamento; B2 raccomandato" },
        { lingua: "Inglese", livello: "B1", condizione: "minimo obbligatorio nella lingua di insegnamento; B2 raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno)", periodo: "aprile - maggio" },
        { cosa: "Nomination/Application (primavera)", periodo: "ottobre - novembre" }
      ],
    linkSito: "https://uni-tuebingen.de/international/studierende-aus-dem-ausland/erasmus-und-austausch-nach-tuebingen/",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-koln",
    universita: "Universität zu Köln",
    citta: "Colonia",
    paese: "Germania",
    codiceErasmus: "D  KOLN01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B2", condizione: "consigliato per il Regular Exchange Programme" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    linkCatalogo: "https://klips2.uni-koeln.de/co/ee/ui/ca2/app/desktop/",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-warsaw",
    universita: "University of Warsaw",
    citta: "Varsavia",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese o Polacco", livello: "B2", condizione: "per incoming exchange students" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ius-porto",
    universita: "Universidade do Porto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P  PORTO02",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Portoghese", livello: "B2", condizione: "per corsi in portoghese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 21 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-coimbra",
    universita: "Universidade de Coimbra",
    citta: "Coimbra",
    paese: "Portogallo",
    codiceErasmus: "P  COIMBRA01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" },
      { numero: 2, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "livello raccomandato per la maggior parte dei corsi" },
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "tra 1 gennaio e 30 giugno" },
        { cosa: "Application (autunno)", periodo: "tra 1 marzo e 15 luglio" },
        { cosa: "Application (primavera)", periodo: "tra 1 settembre e 15 dicembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-bucuresti",
    universita: "Universitatea din Bucuresti",
    citta: "Bucarest",
    paese: "Romania",
    codiceErasmus: "RO BUCURES09",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per seguire i corsi e superare gli esami" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    linkSito: "http://www.unibuc.ro",

    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-ius-ljubljana",
    universita: "Univerza v Ljubljani (University of Ljubljana)",
    citta: "Lubiana",
    paese: "Slovenia",
    codiceErasmus: "SI LJUBLJA01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Sloveno o Inglese", livello: "B2", condizione: "per studiare presso l'Universita di Ljubljana" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.uni-lj.si",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-olomouc",
    universita: "Univerzita Palackého v Olomouci",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "se il livello minimo dell'accordo non e soddisfatto o per corsi KAA" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 31 maggio per studenti senza visto; entro 30 aprile per studenti con visto" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "https://international.upol.cz/vymenne-pobyty/jsem-student/studium/erasmus-evropa/",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-complutense",
    universita: "Universidad Complutense de Madrid",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID03",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo generale CEFR per studenti Erasmus incoming; ogni facolta puo avere requisiti specifici" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "15 marzo - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 15 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 20 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-uam-madrid",
    universita: "Universidad Autónoma de Madrid",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E  MADRID04",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "obbligatorio certificato per studenti nominati alla Faculty of Law" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1-30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1-30 settembre" },
        { cosa: "Application (autunno)", periodo: "1-31 maggio" },
        { cosa: "Application (primavera)", periodo: "1-31 ottobre" }
      ],
    linkSito: "https://www.uam.es/uam/international/incoming/estudiantes-intercambio",

    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale (esiste un accordo separato per PhD)."
  },
  {
    id: "sap-ius-stockholm",
    universita: "Stockholms Universitet",
    citta: "Stoccolma",
    paese: "Svezia",
    codiceErasmus: "S  STOCKHO01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2-C1", condizione: "per corsi di giurisprudenza in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    linkSito: "https://www.su.se/english/education/exchange-students",

    linkCatalogo: "https://www.su.se/english/education/course-catalogue",
    notePratiche: "Posti totali dell'accordo: 1. Solo livello triennale. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-stetienne",
    universita: "Université Jean Monnet Saint-Étienne",
    citta: "Saint-Étienne",
    paese: "Francia",
    codiceErasmus: "F  ST-ETIE01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "livello minimo richiesto per la maggior parte dei corsi; C1 per alcuni programmi specifici" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno e primavera)", periodo: "entro 20 maggio" },
        { cosa: "Application / registrazione MoveOn (autunno e primavera)", periodo: "entro 15 giugno" }
      ],
    linkSito: "https://www.univ-st-etienne.fr/fr/international-1-1/etudiant-international-incoming-student.html",

    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-uphf",
    universita: "Université Polytechnique Hauts-de-France",
    citta: "Valenciennes",
    paese: "Francia",
    codiceErasmus: "F  VALENCI01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.uphf.fr/",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2023/24"
  },
  {
    id: "sap-ius-lehavre",
    universita: "Université Le Havre Normandie",
    citta: "Le Havre",
    paese: "Francia",
    codiceErasmus: "F  LE-HAVR11",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno / anno accademico)", periodo: "entro 15 gennaio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 settembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-tours",
    universita: "Université de Tours",
    citta: "Tours",
    paese: "Francia",
    codiceErasmus: "F  TOURS01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno / anno accademico)", periodo: "24 marzo 2025 - 30 maggio 2025" },
        { cosa: "Nomination (primavera)", periodo: "6 ottobre 2025 - 14 novembre 2025" },
        { cosa: "Application / pre-registrazione (autunno / anno accademico)", periodo: "31 marzo 2025 - 6 giugno 2025" },
        { cosa: "Application / pre-registrazione (primavera)", periodo: "6 ottobre 2025 - 21 novembre 2025" }
      ],
    linkSito: "https://international.univ-tours.fr/",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ius-lyon3",
    universita: "Université Jean Moulin (Lyon III)",
    citta: "Lione",
    paese: "Francia",
    codiceErasmus: "F  LYON03",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per Law nel programma DEUF" },
        { lingua: "Inglese", livello: "B2", condizione: "per SELF / corsi in inglese, equivalente TOEFL iBT 80 o IELTS 6.5" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 13 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 17 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 18 dicembre" }
      ],
    linkSito: "https://www.univ-lyon3.fr/exchange-students",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-rouen",
    universita: "Université de Rouen Normandie",
    citta: "Rouen",
    paese: "Francia",
    codiceErasmus: "F  ROUEN01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato; corsi ed esami prevalentemente in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 11 marzo al 12 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "dal 11 marzo al 14 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 26 agosto al 4 ottobre" },
        { cosa: "Application (primavera)", periodo: "dal 26 agosto al 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Scadenze: basate su 2024/25"
  },
  {
    id: "sap-ius-lille",
    universita: "Université de Lille",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F  LILLE103",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/anno)", periodo: "entro 10 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-greifswald",
    universita: "Universität Greifswald",
    citta: "Greifswald",
    paese: "Germania",
    codiceErasmus: "D  GREIFS01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "https://www.uni-greifswald.de/international/incoming/austauschstudium/programmstudierende-erasmus-hochschulaustausch-1/",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-freiburg",
    universita: "Albert-Ludwigs-Universität Freiburg",
    citta: "Friburgo",
    paese: "Germania",
    codiceErasmus: "D  FREIBUR01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "fortemente raccomandato; prova di conoscenza del tedesco puo' essere richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 18 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 18 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-hannover",
    universita: "Gottfried Wilhelm Leibniz Universität Hannover",
    citta: "Hannover",
    paese: "Germania",
    codiceErasmus: "D  HANNOVE01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi esclusivamente in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi esclusivamente in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "http://www.uni-hannover.de",

    notaDisponibilita: "Research projects can only be carried out and included in your Learning Agreement if you have found a supervisor at Leibniz University Hannover beforehand.",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-saarland",
    universita: "Universität des Saarlandes",
    citta: "Saarbrücken",
    paese: "Germania",
    codiceErasmus: "D  SAARBRU01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "raccomandato per corsi undergraduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    linkSito: "https://www.uni-saarland.de/global/welcome-center/austausch-freemover/erasmus-programm.html",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-regensburg",
    universita: "Universität Regensburg",
    citta: "Ratisbona",
    paese: "Germania",
    codiceErasmus: "D  REGENSB01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "1 settembre - 15 novembre" }
      ],
    linkSito: "http://www.uni-regensburg.de",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-bremen",
    universita: "Universität Bremen",
    citta: "Brema",
    paese: "Germania",
    codiceErasmus: "D  BREMEN01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 9, livello: "L", note: "" },
      { numero: 4, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "1-31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 15 novembre" }
      ],
    linkSito: "http://www.uni-bremen.de/Erasmus",

    linkCatalogo: "https://www.uni-bremen.de/en/studies/starting-your-studies/course-catalog",
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-marburg",
    universita: "Philipps-Universität Marburg",
    citta: "Marburgo",
    paese: "Germania",
    codiceErasmus: "D  MARBURG01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 10, livello: "L", note: "" },
      { numero: 1, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi di Giurisprudenza in tedesco" },
        { lingua: "Tedesco", livello: "C1", condizione: "per corsi di Giurisprudenza in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 10 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 10 gennaio" }
      ],
    linkSito: "https://www.uni-marburg.de/en",

    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-athens",
    universita: "National and Kapodistrian University of Athens (NKUA)",
    citta: "Atene",
    paese: "Grecia",
    codiceErasmus: "G  ATHINE01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "secondo accordo bilaterale" },
        { lingua: "Inglese", livello: "B2", condizione: "secondo accordo bilaterale" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 15 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-piraeus",
    universita: "Panepistimio Pireos (University of Piraeus)",
    citta: "Pireo",
    paese: "Grecia",
    codiceErasmus: "G  PIREAS01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti nominati/incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    linkSito: "http://www.unipi.gr/",

    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). || Scadenze: basate su 2025/26"
  },
  {
    id: "sap-ius-vgtu-vilnius",
    universita: "Vilniaus Gedimino Technikos Universitetas (VGTU)",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS02",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 6, livello: "L", note: "" },
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificato richiesto per exchange students" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "http://www.vgtu.lt",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli)."
  },
  {
    id: "sap-ius-gdansk",
    universita: "Uniwersytet Gdanski",
    citta: "Danzica",
    paese: "Polonia",
    codiceErasmus: "PL GDANSK01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "language proficiency certificate richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 29 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre 2026" }
      ],
    linkSito: "http://www.2.univ.gda.pl",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-jagiellonski",
    universita: "Uniwersytet Jagiellonski",
    citta: "Cracovia",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per Erasmus+ Studies; eccezioni B2/C1 per alcune unita'" },
        { lingua: "Polacco", livello: "B2", condizione: "per corsi condotti in polacco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-wroclaw",
    universita: "Uniwersytet Wroclawski",
    citta: "Breslavia",
    paese: "Polonia",
    codiceErasmus: "PL WROCLAW01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "English knowledge confirmation richiesta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    linkSito: "http://www.uni.wroc.pl",

    linkCatalogo: "https://international.uni.wroc.pl/en/incoming-exchange-students/university-guidelines-all-exchange-students#timetabes-for-2024-2025-academic-year",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-olsztyn",
    universita: "Uniwersytet Warminsko-Mazurski w Olsztynie",
    citta: "Olsztyn",
    paese: "Polonia",
    codiceErasmus: "PL OLSZTYN01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 4, mesi: 10, livello: "L", note: "" },
      { numero: 4, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi Erasmus+ incoming in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 4 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-ase-bucuresti",
    universita: "Academia de Studii Economice din Bucuresti",
    citta: "Bucarest",
    paese: "Romania",
    codiceErasmus: "RO BUCURES04",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "livello minimo per corsi in inglese; B2 raccomandato" },
        { lingua: "Francese", livello: "B1", condizione: "livello minimo per corsi in francese; B2 raccomandato" },
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo per corsi in tedesco; B2 raccomandato" },
        { lingua: "Romeno", livello: "B1", condizione: "livello minimo per corsi in romeno; B2 raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 luglio" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 30 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "HTTP://WWW.ASE.RO",

    notaDisponibilita: "From our perspective you can choose any courses, from any faculty, year and cycle of studies",

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-paneuropska",
    universita: "Paneuropska Vysoka Skola",
    citta: "Bratislava",
    paese: "Slovacchia",
    codiceErasmus: "SK BRATISL08",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; esentati gli studenti con buona padronanza di slovacco o ceco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-sanjorge",
    universita: "Fundación Universidad San Jorge",
    citta: "Saragozza",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ07",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello raccomandato per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "livello raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno intero)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno/anno intero)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    linkSito: "http://www.usj.es",

    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-avila",
    universita: "Universidad Católica de Ávila \"Santa Teresa de Jesús\"",
    citta: "Ávila",
    paese: "Spagna",
    codiceErasmus: "E  AVILA01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" },
      { numero: 3, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello raccomandato per corsi in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Documentazione (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Documentazione (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.ucavila.es/",

    linkCatalogo: "https://www.ucavila.es/cursos/?_filtrado_grados=grados",
    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-uclm",
    universita: "Universidad de Castilla-La Mancha",
    citta: "Ciudad Real",
    paese: "Spagna",
    codiceErasmus: "E  CIUDA-R01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 5, livello: "L", note: "" },
      { numero: 1, mesi: 5, livello: "LM", note: "" }
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
    id: "sap-ius-upna",
    universita: "Universidad Pública de Navarra (UPNA)",
    citta: "Pamplona",
    paese: "Spagna",
    codiceErasmus: "E  PAMPLON02",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" },
      { numero: 1, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 24 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 14 novembre" }
      ],
    linkSito: "https://www.unavarra.es/en/sites/international/internacionalizacion-cooperacion.html",
    notaDisponibilita: "The mobility in materia di doctorado, tanto de estudiantes de la UPNA, como de los procedentes de otras instituciones de educación superior, nacionales o extranjeras, que sean aceptados por la UPNA , será competencia de la Escuela de Doctorado de la Navarra (EDONA)",
    notePratiche: "Posti totali dell'accordo: 1 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "sap-ius-zaragoza",
    universita: "Universidad de Zaragoza",
    citta: "Saragozza",
    paese: "Spagna",
    codiceErasmus: "E  ZARAGOZ01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" },
      { numero: 3, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 20 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 7 novembre" }
      ],
    linkSito: "HTTP://WWW.UNIZAR.ES",

    nonTrovabile: { requisitoLingua: { origine: "pipeline V1", nota: "cercato senza esito, fonte e data non registrate" } },

    notePratiche: "Posti totali dell'accordo: 3 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2025/26 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "sap-ius-valladolid",
    universita: "Universidad de Valladolid",
    citta: "Valladolid",
    paese: "Spagna",
    codiceErasmus: "E  VALLADO01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 1, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo; con A2 richiesto corso intensivo" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato per corsi in inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi degli International Semester Programmes" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    notePratiche: "Posti totali dell'accordo: 1. Solo livello triennale."
  },
  {
    id: "sap-ius-malaga",
    universita: "Universidad de Málaga",
    citta: "Málaga",
    paese: "Spagna",
    codiceErasmus: "E  MALAGA01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo indicato per iniziare gli studi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno / anno intero)", periodo: "da metà aprile a metà giugno" },
        { cosa: "Nomination (primavera)", periodo: "da metà aprile a fine ottobre" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale."
  },
  {
    id: "sap-ius-salamanca",
    universita: "Universidad de Salamanca",
    citta: "Salamanca",
    paese: "Spagna",
    codiceErasmus: "E  SALAMAN02",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 10, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 15 aprile al 5 luglio 2026" },
        { cosa: "Application (primavera)", periodo: "dal 15 aprile al 5 luglio 2026" }
      ],
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale."
  },
  {
    id: "sap-ius-leon",
    universita: "Universidad de León",
    citta: "León",
    paese: "Spagna",
    codiceErasmus: "E  LEON01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 10, livello: "L", note: "" },
      { numero: 2, mesi: 10, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "livello raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application/registrazione (primavera)", periodo: "entro 15 novembre" }
      ],
    linkSito: "https://www.unileon.es/",

    notaDisponibilita: "Titulaciones de Grado Titulaciones de Posgrado Subjects in English // Subjects in English Friendly Bachelor/Degree subjects Master subjects",

    linkCatalogo: "https://www.unileon.es/internacional/estudiantes/movilidad-internacional-entrantes/oferta-academica",
    notePratiche: "Posti totali dell'accordo: 2 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-granada",
    universita: "Universidad de Granada",
    citta: "Granada",
    paese: "Spagna",
    codiceErasmus: "E  GRANADA01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 3, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per la maggior parte dei corsi di laurea" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 15 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 al 31 ottobre" }
      ],
    linkSito: "https://www.ugr.es/",

    notaDisponibilita: "Ten en cuenta que pueden encontrarse restricciones en algunas áreas de CC.Salud, Medicina, Odontología, Psicología y para Bellas Artes se pueden exigir conocimientos previos o portfolio. Consulta con la facultad correspondiente.",

    linkCatalogo: "https://ugrcat.ugr.es/",
    notePratiche: "Posti totali dell'accordo: 3. Solo livello triennale."
  },
  {
    id: "sap-ius-laspalmas",
    universita: "Universidad de Las Palmas de Gran Canaria",
    citta: "Las Palmas de Gran Canaria",
    paese: "Spagna",
    codiceErasmus: "E  LAS-PAL01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 5, mesi: 9, livello: "L", note: "" },
      { numero: 5, mesi: 9, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "richiesto per alcune scuole/facolta' e raccomandato per corsi principalmente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 24 febbraio al 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 2 ottobre al 10 novembre 2026" },
        { cosa: "Application/documenti (autunno)", periodo: "entro 31 luglio" },
        { cosa: "Application/documenti (primavera)", periodo: "entro 30 gennaio" }
      ],
    linkSito: "https://internacional.ulpgc.es/movilidad-incoming/estudiantes-incoming/estudia-en-la-ulpgc-incoming/estudiantes-de-intercambio/",
    notePratiche: "Posti totali dell'accordo: 5 (condivisi tra i livelli). Disponibile anche per PhD/Specializzandi."
  },
  {
    id: "sap-ius-cadiz",
    universita: "Universidad de Cádiz",
    citta: "Cadice",
    paese: "Spagna",
    codiceErasmus: "E  CADIZ01",
    dipartimentoCf: "Giurisprudenza",
    areeDisciplinari: [{ codice: "0421", nome: "Law" }],
    coordinatoreCf: "Scarchillo Gianluca",
    posti: [
      { numero: 2, mesi: 9, livello: "L", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "richiesto all'inizio del semestre; B2 per Medicina" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 25 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    linkSito: "https://internacional.uca.es/movilidad-entrante/estudiantes/erasmus-ka103-incoming/",
    notaDisponibilita: "Movilidad de estudiantes para estudios del programa Erasmus+ para permanecer en la Universidad de Cádiz durante 1 ó 2 semestres.",
    notePratiche: "Posti totali dell'accordo: 2. Solo livello triennale."
  }
];
