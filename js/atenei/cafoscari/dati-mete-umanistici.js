// ============================================================
// DATI DELLE METE ERASMUS - Dipartimento di Studi Umanistici
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e lista destinazioni Erasmus+ per studio a.a. 2026/2027.
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

var METE = [
  {
    id: "00-irl-dublin01-0230-languages",
    universita: "Trinity College Dublin - Department of Italian",
    citta: "Dublino",
    paese: "Irlanda",
    codiceErasmus: "IRL DUBLIN01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Baglioni Daniele",
    posti: [{ numero: 3, mesi: 5 }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti Erasmus incoming; CEFR B2 o superiore attestabile dall'universita di origine in alcuni casi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 marzo" },
        { cosa: "Application (autunno/anno)", periodo: "entro 19 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/26940226",
    linkSito: "https://www.tcd.ie/study/study-abroad/inbound/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "01-d-heidelb01-0222-history-and-archaeology",
    universita: "Ruprecht-Karls-Universitat Heidelberg - Seminar fur Alte Geschichte und Epigraphik",
    citta: "Heidelberg",
    paese: "Germania",
    codiceErasmus: "D HEIDELB01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Calvelli Lorenzo",
    posti: [{ numero: 2, mesi: 6, livello: "L", note: "solo primo semestre" }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "minimo per studenti exchange" },
        { lingua: "Tedesco", livello: "B2", condizione: "minimo per studenti exchange" }
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254421",
    linkSito: "http://www.uni-heidelberg.de/international/erasmus/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "02-a-wien78-0222-history-and-archaeology",
    universita: "Central European University - Department of Medieval Studies and Department of History",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN78",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Calvelli Lorenzo",
    posti: [{ numero: 2, mesi: 10, livello: "LM" }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2-C1", condizione: "prova di conoscenza per candidati Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/25758391",
    linkSito: "https://www.ceu.edu/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "03-g-athine42-0230-languages",
    universita: "Ionian University - Department of Foreign Languages, Translation & Interpreting (DFLTI)",
    citta: "Atene",
    paese: "Grecia",
    codiceErasmus: "G ATHINE42",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [{ numero: 1, mesi: 5 }],
    requisitoLingua: [
        { lingua: "Greco", livello: "B1", condizione: "lingua principale di insegnamento ed esame; livello raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "seconda lingua; livello richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254641",
    linkSito: "http://www.ionio.gr/central/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "04-g-athine01-0230-languages",
    universita: "National and Kapodistrian University of Athens - Department of Italian Language and Literature - School of Philology",
    citta: "Atene",
    paese: "Grecia",
    codiceErasmus: "G ATHINE01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [{ numero: 1, mesi: 5 }],
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "minimo richiesto in greco o inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo richiesto in greco o inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (anno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 15 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/23263255",
    linkSito: "https://en.uoa.gr/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "05-g-kallith02-0320-journalism-and-information",
    universita: "Panteion University of Social and Political Sciences - Department of Communications, Media and Culture",
    citta: "Kallithea",
    paese: "Grecia",
    codiceErasmus: "G KALLITH02",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and Information" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [{ numero: 2, mesi: 6, note: "solo primo semestre" }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per incoming Erasmus" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3282452",
    linkSito: "http://erasmus.panteion.gr/index.php/programs/incoming-students",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "06-g-komotin01-0232-literature-and-linguistics",
    universita: "Democritus University of Thrace - Department of Greek Philology and Department of Primary Education",
    citta: "Komotini",
    paese: "Grecia",
    codiceErasmus: "G KOMOTIN01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [{ numero: 1, mesi: 5, livello: "L" }],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254648",
    linkSito: "http://www.duth.gr",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente || Scadenze: basate su 2024/25 || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "07-tr-istanbu03-0230-languages",
    universita: "Istanbul University - Faculty of Letters - Department of Italian Language and Literature",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU03",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cinquegrani Alessandro",
    posti: [{ numero: 1, mesi: 4, livello: "L e PhD" }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per mobilita SMS presso Faculty of Letters - Italian Language and Literature" },
        { lingua: "Italiano", livello: "B2", condizione: "per mobilita SMS presso Faculty of Letters - Italian Language and Literature" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/16634547",
    linkSito: "http://erasmus.istanbul.edu.tr/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 4 L e PhD. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "08-a-wien01-0222-history-and-archaeology",
    universita: "Universitat Wien - Department of Near Eastern Studies (Assyriology)",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Coro Paola",
    posti: [{ numero: 1, mesi: 6, livello: "L e LM", note: "solo primo semestre" }],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254351",
    linkSito: "https://international.univie.ac.at/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 L e LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "09-luxlux-vil01-0222-history-and-archaeology",
    universita: "University of Luxembourg - Centre for Contemporary and Digital History",
    citta: "Lussemburgo",
    paese: "Lussemburgo",
    codiceErasmus: "LUXLUX-VIL01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Dall'Aglio Stefano",
    posti: [{ numero: 5, mesi: 5, livello: "LM" }],
    requisitoLingua: [
        { lingua: "Lingua principale del programma scelto", livello: "B2", condizione: "livello minimo raccomandato CEFR" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29134259",
    linkSito: "https://www.uni.lu/en/mobility/incoming-exchange-students/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "10-g-athine01-0222-history-and-archaeology",
    universita: "National And Kapodistrian University of Athens - Faculty of History and Archeology",
    citta: "Atene",
    paese: "Grecia",
    codiceErasmus: "G ATHINE01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "De Vido Stefania",
    posti: [{ numero: 2, mesi: 10 }],
    requisitoLingua: [
        { lingua: "Greco", livello: "B2", condizione: "minimo richiesto in greco o inglese" },
        { lingua: "Inglese", livello: "B2", condizione: "minimo richiesto in greco o inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (anno)", periodo: "dal 15 aprile al 15 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "dal 15 settembre al 15 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254637",
    linkSito: "https://en.uoa.gr/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "11-d-berlin13-0231-languages-acquisition",
    universita: "Humboldt-Universitat zu Berlin - Faculty of Language, Literature and Humanitites",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "D BERLIN13",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0231", nome: "Languages Acquisition" }],
    coordinatoreCf: "Drusi Riccardo",
    posti: [{ numero: 1, mesi: 5, livello: "L e LM", note: "solo primo semestre" }],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi solo in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254401",
    linkSito: "https://www.international.hu-berlin.de/en/studierende/aus-dem-ausland",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L e LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "12-nl-tilburg01-0220-humanities",
    universita: "Tilburg University - School of Humanities and Digital Science (SHD)",
    citta: "Tilburg",
    paese: "Paesi Bassi",
    codiceErasmus: "NL TILBURG01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Fischer Franz",
    posti: [{ numero: 3, mesi: 5, livello: "LM" }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti exchange Bachelor" },
        { lingua: "Inglese", livello: "C1", condizione: "per studenti exchange Master" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/29512665",
    linkSito: "https://www.tilburguniversity.edu/education/exchange-programs",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "13-sf-helsink01-0200-arts-and-humanities",
    universita: "University of Helsinki - Faculty of Humanities",
    citta: "Helsinki",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0200", nome: "Arts and Humanities" }],
    coordinatoreCf: "Fischer Franz",
    posti: [
      { numero: 2, mesi: 5, livello: "L" },
      { numero: 2, mesi: 5, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi principalmente in inglese" },
        { lingua: "Finlandese", livello: "B2", condizione: "per corsi principalmente in finlandese" },
        { lingua: "Svedese", livello: "B2", condizione: "per corsi principalmente in svedese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 marzo - 31 marzo" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 agosto - 15 settembre" },
        { cosa: "Application (primavera)", periodo: "16 settembre - 30 settembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254747",
    linkSito: "https://www.helsinki.fi/en/studying/how-to-apply/exchange-studies",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "14-a-wien01-0232-literature-and-linguistics",
    universita: "Universitat Wien - Faculty of Historical and Cultural Studies and Faculty of Philological and Cultural Studies",
    citta: "Vienna",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics" }],
    coordinatoreCf: "Fischer Franz",
    posti: [{ numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28260897",
    linkSito: "https://international.univie.ac.at/en/student-mobility/incoming-students/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente || Lingua: CEFR non trovato dopo ricerca approfondita"
  },
  {
    id: "15-d-munchen01-0220-humanities",
    universita: "LMU - Ludwig-Maximilians-Universitat Munchen - Institute of Assyriology and Hittite Studies",
    citta: "Monaco di Baviera",
    paese: "Germania",
    codiceErasmus: "D MUNCHEN01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Maiocchi Massimo",
    posti: [{ numero: 1, mesi: 6, note: "solo primo semestre" }],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "entro l'inizio degli studi; B1 minimo per application" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; B1 minimo per application" }
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
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254439",
    linkSito: "http://www.en.uni-muenchen.de/students/exchange/incomings/austausch_engl/index.html",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "16-d-berlin13-0232-literature-and-linguistics",
    universita: "Humboldt-Universitat zu Berlin - Faculty of Language, Literature and Humanitites",
    citta: "Berlino",
    paese: "Germania",
    codiceErasmus: "D BERLIN13",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Pontani Filippomaria",
    posti: [{ numero: 1, mesi: 5, livello: "L e LM", note: "solo primo semestre" }],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi solo in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3257744",
    linkSito: "https://www.international.hu-berlin.de/en/studierende/aus-dem-ausland",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L e LM, solo primo semestre. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "17-f-paris001-0222-history-and-archaeology",
    universita: "Universite Paris 1 Pantheon-Sorbonne - UFR03 Histoire de l'Art et Archeologie",
    citta: "Parigi",
    paese: "Francia",
    codiceErasmus: "F PARIS001",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Rova Elena",
    posti: [{ numero: 2, mesi: 5 }],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi Bachelor e/o Master in francese" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 4 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254585",
    linkSito: "http://www.pantheonsorbonne.fr/international/foreign-students/exchange-student-application-bachelor-master/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "18-tr-istanbu17-0222-history-and-archaeology",
    universita: "Koc University - Archaeology and History of Art Department and History Department",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU17",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Tonghini Cristina",
    posti: [{ numero: 2, mesi: 5, livello: "LM e PhD" }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti incoming/exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e application (autunno/anno)", periodo: "1 aprile - 1 giugno" },
        { cosa: "Nomination e application (primavera, seconda call)", periodo: "1 settembre - 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/28260920",
    linkSito: "https://oip.ku.edu.tr/mobility-programs/incoming/",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM e PhD. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "19-s-stockho01-0230-languages",
    universita: "Stockholms Universitet - Department of Romance Studies and Classics",
    citta: "Stoccolma",
    paese: "Svezia",
    codiceErasmus: "S STOCKHO01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Zava Alberto",
    posti: [{ numero: 1, mesi: 6 }],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" },
        { lingua: "Francese/Italiano/Portoghese/Spagnolo", livello: "B2", condizione: "per corsi nella relativa lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 10 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254743",
    linkSito: "https://www.su.se/department-of-romance-studies-and-classics/education/incoming-exchange-students",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "20-pl-warszaw01-0230-languages",
    universita: "Uniwersytet Warszawski - Department of Italian Studies",
    citta: "Varsavia",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Studi Umanistici",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Zava Alberto",
    posti: [{ numero: 1, mesi: 5, livello: "LM" }],
    requisitoLingua: [
        { lingua: "Polacco o Inglese", livello: "B2", condizione: "per incoming exchange students" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254724",
    linkSito: "http://www.uw.edu.pl",
    notePratiche: "Aperta a: Dipartimento di Studi Umanistici [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  }
];

if (typeof module !== "undefined") {
  module.exports = METE;
}
