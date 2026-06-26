# STATO DEL SITO — ErasmusWiz

> Fotografia viva del progetto. Aggiorna questo file a ogni avanzamento e
> incollalo all'inizio di ogni nuova sessione con Claude per ripristinare il
> contesto. Va letto insieme a `PROGETTO_ERASMUS.md` (la "bussola" strategica).

**Ultimo aggiornamento:** 2026-06-26 (AVVIO MAPPATURA SAPIENZA — seed campione Giurisprudenza + fix automazione. Creato il seed `js/atenei/sapienza/dati-mete-giurisprudenza.js`: **20 mete campione** (su 56 reali) estratte dal DB ufficiale Go Erasmus+ (`?ambito=IUS`) via browser, con 12 paesi, area Law/0421, posti/durata/livello reali, docente referente Scarchillo; codiceErasmus SINTETICO provvisorio (prefisso SAP-IUS-, il DB lista non espone il codice ufficiale). requisitoLingua/scadenzeOspitante VUOTI → li riempie Codex. Creati i file Sapienza `dati-scadenze.js` (REALI dal bando: 27/02 e 27/05/2026, mobilità 01/06/26–31/07/27), `dati-bando.js`, `dati-checklist.js`, `dati-postselezione.js` (questi 3 **PROVVISORI**, marcati "da validare sul bando ufficiale" — NON mostrare come definitivi agli studenti). In `index.html` Sapienza ora carica i suoi file e si registra `disponibile:true` → **selezionabile dalla tendina** 🎓. ⚠️ **ECONOMIA Sapienza: nessuna sede pubblicata** sul bando 26/27 ("non è prevista la pubblicazione… non ci sono sedi disponibili") → partita solo Giurisprudenza, come previsto dal caveat groundwork. **FIX CRITICO automazione:** `mappatura-stato.json` puntava ancora ai vecchi percorsi `js/dati-mete*.js` (post-refactor i file sono in `js/atenei/cafoscari/`) → corretti tutti gli 8 `fileJs` Ca' Foscari + aggiunto campo `ateneo`; senza questo fix l'automazione si sarebbe rotta anche su Ca' Foscari. Accodati **4 lotti** `giurisprudenza-batch-1..4` via `setup-dipartimento.mjs`; `valida-stato.mjs` = "Stato coerente"; `prepara-batch` genera un INPUT valido. Aggiornato il prompt Codex a MULTI-ATENEO (`git add js/atenei/`, regole nuovo_dipartimento per ateneo, no-scrape DB JS Sapienza). Simulazione caricamento: CF 392 mete intatte, Sapienza 20 mete attivabili. DA FARE: test locale + `PUBBLICA.bat`; aggiornare il prompt anche in `$CODEX_HOME`.)

**Ultimo aggiornamento precedente:** 2026-06-26 (PREP MULTI-ATENEO — Fase 1 refactor + GROUNDWORK Sapienza. Eseguito il refactor multi-ateneo del sito: tutti i file dati Ca' Foscari spostati in `js/atenei/cafoscari/`, creata `js/atenei/sapienza/` con placeholder (`var METE=[]`). In `index.html` introdotto il registro `ATENEI{}`: ogni ateneo carica i suoi dati, viene "fotografato" nel registro, poi l'ateneo ATTIVO (salvato in localStorage, chiave `erasmuswiz_ateneo`) viene esposto sui globali che `app.js` già legge → **app.js NON toccato**. Convertiti `const`→`var` in dati-bando/scadenze/checklist/postselezione (per riassegnabilità, come già METE). Aggiunto selettore d'ateneo (tendina 🎓 nel tab Oggi): Sapienza appare "(in arrivo)" disabilitata finché vuota; cambio ateneo = salva + `location.reload()`. CSS coerente col design system + dark mode. VERIFICATO con simulazione Node dell'ordine di caricamento: registro a 2 atenei, **392 mete / 392 ID unici** Ca' Foscari intatte, requisiti 8 / scadenze 7 / checklist 9 / post 20, Sapienza `disponibile:false`. `node --check` OK su tutti i 12 file dati spostati. Creato `GROUNDWORK-sapienza.md`: fonti ufficiali (DB accordi `accordi-didattica.web.uniroma1.it/goerasmus`, portale Go Erasmus+, bandi per Facoltà), modello dati Sapienza ✅ compatibile (Facoltà al posto di dipartimento, area = codici ISCED), CIVIS = analogo di EUTOPIA da rimandare, scala ~1500 accordi (~4x Ca' Foscari → partire da 1 Facoltà). ⚠️ Ostacolo Fase 3: il DB accordi è renderizzato lato JS (web_fetch torna vuoto) → preferire i PDF destinazioni per Facoltà. NON ancora pubblicato: testare in locale e poi `PUBBLICA.bat`.)

