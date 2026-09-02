# Plan: ErasmusWiz — Fase 6: quello che la catena non può raggiungere
_Locked via grill — by Claude + Nicola, 2026-09-02, su `985cbd2`_
_Revisione 5, dopo quattro giri di Codex (vedi `PLAN-REVIEW-LOG_FASE6.md`)_

## Goal

La Fase 5 ha esaurito il suo territorio: 479 partner `fatto`, **zero
lavorabili**, e i 134 restanti sono fuori dalla portata della catena per
costruzione. La Fase 6 chiude ciò che resta in atti distinti e in quest'ordine:
(0) mettere al sicuro e riparare l'**impianto dell'arbitrato**, che oggi ha due
difetti che rendono impossibile chiudere una coda e uno che può far sparire una
proposta senza che entri nei dati; (1) svuotare le due code su dati **già
raccolti** — 9 `requisitoLingua` e 11 voci in riesame; (2) costruire la
**riserva L4** per i 23 partner che la catena non può nemmeno iniziare a
lavorare, e costruirla in modo che i 111 `nonRaggiunto` possano entrarci dopo
senza riscriverla; (3) **diagnosticare** i 708 PDF illeggibili dividendoli per
causa vera, per trasformare la domanda «serve una dipendenza?» da opinione in
misura. Nessuno di questi atti scrive un valore nei file del sito senza che
Nicola l'abbia guardato.

---

## Approach

### Atto 0a — Il registro dei giudizi non è in nessun commit *(va per primissimo)*

**Misurato, non supposto:**

```
$ git log --all -- raccolta/giudizi.jsonl
(nessun risultato: mai committato)
$ git check-ignore -v raccolta/giudizi.jsonl
.gitignore:12:raccolta/    raccolta/giudizi.jsonl
$ git ls-files raccolta | wc -l
0
```

`raccolta/giudizi.jsonl` contiene **254 eventi** — 57 `si`, 130 `applicato`, 17
`no`, 11 `nonSo`, 39 `legacyGiudicato` — cioè **tre giorni di arbitrato di
Nicola, valore per valore**. È l'unica cosa che autorizza `linkCatalogo` e
`requisitoLingua` a entrare nel sito: `applicaEControlla` rifiuta ogni proposta
che non abbia lì dentro un «sì» sulla sua impronta. **Vive su un disco solo, in
nessun commit, senza copia.** Un guasto, un `git clean -xdf`, una macchina nuova,
e la Fase 5 va rifatta a mano.

Non è un difetto della pipeline: è il presupposto della pipeline lasciato fuori.
E riguarda direttamente gli Atti 1 e 2, che in quel file scrivono.

**La correzione, e la trappola che il `.gitignore` documenta già.** La riga 12 è
`raccolta/`, e il commento in cima allo stesso file avverte:

> `fonti/*` e non `fonti/`: git non scende dentro una cartella esclusa, quindi
> con `fonti/` la riga di eccezione qui sotto sarebbe inefficace.

Quindi `!raccolta/giudizi.jsonl` **non funzionerebbe**: la regola va prima
riscritta come `raccolta/*`. Poi si versionano **solo i file non ricostruibili**,
non la cartella:

| file | perché versionarlo / non versionarlo |
|---|---|
| `giudizi.jsonl` | **versiona** — decisioni umane, irripetibili se non rifacendole |
| `indirizzi-l4.json` *(Atto 2)* | **versiona** — frutto di una ricerca a pagamento e non deterministica: due run danno due risposte |
| `collisioni.json` | **versiona** — `costruisciPartner` lo rilegge e lo rifonde a ogni ricostruzione, quindi porta storia che il ricalcolo da solo non rifarebbe |
| `fonti-irrecuperabili.json` | **no** — avevo scritto «una dichiarazione, non un calcolo», ed è falso: lo scrive `ricostruisciFonti()` confrontando proposte e dati pubblicati. È derivato, e versionarlo produrrebbe solo commit rumorosi |
| `pagine/`, `letture/` | **no**: copie di pagine di terzi, è la ragione per cui la riga 12 esiste |
| `partner.json`, `approvati.json`, `scartati.json`, `avanzamento.json` | **no**: derivati, si ricostruiscono |

**Versionarlo una volta NON basta, ed e' il secondo giro di Codex ad averlo
mostrato.** `applicaEControlla` mette in stage con un **elenco esplicito**, e il
commento accanto dice perche':

```js
// `git add` con elenco ESPLICITO: il worktree contiene file non tracciati e
// `raccolta/` e' ignorata. `git add -A` prenderebbe cose che non c'entrano.
git.esegui(radice, ["add", "--", ...manifesto.fileMete]);
```

Quindi, anche dopo l'Atto 0a, la catena **non committera' mai** `giudizi.jsonl`:
mette in stage solo i file delle mete. E un lotto di soli `no` e `nonSo` non
produce nemmeno un commit, perche' non cambia nessun dato del sito. Il registro
tornerebbe a essere una modifica locale mai pubblicata — lo stesso rischio,
guadagnato una volta e riperso subito.

**Correzione, e cosa NON si tocca.** `applica-arbitrato.mjs` committa e spinge
il registro **come atto proprio**, dopo aver scritto gli eventi e
indipendentemente dal fatto che i dati siano cambiati. Non si allarga il
`manifesto.fileMete` della catena: quell'elenco esplicito e' una difesa
deliberata, e allargarlo le farebbe committare file che oggi rifiuta per
scelta. Sono due commit distinti — uno dei giudizi, uno dei dati — ed e' giusto
che lo siano, perche' *registrare non e' applicare*.

**Ma l'ordine è vincolante, non una preferenza: è una barriera causale.** Con
due commit esiste una finestra in cui i dati sono pubblicati e il «sì» che li
autorizza non è mai arrivato sul remoto — il caso peggiore, perché rende il sito
inspiegabile a chi clona. L'ordine la chiude:

1. si scrive l'evento `si` / `no` / `nonSo`;
2. **si committa e si spinge il registro**;
3. se il commit o il push falliscono, **ci si ferma qui**: non si applica niente;
4. si applica il valore, si committa e si spinge il commit dei dati;
5. si scrive l'evento `applicato`, con il commit dei dati come `fonte`;
6. si committa e si spinge di nuovo il registro.

Così ogni interruzione lascia uno stato leggibile: dopo il passo 2 un
`siNonApplicato` col campo vuoto, che si ritenta; dopo il 4 un `siNonApplicato`
col valore esatto, che si chiude senza riscrivere niente; dopo il 5 ma prima del
6, la copia remota conserva `si` e lo stato si ricostruisce dai dati. **Anche il
caso «valore già uguale» fa il passo 6**, pur non avendo un commit di dati
nuovo: è proprio quello lo stato che va reso durevole.

