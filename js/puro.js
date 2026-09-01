// Funzioni pure condivise tra il browser e i test Node.
//
// V0 — "Il motore di compatibilità smette di mentire".
// Questo file non legge DOM, localStorage o globali dell'applicazione: riceve
// dati e restituisce dati. In questo modo app.js usa la stessa identica logica
// provata dai test, senza copiarla in otto punti diversi.
(function (radice, fabbrica) {
  "use strict";
  var api = fabbrica();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (radice) radice.ErasmusWizPuro = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var SCALA_CEFR = Object.freeze(["A1", "A2", "B1", "B2", "C1", "C2"]);
  var ESITI_LINGUA = Object.freeze({
    SODDISFATTO: "soddisfatto",
    NON_SODDISFATTO: "nonSoddisfatto",
    SCONOSCIUTO: "sconosciuto",
    CONDIZIONATO: "soddisfattoCondizionato"
  });

  function testo(value) {
    return value == null ? "" : String(value).trim();
  }

  // Interpreta la sola forma dell'indirizzo, senza leggere browser, DOM o
  // registro globale. Le rotte profonde possono avere uno o due livelli e,
  // in coda, la chiave di un ateneo noto. La registrazione resta separata:
  // capire `mete/scelte/sapienza` non significa renderla navigabile prima
  // che V6 costruisca davvero quella schermata.
  function destDaHash(grezzo, configurazione) {
    var opzioni = configurazione || {};
    var pulito = testo(grezzo).replace(/^#/, "");
    if (!pulito || pulito.charAt(0) === "/") return null;

    var segmentiGrezzi = pulito.split("/");
    if (segmentiGrezzi.length > 3) return null;

    var segmenti = [];
    for (var i = 0; i < segmentiGrezzi.length; i += 1) {
      var segmento;
      try {
        segmento = decodeURIComponent(segmentiGrezzi[i]);
      } catch (e) {
        return null;
      }
      segmento = testo(segmento).toLocaleLowerCase("it");
      // Segmenti vuoti o una barra nascosta tramite percent-encoding
      // renderebbero ambiguo il numero reale di livelli.
      if (!segmento || /[\/#]/.test(segmento)) return null;
      segmenti.push(segmento);
    }

    var ateneiValidi = (opzioni.ateneiValidi || [])
      .map(function (chiave) { return testo(chiave).toLocaleLowerCase("it"); });
    var ateneo = null;
    if (segmenti.length >= 2 &&
        ateneiValidi.indexOf(segmenti[segmenti.length - 1]) >= 0) {
      ateneo = segmenti.pop();
    }
    if (segmenti.length < 1 || segmenti.length > 2) return null;

    var rotta = segmenti.join("/");
    var alias = opzioni.aliasHash || {};
    var canonica = testo(alias[rotta] || rotta).toLocaleLowerCase("it");
    var registrate = (opzioni.destinazioniValide || [])
      .map(function (destinazione) {
        return testo(destinazione).toLocaleLowerCase("it");
      });

    return {
      rotta: canonica,
      segmenti: segmenti.slice(),
      ateneo: ateneo,
      destinazione: registrate.indexOf(canonica) >= 0 ? canonica : null
    };
  }

  // V2 — il formato persistito cambia da contenitore v2 a v3. La migrazione
  // vive qui perche' deve poter essere provata senza DOM e localStorage: lo
  // zaino di uno studente non puo' dipendere dal modo in cui si apre la pagina.
  var VERSIONE_CONTENITORE_ZAINO = 3;
  var FASI_VIAGGIO = Object.freeze(["esplorando", "in-attesa", "selezionato"]);

  function copiaPersistibile(valore) {
    if (valore === undefined) return undefined;
    try {
      return JSON.parse(JSON.stringify(valore));
    } catch (e) {
      return valore;
    }
  }

  function cicloSuccessivo(ciclo) {
    var parti = testo(ciclo).match(/^(\d{4})\/(\d{2}|\d{4})$/);
    if (!parti) return "";
    var inizio = Number(parti[1]) + 1;
    var fineCompleta = parti[2].length === 2
      ? Number(parti[1].slice(0, 2) + parti[2]) + 1
      : Number(parti[2]) + 1;
    return inizio + "/" + String(fineCompleta).slice(-2);
  }

  // V4 — il pre-bando descrive il rapporto tra il percorso dello studente
  // e il ciclo dei dati. Non modifica lo stato del bando e non legge né
  // browser né orologio: riceve tutto come argomento, così il contratto è
  // verificabile senza DOM.
  function modoCiclo(configurazione) {
    var opzioni = configurazione || {};
    var stato = testo(opzioni.stato);
    var cicloDati = testo(opzioni.cicloDati);
    var cicloPercorso = testo(opzioni.cicloPercorso);
    if (!cicloDati || !cicloPercorso) return "corrente";
    if (stato === "non-pubblicato") return "corrente";
    var cicloConclusoOChiuso =
      stato === "chiuso-ciclo-attivo" || stato === "dati-scaduti";
    return cicloConclusoOChiuso && cicloPercorso !== cicloDati
      ? "pre-bando"
      : "corrente";
  }

  function faseViaggioV3(fase) {
    if (fase === "domanda") return "esplorando";
    return FASI_VIAGGIO.indexOf(fase) >= 0 ? fase : "esplorando";
  }

  function oggettoSemplice(valore) {
    return !!valore && typeof valore === "object" && !Array.isArray(valore);
  }

  function haChiavi(valore) {
    return oggettoSemplice(valore) && Object.keys(valore).length > 0;
  }

  function zainoLegacyHaContenuto(zaino) {
    if (!oggettoSemplice(zaino)) return false;
    var fase = zaino.fase;
    return !!(
      zaino.profilo ||
      (fase && fase !== "domanda" && fase !== "esplorando") ||
      zaino.onboardingFatto ||
      zaino.zainoCelebrato ||
      (Array.isArray(zaino.metePreferite) && zaino.metePreferite.length) ||
      (Array.isArray(zaino.schedina) && zaino.schedina.length) ||
      haChiavi(zaino.checklist) ||
      haChiavi(zaino.checklistPost) ||
      haChiavi(zaino.autoverifica) ||
      haChiavi(zaino.la && zaino.la.bozzePerMeta) ||
      haChiavi(zaino.la && zaino.la.dossiersById)
    );
  }

  function creaZainoV3(configurazione) {
    var opzioni = configurazione || {};
    var cicloDati = testo(opzioni.cicloDati);
    var cicloPercorso = testo(opzioni.cicloPercorso) ||
      testo(opzioni.cicloPercorsoNuovo) ||
      cicloSuccessivo(cicloDati) ||
      cicloDati;
    return {
      profilo: null,
      checklist: {},
      metePreferite: [],
      schedina: [],
      fase: "esplorando",
      checklistPost: {},
      onboardingFatto: false,
      autoverifica: {},
      zainoCelebrato: false,
      wizardMete: false,
      la: creaLaV2(),
      cicloPercorso: cicloPercorso,
      cicloDati: cicloDati,
      storico: {},
      schedinaCiclo: {}
    };
  }

  function normalizzaZainoV3(grezzo, configurazione) {
    var opzioni = configurazione || {};
    var valido = oggettoSemplice(grezzo);
    var originale = valido ? copiaPersistibile(grezzo) : {};
    var cicloDati = testo(originale.cicloDati) || testo(opzioni.cicloDati);
    var legacyConContenuto =
      !!opzioni.forzaCicloLegacy || zainoLegacyHaContenuto(originale);
    var cicloPercorso = testo(originale.cicloPercorso);
    if (!cicloPercorso) {
      cicloPercorso = legacyConContenuto
        ? (testo(opzioni.cicloPercorsoLegacy) || cicloDati)
        : (testo(opzioni.cicloPercorsoNuovo) || cicloSuccessivo(cicloDati) || cicloDati);
    }

    // Object.assign conserva anche campi che una versione futura non conosce:
    // ignorarli sarebbe una cancellazione silenziosa durante la migrazione.
    var zaino = Object.assign(
      creaZainoV3({
        cicloDati: cicloDati,
        cicloPercorso: cicloPercorso,
        cicloPercorsoNuovo: opzioni.cicloPercorsoNuovo
      }),
      originale
    );

    zaino.fase = faseViaggioV3(originale.fase);
    zaino.cicloDati = cicloDati;
    zaino.cicloPercorso = cicloPercorso;
    if (!Array.isArray(zaino.metePreferite)) zaino.metePreferite = [];
    if (!Array.isArray(zaino.schedina)) zaino.schedina = [];
    var scelteNormalizzate = normalizzaListeScelte(
      zaino.metePreferite,
      zaino.schedina
    );
    zaino.metePreferite = scelteNormalizzate.metePreferite;
    zaino.schedina = scelteNormalizzate.schedina;
    if (!oggettoSemplice(zaino.checklist)) zaino.checklist = {};
    if (!oggettoSemplice(zaino.checklistPost)) zaino.checklistPost = {};
    if (!oggettoSemplice(zaino.autoverifica)) zaino.autoverifica = {};
    if (!oggettoSemplice(zaino.storico)) zaino.storico = {};
    if (!oggettoSemplice(zaino.schedinaCiclo)) zaino.schedinaCiclo = {};
    if (typeof zaino.onboardingFatto !== "boolean") {
      zaino.onboardingFatto = !!zaino.profilo;
    }
    if (typeof zaino.zainoCelebrato !== "boolean") {
      zaino.zainoCelebrato = originale.fase === "selezionato";
    }
    if (typeof zaino.wizardMete !== "boolean") zaino.wizardMete = false;
    zaino.la = normalizzaLaV2(zaino.la, {
      ateneo: testo(opzioni.ateneo),
      ciclo: zaino.cicloPercorso
    });

    if (!valido && grezzo !== undefined && grezzo !== null) {
      zaino.recuperoLegacy = copiaPersistibile(grezzo);
    }
    return zaino;
  }

  function migraContenitoreZainoV3(grezzo, configurazione) {
    var opzioni = configurazione || {};
    var dato = oggettoSemplice(grezzo) ? copiaPersistibile(grezzo) : {};
    var sembraContenitore =
      Object.prototype.hasOwnProperty.call(dato, "zaini") ||
      Object.prototype.hasOwnProperty.call(dato, "v");

    // Il formato piatto richiede l'attribuzione per ateneo, che dipende dagli
    // id reali caricati dall'app. La funzione resta pura ricevendo quel solo
    // adattatore dall'esterno.
    if (!sembraContenitore && typeof opzioni.migraPiatto === "function") {
      dato = opzioni.migraPiatto(copiaPersistibile(grezzo));
      sembraContenitore = true;
    }

    var contenitore = sembraContenitore && oggettoSemplice(dato)
      ? dato
      : {};
    var zainiGrezzi = oggettoSemplice(contenitore.zaini)
      ? contenitore.zaini
      : {};
    var zainiIlleggibili =
      Object.prototype.hasOwnProperty.call(contenitore, "zaini") &&
      !oggettoSemplice(contenitore.zaini)
        ? copiaPersistibile(contenitore.zaini)
        : undefined;
    var zaini = {};
    var chiavi = Object.keys(zainiGrezzi);
    var vieneDaVersioneLegacy =
      Number(contenitore.v) !== VERSIONE_CONTENITORE_ZAINO;
    (opzioni.atenei || []).forEach(function (ateneo) {
      if (chiavi.indexOf(ateneo) < 0) chiavi.push(ateneo);
    });

    chiavi.forEach(function (ateneo) {
      zaini[ateneo] = normalizzaZainoV3(
        zainiGrezzi[ateneo],
        Object.assign({}, opzioni, {
          forzaCicloLegacy: vieneDaVersioneLegacy,
          ateneo: ateneo
        })
      );
    });

    contenitore.zaini = zaini;
    contenitore.v = VERSIONE_CONTENITORE_ZAINO;
    if (zainiIlleggibili !== undefined) {
      contenitore.recuperoContenitoreLegacy = zainiIlleggibili;
    }
    return contenitore;
  }

  function chiaveLingua(value) {
    return testo(value).toLocaleLowerCase("it");
  }

  function maiuscolaIniziale(value) {
    var pulito = testo(value);
    return pulito ? pulito.charAt(0).toLocaleUpperCase("it") + pulito.slice(1) : "";
  }

  function livelloCefr(value) {
    var pulito = testo(value).toUpperCase();
    return SCALA_CEFR.indexOf(pulito) >= 0 ? pulito : null;
  }

  function linguaSegnaposto(value) {
    var pulito = chiaveLingua(value);
    return !pulito ||
      /^(?:n\/a|na|nessuna|nessuno|non indicata|non indicato|non specificata|non specificato|da verificare|sconosciuta|sconosciuto|-)$/.test(pulito) ||
      /^lingua (?:degli studi|del corso scelto|di insegnamento(?: dei corsi scelti)?|principale (?:del programma scelto|di insegnamento del programma scelto)|da verificare)$/.test(pulito);
  }

  // La specifica autorizza la conversione automatica soltanto di "X o Y" e
  // "X oppure Y". Barre, virgole, "e" e simboli restano debito da verificare:
  // interpretarli qui significherebbe inventare la semantica della fonte.
  function linguaNonSemplice(value) {
    return /[\/,;|&]|\s+e\s+/i.test(testo(value));
  }

  function quandoDaCondizione(condizione) {
    var c = testo(condizione).toLocaleLowerCase("it");
    if (!c) return null;
    var indicaL = /\b(?:bachelor|undergraduate|triennal[ei]|laurea triennale|primo ciclo)\b|studenti\s+ba\b/.test(c);
    var indicaLM = /\b(?:master|graduate|postgraduate|magistral[ei]|laurea magistrale|secondo ciclo)\b|studenti\s+ma\b/.test(c);
    // Una frase che nomina entrambi i cicli non seleziona una sola foglia.
    if (indicaL === indicaLM) return null;
    return { livello: indicaL ? "L" : "LM" };
  }

  function dipendeDaiCorsi(condizione) {
    var c = testo(condizione).toLocaleLowerCase("it");
    if (!c) return false;
    // Una frase può selezionare insieme il ciclo e i corsi, per esempio
    // "per corsi Master in inglese": in quel caso servono entrambi i flag.
    // I richiami generici a programma/facoltà restano invece un indizio sui
    // corsi solo quando non sono già un semplice selettore L/LM.
    if (/\b(?:cors[io]|insegnament[io]|lezion[ei]|materi[ae]|learning agreement|lingua di insegnamento|piano di studi|scelta dei corsi|corso scelto)\b/.test(c)) {
      return true;
    }
    // «per studiare in sloveno», «per studi principalmente in inglese», «per
    // moduli in tedesco»: dicono la stessa cosa di «per corsi in tedesco» con
    // altre parole, cioè che il requisito dipende dalla lingua in cui lo
    // studente sceglierà di studiare. Senza questa riga finivano fra le
    // `rootPresunta`, che è più vago e meno vero.
    if (/\bper (?:studiare in|studi principalmente in|modul[oi] in)\b/.test(c)) {
      return true;
    }
    if (quandoDaCondizione(c)) return false;
    return /\b(?:program(?:ma|mi)|faculty|facolt[aà])\b/.test(c);
  }

  function testoOriginale(foglia) {
    return [testo(foglia && foglia.lingua), testo(foglia && foglia.livello)]
      .filter(Boolean)
      .join(" ");
  }

  function normalizzaFogliaBase(foglia, linguaForzata) {
    var linguaRaw = linguaForzata == null ? testo(foglia && foglia.lingua) : testo(linguaForzata);
    var livelloRaw = testo(foglia && foglia.livello);
    var condizione = testo(foglia && foglia.condizione);
    var livello = livelloCefr(livelloRaw);
    var daVerificare = !!(foglia && foglia.daVerificare) ||
      linguaSegnaposto(linguaRaw) ||
      linguaNonSemplice(linguaRaw);
    var livelloAmbiguo = !!(foglia && foglia.livelloAmbiguo) || !livello;
    var out = {
      lingua: maiuscolaIniziale(linguaRaw),
      livello: livello || livelloRaw,
      condizione: condizione
    };

    var quando = foglia && foglia.quando && foglia.quando.livello
      ? { livello: foglia.quando.livello }
      : quandoDaCondizione(condizione);
    if (quando) out.quando = quando;
    // Una condizione legata ai corsi resta prudente anche quando la fonte
    // contiene una sola foglia: una lingua sufficiente non dimostra che esista
    // un intero piano di corsi adatto allo studente.
    if (dipendeDaiCorsi(condizione) || (foglia && foglia.condizionatoCorsi)) {
      out.condizionatoCorsi = true;
    }
    if (daVerificare) out.daVerificare = true;
    if (livelloAmbiguo) out.livelloAmbiguo = true;
    if (daVerificare || livelloAmbiguo || (foglia && foglia.testoOriginale)) {
      out.testoOriginale = testo(foglia && foglia.testoOriginale) || testoOriginale(foglia);
    }
    return out;
  }

  function normalizzaFoglia(foglia) {
    var linguaRaw = testo(foglia && foglia.lingua);

    // La barra ha precedenza: "e/o" non deve essere scambiato per il separatore
    // lessicale certo "o".
    if (!linguaRaw.includes("/")) {
      var parti = linguaRaw.split(/\s+(?:o|oppure)\s+/i).map(testo).filter(Boolean);
      if (parti.length > 1) {
        return {
          op: "ANY",
          figli: parti.map(function (lingua) {
            return normalizzaFogliaBase(foglia, lingua);
          }),
          alternativaEsplicita: true
        };
      }
    }
    return normalizzaFogliaBase(foglia || {}, linguaRaw);
  }

  function eGruppo(nodo) {
    return !!(nodo && (nodo.op === "ANY" || nodo.op === "ALL") && Array.isArray(nodo.figli));
  }

  function normalizzaNodoEsplicito(nodo) {
    if (!nodo || typeof nodo !== "object") {
      return {
        lingua: "",
        livello: "",
        condizione: "",
        daVerificare: true,
        livelloAmbiguo: true,
        testoOriginale: testo(nodo)
      };
    }
    var op = testo(nodo.op).toUpperCase();
    if (op === "ANY" || op === "ALL") {
      var gruppo = {
        op: op,
        figli: (Array.isArray(nodo.figli) ? nodo.figli : []).map(normalizzaNodoEsplicito)
      };
      if (nodo.rootPresunta) gruppo.rootPresunta = "ANY";
      if (nodo.condizionatoCorsi) gruppo.condizionatoCorsi = true;
      if (nodo.fonte) gruppo.fonte = nodo.fonte;
      if (nodo.verificatoIl) gruppo.verificatoIl = nodo.verificatoIl;
      return gruppo;
    }
    return normalizzaFoglia(nodo);
  }

  function requisitiLinguaNormalizzati(meta) {
    var grezzo = meta && meta.requisitoLingua;
    if (!grezzo || (Array.isArray(grezzo) && grezzo.length === 0)) {
      return { op: "ALL", figli: [], assente: true };
    }
    if (!Array.isArray(grezzo)) return normalizzaNodoEsplicito(grezzo);

    var figli = grezzo.map(function (foglia) {
      return normalizzaFoglia(foglia);
    });
    if (figli.length === 1) return figli[0];

    // Bachelor e master non sono alternative: si valuta soltanto la foglia
    // applicabile al livello dello studente. Il gruppo ALL è quindi un
    // contenitore dichiarativo, non un "devi avere entrambi".
    var tuttiSelettoriLivello = figli.every(function (figlio) {
      return !eGruppo(figlio) && figlio.quando && figlio.quando.livello;
    });
    if (tuttiSelettoriLivello) {
      return { op: "ANY", figli: figli, selezionePerLivello: true };
    }

    var haCondizioniCorsi = figli.some(function (figlio) {
      if (eGruppo(figlio)) return figlio.figli.some(function (f) { return !!f.condizionatoCorsi; });
      return !!figlio.condizionatoCorsi;
    });
    if (haCondizioniCorsi) {
      return { op: "ANY", figli: figli, migrazioneCondizionata: true };
    }

    // La fonte a volte dichiara l'alternativa in chiaro dentro la `condizione`
    // — «requisito minimo in greco o inglese», «in alternativa al certificato di
    // inglese», «richiesta competenza in almeno una delle due lingue». È il caso
    // che la specifica chiama `ANY` ACCERTATO, l'unico che merita quel nome: qui
    // non stiamo presumendo niente, lo sta scrivendo il dato. Riconoscerlo è ciò
    // che fa scendere il debito delle `rootPresunta`, che è un criterio di uscita
    // di V0 e non un numero decorativo.
    if (alternativaDichiarata(figli)) {
      return { op: "ANY", figli: figli, alternativaEsplicita: true };
    }

    // È lo stesso ANY che il vecchio Math.max applicava in silenzio. Ora è
    // visibile e contabile, e l'evaluatore gli impedisce di produrre verde.
    return { op: "ANY", figli: figli, rootPresunta: "ANY" };
  }

  // Vero solo quando la `condizione` dichiara l'alternativa senza margini.
  // Il confronto fra lingue NON usa un elenco scritto qui dentro: prende le
  // lingue delle foglie della meta stessa (regola del progetto — le lingue
  // vengono dai dati, mai dal codice) e cerca se la condizione le nomina
  // entrambe unite da un separatore alternativo. Così «greco o inglese» conta
  // solo dove greco e inglese sono davvero i due requisiti.
  function alternativaDichiarata(figli) {
    var lingue = figli
      .filter(function (f) { return !eGruppo(f) && f.lingua; })
      .map(function (f) { return chiaveLingua(f.lingua); });
    if (lingue.length < 2) return false;

    var condizioni = figli
      .filter(function (f) { return !eGruppo(f) && f.condizione; })
      .map(function (f) { return chiaveLingua(f.condizione); });

    for (var i = 0; i < condizioni.length; i++) {
      var c = condizioni[i];
      // Formule che dichiarano l'alternativa da sole, senza nominare le lingue.
      if (/\bin alternativa (?:a|al|all'|alla)\b/.test(c)) return true;
      if (/\balmeno una delle due\b/.test(c)) return true;
      if (/\be\/o\b/.test(c)) return true;
      // Oppure due lingue DELLA META unite da un separatore alternativo.
      for (var a = 0; a < lingue.length; a++) {
        for (var b = 0; b < lingue.length; b++) {
          if (a === b) continue;
          var coppia = new RegExp(
            "\\b" + lingue[a] + "\\s+(?:o|oppure|od)\\s+" + lingue[b] + "\\b"
          );
          if (coppia.test(c)) return true;
        }
      }
    }
    return false;
  }

  function foglieRequisitoLingua(nodo) {
    if (!nodo) return [];
    if (eGruppo(nodo)) {
      return nodo.figli.reduce(function (out, figlio) {
        return out.concat(foglieRequisitoLingua(figlio));
      }, []);
    }
    return [nodo];
  }

  function lingueDaRequisito(nodo) {
    var viste = Object.create(null);
    return foglieRequisitoLingua(nodo).reduce(function (out, foglia) {
      if (foglia.daVerificare || !foglia.lingua) return out;
      var key = chiaveLingua(foglia.lingua);
      if (!key || viste[key]) return out;
      viste[key] = true;
      out.push(foglia.lingua);
      return out;
    }, []);
  }

  function fogliaApplicabile(foglia, profilo) {
    if (!foglia.quando || !foglia.quando.livello) return true;
    return !!profilo && profilo.livello === foglia.quando.livello;
  }

  function risultatoBase(esito, punteggio, extra) {
    return Object.assign({
      esito: esito,
      punteggio: punteggio,
      assente: false,
      rootPresunta: false,
      condizionato: false,
      daVerificare: false,
      motivi: []
    }, extra || {});
  }

  function valutaFoglia(foglia, profilo) {
    if (!fogliaApplicabile(foglia, profilo)) {
      return risultatoBase("nonApplicabile", null, { nonApplicabile: true });
    }
    if (foglia.daVerificare || foglia.livelloAmbiguo) {
      return risultatoBase(ESITI_LINGUA.SCONOSCIUTO, null, {
        daVerificare: true,
        motivi: [foglia.testoOriginale || testoOriginale(foglia)]
      });
    }

    var lingue = profilo && Array.isArray(profilo.lingue) ? profilo.lingue : [];
    var posseduta = lingue.find(function (lingua) {
      return chiaveLingua(lingua && lingua.lingua) === chiaveLingua(foglia.lingua);
    });
    if (!posseduta) {
      return risultatoBase(ESITI_LINGUA.NON_SODDISFATTO, 0, {
        motivi: ["requisito linguistico non soddisfatto"]
      });
    }

    var indicePosseduto = SCALA_CEFR.indexOf(livelloCefr(posseduta.livello));
    var indiceRichiesto = SCALA_CEFR.indexOf(foglia.livello);
    if (indicePosseduto < 0) {
      return risultatoBase(ESITI_LINGUA.SCONOSCIUTO, null, {
        daVerificare: true,
        motivi: ["livello dello studente non riconosciuto"]
      });
    }

    var diff = indicePosseduto - indiceRichiesto;
    if (diff >= 0) {
      return risultatoBase(
        foglia.condizionatoCorsi ? ESITI_LINGUA.CONDIZIONATO : ESITI_LINGUA.SODDISFATTO,
        50,
        {
          condizionato: !!foglia.condizionatoCorsi,
          motivi: foglia.condizionatoCorsi ? ["verifica i corsi scelti"] : []
        }
      );
    }
    if (diff === -1) {
      return risultatoBase(ESITI_LINGUA.NON_SODDISFATTO, 12, {
        motivi: ["un livello sotto il richiesto"]
      });
    }
    return risultatoBase(ESITI_LINGUA.NON_SODDISFATTO, 0, {
      motivi: ["requisito linguistico non soddisfatto"]
    });
  }

  function combinaEsiti(op, risultati) {
    var utili = risultati.filter(function (r) { return !r.nonApplicabile; });
    if (!utili.length) {
      return risultatoBase(ESITI_LINGUA.SCONOSCIUTO, null, {
        daVerificare: true,
        motivi: ["nessun requisito applicabile al livello scelto"]
      });
    }

    var punteggi = utili.map(function (r) { return r.punteggio; })
      .filter(function (p) { return typeof p === "number"; });
    var punteggio = punteggi.length
      ? (op === "ANY" ? Math.max.apply(Math, punteggi) : Math.min.apply(Math, punteggi))
      : null;
    var contiene = function (esito) {
      return utili.some(function (r) { return r.esito === esito; });
    };
    var esito;

    if (op === "ANY") {
      if (contiene(ESITI_LINGUA.SODDISFATTO)) esito = ESITI_LINGUA.SODDISFATTO;
      else if (contiene(ESITI_LINGUA.CONDIZIONATO)) esito = ESITI_LINGUA.CONDIZIONATO;
      else if (contiene(ESITI_LINGUA.SCONOSCIUTO)) esito = ESITI_LINGUA.SCONOSCIUTO;
      else esito = ESITI_LINGUA.NON_SODDISFATTO;
    } else {
      if (contiene(ESITI_LINGUA.NON_SODDISFATTO)) esito = ESITI_LINGUA.NON_SODDISFATTO;
      else if (contiene(ESITI_LINGUA.SCONOSCIUTO)) esito = ESITI_LINGUA.SCONOSCIUTO;
      else if (contiene(ESITI_LINGUA.CONDIZIONATO)) esito = ESITI_LINGUA.CONDIZIONATO;
      else esito = ESITI_LINGUA.SODDISFATTO;
    }

    return risultatoBase(esito, punteggio, {
      applicabili: utili.length,
      condizionato: esito === ESITI_LINGUA.CONDIZIONATO,
      daVerificare: utili.some(function (r) { return r.daVerificare; }),
      motivi: Array.from(new Set(utili.reduce(function (out, r) {
        return out.concat(r.motivi || []);
      }, [])))
    });
  }

  function valutaNodo(nodo, profilo) {
    if (nodo && nodo.assente) {
      return risultatoBase(ESITI_LINGUA.SCONOSCIUTO, null, {
        assente: true,
        daVerificare: true,
        motivi: ["requisito linguistico assente"]
      });
    }
    if (!eGruppo(nodo)) return valutaFoglia(nodo || {}, profilo || {});

    // Quando una foglia dichiara esplicitamente il livello dello studente, è
    // QUELLA a governare la sua lingua: una foglia della stessa lingua che non
    // dichiara il livello descrive un altro ciclo e non può soddisfare al posto
    // suo. Senza questa guardia il requisito del triennale soddisferebbe un
    // magistrale a cui il master chiede di più — lo stesso fallimento del caso
    // Groningen, che qui rientrerebbe da un vocabolario incompleto: "master" è
    // riconosciuto come livello, lo spagnolo "corsi di grado" no. La guardia
    // non dipende dal vocabolario, quindi regge anche sulle forme non previste.
    var lingueGovernate = Object.create(null);
    nodo.figli.forEach(function (figlio) {
      if (eGruppo(figlio) || !figlio.quando || !figlio.quando.livello) return;
      if (!profilo || figlio.quando.livello !== profilo.livello) return;
      lingueGovernate[chiaveLingua(figlio.lingua)] = true;
    });

    var combinato = combinaEsiti(nodo.op, nodo.figli.map(function (figlio) {
      var governata = !eGruppo(figlio) &&
        !(figlio.quando && figlio.quando.livello) &&
        lingueGovernate[chiaveLingua(figlio.lingua)];
      if (governata) return risultatoBase("nonApplicabile", null, { nonApplicabile: true });
      return valutaNodo(figlio, profilo || {});
    }));
    // Dopo il filtro bachelor/master una sola foglia non ha una "radice": è
    // il requisito pertinente. Più foglie applicabili allo stesso ciclo non
    // dichiarano però se siano alternative o congiunte: la specifica le
    // considera condizioni contraddittorie, quindi l'esito resta sconosciuto.
    if (nodo.selezionePerLivello && combinato.applicabili > 1) {
      combinato.esito = ESITI_LINGUA.SCONOSCIUTO;
      combinato.punteggio = null;
      combinato.daVerificare = true;
      combinato.condizionato = false;
      combinato.motivi.push("più requisiti applicabili allo stesso livello");
    }
    if (nodo.rootPresunta) {
      combinato.rootPresunta = true;
      combinato.motivi.push("radice ANY presunta, non revisionata");
      if (combinato.esito === ESITI_LINGUA.SODDISFATTO) {
        combinato.esito = ESITI_LINGUA.CONDIZIONATO;
        combinato.condizionato = true;
      }
    }
    // Negli array storici basta una condizione dipendente dai corsi perché la
    // radice adattata resti prudente. Senza questa guardia, una seconda foglia
    // non condizionata potrebbe vincere l'ANY e trasformare il risultato in
    // verde, benché il vecchio dato non dichiari davvero quella semantica.
    if (nodo.migrazioneCondizionata && combinato.esito === ESITI_LINGUA.SODDISFATTO) {
      combinato.esito = ESITI_LINGUA.CONDIZIONATO;
      combinato.condizionato = true;
      combinato.motivi.push("verifica i corsi scelti");
    }
    if (nodo.condizionatoCorsi && combinato.esito === ESITI_LINGUA.SODDISFATTO) {
      combinato.esito = ESITI_LINGUA.CONDIZIONATO;
      combinato.condizionato = true;
      combinato.motivi.push("verifica i corsi scelti");
    }
    return combinato;
  }

  function valutaRequisitoLingua(meta, profilo) {
    return valutaNodo(requisitiLinguaNormalizzati(meta), profilo || {});
  }

  function punteggioLinguaSingola(richiesta, lingueStudente, livelloStudente) {
    var risultato = valutaNodo(normalizzaFoglia(richiesta), {
      livello: livelloStudente || "L",
      lingue: Array.isArray(lingueStudente) ? lingueStudente : []
    });
    return risultato.punteggio;
  }

  function punteggioLingua(meta, profilo) {
    return valutaRequisitoLingua(meta, profilo).punteggio;
  }

  function linguaCopertaPerFiltro(meta, profilo) {
    var risultato = valutaRequisitoLingua(meta, profilo);
    return risultato.assente ||
      risultato.esito === ESITI_LINGUA.SCONOSCIUTO ||
      risultato.punteggio === 50;
  }

  // V5 — questi sono nomi di DOCUMENTI o prove di livello, non la lista di
  // lingue vietata dal progetto. Sono solo segnali che invitano a leggere il
  // dato: non deduciamo mai se la prova serva, perche' alcune condizioni
  // scrivono proprio "certificato non richiesto".
  function citaCertificato(meta) {
    function visita(valore) {
      if (typeof valore === "string") {
        return /certificat|certificate|attestat|IELTS|TOEFL|DELF|DELE|TestDaF|CELI|Goethe|Cambridge/i.test(valore);
      }
      if (Array.isArray(valore)) return valore.some(visita);
      if (!valore || typeof valore !== "object") return false;
      return Object.keys(valore).some(function (chiave) {
        return visita(valore[chiave]);
      });
    }
    return visita(meta && meta.requisitoLingua);
  }

  function certificatoDaRicordare(meta, profilo) {
    if (!citaCertificato(meta) || !profilo) return false;
    var foglie = foglieRequisitoLingua(requisitiLinguaNormalizzati(meta));
    var lingue = Array.isArray(profilo.lingue) ? profilo.lingue : [];
    return foglie.some(function (foglia) {
      if (!fogliaApplicabile(foglia, profilo) || foglia.daVerificare || foglia.livelloAmbiguo) {
        return false;
      }
      var indiceRichiesto = SCALA_CEFR.indexOf(foglia.livello);
      if (indiceRichiesto < 0) return false;
      return lingue.some(function (lingua) {
        return chiaveLingua(lingua && lingua.lingua) === chiaveLingua(foglia.lingua) &&
          SCALA_CEFR.indexOf(livelloCefr(lingua && lingua.livello)) >= indiceRichiesto &&
          !lingua.certificata;
      });
    });
  }

  function finestraAttesaValida(bandoInfo) {
    var finestra = bandoInfo && bandoInfo.finestraAttesa;
    return finestra &&
      finestra.stato === "atteso" &&
      /^\d{4}-\d{2}-\d{2}$/.test(testo(finestra.inizio)) &&
      finestra.precedente &&
      /^\d{4}-\d{2}-\d{2}$/.test(testo(finestra.precedente.data)) &&
      !!testo(finestra.precedente.fonte)
      ? finestra
      : null;
  }

  // V6a — il massimo documentato resta un fatto storico, non un limite
  // dell'interfaccia. Se manca anche un solo pezzo non inventiamo default:
  // l'assenza del dato deve produrre silenzio.
  function massimoDestinazioniBando(bandoInfo) {
    var massimo = bandoInfo && bandoInfo.massimoDestinazioni;
    var stato = testo(massimo && massimo.stato);
    var valore = massimo && massimo.valore;
    if (!massimo ||
        !Number.isInteger(valore) ||
        valore <= 0 ||
        ["storico", "vigente"].indexOf(stato) < 0 ||
        !testo(massimo.ciclo) ||
        !testo(massimo.citazione) ||
        !testo(massimo.fonte)) {
      return { presente: false };
    }
    return {
      presente: true,
      valore: valore,
      ciclo: testo(massimo.ciclo),
      citazione: testo(massimo.citazione),
      fonte: testo(massimo.fonte),
      stato: stato
    };
  }

  function componiHash(rotta, ateneo) {
    var segmenti = [testo(rotta)];
    if (!segmenti[0]) return "";
    if (testo(ateneo)) segmenti.push(testo(ateneo));
    return "#" + segmenti.join("/");
  }

  function frasePassatoMassimo(info) {
    if (!info || info.presente !== true) return null;
    var riferimento = testo(info.fonte).split("—")[0].trim();
    return "Il bando " + testo(info.ciclo) + " ne ammetteva al massimo " +
      info.valore + ", elencate in ordine di priorità (" + riferimento + ").";
  }

  function valoriUnici(lista) {
    var risultato = [];
    (Array.isArray(lista) ? lista : []).forEach(function (id) {
      if (risultato.indexOf(id) < 0) risultato.push(id);
    });
    return risultato;
  }

  // I-V6.1 e I-V6.2 — l'ordine contiene solo preferite, senza duplicati;
  // le nuove preferite entrano in coda per non riscrivere le scelte fatte.
  function normalizzaListeScelte(metePreferite, schedina) {
    var preferite = valoriUnici(metePreferite);
    var ordine = valoriUnici(schedina).filter(function (id) {
      return preferite.indexOf(id) >= 0;
    });
    preferite.forEach(function (id) {
      if (ordine.indexOf(id) < 0) ordine.push(id);
    });
    return { metePreferite: preferite, schedina: ordine };
  }

  function schedinaSottoinsiemePreferite(metePreferite, schedina) {
    var preferite = Array.isArray(metePreferite) ? metePreferite : [];
    return (Array.isArray(schedina) ? schedina : []).every(function (id) {
      return preferite.indexOf(id) >= 0;
    });
  }

  function scelteSenzaDuplicatiECorrispondenti(metePreferite, schedina) {
    var preferite = Array.isArray(metePreferite) ? metePreferite : [];
    var ordine = Array.isArray(schedina) ? schedina : [];
    return valoriUnici(preferite).length === preferite.length &&
      valoriUnici(ordine).length === ordine.length &&
      preferite.length === ordine.length &&
      schedinaSottoinsiemePreferite(preferite, ordine);
  }

  // I-V6.3 — la riga nasce dall'id salvato, non dalla presenza nel catalogo:
  // una meta rimossa dai dati resta quindi visibile e rimovibile.
  function righeScelteConOrfane(schedina, mete) {
    var catalogo = Array.isArray(mete) ? mete : [];
    return (Array.isArray(schedina) ? schedina : []).map(function (id, indice) {
      var meta = catalogo.find(function (candidata) {
        return candidata && candidata.id === id;
      }) || null;
      return { id: id, indice: indice, meta: meta, orfana: !meta };
    });
  }

  // I-V6.4 — marcare significa aggiungere informazione alle righe, mai
  // tagliarle. V6a prova questa regola ma non mostra ancora l'eccedenza.
  function marcaEccedenzeScelte(righe, massimo) {
    var elenco = Array.isArray(righe) ? righe : [];
    var limite = Number.isInteger(massimo) && massimo > 0 ? massimo : null;
    return elenco.map(function (riga, indice) {
      return Object.assign({}, riga, {
        eccedente: limite !== null && indice >= limite
      });
    });
  }

  // I-V6.5 — la stella aggiorna sempre entrambe le rappresentazioni della
  // stessa lista. L'aggiunta va in coda; la rimozione esce da entrambe.
  function applicaStellaScelte(metePreferite, schedina, id, accesa) {
    var stato = normalizzaListeScelte(metePreferite, schedina);
    if (accesa) {
      if (stato.metePreferite.indexOf(id) < 0) {
        stato.metePreferite.push(id);
        stato.schedina.push(id);
      }
    } else {
      stato.metePreferite = stato.metePreferite.filter(function (voce) {
        return voce !== id;
      });
      stato.schedina = stato.schedina.filter(function (voce) {
        return voce !== id;
      });
    }
    return stato;
  }

  function fraseFinestraAttesaBando(bandoInfo) {
    var finestra = finestraAttesaValida(bandoInfo);
    if (!finestra) return "Il bando non è ancora uscito.";
    var data = new Date(finestra.precedente.data + "T12:00:00Z");
    var dataItaliana = data.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    });
    return "Il bando precedente è uscito il " + dataItaliana +
      ": quello nuovo è atteso in un periodo simile.";
  }

  var TESTO_INSTALLAZIONE =
    "Niente iscrizione: i tuoi dati restano su questo telefono. " +
    "Aggiungi ErasmusWiz alla schermata home per ritrovarli.";

  function invitoInstallazione(ambiente) {
    var a = ambiente || {};
    if (a.standalone || a.rinviatoFino || a.desktop) {
      return { tipo: "niente", testo: "" };
    }
    if (a.promptDisponibile) {
      return { tipo: "prompt", testo: TESTO_INSTALLAZIONE };
    }
    if (a.iOS && a.safari) {
      return {
        tipo: "istruzioni-ios",
        testo: TESTO_INSTALLAZIONE +
          " In Safari tocca Condividi, poi «Aggiungi alla schermata Home»."
      };
    }
    return { tipo: "niente", testo: "" };
  }

  function escapaTestoICS(testoDaEscapare) {
    return testo(testoDaEscapare)
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/([,;])/g, "\\$1");
  }

  function dataOraICS(data) {
    var valore = testo(data);
    var parti = valore.match(
      /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2}))?)?$/
    );
    if (!parti) return "";
    return parti[1] + parti[2] + parti[3] + "T" +
      (parti[4] || "00") + (parti[5] || "00") + (parti[6] || "00");
  }

  function dataOraPiuMinuti(data, minuti) {
    var d = new Date(data);
    if (Number.isNaN(d.getTime())) return "";
    d.setMinutes(d.getMinutes() + minuti);
    function due(n) { return String(n).padStart(2, "0"); }
    return d.getFullYear() + "-" + due(d.getMonth() + 1) + "-" + due(d.getDate()) +
      "T" + due(d.getHours()) + ":" + due(d.getMinutes()) + ":" + due(d.getSeconds());
  }

  function dtStampICS(data) {
    var d = new Date(data);
    if (Number.isNaN(d.getTime())) d = new Date(0);
    function due(n) { return String(n).padStart(2, "0"); }
    return d.getUTCFullYear() + due(d.getUTCMonth() + 1) + due(d.getUTCDate()) +
      "T" + due(d.getUTCHours()) + due(d.getUTCMinutes()) + due(d.getUTCSeconds()) + "Z";
  }

  function sequenzaDaVerifica(dataVerifica) {
    var d = new Date(testo(dataVerifica) + "T00:00:00Z");
    var origine = new Date("2020-01-01T00:00:00Z");
    if (Number.isNaN(d.getTime())) return 0;
    return Math.max(0, Math.floor((d - origine) / 86400000));
  }

  // RFC 5545 §3.1: una riga di un .ics non può superare i 75 ottetti, e la
  // continuazione comincia con uno spazio. Non è pedanteria: la DESCRIPTION
  // di questi eventi porta fonte, data di verifica, link e disclaimer e
  // arriva a ~340 caratteri. Google tollera le righe lunghe, altri client no,
  // e il criterio di uscita di V5 chiede che il file si apra ANCHE su Apple.
  // Si conta in OTTETTI, non in caratteri: «è» ne occupa due e spezzarlo a
  // metà produrrebbe un file corrotto.
  function ottettiUtf8(carattere) {
    var punto = carattere.codePointAt(0);
    return punto < 0x80 ? 1 : punto < 0x800 ? 2 : punto < 0x10000 ? 3 : 4;
  }

  function piegaRigaICS(riga) {
    var valore = String(riga);
    var piegate = [];
    var corrente = "";
    var ottetti = 0;
    for (var i = 0; i < valore.length; i++) {
      var carattere = valore[i];
      // Le coppie surrogate (emoji) non si spezzano mai a metà.
      if (carattere.charCodeAt(0) >= 0xd800 && carattere.charCodeAt(0) <= 0xdbff &&
          i + 1 < valore.length) {
        carattere += valore[i + 1];
        i++;
      }
      var costo = ottettiUtf8(carattere);
      if (ottetti + costo > 75) {
        piegate.push(corrente);
        corrente = " ";
        ottetti = 1;
      }
      corrente += carattere;
      ottetti += costo;
    }
    piegate.push(corrente);
    return piegate;
  }

  function righeAllarme(descrizione) {
    return [
      "BEGIN:VALARM",
      "TRIGGER:-P7D",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + escapaTestoICS(descrizione),
      "END:VALARM",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + escapaTestoICS(descrizione),
      "END:VALARM"
    ];
  }

  function creaCalendarioICS(opzioni) {
    var o = opzioni || {};
    var bandoInfo = o.bandoInfo || {};
    var ora = new Date(o.ora || Date.now());
    var sequenza = sequenzaDaVerifica(bandoInfo.dataVerificaDati);
    var ateneo = testo(o.ateneo) || "ateneo";
    var etichettaAteneo = testo(o.etichettaAteneo) || ateneo;
    var fonteComune = testo(bandoInfo.titolo) || "Bando Erasmus dell'ateneo";
    var link = testo(bandoInfo.linkUfficiale);
    var verificatiIl = testo(bandoInfo.dataVerificaDati);
    var notaAggiornamento =
      "Questo promemoria non si aggiorna da solo: se la data cambia, riscaricalo dal sito.";
    var eventi = [];

    function aggiungiEvento(dati) {
      var inizio = new Date(dati.data);
      if (Number.isNaN(inizio.getTime()) || inizio <= ora) return;
      var descrizione = dati.descrizione + " Fonte: " + dati.fonte +
        ". Dati verificati il " + verificatiIl + ". " + link + ". " + notaAggiornamento;
      var allarme = "Promemoria ErasmusWiz: " + dati.summary;
      eventi.push([
        "BEGIN:VEVENT",
        "UID:" + dati.uid + "@erasmuswiz",
        "SEQUENCE:" + sequenza,
        "DTSTAMP:" + dtStampICS(ora),
        "DTSTART:" + dataOraICS(dati.data),
        "DTEND:" + dataOraICS(dataOraPiuMinuti(dati.data, 30)),
        "SUMMARY:" + escapaTestoICS(dati.summary),
        "DESCRIPTION:" + escapaTestoICS(descrizione)
      ].concat(righeAllarme(allarme), ["END:VEVENT"]));
    }

    if (o.includiFinestra !== false) {
      var finestra = finestraAttesaValida(bandoInfo);
      if (finestra) {
        aggiungiEvento({
          uid: "bando-atteso-" + ateneo,
          data: finestra.inizio + "T09:00:00",
          summary: "Controlla se è uscito il bando Erasmus " + etichettaAteneo,
          descrizione: "Data attesa, non confermata, ricavata dal periodo del bando precedente.",
          fonte: testo(finestra.precedente.fonte)
        });
      }
    }

    (Array.isArray(o.scadenze) ? o.scadenze : []).forEach(function (scadenza) {
      aggiungiEvento({
        uid: testo(scadenza.id) || "ew-scadenza",
        data: testo(scadenza.data),
        summary: testo(scadenza.cosa),
        descrizione: testo(scadenza.descrizione) ||
          "Promemoria per una data del bando Erasmus.",
        fonte: fonteComune
      });
    });

    if (!eventi.length) return "";
    var righe = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//ErasmusWiz//Date Erasmus//IT",
      "CALSCALE:GREGORIAN"
    ];
    eventi.forEach(function (evento) {
      righe = righe.concat(evento);
    });
    righe.push("END:VCALENDAR");
    return righe.reduce(function (accumulate, riga) {
      return accumulate.concat(piegaRigaICS(riga));
    }, []).join("\r\n") + "\r\n";
  }

  function presentazioneLinguaSconosciuta(valutazione) {
    if (!valutazione || valutazione.esito !== ESITI_LINGUA.SCONOSCIUTO) return null;
    // Il colore e il testo sono parte dello stesso contratto: così l'app non
    // può mostrare una bocciatura o una promessa verde per un dato ignoto.
    return {
      icona: "🟡",
      stato: "Verifica la lingua",
      verificaLingua: true
    };
  }

  function motivoMancanzaCompatibilita(valutazione, pLingua, pLivello, livelloTesto) {
    var motivi = [];
    if (pLivello === 0) motivi.push("nessun posto per " + livelloTesto);
    var motiviLingua = (valutazione && valutazione.motivi || []).filter(function (motivo) {
      return !motivo.startsWith("radice ANY") && motivo !== "verifica i corsi scelti";
    });
    if (motiviLingua.length) motivi = motivi.concat(motiviLingua);
    else if (pLingua === 12) motivi.push("un livello sotto il richiesto");
    else if (pLingua === 0) motivi.push("requisito linguistico non soddisfatto");
    return motivi.length
      ? "Attenzione: " + motivi.join("; ") + "."
      : "Mancano solo dettagli minori.";
  }

  // Questa è l'unica funzione che può produrre il verde della compatibilità.
  // Tenerla qui permette ai test di verificare l'icona realmente consumata
  // dall'app, non soltanto un esito intermedio del motore linguistico.
  function presentaCompatibilita(valutazione, punteggi) {
    var pLivello = punteggi && typeof punteggi.livello === "number"
      ? punteggi.livello : 0;
    var pPosti = punteggi && typeof punteggi.posti === "number"
      ? punteggi.posti : 0;
    var livelloTesto = testo(punteggi && punteggi.livelloTesto) || "il livello scelto";
    var presentazioneSconosciuta = presentazioneLinguaSconosciuta(valutazione);

    if (presentazioneSconosciuta) {
      var motivoSconosciuto = valutazione.assente
        ? "Requisito linguistico assente: controlla la scheda PDF."
        : "Il requisito linguistico è ambiguo nei dati: controlla la fonte ufficiale.";
      var dettaglioLivelloSconosciuto = pLivello === 0
        ? " Nessun posto risulta indicato per il tuo livello (" + livelloTesto + ")."
        : "";
      return Object.assign({
        totale: null,
        ordine: 60,
        dettaglio: motivoSconosciuto + dettaglioLivelloSconosciuto
      }, presentazioneSconosciuta);
    }

    var pLingua = valutazione && typeof valutazione.punteggio === "number"
      ? valutazione.punteggio : 0;
    var totale = Math.round(pLingua + pLivello + pPosti);
    // Deroga di prodotto V0 (Nicola, 2026-07-27): la scelta dei corsi è sotto
    // il controllo dello studente e, da sola, non blocca più il verde. Una
    // rootPresunta resta invece un'incertezza dell'ateneo e continua ad avere
    // precedenza: anche con 100 punti non può produrre ✅.
    if (valutazione && valutazione.rootPresunta &&
        valutazione.esito === ESITI_LINGUA.CONDIZIONATO) {
      var dettaglioRadice =
        "Possibile, ma la combinazione tra più lingue non è ancora revisionata: controlla la scheda.";
      if (pLivello === 0) {
        dettaglioRadice +=
          " Nessun posto risulta indicato per il tuo livello (" + livelloTesto + ").";
      }
      return {
        totale: totale,
        ordine: totale,
        icona: "⚠️",
        stato: "Possibile — verifica le lingue",
        dettaglio: dettaglioRadice,
        verificaLingua: true
      };
    }

    if (totale >= 80) {
      return {
        totale: totale,
        ordine: totale,
        icona: "✅",
        stato: "Compatibile",
        dettaglio: "Hai i requisiti principali. Il livello lo dichiari tu: la prova, se richiesta, si presenta dopo la selezione."
      };
    }
    var dettaglio = motivoMancanzaCompatibilita(
      valutazione, pLingua, pLivello, livelloTesto
    );
    if (totale >= 40) {
      return {
        totale: totale,
        ordine: totale,
        icona: "⚠️",
        stato: "Possibile, con riserve",
        dettaglio: dettaglio
      };
    }
    return {
      totale: totale,
      ordine: totale,
      icona: "🔒",
      stato: "Non accessibile ora",
      dettaglio: dettaglio
    };
  }

  // ================================================================
  // LEARNING AGREEMENT v2 — modello e regole pure
  // ================================================================
  var LA_SCHEMA_VERSION = 2;
  var LA_STATI_ESAME = Object.freeze([
    "da-sostenere", "gia-sostenuto", "fuori-piano"
  ]);
  var LA_PREFLIGHT = Object.freeze([
    "course-data-checked", "credits-compared", "mapping-reviewed"
  ]);
  var LA_PASSI_ESTERNI = Object.freeze([
    "sent-home", "entered-portal", "student-signed",
    "home-approved", "host-approved"
  ]);
  var LA_FATTI_LIFECYCLE = Object.freeze([
    "mobilityStartedAt", "returnedAt", "recognitionRecordedAt"
  ]);

  function oraIso(valore) {
    var data = valore ? new Date(valore) : new Date();
    return Number.isNaN(data.getTime()) ? new Date(0).toISOString() : data.toISOString();
  }

  function numeroPositivo(valore) {
    if (typeof valore === "string") valore = valore.replace(",", ".");
    var numero = Number(valore);
    return Number.isFinite(numero) && numero > 0 ? numero : null;
  }

  function slugLA(valore) {
    var base = testo(valore).toLocaleLowerCase("it");
    try { base = base.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); } catch (e) {}
    return base
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "sconosciuto";
  }

  // ----------------------------------------------------------
  // TRANCHE 1 pre-Bruno — identità manuale (PLAN.md addendum §7-§8).
  // Lo stato "manuale" NON è un booleano che qualcuno può alterare in un
  // backup: si deriva sempre dal namespace riservato dell'id. Un id
  // `manual:*` impone `source:"manual"`; `source:"manual"` su un id di
  // catalogo è invece un'incoerenza, e va fermata prima dell'importazione.
  // ----------------------------------------------------------
  var LA_PREFISSO_MANUALE = "manual:";
  var LA_LIMITI_MANUALI = Object.freeze({
    universita: 200,
    corso: 200,
    citta: 100,
    paese: 100
  });

  // Campi manuali piccoli e normalizzati: via i caratteri di controllo (anche
  // quelli che spezzerebbero una riga in un testo copiato o in un backup),
  // spazi compressi, forma unicode stabile, lunghezza massima dichiarata.
  function testoManualeLA(valore, massimo) {
    var base = valore == null ? "" : String(valore);
    try { base = base.normalize("NFC"); } catch (e) {}
    // Caratteri di controllo C0/C1, separatori invisibili, marcatori di
    // direzione e BOM diventano uno spazio: non devono sopravvivere in
    // dossier, testo copiato, stampa o backup.
    base = base.replace(
      /[\u0000-\u001f\u007f-\u009f\u00ad\u200b-\u200f\u2028\u2029\u202a-\u202e\u2060-\u2064\ufeff]/g,
      " "
    );
    base = base.replace(/\s+/g, " ").trim();
    var limite = Number(massimo);
    if (Number.isFinite(limite) && limite > 0 && base.length > limite) {
      base = base.slice(0, limite).trim();
    }
    return base;
  }

  function eIdManualeLA(id) {
    return testo(id).indexOf(LA_PREFISSO_MANUALE) === 0 &&
      testo(id).length > LA_PREFISSO_MANUALE.length;
  }

  // L'id è opaco e NON deriva dal testo: due destinazioni scritte allo stesso
  // modo restano due dossier distinti, e una correzione del nome non cambia
  // l'identità di quello già creato.
  function creaIdManualeLA(uuid) {
    var pulito = testo(uuid).toLocaleLowerCase("it").replace(/[^a-z0-9-]/g, "");
    if (!pulito) return "";
    return LA_PREFISSO_MANUALE + pulito.slice(0, 64);
  }

  function metaManualeLA(dati) {
    var opzioni = oggettoSemplice(dati) ? dati : {};
    var id = eIdManualeLA(opzioni.id) ? testo(opzioni.id) : creaIdManualeLA(opzioni.uuid);
    if (!id) return null;
    var universita = testoManualeLA(opzioni.universita, LA_LIMITI_MANUALI.universita);
    if (!universita) return null;
    return {
      id: id,
      source: "manual",
      universita: universita,
      citta: testoManualeLA(opzioni.citta, LA_LIMITI_MANUALI.citta),
      paese: testoManualeLA(opzioni.paese, LA_LIMITI_MANUALI.paese)
    };
  }

  // Etichetta manuale di corso/facoltà di partenza: identità stabile, nessuna
  // area disciplinare e nessuna regola di facoltà dedotte dal testo.
  function corsoManualeLA(dati) {
    var opzioni = oggettoSemplice(dati) ? dati : {};
    var id = eIdManualeLA(opzioni.id) ? testo(opzioni.id) : creaIdManualeLA(opzioni.uuid);
    var etichetta = testoManualeLA(
      opzioni.etichetta || opzioni.label || opzioni.nome,
      LA_LIMITI_MANUALI.corso
    );
    if (!id || !etichetta) return null;
    return { id: id, source: "manual", etichetta: etichetta };
  }

  // Il namespace è l'autorità. Nessun altro punto del codice decide se una
  // meta è manuale: si chiede qui, sempre.
  function normalizzaMetaLA(meta, metaId) {
    var originale = oggettoSemplice(meta) ? copiaPersistibile(meta) : {};
    var id = testo(metaId || originale.id);
    var manuale = eIdManualeLA(id);
    var risultato = Object.assign({}, originale, {
      id: id,
      universita: testoManualeLA(originale.universita, LA_LIMITI_MANUALI.universita),
      citta: testoManualeLA(originale.citta, LA_LIMITI_MANUALI.citta),
      paese: testoManualeLA(originale.paese, LA_LIMITI_MANUALI.paese)
    });
    if (manuale) risultato.source = "manual";
    else delete risultato.source;
    return risultato;
  }

  function metaManualeAttivaLA(dossier) {
    return !!dossier && eIdManualeLA(dossier.metaId || (dossier.meta && dossier.meta.id));
  }

  var LA_AVVISO_META_MANUALE =
    "Destinazione inserita da te — dati dell'ospitante da verificare";

  // Incoerenze che un file di backup non può risolvere da solo: `source`
  // manuale su un id di catalogo. Bloccano l'importazione finché lo studente
  // non sceglie esplicitamente; il caso opposto (id manuale senza `source`) si
  // corregge invece da solo, perché il namespace basta a dimostrarlo.
  function incoerenzeManualiLA(la) {
    var stato = oggettoSemplice(la) ? la : {};
    var dossier = oggettoSemplice(stato.dossiersById) ? stato.dossiersById : {};
    var problemi = [];
    Object.keys(dossier).sort().forEach(function (id) {
      var d = oggettoSemplice(dossier[id]) ? dossier[id] : {};
      var meta = oggettoSemplice(d.meta) ? d.meta : {};
      var metaId = testo(d.metaId || meta.id);
      if (!eIdManualeLA(metaId) && (meta.source === "manual" || d.source === "manual")) {
        problemi.push({ dossierId: id, metaId: metaId, kind: "manual-source-mismatch" });
      }
    });
    var intento = oggettoSemplice(stato.pendingIntent) ? stato.pendingIntent : null;
    var metaIntento = intento && oggettoSemplice(intento.meta) ? intento.meta : null;
    if (metaIntento && !eIdManualeLA(metaIntento.id) && metaIntento.source === "manual") {
      problemi.push({
        dossierId: null,
        metaId: testo(metaIntento.id),
        kind: "manual-source-mismatch"
      });
    }
    return problemi;
  }

  function creaLaV2() {
    return {
      schemaVersion: LA_SCHEMA_VERSION,
      nextId: 1,
      examLibrary: {},
      dossiersById: {},
      openDossierId: null,
      assignedDossierIdByCycle: {}
    };
  }

  function statoEsameLA(valore) {
    return LA_STATI_ESAME.indexOf(valore) >= 0 ? valore : "da-sostenere";
  }

  function statoCorsoHostLA(valore) {
    var ammessi = [
      "da-verificare", "disponibile", "non-disponibile", "sostituito",
      "available", "unavailable", "unknown"
    ];
    return ammessi.indexOf(valore) >= 0 ? valore : "da-verificare";
  }

  function corsoHostAttivoLA(corso) {
    var stato = statoCorsoHostLA(corso && (corso.availabilityState || corso.stato));
    return stato !== "non-disponibile" && stato !== "sostituito" && stato !== "unavailable";
  }

  function normalizzaEsameLibreriaLA(esame, idFallback) {
    var originale = oggettoSemplice(esame) ? copiaPersistibile(esame) : {};
    var id = testo(originale.id) || idFallback;
    return Object.assign({}, originale, {
      id: id,
      codice: testo(originale.codice),
      nome: testo(originale.nome),
      cfu: numeroPositivo(originale.cfu) || originale.cfu || "",
      stato: statoEsameLA(originale.stato)
    });
  }

  function normalizzaSnapshotCasaLA(esame, idFallback) {
    var originale = oggettoSemplice(esame) ? copiaPersistibile(esame) : {};
    var id = testo(originale.snapshotId || originale.id) || idFallback;
    var risultato = Object.assign({}, originale, {
      snapshotId: id,
      codice: testo(originale.codice),
      nome: testo(originale.nome),
      cfu: numeroPositivo(originale.cfu) || originale.cfu || "",
      stato: statoEsameLA(originale.stato)
    });
    delete risultato.id;
    if (testo(originale.sourceExamId)) risultato.sourceExamId = testo(originale.sourceExamId);
    else delete risultato.sourceExamId;
    return risultato;
  }

  function normalizzaSnapshotHostLA(corso, idFallback) {
    var originale = oggettoSemplice(corso) ? copiaPersistibile(corso) : {};
    var id = testo(originale.snapshotId || originale.id) || idFallback;
    var risultato = Object.assign({}, originale, {
      snapshotId: id,
      codice: testo(originale.codice),
      nome: testo(originale.nome),
      ects: numeroPositivo(originale.ects) || originale.ects || "",
      lingua: testo(originale.lingua),
      semestre: testo(originale.semestre),
      officialUrl: testo(originale.officialUrl || originale.link),
      availabilityState: statoCorsoHostLA(
        originale.availabilityState || originale.stato
      ),
      verifiedAt: testo(originale.verifiedAt || originale.verificataIl),
      sourceDate: testo(originale.sourceDate)
    });
    delete risultato.id;
    delete risultato.link;
    delete risultato.stato;
    delete risultato.verificataIl;
    return risultato;
  }

  function normalizzaMappaturaLA(gruppo, idFallback) {
    var originale = oggettoSemplice(gruppo) ? copiaPersistibile(gruppo) : {};
    var casa = Array.isArray(originale.homeExamSnapshotIds)
      ? originale.homeExamSnapshotIds : (Array.isArray(originale.esami) ? originale.esami : []);
    var host = Array.isArray(originale.hostCourseSnapshotIds)
      ? originale.hostCourseSnapshotIds : (Array.isArray(originale.corsi) ? originale.corsi : []);
    var risultato = Object.assign({}, originale, {
      mappingId: testo(originale.mappingId || originale.id) || idFallback,
      homeExamSnapshotIds: casa.map(testo).filter(Boolean),
      hostCourseSnapshotIds: host.map(testo).filter(Boolean)
    });
    delete risultato.id;
    delete risultato.esami;
    delete risultato.corsi;
    return risultato;
  }

  function normalizzaVersioneLA(versione, dossierId, indice) {
    var originale = oggettoSemplice(versione) ? copiaPersistibile(versione) : {};
    var numero = Number(originale.number || originale.numero || indice + 1);
    if (!Number.isInteger(numero) || numero < 1) numero = indice + 1;
    var versionId = testo(originale.versionId) || dossierId + ":v" + numero;
    var esami = Array.isArray(originale.homeExamSnapshots)
      ? originale.homeExamSnapshots : (Array.isArray(originale.esamiCasa) ? originale.esamiCasa : []);
    var corsi = Array.isArray(originale.hostCourseSnapshots)
      ? originale.hostCourseSnapshots : (Array.isArray(originale.corsiHost) ? originale.corsiHost : []);
    var gruppi = Array.isArray(originale.mappings)
      ? originale.mappings : (Array.isArray(originale.gruppi) ? originale.gruppi : []);
    var preflightGrezzo = oggettoSemplice(originale.preflight)
      ? originale.preflight : (oggettoSemplice(originale.preInvio) ? originale.preInvio : {});
    var preflight = Object.assign({}, preflightGrezzo);
    // Le due attestazioni della bozza v0 non bastano a dichiarare il nuovo
    // controllo molti-a-molti: la migrazione resta volutamente prudente.
    if (Object.prototype.hasOwnProperty.call(preflightGrezzo, "linkAperti")) {
      preflight["course-data-checked"] = !!preflightGrezzo.linkAperti;
    }
    if (Object.prototype.hasOwnProperty.call(preflightGrezzo, "ectsConfrontati")) {
      preflight["credits-compared"] = !!preflightGrezzo.ectsConfrontati;
    }
    LA_PREFLIGHT.forEach(function (chiave) {
      preflight[chiave] = !!preflight[chiave];
    });
    delete preflight.linkAperti;
    delete preflight.ectsConfrontati;

    var risultato = Object.assign({}, originale, {
      versionId: versionId,
      number: numero,
      createdAt: testo(originale.createdAt || originale.creataIl) || new Date(0).toISOString(),
      reason: testo(originale.reason || originale.motivo),
      note: testo(originale.note || originale.notaMotivo),
      homeExamSnapshots: esami.map(function (esame, i) {
        return normalizzaSnapshotCasaLA(esame, versionId + ":home-" + (i + 1));
      }),
      hostCourseSnapshots: corsi.map(function (corso, i) {
        return normalizzaSnapshotHostLA(corso, versionId + ":host-" + (i + 1));
      }),
      mappings: gruppi.map(function (gruppo, i) {
        return normalizzaMappaturaLA(gruppo, versionId + ":map-" + (i + 1));
      }),
      preflight: preflight
    });
    delete risultato.numero;
    delete risultato.creataIl;
    delete risultato.motivo;
    delete risultato.notaMotivo;
    delete risultato.esamiCasa;
    delete risultato.corsiHost;
    delete risultato.gruppi;
    delete risultato.preInvio;
    if (testo(originale.lockedAt)) risultato.lockedAt = testo(originale.lockedAt);
    if (testo(originale.lockReason)) risultato.lockReason = testo(originale.lockReason);
    return risultato;
  }

  function normalizzaDossierLA(dossier, idFallback, configurazione) {
    var originale = oggettoSemplice(dossier) ? copiaPersistibile(dossier) : {};
    var id = testo(originale.id) || idFallback;
    var metaOriginale = oggettoSemplice(originale.meta) ? originale.meta : {};
    var metaId = testo(originale.metaId || metaOriginale.id);
    var versioniGrezze = Array.isArray(originale.versions)
      ? originale.versions : (Array.isArray(originale.versioni) ? originale.versioni : []);
    var versioni = versioniGrezze.map(function (versione, indice) {
      return normalizzaVersioneLA(versione, id, indice);
    });
    var currentVersionId = testo(originale.currentVersionId);
    if (!versioni.some(function (versione) { return versione.versionId === currentVersionId; })) {
      currentVersionId = versioni.length ? versioni[versioni.length - 1].versionId : null;
    }
    var risultato = Object.assign({}, originale, {
      id: id,
      metaId: metaId,
      // `source` non viene copiato alla cieca: normalizzaMetaLA lo deriva dal
      // namespace dell'id, così l'avviso manuale non si può spegnere a mano.
      meta: normalizzaMetaLA(Object.assign({}, metaOriginale, {
        universita: metaOriginale.universita || originale.metaName
      }), metaId),
      university: testo(originale.university || originale.ateneo || configurazione.ateneo),
      cycle: testo(originale.cycle || originale.ciclo || configurazione.ciclo),
      createdAt: testo(originale.createdAt || originale.creataIl) || new Date(0).toISOString(),
      updatedAt: testo(originale.updatedAt || originale.aggiornatoIl || originale.createdAt || originale.creataIl) || new Date(0).toISOString(),
      versions: versioni,
      currentVersionId: currentVersionId,
      confirmationsByVersion: oggettoSemplice(originale.confirmationsByVersion)
        ? copiaPersistibile(originale.confirmationsByVersion) : {},
      lifecycle: oggettoSemplice(originale.lifecycle)
        ? copiaPersistibile(originale.lifecycle) : {}
    });
    delete risultato.ateneo;
    delete risultato.ciclo;
    delete risultato.creataIl;
    delete risultato.aggiornatoIl;
    delete risultato.versioni;
    delete risultato.versioneCorrente;
    delete risultato.prossimoId;
    // Un `source` manuale appiccicato al dossier (non alla meta) non è una
    // seconda autorità: vale sempre e solo il namespace dell'id.
    if (!eIdManualeLA(metaId) && risultato.source === "manual") delete risultato.source;
    if (testo(originale.archivedAt)) risultato.archivedAt = testo(originale.archivedAt);
    if (oggettoSemplice(originale.recognition)) {
      var riconoscimento = copiaPersistibile(originale.recognition);
      riconoscimento.approvedVersionId = testo(riconoscimento.approvedVersionId);
      riconoscimento.hostCourses = (Array.isArray(riconoscimento.hostCourses)
        ? riconoscimento.hostCourses : []).filter(oggettoSemplice).map(function (riga) {
          var stato = ["passed", "failed", "absent"].indexOf(riga.transcriptStatus) >= 0
            ? riga.transcriptStatus : "absent";
          return Object.assign({}, riga, {
            hostCourseSnapshotId: testo(riga.hostCourseSnapshotId),
            transcriptStatus: stato,
            transcriptTitle: testo(riga.transcriptTitle),
            transcriptCredits: numeroPositivo(riga.transcriptCredits) || ""
          });
        });
      riconoscimento.homeExams = (Array.isArray(riconoscimento.homeExams)
        ? riconoscimento.homeExams : []).filter(oggettoSemplice).map(function (riga) {
          var stato = ["pending", "recognized", "not-recognized"].indexOf(riga.status) >= 0
            ? riga.status : "pending";
          return Object.assign({}, riga, {
            homeExamSnapshotId: testo(riga.homeExamSnapshotId),
            status: stato
          });
        });
      risultato.recognition = riconoscimento;
    }
    return risultato;
  }

  function idLegacyBaseLA(ateneo, ciclo, metaId) {
    return "legacy:" + slugLA(ateneo) + ":" + slugLA(ciclo) + ":" + slugLA(metaId);
  }

  function bozzaLegacyValidaLA(bozza) {
    return oggettoSemplice(bozza) && Array.isArray(bozza.versioni) && bozza.versioni.length > 0;
  }

  function migraLaLegacyV2(grezzo, configurazione) {
    var originale = oggettoSemplice(grezzo) ? copiaPersistibile(grezzo) : {};
    var sconosciuti = {};
    Object.keys(originale).forEach(function (chiave) {
      if (chiave !== "metaAperta" && chiave !== "bozzePerMeta") {
        sconosciuti[chiave] = copiaPersistibile(originale[chiave]);
      }
    });
    var risultato = Object.assign(creaLaV2(), sconosciuti);
    var bozze = oggettoSemplice(originale.bozzePerMeta) ? originale.bozzePerMeta : {};
    var corrotti = {};
    if (Object.prototype.hasOwnProperty.call(originale, "bozzePerMeta") &&
        !oggettoSemplice(originale.bozzePerMeta)) {
      corrotti.__bozzePerMeta = copiaPersistibile(originale.bozzePerMeta);
    }
    var usati = {};
    var metaAperta = testo(originale.metaAperta);

    Object.keys(bozze).sort(function (a, b) {
      return a.localeCompare(b, "it", { sensitivity: "variant" });
    }).forEach(function (metaId) {
      var bozza = bozze[metaId];
      if (!bozzaLegacyValidaLA(bozza)) {
        corrotti[metaId] = copiaPersistibile(bozza);
        return;
      }
      var ateneo = testo(bozza.ateneo || configurazione.ateneo);
      var ciclo = testo(bozza.ciclo || configurazione.ciclo);
      var base = idLegacyBaseLA(ateneo, ciclo, metaId);
      var collisione = (usati[base] || 0) + 1;
      usati[base] = collisione;
      var id = collisione === 1 ? base : base + "-" + collisione;
      var dossier = normalizzaDossierLA(bozza, id, {
        ateneo: ateneo,
        ciclo: ciclo
      });
      dossier.id = id;
      dossier.metaId = testo(metaId);
      dossier.meta.id = testo(metaId);
      dossier.versions = dossier.versions.map(function (versione, indice) {
        var numero = Number(versione.number) || indice + 1;
        versione.versionId = id + ":v" + numero;
        return versione;
      });
      dossier.currentVersionId = dossier.versions[dossier.versions.length - 1].versionId;
      risultato.dossiersById[id] = dossier;
      if (metaId === metaAperta) risultato.openDossierId = id;
    });
    risultato.nextId = Object.keys(risultato.dossiersById).length + 1;
    risultato.recovery = Object.assign({}, risultato.recovery, {
      legacyRecovery: originale
    });
    if (Object.keys(corrotti).length) risultato.recovery.legacyCorrupt = corrotti;
    return risultato;
  }

  function normalizzaLaV2(grezzo, configurazione) {
    var opzioni = configurazione || {};
    var originale = oggettoSemplice(grezzo) ? copiaPersistibile(grezzo) : {};
    var eV2 = Number(originale.schemaVersion) === LA_SCHEMA_VERSION ||
      oggettoSemplice(originale.dossiersById);
    if (!eV2 && (Object.prototype.hasOwnProperty.call(originale, "bozzePerMeta") ||
                 Object.prototype.hasOwnProperty.call(originale, "metaAperta"))) {
      return migraLaLegacyV2(originale, opzioni);
    }

    var risultato = Object.assign(creaLaV2(), originale);
    risultato.schemaVersion = LA_SCHEMA_VERSION;
    var nextId = Number(risultato.nextId);
    risultato.nextId = Number.isInteger(nextId) && nextId > 0 ? nextId : 1;
    var libreria = oggettoSemplice(risultato.examLibrary) ? risultato.examLibrary : {};
    risultato.examLibrary = {};
    Object.keys(libreria).sort().forEach(function (id) {
      risultato.examLibrary[id] = normalizzaEsameLibreriaLA(libreria[id], id);
    });
    var dossierGrezzi = oggettoSemplice(risultato.dossiersById) ? risultato.dossiersById : {};
    risultato.dossiersById = {};
    Object.keys(dossierGrezzi).sort().forEach(function (id) {
      risultato.dossiersById[id] = normalizzaDossierLA(dossierGrezzi[id], id, opzioni);
    });
    if (!risultato.dossiersById[testo(risultato.openDossierId)]) risultato.openDossierId = null;
    var assegnati = oggettoSemplice(risultato.assignedDossierIdByCycle)
      ? risultato.assignedDossierIdByCycle : {};
    risultato.assignedDossierIdByCycle = {};
    Object.keys(assegnati).forEach(function (ciclo) {
      var id = testo(assegnati[ciclo]);
      var dossier = risultato.dossiersById[id];
      if (dossier && !dossier.archivedAt && dossier.cycle === ciclo) {
        risultato.assignedDossierIdByCycle[ciclo] = id;
      }
    });
    if (risultato.recovery !== undefined && !oggettoSemplice(risultato.recovery)) {
      risultato.recovery = { legacyCorrupt: copiaPersistibile(risultato.recovery) };
    }
    // Intento in corso e dossier aperto sono mutuamente esclusivi: finché lo
    // studente sta scegliendo, nessun dossier risulta già aperto sotto.
    var intento = normalizzaPendingIntentLA(risultato.pendingIntent, risultato.dossiersById);
    if (intento) {
      risultato.pendingIntent = intento;
      risultato.openDossierId = null;
    } else {
      delete risultato.pendingIntent;
    }
    return risultato;
  }

  function laRichiedeMigrazioneV2(grezzo) {
    return oggettoSemplice(grezzo) &&
      Number(grezzo.schemaVersion) !== LA_SCHEMA_VERSION &&
      (Object.prototype.hasOwnProperty.call(grezzo, "bozzePerMeta") ||
       Object.prototype.hasOwnProperty.call(grezzo, "metaAperta"));
  }

  function contaContenutoLA(la) {
    var normalizzata = normalizzaLaV2(la);
    var dossier = Object.keys(normalizzata.dossiersById).length;
    var versioni = 0;
    var esami = 0;
    var corsi = 0;
    Object.keys(normalizzata.dossiersById).forEach(function (id) {
      var d = normalizzata.dossiersById[id];
      versioni += d.versions.length;
      d.versions.forEach(function (v) {
        esami += v.homeExamSnapshots.length;
        corsi += v.hostCourseSnapshots.length;
      });
    });
    return { dossier: dossier, versioni: versioni, esami: esami, corsi: corsi };
  }

  function verificaRecoveryLegacyLA(la, configurazione) {
    if (!oggettoSemplice(la) || !oggettoSemplice(la.recovery) ||
        !oggettoSemplice(la.recovery.legacyRecovery)) return false;
    var opzioni = configurazione || {};
    var attuale = normalizzaLaV2(la, opzioni);
    var attesa = normalizzaLaV2(
      migraLaLegacyV2(la.recovery.legacyRecovery, opzioni), opzioni
    );
    // La sola differenza autorizzata è la copia di sicurezza che il secondo
    // salvataggio deve rimuovere. legacyCorrupt e qualunque campo futuro
    // partecipano invece al confronto e non possono sparire in silenzio.
    delete attuale.recovery.legacyRecovery;
    delete attesa.recovery.legacyRecovery;

    function equivalenti(a, b) {
      if (a === b) return true;
      if (Array.isArray(a) || Array.isArray(b)) {
        if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
        return a.every(function (valore, indice) { return equivalenti(valore, b[indice]); });
      }
      if (!oggettoSemplice(a) || !oggettoSemplice(b)) return false;
      var chiaviA = Object.keys(a).sort();
      var chiaviB = Object.keys(b).sort();
      if (chiaviA.length !== chiaviB.length || chiaviA.some(function (chiave, indice) {
        return chiave !== chiaviB[indice];
      })) return false;
      return chiaviA.every(function (chiave) { return equivalenti(a[chiave], b[chiave]); });
    }

    return equivalenti(attuale, attesa);
  }

  function rimuoviRecoveryLegacyLA(la) {
    var copia = normalizzaLaV2(la);
    if (oggettoSemplice(copia.recovery)) {
      delete copia.recovery.legacyRecovery;
      if (!Object.keys(copia.recovery).length) delete copia.recovery;
    }
    return copia;
  }

  function chiaveDuplicatoEsameLA(esame) {
    var codice = slugLA(esame && esame.codice);
    if (testo(esame && esame.codice)) return "codice:" + codice;
    var nome = slugLA(esame && esame.nome);
    var cfu = numeroPositivo(esame && esame.cfu);
    return nome && cfu ? "nome-cfu:" + nome + ":" + cfu : "";
  }

  function parsePianoStudiLA(input, examLibrary) {
    var righe = String(input == null ? "" : input).split(/\r?\n/);
    var libreria = oggettoSemplice(examLibrary) ? examLibrary : {};
    var duplicati = {};
    Object.keys(libreria).forEach(function (id) {
      var chiave = chiaveDuplicatoEsameLA(libreria[id]);
      if (chiave && !duplicati[chiave]) duplicati[chiave] = id;
    });
    var risultato = [];
    var indiceDati = 0;
    righe.forEach(function (riga, indice) {
      if (!riga.trim()) return;
      var separatore = riga.indexOf(";") >= 0 ? ";" : (riga.indexOf("\t") >= 0 ? "\t" : null);
      var celle = separatore ? riga.split(separatore).map(testo) : [testo(riga)];
      var intestazione = indiceDati === 0 && celle.length >= 3 &&
        /codice/i.test(celle[0]) && /(nome|esame|insegnamento)/i.test(celle[1]) && /cfu|credit/i.test(celle[2]);
      indiceDati += 1;
      if (intestazione) return;
      var esame = {
        codice: celle[0] || "",
        nome: celle[1] || "",
        cfu: numeroPositivo(celle[2]),
        stato: "da-sostenere"
      };
      var problemi = [];
      if (!separatore || celle.length !== 3) problemi.push("ambiguous-columns");
      if (!esame.nome) problemi.push("missing-name");
      if (!esame.cfu) problemi.push("invalid-credits");
      var chiave = chiaveDuplicatoEsameLA(esame);
      var duplicateExamId = chiave ? duplicati[chiave] || null : null;
      if (duplicateExamId) problemi.push("duplicate");
      risultato.push({
        rowId: "row-" + (indice + 1),
        line: indice + 1,
        raw: riga,
        values: esame,
        issues: problemi,
        duplicateExamId: duplicateExamId,
        requiresDecision: problemi.length > 0
      });
      if (chiave && !duplicati[chiave]) duplicati[chiave] = "preview:" + (indice + 1);
    });
    return {
      rows: risultato,
      unresolvedCount: risultato.filter(function (riga) { return riga.requiresDecision; }).length
    };
  }

  function finalizzaImportPianoLA(preview, decisions) {
    var righe = preview && Array.isArray(preview.rows) ? preview.rows : [];
    var scelte = oggettoSemplice(decisions) ? decisions : {};
    var importabili = [];
    var irrisolte = [];
    righe.forEach(function (riga) {
      var decisione = scelte[riga.rowId];
      if (!riga.requiresDecision) {
        importabili.push(Object.assign({}, copiaPersistibile(riga.values), {
          cfu: numeroPositivo(riga.values.cfu),
          importRowId: riga.rowId
        }));
        return;
      }
      if (!oggettoSemplice(decisione) || ["exclude", "confirm", "keep-separate", "merge"].indexOf(decisione.action) < 0) {
        irrisolte.push(copiaPersistibile(riga));
        return;
      }
      if (decisione.action === "exclude") return;
      if (decisione.action === "merge") {
        var valoriMerge = oggettoSemplice(decisione.values)
          ? Object.assign({}, riga.values, decisione.values) : copiaPersistibile(riga.values);
        var cfuMerge = numeroPositivo(valoriMerge.cfu);
        if (!testo(valoriMerge.nome) || !cfuMerge) {
          irrisolte.push(copiaPersistibile(riga));
          return;
        }
        importabili.push(Object.assign({}, valoriMerge, {
          cfu: cfuMerge,
          mergeIntoExamId: testo(decisione.examId || riga.duplicateExamId),
          importRowId: riga.rowId
        }));
        return;
      }
      var valori = oggettoSemplice(decisione.values)
        ? Object.assign({}, riga.values, decisione.values) : copiaPersistibile(riga.values);
      if (!testo(valori.nome) || !numeroPositivo(valori.cfu)) {
        irrisolte.push(copiaPersistibile(riga));
        return;
      }
      importabili.push(Object.assign({}, valori, {
        cfu: numeroPositivo(valori.cfu),
        importRowId: riga.rowId
      }));
    });
    return { exams: importabili, unresolvedRows: irrisolte };
  }

  function versioneCorrenteLA(dossier) {
    if (!oggettoSemplice(dossier) || !Array.isArray(dossier.versions)) return null;
    return dossier.versions.find(function (v) {
      return v.versionId === dossier.currentVersionId;
    }) || dossier.versions[dossier.versions.length - 1] || null;
  }

  function filtraRegoleLA(regole, contesto) {
    var opzioni = contesto || {};
    var oggi = new Date(opzioni.asOf || new Date().toISOString());
    var maxAgeDays = Number(opzioni.maxAgeDays || 400);
    var universita = testo(opzioni.university);
    var ciclo = testo(opzioni.cycle);
    var scope = testo(opzioni.scope || "all");
    var pertinenti = (Array.isArray(regole) ? regole : []).filter(function (regola) {
      if (!oggettoSemplice(regola) || testo(regola.university) !== universita ||
          testo(regola.cycle) !== ciclo) return false;
      var ambiti = Array.isArray(regola.scope) ? regola.scope : [regola.scope || "all"];
      if (ambiti.indexOf("all") < 0 && ambiti.indexOf(scope) < 0) return false;
      if (testo(regola.stage) && testo(regola.stage) !== testo(opzioni.stage)) return false;
      return true;
    });
    var invalida = pertinenti.some(function (regola) {
      if (["block", "warning", "info"].indexOf(regola.severity) < 0 ||
          !testo(regola.id) || !testo(regola.title) || !testo(regola.verifiedAt)) return true;
      var fonti = Array.isArray(regola.sources) ? regola.sources : [];
      if (!fonti.length || fonti.some(function (fonte) {
        return !oggettoSemplice(fonte) || !/^https:\/\//.test(testo(fonte.url)) || !testo(fonte.title);
      })) return true;
      var verificata = new Date(regola.verifiedAt);
      return Number.isNaN(verificata.getTime()) || verificata > oggi ||
        (oggi - verificata) / 86400000 > maxAgeDays;
    });
    return pertinenti.length && !invalida
      ? { state: "verified", rules: pertinenti.map(copiaPersistibile) }
      : { state: "verify", rules: [], message: "Procedura da verificare" };
  }

  function calcolaScadenzaRelativaLA(regola, lifecycle) {
    if (!oggettoSemplice(regola) || !oggettoSemplice(regola.relativeDeadline) ||
        !oggettoSemplice(lifecycle)) return null;
    var giorni = Number(regola.relativeDeadline.days);
    var base = testo(regola.relativeDeadline.baseEvent);
    if (!Number.isFinite(giorni) || giorni <= 0 || !base || !testo(lifecycle[base])) return null;
    var data = new Date(lifecycle[base]);
    if (Number.isNaN(data.getTime())) return null;
    data.setUTCDate(data.getUTCDate() + giorni);
    return data.toISOString();
  }

  function regolaBloccaDossierLA(regola, versione) {
    if (!regola || regola.severity !== "block") return false;
    var esami = versione.homeExamSnapshots || [];
    if (regola.check === "home-not-passed") {
      return esami.some(function (esame) { return statoEsameLA(esame.stato) === "gia-sostenuto"; });
    }
    if (regola.check === "home-code-required") {
      return esami.some(function (esame) { return !testo(esame.codice); });
    }
    return regola.applies === true;
  }

  function valutaProntezzaLA(dossier, versione, regoleApplicabili) {
    var mancanti = [];
    var d = oggettoSemplice(dossier) ? dossier : {};
    var v = oggettoSemplice(versione) ? versione : {};
    if (!testo(d.metaId) || !oggettoSemplice(d.meta)) mancanti.push("missing-meta");
    if (!testo(d.cycle)) mancanti.push("missing-cycle");
    var casa = Array.isArray(v.homeExamSnapshots) ? v.homeExamSnapshots : [];
    var hostTutti = Array.isArray(v.hostCourseSnapshots) ? v.hostCourseSnapshots : [];
    var host = hostTutti.filter(corsoHostAttivoLA);
    if (!casa.length) mancanti.push("no-home-course");
    if (!host.length) mancanti.push("no-host-course");
    if (casa.some(function (esame) { return !testo(esame.nome); })) mancanti.push("missing-home-name");
    if (host.some(function (corso) { return !testo(corso.nome); })) mancanti.push("missing-host-name");
    if (casa.some(function (esame) { return !numeroPositivo(esame.cfu); })) mancanti.push("invalid-home-credits");
    if (host.some(function (corso) { return !numeroPositivo(corso.ects); })) mancanti.push("invalid-host-credits");
    var casaIds = new Set(casa.map(function (esame) { return esame.snapshotId; }));
    var hostIds = new Set(hostTutti.map(function (corso) { return corso.snapshotId; }));
    var hostAttiviIds = new Set(host.map(function (corso) { return corso.snapshotId; }));
    var casaMappati = new Set();
    var hostMappati = new Set();
    var orfana = false;
    (Array.isArray(v.mappings) ? v.mappings : []).forEach(function (gruppo) {
      var casaPresenti = (gruppo.homeExamSnapshotIds || []).filter(function (id) {
        if (!casaIds.has(id)) { orfana = true; return false; }
        return true;
      });
      var hostAttiviPresenti = (gruppo.hostCourseSnapshotIds || []).filter(function (id) {
        if (!hostIds.has(id)) { orfana = true; return false; }
        return hostAttiviIds.has(id);
      });
      // Un gruppo esprime una relazione molti-a-molti soltanto se collega
      // davvero almeno un elemento esistente per ciascun lato. Due gruppi
      // monchi non possono completarsi a vicenda.
      if (casaPresenti.length && hostAttiviPresenti.length) {
        casaPresenti.forEach(function (id) { casaMappati.add(id); });
        hostAttiviPresenti.forEach(function (id) { hostMappati.add(id); });
      }
    });
    if (casa.some(function (esame) { return !casaMappati.has(esame.snapshotId); })) mancanti.push("unmapped-home");
    if (host.some(function (corso) { return !hostMappati.has(corso.snapshotId); })) mancanti.push("unmapped-host");
    if (orfana) mancanti.push("orphan-reference");
    if (Array.isArray(v.unresolvedImportRows) && v.unresolvedImportRows.length) mancanti.push("unresolved-import");
    LA_PREFLIGHT.forEach(function (chiave) {
      if (!oggettoSemplice(v.preflight) || !v.preflight[chiave]) mancanti.push("preflight:" + chiave);
    });
    (Array.isArray(regoleApplicabili) ? regoleApplicabili : []).forEach(function (regola) {
      if (regolaBloccaDossierLA(regola, v)) mancanti.push("rule:" + regola.id);
    });
    var unici = mancanti.filter(function (codice, indice) {
      return mancanti.indexOf(codice) === indice;
    });
    return { state: unici.length ? "incomplete" : "ready", missingCodes: unici };
  }

  function derivaFaseLA(la, ciclo) {
    var stato = normalizzaLaV2(la);
    var id = stato.assignedDossierIdByCycle[testo(ciclo)];
    var dossier = id ? stato.dossiersById[id] : null;
    if (!dossier || dossier.archivedAt) return "exploration";
    var fatti = oggettoSemplice(dossier.lifecycle) ? dossier.lifecycle : {};
    if (testo(fatti.recognitionRecordedAt)) return "closed";
    if (testo(fatti.returnedAt)) return "recognition";
    if (testo(fatti.mobilityStartedAt)) return "mobility";
    if (testo(fatti.firstExternalAt)) return "approval";
    return "preparation";
  }

  function clonaNuovaVersioneLA(dossier, opzioni) {
    var copia = copiaPersistibile(dossier);
    var corrente = versioneCorrenteLA(copia);
    if (!corrente) return copia;
    var numeri = copia.versions.map(function (v) { return Number(v.number) || 0; });
    var numero = Math.max.apply(Math, numeri.concat([0])) + 1;
    var nuova = copiaPersistibile(corrente);
    nuova.number = numero;
    nuova.versionId = copia.id + ":v" + numero;
    nuova.createdAt = oraIso(opzioni && opzioni.at);
    nuova.reason = testo(opzioni && opzioni.reason) || "change";
    nuova.note = testo(opzioni && opzioni.note);
    delete nuova.lockedAt;
    delete nuova.lockReason;
    // Tranche 2 §4/§6: la fotografia riepilogativa vale per la versione che è
    // stata confermata, non per quella che nasce dopo. Una versione nuova
    // riparte quindi senza conferma, esattamente come riparte senza preflight.
    delete nuova.reconstruction;
    nuova.preflight = {};
    LA_PREFLIGHT.forEach(function (chiave) { nuova.preflight[chiave] = false; });
    copia.versions.push(nuova);
    copia.currentVersionId = nuova.versionId;
    copia.updatedAt = nuova.createdAt;
    return copia;
  }

  function preparaModificaVersioneLA(dossier, opzioni) {
    var copia = copiaPersistibile(dossier);
    var corrente = versioneCorrenteLA(copia);
    if (!corrente) return copia;
    // La storia del dossier non blocca automaticamente la bozza corrente:
    // soltanto il lockedAt della versione esatta impone il clone.
    return testo(corrente.lockedAt) ? clonaNuovaVersioneLA(copia, opzioni) : copia;
  }

  function haFattiEsterniLA(dossier) {
    if (!oggettoSemplice(dossier)) return false;
    var lifecycle = oggettoSemplice(dossier.lifecycle) ? dossier.lifecycle : {};
    if (testo(lifecycle.firstExternalAt) || LA_FATTI_LIFECYCLE.some(function (chiave) {
      return testo(lifecycle[chiave]);
    })) return true;
    var conferme = oggettoSemplice(dossier.confirmationsByVersion)
      ? dossier.confirmationsByVersion : {};
    if (Object.keys(conferme).some(function (versioneId) {
      return oggettoSemplice(conferme[versioneId]) && Object.keys(conferme[versioneId]).length > 0;
    })) return true;
    return Array.isArray(dossier.versions) && dossier.versions.some(function (versione) {
      return testo(versione && versione.lockedAt);
    });
  }

  function registraFattoEsternoLA(dossier, stepKey, record) {
    if (LA_PASSI_ESTERNI.indexOf(stepKey) < 0) return { ok: false, error: "unknown-step" };
    var copia = copiaPersistibile(dossier);
    var versione = versioneCorrenteLA(copia);
    if (!versione) return { ok: false, error: "missing-version" };
    var data = oraIso(record && record.markedAt);
    if (!testo(versione.lockedAt)) {
      versione.lockedAt = data;
      versione.lockReason = stepKey;
    }
    if (!oggettoSemplice(copia.confirmationsByVersion)) copia.confirmationsByVersion = {};
    if (!oggettoSemplice(copia.confirmationsByVersion[versione.versionId])) {
      copia.confirmationsByVersion[versione.versionId] = {};
    }
    copia.confirmationsByVersion[versione.versionId][stepKey] = {
      versionId: versione.versionId,
      markedAt: data,
      subject: testo(record && record.subject) || stepKey,
      note: testo(record && record.note)
    };
    if (!oggettoSemplice(copia.lifecycle)) copia.lifecycle = {};
    if (!testo(copia.lifecycle.firstExternalAt)) copia.lifecycle.firstExternalAt = data;
    copia.updatedAt = data;
    return { ok: true, dossier: copia, versionId: versione.versionId };
  }

  function registraFattoLifecycleLA(dossier, factKey, record) {
    if (LA_FATTI_LIFECYCLE.indexOf(factKey) < 0) {
      return { ok: false, error: "unknown-lifecycle-fact" };
    }
    var copia = copiaPersistibile(dossier);
    var versione = versioneCorrenteLA(copia);
    if (!versione) return { ok: false, error: "missing-version" };
    var data = oraIso(record && record.markedAt);
    if (!oggettoSemplice(copia.lifecycle)) copia.lifecycle = {};
    var primo = !haFattiEsterniLA(copia);
    copia.lifecycle[factKey] = data;
    if (!testo(copia.lifecycle.firstExternalAt)) copia.lifecycle.firstExternalAt = data;
    if (!testo(versione.lockedAt)) {
      versione.lockedAt = data;
      versione.lockReason = factKey;
    }
    copia.updatedAt = data;
    return {
      ok: true,
      dossier: copia,
      versionId: versione.versionId,
      firstExternal: primo
    };
  }

  function assegnaDossierLA(la, dossierId, ciclo, opzioni) {
    var stato = normalizzaLaV2(la);
    var id = testo(dossierId);
    var d = stato.dossiersById[id];
    var cycle = testo(ciclo);
    if (!d || d.archivedAt || d.cycle !== cycle) return { ok: false, error: "invalid-dossier" };
    var precedenteId = stato.assignedDossierIdByCycle[cycle];
    if (precedenteId && precedenteId !== id) {
      var precedente = stato.dossiersById[precedenteId];
      var haEvento = haFattiEsterniLA(precedente);
      if (haEvento && !(opzioni && opzioni.strongConfirmation)) {
        return { ok: false, error: "strong-confirmation-required", previousDossierId: precedenteId };
      }
      if (haEvento) precedente.archivedAt = oraIso(opzioni && opzioni.at);
    }
    stato.assignedDossierIdByCycle[cycle] = id;
    stato.openDossierId = id;
    stato.backupReminder = { reason: "assignment", dueAt: oraIso(opzioni && opzioni.at) };
    return { ok: true, la: stato, previousDossierId: precedenteId || null };
  }

  function creaDossierLA(la, dati) {
    var stato = normalizzaLaV2(la);
    var metaId = testo(dati && dati.metaId);
    var ciclo = testo(dati && dati.cycle);
    var esistente = Object.keys(stato.dossiersById).map(function (id) {
      return stato.dossiersById[id];
    }).find(function (d) {
      return d.metaId === metaId && d.cycle === ciclo && !d.archivedAt;
    });
    if (esistente) {
      stato.openDossierId = esistente.id;
      return { created: false, la: stato, dossierId: esistente.id };
    }
    var id = "la-" + stato.nextId;
    while (stato.dossiersById[id]) { stato.nextId += 1; id = "la-" + stato.nextId; }
    stato.nextId += 1;
    var data = oraIso(dati && dati.at);
    var versionId = id + ":v1";
    var meta = oggettoSemplice(dati && dati.meta) ? copiaPersistibile(dati.meta) : {};
    var dossier = {
      id: id,
      metaId: metaId,
      // normalizzaMetaLA applica limiti dei campi manuali e deriva `source`
      // dal namespace dell'id: il dossier nasce già coerente, e il backup che
      // ne uscirà porta l'avviso con sé (PLAN.md §7-§8).
      meta: normalizzaMetaLA(meta, metaId),
      university: testo(dati && dati.university),
      cycle: ciclo,
      createdAt: data,
      updatedAt: data,
      versions: [{
        versionId: versionId,
        number: 1,
        createdAt: data,
        reason: "initial",
        note: "",
        homeExamSnapshots: [],
        hostCourseSnapshots: [],
        mappings: [],
        preflight: {
          "course-data-checked": false,
          "credits-compared": false,
          "mapping-reviewed": false
        }
      }],
      currentVersionId: versionId,
      confirmationsByVersion: {},
      lifecycle: {}
    };
    stato.dossiersById[id] = dossier;
    stato.openDossierId = id;
    return { created: true, la: stato, dossierId: id };
  }

  function duplicaDossierNuovoCicloLA(la, dossierId, nuovoCiclo, dati) {
    var stato = normalizzaLaV2(la);
    var origine = stato.dossiersById[testo(dossierId)];
    if (!origine) return { ok: false, error: "missing-dossier" };
    var creato = creaDossierLA(stato, {
      metaId: origine.metaId,
      meta: origine.meta,
      university: origine.university,
      cycle: testo(nuovoCiclo),
      at: dati && dati.at
    });
    if (!creato.created) {
      return { ok: true, created: false, la: creato.la, dossierId: creato.dossierId };
    }
    var nuovo = creato.la.dossiersById[creato.dossierId];
    var versione = versioneCorrenteLA(nuovo);
    Object.keys(creato.la.examLibrary).forEach(function (id) {
      var esame = creato.la.examLibrary[id];
      versione.homeExamSnapshots.push(normalizzaSnapshotCasaLA({
        snapshotId: versione.versionId + ":home-" + (versione.homeExamSnapshots.length + 1),
        sourceExamId: id,
        codice: esame.codice,
        nome: esame.nome,
        cfu: esame.cfu,
        stato: esame.stato
      }));
    });
    return { ok: true, created: true, la: creato.la, dossierId: creato.dossierId };
  }

  function confrontaRiconoscimentoLA(dossier, riconoscimento) {
    var versioneId = testo(riconoscimento && riconoscimento.approvedVersionId);
    var versione = dossier && Array.isArray(dossier.versions)
      ? dossier.versions.find(function (v) { return v.versionId === versioneId; }) : null;
    var conferme = dossier && dossier.confirmationsByVersion && dossier.confirmationsByVersion[versioneId];
    if (!versione || !oggettoSemplice(conferme) || !conferme["home-approved"]) {
      return { valid: false, error: "approved-version-not-confirmed", mismatches: [] };
    }
    var differenze = [];
    var hostRows = Array.isArray(riconoscimento.hostCourses) ? riconoscimento.hostCourses : [];
    versione.hostCourseSnapshots.forEach(function (corso) {
      var riga = hostRows.find(function (r) { return r.hostCourseSnapshotId === corso.snapshotId; });
      if (!riga) {
        differenze.push({ type: "missing-host-activity", snapshotId: corso.snapshotId });
        return;
      }
      if (riga.transcriptStatus === "absent") {
        differenze.push({ type: "missing-host-activity", snapshotId: corso.snapshotId });
        return;
      }
      if (riga.transcriptStatus === "passed") {
        if (!testo(riga.transcriptTitle)) {
          differenze.push({ type: "missing-transcript-title", snapshotId: corso.snapshotId });
        } else if (slugLA(riga.transcriptTitle) !== slugLA(corso.nome)) {
          differenze.push({ type: "title", snapshotId: corso.snapshotId });
        }
        var crediti = numeroPositivo(riga.transcriptCredits);
        if (!crediti || crediti !== numeroPositivo(corso.ects)) {
          differenze.push({ type: "credits", snapshotId: corso.snapshotId });
        }
      }
    });
    var homeRows = Array.isArray(riconoscimento.homeExams) ? riconoscimento.homeExams : [];
    versione.homeExamSnapshots.forEach(function (esame) {
      if (!homeRows.some(function (r) { return r.homeExamSnapshotId === esame.snapshotId; })) {
        differenze.push({ type: "missing-home-outcome", snapshotId: esame.snapshotId });
      }
    });
    return { valid: true, versionId: versioneId, mismatches: differenze };
  }

  function creaBackupLA(dati) {
    return {
      format: "erasmuswiz-la-backup",
      schemaVersion: LA_SCHEMA_VERSION,
      university: testo(dati && dati.university),
      cycle: testo(dati && dati.cycle),
      exportedAt: oraIso(dati && dati.exportedAt),
      payload: normalizzaLaV2(dati && dati.payload, {
        ateneo: testo(dati && dati.university),
        ciclo: testo(dati && dati.cycle)
      }),
      privacyWarning: "Contiene dati accademici inseriti da te. Conservalo in un luogo privato: ErasmusWiz non lo carica online."
    };
  }

  function analizzaBackupLA(input, universitaNote) {
    var dato;
    try { dato = typeof input === "string" ? JSON.parse(input) : copiaPersistibile(input); }
    catch (e) { return { ok: false, error: "malformed-json" }; }
    if (!oggettoSemplice(dato) || dato.format !== "erasmuswiz-la-backup") {
      return { ok: false, error: "unknown-format" };
    }
    if (Number(dato.schemaVersion) > LA_SCHEMA_VERSION) return { ok: false, error: "future-schema" };
    if (Number(dato.schemaVersion) !== LA_SCHEMA_VERSION) return { ok: false, error: "unsupported-schema" };
    var university = testo(dato.university);
    if ((universitaNote || []).indexOf(university) < 0) return { ok: false, error: "unknown-university" };
    var cycle = testo(dato.cycle);
    if (!/^\d{4}\/\d{2}$/.test(cycle)) return { ok: false, error: "invalid-cycle" };
    var exportedAt = testo(dato.exportedAt);
    if (!exportedAt || Number.isNaN(new Date(exportedAt).getTime())) {
      return { ok: false, error: "invalid-exported-at" };
    }
    if (!oggettoSemplice(dato.payload)) return { ok: false, error: "missing-payload" };
    // `source:"manual"` su un id di catalogo non è correggibile in silenzio:
    // il file è incoerente e l'importazione resta bloccata fino a una scelta
    // esplicita. Il caso opposto (id `manual:*` senza `source`) lo ripara la
    // normalizzazione, perché il namespace lo dimostra da solo.
    var incoerenze = incoerenzeManualiLA(dato.payload);
    if (incoerenze.length) {
      return { ok: false, error: "manual-source-mismatch", issues: incoerenze };
    }
    var payload = normalizzaLaV2(dato.payload, {
      ateneo: university,
      ciclo: cycle
    });
    // L'avviso viaggia con il file: l'anteprima di ripristino sa già quali
    // destinazioni sono state inserite a mano.
    var manuali = Object.keys(payload.dossiersById).filter(function (id) {
      return metaManualeAttivaLA(payload.dossiersById[id]);
    }).map(function (id) {
      return {
        dossierId: id,
        metaId: payload.dossiersById[id].metaId,
        universita: payload.dossiersById[id].meta.universita
      };
    });
    return {
      ok: true,
      university: university,
      cycle: cycle,
      exportedAt: exportedAt,
      payload: payload,
      counts: contaContenutoLA(payload),
      manualMetas: manuali,
      manualWarning: manuali.length ? LA_AVVISO_META_MANUALE : ""
    };
  }

  function filtraSuggerimentiLA(voci, contesto) {
    var opzioni = contesto || {};
    var oggi = new Date(opzioni.asOf || new Date().toISOString());
    return (Array.isArray(voci) ? voci : []).filter(function (voce) {
      if (!oggettoSemplice(voce) || voce.university !== "sapienza" ||
          voce.scope !== "giurisprudenza" || opzioni.university !== "sapienza" ||
          testo(opzioni.scope) !== "giurisprudenza" || !voce.humanReviewed ||
          !testo(voce.reviewer) || !testo(voce.cycle) ||
          typeof voce.reusable !== "boolean") return false;
      if (voce.cycle !== testo(opzioni.cycle) && voce.reusable !== true) return false;
      var verificata = new Date(voce.verifiedAt);
      if (Number.isNaN(verificata.getTime()) || verificata > oggi ||
          (oggi - verificata) / 86400000 > 365) return false;
      var fonti = voce.sources;
      if (!oggettoSemplice(fonti) || [fonti.home, fonti.host].some(function (fonte) {
        return !oggettoSemplice(fonte) || !/^https:\/\//.test(testo(fonte.url)) ||
          !testo(fonte.title) || fonte.official !== true ||
          fonte.accessible !== true || fonte.stable !== true;
      })) return false;
      var r = voce.rationale;
      return oggettoSemplice(r) && ["contents", "credits", "semester", "language", "missingData"]
        .every(function (campo) { return testo(r[campo]); });
    }).map(copiaPersistibile);
  }

  // ----------------------------------------------------------
  // TRANCHE 1 pre-Bruno — intento in corso e contesto unico (PLAN.md §9).
  // Quando lo studente sceglie la meta ma non ha ancora il piano di studi,
  // la scelta non può evaporare né far nascere un dossier vuoto in anticipo:
  // vive in `pendingIntent`, mutuamente esclusivo con `openDossierId`.
  // ----------------------------------------------------------
  var LA_LAVORI = Object.freeze(["primo", "modifica"]);

  function cicloValidoLA(ciclo) {
    return /^\d{4}\/\d{2}$/.test(testo(ciclo));
  }

  function normalizzaPendingIntentLA(grezzo, dossiersById) {
    if (!oggettoSemplice(grezzo)) return null;
    var originale = copiaPersistibile(grezzo);
    var lavoro = testo(originale.work);
    if (LA_LAVORI.indexOf(lavoro) < 0) return null;
    var ciclo = testo(originale.cycle);
    if (!cicloValidoLA(ciclo)) return null;
    var ateneo = testo(originale.university);
    if (!ateneo) return null;
    var meta = null;
    if (oggettoSemplice(originale.meta) && testo(originale.meta.id)) {
      meta = normalizzaMetaLA(originale.meta);
    }
    var precedente = testo(originale.returnOpenDossierId);
    var dossier = oggettoSemplice(dossiersById) ? dossiersById : {};
    if (!dossier[precedente]) precedente = null;
    return Object.assign({}, originale, {
      university: ateneo,
      cycle: ciclo,
      work: lavoro,
      meta: meta,
      createdAt: oraIso(originale.createdAt),
      returnOpenDossierId: precedente
    });
  }

  // Entrare nel flusso mette da parte il dossier aperto invece di perderlo:
  // annullare lo restituisce, completare apre quello nuovo.
  function impostaPendingIntentLA(la, dati) {
    var stato = normalizzaLaV2(la);
    var opzioni = oggettoSemplice(dati) ? dati : {};
    var candidato = normalizzaPendingIntentLA({
      university: opzioni.university,
      cycle: opzioni.cycle,
      work: opzioni.work,
      meta: opzioni.meta,
      createdAt: opzioni.at,
      returnOpenDossierId: Object.prototype.hasOwnProperty.call(opzioni, "returnOpenDossierId")
        ? opzioni.returnOpenDossierId
        : (oggettoSemplice(stato.pendingIntent)
            ? stato.pendingIntent.returnOpenDossierId
            : stato.openDossierId)
    }, stato.dossiersById);
    if (!candidato) return { ok: false, error: "invalid-intent", la: stato };
    stato.pendingIntent = candidato;
    stato.openDossierId = null;
    return { ok: true, la: stato };
  }

  function annullaPendingIntentLA(la) {
    var stato = normalizzaLaV2(la);
    var intento = oggettoSemplice(stato.pendingIntent) ? stato.pendingIntent : null;
    if (!intento) return { ok: false, error: "no-intent", la: stato };
    var precedente = testo(intento.returnOpenDossierId);
    delete stato.pendingIntent;
    stato.openDossierId = stato.dossiersById[precedente] ? precedente : null;
    return { ok: true, la: stato };
  }

  function completaPendingIntentLA(la, dossierId) {
    var stato = normalizzaLaV2(la);
    var id = testo(dossierId);
    if (!stato.dossiersById[id]) return { ok: false, error: "missing-dossier", la: stato };
    delete stato.pendingIntent;
    stato.openDossierId = id;
    return { ok: true, la: stato };
  }

  // UN SOLO risolutore. Intestazione, regole, guida, controlli e creazione
  // leggono da qui: così un ciclo storico non riceve le regole del ciclo
  // corrente solo perché la Home ne conosce un altro.
  function contestoLAAttivo(la, configurazione) {
    var opzioni = configurazione || {};
    var stato = normalizzaLaV2(la);
    var ateneoDefault = testo(opzioni.university);
    var cicloDefault = testo(opzioni.cycle);
    var intento = oggettoSemplice(stato.pendingIntent) ? stato.pendingIntent : null;
    if (intento) {
      return {
        source: "pending-intent",
        university: intento.university || ateneoDefault,
        cycle: intento.cycle,
        work: intento.work,
        metaId: intento.meta ? testo(intento.meta.id) : "",
        meta: intento.meta ? copiaPersistibile(intento.meta) : null,
        manualMeta: !!(intento.meta && eIdManualeLA(intento.meta.id)),
        dossierId: null
      };
    }
    var aperto = stato.dossiersById[testo(stato.openDossierId)];
    if (aperto) {
      return {
        source: "open-dossier",
        university: testo(aperto.university) || ateneoDefault,
        cycle: testo(aperto.cycle) || cicloDefault,
        work: null,
        metaId: testo(aperto.metaId),
        meta: copiaPersistibile(aperto.meta),
        manualMeta: metaManualeAttivaLA(aperto),
        dossierId: aperto.id
      };
    }
    return {
      source: "default",
      university: ateneoDefault,
      cycle: cicloDefault,
      work: null,
      metaId: "",
      meta: null,
      manualMeta: false,
      dossierId: null
    };
  }

  // ----------------------------------------------------------
  // TRANCHE 1 pre-Bruno — ambito della ricerca destinazioni (PLAN.md §5).
  // Un'università omonima presente in un ALTRO accordo non è una meta valida:
  // il caso UCP (Psicologia ≠ Giurisprudenza) è la regressione nota.
  // ----------------------------------------------------------
  function meteInAmbitoLA(mete, ambito) {
    var opzioni = oggettoSemplice(ambito) ? ambito : {};
    var dipartimento = testo(opzioni.dipartimento);
    var area = testo(opzioni.area);
    // Un ambito manuale non attribuisce accordi: nessuna meta è "in ambito".
    if (opzioni.manuale === true || eIdManualeLA(opzioni.dipartimentoId)) return [];
    if (!dipartimento && !area) return [];
    return (Array.isArray(mete) ? mete : []).filter(function (meta) {
      if (!oggettoSemplice(meta)) return false;
      if (dipartimento) return testo(meta.dipartimentoCf) === dipartimento;
      return (Array.isArray(meta.areeDisciplinari) ? meta.areeDisciplinari : [])
        .some(function (voce) { return oggettoSemplice(voce) && testo(voce.codice) === area; });
    });
  }

  // Fuori ambito non significa "non esiste": significa che quell'accordo non
  // vale per questo studente e la destinazione va inserita a mano.
  function omonimeFuoriAmbitoLA(mete, ambito, nome) {
    var cercato = slugLA(nome);
    if (!cercato || cercato === "sconosciuto") return [];
    var inAmbito = meteInAmbitoLA(mete, ambito).map(function (meta) { return meta.id; });
    return (Array.isArray(mete) ? mete : []).filter(function (meta) {
      return oggettoSemplice(meta) && inAmbito.indexOf(meta.id) < 0 &&
        slugLA(meta.universita).indexOf(cercato) >= 0;
    }).map(copiaPersistibile);
  }

  // ----------------------------------------------------------
  // TRANCHE 1 pre-Bruno — smistamento iniziale (PLAN.md §2-§3) e cicli
  // ammessi dalla Home (§2: niente scadenze di un ciclo che non è il suo).
  // ----------------------------------------------------------
  var LA_RAMI_ONBOARDING = Object.freeze(["esplora", "attesa", "learning-agreement"]);

  function ramoOnboarding(fase) {
    if (fase === "selezionato") return "learning-agreement";
    if (fase === "in-attesa") return "attesa";
    return "esplora";
  }

  // Esplorazione e attesa usano soltanto il ciclo dei dati verificati oppure
  // il successivo esplicitamente marcato pre-bando. Un ciclo storico non
  // eredita mai le scadenze di un altro: la Home resta neutra.
  function cicloAmmessoHome(configurazione) {
    var opzioni = configurazione || {};
    var cicloDati = testo(opzioni.cicloDati);
    var candidato = testo(opzioni.ciclo);
    if (!cicloDati || !candidato) return { ammesso: false, motivo: "ciclo-sconosciuto" };
    if (candidato === cicloDati) return { ammesso: true, motivo: "ciclo-dati" };
    if (opzioni.modo === "pre-bando" && candidato === cicloSuccessivo(cicloDati)) {
      return { ammesso: true, motivo: "pre-bando" };
    }
    return { ammesso: false, motivo: "ciclo-storico" };
  }

  // ----------------------------------------------------------
  // TRANCHE 1 pre-Bruno — bozza di onboarding versionata e NON distruttiva
  // (PLAN.md §10): sopravvive al reload, non si consuma alla lettura, si
  // cancella soltanto dopo un salvataggio riletto con successo.
  // ----------------------------------------------------------
  var BOZZA_ONBOARDING_VERSIONE = 1;

  function creaBozzaOnboarding(dati) {
    var opzioni = oggettoSemplice(dati) ? dati : {};
    return {
      version: BOZZA_ONBOARDING_VERSIONE,
      branch: LA_RAMI_ONBOARDING.indexOf(testo(opzioni.branch)) >= 0
        ? testo(opzioni.branch) : "esplora",
      step: testo(opzioni.step),
      fase: faseViaggioV3(opzioni.fase),
      university: testo(opzioni.university),
      cycle: testo(opzioni.cycle),
      dipartimento: testoManualeLA(opzioni.dipartimento, LA_LIMITI_MANUALI.corso),
      dipartimentoId: testo(opzioni.dipartimentoId),
      livello: ["L", "LM"].indexOf(testo(opzioni.livello)) >= 0 ? testo(opzioni.livello) : "",
      work: LA_LAVORI.indexOf(testo(opzioni.work)) >= 0 ? testo(opzioni.work) : "",
      updatedAt: oraIso(opzioni.at)
    };
  }

  function normalizzaBozzaOnboarding(grezzo) {
    var dato;
    try { dato = typeof grezzo === "string" ? JSON.parse(grezzo) : copiaPersistibile(grezzo); }
    catch (e) { return null; }
    if (!oggettoSemplice(dato)) return null;
    // Una bozza di un'altra versione non si interpreta e non si distrugge:
    // semplicemente non guida più il flusso.
    if (Number(dato.version) !== BOZZA_ONBOARDING_VERSIONE) return null;
    if (!testo(dato.step)) return null;
    if (LA_RAMI_ONBOARDING.indexOf(testo(dato.branch)) < 0) return null;
    return creaBozzaOnboarding(Object.assign({}, dato, { at: dato.updatedAt }));
  }

  // `Rivedi il percorso iniziale` applica soltanto questa whitelist, e solo
  // dopo conferma finale: ateneo e ciclo NON sono campi di profilo.
  var CAMPI_RIVEDIBILI_ONBOARDING = Object.freeze([
    "fase", "dipartimento", "dipartimentoId", "dipartimentoSource", "area", "livello"
  ]);

  function applicaRevisioneOnboarding(zaino, modifiche) {
    var base = oggettoSemplice(zaino) ? copiaPersistibile(zaino) : {};
    var richieste = oggettoSemplice(modifiche) ? modifiche : {};
    var profilo = oggettoSemplice(base.profilo) ? copiaPersistibile(base.profilo) : {};
    var ignorati = [];
    Object.keys(richieste).forEach(function (campo) {
      if (CAMPI_RIVEDIBILI_ONBOARDING.indexOf(campo) < 0) {
        ignorati.push(campo);
        return;
      }
      if (campo === "fase") {
        base.fase = faseViaggioV3(richieste.fase);
        return;
      }
      profilo[campo] = richieste[campo];
    });
    // Un'etichetta manuale non deve portarsi dietro un'area inventata.
    if (eIdManualeLA(profilo.dipartimentoId)) {
      profilo.dipartimentoSource = "manual";
      profilo.area = null;
    } else if (profilo.dipartimentoSource === "manual") {
      delete profilo.dipartimentoSource;
    }
    base.profilo = profilo;
    return { zaino: base, ignored: ignorati };
  }

  function scegliCtaLA(dati) {
    var opzioni = dati || {};
    if (opzioni.saveError) return { code: "recover-unsaved", label: "Scarica il recupero delle modifiche" };
    var prontezza = opzioni.readiness || { state: "incomplete", missingCodes: [] };
    if (prontezza.state !== "ready" && prontezza.missingCodes.length) {
      return { code: "fix:" + prontezza.missingCodes[0], label: "Completa: " + prontezza.missingCodes[0] };
    }
    if (opzioni.needsResubmission) {
      return { code: "resubmit-current", label: "Completa e reinvia la nuova versione" };
    }
    var perFase = {
      exploration: ["choose-destination", "Confronta e scegli una meta"],
      preparation: ["record-sent", "Segna l'invio al referente"],
      approval: ["continue-approval", "Continua approvazione e firme"],
      mobility: ["review-changes", "Controlla le modifiche durante la mobilità"],
      recognition: ["record-recognition", "Registra la convalida"],
      closed: ["review-closed", "Rivedi il dossier chiuso"]
    };
    var azione = perFase[opzioni.phase] || perFase.exploration;
    if (opzioni.phaseActionDue !== false) return { code: azione[0], label: azione[1] };
    if (opzioni.backupDue) return { code: "backup-due", label: "Scarica ora una copia di sicurezza" };
    return { code: azione[0], label: azione[1] };
  }

  // ----------------------------------------------------------
  // TRANCHE 2 pre-Bruno — importazione multipla con anteprima, ricostruzione
  // storica e blocco delle fotografie (PLAN.md, addendum 2026-08-07).
  // Tre promesse governano tutto quello che segue:
  //   · niente perdite silenziose: una riga o si corregge o si esclude a mano;
  //   · una sola transazione: o entra tutto, o non entra niente;
  //   · nessuna equivalenza automatica: l'import crea righe, mai collegamenti.
  // ----------------------------------------------------------

  // §1. I limiti valgono PRIMA del parsing e rifiutano l'incolla per intero:
  // troncarlo sarebbe la perdita silenziosa che il piano vieta. La virgola
  // resta separatore decimale e non divide colonne, quindi non compare qui.
  var LA_IMPORT_LIMITI = Object.freeze({
    righe: 200,
    byte: 102400,
    campo: 500,
    url: 2048
  });

  // §5. La ricostruzione storica dichiara soltanto fatti esterni davvero
  // accaduti a quella versione. `entered-portal` e `student-signed` restano
  // fuori: appartengono alla pratica corrente, non al racconto del passato.
  var LA_FATTI_RICOSTRUZIONE = Object.freeze([
    "sent-home", "home-approved", "host-approved"
  ]);

  function byteUtf8LA(valore) {
    var stringa = valore == null ? "" : String(valore);
    var totale = 0;
    for (var i = 0; i < stringa.length; i += 1) {
      var codice = stringa.codePointAt(i);
      if (codice > 0xffff) { totale += 4; i += 1; }
      else if (codice > 0x7ff) totale += 3;
      else if (codice > 0x7f) totale += 2;
      else totale += 1;
    }
    return totale;
  }

  function eUrlLA(valore) {
    return /^https?:\/\//i.test(testo(valore));
  }

  function rifiutoImportLA(codice, dettaglio) {
    return Object.assign({
      ok: false,
      error: codice,
      rows: [],
      counts: { valid: 0, incomplete: 0, ambiguous: 0, duplicate: 0 },
      unresolvedCount: 0
    }, oggettoSemplice(dettaglio) ? dettaglio : {});
  }

  function chiaveDuplicatoImportLA(valori) {
    var dati = oggettoSemplice(valori) ? valori : {};
    if (testo(dati.codice)) return "codice:" + slugLA(dati.codice);
    var nome = slugLA(dati.nome);
    var crediti = numeroPositivo(dati.crediti);
    return nome && nome !== "sconosciuto" && crediti
      ? "nome-crediti:" + nome + ":" + crediti : "";
  }

  function indiceEsistentiImportLA(voci, tipo) {
    var mappa = {};
    (Array.isArray(voci) ? voci : []).forEach(function (voce) {
      if (!oggettoSemplice(voce)) return;
      var chiave = chiaveDuplicatoImportLA({
        codice: voce.codice,
        nome: voce.nome,
        crediti: tipo === "host" ? voce.ects : voce.cfu
      });
      var id = testo(tipo === "host" ? voce.snapshotId || voce.id : voce.id);
      if (chiave && id && !mappa[chiave]) mappa[chiave] = id;
    });
    return mappa;
  }

  // §1-§2. Formato chiuso: `Nome;Crediti`, `;Nome;Crediti`, `Codice;Nome;Crediti`
  // e gli stessi campi separati da tab. L'anteprima distingue righe valide,
  // incomplete, ambigue e duplicate; nessuna sparisce da sola.
  function parseImportLA(input, opzioni) {
    var scelte = oggettoSemplice(opzioni) ? opzioni : {};
    var tipo = scelte.tipo === "host" ? "host" : "casa";
    var grezzo = input == null ? "" : String(input);
    var byte = byteUtf8LA(grezzo);
    if (byte > LA_IMPORT_LIMITI.byte) {
      return rifiutoImportLA("too-large", { limit: LA_IMPORT_LIMITI.byte, actual: byte, tipo: tipo });
    }
    var righePiene = [];
    grezzo.split(/\r?\n/).forEach(function (riga, indice) {
      if (!riga.trim()) return;
      righePiene.push({ raw: riga, line: indice + 1 });
    });
    if (righePiene.length > LA_IMPORT_LIMITI.righe) {
      return rifiutoImportLA("too-many-rows", {
        limit: LA_IMPORT_LIMITI.righe, actual: righePiene.length, tipo: tipo
      });
    }
    var campiLunghi = [];
    var urlLunghi = [];
    var spezzate = righePiene.map(function (voce) {
      var separatore = voce.raw.indexOf(";") >= 0
        ? ";" : (voce.raw.indexOf("\t") >= 0 ? "\t" : null);
      var celle = separatore ? voce.raw.split(separatore).map(testo) : [testo(voce.raw)];
      celle.forEach(function (cella) {
        if (eUrlLA(cella)) {
          if (cella.length > LA_IMPORT_LIMITI.url) urlLunghi.push(voce.line);
        } else if (cella.length > LA_IMPORT_LIMITI.campo) {
          campiLunghi.push(voce.line);
        }
      });
      return { raw: voce.raw, line: voce.line, celle: celle, separatore: separatore };
    });
    if (campiLunghi.length) {
      return rifiutoImportLA("field-too-long", {
        limit: LA_IMPORT_LIMITI.campo, lines: valoriUnici(campiLunghi), tipo: tipo
      });
    }
    if (urlLunghi.length) {
      return rifiutoImportLA("url-too-long", {
        limit: LA_IMPORT_LIMITI.url, lines: valoriUnici(urlLunghi), tipo: tipo
      });
    }

    var duplicati = indiceEsistentiImportLA(scelte.esistenti, tipo);
    var righe = [];
    var primaRigaDati = true;
    spezzate.forEach(function (voce) {
      var celle = voce.celle;
      var intestazione = primaRigaDati && celle.length >= 2 &&
        /^(codice|code)?$/i.test(celle.length >= 3 ? celle[0] : "") &&
        /(nome|name|corso|esame|insegnamento|course)/i.test(celle[celle.length - 2]) &&
        /(cfu|ects|credit)/i.test(celle[celle.length - 1]);
      primaRigaDati = false;
      if (intestazione) return;
      var problemi = [];
      var valori = { codice: "", nome: "", crediti: "" };
      if (!voce.separatore) {
        // Una riga senza `;` né tab non dichiara le colonne: la virgola non è
        // un separatore, quindi `Nome, 6` resta ambigua e va decisa a mano.
        problemi.push("ambiguous-columns");
        valori.nome = celle[0] || "";
      } else if (celle.length === 2) {
        valori.nome = celle[0];
        valori.crediti = celle[1];
      } else if (celle.length === 3) {
        valori.codice = celle[0];
        valori.nome = celle[1];
        valori.crediti = celle[2];
      } else {
        problemi.push("ambiguous-columns");
        valori.codice = celle[0] || "";
        valori.nome = celle[1] || "";
        valori.crediti = celle[2] == null ? "" : celle[2];
      }
      var crediti = numeroPositivo(valori.crediti);
      if (!testo(valori.nome)) problemi.push("missing-name");
      if (!crediti) problemi.push("invalid-credits");
      var chiave = chiaveDuplicatoImportLA(valori);
      var duplicateId = chiave ? duplicati[chiave] || null : null;
      if (duplicateId) problemi.push("duplicate");
      var genere = problemi.indexOf("ambiguous-columns") >= 0 ? "ambiguous"
        : (problemi.indexOf("missing-name") >= 0 || problemi.indexOf("invalid-credits") >= 0
          ? "incomplete"
          : (duplicateId ? "duplicate" : "valid"));
      righe.push({
        rowId: "row-" + voce.line,
        line: voce.line,
        raw: voce.raw,
        tipo: tipo,
        kind: genere,
        values: {
          codice: testo(valori.codice),
          nome: testo(valori.nome),
          crediti: crediti || testo(valori.crediti)
        },
        issues: problemi,
        duplicateId: duplicateId,
        requiresDecision: problemi.length > 0
      });
      if (chiave && !duplicati[chiave]) duplicati[chiave] = "preview:" + voce.line;
    });

    var conteggi = { valid: 0, incomplete: 0, ambiguous: 0, duplicate: 0 };
    righe.forEach(function (riga) { conteggi[riga.kind] += 1; });
    return {
      ok: true,
      tipo: tipo,
      rows: righe,
      counts: conteggi,
      unresolvedCount: righe.filter(function (riga) { return riga.requiresDecision; }).length
    };
  }

  // §2. Ogni riga problematica esce di qui soltanto corretta o esclusa a mano.
  // Le righe rimaste senza decisione tornano indietro: non vengono importate,
  // ma nemmeno perse.
  function finalizzaImportLA(preview, decisions) {
    var righe = preview && Array.isArray(preview.rows) ? preview.rows : [];
    var scelte = oggettoSemplice(decisions) ? decisions : {};
    var voci = [];
    var irrisolte = [];
    var escluse = [];
    righe.forEach(function (riga) {
      var decisione = scelte[riga.rowId];
      var azione = oggettoSemplice(decisione) ? testo(decisione.action) : "";
      if (riga.requiresDecision &&
          ["exclude", "confirm", "keep-separate", "merge"].indexOf(azione) < 0) {
        irrisolte.push(copiaPersistibile(riga));
        return;
      }
      if (azione === "exclude") {
        escluse.push(copiaPersistibile(riga));
        return;
      }
      var valori = Object.assign({}, riga.values,
        oggettoSemplice(decisione) && oggettoSemplice(decisione.values) ? decisione.values : {});
      var crediti = numeroPositivo(valori.crediti);
      if (!testo(valori.nome) || !crediti) {
        irrisolte.push(copiaPersistibile(riga));
        return;
      }
      voci.push({
        tipo: riga.tipo,
        importRowId: riga.rowId,
        codice: testo(valori.codice),
        nome: testo(valori.nome),
        crediti: crediti,
        mergeIntoId: azione === "merge"
          ? testo((oggettoSemplice(decisione) && decisione.targetId) || riga.duplicateId) : ""
      });
    });
    return { items: voci, unresolvedRows: irrisolte, excludedRows: escluse };
  }

  function contaImportVersioneLA(versione) {
    return Array.isArray(versione && versione.imports) ? versione.imports.length : 0;
  }

  function prossimoIdSnapshotLA(esistenti, prefisso) {
    var usati = {};
    (Array.isArray(esistenti) ? esistenti : []).forEach(function (voce) {
      if (oggettoSemplice(voce) && testo(voce.snapshotId)) usati[voce.snapshotId] = true;
    });
    var numero = (Array.isArray(esistenti) ? esistenti.length : 0) + 1;
    while (usati[prefisso + numero]) numero += 1;
    return prefisso + numero;
  }

  // §7. Gli elementi che nessun gruppo collega davvero restano scoperti: un
  // gruppo monco (solo casa o solo host) non vale come corrispondenza.
  function elementiScollegatiLA(versione) {
    var v = oggettoSemplice(versione) ? versione : {};
    var casa = Array.isArray(v.homeExamSnapshots) ? v.homeExamSnapshots : [];
    var hostTutti = Array.isArray(v.hostCourseSnapshots) ? v.hostCourseSnapshots : [];
    var host = hostTutti.filter(corsoHostAttivoLA);
    var casaIds = {};
    casa.forEach(function (voce) { casaIds[voce.snapshotId] = true; });
    var hostIds = {};
    hostTutti.forEach(function (voce) { hostIds[voce.snapshotId] = true; });
    var hostAttivi = {};
    host.forEach(function (voce) { hostAttivi[voce.snapshotId] = true; });
    var casaCollegati = {};
    var hostCollegati = {};
    (Array.isArray(v.mappings) ? v.mappings : []).forEach(function (gruppo) {
      var lati = oggettoSemplice(gruppo) ? gruppo : {};
      var casaPresenti = (Array.isArray(lati.homeExamSnapshotIds) ? lati.homeExamSnapshotIds : [])
        .filter(function (id) { return casaIds[id]; });
      var hostPresenti = (Array.isArray(lati.hostCourseSnapshotIds) ? lati.hostCourseSnapshotIds : [])
        .filter(function (id) { return hostAttivi[id]; });
      if (!casaPresenti.length || !hostPresenti.length) return;
      casaPresenti.forEach(function (id) { casaCollegati[id] = true; });
      hostPresenti.forEach(function (id) { hostCollegati[id] = true; });
    });
    return {
      home: casa.filter(function (voce) { return !casaCollegati[voce.snapshotId]; })
        .map(function (voce) { return voce.snapshotId; }),
      host: host.filter(function (voce) { return !hostCollegati[voce.snapshotId]; })
        .map(function (voce) { return voce.snapshotId; })
    };
  }

  // §4. La fotografia riepilogativa è la cosa che lo studente conferma prima
  // di dichiarare i fatti: righe, totali e fonti, calcolati una volta sola e
  // riusati identici da interfaccia e conferma.
  function riepilogoVersioneLA(versione) {
    var v = oggettoSemplice(versione) ? versione : {};
    var casa = Array.isArray(v.homeExamSnapshots) ? v.homeExamSnapshots : [];
    var hostTutti = Array.isArray(v.hostCourseSnapshots) ? v.hostCourseSnapshots : [];
    var host = hostTutti.filter(corsoHostAttivoLA);
    var scollegati = elementiScollegatiLA(v);
    function somma(voci, campo) {
      return voci.reduce(function (totale, voce) {
        return totale + (numeroPositivo(voce[campo]) || 0);
      }, 0);
    }
    return {
      homeCount: casa.length,
      homeCredits: somma(casa, "cfu"),
      hostCount: hostTutti.length,
      hostActiveCount: host.length,
      hostCredits: somma(host, "ects"),
      unlinkedHome: scollegati.home.length,
      unlinkedHost: scollegati.host.length,
      hostWithoutSource: host.filter(function (corso) {
        return !testo(corso.officialUrl) && !testo(corso.sourceDate);
      }).length
    };
  }

  function riepilogoUgualeLA(atteso, calcolato) {
    if (!oggettoSemplice(atteso)) return true;
    return ["homeCount", "homeCredits", "hostCount", "hostActiveCount", "hostCredits"]
      .every(function (campo) {
        if (atteso[campo] == null) return true;
        return Number(atteso[campo]) === Number(calcolato[campo]);
      });
  }

  // §3. Una sola transazione coerente sulla versione modificabile: se il
  // dossier è bloccato nasce UNA sola versione nuova e l'import ci finisce
  // dentro tutto insieme; una versione storica non viene mai toccata.
  // Al termine si rilegge lo stato normalizzato e si contano le identità: se
  // manca anche un solo pezzo, non si scrive niente.
  function applicaImportLA(la, dossierId, dati, opzioni) {
    var scelte = oggettoSemplice(opzioni) ? opzioni : {};
    var configurazione = oggettoSemplice(scelte.configurazione) ? scelte.configurazione : {};
    var stato = normalizzaLaV2(la, configurazione);
    var id = testo(dossierId);
    var dossier = stato.dossiersById[id];
    if (!dossier) return { ok: false, error: "missing-dossier" };
    if (testo(dossier.archivedAt)) return { ok: false, error: "archived-dossier" };
    var corrente = versioneCorrenteLA(dossier);
    if (!corrente) return { ok: false, error: "missing-version" };
    var richiesta = testo(scelte.targetVersionId);
    if (richiesta && richiesta !== corrente.versionId) {
      return { ok: false, error: "historical-version", versionId: corrente.versionId };
    }
    var casa = Array.isArray(dati && dati.home) ? dati.home : [];
    var host = Array.isArray(dati && dati.host) ? dati.host : [];
    if (!casa.length && !host.length) return { ok: false, error: "empty-import" };
    var invalide = casa.concat(host).filter(function (voce) {
      return !oggettoSemplice(voce) || !testo(voce.nome) || !numeroPositivo(voce.crediti);
    });
    if (invalide.length) return { ok: false, error: "invalid-row", rows: invalide.length };

    var quando = oraIso(scelte.at);
    var creataVersione = !!testo(corrente.lockedAt);
    var prossimo = copiaPersistibile(stato);
    var lavoro = creataVersione
      ? clonaNuovaVersioneLA(prossimo.dossiersById[id], { reason: "import", at: quando })
      : prossimo.dossiersById[id];
    var versione = versioneCorrenteLA(lavoro);
    var batchId = versione.versionId + ":import-" + (contaImportVersioneLA(versione) + 1);
    var attesiCasa = [];
    var attesiHost = [];
    var conteggi = { homeAdded: 0, homeMerged: 0, hostAdded: 0, hostMerged: 0 };

    casa.forEach(function (voce) {
      var pulito = {
        codice: testo(voce.codice),
        nome: testo(voce.nome),
        cfu: numeroPositivo(voce.crediti),
        stato: statoEsameLA(voce.stato)
      };
      var bersaglio = testo(voce.mergeIntoId);
      var examId = bersaglio && oggettoSemplice(prossimo.examLibrary[bersaglio]) ? bersaglio : "";
      if (examId) {
        prossimo.examLibrary[examId] = Object.assign(
          {}, prossimo.examLibrary[examId], pulito, { id: examId }
        );
      } else {
        examId = "exam-" + prossimo.nextId;
        prossimo.nextId += 1;
        while (prossimo.examLibrary[examId]) {
          examId = "exam-" + prossimo.nextId;
          prossimo.nextId += 1;
        }
        prossimo.examLibrary[examId] = Object.assign({ id: examId }, pulito);
      }
      var esistente = versione.homeExamSnapshots.filter(function (snap) {
        return testo(snap.sourceExamId) === examId;
      })[0];
      if (esistente) {
        Object.assign(esistente, pulito, { importBatchId: batchId });
        conteggi.homeMerged += 1;
        attesiCasa.push(esistente.snapshotId);
        return;
      }
      var snapshotId = prossimoIdSnapshotLA(versione.homeExamSnapshots, versione.versionId + ":home-");
      versione.homeExamSnapshots.push(Object.assign({
        snapshotId: snapshotId,
        sourceExamId: examId,
        importBatchId: batchId
      }, pulito));
      conteggi.homeAdded += 1;
      attesiCasa.push(snapshotId);
    });

    host.forEach(function (voce) {
      var pulito = {
        codice: testo(voce.codice),
        nome: testo(voce.nome),
        ects: numeroPositivo(voce.crediti)
      };
      var bersaglio = testo(voce.mergeIntoId);
      var esistente = bersaglio ? versione.hostCourseSnapshots.filter(function (snap) {
        return snap.snapshotId === bersaglio;
      })[0] : null;
      if (esistente) {
        Object.assign(esistente, pulito, { importBatchId: batchId });
        conteggi.hostMerged += 1;
        attesiHost.push(esistente.snapshotId);
        return;
      }
      var snapshotId = prossimoIdSnapshotLA(versione.hostCourseSnapshots, versione.versionId + ":host-");
      versione.hostCourseSnapshots.push(Object.assign({
        snapshotId: snapshotId,
        lingua: "",
        semestre: "",
        officialUrl: "",
        // §7: importare non verifica niente. Il corso nasce da verificare e
        // senza corrispondenze: i collegamenti li fa lo studente, a mano.
        availabilityState: "da-verificare",
        verifiedAt: "",
        sourceDate: "",
        importBatchId: batchId
      }, pulito));
      conteggi.hostAdded += 1;
      attesiHost.push(snapshotId);
    });

    if (!Array.isArray(versione.imports)) versione.imports = [];
    versione.imports.push({
      batchId: batchId,
      at: quando,
      homeRows: casa.length,
      hostRows: host.length
    });
    // §4: l'import cambia i fatti, quindi invalida la fotografia già confermata.
    delete versione.reconstruction;
    lavoro.updatedAt = quando;
    prossimo.dossiersById[id] = lavoro;

    var riletto = normalizzaLaV2(prossimo, configurazione);
    var dossierRiletto = riletto.dossiersById[id];
    var versioneRiletta = dossierRiletto ? versioneCorrenteLA(dossierRiletto) : null;
    var versioniAttese = dossier.versions.length + (creataVersione ? 1 : 0);
    if (!versioneRiletta || versioneRiletta.versionId !== versione.versionId ||
        dossierRiletto.versions.length !== versioniAttese) {
      return { ok: false, error: "verification-failed" };
    }
    var contaId = function (voci, cercato) {
      return voci.filter(function (voce) { return voce.snapshotId === cercato; }).length;
    };
    var identitaOk = attesiCasa.every(function (snapshotId) {
      return contaId(versioneRiletta.homeExamSnapshots, snapshotId) === 1;
    }) && attesiHost.every(function (snapshotId) {
      return contaId(versioneRiletta.hostCourseSnapshots, snapshotId) === 1;
    });
    var casaAttesa = corrente.homeExamSnapshots.length + conteggi.homeAdded;
    var hostAttesa = corrente.hostCourseSnapshots.length + conteggi.hostAdded;
    if (!identitaOk ||
        versioneRiletta.homeExamSnapshots.length !== casaAttesa ||
        versioneRiletta.hostCourseSnapshots.length !== hostAttesa) {
      return { ok: false, error: "verification-failed" };
    }
    var libreriaOk = attesiCasa.every(function (snapshotId) {
      var snap = versioneRiletta.homeExamSnapshots.filter(function (voce) {
        return voce.snapshotId === snapshotId;
      })[0];
      return snap && oggettoSemplice(riletto.examLibrary[testo(snap.sourceExamId)]);
    });
    if (!libreriaOk) return { ok: false, error: "verification-failed" };

    return {
      ok: true,
      la: riletto,
      dossierId: id,
      versionId: versione.versionId,
      createdVersion: creataVersione,
      batchId: batchId,
      counts: conteggi,
      summary: riepilogoVersioneLA(versioneRiletta)
    };
  }

  // §4. Prima la fotografia, poi i fatti storici. La conferma vale soltanto
  // per la versione corrente e soltanto se i numeri sono ancora quelli che lo
  // studente aveva davanti agli occhi.
  function confermaFotografiaImportLA(la, dossierId, dati) {
    var scelte = oggettoSemplice(dati) ? dati : {};
    var configurazione = oggettoSemplice(scelte.configurazione) ? scelte.configurazione : {};
    var stato = normalizzaLaV2(la, configurazione);
    var id = testo(dossierId);
    var dossier = stato.dossiersById[id];
    if (!dossier) return { ok: false, error: "missing-dossier" };
    if (testo(dossier.archivedAt)) return { ok: false, error: "archived-dossier" };
    var corrente = versioneCorrenteLA(dossier);
    if (!corrente) return { ok: false, error: "missing-version" };
    var richiesta = testo(scelte.versionId);
    if (richiesta && richiesta !== corrente.versionId) {
      return { ok: false, error: "historical-version", versionId: corrente.versionId };
    }
    var riepilogo = riepilogoVersioneLA(corrente);
    if (!riepilogoUgualeLA(scelte.counts, riepilogo)) {
      return { ok: false, error: "counts-changed", summary: riepilogo };
    }
    var quando = oraIso(scelte.at);
    var prossimo = copiaPersistibile(stato);
    var versione = versioneCorrenteLA(prossimo.dossiersById[id]);
    versione.reconstruction = {
      summaryConfirmedAt: quando,
      counts: riepilogo
    };
    prossimo.dossiersById[id].updatedAt = quando;
    var riletto = normalizzaLaV2(prossimo, configurazione);
    var versioneRiletta = versioneCorrenteLA(riletto.dossiersById[id]);
    if (!versioneRiletta || !oggettoSemplice(versioneRiletta.reconstruction) ||
        testo(versioneRiletta.reconstruction.summaryConfirmedAt) !== quando) {
      return { ok: false, error: "verification-failed" };
    }
    return {
      ok: true,
      la: riletto,
      versionId: versioneRiletta.versionId,
      summary: riepilogo
    };
  }

  function fotografiaConfermataLA(versione) {
    return oggettoSemplice(versione) && oggettoSemplice(versione.reconstruction) &&
      !!testo(versione.reconstruction.summaryConfirmedAt);
  }

  // §5-§6. I fatti si raccolgono tutti prima e si applicano insieme, alla
  // stessa versione: validazione completa, scrittura tutto-o-niente, un solo
  // blocco della fotografia e al massimo una nuova versione di lavoro.
  // `Bozza` significa nessun fatto esterno: non blocca e non versiona.
  // `occurredOn` è la data dichiarata dallo studente e può mancare;
  // `markedAt` è sempre il momento della dichiarazione, e non la sostituisce.
  function applicaFattiRicostruzioneLA(la, dossierId, dati) {
    var scelte = oggettoSemplice(dati) ? dati : {};
    var configurazione = oggettoSemplice(scelte.configurazione) ? scelte.configurazione : {};
    var stato = normalizzaLaV2(la, configurazione);
    var id = testo(dossierId);
    var dossier = stato.dossiersById[id];
    if (!dossier) return { ok: false, error: "missing-dossier" };
    if (testo(dossier.archivedAt)) return { ok: false, error: "archived-dossier" };
    var corrente = versioneCorrenteLA(dossier);
    if (!corrente) return { ok: false, error: "missing-version" };
    var richiesta = testo(scelte.snapshotVersionId);
    if (richiesta && richiesta !== corrente.versionId) {
      return { ok: false, error: "historical-version", versionId: corrente.versionId };
    }
    if (!fotografiaConfermataLA(corrente)) {
      return { ok: false, error: "summary-not-confirmed", versionId: corrente.versionId };
    }
    var fatti = Array.isArray(scelte.facts) ? scelte.facts : [];
    var chiaviViste = {};
    var errore = null;
    var normalizzati = fatti.map(function (fatto) {
      var voce = oggettoSemplice(fatto) ? fatto : {};
      var chiave = testo(voce.key);
      if (LA_FATTI_RICOSTRUZIONE.indexOf(chiave) < 0) errore = errore || "unknown-fact";
      if (chiaviViste[chiave]) errore = errore || "duplicate-fact";
      chiaviViste[chiave] = true;
      var quandoDavvero = testo(voce.occurredOn);
      if (quandoDavvero && !/^\d{4}-\d{2}-\d{2}$/.test(quandoDavvero)) {
        errore = errore || "invalid-occurred-on";
      }
      return { key: chiave, occurredOn: quandoDavvero, note: testo(voce.note) };
    });
    if (errore) return { ok: false, error: errore };

    var quando = oraIso(scelte.markedAt);
    if (!normalizzati.length) {
      // Bozza: nessun fatto esterno dichiarato, quindi niente da bloccare.
      return {
        ok: true,
        la: stato,
        snapshotVersionId: corrente.versionId,
        locked: false,
        newVersionId: null,
        facts: []
      };
    }

    var prossimo = copiaPersistibile(stato);
    var lavoro = prossimo.dossiersById[id];
    var snapshot = versioneCorrenteLA(lavoro);
    var snapshotVersionId = snapshot.versionId;
    if (!oggettoSemplice(lavoro.confirmationsByVersion)) lavoro.confirmationsByVersion = {};
    if (!oggettoSemplice(lavoro.confirmationsByVersion[snapshotVersionId])) {
      lavoro.confirmationsByVersion[snapshotVersionId] = {};
    }
    normalizzati.forEach(function (fatto) {
      lavoro.confirmationsByVersion[snapshotVersionId][fatto.key] = {
        versionId: snapshotVersionId,
        markedAt: quando,
        occurredOn: fatto.occurredOn,
        occurredOnUnknown: !fatto.occurredOn,
        subject: fatto.key,
        note: fatto.note
      };
    });
    // Un solo blocco, anche con tre fatti insieme.
    if (!testo(snapshot.lockedAt)) {
      snapshot.lockedAt = quando;
      snapshot.lockReason = "reconstruction";
    }
    if (!oggettoSemplice(lavoro.lifecycle)) lavoro.lifecycle = {};
    if (!testo(lavoro.lifecycle.firstExternalAt)) lavoro.lifecycle.firstExternalAt = quando;
    // Una sola versione di lavoro nuova, e nessun fatto ci scivola dentro:
    // le conferme restano legate al versionId della fotografia bloccata.
    var conVersione = clonaNuovaVersioneLA(lavoro, {
      reason: "post-reconstruction",
      at: quando
    });
    prossimo.dossiersById[id] = conVersione;
    prossimo.dossiersById[id].updatedAt = quando;

    var riletto = normalizzaLaV2(prossimo, configurazione);
    var dossierRiletto = riletto.dossiersById[id];
    var nuova = dossierRiletto ? versioneCorrenteLA(dossierRiletto) : null;
    var bloccata = dossierRiletto ? dossierRiletto.versions.filter(function (v) {
      return v.versionId === snapshotVersionId;
    })[0] : null;
    var conferme = dossierRiletto && oggettoSemplice(dossierRiletto.confirmationsByVersion)
      ? dossierRiletto.confirmationsByVersion : {};
    var confermeNuova = oggettoSemplice(conferme[nuova && nuova.versionId])
      ? conferme[nuova.versionId] : {};
    var tutteScritte = normalizzati.every(function (fatto) {
      var scritto = oggettoSemplice(conferme[snapshotVersionId])
        ? conferme[snapshotVersionId][fatto.key] : null;
      return oggettoSemplice(scritto) && scritto.versionId === snapshotVersionId &&
        testo(scritto.markedAt) === quando && testo(scritto.occurredOn) === fatto.occurredOn;
    });
    if (!nuova || !bloccata || !testo(bloccata.lockedAt) ||
        nuova.versionId === snapshotVersionId ||
        dossierRiletto.versions.length !== dossier.versions.length + 1 ||
        Object.keys(confermeNuova).length > 0 || !tutteScritte) {
      return { ok: false, error: "verification-failed" };
    }
    return {
      ok: true,
      la: riletto,
      snapshotVersionId: snapshotVersionId,
      locked: true,
      lockedAt: testo(bloccata.lockedAt),
      newVersionId: nuova.versionId,
      facts: normalizzati
    };
  }

  return Object.freeze({
    SCALA_CEFR: SCALA_CEFR,
    ESITI_LINGUA: ESITI_LINGUA,
    destDaHash: destDaHash,
    componiHash: componiHash,
    VERSIONE_CONTENITORE_ZAINO: VERSIONE_CONTENITORE_ZAINO,
    FASI_VIAGGIO: FASI_VIAGGIO,
    cicloSuccessivo: cicloSuccessivo,
    modoCiclo: modoCiclo,
    faseViaggioV3: faseViaggioV3,
    creaZainoV3: creaZainoV3,
    normalizzaZainoV3: normalizzaZainoV3,
    migraContenitoreZainoV3: migraContenitoreZainoV3,
    livelloCefr: livelloCefr,
    requisitiLinguaNormalizzati: requisitiLinguaNormalizzati,
    foglieRequisitoLingua: foglieRequisitoLingua,
    lingueDaRequisito: lingueDaRequisito,
    valutaRequisitoLingua: valutaRequisitoLingua,
    punteggioLinguaSingola: punteggioLinguaSingola,
    punteggioLingua: punteggioLingua,
    linguaCopertaPerFiltro: linguaCopertaPerFiltro,
    citaCertificato: citaCertificato,
    certificatoDaRicordare: certificatoDaRicordare,
    finestraAttesaValida: finestraAttesaValida,
    fraseFinestraAttesaBando: fraseFinestraAttesaBando,
    massimoDestinazioniBando: massimoDestinazioniBando,
    frasePassatoMassimo: frasePassatoMassimo,
    normalizzaListeScelte: normalizzaListeScelte,
    schedinaSottoinsiemePreferite: schedinaSottoinsiemePreferite,
    scelteSenzaDuplicatiECorrispondenti: scelteSenzaDuplicatiECorrispondenti,
    righeScelteConOrfane: righeScelteConOrfane,
    marcaEccedenzeScelte: marcaEccedenzeScelte,
    applicaStellaScelte: applicaStellaScelte,
    invitoInstallazione: invitoInstallazione,
    creaCalendarioICS: creaCalendarioICS,
    presentazioneLinguaSconosciuta: presentazioneLinguaSconosciuta,
    presentaCompatibilita: presentaCompatibilita,
    LA_SCHEMA_VERSION: LA_SCHEMA_VERSION,
    LA_STATI_ESAME: LA_STATI_ESAME,
    LA_PREFLIGHT: LA_PREFLIGHT,
    LA_PASSI_ESTERNI: LA_PASSI_ESTERNI,
    LA_FATTI_LIFECYCLE: LA_FATTI_LIFECYCLE,
    creaLaV2: creaLaV2,
    normalizzaLaV2: normalizzaLaV2,
    laRichiedeMigrazioneV2: laRichiedeMigrazioneV2,
    contaContenutoLA: contaContenutoLA,
    verificaRecoveryLegacyLA: verificaRecoveryLegacyLA,
    rimuoviRecoveryLegacyLA: rimuoviRecoveryLegacyLA,
    parsePianoStudiLA: parsePianoStudiLA,
    finalizzaImportPianoLA: finalizzaImportPianoLA,
    chiaveDuplicatoEsameLA: chiaveDuplicatoEsameLA,
    corsoHostAttivoLA: corsoHostAttivoLA,
    versioneCorrenteLA: versioneCorrenteLA,
    filtraRegoleLA: filtraRegoleLA,
    calcolaScadenzaRelativaLA: calcolaScadenzaRelativaLA,
    valutaProntezzaLA: valutaProntezzaLA,
    derivaFaseLA: derivaFaseLA,
    clonaNuovaVersioneLA: clonaNuovaVersioneLA,
    preparaModificaVersioneLA: preparaModificaVersioneLA,
    haFattiEsterniLA: haFattiEsterniLA,
    registraFattoEsternoLA: registraFattoEsternoLA,
    registraFattoLifecycleLA: registraFattoLifecycleLA,
    assegnaDossierLA: assegnaDossierLA,
    creaDossierLA: creaDossierLA,
    duplicaDossierNuovoCicloLA: duplicaDossierNuovoCicloLA,
    confrontaRiconoscimentoLA: confrontaRiconoscimentoLA,
    creaBackupLA: creaBackupLA,
    analizzaBackupLA: analizzaBackupLA,
    filtraSuggerimentiLA: filtraSuggerimentiLA,
    scegliCtaLA: scegliCtaLA,
    // Tranche 1 pre-Bruno
    LA_PREFISSO_MANUALE: LA_PREFISSO_MANUALE,
    LA_LIMITI_MANUALI: LA_LIMITI_MANUALI,
    LA_AVVISO_META_MANUALE: LA_AVVISO_META_MANUALE,
    LA_LAVORI: LA_LAVORI,
    LA_RAMI_ONBOARDING: LA_RAMI_ONBOARDING,
    CAMPI_RIVEDIBILI_ONBOARDING: CAMPI_RIVEDIBILI_ONBOARDING,
    BOZZA_ONBOARDING_VERSIONE: BOZZA_ONBOARDING_VERSIONE,
    testoManualeLA: testoManualeLA,
    eIdManualeLA: eIdManualeLA,
    creaIdManualeLA: creaIdManualeLA,
    metaManualeLA: metaManualeLA,
    corsoManualeLA: corsoManualeLA,
    normalizzaMetaLA: normalizzaMetaLA,
    metaManualeAttivaLA: metaManualeAttivaLA,
    incoerenzeManualiLA: incoerenzeManualiLA,
    impostaPendingIntentLA: impostaPendingIntentLA,
    annullaPendingIntentLA: annullaPendingIntentLA,
    completaPendingIntentLA: completaPendingIntentLA,
    contestoLAAttivo: contestoLAAttivo,
    meteInAmbitoLA: meteInAmbitoLA,
    omonimeFuoriAmbitoLA: omonimeFuoriAmbitoLA,
    ramoOnboarding: ramoOnboarding,
    cicloAmmessoHome: cicloAmmessoHome,
    creaBozzaOnboarding: creaBozzaOnboarding,
    normalizzaBozzaOnboarding: normalizzaBozzaOnboarding,
    applicaRevisioneOnboarding: applicaRevisioneOnboarding,
    // Tranche 2 pre-Bruno
    LA_IMPORT_LIMITI: LA_IMPORT_LIMITI,
    LA_FATTI_RICOSTRUZIONE: LA_FATTI_RICOSTRUZIONE,
    byteUtf8LA: byteUtf8LA,
    parseImportLA: parseImportLA,
    finalizzaImportLA: finalizzaImportLA,
    applicaImportLA: applicaImportLA,
    elementiScollegatiLA: elementiScollegatiLA,
    riepilogoVersioneLA: riepilogoVersioneLA,
    confermaFotografiaImportLA: confermaFotografiaImportLA,
    fotografiaConfermataLA: fotografiaConfermataLA,
    applicaFattiRicostruzioneLA: applicaFattiRicostruzioneLA
  });
});
