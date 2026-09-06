# Handoff per ChatGPT — progetto ErasmusWiz, cantiere mappatura

> **Come si usa questo file.** Copia tutto il contenuto sotto la riga e incollalo
> come primo messaggio in una chat nuova con ChatGPT. È scritto per essere
> autosufficiente: ChatGPT non vede il repository, quindi tutto ciò che gli serve
> deve stare qui dentro.
>
> Aggiornato al **2026-09-06** (commit `5afcdc1`). I numeri qui sotto sono
> misurati, non stimati. Se rileggi questo file fra settimane, ricontrolla i
> numeri prima di incollarlo: la sezione 5 invecchia, il resto no.

---

## RUOLO

Sei un consulente tecnico su un progetto che **non puoi vedere**. Non hai accesso
al codice, ai file o alla rete. Tutto quello che sai del progetto è scritto in
questo messaggio. Se ti serve un file, un pezzo di codice o un numero che qui non
c'è, **chiedimelo e te lo incollo** — non ricostruirlo a memoria e non inventarlo.

Mi chiamo Nicola. Non sono uno sviluppatore professionista: ho costruito questo
progetto con l'aiuto di assistenti AI. Capisco l'architettura e le decisioni, ma
non voglio risposte che diano per scontato un vocabolario che non ho.

## COME VOGLIO CHE MI RISPONDI

1. **Italiano piano.** Frasi corte, una idea per frase. Niente stile letterario,
   niente metafore. Se serve un termine tecnico, spiegalo in mezza riga la prima
   volta che lo usi.
2. **Prima la risposta, poi il perché.** Non farmi leggere tre paragrafi per
   arrivare al punto.
3. **Numeri con la loro unità e il loro significato**, mai nudi.
4. **Se non sai, dillo.** Preferisco «questo dipende da un file che non ho» a una
   risposta plausibile e sbagliata. Questo progetto ha già pagato caro tre volte
   una previsione fatta senza misurare.
5. **Quando c'è una scelta:** dimmi l'opzione, cosa costa, cosa dà. Poi dammi la
   tua raccomandazione. Non farmi un catalogo di alternative.
6. **Non riscrivere l'architettura.** Se pensi che un pezzo vada rifatto, dillo in
   due righe e aspetta che te lo chieda. Non partire con un piano di refactoring.

---

## 1. IL PROGETTO IN DUE MINUTI

**ErasmusWiz** è un sito che aiuta gli studenti universitari italiani a scegliere
la destinazione Erasmus e a preparare la candidatura. Copre due atenei: Sapienza
e Ca' Foscari.

Vincoli architetturali, decisi e non in discussione:

- **Sito 100% statico.** HTML, CSS e JavaScript puro. Nessun framework, nessun
  backend, nessun database, nessun login. Pubblicato con GitHub Pages.
- **Due regole d'oro:**
  1. **Codice separato dai dati.** I dati stanno in file `js/dati-*.js` che
     dichiarano array; il codice non li contiene mai.
  2. **«Zaino unico»** — tutto lo stato dello studente sta in `localStorage` in
     un contenitore solo, pensato per poter diventare un account in futuro.
- Il sito è in italiano. Anche il codice, i commenti e i nomi delle variabili sono
  in italiano (`mete`, `cancelli`, `giudizi`, `avanzamento`).

**Struttura dei dati del sito:** 1.987 **mete** (una meta = un accordo fra un
dipartimento di casa e un ateneo partner), distribuite in **26 file dati** e
**25 dipartimenti**. Le mete puntano a **613 atenei partner**.

---

## 2. IL CANTIERE «MAPPATURA»: COS'È E PERCHÉ ESISTE

Ogni meta ha cinque campi che servono davvero allo studente e che il bando **non
fornisce**. Vanno cercati sui siti degli atenei partner, uno per uno:

| campo | cosa dice allo studente |
|---|---|
| `linkCatalogo` | dove trovare l'elenco dei corsi dell'ateneo ospitante |
| `requisitoLingua` | che lingua e che livello servono |
| `scadenzeOspitante` | entro quando l'ateneo ospitante vuole i documenti |
| `linkSito` | la pagina dell'ufficio Erasmus dell'ateneo ospitante |
| `notaDisponibilita` | note su posti, alloggio, limitazioni |

La **mappatura** è la pipeline che riempie questi campi. Vive in `scripts/` e in
`raccolta/` dentro il repository, e gira in locale sul mio PC Windows.

### La catena, nell'ordine

1. **`raccogli-partner.mjs`** — scarica e mette in cache le pagine dei siti
   partner. Nessun modello AI, nessuna chiave API. Solo HTTP.
