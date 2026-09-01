# Plan: Fase 5 — `esegui-partner.mjs`, la catena sui partner mai raccolti
_Locked via grill — Claude + Nicola, 2026-09-01. Base: `e3245cf`, 300/300 prove verdi._
_Revisione 5 dopo cinque giri di Codex (`gpt-5.6-sol`): 14 + 11 + 8 + 5 + 2 obiezioni, tutte verificate contro il codice, tutte accolte._

> `PLAN_FILE=PLAN_FASE5.md`, `LOG_FILE=PLAN-REVIEW-LOG_FASE5.md`.
> `PLAN.md` (piano PERCORSO) e `PLAN-REVIEW-LOG.md` restano intatti.

---

## Goal

Scrivere `scripts/esegui-partner.mjs`: un unico comando che incatena
**raccolta → riestrazione PDF → lettura → cancelli → applicazione → commit/push**
sui partner mai lavorati, a blocchi, ripartibile dopo un'interruzione qualunque
(blackout compreso) e senza mai rifare né disfare lavoro già fatto.
La catena applica da sola **solo i tre campi che l'arbitrato umano del 31/08 ha
promosso 16 su 16** (`scadenzeOspitante`, `linkSito`, `notaDisponibilita`) e
depone `linkCatalogo` e `requisitoLingua` in **due code di arbitrato**, perché
per entrambi è misurato che nessun cancello automatico li separa.

## Lo stato reale, misurato oggi (non i numeri del brief)

| grandezza | valore misurato | come |
|---|---:|---|
| partner totali | 615 | `raccolta/partner.json` |
| partner con almeno un campo mancante | 603 | `campiMancanti.length > 0` |
| partner **già raccolti** (cartella + `indice.json`) | 326 | `raccolta/pagine/*/indice.json` |
| partner **già letti** | 259 | `raccolta/letture/*.json` |
| **partner mai raccolti** — record e chiavi canoniche | **276** | 603 − 327 record già coperti (326 cartelle: una serve due record) |
| di cui **lavorabili subito** (hanno un indirizzo) | **259** | `siti.length > 0` |
| di cui **senza alcun indirizzo** (→ L4, fuori fase) | **17** | `siti.length === 0` |
| **collisioni fra i mai raccolti** | **0** | misurato: le 276 chiavi canoniche sono tutte distinte |
| **collisione di codice reale** | **1**, e sta fra i **già letti** | `D AACHEN 01` e `D AACHEN01` condividono cartella `DAACHEN01` e lettura |
| raccolti e non letti (residuo da recuperare) | 2 | — |
| chiavi in `FONTI-partner.json` | **8** (a fronte di 176+ campi applicati) | perdita già avvenuta, §0c |

**Il brief diceva 319; i partner mai raccolti sono 276, e quelli lavorabili
subito 259.** Il 277 della prima stesura era sbagliato per la stessa ragione per
cui lo era il 319: `603 − 326` conta le *cartelle*, non i *record*, e una
cartella copre i due Aachen insieme. Ogni denominatore del §5 usa le **chiavi
canoniche**. I 17 senza indirizzo si contano a parte dall'inizio, o falsano ogni
percentuale di riuscita.

**E la collisione non è dove l'avevo messa.** Non tocca i mai raccolti — fra
loro le 276 chiavi sono tutte distinte — ma i **già letti**: la cartella
`DAACHEN01` contiene le 25 pagine di *uno* dei due record e la lettura
`DAACHEN01.json` è una sola. Il danno è già avvenuto, non è un rischio futuro.
Attenuante misurata: **sono lo stesso ateneo** — RWTH Aachen, `rwth-aachen.de`
per entrambi, 2 mete + 5 mete — quindi il dato letto vale per tutti e due. È un
codice duplicato nei dati, non due università confuse.

Cache già in `raccolta/approvati.json` (212 proposte): `linkCatalogo` 103,
`linkSito` 38, `scadenzeOspitante` 33, `notaDisponibilita` 26,
`requisitoLingua` 12. **Non va rifatta né ri-arbitrata.**

---

## Approach

### 0. Prima di scrivere una riga della catena: sei difetti già presenti

Ognuno si corregge **da solo**, con la sua misura prima e dopo, e con la sua
prova. Non si accorpano.

**0a. La guardia di `costruisciPartner()` esplode appena la Fase 5 funziona.**
`scripts/raccogli-partner.mjs:224` rifiuta l'elenco se
`Math.abs(daRaccogliere - 603) > 31`. Ma `daRaccogliere` **scende per
costruzione**: al 573° campo riempito la ricostruzione muore *proprio perché il
lavoro sta riuscendo*. L'invariante vero è il **numero di partner**; il numero di
quelli con buchi è il risultato, non il controllo — e a lavoro finito vale
legittimamente **zero**.
**Correzione:** tenere `615 ± 31`; sostituire il secondo controllo con
`0 <= daRaccogliere <= partner.length`; aggiungere il controllo che manca davvero
per riconoscere un elenco corrotto — **ogni riga con `codiceNorm` non vuoto** e
**codici canonici distinti fra i record sani**, dove «sani» significa: dopo che
i collisi noti sono stati separati e messi in `collisioni.json`.
L'unicità non può essere una guardia cieca: oggi un duplicato **esiste** (i due
Aachen), quindi una guardia che lancia sui duplicati e una catena che li isola e
prosegue non possono convivere. L'ordine è: **si separa, poi si controlla che
ciò che resta sia unico**.
Prove nuove: elenco con tutte le mete piene → **non** lancia; elenco con un
duplicato **non** dichiarato in `collisioni.json` → lancia; lo stesso duplicato
**dichiarato** → non lancia, e i due record escono dal lavoro; 400 partner → lancia.

