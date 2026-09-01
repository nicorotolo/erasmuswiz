# ORDINE CONGELATO — Fase 5, Consegna B: `scripts/esegui-partner.mjs`

_Congelato il 2026-09-01 da Claude. Base: `94c74a0` (Consegna A chiusa),
**322/322 prove verdi**, albero pulito._
_Progetto: `PLAN_FASE5.md`. Storia delle obiezioni: `PLAN-REVIEW-LOG_FASE5.md`
(cinque giri di revisione avversariale con un secondo modello, 40 obiezioni,
tutte verificate contro il codice e tutte accolte)._

## Cos'è questa consegna

Scrivere **un solo file nuovo**, `scripts/esegui-partner.mjs`: la catena
raccolta → riestrazione PDF → lettura → cancelli → applicazione → commit/push,
a blocchi, ripartibile dopo un'interruzione qualunque.

Gli script che incatena **esistono già e non vanno riprogettati**. Se uno di
loro va toccato, il cambiamento dev'essere minimo, dichiarato nel resoconto e
provato a parte.

## ⚠️ LEGGI PRIMA: il §0 del piano è già fatto

Il piano `PLAN_FASE5.md` descrive un §0 di sette correzioni come lavoro **da
fare**. È stato fatto stamattina (commit `94c74a0`). Quindi dove il piano dice
«va esportata», «va aggiunta», «va corretta», quella cosa **c'è già**.
Il §0 **non e' riportato qui sotto**, apposta: se ti serve il *perche'* di una
scelta, leggilo in `PLAN_FASE5.md`. Non rifarlo.

Questo è ciò che trovi già pronto:

| c'è già | dove | cosa fa |
|---|---|---|
| `codiceCanonico(codice)` | `lib-mete.mjs` | **l'unica** normalizzazione del codice. Usala ovunque; non scriverne un'altra |
| `caricaPartner({radice, ricostruisci})` | `raccogli-partner.mjs` | elenco partner, con ricostruzione su richiesta |
| `costruisciPartner({radice, caricaCsv})` | `raccogli-partner.mjs` | ricostruisce, **rileva e isola le collisioni**, scrive `partner.json` e `collisioni.json` |
| `separaCollisioni`, `validaPartner` | `raccogli-partner.mjs` | già collegate: una collisione nuova viene isolata e stampata, non ferma la pipeline |
| `riscaricaPdf({partner, limitatore, ...})` | `riscarica-pdf.mjs` | **un solo codice per chiamata**, non una lista. Accetta un `limitatore` dall'esterno: passagliene uno condiviso |
| `leggiPartner({partner, limite, ...})` | `leggi-partner.mjs` | gestisce già il 429 al minuto (attende e riprova) e quello giornaliero (si ferma pulito) |
| `applicaCancelli(letture, {...})` | `cancelli.mjs` | ritorna `{approvati, scartati, facolta}` |
| `preparaApplicazione({originali, proposte, letture})` | `applica-partner.mjs` | **pura**: ritorna `fileNuovi` (mappa file → testo) senza toccare il disco |
| `applicaPartner({approvati, letture, campi, prova, ...})` | `applica-partner.mjs` | accetta `approvati` come **array esplicito**: passaglielo filtrato, non lasciargli leggere il file |
| `unisciDisaccordi`, `ricostruisciFonti`, `ricostruisciDisaccordi` | `applica-partner.mjs` | fonti e disaccordi si **fondono**, non si sovrascrivono più |
| `migraAvanzamento({radice})` | `migra-avanzamento.mjs` | la migrazione una-tantum: **già eseguita**, non rilanciarla |
| `tentativi[]` dentro `indice.json` | `raccolta/pagine/<C>/` | `{url, esito, causa, stato}` con causa da un insieme chiuso. **Le statistiche per causa del §5 si leggono da qui**, non dalle note in testo libero |
| `raccolta/avanzamento.json` | — | **258 voci**: 231 `applicato:true`, 27 `applicato:false` con `campiDaApplicare` |
| `raccolta/collisioni.json` | — | 1 voce: i due record Aachen, isolati |

## Lo stato di partenza, misurato adesso (è il tuo «prima»)

