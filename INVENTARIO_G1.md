# Inventario G1 — «nessun contenuto vecchio presentato come attuale»

> Gate **G1** di `PLAN_REDESIGN_V3.md`. Precede il rilascio di **V4 e V3**.
> Il piano dice che G1 è *«misurabile solo con un inventario, altrimenti è
> un'intenzione»*: questo file è quell'inventario, e
> `test/inventario-g1.test.cjs` è la prova che non marcisca.
>
> **Compilato il 2026-07-28** su `feee1ae` + i contenuti validati lo stesso
> giorno. Rileggere a **G2** (uscita dati 2027/28).

---

## 0. Perché serve, in una riga

Il sito punta al bando **2027/28**; tutti i dati in repo sono **2026/27** e
tutte le scadenze di candidatura sono passate. Da agosto a dicembre esiste uno
**stato pre-bando** in cui ogni valore qui sotto è *storico*, non *attuale*.
G1 è superato quando **nessuno** dei punti della sezione 2 può mostrare uno di
quei valori come corrente.

**G1 non chiede di cancellare le date.** Un requisito di bando *è* fatto di
date: `dati-bando.js` senza «iscritto nel 2025/2026» non è più un requisito.
Chiede che ogni punto di render sappia **nascondere** o **etichettare
«storico 2026/27»**.

---

## 1. I campi dipendenti dal ciclo

Sorgente: i quattro file dati dei due atenei, più due che il piano non nominava
ma che portano date a schermo allo stesso modo (§1.5 e §1.6).

### 1.1 `BANDO_INFO` — `js/atenei/<ateneo>/dati-bando.js`

| Campo | Ca' Foscari | Sapienza | Dipende dal ciclo perché |
|---|---|---|---|
| `annoAccademico` | `"2026/2027"` | `"2026/2027"` | è il ciclo |
| `titolo` | contiene `2026/2027` | contiene `2026/2027` | stringa mostrata in chiaro |
| `linkUfficiale` | `unive.it/erasmus-studio` (stabile) | `…/bando-erasmus-2026-2027-studio` | **l'URL Sapienza contiene l'anno**: a G2 muore |
| `dataVerificaDati` | `"2026-06-10"` | `"2026-07-28"` | data di verifica del ciclo |
| `inVerifica` | assente | assente (rimosso il 28/07) | flag del banner provvisorietà |

### 1.2 `REQUISITI_BANDO[]` — stessi file

8 voci Ca' Foscari, 9 Sapienza. **Tutti e sei i campi testuali possono
contenere il ciclo**: `valore`, `descrizione`, `spiegazione`, `azione`,
`citazione`, `fonte`. Esempi non esaustivi: `cf-cfu-triennale.valore` =
`"6 / 24 / 42 CFU"` (neutro) ma `.descrizione` porta `25/02/2026`;
`sap-iscrizione.valore` = `"Iscritto nel 2025/2026 + rinnovo 2026/2027"`;
`sap-cfu-riconoscimento.descrizione` porta `31/10/2027`. Il campo `fonte` cita
il decreto del ciclo (`DR 13/2026`, `D.R. 3613/2025`).

> **Non si ripuliscono**: sono i requisiti. Vanno nascosti o etichettati.

### 1.3 `SCADENZE_INFO` — `js/atenei/<ateneo>/dati-scadenze.js`

| Campo | Ca' Foscari | Sapienza | Note |
|---|---|---|---|
| `annoAccademico` | `"2026/2027"` | `"2026/2027"` | — |
| `fineCiclo` | `"2027-07-31T23:59"` | `"2027-07-31T23:59"` | **governa `statoBando()`**: è l'interruttore che fa passare tutto il sito a `dati-scaduti` |

### 1.4 `SCADENZE_CAFOSCARI[]` — stessi file

7 voci Ca' Foscari, 4 Sapienza. Campi dipendenti dal ciclo: `data` (sempre),
`descrizione` (spesso ripete la data in parole), `cosa` (per la Sapienza
distingue «1ª/2ª finestra», che è una struttura del ciclo 2026/27).

