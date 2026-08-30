# SPEC FASE 4b — LA LETTURA, I CANCELLI, L'APPLICAZIONE — **CONGELATA 2026-08-30**

> Ordine di lavoro per Codex. Chi esegue non prende decisioni di progetto: se
> qualcosa qui e' ambiguo, si ferma e chiede invece di scegliere.
> Contesto: `DISEGNO_PIPELINE_DATI.md` (pipeline V2), `SPEC_FASE4A_raccolta.md`
> (la fase precedente, gia' eseguita).
>
> **Perimetro: tre script nuovi, un modulo nuovo, due correzioni a uno script
> esistente.** Niente altro. In particolare **non** si scrive l'orchestratore
> `esegui-partner.mjs`: incatenare i pezzi e' Fase 5, e i tre si lanciano in
> sequenza a mano.
>
> Si lavora in `C:\erasmuswiz-mappatura`. **Git resta fuori dal perimetro**:
> lo script scrive nei file dati, ma non committa, non pusha, non crea rami.
> Il diff lo legge un umano prima del commit.

---

## 0. PRIMA DI SCRIVERE CODICE: COSA ESISTE GIA'

Questo progetto ha gia' pagato una volta il costo di far ricostruire cose che
c'erano. Leggere questi file **prima** di progettare qualunque cosa:

| File | Cosa fa gia' | Regola |
|---|---|---|
| `scripts/lib-mete.mjs` | `caricaMete`, `valoreCampo`, `impostaCampo`, `spanTutteMete`, `serializza`, e **l'unica definizione di "campo vuoto"**: `statoCampo`, `campoVuoto`, `campoVuotoValore`, `copertoDavvero` | usare queste. **Non** scriverne un'altra: ce n'erano cinque e il 30/08 sono state unificate apposta |
| `scripts/lib-output-batch.mjs` | valida gia' **tutto lo schema di uscita**: albero lingua ANY/ALL, livelli CEFR ammessi, `scadenzeOspitante`, URL, e `validaFonte()` (url + citazione + `verificataIl`) | **riusare `validaFonte` e `validaNodoLingua` cosi' come sono.** E' la parte davvero riusabile dell'impianto V1 |
| `scripts/verifica-link.mjs` | controlla via HTTP che un URL risponda | riusare per il cancello 2 |
| `scripts/verifica-completezza.mjs` | scarica i 18 export ufficiali in `fonti/sapienza/goerasmus/<AMBITO>.csv` | riusare la cache; **non** riscrivere il download |
| `scripts/raccogli-partner.mjs` | Fase 4a: costruisce `raccolta/partner.json` e scarica le pagine in `raccolta/pagine/<CODICE>/` | si tocca **solo** per le due correzioni del §5 |
| `scripts/applica-batch.mjs` | applica un lotto V1 a **un** file di **un** dipartimento | **non riusabile**: e' legato a `mappatura-stato.json` e al modello un-lotto-un-file. Un partner tocca fino a 14 file. Non modificarlo, non romperlo, non chiamarlo |
| `mappatura-stato.json` | stato della mappatura V1 | **sola lettura**, e in realta' non serve a niente qui |

---

## 1. COSA DEVE FARE, IN UNA RIGA

Prendere le pagine gia' scaricate in `raccolta/pagine/`, farle leggere a Gemini
**una volta per partner**, buttare via tutto cio' che non supera cinque cancelli
deterministici, e scrivere nei file dati soltanto quello che resta.

---

## 2. LE DECISIONI GIA' PRESE (non si riaprono)

Queste sono state decise il 2026-08-30 e non sono negoziabili dall'esecutore.

**D1. La citazione deve comparire lettera per lettera nel testo che abbiamo
mandato al modello.** E' questo che sostituisce la verifica di un secondo
modello. Se non c'e', il campo si scarta. Nessuna eccezione, per nessun modello.

**D2. Ogni dato registra a che livello e' stato letto** — pagina d'ateneo o
pagina di facolta'. Lingua, scadenze e disponibilita' cambiano da facolta' a
facolta' dello stesso ateneo: Aix-Marseille chiede francese B1 in generale, B2
a Giurisprudenza, C1 al dipartimento di francese, e sono tutti veri insieme.

**D3. Un dato letto a livello di facolta' NON entra nei file del sito.** Si
registra, con scritto da dove viene, e diventa il materiale della Fase 6. Vale
per `requisitoLingua`, `scadenzeOspitante`, `notaDisponibilita`. Non vale per
`linkSito` e `linkCatalogo`, che per costruzione valgono per l'ateneo (vedi
`DISEGNO_PIPELINE_DATI.md` §D1): li' il livello si registra ma non blocca.

