# AUDIT DEL SITO — Fase A dell'ondata MERCATO-UI

> Eseguito il 2026-07-10 (sessione 39, Claude Code) secondo `PLAN.md`.
> Metodo: lettura integrale di `index.html` + `js/app.js` + struttura
> `css/style.css`; walkthrough a video su preview locale (porta 8001),
> mobile 375×812 e desktop 1280×800, tema chiaro E notte, ENTRAMBI gli
> atenei (Sapienza Giurisprudenza LM, Ca' Foscari Economia L con Inglese
> B2 certificato), onboarding da localStorage pulito.
> Verdetti: **TENERE** (baseline, non si riprogetta) / **RIFARE** (l'ondata
> lo ricostruisce) / **ELIMINARE**. I fix OP1–OP4 sono baseline (PLAN.md).

---

## 1. DIFETTI PRIORIZZATI

### P0 — Bloccanti per il lancio (a prescindere dalla direzione visiva)

1. **[BUG CONFERMATO] Onboarding, passo 2 su mobile: le prime opzioni sono
   irraggiungibili.** L'overlay è `flex` + `justify-content:center` +
   `overflow-y:auto`: con le 17 facoltà Sapienza il contenuto (1153px) sfora
   il viewport (812px) e la parte ALTA — Wiz, "2 di 3", "Cosa studi?" e le
   prime opzioni — viene tagliata e non è raggiungibile con lo scroll
   (misurato: "Giurisprudenza" a top −99px, `scrollTop` bloccato a 0).
   **Uno studente di Giurisprudenza — il beachhead — non può completare
   l'onboarding dal telefono.** Fix: `justify-content:flex-start` +
   `margin:auto` sul contenuto, o `min-height` invece di centratura.
2. **Codici Erasmus SINTETICI mostrati come dato ufficiale.** Il dettaglio
   meta mostra "Codice Erasmus: SAP-IUS-ZARAGOZA" — codice inventato dalla
   pipeline (il reale è tipo "E ZARAGOZ01"), difetto dati già noto
   (`DISEGNO_PIPELINE_DATI.md` §6). Mostrarlo mina la fiducia, il nostro
   unico capitale. Fix UI immediato: nascondere il campo quando il codice
   matcha il pattern sintetico (`SAP-`/`CF-`), riesporlo quando la pipeline
   li sana.
3. **Lingue del profilo limitate a 4 (Inglese/Francese/Spagnolo/Tedesco).**
   Il motore dà 0 punti ("requisito linguistico non soddisfatto") per ogni
   lingua non dichiarabile: chi conosce portoghese, olandese, ecc. vede
   falsi 🔒 — **il caso Lisbona (portoghese), la nostra ground truth, è
   penalizzato dal form**. Fix: lista lingue derivata dai `requisitoLingua`
   realmente presenti nei dati dell'ateneo attivo (+ "Altra"), non
   hardcoded. Max 2 righe lingua è un altro limite arbitrario da togliere.

### P1 — Qualità percepita (il "da developer" da eliminare)

4. **Schedina vuota sovradimensionata**: 5 slot a piena larghezza PRIMA
   della lista mete, su mobile ~1,5 schermate da scrollare prima della
   prima meta. A schedina vuota deve essere un invito compatto (1 riga),
   non 5 slot vuoti.
5. **"Area: 0421" nello strip profilo** — codice ISCED grezzo in faccia
   all'utente; nel dettaglio "Law (0421)" (inglese). Mostrare il nome del
   dipartimento scelto; il codice al massimo nel dettaglio tecnico.
6. **Icona 🟡 duplicata** nelle card senza punteggio (riga punteggio +
   riga stato mostrano entrambe l'emoji). Doppione visivo su decine di
   card Sapienza.
7. **Nomi università grezzi dai dati**: "PARIS LODRON UNIVERSITÄT
   SALZBURG" (tutto maiuscolo), "Universitè de Bordeaux" (accento
   sbagliato), "Salzbur" (typo città). La presentazione deve normalizzare
   il case (title-case con eccezioni); i typo sono fix dati puntuali da
   segnalare alla pipeline.