**Chi esegue il recupero, e quando.** Una coda senza esecutore è
osservabilità travestita da soluzione — è il difetto che questo piano è nato per
chiudere, e sarebbe grottesco ricrearlo un livello più in là.
`da-recuperare.json` **non si consuma da solo**, e la prova 3 dice che
ripresentare lo stesso `si` non chiama l'applicatore: quindi serve un atto suo.
È `recuperaArbitrati()`, e gira **come primo passo di `applica-arbitrato.mjs`**,
sotto il lock e prima di classificare qualunque verdetto nuovo. È anche
invocabile da sola (`--solo-recupero`) per chi vuole chiudere i pendenti senza
avere verdetti da versare. Opera **anche sui pendenti nati da `--prova`**, che
sono pendenti a tutti gli effetti. Il caso «già uguale» lo chiude scrivendo
`applicato` e committando il **solo registro**, senza commit di dati: è
esattamente il passo 6 senza il 4.

**Il preflight, e la finestra che la barriera da sola non chiude.** L'ordine in
sei passi è sicuro *durante* un'esecuzione intera, ma il caso per cui esiste è
il **riavvio**, e lì si apre una crepa: se il processo muore fra il passo 5 e il
6, sul disco il registro finisce in `applicato` mentre sul remoto finisce
ancora in `si`. Al riavvio `statoGiudizio()` legge il file locale, vede uno
stato terminale, e non fa partire nessun recupero: il giudizio resta di nuovo
**solo su questo disco** — cioè il difetto dell'Atto 0a, rientrato dalla
finestra. Vale uguale per la morte dopo la scrittura di `si` prima del primo
commit, e per il commit locale mai spinto.

Quindi, prima di classificare qualsiasi cosa, sotto il lock:

1. si valida il registro **per intero** (vedi la quarantena, qui sotto);
2. si guarda se `giudizi.jsonl` ha **modifiche non committate**: le si committa e
   spinge, oppure ci si ferma;
3. si guarda se ci sono **commit locali del registro non ancora spinti**: si
   completa il push, oppure ci si ferma;
4. solo allora si passa al recupero e ai verdetti nuovi.

Nessuno di questi passi applica dati: mettono in pari il registro con il remoto,
che è la cosa che deve essere vera prima di tutto il resto.

**La semantica di `--prova` va detta, non lasciata implicita.** Oggi
`--prova` **scrive davvero gli eventi**, ed e' voluto (il commento nel codice lo
difende: il giudizio e' un fatto avvenuto). Con `siNonApplicato` questo
significa che un'anteprima **crea intenzionalmente uno stato pendente**. Resta
la scelta giusta, ma va (a) detta nel messaggio a schermo con parole non
equivoche, (b) coperta da una prova che fissa esattamente questo, (c) e il
commit del registro deve avvenire **anche in anteprima**, o l'anteprima
produrrebbe uno stato pendente non pubblicato — il caso peggiore di tutti.

**Le prove, e come si rompono.** Non basta che i file compaiano in
`git ls-files`: serve una prova che li elenchi **per nome** e fallisca se uno
sparisce dal versionato o se `pagine/` ci finisce dentro (rottura di controllo:
rimettere `raccolta/` al posto di `raccolta/*` deve farla diventare rossa). E
una seconda prova, sul chiamante: **un lotto di soli `no`/`nonSo` produce un
commit del registro**, pur non producendo nessun commit di dati.

Primo commit e push: prima di toccare qualunque altra cosa.

### Atto 0b — Una sola definizione dello stato di un giudizio

**Il difetto trovato eseguendo.** Un «non so» **non si può riesaminare**, in
nessuna delle due direzioni (provato in un albero finto):

| Nicola ha detto «non so», poi ci ripensa e dice… | cosa succede oggi |
|---|---|
| **sì** | `Error: 1 proposte su campi d'arbitrato senza un "si" nel registro` — fallisce **rumorosamente** |
| **no** | `{"verdetti":1,"no":1,"eventiNuovi":0}` — **zero eventi**, il registro resta `nonSo`, la voce ritorna in coda al giro dopo. Fallisce **in silenzio dicendo di aver funzionato** |

Causa: in `applicaArbitrato()` il filtro anti-doppione confronta la sola
esistenza della chiave `(codice, campo, impronta)`, che **non contiene
l'esito**. «Esiste già un evento su questo valore» viene scambiato per «questo
verdetto è già stato dato», e un cambio di parere viene silenziato.

**Ma la correzione di una riga non basta, ed è il primo giro di Codex ad averlo
mostrato.** Confrontare l'esito nuovo con quello corrente apre altri tre casi,
tutti verificati sul codice:

- `applicato` → `si` scriverebbe un evento `si`, **facendo regredire** uno stato
  già chiuso;
- `daApplicare` è costruito da **tutti** gli `abbinati` con esito `si`, non dai
  soli `nuovi`: un verdetto duplicato arriva comunque all'applicazione;
- se il valore è già uguale, `applica-partner` non modifica niente, non nasce un
  commit, e l'evento `applicato` non viene mai scritto: il registro resta a `si`.

**E un quarto caso, che esiste già oggi e che la correzione renderebbe più
frequente.** `appendiEventi` scrive **prima** che la transazione parta, e il
rollback non lo disfa. Se l'applicazione fallisce, resta un `si` nel registro
senza dato nei file. Da lì la proposta **sparisce da entrambe le code**:
`costruisciCode` la esclude perché *esiste un evento qualsiasi* (riga 149),
`codaRiesame` la esclude perché *l'ultimo evento non è `nonSo`* (riga 179). Una
proposta giudicata sì, mai entrata nei dati, **e invisibile**.

**La correzione: `statoGiudizio()`, una sola definizione.** Non un filtro
diverso, ma la stessa mossa che il progetto ha già fatto due volte —
`statoCampo()` per «campo vuoto», `codiceCanonico()` per «stesso codice». Oggi
lo stato di un giudizio è dedotto in **tre posti** con tre regole diverse (il
filtro in `applica-arbitrato`, la riga 149 di `costruisciCode`, la riga 179 di
`codaRiesame`), e le tre regole non concordano: è esattamente la famiglia della
chiave costruita due volte, che il 02/09 è costata 1.987 falsi problemi la
mattina e un registro con eventi doppi il pomeriggio.

**La tabella si scrive sul registro vero, non a tavolino — e la prima versione
era sbagliata.** Codex ha chiesto se cinque stati coprissero tutte le sequenze
che `giudizi.jsonl` gia' contiene. Misurate, raggruppando i 254 eventi per
chiave `(codice, campo, impronta)`:

```
196 chiavi distinte
 76   applicato                  <- nessun "si" prima: la classe PIU' NUMEROSA
 51   si -> applicato
 39   legacyGiudicato            <- uno stato che la prima tabella ometteva
 15   no
 11   nonSo
  3   si -> si -> applicato      <- i doppioni del 02/09 SONO nel registro
  1   no -> no
```