**D4. `linkSito` e' la pagina per studenti in arrivo**, non l'indirizzo
istituzionale. La deve trovare il modello leggendo le pagine, e vale il
cancello della citazione come per gli altri campi. **Non** si riempie
`linkSito` dall'indirizzo dell'export ufficiale, nemmeno per i 179 partner in
cui sarebbe gratis: quello e' l'ingresso della raccolta, non un dato per lo
studente.

**D5. Non si sovrascrive mai un campo gia' pieno.** Se il modello legge un
valore diverso da quello pubblicato, il caso finisce nella lista dei disaccordi
(Fase 6) e i dati non si toccano. `impostaCampo(..., { soloSeVuoto: true })`.

**D6. Un campo che ha passato tutti e cinque i cancelli si scrive**, senza
un'ulteriore approvazione, gia' sul campione di prova. E' un modo di mettere
alla prova i cancelli sul serio. Ma il diff resta da leggere prima del commit,
e il commit non lo fa lo script.

**D7. "Non trovabile" conta come copertura solo con fonte e data.** Se il
modello ha letto le pagine e il dato non c'e', si scrive
`nonTrovabile: { <campo>: { cercatoIl, fonte } }` dove `fonte` e' l'URL della
pagina piu' pertinente effettivamente letta. Senza URL non si scrive niente: un
`nonTrovabile` senza fonte e' uno dei 168 casi che la Fase 3 ha deciso di **non**
contare, e non se ne creano di nuovi.

**D8. Zero dipendenze nuove.** Solo Node 22 e la sua libreria standard. Vale
anche per il PDF: `node:zlib` c'e' gia', un pacchetto no.

---

## 3. IL PERIMETRO, PEZZO PER PEZZO

### 3.1 `scripts/lib-pdf.mjs` — l'estrattore PDF *(nuovo)*

Il 17% delle pagine raccolte sono PDF (313 su 1.831) e la Fase 4a li ha salvati
**senza contenuto**: `testo: null` e nemmeno i byte, solo l'URL. Le factsheet
Erasmus, dove stanno lingua e scadenze, sono spesso proprio quelle.

Modulo puro, esportato, senza dipendenze:

```js
export function testoDaPdf(buffer) // -> string | null
```

- decomprime i flussi `/FlateDecode` con `node:zlib.inflateSync`;
- estrae gli operatori di testo `Tj`, `TJ`, `'`, `"` dai flussi di contenuto;
- decodifica le stringhe letterali `( ... )` (con le sequenze di escape
  `\n \r \t \( \) \\` e gli ottali `\ddd`) e quelle esadecimali `< ... >`;
- ricompone gli spazi: gli offset negativi negli array `TJ` sotto una soglia
  valgono uno spazio, i `Td`/`TD`/`T*` valgono un a capo;
- comprime gli spazi come fa `testoVisibile` in `raccogli-partner.mjs`.

**Cosa NON deve fare**: i PDF scansionati (immagini) e quelli con font a
codifica personalizzata **non si leggono**, ed e' giusto cosi'. In quel caso
ritorna `null`. Non si aggiunge OCR, non si aggiunge una libreria, non si
indovina.

**Ritorna `null`** anche quando il testo estratto e' sotto 200 caratteri o e'
per meta' caratteri non stampabili: e' un'estrazione fallita travestita da
riuscita, ed e' peggio di un fallimento dichiarato.

