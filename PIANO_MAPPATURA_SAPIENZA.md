# Piano di mappatura Sapienza — COMPLETO (2026-07-04)

> Documento operativo: cosa è in coda per Codex, come funziona il meccanismo
> efficientato, cosa resta da fare a mano. Da leggere insieme a
> `automazioni/PROMPT_CODEX_mappatura.md` (il prompt del bot).

## 1. Stato: TUTTE le 17 Facoltà Sapienza sono seedate

Con questa sessione il seeding Sapienza è finito: non servono altre sessioni
di estrazione dati. Fonte: export CSV ufficiale
`accordi-didattica.web.uniroma1.it/goerasmus/export?ambito=<CODICE>`.

Già mappate o in corso (sessioni precedenti): Giurisprudenza (55),
Medicina e Psicologia - Area medica (15), Architettura (113), Farmacia (62),
Comunicazione e Ricerca Sociale (59), Scienze Sociali ed Economiche (68),
Psicologia e Servizio Sociale (97). Economia (ECON) ha 0 sedi nel DB: nulla da fare.

Seedate oggi e accodate a Codex, in ordine piccole→grandi (mete L/LM, righe
solo-PhD escluse):

| # | Facoltà (chiave stato) | ambito | mete | file |
|---|------------------------|--------|------|------|
| 1 | Scienze Politiche (Sapienza) | POLIT | 24 | dati-mete-scienze-politiche.js |
| 2 | Ing. elettronica e comunicazioni - DIET (Sapienza) | IIIS | 26 | dati-mete-inge-elettronica.js |
| 3 | Polo di Latina (Sapienza) | POLAT | 33 | dati-mete-polo-latina.js |
| 4 | Scienze Statistiche (Sapienza) | STATIS | 38 | dati-mete-scienze-statistiche.js |
| 5 | Informatica (Sapienza) | IIIS2 | 50 | dati-mete-informatica.js |
| 6 | Ing. informatica e gestionale - DIAG (Sapienza) | IIIS1 | 58 | dati-mete-inge-informatica-gestionale.js |
| 7 | Medicina e Odontoiatria - Area medica (Sapienza) | MEDPROFSANIT | 91 | dati-mete-medicina-odontoiatria.js |
| 8 | Ingegneria Civile e Industriale (Sapienza) | INGE | 128 | dati-mete-ingegneria-civile.js |
| 9 | Scienze Matematiche Fisiche e Naturali (Sapienza) | MATEM | 254 | dati-mete-scienze-mfn.js |
| 10 | Lettere e Filosofia (Sapienza) | LETFIL | 424 | dati-mete-lettere-filosofia.js |

Totale nuovo: **1.126 mete**. Tutti i file sono in `js/atenei/sapienza/` e già
agganciati a `_meteAllSap` in `index.html`.

## 2. Come lavora Codex ora (coda in `mappatura-stato.json`)

1. Prima i 6 batch di follow-up residui (Farmacia/Comunicazione/Psicologia).
2. Poi 10 batch `nuovo_dipartimento` (`setup-…`), uno per Facoltà: il file dati
   esiste già (seed umano), quindi Codex esegue SOLO
   `node scripts/setup-dipartimento.mjs` + validazione + push. Nessuna ricerca web.
3. Il setup accoda i batch dati (da 8 mete) e Codex li lavora come sempre.

## 3. Meccanismo efficientato (novità 2026-07-04)

- **RIUSO al setup** (`setup-dipartimento.mjs`): i campi vuoti del nuovo
  dipartimento vengono pre-compilati dalle mete già mappate con lo stesso
  codice Erasmus (spazi normalizzati: vale anche tra Sapienza e Ca' Foscari).
  Eredita anche i CEFR già accertati come "non trovabili" (niente doppi
  tentativi a vuoto). Simulazione su questa coda: **~530 mete su 1.126 (47%)
  complete senza alcuna ricerca web**; nel run reale sarà di più perché la
  base di conoscenza include anche le 4 Facoltà 2026-07-03.
- **PROPAGAZIONE al merge** (`applica-batch.mjs`): ogni dato trovato da Codex
  viene copiato anche negli altri dipartimenti che condividono lo stesso
  ateneo partner (solo su campi ancora vuoti, mai sovrascrittura).
- **Batch da 8** (prima 5): meno run, meno overhead git/push/verifica.
- `prepara-batch.mjs` distingue il caso "file già creato" (`fileGiaCreato`),
  così Codex non tenta mai il self-seed su Sapienza.

Stima lavoro residuo per Codex: **~408 codici in ~57 batch** (più i cali da
propagazione man mano che trova dati). Al ritmo osservato: alcuni giorni di
run, non settimane.

## 4. Azioni manuali richieste (Nicola)

1. **`PUBBLICA.bat`** — pubblica: 10 file dati nuovi, `mappatura-stato.json`
   (coda), `scripts/{setup-dipartimento,applica-batch,prepara-batch}.mjs`,
   `index.html`, questo piano, il prompt aggiornato. Senza push Codex non vede nulla.
2. **Re-incollare il prompt** `automazioni/PROMPT_CODEX_mappatura.md`
   nell'editor dell'automazione sulla piattaforma Codex (la piattaforma legge
   una copia interna; è cambiata la sezione Sapienza/nuovo_dipartimento).
3. Facoltativo: cancellare i 2 file sbagliati rimasti in `fonti/` se presenti
   (`goerasmus-INGE.csv`/`goerasmus-IIIS2.csv` erano copie errate poi corrette —
   ora contengono i dati giusti, si possono tenere come archivio fonte).

## 5. Limiti noti / rifiniture future

- `citta` derivata dal token del codice Erasmus (es. "Salzbur"): funzionale ma
  abbreviata; passata di rifinitura futura (bassa priorità).
- Il riuso copia la lingua a livello di ateneo partner: per atenei con requisiti
  diversi per corso può essere impreciso — le `fonti/FONTI-*.json` dei run
  originali restano la traccia per la revisione umana.
- Giurisprudenza/Medicina-Psicologia/Architettura usano codici sintetici
  (`SAP-…`): non partecipano al riuso (i loro dati non matchano i codici
  ufficiali). Ininfluente: sono già complete.

## 6. Dopo Sapienza

Il DB Go Erasmus+ è esaurito. Prossime espansioni possibili (nuovo ateneo =
stessa pipeline multi-ateneo, serve solo una fonte estraibile): decidere in
chat prima di seedare. La priorità dichiarata resta l'Ondata BRAND/UX, non
altri atenei.
