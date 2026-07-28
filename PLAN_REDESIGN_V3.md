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
   scroll, come si ripristina tornando indietro. Oggi non è definita da nessuna parte.
5. Chi arriva da un link esterno **atterra sul contenuto** (D3).
6. **Le guide restano pagine HTML vere** (`guide/*.html`): un hash non produce
   anteprima social né indicizzazione, e le guide sono l'esca della distribuzione.

**Criterio di uscita.** Ogni hash del contratto raggiungibile a freddo (finestra
nuova, `localStorage` vuoto) senza errori; indietro/avanti coerenti su 10
passaggi; per ogni rotta, destinazione del fuoco verificata; **diff visivo nullo**
rispetto alla baseline salvata (vedi *Verifiche*).

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

**Migrazione dello zaino — esplicita, non un incremento di versione.**
1. Contenitore **v2 → v3** dichiarato e **idempotente**. `VERSIONE_ZAINO` non si
   incrementa e basta: la migrazione attuale rischia di trattare il contenitore
   v2 come uno zaino piatto.
2. `fase`: `"domanda"` → `esplorando`, `"selezionato"` → `selezionato`, più il
   nuovo `in-attesa`. **Tutti i rami che confrontano i valori vecchi vanno
   censiti e aggiornati** (app.js:757, 2419, 2425, 2434 e altri): cambiare solo
   `normalizzaZaino()` lascia comportamento incoerente.
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

**Contenuti.** La porta `in-attesa` oggi **non esiste affatto** e va riempita, o
si apre sul niente. La porta `selezionato` ha 20 voci a Ca' Foscari ma **solo 5,
provvisorie, alla Sapienza**: l'uscita della porta dipende dall'ateneo, e la
Sapienza resta bloccata finché la sua checklist non è validata.

**Criterio di uscita.** Le 6 tappe navigabili da tocco e tastiera; fixture di
migrazione verdi per **ogni input legacy elencato sopra** (2 valori vecchi +
assente + sconosciuto + contenitore corrotto + zaino piatto) × 2 atenei × con/senza
`la`); uno zaino `selezionato` con accettazione non spuntata apre
sull'**accettazione**, non sul LA.

**Rischio.** ALTO — la fase che tocca più `js/app.js` e `index.html`.

### V3 — Entrata a tutta pagina 🔴 online entro il 15 novembre (ottobre)

> ⚠️ **La scena esiste** (`#home-benvenuto`). Questa fase è una **lista di
> differenze**, non una seconda implementazione parallela.

**Le differenze rispetto a oggi:**

| # | Oggi | v3 |
|---|---|---|
| 1 | Mappa in un riquadro **sotto la piega** | **A tutta pagina**, spostata a destra, velo scuro a sinistra |
| 2 | Titolo, claim, fumetto e CTA impilati sopra la mappa | Claim + **un solo** bottone sul velo; nient'altro nella prima schermata |
| 3 | 3 domande (ateneo, dipartimento+livello, lingue) | **+ la porta d'ingresso come primo passo** (via stepper) e **+ lo smistamento finale** |
| 4 | La mappa **non reagisce** durante le domande | **Reagisce a ogni risposta**: filtra, poi colora |
| 5 | Salto delle lingue **muto** | Salto **con la conseguenza scritta** |
| 6 | «Hai già in mente le destinazioni?» **nelle Mete, e ricompare** | Ultimo passo dell'entrata, **mai più** |

**La macchina a stati — una sola definizione, numerata** (la rev. 1 ne dava tre
in conflitto: «5 passi», una tabella da 6 righe, «3+2»):

| Passo | Chiede | Obbligatorio | La mappa |
|---|---|---|---|
| **P1** | Porta d'ingresso (3 opzioni, via stepper) | **sì** | ferma |
| **P2** | Ateneo | **sì** | si centra sull'ateneo |
| **P3** | Dipartimento **e** livello (una schermata sola, come oggi) | **sì** | **filtra gli spilli** |
| **P4** | Lingue | **no** | **colora gli spilli** |
| **E** | Smistamento «hai già in mente le mete?» | — | **schermata di esito, non un passo** |

**3 passi obbligatori su 4.** P3 resta unito com'è già in codice
(`benvPassoLivello` dentro il passo 2). E non è un passo: è la schermata di
esito che chiude l'entrata e smista verso le Mete.

