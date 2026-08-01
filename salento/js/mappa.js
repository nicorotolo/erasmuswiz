/* ==========================================================================
   SALENTO QUEST — LA MAPPA
   --------------------------------------------------------------------------
   Disegna il Salento a pixel su un <canvas>, partendo dalla forma vera della
   costa (una serie di punti di controllo lat/lon) e non da un'immagine.
   Conseguenza pratica: le tappe si posizionano da sole a partire dalle loro
   coordinate reali, e la mappa si ridisegna nitida a qualsiasi dimensione.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Riquadro geografico disegnato (il "mondo di gioco") ---------------- */
  var LAT_MAX = 40.60, LAT_MIN = 39.74;
  var LON_MIN = 17.80, LON_MAX = 18.60;

  /* --- Risoluzione della griglia: 48 caselle in larghezza, 64 in altezza --- */
  var COL = 48, RIG = 64;

  /* --- La costa, punto per punto: [latitudine, costa ionica, costa adriatica]
     Scendendo da nord (sopra Lecce) fino alla punta di Leuca.
     È questo l'elenco che dà al Salento la sua forma. ------------------- */
  var COSTA = [
    [40.60, 17.80, 18.02],
    [40.52, 17.80, 18.00],
    [40.46, 17.80, 18.11],
    [40.42, 17.81, 18.20],
    [40.38, 17.82, 18.30],
    [40.34, 17.82, 18.36],
    [40.30, 17.82, 18.41],
    [40.26, 17.87, 18.44],
    [40.22, 17.92, 18.46],
    [40.18, 17.96, 18.48],
    [40.14, 17.98, 18.50],
    [40.10, 17.99, 18.49],
    [40.06, 17.98, 18.47],
    [40.02, 18.00, 18.44],
    [39.98, 18.03, 18.43],
    [39.94, 18.07, 18.41],
    [39.90, 18.11, 18.39],
    [39.86, 18.15, 18.38],
    [39.83, 18.22, 18.37],
    [39.81, 18.30, 18.37],
    [39.795, 18.34, 18.37],
    [39.78, 18.36, 18.375],
    [39.77, 18.365, 18.370]
  ];

  /* --- Codici del terreno ------------------------------------------------ */
  var MARE = 0, MARE_MEDIO = 1, MARE_BASSO = 2, SABBIA = 3, ROCCIA = 4,
      ERBA_C = 5, ERBA = 6, ERBA_S = 7, ULIVO = 8;

  var COLORI = {};
  COLORI[MARE]       = '#16467f';
  COLORI[MARE_MEDIO] = '#2472ad';
  COLORI[MARE_BASSO] = '#47a6cf';
  COLORI[SABBIA]     = '#efdca8';
  COLORI[ROCCIA]     = '#c2b48f';
  COLORI[ERBA_C]     = '#8cbb54';
  COLORI[ERBA]       = '#6ea340';
  COLORI[ERBA_S]     = '#55873a';
  COLORI[ULIVO]      = '#3f6b30';

  var terreno = null;    // griglia RIG x COL, riempita una volta sola
  var cella = 8;         // lato in px di una casella (dipende dallo schermo)

  /* ---------------------------------------------------------------------- */
  /* Rumore deterministico: stesso risultato a ogni ridisegno, così la      */
  /* mappa non "sfarfalla" quando si ruota il telefono.                      */
  /* ---------------------------------------------------------------------- */
  function rumore(x, y, seme) {
    var h = (x * 374761393 + y * 668265263 + (seme || 0) * 1274126177) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h = h ^ (h >>> 16);
    return (h >>> 0) / 4294967295;
  }

  /* Interpola la costa a una latitudine qualsiasi. */
  function costaA(lat) {
    if (lat >= COSTA[0][0]) return [COSTA[0][1], COSTA[0][2]];
    var ultimo = COSTA[COSTA.length - 1];
    if (lat <= ultimo[0]) return null;              // sotto la punta: solo mare
    for (var i = 0; i < COSTA.length - 1; i++) {
      var a = COSTA[i], b = COSTA[i + 1];
      if (lat <= a[0] && lat >= b[0]) {
        var t = (a[0] - lat) / (a[0] - b[0]);
        return [a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      }
    }
    return null;
  }

  /* Da coordinate geografiche a coordinate in caselle (numeri decimali). */
  function aCaselle(lat, lon) {
    return {
      cx: (lon - LON_MIN) / (LON_MAX - LON_MIN) * COL,
      cy: (LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * RIG
    };
  }

  /* ---------------------------------------------------------------------- */
  /* Costruzione della griglia del terreno.                                  */
  /* ---------------------------------------------------------------------- */
  function costruisciTerreno() {
    var g = [], y, x;

    /* 1) terra o mare, con la costa resa frastagliata dal rumore */
    for (y = 0; y < RIG; y++) {
      g[y] = [];
      var lat = LAT_MAX - (y + 0.5) / RIG * (LAT_MAX - LAT_MIN);
      var c = costaA(lat);
      var xo = null, xe = null;
      if (c) {
        xo = (c[0] - LON_MIN) / (LON_MAX - LON_MIN) * COL + (rumore(y, 7, 1) - 0.5) * 1.4;
        xe = (c[1] - LON_MIN) / (LON_MAX - LON_MIN) * COL + (rumore(y, 3, 2) - 0.5) * 1.4;
      }
      for (x = 0; x < COL; x++) {
        var terra = c && (x + 0.5) >= xo && (x + 0.5) <= xe;
        g[y][x] = terra ? ERBA : MARE;
      }
    }

    /* 2) rifinitura: spiagge, rocce, sfumature del mare, macchia */
    var out = [];
    for (y = 0; y < RIG; y++) {
      out[y] = [];
      for (x = 0; x < COL; x++) {
        var qui = g[y][x];
        var vicinoTerra = confina(g, x, y, ERBA);
        var vicinoMare = confina(g, x, y, MARE);

        if (qui === MARE) {
          if (vicinoTerra) out[y][x] = MARE_BASSO;
          else if (confinaLargo(g, x, y, ERBA, 2)) out[y][x] = MARE_MEDIO;
          else out[y][x] = MARE;
          continue;
        }

        /* Terra sul bordo: sabbia sullo Ionio, roccia sull'Adriatico
           (la costa est del basso Salento è fatta di falesie, non di spiagge). */
        if (vicinoMare) {
          var lon = LON_MIN + (x + 0.5) / COL * (LON_MAX - LON_MIN);
          var lat2 = LAT_MAX - (y + 0.5) / RIG * (LAT_MAX - LAT_MIN);
          var costaAlta = (lon > 18.30 && lat2 < 40.15);
          out[y][x] = costaAlta ? ROCCIA : SABBIA;
          continue;
        }

        /* Entroterra: tre verdi + qualche macchia di ulivi */
        var n = rumore(x, y, 5);
        if (n > 0.90) out[y][x] = ULIVO;
        else if (n > 0.66) out[y][x] = ERBA_C;
        else if (n > 0.33) out[y][x] = ERBA;
        else out[y][x] = ERBA_S;
      }
    }
    return out;
  }

  function confina(g, x, y, valore) {
    for (var dy = -1; dy <= 1; dy++) {
      for (var dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        var r = g[y + dy];
        if (r && r[x + dx] === valore) return true;
      }
    }
    return false;
  }

  function confinaLargo(g, x, y, valore, raggio) {
    for (var dy = -raggio; dy <= raggio; dy++) {
      for (var dx = -raggio; dx <= raggio; dx++) {
        var r = g[y + dy];
        if (r && r[x + dx] === valore) return true;
      }
    }
    return false;
  }

  /* ---------------------------------------------------------------------- */
  /* Disegno                                                                 */
  /* ---------------------------------------------------------------------- */
  function disegnaTerreno(ctx) {
    var x, y;
    for (y = 0; y < RIG; y++) {
      for (x = 0; x < COL; x++) {
        var t = terreno[y][x];
        ctx.fillStyle = COLORI[t];
        ctx.fillRect(x * cella, y * cella, cella, cella);

        /* Dettagli: un pixel più scuro/chiaro dentro la casella.
           È quello che toglie l'effetto "quadrettoni piatti". */
        var d = Math.max(1, Math.round(cella / 4));
        var n = rumore(x, y, 11);

        if (t === MARE && n > 0.93) {                      // onda al largo
          ctx.fillStyle = '#2472ad';
          ctx.fillRect(x * cella + d, y * cella + d * 2, d * 2, d);
        } else if (t === MARE_MEDIO && n > 0.88) {
          ctx.fillStyle = '#47a6cf';
          ctx.fillRect(x * cella + d, y * cella + d * 2, d * 2, d);
        } else if (t === MARE_BASSO && n > 0.7) {          // schiuma sottocosta
          ctx.fillStyle = '#b6e4f2';
          ctx.fillRect(x * cella + d, y * cella + d, d * 2, d);
        } else if (t === SABBIA && n > 0.75) {
          ctx.fillStyle = '#d6bd83';
          ctx.fillRect(x * cella + d * 2, y * cella + d, d, d);
        } else if (t === ROCCIA && n > 0.6) {
          ctx.fillStyle = '#9c8f6e';
          ctx.fillRect(x * cella + d, y * cella + d * 2, d, d);
        } else if (t === ULIVO) {                          // chioma d'ulivo
          ctx.fillStyle = '#2e5222';
          ctx.fillRect(x * cella + d, y * cella + d, d * 2, d * 2);
        } else if ((t === ERBA || t === ERBA_C) && n > 0.80) {
          ctx.fillStyle = '#55873a';
          ctx.fillRect(x * cella + d * 2, y * cella + d * 2, d, d);
        }
      }
    }
  }

  /* Il sentiero puntinato che collega le tappe nell'ordine del programma.
     Ogni tratto prende il colore della giornata da cui parte: si legge a
     colpo d'occhio dove si va in che giorno. */
  function disegnaSentiero(ctx, tappe, coloriGiorno) {
    if (tappe.length < 2) return;
    var passo = cella * 1.15;              // distanza fra un puntino e l'altro
    var raggio = Math.max(2, Math.round(cella * 0.18));

    for (var i = 0; i < tappe.length - 1; i++) {
      var a = punto(tappe[i].lat, tappe[i].lon);
      var b = punto(tappe[i + 1].lat, tappe[i + 1].lon);
      var colore = (coloriGiorno && coloriGiorno[tappe[i].giorno]) || '#f6ecd2';
      var dx = b.x - a.x, dy = b.y - a.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var n = Math.max(1, Math.floor(dist / passo));

      for (var k = 1; k < n; k++) {
        var px = Math.round(a.x + dx * (k / n));
        var py = Math.round(a.y + dy * (k / n));
        ctx.fillStyle = 'rgba(14,10,7,0.5)';           // contorno scuro
        ctx.fillRect(px - raggio - 1, py - raggio - 1, raggio * 2 + 2, raggio * 2 + 2);
        ctx.fillStyle = colore;
        ctx.fillRect(px - raggio, py - raggio, raggio * 2, raggio * 2);
      }
    }
  }

  /* Il quartier generale, disegnato come casetta sulla mappa.
     Spostato di qualche casella verso l'entroterra: sulle coordinate esatte
     finirebbe sotto il segnaposto della tappa che sta nello stesso posto. */
  function disegnaBase(ctx, base, immagine) {
    if (!immagine || !immagine.complete || !immagine.naturalWidth) return;
    var p = punto(base.lat, base.lon);
    var lato = Math.round(cella * 2.6);
    var x = Math.round(p.x + cella * 1.8 - lato / 2);
    var y = Math.round(p.y - cella * 4);
    ctx.drawImage(immagine, x, y - lato, lato, lato);
  }

  /* ---------------------------------------------------------------------- */
  /* API pubblica                                                            */
  /* ---------------------------------------------------------------------- */

  /* Da lat/lon a pixel dentro il canvas. */
  function punto(lat, lon) {
    var c = aCaselle(lat, lon);
    return { x: c.cx * cella, y: c.cy * cella };
  }

  /* Ricalcola la dimensione della casella in base allo spazio disponibile. */
  function adatta(larghezzaDisponibile) {
    var c = Math.floor(larghezzaDisponibile / COL);
    cella = Math.max(5, Math.min(16, c));
    return cella;
  }

  function dimensioni() {
    return { larghezza: COL * cella, altezza: RIG * cella, cella: cella };
  }

  /* Avvisa se una tappa è stata messa fuori dal riquadro disegnato. */
  function controllaCoordinate(tappe) {
    var fuori = [];
    tappe.forEach(function (t) {
      if (t.lat > LAT_MAX || t.lat < LAT_MIN || t.lon < LON_MIN || t.lon > LON_MAX) {
        fuori.push(t.id);
      }
    });
    if (fuori.length) {
      console.warn('[Salento Quest] Tappe fuori dal riquadro della mappa ' +
        '(lat ' + LAT_MIN + '–' + LAT_MAX + ', lon ' + LON_MIN + '–' + LON_MAX + '): ' +
        fuori.join(', '));
    }
    return fuori;
  }

  function disegna(canvas, tappe, base, immagineCasa, coloriGiorno) {
    if (!terreno) terreno = costruisciTerreno();

    var dpr = window.devicePixelRatio || 1;
    var d = dimensioni();
    canvas.width = Math.round(d.larghezza * dpr);
    canvas.height = Math.round(d.altezza * dpr);
    canvas.style.width = d.larghezza + 'px';
    canvas.style.height = d.altezza + 'px';

    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;

    disegnaTerreno(ctx);
    disegnaSentiero(ctx, tappe, coloriGiorno);
    if (base) disegnaBase(ctx, base, immagineCasa);
  }

  window.Mappa = {
    COL: COL, RIG: RIG,
    LAT_MIN: LAT_MIN, LAT_MAX: LAT_MAX, LON_MIN: LON_MIN, LON_MAX: LON_MAX,
    adatta: adatta,
    dimensioni: dimensioni,
    punto: punto,
    disegna: disegna,
    controllaCoordinate: controllaCoordinate
  };
})();