Due cose che la prima tabella sbagliava, e i dati lo dicono senza appello:
**115 chiavi su 196** (i 76 `applicato` nudi e i 39 `legacyGiudicato`) sarebbero
finite fuori tabella o classificate male. Vengono entrambe da
`semina-giudizi.mjs` (`const esito = pubblicato ? "applicato" : "legacyGiudicato"`),
che ha seminato il registro dai dati gia' pubblicati: **non sono transizioni,
sono ingressi**. E i doppioni identici **esistono davvero** (4 chiavi), quindi
una macchina a stati che ammettesse solo transizioni ideali **rifiuterebbe il
registro che deve proteggere**.

Una funzione sola, in `esegui-partner.mjs`, che dagli eventi di una chiave
ricava uno stato con nome:

| stato | come ci si arriva | in coda ordinaria? | dove va | il cancello autorizza? |
|---|---|---|---|---|
| `daGiudicare` | nessun evento | **sì** | coda d'arbitrato | no |
| `nonSo` | ultimo evento `nonSo` | no | **riesame umano** | no |
| `no` | ultimo evento `no` | no | chiuso | no |
| `legacyGiudicato` | ultimo evento `legacyGiudicato` | no | chiuso | **no** |
| `siNonApplicato` | ultimo evento `si` | no | **recupero tecnico** (non riesame) | sì |
| `applicato` | ultimo evento `applicato` | no | chiuso | sì |
| `statoSconosciuto` | esito non previsto | no | **si ferma, rumorosamente** | no |

**`legacyGiudicato` non si traduce.** Vuol dire *«qualcuno l'aveva gia'
esaminato e deliberatamente escluso, e non sappiamo con quale esito»* — e' cio'
che resto' dell'arbitrato del 01/09, di cui su disco sopravviveva meta'.
Tradurlo in `no` o in `applicato` inventerebbe una storia che non c'e'. Resta
**terminale e non autorizzante**: il vecchio filtro `registro.has()` lo teneva
fuori da tutto per caso, e `statoGiudizio()` deve tenerlo fuori **apposta**.

**`statoSconosciuto` non e' pedanteria.** Un esito che non conosciamo non deve
diventare silenziosamente «mai giudicato», o una futura incompatibilita' di
formato rimetterebbe in coda proposte gia' decise. Si ferma e lo dice.

**I doppioni identici sono idempotenti, non transizioni illegali.** Provato dai
dati: `si -> si -> applicato` esiste tre volte, `no -> no` una.

**`statoGiudizio()` percorre la sequenza, non guarda l'ultimo evento.** Terzo
giro, terza correzione presa: leggere solo l'ultimo esito nasconderebbe una
storia corrotta dietro una fine valida. `{"esito":"boh"} -> applicato`
sembrerebbe sano; `no -> si` sembrerebbe un sì, mentre è un terminale
contraddetto. La funzione controlla che **ogni** esito sia noto, che **ogni**
passaggio sia ammesso, ignora i doppioni identici, e alla prima incoerenza
restituisce `statoSconosciuto` — anche se l'ultimo evento, isolato, direbbe
altro.

**Due grammatiche distinte, e vanno tenute distinte.** Ciò che lo *storico*
contiene non è ciò che l'arbitrato può *produrre* oggi. `applicato` e
`legacyGiudicato` come primo evento sono ingressi legittimi — li ha scritti
`semina-giudizi.mjs` — ma **non sono verdetti**: dalla riga di comando un
verdetto può essere solo `si`, `no` o `nonSo`. «Da `daGiudicare` a qualunque
cosa» era troppo largo, ed è stretto così.

Transizioni ammesse **da un verdetto**: da `daGiudicare` a `si`/`no`/`nonSo`; da
`nonSo` a `si` o `no`. Transizione ammessa **dal sistema**: da `siNonApplicato`
ad `applicato`. **`no`, `applicato` e
`legacyGiudicato` sono terminali**: un verdetto che li contraddice viene
rifiutato come orfano, con causa `giaChiuso` e un messaggio che dice cosa fare a
mano. Motivo: `applica-arbitrato` non sa **disfare**; registrare un «no» su un
dato che resta pubblicato farebbe divergere registro e sito — la terza variante
di «registrare non è applicare».

