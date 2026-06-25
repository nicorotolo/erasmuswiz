# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-06-25 (patch infrastrutturale "accoda e parti": `scripts/prepara-batch.mjs` ora gestisce `nuovo_dipartimento` senza leggere un file dati inesistente e `scripts/setup-dipartimento.mjs` inizializza lo stato del nuovo dipartimento, accodando sotto-batch deterministici da 5 mete. Validazione: `Stato coerente`.)
**Fase v1 raggiunta:** Fase 5 / 5 + Ondata A (A1, A2, A4, A5) — SITO PUBBLICATO + infrastruttura mappatura multi-dipartimento
**Cosa funziona:** tutto, testato; mete REALI per Economia, Management, Lingue, Scienze e Filosofia; bando, scadenze e checklist validati; pipeline di mappatura coerente e pronta per nuovi dipartimenti; sito online su GitHub Pages:
**https://nicorotolo.github.io/erasmuswiz/**
**Prossimo passo:** analytics (A3, serve account di Nicola); arricchire alloggio/prerequisiti; usare la pipeline `nuovo_dipartimento` per i prossimi ampliamenti.
**Novita':** pipeline Codex "accoda e parti": un batch `nuovo_dipartimento` produce `batch/INPUT.json`, poi `setup-dipartimento.mjs` registra il file dati e accoda i sotto-batch iniziali.

---

## 1. COS'È
Cruscotto web per studenti che fanno domanda Erasmus all'Università Ca' Foscari.
Sito 100% statico (HTML/CSS/JavaScript puro). Nessun framework, backend,
database o login. Pubblicabile trascinando la cartella su Netlify Drop.

## 2. STATO DELLE FASI

| Fase | Cosa fa | Stato |
|------|---------|-------|
| 1 — Scheletro + dati separati | Legge i dati dai file e li mostra | ✅ Fatta e testata |
| 2 — Timeline + countdown | Tappe ordinate, conto alla rovescia dal vivo, gestione scadenze passate | ✅ Fatta e testata |
| 3 — Mete filtrabili + compatibilità | Profilo studente, filtro per area, punteggio pesato, icone oneste | ✅ Fatta e testata |
| 4 — Blocco Idoneità | Requisiti del bando in chiaro | ✅ Fatta e testata |
| 5 — Checklist con spunte salvate | Passi spuntabili + barra progresso, salvati su dispositivo | ✅ Fatta e testata |

**Sezioni visibili nella pagina (in ordine):** Idoneità → Checklist → Timeline →
Profilo → Mete.

## 3. ARCHITETTURA (le 2 regole d'oro, rispettate)

- **Codice separato dai dati.** I contenuti vivono nei file `js/dati-*.js`;
  `js/app.js` è solo logica. Per aggiornare un contenuto si tocca SOLO il file dati.
- **"Zaino unico" (account-ready).** Tutto lo stato dello studente sta in un solo
  oggetto in localStorage:
  `ZAINO = { profilo: {...}, checklist: { "chk-mete": true, ... } }`.
  Domani lo stesso oggetto andrà su un server senza riscrivere la logica.

## 4. FILE DEL PROGETTO

| File | Tipo | A cosa serve |
|------|------|--------------|
| `index.html` | codice | Struttura della pagina (sezioni vuote riempite dal JS) |
| `css/style.css` | codice | Stile responsive (mobile-first) |
| `js/app.js` | codice | Logica: legge i dati e costruisce tutte le sezioni |
| `js/dati-bando.js` | **dati** | Requisiti del bando (Idoneità) |
| `js/dati-mete.js` | **dati** | Mete Erasmus |
| `js/dati-scadenze.js` | **dati** | Scadenze Ca' Foscari (timeline) |
| `js/dati-checklist.js` | **dati** | Passi della checklist |
| `automazioni/PROMPT_CODEX_mappatura.md` | automazione | Prompt dell'automazione Codex (ogni 15 min): unica fonte della mappatura mete. (Action Claude `mappatura-mete.yml` RIMOSSA) |
| `scripts/lib-mete.mjs` | automazione | Utilità condivise: scanner JS (rispetta stringhe/parentesi) + serializzazione |
| `scripts/prepara-batch.mjs` | automazione | Imbuto in ingresso: estrae il prossimo batch in `batch/INPUT.json` (pochi KB) |
| `scripts/setup-dipartimento.mjs` | automazione | Bootstrap deterministico per `nuovo_dipartimento`: valida il nuovo file dati, registra lo stato e accoda sotto-batch da 5 mete |
| `scripts/applica-batch.mjs` | automazione | Imbuto in uscita: fonde `batch/OUTPUT.json` nel fileJs, `node --check`, aggiorna lo stato |
| `fonti/` | **fonti ufficiali** | PDF/ODS del bando 2026/27 Ca' Foscari (lista destinazioni, legenda, EUTOPIA) — base del database mete |
| `README.md` | guida | Spiegazione file + come aggiungere una meta + come testare |
| `STATO_DEL_SITO.md` | guida | Questo file: stato aggiornato |
| `PROGETTO_ERASMUS.md` | guida | Bussola strategica (idea, confini, rischi) |
| `BRIEF_claude_code_fase1.md` | guida | Brief iniziale Fase 1 (storico) |
| `DISEGNO_DATI_erasmus.md` | guida | Struttura dati validata + logica compatibilità |

