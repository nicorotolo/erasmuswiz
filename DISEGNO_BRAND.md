# DISEGNO BRAND — Ondata BRAND — sessioni BR0–BR7 (restyling + rifiniture strutturali)

> ⚠️ **SUPERSEDED (2026-07-10, ondata MERCATO-UI Fase B/C1).** Nicola ha
> scelto la **Direzione C "Ibrida"** tra le 3 proposte di
> `design/proposte-2026-07/` (piano: `design/PLAN-FASE-B.md`): questa
> scelta SOSTITUISCE formalmente le decisioni BR0–BR7 come previsto da
> `PLAN.md` dell'ondata. La nuova identità: indigo primario + ambra come
> accento, neutri caldi, tema notte di prima classe (palette dedicata,
> superfici solide), raggi 20/16/12/9, Wiz come GUIDA nei momenti chiave
> (non protagonista, non rimosso). Fonte di verità aggiornata:
> `design/tokens/colors.css` + `:root` di `css/style.css` (Fase C1).
> Le regole non visive di questo documento (BR1 movimento gentile,
> §2-bis budget asset ≤100 KB, tono di voce) restano valide.
> Il resto del documento è STORICO.

---

## ★ REDESIGN V4 — SCHEDA COMPONENTI (vincolante, 2026-09-14)

> Rifinitura dentro la Direzione C, scelta da Nicola sulla canvas
> «ErasmusWiz Redesign v4» (pagina *Scelta*). Piano: `PLAN_REDESIGN_V4.md`.
> Generatore delle artboard: `design/redesign-v4/genera-canvas.mjs --scelta`.
> Stato: **in revisione** finché Nicola non approva le schermate del blocco 1.
> Prevale sulle regole visive storiche sotto; palette, raggi e tono restano.

### V4.1 Principi
- **Base V3 Equilibrio** (densità media) + **tipografia V2** (Plus Jakarta
  anche nei titoli; Bricolage solo nel wordmark) + **bottoni C «Inchiostro»**.
- **Solo tema giorno.** Nessun colore fuori da `:root` di `css/style.css`.
- **Minimale**: niente bordi grigi intorno alle superfici, niente pillole
  per dati e stati, niente box colorati per gli stati. La gerarchia la danno
  dimensione, peso e spazio.
- **Informazioni in ordine di utilità** per chi sceglie (es. nella card meta:
  compatibilità → chi/dove → lingua → durata → posti).
- **Spiegazioni al bisogno**: testi di contesto nelle «i», non in etichette fisse.

### V4.2 Tipografia (font: `--font-body` salvo indicato)
| Ruolo | Misura / peso / interlinea | Note |
|---|---|---|
| H1 schermata | 22px / 800 / 1.2, spaziatura −.02em | desktop 28px |
| H2 sezione | 16px / 700 / 1.3, −.01em | titoli di card missione: 20px / 800 |
| H3 card | 15.5px / 700 / 1.3 | nome università: max 2 righe, spazio sempre per 2 |
| Corpo | 14.5px / 400 / 1.55 | `text-wrap: pretty` |
| Secondario | 13–13.5px, `--text-hint` o `--text-muted` | città, sottotitoli |
| Micro-etichetta | 11–11.5px / 700 / MAIUSCOLO, +.08em, `--text-hint` | etichette dei dati |
| Numeri | `--font-mono` 700 | compatibilità card 34px; totali 16px; conteggi 12px |

### V4.3 Superfici e spazi
- **Superficie**: `--bg-card`, raggio `--radius-lg` (card) o `--radius-md`
  (righe), ombra `0 1px 2px rgba(30,27,46,.04)`, **nessun bordo**.
- **Separatori interni**: 1px `--border`; riga dei totali: 1px `--border-strong`
  su `--bg-app`.
- **Ritmo mobile (390)**: margine 16px; 28–32px tra blocchi di pagina;
  12px dentro i gruppi; 16px tra card; padding card 20px.
- **Superficie inchiostro** (`--night-bg`): barra di navigazione, countdown,
  intestazione LA, numero di posizione nelle preferite, bottone primario.

