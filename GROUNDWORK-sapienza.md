# GROUNDWORK — Fonti e modello dati Sapienza

> Documento di ricognizione (26/06/2026). Serve a Fase 1 (refactor sito) e Fase 3
> (mappatura bot). Risponde a UNA domanda: *dove stanno i dati Erasmus della
> Sapienza, come sono strutturati, e il nostro modello dati regge?*

## 1. Le fonti ufficiali (in ordine di utilità)

| Fonte | URL | Cosa dà |
|-------|-----|---------|
| **Database accordi "Go Erasmus+"** | `accordi-didattica.web.uniroma1.it/goerasmus` | Il cuore. Elenco destinazioni filtrabile per Facoltà, con docente, area, lingua, livello. |
| Portale Go Erasmus+ | `goerasmus.web.uniroma1.it` | Schede singolo accordo (`/accordo/ERAxxxxx`). |
| Bando ufficiale 2026/27 | `uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio` | Requisiti, scadenze candidatura, regole. |
| Bandi per Facoltà/Dipartimento | es. `seai.web.uniroma1.it`, `disse.web.uniroma1.it`, `medodo.web.uniroma1.it` | Spesso pubblicano un **PDF con la lista destinazioni** della Facoltà (= equivalente dell'`.ods` di Ca' Foscari). |
| Learning Agreement Search Tool | `aris.me/erasmus/erasmus-tool.html` | Esami riconosciuti negli anni passati per destinazione (extra, non essenziale per noi). |

## 2. Numeri (e perché contano)

- Sapienza: **~500 atenei partner**, **~1.500 accordi bilaterali**, **~2.000 borse**.
- Ca' Foscari (riferimento): **392 mete** su 8 dipartimenti.
- **→ La Sapienza è ~4x Ca' Foscari.** Mapparla *tutta* col bot a ~9 min/run è un
  lavoro di settimane, non giorni. Implicazione strategica: partire da **1 Facoltà**
  (come si fece con Economia a Ca' Foscari), non tutte insieme.

## 3. Come è organizzata (≠ Ca' Foscari)

Ca' Foscari ragiona per **Dipartimento**. La Sapienza ragiona per **Facoltà**, e
alcune Facoltà sono divise in sotto-dipartimenti nel filtro. Le voci del menu
"Facoltà di Sapienza" (filtro OBBLIGATORIO nel DB):

Architettura · Economia · Farmacia e Medicina (area farmacia) · Giurisprudenza ·
Ingegneria Civile e Industriale · Ingegneria dell'informazione/informatica/statistica
(4 sotto-dipartimenti) · Lettere e Filosofia · Medicina e Odontoiatria · Medicina e
Psicologia (2 aree) · Polo di Latina · Scienze matematiche fisiche e naturali ·
Scienze politiche/sociologia/comunicazione (3 sotto-dipartimenti).

**Conseguenza per i dati:** quello che oggi chiamiamo `dipartimentoCf` diventa, per
la Sapienza, una **Facoltà** (o Facoltà+sotto-dipartimento). Il campo concettuale è
lo stesso (un raggruppamento di alto livello che fa da filtro netto a monte), cambia
solo l'etichetta. → nessuna modifica al motore di compatibilità.

## 4. Campi esposti dal DB accordi — mappatura al nostro modello

Il filtro del DB espone esattamente i campi che già usiamo:

| Campo Sapienza (DB accordi) | Campo nostro (`dati-mete*.js`) | Note |
|------------------------------|-------------------------------|------|
| Facoltà di Sapienza | `dipartimentoCf` → (rinominato concettualmente "facoltà") | filtro obbligatorio |
| Area disciplinare (**codici ISCED**, es. `Economics - 0311`) | `area` | Sapienza usa ISCED standard → più pulito di Ca' Foscari |
| Ateneo dell'accordo | `nome` / `universita` | nome partner |
| Nazione | `paese` | |
| Lingua (+ livello nella scheda) | `lingua` / `livelloLingua` (CEFR) | da verificare CEFR sulla scheda singola |
| Livello (Laurea / Magistrale / PhD) | `livelloAccademico` | combacia |
| Docente promotore | (nuovo, opzionale) `docente` | Ca' Foscari ha "coordinatore"; equivalente |
| (scheda) posti, scadenze | `posti`, `scadenzaNomination`, `scadenzaApplication` | le scadenze le fissa il **partner**, come Ca' Foscari |

**Conclusione modello dati:** ✅ compatibile. Serve solo rinominare concettualmente
"dipartimento"→"facoltà" e accettare i codici ISCED nel campo `area`. Il motore di
compatibilità (`app.js`) NON va toccato.

## 5. Equivalenza CIVIS ↔ EUTOPIA

Come Ca' Foscari ha EUTOPIA (accordi cross-dipartimentali, task futura non mappata),
la Sapienza fa parte dell'**alleanza CIVIS** (11 atenei: ULB Bruxelles, Tübingen,
Autonoma Madrid, Aix-Marseille, Atene, Bucarest, Stoccolma, Salisburgo, Glasgow,
Losanna). Stessa categoria: accordi non legati a una singola Facoltà → **rimandare**,
come EUTOPIA.