## 5. LOGICA DI COMPATIBILITÀ (già implementata)

- **Filtro netto a monte:** si vedono solo le mete della stessa area disciplinare.
- **Punteggio pesato 0-100:** lingua **50** / livello accademico **30** / posti **20**
  (i pesi sono costanti in `app.js`, facili da cambiare in un punto solo).
- **Onestà:** ✅ Compatibile (≥80) · ⚠️ Possibile con riserve (40-79) · 🔒 Non
  accessibile ora (<40), con spiegazione di cosa manca.

## 6. ⚠️ STATO DEI CONTENUTI (il vero lavoro che resta)

Il CODICE è pronto. Le mete ora sono **REALI** (dalla lista ufficiale del bando
2026/27). La pipeline di mappatura ha completato i dipartimenti tracciati nello stato corrente; resta il lavoro qualitativo su dettagli-scheda, alloggio e prerequisiti.

| Dato | Stato attuale | Da fare |
|------|---------------|---------|
| **58 mete Economia** (`dati-mete.js`) | **REALI** dalla lista ufficiale 2026/27; stato mappatura completo: **52/58 righe complete**, 5 senza CEFR ufficiale nello stato corrente | arricchimenti futuri su alloggio/prerequisiti |
| **76 mete Management** (`dati-mete-management.js`) | **REALI** dalla lista ufficiale 2026/27; stato mappatura completo: **71/76 righe complete**, 5 senza CEFR ufficiale | arricchimenti futuri su alloggio/prerequisiti |
| **24 mete Lingue e culture orientali** (`dati-mete-lingue.js`) | **REALI** dalla lista ufficiale 2026/27; stato mappatura completo: **23/24 righe complete**, 1 senza CEFR ufficiale | arricchimenti futuri su alloggio/prerequisiti |
| **25 mete Scienze ambientali, informatica e statistica** (`dati-mete-scienze.js`) | **REALI** dalla lista ufficiale 2026/27; stato mappatura completo: **23/25 righe complete**, 2 senza CEFR ufficiale | arricchimenti futuri su alloggio/prerequisiti |
| **66 mete Filosofia e Beni Culturali** (`dati-mete-filosofia.js`) | **REALI** dalla lista ufficiale 2026/27; stato mappatura completo: **56/66 righe complete**, 11 senza CEFR ufficiale | arricchimenti futuri su alloggio/prerequisiti |
| → posti/livello/area/coordinatore/codice Erasmus | reali, dalla lista | ok |
| → requisito di **lingua** | I dipartimenti tracciati hanno pending lingua a 0; le mete senza CEFR ufficiale restano classificate come non trovabili | non inventare livelli non pubblicati |
| → scadenze ospitante / linkPdf | I dipartimenti tracciati hanno pending scadenze a 0 nello stato corrente | riverificare su cambio anno/bando |
| → schede PDF scaricate | locali in `fonti/schede/` (gitignore) | — |
| Requisiti bando (`dati-bando.js`) | **REALI** validati art. per art. sul PDF | Riverificare sul bando 2027/28 |
| Scadenze (`dati-scadenze.js`) | **REALI** 7 tappe dal bando | Riverificare ogni anno |
| Checklist (`dati-checklist.js`) | **REALI** 9 passi validati sul bando | Riverificare ogni anno |

