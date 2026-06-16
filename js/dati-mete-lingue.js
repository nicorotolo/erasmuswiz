// ============================================================
// DATI DELLE METE ERASMUS - Lingue e culture orientali
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e file ODS "Lista destinazioni Erasmus+ per studio a.a. 2026/2027".
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

const METE = [
  {
    id: "00-tr-istanbu01-0222-history-and-archaeology",
    universita: "Boğaziçi University - Department of History",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0222",
        nome: "History and Archaeology"
      }
    ],
    coordinatoreCf: "Costantini Vera",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per tutti gli studenti incoming non madrelingua inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16634507",
    linkSito: "https://intl.bogazici.edu.tr/application-2",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "01-b-gent01-0230-languages",
    universita: "Universiteit Gent - Faculty of Arts and Philosophy - Dep. of Languages and Cultures",
    citta: "Gent",
    paese: "Belgio",
    codiceErasmus: "B GENT01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Dahnhardt Thomas Wolfang Peter",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per seguire corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23140774",
    linkSito: "https://www.ugent.be/lw/en/exchange",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "02-e-alicant01-0231-languages-acquisition",
    universita: "Universidad de Alicante - Facultad de Filosofía y Letras",
    citta: "Alicante",
    paese: "Spagna",
    codiceErasmus: "E ALICANT01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0231",
        nome: "Languages Acquisition"
      }
    ],
    coordinatoreCf: "Ghersetti Antonella",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26987624",
    linkSito: "https://sri.ua.es/en/movilidad/incoming-students/fact-sheet.html",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "03-e-sevilla01-0230-languages",
    universita: "Universidad de Sevilla- FILOLOGÍAS INTEGRADAS -FACULTAD DE FILOLOGÍA",
    citta: "Siviglia",
    paese: "Spagna",
    codiceErasmus: "E SEVILLA01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Ghersetti Antonella",
    posti: [
      {
        numero: 2,
        mesi: 6,
        livello: "L",
        note: "e  solo 1° sem."
      },
      {
        numero: 2,
        mesi: 6,
        livello: "PhD",
        note: "e  solo 1° sem."
      }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 17 marzo al 27 giugno 2025" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 settembre al 29 novembre 2025" },
        { cosa: "Application (autunno)", periodo: "dal 17 marzo al 27 giugno 2025" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 29 novembre 2025" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/25783467",
    linkSito: "https://www.us.es/internacional/oficina-welcome",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e PhD solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "04-f-paris014-0230-languages",
    universita: "Sciences Po",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS014",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Ghersetti Antonella",
    posti: [
      {
        numero: 6,
        mesi: 4,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi undergraduate in francese" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "dal 3 al 24 marzo 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 22 settembre al 6 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 7 aprile 2026" },
        { cosa: "Application (primavera)", periodo: "entro 8 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254615",
    linkSito: "https://www.sciencespo.fr/en/academics/exchange-programme/coming/",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 6 x 4 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "05-tr-ankara04-0222-history-and-archaeology",
    universita: "Orta Dogu Teknik Universitesi - Middle East Technical University - Department of History",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA04",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0222",
        nome: "History and Archaeology"
      }
    ],
    coordinatoreCf: "Kappler Matthias",
    posti: [
      {
        numero: 2,
        mesi: 6,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 6,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per seguire corsi a METU" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 31 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16627884",
    linkSito: "https://ico.metu.edu.tr/erasmus-ka131-erasmus-european-mobility-program",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "06-tr-istanbu21-0230-languages",
    universita: "Yeditepe University - Department of Turkish Language and Literature",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU21",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Kappler Matthias",
    posti: [
      {
        numero: 3,
        mesi: 4,
        livello: "L",
        note: "e 1x4"
      },
      {
        numero: 3,
        mesi: 4,
        livello: "LM",
        note: "e 1x4"
      }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16635981",
    linkSito: "https://international.yeditepe.edu.tr/en/international/erasmus-incoming-students",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 3x4 L e 1x4 LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "07-tr-ankara01-0222-history-and-archaeology",
    universita: "Ankara University - Faculty of Languages, History and Geography",
    citta: "Ankara",
    paese: "Turchia",
    codiceErasmus: "TR ANKARA01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0222",
        nome: "History and Archaeology"
      }
    ],
    coordinatoreCf: "Kappler Matthias",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16624958",
    linkSito: "https://iso.ankara.edu.tr/en/2026/05/13/2026-2027-fall-term-ankara-university-incoming-exchange-student-nomination-period-is-now-open-2/",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "08-d-munchen01-0230-languages",
    universita: "LMU - Ludwig-Maximilians-Universität München - Institut für Sinologie",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D MUNCHEN01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: "solo 1° sem."
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: "solo 1° sem."
      }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "richiesto all'inizio degli studi per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254437",
    linkSito: "https://www.lmu.de/en/study/all-degrees-and-programs/programs-for-international-visiting-students/erasmus-and-lmuexchange/how-to-apply/",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "09-f-paris178-0230-languages",
    universita: "INALCO - Institut National des Langues et Civilisations Orientales - Departments of Arabic, Chinese, Hebrew, Japanese and Urdu Tibetan Sanskrit Studies",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS178",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 3,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 3,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi di lingua e civilta" },
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi tematici e disciplinari" },
        { lingua: "Francese", livello: "C1", condizione: "per corsi professionalizzanti" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi professionalizzanti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "2 marzo - 31 marzo 2026" },
        { cosa: "Application (autunno)", periodo: "6 aprile - 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "7 settembre - 4 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "5 ottobre - 1 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/24658609",
    linkSito: "https://www.inalco.fr/en/exchange-students-inalco",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "10-d-heidelb01-0232-literature-and-linguistics",
    universita: "Ruprecht-Karls-Universität Heidelberg - Centre of East Asian Studies",
    citta: "Heidelberg",
    paese: "Germania",
    codiceErasmus: "D HEIDELB01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0232",
        nome: "Literature and linguistics"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: "solo 1° sem."
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: "solo 1° sem."
      }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254423",
    linkSito: "https://www.uni-heidelberg.de/en/international-affairs/erasmus/incoming",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "11-irlcork01-0230-languages",
    universita: "University College Cork - UCC - Department of Italian",
    citta: "Cork",
    paese: "Irlanda",
    codiceErasmus: "IRLCORK01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 1,
        mesi: 9,
        livello: "L",
        note: ""
      }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 9 maggio 2026" },
        { cosa: "Application (autunno)", periodo: "entro 6 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 12 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 10 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/13944996",
    linkSito: "https://www.ucc.ie/en/international/studyatucc/incomingerasmusstudents/",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 9 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "12-f-lyon03-0230-languages",
    universita: "Université Jean Moulin Lyon 3 - Faculty of Languages",
    citta: "Lione",
    paese: "Francia",
    codiceErasmus: "F LYON03",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 2,
        mesi: 9,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 9,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per il programma DEUF" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254563",
    linkSito: "https://www.univ-lyon3.fr/exchange-students",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 9. Lingua e scadenze ospitante da completare nei batch successivi. || Scadenze: basate su 2025/26"
  },
  {
    id: "13-a-wien01-0230-languages",
    universita: "Universität Wien - Department for Sinology and Institut für Südasien, Tibet und Buddhismuskunde",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 1,
        mesi: 6,
        livello: "L",
        note: ""
      },
      {
        numero: 1,
        mesi: 6,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254350",
    linkSito: "https://international.univie.ac.at/en/information-for-incoming-exchange-students/exchange-semester-at-the-university-of-vienna",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "14-b-leuven01-0230-languages",
    universita: "Katholieke Universiteit Leuven - Faculty of Arts",
    citta: "Leuven",
    paese: "Belgio",
    codiceErasmus: "B LEUVEN01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi undergraduate" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi graduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 25 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254362",
    linkSito: "https://www.arts.kuleuven.be/english/education/brussels/nomination-application-and-registration",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "15-e-barcelo02-0232-literature-and-linguistics",
    universita: "Universitat Autònoma de Barcelona - Facultat de Traducciò i d'Interpretaciò",
    citta: "Barcellona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0232",
        nome: "Literature and Linguistics"
      }
    ],
    coordinatoreCf: "Magagnin Paolo",
    posti: [
      {
        numero: 4,
        mesi: 10,
        livello: "L",
        note: ""
      },
      {
        numero: 4,
        mesi: 10,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "fortemente raccomandato per studenti incoming della Facultat de Traduccio i d'Interpretacio" },
        { lingua: "Spagnolo", livello: "C1", condizione: "obbligatorio per iscriversi a insegnamenti di master" },
        { lingua: "Inglese", livello: "B2", condizione: "obbligatorio per iscriversi a insegnamenti di master" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno)", periodo: "1 marzo - 15 maggio" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254470",
    linkSito: "https://www.uab.cat/web/mobility-international-exchange-1345680336097.html",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "16-s-lund01-0220-humanities",
    universita: "Lund Universitet - Joint Faculties of Humanties and Theology",
    citta: "Lund",
    paese: "Svezia",
    codiceErasmus: "S LUND01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0220",
        nome: "Humanities"
      }
    ],
    coordinatoreCf: "Mazza Caterina",
    posti: [
      {
        numero: 1,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 1,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese, equivalente a IELTS 6.5 / TOEFL 90" },
        { lingua: "Svedese", livello: "C1", condizione: "per corsi in svedese, oppure B2 secondo il singolo corso" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 aprile" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254741",
    linkSito: "http://www.ht.lu.se",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "17-b-leuven01-0230-languages",
    universita: "Katholieke Universiteit Leuven - Faculty of Arts",
    citta: "Leuven",
    paese: "Belgio",
    codiceErasmus: "B LEUVEN01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Mazza Caterina",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi undergraduate" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi graduate" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 25 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 25 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254364",
    linkSito: "https://www.arts.kuleuven.be/english/education/brussels/nomination-application-and-registration",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "18-e-madrid04-0230-languages",
    universita: "Universidad Autonoma de Madrid - Faculty of Philosophy and Arts",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID04",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0230",
        nome: "Languages"
      }
    ],
    coordinatoreCf: "Mazza Caterina",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo richiesto per corsi in spagnolo; B2 fortemente raccomandato" },
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Hispanic Studies e Modern Languages, Culture and Communication presso Faculty of Philosophy and Arts" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1-30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1-30 settembre" },
        { cosa: "Application (autunno)", periodo: "1-31 maggio" },
        { cosa: "Application (primavera)", periodo: "1-31 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254508",
    linkSito: "https://www.uam.es/uam/en/internacional/movilidad",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5, L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "19-f-lyon61-0312-political-sciences-and-civics",
    universita: "Sciences Po Lyon - IEP Lyon",
    citta: "Lione",
    paese: "Francia",
    codiceErasmus: "F LYON61",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0312",
        nome: "Political sciences and civics"
      }
    ],
    coordinatoreCf: "Mazza Caterina",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per corsi in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese / DFES" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254564",
    linkSito: "http://www.sciencespo-lyon.fr",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "20-d-berlin01-0232-literature-and-linguistics",
    universita: "Freie Universitaet Berlin - Department of East Asia and the Middle East",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "D BERLIN01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0232",
        nome: "Literature and linguistics"
      }
    ],
    coordinatoreCf: "Mazza Caterina",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "L",
        note: ""
      },
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per eventuali corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254396",
    linkSito: "https://www.fu-berlin.de/en/studium/international/studium_fu/auslandssemester/erasmus_in/infos_incomingstudents",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2x5 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "21-f-grenobl23-0312-political-sciences-and-civics",
    universita: "Sciences Po Grenoble UGA",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "F GRENOBL23",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0312",
        nome: "Political Sciences and Civics"
      }
    ],
    coordinatoreCf: "Miccoli Dario",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2.2", condizione: "per corsi in inglese" },
        { lingua: "Francese", livello: "B2.2", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29573494",
    linkSito: "https://en.sciencespo-grenoble.fr/international/venir-etudier-sciences-po-grenoble-uga",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi. || Scadenze: basate su 2025/26"
  },
  {
    id: "22-f-grenobl23-0312-political-sciences-and-civics",
    universita: "Sciences Po Grenoble UGA",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "F GRENOBL23",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0312",
        nome: "Political Sciences and Civics"
      }
    ],
    coordinatoreCf: "Miccoli Dario",
    posti: [
      {
        numero: 2,
        mesi: 5,
        livello: "LM",
        note: "TRANS-MED"
      }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2.2", condizione: "per corsi in inglese" },
        { lingua: "Francese", livello: "B2.2", condizione: "per corsi in francese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29533083",
    linkSito: "https://en.sciencespo-grenoble.fr/international/venir-etudier-sciences-po-grenoble-uga",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM TRANS-MED. Lingua e scadenze ospitante da completare nei batch successivi. || Scadenze: basate su 2025/26"
  },
  {
    id: "23-d-konstan01-0222-history-and-archaeology",
    universita: "Universität Konstanz - Department of History",
    citta: "Costanza",
    paese: "Germania",
    codiceErasmus: "D KONSTAN01",
    dipartimentoCf: "Lingue e culture orientali",
    areeDisciplinari: [
      {
        codice: "0222",
        nome: "History and Archaeology"
      }
    ],
    coordinatoreCf: "Simoni Marcella",
    posti: [
      {
        numero: 1,
        mesi: 5,
        livello: "LM",
        note: ""
      }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28257128",
    linkSito: "https://www.geschichte.uni-konstanz.de/en/",
    notePratiche: "Aperta a: Dipartimento di Studi sull'Asia e sull'Africa Mediterranea [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  }
];

if (typeof window !== "undefined") {
  window.METE_LINGUE = METE;
}