### V4.4 Bottoni e azioni
- **Primario (C)**: `--night-bg`, testo bianco, icona 17px in `--gold`;
  raggio `--radius-md`; altezza ≥44px; padding 0 18px; 14.5px/700.
  Hover `--night-bg-2`; focus `--shadow-focus`; disabilitato `--bg-track` +
  `--text-hint` (icona senza oro). **Uno solo per vista.**
- **Azione secondaria = link**: `--primary` 14px/700, icona 16px prima
  (Stampa, Modifica) o freccia dopo (Vai alla riga); area ≥44px.
- Non esistono più bottoni secondari pieni o con contorno nelle schermate
  nuove. I chip filtro restano come oggi.

### V4.5 Semaforo di compatibilità
- **Solo icona + testo colorato**, mai pillola: ✓ `--green` Compatibile,
  △ `--amber` da verificare / con riserve, lucchetto `--red` non accessibile.
  12.5px/700, icona 14px. Mai solo colore.
- Nella card meta la percentuale (mono 34px, stesso colore) precede lo stato;
  senza percentuale si mostra «—» in `--text-hint`.

### V4.6 Card meta
1. riga alta: percentuale + stato a sinistra, stella a destra (44×44, blu
   `--primary` piena se preferita, `--text-hint` vuota se no);
2. nome università (max 2 righe, spazio riservato) + città (13.5px hint);
3. separatore, poi griglia etichettata `Lingua richiesta | Durata | Posti`
   (colonne 1.6fr/1fr/1fr); «Lingua da verificare» in `--amber`.
Altezza uguale per tutte le card; nessuna freccia.

### V4.7 Preferite (schedina)
Riga compatta su superficie senza bordo: numero di posizione 28px su
`--night-bg`, nome troncato su una riga, `percentuale · stato` mono 12px,
freccia su (disattiva sulla prima) e X in `--red`. Intestazione `Le tue
preferite` + contatore mono `N di 5`.

### V4.8 «i» informativa
Cerchio 32px con icona 18px `--text-hint` (su inchiostro `--night-muted`),
accanto al testo a cui si riferisce. Suggerimento al passaggio **e** al focus
da tastiera (`tabindex="0"`, `role="tooltip"`): sfondo `--text-dark`, testo
bianco 13px/1.45, raggio `--radius-sm`, larghezza 220–320px.
Usi approvati: titolo LA (sostituisce «Dossier personale · solo su questo
dispositivo»), intestazioni ECTS/CFU, «abbinamento da controllare»,
Procedura d'ateneo, titolo Percorso, «Le tue lingue» nel Profilo.

### V4.9 Learning Agreement
- Titolo «Costruisci il tuo Learning Agreement» + «i», nessun kicker.
- Barra del dossier: link «Stampa» + primario «Salva versione».
- **Da controllare** in una fascia propria tra titolo e tabella (icona
  avviso su cerchio `--amber-bg`, titolo + «i», motivo in una riga,
  link «Vai alla riga»): non sta mai accanto ai crediti.
- Tabella: colonne testo a sinistra, numeri e stato centrati; intestazione
  «Stato della scelta»; **ECTS e CFU totali nella riga finale** sotto le
  rispettive colonne.

### V4.10 Profilo in Mete
Sotto l'H1: `Ateneo · Area` (13.5px muted) e sotto `Livello · Lingua`
(600 dark), link «Modifica» con matita allineato a destra. Nessun box.

### V4.11 Wiz e ambra
- **Wiz**: solo onboarding (con fumetto). Mai in Home, Mete, Percorso,
  Profilo, LA; mai negli stati vuoti (icona neutra al suo posto).
- **Ambra/oro**: icona del bottone primario, voce attiva della navigazione,
  countdown, etichetta «La tua prossima mossa». Non come sfondo di sezioni.

### V4.12 Navigazione
Invariata nell'architettura: **Mete · Home · Learning Agreement** (Home al
centro su mobile), Menu in alto a destra; Percorso e Profilo da Home/Menu.
Voce attiva `--gold` su `rgba(251,191,36,.12)`; icone SVG a tratto (non emoji)
nelle schermate nuove.