**Ultimo aggiornamento precedente:** 2026-06-26 (SINCRONIZZAZIONE online↔locale + workflow waterproof. Diagnosi: NON c'era un lato "avanti" — dati in parità (392 mete), ma online/`main` era avanti di 118 commit sull'architettura (8 dipartimenti, file `batch/`, index.html completo) mentre il locale aveva SOLO modifiche non committate = funzioni v2 (preferiti, ricerca mete, fase post-selezione, `dati-postselezione.js`). L'index.html locale era rotto (troncato). Causa: OneDrive sincronizzava i file ma git locale restava su branch vecchio `feature/pipeline-imbuto`. SOLUZIONE: unificazione su `main` (unica fonte di verità). Eseguita via script Windows `00-RIPARA-E-UNIFICA.bat` (git non eseguibile dal sandbox: il mount OneDrive corrompe `.git`). Risultato VERIFICATO su commit `80c9b8f`: `app.js` + `dati-postselezione.js` v2 online, 392 mete, Pages build #155 Success. `dati-postselezione.js` ora finalmente presente su main (prima referenziato ma mancante — bug latente risolto). Nuovo workflow: `SCARICA.bat` (pull prima di lavorare) + `PUBBLICA.bat` (commit+pull--rebase+push dopo); guida in `WORKFLOW.md`. Backup completo in `_backup-sync-20260626-110132/`. NOTA: eseguire git SOLO dagli .bat su Windows, mai dal sandbox.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Fase 5 ROADMAP: condivisibilità Open Graph. Aggiunti in `index.html` `<head>`: `meta description`, 5 tag `og:*` (type, url, title, description, image) e 3 tag `twitter:*` (card, title, description, image). URL pubblico `https://nicorotolo.github.io/erasmuswiz/`, immagine `img/wiz-hero.png`. Solo `index.html` toccato, nessun JS.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Mappatura multi-dipartimento completata. Aggiunti 3 nuovi dipartimenti Ca' Foscari: **Scienze Molecolari e Nanosistemi** (8 mete, `dati-mete-molecolari.js`, tutte arricchite 8/8), **Studi Linguistici e Culturali Comparati** (114 mete, `dati-mete-linguistici.js`, 104/114 arricchite — 10 in linguaNonTrovabile), **Studi Umanistici** (21 mete, `dati-mete-umanistici.js`, 18/21 arricchite — 3 in linguaNonTrovabile). Tutti e 3 i dipartimenti marcati "completo" da Codex (soglia 0.85 raggiunta). Arricchimento eseguito automaticamente dall'automazione Codex in 45 run (batch 84→129). `index.html` aggiornato con catena `_meteAll` per i 3 nuovi file. Totale mete: **392** su **8 dipartimenti**. `node --check` OK su tutti e 3 i file. EUTOPIA (46 accordi cross-dipartimentali) annotata come task futura — richiede logica filtro speciale, non implementata ora.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Fase 4 ROADMAP: fase post-selezione. Nuovo file `js/dati-postselezione.js` con `CHECKLIST_POST` — 20 voci reali in 5 fasi (Accettazione, Learning Agreement, Documenti pre-partenza, Arrivo, Rientro), fonte: pagina ufficiale Ca' Foscari procedure outgoing 2026/27. `caricaZaino()` esteso con `fase:"domanda"` e `checklistPost:{}` + fallback per zaini vecchi. Toggle "Sto preparando la candidatura / Sono stato selezionato" in cima al tab Checklist (HTML+CSS). Nuove funzioni in `app.js`: `renderChecklistPost()` con voci raggruppate per fase, `initToggleFase()` che salva `ZAINO.fase` e switch tra le due checklist. `aggiornaProgressoV2(lista, spunte)` reso parametrico. `node --check` OK su app.js e dati-postselezione.js.)