**`siNonApplicato` si decide sui DATI, non sul registro.** Terza cosa che Codex
ha preso e io no: una sequenza che finisce in `si` descrive almeno tre
situazioni diverse — `--prova` (dato non scritto), errore prima del commit (dato
non scritto), interruzione **dopo** il commit ma prima dell'evento `applicato`
(dato **gia' presente**). Guardando solo `giudizi.jsonl` diventano tutte lo
stesso stato, e lo stato descriverebbe il log invece della realta'. Il recupero
confronta quindi la proposta con il campo pubblicato:

**E il campo non è uno.** `applica-partner.mjs` applica una proposta a **tutte**
le occorrenze del codice, su più blocchi e più file (righe 160-166: `for
(proposte) for (file) for (codici)`). Parlare del «campo nelle mete» al
singolare avrebbe ricreato la classe di difetti che i codici ripetuti hanno già
prodotto in questa pipeline. Gli stati sono misti:

| le occorrenze del codice | cosa si fa |
|---|---|
| tutte vuote | si **ritenta** l'applicazione |
| tutte col valore esatto | si scrive `applicato` **senza** commit di dati |
| **alcune vuote, alcune col valore esatto** | si applica **solo alle vuote**, poi si ricontrolla che siano tutte uguali prima di scrivere `applicato` |
| **almeno una diversa** | **conflitto visibile**, e non si scrive niente: non si sovrascrive mai un campo già pieno |
| nessuna meta con quel codice | `metaAssente` — distinto da `propostaAssente` |
| la proposta non esiste più | `propostaAssente`, voce visibile |

**L'uguaglianza si definisce in un posto solo**, ed è quella che usa già
l'applicatore. Scriverne una seconda nel recupero ricreerebbe esattamente il
difetto che `statoGiudizio()` esiste per eliminare — è la chiave costruita due
volte, con un altro nome.

**E il recupero non e' un riesame umano.** Un `nonSo` chiede un giudizio nuovo
sul contenuto; un `siNonApplicato` ha gia' un giudizio positivo e chiede un
recupero tecnico. Metterli nella stessa pagina e richiedere di nuovo
«si'/no/non so» sarebbe chiedere a Nicola di rigiudicare cio' che ha gia'
giudicato. Vanno in **due file distinti**: `da-riesaminare.json` (umano) e
`da-recuperare.json` (tecnico).

**La coda si costruisce anche all'incontrario.** `codaRiesame()` parte oggi
dalle proposte di `approvati.json` e cerca l'evento. Se `fondiEsiti` ha
sostituito o rimosso quella proposta — cosa che fa di mestiere — la chiave non
viene **mai visitata**, e il pendente resta invisibile: il buco che volevamo
chiudere, riaperto da un'altra parte. Quindi si percorre anche la direzione
opposta, **dagli eventi alle proposte**, e cio' che non si riaggancia compare lo
stesso con codice, campo, impronta, data dell'ultimo evento e causa
`propostaAssente`. L'impronta non permette di ricostruire il valore: ragione in
piu' per non nasconderlo.

**Vale anche per `nonSo`, non solo per `siNonApplicato`.** Un «non so» può
perdere la sua proposta esattamente come un «sì»: chiudere il buco solo sul
recupero tecnico lascerebbe **lo stesso identico buco** nella coda umana. Il
cammino inverso si fa per tutti e due.

**E il riaggancio ha tre esiti, non due.** Zero proposte → `propostaAssente`;
una → collegamento normale; **più di una con la stessa chiave** →
`propostaAmbigua`, e si ferma. Oggi `abbinaVerdetti()` costruisce una `Map` con
`set()`: davanti a due proposte con la stessa chiave **l'ultima vince in
silenzio**, che è scegliere senza dirlo.

**E `leggiRegistro()` non può più saltare in silenzio.** Oggi fa
`catch { continue; }` sulle righe non parsabili e scarta quelle senza `campo` o
`improntaProposta`. Per un file che questo piano dichiara **irripetibile**, una
riga saltata senza dirlo può essere l'ultimo giudizio dato — per esempio dopo
una scrittura interrotta. Deve fermarsi rumorosamente, o mettere la riga in una
quarantena esplicita — **che però blocca**. «Visibile ma non bloccante» non
basta per un file che funge da autorizzazione: da una riga JSON rotta non si
può nemmeno sapere a quale chiave apparteneva, quindi proseguire potrebbe
classificare come `daGiudicare` una proposta che qualcuno aveva già giudicato —
e rimetterla sotto gli occhi di Nicola come se fosse nuova. La riga si conserva
per l'ispezione, e finché la quarantena non è risolta **arbitrato,
autorizzazione e costruzione delle code si fermano tutti**.

`costruisciCode`, `codaRiesame` e il filtro di `applica-arbitrato` non deducono
piu' niente da soli: chiedono a `statoGiudizio()`. Ma classificare non basta:
`applicaArbitrato` deve avere una **regola operativa per ciascuno stato** —
quali applicare, quali rifiutare come orfani, quali mandare al recupero.

**Le prove, e come si rompono.** Tutte colpiscono **chi chiama**, non la
funzione, e ognuna chiede anche che **quello che non c'entra resti** — un
secondo partner nello stesso file di verdetti deve arrivare intatto al suo
esito. La prova sulla fusione del 02/09 passò per la ragione sbagliata perché
verificava solo la sparizione.

1. `nonSo` → `si`: evento nuovo, cancello superato, valore **scritto nelle
   mete**, stato finale `applicato`. *Rottura di controllo: col filtro vecchio
   deve diventare rossa.*
2. `nonSo` → `no`: `eventiNuovi === 1`, e — la parte che conta — la voce
   **sparisce da `da-riesaminare.json`**. Non basta l'evento: il difetto era che
   la coda non si accorciava.
3. `si` → `si` identico: **zero** eventi e **zero** chiamate all'applicatore.
   È la prova che impedisce di «risolvere» il difetto cancellando il filtro.
   ⚠️ **Attenzione a non prenderla alla lettera nel posto sbagliato:** «zero
   chiamate» vale per la gestione del verdetto duplicato, **dopo** che il
   recupero iniziale è finito. Un `siNonApplicato` vero col campo vuoto
   l'applicatore lo chiama eccome, attraverso `recuperaArbitrati()`. Scrivere la
   prova sull'intero run invece che su quel tratto la renderebbe verde
   impedendo il recupero — cioè rimettendo il difetto.
4. `applicato` → `si`: **zero** eventi, applicatore non chiamato, nessuna
   regressione di stato.
5. `applicato` → `no` e `no` → `si`: rifiutati come orfani con causa `giaChiuso`,
   dati invariati.
6. **Applicazione fallita dopo `nonSo` → `si`**: stato `siNonApplicato`, dati
   invariati, e la voce compare in **`da-recuperare.json`** col motivo
   `applicazioneNonRiuscita` — **e NON in `da-riesaminare.json`**. *(Questa prova
   diceva il contrario fino alla revisione 3: era scritta prima che le due code
   venissero separate, e contraddiceva il resto del piano. Chiedere a Nicola di
   rigiudicare ciò che ha già giudicato è il difetto, non la copertura.)*
7. **Valore già uguale**: nessun commit di dati, e lo stato è **`applicato`**,
   non «o l'uno o l'altro». *(Anche questa era troppo permissiva: accettare sia
   `applicato` sia `siNonApplicato` avrebbe reso verde proprio la regressione che
   la prova deve trovare.)*
8. Per ogni transizione, si controllano **le uscite di entrambe le code**, non
   solo il registro: è il registro *e* la coda a dover concordare.
9. **Le sette sequenze reali del registro**, prese dall'audit e non inventate,
   sono tutte classificate: `applicato` nudo, `si -> applicato`,
   `legacyGiudicato`, `no`, `nonSo`, `si -> si -> applicato`, `no -> no`. La
   prova gira sul file vero e fallisce se anche una sola chiave delle 196 finisce
   in `statoSconosciuto`.
10. `legacyGiudicato` **non ricompare in nessuna delle due code** e non
    autorizza il cancello. *Rottura di controllo: togliergli la terminalità deve
    far ricomparire 39 voci.*
11. Un esito mai visto (`{"esito":"boh"}`) diventa `statoSconosciuto` e **ferma**,
    e non è mai equiparato a `daGiudicare`.
12. I tre casi di `siNonApplicato` decisi **sui dati**: campo vuoto → ritenta;
    campo col valore esatto → `applicato` senza commit; campo con valore diverso
    → conflitto e nessuna scrittura; proposta sparita → voce visibile con causa
    `propostaAssente`.
13. **La coda all'incontrario**: un evento `si` la cui proposta è stata rimossa
    da `fondiEsiti` compare comunque in `da-recuperare.json`. *Rottura di
    controllo: costruendo la coda solo dalle proposte, la prova deve annerirsi.*
14. Un `siNonApplicato` finisce in `da-recuperare.json` e **non** in
    `da-riesaminare.json`: a Nicola non si richiede un giudizio già dato.
15. **Occorrenze miste**: lo stesso codice in due mete, una vuota e una col
    valore esatto → si riempie solo la vuota, e solo dopo si scrive `applicato`.
16. **`metaAssente`**: un codice che non compare in nessuna meta non diventa un
    conflitto né sparisce: ha una causa sua.
17. **`propostaAmbigua`**: due proposte con la stessa chiave fermano tutto invece
    di far vincere l'ultima. *Rottura di controllo: rimettere una `Map.set()`
    deve far passare la prova in silenzio, quindi la prova deve annerirsi.*
18. **`nonSo` con la proposta rimossa da `fondiEsiti`** resta visibile in
    `da-riesaminare.json` con causa `propostaAssente`.
19. **Riga JSON non parsabile** e **riga senza `campo`/`improntaProposta`**:
    quarantena, e la pipeline **si ferma**. *Rottura di controllo: renderla non
    bloccante deve far diventare rossa la prova.*
20. **`no -> si`** e **`{"esito":"boh"} -> applicato`** danno entrambi
    `statoSconosciuto`, benché l'ultimo evento, isolato, direbbe altro.
21. **Push del primo commit del registro fallito** → l'applicatore **non viene
    mai chiamato** e nessun dato cambia.
22. **Interruzione simulata dopo l'append di `applicato`**: al riavvio il
    preflight trova la modifica pendente e **la pubblica**, invece di lasciarla
    sul disco. È la prova che chiude la finestra della barriera.

**Misura prima e dopo, una modifica alla volta:** conteggio vero delle prove
prima (369 è dichiarato, non rimisurato), poi `statoGiudizio()` e i suoi
chiamanti, poi di nuovo.

### Atto 0c — L'arbitrato deve prendere lo stesso lock della catena

`eseguiPartner()` prende `.esegui.lock` (riga 673); `applicaArbitrato()` **non
prende niente**. Due processi possono quindi scrivere insieme `giudizi.jsonl`,
`approvati.json`, le code, la stessa cartella `.transazione` e gli stessi file
delle mete. Le scritture atomiche dei singoli JSON non salvano da una corsa
distribuita su più file.

`applicaArbitrato` prende `.esegui.lock` **dall'abbinamento dei verdetti fino
alla ricostruzione delle code**, e lo rilascia in `finally`. Prova: con il lock
già preso da un pid vivo, l'arbitrato **si ferma con un messaggio**, non
aspetta e non forza.

### Atto 1 — Le due code *(mezz'ora di Nicola, dopo l'Atto 0)*

Nessuno strumento nuovo: la porta resta `applica-arbitrato.mjs` e il suo
cancello resta l'impronta del valore. Serve solo il materiale per decidere.

**1a — I 9 `requisitoLingua`.** Guardati tutti e nove:

| esito atteso | quanti | perché |
|---|---:|---|
| monolingua, la citazione dice esattamente quello | 5 | `FNANTES01` Francese B1, `IRLSETU01` Inglese B2, `PLOPOLE02` Inglese B2, `ROTIMISOA01` Inglese B1, `ROTIMISOA07` Inglese B2 |
| multilingua `ANY`, e la citazione dice davvero «o» | 4 | `DGREIFS01` «in der jeweiligen Sprache», `GIOANNIN01` «English B2 **or** Greek B1», `PLKATOWIC01` «**and/or**», `PLWARSZAW01` «Polish **or** English» |

**Il difetto noto del campo non è presente in questi nove.** Il caso che lo fece
bocciare il 31/08 (`TR ISTANBU09`) era una **tabella appiattita** letta come
«basta una delle due»; qui tutte e quattro le `ANY` poggiano su una citazione
che contiene esplicitamente la disgiunzione. Non è un permesso ad applicarle in
automatico — il cancello resta l'occhio di Nicola — ma è ciò che va **messo
davanti a lui**: albero proposto e citazione affiancati, perché la domanda vera
su questo campo non è «il livello è giusto?» ma **«la relazione fra le lingue è
giusta?»**.

**1b — Le 11 voci in riesame.** `verifica-riesame.mjs` le ha già misurate: 4
lette, 3 illeggibili ma databili, 4 che non sono PDF. Quattro sono risolte dai
fatti e aspettano il verdetto formale — ENTPE (scheda informativa 2022) e
Başkent (opuscolo istituzionale) non sono cataloghi; Lione 2 (31.286 caratteri,
12 crediti, 22 semestri) ed EIVP vanno letti alla luce di ciò che lo strumento
ha trovato. Restano Gonesse e Cluj (illeggibili **ma del 2025**: metà del dubbio
era infondata) e i quattro «non si capisce se è un elenco» — Siegen,
Saint-Étienne, AUEB Atene, Istanbul Gelişim — dove serve leggere, non misurare.

**La pagina.** Stessa forma di quella dei 77 (artifact privato, **fuori dal
repo**). Una voce per riquadro con ateneo, valore, citazione, indirizzo
cliccabile e — per il riesame — **il motivo per cui era difficile** (`motivi` da
`codaRiesame`) più le misure già raccolte (KB, data interna del PDF, titolo
interno, produttore, segnali di elenco). Tre bottoni: sì / no / non so. In
uscita il JSON che `applica-arbitrato.mjs` già accetta.

**Una data che non è una data.** `dataHttp` si mostra **solo se
`dataHttpAttendibile`**. Una `Last-Modified` pari a oggi la genera il server
alla richiesta: su undici voci è già successo tre volte.

**Poi:** `--prova`, si legge il confronto strutturale, poi il run vero, commit
e push.

### Atto 2 — La riserva L4, per i 23 *(costruita per i 134)*

**I 23, e sono due problemi diversi.** Verificati con `statoPartner()`:

- **17 `daRaccogliere`, tutti con `siti: []`** — manca l'**indirizzo**:
  DDEGGEND01, DFRANKFU07, DHAMBURG13, DKOBLENZ03, DMUNCHEN12, EMADRID114,
  EMADRID232, FANGERS10, FCERGY03, FDIJON01, FPARIS009, FPARIS270, FPARIS525,
  FTOULOUS01, HUBUDAPES03, HUSZFVAR01, NSTAVANG01.
- **6 `senzaTestoUtile`** — l'indirizzo c'è e risponde, ma la pagina è costruita
  in JavaScript: EVALLADO01, PAVEIRO01, PLISBOA03, PLPOZNAN05, TRISTANBU10,
  TRIZMIR09. Qui serve un indirizzo **alternativo**, non lo stesso.

**La decisione che dà forma all'atto: L4 propone INDIRIZZI, non valori.**

Il vincolo non negoziabile è la citazione lettera per lettera **nel brano
davvero inviato**, verificata per impronta SHA-256 contro la pagina in cache
(`cancelli.mjs` → `testoVerificato`). Con il grounding **quel brano non
esiste**: non c'è testo inviato contro cui confrontare. E le fonti che il
grounding restituisce sono rimbalzi
`vertexaisearch.cloud.google.com/grounding-api-redirect/...`, non pagine reali —
`verifica-link.mjs` li risolve dal 16/07.

Quindi L4 produce la sola cosa che alla catena manca — un indirizzo — e poi **si
fa da parte**. Il percorso resta quello di sempre, e va **imposto dalla
struttura, non promesso nel prompt**:

```
indirizzo L4 → scarico HTTP normale → pagina in cache → brano inviato dal
lettore → impronta SHA-256 → proposta → applicaCancelli() → [arbitrato se serve]
```

L4 **non può** creare proposte in `approvati.json`, letture, pagine già
considerate verificate, né citazioni prese dalla risposta grounded. **Prova:**
lo schema di uscita di L4 è chiuso e non contiene `valore` né `citazione`, e una
prova d'integrazione verifica che dopo un run L4 `approvati.json`, `letture/` e
`pagine/` siano **byte per byte invariati**.

Questo ha un costo che va detto chiaro: **L4 non garantisce un campo, garantisce
un tentativo.** Un partner può uscirne con un buon indirizzo e restare senza
`linkCatalogo`. È accettabile: oggi quei 23 non hanno nemmeno il tentativo.

**Il passo, in concreto.** Nuovo `scripts/riserva-l4.mjs`:

1. **Ingresso per stato, non per elenco.** `statoPartner()` è già l'unica
   definizione: filtro di default `daRaccogliere` + `senzaTestoUtile`; con
   `--includi nonRaggiunto` entrano anche i 111 **senza toccare il codice**. È
   così che «la porta resta aperta ai 111» diventa codice invece che intenzione.
2. **Una chiamata per partner**, `tools: [{ google_search: {} }]`, come
   `gemini-sgrossatura.mjs` già fa. Domanda: qual è il sito ufficiale di questo
   ateneo e in quale pagina o PDF un Erasmus **incoming** trova requisiti,
   scadenze e catalogo. Fino a 3 indirizzi, in ordine di fiducia. **Nessun
   valore.** 23 chiamate: irrilevanti sui 250.000 token/minuto e sulle ~8
   chiamate/minuto misurate.
3. **Ripulitura**, riusando `verifica-link.mjs`/`lib-link.mjs`: risolve i
   rimbalzi di grounding, scarta ciò che non risponde 200, e verifica che il
   dominio **di arrivo** sia plausibile per quell'ateneo — non quello di
   partenza, che il 30/08 è costato nove difetti.
4. **Uscita in `raccolta/indirizzi-l4.json`, versionato** (Atto 0a), con per
   ogni voce: `codiceCanonico`, `url`, `quando`, `modello`, `interrogazione`,
   `esitoVerifica`, `provenienza: "L4"`. La provenienza non è decorazione: un
   indirizzo dell'accordo e uno trovato da un modello non sono la stessa cosa e
   non devono diventarlo.
5. **Fusione dentro `costruisciPartner()`**, non a valle. `partner.json` è
   **derivato** — viene riscritto dai file mete a ogni `--ricostruisci-partner`
   — e un indirizzo aggiunto a valle verrebbe cancellato. Il precedente esatto è
   `collisioni.json`, che nella stessa funzione viene già letto, fuso e
   riscritto. **Prova: una ricostruzione completa non perde i seed L4.**
6. **Invalidazione della cache, senza la quale L4 non serve a 6 partner su 23.**
   `statoPartner` tratta `nonRaggiunto` e `senzaTestoUtile` come **terminali**, e
   `eseguiPartner` li esclude da `daFare` (riga 684). Un partner con un seed
   nuovo **resterebbe fuori** perché possiede ancora il vecchio `indice.json`
   fallito. I 17 senza indirizzo non hanno un indice e rientrerebbero da soli;
   **i 6 con sito JavaScript no**. Correzione: `indice.json` registra
   l'**impronta dei seed** con cui è stato costruito; se l'impronta dei `siti`
   del partner cambia, lo stato torna `daRaccogliere`. **L'impronta si calcola su
   URL normalizzati, deduplicati e ordinati, senza frammento né parametri di
   tracciamento**: altrimenti un semplice cambio d'ordine prodotto dalla
   ricostruzione di `partner.json` invaliderebbe centinaia di cache senza che sia
   cambiato un solo seed — e il costo sarebbe una riraccolta completa presa per
   necessaria. **Due prove, non una:** un seed davvero nuovo invalida l'indice;
   **gli stessi seed in ordine diverso no**.
7. **Il seed deve arrivare davvero in cache.** Due difetti verificati in
   `candidatiPartner()`: (a) `if (candidati.size) break;` — appena un sito
   produce un candidato gli altri non si provano, quindi un vecchio sito
   mediocre può impedire di raggiungere il seed L4 migliore; (b) l'URL di
   partenza viene scaricato solo per scoprire il reindirizzamento e poi
   **buttato**: i candidati escono da `linkHtml`, sitemap e sottodomini. Se L4
   trova esattamente il PDF del catalogo, oggi quel PDF **non finisce in
   `raccolta/pagine`**. Correzione: i seed L4 si provano **per primi** e non
   sono soggetti al `break`, e un seed **è esso stesso un candidato**, conservato
   con il suo punteggio. **Prova:** un seed che punta direttamente a un PDF
   finisce nell'indice del partner.
8. **⚠️ Dopo la riraccolta, `riscarica-pdf.mjs`.** Riraccogliere azzera il testo
   dei PDF: senza questo passo i valori che venivano dai PDF spariscono e sembra
   una regressione. `esegui-partner.mjs` se ne accorge (`pdfCompleto`) ma solo
   dentro di sé — chi lancia L4 a mano no. Va **nel messaggio finale dello
   script**, non solo nella documentazione.
9. **Il resoconto, che è come si dividono i falliti per causa.** Non «L4
   completata»: partner interrogati · con seed proposto · seed scartati (per
   forma, per dominio non plausibile, per sicurezza) · seed raggiungibili · seed
   che producono testo utile · partner rientrati nella catena · proposte passate
   e bocciate **per campo** · chiamate, ritenti, 429 · partner ancora terminali
   **con il motivo**. Senza questi numeri L4 può finire «con successo» avendo
   prodotto indirizzi che nessuno raccoglie. Un caso da contare esplicitamente
   come **fallimento**: il modello restituisce **lo stesso indirizzo che già
   avevamo** — probabile per i 6 con sito JavaScript.

**Una difesa da mettere dove passano tutte le richieste, non solo L4 — e la mia
prima collocazione era sbagliata.** Gli URL di L4 sono generati da un modello, e
il solo controllo `http/https` non ferma `localhost`, la rete privata o un
link-local. L'esposizione **non nasce con L4**: il crawler segue già oggi i link
trovati dentro pagine di terzi, per tutti e 585 i partner raccolti. Ma avevo
detto «va in `lib-link.mjs`», e Codex ha verificato che **non basterebbe**:
`lib-link.mjs` contiene solo `statoLink()`, mentre il crawler chiama `fetch`
per conto suo:

```js
// raccogli-partner.mjs:135
const risposta = await fetch(url, { headers: {...}, redirect: "follow" });
```

Homepage, seed, `robots.txt`, sitemap, sottodomini e pagine scoperte passano di
lì, non da `statoLink`. Quindi la difesa e' **una funzione condivisa chiamata
prima di ogni `fetch`**, e i chiamanti da migrare sono tutti, non uno.

**E i redirect vanno gestiti a mano, prima di accendere L4.** Avevo rinviato
questo pezzo dicendo «una modifica alla volta»; il terzo giro di Codex ha
mostrato che il rinvio era più debole dell'argomento. Con `redirect: "follow"`
la frase «controllo prima di ogni `fetch`» **è falsa per i salti successivi al
primo**: li esegue la libreria, e guardare `res.url` dopo significa guardare
quando la richiesta all'indirizzo privato è già partita. E L4 non lascia il
rischio dov'era: **lo cambia di natura**, perché fino a ieri i seed venivano
dagli accordi ufficiali e da domani vengono da un modello e da risultati di
ricerca.

La regola di casa non chiede di rinviare: chiede di **non mescolare**. E non
serve mescolare, basta ordinare:

1. Atti 0a, 0b, 0c — l'impianto dell'arbitrato;
2. **la validazione dei redirect**, da sola, con la sua misura;
3. **poi** si accende L4.

I redirect si continuano a seguire, con un tetto di salti, ma **ogni
destinazione si valida prima di chiederla**. E il campione di regressione esiste
già ed è quello giusto: i **quindici casi** che il 30/08 il ramo «dominio
cambiato» ha recuperato — Salisburgo, Karlsruhe e gli altri — devono restare
raggiunti dopo la modifica. Se il passo 2 non si fa, l'unica alternativa
difendibile è **non lanciare L4 in automatico**: seed e catene di redirect
approvati a mano, uno per uno.

**Criterio d'uscita, posto in modo misurabile.** Non «funziona»: su 23 partner,
quanti ottengono un indirizzo che risponde 200 e appartiene davvero all'ateneo;
di questi quanti arrivano a `fatto` o almeno a un campo nuovo; e i falliti
divisi per causa. **Ventitré è sotto i 100 casi** che la casa impone per
dichiarare un tasso: il numero orienta, non conclude, e **non autorizza da solo
l'estensione ai 111**.

### Atto 3 — I PDF illeggibili: prima la diagnosi, poi la decisione

**Il numero del brief non regge alla misura.** Contati su `raccolta/pagine/**`:
**708 file** `estrazioneFallita: "illeggibile"`, non ~335. Le altre cause sono
già separate e piccole: `troppoGrande` 31, `nonPdf` 12, `robotsVieta` 4,
`nonScaricato` 3.

**Chi tocca, davvero.** 231 partner hanno almeno un PDF illeggibile; **223 hanno
ancora campi mancanti** (linkCatalogo 177, notaDisponibilita 203,
requisitoLingua 95, scadenzeOspitante 53, linkSito 52). **Ma nessuno dei 231 è
al buio: tutti hanno già almeno un'altra pagina con testo.** E8 non sblocca un
partner muto: **aggiunge un documento a un partner che il modello ha già
letto**. Il guadagno resta il più grande in gioco — le factsheet sono spesso la
fonte migliore — ma è *incrementale*, e questo cambia quanto vale pagarlo con
una dipendenza.

**Deciso da Nicola prima di scrivere codice** (02/09): il sito resta 100%
statico a zero dipendenze — **quella regola non si tocca**. Per gli script di
pipeline la porta è aperta **in linea di principio**, e la scelta concreta si fa
**dopo la diagnosi**.

**La diagnosi, che è sola lettura.** `illeggibile` oggi è **un cestino, non una
diagnosi**: `lib-pdf.mjs` torna `null` e la causa vera sparisce. Nuovo
`scripts/diagnosi-pdf.mjs` che apre i 708 e li divide:

| classe | cosa vuol dire | attaccabile a mano? |
|---|---|---|
| ha una `ToUnicode` che non stiamo leggendo | difetto nostro | **sì**, è codice |
| ha una `Differences`/`Encoding` nota | mappabile | **sì** |
| font incorporato **senza** alcuna mappa a Unicode | la vera E8 | **no**, serve un estrattore diverso |
| nessun testo, solo immagini | è una scansione | no, e nemmeno pdfjs basta: serve OCR |
| cifrato / compresso in modo non gestito | altro | da vedere |

**Il criterio d'uscita è la diagnosi stessa**: le cinque classi contate su tutti
e 708, con almeno tre esempi per classe **aperti a mano** per confermare che
l'etichetta dice il vero. Poi, con quel numero, si decide: prime due righe → si
risolve senza dipendenze; terza → la domanda su `pdfjs-dist` torna a Nicola con
i fatti; quarta → la risposta è che non si può, e va scritta.

**Prima di citare i 223 come risultato**, vanno riverificati contro le mete:
`campiMancanti` in `partner.json` è ricalcolato alla ricostruzione e potrebbe
non riflettere l'ultima passata. Sono buoni come ordine di grandezza, non ancora
come misura.

**Niente estrattore nuovo in questa fase.** L'Atto 3 finisce con la diagnosi e
la decisione. Scrivere l'estrattore è l'atto successivo, e ha bisogno di sapere
cosa deve estrarre.

---

## Key decisions & tradeoffs

1. **Il registro dei giudizi si versiona prima di ogni altra cosa.** 254
   decisioni umane su un disco solo sono un rischio più grande di qualunque
   difetto in questo piano. Si allowlistano i file **non ricostruibili**, non la
   cartella: `pagine/` resta fuori, ed è la ragione per cui la riga esiste.
2. **`statoGiudizio()` come unica definizione, invece del filtro corretto.** Lo
   stato di un giudizio è oggi dedotto in tre posti con tre regole che non
   concordano. Correggere il solo filtro lascerebbe in piedi le altre due — la
   stessa forma della chiave costruita due volte, e del campo vuoto prima di
   `statoCampo()`. Costa più di una riga; è l'unica correzione che non ne lascia
   dietro un'altra.
3. **`siNonApplicato` è uno stato, non un caso limite — e si decide sui dati.**
   Il buco esiste già oggi: `appendiEventi` scrive prima della transazione, il
   rollback non lo disfa, ed entrambe le code escludono ciò che ne risulta.
   Trasformarlo in una voce di coda è la regola del 02/09 applicata due volte:
   *un capolinea mancante è un difetto travestito da coda*; qui era **uno stato
   mancante travestito da niente**. Ma leggerlo dal solo registro lo
   farebbe descrivere il log invece della realtà: una sequenza che finisce in
   `si` copre tre situazioni diverse, e una di queste ha il dato **già
   scritto**. Si confronta con il campo pubblicato, e va in una coda **tecnica**
   separata da quella umana: chi ha già giudicato non deve rigiudicare.
3-bis. **La tabella degli stati si scrive sul registro vero.** La prima versione
   ne aveva cinque e ne mancavano due: `legacyGiudicato` (39 chiavi) e
   l'ingresso diretto in `applicato` senza `si` (76 chiavi, la classe più
   numerosa) — **115 su 196** classificate male. Vengono da `semina-giudizi.mjs`:
   sono ingressi, non transizioni. E i doppioni identici esistono davvero nel
   file (4 chiavi), quindi vanno trattati come idempotenti, non come transizioni
   illegali. Nessuna macchina a stati va disegnata prima di aver raggruppato le
   sequenze reali.
