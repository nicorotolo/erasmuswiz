# Baseline "prima" del redesign v2 — F0.4 / F0.5

Misurata il **2026-07-25** su `main` @ `e916446`, con `python -m http.server 8001`
dalla radice del repo. Stato di prova: **Ca' Foscari · Economia (0311) · Triennale ·
Inglese B2**, onboarding completato, zaino in `localStorage`.

Strumento: [`probe-invarianti.js`](probe-invarianti.js) — si incolla in console e si
lancia `await __run()` a ciascun viewport.

## Perche' misure e non screenshot

Il piano (F0.4, R29) chiede screenshot **piu' una checklist di invarianti che li renda
confrontabili**: senza criteri espliciti ogni differenza e' "intenzionale" e il
confronto non dice nulla. Tutte e sei le invarianti sono leggibili dal DOM, quindi
sono state misurate invece che fotografate. Il risultato e' esatto, ripetibile e
**diffabile in git** — cosa che una sequenza di PNG non e'. A F3, `__confronta(prima, dopo)`
da' il diff diretto (il baseline di regressione di `_smoke.js` resta a inizio F3, R36).

## Invarianti — esito: tutte verdi a 390 / 768 / 1280

| Invariante | oggi | mete | percorso | profilo |
|---|---|---|---|---|
| Overflow orizzontale di pagina | 0 | 0 | 0 | 0 |
| Elementi che sporgono dal viewport | 0 | 0 | 0 | 0 |
| Testo tagliato | 0 | 0 | 0 | 0 |
| Card sovrapposte | 0 | 0 | 0 | 0 |
| Nav visibile | si' | si' | si' | si' |
| Ordine dei blocchi | invariato ai 3 breakpoint | | | |

Ordine dei blocchi rilevato (identico ai tre viewport — e' il riferimento da conservare):

- **oggi** — `div#home-benvenuto.benvenuto`
- **mete** — `div.sezione-header` · `div#profilo-strip` · `div#wizard-mete` ·
  `div#filtri-mete-chip` · `div.cerca-mete-barra` · `div#card-mappa-mete` ·
  `div#sezione-preferite` · `div#griglia-mete-v2`
- **percorso** — `div.sezione-header` · `ol.stazioni`
- **profilo** — `div.sezione-header` · `form#form-profilo-v2`

Nota: le `<path>` della mappa d'Europa sporgono dal proprio `viewBox` senza
generare overflow di pagina (`scrollWidth - clientWidth = 0`). Sono escluse dal
conteggio — erano 4 falsi positivi per tab.

### Conferme incidentali alle verifiche del piano

Misurate qui, coincidono con la tabella "gia' verificato" di `PLAN_REDESIGN_V2.md`:

- `.nav-bottom` e' `position: fixed` a **tutti** i breakpoint; a >=768 sta a `top: 0`
  con `height: 64px` → confermato che `sticky` la manderebbe in fondo.
- `.main-content` a 1280: `max-width: 1140px`, `padding: 104px 40px 48px` → conferma
  la decisione R31 di fissare `--container: 1140px` (il 1120px del canvas
  restringerebbe la pagina di 20px senza motivo).

## Inventario touch < 44px — la "lista prima" (F0.5, R12)

Totali per tab e viewport (il footer e la nav si ripetono su ogni tab):

| viewport | oggi | mete | percorso | profilo |
|---|---|---|---|---|
| 390 | 5 | 89 | 35 | 16 |
| 768 | 9 | 93 | 51 | 20 |
| 1280 | 9 | 93 | 54 | 20 |

Aggregato per selettore (`n` = istanze; `minH` = altezza minima misurata):

| Selettore | n (max) | minW | minH | dove |
|---|---|---|---|---|
| `button.btn-preferita` (☆) | **80** | 40 | **40** | mete |
| `summary` | 17 | 206.7 | **19.2** | percorso |
| `label.voce-checklist-v2` | 13 | 608 | 41.1 | percorso (>=768) |
| `label.requisito-v2-autoverifica` | 8 | 206.7 | **19.9** | percorso |
| `summary.cand-checklist-toggle` | 4 | 328 | **19.7** | percorso |
| `a.nav-item` / `a.nav-item.attivo` | 3 | 90 | **33** | nav a >=768 |
| `button#btn-drawer.nav-item` | 1 | 81.1 | **33** | nav a >=768 |
| `select.lingua-nome` / `.lingua-livello` | 2+2 | 137 | 40 | profilo |
| `select#select-ateneo` / `#area-v2` / `#livello-v2` | 1+1+1 | 312 | 40 | profilo |
| `label.checkbox-lingua` | 2 | 82.5 | **19.9** | profilo |
| `input#nome-v2` | 1 | 312 | 38 | profilo |
| `input#cerca-mete` | 1 | 279 | 37 | mete |
| `button.preferite-rilancia` | 1 | 131.3 | **30** | mete |
| `button#wizard-mete-salta` | 1 | 94 | 41 | mete |
| `button.toggle-fase-btn` (x2) | 2 | 309 | 39 | percorso (>=768) |

Il grosso e' **`button.btn-preferita` a 40x40**: 80 istanze, +4px per lato e sparisce.
Il caso piu' grave in altezza sono `summary` e le `label` di autoverifica (~19-20px).
Da notare che **la nav a >=768 ha item alti 33px**: e' chrome permanente, non un
dettaglio di pagina.

### Criterio di uscita a F4 (R30)

A F4 questa lista dev'essere **VUOTA**, non "un sottoinsieme" — sarebbe un criterio
che si autoassolve. Le uniche eccezioni ammesse sono i **link inline dentro un
paragrafo**, che non sono bersagli-bottone e non vanno ingranditi:

- `a#footer-link-bando` ("bando ufficiale"), h=16 — dentro il disclaimer del footer
- `a` del footer ("Segnala un errore", le 2 guide, "Come funziona"), h=16
- `a.profilo-strip-link` ("Compila il profilo per vedere…"), h=16 — dentro la strip
- `a` "fonte ufficiale ↗" nelle stazioni del Percorso, h=16

Ogni altra eccezione va motivata per iscritto nel piano di fase.

## Come rifare la misura

```
python -m http.server 8001        # dalla radice del repo
```

Aprire `http://localhost:8001/index.html`, completare l'onboarding con lo stato di
prova qui sopra, incollare `probe-invarianti.js` in console e per ogni viewport
(390 / 768 / 1280):

```js
const dopo = await __run();
__confronta(prima, dopo);   // `prima` = esito salvato a F0
```