**Ultimo aggiornamento precedente:** 2026-06-26 (Fase 3 ROADMAP: mete preferite. `caricaZaino()` ora include `metePreferite: []` con fallback per zaini vecchi. Aggiunto `<div id="sezione-preferite">` in `#tab-mete`. Nuove funzioni: `renderPreferite()` (sezione riepilogo con contatore N/5 e rimozione ✕) e `togglePreferita(id)` (aggiunge/rimuove con limite morbido a 5). Bottone ⭐ su ogni card in `renderMete()`: mostra "⭐ Preferita" se già salvata, "☆ Aggiungi ai preferiti" altrimenti. CSS in `style.css` con sfondo oro e dark-mode override. `node --check` OK.)

**Ultimo aggiornamento precedente:** 2026-06-25 (MERGE GitHub→locale: i dati mappati da Codex su GitHub (che la copia locale non aveva) sono stati portati nel working tree mantenendo il design v2. Catalogo passato da 134 a **249 mete su 5 dipartimenti**: Economia 58, Management 76, Lingue 24, Scienze 25, Filosofia 66. I 3 nuovi file dati (`dati-mete-lingue.js`, `dati-mete-scienze.js`, `dati-mete-filosofia.js`) collegati in `index.html` con la catena di concat `_meteAll`; tutti i 5 file mete convertiti a `var METE`. ATTENZIONE: il merge NON è stato fatto via git (working tree su branch `feature/pipeline-imbuto` con modifiche non committate + lock OneDrive su `.git`); i file dati sono stati estratti con `git show origin/main:...`. Backup pre-merge in `_backup-20260625-*/`.)
**Fase raggiunta:** Fase 5 / 5 + Ondata A completa + ROADMAP Fase 1 ✅ + ROADMAP Fase 2 ✅ + ROADMAP Fase 3 ✅ + ROADMAP Fase 4 ✅ (post-selezione) — SITO PUBBLICATO con design v2, ora multi-dipartimento (8), **392 mete totali**
**Cosa funziona:** tutto, validato (node --check su tutti i JS); mete REALI su 8 dipartimenti Ca' Foscari; bando, scadenze e checklist VALIDATI sul PDF ufficiale. Completezza lingua per dipartimento:
Economia 52/58; Management 71/76; Lingue 23/24; Scienze 23/25; Filosofia 56/66;
Scienze Molecolari 8/8; Studi Linguistici 104/114; Studi Umanistici 18/21.
Sito online su GitHub Pages con design v2 (push effettuato 2026-06-25, commit `8bc3206` su main):
**https://nicorotolo.github.io/erasmuswiz/**
**Prossimo passo:** (1) ✅ unificazione online↔locale su `main` FATTA e verificata (commit `80c9b8f`); (2) lanciare `PUBBLICA.bat` per pubblicare anche questo aggiornamento di STATO; (3) cancellare i file-spazzatura con `PULISCI-SPAZZATURA.bat`; (4) completare lingua Filosofia e scadenze residue; (5) verificare a video gli 8 dipartimenti; (6) test utenti reali. D'ora in poi: SEMPRE `SCARICA.bat` prima di lavorare e `PUBBLICA.bat` dopo (vedi `WORKFLOW.md`).
**Automazione:** OpenAI Codex ("Mappatura mete Erasmus", progetto 3. ErasmusWiz) ATTIVA — gira ogni ~9 min su Worktree, modello GPT-5.5 Basso. Nessun token aggiuntivo necessario.

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
| v2 — Redesign UI | Tab OGGI/METE/TIMELINE/CHECKLIST, missione del giorno, percorso a tappe, countdown pill, mascotte Wiz, dark mode, GoatCounter | ✅ Promossa a main (2026-06-23) |