8. **Card mete ripetitive**: ogni card ripete "Portale Sapienza Roma ↗" e
   "Tocca per i dettagli →" — 60 volte lo stesso testo. Il link portale può
   vivere solo nel dettaglio; l'affordance di tap si comunica col design
   della card, non con una label ripetuta.
9. **"Ciao, Studente" per sempre**: l'onboarding non chiede il nome (scelta
   P1 corretta) ma nessun momento successivo invita a personalizzare:
   l'hero resta impersonale per tutto il ciclo di vita. Micro-invito
   post-onboarding o de-enfatizzare il saluto.
10. **Desktop poco curato**: home sbilanciata (colonna destra corta, grande
    vuoto sotto la missione), schedina vuota a nastro orizzontale enorme
    nel tab Mete. Il layout 7a è stato tradotto in modo letterale ma non
    riempie 1280px con dignità.
11. **Dark mode di serie B** (11 regole override in 1130 righe): card
    piatte sul blu, CTA-ghost poco distinguibili, nessuna cura estetica.
    Decisione di piano: diventa di prima classe (le direzioni di Fase B
    includono il tema notte).
12. **Feedback = GitHub Issues** ("Segnala un errore" nel footer): gli
    studenti non hanno GitHub. Per il lancio serve un canale a zero
    attrito (mailto con oggetto precompilato o Google Form).

### P2 — Performance e robustezza

13. **2,45 MB decodificati alla prima visita, di cui 2,16 MB di dati JS in
    36 file — SEMPRE entrambi gli atenei** (misurato). Lo studente Sapienza
    scarica tutta Ca' Foscari e viceversa. Senza build step si risolve:
    loader piccolo che inietta SOLO gli script dell'ateneo attivo
    (localStorage letto prima), con `defer` e init dopo il load. Obiettivo:
    ≤1/2 del peso attuale alla prima visita, meno con gzip.
14. **wiz-hero.png (408 KB)** usato come immagine OG e nel micro-banner
    di celebrazione checklist (`mostraBannerWiz`). Sostituire con webp
    dedicato ≤100 KB (regola già scritta in DISEGNO_BRAND §2-bis) e un'OG
    image dedicata.
15. **Ricerca senza debounce + render integrale**: ogni keystroke rifà
    l'intera griglia; senza profilo si renderizzano TUTTE le mete
    dell'ateneo in DOM (Sapienza: centinaia di card). Debounce ~150ms +
    render incrementale o cap con "mostra altre".
16. **Accessibilità da sistemare in C1**: i modali (dettaglio meta,
    onboarding, celebrazione) non hanno focus-trap; chip filtro e stati
    hint da verificare a contrasto AA; target touch delle frecce schedina
    al limite dei 44px.

### P3 — Igiene e coerenza

17. **File spazzatura nella root del repo** (redirezioni shell accidentali):
    `1`, `Il`, `Una`, `s`, `{`, `{,+`, `{out_nome}`, `!v.scadenzaId`,
    `(v.gruppoZaino`, `({id`, `a.codice`, `contesto`,
    `f.startsWith('dati-mete')`, `g.paesi.includes(...)` (×2),
    `gruppo.appendChild(...)`, `listaVoci.appendChild(...)`,
    `m.dipartimentoCf`, `_smoke.js`. Tutti a 0 byte o quasi: ELIMINARE
    (blocco igiene C, procedura del PLAN: dry-run + solo .bat/Windows).
18. **Cartelle legacy**: `_backup-20260625-*`, `_backup-sync-*`, `v2/`
    (vecchia istantanea del sito, ancora deployata su Pages!),
    `chatgpt-project/` — decisione esplicita di Nicola prima di toccare.
19. **Selettore ateneo nel form profilo perde le modifiche**: cambiare
    università ricarica la pagina immediatamente, buttando ciò che è stato
    appena modificato nel form senza avviso. Minore ma sgradevole.
