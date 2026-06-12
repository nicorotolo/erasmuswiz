# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-06-12 (sessione 6: lotto A4-bis — 10 mete Economia aggiornate con CEFR, 4 note confermate "nessun livello disponibile")
**Fase v1 raggiunta:** Fase 5 / 5 + Ondata A (A1, A2, A4, A5) — SITO PUBBLICATO
**Cosa funziona:** tutto, testato; mete REALI (58 Economia); bando, scadenze e
checklist VALIDATI sul PDF ufficiale; **TUTTE le 58 mete** hanno lingua (47 con
livello CEFR, 11 "da verificare" / senza CEFR disponibile), link alla scheda PDF (58/58)
e scadenze ospitante (48/58); sito online su GitHub Pages:
**https://nicorotolo.github.io/erasmuswiz/**
**Prossimo passo:** analytics (A3, serve account di Nicola); completare il lotto A4-ter
(7 mete ancora da verificare: UCL Louvain, Pula, Kaunas, Trondheim, Groningen,
Nova Gorica, Ankara Bilkent)
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
| → requisito di **lingua** | **58/58 mete: FATTE** ✅ (47 con livello CEFR; 7 "da verificare"; 4 confermate senza CEFR) | Sciogliere i 7 rimasti (lotto A4-ter) |
| → scadenze ospitante / linkPdf | **58/58 con link scheda PDF** ✅; 48/58 con scadenze nomination/application | Alloggio/prerequisiti ancora da arricchire per molte mete |
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

Fatto in sessione 6 (2026-06-12): **A4-bis** — verificate online (siti ufficiali
atenei + factsheet) 15 mete "da verificare" (MCI Innsbruck, Wien, Antwerpen,
KU Leuven, Gent, Pafos, Copenaghen, Alicante, UAB×2, UIB Palma×2, URV Tarragona,
Tenerife, e aggiornamento note per UCL Louvain già segnalata). Risultato:
10 mete ora con CEFR reale (MCI B2, Antwerpen B2, Leuven B2 raccomandato, Gent B2,
Alicante B1+B2 raccomandati, UAB×2 B2, UIB×2 A2, URV B1/B2); 4 note aggiornate
ma senza CEFR (Wien: livello non specificato, Pafos: sito NUP non indica soglia,
UCPH: esplicitamente nessun requisito per Economics, Tenerife: Iriarte non indica livello).
Totale CEFR: 47/58. Restano 7 mete da verificare: UCL Louvain, Pula, Kaunas,
Trondheim, Groningen, Nova Gorica, Ankara Bilkent.

Fatto in sessione 5 (2026-06-11): **A4 COMPLETATO** — scaricate 23 nuove schede
PDF dalla pagina unive.it/data/11679 e arricchiti gli ultimi 25 record meta
(lotto 3: Innsbruck MCI, Antwerpen, Leuven, Francoforte ×2, Mannheim, Alicante,
Madrid UC3M, Mataro, Palma ×2, Siviglia, Tenerife, Chambery, Pola, Spalato,
Budapest ELTE ×2; lotto 4: Nicosia, Nizza, Atene AUEB, Limerick, Cracovia,
Torun, Nova Gorica, Ankara Bilkent). Risultato: 58/58 mete con lingua (37 CEFR
+ 21 "da verificare" con nota), 58/58 con link scheda, 48/58 con scadenze
ospitante. Attenzione: la scheda Leuven collegata da CF è della Faculty of
Science (segnalato nella nota della meta).

0. **Lotto A4-ter (prossimo run):** verificare le 7 mete rimaste (UCL Louvain,
   Pula, Kaunas, Trondheim, Groningen, Nova Gorica, Ankara Bilkent).
0b. **Attivare la mappatura notturna in cloud:** Nicola genera il token con
   `claude setup-token` e lo salva come secret `CLAUDE_CODE_OAUTH_TOKEN` su
   GitHub (repo → Settings → Secrets and variables → Actions). Poi primo test
   manuale dalla tab Actions ("Mappatura mete Erasmus" → Run workflow).
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