**0b. Una sola normalizzazione canonica del codice, e la collisione reale.**
Oggi convivono tre normalizzazioni: `nomeCartella()` toglie **tutti** gli spazi
(`raccogli-partner.mjs:37`), `nome()` fa lo stesso in `leggi-partner.mjs:8`, ma
`costruisciPartner()` conserva gli spazi interni. Risultato misurato: **`D AACHEN 01`
e `D AACHEN01` sono due partner distinti che condividono la stessa cartella e lo
stesso file di lettura** — uno sovrascrive l'altro, in silenzio.
**Correzione:** una funzione `codiceCanonico()` esportata da `lib-mete.mjs`
(dove vive già `statoCampo()`, l'altra definizione unica), usata ovunque.
**La catena isola i record in collisione e prosegue col resto.** Fermarsi
sarebbe un fermo permanente: la fusione dei due Aachen è una decisione di dati
che non si prende oggi, e i 276 partner mai raccolti non devono aspettarla —
tanto più che **fra loro non c'è nessuna collisione**: le loro 276 chiavi
canoniche sono tutte distinte, misurato. La collisione tocca il ramo
*lettura → applicazione*, non quello *raccolta*.
I codici collisi finiscono in `raccolta/collisioni.json` e sono contati a parte
come i 17 senza indirizzo. **L'esclusione dev'essere concreta, non dichiarata:**
`applicaPartner` legge tutto `approvati.json` quando non gli si passa niente
(`applica-partner.mjs:77`), quindi la catena gli passa **esplicitamente l'array
delle proposte del blocco già filtrato**. Il parametro `approvati` esiste già:
basta usarlo invece di lasciarlo leggere il file. Senza questo, «escluso»
resterebbe una frase nel piano.

**0c. `FONTI-partner.json` sta già perdendo le fonti, e la catena peggiorerebbe.**
`applicaPartner()` parte da `fonti = {}`, registra solo ciò che scrive in quella
chiamata e **sovrascrive l'intero file** (`applica-partner.mjs:74` e `:149`).
Misura: **8 chiavi in tutto**, a fronte di 176 campi applicati il 31/08 più i
cataloghi del 01/09. Con la catena a blocchi il file finirebbe per contenere solo
l'ultimo blocco. La tracciabilità della fonte non è un accessorio: è la metà del
vincolo «un dato senza fonte verificabile non è un dato».
**Correzione, in due mosse — impedire le perdite nuove non ripara quella vecchia:**
- **d'ora in poi:** caricare `FONTI-partner.json`, **fondere** e riscrivere, con
  una prova che dopo due applicazioni consecutive le chiavi della prima ci siano
  ancora;
- **all'indietro:** ricostruire le fonti recuperabili confrontando ogni proposta
  di `approvati.json` col valore **pubblicato** nelle mete: dove coincidono, la
  fonte di quella proposta è la fonte di quel campo. Ciò che non si ricostruisce
  finisce in `raccolta/fonti-irrecuperabili.json`, elencato per codice e campo.
  Un elenco esplicito di ciò che si è perso vale più di un file che tace.

**0d. `raccolta/partner.json` è del 30/08** e non vede i campi applicati il
31/08-01/09. Non produce dati sbagliati (`applicaPartner` non sovrascrive mai un
campo pieno) ma fa rileggere partner già a posto, spendendo quota per niente.
**Correzione:** `costruisciPartner()` va **esportata** (oggi non lo è,
`raccogli-partner.mjs:209`) e chiamata dalla catena a ogni avvio. Il comando
esistente riusa `partner.json` se c'è (`:369`) e quindi non ricostruisce nulla:
si aggiunge anche `--ricostruisci-partner` per poterlo fare a mano.
**0e. La raccolta ingoia i fallimenti, quindi le cause non sono ricavabili da
fuori.** `raccogli-partner.mjs` salva note in **testo libero** e alcuni
fallimenti — sitemap e sottodomini (`:293`, `:338`, `:350`) — non lasciano
traccia alcuna. Nessuno script esterno può sapere a posteriori quale tentativo è
fallito e perché: il §5 chiede i falliti divisi per causa, e senza questa
modifica quel resoconto sarebbe inventato.
**Correzione:** `indice.json` guadagna un array `tentativi`, una voce per
tentativo — `{ url, esito, causa, stato }` — con `causa` presa da un insieme
chiuso (`nessunCandidato`, `robots`, `http4xx`, `http5xx`, `timeout`,
`paginaVuota`, `dominioCambiato`, `sconosciuta`). Le note libere restano, in
aggiunta. È l'unica modifica al raccoglitore, e va misurata sui partner già
raccolti prima di lanciarla sui nuovi.

**0f. `applicaPartner` in prova non restituisce ciò che il confronto richiede.**
Con `prova: true` ritorna conteggi e `fileToccati`, **non** il contenuto
prospettico dei file (`applica-partner.mjs:135-141`). Il confronto campo per campo
del §2.6 in modalità prova non avrebbe nulla da confrontare.
**Correzione:** estrarre da `applicaPartner` una funzione pura
`preparaApplicazione()` che ritorna la mappa `file → testo nuovo` senza scrivere
niente, usata **sia** dall'anteprima **sia** dalla scrittura vera. Così prova e
run reale confrontano lo stesso oggetto, ed è l'unico modo perché `--prova`
significhi qualcosa.

**0g. `avanzamento.json` nasce vuoto, e questo rifarebbe le 259 letture.**
Il file del §2 risolve le interruzioni *future*, ma al primo avvio non contiene
nulla: le 259 letture già lavorate risulterebbero tutte `daFondere`, e la catena
rifarebbe centinaia di `statoLink` su indirizzi già verificati — proprio il
lavoro che il piano dichiara intoccabile.
**Correzione: una migrazione iniziale, una volta sola.** Per ogni lettura
esistente si ricostruisce lo stato dalle tracce che ci sono:
- `fuso` se **ogni coppia `(codiceCanonico, campo)` della lettura** compare
  **esattamente una volta** fra `approvati`, `scartati` e `facolta` — non basta
  che il codice compaia da qualche parte, o una fusione **parziale** (una lettura
  con tre campi di cui uno mai fuso) passerebbe per completa. Assenze e doppioni
  vanno agli ambigui. Vale `fuso` anche la lettura **senza `campi`**: nessuna
  proposta è una conclusione che non lascia traccia, ed è il caso che il §2 nomina;
- `applicato` se ogni sua proposta approvata dei tre campi automatici o ha il
  valore già pubblicato, o è registrata come `disaccordo`.
Ogni lettura che **non** rientra in nessuno dei due casi finisce in
`raccolta/avanzamento-ambigui.json` e la migrazione **si ferma**: uno stato
indovinato qui vale meno di un elenco corto da guardare a mano.

**Ordine obbligato: 0b → 0a → 0c → 0d → 0e → 0f → 0g.**
`0b` viene **prima** di `0a`: la guardia nuova ragiona su codici canonici, che
`0b` è ciò che li definisce. Nella prima stesura l'ordine era invertito, ed era
circolare. E `0d` va dopo `0a`, o la ricostruzione lancia.

### 1. La forma del comando

```
node scripts/esegui-partner.mjs [opzioni]
  --limite=N        partner nuovi da lavorare in questo run   (default: tutti)
  --blocco=N        partner per blocco                        (default: 25)
  --paralleli=N     raccolte HTTP in parallelo                (default: 6)
  --prova           nessuna scrittura nei dati, nessun commit
  --solo=PASSO      un solo passo (raccolta|pdf|lettura|cancelli|applica)
  --codici=A,B      solo questi partner (rimisurare sugli stessi casi)
```

**Contratto di `--solo`** (senza, «una modifica alla volta» non è eseguibile):

| passo | ingresso | uscita | selezione |
|---|---|---|---|
| `raccolta` | `partner.json` | `pagine/<C>/indice.json` | partner senza `indice.json` |
| `pdf` | `pagine/<C>/*.json` | pagine PDF con `testo` **o** `estrazioneFallita` | partner con `indice.json` e passo PDF non completato |
| `lettura` | `pagine/<C>/` | `letture/<C>.json` | partner con PDF completato e senza lettura |
| `cancelli` | `letture/<C>.json` | voci fuse in `approvati`/`scartati`/`facolta` | letture non ancora fuse |
| `applica` | `approvati.json` | file mete + commit | proposte fuse e non applicate |

Se il checkpoint per quel passo manca, `--solo` **pretende `--codici`** invece di
indovinare.

**Contratto di `--prova`:** raccolta, PDF e lettura scrivono comunque cache (è
il loro mestiere, ed è idempotente); `applica` chiama `preparaApplicazione()`
(§0f), che ritorna il testo prospettico di ogni file **senza scriverlo**. Il
confronto del §2.6 gira su quel testo, esattamente come nel run vero. Nessun
commit, nessun push, nessuna coda, nessun giudizio scritto — e **nessun
checkpoint `fuso` o `applicato` in `avanzamento.json`**: una prova che marcasse
il lavoro come fatto farebbe **saltare** quel lavoro al run vero, cioè il danno
peggiore che una prova possa fare. In `--prova` diventano reali soltanto gli
artefatti che la prova salva davvero e che sono idempotenti: pagine raccolte,
testo dei PDF, letture.

### 2. Il ciclo, un blocco alla volta

**Lock all'avvio, acquisito in modo atomico.** `fs.openSync(lock, "wx")` su
`raccolta/.esegui.lock`, contenente PID e data — **non** «controllo se esiste,
poi lo scrivo»: fra i due passi due processi entrano entrambi. Se la `wx`
fallisce e il PID dentro è vivo → non si parte.
Se il PID è morto il lock è abbandonato, **ma rimuoverlo e riprenderlo non è
un'operazione sola**: due processi possono leggere entrambi lo stesso PID morto,
uno rimuove e riacquisisce, e l'altro rimuove il lock **appena preso dal primo**.
Il recupero si serializza con un secondo lock, `.esegui.recupero.lock`, preso
anch'esso in `wx`: chi lo ottiene **rilegge** il lock principale, e lo rimuove
solo se contiene ancora lo stesso PID morto che aveva visto. Poi rilascia il
lock di recupero.
**Anche il lock di recupero può restare orfano**, e allora bloccherebbe ogni
riavvio — un guardiano che chiude la porta e muore in piedi. Porta quindi PID,
identificativo e data. **Ma la sua rimozione automatica non si fa**, ed è una
rinuncia deliberata: «riconosci che è scaduto, poi rimuovilo» è la *stessa*
corsa che il lock doveva chiudere, un piano più in basso — due processi possono
riconoscerlo scaduto entrambi, e il secondo rimuove il lock appena preso dal
primo. Senza un compare-and-swap vero, ogni rimozione automatica è un altro giro
dello stesso errore.
Quindi: davanti a un lock di recupero orfano la catena **si ferma e chiede di
rimuoverlo a mano**, stampando il comando. È un caso raro (il recupero dura
secondi e serve solo dopo un blackout durante un altro blackout), e un fermo che
si vede vale più di una corsa che non si vede.

**Selezione del blocco — dal primo passo incompleto, non da «mai raccolto».**
Ogni partner ha uno stato: `daRaccogliere` → `daPdf` → `daLeggere` →
`daFondere` → `daApplicare` → `fatto`. La catena prende i primi `--blocco`
partner **non `fatto`** e li porta avanti dal loro stato. Così il portatile
spento fra raccolta e lettura non perde il partner, e i 2 «raccolti e non letti»
già presenti rientrano da soli.

**Ma gli ultimi due stati non sono derivabili dai file, e questo va chiuso.**
Una lettura con `campi: {}` e soli `nonTrovati` non lascia **nessuna** voce nei
tre esiti dei cancelli: sembrerebbe «non fusa» per sempre. Lo stesso vale per una
proposta finita in `facolta`, per un valore che risulta `uguale` a quello
pubblicato e per un `disaccordo` — nessuno dei tre scrive un campo, quindi
nessuno dei tre «si vede» nei dati.
**Correzione:** `raccolta/avanzamento.json`, una voce per codice canonico con
l'**impronta della lettura** e le fasi concluse (`fuso`, `applicato`), scritta
alla fine di ogni passo. Le quattro conclusioni senza scrittura —
*nessuna proposta*, *solo arbitrato*, *uguale*, *disaccordo* — contano come
**concluse**, e sono elencate come tali nel resoconto: sono esiti, non lavoro
rimasto. L'impronta serve perché una rilettura futura riapra il partner invece
di trovarlo `fatto`.

**Al riavvio, prima di tutto:** se il worktree ha modifiche ai file mete, ci si
ferma e lo si dice. Se c'è un commit locale non spinto, **lo si spinge solo se
il suo hash è quello registrato nel diario della pipeline**; davanti a qualunque
altro commit locale ci si ferma. Spingere un commit non riconosciuto
significherebbe pubblicare lavoro di Nicola che lui non ha ancora deciso di
pubblicare — proprio la ragione per cui questa cartella è separata da
`C:\erasmuswiz`.

1. **Raccolta.** `raccogli-partner.mjs --codici=<blocco> --paralleli=6`.
   La cache di 30 giorni salta chi è già raccolto.
2. **Riestrazione PDF — obbligatoria.** `riscaricaPdf({partner})` per ciascun
   codice, **con un `Limitatore` condiviso passato dall'esterno**: il default
   `new Limitatore(1)` è per-chiamata e non mette pause fra una chiamata e
   l'altra. `riscaricaPdf` accetta **un solo codice**, non una lista: si chiama
   in ciclo. Nessuna modifica a `riscarica-pdf.mjs`.
   **Il passo è completato solo quando ogni pagina PDF referenziata
   dall'`indice.json` ha `testo` oppure `estrazioneFallita`** — la funzione
   ritorna normalmente anche con dei falliti, quindi il valore di ritorno non è
   un segnale di completamento. Il segnale è questo controllo, registrato nel
   diario come `pdf: iniziato|completato`.
   **Se questo passo salta, i valori che venivano dai PDF spariscono e sembra una
   regressione**: la catena rifiuta di passare al 3.
3. **Lettura.** `leggiPartner({partner: <blocco>})`. Salta da sé chi ha già una
   lettura. Sul 429 al minuto aspetta e riprova (già implementato); sul 429
   giornaliero si ferma pulito → **uscita con codice 2** e il messaggio che dice
   da dove ripartire.
4. **Cancelli — solo sulle letture nuove, con fusione a tre file.**
   `applicaCancelli(lettureNuove)`, poi per ogni `(codiceCanonico, campo)`:
   **prima si toglie la voce vecchia da tutti e tre** `approvati.json`,
   `scartati.json`, `riconciliazione/facolta.json`, **poi** si inserisce nel solo
   esito nuovo. I tre file si scrivono **in modo atomico** (`.tmp` + rename), o
   una rilettura che passa dagli approvati agli scarti lascerebbe il dato in due
   esiti incompatibili.
   **Non si rilancia `cancelli.mjs` main()**: rilegge tutte le letture e riscrive
   da zero, il che (a) rifà centinaia di `statoLink` su indirizzi già verificati
   e (b) rimetterebbe in coda i 103 cataloghi già giudicati.
5. **Applicazione.**
   `applicaPartner({campi: ["scadenzeOspitante","linkSito","notaDisponibilita"], letture: []})`.
   `letture: []` è «niente `nonTrovabile` adesso».
6. **Il confronto che le prove verdi non fanno.** Prima del 5 la catena
   fotografa l'array METE di tutti i file; dopo, lo rifotografa e confronta
   **campo per campo**. Rifiuta il commit e **ripristina** se:
   - il numero di mete cambia (atteso: 1.987 prima e dopo);
   - un campo **già pieno** cambia valore (atteso: mai);
   - cambia un campo **fuori dai tre ammessi** (atteso: mai);
   - un file resta a fine-riga **misto** (regressione `impostaCampo` del 01/09).
   Il risultato si **stampa**, non solo si verifica: un confronto che nessuno
   guarda è una prova verde che non vede niente.
7. **La transazione, e il blackout.** Il `try/catch` di `applicaPartner`
   ripristina i file mete ma **non** copre `disaccordi.json` e
   `FONTI-partner.json`, scritti dopo (`applica-partner.mjs:137-152`), e non
   copre affatto un processo ucciso a metà. E `.tmp` + rename **non basta**: è
   atomico su *un* file, non su venti, e un blackout dopo il decimo rename lascia
   dieci file nuovi e dieci vecchi, con la fotografia in memoria sparita insieme
   al processo.
   **La transazione vera, in tre parti:**
   - **manifesto persistente** `raccolta/.transazione.json`:
     `{ stato, blocco, baseHead, fileMete, accessori: [{ file, esisteva }], commit }`.
     **Si arma per ultimo, non per primo:** prima si fanno *tutte* le copie di
     sicurezza e si verificano, **poi** si scrive il manifesto `preparato` con
     `.tmp` + rename. Armarlo prima significherebbe, dopo un blackout durante le
     copie, avere un manifesto che ordina un ripristino da copie incomplete.
     Ogni accessorio porta `esisteva: true|false`, o il rollback non saprebbe che
     un file **nato** in questo blocco va cancellato, non ripristinato.
   - **`baseHead` risolve il caso che il rollback cieco peggiora.** Se il processo
     muore **subito dopo `git commit`**, il manifesto è ancora `preparato`: un
     ripristino cieco riporterebbe indietro gli accessori lasciando i dati nuovi
     — di nuovo metà e metà, per la strada opposta. All'avvio quindi:
     - **`HEAD === baseHead` → rollback completo.** E il comando **non** è
       `git checkout -- <percorsi>`: quello ripristina **dall'indice**, e se il
       processo è morto fra `git add` e `git commit` l'indice contiene già i file
       nuovi — il ripristino sarebbe un'operazione a vuoto. Serve
       `git restore --source=<baseHead> --staged --worktree -- <percorsi>`, che
       riporta indice **e** file di lavoro allo stato del commit base.
     - **`HEAD` avanzata → si completa**, ma solo dopo aver dimostrato che quella
       `HEAD` è *nostra*. «Avanzata» non basta: dopo un blackout Nicola può aver
       fatto un suo commit prima di riavviare, e la catena lo pubblicherebbe.
       Tre condizioni, tutte e tre: `baseHead` è il **genitore** di `HEAD`; i
       percorsi toccati dal commit sono **esattamente** quelli del manifesto; e
       il messaggio porta l'**identificativo di transazione** scritto nel
       manifesto. Se una sola non regge, ci si ferma e lo si dice — non si
       ripristina e non si pubblica.
     A fine blocco riuscito il manifesto diventa `commesso`, e poi si cancella.
   - **i file mete si ripristinano con Git**, non con copie a mano. Sono tutti
     tracciati (40 file sotto `js/atenei/`) e il blocco parte solo con quei
     percorsi puliti: il repo **è** il backup, ed è più solido di copie scritte
     da noi. **`git checkout -- <percorsi>` non compare in questo piano, in
     nessun punto:** legge l'**indice**, quindi dopo un `git add` ripristina i
     file nuovi con i file nuovi. L'unica procedura di ripristino, qui e
     ovunque, è `git restore --source=<baseHead> --staged --worktree -- <percorsi>`.
   - **gli accessori** (`FONTI-partner.json`, `disaccordi.json`, i tre esiti dei
     cancelli, le code, `giudizi.json`, `avanzamento.json`, il diario) si copiano
     in `raccolta/.transazione/` prima di scriverli, e si riscrivono con `.tmp` +
     rename. Il ripristino li rimette dalla copia.
   *(La proposta di Codex era «backup persistenti + manifesto, oppure worktree
   Git». Qui il worktree non serve perché il repo **è già** il backup dei file
   che contano; il manifesto e le copie coprono il resto.)*
8. **Commit e push.** Solo se 5, 6 e 7 sono passati. `git add` con **elenco
   esplicito di percorsi** — soltanto `js/atenei/**/dati-mete*.js` — mai
   `git add -A`: il worktree contiene file non tracciati (`PLAN_FASE5.md` fra
   questi) e `raccolta/` è ignorata (`.gitignore:12`), quindi tutto lo stato
   della pipeline **non** viene versionato. Push su `main` dopo `git fetch`. Se
   il push diverge, la catena **si ferma**: nessun merge automatico.
9. **Diario.** Una riga appesa a `raccolta/esegui-partner.jsonl` (scritta
   atomicamente): blocco, codici, esito **per passo**, campi scritti, commit.

### 3. Le due code di arbitrato, e il registro dei giudizi

`raccolta/arbitrato-linkCatalogo.json` e `raccolta/arbitrato-requisitoLingua.json`.

**Il difetto trovato da Codex, e verificato: i verdetti del 01/09 non esistono su
disco.** I 68 «sì» sono diventati valori nei dati; i **23 «no» e i 12 «non so»**
vivono solo nella pagina di arbitrato fuori dal repo. Filtrare la coda con
`statoCampo(...) === "dato"` toglierebbe i «sì» e **rimetterebbe in coda i «no»**,
cioè esattamente i cataloghi che Nicola ha già scartato uno per uno.

**Correzione, in due mosse:**

- **`raccolta/giudizi.jsonl`**, **registro di eventi** append-only — una riga per
  evento, mai una riga modificata. Ogni evento:
  `{ codiceCanonico, campo, improntaProposta, esito, quando, fonte }`.
  Lo **stato corrente** si ricostruisce leggendo il file e tenendo l'ultimo
  evento per chiave. Così `si` → `applicato` sono **due eventi**, non una voce
  riscritta, e la storia del giudizio resta leggibile.
  `improntaProposta` = SHA-256 di una **serializzazione canonica** del valore
  (chiavi ordinate, niente spazi, `JSON.stringify` su oggetto normalizzato):
  l'impronta di un oggetto senza ordine stabile cambierebbe da sola.
  La coda esclude **tutto ciò che ha un evento nel registro**, qualunque sia
  l'esito.

- **Semina — senza inventare i verdetti che non abbiamo.** I 103 `linkCatalogo`
  di `approvati.json` sono tutti già passati sotto gli occhi di Nicola, ma dei
  loro esiti su disco sopravvive solo la metà: chi ha il campo pieno fu un «sì».
  Per gli altri **non sappiamo** se furono `no` (23) o `nonSo` (4): il file
  esiste solo fuori dal repo. Fondere le due cose in `no` cancellerebbe la
  differenza fra «bocciato» e «da riesaminare».
  Quindi due esiti soli, onesti — e **«campo pieno» non basta: dev'essere
  *uguaglianza profonda* fra proposta e valore pubblicato**, o un campo riempito
  da un'altra fonte verrebbe scambiato per un «sì» dato a questa proposta.
  Misurato sui file reali, con `isDeepStrictEqual`:
  - **76 `applicato`** (valore identico a quello pubblicato);
  - **27 `legacyGiudicato`** (campo vuoto) — «già giudicato il 01/09, esito non
    conservato». Non torna in coda, e resta riconoscibile il giorno in cui si
    vorrà riesaminarlo;
  - **0 divergenti**, il che conferma che la ricostruzione è pulita.
  I «68 sì + 8 motori di ricerca» del §6 dello stato fanno esattamente 76: i
  numeri del diario e quelli dei file coincidono.
  Stessa semina per i **12 `requisitoLingua`** in cache, bocciati dall'arbitrato
  del 31/08: `legacyGiudicato`. Il piano dice che la cache non si ri-arbitra, e
  vale per tutte e due le code, non solo per i cataloghi.
  Il registro nasce con **115 voci**: 76 `applicato`, 27 `legacyGiudicato`,
  12 `legacyGiudicato` di lingua.
  Se un giorno la pagina di arbitrato del 01/09 riemerge, i verdetti veri si
  versano nel registro come eventi nuovi: è esattamente ciò per cui è un log.

Ogni voce di coda: codice, ateneo, valore, citazione, URL della pagina fonte,
numero della pagina inviata, impronta del valore. La **pagina da aprire nel
browser** la costruisco io a parte, come il 01/09, e resta fuori dal repo perché
contiene lavoro non pubblicato. Il giudizio riletto dalla pagina **si versa nel
registro**, non nei dati: l'applicazione resta un passo separato.

### 4. Il ritmo, e cosa si misura il primo giorno

Il tetto della chiave gratuita è **250.000 token in ingresso al minuto**, non
richieste al giorno. Mediana misurata: ~125.000 caratteri ≈ **~31k token** per
chiamata → **~8 chiamate al minuto** prima del 429.
**Nessuna pausa preventiva nel primo run.** Si misura quante attese servono
davvero (`esito.attese429`, `esito.msAttesi`, già registrati da
`leggi-partner.mjs`) e *poi*, se il costo è alto, si aggiunge la pausa — una
modifica, misurata prima e dopo. Metterla subito significa non sapere mai se
serviva.

### 5. Criterio di uscita — misurato, coi falliti divisi per causa

Su **almeno 100 partner nuovi** lavorati:

- **≥75% raggiunti dalla raccolta** fra quelli con un indirizzo nell'accordo
  (il criterio «16 su 20» della Fase 4a era mal posto: su venti casi 14 e 16 non
  si distinguono);
- **«raggiunto» va stretto.** Oggi `indice.esito = "raggiunto"` se c'è **almeno
  una pagina**, anche vuota o inutile (`raccogli-partner.mjs:358`). La misura di
  uscita usa un criterio proprio — almeno una pagina con testo utilizzabile — e
  riporta **entrambi** i numeri, così si vede quanto valga il criterio vecchio;
- **i non raggiunti divisi per causa**, contati, **letti dall'array `tentativi`
  che la raccolta scrive in `indice.json` (§0e)** — non ricostruiti dall'esterno
  parsando note in testo libero, che è impossibile per i fallimenti che oggi non
  lasciano traccia;
- **le proposte bocciate divise per causa.** Sono **dodici**, non nove:
  `citazioneAssente`, `citazioneFuoriMisura`, `codiceSconosciuto`,
  `fonteNonInviata`, `formaNonValida`, `indirizzoInventato`, `urlInconcludente`,
  `urlMorto`, `linguaNonCitata`, `livelloNonCitato`, `livelloAmbiguo`,
  `paginaCambiata`. Il conteggio **raggruppa dinamicamente** i valori reali di
  `causa` con una voce `sconosciuta`, così una causa nuova non sparisce dal
  resoconto;
- **i partner conclusi senza scrittura** contati per esito — *nessuna proposta*,
  *solo arbitrato*, *uguale*, *disaccordo*, *facoltà* — perché altrimenti
  sembrano lavoro non fatto quando sono lavoro finito;
- **zero** campi già pieni modificati, **zero** mete perse, **zero** file a
  fine-riga misto, **zero** chiavi perse in `FONTI-partner.json`, **zero**
  proposte in coda che abbiano già un evento in `giudizi.jsonl`;
- `npm run test:unit` verde, con le prove nuove del §6.

Sotto il 75%, **non si passa oltre**: si guarda la causa più grossa, si corregge
quella sola, si rimisura sugli **stessi** codici (`--codici=`).

### 6. Le rotture deliberate (scelte fuori dal cuore dell'algoritmo)

Il 31/08 una rottura su quattro restava verde, e il 30/08 pure: sempre perché la
prova copriva la funzione e non chi la chiamava. Le quattordici rotture, una alla
volta, suite intera, poi si rimette a posto:

1. **Togliere il passo 2** (riestrazione PDF) dal ciclo → deve fallire una prova,
   non solo peggiorare un numero.
2. **`letture: undefined`** invece di `[]` al passo 5 (scrivere i `nonTrovabile`
   di soppiatto) → deve fallire.
3. **Aggiungere `linkCatalogo`** all'elenco `campi` del passo 5 → deve fallire.
4. **Rompere il verificatore, non il verificato:** far restituire al confronto
   del §2.6 sempre «nessuna differenza» → deve fallire.
5. **Riscrivere `approvati.json` da zero** invece di fondere → deve fallire (è la
   rottura che rimetterebbe in coda i 103 già giudicati).
6. **Commit prima del passo 6** (invertire due righe) → deve fallire.
7. **Selezionare il blocco per «manca `indice.json`»** invece che per primo passo
   incompleto → deve fallire su un partner raccolto-e-non-letto.
8. **`git add -A`** invece dei percorsi espliciti → deve fallire (un file non
   tracciato nel commit dei dati).
9. **Non fondere `FONTI-partner.json`** → deve fallire alla seconda applicazione.
10. **Svuotare `giudizi.jsonl`** → deve fallire: i 115 già giudicati ricompaiono
    in coda.
11. **Uccidere il processo fra il decimo e l'undicesimo file mete** (prova con
    un'iniezione che lancia a metà, manifesto `preparato` lasciato su disco) →
    l'avvio successivo deve ripristinare e dirlo, non proseguire.
12. **Lock con «controlla poi scrivi»** invece di `openSync(…, "wx")` → deve
    fallire una prova che simula due avvii intrecciati.
13. **Spingere un commit locale col hash non registrato nel diario** → deve
    fallire: è il commit di Nicola, non della pipeline.
14. **Concludere un partner con `campi: {}`** (nessuna proposta) → deve risultare
    `fatto`, non ripresentarsi a ogni run. È la rottura al contrario: la prova
    fallisce se il partner torna in coda.
15. **Uccidere il processo fra `git commit` e il push**, con manifesto
    `preparato` e `HEAD` avanzata → l'avvio successivo deve **completare**, non
    ripristinare. È il caso opposto alla rottura 11, e va provato a parte.
16. **Armare il manifesto prima delle copie** → deve fallire una prova che
    simula il blackout durante la copia.
17. **Non passare `approvati` filtrato ad `applicaPartner`** (lasciargli leggere
    il file) → deve fallire: un codice colliso rientrerebbe dalla finestra.
18. **`avanzamento.json` vuoto al primo avvio** senza migrazione → deve fallire:
    le 259 letture non devono tornare `daFondere`.

Una rottura che resta verde è una prova da rinforzare, non una rottura da
scartare.

---

## Key decisions & tradeoffs

| decisione | scelta | perché, e cosa costa |
|---|---|---|
| **Campi applicati da soli** | i **tre** promossi 16/16 | `linkCatalogo` non ha cancello (tre ipotesi misurate sui casi etichettati, tutte bocciate); `requisitoLingua` fu bocciato il 31/08 e il suo difetto — una tabella appiattita letta come «basta una delle due lingue» — **nessun cancello lo vede**. Costo: due code a mano invece di una. |
| **`nonTrovabile`** | **non** si scrivono ora | Decisione a sé (§8.3); mescolarla renderebbe impossibile attribuire un guaio. Costo: lo studente vede un campo vuoto dove potrebbe leggere «cercato, non pubblicato». |
| **Commit e push automatici** | **sì**, per blocco, dopo cancelli e confronto, con percorsi espliciti | È ciò che rende il run interrompibile: chiuso il portatile, il lavoro è su GitHub. Costo: un errore che passa i cancelli va online — mitigato da un commit isolato e revertibile per blocco. |
| **Coda di arbitrato** | JSON + registro di eventi `giudizi.jsonl` + pagina a parte | Senza il registro, i 23 respinti del 01/09 tornano in coda: verificato, i verdetti non stanno su disco. Registro di **eventi**, non voci mutabili: `si` → `applicato` sono due righe, e la storia resta leggibile. |
| **Cancelli sulle sole letture nuove** | sì, con fusione **atomica a tre file** | Evita `statoLink` ripetuti e la ri-arbitraggio; la fusione parziale lascerebbe lo stesso dato in due esiti. Costo: codice nuovo, quindi provato (rotture 5 e 10). |
| **Transazione** | manifesto con `baseHead`, armato **dopo** le copie + `git restore --source=<baseHead> --staged --worktree` per le mete + copie con `esisteva` per gli accessori | Il `catch` di `applicaPartner` non copre gli accessori né un processo ucciso, e `.tmp` + rename è atomico su **un** file, non su venti. I file mete sono già tracciati da Git: il repo **è** il backup, e non c'è niente in più da mantenere. |
| **Selezione per stato** | primo passo incompleto, con `avanzamento.json` | Altrimenti il partner interrotto fra raccolta e lettura resta orfano per sempre — e i quattro esiti che non scrivono niente (nessuna proposta, solo arbitrato, uguale, disaccordo) tornerebbero in coda a ogni run. |
| **Push al riavvio** | solo se l'hash è nel diario della pipeline | Spingere un commit non riconosciuto pubblicherebbe lavoro di Nicola che lui non ha deciso di pubblicare. |
| **`FONTI-partner.json`** | fusione d'ora in poi **+ ricostruzione all'indietro** | Impedire le perdite nuove non ripara quella già avvenuta: 8 chiavi per 176+ campi. Ciò che non si ricostruisce va elencato, non taciuto. |
| **Codice canonico** | una sola `codiceCanonico()` in `lib-mete.mjs`; i collisi si **isolano**, non fermano | Oggi tre normalizzazioni divergenti e **una collisione reale**: i due Aachen condividono cartella e lettura, uno sovrascrive l'altro in silenzio. Fermarsi sarebbe un fermo permanente, perché la fusione è una decisione di dati che non si prende oggi: si escludono i due e si prosegue coi 276 mai raccolti, fra i quali — misurato — non c'è nessuna collisione. |
| **Lock all'avvio** | `openSync(…, "wx")`, PID + data, recupero serializzato da un secondo lock | Due processi si intreccerebbero molto prima del push divergente — e «controlla poi scrivi» li lascia entrare entrambi. |
| **Guardia `costruisciPartner`** | invariante = 615 partner + codici distinti | Il numero di buchi è il risultato: usarlo come controllo fa esplodere la pipeline quando funziona, e a lavoro finito vale zero. |
| **Nessuna pausa preventiva** | sì, si misura prima | Il tetto è ai token al minuto: la pausa giusta si sa solo dopo. |
| **Zero dipendenze nuove** | sì | Node puro. `statoCampo()` resta l'**unica** definizione di campo vuoto. |

---

## Risks / open questions

- **La coda di arbitrato cresce.** In proporzione ai 259 già letti, sui 276 nuovi
  ci si aspettano ~100 cataloghi e ~12 requisiti di lingua da giudicare a mano.
  È tempo di Nicola, ed è il prezzo del vincolo del 01/09.
- **`D AACHEN 01` / `D AACHEN01`:** la catena li isola e prosegue. Se sono lo stesso
  ateneo vanno fusi nei dati — intervento sui file mete, non sulla pipeline — e
  fino ad allora quei due partner restano non mappati. È un buco noto di due record — lo stesso ateneo — non un fermo di 276.
- **`legacyGiudicato` è una perdita accettata, non risolta.** Di 27 cataloghi
  sappiamo che furono giudicati e non sappiamo come. Se la pagina del 01/09
  riemerge, i verdetti veri si versano nel registro come eventi nuovi.
- **L'errore che sopravvive a tutto:** l'elenco delle *destinazioni* di scambio
  preso per un elenco di *corsi* (Växjö, Villanueva, UNED). Nessun cancello lo
  vede; questa fase non lo risolve, lo intercetta solo l'arbitrato.
- **~335 PDF a font con codifica propria (E8)** restano illeggibili: il guadagno
  potenziale più grande, fuori da questa fase.
- **Push concorrente.** Il lock difende dentro il checkout; se il task pianificato
  sul PC aziendale non è spento, restano due processi su `main` e la difesa vera è
  spegnerlo.
- **`fileMete` è definita tre volte** (`cancelli.mjs` esportata,
  `raccogli-partner.mjs` e `conta-anomalie-lingua.mjs` locali). Non blocca, ma è
  la prossima duplicazione da chiudere dopo `codiceCanonico()`.
- **I 17 partner senza indirizzo** non hanno percorso qui: vanno alla riserva L4,
  che è Fase 6.

## Out of scope

- Scrivere i 1.433 `nonTrovabile` (decisione a sé, §8.3).
- Applicare `linkCatalogo` o `requisitoLingua` senza arbitrato umano.
- La riserva L4 per i partner irraggiungibili.
- La riconciliazione dei 418 disaccordi fra dipartimenti (Fase 6).
- Qualunque modifica al front-end (`js/app.js`, `js/puro.js`).
- Fondere `D AACHEN 01` con `D AACHEN01`: la catena lo segnala, non lo decide.
- Qualunque dato di livello **facoltà** nei file del sito: continua a finire in
  `riconciliazione/facolta.json` e basta.
- Nuovi campi nello schema, nuove dipendenze, un secondo modello verificatore.