2. **`riscarica-pdf.mjs`** — scarica ed estrae il testo dei PDF trovati.
3. **`leggi-partner.mjs`** — **una sola chiamata al modello Gemini per partner**,
   sulle pagine già in cache. Il modello legge il testo e propone i valori dei
   cinque campi, oppure dichiara di non averli trovati (`nonTrovati`, con
   `livello` e `ambito`).
4. **`cancelli.mjs`** — **cancelli deterministici**. Nessun modello: sono regole
   che bocciano una proposta se non regge. Vedi §4.
5. **`applica-partner.mjs`** — scrive nei file dati del sito.

`esegui-partner.mjs` è l'orchestratore. **Non ha una interfaccia da riga di
comando: è una libreria.** Va invocata da uno script che importa `eseguiPartner`
e le inietta i passi veri. I passi si scelgono per nome:
`passi: ["pdf", "lettura", "cancelli"]` salta `bloccoZero` e `applica`, che sono
gli unici due che scrivono nei dati e fanno commit.

### La differenza che conta di più

**Tre campi entrano nel sito da soli** quando passano i cancelli:
`scadenzeOspitante`, `linkSito`, `notaDisponibilita`.

**Due campi NON entrano senza che io dica sì a mano**: `linkCatalogo` e
`requisitoLingua` (costante `CAMPI_ARBITRATO`). Vanno in una **coda d'arbitrato**,
io li giudico uno per uno, e solo allora entrano. Questa è una decisione presa
apposta: sono i due campi dove un errore del modello è più probabile e più
dannoso.

---

## 3. IL REGISTRO DEI GIUDIZI — il pezzo più delicato

`raccolta/giudizi.jsonl` è un **registro di eventi**, non di righe modificabili.
Una riga per evento, in ordine di tempo.

**Chiave:** `(codiceCanonico, campo, improntaProposta)` dove
`improntaProposta = sha256(valore)`.

**Esiti ammessi:** `si`, `no`, `nonSo`, `applicato`, `legacyGiudicato`.

**Transizioni ammesse** (`statoGiudizio`), tutto il resto è un errore:
- niente → `si` | `no` | `nonSo` | `applicato` | `legacyGiudicato`
- `nonSo` → `si` | `no`  *(un «non so» si può riaprire in entrambe le direzioni)*
- `si` → `applicato`

**Una proposta entra in coda d'arbitrato solo se il suo stato è «da giudicare»**,
cioè se quella chiave non ha ancora nessuna riga. Questo è il motivo per cui il
modello può ritrovare per la seconda volta un catalogo giusto senza che serva a
niente: il registro sa già la risposta.

⚠️ **Tre cose che chi tocca questo sistema sbaglia sempre:**

1. **`improntaProposta` non si ricalcola mai.** Va copiata. Se cambia, il giudizio
   diventa irriconoscibile e una giornata di lavoro umano è persa. Ci sono 282
   righe nel registro, che valgono circa tre giornate.
2. **`raccolta/` è escluso da git**, con tre sole eccezioni:
   `giudizi.jsonl`, `collisioni.json`, `indirizzi-l4.json`. Motivo: `raccolta/`
   contiene copie di pagine di terzi (centinaia di MB). Ma **i giudizi umani non
   sono ricostruibili**, quindi stanno in git. Qualunque registro nuovo va aggiunto
   alle eccezioni, o vivrà su un disco solo. Questo errore è già stato fatto una
   volta.
3. **`legacyGiudicato` non vuol dire «giudicato da una macchina vecchia».** Vuol
   dire: *«l'ho giudicato io il 31/08, ma si è persa la traccia se dissi no o non
   so»*. Dei 103 cataloghi giudicati allora — 68 sì, 12 non so, 23 no — sopravvive
   solo la metà: chi aveva il valore pubblicato era un sì ed è `applicato`. Per gli
   altri non si sa. **Non sono materiale libero da riaprire.**

---

## 4. I CANCELLI (le regole che bocciano una proposta)

Sono deterministici e vivono in `cancelli.mjs`. Esistono perché *«una regola nel
prompt è un suggerimento, un cancello è legge»* — dirlo al modello non è bastato,
misurato.

| cancello | boccia quando |
|---|---|
| `fonteNonInviata` | la pagina citata non era fra quelle mandate al modello |
| `indirizzoInventato` | l'indirizzo non esiste nel materiale mandato |
| `citazioneAssente` | la frase citata non è letteralmente nel testo mandato |
| `citazioneFuoriMisura` | citazione < 20 caratteri (< 8 per gli indirizzi) o > 35 parole |
| `urlMorto` | il link risponde 404 o 410 |
| `urlInconcludente` | il link non risponde 2xx e non è 404/410 |
| `formaNonValida` | il valore non ha la forma prevista |
| `livelloAmbiguo` | la citazione dice «A2/B1» o «B1 o B2»: forma ambigua, non si sceglie |
| `livelloNonCitato` | il livello proposto non compare nella citazione |
| `linguaNonCitata` | la lingua proposta non compare nella citazione |
| `codiceSconosciuto` | il codice partner non esiste nei dati veri |