### V4.12-bis Onboarding (scelta 14/09: opzione C) — ROTTE IMPLEMENTATE 15/09 (`benvAggiornaRotte`, tetto 24 città)
- Layout: mappa a tutto sfondo su `--night-bg`, titolo + legenda dei pallini
  (Compatibile / Da verificare / Non accessibile ora) in alto, scheda di vetro
  in basso con Wiz, passo, scelte e «Continua» bianco. Etichetta sul pin: solo
  il nome della destinazione.
- **Rotte che si irradiano dall'ateneo (non ancora nel codice).** Oggi esiste
  solo la scena decorativa (`mappaRotteScena()` in `js/app.js`, `.rotta-oro`
  in `css/style.css`): 6 rotte fisse dalle due città-ateneo, rimosse all'avvio
  del flusso. Da costruire:
  1. alla scelta dell'ateneo, le rotte tratteggiate in movimento partono
     **dalla città di quell'ateneo** verso le sue mete reali (coordinate dai
     dati, mai inventate), comparendo in sequenza;
  2. a ogni risposta successiva (cosa studi, livello, lingue) le rotte e i pin
     **si restringono** alle mete coerenti; quelle escluse sfumano, quelle
     rimaste prendono il colore del semaforo;
  3. vincoli: tetto al numero di rotte animate insieme (prestazioni su
     telefono, dataset Sapienza ~1.600 mete), `prefers-reduced-motion` →
     niente animazione, solo stato finale; pausa con Page Visibility come oggi.
- Colori dei pin su blu: servono token nuovi (verde e rosso chiari) con
  contrasto verificato; oggi i pallini dell'artboard usano valori provvisori.

### V4.13 Aperti (da decidere in implementazione)
- Icone SVG al posto delle emoji anche nei testi dinamici di `app.js`
  (es. «Fatto ✨», stazioni 🧭): richiede toccare copy, non solo CSS.
- Percorso: stato «in corso» della tappa senza colore (oggi solo numero
  su inchiostro) — confermare dopo il test con persone.

> Specifica decisa il 04/07/2026 con Nicola. È il documento di riferimento
> per le sessioni BR0–BR7. Claude Code deve leggerlo PRIMA di toccare il
> codice in quelle sessioni, insieme a `design/readme.md` (il design system).
> Regola: una sessione = un blocco. Non anticipare i blocchi successivi.

---

## 0. COSA STIAMO FACENDO

Il sito ha già la struttura giusta (ondata UX: onboarding, home-percorso a
4 fasi, fusione scadenze+checklist, .ics — vedi `DISEGNO_UX.md`). Questa
ondata gli dà l'**identità visiva** definita dal design system in
`design/`, più tre rifiniture strutturali (schedina, "prossimi 3 passi",
layout desktop).

Materiale di riferimento nel repo:

- `design/readme.md` — brand, tono di voce, fondamenta visive. **Leggerlo
  sempre per primo.**
- `design/tokens/*.css` — i token ufficiali (colori, tipografia, spazi,
  raggi, ombre, easing). Sono la FONTE dei valori: non inventare colori.
- `design/assets/` — logo-mark, mascotte Wiz, stella, scintilla (SVG),
  wiz-hero.png.
- `design/riferimenti/ErasmusWiz Prototipo (standalone).html` — il
  cruscotto ribrandizzato, da aprire nel browser come riferimento visivo.
- `design/riferimenti/Redesign - Esplorazioni.pdf` — i mockup delle
  varianti scelte (per Nicola; Claude Code usa questo documento).

## 1. REGOLE INVARIANTI (valgono per OGNI sessione BR*)

1. **Niente React, niente build step, niente framework.** Il prototipo e i
   componenti `.jsx` del design system sono SOLO riferimento visivo: si
   traducono in HTML + CSS + JS vanilla dentro i file esistenti
   (`index.html`, `css/style.css`, `js/app.js`).
2. Smallest reliable change; non riscrivere funzioni che si possono
   riusare; preservare id/classi usate da `app.js` salvo necessità.