**Tab visibili nella pagina (navigazione inferiore):** Oggi (missione) → Mete → Scadenze → Checklist.
**Tab nascosti (accessibili da JS):** Idoneità · Profilo.

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
| `index.html` | codice | Struttura v2 (tab OGGI/METE/TIMELINE/CHECKLIST + Idoneità/Profilo nascosti) |
| `css/style.css` | codice | Design system v2: dark mode, font Bricolage/Jakarta/SpaceMono, responsive |
| `js/app.js` | codice | Logica v2: missione del giorno, percorso, countdown, mete, checklist, profilo |
| `img/wiz-hero.png` | asset | Mascotte Wiz (illustrazione) |
| `js/atenei/` | **dati** | Dati per ateneo (multi-ateneo). Sottocartelle `cafoscari/` e `sapienza/`; vedi `js/atenei/README.md` |
| `js/atenei/cafoscari/dati-bando.js` | **dati** | Requisiti del bando Ca' Foscari (Idoneità) — `var BANDO_INFO`, `var REQUISITI_BANDO` |
| `js/atenei/cafoscari/dati-mete.js` | **dati** | Mete — Economia (58, `var METE`) |
| `js/atenei/cafoscari/dati-mete-management.js` | **dati** | Mete — Management (76) |
| `js/atenei/cafoscari/dati-mete-lingue.js` | **dati** | Mete — Lingue e culture orientali (24) |
| `js/atenei/cafoscari/dati-mete-scienze.js` | **dati** | Mete — Scienze ambientali/informatica/statistica (25) |
| `js/atenei/cafoscari/dati-mete-filosofia.js` | **dati** | Mete — Filosofia e Beni Culturali (66) |
| `js/atenei/cafoscari/dati-mete-molecolari.js` | **dati** | Mete — Scienze Molecolari e Nanosistemi (8) |
| `js/atenei/cafoscari/dati-mete-linguistici.js` | **dati** | Mete — Studi Linguistici e Culturali Comparati (114) |
| `js/atenei/cafoscari/dati-mete-umanistici.js` | **dati** | Mete — Studi Umanistici (21) |
| `js/atenei/cafoscari/dati-scadenze.js` | **dati** | Scadenze Ca' Foscari (timeline) — `var SCADENZE_INFO`, `var SCADENZE_CAFOSCARI` |
| `js/atenei/cafoscari/dati-checklist.js` | **dati** | Passi della checklist — `var CHECKLIST` |
| `js/atenei/cafoscari/dati-postselezione.js` | **dati** | Checklist post-selezione — `var CHECKLIST_POST` |
| `js/atenei/sapienza/dati-mete-giurisprudenza.js` | **dati** | Mete Giurisprudenza Sapienza (seed campione 20/56; lingua+scadenze da arricchire) |
| `js/atenei/sapienza/dati-scadenze.js` | **dati** | Scadenze bando Sapienza 26/27 (REALI) |
| `js/atenei/sapienza/dati-bando.js` · `dati-checklist.js` · `dati-postselezione.js` | **dati** | Idoneità/checklist/post-selezione Sapienza (**PROVVISORI**, da validare sul bando) |
| `js/atenei/sapienza/dati-mete.js` | **dati** | Deprecato (vuoto; sostituito dai file per Facoltà) |
| `js/atenei/README.md` | guida | Come è collegato il multi-ateneo + come aggiungere un ateneo |
| `GROUNDWORK-sapienza.md` | guida | Ricognizione fonti/modello dati Sapienza (26/06) |
| `v2/` | storico | Design v2 originale (sottocartella, non più il sito principale) |
| `automazioni/PROMPT_CODEX_mappatura.md` | automazione | Prompt dell'automazione Codex (ogni 15 min): unica fonte della mappatura mete. (Action Claude `mappatura-mete.yml` RIMOSSA) |
| `scripts/lib-mete.mjs` | automazione | Utilità condivise: scanner JS (rispetta stringhe/parentesi) + serializzazione |
| `scripts/prepara-batch.mjs` | automazione | Imbuto in ingresso: estrae il prossimo batch in `batch/INPUT.json` (pochi KB) |
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
2026/27). Resta da completare lingua e dettagli-scheda, e validare bando/checklist.

| Dato | Stato attuale | Da fare |
|------|---------------|---------|
| **58 mete Economia** (`dati-mete.js`) | **REALI** dalla lista ufficiale 2026/27 | Economia chiusa; arricchimenti futuri su alloggio/prerequisiti |
| **76 mete Management** (`dati-mete-management.js`) | **REALI** 2026/27; link scheda PDF presenti; **71/76 lingua**, **76/76 scadenze** | completare le 5 lingue residue |
| **24 mete Lingue** (`dati-mete-lingue.js`) | **REALI** 2026/27; **23/24 lingua**, **24/24 scadenze** | 1 lingua residua |
| **25 mete Scienze** (`dati-mete-scienze.js`) | **REALI** 2026/27; **23/25 lingua**, **25/25 scadenze** | 2 lingue residue |
| **66 mete Filosofia** (`dati-mete-filosofia.js`) | **REALI** 2026/27; **56/66 lingua**, **66/66 scadenze** | 10 lingue in linguaNonTrovabile (non trovabili su siti ufficiali) |
| **8 mete Scienze Molecolari** (`dati-mete-molecolari.js`) | **REALI** 2026/27; **8/8 lingua**, **8/8 scadenze** ✅ | completo |
| **114 mete Studi Linguistici** (`dati-mete-linguistici.js`) | **REALI** 2026/27; **104/114 lingua**, **114/114 scadenze** | 10 lingue in linguaNonTrovabile |
| **21 mete Studi Umanistici** (`dati-mete-umanistici.js`) | **REALI** 2026/27; **18/21 lingua**, **21/21 scadenze** | 3 lingue in linguaNonTrovabile |
| **⚠️ EUTOPIA (46 accordi)** | non mappati | Cross-dipartimentali, richiede logica filtro speciale; task futura |
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