**Nota motore di compatibilità:** `app.js` ora gestisce la lingua mancante in modo
onesto. Per le mete senza lingua mostra 🟡 "Idoneo — verifica la lingua" (se hai
livello e posti) o 🔒 "Non accessibile" (se manca il livello), SENZA inventare una
percentuale. Le mete con lingua nota (Aix) mantengono il punteggio 0-100 pieno.

## 7. COME TESTARE (promemoria)

Non aprire `index.html` col doppio click (pagina bianca: sicurezza del browser).
Avviare un server locale:
```
cd "C:\Users\ASUS\OneDrive - Presidenza del Consiglio dei ministri\Desktop\Me\6. Business AI\3. ErasmusWiz"
python -m http.server 8000
```
poi aprire **http://localhost:8000**. (Dettagli e alternative nel `README.md`.)

## 8. PROSSIMI PASSI

Fatto in sessione (2026-06-25): **patch infrastrutturale accoda e parti** - `prepara-batch.mjs` gestisce `nuovo_dipartimento` senza crash su file dati assente; aggiunto `setup-dipartimento.mjs` per creare lo stato e accodare sotto-batch deterministici da 5 mete. Validato con `node --check` e `valida-stato.mjs` ("Stato coerente").
Fatto in sessione 5 (2026-06-11): **A4 COMPLETATO** — tutte le 58 mete con lingua e link scheda.
Fatto in run notturno (2026-06-12): **scadenze arricchite per 5 mete** —
  Copenhagen (KU): application 1/5 e 1/10;
  Alicante (UA): nomination 1/6 e 1/11, application 15/6 e 15/11, lingua B1/B2 raccomandato;
  UC3M (E MADRID14): nomination 13/3-15/5 e 15/9-16/10;
  Vytautas Magnus (LT KAUNAS01): nomination 11/5 e 11/11, application 17/5 e 17/11;
  NTNU (N TRONDHE01): nomination 15/4 e 15/9, application 1/5 e 1/10, lingua inglese B2.