20. **Variabile globale `SCADENZE_CAFOSCARI` usata anche per Sapienza**
    (naming legacy in `index.html`/`app.js`): non un bug, ma trappola per
    la manutenzione. Rinominare in `SCADENZE_ATENEO` durante C1.

## 2. VERDETTI PER AREA

| Area | Verdetto | Note |
|---|---|---|
| Dati mete/bando/scadenze + motore compatibilità | **TENERE** | Vincolo di piano. I typo (7) si segnalano alla pipeline, non si toccano a mano qui. |
| Impianto percorso 4 fasi + nav 3 tab | **TENERE** | La struttura DISEGNO_UX regge; cambia il vestito, non lo scheletro. |
| Onboarding | **RIFARE** | Bug P0.1, layout overflow, nessun aggancio nome; il flusso a 3 domande resta. |
| Home (hero, missione, countdown, preparazione) | **RIFARE il vestito** | Gerarchia e desktop; la logica missione/countdown resta. |
| Tab Mete: card + schedina | **RIFARE la presentazione** | P1.4/6/7/8; filtri, ricerca e logica preferite restano (OP1/OP3 baseline). |
| Dettaglio meta | **TENERE con fix** | P0.2 (codice sintetico), etichette area; struttura buona. |
| Candidatura (capitoli OP2) + Zaino | **TENERE con rifinitura** | Impianto recente e validato; solo restyle coerente con la direzione scelta. |
| Idoneità (traduttore 3 registri) | **TENERE** | Contenuti `spiegazione/azione` da completare (lavoro Nicola, UX5). |
| Profilo | **RIFARE** | P0.3 lingue, P3.19 selettore ateneo, etichette. |
| Dark mode | **RIFARE** | Da adattamento minimo a prima classe (decisione di piano). |
| Guide SEO | **TENERE** | Pulite e leggibili; solo riallineamento token dopo Fase B. URL INVARIATI. |
| Caricamento dati | **RIFARE la strategia** | P2.13: loader per ateneo attivo, niente build step. |
| PWA (manifest+sw) | **TENERE** | Audit completo in OP10 (MERCATO-2), non qui. |
| Root del repo | **PULIRE** | P3.17/18 nel blocco igiene. |
| LA Generator | **ASSENTE** | Da costruire come demo read-only (C6 del PLAN, vincoli OP8). |
| Pagina fiducia ("Come funziona") | **ASSENTE — RACCOMANDATA** | Il footer da solo non risponde a "di chi mi sto fidando?"; una pagina statica stile guide (con gate privacy) copre anche SEO brand. |

## 3. COSA FUNZIONA GIÀ (da non rompere)

- Onestà sistematica: banner "dati in verifica", "stima, non promessa",
  disclaimer datati con fonte, stati 🟡 espliciti — è il DNA del prodotto.
- Fusione scadenze+checklist con "Ora tocca a te" e countdown: chiara.
- Export .ics funzionante e ben posizionato.
- Filtro lingua e chip compatibilità (OP3), stima borsa (OP4): funzionano
  su entrambi gli atenei.
- Le guide SEO sono di buona qualità editoriale.
- Token CSS ordinati e coerenti in `:root` (base solida per la Fase B).
- Onboarding a 3 domande: flusso giusto, esecuzione da correggere.

## 4. INPUT PER LA FASE B (direzioni visive)

Ciò che l'audit suggerisce alle 2-3 proposte:
- Il problema NON è la palette (professionale) ma la **densità e la
  gerarchia**: troppa aria a desktop, troppo scroll a mobile prima del
  valore, componenti ripetitivi.
- Wiz oggi è usato poco e in modo timido (hero piccolo, banner con PNG
  pesante): la direzione (a) "giocosa premium" deve dargli un ruolo vero,
  la (b) "professionale" deve poterlo togliere senza lasciare buchi.
- Il tema notte va disegnato, non derivato: in entrambe le direzioni i
  mockup includono le due versioni.
- I mockup devono mostrare: home (hero+percorso+missione), tab Mete (card
  + schedina), e lo stato "bando chiuso" (il default per i prossimi mesi).
