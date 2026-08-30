# ORDINE DI LAVORO — Fase 4b, **CONSEGNA 2b-2**: la lettura

Sei l'esecutore. La specifica congelata e' `SPEC_FASE4B_lettura.md`. Leggi, in
quest'ordine: **§3.2** (cosa deve fare la lettura), **§2 quinquies** (le
decisioni di stasera: **E1 ed E4 ti riguardano direttamente**), **§2 quater
difetti 2, 3 e 5** (tre difetti aperti che questa consegna deve chiudere), e
**§7** (cosa non fare).

Cartella di lavoro: `C:\erasmuswiz-mappatura`. Node 22. Windows.

**Sullo stato di Git: non e' una tua preoccupazione.** La 2b-1 e' chiusa e
committata (`7421d78`). Tu non fai commit, push o rami.

**La raccolta sta girando** e scrive in `raccolta/pagine/`: non fermarla, non
aspettarla. La cache cresce sotto di te, quindi **le prove non devono dipendere
da quello che c'e' dentro**: costruisci tu le cartelle finte che ti servono.

## Com'e' andata la 2b-1

Bene. `riscarica-pdf.mjs` regge: le sei prove sono state viste rosse due volte,
una con le tue rotture e una con altre sei scelte da chi ha riletto il codice.
E la rilettura ha trovato un difetto della Fase 4a che non era tuo: il
limitatore prendeva un posto e non lo restituiva quando l'indirizzo non era un
URL assoluto, e dopo sei perdite si bloccava per sempre. Corretto, con il caso
costruito. **212 prove verdi.**

## Il compito, in una riga

`scripts/leggi-partner.mjs`: per ogni partner con campi mancanti e pagine gia'
in cache, **una sola chiamata al modello**, e un file di lettura per partner in
`raccolta/letture/<CARTELLA>.json`.