4. **`no`, `applicato` e `legacyGiudicato` sono terminali.** `applica-arbitrato` non sa disfare:
   registrare un «no» su un dato pubblicato farebbe divergere registro e sito.
   Costa un caso da gestire a mano, ed è il costo giusto.
   *Alternativa scartata:* una riapertura esplicita (`--riapri`). Non è
   sbagliata, ma aggiunge un comando che oggi non serve a nessuno dei 20 casi in
   coda; si scriverà quando servirà davvero.
5. **L'arbitrato prende `.esegui.lock`.** Due scritture concorrenti su
   `giudizi.jsonl`, le code e le mete non si difendono con scritture atomiche
   per singolo file.
6. **L4 propone indirizzi, non valori — e la struttura lo impone.** È l'unico
   modo di usare il grounding senza rompere la citazione: la prova si fa sulla
   pagina scaricata. Non basta dirlo nel prompt, perciò lo schema d'uscita non
   ha un campo `valore` e una prova verifica che L4 non tocchi
   `approvati.json`, `letture/` e `pagine/`.
   *Alternativa scartata:* L4 propone (valore, url), si scarica l'url e si
   verifica lì la citazione. **Conserva** il vincolo, ma aggiunge un secondo
   percorso di approvazione per 23 casi, e un secondo percorso è dove i difetti
   vanno a nascondersi. Se la resa sui 23 fosse troppo bassa è la prima variante
   da riconsiderare, non un errore da evitare.
