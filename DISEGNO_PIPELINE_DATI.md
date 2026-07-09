# DISEGNO PIPELINE DATI — mappatura mete, definitiva

> **Il documento che chiude la questione pipeline.** Scritto il 2026-07-07
> (sessione 32) con Nicola. Sostituisce, per la parte operativa, le sezioni
> di metodo di `PIANO_MAPPATURA_SAPIENZA.md` (che resta valido per la coda
> e le azioni manuali già elencate). Da leggere insieme a `ROADMAP.md`
> (OP9/OP12) e `DISEGNO_OPERATIONS.md`.
>
> Vincoli scelti da Nicola: budget ZERO oltre gli abbonamenti esistenti
> (ChatGPT Plus con Codex; Claude); operatore unico Nicola; obiettivo
> COPERTURA COMPLETA per febbraio 2027.

---

## 1. OBIETTIVO E DEFINIZIONE DI "COMPLETO"

Ogni meta pubblicata deve avere, per febbraio 2027: requisito lingua
(CEFR), scadenze ospitante, link scheda/fonte, link catalogo corsi
(`linkCatalogo`, serve al LA Generator L2) e nota disponibilità incoming
dove la fonte la dà.

**"Completo" significa: ogni campo ha il dato CON fonte e data, OPPURE è
marcato esplicitamente "non trovabile" con la fonte tentata.** Un campo
"non trovabile" onesto È copertura completa; un campo riempito senza fonte
è un difetto grave (rischio n.1 della bussola: un dato sbagliato costa un
anno a uno studente). Mai riempire per completismo.

## 2. I NUMERI (misurati sul repo, 07/07/2026)

- **1.987 mete** totali nei file `js/atenei/**/dati-mete*.js`.
- **~856 codici partner unici** → **l'unità di lavoro è il PARTNER
  (codice Erasmus), non la meta**: mappato un partner, la propagazione
  (`applica-batch.mjs`) copia il dato su tutte le mete che lo condividono,
  anche tra atenei. Il lavoro vero è meno della metà di quel che sembra.
- Al 04/07: ~530/1.126 mete delle nuove Facoltà complete col solo riuso;
  ~408 codici da ricercare in ~57 batch; 6 batch follow-up residui.
- ⚠️ **Difetto dati da sanare** (scoperto oggi): alcuni seed usano codici
  SINTETICI (es. `SAP-IUS-SALZBURG` invece del reale `A SALZBUR01`).
  Ogni codice sintetico è un partner che il riuso NON riconosce → lavoro
  duplicato. Fix in §6, passo 0.

## 3. PRINCIPI NON NEGOZIABILI

1. **Un'AI non "sa": trova e cita.** Ogni dato prodotto da qualsiasi
   modello deve avere URL della fonte + citazione testuale. Senza URL
   funzionante → `nonTrovabile`, mai una stima.
2. **Tutto ciò che può fare uno script non lo fa un'AI.** Gli script sono
   gratis, deterministici e instancabili: riuso, propagazione, validazione
   formati, e (nuovo) verifica link via HTTP.
3. **I modelli deboli raccolgono, i modelli forti verificano, gli umani
   campionano.** La qualità non dipende dal modello più debole della
   catena ma dal controllo a valle.
4. **Una visita per partner, tutti i campi.** Quando si ricerca un partner
   si raccolgono INSIEME lingua, scadenze, link scheda, linkCatalogo e
   disponibilità — mai tornare due volte sullo stesso sito.
5. **Claude NON fa mappatura di massa.** I token Claude di Nicola sono la
   risorsa più scarsa e vanno solo su sviluppo/spec/strategia (le sessioni
   OP). La ricerca dati vive su Gemini free + Codex.

## 4. I QUATTRO LIVELLI

| Livello | Chi | Cosa fa | Costo |
|---|---|---|---|
| **T0 — Script** | `scripts/*.mjs` | Riuso, propagazione, validazione schema, **link-checker HTTP** (nuovo), report copertura | zero |
| **T1 — Sgrossatura** | **Gemini (AI Studio, free tier)** operato da Nicola | Per ogni partner: trova URL catalogo/incoming, CEFR, scadenze — output in formato batch con evidenze | zero (rate-limited) |
| **T2 — Verifica** | **Codex (ChatGPT Plus)** | Verifica i batch sgrossati (apre i link, controlla le citazioni), corregge, produce `OUTPUT.json` definitivo | incluso in Plus |
| **T3 — Campione umano** | Nicola (10% random) + Bruno (Giurisprudenza) | Controllo a campione: il dato sul sito corrisponde alla fonte? | tempo |