## 6. Ostacolo tecnico per il bot (Fase 3) — da validare PRIMA di accodare

⚠️ Il DB accordi è una **pagina con filtro lato server/JS**: per vedere le
destinazioni bisogna selezionare una Facoltà e inviare il form. Un semplice
`web_fetch` torna **vuoto** (contenuto renderizzato dopo). Ca' Foscari invece dava un
`.ods` scaricabile + schede PDF: fonte "bulk" facile.

**Due strade per la Sapienza (da decidere in Fase 2/3):**
1. **PDF per Facoltà** — molti bandi di Facoltà pubblicano la lista destinazioni in
   PDF (visto per l'area medica: `medodo.web.uniroma1.it/.../Destinazioni-Erasmus-AA25-26-...pdf`).
   È l'equivalente dell'`.ods` di Ca' Foscari → **strada preferita** per il seed.
2. **Scraping del DB filtrato** — richiede un browser headless (es. Chrome MCP),
   non il `web_fetch` semplice. Più fragile; usarlo solo se manca il PDF.

**Azione richiesta prima della Fase 3:** verificare a mano che per la Facoltà
pilota esista un PDF destinazioni scaricabile. Se sì, la pipeline esistente regge;
se no, serve adattare l'estrazione.

### AGGIORNAMENTO 26/06 (verificato via browser)
- **Buona notizia:** anche se il form è JS, i **risultati sono server-side via
  parametri URL**: `…/goerasmus?ambito=<COD>&page=<N>` restituisce la tabella in
  HTML leggibile (10 righe/pagina). Codici Facoltà visti: Economia=`ECON`,
  Giurisprudenza=`IUS`. Paginazione 0-based (`page=0` = righe 1-10).
  → In futuro l'estrazione si può semi-automatizzare con questi URL (no headless).
- **Limite della lista:** NON espone il codice Erasmus ufficiale né la lingua/CEFR
  (solo: nazione, ateneo, promotore, durata, posti, livello). Il codice ufficiale
  e la lingua stanno nella scheda `/accordo/ERAxxxxx` (JS) o nell'**export**
  ("Esporta i risultati") → da valutare per la mappatura completa.
- **Economia:** al 26/06 **nessuna sede pubblicata** ("non è prevista la
  pubblicazione del bando… non ci sono sedi disponibili"). Partiti da Giurisprudenza
  (56 mete reali).

## 7. Scadenze candidatura bando 2026/27 (per `dati-scadenze` Sapienza)

- Bando pubblicato: **16/12/2025**.
- 1ª scadenza domande: **27/02/2026, ore 13:00** (prorogata).
- 2ª scadenza (destinazioni residue): **27/05/2026, ore 13:00**.
- Mobilità fisica: tra **01/06/2026** e **31/07/2027**.

NB: le scadenze del *bando* (candidatura) sono Sapienza-specifiche e diverse da Ca'
Foscari → serve un `dati-scadenze` separato per ateneo. Le scadenze *nomination/
application* delle singole mete restano fissate dai partner (come già modellato).

## 8. Raccomandazione operativa

- **Facoltà pilota:** Economia (come a Ca' Foscari, così confrontiamo mele con mele)
  — **MA** verificare prima che il bando Economia 26/27 e il suo PDF destinazioni
  siano pubblicati; altrimenti ripiegare su Giurisprudenza o Lettere e Filosofia.
- **Non** mappare tutte le Facoltà insieme: una pilota, validata, poi le altre.
- **Tenere CIVIS fuori** dal primo giro (come EUTOPIA).

---

## Fonti
- [Bando Erasmus+ 2026-2027 per studio — Sapienza](https://www.uniroma1.it/it/pagina/bando-erasmus-2026-2027-studio)
- [Accordi Erasmus (DB Go Erasmus+)](https://accordi-didattica.web.uniroma1.it/goerasmus)
- [Portale Go Erasmus+](https://goerasmus.web.uniroma1.it/)
- [Erasmus studenti Sapienza — per studio](https://www.uniroma1.it/it/pagina/erasmus-studenti-sapienza-studio)
