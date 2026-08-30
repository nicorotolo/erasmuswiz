# ORDINE DI LAVORO — Fase 4b (lettura, cancelli, applicazione)

Sei l'esecutore. La specifica congelata e' `SPEC_FASE4B_lettura.md` in questa
cartella: **leggila per intera prima di scrivere una riga**, insieme a
`SPEC_FASE4A_raccolta.md` (la fase precedente, gia' eseguita, che ti dice lo
stile atteso) e a `DISEGNO_PIPELINE_DATI.md` (il contesto).

Cartella di lavoro: `C:\erasmuswiz-mappatura`. Node 22. Windows.

**Sullo stato di Git: non e' una tua preoccupazione, e non e' un motivo per
fermarti.** La cartella e' allineata a `origin/main` e la specifica e' gia'
committata. Se trovi file non tracciati, sono materiale di questa stessa
esecuzione (log, file di appoggio): ignorali e procedi. Tu comunque non fai
commit, push o rami — quello lo fa un umano dopo aver letto il diff. Fermati e
chiedi per le decisioni di **progetto**, non per lo stato del repo.

## Cosa devi consegnare

Esattamente questo, niente di piu':

1. `scripts/lib-pdf.mjs` — estrattore PDF senza dipendenze (spec §3.1)
2. `scripts/leggi-partner.mjs` — una chiamata Gemini per partner (spec §3.2)
3. `scripts/cancelli.mjs` — i cinque cancelli deterministici (spec §3.3)
4. `scripts/applica-partner.mjs` — scrittura nei file dati (spec §3.4)
5. due correzioni a `scripts/raccogli-partner.mjs` (spec §4), **una alla volta,
   misurando prima e dopo ciascuna separatamente**
6. le prove unitarie nuove elencate nella spec §6.1

**Non** scrivere `esegui-partner.mjs`. **Non** toccare `applica-batch.mjs`,
`propaga-tutto.mjs`, `mappatura-stato.json`. **Non** fare commit, push o rami.

## Vincoli che ti bloccano se li superi

- Zero dipendenze nuove. Solo Node e la sua libreria standard.
- Una sola chiamata al modello per partner.
- Una sola definizione di "campo vuoto": `statoCampo()` in `scripts/lib-mete.mjs`.
- Non sovrascrivere mai un campo gia' pieno.
- Nessun dato la cui citazione non compaia lettera per lettera nel testo che
  hai mandato al modello.
- `GEMINI_API_KEY` e' gia' nell'ambiente. Piano gratuito: non attivare la
  fatturazione e non proporlo.
- Se una regola della spec si rivela impossibile o sbagliata: **fermati e
  dillo**, non aggirarla.

## Come devi provare che funziona

La spec §6 elenca le prove. Due cose in particolare non sono facoltative:

- **Ogni prova nuova va vista fallire.** Rompi il codice apposta, mostra che
  diventa rossa, rimettilo a posto. Scrivi nel resoconto cosa hai rotto e cosa
  e' successo. Una prova mai vista rossa non dimostra niente.
- **Misura prima e dopo ogni singola modifica**, non a pacchetto. Un blocco di
  modifiche misurato insieme non dice a cosa attribuire la differenza.

Attenzione al tempo: hai 240 secondi per comando. `npm run test:unit` dura ~2
secondi e va bene. **Non lanciare `npm run test:ui`**: dura oltre 300 secondi e
verrebbe troncato a meta', lasciando un server appeso sulla porta.

La prova sul campo (spec §6.2) gira su almeno 100 partner. Se la quota
giornaliera della chiave finisce (HTTP 429), **fermati in modo pulito, riporta
quante chiamate erano riuscite, ed esci con codice 0**: non e' un fallimento,
e' il tetto del piano gratuito, ed e' proprio il numero che ci serve misurare.

## Il resoconto finale

Chiudi con:

1. l'elenco dei file creati e modificati;
2. la tabella delle misure della spec §6.2 (proposti / approvati / scartati per
   campo **e per causa**, `nonTrovabile`, disaccordi, PDF, quota, copertura
   prima e dopo);
3. le due misure delle correzioni del §4, separate: quanti partner cambiano
   `citta` (Correzione A), e quante richieste HTTP fa il secondo lancio
   (Correzione B, attese: zero);
4. quali prove hai rotto per verificarle e cosa e' diventato rosso;
5. il numero di prove di `npm run test:unit` prima (191) e dopo;
6. tutto cio' su cui ti sei fermato o che hai trovato ambiguo.

Se qualcosa non ti torna, scrivilo invece di scegliere al posto nostro.