⚠️ **La 1ª scadenza Sapienza è `2026-02-27`, non `2026-02-12`**: il Decreto
n. 326/2026 del 17/02/2026 ha riaperto i termini. Chi rivalida sul solo PDF del
bando la "corregge" introducendo un errore. Vedi `fonti/INDICE.md`.

### 1.5 `CHECKLIST[]` — `js/atenei/<ateneo>/dati-checklist.js` *(non nominato dal piano)*

Il piano stesso cita `dati-checklist.js:28` come portatore del `25/02/2026`, ma
elencava solo bando e scadenze. Le voci sono agganciate alle scadenze via
`scadenzaId`, quindi ereditano il ciclo **due volte**: nel testo e nel legame.

### 1.6 `meta.scadenzeOspitante[]` — file `dati-mete-*.js` *(non nominato dal piano)*

Reso a `app.js:2512` come `«{cosa}: {periodo}»`. `periodo` è testo libero
(«entro il 15 maggio», «primo semestre 2026/27») e viene dall'università
ospitante: cambia ogni anno e **non è coperto da nessun flag**. È il posto dove
un contenuto vecchio ha più probabilità di sopravvivere inosservato — la
casistica esatta che il piano descrive come *«un testo 2026/27 rimasto in un
tooltip»*.

### 1.7 `ATTESA_INFO.esempioCiclo` — `js/atenei/<ateneo>/dati-attesa.js`

**Già conforme per costruzione**: le date del ciclo sono confinate in
`esempioCiclo` e il file dichiara che non sono mostrabili come attuali. È il
modello da imitare, non un problema da risolvere. (`inVerifica: true` resta:
riguarda la meccanica di assegnazione per Facoltà, non le date.)

---

## 2. I punti che li portano a schermo

19 punti. Gli ancoraggi sono **frammenti di codice**, non numeri di riga: i
numeri muoiono al primo commit (è già successo alla §V2 del piano).

| # | Dove | Ancoraggio in `js/app.js` | Cosa mostra | In pre-bando deve |
|---|---|---|---|---|
| 1 | Motore | `SCADENZE_INFO.fineCiclo` in `statoBando()` + `inPreBando()` | stato globale a quattro valori; il pre-bando è una lettura separata | **governare tutti gli altri** senza modificare `statoBando()` |
| 2 | Badge in cima | `document.getElementById("badge-bando")` | anno breve `2026/27` + stato | etichettare, mai dire «aperto» |
| 3 | Home / missione | `titoloPreBando()` | titolo missione | «Il bando 2027/28 non è ancora uscito» |
| 4 | Home / missione | `dataChiusuraCandidature()` | «si sono chiuse il {data}» | storico esplicito |
| 5 | Home / missione | `finestraAttesaBando()` | prossima data certa | riscrivere come uscita attesa del nuovo bando |
| 6 | Home / missione | `window.ATTESA_INFO?.titolo` | porta in-attesa | invariato (non dipende dal ciclo) |
| 7 | Home / landing | `finestraAttesaBando()` | invito | riusa la formulazione canonica del pre-bando |
| 8 | Card «questa settimana» | `settimana-item-scadenza` | countdown per voce | **non mostrare** |
| 9 | Stazione candidatura | `cand-scadenza-data` / `cand-scadenza-countdown` | timeline scadenze | etichettare «storico 2026/27» |
| 10 | Stazione candidatura | `prossimo-passo-scadenza` | badge prossimo passo | **non mostrare** |
| 11 | Tooltip / badge | `el.getAttribute("data-scadenza")` | countdown inline | **non mostrare** |
| 12 | Tooltip / badge | `countdownConCiclo(scad.data)` | badge per `data-scadenza-id` | etichettare col ciclo |
| 13 | Calendario `.ics` | `function scaricaICSScadenza` | `DTSTART` + testo evento | **non generare** per scadenze passate; V5 sostituisce con «Controlla se è uscito il bando» |
| 14 | Riga fonte | `Dati verificati il ${new Date(infoBando.dataVerificaDati)` | disclaimer | mostrare, ed è il posto giusto per dire il ciclo dei dati |
| 15 | Stazione requisiti | `REQUISITI_BANDO` in `renderAutoverifica` | 8/9 schede requisito | etichettare: i requisiti sono del ciclo vecchio |
| 16 | Stepper / progresso | `const requisiti = REQUISITI_BANDO` (tappa 1) | «x/y requisiti» | coerente con 15 |
| 17 | Dettaglio meta | `meta.scadenzeOspitante` | scadenze ateneo ospitante | **etichettare**: dato per-meta, nessun flag lo copre |
| 18 | Pannello attesa | `const info = window.ATTESA_INFO \|\| {}` | tappe/intanto/attenzione | invariato |
| 19 | Banner provvisorietà | `BANDO_INFO.inVerifica` | «dati in corso di verifica» | resta indipendente da G1 |