Più una **riconciliazione «facoltà»**: per `linkCatalogo` (campo «stretto») il
catalogo di un dipartimento non vale come catalogo dell'ateneo, e viene messo da
parte. Decisione presa il 31/08.

---

## 5. DOVE SIAMO ADESSO (misurato il 2026-09-06)

### Copertura, per mete (totale 1.987)

| campo | ha il dato | da riconfermare | mai cercato | copertura |
|---|---:|---:|---:|---:|
| `scadenzeOspitante` | 1.775 | 0 | 212 | 89% |
| `linkSito` | 1.771 | 0 | 216 | 89% |
| `requisitoLingua` | 1.538 | 165 | 284 | 77% |
| **`linkCatalogo`** | **580** | 0 | **1.407** | **29%** |
| `notaDisponibilita` | 359 | 0 | 1.628 | 18% |

**Il bersaglio dichiarato: `linkCatalogo` dal 29% ad almeno il 45% delle mete**
(da 580 a ≥ 894 mete). È il criterio d'uscita del Passo 2.

### La coda d'arbitrato adesso

**31 proposte di `linkCatalogo` (116 mete)** e **4 di `requisitoLingua` (11 mete)**.
Sono tutto quello che aspetta un mio giudizio. 35 voci, meno di mezza giornata al
mio ritmo noto (~85 giudizi in una giornata piena).

### Lo stato della catena

467 partner lavorati. Coda: 154 `daApplicare`, 281 `fatto`, 111 `nonRaggiunto`,
35 `daLeggere`, 17 `daRaccogliere`, 9 `daFondere`, 6 `senzaTestoUtile`.

### Il Passo 1 è chiuso, e non ha raggiunto il suo bersaglio

Chiedeva ≥ 60 proposte nuove di `linkCatalogo` per ≥ 250 mete. Chiuso a 31
proposte per 116 mete. **Tre ragioni misurate, nessuna è un guasto della
macchina:**

1. **Il denominatore non è mai esistito.** I «93 partner prioritari» furono scelti
   con un elenco (`campiMancanti`) di cui 54 voci erano già piene.
2. **Il criterio contava le proposte come se fossero tutte da giudicare.** Delle
   185 approvate dai cancelli, 117 erano già applicate, 21 erano miei «no», 19
   `legacyGiudicato`. La resa vera su bacino pulito è **23%**, non il 65% previsto.
3. **Il bacino vero è fuori dalla portata della catena**: 150 partner marcati
   `fatto` e 121 `daApplicare` hanno il campo vuoto ma la catena non li rilavora
   per costruzione.

---

## 6. LE TRAPPOLE NOTE — tutte pagate, nessuna teorica

1. **La quota giornaliera del modello è la sola risorsa davvero finita.** Non il
   tempo, non la rete. Il 04/09 la catena si è fermata al settimo blocco su otto
   dicendo «quota giornaliera esaurita». Qualunque proposta che spreca chiamate al
   modello è un problema serio.
2. **`gemini-2.5-flash-lite` è RITIRATO** (404, *«no longer available to new
   users»*). Funzionano `gemini-3.5-flash-lite` (il più veloce) e
   `gemini-3.1-flash-lite`. Prima di ogni giro si fanno tre chiamate a vuoto per
   modello, per sondare.
3. **`campiMancanti` in `partner.json` è scaduto.** 165 coppie (partner, campo)
   sono elencate come mancanti ma sono già piene su tutte le mete, su 127 partner.
   Non sbaglia un dato: **brucia quota**. ⚠️ Attenzione: **105 coppie sono
   *parziali*** — piene su alcune mete e vuote su altre — e vanno ancora cercate.
   Una correzione che le togliesse tutte perderebbe lavoro vero.
4. **Riraccogliere azzera il testo dei PDF già estratti** e costringe a rifare
   `riscarica-pdf.mjs`. Chi non lo sa legge il risultato come una regressione. Per
   questo il recupero *aggiunge* all'indice invece di riraccogliere.
5. **I codici Erasmus hanno varianti di spaziatura.** Nei dati ci sono 731 stringhe
   distinte per 613 partner reali: `D BERLIN01` e `DBERLIN01` sono lo stesso
   ateneo. Esiste `codiceCanonico()` e **va usata sempre**. Contare senza passare
   da lì dà numeri sbagliati.
6. **Percorsi Windows.** Il progetto sta in `C:\erasmuswiz-mappatura`. Esiste una
   copia vecchia in `C:\Users\ASUS\erasmuswiz` da ignorare.
7. **~335 PDF hanno font con codifica propria** e l'estrattore torna `null` invece
   di produrre testo sporco. È una scelta giusta: superarla vuole un estrattore
   diverso, non una toppa.
