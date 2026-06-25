// ============================================================
// DATI DELLE METE ERASMUS - Dipartimento di Scienze Molecolari e Nanosistemi
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e lista destinazioni Erasmus+ per studio a.a. 2026/2027.
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

var METE = [
  {
    id: "00-lt-vilnius01-0531-chemistry",
    universita: "Vilnius University - Faculty of Chemistry and Geosciences - Institute of Chemistry",
    citta: "Vilnius",
    paese: "Lituania",
    codiceErasmus: "LT VILNIUS01",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Back Michele",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Lingua del corso scelto", livello: "B2", condizione: "per la lingua in cui e' insegnato il corso scelto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28242830",
    linkSito: "https://www.vu.lt",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "01-e-barcelo02-0531-chemistry",
    universita: "Universitat Autonoma de Barcelona - Facultat de Ciences",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Canton Patrizia",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Catalano", livello: "B1", condizione: "raccomandato per lezioni in catalano" },
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per lezioni in spagnolo" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato per lezioni in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "1 marzo - 15 maggio" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254468",
    linkSito: "https://www.uab.cat",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "02-d-jena01-0533-physics",
    universita: "Friedrich-Schiller-Universitat Jena - Faculty of Physics and Astronomy",
    citta: "Jena",
    paese: "Germania",
    codiceErasmus: "D JENA01",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "De Fazio Domenico",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 gennaio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29510767",
    linkSito: "https://www.uni-jena.de",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "03-nl-nijmege01-0533-physics",
    universita: "Radboud University Nijmegen - Insitute for Molecules and Materials",
    citta: "Nijmegen",
    paese: "Paesi Bassi",
    codiceErasmus: "NL NIJMEGE01",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0533", nome: "Physics" }],
    coordinatoreCf: "Fazio Peppino",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "livello minimo per exchange students" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 23 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 23 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28242460",
    linkSito: "https://www.ru.nl",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "04-f-bordeau54-0711-chemical-engineering-and-processes",
    universita: "Institut Polytechnique de Bordeaux (ENSCBP) - ENSTBB (Biotechnology), ENSMAC (Chemistry), ENSEIRB MATMECA (electronics, computer Sciences), ENSEGID (Environnmental Sciences)",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F BORDEAU54",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0711", nome: "Chemical Engineering and Processes" }],
    coordinatoreCf: "Polo Federico",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26927327",
    linkSito: "https://www.bordeaux-inp.fr",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "05-f-bordeau58-0531-chemistry",
    universita: "Universite de Bordeaux - College Sciences and Technology",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F BORDEAU58",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Polo Federico",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi in francese in science and technology" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese in science and technology" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29130773",
    linkSito: "https://www.u-bordeaux.fr",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "06-d-aachen-01-0531-chemistry",
    universita: "RWTH Aachen University (Rheinisch-Westfaelische Technische Hochschule Aachen) - Department of Chemistry",
    citta: "Aachen",
    paese: "Germania",
    codiceErasmus: "D AACHEN 01",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [{ codice: "0531", nome: "Chemistry" }],
    coordinatoreCf: "Polo Federico",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "" },
      { numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B1.1", condizione: "generalmente sufficiente in base alla scelta dei corsi" },
        { lingua: "Tedesco o Inglese", livello: "B2.1", condizione: "in base alla scelta dei corsi e alla faculty" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 31 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26908864",
    linkSito: "https://www.rwth-aachen.de",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L, LM solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "07-d-aachen-01-0713-0714-electricity-and-energy-electronics-and-automation",
    universita: "RWTH Aachen University (Rheinisch-Westfaelische Technische Hochschule Aachen) - Faculty of Electrical Engineering and Information Technology",
    citta: "Aachen",
    paese: "Germania",
    codiceErasmus: "D AACHEN 01",
    dipartimentoCf: "Scienze Molecolari e Nanosistemi",
    areeDisciplinari: [
      { codice: "0713", nome: "Electricity and energy" },
      { codice: "0714", nome: "Electronics and automation" }
    ],
    coordinatoreCf: "Polo Federico",
    posti: [
      { numero: 4, mesi: 5, livello: "L", note: "" },
      { numero: 4, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco o Inglese", livello: "B1.1", condizione: "generalmente sufficiente in base alla scelta dei corsi" },
        { lingua: "Tedesco o Inglese", livello: "B2.1", condizione: "in base alla scelta dei corsi e alla faculty" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno)", periodo: "dal 1 aprile al 31 maggio" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 31 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26909356",
    linkSito: "https://www.elektrotechnik.rwth-aachen.de",
    notePratiche: "Aperta a: Dipartimento di Scienze Molecolari e Nanosistemi [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L, LM solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  }
];
