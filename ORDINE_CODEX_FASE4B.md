# ORDINE DI LAVORO — Fase 4b, **CONSEGNA 2b-1**: i PDF tornano leggibili

Sei l'esecutore. La specifica congelata e' `SPEC_FASE4B_lettura.md`: leggi il
**§3.1** (cosa deve fare il riscarico) e il **§2 quinquies** (le decisioni del
30/08 sera: ti riguardano quasi tutte, in particolare **E2**, che ti autorizza
un'esportazione che altrimenti ti sarebbe vietata).

Cartella di lavoro: `C:\erasmuswiz-mappatura`. Node 22. Windows.

**Sullo stato di Git: non e' una tua preoccupazione.** La Consegna 2a e' chiusa
e committata (`37cc131`). Tu non fai commit, push o rami. Fermati e chiedi per
le decisioni di **progetto**, non per lo stato del repo.

**Mentre lavori, la raccolta sta girando** e scrive dentro `raccolta/pagine/`:
e' un altro processo, lanciato apposta, e non devi ne' fermarlo ne' aspettarlo.
Vuol dire pero' che **non devi lanciare il riscarico su tutta la cache**: la
passata vera la fa Claude dopo aver letto il tuo diff. Tu provi su pochi casi.

## Com'e' andata la 2a

Bene, e la correzione generalizza: sui PDF universitari veri le estrazioni
sporche sono passate da 8 su 8 a 2 su 7, i due leggibili escono puliti e quello
a font con codifica proprietaria torna `null` come deve. La soglia sui caratteri
di controllo e' 10%, motivata con la misura (0,15% e 6,1% i buoni, 38,3% il
falso successo). **205 prove verdi.** `lib-pdf.mjs` e' chiuso: non si tocca.

## Il compito, in una riga

`raccolta/pagine/` contiene **315 PDF con `testo: null`** e senza i byte: la
Fase 4a salvava solo l'indirizzo. Vanno riscaricati, letti con `testoDaPdf()` e
il testo va riscritto **dentro il file JSON della pagina**, come cache
permanente.

**Perche' conta piu' di quanto sembri.** Sono il 17% delle pagine raccolte, e le
factsheet Erasmus — dove stanno proprio lingua e scadenze — sono spesso in PDF.
Nella cache di oggi c'e' gia' un partner che **non ha nessun altro testo
leggibile**: senza i suoi PDF, per il modello e' muto. E il cancello della
citazione lavora su questo testo: se non c'e', il campo non esiste.

## Cosa scrivere

**`scripts/riscarica-pdf.mjs`**, nuovo. Una funzione esportata piu' un `main`
con la solita guardia (`if (process.argv[1] && path.resolve(...) === ...)`),
come `cancelli.mjs` e `raccogli-partner.mjs`.

Cosa fa:

- scorre `raccolta/pagine/*/indice.json` e, per ogni pagina con `tipo: "pdf"`,
  `testo: null` e **senza** `estrazioneFallita`, riscarica il PDF;
- riscarica **`urlFinale`**, non `url`: e' l'indirizzo dopo i redirect, ed e'
  quello che aveva risposto 200 in Fase 4a;
- **cortesia identica alla Fase 4a**: `robots.txt` rispettato, una richiesta
  alla volta per dominio con un secondo pieno di pausa, timeout 20 s,
  user-agent `ErasmusWizBot/1.0 (+https://nicorotolo.github.io/erasmuswiz)`,
  **un solo ritentativo**. Queste regole **non si riscrivono**: si importano da
  `raccogli-partner.mjs` aggiungendo `export` a `Limitatore`, `scarica`,
  `regoleRobots` e `consentitoDaRobots` — e' esattamente cio' che il §2
  quinquies E2 autorizza, corpi delle funzioni intatti. Duplicarle e' vietato;
- **tetto 8 MB per PDF**: oltre si salta. Il tetto si applica ai byte ricevuti;
  se l'intestazione `content-length` c'e' puoi usarla per non scaricarlo
  affatto, ma **non aggiungere una richiesta in piu'** per scoprirlo;
- se `testoDaPdf()` restituisce testo, si riscrive il file JSON della pagina:
  `testo` popolato, `tipo` resta `"pdf"`, si aggiunge `"estrattoIl"`. **Non si
  toccano** gli altri campi gia' presenti, e non si salvano i byte del PDF;