| grandezza | valore |
|---|---:|
| prove unitarie | **322 verdi** |
| record partner sani | 613 |
| con almeno un campo mancante | 591 |
| **mai raccolti** | **276** |
| di cui con un indirizzo (lavorabili) / senza (→ L4, fuori fase) | **259** / **17** |
| letture già fatte | 259 |
| voci in `avanzamento.json` | 258 — 231 applicate, **27 in attesa** |
| collisioni isolate | 1 (`DAACHEN01`) |
| proposte in `approvati.json` | `linkCatalogo` 103, `linkSito` 38, `scadenzeOspitante` 33, `notaDisponibilita` 26, `requisitoLingua` 12 |
| mete pubblicate | 1.987 |
| impronta SHA-256 dell'array METE | `464d88e67e81e580eeef9a05b842aa85a06640c136c817f15c591427e7118bc4` |

## Il blocco zero: i 29 campi già approvati e mai applicati

Prima di lavorare un solo partner nuovo, la catena esegue un **blocco zero**:
applica i **29 campi** che le 27 voci `applicato:false` di `avanzamento.json`
elencano in `campiDaApplicare` — 22 `notaDisponibilita`, 3 `linkSito`,
4 `scadenzeOspitante`.

Sono proposte che avevano già passato i cancelli il 01/09 e non sono mai state
scritte, perché quel giorno l'applicazione girò con `--campi=linkCatalogo`.
Vanno per prime e **da sole, in un commit loro**: è l'unico modo perché il loro
effetto sui dati resti leggibile separatamente da quello dei partner nuovi.
Passano dallo stesso percorso di tutti gli altri — cancelli di sistema,
confronto campo per campo, transazione, commit — senza scorciatoie.
A fine blocco zero quelle 27 voci diventano `applicato:true`.

## Le regole della casa, che valgono più della velocità

1. **Una cosa alla volta, misurata prima e dopo.** Ogni passo ha il suo numero
   prima e il suo numero dopo, stampati.
2. **Zero dipendenze nuove.** Node puro, ESM (`.mjs`).
3. **Una sola definizione di campo vuoto:** `statoCampo()`. Una sola
   normalizzazione del codice: `codiceCanonico()`. Non se ne scrivono altre.
4. **Non si sovrascrive mai un campo già pieno.**
5. **Un dato di livello facoltà non entra nei file del sito.**
6. **Le prove verdi non vedono un dato alterato.** Il confronto campo per campo
   fra prima e dopo va **stampato**, non solo verificato: un confronto che
   nessuno guarda è una prova verde che non vede niente.
7. **Rompi il codice apposta**, e scegli rotture che colpiscano **chi chiama**,
   non solo la funzione. Il 30/08, il 31/08 e di nuovo oggi una rottura è
   rimasta verde esattamente per questa ragione. Una rottura che resta verde è
   una prova da rinforzare, non una rottura da scartare.
8. `npm run test:unit` verde a ogni passo. Parte da **322**.
9. **Nessun commit e nessun push del tuo lavoro.** La catena li *implementa* e
   li prova con git finto o su un repo temporaneo; il commit vero lo fa un umano
   dopo aver letto il diff.
10. Commenti in italiano che spiegano il **perché** e citano la misura, come
    fanno gli script esistenti.

## Trappole note di questo repo — leggile, sono costate care

- **RIRACCOGLIERE AZZERA IL TESTO DEI PDF.** Dopo ogni raccolta va rilanciato
  `riscarica-pdf.mjs`, o i valori che venivano dai PDF spariscono e sembra una
  regressione. **È successo oggi su `A GRAZ02`** — 3 PDF, 0 col testo — perché
  questa riga mancava dall'ordine precedente. Ora c'è, ed è un vincolo della
  catena, non un consiglio.
- **`^` con il flag `m` combacia FRA il CR e il LF di un CRLF.** In JavaScript
  l'indentazione catturata contiene già un a-capo nudo: è costato 147 righe a
  fine-riga misto il 01/09.
- **L'heredoc di bash mangia i backslash.** Per generare codice che contenga
  `\n` o `\s` usa la scrittura file diretta oppure `String.fromCharCode(92)`, e
  **rileggi** ciò che hai scritto. È fallito di nuovo oggi.
