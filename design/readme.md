# ErasmusWiz — Design System

**I maghi dell'Erasmus.** ErasmusWiz trasforma la domanda Erasmus — un labirinto di PDF istituzionali, scadenze sparse e burocratese — in un piano chiaro e personale. Lo studente inserisce i suoi dati (università, dipartimento, media, lingue) e ottiene una realtà filtrata: solo le mete accessibili a lui, con un **punteggio di compatibilità onesto**, una **timeline con countdown reali** e una **checklist passo-passo**.

> Lo studente entra confuso. Esce con un piano.

## Prodotto e contesto

- **Prodotto**: web app responsive (mobile-first) per studenti universitari italiani, 20–25 anni. Fase 1: studenti di Ca' Foscari (Venezia); modello da replicare su tutto il sistema universitario italiano.
- **Blocchi del cruscotto**: ① Idoneità (requisiti del bando, sì/no onesti) ② Mete compatibili (punteggio 0–100 + fasce ✅/⚠️/🔒) ③ Timeline con countdown live ④ Checklist salvata in locale.
- **Mascotte**: *Wiz*, un maghetto giovane e amichevole — ispirazione "mago dei videogiochi classici" ma originale. La magia (stelle, scintille, oro) rappresenta il semplificare la complessità.

### Fonti

- Codebase: cartella locale `3. ErasmusWiz/` (HTML/CSS/JS vanilla; `index.html`, `css/style.css`, `js/app.js`, dati in `js/dati-*.js`, documenti `PROGETTO_ERASMUS.md`, `STATO_DEL_SITO.md`). Montata in sola lettura via File System Access; richiedere ri-attacco se scollegata.
- Brief del brand: testo fornito dal team (giugno 2026) — giovanile ma serio, blu chiaro, mascotte maghetto.
- Il codebase originale è volutamente "senza brand" (grigio università): questo design system **definisce** il brand, non lo ricostruisce.

## CONTENT FUNDAMENTALS

**Tono**: competente ma umano. Un amico che ha già fatto l'Erasmus e ti spiega le trappole senza farti sentire stupido. Mai ansia istituzionale, mai burocratese.

- **Lingua**: italiano. Dare del **tu**, sempre ("la tua media", "le tue mete", "sei idoneo?").
- **Frasi brevi e concrete.** Dire sempre *cosa fare adesso, entro quando, e se sei in ritardo*. Mai muri di testo.
- **Onestà prima di tutto**: niente percentuali finte. Se un dato non è verificabile si dice ("Requisito lingua non dichiarato dall'ateneo: verifica sulla scheda"). I blocchi si spiegano e si indica la via d'uscita ("Richiede la magistrale: riprova l'anno prossimo").
- **Casing**: sentence case ovunque, anche nei titoli e nei bottoni ("Calcola compatibilità", non "Calcola Compatibilità"). MAIUSCOLO solo per micro-etichette di metadati (POSTI DISPONIBILI).
- **Emoji**: sì, ma funzionali e codificate, non decorative: ✅ compatibile · ⚠️ con riserve · 🔒 bloccata · 🟡 da verificare · ✨ magia/azione speciale. Non si aggiungono emoji a caso nei testi.
- **Numeri e date**: formato italiano ("2 — 25 feb 2026", "entro le 13:00"), countdown in formato `39g 23h 59m 57s` (mono).
- **Microcopy d'esempio**: "Entri confuso, esci con un piano." · "Mancano 12g 4h alla scadenza." · "Fatto! Un passo in meno." · "Questa meta richiede il B2 di francese: ti manca solo quello."

## VISUAL FOUNDATIONS

