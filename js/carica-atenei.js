// Caricamento dati progressivo (R1.5, sessione 56).
//
// IL PROBLEMA. Fino alla sessione 55 index.html elencava a mano i file di
// ENTRAMBI gli atenei e li caricava tutti, sempre: 2.263 KB di JS e ~2.100 mete
// prima ancora di sapere quale ateneo servisse. Misura di Nicola del 15/07 su
// Galaxy S21 in 4G, scheda in incognito: 7 secondi al primo avvio. Uno studente
// di Ca' Foscari scaricava le 1.595 mete della Sapienza per non guardarle mai.
//
// LA REGOLA. Si carica UN ateneo solo: quello attivo. L'ateneo attivo si sa
// prima di qualunque dato (`erasmuswiz_ateneo` in localStorage, una sola fonte
// di verita' dalla sessione 54/R1.3), e label e disponibilita' degli ALTRI
// arrivano da js/atenei/registro.js senza scaricarne le mete.
//
// L'ECCEZIONE, ed e' il punto delicato. La migrazione dello zaino vecchio
// (R1.3, `migraZainoLegacy` in app.js) attribuisce ogni chiave all'ateneo che
// la riconosce, leggendo dagli id delle mete. Con un ateneo solo in memoria le
// stelline dell'altro non verrebbero riconosciute da nessuno e sparirebbero
// in silenzio: esattamente la perdita che R1.3 esiste per impedire. Percio'
// quando c'e' una migrazione da fare si caricano TUTTI gli atenei, una volta
// sola. Nel dubbio si carica tutto: lento non e' sbagliato.
//
// PERCHE' document.write. app.js legge i dati come globali gia' pronti a tempo
// di parsing (`let CONTENITORE = caricaContenitore()` gira subito). I tag
// scritti qui durante il parsing mantengono ESATTAMENTE quella semantica
// sincrona e nell'ordine dichiarato, senza toccare app.js. Uno script creato
// con createElement sarebbe asincrono e girerebbe DOPO app.js, cioe' a dati
// vuoti. L'intervento di Chrome contro document.write colpisce solo gli script
// di TERZE PARTI: questi sono same-origin e non sono interessati.
(function () {
  "use strict";

  var CHIAVE_ATENEO = "erasmuswiz_ateneo";
  var CHIAVE_ZAINO  = "erasmuswiz-zaino";
  // Rete di sicurezza scritta da app.js quando scopre di dover migrare senza
  // avere tutti gli atenei in memoria (vedi assicuraAteneiPerMigrazione).
  var CHIAVE_TUTTI  = "erasmuswiz_carica_tutti";

  function leggi(store, chiave) {
    try { return store.getItem(chiave); } catch (e) { return null; }
  }

  // Quale ateneo serve. Uno sconosciuto o non disponibile (dati cambiati sotto
  // i piedi) non blocca l'avvio: si torna al predefinito.
  function ateneoAttivo() {
    var salvato = leggi(localStorage, CHIAVE_ATENEO);
    var voce = ATENEI_REGISTRO[salvato];
    return (voce && voce.disponibile) ? salvato : ATENEO_PREDEFINITO;
  }

  // Serve l'intero registro invece del solo ateneo attivo?
  function servonoTutti() {
    if (leggi(sessionStorage, CHIAVE_TUTTI)) return true;
    var grezzo = leggi(localStorage, CHIAVE_ZAINO);
    if (!grezzo) return false;               // utente nuovo: niente da migrare
    var dato;
    try { dato = JSON.parse(grezzo); } catch (e) { return false; } // illeggibile: app.js riparte da zero
    if (!dato || typeof dato !== "object") return false;
    if (!dato.zaini) return true;            // formato piatto: c'e' una migrazione da fare
    if (dato.pendente) return true;          // domanda in sospeso: servono i candidati
    return false;
  }

  var attivo = ateneoAttivo();
  var tutti  = servonoTutti();

  var daCaricare = tutti
    ? Object.keys(ATENEI_REGISTRO).filter(function (k) { return ATENEI_REGISTRO[k].disponibile; })
    : [attivo];

  // app.js si fida di questo per sapere se puo' migrare in sicurezza.
  window.ATENEI_CARICATI = daCaricare.slice();
  window.ATENEI = {};

  // ---- Glue usato SOLO dai tag emessi qui sotto ----------------------------
  // Ogni file mete dichiara `var METE` e sovrascrive il precedente: per questo
  // la concatenazione va fatta TRA un file e l'altro, non alla fine.
  var accumulate = [];

  window.__ewIniziaAteneo = function () { accumulate = []; };

  window.__ewAccumulaMete = function () {
    accumulate = accumulate.concat(typeof METE !== "undefined" && METE ? METE : []);
  };

  // Fotografa i globali dell'ateneo appena caricato, prima che il prossimo li
  // sovrascriva. I nomi sono quelli dichiarati dai file dati (SCADENZE_CAFOSCARI
  // e' un nome storico: lo usano entrambi gli atenei).
  window.__ewRegistraAteneo = function (k) {
    var voce = ATENEI_REGISTRO[k];
    window.ATENEI[k] = {
      key: k,
      label: voce.label,
      disponibile: voce.disponibile,
      mete: accumulate,
      requisiti: typeof REQUISITI_BANDO !== "undefined" ? REQUISITI_BANDO : [],
      bandoInfo: typeof BANDO_INFO !== "undefined" ? BANDO_INFO : {},
      borse: typeof BORSE_INFO !== "undefined" ? BORSE_INFO : {},
      scadenze: typeof SCADENZE_CAFOSCARI !== "undefined" ? SCADENZE_CAFOSCARI : [],
      scadenzeInfo: typeof SCADENZE_INFO !== "undefined" ? SCADENZE_INFO : {},
      checklist: typeof CHECKLIST !== "undefined" ? CHECKLIST : [],
      checklistPost: typeof CHECKLIST_POST !== "undefined" ? CHECKLIST_POST : [],
      bandoUrl: voce.bandoUrl,
      portaleUrl: voce.portaleUrl
    };
  };

  // Punta i globali che app.js gia' legge sull'ateneo attivo. Identico a quello
  // che index.html faceva a mano fino alla sessione 55.
  window.__ewAttivaAteneo = function () {
    var A = window.ATENEI[attivo];
    window.ATENEO_ATTIVO = attivo;
    window.METE               = A.mete          || [];
    window.REQUISITI_BANDO    = A.requisiti     || [];
    window.BANDO_INFO         = A.bandoInfo     || {};
    window.BORSE_INFO         = A.borse         || {};
    window.SCADENZE_CAFOSCARI = A.scadenze      || [];
    window.SCADENZE_INFO      = A.scadenzeInfo  || {};
    window.CHECKLIST          = A.checklist     || [];
    window.CHECKLIST_POST     = A.checklistPost || [];
    window.ATENEO_LABEL       = A.label      || ATENEI_REGISTRO[ATENEO_PREDEFINITO].label;
    window.ATENEO_BANDO_URL   = A.bandoUrl   || ATENEI_REGISTRO[ATENEO_PREDEFINITO].bandoUrl;
    window.ATENEO_PORTALE_URL = A.portaleUrl || ATENEI_REGISTRO[ATENEO_PREDEFINITO].portaleUrl;
    // La rete di sicurezza e' servita (o non serviva): non ripeterla al prossimo avvio.
    try { sessionStorage.removeItem(CHIAVE_TUTTI); } catch (e) {}
  };

  // ---- Emissione dei tag ---------------------------------------------------
  var html = [];
  function src(f) { html.push('<script src="' + f + '"><\/script>'); }
  function inline(js) { html.push('<script>' + js + '<\/script>'); }

  daCaricare.forEach(function (k) {
    var voce = ATENEI_REGISTRO[k];
    inline("__ewIniziaAteneo();");
    voce.contorno.forEach(function (f) { src(voce.cartella + f); });
    voce.mete.forEach(function (f) {
      src(voce.cartella + f);
      inline("__ewAccumulaMete();");
    });
    inline('__ewRegistraAteneo("' + k + '");');
  });
  inline("__ewAttivaAteneo();");

  document.write(html.join("\n"));
})();