**Non scrivi nei dati del sito.** Quella e' la 2b-3. Qui si produce soltanto il
file di lettura, che poi i cancelli (`cancelli.mjs`, gia' fatto e provato)
accetteranno o butteranno via.

## LA COSA PIU' IMPORTANTE, prima di tutto il resto

Il vincolo non negoziabile del progetto e' che **la citazione compaia lettera
per lettera nel brano davvero inviato al modello**. Il cancello che lo verifica
esiste gia' e funziona: ricostruisce il brano prendendo i primi `caratteri`
caratteri del file della pagina e **controlla che lo SHA-256 coincida con
l'`impronta`** che tu registri.

Quindi: **se `leggi-partner.mjs` non scrive `impronta` e `titolo` in ogni voce
di `pagineInviate`, il cancello scarta tutto e la consegna e' inutile.**
`impronta` = SHA-256 (`node:crypto`) del testo **esattamente come e' finito nel
prompt**, cioe' dopo il taglio. Se tagli, l'impronta e' del testo tagliato.
`titolo` = il campo `titolo` del file della pagina, copiato: serve al cancello
sul livello (§2 quater difetto 5, che oggi legge un campo che nessuno produce).

## Cosa deve fare

**Scelta dei partner.** Quelli di `raccolta/partner.json` con `campiMancanti`
non vuoto e la cui cartella in `raccolta/pagine/` ha `esito: "raggiunto"`.
`--limite=<n>` e `--partner=<CODICE>` per lavorare su pochi.

**Scelta delle pagine** (§3.2): ordinate per `punteggio` decrescente
dall'indice; si saltano quelle con `testo: null` e quelle sotto 200 caratteri;
tetto **40.000 caratteri per pagina** (taglio al confine di parola, e si annota
`tagliata: true`), tetto **250.000 caratteri per partner**. Non sono tetti
decorativi: in cache c'e' gia' un partner da **848.000** caratteri utili, e la
spec ne cita uno da 11 milioni.

**Il modello** (§3.2 e §2 quinquies E4). All'avvio elenca i modelli davvero
disponibili sulla chiave (`GET .../v1beta/models`) e **scrivi quali sono nel
resoconto**. Default `GEMINI_MODEL` = il Flash-Lite piu' recente fra quelli
elencati; misurato il 30/08 e' `gemini-3.5-flash-lite`. Se un Flash-Lite non
c'e', **fermati e dillo**, non ripiegare in silenzio. Endpoint e forma della
chiamata: copiali da `gemini-sgrossatura.mjs`, che funziona, **ma senza il
grounding Google Search** — qui il modello non deve cercare niente.
`thinkingLevel` da variabile d'ambiente, default `LOW`.

**Il prompt** (§2 quater difetto 2 — bloccante: il prompt della prima stesura
era una riga generica). Si **riusa quasi per intero quello di
`gemini-sgrossatura.mjs`**, che ha gia' le regole CEFR, il formato dell'albero
ANY/ALL, il formato di `scadenzeOspitante`, una lingua per foglia, la
distinzione fra studenti di laurea e di scambio, e "ometti se non sei sicuro".
Quattro cambiamenti, e solo quattro:

1. le pagine sono **allegate qui sotto**, numerate, con il loro URL, e il
   modello **non deve usare nient'altro**: ne' la memoria, ne' il web;
2. la citazione va **copiata carattere per carattere** dalla pagina, e il
   modello dichiara **da quale pagina numerata** l'ha presa;
3. per ogni campo il modello dichiara `livello` con valore "ateneo" oppure
   "facolta" e, se "facolta", anche `ambito` con il nome che la facolta' ha
   sulla pagina. Se non riesce a capirlo dichiara "facolta": **il dubbio va
   sempre verso il livello piu' stretto**;
4. per ogni campo **richiesto e non trovato**, lo elenca in `nonTrovati`, che
   associa al nome del campo il numero della pagina piu' pertinente letta.
   Senza questo la D7 non si puo' costruire: e' il difetto 3, ancora aperto.

**L'uscita**, un file per partner in `raccolta/letture/<CARTELLA>.json`, nella
forma del §3.2, con `impronta` e `titolo` in ogni voce di `pagineInviate`.
**Checkpoint per partner**: ogni partner letto scrive subito il suo file, e al
rilancio i partner gia' letti non si richiedono al modello.

**La quota** (§3.2). Su HTTP **429** ci si ferma **subito e in modo pulito**, si
scrive quanti partner si erano letti, e **si esce con codice 0**: non e' un
errore, e' il tetto giornaliero. Il numero di chiamate riuscite prima del 429
**va scritto nel resoconto**: e' la misura che la Fase 5 aspetta, e nessuno la
conosce ancora. Uscita 1 solo se non ha potuto cominciare.

**Un resoconto leggibile a schermo**, piu' `raccolta/lettura-resoconto.json`
con gli stessi numeri: partner letti, chiamate riuscite, chiamate fallite per
motivo, campi proposti per campo, `nonTrovati` per campo, caratteri inviati
(mediana e massimo), i modelli elencati, e se c'e' stato un 429.

## Il vincolo che cambia la forma del codice (§2 quinquies E1)

**Tu non chiami il modello vero.** Una passata su 100 partner e' un'ora, tu ti
tagli a 240 secondi, e i tuoi tentativi brucerebbero la quota giornaliera che
e' proprio la misura che aspettiamo. **Nel tuo ambiente la chiave non c'e'.**

Quindi la funzione che chiama il modello e' **un parametro**, con quella vera
come valore predefinito: la stessa tecnica gia' usata per `statoLink` in
`cancelli.mjs` e per lo scaricatore in `riscarica-pdf.mjs`. Tutte le tue prove
girano con un modello finto. La passata vera la lancia Claude dopo aver letto
il tuo diff.

## Cosa NON fare

- **Zero dipendenze nuove.**
- **Una sola chiamata al modello per partner.** Non una per campo, non una per
  pagina.
- **Non chiamare il modello vero**, e non cercare la chiave.
- Non scrivere niente dentro `js/atenei/`: questa consegna non tocca i dati.
- Non scrivere `applica-partner.mjs`: e' la 2b-3.
- Non toccare `cancelli.mjs` (la correzione E3 e' della 2b-3), `lib-pdf.mjs`,
  `riscarica-pdf.mjs`, `lib-output-batch.mjs`, `applica-batch.mjs`.
- Di `raccogli-partner.mjs` non si tocca piu' niente: le quattro esportazioni
  ci sono gia'.
- Niente grounding, niente ricerca web: le pagine ce le ha davanti (§7).
- Non attivare la fatturazione sul progetto Gemini, e non proporlo.
- Niente commit, push o rami.
- Se una regola si rivela impossibile o sbagliata: **fermati e dillo**.

## Come devi provare che funziona

Prove nuove in **`test/leggi-partner.test.mjs`**, tutte con il modello finto e
con cartelle di pagine costruite dal test.

**Le prime due sono le piu' importanti, e vanno costruite da un capo all'altro:
non basta provare la funzione, va provato il percorso vero.** E' la lezione
pagata il 30/08, quando un difetto bloccante e' passato con 196 prove verdi
perche' coprivano la funzione e non chi la chiamava. Quindi: prendi il file di
lettura che `leggi-partner.mjs` ha davvero prodotto e **passalo a
`applicaCancelli()` di `cancelli.mjs`**, e guarda cosa ne esce.

1. **L'impronta e' del brano vero.** Una pagina da 50.000 caratteri, con una
   frase riconoscibile **dopo** il carattere 40.000. Il modello finto cita
   quella frase. Attraverso `applicaCancelli()` il campo deve finire negli
   **scartati** con causa `citazioneAssente`. Poi la stessa prova con una frase
   che sta **prima** del carattere 40.000: deve arrivare agli **approvati**.
   Servono entrambe le meta': la prima dimostra che il cancello morde, la
   seconda che non morde tutto.
2. **Il titolo arriva a destinazione.** Una pagina il cui `titolo` contiene
   "Faculty of Law", con il modello finto che dichiara livello "ateneo" su un
   `requisitoLingua`. Attraverso `applicaCancelli()` il campo dev'essere
   **declassato a facolta'** e finire in riconciliazione, non fra gli approvati.
3. **`nonTrovati` c'e' davvero.** Il modello finto omette un campo richiesto e
   lo elenca in `nonTrovati`: il file di lettura lo riporta con il numero di
   pagina, e quel numero e' fra le pagine inviate.
4. **I tetti tengono.** Un partner con pagine per milioni di caratteri: nessuna
   pagina inviata supera 40.000 caratteri, il totale non supera 250.000, le
   pagine tagliate hanno `tagliata: true`, il taglio cade su un confine di
   parola, e **l'impronta corrisponde al testo tagliato**, non a quello intero.
5. **Le pagine mute si saltano**: `testo: null` e testo sotto 200 caratteri non
   entrano in `pagineInviate`.
6. **La ripartenza**: rilanciando sugli stessi partner, **zero chiamate nuove**
   al modello finto, e i file di lettura restano identici.
7. **Il 429**: il modello finto risponde 429 alla terza chiamata. Lo script si
   ferma, i due partner gia' letti restano scritti, il resoconto dice
   "2 chiamate riuscite", e il **codice di uscita e' 0**.

**Ogni prova va vista fallire**, e la rottura va scritta nel resoconto. Per la
1 in particolare: se calcoli l'impronta sul testo **intero** invece che sul
brano inviato, la prova deve diventare rossa. Se resta verde, la prova non
prova niente e va rifatta.

- `npm run test:unit` resta verde. Oggi sono **212** prove.
- **Non** lanciare `npm run test:ui`: dura oltre 300 secondi e verrebbe
  troncato.

## Il resoconto finale

1. i file nuovi e quelli modificati;
2. **il prompt che hai costruito, per intero**: e' il pezzo che decide la resa,
   e va letto da un umano prima della passata vera;
3. l'esito di ogni prova prima (rossa) e dopo, e **che cosa hai rotto** per
   ciascuna;
4. il numero di prove prima (212) e dopo;
5. come si lancia la passata vera, con gli argomenti esatti;
6. tutto cio' su cui ti sei fermato o che hai trovato ambiguo.

Se qualcosa non ti torna, scrivilo invece di scegliere al posto nostro.