- **Colori**: blu primario chiaro e amichevole (`--blue-500 #3d7dff`), mai blu istituzionale scuro come tinta dominante. Oro/ambra (`--gold-400 #ffb627`) è l'accento "magico": stelle, scintille, evidenze, CTA speciali. Neutri *ink* (slate con un soffio di blu). Tre fasce semantiche oneste: verde ok / ambra riserve / rosso bloccato, sempre in versione soft (sfondo tinta + bordo + testo scuro).
- **Sfondi**: pagina azzurrina (`--bg-page #f3f6fc`), card bianche. Una sola superficie scura: il **blu notte** (`--bg-night #1b377b`) per momenti "magici" (hero, celebrazioni), con stelline dorate puntiformi. Niente gradienti viola, niente pattern invadenti.
- **Tipografia**: Bricolage Grotesque (display/titoli, 700–800, tracking −0.02em), Plus Jakarta Sans (UI/testo), Space Mono (countdown, percentuali, codici Erasmus, livelli lingua). Scala generosa, mobile-first.
- **Spaziatura**: scala 4px (`--space-*`). Contenitore max 1120px.
- **Raggi**: morbidi e giovanili — 14px bottoni/campi, 20px card, 28px superfici grandi, pill per chip/countdown/badge.
- **Ombre**: sempre a tinta blu (`rgba(27,55,123,…)`), mai nero puro; `--shadow-gold` per l'evidenza magica. Card: bordo sottile + ombra sm; al passaggio si sollevano (translateY −3px + ombra lg).
- **Animazioni**: gentili e veloci (120–360ms), easing `--ease-out`; un leggero `--ease-bounce` solo per i momenti di gioia (check della checklist). Pallino pulsante sui countdown urgenti. Rispettare `prefers-reduced-motion`.
- **Hover**: bottoni → tinta più scura + ombra più grande; card → lift; righe checklist → sfondo blu-50. **Press**: translateY(1px) + scale(0.985).
- **Bordi**: sottili (`--border-subtle`), 1.5px sui campi form; focus ring blu a 4px (`--shadow-focus`).
- **Trasparenza/blur**: non usati; le superfici sono solide.
- **Immagini**: il prodotto non usa fotografie; l'immaginario è illustrativo (mascotte, stelle). Se servono foto (città di destinazione), calde e luminose.

## ICONOGRAPHY

- **Stato = emoji codificate** (✅ ⚠️ 🔒 🟡 ✨): sono parte del linguaggio del prodotto, ereditate dal codebase originale.
- **Icone UI** (frecce, chevron, check): SVG stroke inline, 2.2–3.2 di spessore, round cap — coerenti con i componenti (`ChecklistItem`, `Field`). Per set estesi usare **Lucide** da CDN (stesso stile: stroke, round).
- **Brand**: `assets/logo-mark.svg` (cappello), `assets/mascot-wiz.svg` (Wiz), `assets/icon-star.svg`, `assets/icon-sparkle.svg`. Disponibili anche come componenti React (`Logo`, `LogoMark`, `Mascot`) — SVG inline autosufficienti.
- Niente icon font; niente icone PNG.

## Indice

| Percorso | Contenuto |
|---|---|
| `styles.css` | Entry point CSS (solo `@import`) |
| `tokens/` | `colors.css` · `typography.css` · `spacing.css` · `fonts.css` (Google Fonts) · `base.css` (reset) |
| `assets/` | logo-mark, mascot-wiz, icon-star, icon-sparkle (SVG) |
| `components/core/` | `Button` · `Badge` · `Card` · `Field` · `ProgressBar` · `ChecklistItem` |
| `components/product/` | `CompatBadge` · `Countdown` · `TimelineStep` · `MetaCard` |
| `components/brand/` | `Logo` / `LogoMark` · `Mascot` |
| `guidelines/` | Card specimen di colori, tipo, spaziatura, brand |
| `ui_kits/webapp/` | Cruscotto interattivo (ricreazione della web app) |
| `SKILL.md` | Istruzioni per agenti (Claude Code & co.) |

**Note**: i font sono caricati da Google Fonts (CDN) — per produzione self-hostare i woff2. Logo e mascotte sono **bozze del designer** da validare/rifinire con un illustratore.