7. **L4 filtra per stato, non per elenco.** I 111 entrano con un argomento, non
   con una riscrittura.
8. **I seed L4 si fondono dentro `costruisciPartner()`**, dove `collisioni.json`
   risolve già lo stesso problema. A valle verrebbero cancellati.
9. **Senza invalidazione per impronta dei seed, L4 aiuta 17 partner su 23.** I 6
   con sito JavaScript hanno un indice vecchio e uno stato terminale: resterebbero
   fuori. È la correzione che decide se l'Atto 2 vale metà o tutto.
10. **Il seed è un candidato, non solo una porta d'ingresso**, e non è soggetto
    al `break` che ferma gli altri siti. Altrimenti il PDF che L4 ha trovato
    viene scaricato e buttato.
11. **La difesa sugli indirizzi va prima di ogni `fetch`, non in `lib-link.mjs`.**
    L'esposizione non nasce con L4 — il crawler segue già link di terzi — ma
    `lib-link.mjs` contiene solo `statoLink()`, mentre il crawler chiama `fetch`
    per conto suo: metterla lì l'avrebbe fatta *sembrare* risolta lasciandola
    aperta. **E la validazione dei redirect salto per salto entra, come passo
    suo fra l'Atto 0 e l'Atto 2**: rinviarla lasciava falsa la frase «controllo
    prima di ogni fetch», perché i salti dopo il primo li fa la libreria. Non si
    mescola con la macchina a stati — si mette in fila — e il campione di
    regressione è già pronto: i quindici casi che il ramo «dominio cambiato» ha
    recuperato il 30/08 devono restare raggiunti.