**Riscaricare i PDF.** Poiche' i byte non ci sono, il primo passo di
`leggi-partner.mjs` riscarica i PDF elencati nell'indice del partner, con **le
stesse regole di cortesia della Fase 4a**: `robots.txt` rispettato, una
richiesta alla volta per dominio con almeno **1 secondo** di pausa, timeout
20 s, user-agent `ErasmusWizBot/1.0 (+https://nicorotolo.github.io/erasmuswiz)`,
nessun ritentativo oltre il primo. Tetto: **8 MB per PDF**, oltre si salta.

Il testo estratto **si riscrive dentro il file JSON della pagina** (`testo`
popolato, `tipo` resta `"pdf"`, si aggiunge `"estrattoIl"`): diventa cache
permanente, il cancello della citazione lavora su testo che sta su disco
esattamente come per l'HTML, e la Fase 5 non lo rifara' una seconda volta.
Un PDF che non si e' potuto leggere resta `testo: null` con
`"estrazioneFallita": "<motivo>"` e non si riprova a ogni giro.

### 3.2 `scripts/leggi-partner.mjs` — la lettura *(nuovo)*

Per ogni partner con `campiMancanti` non vuoto e cartella `raccolta/pagine/`
con `esito: "raggiunto"`, **una sola chiamata a Gemini**.