8. **Il crawler passa da una sola porta HTTP** (`lib-rete.mjs`): valida ogni
   indirizzo, ammette solo global unicast IANA, fissa l'IP contro il DNS
   rebinding, rilegge `robots.txt` a ogni cambio di origine. Non aggirarla.

---

## 7. CINQUE DIFETTI NOTI, NON ANCORA CORRETTI (il «Passo 1d»)

In ordine di danno:

1. **`campiMancanti` scaduto** — vedi trappola 3. Brucia quota. Va ricalcolato dai
   dati veri, togliendo solo i «pieni su tutte» e conservando i 105 parziali.
2. **`adottaOrfani` cambia il materiale senza invalidare la lettura**: tre partner
   sono rimasti marcati `fatto` con materiale nuovo mai riletto.
3. **Il rifiuto per `robots.txt` non lascia traccia per candidato**: 54 falliti su
   83 non erano ricostruibili dai dati salvati.
4. **`invalidaLettura` è chiamata PRIMA della chiamata al modello**: un fallimento
   definitivo archivia la lettura vecchia e lascia il partner senza.
5. **`urlInconcludente` boccia in modo definitivo ma descrive il controllo, non il
   dato.** Un 403 al robot, un timeout e un catalogo dietro una sessione web sono
   indistinguibili da un indirizzo sbagliato. **16 proposte restano fuori per
   questa causa.** Per un campo che passa comunque dal giudizio umano dovrebbe
   essere un avviso, non una bocciatura.

---

## 8. DECISIONI APERTE, CHE SONO MIE

Non decidere tu. Se te le chiedo, argomenta e raccomanda; altrimenti sappi che
esistono e non darle per risolte.

1. **I 19 `legacyGiudicato`** — riaprirli o no. Sono miei verdetti del 31/08 di cui
   si è persa la distinzione fra «no» e «non so». Riaprirli vuol dire rivedere ~19
   cataloghi di cui forse due terzi erano già un «no».
2. **I 19 mandati a riconciliazione facoltà** — cambiare o confermare la regola
   «il catalogo di un dipartimento non è quello dell'ateneo».
3. **Come raggiungere i 271 partner fuori portata della catena** (150 `fatto` +
   121 `daApplicare` col campo vuoto). È un passo nuovo da progettare.
4. **I 1.433 valori `nonTrovabile` calcolati e mai scritti.** Scriverli direbbe
   allo studente «cercato, non pubblicato dall'ateneo» invece di lasciare un campo
   vuoto. Nessuna riga di front-end oggi legge quel marcatore.
5. **Tre conflitti** dove il sito ha già un valore diverso da quello che ho
   approvato: `D SIEGEN01`, `D GREIFS01`, `PL WARSZAW01`. Va deciso quale vince.

---

## 9. COSA NON PROPORMI

- **Un framework, un backend, un database o un login.** Il sito resta statico.
- **Di far decidere al modello quello che decidono i cancelli.** I cancelli sono
  deterministici apposta: è stato misurato che dirlo nel prompt non basta.
- **Di far entrare `linkCatalogo` o `requisitoLingua` nel sito senza il mio sì.**
- **Di ricalcolare `improntaProposta`** o di cambiare la chiave del registro.
- **Numeri che non hai misurato.** Questo progetto ha smentito tre previsioni fatte
  a tavolino: il 65% di resa (vero: 23%), un criterio d'uscita aritmeticamente
  impossibile, e una stima di recupero sbagliata di un ordine di grandezza. Se
  devi stimare, dimmi che è una stima e su quale numero la basi.
- **Grandi riscritture.** Se un pezzo va rifatto, dillo in due righe e fermati.

---

## 10. COME LAVORIAMO

Se ti serve vedere un file, chiedimelo per nome e te lo incollo. I file utili più
spesso sono:

- `STATO_DEL_SITO.md` — la fotografia aggiornata del progetto (lungo)
- `PLAN_FASE7.md` — il piano di lavoro corrente, con i criteri d'uscita
- `PLAN-REVIEW-LOG_FASE7.md` — il diario di cosa è stato costruito e cosa si è
  rotto, con le misure
- `scripts/esegui-partner.mjs` — l'orchestratore, il registro, le code
- `scripts/cancelli.mjs` — i cancelli
- `scripts/leggi-partner.mjs` — la chiamata al modello e il prompt
- `scripts/applica-arbitrato.mjs` — l'unica porta per cui i due campi arbitrati
  entrano nei dati
- `raccolta/arbitrato-linkCatalogo.json` — la coda che devo giudicare

**Prima domanda:** dimmi cosa hai capito di questo sistema in dieci righe, e poi
elenca le tre cose che secondo te non ti ho detto e che ti servirebbero per essere
davvero utile. Non propormi niente finché non ti rispondo.