11-bis. **`applica-arbitrato` committa il registro da sé, e la catena non
    cambia.** `applicaEControlla` mette in stage un elenco esplicito di file
    mete, per difesa deliberata: allargarlo le farebbe committare cose che oggi
    rifiuta. Il registro è un commit suo, che avviene anche quando nessun dato
    del sito cambia — altrimenti un lotto di soli `no`/`nonSo` resterebbe di
    nuovo solo su questo disco.
12. **La diagnosi PDF precede qualunque estrattore**, e la decisione sulla
    dipendenza si prende sul suo numero. Il sito resta a zero dipendenze sempre:
    l'apertura riguarda solo `scripts/`, e se `pdfjs-dist` entrerà sarà come
    `devDependency` che nessuna riga del sito carica.

---

## Risks / open questions

- **La quota di grounding sul piano gratuito è distinta** da quella di
  `generateContent` e non è misurata su questa chiave. Con 23 chiamate il
  rischio è basso; prima dei 111 va misurata, non scoperta.
- **La resa di L4 sui 6 `senzaTestoUtile` potrebbe essere zero**: il modello può
  restituire l'indirizzo che già abbiamo. Contato come fallimento con la sua
  causa, non come successo.
- **`campiMancanti` è derivato** e i numeri dell'Atto 3 vanno riverificati
  contro le mete prima di essere citati come risultato.
