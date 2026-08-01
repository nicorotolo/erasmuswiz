/* ==========================================================================
   SALENTO QUEST — DISEGNO PIXEL
   Piccola libreria che trasforma una griglia di caratteri in un'immagine
   pixel-art (data URL PNG) da usare come sfondo CSS.
   Nessuna immagine esterna da scaricare: tutto disegnato dal browser.
   ========================================================================== */

(function () {
  'use strict';

  /* Griglia base dell'omino 12x12.
     o = contorno   h = capelli   s = pelle   e = occhi
     m = bocca      t = maglietta p = pantaloni  c = cappello  . = trasparente */
  var OMINO = [
    '....oooo....',
    '...ohhhho...',
    '..ohhhhhho..',
    '..ohhhhhho..',
    '..osssssso..',
    '..osesseso..',
    '..ossmmsso..',
    '..otttttto..',
    '.otttttttto.',
    '.otttttttto.',
    '..oppppppo..',
    '..oppooppo..'
  ];

  /* Variante con cappellino: cambiano solo le prime tre righe. */
  var OMINO_CAPPELLO = [
    '...oooooo...',
    '..occcccco..',
    '.occcccccco.',
    '..ohhhhhho..',
    '..osssssso..',
    '..osesseso..',
    '..ossmmsso..',
    '..otttttto..',
    '.otttttttto.',
    '.otttttttto.',
    '..oppppppo..',
    '..oppooppo..'
  ];

  /* La macchina della partenza da Roma.
     b = carrozzeria   w = finestrini   t = gomme */
  var MACCHINA = [
    '............',
    '............',
    '.....ooooo..',
    '....owwwwo..',
    '..ooooooooo.',
    '.obbbbbbbbo.',
    '.obbbbbbbbo.',
    '.oooooooooo.',
    '..oo....oo..',
    '.otto..otto.',
    '..oo....oo..',
    '............'
  ];

  /* La casetta del quartier generale (Torre Pali). 12x12.
     r = tetto   w = muro   d = porta   o = contorno */
  var CASA = [
    '............',
    '.....oo.....',
    '....orro....',
    '...orrrro...',
    '..orrrrrro..',
    '.orrrrrrrro.',
    'oorrrrrrrroo',
    '..owwwwwwo..',
    '..owwddwwo..',
    '..owwddwwo..',
    '..owwddwwo..',
    '..oooooooo..'
  ];

  /* I sei avatar selezionabili. Palette diverse sulla stessa griglia. */
  var AVATAR = [
    { id: 'a1', nome: 'Rosso',  griglia: OMINO,
      palette: { o: '#241c16', h: '#3b2a1e', s: '#eab892', e: '#241c16',
                 m: '#a4543f', t: '#e14b3a', p: '#2f4a72' } },

    { id: 'a2', nome: 'Blu',    griglia: OMINO_CAPPELLO,
      palette: { o: '#241c16', h: '#1f1b16', s: '#c9895e', e: '#241c16',
                 m: '#8a4a38', t: '#3a6ee1', p: '#333a44', c: '#f0f0e4' } },

    { id: 'a3', nome: 'Verde',  griglia: OMINO,
      palette: { o: '#241c16', h: '#7a4a1e', s: '#9c6b45', e: '#241c16',
                 m: '#6b3a2a', t: '#3fa05a', p: '#4a3a2a' } },

    { id: 'a4', nome: 'Giallo', griglia: OMINO_CAPPELLO,
      palette: { o: '#241c16', h: '#d9a441', s: '#f0cba0', e: '#241c16',
                 m: '#b06a4a', t: '#f0c341', p: '#5b6470', c: '#e14b3a' } },

    { id: 'a5', nome: 'Viola',  griglia: OMINO,
      palette: { o: '#241c16', h: '#2b1a2e', s: '#7d5238', e: '#241c16',
                 m: '#5a2f24', t: '#8a4ae1', p: '#2a2a3a' } },

    { id: 'a6', nome: 'Ciano',  griglia: OMINO_CAPPELLO,
      palette: { o: '#241c16', h: '#5a3a20', s: '#eab892', e: '#241c16',
                 m: '#a4543f', t: '#2fb3c9', p: '#3a4a5a', c: '#f0c341' } }
  ];

  /**
   * Disegna una griglia di caratteri su un canvas e restituisce un data URL.
   * @param {string[]} griglia righe di uguale lunghezza
   * @param {Object} palette mappa carattere -> colore CSS ('.' = trasparente)
   * @param {number} scala quanti pixel veri per ogni pixel disegnato
   */
  function aDataURL(griglia, palette, scala) {
    scala = scala || 4;
    var righe = griglia.length;
    var colonne = griglia[0].length;
    var c = document.createElement('canvas');
    c.width = colonne * scala;
    c.height = righe * scala;
    var ctx = c.getContext('2d');

    for (var y = 0; y < righe; y++) {
      for (var x = 0; x < colonne; x++) {
        var ch = griglia[y][x];
        var colore = palette[ch];
        if (!colore) continue;             // '.' e caratteri ignoti = trasparente
        ctx.fillStyle = colore;
        ctx.fillRect(x * scala, y * scala, scala, scala);
      }
    }
    return c.toDataURL('image/png');
  }

  /* Cache: la stessa immagine non viene ridisegnata due volte. */
  var cache = {};

  function urlAvatar(id) {
    if (cache['av-' + id]) return cache['av-' + id];
    var a = trovaAvatar(id);
    var url = aDataURL(a.griglia, a.palette, 4);
    cache['av-' + id] = url;
    return url;
  }

  function trovaAvatar(id) {
    for (var i = 0; i < AVATAR.length; i++) {
      if (AVATAR[i].id === id) return AVATAR[i];
    }
    return AVATAR[0];
  }

  function urlMacchina() {
    if (cache.auto) return cache.auto;
    cache.auto = aDataURL(MACCHINA, {
      o: '#f6ecd2', b: '#e14b3a', w: '#bfe4f0', t: '#3a3a3a'
    }, 4);
    return cache.auto;
  }

  function urlCasa() {
    if (cache.casa) return cache.casa;
    cache.casa = aDataURL(CASA, {
      o: '#241c16', r: '#c9503a', w: '#f2e4c9', d: '#7a4a2a'
    }, 3);
    return cache.casa;
  }

  window.Pixel = {
    AVATAR: AVATAR,
    aDataURL: aDataURL,
    urlAvatar: urlAvatar,
    trovaAvatar: trovaAvatar,
    urlMacchina: urlMacchina,
    urlCasa: urlCasa
  };
})();