Perché così: **verificare è 3-5 volte più veloce che cercare.** Spostando
la ricerca su Gemini (gratis) e lasciando a Codex solo la verifica, la
capacità di Codex si moltiplica senza spendere. Il free tier di Gemini
(via aistudio.google.com) è oggi il più generoso — limiti di richieste/
minuto ma non di token; verificare i limiti correnti al primo uso.

### Risposta alla domanda "ne va della qualità?"

Sì e no, e la distinzione è tutto:
- **Ricerca con giudizio** (qual è la pagina giusta? questo B2 vale per
  tutti i corsi o solo per legge?): i modelli deboli/gratuiti sbagliano di
  più e — peggio — inventano con sicurezza. Per questo il loro output non
  va MAI diretto nei dati: è una proposta con evidenze.
- **Estrazione da pagina data** (leggi questa pagina e dimmi il CEFR): la
  differenza tra modelli è quasi nulla.
- La qualità finale la fanno T2 e T3, non T1. Con questo disegno si può
  usare il modello gratuito più debole in T1 senza toccare la qualità
  pubblicata — al costo di qualche batch rimbalzato in più.

## 5. PROTOCOLLO T1 — LA SGROSSATURA SU GEMINI (per Nicola)

Routine per un batch (~8 partner, 30-40 minuti):

1. `node scripts/prepara-batch.mjs` → produce `batch/INPUT.json`.
2. Apri Gemini (AI Studio) e incolla il PROMPT SGROSSATURA (sotto) +
   il contenuto di `INPUT.json`.
