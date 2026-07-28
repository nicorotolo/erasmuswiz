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
    if (diff >= 0 && posseduta.certificata) {
      return risultatoBase(
        foglia.condizionatoCorsi ? ESITI_LINGUA.CONDIZIONATO : ESITI_LINGUA.SODDISFATTO,
        50,
        {
          condizionato: !!foglia.condizionatoCorsi,
          motivi: foglia.condizionatoCorsi ? ["verifica i corsi scelti"] : []
        }
      );
    }
    if (diff >= 0) {
      return risultatoBase(ESITI_LINGUA.NON_SODDISFATTO, 25, {
        motivi: ["lingua non certificata"]
      });
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
    else if (pLingua === 25) motivi.push("lingua non certificata");
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
        dettaglio: "Hai i requisiti principali."
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
    VERSIONE_CONTENITORE_ZAINO: VERSIONE_CONTENITORE_ZAINO,
    FASI_VIAGGIO: FASI_VIAGGIO,
    cicloSuccessivo: cicloSuccessivo,
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
    presentazioneLinguaSconosciuta: presentazioneLinguaSconosciuta,
    presentaCompatibilita: presentaCompatibilita
  });
});
