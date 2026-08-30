# ORDINE DI LAVORO — Fase 4b, **CONSEGNA 2a**: l'estrattore PDF

Sei l'esecutore. La specifica congelata e' `SPEC_FASE4B_lettura.md`: leggi il
**§2 quater, difetto 7**, che descrive il difetto con le sue tre cause, e il
**§3.1**, che descrive cosa deve fare il modulo.

Cartella di lavoro: `C:\erasmuswiz-mappatura`. Node 22. Windows.

**Sullo stato di Git: non e' una tua preoccupazione.** La Consegna 1 e' chiusa e
committata (`7571680`). I file non tracciati che trovi sono materiale di prova
gia' preparato per te. Tu non fai commit, push o rami. Fermati e chiedi per le
decisioni di **progetto**, non per lo stato del repo.

## Com'e' andata la Consegna 1

Bene, e il difetto bloccante e' chiuso: il cancello della citazione ora verifica
il **solo brano davvero inviato** tramite impronta SHA-256, ed e' stato provato
in modo indipendente — sia che scarti la citazione fuori dal brano, sia che
**lasci passare** quella dentro. Reintroducendo il difetto originale due prove
diventano rosse: la rete di sicurezza copre il percorso vero, non solo la
funzione. 201 prove verdi.

## Il compito, in una riga

`scripts/lib-pdf.mjs` estrae testo sporco dei comandi interni del PDF. Va
corretto, e la prova non puo' piu' essere un PDF costruito a mano.

**Perche' conta piu' di quanto sembri:** il cancello della citazione confronta
con questo testo. Un modello che legge una factsheet e cita *"Fact Sheet Student
Exchange Programme"* non ritrovera' mai `Fact] Sheet] Student]`, e un campo
**giusto** verrebbe scartato. Un estrattore sporco non produce dati sbagliati:
produce dati buoni buttati via, in silenzio.

## Il materiale di prova, gia' pronto

In `test/fixtures/pdf/` ci sono **tre PDF universitari veri**, scelti perche'
rompono il modulo in tre modi diversi. Ecco cosa fa oggi il codice su ciascuno:

| File | Oggi | Deve |
|---|---|---|
| `factsheet-vera.pdf` (246 KB) | `"EMC/PBDC/TT1TfTcTwTmFact] Sheet] Student] Exchange] Programme]..."` | contenere `Fact Sheet Student Exchange Programme` **intero e pulito** |
| `sporco-piccolo.pdf` (77 KB) | `"qcmqreW*nrgqcmBT/R7TfTmERA.F.] 11 ETQQ...ACADEMIC] AD..."` | contenere `ACADEMIC ADVISORS PER SCHOOL` **intero e pulito** |
| `font-illeggibile.pdf` (313 KB) | 94.999 caratteri di `"/ArtifactBDCqreW*nBT/F1TfTm...\u0000E\u0001\u001e"` | tornare **`null`**: e' un font a codifica propria, e un'estrazione fallita travestita da riuscita e' peggio di un fallimento dichiarato |

## Le tre cause, gia' individuate

Sono nel §2 quater difetto 7, e le riassumo perche' non le cerchi due volte:

1. nel ramo `TJ` il token `]` non viene saltato (`[` si', `]` no), e finisce nel
   testo: sono le parentesi quadre in mezzo alle parole;
2. ogni operatore non riconosciuto viene messo nella pila (`pila.push(op)`), e
   il `Tj` successivo puo' pescare **quello** invece della stringa: sono i
   `qcm`, `qreW*n`, `BT`, `Tf`, `Tm`, `/GS0gs`, `/R7`;
3. la soglia che rifiuta le estrazioni fallite chiede che i caratteri di
   controllo siano meno della **meta'**: troppo permissiva, e infatti
   `font-illeggibile.pdf` passa. Trova un criterio che lo rifiuti **senza**
   rifiutare gli altri due, e **motivalo con la misura**, non a occhio.

Se dopo la correzione uno dei tre PDF resta illeggibile per una ragione che il
modulo non puo' risolvere senza una libreria, **dillo e fermati**: il §3.1
prevede esplicitamente che i PDF scansionati e a codifica propria non si
leggano, e dichiararlo e' la risposta giusta.

## Vincoli che ti bloccano se li superi

- **Zero dipendenze nuove.** `node:zlib` e `node:crypto` bastano. Nessun parser
  PDF, per nessun motivo, nemmeno "solo per i font".
- Questa consegna **non chiama nessun modello** e non legge `GEMINI_API_KEY`.
- Non scrivere `leggi-partner.mjs` ne' `applica-partner.mjs`: sono la 2b.
- Non toccare `cancelli.mjs`, `raccogli-partner.mjs`, `lib-output-batch.mjs`,
  `verifica-link.mjs`, `applica-batch.mjs`, ne' i file dati.
- Quando il modulo funziona, **togli l'avviso "NON ANCORA UTILIZZABILE"** in
  cima a `lib-pdf.mjs`: e' li' apposta e va rimosso solo a difetto chiuso.
- Se una regola si rivela impossibile o sbagliata: **fermati e dillo**, non
  aggirarla.

## Come devi provare che funziona

- Le prove nuove vanno su `test/lib-pdf.test.mjs` e usano **i tre file veri**,
  non PDF costruiti a mano. Il PDF costruito a mano puo' restare come prova del
  caso semplice, ma da solo non dimostra niente: e' verde da sempre, ed e' per
  questo che il difetto e' arrivato fino in fondo.
- L'asserzione centrale non e' "il testo contiene la frase": e' che il testo
  **non contiene operatori PDF**. Cerca esplicitamente che non compaiano `Tj`,
  `TJ`, `BT`, `ET`, `Tf`, `Tm`, `/GS`, `q`/`Q` isolati e `]` in mezzo alle
  parole.
- **Ogni prova va vista fallire.** Qui non devi rompere niente: le prove sui tre
  file veri falliscono gia' da sole sul codice attuale. Mostra l'esito prima e
  dopo.
- **Misura prima e dopo ogni singola modifica**, una causa alla volta. Sono tre
  cause distinte: correggile separatamente e di' quanto ha spostato ciascuna.
  Se ne correggi una e il testo non migliora, dillo: vuol dire che il peso vero
  era altrove, ed e' un'informazione, non un fallimento.
- `npm run test:unit` resta verde. Oggi sono **201** prove.
- Non lanciare `npm run test:ui`: dura oltre 300 secondi e verrebbe troncato.

## Il resoconto finale

1. i file modificati;
2. per ciascuna delle tre cause: cosa hai cambiato, e la misura prima/dopo
   **separata** (per esempio: quanti operatori residui nel testo estratto dai
   tre file, prima e dopo);
3. per ciascuno dei tre PDF: cosa esce adesso, e i primi 200 caratteri;
4. l'esito delle prove nuove **prima** della correzione (devono fallire) e dopo;
5. il numero di prove prima (201) e dopo;
6. tutto cio' su cui ti sei fermato o che hai trovato ambiguo.

Se qualcosa non ti torna, scrivilo invece di scegliere al posto nostro.
