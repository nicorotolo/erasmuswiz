# Plan: Redesign v3 — ErasmusWiz per il bando 2027/28

_Bloccato col grill — Claude Code + Nicola, 2026-07-27._
_Rev. 6 — cinque round di revisione avversariale con Codex `gpt-5.6-sol` (cap raggiunto)._
_Act 1+2 di `/grill-me-codex`. Argomentazione integrale: `PLAN_REDESIGN_V3-LOG.md`._

> **Precedenza documentale.** Ordine operativo del **cantiere SITO** da agosto
> 2026 a marzo 2027. Prevale su `PLAN_REDESIGN_V2.md` (chiuso: F0→F4 online).
> **Non** tocca `PLAN.md`, ordine operativo del cantiere DATI/mappatura.
> `PROGETTO_ERASMUS.md` resta la bussola strategica.

---

## Stato reale del codice — leggere PRIMA di progettare

> La rev. 1 di questo piano conteneva **due fasi intere costruite su premesse
> false**: dava per inesistenti un router e un'entrata-mappa che esistono
> entrambi. Le ha trovate Codex. Questa sezione è il correttivo, e va tenuta
> aggiornata: **chiunque progetti su questo file deve partire da qui.**

| Cosa | Stato reale | Dove |
|---|---|---|
| **Router a hash** | **Esiste**, con contratto R1.4: porta unica `vaiA()`, `TAB_VALIDI`, `ALIAS_HASH`, `pushState`/`popstate`. Usa hash **nudi** (`#oggi`), **non** `#/oggi` | `js/app.js:437` |
| **Entrata mappa-hero** | **Esiste**: `#home-benvenuto`, CTA, flusso a 3 domande **sulla mappa**, mascotte Wiz, `prefers-reduced-motion`. Commento in loco: *«la mappa è la veste, questa è la promessa»* | `index.html:48`, `js/app.js:3758` |
| **Motore mappa** | **Esiste**: SVG Europa + coordinate precalcolate, pin come `<button>` in overlay, cluster per città e distanza | `js/dati-mappa-europa.js`, `js/dati-coordinate.js`, `mappaCostruisci()` |
| **Footer per-ateneo** | **Già dinamico nel testo**, non solo nel link | `applicaBrandingAteneo()`, `js/app.js:4389` |
| **LA Workspace** | **Esiste**, ~1.140 righe (2490→3634), versioni congelate, molti-a-molti, checklist pre-invio | `js/app.js:2490+` |
| **Wishlist / schedina** | Due array distinti nel modello dati, ma **tenuti allineati** e **cappati a 5** | `schedinaIds()` app.js:2057, cap app.js:2163 |
| **Export `.ics`** | Esiste, **senza `VALARM`**: evento muto. Un file per singola scadenza | `scaricaICSScadenza()`, app.js:1341 |
| **PWA** | `manifest.json` e `sw.js` presenti, **nessuno propone mai l'installazione** | — |
| **Pipeline dati attiva** | Prompt Gemini **incorporato** in `scripts/gemini-sgrossatura.mjs`; verifica con `automazioni/PROMPT_CODEX_verifica.md`. `PROMPT_CODEX_mappatura.md` è **storico** | `scripts/` |
| **Post-selezione** | Ca' Foscari **20 voci validate**; Sapienza **5, dichiarate provvisorie** | `dati-postselezione.js` |
| **Dati bando** | Ciclo **2026/27**, tutte le scadenze di candidatura **già passate**. Il limite di 5 destinazioni è **Art. 7 c. 4** (non Art. 5) e **non esiste come campo numerico** | `dati-bando.js` |