**Il cambio ateneo oggi provoca un `location.reload()`** perché viene caricato un
solo dataset, e i dati Sapienza pesano ~1,8 MB. **Decisione richiesta e da
testare in questa fase**: o si accetta il reload **con ripresa affidabile del
passo** (lo stato dell'entrata sopravvive al ricaricamento), o si passa al
caricamento asincrono del solo ateneo scelto. **Raccomando il reload con
ripresa**: è il comportamento attuale, il rischio è contenuto, e l'ateneo si
sceglie una volta sola in tutta la vita dell'utente.

**Accessibilità della mappa — vincolo, non consiglio.** I pin sono `<button>`
reali: dopo il filtro se ne inseriscono decine o centinaia **prima** delle
risposte successive, e un utente da tastiera dovrebbe attraversarli tutti.
Durante l'entrata i pin escono dall'ordine di Tab (o si usa un controllo a fuoco
singolo). **Il colore non basta**: compatibilità comunicata anche con forma o
testo, più legenda e `aria-live` sul conteggio che cambia.

**Prestazioni — protocollo ripetibile, non «fluido».** `mappaClusterizza()` cerca
linearmente un gruppo vicino per ogni città, e ogni aggiornamento **distrugge e
ricrea tutti i pin**. Con la Sapienza sono **~1.595 record elaborati** a ogni
aggiornamento, che diventano ~385 gruppi e **~50 pulsanti a 390px** (vedi le tre
grandezze in cima al piano). **Il collo di bottiglia va confermato misurando**,
non dedotto dalla lettura del codice.

| Voce | Valore |
|---|---|
| Dataset | **Sapienza** (il peggiore: 1.595 record), nessun filtro applicato |
| Dispositivo | **modello esatto, versione Android e versione Chrome registrati nel referto**. Riferimento indicativo: un Android sotto i 250 € dell'anno in corso — ma senza le tre versioni la misura non è ripetibile |
| Browser | Chrome stabile, profilo pulito, **throttling CPU 4×** in DevTools |
| Prove | **5 esecuzioni**, si giudica il **valore peggiore** (non la media) |
| Soglie | risposta al tocco **< 100 ms**; **nessun task > 50 ms** |
| Si misura | **le tre grandezze separate**: record elaborati, gruppi geografici, pulsanti creati |

**Rimedi in ordine, dal più mirato:** (1) memoizzare il raggruppamento per città
— si calcola **una volta**, il filtro lavora sui gruppi; (2) bucket spaziali al
posto di `out.find()` lineare; (3) aggiornamento **incrementale** del DOM. Se
sfora ancora: comparsa/scomparsa **senza transizione** — **il filtraggio non si
taglia**, è il motivo per cui l'entrata regge 4 passi.

**Criterio di uscita.** Budget rispettato e misurato; entrata completabile da
tastiera senza attraversare i pin; chi l'ha già fatta non la rivede; il reload
di cambio ateneo riprende dal passo giusto; `prefers-reduced-motion` spegne le
transizioni senza perdere informazione.

### V4 — Home «Adesso» + stato pre-bando (ottobre)

**La regola, vincolante anche per Codex:** *nella home entra solo ciò che è vero
adesso e per cui c'è qualcosa da fare.* Un blocco che informa senza chiedere
un'azione **non entra**.

**Contiene**: la tappa corrente con la barra di avanzamento **in cima** · **una**
mossa principale · **le scadenze principali**, e una scadenza in home non è mai
un numero ma **numero + la cosa da fare**, col collegamento al passo che la
chiude. Senza azione collegata, non entra.

**Lo stato pre-bando è il caso normale da qui a dicembre**, non un caso limite:
finché il bando 2027/28 non esce, la home dice che non è uscito, indica la
finestra attesa e propone l'unica azione sensata (esplorare, verificare i
requisiti che **non** dipendono dal ciclo, **farsi avvisare** — che è V5).
Tutto ciò che dipende dal ciclo — iscrizione 2025/26, scadenza CFU 25/02/2026,
finestra di mobilità 2026/27 — è **nascosto o marcato «storico 2026/27, non
valido per candidarsi al 2027/28»**. È il gate G1.

**Esce**: il claim del sito (sta nell'entrata) · «Ciao, Studente» senza nome
(→ invito a completare il profilo) · «Modifica profilo» dal blocco progresso
(→ drawer) · «1 meta non è sulla mappa» (→ accanto alla mappa, nelle Mete) · i
riassunti delle altre sezioni. Su telefono i due bottoni **uno sotto l'altro**.

**Chi torna già selezionato** apre sulla stessa home, con la tappa corrente e la
mossa **calcolate da `CHECKLIST_POST`** (V2), non fissate sul LA.

**Criterio di uscita.** A 390×844 l'informazione principale è visibile **senza
scorrere** (soglia esplicita, non «una schermata»); inventario dichiarato dei
contenuti ammessi in home, e nessun elemento fuori inventario; le tre fasi × lo
stato pre-bando danno home diverse e coerenti.

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
