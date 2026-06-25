// ============================================================
// DATI DELLE METE ERASMUS - Dipartimento di Studi Linguistici e Culturali Comparati
// ------------------------------------------------------------
// Fonte ufficiale: pagina Ca' Foscari Erasmus+ per studio Europa
// e lista destinazioni Erasmus+ per studio a.a. 2026/2027.
// Lingua e scadenze ospitante restano vuote: saranno completate nei batch successivi.
// ============================================================

var METE = [
  {
    id: "00-a-graz01-0312",
    universita: "Karl-Franzens-Universitat Graz - Centre for Southeast European Studies",
    citta: "Graz",
    paese: "Austria",
    codiceErasmus: "A GRAZ01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Antonini Francesca",
    posti: [
      { numero: 2, mesi: 5, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per seguire pienamente la mobilita" },
        { lingua: "Inglese", livello: "B2", condizione: "per studenti che seguono solo corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://suedosteuropa.uni-graz.at/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "01-n-trondhe01-0310",
    universita: "NTNU - Norges Teknisk-Naturvitenskapelige Universitet - Faculty of Social and Educational Sciences (SU)",
    citta: "Trondheim",
    paese: "Norvegia",
    codiceErasmus: "N TRONDHE01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Basosi Duccio",
    posti: [
      { numero: 2, mesi: 5, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "atteso per studenti exchange, preferibilmente C1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno, non UE/SEE)", periodo: "entro 15 marzo" },
        { cosa: "Nomination (autunno, UE/SEE/Svizzera)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno, non UE/SEE)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno, UE/SEE/Svizzera)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.ntnu.edu/studies/exchange",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "02-d-heidelb01-0312",
    universita: "Ruprecht-Karls-Universitat Heidelberg - Faculty of Philosophy - Department of Asian and Transcultural Studies",
    citta: "Heidelberg",
    paese: "Germania",
    codiceErasmus: "D HEIDELB01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Basosi Duccio",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo raccomandato per mobilita studenti" },
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-heidelberg.de/de/international/erasmus",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "03-e-cordoba23-0312",
    universita: "Universidad Loyola - Faculty of Legal and Political Sciences - Campus Cordoba",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E CORDOBA23",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Basosi Duccio",
    posti: [
      { numero: 4, mesi: 6, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "obbligatorio per iscriversi a corsi in inglese" },
        { lingua: "Spagnolo", livello: "B1", condizione: "obbligatorio per iscriversi a corsi in spagnolo; alcuni corsi possono richiedere B2-C1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 15 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "1 marzo - 1 giugno" },
        { cosa: "Application (primavera)", periodo: "1 ottobre - 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uloyola.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "04-tr-nevsehi03-0300",
    universita: "Cappadocia University - School of Graduate Studies and Research",
    citta: "Nevsehir",
    paese: "Turchia",
    codiceErasmus: "TR NEVSEHI03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0300", nome: "0200 Arts and humanities" }],
    coordinatoreCf: "Bassi Shaul",
    posti: [
      { numero: 2, mesi: 6, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "minimo per Erasmus Student Study Mobility" },
        { lingua: "Inglese", livello: "B2", condizione: "per English Language and Literature ed English Translation" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 luglio" },
        { cosa: "Application (primavera)", periodo: "1 agosto - 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://kapadokya.edu.tr/en/schools/graduate-school/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 LM. Lingua e scadenze ospitante da completare nei batch successivi. || Scadenze: basate su 2024/25"
  },
  {
    id: "05-e-bilbao02-0312",
    universita: "Universidad de Deusto - Faculty of Social and Human Sciences",
    citta: "Bilbao",
    paese: "Spagna",
    codiceErasmus: "E BILBAO02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Beneduzi Luis Fernando",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 8 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 5 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.deusto.es/en/home/we-are-deusto/faculties/social-human-sciences",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "06-d-berlin01-0220",
    universita: "Freie Universitaet Berlin - John F. Kennedy Institute for North American Studies",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D BERLIN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Bordin Elisa",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per la lingua di insegnamento" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per la lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.fu-berlin.de/en/studium/international/studium_fu/auslandssemester/erasmus_in/infos_incomingstudents",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "07-rs-novisad02-0300",
    universita: "University of Novi Sad - Faculty of Philosophy",
    citta: "Novi Sad",
    paese: "Serbia",
    codiceErasmus: "RS NOVISAD02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0300", nome: "0200 Arts and humanities" }],
    coordinatoreCf: "Bradas Marija",
    posti: [
      { numero: 4, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti internazionali" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination e documenti (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination e documenti (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uns.ac.rs/index.php/en/international-cooperation/students-exchange/information-for-foreign-students",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "08-e-barcelo02-0232",
    universita: "Universitat Autonoma de Barcelona - Facultat de Filosofia i Llettres - Departamento de Filologia Catalana",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Bruge Laura",
    posti: [
      { numero: 2, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti da paesi non anglofoni che seguono corsi in inglese" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per studenti da paesi non ispanofoni/catalanofoni che seguono corsi in spagnolo" },
        { lingua: "Catalano", livello: "B2", condizione: "per studenti da paesi non ispanofoni/catalanofoni che seguono corsi in catalano" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 febbraio - 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (autunno)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uab.cat/web/mobilitat-i-intercanvi-internacional-1345680108534.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "09-e-madrid03-0232",
    universita: "Universidad Complutense de Madrid - Facultad de Filologia - Departamento de Linguistica,Estudios Arabes, Hebreos, Vascos y de Asia Oriental",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Bruge Laura",
    posti: [
      { numero: 3, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi di laurea in spagnolo" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi magistrali o dottorali in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per insegnamenti in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 15 novembre" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 20 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.ucm.es/alumnos-students",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "10-d-bamberg01-0232",
    universita: "Otto-Friedrich-Universitat Bamberg - Faculty of Humanities",
    citta: "Bamberg",
    paese: "Germania",
    codiceErasmus: "D BAMBERG01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Buzzoni Marina",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto almeno inglese B2 o tedesco B1; certificato non richiesto" },
        { lingua: "Tedesco", livello: "B1", condizione: "richiesto almeno inglese B2 o tedesco B1; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "20 aprile - 15 maggio 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-bamberg.de/en/studies/exchange-students-eg-erasmus/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "11-f-besanco01-0230",
    universita: "Universite Marie & Louis Pasteur (UMLP) - Sciences du Langage, de l'Homme et de la Societe",
    citta: "Besancon",
    paese: "Francia",
    codiceErasmus: "F BESANCO01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Buzzoni Marina",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 10, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (2025/26)", periodo: "15 settembre 2025 - 17 giugno 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.univ-fcomte.fr/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "12-d-osnabru01-0231",
    universita: "Universitat Osnabruck - Cognitive Science Institute",
    citta: "Osnabruck",
    paese: "Germania",
    codiceErasmus: "D OSNABRU01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0231", nome: "Languages Acquisition" }],
    coordinatoreCf: "Buzzoni Marina",
    posti: [
      { numero: 3, mesi: 6, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 1 gennaio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-osnabrueck.de/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3x6, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "13-e-valenci01-0232",
    universita: "Universitat de Valencia -Faculty of Philology, Translation and Communication",
    citta: "Valencia",
    paese: "Spagna",
    codiceErasmus: "E VALENCI01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 5, mesi: 10, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per Faculty of Philology, Translation and Communication" },
        { lingua: "Catalano", livello: "B1", condizione: "per Faculty of Philology, Translation and Communication; seconda lingua accettata" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "1 marzo - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 31 ottobre" },
        { cosa: "Application", periodo: "entro 30 giorni dalla ricezione dell'email di accettazione" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uv.es/en",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 10 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "14-e-murcia01-0230",
    universita: "Universidad de Murcia - Faculty of Letters",
    citta: "Murcia",
    paese: "Spagna",
    codiceErasmus: "E MURCIA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 1, mesi: 9, livello: "L" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.um.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 9 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "15-e-madrid03-0230",
    universita: "Universidad Complutense de Madrid - Faculty of Philology",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 3, mesi: 9, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 9, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi di laurea in spagnolo" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per corsi magistrali o dottorali in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "per insegnamenti in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 maggio" },
        { cosa: "Application (autunno)", periodo: "1 aprile - 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 15 novembre" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 20 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.ucm.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 9 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "16-e-malaga01-0230",
    universita: "Universidad de Malaga - Facultad de Filosofia y Letras",
    citta: "Malaga",
    paese: "Spagna",
    codiceErasmus: "E MALAGA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 4, mesi: 9, livello: "PhD", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 9, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "da meta aprile a meta giugno" },
        { cosa: "Nomination (primavera)", periodo: "da meta aprile a fine ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uma.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 9 L e PhD. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "17-hu-budapes12-0312-0312",
    universita: "Pazmany Peter Catholic University - Faculty of Humanities and Social Sciences - Italian Department, Spanish Department, Russian Department, Department of International Studies, Department of Political Science",
    citta: "Budapest",
    paese: "Ungheria",
    codiceErasmus: "HU BUDAPES12",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "0230 Languages" }, { codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 5, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito linguistico per studenti Erasmus incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://btk.ppke.hu/en/erasmus-3",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "18-e-salaman02-0230",
    universita: "Universidad de Salamanca - Faculty of Philology",
    citta: "Salamanca",
    paese: "Spagna",
    codiceErasmus: "E SALAMAN02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 1, mesi: 10, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "livello minimo raccomandato; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/primavera)", periodo: "dal 7 aprile al 1 luglio 2026" },
        { cosa: "Application (autunno/primavera)", periodo: "dal 15 aprile al 5 luglio 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.usal.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 10 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "19-e-las-pal01-0230",
    universita: "ULPGC - Universidad de Las Palmas de Gran Canaria - Facultad de Filologia",
    citta: "Las Palmas de Gran Canaria",
    paese: "Spagna",
    codiceErasmus: "E LAS-PAL01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cannavacciuolo Margherita",
    posti: [
      { numero: 2, mesi: 9, livello: "L" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.movilidad.ulpgc.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 9 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "20-d-hamburg01-0232",
    universita: "Universitat Hamburg - Institut fur Germanistik",
    citta: "Hamburg",
    paese: "Germania",
    codiceErasmus: "D HAMBURG01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Cardinaletti Anna",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 1 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 marzo" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-hamburg.de/index_e.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "21-cz-olomouc01-0230",
    universita: "Univerzita Palackeho v Olomouci - Faculty of Arts - Department of English and American Studies",
    citta: "Olomouc",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ OLOMOUC01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cardinaletti Anna",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Ceco/Inglese/Tedesco/Spagnolo", livello: "B2", condizione: "per studi, secondo fact sheet generale 2026/27" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination", periodo: "dal 15 marzo 2026" },
        { cosa: "Application (autunno/anno, studenti con visto)", periodo: "entro 30 aprile 2026" },
        { cosa: "Application (autunno/anno, studenti senza visto)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 31 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://international.upol.cz/en/exchange-programmes/im-an-exchange-student/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "22-f-paris003-0232",
    universita: "Universite Sorbonne Nouvelle - Paris 3 - Department LGC (Litterature generale et comparee)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS003",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Castagna Vanessa",
    posti: [
      { numero: 1, mesi: 10, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per seguire i corsi e completare gli elaborati" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "tra 16 marzo e 16 aprile" },
        { cosa: "Nomination (primavera)", periodo: "tra 15 settembre e 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.univ-paris3.fr/venir-dans-le-cadre-d-un-programme-d-echange-23187.kjsp?STNAV=&RUBNAV=&RH=1209061830093",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 10. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "23-p-lisboa03-0232",
    universita: "Universidade Nova de Lisboa - Faculdade de Ciencias Socials e Humanas",
    citta: "Lisbon",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Castagna Vanessa",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "A2", condizione: "per corsi in portoghese" },
        { lingua: "Inglese", livello: "B1", condizione: "se si scelgono corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 31 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "1-15 luglio 2026" },
        { cosa: "Application (primavera)", periodo: "1 dicembre 2026-15 gennaio 2027" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://fcsh.unl.pt/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "24-p-porto02-0230",
    universita: "Universidade Do Porto - Faculdade de Letras da Uporto",
    citta: "Porto",
    paese: "Portogallo",
    codiceErasmus: "P PORTO02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Castagna Vanessa",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B2", condizione: "per non madrelingua portoghesi" },
        { lingua: "Inglese", livello: "B2", condizione: "per studenti che non studiano o non parlano portoghese" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per non madrelingua spagnoli che seguono corsi in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.up.pt/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "25-p-lisboa01-0230",
    universita: "Universidade Catolica Portuguesa - Faculdade de Ciencias Humanas",
    citta: "Lisbon",
    paese: "Portogallo",
    codiceErasmus: "P LISBOA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Castagna Vanessa",
    posti: [
      { numero: 3, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Portoghese", livello: "B1", condizione: "standard per lingua di insegnamento" },
        { lingua: "Inglese", livello: "B2", condizione: "standard per lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre 2026" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.fch.lisboa.ucp.pt/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "26-e-badajoz01-0230",
    universita: "Universidad de Extremadura - Facultad de Filosofia y Letras",
    citta: "Badajoz",
    paese: "Spagna",
    codiceErasmus: "E BADAJOZ01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cesiri Daniela",
    posti: [
      { numero: 2, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per la maggior parte degli insegnamenti" },
        { lingua: "Inglese", livello: "B1", condizione: "raccomandato da alcune facolta" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 7 aprile al 22 giugno 2026" },
        { cosa: "Application (autunno/anno)", periodo: "dal 1 maggio al 30 giugno 2026" },
        { cosa: "Nomination (primavera)", periodo: "dal 1 ottobre al 31 ottobre 2026" },
        { cosa: "Application (primavera)", periodo: "dal 1 novembre al 30 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.unex.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "27-d-saarbru01-0232",
    universita: "Universitat des Saarlandes - Anglistik und Amerikanistik",
    citta: "Saarbrucken",
    paese: "Germania",
    codiceErasmus: "D SAARBRU01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics" }],
    coordinatoreCf: "Cesiri Daniela",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "minimo raccomandato per studenti incoming" },
        { lingua: "Tedesco", livello: "B2", condizione: "obbligatorio per German language and literature studies" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 dicembre dell'anno precedente" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre dell'anno precedente" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-saarland.de/fachrichtung/anglistik/student-services/erasmus.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "28-d-koln01-0232",
    universita: "Universitat zu Koln - Faculty of Arts and Humanities",
    citta: "Cologne",
    paese: "Germania",
    codiceErasmus: "D KOLN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Cesiri Daniela",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://zib.phil-fak.uni-koeln.de/internationalestudierende.html?&L=1",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "29-d-kiel01-0230",
    universita: "Christian-Albrechts-Universitat zu Kiel - Dept. of Scandinavian Studies+Dept. of German Literature(Institut fur Neuere deutsche Literatur und Medien)",
    citta: "Kiel",
    paese: "Germania",
    codiceErasmus: "D KIEL01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Ciaravolo Massimo",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "requisito generale" },
        { lingua: "Inglese", livello: "B1", condizione: "requisito generale" },
        { lingua: "Tedesco", livello: "B2", condizione: "per German Philology" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination/application (primavera)", periodo: "entro 15 gennaio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.international.uni-kiel.de/en/erasmus",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "30-s-uppsala01-0230",
    universita: "Uppsala Universitet - Department of Scandinavian Languages and Department of Modern Languages",
    citta: "Uppsala",
    paese: "Svezia",
    codiceErasmus: "S UPPSALA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Ciaravolo Massimo",
    posti: [
      { numero: 1, mesi: 10, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "atteso per studenti exchange" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uu.se/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 10. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "31-dk-arhus01-0230",
    universita: "Aarhus Universitet - Faculty of Arts - School of Communication and Culture (Dept. of Scandinavian Studies)",
    citta: "Aarhus",
    paese: "Danimarca",
    codiceErasmus: "DK ARHUS01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Ciaravolo Massimo",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "C1", condizione: "per corsi della Faculty of Arts; documentazione richiesta solo per specifici corsi di laurea indicati" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 febbraio - 25 marzo" },
        { cosa: "Application (autunno)", periodo: "entro 1 aprile" },
        { cosa: "Nomination (primavera)", periodo: "15 agosto - 25 settembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.au.dk/en/exchange/welcome/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "32-s-stockho01-0230",
    universita: "Stockholms Universitet - Department of Romance Studies and Classics",
    citta: "Stockholm",
    paese: "Svezia",
    codiceErasmus: "S STOCKHO01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Ciaravolo Massimo",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 6, livello: "L", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi con lingua di insegnamento inglese" },
        { lingua: "Francese/Italiano/Portoghese/Spagnolo", livello: "B2", condizione: "per corsi con lingua di insegnamento francese, italiana, portoghese o spagnola" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 10 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.su.se/english/education/exchange-students",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "33-d-bremen01-0230",
    universita: "Universitat Bremen - Dept. of Fachbereich 10: Sparch und Literaturwissenschaften",
    citta: "Bremen",
    paese: "Germania",
    codiceErasmus: "D BREMEN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Coccetta Francesca",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco/Inglese", livello: "B2", condizione: "raccomandato per la lingua di insegnamento" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 31 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-bremen.de/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "34-d-bochum01-0230",
    universita: "Ruhr-Universitat Bochum - Faculty of Philology - German Institute",
    citta: "Bochum",
    paese: "Germania",
    codiceErasmus: "D BOCHUM01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cognola Federica",
    posti: [
      { numero: 4, mesi: 6, livello: "LM", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 4, mesi: 6, livello: "L", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco/Inglese", livello: "B1/B2", condizione: "per seguire corsi in tedesco o inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (autunno)", periodo: "entro 1 luglio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 dicembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 gennaio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.international.rub.de/gaststudis/programme/erasmus/index.html.en",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 6 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "35-n-bergen01-0220",
    universita: "UIB - Universitetet i Bergen - Department of Foreign Languages",
    citta: "Bergen",
    paese: "Norvegia",
    codiceErasmus: "N BERGEN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Culeddu Sara",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi generali offerti agli exchange students" },
        { lingua: "Inglese", livello: "C1", condizione: "per corsi di English language and literature" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo - 15 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 25 aprile" },
        { cosa: "Nomination (primavera)", periodo: "1 settembre - 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uib.no/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "36-s-gotebor01-0230",
    universita: "University of Gothenburg - Faculty of Humanities - Dept. of Literature, History of Ideas, and Religion",
    citta: "Gothenburg",
    paese: "Svezia",
    codiceErasmus: "S GOTEBOR01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Culeddu Sara",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "requisito generale minimo per corsi insegnati in inglese" },
        { lingua: "Svedese", livello: "B2", condizione: "requisito generale minimo per corsi insegnati in svedese" },
        { lingua: "Inglese o Svedese", livello: "C1", condizione: "alcuni corsi nelle materie English o Swedish" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 1 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.gu.se/en/study-in-gothenburg/exchange-student",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "37-n-oslo01-0230",
    universita: "University of Oslo - Faculty of Humanities",
    citta: "Oslo",
    paese: "Norvegia",
    codiceErasmus: "N OSLO01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Culeddu Sara",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uio.no/english/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "38-cz-brno05-0231",
    universita: "Masarykova Univerzita - Department of Czech Language",
    citta: "Brno",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ BRNO05",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0231", nome: "Languages Acquisition" }],
    coordinatoreCf: "D'Amico Tiziana",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "certificate or document proving your level of English richiesto per Erasmus+" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (autunno, studenti non UE)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (autunno, studenti non UE)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Nomination (primavera, studenti non UE)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera, studenti non UE)", periodo: "entro 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://czs.muni.cz/en/student-from-abroad/exchange-non-degree-studies/erasmus-europe",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "39-a-innsbru01-0232-0232",
    universita: "Innsbruck Universitat - Institut fur Romanistik",
    citta: "Innsbruck",
    paese: "Austria",
    codiceErasmus: "A INNSBRU01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "0230 Languages" }, { codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Dal Maso Elena",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per seguire corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per seguire corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 1 novembre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 luglio" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uibk.ac.at/en/international-relations-office/student-mobility/incoming/mobility-programmes/erasmus-studmob/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2X5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "40-e-palma01-0231",
    universita: "Universitat de les Illes Balears - Faculty of Philosophy and Arts - Department of Spanish, Modern and Classical Languages",
    citta: "Palma de Mallorca",
    paese: "Spagna",
    codiceErasmus: "E PALMA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0231", nome: "Languages Acquisition" }],
    coordinatoreCf: "Del Barrio De La Rosa Florencio",
    posti: [
      { numero: 2, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre 2026" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 giugno 2026" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uib.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "41-e-burgos01-0230",
    universita: "Universidad de Burgos (UBU) - Faculty of Humanities and Communication",
    citta: "Burgos",
    paese: "Spagna",
    codiceErasmus: "E BURGOS01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Del Barrio De La Rosa Florencio",
    posti: [
      { numero: 3, mesi: 9, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.ubu.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 9. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "42-e-vallado01-0230",
    universita: "Universidad de Valladolid - Facultad de Filosofia y Letras",
    citta: "Valladolid",
    paese: "Spagna",
    codiceErasmus: "E VALLADO01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Del Barrio De La Rosa Florencio",
    posti: [
      { numero: 5, mesi: 9, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo se non madrelingua" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese se non madrelingua" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" },
        { cosa: "Application (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uva.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 9. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "43-sf-helsink01-0200",
    universita: "University of Helsinki - Faculty of Humanities",
    citta: "Helsinki",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0200", nome: "Arts and Humanities" }],
    coordinatoreCf: "Duryagin Pavel",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studi principalmente in inglese" },
        { lingua: "Finlandese", livello: "B2", condizione: "per studi principalmente in finlandese" },
        { lingua: "Svedese", livello: "B2", condizione: "per studi principalmente in svedese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "almeno due settimane prima della scadenza di registrazione" },
        { cosa: "Nomination (primavera)", periodo: "almeno due settimane prima della scadenza di registrazione" },
        { cosa: "Application non UE/SEE (autunno/anno)", periodo: "1-15 aprile" },
        { cosa: "Application UE/SEE/Svizzera (autunno/anno)", periodo: "1-15 maggio" },
        { cosa: "Application non UE/SEE (primavera)", periodo: "16-30 settembre" },
        { cosa: "Application UE/SEE/Svizzera (primavera)", periodo: "1-15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.helsinki.fi/en/studying/how-to-apply/exchange-studies",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3x5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "44-d-koln01-0232",
    universita: "Universitat zu Koln - Faculty of Arts and Humanities - Institute of German Language and Literature I",
    citta: "Cologne",
    paese: "Germania",
    codiceErasmus: "D KOLN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Faber Beatrix Ursula Bettina",
    posti: [
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-koeln.de/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM e PhD, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "45-d-tubinge01-0232",
    universita: "Eberhard Karls Universitat Tubingen - Dept. of Modern Languages: Institute of German Language and Literatures",
    citta: "Tubingen",
    paese: "Germania",
    codiceErasmus: "D TUBINGE01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Faber Beatrix Ursula Bettina",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "minimo obbligatorio per corsi in tedesco; B2 raccomandato" },
        { lingua: "Inglese", livello: "B1", condizione: "minimo obbligatorio per corsi in inglese; B2 raccomandato" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1 aprile-15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "1 ottobre-15 novembre 2026" },
        { cosa: "Application (autunno)", periodo: "1 aprile-31 maggio 2026" },
        { cosa: "Application (primavera)", periodo: "1 ottobre-30 novembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-tuebingen.de/en/113870",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2x5 LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "46-mt-malta01-0230",
    universita: "University of Malta - Faculty of Arts - Department of Italian",
    citta: "Msida",
    paese: "Malta",
    codiceErasmus: "MT MALTA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Fina Maria Elisa",
    posti: [
      { numero: 2, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.um.edu.mt/int-eu/erasmus",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "47-f-paris468-0230",
    universita: "Sorbonne Universite - Faculte des Lettres",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS468",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Fornari Francesca",
    posti: [
      { numero: 2, mesi: 6, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi alla Faculte des Lettres" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile 2026" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://lettres.sorbonne-universite.fr/en",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "48-pl-krakow01-0230",
    universita: "Uniwersytet Jagiellonski - Faculty of Polish Studies",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Fornari Francesca",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://en.uj.edu.pl/studying/student-mobility",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "49-d-heidelb01-0232",
    universita: "Ruprecht-Karls-Universitat Heidelberg - Department of Germanistik",
    citta: "Heidelberg",
    paese: "Germania",
    codiceErasmus: "D HEIDELB01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Fossaluzza Cristina",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo raccomandato per mobilita studenti" },
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-heidelberg.de/international/erasmus/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 X 5, L e LM, solo 1° sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "50-d-berlin13-0232",
    universita: "Humboldt-Universitat zu Berlin - Sprach und literaturwissenschaftliche Fakultat - Institut fur deutsche Literatur",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D BERLIN13",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Fossaluzza Cristina",
    posti: [
      { numero: 1, mesi: 6, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.literatur.hu-berlin.de/de",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "51-d-munchen01-0230",
    universita: "LMU - Ludwig-Maximilians-Universitat Munchen - Amerika-Institut",
    citta: "Munich",
    paese: "Germania",
    codiceErasmus: "D MUNCHEN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Francescato Simone",
    posti: [
      { numero: 1, mesi: 5, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "C1", condizione: "America Institute / North American Studies" },
        { lingua: "Tedesco", livello: "B2", condizione: "requisito generale all'inizio degli studi per corsi in tedesco" }
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
    linkPdf: "",
    linkSito: "http://www.en.uni-muenchen.de/students/exchange/incomings/austausch_engl/index.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "52-irl-dublin01-0232",
    universita: "Trinity College Dublin - School of Linguistics, Speech and Communication Sciences",
    citta: "Dublin",
    paese: "Irlanda",
    codiceErasmus: "IRL DUBLIN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Giusti Giuliana",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
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
    linkPdf: "",
    linkSito: "https://www.tcd.ie/slscs/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "53-s-lund01-0230",
    universita: "Lund Universitet - Faculties of Humanities and Theology",
    citta: "Lund",
    paese: "Svezia",
    codiceErasmus: "S LUND01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Giusti Giuliana",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "15-31 marzo" },
        { cosa: "Nomination (primavera)", periodo: "15-30 settembre" },
        { cosa: "Application (autunno)", periodo: "1-15 aprile" },
        { cosa: "Application (primavera)", periodo: "1-15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.ht.lu.se/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "54-d-konstan01-0232",
    universita: "Universitat Konstanz - Department of Linguistics and Department of Literature, Art and Media Studies",
    citta: "Konstanz",
    paese: "Germania",
    codiceErasmus: "D KONSTAN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Giusti Giuliana",
    posti: [
      { numero: 1, mesi: 5, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo-1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre-1 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-konstanz.de/en/international-office/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "55-n-trondhe01-0230",
    universita: "NTNU - Norges Teknisk-Naturvitenskapelige Universitet - Faculty of Humanities (HF)",
    citta: "Trondheim",
    paese: "Norvegia",
    codiceErasmus: "N TRONDHE01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Giusti Giuliana",
    posti: [
      { numero: 1, mesi: 10, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "atteso per studenti exchange, preferibilmente C1" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno, non UE/SEE)", periodo: "entro 15 marzo" },
        { cosa: "Nomination (autunno, UE/SEE/Svizzera)", periodo: "entro 15 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre" },
        { cosa: "Application (autunno, non UE/SEE)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno, UE/SEE/Svizzera)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 1 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.ntnu.edu/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 10. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "56-f-paris003-0230",
    universita: "Universite Sorbonne Nouvelle - Paris 3 - Institute du Monde Anglophone",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS003",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Gregori Flavio",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per seguire i corsi e completare gli elaborati" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "tra 16 marzo e 16 aprile" },
        { cosa: "Nomination (primavera)", periodo: "tra 15 settembre e 15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.univ-paris3.fr/venir-dans-le-cadre-d-un-programme-d-echange-23187.kjsp?STNAV=&RUBNAV=&RH=1209061830093",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "57-f-montpel03-0232",
    universita: "Universite Paul-Valery Montpellier 3 - Montpellier 3 - Italian Department",
    citta: "Montpellier",
    paese: "Francia",
    codiceErasmus: "F MONTPEL03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Hamon Yannick",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 10, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 settembre" },
        { cosa: "Application (autunno)", periodo: "entro maggio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.univ-montp3.fr/fr/erasmus",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "58-f-grenobl55-0230",
    universita: "Universite Grenoble Alpes - UFR SoCLE (Societes, Cultures et Langue Etrangeres)",
    citta: "Grenoble",
    paese: "Francia",
    codiceErasmus: "F GRENOBL55",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Hamon Yannick",
    posti: [
      { numero: 3, mesi: 10, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 10, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "livello minimo richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 marzo-30 aprile" },
        { cosa: "Application (autunno)", periodo: "15 marzo-30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "30 agosto-30 settembre" },
        { cosa: "Application (primavera)", periodo: "30 agosto-18 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.univ-grenoble-alpes.fr/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "59-b-louvain01-0232",
    universita: "UCL - Universite Catholique de Louvain - Faculte de Philosophie, Arts et Lettres",
    citta: "Louvain-la-Neuve",
    paese: "Belgio",
    codiceErasmus: "B LOUVAIN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Hinterholzl Roland",
    posti: [
      { numero: 2, mesi: 6, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "raccomandato per seguire i corsi" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://uclouvain.be/en/faculties/fial/international-exchange-students.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 Le LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "60-d-leipzig01-0232",
    universita: "Universitat Leipzig - Institute of linguistics",
    citta: "Leipzig",
    paese: "Germania",
    codiceErasmus: "D LEIPZIG01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Hinterholzl Roland",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco; B1 minimo solo se approvato individualmente" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese; B1 minimo solo se approvato individualmente" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "dal 15 aprile al 15 maggio" },
        { cosa: "Application (autunno/anno)", periodo: "entro 15 giugno" },
        { cosa: "Nomination (primavera)", periodo: "dal 15 ottobre al 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-leipzig.de/en/international",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "61-e-madrid26-0230",
    universita: "Universidad Rey Juan Carlos",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID26",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Mantovan Lara",
    posti: [
      { numero: 4, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "per corsi in spagnolo non Health Sciences; B2 altamente raccomandato" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "22 aprile-22 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 16 giugno" },
        { cosa: "Nomination (primavera)", periodo: "23 settembre-23 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 16 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.urjc.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "62-e-cadiz01-0230",
    universita: "Universidad de Cadiz -Faculty of Philosophy and Literature",
    citta: "Cadiz",
    paese: "Spagna",
    codiceErasmus: "E CADIZ01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Masiero Pia",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uca.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1x5 L, 1x5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "63-a-klagenf02-0111",
    universita: "Padagogische Hochschule Karnten",
    citta: "Klagenfurt",
    paese: "Austria",
    codiceErasmus: "A KLAGENF02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0111", nome: "Education science" }],
    coordinatoreCf: "Menegale Marcella",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B1", condizione: "per incoming" },
        { lingua: "Tedesco", livello: "B2", condizione: "per frequentare i corsi regolari" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.ph-kaernten.ac.at/en/index/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "64-e-ciuda-r01-0230",
    universita: "Universidad de Castilla-La Mancha - Departamento de Filologia Hispanica y Clasica",
    citta: "Ciudad Real",
    paese: "Spagna",
    codiceErasmus: "E CIUDA-R01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Mistrorigo Alessandro",
    posti: [
      { numero: 3, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Lingua di insegnamento dei corsi scelti", livello: "B1", condizione: "livello B1 o superiore nella lingua in cui sono insegnati gli insegnamenti richiesti" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "entro 30 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 30 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uclm.es/misiones/internacional/movilidad/movilidad_entrante/estudiantes/estudiantes-de-intercambio?sc_lang=es",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "65-pl-warszaw01-0230",
    universita: "UNIWERSYTET WARSZAWSKI - American Studies Center (OSA)",
    citta: "Warsaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Mitrano Filomena",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese o Polacco", livello: "B2", condizione: "per studenti exchange/incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://en.uw.edu.pl/education/exchange-and-guest-students/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "66-a-klagenf01-0288",
    universita: "University of Klagenfurt - Faculty of Humanities",
    citta: "Klagenfurt",
    paese: "Austria",
    codiceErasmus: "A KLAGENF01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0288", nome: "Interdisciplinary programmes and qualifications involving arts and humanities" }],
    coordinatoreCf: "Mitrano Filomena",
    posti: [
      { numero: 5, mesi: 5, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (primavera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.aau.at/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 5, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "67-f-lille11-0312",
    universita: "UNIVERSITE CATHOLIQUE DE LILLE - European School of Political and Social Sciences (ESPOL)",
    citta: "Lille",
    paese: "Francia",
    codiceErasmus: "F LILLE11",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Novak Stephanie",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per seguire corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro meta maggio" },
        { cosa: "Application (autunno)", periodo: "entro meta giugno" },
        { cosa: "Nomination (primavera)", periodo: "entro meta ottobre" },
        { cosa: "Application (primavera)", periodo: "entro meta novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://espol-lille.eu/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "68-e-sevilla01-0222",
    universita: "Universidad de Sevilla",
    citta: "Seville",
    paese: "Spagna",
    codiceErasmus: "E SEVILLA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Ojeda Calvo Maria Del Valle",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination/Application (autunno/anno 2026/27)", periodo: "dal 2 marzo al 30 giugno 2026" },
        { cosa: "Nomination/Application (primavera 2025/26)", periodo: "dal 15 settembre al 29 novembre 2025" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.us.es/internacional/oficina-welcome",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "69-e-barcelo02-0230",
    universita: "Universitat Autonoma de Barcelona - Facultat de Filosofia i Llettres - Departamento de Filologia Francesa y Romanica",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Ojeda Calvo Maria Del Valle",
    posti: [
      { numero: 2, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studenti da paesi non anglofoni che seguono corsi in inglese" },
        { lingua: "Spagnolo", livello: "B2", condizione: "per studenti da paesi non ispanofoni/catalanofoni che seguono corsi in spagnolo" },
        { lingua: "Catalano", livello: "B2", condizione: "per studenti da paesi non ispanofoni/catalanofoni che seguono corsi in catalano" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "15 febbraio - 1 maggio" },
        { cosa: "Nomination (primavera)", periodo: "15 settembre - 1 novembre" },
        { cosa: "Application (autunno)", periodo: "15 febbraio - 15 maggio" },
        { cosa: "Application (primavera)", periodo: "15 settembre - 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uab.cat/web/mobilitat-i-intercanvi-internacional-1345680108534.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "70-dk-odense01-0312",
    universita: "Syddansk Universitet - Faculty of Humanities",
    citta: "Odense",
    paese: "Danimarca",
    codiceErasmus: "DK ODENSE01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Oktem Kerem Halil-Latif",
    posti: [
      { numero: 3, mesi: 5, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 5, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per documentare competenze sufficienti in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno, non UE/SEE)", periodo: "entro 1 aprile" },
        { cosa: "Application (autunno, UE/SEE e Svizzera)", periodo: "entro 1 maggio" },
        { cosa: "Application (primavera, non UE/SEE)", periodo: "entro 1 ottobre" },
        { cosa: "Application (primavera, UE/SEE e Svizzera)", periodo: "entro 1 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.sdu.dk/en/uddannelse/exchange_programmes",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "71-pl-krakow01-0312",
    universita: "Uniwersytet Jagiellonski - The Centre for International Studies and Development",
    citta: "Krakow",
    paese: "Polonia",
    codiceErasmus: "PL KRAKOW01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Petrungaro Stefano",
    posti: [
      { numero: 5, mesi: 5, livello: "LM" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://en.uj.edu.pl/studying/student-mobility",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 5 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "72-e-barcelo15-0230",
    universita: "Universitat Pompeu Fabra - Faculty of Humanities",
    citta: "Barcelona",
    paese: "Spagna",
    codiceErasmus: "E BARCELO15",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Rigobon Patrizio",
    posti: [
      { numero: 8, mesi: 4, livello: "L" }
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
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.upf.edu/international/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 8 x 4 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "73-e-lleida01-0232-0232",
    universita: "Universitat de Lleida - Facultat de Lletres, Departament de Llengues i Literatures Estrangeres",
    citta: "Lleida",
    paese: "Spagna",
    codiceErasmus: "E LLEIDA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "0230 Languages" }, { codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Rigobon Patrizio",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 luglio 2026" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://delile.udl.cat/ca/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "74-f-paris178-0230",
    universita: "INALCO - Institut National des Langues et Civilisations Orientales - Department of Russian Studies",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS178",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Ruvoletto Luisa",
    posti: [
      { numero: 3, mesi: 6, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "per corsi di lingua e civilta" },
        { lingua: "Francese", livello: "B1/B2", condizione: "per corsi tematici e disciplinari" },
        { lingua: "Francese", livello: "C1", condizione: "per professional track" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.inalco.fr/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "75-e-madrid04-0230",
    universita: "Universidad Autonoma de Madrid - Faculty of Philosophy and Arts",
    citta: "Madrid",
    paese: "Spagna",
    codiceErasmus: "E MADRID04",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Sainz Gonzalez Eugenia",
    posti: [
      { numero: 1, mesi: 10, livello: "LM", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 10, livello: "L", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "minimo generale per corsi in spagnolo" },
        { lingua: "Spagnolo", livello: "B2", condizione: "obbligatorio per Hispanic Studies e Modern Languages, Culture and Communication" },
        { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "1-30 aprile" },
        { cosa: "Application (autunno)", periodo: "1-31 maggio" },
        { cosa: "Nomination (primavera)", periodo: "1-30 settembre" },
        { cosa: "Application (primavera)", periodo: "1-31 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uam.es/uam/en/internacional/movilidad",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "76-e-sevilla03-0232",
    universita: "Universidad Pablo de Olavide - Departamento de Filologia y Traduccion",
    citta: "Seville",
    paese: "Spagna",
    codiceErasmus: "E SEVILLA03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Sainz Gonzalez Eugenia",
    posti: [
      { numero: 2, mesi: 9, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 9, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B1", condizione: "raccomandato per corsi prevalentemente in spagnolo" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/primavera/anno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno/primavera/anno)", periodo: "entro 30 maggio" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.upo.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2x9 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "77-d-frankfu01-0232",
    universita: "Goethe-Universitat Frankfurt am Main - Faculty of Modern Languages / German Studies",
    citta: "Frankfurt am Main",
    paese: "Germania",
    codiceErasmus: "D FRANKFU01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Sbarra Stefania",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "raccomandato per corsi in tedesco" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "1 maggio - 15 giugno" },
        { cosa: "Application (primavera)", periodo: "1 novembre - 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.goethe-university-frankfurt.de/en?legacy_request=1",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "78-d-dusseld01-0232",
    universita: "Heinrich Heine University Dusseldorf - Faculty of Arts and Humanities",
    citta: "Dusseldorf",
    paese: "Germania",
    codiceErasmus: "D DUSSELD01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Sbarra Stefania",
    posti: [
      { numero: 2, mesi: 5, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "per corsi in tedesco" },
        { lingua: "Inglese", livello: "B1", condizione: "per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 marzo" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 24 aprile" },
        { cosa: "Application (primavera)", periodo: "entro 4 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-duesseldorf.de/home/en/international.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "79-d-bamberg01-0230",
    universita: "Otto-Friedrich-Universitat Bamberg - Faculty of Humanities -",
    citta: "Bamberg",
    paese: "Germania",
    codiceErasmus: "D BAMBERG01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Sbarra Stefania",
    posti: [
      { numero: 4, mesi: 5, livello: "LM", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 4, mesi: 5, livello: "L", note: "su 4 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "richiesto almeno inglese B2 o tedesco B1; certificato non richiesto" },
        { lingua: "Tedesco", livello: "B1", condizione: "richiesto almeno inglese B2 o tedesco B1; certificato non richiesto" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "20 aprile - 15 maggio 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni-bamberg.de/en/studies/exchange-students-eg-erasmus/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "80-d-munster01-0230",
    universita: "Universitat Munster - Institute of German Studies",
    citta: "Munster",
    paese: "Germania",
    codiceErasmus: "D MUNSTER01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Sbarra Stefania",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 1 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 1 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-muenster.de/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "81-e-leon01-0230",
    universita: "Universidad de Leon - Facultad de Filosofia y Letras",
    citta: "Leon",
    paese: "Spagna",
    codiceErasmus: "E LEON01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Scarsella Alessandro",
    posti: [
      { numero: 2, mesi: 6, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 6, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Spagnolo", livello: "B2", condizione: "raccomandato per corsi in spagnolo" },
        { lingua: "Inglese", livello: "B2", condizione: "raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 ottobre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.unileon.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "82-f-bordeau03-0230",
    universita: "Universite Michel de Montaigne Bordeaux 3 - UFR Humanites",
    citta: "Bordeaux",
    paese: "Francia",
    codiceErasmus: "F BORDEAU03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Scarsella Alessandro",
    posti: [
      { numero: 2, mesi: 10, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B1", condizione: "Erasmus, per frequentare lezioni/seminari" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 31 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.u-bordeaux-montaigne.fr/en/preparing-for-your-stay/international-welcome-desk.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "83-f-chamber01-0232",
    universita: "Universite Savoie Mont Blanc - Departement LEA(Departement Langues Etrangeres Appliquees), Faculty of Lettres, Langues et Sciences Humaines (LLSH)",
    citta: "Chambery",
    paese: "Francia",
    codiceErasmus: "F CHAMBER01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics" }],
    coordinatoreCf: "Scarsella Alessandro",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.univ-smb.fr/international/venir-a-luniversite/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "84-irllimeric01-0230",
    universita: "UL - University of Limerick - Faculty of Arts, Humanities and Social Science",
    citta: "",
    paese: "Da verificare",
    codiceErasmus: "IRLLIMERIC01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Sdegno Emma",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli; solo secondo semestre" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli; solo secondo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.ul.ie/courses/international-students",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 L e LM, solo 2° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "85-f-paris468-0230",
    universita: "Sorbonne University - UFR Litterature Francaise et Comparee",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS468",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Sdegno Emma",
    posti: [
      { numero: 2, mesi: 10, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 10, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Francese", livello: "B2", condizione: "per corsi alla Faculte des Lettres" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 aprile 2026" },
        { cosa: "Application/registrazione (autunno)", periodo: "entro 15 maggio 2026" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 settembre 2026" },
        { cosa: "Application (primavera)", periodo: "entro 13 ottobre 2026" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://lettres.sorbonne-universite.fr/international/venir-etudier-a-la-faculte-des-lettres",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "86-tr-istanbu07-0230",
    universita: "Yildiz Teknik University - Faculty of Arts and Sciences - Dept. of Western Languages ​​and Literatures (French Translation and Interpreting)",
    citta: "Istanbul",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU07",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Serragiotto Graziano",
    posti: [
      { numero: 1, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.erasmus.yildiz.edu.tr/page/27/1",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "87-f-paris010-0230",
    universita: "Universite Paris Nanterre - Department de Lettres Modernes (UFR PHILLIA)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS010",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Sofo Giuseppe",
    posti: [
      { numero: 3, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.parisnanterre.fr/venir-etudier-a-luniversite-paris-nanterre",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "88-f-paris010-0231",
    universita: "Universite Paris Nanterre - Department LEA (UFR LCE)",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS010",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0231", nome: "Languages Acquisition" }],
    coordinatoreCf: "Sofo Giuseppe",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.parisnanterre.fr/venir-etudier-a-luniversite-paris-nanterre",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "89-e-cordoba01-0230",
    universita: "Universidad de Cordoba - Facultad de Filosofia y Letras",
    citta: "Cordoba",
    paese: "Spagna",
    codiceErasmus: "E CORDOBA01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Saez Garcia Adrian J.",
    posti: [
      { numero: 2, mesi: 10, livello: "L" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uco.es/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "90-cz-praha07-0232",
    universita: "Charles University - Institute of Czech and Comparative Literature - Faculty of Arts",
    citta: "Prague",
    paese: "Repubblica Ceca",
    codiceErasmus: "CZ PRAHA07",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics Comparative Literature" }],
    coordinatoreCf: "Tiziana D'Amico",
    posti: [
      { numero: 4, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://cuni.cz/UKEN-145.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 4 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "91-cy-pafos01-0310",
    universita: "Neapolis University Pafos (NUP) - Department of History, Politics and International Studies",
    citta: "Pafos",
    paese: "Cipro",
    codiceErasmus: "CY PAFOS01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0310", nome: "Social and Behavioural Sciences" }],
    coordinatoreCf: "Trampus Antonio",
    posti: [
      { numero: 3, mesi: 6, livello: "LM", note: "su 3 posti totali condivisi tra i livelli" },
      { numero: 3, mesi: 6, livello: "L", note: "su 3 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.nup.ac.cy/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "92-nl-rotterd01-0312",
    universita: "Erasmus Universiteit Rotterdam - Erasmus School of Social and Behavioural Sciences",
    citta: "Rotterdam",
    paese: "Paesi Bassi",
    codiceErasmus: "NL ROTTERD01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0312", nome: "Political Sciences and Civics" }],
    coordinatoreCf: "Trampus Antonio",
    posti: [
      { numero: 6, mesi: 6, livello: "LM", note: "su 6 posti totali condivisi tra i livelli" },
      { numero: 6, mesi: 6, livello: "L", note: "su 6 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.eur.nl/en/essb/education/exchange/incoming-exchange-students/factsheet",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 6 x 6 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "93-irl-dublin01-0230",
    universita: "Trinity College Dublin - Department of Italian",
    citta: "Dublin",
    paese: "Irlanda",
    codiceErasmus: "IRL DUBLIN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Baglioni Daniele",
    posti: [
      { numero: 3, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
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
    linkPdf: "",
    linkSito: "https://www.tcd.ie/study/study-abroad/inbound/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5. Lingua e scadenze ospitante da completare nei batch successivi. || Lingua: CEFR non pubblicato ufficialmente"
  },
  {
    id: "94-d-heidelb01-0222",
    universita: "Ruprecht-Karls-Universitat Heidelberg - Seminar fur Alte Geschichte und Epigraphik",
    citta: "Heidelberg",
    paese: "Germania",
    codiceErasmus: "D HEIDELB01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Calvelli Lorenzo",
    posti: [
      { numero: 2, mesi: 6, livello: "L", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B1", condizione: "livello minimo raccomandato per mobilita studenti" },
        { lingua: "Inglese", livello: "B2", condizione: "livello raccomandato per corsi in inglese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 15 maggio" },
        { cosa: "Nomination (primavera)", periodo: "entro 15 novembre" },
        { cosa: "Application (autunno)", periodo: "entro 15 giugno" },
        { cosa: "Application (primavera)", periodo: "entro 15 dicembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uni-heidelberg.de/international/erasmus/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 L solo 1°sem. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "95-a-wien78-0222",
    universita: "Central European University - Department of Medieval Studies and Department of History",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A WIEN78",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Calvelli Lorenzo",
    posti: [
      { numero: 2, mesi: 10, livello: "LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.ceu.edu/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "96-g-athine42-0230",
    universita: "Ionian University - Department of Foreign Languages, Translation & Interpreting (DFLTI)",
    citta: "Athine",
    paese: "Da verificare",
    codiceErasmus: "G ATHINE42",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [
      { numero: 1, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.ionio.gr/central/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "97-g-athine01-0230",
    universita: "National and Kapodistrian University of Athens - Department of Italian Language and Literature - School of Philology",
    citta: "Athine",
    paese: "Da verificare",
    codiceErasmus: "G ATHINE01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [
      { numero: 1, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://en.uoa.gr/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "98-g-kallith02-0320",
    universita: "Panteion University of Social and Political Sciences - Department of Communications, Media and Culture",
    citta: "Kallith",
    paese: "Da verificare",
    codiceErasmus: "G KALLITH02",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0320", nome: "Journalism and Information" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [
      { numero: 2, mesi: 6, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://erasmus.panteion.gr/index.php/programs/incoming-students",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 6 solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "99-g-komotin01-0232",
    universita: "Democritus University of Thrace - Department of Greek Philology and Department of Primary Education",
    citta: "Komotin",
    paese: "Da verificare",
    codiceErasmus: "G KOMOTIN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics" }],
    coordinatoreCf: "Carpinato Caterina",
    posti: [
      { numero: 1, mesi: 5, livello: "L" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.duth.gr/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "100-tr-istanbu03-0230",
    universita: "Istanbul University - Faculty of Letters - Department of Italian Language and Literature",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU03",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Cinquegrani Alessandro",
    posti: [
      { numero: 1, mesi: 4, livello: "PhD", note: "su 1 posti totali condivisi tra i livelli" },
      { numero: 1, mesi: 4, livello: "L", note: "su 1 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://erasmus.istanbul.edu.tr/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 4, L e PhD. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "101-a-wien01-0222",
    universita: "Universitat Wien - Department of Near Eastern Studies (Assyriology)",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Coro Paola",
    posti: [
      { numero: 1, mesi: 6, livello: "LM", note: "su 1 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 1, mesi: 6, livello: "L", note: "su 1 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://international.univie.ac.at/en/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "102-luxlux-vil01-0222",
    universita: "University of Luxembourg - Centre for Contemporary and Digital History",
    citta: "",
    paese: "Da verificare",
    codiceErasmus: "LUXLUX-VIL01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and archaeology" }],
    coordinatoreCf: "Dall'Aglio Stefano",
    posti: [
      { numero: 5, mesi: 5, livello: "LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.uni.lu/en/mobility/incoming-exchange-students/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 5 X 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "103-g-athine01-0222",
    universita: "National And Kapodistrian University of Athens - Faculty of History and Archeology",
    citta: "Athine",
    paese: "Da verificare",
    codiceErasmus: "G ATHINE01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "De Vido Stefania",
    posti: [
      { numero: 2, mesi: 10, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://en.uoa.gr/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 10. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "104-d-berlin13-0231",
    universita: "Humboldt-Universitat zu Berlin - Faculty of Language, Literature and Humanitites",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D BERLIN13",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0231", nome: "Languages Acquisition" }],
    coordinatoreCf: "Drusi Riccardo",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.international.hu-berlin.de/en/studierende/aus-dem-ausland",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "105-nl-tilburg01-0220",
    universita: "Tilburg University - School of Humanities and Digital Science (SHD)",
    citta: "Tilburg",
    paese: "Paesi Bassi",
    codiceErasmus: "NL TILBURG01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Fischer Franz",
    posti: [
      { numero: 3, mesi: 5, livello: "LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.tilburguniversity.edu/education/exchange-programs",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 3 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "106-sf-helsink01-0200",
    universita: "University of Helsinki - Faculty of Humanities",
    citta: "Helsinki",
    paese: "Finlandia",
    codiceErasmus: "SF HELSINK01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0200", nome: "Arts and Humanities" }],
    coordinatoreCf: "Fischer Franz",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "L", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per studi principalmente in inglese" },
        { lingua: "Finlandese", livello: "B2", condizione: "per studi principalmente in finlandese" },
        { lingua: "Svedese", livello: "B2", condizione: "per studi principalmente in svedese" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno/anno)", periodo: "almeno due settimane prima della scadenza di registrazione" },
        { cosa: "Nomination (primavera)", periodo: "almeno due settimane prima della scadenza di registrazione" },
        { cosa: "Application non UE/SEE (autunno/anno)", periodo: "1-15 aprile" },
        { cosa: "Application UE/SEE/Svizzera (autunno/anno)", periodo: "1-15 maggio" },
        { cosa: "Application non UE/SEE (primavera)", periodo: "16-30 settembre" },
        { cosa: "Application UE/SEE/Svizzera (primavera)", periodo: "1-15 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.helsinki.fi/en/studying/how-to-apply/exchange-studies",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2x5 L e LM. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "107-a-wien01-0232",
    universita: "Universitat Wien - Faculty of Historical and Cultural Studies and Faculty of Philological and Cultural Studies",
    citta: "Wien",
    paese: "Austria",
    codiceErasmus: "A WIEN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and Linguistics" }],
    coordinatoreCf: "Fischer Franz",
    posti: [
      { numero: 2, mesi: 5, livello: "LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://international.univie.ac.at/en/student-mobility/incoming-students/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "108-d-munchen01-0220",
    universita: "LMU - Ludwig-Maximilians-Universitat Munchen - Institute of Assyriology and Hittite Studies",
    citta: "Munich",
    paese: "Germania",
    codiceErasmus: "D MUNCHEN01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0220", nome: "Humanities" }],
    coordinatoreCf: "Maiocchi Massimo",
    posti: [
      { numero: 1, mesi: 6, livello: "L/LM", note: "solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "C1", condizione: "America Institute / North American Studies" },
        { lingua: "Tedesco", livello: "B2", condizione: "requisito generale all'inizio degli studi per corsi in tedesco" }
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
    linkPdf: "",
    linkSito: "http://www.en.uni-muenchen.de/students/exchange/incomings/austausch_engl/index.html",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6 solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "109-d-berlin13-0232",
    universita: "Humboldt-Universitat zu Berlin - Faculty of Language, Literature and Humanitites",
    citta: "Berlin",
    paese: "Germania",
    codiceErasmus: "D BERLIN13",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0232", nome: "Literature and linguistics" }],
    coordinatoreCf: "Pontani Filippomaria",
    posti: [
      { numero: 1, mesi: 5, livello: "LM", note: "su 1 posti totali condivisi tra i livelli; solo primo semestre" },
      { numero: 1, mesi: 5, livello: "L", note: "su 1 posti totali condivisi tra i livelli; solo primo semestre" }
    ],
    requisitoLingua: [
        { lingua: "Tedesco", livello: "B2", condizione: "per corsi in tedesco" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Nomination (autunno)", periodo: "entro 30 aprile" },
        { cosa: "Application (autunno)", periodo: "15 aprile - 31 maggio" },
        { cosa: "Application (primavera)", periodo: "15 ottobre - 30 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.international.hu-berlin.de/en/studierende/aus-dem-ausland",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 L e LM, solo 1° sem.. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "110-f-paris001-0222",
    universita: "Universite Paris 1 Pantheon-Sorbonne - UFR03 Histoire de l'Art et Archeologie",
    citta: "Paris",
    paese: "Francia",
    codiceErasmus: "F PARIS001",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Rova Elena",
    posti: [
      { numero: 2, mesi: 5, livello: "L/LM" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.pantheonsorbonne.fr/international/foreign-students/exchange-student-application-bachelor-master/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "111-tr-istanbu17-0222",
    universita: "Koc University - Archaeology and History of Art Department and History Department",
    citta: "Istanbu",
    paese: "Turchia",
    codiceErasmus: "TR ISTANBU17",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0222", nome: "History and Archaeology" }],
    coordinatoreCf: "Tonghini Cristina",
    posti: [
      { numero: 2, mesi: 5, livello: "PhD", note: "su 2 posti totali condivisi tra i livelli" },
      { numero: 2, mesi: 5, livello: "LM", note: "su 2 posti totali condivisi tra i livelli" }
    ],
    requisitoLingua: [],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://oip.ku.edu.tr/mobility-programs/incoming/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 2 x 5 LM e PhD. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "112-s-stockho01-0230",
    universita: "Stockholms Universitet - Department of Romance Studies and Classics",
    citta: "Stockholm",
    paese: "Svezia",
    codiceErasmus: "S STOCKHO01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Zava Alberto",
    posti: [
      { numero: 1, mesi: 6, livello: "L/LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese", livello: "B2", condizione: "per corsi con lingua di insegnamento inglese" },
        { lingua: "Francese/Italiano/Portoghese/Spagnolo", livello: "B2", condizione: "per corsi con lingua di insegnamento francese, italiana, portoghese o spagnola" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno)", periodo: "entro 10 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 10 ottobre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "https://www.su.se/department-of-romance-studies-and-classics/education/incoming-exchange-students",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 6. Lingua e scadenze ospitante da completare nei batch successivi."
  },
  {
    id: "113-pl-warszaw01-0230",
    universita: "Uniwersytet Warszawski - Department of Italian Studies",
    citta: "Warsaw",
    paese: "Polonia",
    codiceErasmus: "PL WARSZAW01",
    dipartimentoCf: "Studi Linguistici e Culturali Comparati",
    areeDisciplinari: [{ codice: "0230", nome: "Languages" }],
    coordinatoreCf: "Zava Alberto",
    posti: [
      { numero: 1, mesi: 5, livello: "LM" }
    ],
    requisitoLingua: [
        { lingua: "Inglese o Polacco", livello: "B2", condizione: "per studenti exchange/incoming" }
      ],
    prerequisiti: "Da verificare sulla scheda ufficiale della destinazione.",
    scadenzeOspitante: [
        { cosa: "Application (autunno/anno)", periodo: "entro 15 maggio" },
        { cosa: "Application (primavera)", periodo: "entro 15 novembre" }
      ],
    alloggio: "Da verificare sulla scheda/sito dell'universita ospitante.",
    visto: "Cittadini UE: nessun visto. Cittadini extra-UE: visto obbligatorio (verificare).",
    crediti: "Tipicamente 30 ECTS/semestre (standard Erasmus) - da confermare.",
    linkPdf: "",
    linkSito: "http://www.uw.edu.pl/",
    notePratiche: "Aperta a: Dipartimento di Studi Linguistici e Culturali Comparati [Dati ufficiali bando 2026/27] ciclo/posti: 1 x 5 LM. Lingua e scadenze ospitante da completare nei batch successivi."
  }
];

if (typeof window !== "undefined") {
  window.METE = window.METE || [];
  window.METE.push(...METE);
}

if (typeof module !== "undefined") {
  module.exports = METE;
}