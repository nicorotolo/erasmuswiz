# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-06-13 (run lotto 6: lingua CEFR per 8 mete + scadenze Antwerp + parziali Pafos)
**Fase v1 raggiunta:** Fase 5 / 5 + Ondata A (A1, A2, A4, A5) — SITO PUBBLICATO
**Cosa funziona:** tutto, testato; mete REALI (58 Economia); bando, scadenze e
checklist VALIDATI sul PDF ufficiale; **TUTTE le 58 mete** hanno lingua (47 con
livello CEFR, 11 "da verificare" con nota e fonte), link alla scheda PDF (58/58)
e scadenze ospitante (54/58 complete + Pafos parziale); sito online su GitHub Pages:
**https://nicorotolo.github.io/erasmuswiz/**
**Prossimo passo:** analytics (A3, serve account di Nicola); sciogliere le 4
scadenze mancanti (Louvain, Pafos sem. autunnale, Siviglia, Tenerife); sciogliere
gli 11 "da verificare" restanti; mappatura altri dipartimenti CF (Management)
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
| **58 mete Economia** (`dati-mete.js`) | **REALI** dalla lista ufficiale 2026/27 | — |
| → posti/livello/area/coordinatore/codice Erasmus | reali, dalla lista | ok |
| → requisito di **lingua** | **58/58 mete: FATTE** ✅ (47 con livello CEFR; 11 "da verificare" con nota e fonte) | Sciogliere gli 11 "da verificare" contattando atenei/siti |
| → scadenze ospitante / linkPdf | **58/58 con link scheda PDF** ✅; **54/58 con scadenze complete** + Pafos parziale | 4 mete senza scadenze complete (Louvain, Pafos sem. autunnale, Siviglia, Tenerife) |
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
Fatto in run notturno (2026-06-12): **scadenze arricchite per 5 mete** (Copenhagen, Alicante, UC3M, VMU, NTNU).
Fatto in lotto 6 (2026-06-13): **lingua CEFR confermata per 8 mete** da siti ufficiali ospitanti —
  Antwerp (B2 inglese) + scadenze complete (15/4, 15/5, 15/10, 1/11);
  Gand UGent (B2 inglese - testo esatto: "CEF B2-level or higher");
  UAB Barcellona ×2 (B2 spagnolo + B2 inglese per corsi nelle rispettive lingue);
  UniPu Pola (B2 inglese/croato - testo esatto da sito nomination);
  VMU Kaunas (B2 inglese - testo esatto da pagina incoming);
  Groninga FEB (B2 inglese per triennale: IELTS 6.0/TOEFL 80);
  New University Nova Gorica (B2 inglese O B2 sloveno - testo esatto).
  Pafos: aggiunto sem. primaverile (nom. 15/11, app. 15/12); autunno non trovato.
  Bilkent e Tenerife: note arricchite.
Totale: 54/58 mete con scadenze complete; 47 CEFR + 11 "da verificare".
Rimangono 4 mete senza scadenze complete (Louvain, Pafos sem. autunnale, Siviglia, Tenerife).
Rimangono 11 mete con lingua "da verificare": MCI Innsbruck, Uni Wien, UCLouvain, Neapolis Pafos,
  Copenhagen KU, UIB Palma ×2, URV Tarragona, Iriarte Tenerife, Bilkent, + (da escludere Bilkent se si conta la nota).

0. **Attivare la mappatura notturna in cloud:** Nicola genera il token con
   `claude setup-token` e lo salva come secret `CLAUDE_CODE_OAUTH_TOKEN` su
   GitHub (repo → Settings → Secrets and variables → Actions). Poi primo test
   manuale dalla tab Actions ("Mappatura mete Erasmus" → Run workflow). Il prossimo run puo':
   - tentare di recuperare le 4 scadenze mancanti (Louvain, Pafos autunno, Siviglia, Tenerife)
   - sciogliere i restanti 11 "da verificare" (URV Tarragona, UIB Palma, MCI Innsbruck, Uni Wien, ecc.)
   - o avanzare verso il prossimo dipartimento CF (Management).
1. **A3 (resto):** aggiungere analytics (GoatCounter/Plausible) — **serve che
   Nicola crei l'account** (1 riga di script da incollare poi); valutare dominio.
2. **Sciogliere i 21 "lingua da verificare"** (siti atenei / email IRO).
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
