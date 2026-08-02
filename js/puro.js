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
      haChiavi(zaino.la && zaino.la.bozzePerMeta)
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
      la: { metaAperta: null, bozzePerMeta: {} },
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
    if (!oggettoSemplice(zaino.la)) zaino.la = {};
    if (!oggettoSemplice(zaino.la.bozzePerMeta)) zaino.la.bozzePerMeta = {};
    if (zaino.la.metaAperta === undefined) zaino.la.metaAperta = null;
    Object.keys(zaino.la.bozzePerMeta).forEach(function (metaId) {
      var bozza = zaino.la.bozzePerMeta[metaId];
      if (!oggettoSemplice(bozza)) return;
      if (!testo(bozza.ciclo)) bozza.ciclo = zaino.cicloPercorso;
      if (!testo(bozza.ateneo) && testo(opzioni.ateneo)) {
        bozza.ateneo = testo(opzioni.ateneo);
      }
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
    presentaCompatibilita: presentaCompatibilita
  });
});