- **Ventitré è sotto i 100 casi.** Il numero dell'Atto 2 orienta, non conclude.
- **Le prove salgono da 369**, che è il numero dichiarato il 02/09 e non uno
  rimisurato: il conteggio vero si prende all'inizio.
- **Versionare `giudizi.jsonl` lo rende visibile in un repo pubblico.** Contiene
  codici Erasmus, campi, impronte ed esiti — nessun dato personale — ma la scelta
  va fatta sapendolo. Se un giorno dovesse contenere note libere, la domanda
  torna.
- **La validazione dei redirect tocca il ramo più caricato del crawler.** È
  entrata nel piano come passo a sé (fra l'Atto 0 e l'Atto 2) proprio perché
  cambiare `redirect: "follow"` può far regredire i quindici recuperi del 30/08:
  quel gruppo è il campione di regressione, e se non resta verde il passo non è
  finito.
- **`--prova` scrive gli eventi**, quindi un'anteprima crea uno stato pendente.
  È la scelta esistente e resta giusta, ma va detta a schermo e coperta da una
  prova, o qualcuno la scopre nel modo peggiore.
- **I 1.433 `nonTrovabile`** calcolati e mai scritti restano fuori: decisione di
  prodotto.
- **La deriva di `mappatura-stato.json`** (4 avvisi non bloccanti) continuerà a
  crescere. Le tre opzioni restano di Nicola.

---

## Out of scope

- Scrivere un estrattore PDF nuovo o aggiungere una dipendenza: l'Atto 3 finisce
  con la diagnosi e la decisione.
- Lanciare L4 sui 111 `nonRaggiunto`: la porta resta aperta, il run no.
- Un comando di riapertura per i giudizi terminali (`--riapri`).
- I 1.433 `nonTrovabile`.
- La **Fase 6 del `DISEGNO_PIPELINE_DATI` nel senso originale** — la
  riconciliazione dei 418 disaccordi fra dipartimenti e i 10 partner con lo
  stesso requisito di lingua su scuole diverse. Lavoro diverso su dati diversi.
  *(Nota di nomenclatura: «Fase 6» qui indica il gruppo di lavori del brief del
  02/09, non la Fase 6 del documento di disegno. I due nomi collidono e vanno
  separati prima che generino la confusione dei numeri di sessione 49-52.)*
- Il riallineamento di `mappatura-stato.json`.
- Qualunque modifica a `js/atenei/**` che non passi da `applica-arbitrato.mjs` o
  dalla catena.
