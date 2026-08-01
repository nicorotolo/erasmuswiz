# Salento Quest

Mappa-gioco del viaggio in Salento, da mandare agli amici su WhatsApp come link.
Sito statico, nessun backend: si apre nel browser del telefono e basta.

**Online:** https://nicorotolo.github.io/erasmuswiz/salento/

> Progetto a sé, separato da ErasmusWiz: sta nella stessa cartella solo perché
> condivide la pubblicazione su GitHub Pages. Non tocca nulla del sito
> principale.

## Cosa fa

- Mappa del Salento disegnata a pixel (la costa vera, non un'immagine): le
  tappe si posizionano da sole partendo dalle loro coordinate.
- 7 giornate, un colore per giornata, sentiero puntinato che collega le tappe.
- Al primo avvio ognuno sceglie nome e omino; l'omino resta sull'ultima tappa
  completata.
- Scheda di ogni tappa: cosa si fa, 💡 consiglio locale, 🎵 colonna sonora.
- Si segna una tappa come fatta, si attaccano foto, si sbloccano badge.

## Come cambiare il viaggio

Si tocca **un solo file**: `js/dati-tappe.js`. Dentro ci sono le istruzioni.
In breve:

- `giorni` — le giornate e i loro colori.
- `tappe` — l'elenco. Ogni tappa ha `id` (unico), `giorno`, `nome`, `lat`/`lon`,
  `cosa`, `consiglio`, `canzone`. **L'ordine dell'elenco è l'ordine del
  sentiero.**
- `badge` — i traguardi, con condizioni dichiarative (`tappe`, `percentuale`,
  `giorno`, `tappa`, `foto`).

Le coordinate si prendono da Google Maps (tasto destro sul posto → clic sui
numeri in alto, che li copia). Devono stare dentro il riquadro disegnato:
latitudine 39.74–40.60, longitudine 17.80–18.60. Fuori da lì la console del
browser avvisa.

Per allargare o spostare il riquadro (o cambiare la forma della costa) si
lavora su `js/mappa.js`, in cima: `LAT_MIN`/`LAT_MAX`, `LON_MIN`/`LON_MAX` e
l'elenco `COSTA`.

## Dove finiscono i dati

- **localStorage** (`salento_quest_v1`): nome, omino, tappe fatte, badge,
  quante foto per tappa. Poche centinaia di byte.
- **IndexedDB** (`salento_quest`): le foto vere, compresse a 800 px in JPEG.
  Stanno lì e non in localStorage perché il dominio è condiviso con ErasmusWiz
  e i due si dividerebbero lo stesso limite di ~5 MB.

Tutto resta sul telefono di chi apre il link: **i progressi non sono
condivisi** fra gli amici. Per renderli comuni servirebbe un servizio esterno
(Firebase o simili) e non sarebbe più un sito statico.

## File

```
salento/
├── index.html            struttura della pagina
├── css/stile.css         stile (retro, mobile-first)
├── js/dati-tappe.js      ← IL FILE DA MODIFICARE
├── js/pixel.js           sprite disegnati a codice (omini, macchina, casetta)
├── js/mappa.js           forma della costa, terreno, sentiero
├── js/app.js             comportamento: salvataggio, schede, foto, badge
├── img/anteprima.png     immagine che WhatsApp mostra sul link
└── _cover.html           pagina di servizio che genera anteprima.png
```

Per rigenerare l'anteprima dopo aver cambiato le tappe: aprire `_cover.html`
nel browser e fare uno screenshot 1200×630 (o rilanciarlo da uno script
headless).
