# ORDINE CONGELATO — Fase 5, Consegna A: le sette correzioni preliminari

_Congelato il 2026-09-01 da Claude, dopo cinque giri di revisione avversariale
con Codex (`PLAN_FASE5.md`, `PLAN-REVIEW-LOG_FASE5.md`). Base: `e3245cf`,
300/300 prove verdi._

## Cosa NON è questa consegna

**Non si scrive `scripts/esegui-partner.mjs`.** La catena è la Consegna B e parte
solo quando questa è chiusa e misurata. Qui si correggono **sette difetti in
script già collaudati**, e nient'altro. Se una correzione sembra chiedere di
toccare la catena, la risposta è: non ancora.

## Le regole della casa, che valgono più della velocità

1. **Una correzione alla volta, misurata prima e dopo.** Sette correzioni, sette
   misure: un numero prima, un numero dopo, stampato. Non si accorpano, e non si
   passa alla successiva senza la misura della precedente.
2. **Zero dipendenze nuove.** Node puro, come tutto il resto del progetto.
3. **Una sola definizione di campo vuoto:** `statoCampo()` in `scripts/lib-mete.mjs`.
   Non se ne scrive una seconda, per nessun motivo.
4. **Un dato di livello facoltà non entra nei file del sito.**
5. **Non si sovrascrive mai un campo già pieno.**
6. **Le prove verdi non vedono un dato alterato.** Dopo ogni scrittura sui file
   mete, confronta l'array METE prima e dopo, campo per campo, e **stampa** il
   risultato. Un confronto che nessuno guarda è una prova verde che non vede niente.
7. **Rompi il codice apposta**, e scegli rotture diverse da quelle che verrebbero
   in mente a chi l'ha scritto. Il 30/08 e il 31/08 una rottura su quattro
   restava verde, sempre per la stessa ragione: la prova copriva la funzione e
   non **chi la chiama**. Una rottura che resta verde è una prova da rinforzare,
   non una rottura da scartare.
8. `npm run test:unit` deve restare verde a ogni passo. Parte da **300**.
9. **Niente commit, niente push.** Il diff lo rivede Claude e lo approva Nicola.

## Trappole note di questo repo

- **L'heredoc di bash mangia i backslash:** per generare codice che contenga
  `\n` o `\s` usa lo strumento di scrittura file oppure
  `String.fromCharCode(92)`, e **rileggi** quello che hai scritto.
- **`^` con il flag `m` combacia fra il CR e il LF di un CRLF.** È il difetto
  costato 147 righe a fine-riga misto il 01/09, corretto in `impostaCampo`. Se
  scrivi una regexp multilinea su questi file, ricordatelo.
- **Non fidarti del nome di un indirizzo: apri la pagina.** Il 01/09 la stima a
  occhio dava 89% dove l'arbitrato umano dava 66%, sempre per questo.

## I numeri di partenza, misurati oggi (sono il «prima»)

| grandezza | valore |
|---|---:|
| prove unitarie | 300 verdi |
| partner totali / con campi mancanti | 615 / 603 |
| partner mai raccolti (record = chiavi canoniche) | **276**, 0 collisioni |
| di cui con indirizzo / senza | **259** / **17** |
| collisione di codice reale, fra i **già letti** | 1: `D AACHEN 01` + `D AACHEN01` → cartella `DAACHEN01` |
| chiavi in `FONTI-partner.json` | **8**, a fronte di 176+ campi applicati |
| proposte in `approvati.json` | 212 — `linkCatalogo` 103, `linkSito` 38, `scadenzeOspitante` 33, `notaDisponibilita` 26, `requisitoLingua` 12 |
| dei 103 `linkCatalogo`: valore già pubblicato / campo vuoto / divergenti | **76 / 27 / 0** (`isDeepStrictEqual`) |
| letture esistenti | 259 |
| file mete tracciati da Git | 40, sotto `js/atenei/` |

---

## Le sette correzioni, in ordine obbligato

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

---

## Come si chiude questa consegna

Per **ognuna** delle sette correzioni, nel resoconto finale:

- il numero **prima** e il numero **dopo**, misurati e stampati;
- le prove nuove che la coprono, e **almeno una rottura deliberata** che le fa
  fallire — descritta, applicata, rimessa a posto;
- `npm run test:unit` verde (parte da 300, deve salire).

Più tre verifiche globali, alla fine:

- **1.987 mete prima e 1.987 dopo**, e nessun campo già pieno cambiato;
- **zero file a fine-riga misto** fra quelli toccati;
- `node scripts/verifica-completezza.mjs` e `node scripts/valida-stato.mjs` verdi.

Se una delle sette non si lascia misurare come chiesto, **fermati su quella e
dillo**, invece di consegnarla senza numero. Le altre sei si consegnano comunque.

## Fuori ambito, esplicitamente

- `scripts/esegui-partner.mjs`: è la Consegna B;
- fondere `D AACHEN 01` con `D AACHEN01` nei dati: la §0b li **rileva e isola**,
  la fusione è una decisione di Nicola;
- scrivere i `nonTrovabile`;
- applicare `linkCatalogo` o `requisitoLingua`;
- qualunque modifica al front-end (`js/app.js`, `js/puro.js`);
- commit, push, pubblicazione.