3. Salva la risposta in `batch/SGROSSATURA.json` (nuovo file di lavoro,
   già in gitignore con gli altri file batch/*).
4. Lancia il link-checker: `node scripts/verifica-link.mjs` (da creare,
   §6) — scarta subito le righe con link morti/reindirizzati.
5. Passa il file pulito a Codex col prompt di verifica (aggiornamento di
   `automazioni/PROMPT_CODEX_mappatura.md`, §6): Codex controlla e
   produce `batch/OUTPUT.json`.
6. `node scripts/applica-batch.mjs` → fonde + propaga + valida.

### PROMPT SGROSSATURA (da incollare in Gemini, testo pronto)

```
Sei un assistente di ricerca dati. Per ciascuna università partner
nell'elenco JSON qui sotto devi trovare SOLO informazioni verificabili
online, per studenti Erasmus INCOMING. Per ogni partner cerca:

1. "linkCatalogo": URL della pagina col catalogo corsi offerti agli
   studenti Erasmus/incoming (preferisci la pagina incoming/exchange
   alla pagina corsi generale).
2. "requisitoLingua": lingua e livello CEFR richiesti agli incoming
   (es. "Inglese B2"), con eventuale condizione.
3. "scadenzeOspitante": scadenze di nomination e application per
   incoming (semestre 1 e 2 se distinte).
4. "notaDisponibilita": se la fonte dice quali corsi/facoltà sono
   aperti agli Erasmus (o esclusi), riportalo.

REGOLE FERREE:
- Per OGNI dato indica: "fonte" (URL esatto della pagina, non la home)
  e "citazione" (frase testuale copiata dalla pagina, nella lingua
  originale).
- Se non trovi un dato con una fonte precisa, scrivi "nonTrovato" nel
  campo. NON dedurre, NON stimare, NON usare la tua memoria: solo ciò
  che leggi ora su una pagina raggiungibile.
- Non confondere i requisiti per DEGREE STUDENTS con quelli per
  ERASMUS/EXCHANGE: se la pagina non distingue, segnala il dubbio nel
  campo "note".
- Rispondi SOLO con un array JSON, un oggetto per partner, stessi
  "codiceErasmus" dell'input, senza testo attorno.

Ecco l'elenco: [INCOLLA QUI batch/INPUT.json]
```

Note d'uso: se Gemini risponde con dati senza citazione, rimbalza tu con
"mancano le citazioni per X e Y, correggile o segna nonTrovato" — stessa
disciplina che l'ufficio Erasmus ha usato con Bruno. Se il rate limit ti
ferma, il batch riprende dopo: nessun danno.

## 6. LAVORI UNA-TANTUM PRIMA DI RIPRENDERE I BATCH (in ordine)

0. **Sanare i codici Erasmus sintetici** (1 sessione Codex/Claude Code):
   censire i `codiceErasmus` non conformi al formato reale (es.
   `SAP-IUS-*`), recuperare i codici veri (sono nell'export goerasmus in
   `fonti/` e nella tabella 28/03 del caso-Bruno per Giurisprudenza),
   sostituirli, rilanciare il riuso: partner già mappati verranno
   riconosciuti gratis. Misurare quante mete si completano solo con
   questo.
1. **Estendere lo schema**: campi `linkCatalogo` e `notaDisponibilita`
   (entrambi con `fonte`/`aggiornatoAl`) in `lib-mete.mjs`,
   `prepara-batch.mjs`, `applica-batch.mjs`, `setup-dipartimento.mjs`
   (riuso e propagazione anche sui campi nuovi).
2. **Nuovo script `verifica-link.mjs`**: prende un file batch, fa una
   richiesta HTTP a ogni URL, marca 200/redirect/errore. (Gli script
   girano sul computer di Nicola: nessun vincolo di sandbox.)
3. **Aggiornare `automazioni/PROMPT_CODEX_mappatura.md`**: il compito di
   Codex diventa VERIFICA della sgrossatura (aprire i link, confrontare
   le citazioni, correggere, completare i buchi facili) e non più ricerca
   da zero; ricerca da zero solo se `SGROSSATURA.json` manca. ⚠️ Come
   sempre: il prompt aggiornato va RE-INCOLLATO nella piattaforma Codex.
4. **Report copertura** (`valida-stato` o script nuovo): una riga per
   Facoltà — % lingua, % scadenze, % catalogo, % nonTrovabile — per
   sapere sempre a che punto siamo senza contare a mano.

## 7. ORDINE DI LAVORO E CALENDARIO

| Fase | Cosa | Quando |
|---|---|---|
| A | Chiudere i 6 batch follow-up residui (Codex, vecchio flusso) | subito |
| B | Lavori una-tantum §6 (passi 0-4) | luglio |
| C | **Giurisprudenza**: validare lingua contro la tabella 28/03 (caso-Bruno) + linkCatalogo per i ~55 partner — il beachhead si chiude qui | luglio-agosto |
| D | Ca' Foscari: lingue residue (~30) + linkCatalogo | agosto |
| E | Le 10 Facoltà nuove: ~408 codici in ~57 batch col flusso T1→T2 | agosto-ottobre |
| F | Backfill `linkCatalogo` sui partner già mappati prima del campo nuovo | ottobre-novembre |
| G | **Refresh bando 27/28** (= OP12): diff scadenze sui partner noti, molto più leggero della mappatura | novembre-febbraio |

**Capacità realistica** (da verificare dopo le prime 2 settimane, non è
una promessa): 4 batch/sera × 8 partner = ~32 partner a sera di
sgrossatura; i ~408 codici della fase E = ~13 serate di T1 + run Codex di
verifica distribuiti. Con 3 serate/settimana la fase E sta in ~5-6
settimane. Se dopo 2 settimane il ritmo reale è la metà, si ridiscute la
copertura (il fallback è già deciso: beachhead completo, resto
best-effort) — MEGLIO tagliare la copertura che la qualità o il sonno.

## 8. CADENZA SETTIMANALE (sostenibile per un operatore solo)

- 2-3 sere: sgrossatura T1 (30-40 min l'una, si può fare a pezzi).
- 1 lancio Codex/giorno nei giorni di lavoro: verifica di 1-2 batch
  (Codex su Plus ha limiti orari: pianificare i lanci, non aspettarsi
  un cron — reality-check già documentato).
- Weekend: `applica-batch`, report copertura, 10 minuti di campionamento
  T3 (3 dati a caso confrontati con la fonte).
- Claude: ZERO sessioni per la pipeline salvo i lavori una-tantum di §6.

## 9. COSA NON FARE (per non riaprire la questione)

- NON usare Claude per la ricerca dati di massa (principio 5).
- NON pagare API "per andare più veloce" prima di aver misurato il ritmo
  reale del flusso gratuito per 2 settimane (decisione presa: budget zero;
  si riapre solo con dati alla mano).
- NON accettare in `OUTPUT.json` righe senza fonte+citazione, da nessun
  modello, per nessun motivo.
- NON aggiungere altri campi allo schema "già che ci siamo": i 2 nuovi
  (§6.1) bastano per LA Generator L2; ogni campo in più allunga la coda.
- NON fare girare la sgrossatura su ChatGPT free (10 msg/giorno non
  bastano) né su strumenti che non mostrano le fonti.

## 10. LEGAME COL LEARNING AGREEMENT (perché questa pipeline conta doppio)

Il campo `linkCatalogo` + `notaDisponibilita` è il dato L2 del LA
Generator (OP9): la stessa passata che completa le mete costruisce la
killer feature. Il Change Form di Bruno (6 corsi su 8 saltati per NON
disponibilità) dice che questo è il dato che salva i piani di studio:
nella sgrossatura, la pagina INCOMING vale più del catalogo generale.
Giurisprudenza per prima (fase C) = il pilota L3 e il beachhead hanno i
dati migliori al più presto.