Fatto in sessione (2026-06-23): **v2 promossa a sito principale** — `index.html`
root sostituito con il design v2 (tab OGGI/METE/TIMELINE/CHECKLIST, missione del
giorno, percorso a tappe, countdown pill, mascotte Wiz, dark mode). `css/style.css`
e `js/app.js` aggiornati, `img/wiz-hero.png` copiato, `const METE` → `var METE`
in entrambi i file dati, concat Economia+Management inline in `index.html`.
GoatCounter (A3) già integrato nella v2: account `erasmuswiz.goatcounter.com`.

Fatto in sessione (2026-06-25): **MERGE GitHub→locale.** Il lavoro di Codex
(che merge solo su GitHub) è stato portato nel working tree locale. Scoperta la
divergenza incrociata: GitHub aveva i dati nuovi ma il design v1; il locale aveva
il v2 ma i dati vecchi. Merge selettivo: presi i file `js/dati-*.js` +
`mappatura-stato.json` da `origin/main` con `git show`, tenuto il codice v2
(`index.html`, `css/style.css`, `js/app.js`, `img/`). Aggiunti 3 dipartimenti
(Lingue, Scienze, Filosofia) → **249 mete totali**. Convertiti i 5 file mete a
`var METE` e collegati in `index.html` con catena `_meteAll`. Validato: `node
--check` su tutti i JS OK, simulazione concat = 249 mete / 249 ID unici / 0
problemi strutturali. Backup pre-merge in `_backup-20260625-*/`. **Push su GitHub
FATTO** (commit `8bc3206` su main, via `pubblica-v2-su-github.bat`): il sito
pubblico ora serve il v2 con 249 mete. `node_modules/` (jsdom usato per i test)
aggiunto a `.gitignore`, da cancellare a mano.

0. **⬆️ PUSH locale → GitHub:** i 3 nuovi file (`dati-mete-molecolari.js`,
   `dati-mete-linguistici.js`, `dati-mete-umanistici.js`) e l'`index.html`
   aggiornato sono solo in locale (branch `feature/pipeline-imbuto`). Vanno pushati
   su `origin/main` con il metodo bat già usato (`pubblica-v2-su-github.bat` o
   equivalente) per aggiornare il sito pubblico.
1. **Mappatura Codex automatica:** l'automazione è ATTIVA (ogni ~9 min, GPT-5.5 Basso).
   8 dipartimenti tutti "completo" — Codex può fermarsi o essere puntato su EUTOPIA.
2. **EUTOPIA (task futura):** 46 accordi cross-dipartimentali (presenti in
   `fonti/Lista_destinazioni_Erasmus__per_studio_europa_a.a._2026-2027.ods`, riga
   "EUTOPIA"). Richiedono logica filtro speciale (non legati a un singolo
   dipartimentoCf). Da pianificare in sessione dedicata.
3. **Testare in locale** (`python -m http.server 8000`) e verificare che 392 mete
   si carichino correttamente (tutti e 8 i file nella catena `_meteAll`).
4. **Test utenti reali:** far usare il cruscotto a 2-3 studenti Ca' Foscari.

### Idee future (solo con trazione provata — vedi PROGETTO_ERASMUS.md)
- Fase post-selezione (checklist che cambia dopo l'assegnazione).
- PWA ("aggiungi a schermata home" + notifiche scadenze).
- Più dipartimenti, poi altre università.
- Account/login (lo "zaino" è già pronto per il passaggio).

---

## COME AGGIORNARE QUESTO FILE
Dopo ogni avanzamento: cambia la data in alto, aggiorna la tabella delle fasi
(sezione 2), lo stato contenuti (sezione 6) e i prossimi passi (sezione 8).