Fatto in run mappatura (2026-06-14): **New University completata** — lingua B2 CEFR in inglese o sloveno da Info Package ufficiale. **Bilkent resta senza CEFR ufficiale**: richiesta lettera di competenza in inglese, pianificato ultimo tentativo.
Fatto in run mappatura (2026-06-14): **KU Leuven completata** — inglese C1 per corsi master della Faculty of Economics and Business. **Pafos, Copenhagen e Iriarte restano senza CEFR ufficiale**: pianificato ultimo tentativo.
Fatto in run mappatura (2026-06-14): **Palma ultimo tentativo completato** — la scheda UIB 2026/27 e le pagine incoming non pubblicano un requisito CEFR; E PALMA01 spostata in linguaNonTrovabile.
Fatto in run mappatura (2026-06-14): **Bilkent ultimo tentativo completato** - le pagine exchange ufficiali richiedono una lettera di competenza in inglese, ma non pubblicano un livello CEFR; TR ANKARA07 spostata in linguaNonTrovabile.
Fatto in run mappatura (2026-06-14): **Pafos, Copenhagen e Iriarte ultimo tentativo completato** - le fonti ufficiali non pubblicano un requisito CEFR generale per queste mete; CY PAFOS01, DK KOBENHA01 ed E TENERIF28 spostate in linguaNonTrovabile. Economia chiusa, prossimo batch Management.
Fatto in sessione (2026-06-15): **pipeline a imbuto per ridurre i token su Codex/Claude**. L'agente non legge più i file JS interi (~109 KB): `prepara-batch.mjs` estrae il batch in un INPUT.json di ~2 KB, l'agente restituisce solo i campi trovati in OUTPUT.json, `applica-batch.mjs` fa il merge surgicale deterministico (campi immutabili intatti), `node --check`, aggiorna `mappatura-stato.json` e salva le fonti in `batch/FONTI-*.json`. Prompt della Action riscritto di conseguenza. Testato end-to-end su management-batch-6.
Fatto in sessione (2026-06-15, parte 2): **pipeline estesa anche all'automazione Codex** (quella che gira spesso). `applica-batch.mjs` arricchito con TUTTA la logica di stato di Codex: gestione di codici Erasmus duplicati (più blocchi stesso codice), `tentativiLingua` + spostamento in `linguaNonTrovabile` dopo `maxTentativi`/`lingua_ultimo_tentativo`, ricalcolo `pending`/`completate` dal file, avanzamento dipartimento con soglia, creazione batch di follow-up per le pending rimaste. Validato contro `valida-stato.mjs` ("Stato coerente"). Nuovo prompt Codex in `automazioni/PROMPT_CODEX_mappatura.md` (da incollare in `$CODEX_HOME`). **Prossimi passi:** (1) ri-committare gli script aggiornati + il nuovo prompt; (2) sostituire il prompt nell'automazione Codex; (3) lanciare un run di prova e controllare la PR.
Fatto in run mappatura (2026-06-14): **Management avviato** - creato `js/dati-mete-management.js` con 76 mete ufficiali Venice School of Management, 74 codici Erasmus unici e link PDF scheda; pianificati 15 batch `scadenze+lingua`.
Fatto in run mappatura (2026-06-14): **Management lotto 1 arricchito** - scadenze completate per Klagenfurt, Vienna, ULB Phisoc, UCLouvain LSM e Bamberg; lingue CEFR completate per ULB Phisoc, UCLouvain LSM e Bamberg. Klagenfurt e Vienna restano in pending lingua per secondo tentativo.
Fatto in run mappatura (2026-06-15): **Management lotto 2 completato** - Deggendorf, FAU Erlangen-Nuernberg, Frankfurt School, University of Hamburg e HSBA arricchite con scadenze nomination/application e requisiti lingua CEFR ufficiali.
Fatto in run mappatura (2026-06-15): **Management lotto 3 completato** - Heilbronn, WHU, Cologne WiSo, Leuphana Lueneburg e Munich Business School arricchite con scadenze nomination/application e requisiti lingua ufficiali; Leuphana aggiornata su entrambe le righe D LUNEBUR01.
Fatto in run mappatura (2026-06-15): **Management lotto 4 completato** - Regensburg, Aarhus BSS, Copenhagen Business School, SDU Odense e Universidad de Alcala arricchite con scadenze nomination/application e requisiti lingua ufficiali.
Fatto in sessione debug (2026-06-15): **infra waterproof** - diagnosticato e risolto bug race condition auto-merge (branch divergenti ora eliminati silenziosamente); aggiunto stop esplicito anti-doppio-batch nel prompt; puliti 13 branch orfani; ripristinati file corrotti da OneDrive.
Totale Economia: 52/58 righe complete con lingua CEFR e scadenze; 58/58 con scadenze ospitante; 6 righe senza CEFR ufficiale classificate non trovabili.
Totale Management: 19/76 righe complete; 76/76 con link scheda PDF; scadenze completate per 21/76 righe; lingua CEFR completata per 19/76 righe.

0. **Attivare la mappatura notturna in cloud:** Nicola genera il token con
   `claude setup-token` e lo salva come secret `CLAUDE_CODE_OAUTH_TOKEN` su
   GitHub (repo → Settings → Secrets and variables → Actions). Poi primo test
   manuale dalla tab Actions ("Mappatura mete Erasmus" → Run workflow). Ora che
   il quarto lotto Management e' stato arricchito, il prossimo run ordinario puo'
   lavorare `management-batch-6`; i batch `management-batch-17` e `management-batch-18`
   servono per il secondo tentativo lingua di Klagenfurt, Vienna e Aarhus BSS.
1. **A3 (resto):** aggiungere analytics (GoatCounter/Plausible) — **serve che
   Nicola crei l'account** (1 riga di script da incollare poi); valutare dominio.
2. **Sciogliere le lingue ancora senza CEFR ufficiale** (siti atenei / email IRO).
3. **Schede:** arricchire alloggio/prerequisiti meta per meta.
4. **Ondata B:** post-selezione (vedi ROADMAP.md).
5. **Test utenti:** far usare il cruscotto a 2-3 studenti Erasmus veri.

### Idee future (solo con trazione provata — vedi PROGETTO_ERASMUS.md)
- Fase post-selezione (checklist che cambia dopo l'assegnazione).
- PWA ("aggiungi a schermata home" + notifiche scadenze).
- Più dipartimenti, poi altre università.
- Account/login (lo "zaino" è già pronto per il passaggio).

---

## COME AGGIORNARE QUESTO FILE
Dopo ogni avanzamento: cambia la data in alto, aggiorna la tabella delle fasi
(sezione 2), lo stato contenuti (sezione 6) e i prossimi passi (sezione 8).