- se non si e' potuto leggere, il file resta `testo: null` e prende
  `"estrazioneFallita": "<motivo>"`, **e non si riprova ai giri successivi**.
  I motivi ammessi sono una parola sola, e sono questi cinque:
  `robotsVieta`, `nonScaricato` (nessuna risposta, o una risposta non ok),
  `troppoGrande`, `nonPdf` (i byte non cominciano per `%PDF`), `illeggibile`
  (`testoDaPdf` ha detto `null`);
- alla fine scrive un resoconto a schermo: quanti riscaricati, quanti letti,
  quanti falliti **divisi per motivo**, e quante richieste HTTP ha fatto;
- **`--partner=<CODICE>`** e **`--limite=<n>`** per lavorare su poco;
- **`--riprova-falliti`** per rifare anche quelli con `estrazioneFallita`: serve
  a noi, non ai giri normali.

**La funzione di scarico e' un parametro**, con quella vera come valore
predefinito — stessa tecnica gia' usata per `statoLink` in `cancelli.mjs`. E'
l'unico modo di provare tutto questo senza rete, e senza rete le prove sono
ripetibili.

## Cosa NON fare

- **Zero dipendenze nuove.** `node:zlib` e la libreria standard bastano.
- Non toccare `lib-pdf.mjs` (chiuso e provato in 2a), `cancelli.mjs`,
  `lib-output-batch.mjs`, `applica-batch.mjs`, ne' i file dati.
- Di `raccogli-partner.mjs` si tocca **soltanto** l'aggiunta dei quattro
  `export`. Nessun corpo cambia, nessun comportamento cambia.
- Non scrivere `leggi-partner.mjs` ne' `applica-partner.mjs`: sono la 2b-2 e la
  2b-3.
- **Questa consegna non chiama nessun modello** e non legge `GEMINI_API_KEY`.
- Non lanciare il riscarico su tutta la cache (vedi sopra: gira la raccolta).
- Niente commit, push o rami.
- Se una regola si rivela impossibile o sbagliata: **fermati e dillo**, non
  aggirarla.

## Come devi provare che funziona

Prove nuove in **`test/riscarica-pdf.test.mjs`**, tutte con la funzione di
scarico finta e i PDF veri gia' in `test/fixtures/pdf/`:

1. **il caso buono**: `factsheet-vera.pdf` servito dalla funzione finta ->
   il file JSON della pagina finisce con `testo` popolato e leggibile,
   `estrattoIl` presente, `tipo` ancora `"pdf"`, nessun `estrazioneFallita`;
2. **il caso illeggibile**: `font-illeggibile.pdf` -> `testo` resta `null` e
   compare `estrazioneFallita: "illeggibile"`;
3. **la ripartenza**: rilanciando sulla stessa cartella, **zero richieste
   nuove** — contale con la funzione finta. Vale sia per i riusciti sia per i
   falliti: e' il punto del §3.1 "non si riprova a ogni giro";
4. **non e' un PDF**: byte qualunque -> `estrazioneFallita: "nonPdf"`, nessuna
   eccezione, gli altri partner continuano;
5. **troppo grande**: un finto PDF sopra gli 8 MB -> `troppoGrande`, e il testo
   non viene nemmeno tentato;
6. **robots.txt vieta**: `robotsVieta`, e **nessuna richiesta** al file PDF.

**Ogni prova va vista fallire.** Qui, a differenza della 2a, le prove non
falliscono da sole: il codice non esiste ancora. Quindi, a codice scritto,
**rompilo apposta** — una rottura diversa per ogni prova — e scrivi nel
resoconto cosa hai rotto e quale prova e' diventata rossa. In particolare per la
3: togliendo il controllo su `estrazioneFallita`, la prova **deve** diventare
rossa. Se resta verde, la prova non prova niente e va rifatta.

- `test/raccogli-partner.test.mjs` deve restare **verde senza essere
  modificato**: e' la prova che i quattro `export` non hanno cambiato niente.
- `npm run test:unit` resta verde. Oggi sono **205** prove.
- **Non** lanciare `npm run test:ui`: dura oltre 300 secondi e verrebbe
  troncato.

## Il resoconto finale

1. i file nuovi e quelli modificati;
2. su quanti PDF veri hai provato davvero, quali, e con che esito;
3. l'esito di ogni prova **prima** (rossa, dopo la rottura) e **dopo**;
4. **che cosa hai rotto** per vedere fallire ciascuna delle sei prove;
5. il numero di prove prima (205) e dopo;
6. tutto cio' su cui ti sei fermato o che hai trovato ambiguo.

Se qualcosa non ti torna, scrivilo invece di scegliere al posto nostro.
