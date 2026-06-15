# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-06-15 (run mappatura: Management lotto 4, 19 mete complete)
**Fase v1 raggiunta:** Fase 5 / 5 + Ondata A (A1, A2, A4, A5) — SITO PUBBLICATO
**Cosa funziona:** tutto, testato; mete REALI (58 Economia + 76 Management in file dati separato); bando, scadenze e
checklist VALIDATI sul PDF ufficiale; **52/58 righe Economia** sono complete con
lingua CEFR e scadenze ospitante; le altre 6 righe sono state classificate come
CEFR non pubblicato ufficialmente; link alla scheda PDF (58/58) e scadenze
ospitante (58/58); sito online su GitHub Pages:
**https://nicorotolo.github.io/erasmuswiz/**
**Prossimo passo:** analytics (A3, serve account di Nicola); arricchire
alloggio/prerequisiti; completare lingua e scadenze delle mete Management nei
batch gia' pianificati
**Novita':** GitHub Action `mappatura-mete.yml` — due volte a notte, in cloud,
arricchisce un lotto di ~10-15 mete e apre una PR da revisionare la mattina

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
| `.github/workflows/mappatura-mete.yml` | automazione | GitHub Action notturna (cloud): mappa un lotto di mete e apre una PR |
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
2026/27). Resta da completare lingua e dettagli-scheda, e validare bando/checklist.

| Dato | Stato attuale | Da fare |
|------|---------------|---------|
| **58 mete Economia** (`dati-mete.js`) | **REALI** dalla lista ufficiale 2026/27 | Economia chiusa; arricchimenti futuri su alloggio/prerequisiti |
| **76 mete Management** (`dati-mete-management.js`) | **REALI** dalla lista ufficiale 2026/27; 74 codici Erasmus unici; link scheda PDF presenti; **19/76 righe complete** | completare lingua e scadenze nei batch Management |
| → posti/livello/area/coordinatore/codice Erasmus | reali, dalla lista | ok |
| → requisito di **lingua** | Economia: **52/58 righe complete** con CEFR e scadenze, 6 senza CEFR ufficiale classificate non trovabili. Management: **19/76 righe complete**; 2 mete del primo lotto hanno scadenze ma non CEFR generale ufficiale | continuare i batch Management |
| → scadenze ospitante / linkPdf | Economia: **58/58 con link scheda PDF** e **58/58 con scadenze** nomination/application. Management: **76/76 con link scheda PDF** e **21/76 con scadenze** | continuare i batch Management |
| → schede PDF scaricate | 53 PDF in `fonti/schede/` (solo locale, gitignore) | — |
| Meta Aix-Marseille | **completa e reale** (da scheda PDF) | Esempio di riferimento |
| 2 mete "ESEMPIO" (Madrid, Monaco) | **RIMOSSE** ✅ | fatto |
| Requisiti bando (`dati-bando.js`) | **REALI** ✅ validati art. per art. sul PDF (8 requisiti, con rif. agli articoli) | Riverificare sul bando 2027/28 |
| Scadenze (`dati-scadenze.js`) | **REALI** ✅ 7 tappe dal bando (candidature, laureandi, graduatoria, accettazione, ISEE, mobilità) | Riverificare ogni anno |
| Checklist (`dati-checklist.js`) | **REALI** ✅ 9 passi validati sul bando | Riverificare ogni anno |

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
Fatto in run mappatura (2026-06-14): **Management avviato** - creato `js/dati-mete-management.js` con 76 mete ufficiali Venice School of Management, 74 codici Erasmus unici e link PDF scheda; pianificati 15 batch `scadenze+lingua`.
Fatto in run mappatura (2026-06-14): **Management lotto 1 arricchito** - scadenze completate per Klagenfurt, Vienna, ULB Phisoc, UCLouvain LSM e Bamberg; lingue CEFR completate per ULB Phisoc, UCLouvain LSM e Bamberg. Klagenfurt e Vienna restano in pending lingua per secondo tentativo.
Fatto in run mappatura (2026-06-15): **Management lotto 2 completato** - Deggendorf, FAU Erlangen-Nuernberg, Frankfurt School, University of Hamburg e HSBA arricchite con scadenze nomination/application e requisiti lingua CEFR ufficiali.
Fatto in run mappatura (2026-06-15): **Management lotto 3 completato** - Heilbronn, WHU, Cologne WiSo, Leuphana Lueneburg e Munich Business School arricchite con scadenze nomination/application e requisiti lingua ufficiali; Leuphana aggiornata su entrambe le righe D LUNEBUR01.
Fatto in run mappatura (2026-06-15): **Management lotto 4 completato** - Regensburg, Aarhus BSS, Copenhagen Business School, SDU Odense e Universidad de Alcala arricchite con scadenze nomination/application e requisiti lingua ufficiali.
Totale Economia: 52/58 righe complete con lingua CEFR e scadenze; 58/58 con scadenze ospitante; 6 righe senza CEFR ufficiale classificate non trovabili.
Totale Management: 19/76 righe complete; 76/76 con link scheda PDF; scadenze completate per 21/76 righe; lingua CEFR completata per 19/76 righe.

0. **Attivare la mappatura notturna in cloud:** Nicola genera il token con
   `claude setup-token` e lo salva come secret `CLAUDE_CODE_OAUTH_TOKEN` su
   GitHub (repo → Settings → Secrets and variables → Actions). Poi primo test
   manuale dalla tab Actions ("Mappatura mete Erasmus" → Run workflow). Ora che
   il quarto lotto Management e' stato arricchito, il prossimo run ordinario puo'
   lavorare `management-batch-6`; il batch `management-batch-17` serve solo per
   il secondo tentativo lingua di Klagenfurt e Vienna.
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
