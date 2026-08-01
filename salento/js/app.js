/* ==========================================================================
   SALENTO QUEST — LOGICA DELL'APPLICAZIONE
   --------------------------------------------------------------------------
   Regole di casa rispettate:
   - i dati stanno tutti in `dati-tappe.js`, qui c'è solo il comportamento;
   - un solo "zaino" in localStorage con dentro tutto il salvataggio.
   ========================================================================== */

(function () {
  'use strict';

  var D = window.DATI_VIAGGIO;
  var CHIAVE = 'salento_quest_v1';       // lo zaino unico

  /* ---------------------------------------------------------------------- */
  /* 1. ZAINO — salvataggio locale                                           */
  /* ---------------------------------------------------------------------- */
  var zaino = {
    v: 1,
    nome: '',
    avatar: 'a1',
    fatte: {},       // { idTappa: true }
    foto: {},        // { idTappa: quante foto } — le immagini stanno in IndexedDB
    badge: {},       // { idBadge: true }
    iniziato: null
  };

  function carica() {
    try {
      var grezzo = localStorage.getItem(CHIAVE);
      if (!grezzo) return;
      var salvato = JSON.parse(grezzo);
      if (salvato && typeof salvato === 'object') {
        Object.keys(zaino).forEach(function (k) {
          if (salvato[k] !== undefined) zaino[k] = salvato[k];
        });
      }
    } catch (e) {
      console.warn('[Salento Quest] Zaino illeggibile, riparto da zero.', e);
    }
  }

  function salva() {
    try {
      localStorage.setItem(CHIAVE, JSON.stringify(zaino));
      return true;
    } catch (e) {
      avviso('Memoria piena: cancella qualche foto per salvare.', true);
      return false;
    }
  }

  /* ---------------------------------------------------------------------- */
  /* 2. SCORCIATOIE                                                          */
  /* ---------------------------------------------------------------------- */
  function $(id) { return document.getElementById(id); }

  function tappaDa(id) {
    for (var i = 0; i < D.tappe.length; i++) {
      if (D.tappe[i].id === id) return D.tappe[i];
    }
    return null;
  }

  function giornoDa(n) {
    for (var i = 0; i < D.giorni.length; i++) {
      if (D.giorni[i].n === n) return D.giorni[i];
    }
    return { n: n, nome: 'G' + n, titolo: '', colore: '#6ea340' };
  }

  function numeroFatte() { return Object.keys(zaino.fatte).length; }

  function numeroFoto() {
    return Object.keys(zaino.foto).reduce(function (tot, k) {
      return tot + (Number(zaino.foto[k]) || 0);
    }, 0);
  }

  /* ---------------------------------------------------------------------- */
  /* 3. SCHERMATA INIZIALE — nome e avatar                                   */
  /* ---------------------------------------------------------------------- */
  function costruisciIntro() {
    $('intro-titolo').textContent = D.titolo;
    $('intro-sotto').textContent = D.sottotitolo + ' · ' + D.anno;
    $('intro-auto').style.backgroundImage = 'url(' + window.Pixel.urlMacchina() + ')';

    var box = $('intro-avatar');
    box.innerHTML = '';
    window.Pixel.AVATAR.forEach(function (a) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'av' + (a.id === zaino.avatar ? ' sel' : '');
      b.setAttribute('aria-label', 'Avatar ' + a.nome);
      b.setAttribute('aria-pressed', a.id === zaino.avatar ? 'true' : 'false');
      b.style.backgroundImage = 'url(' + window.Pixel.urlAvatar(a.id) + ')';
      b.addEventListener('click', function () {
        zaino.avatar = a.id;
        Array.prototype.forEach.call(box.children, function (c) {
          c.classList.remove('sel');
          c.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('sel');
        b.setAttribute('aria-pressed', 'true');
      });
      box.appendChild(b);
    });

    $('intro-nome').value = zaino.nome || '';
    $('intro-inizia').addEventListener('click', function () {
      var n = $('intro-nome').value.trim();
      zaino.nome = n || 'Viaggiatore';
      if (!zaino.iniziato) zaino.iniziato = new Date().toISOString();
      salva();
      $('intro').classList.add('via');
      setTimeout(function () { $('intro').hidden = true; }, 320);
      aggiornaTutto();
    });
  }

  /* ---------------------------------------------------------------------- */
  /* 4. RAIL DEI GIORNI                                                      */
  /* ---------------------------------------------------------------------- */
  var giornoAttivo = 'tutti';

  function costruisciRail() {
    var rail = $('rail');
    rail.innerHTML = '';

    rail.appendChild(chipGiorno('tutti', 'TUTTE', '#f6ecd2'));
    D.giorni.forEach(function (g) {
      rail.appendChild(chipGiorno(g.n, g.nome, g.colore));
    });
  }

  function chipGiorno(valore, etichetta, colore) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (giornoAttivo === valore ? ' on' : '');
    b.textContent = etichetta;
    b.style.setProperty('--c', colore);
    b.addEventListener('click', function () {
      giornoAttivo = (giornoAttivo === valore) ? 'tutti' : valore;
      costruisciRail();
      costruisciElencoGiorno();
      aggiornaPin();
      if (giornoAttivo !== 'tutti') centraSulGiorno(giornoAttivo);
    });
    return b;
  }

  /* La striscia con i nomi delle tappe del giorno scelto: sulla mappa i nomi
     si accavallerebbero, qui si leggono e si toccano. */
  function costruisciElencoGiorno() {
    var box = $('elenco-giorno');
    box.innerHTML = '';
    if (giornoAttivo === 'tutti') { box.hidden = true; return; }

    var g = giornoDa(giornoAttivo);
    box.style.setProperty('--c', g.colore);

    var titolo = document.createElement('span');
    titolo.className = 'eg-titolo';
    titolo.textContent = g.titolo;
    box.appendChild(titolo);

    D.tappe.forEach(function (t, i) {
      if (t.giorno !== giornoAttivo) return;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'eg-voce' + (zaino.fatte[t.id] ? ' fatta' : '');
      b.innerHTML = '<b>' + (i + 1) + '</b> ' + testoSicuro(t.nome) +
                    (zaino.fatte[t.id] ? ' ✓' : '');
      b.addEventListener('click', function () { apriScheda(t.id); });
      box.appendChild(b);
    });

    box.hidden = false;
  }

  /* Porta in vista le tappe del giorno scelto. */
  function centraSulGiorno(n) {
    var tappe = D.tappe.filter(function (t) { return t.giorno === n; });
    if (!tappe.length) return;
    var somma = tappe.reduce(function (acc, t) {
      var p = window.Mappa.punto(t.lat, t.lon);
      return { x: acc.x + p.x, y: acc.y + p.y };
    }, { x: 0, y: 0 });
    var cy = somma.y / tappe.length;
    var wrap = $('mappa-wrap');
    wrap.scrollTo({ top: Math.max(0, cy - wrap.clientHeight / 2), behavior: 'smooth' });
  }

  /* ---------------------------------------------------------------------- */
  /* 5. PIN SULLA MAPPA                                                      */
  /* ---------------------------------------------------------------------- */
  function costruisciPin() {
    var strato = $('pin-strato');
    strato.innerHTML = '';

    D.tappe.forEach(function (t, i) {
      var g = giornoDa(t.giorno);
      var p = document.createElement('button');
      p.type = 'button';
      p.className = 'pin';
      p.dataset.id = t.id;
      p.dataset.giorno = t.giorno;
      p.style.setProperty('--c', g.colore);
      p.innerHTML = '<span class="pin-n">' + (i + 1) + '</span>';
      p.title = t.nome;
      p.addEventListener('click', function () { apriScheda(t.id); });
      strato.appendChild(p);
    });

    /* L'avatar del giocatore, che sta sull'ultima tappa completata. */
    var av = document.createElement('div');
    av.className = 'io';
    av.id = 'io';
    strato.appendChild(av);
  }

  function aggiornaPin() {
    var strato = $('pin-strato');
    var d = window.Mappa.dimensioni();
    strato.style.width = d.larghezza + 'px';
    strato.style.height = d.altezza + 'px';

    var elenco = [];
    Array.prototype.forEach.call(strato.querySelectorAll('.pin'), function (p) {
      var t = tappaDa(p.dataset.id);
      var pos = window.Mappa.punto(t.lat, t.lon);
      p.classList.toggle('fatta', !!zaino.fatte[t.id]);
      var acceso = (giornoAttivo === 'tutti' || giornoAttivo === t.giorno);
      p.classList.toggle('spento', !acceso);
      elenco.push({ el: p, x0: pos.x, y0: pos.y, x: pos.x, y: pos.y });
    });

    separaPin(elenco, d.larghezza);
    elenco.forEach(function (v) {
      v.el.style.left = Math.round(v.x) + 'px';
      v.el.style.top = Math.round(v.y) + 'px';
    });

    posizionaAvatar(elenco);
  }

  /* --------------------------------------------------------------------
     Tappe vicine (Gallipoli e Baia Verde distano due chilometri) finirebbero
     con i segnaposti uno sopra l'altro. Qui li si allontana quel tanto che
     basta per leggerli, senza spostarli abbastanza da mentire sul posto.
     -------------------------------------------------------------------- */
  var DISTANZA_MIN = 27;      // px fra due segnaposti
  var SPOSTAMENTO_MAX = 22;   // px di scarto ammesso dalla posizione vera

  function separaPin(elenco, larghezza) {
    for (var giro = 0; giro < 60; giro++) {
      var fermo = true;
      for (var i = 0; i < elenco.length; i++) {
        for (var j = i + 1; j < elenco.length; j++) {
          var a = elenco[i], b = elenco[j];
          var dx = b.x - a.x, dy = b.y - a.y;
          var dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
          if (dist >= DISTANZA_MIN) continue;
          var spinta = (DISTANZA_MIN - dist) / 2;
          var ux = dx / dist, uy = dy / dist;
          a.x -= ux * spinta; a.y -= uy * spinta;
          b.x += ux * spinta; b.y += uy * spinta;
          fermo = false;
        }
      }
      /* Nessuno si allontana troppo dal posto vero, ne' esce dalla mappa. */
      elenco.forEach(function (v) {
        var dx = v.x - v.x0, dy = v.y - v.y0;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d > SPOSTAMENTO_MAX) {
          v.x = v.x0 + dx / d * SPOSTAMENTO_MAX;
          v.y = v.y0 + dy / d * SPOSTAMENTO_MAX;
        }
        v.x = Math.max(14, Math.min(larghezza - 14, v.x));
      });
      if (fermo) break;
    }
  }

  function posizionaAvatar(elenco) {
    var io = $('io');
    if (!io) return;
    io.style.backgroundImage = 'url(' + window.Pixel.urlAvatar(zaino.avatar) + ')';

    /* Sta sull'ultima tappa completata in ordine di programma; se non ne ha
       fatta nessuna, sta al quartier generale. */
    var ultima = null;
    D.tappe.forEach(function (t) { if (zaino.fatte[t.id]) ultima = t; });

    var x, y;
    if (ultima) {
      /* Si mette accanto al segnaposto, non sopra: altrimenti lo copre. */
      var voce = null;
      (elenco || []).forEach(function (v) { if (v.el.dataset.id === ultima.id) voce = v; });
      var p = voce || window.Mappa.punto(ultima.lat, ultima.lon);
      x = (voce ? voce.x : p.x) - 22;
      y = (voce ? voce.y : p.y) + 10;
    } else {
      var b = window.Mappa.punto(D.base.lat, D.base.lon);
      x = b.x - 20; y = b.y + 6;
    }

    var larghezza = window.Mappa.dimensioni().larghezza;
    io.style.left = Math.round(Math.max(14, Math.min(larghezza - 14, x))) + 'px';
    io.style.top = Math.round(y) + 'px';
  }

  /* ---------------------------------------------------------------------- */
  /* 6. SCHEDA DELLA TAPPA                                                   */
  /* ---------------------------------------------------------------------- */
  var idAperto = null;
  var macchinaScrivere = null;

  function apriScheda(id) {
    var t = tappaDa(id);
    if (!t) return;
    idAperto = id;
    var g = giornoDa(t.giorno);

    $('scheda').style.setProperty('--c', g.colore);
    $('sc-giorno').textContent = 'GIORNO ' + t.giorno + ' · ' + g.titolo;
    $('sc-nome').textContent = t.nome;
    $('sc-num').textContent = 'tappa ' + (D.tappe.indexOf(t) + 1) + ' di ' + D.tappe.length;
    $('sc-consiglio').textContent = t.consiglio || '';
    $('sc-canzone').textContent = t.canzone || '';
    $('sc-consiglio-riga').hidden = !t.consiglio;
    $('sc-canzone-riga').hidden = !t.canzone;

    aggiornaBottoneFatta();
    disegnaFoto();

    var scheda = $('scheda');
    scheda.hidden = false;
    requestAnimationFrame(function () { scheda.classList.add('su'); });
    scrivi($('sc-cosa'), t.cosa || '');
  }

  function chiudiScheda() {
    var scheda = $('scheda');
    scheda.classList.remove('su');
    idAperto = null;
    /* Gli indirizzi delle foto si liberano a scheda chiusa, non prima:
       altrimenti le immagini spariscono a meta' della discesa. */
    setTimeout(function () { scheda.hidden = true; liberaIndirizzi(); }, 260);
  }

  /* Effetto macchina da scrivere: un tocco e il testo si completa subito. */
  function scrivi(elemento, testo) {
    clearInterval(macchinaScrivere);
    elemento.textContent = '';
    elemento.classList.add('scrive');
    var i = 0;
    macchinaScrivere = setInterval(function () {
      i += 2;
      elemento.textContent = testo.slice(0, i);
      if (i >= testo.length) {
        clearInterval(macchinaScrivere);
        elemento.classList.remove('scrive');
      }
    }, 16);
    elemento.onclick = function () {
      clearInterval(macchinaScrivere);
      elemento.textContent = testo;
      elemento.classList.remove('scrive');
    };
  }

  function aggiornaBottoneFatta() {
    var fatta = !!zaino.fatte[idAperto];
    var b = $('sc-fatta');
    b.textContent = fatta ? '✓ TAPPA FATTA' : 'SEGNA COME FATTA';
    b.classList.toggle('ok', fatta);
  }

  function alternaFatta() {
    if (!idAperto) return;
    if (zaino.fatte[idAperto]) delete zaino.fatte[idAperto];
    else zaino.fatte[idAperto] = true;
    salva();
    aggiornaBottoneFatta();
    aggiornaTutto();
    controllaBadge();
  }

  /* ---------------------------------------------------------------------- */
  /* 7. FOTO                                                                 */
  /* --------------------------------------------------------------------    */
  /* Le immagini stanno in IndexedDB, NON in localStorage: questo sito abita  */
  /* lo stesso dominio di ErasmusWiz e i due si dividerebbero gli stessi ~5MB */
  /* di localStorage. Nello zaino resta solo il conteggio per tappa.          */
  /* ---------------------------------------------------------------------- */
  var LATO_MAX = 800, QUALITA = 0.6, MAX_PER_TAPPA = 3;

  var Album = (function () {
    var db = null, rotto = false;

    function apri(poi) {
      if (db) return poi(db);
      if (rotto || !window.indexedDB) return poi(null);
      var r;
      try { r = indexedDB.open('salento_quest', 1); }
      catch (e) { rotto = true; return poi(null); }
      r.onupgradeneeded = function () { r.result.createObjectStore('foto'); };
      r.onsuccess = function () { db = r.result; poi(db); };
      r.onerror = function () { rotto = true; poi(null); };
    }

    function leggi(id, poi) {
      apri(function (d) {
        if (!d) return poi([]);
        var q = d.transaction('foto', 'readonly').objectStore('foto').get(id);
        q.onsuccess = function () { poi(q.result || []); };
        q.onerror = function () { poi([]); };
      });
    }

    function scrivi(id, lista, poi) {
      apri(function (d) {
        if (!d) return poi(false);
        var tr = d.transaction('foto', 'readwrite');
        if (lista.length) tr.objectStore('foto').put(lista, id);
        else tr.objectStore('foto').delete(id);
        tr.oncomplete = function () { poi(true); };
        tr.onerror = function () { poi(false); };
      });
    }

    function svuota(poi) {
      apri(function (d) {
        if (!d) return poi();
        var tr = d.transaction('foto', 'readwrite');
        tr.objectStore('foto').clear();
        tr.oncomplete = poi;
        tr.onerror = poi;
      });
    }

    return { leggi: leggi, scrivi: scrivi, svuota: svuota };
  })();

  /* Gli indirizzi temporanei delle immagini a schermo, da liberare
     quando la scheda si richiude o si ridisegna. */
  var indirizziFoto = [];
  function liberaIndirizzi() {
    indirizziFoto.forEach(function (u) { URL.revokeObjectURL(u); });
    indirizziFoto = [];
  }

  function disegnaFoto() {
    var box = $('sc-foto');
    var perQuale = idAperto;
    box.innerHTML = '';
    liberaIndirizzi();

    Album.leggi(perQuale, function (lista) {
      if (idAperto !== perQuale) return;        // scheda gia' cambiata
      box.innerHTML = '';

      lista.forEach(function (blob, i) {
        var url = URL.createObjectURL(blob);
        indirizziFoto.push(url);

        var f = document.createElement('div');
        f.className = 'foto';
        f.style.backgroundImage = 'url(' + url + ')';

        var x = document.createElement('button');
        x.type = 'button';
        x.className = 'foto-x';
        x.textContent = '\u00d7';
        x.setAttribute('aria-label', 'Elimina foto');
        x.addEventListener('click', function (ev) {
          ev.stopPropagation();
          if (!confirm('Elimino questa foto?')) return;
          lista.splice(i, 1);
          Album.scrivi(perQuale, lista, function () {
            segnaNumeroFoto(perQuale, lista.length);
            if (idAperto === perQuale) disegnaFoto();
          });
        });
        f.appendChild(x);
        box.appendChild(f);
      });

      if (lista.length < MAX_PER_TAPPA) {
        var piu = document.createElement('button');
        piu.type = 'button';
        piu.className = 'foto agg';
        piu.innerHTML = '<span>+</span>';
        piu.setAttribute('aria-label', 'Aggiungi foto');
        piu.addEventListener('click', function () { $('file-foto').click(); });
        box.appendChild(piu);
      }
    });
  }

  function segnaNumeroFoto(id, quante) {
    if (quante > 0) zaino.foto[id] = quante;
    else delete zaino.foto[id];
    salva();
  }

  /* Rimpicciolisce e ricomprime prima di salvare: dal telefono arrivano
     file da 4 MB, qui bastano 800 px. */
  function comprimi(file, poi) {
    var lettore = new FileReader();
    lettore.onload = function (ev) {
      var img = new Image();
      img.onload = function () {
        var scala = Math.min(1, LATO_MAX / Math.max(img.width, img.height));
        var c = document.createElement('canvas');
        c.width = Math.round(img.width * scala);
        c.height = Math.round(img.height * scala);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        if (c.toBlob) c.toBlob(function (b) { poi(b); }, 'image/jpeg', QUALITA);
        else poi(null);
      };
      img.onerror = function () { avviso('Questa immagine non si apre.', true); };
      img.src = ev.target.result;
    };
    lettore.onerror = function () { avviso('Non riesco a leggere il file.', true); };
    lettore.readAsDataURL(file);
  }

  function aggiungiFoto(file) {
    if (!file || !idAperto) return;
    var perQuale = idAperto;

    comprimi(file, function (blob) {
      if (!blob) return avviso('Non riesco a preparare questa foto.', true);
      Album.leggi(perQuale, function (lista) {
        if (lista.length >= MAX_PER_TAPPA) return;
        lista.push(blob);
        Album.scrivi(perQuale, lista, function (ok) {
          if (!ok) return avviso('Non riesco a salvare la foto su questo telefono.', true);
          segnaNumeroFoto(perQuale, lista.length);
          if (idAperto === perQuale) disegnaFoto();
          controllaBadge();
        });
      });
    });
  }

  /* ---------------------------------------------------------------------- */
  /* 8. BADGE                                                                */
  /* ---------------------------------------------------------------------- */
  function badgeConquistato(b) {
    var c = b.condizione || {};
    var totale = D.tappe.length;

    if (c.tipo === 'tappe') return numeroFatte() >= c.n;
    if (c.tipo === 'percentuale') return totale > 0 && (numeroFatte() / totale) * 100 >= c.n;
    if (c.tipo === 'tappa') return !!zaino.fatte[c.id];
    if (c.tipo === 'foto') return numeroFoto() >= c.n;
    if (c.tipo === 'giorno') {
      var delGiorno = D.tappe.filter(function (t) { return t.giorno === c.n; });
      return delGiorno.length > 0 && delGiorno.every(function (t) { return !!zaino.fatte[t.id]; });
    }
    return false;
  }

  function controllaBadge() {
    var nuovi = [];
    D.badge.forEach(function (b) {
      if (!zaino.badge[b.id] && badgeConquistato(b)) {
        zaino.badge[b.id] = true;
        nuovi.push(b);
      }
    });
    if (nuovi.length) {
      salva();
      aggiornaContatoreBadge();
      nuovi.forEach(function (b, i) {
        setTimeout(function () {
          avviso(b.icona + '  BADGE SBLOCCATO: ' + b.nome);
        }, i * 1600);
      });
    }
  }

  function apriBadge() {
    var lista = $('badge-lista');
    lista.innerHTML = '';
    D.badge.forEach(function (b) {
      var preso = !!zaino.badge[b.id];
      var r = document.createElement('div');
      r.className = 'badge' + (preso ? ' preso' : '');
      r.innerHTML =
        '<div class="badge-ic">' + (preso ? b.icona : '?') + '</div>' +
        '<div><div class="badge-n">' + testoSicuro(preso ? b.nome : '???') + '</div>' +
        '<div class="badge-d">' + testoSicuro(b.desc) + '</div></div>';
      lista.appendChild(r);
    });
    $('badge-modale').hidden = false;
  }

  function aggiornaContatoreBadge() {
    $('btn-badge').textContent = '🏅 ' + Object.keys(zaino.badge).length + '/' + D.badge.length;
  }

  /* ---------------------------------------------------------------------- */
  /* 9. TESTATA E PROGRESSI                                                  */
  /* ---------------------------------------------------------------------- */
  function aggiornaTestata() {
    var fatte = numeroFatte(), totale = D.tappe.length;
    var perc = totale ? Math.round(fatte / totale * 100) : 0;
    $('conteggio').textContent = fatte + '/' + totale;
    $('barra-riemp').style.width = perc + '%';
    $('barra').setAttribute('aria-valuenow', String(perc));
    $('saluto').textContent = zaino.nome ? zaino.nome.toUpperCase() : '';
    $('mini-av').style.backgroundImage = 'url(' + window.Pixel.urlAvatar(zaino.avatar) + ')';
  }

  function aggiornaTutto() {
    aggiornaTestata();
    aggiornaContatoreBadge();
    costruisciElencoGiorno();
    aggiornaPin();
  }

  /* ---------------------------------------------------------------------- */
  /* 10. AVVISI A SCHERMO                                                    */
  /* ---------------------------------------------------------------------- */
  var timerAvviso = null;
  function avviso(testo, errore) {
    var t = $('avviso');
    t.textContent = testo;
    t.classList.toggle('male', !!errore);
    t.classList.add('visibile');
    clearTimeout(timerAvviso);
    timerAvviso = setTimeout(function () { t.classList.remove('visibile'); }, 2600);
  }

  function testoSicuro(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------------------------------------------------------------------- */
  /* 11. MENU                                                                */
  /* ---------------------------------------------------------------------- */
  function costruisciMenu() {
    $('btn-menu').addEventListener('click', function () {
      $('menu').hidden = !$('menu').hidden;
    });

    $('menu-condividi').addEventListener('click', function () {
      var url = location.href.split('#')[0];
      var testo = D.titolo + ' — la mappa del viaggio: ' + url;
      if (navigator.share) {
        navigator.share({ title: D.titolo, text: D.titolo + ' — la mappa del viaggio', url: url })
          .catch(function () { /* annullato dall'utente */ });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(testo).then(function () {
          avviso('Link copiato: incollalo sul gruppo.');
        });
      } else {
        prompt('Copia questo link:', url);
      }
      $('menu').hidden = true;
    });

    $('menu-cambia').addEventListener('click', function () {
      $('menu').hidden = true;
      $('intro').hidden = false;
      $('intro').classList.remove('via');
    });

    $('menu-azzera').addEventListener('click', function () {
      if (!confirm('Cancello tutti i progressi e le foto? Non si torna indietro.')) return;
      zaino.fatte = {}; zaino.foto = {}; zaino.badge = {};
      salva();
      Album.svuota(function () {
        $('menu').hidden = true;
        aggiornaTutto();
        avviso('Progressi azzerati.');
      });
    });

    document.addEventListener('click', function (e) {
      if ($('menu').hidden) return;
      if (!$('menu').contains(e.target) && e.target !== $('btn-menu')) $('menu').hidden = true;
    });
  }

  /* ---------------------------------------------------------------------- */
  /* 12. AVVIO                                                               */
  /* ---------------------------------------------------------------------- */
  var immagineCasa = null;

  function ridisegna() {
    var wrap = $('mappa-wrap');
    window.Mappa.adatta(wrap.clientWidth);

    /* Il sentiero prende i colori delle giornate. */
    var colori = {};
    D.giorni.forEach(function (g) { colori[g.n] = g.colore; });

    window.Mappa.disegna($('mappa'), D.tappe, D.base, immagineCasa, colori);
    aggiornaPin();
  }

  function avvia() {
    carica();

    $('titolo').textContent = D.titolo;
    $('sotto').textContent = D.sottotitolo;
    document.title = D.titolo + ' — ' + D.sottotitolo;

    window.Mappa.controllaCoordinate(D.tappe);

    costruisciIntro();
    costruisciRail();
    costruisciPin();
    costruisciMenu();

    /* La casetta del quartier generale è un'immagine generata: aspettiamo
       che sia pronta prima del primo disegno. */
    immagineCasa = new Image();
    immagineCasa.onload = ridisegna;
    immagineCasa.src = window.Pixel.urlCasa();

    ridisegna();
    aggiornaTutto();
    controllaBadge();

    if (!zaino.nome) {
      $('intro').hidden = false;
    } else {
      $('intro').hidden = true;
    }

    /* Interazioni fisse */
    $('sc-chiudi').addEventListener('click', chiudiScheda);
    $('sc-fatta').addEventListener('click', alternaFatta);
    $('scheda-fondo').addEventListener('click', chiudiScheda);
    $('file-foto').addEventListener('change', function (e) {
      aggiungiFoto(e.target.files && e.target.files[0]);
      e.target.value = '';
    });
    $('btn-badge').addEventListener('click', apriBadge);
    $('badge-chiudi').addEventListener('click', function () { $('badge-modale').hidden = true; });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('badge-modale').hidden) $('badge-modale').hidden = true;
      else if (!$('scheda').hidden) chiudiScheda();
    });

    var attesa = null;
    window.addEventListener('resize', function () {
      clearTimeout(attesa);
      attesa = setTimeout(ridisegna, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', avvia);
  } else {
    avvia();
  }
})();