---

## 3. Le tre domande aperte — **decise il 2026-07-29 in `PLAN_REDESIGN_V3.md` §V4**

> Questa sezione non è più una lista di dubbi: è il verbale delle decisioni.
> La spec vincolante è §V4, qui c'è solo il rimando.

1. **Lo stato pre-bando non esisteva come valore.** → **D‑V4.1: è una lettura,
   non un valore nuovo.** `statoBando()` non si tocca.
   ⛔ **Correzione a questo stesso documento**: `statoBando()` ha **quattro**
   valori, non tre — `aperto` / **`chiuso-ciclo-attivo`** / `dati-scaduti` /
   `non-pubblicato` — e oggi il sito è su **`chiuso-ciclo-attivo`**, perché
   `fineCiclo` (2027‑07‑31) è futura. `dati-scaduti` scatta il **1° agosto
   2027**: leggere il pre-bando da lì, come proponeva questa riga, avrebbe
   prodotto uno stato che **non si accende mai** da agosto a dicembre.
2. **Nascondere o etichettare?** → **D‑V4.2: si etichetta, non si nasconde.**
   Deciso da Nicola contro la raccomandazione della regola suggerita qui sotto.
   Tre forme ammesse e nessuna quarta: **etichetta** · **riscrittura al passato**
   · **disattivazione spiegata**.
   ⚠️ **La colonna «In pre-bando deve» della §2 è superata**: dove dice «non
   mostrare» (punti 5, 8, 10, 11, 12, 13) vale la tabella di §V4 §2.
3. **`meta.scadenzeOspitante` non ha un flag di ciclo.** → **D‑V4.3: etichetta
   di sezione**, zero file dati toccati (li riscrive l'automazione notturna).

Una quarta decisione, che questo inventario non aveva visto: **D‑V4.4** — le 18
voci `condizionale` dei `dati-postselezione.js` si dividono in tre famiglie
(`condizione` / `opzione` / `avvertenza`) e il denominatore dell'avanzamento
diventa personalizzato, con due domande nuove nel profilo.

---

## 4. Come si prova

`test/inventario-g1.test.cjs`. Sono **eseguibili oggi**:

- **T1** ogni campo dichiarato in §1 esiste ancora nei dati (l'inventario non
  mente per omissione);
- **T2** ogni ancoraggio di §2 esiste ancora in `js/app.js` (l'inventario non
  marcisce quando il codice si muove);
- **T3** nessun campo dipendente dal ciclo è comparso nei file dati **fuori**
  da quelli dichiarati — è il test che fa fallire l'aggiunta silenziosa;
- **T4** i due atenei dichiarano lo **stesso** `annoAccademico` in
  `dati-bando.js` e `dati-scadenze.js` (un disallineamento fra i due file dello
  stesso ateneo è già oggi un difetto).

- **T5** per ciascuno dei 19 punti, in stato pre-bando, il testo reso non
  contiene nessuno dei valori di §1 se non dentro un'etichetta di ciclo. È la
  prova che il piano descrive: *«un testo 2026/27 rimasto in un tooltip deve
  far fallire la prova»*. **T5 è la definizione del criterio di uscita di V4**,
  non un test rinviabile.

> **Stato del gate al 2026-07-29: SUPERATO.**
> T1–T5 verdi, nessuno `skip`. T5 contiene una asserzione numerata per ciascuno
> dei 19 punti e lavora sul DOM realmente reso in pre-bando. Prova di mutazione
> eseguita sul punto 9: rimosso temporaneamente il ciclo dal cartellino del
> calendario, T5 rosso con l'errore `#9`; ripristinata la riga, T5 verde.