- **`git checkout -- <percorsi>` NON ripristina dal commit**: legge l'**indice**,
  quindi dopo un `git add` ripristina i file nuovi con i file nuovi. L'unica
  procedura di ripristino è
  `git restore --source=<baseHead> --staged --worktree -- <percorsi>`.
- **Non fidarti del nome di un indirizzo: apri la pagina.** Il 01/09 la stima a
  occhio dava 89% dove l'arbitrato umano dava 66%.

---

# IL PROGETTO

_Quello che segue sono i §1-§6 di `PLAN_FASE5.md`, alla lettera, già passati per
cinque giri di revisione avversariale. Il §0 (le sette correzioni) resta nel
piano ed è già fatto: qui c'è solo il compito._

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

# COME SI CHIUDE QUESTA CONSEGNA

**La passata completa sui 259 partner NON si lancia qui.** Si consegna il
codice, le prove, e **una prova di funzionamento su scala piccola**: il blocco
zero, più un blocco di prova con `--limite=5 --blocco=5`.

Nel resoconto finale servono cinque cose.

### 1. Il blocco zero, coi numeri

Quanti dei 29 campi sono stati scritti, quante mete toccate, il confronto
prima/dopo **stampato** campo per campo, e la conferma che le 27 voci di
`avanzamento.json` sono passate a `applicato:true`. Se un campo dei 29 non
viene scritto, dì **quale e perché** invece di riportare solo il totale.

### 2. Il blocco di prova sui 5 partner

Quanti raggiunti, quanti PDF riestratti, quante letture, quante proposte per
esito, quanti campi scritti, e i falliti **divisi per causa** letti dall'array
`tentativi`.

**Se la chiave `GEMINI_API_KEY` non è disponibile nel tuo ambiente, dillo e
fermati lì**: consegna la catena col modello iniettato finto, dichiara che il
passo di lettura non è stato provato sul vero, e riporta tutto il resto.
**Non simulare un risultato di lettura e non spacciarlo per una misura.**

### 3. Le diciotto rotture deliberate del §6

Una alla volta: quale, come applicata, quale prova è diventata rossa, conferma
del ripristino. Se una resta verde, **dillo** e rinforza la prova finché non la
vede — è successo tre volte su questo repo, sempre perché la prova copriva la
funzione e non chi la chiama.

### 4. Le verifiche globali

- **1.987 mete** prima e dopo, e l'**impronta SHA-256** dell'array. Dopo il
  blocco zero l'impronta **cambierà**, ed è giusto: riportala nuova e di'
  esattamente quali campi l'hanno cambiata, campo per campo.
- **Zero** campi già pieni modificati.
- **Zero** file a fine-riga misto fra quelli toccati.
- `node scripts/verifica-completezza.mjs` e `node scripts/valida-stato.mjs`
  verdi (i due avvisi non bloccanti su DIET e Informatica sono noti).

### 5. `npm run test:unit` verde, col conteggio

Parte da 322.

**Se un pezzo non si lascia provare come chiesto, fermati su quello e dillo**,
invece di consegnarlo senza numero. Tutto il resto si consegna comunque.

---

## Fuori ambito, esplicitamente

- **Lanciare la passata completa** sui 259 partner: la decide Nicola dopo aver
  letto il diff.
- Applicare `linkCatalogo` o `requisitoLingua` ai dati: vanno nelle **code di
  arbitrato**, mai nei file del sito senza occhi umani. È il vincolo del 01/09
  e non si riapre.
- Scrivere i campi `nonTrovabile`: è una decisione a sé, non ancora presa.
- Fondere `D AACHEN 01` con `D AACHEN01`: restano isolati e visibili.
- La riserva L4 per i 17 partner senza indirizzo: è Fase 6.
- La riconciliazione dei disaccordi fra dipartimenti: è Fase 6.
- Il front-end (`js/app.js`, `js/puro.js`).
- La **pagina di arbitrato** da aprire nel browser: la costruisce Claude a
  parte e resta fuori dal repo. Tu produci **solo** i file JSON delle code.
- Rilanciare `migraAvanzamento`: è già stata eseguita.
- Commit e push del tuo lavoro; dipendenze nuove; campi nuovi nello schema;
  un secondo modello verificatore.
