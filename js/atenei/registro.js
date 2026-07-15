// Registro degli atenei: l'anagrafica che il sito deve conoscere PRIMA di
// sapere quali dati caricare. Solo fatti dichiarati, nessuna logica: la logica
// di caricamento sta in js/carica-atenei.js (regola d'oro n.1).
//
// Perche' esiste (R1.5, sessione 56). Fino alla sessione 55 index.html
// caricava in sequenza le mete di ENTRAMBI gli atenei — 2.263 KB di JS, ~2.100
// mete — prima ancora di sapere quale servisse: 7 secondi al primo avvio su
// Galaxy S21 in 4G (misura di Nicola, 15/07). Per caricare solo l'ateneo
// attivo servono label e disponibilita' DICHIARATE: prima "disponibile" si
// deduceva contando le mete (`_meteAllSap.length > 0`), il che obbligava a
// scaricarle tutte solo per scoprire che l'ateneo esisteva.
//
// Aggiungere un ateneo = aggiungere una voce qui + la sua cartella. index.html
// non si tocca piu'.
//
// ATTENZIONE: l'ordine dei file in `mete` e' l'ordine in cui vengono
// concatenati, ed e' quindi l'ordine in cui le mete compaiono a parita' di
// compatibilita'. Non riordinare senza motivo.

var ATENEI_REGISTRO = {
  cafoscari: {
    key: "cafoscari",
    label: "Ca' Foscari Venezia",
    disponibile: true,
    bandoUrl: "https://www.unive.it/erasmus-studio",
    portaleUrl: "https://www.unive.it/data/11631/",
    cartella: "js/atenei/cafoscari/",
    mete: [
      "dati-mete.js",
      "dati-mete-management.js",
      "dati-mete-lingue.js",
      "dati-mete-scienze.js",
      "dati-mete-filosofia.js",
      "dati-mete-linguistici.js",
      "dati-mete-umanistici.js",
      "dati-mete-molecolari.js"
    ],
    contorno: [
      "dati-bando.js",
      "dati-borse.js",
      "dati-scadenze.js",
      "dati-checklist.js",
      "dati-postselezione.js"
    ]
  },

  sapienza: {
    key: "sapienza",
    label: "Sapienza Roma",
    // Dichiarato, non dedotto: 1.595 mete su 18 Facolta' (verificato 15/07).
    disponibile: true,
    bandoUrl: "https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio",
    portaleUrl: "https://www.uniroma1.it/it/pagina/erasmus-studenti-sapienza-studio",
    cartella: "js/atenei/sapienza/",
    mete: [
      "dati-mete-giurisprudenza.js",
      "dati-mete-medicina-psicologia-area-medica.js",
      "dati-mete-architettura.js",
      "dati-mete-farmacia.js",
      "dati-mete-comunicazione.js",
      "dati-mete-scienze-sociali.js",
      "dati-mete-psicologia.js",
      "dati-mete-scienze-politiche.js",
      "dati-mete-inge-elettronica.js",
      "dati-mete-polo-latina.js",
      "dati-mete-scienze-statistiche.js",
      "dati-mete-informatica.js",
      "dati-mete-inge-informatica-gestionale.js",
      "dati-mete-medicina-odontoiatria.js",
      "dati-mete-ingegneria-civile.js",
      "dati-mete-scienze-mfn.js",
      "dati-mete-lettere-filosofia.js"
    ],
    contorno: [
      "dati-bando.js",
      "dati-borse.js",
      "dati-scadenze.js",
      "dati-checklist.js",
      "dati-postselezione.js"
    ]
  }
};

// L'ateneo di chi arriva senza aver mai scelto. Ca' Foscari e' anche il piu'
// leggero (744 KB contro 1.840): chi atterra per la prima volta paga il meno
// possibile prima di dire dove studia.
var ATENEO_PREDEFINITO = "cafoscari";
