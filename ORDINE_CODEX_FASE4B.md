# ORDINE DI LAVORO — Fase 4b, **CONSEGNA 1**: i cancelli e i moduli

Sei l'esecutore. La specifica congelata e' `SPEC_FASE4B_lettura.md`: leggila per
intera, e in particolare i paragrafi **§2 ter** (perche' si consegna in due
pezzi) e **§2 quater** (i sei difetti trovati in revisione, con i rimedi).

Cartella di lavoro: `C:\erasmuswiz-mappatura`. Node 22. Windows.

**Sullo stato di Git: non e' una tua preoccupazione, e non e' un motivo per
fermarti.** Nel working tree c'e' gia' il tuo lavoro del giro precedente, non
committato: e' il punto di partenza, non un ostacolo. Se trovi file non
tracciati, ignorali e procedi. Tu non fai commit, push o rami. Fermati e chiedi
per le decisioni di **progetto**, non per lo stato del repo.

## Cosa e' successo al giro precedente

Il tuo lavoro e' stato letto riga per riga e le prove sono state rifatte a mano.
**Due cose hanno funzionato e sono state misurate:**

- Correzione A: citta' sbagliate **500 -> 0**, 536 partner corretti,
  `"Economics (0311)"` e' tornato `"Graz"`, `areeIsced` conservata su 536.
- Correzione B: la seconda esecuzione fa **0 richieste HTTP**.
- E le prove unitarie nuove sono **vere**: rotte in due modi diversi, sono
  diventate rosse entrambe le volte.

**Ma il cancello della citazione e' aggirabile, ed e' stato dimostrato.** Vedi
§2 quater, difetto 1. Inoltre `leggi-partner.mjs` (21 righe) e
`applica-partner.mjs` (17 righe) erano abbozzi per un compito che ne richiede
centinaia: **sono stati tolti dal working tree** e tornano alla Consegna 2.

Non ricominciare da capo: quello che c'e' si **corregge**.

## Cosa devi consegnare, e nient'altro

1. `scripts/lib-pdf.mjs` — c'e' gia'; verificalo e lascialo se regge
2. `scripts/lib-link.mjs` — c'e' gia' ed e' corretto
3. i due `export` in `scripts/lib-output-batch.mjs` — ci sono gia' e vanno bene
4. `scripts/cancelli.mjs` — **da correggere**: difetti 1, 5, 6 del §2 quater,
   piu' il cancello 2 che deve accettare `statoLink` come parametro
5. `scripts/raccogli-partner.mjs` — le due correzioni ci sono; **resta da
   sistemare la regressione del paese maiuscolo** (§2 quater, in fondo)
6. le prove nuove: quelle del §6.1 piu' le tre del blocco qui sotto

**NON** scrivere `leggi-partner.mjs`, `applica-partner.mjs` o
`esegui-partner.mjs`: sono la Consegna 2 e partono solo dopo che questa e'
chiusa e committata.

Il formato di `raccolta/letture/<CODICE>.json` (spec §3.2) e' un **contratto
gia' fissato**: i cancelli lo devono leggere cosi' com'e' descritto, con in piu'
`impronta` e `titolo` in ogni voce di `pagineInviate`. Provalo con letture
finte costruite nel test: la Consegna 1 si prova **senza rete e senza chiave**,
e non deve mai leggere `GEMINI_API_KEY`.

## Le tre prove che oggi mancano, e che devono diventare rosse

Queste sono i casi che hanno trovato i difetti. Devono entrare nella suite, e
devi mostrare ciascuna **fallire** sul codice attuale prima di correggerlo.

1. **La citazione fuori dal pezzo inviato.** Costruisci una pagina in cui la
   frase sta al carattere 50.000 e dichiara in `pagineInviate` che ne sono stati
   mandati 40.000, con l'`impronta` di quei 40.000. Il campo **deve** essere
   scartato con causa `citazioneAssente`. Sul codice attuale passa: e' il
   difetto 1.
2. **La pagina cambiata sotto.** Stessa cosa, ma con un'`impronta` che non
   corrisponde al file: causa attesa `paginaCambiata`.
3. **Il partner Ca' Foscari.** Un codice che sta nei file
   `js/atenei/cafoscari/dati-mete*.js` ma non negli export Sapienza **non** deve
   essere scartato come `codiceSconosciuto`. E con l'elenco dei codici vuoto lo
   script deve **fermarsi con errore**, non lasciar passare tutto.

## Vincoli che ti bloccano se li superi

- Zero dipendenze nuove (`node:zlib` e `node:crypto` sono nella libreria
  standard e bastano).
- Una sola definizione di "campo vuoto": `statoCampo()` in `scripts/lib-mete.mjs`.
- Nessun dato la cui citazione non compaia lettera per lettera nel pezzo di
  pagina **davvero inviato** al modello, verificato tramite impronta.
- Di `lib-output-batch.mjs` e `verifica-link.mjs` si tocca solo quanto dice il
  §2 bis. Non toccare `applica-batch.mjs`, `propaga-tutto.mjs`,
  `mappatura-stato.json`.
- Questa consegna non chiama nessun modello e non legge `GEMINI_API_KEY`.
- Se una regola della spec si rivela impossibile o sbagliata: **fermati e
  dillo**, non aggirarla.

## Come devi provare che funziona

- **Ogni prova nuova va vista fallire.** Rompi il codice apposta, mostra che
  diventa rossa, rimettilo a posto, e scrivi cosa hai rotto. Per le tre prove
  qui sopra non serve rompere niente: falliscono gia' da sole sul codice
  attuale, e questa e' la dimostrazione migliore.
- **Misura prima e dopo ogni singola modifica**, non a pacchetto.
- Fai anche le prove del §6.1 e la non-regressione di `verifica-link.mjs` con il
  batch finto (§2 bis), che al giro precedente non erano state fatte.

Attenzione al tempo: hai 240 secondi per comando. `npm run test:unit` dura ~2
secondi. **Non lanciare `npm run test:ui`**: dura oltre 300 secondi e verrebbe
troncato, lasciando un server appeso.

## Il resoconto finale

1. i file creati e modificati;
2. per ognuno dei sei difetti del §2 quater che ti competono (1, 5, 6) piu' la
   regressione del paese: cosa hai cambiato e la misura prima/dopo;
3. le tre prove nuove: l'esito **prima** della correzione (devono fallire) e
   dopo;
4. quali altre prove hai rotto per verificarle, e cosa e' diventato rosso;
5. il numero di prove di `npm run test:unit` prima (196) e dopo;
6. tutto cio' su cui ti sei fermato o che hai trovato ambiguo.

Se qualcosa non ti torna, scrivilo invece di scegliere al posto nostro.