3. Fallback per zaini vecchi su ogni estensione di `ZAINO`.
4. `node --check` su ogni JS toccato; test a video su localhost:8000 con
   ENTRAMBI gli atenei (Ca' Foscari + Sapienza), mobile E desktop.
5. Dark mode: **adattamento minimo** — deve restare funzionante/leggibile
   (nessun testo illeggibile), ma niente cura estetica dedicata.
6. Git SOLO tramite i `.bat` su Windows (mai da bash: OneDrive corrompe
   `.git`). Ogni sessione si chiude con worktree pulita e push, altrimenti
   il guardrail di Codex si blocca.
7. A fine sessione: aggiornare `STATO_DEL_SITO.md` e spuntare la ROADMAP.
8. Tono dei testi UI: dare del tu, sentence case anche nei bottoni, emoji
   solo codificate (✅ ⚠️ 🔒 🟡 ✨), formato date italiano, countdown mono.
9. **Fedeltà visiva:** a fine sessione, confronto a video fianco a fianco
   con il riferimento (prototipo standalone e/o mockup del PDF indicati
   nella sessione). Non serve il pixel-perfect, ma colori, raggi, ombre e
   gerarchia tipografica devono essere quelli dei token — se una scelta
   diverge dal riferimento va motivata in STATO_DEL_SITO.md.
10. **Mobile-first sempre:** ogni schermata si verifica PRIMA a ~390px di
    larghezza (DevTools, iPhone/Android tipico), POI a 1280px. Niente
    scroll orizzontale, target touch ≥44px, testo mai sotto 14px.

## 2. DECISIONI GIÀ PRESE (non riaprire)

- Varianti dal PDF: home 1a (già fatta = stepper UX2) · onboarding 2b (già
  fatto = UX1) · fase 1 3b semaforo+traduttore · fase 2 = 4a (lista per
  scegliere) **+ 4b** (schedina per gestire le scelte) · fase 3 5b
  (prossimi 3 passi sopra i capitoli UX3) · fase 4 6a (zaino) · desktop 7a.
- Font da **Google Fonts CDN** (Bricolage Grotesque 700–800, Plus Jakarta
  Sans 400–700, Space Mono 400/700). Self-hosting rimandato.
- Schedina: **5 slot ordinabili** (l'ordine conta nel bando). Niente drag
  sofisticato: frecce ▲▼ bastano.
- La dark mode non si rimuove e non si ridisegna (regola 5).
- Il motore di compatibilità (pesi 50/30/20) NON si tocca.
- **Mascotte (deciso 04/07):** Wiz è il maghetto nei render 3D forniti da
  Nicola (tartaruga-maghetto, gilet blu con monogramma "E", cappello blu
  con stelle e lune). Sostituiscono `mascot-wiz.svg` (bozza superata) e
  `wiz-hero.png` nelle superfici di prodotto. Il logo-mark (cappello SVG)
  resta per logo e favicon.

## 2-bis. MASCOTTE — SET ESPRESSIONI

File in `design/assets/mascotte/` (cartella creata; le 7 immagini le
salva Nicola — 6 pose + `scena-scrivania-marketing`, generate e approvate
il 04/07). Requisiti: sfondo TRASPARENTE, formato webp (o png) ≤100 KB,
stesso personaggio/outfit in ogni posa. Le immagini arrivano con sfondo
bianco: la rimozione sfondo + conversione webp si fa in BR2 (script
locale, es. Python/PIL — NON servizi online).

| File | Posa | Dove si usa |
|------|------|-------------|
| `wiz-saluto.webp` | accogliente, saluto | default: header, benvenuto onboarding |
| `wiz-pensieroso.webp` | mano al mento, punti interrogativi | onboarding (domande), stati 🟡 "da verificare", stati vuoti |
| `wiz-spiega.webp` | dito alzato, spiega | traduttore "Cosa dice il bando" (fase 1 e checklist) |
| `wiz-esulta.webp` | bacchetta + coriandoli | celebrazioni: checklist completa, "Sei stato preso!", schedina completa |
| `wiz-zaino.webp` | in viaggio con zaino | fase 4 / partenza |
| `wiz-clessidra.webp` | con clessidra, sereno | scadenze vicine / countdown urgenti (mai allarmato) |

Regole d'uso: Wiz presente ma non invadente — UNA posa per schermata,
mai due; le pose sono semantiche (non decorare a caso); la scena
"scrivania" (in rifacimento senza testi) è SOLO per marketing/OG/social,
mai dentro l'app.

## 3. LE SESSIONI

### BR0 — Fondamenta (token, font, asset)

- Integrare i token di `design/tokens/` in `css/style.css` come variabili
  `:root`, **rimappando le variabili esistenti** (es. `--bg-card`,
  `--colore-primario`, ecc.) sui nuovi valori invece di sostituirle in
  tutto il file: così l'aspetto cambia ovunque con modifiche minime e la
  dark mode continua a funzionare rimappando le stesse variabili.
- I font del brand sono GIÀ linkati in `index.html` (v2): verificare solo
  pesi e applicazione (`--font-display` titoli, `--font-body` corpo,
  `--font-mono` countdown/percentuali/codici Erasmus/livelli lingua).
- Nota (assessment 04/07): la palette v2 è già vicina al design system —
  i delta principali sono blu notte `#101b3f`→`#1b377b`, oro
  `#ffd766`→`#ffb627`, scala raggi/ombre. È un riallineamento, non un
  rifacimento.
- Copiare gli SVG di `design/assets/` in `img/`; logo nel header; favicon
  dal logo-mark.
- Sfondo pagina `--bg-page`, card bianche, ombre a tinta blu (mai nero).
- Verifica: nessuna schermata rotta in chiaro E scuro, entrambi gli atenei.

### BR1 — Componenti base (solo CSS)

- Bottoni (primario blu, hover più scuro + ombra, press translateY(1px)
  scale(.985)), badge/chip pill, card raggio 20px + bordo sottile + lift
  al hover, campi form bordo 1.5px + focus ring 4px, checklist con check
  animato (`--ease-bounce`), progress bar.
- Rispettare `prefers-reduced-motion`.

### BR2 — Home e identità

- Header con logo + wordmark; hero **blu notte** (`--bg-night`) con
  stelline dorate, mascotte Wiz e claim "Entri confuso, esci con un
  piano."; badge "Bando 2026/27 aperto" (oro).
- Restyling dello stepper 4 fasi (card fase: icona stato, domanda-guida,
  riassunto, CTA) e della nav inferiore a 3 voci.
- Riferimento: sezione hero/header del prototipo standalone.

### BR3 — Onboarding + Fase 1

- Onboarding: stile "una domanda per schermata, grande e calma" (2b) —
  è già così come flusso, va vestito: titolo display, opzioni come card
  pill grandi, progresso discreto, Wiz presente ma non invadente.
- Fase 1 (3b): la scheda requisiti diventa "semaforo" — tutte le voci
  visibili con stato ✅/⚠️/🔒/🟡, traduttore a scomparsa (▸ "Cosa dice il
  bando") come già previsto da `DISEGNO_UX.md` §4.
- **Fix da assessment 04/07 — coerenza fase 1:** oggi lo stepper marca la
  fase 1 ✅ col solo `profiloOk`, ignorando le auto-verifiche che UX4 ha
  introdotto. Cambiare: fase 1 ✅ quando TUTTE le voci di
  `ZAINO.autoverifica` sono spuntate. Fallback: zaino con profilo ma senza
  spunte → fase 1 "▶ attiva" con riassunto "Verifica i requisiti".

### BR4 — Mete + Schedina (l'unico blocco con logica nuova)

- 4a: card meta compatte (nome, paese, CompatBadge 0–100 in mono, posti,
  lingua richiesta), filtri a chip pill.
- 4b **Schedina**: nuova vista/sezione "Le tue 5 scelte" nel tab Mete —
  5 slot numerati 1–5 riempiti dalle preferite ⭐, riordinabili con ▲▼,
  slot vuoti come invito ("Aggiungi dalla lista"). Stato per slot
  (✅/⚠️/🟡 ereditato dalla meta).
- Zaino: `ZAINO.schedina: [idMeta, ...]` (max 5, ordinata). Fallback: se
  assente, si costruisce dalle preferite esistenti nell'ordine in cui
  sono. Le preferite ⭐ restano il meccanismo di raccolta (4a e 4b
  coesistono: la lista per scegliere, la schedina per gestire).
- La condizione "fase 2 fatta" (≥1 preferita) non cambia.
- **Fix da assessment 04/07 — banner lingue contestuale:** previsto da
  `DISEGNO_UX.md` §3/§5 ma MAI implementato. Finché `profilo.lingue` è
  vuoto, in cima al tab Mete: "Aggiungi le tue lingue per vedere quali
  mete sono davvero compatibili" + link al form profilo. Senza, lo
  studente vede solo 🟡 e non capisce come sbloccarle.

### BR5 — Candidatura: "Ora tocca a te" (5b)

- Sopra i capitoli cronologici (UX3): blocco "**I prossimi 3 passi**" —
  le prime 3 voci non spuntate in ordine cronologico, grandi e spuntabili
  direttamente. I capitoli sotto restano, ma quelli non imminenti partono
  ripiegati (`<details>` o equivalente).
- Nessun cambio ai dati: è una presentazione derivata da ciò che UX3 già
  calcola. Countdown e .ics restano dove sono.

### BR6 — Zaino (6a) + Desktop (7a)

- Fase 4: la checklist post-selezione presentata come "**Lo zaino**" con
  tre capitoli: Prima / Durante / Dopo. Mappare le 5 fasi esistenti sui
  tre capitoli via un campo dati (`gruppoZaino`) con fallback (senza
  campo → "Prima"). Celebrare l'ingresso in fase 4 (superficie blu notte).
- Desktop (min-width ~1024px): layout a 2 colonne — percorso/contenuto a
  sinistra, colonna azione a destra (prossimo passo, countdown, schedina
  compatta). Mobile resta INVARIATO. Riferimento: 7a nel PDF.
- **Navigazione desktop:** su ≥1024px la nav inferiore mobile scompare e
  le stesse 3 voci (Percorso · Mete · Candidatura/Partenza) vanno
  nell'header, a destra del logo (come nel mockup 7a). Stesso markup se
  possibile (riposizionato via CSS), stessa logica `data-tab`; nessuna
  seconda nav da mantenere in JS.
- Consolidare i breakpoint esistenti (oggi 480/700/768/1024): usare 768px
  e 1024px come soglie canoniche, migrando le regole sparse.

### BR7 — QA e chiusura ondata

- Regressione completa: onboarding da localStorage pulito, zaino vecchio
  simulato, entrambi gli atenei, chiaro/scuro, mobile/desktop, export
  .ics, riordino schedina, `prefers-reduced-motion`.
- **Fix da assessment 04/07:** aggiornare meta description e tag OG di
  `index.html` — oggi dicono "per studenti Ca' Foscari … 249 mete", ma il
  sito è multi-ateneo e le mete sono molte di più. Testo neutro rispetto
  all'ateneo, numero calcolato o tondo ("oltre 800 mete").
- Decidere la sorte della pagina Timeline nascosta (link "Vedi tutte le
  scadenze ⏳"): duplicava la vista Candidatura; se nel QA risulta ridondante
  o confusiva, rimuovere link e pagina in UX6/correzioni.
- Aggiornare `STATO_DEL_SITO.md`, ROADMAP, e la mappa dei file (nuova
  cartella `design/`).

## 4. COSA RESTA FUORI (non riaprire)

Account/login, backend, notifiche, app native, framework, build step,
quiz idoneità (3a — scartato), onboarding-chat (2a — scartato), home
"una cosa alla volta" (1b — scartata), rimozione o ridisegno dark mode.

## 5. PARALLELISMI

- UX5 (contenuti traduttore) è lavoro di Nicola sui soli file dati: può
  procedere in qualsiasi momento, anche tra una sessione BR e l'altra.
- UX6 (test col fratello) parte SOLO dopo BR7.
- Codex continua sull'espansione mete: tocca solo `js/atenei/**` e
  `mappatura-stato.json` — nessuna sovrapposizione con i file di questa
  ondata, ma serve worktree pulita tra le sessioni (regola 6).