**Scelta di cosa mandare.** Le pagine si ordinano per `punteggio` decrescente
(quello e' gia' nell'indice) e si prendono finche' non si esaurisce il budget:

- tetto **per pagina: 40.000 caratteri** (il 99esimo percentile misurato e'
  ~60k, quindi taglia pochissimo). Si taglia al confine di parola e si annota;
- tetto **per partner: 250.000 caratteri** in tutto (il 90esimo percentile
  misurato e' 240k);
- si saltano le pagine con meno di 200 caratteri di testo e quelle con
  `testo: null`.

Questi tetti non sono decorativi: `G ATHINE42` ha **11 milioni di caratteri** in
25 pagine, e da solo farebbe fallire la chiamata.

**Modello.** Prima di tutto il resto, elencare i modelli davvero disponibili
sulla chiave (`GET https://generativelanguage.googleapis.com/v1beta/models`) e
**scrivere nel resoconto quali sono**. Non supporre. Default `GEMINI_MODEL` =
il Flash-Lite piu' recente fra quelli elencati; se non c'e', fermarsi e dirlo
invece di ripiegare in silenzio. Endpoint e forma della chiamata: copiarli da
`scripts/gemini-sgrossatura.mjs`, che funziona, **ma senza il grounding Google
Search** — qui il modello non deve cercare niente, ha le pagine davanti.
`thinkingLevel` da variabile d'ambiente, default `LOW`.

**Quota.** La chiave e' gratuita e il tetto giornaliero vero non lo conosce
nessuno (le fonti pubbliche dicono fra 250 e 1.500). Quindi:
- su HTTP **429** ci si ferma **subito e in modo pulito**, si scrive quanti
  partner si erano letti, e si esce con codice **0**: non e' un errore, e'
  il tetto. Il giorno dopo si riprende;
- il numero di chiamate riuscite prima del 429 **va scritto nel resoconto**:
  e' la misura che la Fase 5 aspetta;
- checkpoint per partner: ogni partner letto scrive subito il suo file.

**Cosa chiede il prompt.** Riusare quasi per intero il prompt di
`gemini-sgrossatura.mjs` (regole CEFR, foglia con una lingua sola, degree
students contro exchange students, ometti se non sei sicuro), **con quattro
cambiamenti**:

1. si dice al modello che le pagine sono **allegate qui sotto**, numerate, con
   il loro URL, e che **non deve usare nient'altro**: ne' la memoria, ne' il web;
2. la citazione dev'essere **copiata carattere per carattere** dalla pagina, e
   il modello deve dire **da quale pagina numerata** l'ha presa;
3. per ogni campo il modello dichiara
   `livello: "ateneo" | "facolta"` e, se `facolta`, `ambito: "<come si chiama
   sulla pagina>"` (es. `"Faculty of Law"`). Se non riesce a capirlo, dichiara
   `facolta`: **il dubbio va sempre verso il livello piu' stretto**;
4. per ogni campo **richiesto e non trovato**, il modello lo elenca in
   `nonTrovati: { <campo>: <numero della pagina piu' pertinente letta> }`.
   Serve a costruire il `nonTrovabile` onesto di D7.

**Uscita**, un file per partner in `raccolta/letture/<CODICE>.json`:

```json
{
  "codiceNorm": "A GRAZ01",
  "lettoIl": "2026-09-01T10:00:00.000Z",
  "modello": "gemini-…",
  "pagineInviate": [{ "n": 1, "file": "003.json", "url": "https://…", "caratteri": 12000, "tagliata": false }],
  "campi": {
    "linkCatalogo": {
      "valore": "https://…",
      "livello": "ateneo",
      "ambito": null,
      "fonte": { "url": "https://…", "citazione": "…", "verificataIl": "2026-09-01" },
      "paginaCitata": 3
    }
  },
  "nonTrovati": { "notaDisponibilita": 1 },
  "note": []
}
```

### 3.3 `scripts/cancelli.mjs` — i cancelli *(nuovo)*

Legge `raccolta/letture/*.json`, applica cinque cancelli **in quest'ordine** e
scrive `raccolta/approvati.json` piu' `raccolta/scartati.json`. Ogni scarto
porta scritta la **causa**, con una parola sola fra quelle elencate qui:
serve a dividere i falliti per causa nel resoconto, e senza questa divisione il
numero finale non dice niente.

**Cancello 1 — la citazione c'e' davvero** (`citazioneAssente`).
La citazione dev'essere una **sottostringa** del testo che abbiamo davvero
mandato al modello per quella pagina (**non** del file intero: se una pagina e'
stata tagliata, il modello non ha visto il resto, e una citazione che viene da
li' e' fortuna, non lettura).

Normalizzazione, uguale sui due lati e in quest'ordine esatto:
1. `String.normalize("NFD")` e via i segni diacritici (`\p{M}`);
2. minuscolo;
3. virgolette tipografiche e trattini lunghi ricondotti a `"`, `'`, `-`;
4. ogni sequenza di spazi bianchi ridotta a un solo spazio, e `trim`.

Requisiti sulla citazione: almeno **20 caratteri** dopo la normalizzazione
(`lib-output-batch` si ferma a 8, che qui e' troppo poco: "B2" piu' rumore
passerebbe) e non piu' di **35 parole**. Fuori da questi limiti:
`citazioneFuoriMisura`.

**Cancello 2 — l'URL risponde** (`urlMorto`).
Ogni `fonte.url`, e ogni valore dei campi `linkSito`/`linkCatalogo`, deve
rispondere 200 (redirect seguiti). Riusare `verifica-link.mjs`, con la stessa
cortesia della Fase 4a: una richiesta per dominio alla volta, 1 secondo di
pausa. L'URL della fonte dev'essere **una delle pagine inviate**, altrimenti
`fonteNonInviata`: il modello non puo' citare una pagina che non ha ricevuto.

**Cancello 3 — la forma del dato** (`formaNonValida`).
Passare ogni campo attraverso `validaValore`/`validaNodoLingua`/`validaFonte`
di `lib-output-batch.mjs`, senza riscriverle. Chiude anche i livelli CEFR
inventati tipo "B1/B2".

**Cancello 4 — il livello di lettura** (`livelloFacolta`).
Il livello dichiarato dal modello si puo' solo **abbassare, mai alzare**. Se
l'URL della fonte o il titolo della pagina contiene una parola del dizionario
di facolta' (`faculty`, `fakultat`, `faculte`, `facolta`, `facultad`,
`department`, `departement`, `dipartiment`, `institut`, `school of`, `wydzial`,
`kar`, `fakulteta`) e il modello ha dichiarato `ateneo`, il campo viene
**declassato a `facolta`** e il fatto si annota.
Poi: i campi `requisitoLingua`, `scadenzeOspitante`, `notaDisponibilita` con
livello `facolta` **non vanno negli approvati**: finiscono in
`raccolta/riconciliazione/facolta.json`, che e' materiale della Fase 6.
`linkSito` e `linkCatalogo` passano a qualunque livello (D3).

**Cancello 5 — il codice esiste nell'ufficiale** (`codiceSconosciuto`).
Il `codiceNorm` dev'essere fra quelli degli export in
`fonti/sapienza/goerasmus/`, oppure fra i partner Ca' Foscari presenti nei file
mete. Riusare la normalizzazione degli altri script.

### 3.4 `scripts/applica-partner.mjs` — l'applicazione *(nuovo)*

Legge `raccolta/approvati.json` e scrive nei file `js/atenei/**/dati-mete*.js`.

- per ogni partner, `spanTutteMete()` su **ogni** file che contiene quel codice
  (sono fino a 14: 302 partner su 615 stanno su piu' di un file);
- `impostaCampo(..., { soloSeVuoto: true })` — **mai** una sovrascrittura (D5);
- se un campo era gia' pieno con un valore diverso, la riga finisce in
  `raccolta/riconciliazione/disaccordi.json` e nei dati non si tocca niente;
- i `nonTrovati` diventano `nonTrovabile: { <campo>: { cercatoIl, fonte } }`
  con l'URL della pagina indicata, e **solo** se quell'URL era fra le pagine
  inviate (D7);
- le fonti si registrano dove il progetto le registra gia' (stesso posto e
  stessa forma che usa `applica-batch.mjs`: leggerlo e imitarlo);
- dopo la scrittura, `node --check` su ogni file toccato, e
  **se anche un solo file non passa, si annulla tutto**: o si applica tutto, o
  non si scrive niente. E' la stessa regola di
  `bonifica-codici-sintetici.mjs`, ed e' li' per un motivo;
- alla fine, eseguire `node scripts/verifica-completezza.mjs` e
  `node scripts/valida-stato.mjs`: devono restare verdi. Se uno dei due si
  lamenta, il lavoro non e' finito;
- **niente git**: non committa, non pusha, non crea rami.

`--prova` scrive tutto in un file di anteprima senza toccare i dati. Serve a
guardare prima, non sostituisce D6.

---

## 4. LE DUE CORREZIONI A `raccogli-partner.mjs`

Sono due difetti misurati oggi, e vanno corretti **una alla volta, misurando
prima e dopo ciascuna**. Un pacchetto di modifiche misurato in blocco non dice
a cosa attribuire la differenza (lezione del 30/08: tre correzioni vere al
dizionario, risultato immobile, collo di bottiglia altrove).

**Correzione A — le colonne del CSV ufficiale sono sbagliate.**
Le colonne vere dell'export sono, nell'ordine:
`ID Accordo; Nazione; Ateneo; Codice erasmus; Promotore; Durata (mesi);
Numero borse; Livello studio; Anno accademico; Aree ISCED; Città; Sito Web`.
Oggi `caricaCsvSapienza()` usa `c[9]` come **citta** (e' *Aree ISCED*) e `c[10]`
come **paese** (e' *Città*). Esito misurato: **500 partner su 615** hanno come
citta' `"Economics (0311)"`, `"Medicine (0912)"`, `"Architecture and town
planning (0731)"`. Il `paese` si salva solo perche' viene poi ripescato dai file
mete. Questo dato falso finirebbe dritto nel prompt del modello.

Corretto: `paese` = `c[1]`, `citta` = `c[10]`, `sito` = `c[11]`.
E l'area ISCED **non si butta**: si conserva in un campo nuovo `areeIsced` di
`raccolta/partner.json` (array, senza duplicati). Dice di quale disciplina e'
l'accordo, ed e' esattamente cio' che servira' alla Fase 6 per capire a quale
facolta' dell'ospitante appartiene un dato letto a livello di facolta'.
**Non entra nei file dati del sito.**

Misura da riportare: quanti partner cambiano `citta`, e quanti restano senza.

**Correzione B — gli export ufficiali non finiscono in cache.**
Oggi `caricaCsvSapienza()` scarica i 18 CSV e li tiene **solo in memoria**,
perche' la spec 4a vietava di scrivere fuori da `raccolta/`. Risultato: la
cartella `fonti/sapienza/goerasmus/` **non esiste**, e ogni esecuzione
riscarica 18 file. Correzione: scriverli in `fonti/sapienza/goerasmus/<AMBITO>.csv`,
che e' la stessa cache che `verifica-completezza.mjs` usa gia', con la stessa
forma e lo stesso nome. Chi arriva secondo la riusa.

Misura da riportare: numero di richieste HTTP al secondo lancio (attese: zero).

---

## 5. REGOLE NON NEGOZIABILI

1. **Nessuna dipendenza nuova**, PDF compreso (`node:zlib` basta).
2. **Una sola chiamata al modello per partner.** Non una per campo, non una per
   pagina.
3. **Una sola definizione di "campo vuoto"**: `statoCampo()` in `lib-mete.mjs`.
   Non riscriverla, non affiancarla.
4. **Non si sovrascrive mai un campo pieno** (D5).
5. **Niente git**, in nessuno dei tre script.
6. `raccolta/` resta fuori dal repo (e' gia' in `.gitignore`); `fonti/` invece
   segue quello che il repo fa gia' oggi per quella cartella: non cambiarlo.
7. Cortesia verso i siti identica alla Fase 4a: `robots.txt`, 1 secondo per
   dominio, timeout 20 s, user-agent dichiarato.
8. **Nessun limite di tempo complessivo**: puo' durare ore, e si interrompe e
   riprende dal checkpoint per partner.
9. Uscita **0** anche quando la quota giornaliera finisce (429): non e' un
   errore. Uscita **1** solo se non ha potuto cominciare.
10. La chiave sta in `GEMINI_API_KEY`, gia' configurata. **Piano gratuito,
    nessuna fatturazione: non attivarla, non suggerire di attivarla.**

---

## 6. COME SI PROVA CHE FUNZIONA

Nessuno di questi punti e' facoltativo.

### 6.1 Prove unitarie *(nuove, in `test/`)*

Ogni prova va **verificata rompendola**, e il fatto va scritto nel resoconto:
una prova che non e' mai stata vista fallire non dimostra niente.

1. `test/cancello-citazione.test.mjs` — la normalizzazione: `"Universität"`
   trova `"universitat"`; gli spazi doppi e gli a-capo non contano; le
   virgolette tipografiche non contano; una citazione **assente** viene
   respinta; una citazione presente nel file ma **fuori dalla parte inviata**
   viene respinta; sotto 20 caratteri viene respinta.
   *Rottura da mostrare*: togliendo il `trim` finale, oppure invertendo l'esito
   del confronto, la prova diventa rossa.
2. `test/cancello-livello.test.mjs` — un URL che contiene `faculty-of-law`
   declassa un `livello: "ateneo"` a `facolta`; un campo `requisitoLingua` di
   livello `facolta` non arriva agli approvati; un `linkCatalogo` di livello
   `facolta` ci arriva.
   *Rottura da mostrare*: permettendo al cancello di **alzare** il livello, la
   prova diventa rossa.
3. `test/lib-pdf.test.mjs` — su un PDF minimo costruito nel test stesso (poche
   decine di righe, `/FlateDecode`, un `Tj` e un `TJ`): il testo si estrae, gli
   spazi ci sono; su byte che non sono un PDF ritorna `null`; su un flusso che
   produce meno di 200 caratteri ritorna `null`.
4. `npm run test:unit` resta verde. **Misurato oggi in questa cartella: 191
   prove, 191 verdi.** (La spec 4a dice 217 e `STATO_DEL_SITO.md` dice 214:
   sono numeri della cartella di sviluppo `C:\erasmuswiz`, che ha in piu' dei
   test non ancora committati. Il numero da confrontare e' **191**.)
   Riportare il numero nuovo.

### 6.2 Prova sul campo, almeno 100 partner

Sui partner gia' in cache (oggi 106, di cui **85 raggiunti**); se servono si
raccolgono gli altri con `raccogli-partner.mjs --limite=…`.

**Non c'e' una soglia di resa, e non se ne inventa una.** La Fase 4a aveva un
riferimento misurato (80 su 100) perche' esisteva un'esecuzione precedente; qui
non esiste, e mettere un numero a caso significa ritoccare il prompt finche' un
numero rumoroso non lo supera. Quindi la prima esecuzione **stabilisce** il
riferimento, e va riportata cosi':

| Cosa riportare | Come |
|---|---|
| Campi **proposti** dal modello | per campo (i cinque), su quanti richiesti |
| Campi **approvati** | per campo |
| Campi **scartati** | per campo **e per causa**, con le parole del §3.3: `citazioneAssente`, `citazioneFuoriMisura`, `urlMorto`, `fonteNonInviata`, `formaNonValida`, `livelloFacolta`, `codiceSconosciuto` |
| `nonTrovabile` scritti | per campo |
| Disaccordi (campo gia' pieno, valore diverso) | numero |
| PDF | quanti riscaricati, quanti letti, quanti falliti |
| Quota | chiamate riuscite prima del 429, oppure "nessun 429" |
| Copertura per mete, prima e dopo | con `report-copertura-mappatura.mjs` |

**Le due soglie che invece esistono, e che fermano il lavoro:**

- **Correttezza: ≥ 95%.** Su **30 campi approvati estratti a caso**, un umano
  apre la fonte e controlla che il dato sia davvero quello. Il cancello 1
  garantisce che la citazione esiste, **non** che il campo sia stato
  interpretato bene: un modello puo' copiare una frase vera e trarne la
  conclusione sbagliata. Sotto il 95% ci si ferma e si dice, non si aggiusta il
  prompt finche' non passa.
- **Invenzioni: ≤ 20%.** Se piu' di un quinto dei campi proposti viene respinto
  per `citazioneAssente`, il problema non e' un dettaglio del cancello: e' il
  prompt o il modello. Ci si ferma e lo si segnala.

### 6.3 Le altre prove

5. **Ripartenza**: rilanciando `leggi-partner.mjs` sugli stessi partner, zero
   chiamate nuove al modello e stesso esito.
6. **Interruzione**: interrotto a meta' (Ctrl-C) e rilanciato, riprende senza
   perdere i partner gia' letti.
7. **Tutto-o-niente**: forzando un errore di sintassi su un file dati durante
   `applica-partner.mjs`, **nessun** file resta modificato.
8. **I due cancelli di sistema restano verdi**: `verifica-completezza.mjs`
   (0 mancanti, 0 in piu', 0 differenze di posti) e `valida-stato.mjs`.

---

## 7. COSA NON FARE

- Non pubblicare un dato la cui citazione non compare nel testo inviato, per
  nessun motivo e da nessun modello.
- Non far cercare niente al modello: niente grounding, niente ricerca web. Le
  pagine ce le ha davanti. La ricerca di riserva e' la L4 della Fase 5.
- Non scrivere nei dati un requisito letto su una pagina di facolta'.
- Non riempire `linkSito` dall'export ufficiale (D4).
- Non sovrascrivere un campo pieno, nemmeno se il dato nuovo sembra migliore.
- Non creare `nonTrovabile` senza URL e data.
- Non introdurre una nuova definizione di "campo vuoto".
- Non aggiungere dipendenze, nemmeno "solo per leggere i PDF".
- Non toccare `applica-batch.mjs`, `propaga-tutto.mjs`, `mappatura-stato.json`.
- Non scrivere `esegui-partner.mjs`: e' Fase 5.
- Non attivare la fatturazione sul progetto Gemini, e non proporlo.
- Non fare commit, push o rami.
- Se una regola di questa specifica si rivela impossibile o sbagliata, **non
  aggirarla**: fermarsi e dirlo.