**Numeri esatti, misurati e divisi per ateneo** (la rev. 2 li etichettava tutti
come Ca' Foscari: sbagliato). ⚠️ **Questa tabella si rigenera, non si cita**:
da V0 esiste `scripts/conta-anomalie-lingua.mjs` ed è quello la fonte di verità.
I valori qui sotto sono la fotografia del **2026-07-28** e invecchiano da soli,
perché la pipeline notturna aggiunge dati ogni notte da un altro computer.

| | Mete | Requisiti lingua | Livelli CEFR fuori scala |
|---|---|---|---|
| **Ca' Foscari** | 392 | 585 | **28** su 17 mete |
| **Sapienza** | **1.595** | 1.861 | **82** su 59 mete |
| **Totale repo** | 1.987 | 2.446 | **110** su 76 mete |

Stringhe composte e segnaposto — **per ateneo, non sommate**: Ca' Foscari
**21 occorrenze composte + 7 segnaposto**, su **15 valori anomali distinti**,
che toccano **25 mete**; Sapienza **67 + 14** su **21 valori**, che toccano
**80 mete**. Totale repo: **88 + 21** su **27 valori**, **105 mete**.

> **Perché i numeri della rev. 6 non tornavano più.** La rev. 6 dava Sapienza a
> 1.839 requisiti e il totale a 109 livelli fuori scala su 75 mete. Non era un
> errore di misura: fra la stesura del piano e l'implementazione di V0 la
> pipeline ha pubblicato nuovi lotti. Quando `conta-anomalie-lingua.mjs`
> restituisce numeri diversi da quelli scritti qui, **si aggiorna questa tabella,
> non lo script**.

> ⚠️ **La Sapienza ha quattro volte le mete di Ca' Foscari.** Il budget
> prestazionale di V3 si misura **sul dataset peggiore**, cioè Sapienza.
>
> ⛔ **Ma «1.600 pin» era sbagliato — l'avevo scritto io nella rev. 3.**
> `mappaClusterizza()` raggruppa per città+paese e poi fonde i gruppi entro una
> soglia che **cresce al restringersi dello schermo**; `mappaRenderPins()` crea
> **un `<button>` per cluster**. Tre grandezze diverse, da non confondere mai più:
>
> | Grandezza | Sapienza |
> |---|---|
> | **Record elaborati** a ogni aggiornamento | ~1.595 |
> | **Gruppi geografici** | ~385 |
> | **Pulsanti nel DOM** | ~50 a 390px · ~166 a 1200px |
>
> **Il collo di bottiglia è probabilmente la clusterizzazione, non il DOM**:
> `out.find()` è una scansione lineare per ogni gruppo e gira su tutti i record a
> ogni filtro. **Ma va confermato misurando** (protocollo in V3), non dedotto
> dalla lettura: è lo stesso errore che ha prodotto il conteggio sbagliato qui sopra.

Ogni conteggio va rigenerato con `scripts/conta-anomalie-lingua.mjs` (da creare
in V0), separando mete / requisiti / occorrenze / valori distinti **per ateneo**.
Mai citato a memoria.

---

## Goal

Trasformare ErasmusWiz da cruscotto a **viaggio guidato all'ingresso e cruscotto
a regime**, costruendo per il pubblico del **bando 2027/28** — che si apre fra
dicembre 2026 e gennaio 2027 — e non per i selezionati del ciclo in corso, che
sono già passati dall'imbuto e non tornano (D13).

Quattro cambiamenti di sostanza:

1. **Un motore di compatibilità che non menta** — oggi sbaglia in **entrambe**
   le direzioni, e la direzione peggiore promette mete inaccessibili.
2. **Un'entrata che seduce**: la scena-mappa esiste ma è compressa in un
   riquadro sotto la piega; va portata a tutta pagina e resa reattiva a **ogni**
   risposta, con tre porte d'ingresso.
3. **Profondità raggiungibile**: gli spazi profondi (Learning Agreement, le 5
   scelte) diventano schermate con un indirizzo condivisibile, **estendendo** il
   router esistente.
4. **Una retention che esista**: oggi non c'è **nessun** modo di richiamare uno
   studente che ha chiuso la scheda.

Il design system v2 (token, componenti, anello di focus, bersagli 44px,
contrasto) **si eredita, non si rifà**.

---

## Il vincolo che governa tutto: il ciclo accademico

**Il prodotto punta al bando 2027/28. I dati in repo sono 2026/27 e tutte le
scadenze di candidatura sono passate.** Il bando nuovo esce fra dicembre e
gennaio: fino ad allora **non esiste** e nessuna fase può inventarlo.

Conseguenza vincolante: **lo «stato pre-bando» diventa uno stato di prima
classe**, non un caso limite. Da agosto a dicembre il sito dice, onestamente:

> *«Il bando 2027/28 non è ancora uscito. Di solito esce fra dicembre e gennaio.
> Intanto puoi esplorare le mete: quelle cambiano poco da un anno all'altro.»*

Il testo parla di **mete**, non di **requisiti**: i requisiti dipendono dal ciclo
(vedi sotto) e non si possono promettere stabili.

E qui lo stato pre-bando **diventa il gancio di retention migliore che abbiamo**:
l'unica data futura certa è *«il bando dovrebbe uscire»*, e quella entra nel
calendario con la sveglia (V5). Chi esplora ad agosto viene richiamato a
dicembre dal proprio telefono. Senza account.

**Due gate distinti, non uno.** La rev. 2 ne aveva uno solo, con una dipendenza
circolare: V3 era bloccata da un gate che si superava con lo stato pre-bando…
costruito in V4.

- **G1 — «nessun contenuto vecchio presentato come attuale».** Precede il
  rilascio di **V3 e V4**. **Misurabile solo con un inventario**, altrimenti è
  un'intenzione: si compila l'elenco dei **campi dipendenti dal ciclo** in
  `dati-bando.js` e `dati-scadenze.js`, si elencano **tutti i punti che li
  rendono a schermo** (home, requisiti, stazioni, tooltip, dettaglio meta,
  calendario `.ics`, guide) e si scrive **un test per ciascuno**. Un testo
  2026/27 rimasto in un tooltip deve far fallire la prova, non passare inosservato.
- **G2 — «dati 2027/28 caricati e validati».** Scatta **all'uscita del bando**
  (dicembre-gennaio) e riapre le schermate che mostrano scadenze come attuali.

**Lo stato pre-bando non basta marcare le scadenze.** `dati-bando.js` contiene
requisiti legati al ciclo — iscrizione 2025/26, scadenza CFU 25/02/2026,
finestra di mobilità 2026/27 — che in pre-bando **non sono validi per candidarsi
al 2027/28**: vanno nascosti o etichettati *«storico 2026/27»*. Dire che «i
requisiti cambiano poco» è un'approssimazione che non si può mettere a schermo.

**Due cicli, non uno.** Un nuovo utente che esplora ad agosto sta preparando il
**2027/28** ma sta consultando dati **2026/27**; un selezionato appartiene al
2026/27. Un solo campo non rappresenta entrambe le cose:

- `cicloPercorso` — il bando a cui l'utente punta (`"2027/28"`);
- `cicloDati` — la provenienza dei dati consultati (`"2026/27"`).

**Due eventi diversi, due matrici diverse.** La rev. 3 ne aveva una sola e
confondeva le cose: per chi già punta al 2027/28, l'arrivo dei dati nuovi **non
deve resettare la `fase`** — sta solo leggendo dati aggiornati.

**Matrice A — `cicloDati` si aggiorna, `cicloPercorso` invariato** (es. a
dicembre escono i dati 2027/28 a un utente che già puntava lì):

| Campo | Azione | Perché |
|---|---|---|
| `fase` | **invariato** | L'utente non ha ricominciato niente: sono i dati ad essersi aggiornati |
| `checklist`, `checklistPost` | **spunte archiviate**; restano **solo** le voci dichiarate `indipendenteDalCiclo: true`, tutte le altre tornano **da riconfermare** | Le voci contengono date e requisiti del bando — `dati-checklist.js:28` porta il 25/02/2026. Se l'`id` sopravvive al cambio bando, **una voce spuntata sembrerebbe fatta anche con la scadenza cambiata**: è una spunta falsa, il difetto peggiore di una checklist |
| `autoverifica` | **da riconfermare** (non cancellata): le voci restano, marcate «verificata sui dati 2026/27» | I requisiti possono essere cambiati |
| `metePreferite`, `schedina` | **conserva**, con le mete sparite marcate **orfane** | Mai cancellate in silenzio |
| `la.bozzePerMeta` | **invariato** | — |

**Matrice B — `cicloPercorso` cambia** (l'utente riparte per il bando successivo):

| Campo | Azione | Perché |
|---|---|---|
| `profilo` | **conserva come proposta da riconfermare** | Livello, dipartimento e lingue **cambiano** fra un anno e l'altro: darli per buoni è un errore silenzioso |
| `fase` | **reset** a `esplorando` | Il nuovo bando riparte dall'inizio |
| `checklist`, `checklistPost`, `autoverifica` | **archivia** in `storico[ciclo]` | Servono a chi rilegge, non al nuovo percorso |
| `metePreferite` | **conserva**, orfane marcate | Le destinazioni cambiano poco |
| `schedina` | **archiviata come `schedinaCiclo[vecchio]`** e declassata a **ordine personale**: non diventa la schedina ufficiale del nuovo ciclo solo perché il limite numerico coincide. Ridiventa ufficiale **dopo G2 e con conferma esplicita** | Mai troncata in silenzio, e mai promossa in silenzio |
| `la.bozzePerMeta` | **conserva**, ma ogni bozza è **timbrata** con `ciclo`, `ateneo` e la fotografia della meta | Una bozza appartiene a **una mobilità precisa**; e una destinazione può cambiare mantenendo lo stesso `id` |
| `onboardingFatto` | **conserva** | L'entrata resta vista una volta sola (D1) |

---

## Approach

Nove fasi più un gate. Ognuna è un insieme di commit autonomo, consegnabile a
Codex da sola, con **data** e **criterio di uscita misurabile**.

**L'ordine di rilascio è quello della colonna «Dipende da», non quello dei mesi**
— i mesi si sovrappongono, le dipendenze no.

| Fase | Dipende da | Quando | Gate |
|---|---|---|---|
| ~~**V0** Lingue e livelli~~ ✅ **FATTA** (`3d0b524`, 2026-07-27, online) | — | — | — |
| **V1** Router esteso | — | agosto 2026 | — |
| **V2** Stepper, 6 tappe, migrazione zaino | V1 | settembre 2026 | — |
| **V4** Home «Adesso» + stato pre-bando | V0, V1, V2 | ottobre 2026 | **G1** |
| **V3** Entrata a tutta pagina | V0, V1, V2, **V4** (lo stato pre-bando serve a superare G1) | ottobre 2026 · 🔴 **online entro il 15 nov** | **G1** |
| **V5** Retention | V4 | novembre 2026 · 🔴 **prima che esca il bando** | — |
| **V6a** Mete: wishlist e riordino | V1, V2 | novembre – dicembre 2026 | — |
| **G2** Dati 2027/28 caricati e validati | cantiere DATI | dicembre 2026 – gennaio 2027 | — |
| **V6b** Schedina **ufficiale** | V6a, **G2** | gennaio 2027 | **G2** |
| **V7** Learning Agreement | V1, V2 (link-guida condizionato all'ateneo attivo) | gennaio – febbraio 2027 | — |
| **V8** Rifiniture | — | continuo | — |

> **V4 prima di V3**, benché V3 abbia il numero più basso: lo stato pre-bando
> nasce in V4 ed è ciò che permette di superare G1. La numerazione segue il
> viaggio dello studente, l'ordine di rilascio segue le dipendenze.
>
> **V6 si spacca in due**: `V6a` (wishlist, riordino, ricerca — nessuna promessa
> ufficiale) esce subito; `V6b` (le 5 da inviare) aspetta **G2**, perché prima
> il limite verrebbe dal bando vecchio.

### V0 — Il motore di compatibilità smette di mentire ✅ FATTA (2026-07-27)

> ✅ **Chiusa e online**, commit `3d0b524`. Costruita da Codex `gpt-5.6-sol` con
> `/codex-build` su questa specifica congelata, revisionata da Claude in due
> round più un subentro del revisore. Cronaca completa in
> `PLAN_REDESIGN_V3-LOG.md` §Act 3.
>
> **Cosa esiste ora che prima non esisteva**: `js/puro.js` (albero `ANY`/`ALL`,
> esito a tre valori, adattatore unico, decisione dell'icona), `package.json` +
> lockfile con `jsdom` fissato a 22, **25 test** sotto `npm run test:unit`,
> `scripts/conta-anomalie-lingua.mjs`. `index.html` e `css/style.css` **non
> toccati**: `puro.js` è emesso da `carica-atenei.js`.
>
> **Due scostamenti dalla specifica, entrambi deliberati e argomentati**: la
> deroga sulla condizione dei corsi (§2-bis) e una guardia aggiunta in revisione
> — *quando una foglia dichiara il livello dello studente, è quella a governare
> la sua lingua* — perché il vocabolario dei selettori di livello è per forza
> incompleto (`master` riconosciuto, lo spagnolo `corsi di grado` no) e la foglia
> del triennale accontentava un magistrale a cui il master chiedeva di più.
>
> **Resta aperto**: **71** `rootPresunta` da revisionare sulla fonte (erano 121;
> 50 chiuse il 2026-07-28 leggendo meglio il dato, vedi §2-bis).

**Prima di tutto**, perché la mappa reattiva di V3 colora gli spilli con questo
calcolo: se mente il calcolo, mentono gli spilli.

**Due difetti, in direzioni opposte. Il secondo è il grave.**

**(A) Stringhe composte → falsi negativi.** `punteggioLinguaSingola()`
(app.js:1552) confronta con `===`. `"Tedesco o Inglese"` dà **0** a chi ha
inglese. Peggio: `calcolaCompatibilita()` (app.js:1586) tratta `requisitoLingua`
**vuoto** come «🟡 verifica la lingua» (meta in gioco) e **pieno** con confronto
esatto — quindi un dato **mancante** è trattato **meglio** di un dato **scritto
male**. 21 occorrenze + 7 segnaposto, 25 mete: **nascoste** allo studente.

**(B) Livelli CEFR non standard → falsi positivi. Trovato da Codex, non da me.**
`SCALA_LINGUE.indexOf("B1/B2")` è `-1`, quindi la differenza risulta **sempre
positiva** e il requisito passa **al punteggio massimo**. Provato:

```
requisito Inglese "B1/B2",  studente Inglese B2 certificato →  50/50
requisito Inglese "B2-C1",  studente Inglese B2 certificato →  50/50
requisito Inglese "C2",     studente Inglese B2 certificato →   0  (corretto)
```

**109 requisiti su 75 mete** (53 `B1/B2`, 16 `B1-B2`, 10 `B1.2`, 8 `B2.1`, 8
`B1.1`, 4 `B2/C1`, 4 `B2.2`, 4 `B2-C1`, …). Il difetto (A) **nasconde** mete
accessibili — fastidioso. Il difetto (B) ne **promette di inaccessibili**, e lo
studente può metterle fra le 5 che invia — **dannoso**.

**Passi.**
1. **Schema dichiarativo, non parsing di stringhe libere.** Una barra **non
   garantisce alternativa**: il parsing indovina, la struttura dichiara. Forma
   completa, da rispettare alla lettera:

   **Albero esplicito `ANY`/`ALL`, con le condizioni sulla singola lingua** — non
   sul gruppo, che è l'errore dell'esempio della rev. 3 (*«per corsi in inglese»*
   non può valere anche per il tedesco):

   ```js
   requisitoLingua: {
     op: "ALL",                       // la radice dice SEMPRE come si combinano
     figli: [
       { op: "ANY", figli: [
           { lingua: "Tedesco", livello: "B2" },
           { lingua: "Inglese", livello: "B2", condizione: "per corsi in inglese" }
       ]},
       { lingua: "Francese", livello: "B1" }
     ],
     fonte: "…", verificatoIl: "2026-06-15"
   }
   ```
   `testoOriginale` si conserva su ogni foglia non convertita: è ciò che permette
   la revisione a mano.

   **Esito a tre valori, mai a due.** Ogni foglia dà `soddisfatto` ·
   `nonSoddisfatto` · `sconosciuto` (lingua `daVerificare` o `livelloAmbiguo`), e
   la combinazione è dichiarata:

   | | contiene `sconosciuto` | esito |
   |---|---|---|
   | `ANY` | e almeno un `soddisfatto` | **soddisfatto** |
   | `ANY` | e nessun `soddisfatto` | **sconosciuto** (mai `nonSoddisfatto`) |
   | `ALL` | e almeno un `nonSoddisfatto` | **nonSoddisfatto** |
   | `ALL` | e nessun `nonSoddisfatto` | **sconosciuto** |

   `sconosciuto` si comporta come **requisito assente**: «🟡 verifica la lingua».
   Mai «🔒», mai «✅».

2. **Un unico adattatore, `requisitiLinguaNormalizzati(meta)`.** Il vecchio array
   ha **almeno 8 consumatori diretti** (menu, filtro, scheda, dettaglio,
   tooltip, punteggio, sintesi, onboarding): se ognuno normalizza per conto suo,
   divergono. Tutti passano da lì; nessuno legge più `meta.requisitoLingua` grezzo.

2-bis. **Contratto di migrazione della radice — riguarda 806 mete su 1.987, il
   41% del catalogo.** L'albero dice come funzionano i dati nuovi; questo dice
   che radice prendono i **vecchi array a più elementi** (195 Ca' Foscari, 611
   Sapienza). Tre regole, in ordine:

   | Caso | Esito | Nota |
   |---|---|---|
   | Un solo requisito | **foglia**, nessuna radice | — |
   | Condizione che **seleziona per livello** (`"per bachelor exchange"` / `"per master exchange"`, triennale/magistrale) | **`quando: { livello: "L" \| "LM" }`** — si valutano **solo le foglie applicabili** | ⛔ **Non è `ANY`.** Groningen (`dati-mete.js:1560`) chiede **Inglese B2 per il bachelor e C1 per il master**: non sono alternative, è lo stesso requisito a due livelli. Con `ANY` un magistrale con B2 soddisferebbe il ramo bachelor e prenderebbe ✅ pur dovendo avere C1. **61 mete** così: 28 CF, 33 Sapienza |
   | Condizione **dipendente dai corsi scelti** (`"per corsi in tedesco"`) | **`soddisfattoCondizionato`** → **può raggiungere il verde** (deroga di Nicola, vedi sotto), con avviso obbligatorio in scheda | Dimostra che una strada **esiste**, non che esista un piano di corsi sufficiente per quello studente — ma è **lo studente** a scegliere i corsi |
   | Lingue diverse, nessuna condizione discriminante | **`rootPresunta: "ANY"`** | Flaggata, contata, **dichiarata a schermo** — e **da sola non produce mai il verde ✅**: serve a ordinare e filtrare |
   | La fonte dichiara davvero che **una qualunque** delle lingue basta, a prescindere da livello e piano di corsi | **`ANY` accertato** | L'unico caso che merita quel nome |
   | Condizioni contraddittorie | **`sconosciuto`** | Revisione umana |

   > **Contestato il rimedio di Codex** (mandare *tutti* gli 806 array a
   > `sconosciuto` in attesa di revisione umana). Due ragioni. **(1) Il dato spesso
   > si disambigua da solo**: la `condizione` dice letteralmente «per corsi in
   > tedesco» / «per corsi in inglese», che è `ANY` accertato, non presunto.
   > **(2) `sconosciuto` su 806 mete manda il 41% del catalogo a «🟡 verifica la
   > lingua»**: non è prudenza, è rendere inutile il prodotto — e non correggerebbe
   > nulla, perché **oggi il comportamento è già `ANY`** (`Math.max` in
   > `punteggioLingua`, app.js:1562). `rootPresunta: "ANY"` **non introduce
   > nessuna bugia nuova**: rende esplicita, visibile e contabile un'assunzione che
   > il codice fa già in silenzio. È il contrario di nasconderla.

   **Nel criterio di uscita di V0** entra il **numero di `rootPresunta` non ancora
   revisionate**, che deve scendere nel tempo: è un debito dichiarato, non un
   problema risolto. **Sceso da 121 a 71 il 2026-07-28** (Ca' Foscari 21→10,
   Sapienza 100→61) senza consultare una sola fonte: il dato si è disambiguato da
   solo, esattamente come questo piano aveva previsto contestando il rimedio di
   Codex. **40 mete** erano `ANY` **accertato** e non presunto, perché la
   `condizione` lo dichiara in chiaro — *«requisito minimo in greco o inglese»*,
   *«in alternativa al certificato di inglese»*, *«richiesta competenza in almeno
   una delle due lingue»* — e **10** dipendono dalla lingua di studio scelta
   (*«per studiare in sloveno»*, *«per moduli in tedesco»*), che è la stessa cosa
   di *«per corsi in tedesco»* detta con altre parole.
   Il riconoscimento **non usa un elenco di lingue scritto nel codice** (regola
   del progetto): confronta la condizione con le lingue delle foglie della meta
   stessa, quindi *«greco o inglese»* vale solo dove greco e inglese sono davvero
   i due requisiti. Le **71 restanti** hanno condizioni che non discriminano
   (*«raccomandato»*, *«requisito generale»*, *«per studenti incoming»*): lì serve
   davvero la scheda ufficiale, ed è lavoro umano.

   > 🔻 **Deroga alla riga «condizione dipendente dai corsi» — decisa da Nicola il
   > 2026-07-27, in produzione dal commit `3d0b524`.** La regola originale
   > (`soddisfattoCondizionato` non è mai verde) è stata **allentata**, e la riga
   > sopra è già riscritta: qui sta il perché, perché la deroga contraddice la
   > lettera della rev. 6 e chi rilegge deve trovare la ragione, non una
   > contraddizione muta.
   >
   > **Misurato prima di decidere.** Con la regola alla lettera, uno studente che
   > possiede *tutte* le 23 lingue del catalogo a C2 certificato vedeva verdi
   > **307 mete su 1.987** (contro ~1.477 prima di V0): non 967 mete perdevano il
   > verde per colpa di `rootPresunta` (che ne conta 121) ma per la condizione sui
   > corsi. Le stringhe dominanti sono `per corsi in inglese` (282),
   > `per corsi in tedesco` (91), `per corsi in francese` (85).
   >
   > **L'argomento di Nicola, accolto.** Chi va all'estero e sceglie corsi in
   > inglese o francese lo fa *perché* ha quella lingua: la condizione **si avvera
   > da sé** per uno studente che quella lingua la possiede, ed è lui a scegliere.
   > Trattarla come incognita aggiunge attrito senza dargli un'informazione su cui
   > possa agire. È anche coerente con l'argomento con cui questo stesso piano
   > aveva respinto il rimedio «806 mete a `sconosciuto`»: *«non è prudenza, è
   > rendere inutile il prodotto»*. Dopo la deroga: **1.247 mete (62,8%)**.
   >
   > **Contropartita obbligatoria, non facoltativa.** La scheda di dettaglio mostra
   > un avviso che **nomina la lingua concreta** e chiede di verificare che
   > l'offerta di corsi basti per il piano di studi (`avvisiRequisitoLingua()`,
   > classe `.banner-stato.stato-riserve`). Senza quell'avviso la deroga non regge:
   > è ciò che la rende una dichiarazione e non una scommessa.
   >
   > **Rischio residuo, misurato e accettato.** **151 mete** hanno come unica
   > strada l'inglese in università che **non insegnano in inglese**, dove «per
   > corsi in inglese» può significare un'offerta sottile e senza ripiego. Sono il
   > 7,6% del catalogo. Le lingue non veicolari sono invece le più sicure: «per
   > corsi in francese» a Grenoble vuol dire il catalogo intero.
   >
   > ⛔ **La deroga NON tocca `rootPresunta`**, che resta esclusa dal verde anche
   > quando compare insieme alla condizione sui corsi: lì non è lo studente a
   > scegliere, è l'ateneo a non aver dichiarato se serva una lingua o tutte.
   > E **non tocca il difetto (B)**: livelli ambigui, barre e segnaposto restano
   > `sconosciuto` → 🟡.

3. **Conversione automatica solo di `X o Y`. La barra va in revisione a mano.**
   La rev. 3 diceva che una barra non garantisce alternativa e poi ne
   autorizzava la conversione automatica: contraddizione, e Codex ha ragione a
   non lasciarla passare. Convertono automaticamente **solo** i separatori
   lessicali espliciti (`X o Y`, `X oppure Y`). **Ogni `/` diventa
   `daVerificare: true`** e finisce nella lista di revisione dati, salvo che la
   fonte dichiari esplicitamente l'alternativa. Sono ~21 occorrenze: è lavoro
   umano di un'ora, non vale una regola che indovina.

4. **Livelli CEFR: ambigui, mai tradotti d'ufficio.** `B1/B2` **non** diventa
   `B2` — può significare *B1 per la triennale, B2 per la magistrale*, e tradurlo
   perde l'informazione. **Neppure `B1.1`/`B2.2` diventano `B1`/`B2`**: appiattire
   `B2.2` su `B2` ricrea esattamente il falso positivo che V0 esiste per
   eliminare. Tutti diventano `livelloAmbiguo: true`, con `testoOriginale` e
   `condizione` conservati, ed esito **`sconosciuto`** finché una fonte non
   documenta la corrispondenza. Prudenza in entrambe le direzioni: mai superato,
   mai bocciato.

5. **Menu lingue del profilo** costruito **dopo** la normalizzazione: le barre
   spariscono dalla tendina da sole.

6. **Italiano: preselezionato nel passo Lingue, in calcolo solo dopo la
   conferma** del passo (D9 rivista — vedi *Key decisions*).
7. **Pipeline** — sui **file attivi**: prompt Gemini incorporato in
   `scripts/gemini-sgrossatura.mjs`, validatore `scripts/valida-output-batch.mjs`
   (rifiuta lingue composte e livelli fuori scala **in ingresso**, così il debito
   smette di crescere), `PROMPT_CODEX_verifica.md`.
   `PROMPT_CODEX_mappatura.md` si marca **obsoleto**, non si modifica.
8. **`scripts/conta-anomalie-lingua.mjs`**: conteggio ripetibile **per ateneo**,
   separando mete / requisiti / occorrenze / valori distinti, più la lista dei
   `daVerificare` da rivedere a mano. Nessun numero più citato a memoria.

**Criterio di uscita — casi «golden», non conteggi.** Una tabella di casi attesi
con il risultato **corretto in entrambe le direzioni**: requisito assente ·
alternativo (`ANY`) · congiunto (`ALL`) · **radice presunta, che non deve mai
produrre il verde** · **stessa lingua a due livelli per bachelor e master** (il caso
Groningen: un magistrale con B2 non è compatibile se il master chiede C1) ·
**due lingue per corsi diversi**, che dà «verifica i corsi» e non ✅ · segnaposto ·
livello non standard
alto e basso · livello superiore al posseduto · non certificato. Ogni caso
asserito, con codice d'uscita non zero se fallisce.

> ⛔ **Il criterio della rev. 1 («nessuna meta scende di categoria») era
> sbagliato ed è ritirato.** Correggere i falsi positivi **deve** far scendere
> di categoria alcune mete. La monotonia misurava ottimismo, non accuratezza.

### V1 — Estendere il router esistente (agosto)

> ⚠️ **Non costruire un router: ce n'è già uno.** Contratto R1.4, app.js:437.

> ⚠️ **V1 non registra nessuna rotta nuova.** La rev. 2 si contraddiceva: un
> passo aggiungeva `#mete/scelte` e `#learning-agreement`, quello dopo diceva che
> nessuna rotta nasce senza la sua schermata. Vince il secondo: **ogni rotta
> nuova viene registrata nella fase che costruisce la sua schermata** (V6, V7).
> V1 prepara solo la *capacità* di averle.

**Passi.**
1. **Conservare gli hash nudi** (`#oggi`, `#mete`, `#percorso`, `#profilo`) e gli
   alias già dichiarati (`#timeline`, `#checklist`, `#idoneita`). Nessun `#/`.
2. Estendere **solo il parser** `destDaHash()` a destinazioni a due livelli e a
   un segmento di **ateneo**, senza registrare rotte che non hanno schermata.
3. **Forma canonica unica con l'ateneo**: `#learning-agreement/<ateneo>`. Vale in
   V1 **e in V7**: una sola forma, mai `#learning-agreement` nudo.
   **Nell'URL solo l'ateneo**: la bozza è stato personale locale e **non viaggia**
   — il link porta allo strumento, non al contenuto di qualcun altro, e
   l'interfaccia non deve promettere il contrario.

   > ⚠️ **Non basta estendere il parser di `app.js`.** `ateneoAttivo()`
   > (`js/carica-atenei.js:44`) sceglie il dataset leggendo **`localStorage`**,
   > **prima** che `destDaHash()` esista: a freddo, `#learning-agreement/sapienza`
   > caricherebbe comunque Ca' Foscari. **L'ateneo dell'hash va letto e validato
   > dentro `carica-atenei.js`, prima del caricamento dati** — contro
   > `ATENEI_REGISTRO`, con ripiego sul predefinito se sconosciuto o non
   > disponibile. È il primo passo di V1, non un dettaglio di V7.
4. **Gestione del fuoco, obbligatoria e specificata per rotta** (anche per quelle
   esistenti): dove va il fuoco, quale titolo viene annunciato, cosa fa lo
   scroll, come si ripristina tornando indietro. Oggi non è definita da nessuna
   parte → **scritta il 2026-07-28**, qui sotto: *Il contratto del fuoco*.
5. Chi arriva da un link esterno **atterra sul contenuto** (D3).
6. **Le guide restano pagine HTML vere** (`guide/*.html`): un hash non produce
   anteprima social né indicizzazione, e le guide sono l'esca della distribuzione.

**Decisione del 2026-07-28 — l'ateneo dell'hash NON si persiste.**
`carica-atenei.js` legge l'ateneo dall'hash e carica **quel** dataset, ma **non
scrive `erasmuswiz_ateneo`**. Un link ricevuto su WhatsApp non deve ri-domiciliare
in silenzio uno studente che il suo ateneo l'aveva già scelto: la forma canonica
esiste per portare *allo strumento*, non per riassegnare l'utente. Conseguenza
dichiarata e accettata: **per quel solo caricamento `ATENEO_ATTIVO` può differire
da `localStorage`**; è sicuro perché gli zaini sono separati per ateneo dalla
R1.3, quindi nulla si mescola e un ricaricamento senza hash riporta lo studente
a casa propria. Il cambio ateneo vero resta l'unico che scrive
(`app.js:307`, `app.js:4076`).

#### Il contratto del fuoco

Regole, valide per **ogni** navigazione che passa da `vaiA()`:

- **F1 — il fuoco non resta mai su `<body>`.** Cambiare schermata senza spostare
  il fuoco lascia la tastiera all'inizio del documento e lo screen reader muto:
  è lo stesso difetto già sanato sui chip dei filtri il 26/07.
- **F2 — bersaglio: la sezione di destinazione**, `<section id="tab-…">`, resa
  raggiungibile col solo `tabindex="-1"` e nominata con `aria-labelledby` sul
  titolo **che esiste già** (`index.html:51/90` per oggi, `:181`, `:233`, `:359`).
  Nessun nodo nuovo, nessuna classe nuova → **diff visivo nullo per costruzione**.
- **F3 — nessun anello che compare dal nulla.** L'anello di focus del design
  system v2 è `:focus-visible` (`css/style.css:196`), che **non** scatta su un
  `focus()` programmatico: va **asserito**, non dato per scontato.
- **F4 — `focus({ preventScroll: true })` prima dello scroll.** Il fuoco non
  muove la pagina; a muoverla è solo `vaiA()`, e in un momento solo.
- **F5 — lo scroll rispetta `prefers-reduced-motion`.** `app.js:531` fa oggi
  `behavior: "smooth"` **sempre**: difetto esistente, si chiude qui (`"auto"`
  quando la preferenza è `reduce`).
- **F6 — solo quando il tab cambia davvero.** Ri-cliccare la voce attiva non
  sposta né fuoco né pagina, esattamente come già non sporca la cronologia.
- **F7 — Indietro/Avanti: stesso contratto** della navigazione voluta.
  **La posizione di scorrimento non si ripristina** — oggi non è salvata e in V1
  non lo diventa: conseguenza dichiarata, non incidente.
- **F8 — il `<title>` non si tocca in V1.** Nessuna rotta nuova è registrata e il
  vincolo §10.8 vieta cambi SEO come effetto collaterale. Torna in V6/V7, con le
  schermate che avranno un titolo proprio. L'annuncio, intanto, è il nome della
  sezione che riceve il fuoco: **niente `aria-live`**, che direbbe la stessa cosa
  due volte.
- **F9 — chi possiede il fuoco lo restituisce prima.** `chiudiDrawer()`
  (`app.js:614`) riporta il fuoco al controllo che aveva aperto il drawer: una
  rotta lanciata da dentro il drawer deve chiudere **prima** e navigare **dopo**,
  o il drawer si riprende il fuoco appena `vaiA()` l'ha spostato. Tutti i punti
  di chiamata vanno censiti, non solo sistemati dove si vede.

| Rotta | Il fuoco va su | Nome annunciato | Scroll |
|---|---|---|---|
| `#oggi` (e hash vuoto) | `#tab-oggi` | il saluto/claim già presente | in cima |
| `#mete` | `#tab-mete` | «Mete disponibili» | in cima |
| `#percorso` | `#tab-percorso` | «Il tuo percorso» | in cima |
| `#profilo` | `#tab-profilo` | «Il tuo profilo» | in cima |
| alias (`#timeline`, `#checklist`, `#idoneita`) | come la rotta canonica | idem | in cima |
| hash sconosciuto | come `#oggi` | idem | in cima, **senza** scroll animato |
| rotta a due livelli non ancora registrata | come `#oggi` | idem | come sopra |

**Criterio di uscita.** Ogni hash del contratto raggiungibile a freddo (finestra
nuova, `localStorage` vuoto) senza errori; indietro/avanti coerenti su 10
passaggi; per ogni rotta, destinazione del fuoco verificata; **diff visivo nullo**
rispetto alla baseline salvata (vedi *Verifiche*).

**Come si prova — deciso da Nicola il 2026-07-28: V1 accende Playwright.**
`npm run test:ui` smette di essere un segnaposto (`package.json:8`): chromium è
installato in locale. Le prove che V1 deve lasciare in eredità a V2 e V3:
1. **A freddo**, `localStorage` vuoto, un test per ogni hash del contratto + un
   alias + un hash sconosciuto + `#learning-agreement/sapienza`: nessun errore di
   console, la sezione attesa è visibile, `document.activeElement` è la sezione.
2. **`#learning-agreement/sapienza` a freddo carica il dataset Sapienza** e
   **`localStorage.erasmuswiz_ateneo` resta invariato** (la decisione qui sopra).
3. **10 passaggi** di navigazione, poi 10 Indietro e 10 Avanti: schermata, hash e
   fuoco coerenti a ogni passo.
4. **Nessun anello visibile** dopo una navigazione col mouse (`:focus-visible`
   falso sulla sezione), anello presente sulla prima fermata di Tab dopo.
5. **`prefers-reduced-motion: reduce`**: nessuno scorrimento animato.
6. Le funzioni pure del parser esteso restano provate da `npm run test:unit`.

### V2 — Stepper a 6 tappe, tre porte, migrazione (settembre)

**Sei tappe, non cinque.** La rev. 1 faceva sparire la scelta delle mete dal
percorso — un errore, perché è metà del viaggio (e in codice esiste già come
`stazione-mete-ponte`, index.html:260):

**Requisiti → Mete e le 5 scelte → Candidatura e scadenze → Esito → Learning
Agreement → Zaino/partenza**

**Le tre porte**, rimappate sulle 6 tappe (la rev. 2 aveva rinumerato le tappe
dimenticando le porte — le lasciava puntate sulla numerazione vecchia):

| Porta | Atterra su | |
|---|---|---|
| `esplorando` | **Tappa 1 — Requisiti** | |
| `in-attesa` | **Tappa 4 — Esito** | ha già fatto domanda: candidatura e scadenze sono alle spalle |
| `selezionato` | **la prima azione post-selezione incompleta** | calcolata, non fissata |

> ⛔ **Correzione di Codex accolta.** `CHECKLIST_POST` impone
> **accettazione → nomination → application → *poi* Learning Agreement**. Mandare
> ogni selezionato dritto al LA gli fa saltare l'accettazione, che ha una
> scadenza perentoria. **La prima azione post-selezione si calcola dalla
> checklist reale**, non si sceglie a priori.

#### Censimento di `fase` — fatto il 2026-07-28, prima di scrivere codice

> ⛔ **I numeri di riga della rev. 6 (757, 2419, 2425, 2434) sono MORTI**: V1 ha
> spostato tutto. Questa è la mappa misurata sul codice online (`16b3e53`).
> Va rifatta se V2 non parte da lì.

| Riga | Cosa fa | Ruolo |
|---|---|---|
| `app.js:28` | `fase: "domanda"` nel template dello zaino | default da cambiare |
| `app.js:40` | `if (!z.fase) z.fase = "domanda"` | **campo assente** → fixture |
| `app.js:46` | `zainoCelebrato = (z.fase === "selezionato")` | lettura |
| `app.js:103` | `p.fase && p.fase !== "domanda"` — rileva lo zaino non vuoto | **si rompe se `"domanda"` sparisce**: un utente legacy verrebbe letto come nuovo |
| `app.js:108` | `z.fase = p.fase \|\| "domanda"` — piatto → contenitore | migrazione esistente |
| `app.js:151` | `fase: legacy.fase` — adattatore legacy | migrazione esistente |
| `app.js:798` | badge nascosto se `!== "selezionato"` | lettura |
| `app.js:835` | `if (ZAINO.fase === "selezionato") return "partenza"` | tappa corrente |
| `app.js:2531` | `aggiornaBottoniFase()`, stato dei due bottoni | lettura |
| `app.js:2537` · `app.js:2546` | **gli unici due writer espliciti** | scrittura |
| `app.js:1265` | `getElementById("fase-selezionato")?.click()` | **writer nascosto**: pilota la fase con un click sintetico. Con tre stati non basta più |
| `index.html:307-309` | `.toggle-fase-wrap` con **due** bottoni | UI da 2 a 3 stati |

> ⛔⛔ **`voce.fase` NON è `ZAINO.fase`.** In `app.js:2501-2508` e in tutti i
> `dati-postselezione.js` il campo `fase` è **l'etichetta di gruppo** della
> checklist (`"Accettazione"`, `"Learning Agreement"`, `"Rientro"`…). Un
> censimento fatto a `grep fase` — cioè quello che farebbe un esecutore
> automatico — le mescola e **corrompe i dati**. Nessuna trasformazione
> meccanica su `fase` può essere applicata a quei file.

**Conseguenza di progetto: la terza porta non è solo un valore nuovo.** L'UI
dell'esito è un **toggle binario** (`index.html:307-309`), `aggiornaBottoniFase()`
ragiona su un booleano (`const selezionato = …`), e `app.js:1265` cambia stato
simulando un click su uno dei due bottoni. Aggiungere `in-attesa` richiede tutti
e tre gli interventi, non solo `normalizzaZaino()`.

**Migrazione dello zaino — esplicita, non un incremento di versione.**
1. Contenitore **v2 → v3** dichiarato e **idempotente**. `VERSIONE_ZAINO` non si
   incrementa e basta: la migrazione attuale rischia di trattare il contenitore
   v2 come uno zaino piatto.
2. `fase`: `"domanda"` → `esplorando`, `"selezionato"` → `selezionato`, più il
   nuovo `in-attesa`. **Tutti i rami del censimento qui sopra vanno aggiornati**:
   cambiare solo `normalizzaZaino()` lascia comportamento incoerente. In
   particolare `app.js:103` va riscritto **prima** di togliere `"domanda"`, o la
   rilevazione dello zaino legacy si inverte in silenzio.
3. **Identità di ciclo doppia** — `cicloPercorso` e `cicloDati` (vedi *Il
   vincolo che governa tutto*) — con la matrice reset / archivia / conserva
   applicata campo per campo. Senza, spunte e preferenze del ciclo vecchio
   contaminano il nuovo.
4. **Fixture di prova — input legacy elencati per nome**, non «3 fasi vecchie»
   (i valori vecchi sono **due**): `fase:"domanda"` · `fase:"selezionato"` ·
   **campo `fase` assente** · **valore sconosciuto** · **contenitore v2
   parzialmente corrotto** · zaino **piatto pre-contenitore** · con e senza ramo
   `la`. Per entrambi gli atenei. La migrazione dev'essere **idempotente**:
   applicarla due volte dà lo stesso risultato.

**Contenuti — scritti il 2026-07-28, PRIMA del codice (decisione di Nicola).**
La §V2 della rev. 6 ammetteva che la porta `in-attesa` non avesse contenuti e poi
ne pianificava comunque la costruzione. Il debito è stato saldato prima:

| Cosa | Dov'è ora | Note |
|---|---|---|
| Porta `in-attesa` | **`js/atenei/<ateneo>/dati-attesa.js`**, globale `ATTESA_INFO` | `titolo`, `sottotitolo`, `quantoDura`, `tappe[]`, `intanto[]`, `attenzione[]`, `esempioCiclo`, `fonte` |
| Checklist Sapienza | `dati-postselezione.js` — **da 5 provvisorie a 31 validate** | fonte: *Informazioni generali studenti Erasmus outgoing A.A. 2025/26*, Settore Erasmus |
| Capitoli dello zaino Sapienza | **risolti** | le 5 voci vecchie non avevano `gruppoZaino`: cadevano tutte nel fallback «Prima» (`app.js:2486`) e i capitoli «Durante» e «Dopo» restavano vuoti |

`ATTESA_INFO` è già caricato per entrambi gli atenei (`registro.js` → `contorno`,
`carica-atenei.js` → `attesa`) e **non è ancora consumato da nessuno**: V2 lo
legge, non lo inventa.

> ⚠️ **Tre asimmetrie che V2 eredita e non deve appiattire.**
> **(1)** Alla Sapienza la graduatoria esce in **due tempi** (provvisoria →
> definitiva) e c'è una **seconda finestra** di candidatura; a Ca' Foscari la
> graduatoria è una sola, con lista di **riserve** e **ripescaggi**. La porta
> `in-attesa` racconta procedure diverse per ateneo: è per questo che
> `ATTESA_INFO` è per-ateneo e non condiviso.
> **(2)** La finestra per accettare la sede alla Sapienza **la fissa la Facoltà**
> (Economia 5 giorni, CoRIS 7): nessun contenuto scrive un numero unico.
> **(3)** Ca' Foscari ha ora **20** voci post-selezione contro le **31** della
> Sapienza: l'asimmetria si è **invertita** e le 20 meritano una rilettura
> sull'originale, non una copia da qui.

**Criterio di uscita.** Le 6 tappe navigabili da tocco e tastiera; fixture di
migrazione verdi per **ogni input legacy elencato sopra** (2 valori vecchi +
assente + sconosciuto + contenitore corrotto + zaino piatto) × 2 atenei × con/senza
`la`); uno zaino `selezionato` con accettazione non spuntata apre
sull'**accettazione**, non sul LA; la porta `in-attesa` mostra `ATTESA_INFO`
dell'ateneo attivo e **su nessun ateneo mostra una sezione vuota**; le suite
restano verdi (oggi **33/33** unit, **15/15** UI) e il **diff visivo resta nullo**
sulle sei invarianti DOM.

**Rischio.** ALTO — la fase che tocca più `js/app.js` e `index.html`.

> 🔻 **Se V2 si delega con `/codex-build`, questi divieti vanno in cima al
> prompt.** Il primo tentativo su V1 ha riconosciuto la procedura stessa, ha
> lanciato copie ricorsive di sé sullo stesso albero e ha poi terminato 13
> processi, il proprio compreso (cronaca in `PLAN_REDESIGN_V3-LOG.md` §Act 3):
> **non invocare `codex` né alcuna procedura di delega**; **non terminare
> processi** (`Stop-Process`, `kill`, `taskkill`); **non toccare `.git/`**;
> **nessun processo persistente** (server, watcher, task pianificati) — l'unico
> server ammesso è quello avviato e fermato da `npm run test:ui`.
> E due divieti specifici di V2: **non applicare trasformazioni meccaniche al
> campo `fase`** senza distinguere `ZAINO.fase` da `voce.fase`; **non riscrivere
> i file dati** — i contenuti sono già validati sulle fonti e non vanno «migliorati».

### V3 — Entrata a tutta pagina 🔴 online entro il 15 novembre (ottobre)

> **SPEC CONGELATA il 2026-07-29**, su `9c9fc57`. Le quattro decisioni che la
> rev. 6 lasciava aperte — cambio ateneo, budget prestazionale, accessibilità
> della mappa, smistamento finale — sono **prese qui**: D‑V3.1… D‑V3.4, ognuna
> decisa da Nicola **dopo misura sul codice**. Da qui in giù non ci sono
> domande: è delegabile a `/codex-build`.
>
> Ancoraggi: **frammenti di codice, non numeri di riga** — §V2 ha già citato
> righe morte una volta e §V4 ha ripetuto la regola. I numeri fra parentesi
> valgono al 2026‑07‑29 e servono solo a ritrovare il posto.
>
> ⚠️ **La scena esiste** (`#home-benvenuto`, `initOnboarding`, `benvScena`,
> `benvPassoAteneo` → `benvPassoFacolta` → `benvPassoLivello` →
> `benvPassoLingue` → `completaOnboarding`). Questa fase è una **lista di
> differenze**, non una seconda implementazione parallela.

#### §0. La correzione misurata che cambia il progetto

⛔ **Il collo di bottiglia dichiarato da §V3 non esiste ai numeri veri.** La
rev. 6 dava per assodato che `mappaClusterizza()` fosse il punto lento e
ordinava tre rimedi. **Misurato il 2026‑07‑29** con banco Chromium headless,
viewport 390×844, `Emulation.setCPUThrottlingRate(4)`, dataset **Sapienza
integrale (1.595 record, nessun filtro)**, 5 giri, valore **peggiore**:

| Grandezza | Misura |
|---|---|
| `mappaClusterizza()` sull'intero dataset | **12,3 ms** (giri: 6,9 · 8,9 · 12,3 · 5,0 · 7,4) |
| `mappaRenderPins()` — distrugge e ricrea tutti i pin | **13,8 ms** (13,7 · 7,2 · 13,8 · 9,2 · 11,0) |
| Long task > 50 ms osservati (`PerformanceObserver`) | **nessuno** |

**Le tre grandezze del piano sono invece confermate**, e vanno lette così:

| Ateneo | Record | Senza coordinate | Fuori inquadratura | Città uniche | Pulsanti a 390px |
|---|---|---|---|---|---|
| **Sapienza** | **1.595** | 8 | 33 | **385** | **39** |
| Ca' Foscari | 392 | 2 | 6 | 192 | 37 |

> Il piano diceva «~50 pulsanti»: sono **39** misurati nel browser a 390×844.
> Un calcolo a tavolino con larghezza resa 358px ne dà 47 — la differenza è la
> larghezza **effettiva** del contenitore, che entra nella soglia di fusione
> (`soglia = 30 * viewBoxW / max(cont.clientWidth, 280)`). **Il numero buono è
> quello misurato nel browser**, perché è lì che `clientWidth` è vero.

⛔ **E il caso peggiore dell'entrata non è 1.595.** Al passo P3 la mappa mostra
le mete **del dipartimento scelto**: il dipartimento più grande della Sapienza è
*Lettere e Filosofia*, **424 record → 166 città → 40 pulsanti**. I 1.595 record
non filtrati si raggruppano solo nel tab **Mete** senza filtri attivi. Chi
progetta l'entrata sul numero 1.595 sta ottimizzando una schermata che non
esiste.

**Conseguenza vincolante:** le ottimizzazioni di §5 **non sono un rimedio a un
difetto misurato** — sono una scelta di prudenza di Nicola (vedi §5). Vanno
quindi trattate come **rifattorizzazione a comportamento invariato**, non come
correzione: il banco non deve solo restare sotto soglia, deve dimostrare che
l'esito è **identico** a prima.

#### §1. D‑V3.1 — Cambio ateneo: **si tiene il `location.reload()`**, e lo stato dell'entrata vive in `sessionStorage`

**Deciso: reload.** Il caricamento asincrono del solo ateneo scelto è escluso, e
non per prudenza generica ma per un vincolo misurato: `js/carica-atenei.js`
emette i dati con **`document.write` a tempo di parsing** — è scritto nel suo
commento — perché `app.js` legge i globali **già pronti** (`let CONTENITORE =
caricaContenitore()` gira subito). Caricare in asincrono significa riscrivere
quel contratto e il modo in cui `app.js` nasce. Costo sproporzionato per una
scelta che lo studente fa **una volta sola in tutta la vita dell'utente**.

**Il meccanismo esiste già e va esteso, non inventato**: `benvScegliAteneo()`
scrive `sessionStorage.setItem(CHIAVE_ONBOARDING_STEP, "2")` e `initOnboarding()`
lo rilegge, lo cancella e riprende da `benvPassoFacolta()`. Oggi trasporta **un
numero**; con la macchina a 4 passi deve trasportare **le risposte già date**,
perché **P1 precede P2**.

**Dove sopravvive lo stato — deciso, ed è una sola casella:**

| Candidato | Verdetto |
|---|---|
| **`sessionStorage`, una chiave sola, un oggetto JSON** | ✅ **scelto** |
| Lo zaino (`localStorage`) | ⛔ **vietato** — vedi la trappola qui sotto |
| L'hash | ⛔ **vietato** — l'hash è il **contratto pubblico del router** (V1, `vaiA()` e la tabella degli alias): un'entrata a metà non è un indirizzo condivisibile |

⛔ **Trappola misurata, e la ragione vera per cui lo zaino non va bene.** Lo
zaino è **per‑ateneo**: `CONTENITORE.zaini[<ateneo>]`. Una risposta di P1
scritta nello zaino **prima** che l'ateneo sia scelto finisce nello zaino
**sbagliato**, e dopo il reload lo studente non la ritrova. È la stessa forma
del difetto dei due scrittori di `profilo` chiuso in D‑V4.4, un passo più a
monte.

**Regola vincolante, che rende la ripresa verificabile:**

> **Tutte le risposte dell'entrata restano transitorie fino a
> `completaOnboarding()`, che le scrive UNA volta sola nello zaino
> dell'ateneo scelto.** È già il comportamento di dipartimento e livello
> (`window._onboardingDipartimento`, `window._onboardingArea`): V3 lo estende
> alla porta d'ingresso e lo rende esplicito invece che casuale.

**Forma della chiave** (nome vincolante, sostituisce `CHIAVE_ONBOARDING_STEP`
che oggi porta un numero — la vecchia chiave si **rimuove**, non si affianca):

```
sessionStorage["ew-onboarding-ripresa"] = JSON.stringify({
  passo: 2 | 3 | 4,      // il passo da cui riprendere
  porta: "esplorando" | "in-attesa" | "selezionato",   // risposta di P1
  dipartimento: string | null,
  livello: "L" | "LM" | null
})
```

- Si scrive **solo** al cambio ateneo, subito prima di `location.reload()`.
- `initOnboarding()` la legge, la **cancella subito** (come oggi) e riparte dal
  passo dichiarato **con le risposte precedenti già in memoria**.
- **JSON illeggibile, chiave assente, `passo` fuori da {2,3,4}, `porta` non fra
  i tre valori di `FASI_VIAGGIO`** → si ricomincia dalla scena, senza errori a
  schermo. Un dato corrotto non deve produrre un'entrata a metà.
- `sessionStorage` non disponibile (navigazione privata restrittiva): il
  `try/catch` c'è già; se la scrittura fallisce **si ricarica lo stesso** e si
  riparte dalla scena. ⛔ Non si blocca il cambio ateneo per salvare un
  progresso di tre clic.

**Perché muore con la scheda, ed è giusto**: un'entrata risposta a metà non è un
fatto sullo studente, è un fatto su **questa** visita.

#### §2. D‑V3.2 — Il budget si misura **in sessione**; il telefono resta conferma, non cancello

**Deciso: banco riproducibile, committato nel repo.** Il protocollo della rev. 6
chiedeva un Android reale sotto i 250 € con modello e versioni nel referto:
è una misura che **solo Nicola può fare**, e delegarla a `/codex-build`
significa delegare un criterio che l'esecutore non può soddisfare — cioè,
di fatto, non avere criterio.

**Il banco** — `test/perf-mappa.cjs`, avviato da **`npm run test:perf`** (voce
nuova in `package.json`; ⛔ `test:a11y` e `test:visual` **restano i segnaposto
che sono**: dichiarati, non riempiti di nascosto e non silenziosamente rimossi):

| Voce | Valore vincolante |
|---|---|
| Motore | Chromium di `@playwright/test` **già in `devDependencies`**, headless |
| Server | `test/server-statico.cjs`, **avviato e fermato dal banco stesso** |
| Viewport | **390×844** |
| CPU | **`Emulation.setCPUThrottlingRate(4)`** via CDP |
| Dataset | **Sapienza integrale**, nessun filtro (`localStorage.erasmuswiz_ateneo = "sapienza"` in `addInitScript`) |
| Prove | **5 esecuzioni**, si giudica il **valore peggiore** (mai la media) |
| Si stampano | **le tre grandezze separate**: record elaborati · gruppi geografici · pulsanti creati — più i tempi giro per giro |

**Soglie di uscita, ancorate alla misura di §0 e non a un numero desiderato:**

| Misura | Soglia | Margine sulla misura di oggi |
|---|---|---|
| `mappaClusterizza()`, peggiore di 5 | **< 50 ms** | oggi 12,3 ms |
| `mappaRenderPins()`, peggiore di 5 | **< 50 ms** | oggi 13,8 ms |
| Long task osservati durante un render | **zero** | oggi zero |

⚠️ **Onestà su cosa misura il banco**: un desktop rallentato 4× **non è** un
Android da 250 €. Il banco è un **proxy riproducibile**, ed è ciò che rende il
criterio delegabile e ripetibile a ogni commit. La prova sul telefono vero
**resta una verifica di Nicola, facoltativa e successiva**: se sfora, si apre
una correzione dedicata, **non** si riapre V3.

⛔ Il referto del banco (le tre grandezze + i tempi dei 5 giri, prima e dopo le
ottimizzazioni di §5) va **incollato nel commit o nel LOG**. Un banco che gira e
non lascia traccia non è una prova.

#### §3. D‑V3.3 — Accessibilità della mappa: **i pin escono dall'ordine di Tab** durante l'entrata

**Deciso da Nicola: strada A.** Le due strade della rev. 6 erano due interfacce
diverse e la spec ne sceglie una.

**Durante l'entrata** (e **solo** durante l'entrata):

- I pin restano `<button>` reali ma **fuori dall'ordine di Tab**:
  `tabindex="-1"` sul pulsante e `aria-hidden="true"` sul **layer**
  (`.mappa-pin-layer`), così lo screen reader non legge decine di voci che non
  servono a rispondere. Restano cliccabili col dito e col mouse: l'anteprima al
  tocco (`benvPassoLivello`: *«Tocca un puntino per l'anteprima»*) **non si
  perde**.
- La navigazione da tastiera passa **solo** dai pulsanti‑risposta sotto la mappa
  (`#benvenuto-scelte`), che già esistono e sono già ridondanti rispetto ai pin
  (`benvPassoAteneo` li costruisce entrambi).
- **Il conteggio si annuncia**: `#benvenuto-scelte` ha già `aria-live="polite"`.
  Il numero di mete accese entra **nel testo di quel contenitore** a ogni
  cambio di filtro. ⛔ Non si aggiunge una seconda regione `aria-live`: due
  regioni che parlano insieme si accavallano.
- **Il colore non basta**: la compatibilità sui pin si comunica **anche con
  forma o testo**, con **legenda** visibile accanto alla mappa. Un pin
  incompatibile non può distinguersi *solo* per tinta.

**Nel tab Mete non cambia nulla**: lì esplorare *è* il lavoro, i pin restano
nell'ordine di Tab con il loro `aria-label` attuale. La differenza si ottiene
con un `opts` esplicito passato a `mappaRenderPins` (es. `opts.fuoriTab`), ⛔
**non** con un `if` che indovina il contenitore.

`prefers-reduced-motion` spegne comparsa e transizioni **senza perdere
informazione**: i pin compaiono, semplicemente non si animano. La regola globale
esiste già (`css/style.css`, blocco `:is(.nav-bottom, …, .modo-scena)`).

#### §4. D‑V3.4 — Smistamento finale: `wizardMete` **è cablato**, l'entrata lo chiude

**Misurato, e la risposta è diversa da quella temuta.** `wizardMete` **non** è un
campo dichiarato e mai letto come lo erano `cicloDati` e `cicloPercorso` prima
di V4. È **cablato per intero**:

| Punto | Cosa fa |
|---|---|
| `puro.js` — `wizardMete: false` nel template + normalizzazione a booleano | il campo nasce e si difende dai valori sporchi |
| `renderWizardMete()` — `mostra = !ZAINO.wizardMete && (metePreferite vuote \|\| _wizardMeteForzato)` | la regola di comparsa |
| `chiudiWizardMete()` — mette `true` e salva | la risposta è definitiva |
| `initWizardMete()` — «Sì» → ricerca · «No» → mappa/filtri · «Salta» → chiude | i tre esiti |
| `renderPreferite()` — «✨ Ripensa le rotte» rimette `false` e forza | il rilancio **deliberato** |

**Quindi V3 non costruisce niente di nuovo: sposta la domanda.** La schermata
**E** dell'entrata pone la domanda **una volta**, e `completaOnboarding()`
scrive **`ZAINO.wizardMete = true`** insieme al profilo. Da lì in poi il
riquadro `#wizard-mete` del tab Mete **non compare mai**, perché la sua
condizione è già falsa. **Il «mai più» del piano si ottiene con una riga**, non
con una macchina nuova.

- **Il rilancio «Ripensa le rotte» resta**: è deliberato, lo chiede lo studente,
  e non è la ricomparsa che il piano vuole evitare.
- I tre esiti di `initWizardMete()` **si riusano**, non si riscrivono: la
  schermata E porta agli stessi tre posti (ricerca · mappa e filtri · niente).
  ⛔ Una seconda copia dei tre esiti è esattamente l'errore delle tre finestre
  attesa divergenti chiuso da V4.
- ⚠️ **Caso limite dichiarato, non nascosto**: chi cambia ateneo dopo aver
  finito ottiene uno zaino nuovo per quell'ateneo, quindi `onboardingFatto` e
  `wizardMete` tornano `false` e **rifà l'entrata**. È il comportamento attuale
  (lo zaino è per‑ateneo) ed è coerente: le mete sono altre. Va **testato**, non
  scoperto in produzione.

#### §5. Le tre ottimizzazioni: **dentro**, per decisione di Nicola — e come si provano innocue

**Deciso da Nicola contro la raccomandazione di Claude**, e messo per iscritto
qui perché sia una scelta e non una svista: §0 mostra che **non c'è niente da
correggere**, e la raccomandazione era di lasciarle fuori e tenerle come rimedio
se il banco avesse sforato. Nicola le vuole **dentro comunque**, per margine sui
telefoni davvero lenti.

**Conseguenza sul modo di lavorare, e non è negoziabile:** poiché non correggono
un difetto, **valgono solo se non cambiano niente di ciò che si vede**. Il
motore è **condiviso con le Mete** — cambiarlo per l'entrata cambia le Mete.

**Le tre, nell'ordine, con il perimetro esatto:**

1. **Memoizzare il raggruppamento per città.** Il passo 1 di
   `mappaClusterizza()` (la `Map` per `citta|paese`) **non dipende dalla
   larghezza**: si calcola **una volta per dataset** e si riusa. Chiave della
   cache: l'**identità dell'array `mete` ricevuto** più la sua lunghezza; ⛔ mai
   una chiave globale «l'ateneo attivo», perché lo stesso motore riceve elenchi
   **filtrati** diversi a ogni ricerca nelle Mete. Solo il passo 2 (la fusione a
   soglia) resta dipendente da `cont.clientWidth`.
2. **Bucket spaziali al posto di `out.find()` lineare.** Griglia di celle di
   lato `soglia`; si confrontano solo le celle adiacenti. ⛔ **La fusione deve
   restare quella di oggi anche nell'ordine**: `perCitta` è una `Map` e
   l'ordine d'inserimento decide quale gruppo assorbe quale. Cambiando ordine
   cambiano centro del pin, `aria-label` e contenuto del cluster — cioè cambia
   il prodotto, in silenzio.
3. **Aggiornamento incrementale del DOM.** Al posto di `layer.innerHTML = ""`,
   si riusa il pulsante esistente quando il gruppo c'è ancora (chiave stabile
   `citta|paese` del gruppo capofila), si aggiornano posizione, classi e
   `aria-label`, si rimuovono solo i superflui. ⛔ **`benvPassoAteneo()` svuota
   il layer per conto suo** per disegnare i 2 pin‑ateneo: quel percorso non
   passa da `mappaRenderPins` e non deve essere «unificato» per simmetria.

**Le invarianti delle Mete che non possono cambiare** — sono il contratto, e il
banco/le prove le verificano **prima e dopo**:

| # | Invariante | Ancoraggio |
|---|---|---|
| I1 | **Stesso numero di pin** e stessi centri (±0,1%) per lo stesso elenco e la stessa larghezza | `mappaClusterizza` |
| I2 | **Stessi `aria-label`**, parola per parola, nelle due forme (singola / *«N mete vicino a …»*) | `mappaRenderPins` |
| I3 | Stesse classi: `mappa-pin` · `mappa-pin-cluster` · `evidenzia` · `mappa-pin-stella` | `opts.stellate`, `opts.evidenzia` |
| I4 | Clic: 1 meta → `apriDettaglioMeta` · N mete → `apriListaCluster` | i due rami del `click` |
| I5 | Tooltip su `mouseenter`/`focus` **solo** desktop con mouse, e **solo** per i pin figli del suo contenitore | `mappaMostraTooltip` |
| I6 | **Nota di copertura invariata**: testo, conteggi, `hidden` | `mappaNotaCopertura` |
| I7 | Il **ri‑cluster al resize** continua a funzionare per **entrambe** le mappe | il `resize` con `requestAnimationFrame` |
| I8 | La stellina segue `ZAINO.metePreferite` | `renderMappaMete` |

⛔ **Divieto di prodotto**: se una qualsiasi invariante non si può conservare, la
tre‑ottimizzazioni **si ferma lì e si dichiara** — non si «migliora» la mappa
delle Mete dentro la fase dell'entrata. Il filtraggio **non si taglia mai**: è
il motivo per cui l'entrata regge 4 passi.

#### §6. La macchina a stati e le differenze a schermo

**Una sola definizione, numerata** (la rev. 1 ne dava tre in conflitto):

| Passo | Chiede | Obbligatorio | La mappa | Ancoraggio |
|---|---|---|---|---|
| **P1** | **Porta d'ingresso** (3 opzioni) | **sì** | ferma | i tre valori di `FASI_VIAGGIO` in `puro.js`, gli stessi testi dei tre `.toggle-fase-btn` |
| **P2** | Ateneo | **sì** | si centra sull'ateneo | `benvPassoAteneo` |
| **P3** | Dipartimento **e** livello, una schermata sola | **sì** | **filtra gli spilli** | `benvPassoFacolta` + `benvPassoLivello` |
| **P4** | Lingue | **no** | **colora gli spilli** | `benvPassoLingue` |
| **E** | Smistamento «hai già in mente le mete?» | — | **schermata di esito, non un passo** | §4 |

**3 passi obbligatori su 4.** P3 resta unito com'è già in codice. **E non è un
passo**: chiude l'entrata e smista.

- Lo stepper visibile (`#benvenuto-passi`, oggi **3** `.benvenuto-passo`) passa
  a **4** voci. È `aria-hidden="true"` e resta tale: lo stato del passo lo
  annuncia `#benvenuto-scelte`.
- **P1 usa gli stessi tre testi** dei bottoni di `index.html`
  (*«🧭 Sto esplorando»* · *«📨 Ho fatto domanda e aspetto»* · *«🎉 Sono stato
  selezionato»*). ⛔ Una quarta formulazione della stessa domanda è la stessa
  divergenza che V4 ha appena chiuso sui testi del pre‑bando.
- **Il salto delle lingue smette di essere muto**: «Salta per ora» dichiara la
  conseguenza (*«senza lingue le mete non si ordinano per compatibilità: le
  aggiungi quando vuoi dal Profilo»*). Il comportamento non cambia — array
  vuoto, D9/V0 — cambia che lo studente **lo sa**.

**Le differenze rispetto a oggi:**

| # | Oggi | v3 |
|---|---|---|
| 1 | Mappa in un riquadro **sotto la piega** | **A tutta pagina** |
| 2 | Titolo, claim, fumetto e CTA impilati sopra la mappa | Claim + **un solo** bottone sul velo; nient'altro nella prima schermata |
| 3 | 3 domande | **+ P1 la porta d'ingresso** e **+ lo smistamento finale** |
| 4 | La mappa **non reagisce** durante le domande | **Reagisce a ogni risposta**: filtra, poi colora |
| 5 | Salto delle lingue **muto** | Salto **con la conseguenza scritta** |
| 6 | «Hai già in mente le destinazioni?» **nelle Mete** | Ultimo passo dell'entrata, **mai più** (§4) |

**«A tutta pagina» ha due forme, e la spec le scrive perché a 390px «a destra»
non vuol dire niente:**

- **< 768px**: la mappa occupa il primo viewport a **piena larghezza**; il velo
  scuro è **sopra** la mappa; claim e unico bottone stanno **sul velo**. La
  classe `.modo-scena` (che già esiste, con il suo `prefers-reduced-motion`)
  resta il punto in cui questo vive.
- **≥ 768px**: mappa **a destra**, velo **a sinistra**, come dice la rev. 6.

#### §7. Vincoli scritti, non dedotti

⛔ **Gli id dentro `#home-benvenuto` non sono tuoi.** `preparaNomiTab()`
**riscrive l'id** del titolo di ogni tab, e la prima riga della sua tabella è
proprio `["#home-benvenuto .benvenuto-titolo", "titolo-tab-oggi-benvenuto"]`.
Ieri un `id` messo su un `<h1>` ha ucciso il saluto col nome **in silenzio, con
31 prove UI verdi**. **Nell'entrata si seleziona per classe, dentro il tab**
(`document.querySelector("#tab-oggi .home-saluto")` è il modello già in uso in
`renderHome`), ⛔ mai per `id` su un titolo.

⛔ **Un ramo nuovo messo troppo in alto spegne i rami vecchi.** Ieri il ramo
pre‑bando precedeva quello del profilo e, siccome ogni utente **nasce** in
pre‑bando, nessuno veniva più invitato a compilare il profilo. **P1 aggiunge un
ramo a monte di tutta l'entrata**: ogni aggiunta a una catena di `if` va provata
**anche per ciò che NON deve intercettare** — in particolare che
`initOnboarding()` continui a non fare nulla per chi ha `onboardingFatto`, e che
la ripresa da `sessionStorage` **non** scatti al primo avvio normale.

⛔ **Il testo della finestra attesa non si riscrive.** Dopo V4 esiste **una sola
copia** (`titoloPreBando()`, `finestraAttesaBando()`), e `completaOnboarding()`
**la usa già** nel ramo `inPreBando()`. L'entrata **riusa quelle funzioni**.
Erano **tre copie divergenti** prima di V4.

⛔ **`js/atenei/*/dati-mete-*.js` e `dati-coordinate.js` non si toccano.**
Nemmeno una riga: i file mete **li riscrive ogni notte l'automazione di
mappatura dall'altro PC** (`AUTOMAZIONE_GEMINI.md`), le coordinate sono generate
offline. Se un pin è nel posto sbagliato, si dichiara — non si corregge qui.

⛔ **`statoBando()`, `modoCiclo()` e `inPreBando()` non si toccano**: V4 li ha
appena congelati e G1 li prova.

#### §8. Criterio di uscita

1. **L'entrata si completa da tastiera senza attraversare i pin**: prova UI che
   conta i tab‑stop dentro `#home-benvenuto` e verifica che nessuno sia un
   `.mappa-pin`; i pulsanti‑risposta bastano a percorrere P1→P4→E.
2. **La ripresa dal cambio ateneo riprende dal passo giusto e con le risposte
   date**: prova UI che risponde a P1, cambia ateneo a P2, e dopo il reload
   trova P3 con la porta di P1 ancora scelta. Più i casi sporchi: chiave
   assente · JSON illeggibile · `passo` fuori intervallo · `porta` sconosciuta
   → **si riparte dalla scena, senza errori a schermo**.
3. **Chi l'ha già fatta non la rivede**: con `onboardingFatto` l'entrata non
   compare e `initOnboarding()` esce subito.
4. **`wizardMete`**: finita l'entrata, il riquadro `#wizard-mete` non compare
   nel tab Mete; «Ripensa le rotte» lo **rimette**; il caso «cambio ateneo →
   zaino nuovo → entrata rifatta» è **provato e dichiarato**.
5. **`npm run test:perf` verde**, con il referto delle **tre grandezze** e i 5
   giri, **prima e dopo** le ottimizzazioni di §5.
6. **Le otto invarianti I1–I8 verdi**, misurate sullo stesso elenco e alla
   stessa larghezza prima e dopo §5. Una sola invariante che cede ferma le
   ottimizzazioni e si dichiara.
7. `prefers-reduced-motion` spegne le transizioni **senza perdere
   informazione** (stesso numero di elementi resi, come al F4 del redesign v2).
8. A **390×844** la prima schermata dell'entrata mostra claim e **un solo**
   bottone, **senza scorrere**.
9. **Suite verdi**: unit (oggi **90/90**, zero skip) e UI (oggi **33/33**).
   ⛔ Nessuno `skip` nuovo.
10. ⛔ **Si guarda il sito prima di firmare, con uno zaino vero.** Quattro
    difetti su quattro sessioni sono passati sotto suite verdi: le prove dicono
    che il codice fa ciò che il test chiede, **non che il prodotto dica la
    verità allo studente**.

**Rischio.** ALTO — tocca il motore della mappa **condiviso con le Mete**, la
macchina dell'entrata, e aggiunge un ramo a monte di tutto il primo contatto.

> 🔻 **Se V3 si delega con `/codex-build`, questi divieti vanno in cima al
> prompt** (hanno funzionato su V0, su V1 al secondo giro, su V2 e su V4 — dove
> Codex si è fermato davanti a una porta occupata **senza terminare il
> processo**): **non invocare `codex` né alcuna procedura di delega**; **non
> terminare processi** (`Stop-Process`, `kill`, `taskkill`); **non toccare
> `.git/`**; **nessun processo persistente** — gli unici server ammessi sono
> quelli avviati e fermati da `npm run test:ui` e `npm run test:perf`.
> E cinque divieti specifici di V3: **nessun `id` su un titolo dentro
> `#home-benvenuto`** (la tabella aria lo riscrive); **non toccare
> `js/atenei/*/dati-mete-*.js` né `js/dati-coordinate.js`**; **non modificare
> `statoBando()`, `modoCiclo()`, `inPreBando()`**; **non riscrivere il testo
> della finestra attesa** — si riusano `titoloPreBando()` e
> `finestraAttesaBando()`; **nessuna ottimizzazione che cambi una delle
> invarianti I1–I8** delle Mete.

### V4 — Home «Adesso» + stato pre-bando (ottobre)

> **SPEC CONGELATA il 2026-07-29**, su `fbfd73e`. Le quattro decisioni che la
> rev. 6 lasciava aperte (`INVENTARIO_G1.md` §3) sono **prese qui**: D‑V4.1…
> D‑V4.4, ognuna decisa da Nicola dopo misura sul codice. Da qui in giù non ci
> sono domande: è delegabile a `/codex-build`.
>
> Ancoraggi: **frammenti di codice, non numeri di riga** — §V2 ha già citato
> righe morte una volta. I numeri fra parentesi valgono al 2026-07-29 e servono
> solo a ritrovare il posto.

#### §0. La correzione misurata che cambia il progetto

⛔ **`statoBando()` ha QUATTRO valori, non tre** (app.js, blocco commentato
*«Stato del bando a QUATTRO valori (R2, PLAN.md §R2.5)»*): `aperto` ·
`chiuso-ciclo-attivo` · `dati-scaduti` · `non-pubblicato`. L'inventario §3.1 ne
elencava tre e proponeva di leggere il pre-bando come *«`dati-scaduti` +
`cicloPercorso ≠ cicloDati`»*.

**Quella lettura non si accenderebbe mai nella finestra per cui V4 esiste.**
Misurato: le due chiusure candidature (`sap-chiusura1` 2026‑02‑27,
`sap-chiusura2` 2026‑05‑27; Ca' Foscari 2026‑02‑25) sono **passate**, ma
`SCADENZE_INFO.fineCiclo` è **`2027-07-31T23:59`**, cioè **futura**. Quindi
oggi, e da qui a tutto luglio 2027, `statoBando()` vale
**`chiuso-ciclo-attivo`**. `dati-scaduti` scatta il **1° agosto 2027** — mesi
*dopo* l'uscita del bando 2027/28, cioè quando il pre-bando non serve più.

Questo è il motivo per cui la sessione del 29/07 si è fermata prima di delegare.

#### §1. D‑V4.1 — Il pre-bando è una **lettura**, non un quinto valore

**Deciso: due interruttori separati.** `statoBando()` **non si tocca**: resta
deciso *solo* dai dati e dalla data di oggi, com'è scritto nel suo commento.
Il pre-bando descrive **lo studente**, non i dati, e quindi vive altrove.

**Funzione nuova, pura, in `js/puro.js`** (nome vincolante: `modoCiclo`):

```
modoCiclo({ stato, cicloDati, cicloPercorso }) → "pre-bando" | "corrente"
```

| Regola | Valore |
|---|---|
| `stato` ∈ {`chiuso-ciclo-attivo`, `dati-scaduti`} **E** `cicloPercorso` ≠ `cicloDati` | `"pre-bando"` |
| ogni altro caso (compreso `aperto`) | `"corrente"` |
| `non-pubblicato` | **`"corrente"`** — è l'assenza di dati, non il pre-bando: conserva il messaggio che ha già (*«Il nuovo bando non è ancora stato pubblicato»*) |
| `cicloDati` o `cicloPercorso` mancanti/vuoti | `"corrente"` — non si inventa uno stato su dati assenti |

**Pura davvero**: nessun `window`, nessun `localStorage`, nessun `new Date()`
dentro. I tre valori entrano come argomenti. Provabile senza browser, come
`faseViaggioV3` e `creaZainoV3`.

**Un solo lettore in `app.js`**: `inPreBando()`, che mette insieme
`statoBando()`, `ZAINO.cicloDati` e `ZAINO.cicloPercorso` e chiama `modoCiclo`.
⛔ **I 19 punti di render chiamano `inPreBando()`, non ricalcolano la condizione
ognuno a modo suo** — è la stessa regola con cui R1.6 tiene una sola
`tappaCorrente()`.

**Perché non il quinto valore**: `statoBando()` è la funzione più letta del
motore e oggi non sa niente dello zaino. Farle leggere `ZAINO.cicloPercorso`
renderebbe falso il contratto scritto sopra di lei e legherebbe una funzione
dati‑only al `localStorage`. Costo di ritorno se la decisione fosse sbagliata:
**una funzione e i suoi test**, nessun punto di render da riscrivere.

#### §2. D‑V4.2 — **Si etichetta, non si nasconde**

**Deciso da Nicola contro la raccomandazione di Claude**, e messo per iscritto
qui perché sia una scelta e non una svista: **niente sparisce dallo schermo per
il fatto di essere vecchio.** Il gate G1 dice già *«G1 non chiede di cancellare
le date»*: questa decisione lo porta fino in fondo.

**Tre forme ammesse, e nessuna quarta:**

| Forma | Quando | Esempio |
|---|---|---|
| **ETICHETTA** | il contenuto resta vero e utile | requisiti, timeline: contenuto invariato + cartellino «storico 2026/27» |
| **RISCRITTURA AL PASSATO** | la forma presuppone un futuro che non c'è | *«Manca 1 giorno»* → *«Scaduta da 153 giorni»* |
| **DISATTIVAZIONE SPIEGATA** | il comando produrrebbe qualcosa di inutile | il bottone `.ics` resta **visibile e disabilitato**, con la ragione accanto |

⛔ **Vietato**: nascondere un contenuto perché appartiene al ciclo vecchio.
⛔ **Vietato**: lasciare a schermo un contenitore vuoto (lezione di V2: *«su
nessun ateneo mostra una sezione vuota»*).

> ✅ **Misurato, e riduce il lavoro**: `countdownInParole()` **non stampa numeri
> negativi** — per una data passata dice già *«Scaduta da N giorni»* / *«Scaduta
> oggi»*. La riscrittura al passato **esiste già**: ai punti 8, 9, 11, 12 manca
> solo il cartellino che dica **di quale bando** è quella scadenza.

**I 19 punti dell'inventario, con la forma decisa per ciascuno.** Sostituisce la
colonna *«In pre-bando deve»* di `INVENTARIO_G1.md` §2, che proponeva
«non mostrare» in cinque punti: **quella colonna è superata da questa tabella**.

| # | Ancoraggio | Forma | Cosa fa V4 |
|---|---|---|---|
| 1 | `SCADENZE_INFO.fineCiclo` in `statoBando()` | — | **invariata**: è la sorgente, non un render |
| 2 | `getElementById("badge-bando")` | ETICHETTA | in pre-bando: **«Bando 2027/28 non ancora uscito · dati 2026/27»**. Il ciclo mostrato è quello a cui punta lo studente, non quello dei dati |
| 3 | `Il bando ${anno} è chiuso` | RISCRITTURA | **«Il bando 2027/28 non è ancora uscito»** — l'anno viene da `cicloPercorso`, non da `BANDO_INFO` |
| 4 | `dataChiusuraCandidature()` | ETICHETTA | *«Le candidature **del 2026/27** si sono chiuse il …»* — il ciclo va scritto, oggi manca |
| 5 | `m.prossima.cosa} — ${formattaData(` | RISCRITTURA | non c'è una prossima scadenza del 2027/28: la riga diventa *«La prossima data certa è l'uscita del bando, di solito fra dicembre e gennaio»*. **V5** ci attacca la sveglia |
| 6 | `window.ATTESA_INFO?.titolo` | — | invariato |
| 7 | `il prossimo esce in genere tra dicembre e gennaio` | RISCRITTURA | è **già** il testo del pre-bando: V4 lo promuove da caso limite a testo canonico dello stato, con una formulazione sola riusata in 3, 5 e 7 |
| 8 | `settimana-item-scadenza` | — | ⚠️ **la card resta com'è oggi**: `renderSettimana()` la nasconde quando lo stato non è `aperto`, per la regola di PLAN §5.3 *«senza un ciclo di bando su cui agire il modulo si nasconde: non si simula un planner vivo»*. **Non è un nascondere introdotto da V4** ed è dichiarato qui perché resti una scelta. V4 **non** la riaccende |
| 9 | `cand-scadenza-data` / `cand-scadenza-countdown` | ETICHETTA | intestazione di sezione **«Calendario del bando 2026/27 (concluso)»**; countdown invariato (dice già «Scaduta da…») |
| 10 | `prossimo-passo-scadenza` | — | in pre-bando `prossimaVoceId` è già `undefined` (tutte le scadenze passate) e il badge non nasce. **Dichiarato e testato**, non lasciato al caso |
| 11 | `el.getAttribute("data-scadenza")` | ETICHETTA | cartellino di ciclo accanto al countdown |
| 12 | `📅 ${scad.cosa} — ${countdownInParole(c)}` | ETICHETTA | idem |
| 13 | `function scaricaICSScadenza` | DISATTIVAZIONE SPIEGATA | per una scadenza passata il bottone resta **visibile, `disabled`**, con accanto *«Scadenza del bando 2026/27, già passata»*. **V5** lo sostituisce con «Controlla se è uscito il bando» |
| 14 | `Dati verificati il ${new Date(infoBando.dataVerificaDati)` | ETICHETTA | è **il posto giusto** per dichiarare il ciclo dei dati: prefisso pre-bando accanto ai due che già esistono (`dati-scaduti`, `non-pubblicato`) |
| 15 | `REQUISITI_BANDO` in `renderAutoverifica` | ETICHETTA | cartellino **di sezione**, una volta sola: *«Requisiti del bando 2026/27. Il bando 2027/28 può cambiarli: qui per farti un'idea, non per candidarti»*. **Non** uno per scheda: 8/9 cartellini sono rumore |
| 16 | `const requisiti = REQUISITI_BANDO` (tappa 1) | ETICHETTA | il conteggio «x/y requisiti» eredita il cartellino di 15 |
| 17 | `meta.scadenzeOspitante` | ETICHETTA | vedi **D‑V4.3** |
| 18 | `const info = window.ATTESA_INFO \|\| {}` | — | invariato |
| 19 | `BANDO_INFO.inVerifica` | — | invariato, indipendente da G1 |

**Una sola formulazione del cartellino**, definita una volta in codice e riusata:
i punti 2, 4, 9, 15 e 17 non possono dire la stessa cosa con cinque parole
diverse.

#### §3. D‑V4.3 — `scadenzeOspitante`: **etichetta di sezione**

**Deciso: etichetta, zero file dati toccati.** Ancoraggio:
`rigaDettaglio("Scadenze dell'università ospitante", ulS)`. Sopra l'elenco
compare una riga sola:

> *«Date del ciclo 2026/27 — l'università ospitante le ripubblica ogni anno.»*

**Perché non un campo nuovo nei dati**: sono ~1.900 mete Sapienza + 392
Ca' Foscari, e quei file **li riscrive ogni notte l'automazione di mappatura
dall'altro PC** (`AUTOMAZIONE_GEMINI.md`). Un campo aggiunto a mano lì dentro è
un conflitto ricorrente, e non è lavoro di V4. Costo di ritorno: **una riga**.

⛔ **`js/atenei/*/dati-mete-*.js` non si tocca in V4.** Nemmeno una riga.

#### §4. D‑V4.4 — Tre famiglie di voci condizionali, e un **denominatore personalizzato**

**Il difetto, misurato.** `postFatto` (in `calcolaFasi()` e in
`renderStazioni()`) conta **tutte** le voci di `CHECKLIST_POST`, mentre la
missione usa `vociPostPromuovibili()`, che salta le `condizionale`. A
Ca' Foscari sono **37 contro 24**: la missione può dire «completo» mentre lo
stepper aspetta ancora 13 voci. È la stessa forma della spunta falsa che V2 ha
chiuso, girata al contrario.

**La decisione di Nicola**: le condizioni che riguardano *chi sei* si chiedono
**nel profilo**, e nella lista entra solo ciò che ti riguarda davvero.

**Misurato prima di scrivere**: le 18 voci condizionali (13 Ca' Foscari,
5 Sapienza) **non sono la stessa cosa**. Si dividono in tre famiglie, e la
decisione vale solo per la prima:

| Tipo | Cos'è | Nel denominatore? | Promuovibile a «prossima mossa»? |
|---|---|---|---|
| `condizione` | dipende da **chi sei**, vero da subito | **sì, se il profilo dice di sì** | sì, se attiva |
| `opzione` | una scelta che **forse** farai più avanti | **no** | no |
| `avvertenza` | **non è un'azione**: è una regola da sapere | **no** — non ha una spunta | no |

**Classificazione vincolante, voce per voce.** Codex **non deve dedurla dal
testo**: è questa.

| Ateneo | `condizione` | `opzione` | `avvertenza` |
|---|---|---|---|
| Ca' Foscari (13) | `post-la-4` (ricerca tesi) · `post-doc-8` (cittadinanza extra‑UE) | `post-acc-5` · `post-doc-2` · `post-arr-2` · `post-dur-2` · `post-dur-3` · `post-dur-4` | `post-acc-6` · `post-acc-7` · `post-la-6` · `post-rit-5` · `post-rit-7` |
| Sapienza (5) | `sap-post-doc-7` (cittadinanza extra‑UE) | `sap-post-dur-1` · `sap-post-dur-3` | `sap-post-arr-2` · `sap-post-rit-7` |

> `post-doc-2` (visto per un paese non UE) **sembra** una condizione ma dipende
> dalla **meta**, non dallo studente: resta `opzione` finché le mete non
> espongono il paese, che è lavoro di **V6**. Il campo lo dice nel commento.

**Nei dati** (`js/atenei/*/dati-postselezione.js`): si **aggiunge** il campo
`tipo` alle 18 voci elencate e si **lascia `condizionale: true` dov'è** — è già
in produzione, già letto, già testato. ⛔ **Nessun testo delle voci va toccato**:
sono contenuti validati sulle fonti il 28/07.

**In codice:**

- `vociPostApplicabili()` — voci **senza `tipo`** (le 24 / 26 che valgono per
  tutti) **più** le `condizione` che il profilo attiva. È il **denominatore**:
  lo usano `postFatto` in **entrambi** i punti e i contatori della stazione.
- `vociPostPromuovibili()` — diventa un filtro **sopra** `vociPostApplicabili()`:
  nessuna `opzione` e nessuna `avvertenza` può essere «la prossima mossa».
- **Le `avvertenza` escono dalla lista dei compiti**: `renderChecklistPost()` le
  raccoglie in un riquadro **«Da sapere prima»**, **senza casella di spunta**,
  in cima al capitolo a cui appartengono (`gruppoZaino`). Sono le trappole che
  costano soldi — *non laurearti prima del riconoscimento*, *non puoi rifiutare
  un voto già nel ToR*, *l'ospitante può respingerti dopo la graduatoria* — e
  oggi sono mescolate ai compiti come se fossero compiti.
- Le `opzione` restano spuntabili, raccolte sotto **«Se ti riguarda»**, fuori dal
  conteggio.

**Le due domande nuove di profilo** — e sono **due**, non tredici:

| Campo in `ZAINO.profilo` | Domanda | Attiva |
|---|---|---|
| `extraUE` | *«Hai cittadinanza extra‑UE?»* | `post-doc-8`, `sap-post-doc-7` |
| `ricercaTesi` | *«Il tuo Erasmus è (anche) per ricerca tesi?»* | `post-la-4` |

- Tre valori: `true` · `false` · **`null` = non risposto**. Con `null` la voce
  **non** entra nel denominatore e **non** è promuovibile: non si conta come
  fatta né come da fare. Il default onesto è non sapere.
- **Dove si chiedono**: nel form del profilo (`#form-profilo-v2`) **e** con un
  invito mostrato allo studente `selezionato` che non ha ancora risposto —
  l'«indicazione» chiesta da Nicola. ⛔ **Non nell'onboarding**: chi esplora ad
  agosto non ha ancora idea di cosa sia un OLA, e le tre domande obbligatorie
  dell'entrata (V3) non diventano cinque.
- ⛔ **Trappola misurata, da non ripetere**: `ZAINO.profilo` ha **due scrittori**
  — la fine dell'onboarding (`ZAINO.profilo = { area, dipartimento, livello,
  lingue }`) e il salvataggio del form (`ZAINO.profilo = { nome, area,
  dipartimento, livello, lingue }`). **Entrambi riscrivono l'oggetto da zero**:
  così com'è, il primo dei due **cancella** `extraUE` e `ricercaTesi` senza
  dirlo. Vanno cambiati **tutti e due** nello stesso intervento.
- **Migrazione**: uno zaino esistente non ha i due campi → valgono `null` →
  denominatore invariato. Nessun passo di migrazione, ma la prova di
  idempotenza va aggiunta alle fixture di V2.

#### §5. La home «Adesso» — inventario dei contenuti ammessi

**La regola, vincolante anche per Codex:** *nella home entra solo ciò che è vero
adesso e per cui c'è qualcosa da fare.* Un blocco che informa senza chiedere
un'azione **non entra**. (Vale per la **home**: nelle stazioni, per D‑V4.2, si
etichetta e non si toglie.)

**Contiene**: la tappa corrente con la barra di avanzamento **in cima** · **una**
mossa principale · **le scadenze principali**, e una scadenza in home non è mai
un numero ma **numero + la cosa da fare**, col collegamento al passo che la
chiude. Senza azione collegata, non entra.

**Esce**: il claim del sito (sta nell'entrata) · «Ciao, Studente» senza nome
(→ invito a completare il profilo) · «Modifica profilo» dal blocco progresso
(→ drawer) · «1 meta non è sulla mappa» (→ accanto alla mappa, nelle Mete) · i
riassunti delle altre sezioni. Su telefono i due bottoni **uno sotto l'altro**.

**In pre-bando la home dice tre cose, in quest'ordine**: che il bando 2027/28
non è ancora uscito · la finestra attesa (dicembre–gennaio) · l'unica azione
sensata — esplorare le mete, e **farsi avvisare**, che è **V5**. La barra di
avanzamento resta: misura il percorso dello studente, non il bando.

**Chi torna già selezionato** apre sulla stessa home, con la tappa corrente e la
mossa **calcolate da `CHECKLIST_POST`** (V2), non fissate sul LA — e adesso col
denominatore di D‑V4.4.

#### §6. Vincoli da tenere presenti — scritti, non dedotti

⛔ **Le matrici A/B non esistono.** `cicloDati` e `cicloPercorso` sono scritti
(`applicaPercorso` in app.js, `creaZainoV3`/`normalizzaZainoV3` in puro.js) e un
utente nuovo nasce con `cicloPercorso` = **ciclo successivo** — che è già lo
stato pre-bando, ed è il motivo per cui D‑V4.1 funziona. Ma
**`indipendenteDalCiclo` ha 0 occorrenze in tutto il repo** e l'evento che
applica le matrici **non c'è** (deviazione dichiarata di V2, rinviata a G2).
**V4 legge i due campi per calcolare il modo e basta**: non archivia, non
resetta, non promuove niente.

⚠️ **Conseguenza da accettare, non da nascondere**: chi ha uno zaino del
2026/27 ha `cicloPercorso === cicloDati` e quindi **non** è in pre-bando — vede
il sito come oggi. È corretto (per lui quei dati *sono* il suo ciclo) e resta
così fino a **G2**.

#### §7. Criterio di uscita

1. **T5 verde, senza `skip`**, in `test/inventario-g1.test.cjs`: per **ciascuno**
   dei 19 punti, in stato pre-bando, nessun valore dei campi di
   `INVENTARIO_G1.md` §1 compare **fuori** da un'etichetta di ciclo. **Finché T5
   è skip, G1 non è superato e V3 non può uscire.** Il test va provato **per
   mutazione**: si toglie un cartellino, T5 diventa rosso.
2. `modoCiclo` provata su tutti e quattro i valori di `statoBando()` × ciclo
   uguale/diverso × campi mancanti — **senza browser**.
3. `postFatto` e la missione dicono la **stessa** cosa: uno zaino con tutte le
   voci applicabili spuntate dà «completo» **e** stepper `fatto`, su entrambi
   gli atenei, con `extraUE`/`ricercaTesi` a `true`, `false` e `null`.
4. Un profilo salvato dal form **e poi** dall'onboarding conserva i due campi.
5. Le `avvertenza` non hanno casella di spunta e non entrano in nessun conteggio.
6. A **390×844** l'informazione principale è visibile **senza scorrere**; nessun
   elemento fuori dall'inventario §5; le tre fasi × pre-bando/corrente danno
   **sei** home diverse e coerenti.
7. Suite verdi: unit (oggi **74/74** + 1 skip che qui **sparisce**) e UI (25/25).
8. ⛔ **Si guarda il sito prima di firmare.** Tre difetti su tre sessioni sono
   passati sotto suite verdi: le prove dicono che il codice fa ciò che il test
   chiede, non che il prodotto dica la verità allo studente.

**Rischio.** ALTO — tocca il motore (`puro.js`), 19 punti di render, i due
scrittori del profilo e i file dati (solo il campo `tipo`).

> 🔻 **Se V4 si delega con `/codex-build`, questi divieti vanno in cima al
> prompt** (hanno funzionato su V0, V1 al secondo giro e V2): **non invocare
> `codex` né alcuna procedura di delega**; **non terminare processi**
> (`Stop-Process`, `kill`, `taskkill`); **non toccare `.git/`**; **nessun
> processo persistente** — l'unico server ammesso è quello di `npm run test:ui`.
> E quattro divieti specifici di V4: **non modificare `statoBando()`**; **non
> toccare `js/atenei/*/dati-mete-*.js`**; **non riscrivere il testo di nessuna
> voce dei `dati-postselezione.js`** (aggiungere `tipo`, nient'altro); **non
> nascondere nessun contenuto perché appartiene al ciclo vecchio** — D‑V4.2
> ammette tre forme e nessuna quarta.

### V5 — Retention 🔴 prima che esca il bando (novembre)

Niente account, niente email, notifiche PWA fuori perimetro: se uno esplora ad
agosto e il bando esce a dicembre, ci sono **quattro mesi di silenzio**.

**Passi.**
1. **`VALARM` a −7 giorni e −1 giorno** in ogni evento (`scaricaICSScadenza()`,
   app.js:1341). È **l'unica notifica ottenibile senza account**. Oggi l'evento
   è muto.
2. **Un solo file con tutte le date** invece di uno per scadenza.
3. **L'evento «Controlla se è uscito il bando»** — nello stato pre-bando è
   **l'unica data futura esistente**, e quindi l'unico gancio. Un `DTSTART`
   richiede **un giorno preciso**: «fra dicembre e gennaio» non è una data. Nei
   dati per-ateneo si salva `BANDO_INFO.finestraAttesa = { inizio: "2026-12-01",
   fonte: "…", stato: "atteso" }` e l'evento cade sull'**inizio finestra**. Il
   titolo dice *«Controlla se è uscito»*, **non** finge una data di
   pubblicazione: la differenza è fra un promemoria onesto e una data inventata.
4. **Fonte, data di verifica e disclaimer dentro l'evento e dentro la sveglia**:
   un `.ics` importato **non si aggiorna** se la scadenza cambia. Va detto nel
   file, non solo nella pagina — è il framing obbligatorio di
   `PROGETTO_ERASMUS.md`.
5. **Il momento**: alla fine dell'entrata, quando lo studente ha appena investito
   le risposte. Non un bottone da cercare dopo.
6. **Invito all'installazione, con matrice per piattaforma**: `beforeinstallprompt`
   non esiste su iOS/Safari → istruzioni manuali; rilevamento via `display-mode`
   e `appinstalled`; un rifiuto **rinvia**, non nasconde per sempre.
7. Il disclaimer dei dati diventa **l'argomento dell'installazione**: *«Niente
   iscrizione: i tuoi dati restano su questo telefono. Aggiungi ErasmusWiz alla
   schermata home per ritrovarli.»*

**Criterio di uscita.** Il `.ics` si apre in Google Calendar **e** Apple Calendar
**con la sveglia attiva**; un solo file contiene tutte le date future; l'evento
atteso è visibilmente etichettato come tale; l'invito segue la matrice su
Android, iOS e desktop.

### V6 — Mete e le 5 scelte (novembre – dicembre)

**Scollegare le due liste.** `schedinaIds()` (app.js:2057) tiene allineati
`metePreferite` e `schedina`, e app.js:2163 **blocca alla quinta stellina**: in
pratica esiste una sola lista di 5.

**Gli invarianti, da formalizzare PRIMA della UI:** `schedina ⊆ preferiti` · una
meta sparita dai dati diventa **orfana** e va segnalata, non persa in silenzio ·
se il massimo **diminuisce**, l'eccedenza si mostra · migrazione delle liste
esistenti.

**Togliere la stella a una meta che è già fra le 5 non è un'operazione
silenziosa.** L'invariante impone di rimuoverla dalle caselle, ma così **un tocco
accidentale distrugge una decisione e il suo ordine**. Quindi: conferma
esplicita, **oppure** annullamento immediato («rimossa dalle tue 5 · annulla»).
La seconda è preferibile — non interrompe chi sta esplorando.

> ⚠️ **Prima di G2 esiste solo la wishlist.** A novembre il massimo di Ca'
> Foscari verrebbe ancora dal bando **2026/27**: un numero valorizzato ma
> **storico**, che il controllo «limite ignoto → disattiva» non intercetta,
> perché il limite *c'è*. La **schedina ufficiale si attiva solo dopo G2**, cioè
> quando mete e limite del 2027/28 sono entrambi validati. Fino ad allora
> l'ordinamento resta disponibile come **strumento personale**, dichiarato tale,
> senza chiamarlo «le 5 che invii».

**Il numero 5 viene dal bando** — *«fino a un massimo di 5 destinazioni, elencate
in ordine di priorità»*, **Art. 7 comma 4** — e oggi **non esiste come campo
leggibile**: va creato `BANDO_INFO.massimoDestinazioni`, con fonte e stato di
verifica, per ateneo.

**Limite ignoto — è il caso reale della Sapienza**, finché il suo bando non è
verificato, e va deciso adesso: **wishlist illimitata, schedina ufficiale
disattivata** con la spiegazione (*«il numero di destinazioni del bando Sapienza
non è ancora verificato: intanto raccogli quelle che ti interessano»*). Meglio
non offrire una consegna che offrirne una col numero sbagliato.
**Limite che diminuisce**: l'eccedenza si **mostra**, marcata, e si chiede
all'utente di correggerla. Mai troncata dal codice.

**Un solo gesto**: stella = «mi interessa» (illimitato); casella = decisione (5),
nello spazio `#mete/scelte/<ateneo>` — **l'ateneo sta in tutte le rotte che
dipendono dal dataset**, non solo nel Learning Agreement: anche questa schermata,
aperta a freddo da un link condiviso da Sapienza, caricherebbe altrimenti Ca'
Foscari.

**Riordino**: **frecce ↑↓ sempre visibili come meccanismo**, trascinamento come
lusso dove il dispositivo lo permette. Scambio animato (FLIP), immediato sotto
`prefers-reduced-motion`. **Il fuoco resta sul controllo spostato** e lo
spostamento è **annunciato** («spostata in posizione 2 di 5»): oggi la schedina
si ricostruisce da capo e il fuoco si perderebbe. Provare primo, ultimo e
movimento oltre i limiti.

**Altro**: un solo banner di profilo · **ricerca sopra i filtri** · riga sottile
«3 di 5 scelte · ordina →» al posto del blocco giallo · su telefono ricerca →
filtri → elenco, mappa in un pannello · via il riquadro «hai già in mente le
destinazioni?» (migrato in V3).

**Criteri di uscita, separati come le due sottofasi.**

**V6a (personale, prima di G2)** — ogni invariante ha un caso di prova; si
stellano più di 5 mete; riordino da tastiera con annuncio e fuoco conservato;
l'ordine sopravvive al ricaricamento; `#mete/scelte/<ateneo>` apre l'ateneo
giusto **a `localStorage` vuoto** e **con un ateneo salvato in conflitto**.
⛔ **Nessun testo che prometta una consegna**: niente «3 di 5», niente «le mete
che invierai». La lista è tua, non è ancora una candidatura.

**V6b (ufficiale, dopo G2)** — il massimo cambia modificando **solo**
`dati-bando.js`; con limite ignoto la schedina è disattivata con la spiegazione;
con limite ridotto l'eccedenza è mostrata e non troncata; **solo qui** compare il
copy «le 5 che invii».

### V7 — Learning Agreement libero (gennaio – febbraio 2027)

Il Workspace **esiste** (~1.140 righe, 2490→3634) ed è il pezzo più sofisticato
del sito, **schiacciato** nel corpo di un `<details>` alla stazione 4.

**Passi.** Indirizzo **`#learning-agreement/<ateneo>`** (forma canonica di V1,
mai nuda) e **schermo intero** · tappa dedicata
nello stepper · in home diventa l'azione principale **solo quando i prerequisiti
post-selezione sono spuntati** (V2) · link alla guida **dentro** il Workspace.

> **Rifiutata** la proposta di Codex di **spezzare `app.js` in moduli** prima di
> V7: è un refactor architetturale che non entra in un redesign già ampio, e il
> sito non ha né build né bundler. Va aperto come lavoro suo, dopo v3.

**La guida di Ca' Foscari: una sola regola di rilascio.** L'unica guida LA scritta
è per la Sapienza (`guide/come-fare-learning-agreement-sapienza.html`, 128 righe)
mentre dati e checklist sono di Ca' Foscari. Pubblicare V7 col link alla guida
Sapienza per un utente Ca' Foscari **riprodurrebbe esattamente il difetto che V7
dovrebbe chiudere**.

> **Regola unica, scelta fra le due sicure** (la rev. 3 le lasciava entrambe, e
> due regole di rilascio non sono una regola): **il link a una guida si mostra
> solo se esiste la guida dell'ateneo attivo.** È un vincolo di codice, verificabile,
> valido anche per il terzo ateneo che verrà. La guida di Ca' Foscari resta da
> scrivere — e finché non c'è, chi viene da Ca' Foscari semplicemente non vede
> il link, senza che V7 debba aspettarla.

**V7 non aggiunge logica sostanziale al Workspace** (vedi D19): sposta,
riorganizza, collega. Le funzioni pure che servono ai test vengono isolate,
com'è previsto in *Verifiche*.

**Criterio di uscita.** Usabile a 390px senza scorrimento orizzontale; una bozza
creata prima della migrazione resta leggibile con la storia intatta; il link
condiviso atterra sul contenuto anche senza profilo, **senza promettere** di
trasportare la bozza; nessun link a guida di un altro ateneo.

### V8 — Rifiniture (continuo)

- ~~Footer generalizzato~~ — **già fatto** (`applicaBrandingAteneo`). Resta da
  verificare che **guide e testi siano pertinenti all'ateneo attivo**: oggi chi
  arriva da Ca' Foscari vede in evidenza la guida della Sapienza.
- **Le guide escono dal footer** → **Altro** + il punto in cui servono, restando
  **pagine HTML vere**. Non si trasformano in Q&A: sono due lavori diversi.
- Microcopy dei dati; emoji (vedi *Rischi*).

---

## Key decisions & tradeoffs

| # | Decisione | Alternativa scartata | Perché |
|---|---|---|---|
| **D1** | Guida all'ingresso, cruscotto a regime: l'entrata si vede una volta sola | Mappa piena come home permanente | Aggiungerebbe un clic a ogni ritorno, per sempre |
| **D2** | **Estendere** il router esistente, nav a 3 voci | Nav a 5-6 voci / router nuovo | «Spazio a sé» = schermo intero, non una casella. E un router c'è già (R1.4) |
| **D3** | Chi arriva da un link **atterra sul contenuto** | Dirottamento all'onboarding | Un link intercettato è sprecato. Vincolo: le schermate profonde reggono senza profilo |
| **D4** | Entrata a **4 passi + 1 esito**, 3 obbligatori | Tutti obbligatori / solo 2 | Ogni passo è abbandono, ma il livello pesa quanto la lingua nel punteggio |
| **D5** | La mappa **reagisce davvero** a ogni risposta | Mappa decorativa | È il riscontro che compra i passi. Costo accettato e **misurato** (budget 100 ms / 50 ms) |
| **D6** | 3 porte, chieste **con lo stepper** | Domanda astratta / 4 porte | Un componente, tre usi. La quarta resterebbe vuota |
| **D7** | Lingue: **albero dichiarativo `ANY`/`ALL`** + normalizzatore + validatore in pipeline | Correggere i 25 record / parsing di stringhe | L'automazione rigenera le stringhe ogni notte; e una barra non garantisce alternativa |
| **D8** | Segnaposto e livelli non interpretabili → **requisito assente / da verificare** | Requisito impossibile (A) o superato (B) | (A) nasconde mete accessibili, (B) ne promette di inaccessibili. (B) è il danno peggiore |
| **D9** | Italiano **preselezionato e visibile nel passo Lingue, rimovibile con la ✕**, ma **in calcolo solo dopo la conferma del passo** | Preinserito nel profilo a prescindere (rev. 1-2) / chiederlo da zero | *Contestato da Codex due volte (#18, #13) e alla fine **accolto**.* La mia mitigazione — preinserirlo `certificata:false` — **non funziona**: misurato, dà comunque **25 punti**, abbastanza a spostare una meta da «🔒» a «⚠️». E il caso che la smonta è previsto dal piano stesso: **il passo Lingue è saltabile** (D4), quindi chi lo salta si ritroverebbe l'italiano nel calcolo senza averlo mai visto. La forma accolta **rispetta comunque la richiesta di Nicola** — l'italiano *è* già lì e si toglie con una ✕ — e in più non entra mai nel punteggio senza che qualcuno l'abbia guardato |
| **D10** | Un solo gesto: stella = desiderio, casella = decisione | Due bottoni per scheda | La differenza va capita mentre si esplora, quando si capisce meno |
| **D11** | Frecce come meccanismo, trascinamento come lusso; **fuoco conservato e annunciato** | Trascinamento protagonista | Non esiste sul tocco senza riscriverlo, e con la tastiera non funziona |
| **D12** | Home = «Adesso», con inventario esplicito | Lanciatore / home cancellata | Un lanciatore duplica la nav, già sempre visibile |
| **D13** | **Costruire per il bando 2027/28** | Servire i selezionati del ciclo in corso | *Decisione di Nicola contro la raccomandazione di Claude.* Acquisizione batte bisogno quando chi ha bisogno è irraggiungibile e non torna. Costo accettato: i partenti di settembre 2026 non vedranno il LA liberato |
| **D14** | Retention come fase sua | Sparsa nelle altre fasi | Sparsa è la prima cosa che si taglia — e l'unica che sposta i numeri di gennaio |
| **D15** | Massimo scelte da `BANDO_INFO.massimoDestinazioni` | `5` in `app.js` | Art. 7 c. 4, per-ateneo |
| **D16** | **6 tappe**, con Mete dentro il percorso | 5 tappe | La rev. 1 faceva sparire metà del viaggio; il ponte esiste già in codice |
| **D17** | Prima azione post-selezione **calcolata da `CHECKLIST_POST`** | Sempre il LA | L'accettazione viene prima e ha scadenza perentoria: mandarlo al LA gliela fa saltare |
| **D18** | **Stato pre-bando di prima classe** + gate G1 | Mostrare le date 2026/27 | Da agosto a dicembre tutte le scadenze sono passate: mostrarle come attuali è disinformazione |
| **D16b** | **Due gate**: G1 «niente contenuto vecchio spacciato per attuale» prima di V3/V4; G2 «dati 2027/28 validati» all'uscita del bando | Un gate solo | La rev. 2 aveva una dipendenza circolare: V3 bloccata da un gate che si superava con lo stato pre-bando, costruito in V4 |
| **D17b** | **Due cicli** nello zaino: `cicloPercorso` e `cicloDati` | Un solo campo `ciclo` | Chi esplora ad agosto punta al 2027/28 **consultando** dati 2026/27: un campo solo non può dire entrambe le cose senza mentire su una |
| **D18b** | Livelli ambigui (`B1/B2`) → **`livelloAmbiguo`, non tradotti** | Tradurre al livello più alto (rev. 2) | *Rilievo di Codex accolto.* `B1/B2` può significare «B1 per la triennale, B2 per la magistrale»: tradurlo d'ufficio evita un falso positivo creando un falso negativo, e perde la condizione originale |
| **D19** | `app.js` **non** si riorganizza in moduli in v3; si **estraggono** le sole funzioni pure in `js/puro.js` per rendere possibili i test | Modularizzare prima di V7 | *Rinvio confermato, motivazione corretta.* La mia ragione — «servirebbe un bundler» — era **tecnicamente sbagliata**: un sito statico può usare più `<script>` o moduli ES nativi. La ragione valida è di **perimetro**: è un refactor architetturale che non entra in un redesign già ampio. In compenso **V7 non aggiunge logica sostanziale** al Workspace |

---

## Verifiche — cosa vale come prova

> ⛔ **Tre criteri della rev. 1 sono ritirati perché non provano nulla**, e la
> contestazione di Codex è corretta:
> - **`node --check`** verifica solo la **sintassi**: non prova migrazioni,
>   routing né comportamento.
> - **`_smoke.js`** stampa quattro conteggi, **cattura le eccezioni senza far
>   fallire il processo** e **non contiene asserzioni**: non è una suite.
> - **`probe-invarianti.js`** richiede una baseline **compilata a mano**,
>   confronta soprattutto conteggi e **non misura** contrasto, anello di focus,
>   entrata, drawer, modale né rotte profonde.

**Cosa le sostituisce.**

0. **Prima di tutto: rendere i test possibili.** Le funzioni da provare oggi
   vivono dentro un `app.js` globale che dipende dal DOM e **non esporta nulla**:
   nessun test può caricarle. E oggi **il repo non ha nemmeno un `package.json`**,
   mentre `_smoke.js:2` importa `jsdom` — su un checkout pulito non parte niente.
   **Deciso adesso, non rimandato:**
   - **`package.json` + lockfile**, con le dipendenze di sviluppo **fissate**:
     `jsdom@22` (non 28: non esporta più `ResourceLoader`) e il runner browser.
     Fine dell'«installato fuori dal repo», che non è riproducibile.
   - **`js/puro.js`**: un file di sole funzioni pure (normalizzazione lingua e
     livello, punteggio, invarianti wishlist, migrazione zaino), caricato **sia
     dal browser con un `<script>` in più, sia dai test**. Nessun bundler.
   - **Due strumenti, perché i lavori sono due**: `node --test` per le funzioni
     pure; **Playwright** per ciò che `node:test` non può vedere — viewport,
     ordine di Tab, anello di focus, rotte, baseline visive.
   - **Comandi distinti** dichiarati nel repo:
     `npm run test:unit` · `test:ui` · `test:a11y` · `test:visual`.
   - Questo **non** è la modularizzazione rifiutata in D19: si estraggono le
     funzioni pure necessarie alle prove, non si riorganizza l'applicazione.
1. **Test unitari sulle funzioni pure** con i casi golden di V0 e le fixture di
   V2. Codice d'uscita non zero se falliscono.
2. **`_smoke.js` reso deterministico**: asserzioni vere, uscita non zero, casi
   per entrambi gli atenei. Finché non lo è, **non è un criterio di uscita**.
3. **Baseline salvate nel repo** (non compilate a mano a ogni giro), con soglie,
   e fallimento automatico per ogni viewport × stato × schermata toccata —
   incluse entrata, drawer, modale e rotte profonde.
4. **Soglie numeriche al posto degli aggettivi**: non «fluido» ma 100 ms / 50 ms
   su dispositivo dichiarato; non «una schermata» ma 390×844 senza scorrimento;
   non «nessuna informazione ripetuta» ma **inventario dichiarato** per schermata.
5. **Ogni fase ha data, prerequisito e go/no-go** (tabella in *Approach*).

**Ereditato da v2 e non rinegoziabile**: bersagli ≥44px (salvo le 4 eccezioni in
`baseline/README.md`), anello di focus su ogni fermata di Tab, contrasto sopra
soglia, `prefers-reduced-motion` senza perdita d'informazione.

⚠️ `_smoke.js` richiede **jsdom@22** (jsdom 28 non esporta più `ResourceLoader`)
e un server con backlog grande sulla 8123. Da §0 la dipendenza è **fissata nel
`package.json` del repo**: l'installazione «fuori dal repo» della v2 era il
sintomo del problema, non la soluzione.

---

## Risks / open questions

1. **Prestazioni della mappa (V3, ALTO)** — budget e piano di degrado sopra.
2. **Migrazione zaino (V2, ALTO)** — contenitore v2→v3 + `fase` a 3 valori +
   identità di ciclo, con rami sparsi che confrontano i valori vecchi.
3. **`app.js` monolitico** — 4.443 righe, di cui ~1.140 di LA Workspace. v3
   ne aggiunge. La modularizzazione è rinviata (D19) ma **il debito cresce**.
4. **Dati Sapienza a 1,8 MB** e cambio ateneo con reload (V3).
5. **Contenuti — il costo vero di v3**: la porta `in-attesa` non esiste; la
   checklist Sapienza ha 5 voci provvisorie; la guida LA di Ca' Foscari non è
   scritta. **Il codice non compensa il contenuto mancante.**
6. **Il bando 2027/28 potrebbe uscire tardi o cambiare struttura**: G1 è un gate
   proprio per questo.
7. **`index.html` torna toccabile** — il divieto era un vincolo del piano v2,
   chiuso. V2, V3 e V4 lo riscrivono in profondità.

**Aperte**
8. **Emoji** — la checklist §07 di v2 chiedeva «nessuna emoji fuori dalle cinque
   codificate» senza mai elencarle. 13 in `index.html`, 24 in `js/app.js`. Ora
   fattibile, ma resta un mini-progetto. → V8 o rinviato.
9. **Il filetto colorato a sinistra** (9 selettori, segnalati da `/impeccable`):
   il giudizio a video del GATE 2 non è mai stato dato. V2/V4 cambiano il
   contesto: **si ridiscute alla fine di V4**.
10. **Quanto v3 toglie ai contenuti** (Ca' Foscari 8/8, Sapienza), che il piano
    strategico indica come ciò che valida davvero il business.

---

## Out of scope

- Account, login, server, database. Il perimetro «100% statico» resta.
- Notifiche push / PWA notifications — è il motivo per cui V5 usa il `VALARM`.
- La quarta porta «sono tornato» e le recensioni dei rientrati.
- Catalogo corsi delle ospitanti: il LA Workspace resta *manual-first*.
- Terzo ateneo oltre Ca' Foscari e Sapienza.
- Riscrittura del design system v2.
- **Modularizzazione di `app.js`** (D19) — lavoro suo, dopo v3.
- Il cantiere DATI/mappatura (`PLAN.md`): v3 lo tocca solo per il validatore e i
  prompt attivi in V0.
