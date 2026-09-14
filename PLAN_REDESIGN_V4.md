# Plan: Redesign v4 — rifinitura visiva dentro l'identità Ibrida
_Locked via grill — Claude Code + Nicola, 2026-09-14. Rev. 3 — APPROVED da Codex (gpt-5.6-sol) al round 3. Log: `PLAN_REDESIGN_V4-LOG.md`._

> Non sostituisce `PLAN_REDESIGN_V3.md` (struttura, router, flussi restano) né
> `PLAN.md` (cantiere DATI). Tocca solo lo strato visivo.

## Goal
Alzare la qualità visiva del sito (tipografia, gerarchia, spaziature,
componenti) **senza** cambiare identità (Direzione C "Ibrida": indigo primario,
ambra accento, neutri caldi, raggi 20/16/12/9, superfici "inchiostro" `--night-*`
per nav/countdown/copertina, Wiz guida nei momenti chiave) e **senza** toccare
architettura dell'informazione, DOM semantico o flussi. **Solo tema giorno**
(il tema notte è stato rimosso in R1.1 e resta fuori da v4).
Si procede **sistema prima, schermate dopo**; la direzione di rifinitura si
sceglie da un'**esplorazione leggera a 3 varianti** su canvas `/design`.

## Approach

### Fase 0 — Base pulita e baseline (prima di qualsiasi modifica visiva)
1. **Gate obbligatorio — isolamento**: il cantiere dati ha molte modifiche non
   committate. Il redesign NON parte nella cartella sporca: si crea un
   `git worktree` separato su branch `redesign-v4` da un **hash di base
   annotato** (commit pulito). Nessuna modifica dati entra nel branch; commit
   atomici (1 per componente/schermata). Integrazione con il cantiere dati
   solo via merge/rebase esplicito a fine ondata.
2. **Fonte di verità unica dei token**: oggi il sito carica solo `css/style.css`
   e `design/tokens/colors.css` diverge per nomi e valori. Decisione: il runtime
   è `:root` di `css/style.css`; `design/tokens/*.css` viene riallineato come
   copia documentale generata/controllata da uno script di confronto
   (`scripts/confronta-token.mjs`) che fallisce su divergenze.
3. **Censimento**: (a) i 74 colori hex hardcoded in `style.css` → tabella
   hex→token semantico (eccezioni motivate); (b) contratto dei test: per ogni
   locator Playwright (id, classi come `.schedina-slot`, `.benvenuto-scelta`,
   `.la-recognition`, ruoli/aria-label) si annota cosa deve restare.
4. **Baseline visiva**: screenshot Playwright del percorso Bruno e delle 4
   schede + LA, su entrambi gli atenei, a 390 e 1280 → `collaudo/redesign-v4/baseline/`
   (archivio di confronto, non asserzione bloccante).
5. **Fixture limite** per canvas e verifica: nome università/città più lunghi
   reali, meta senza catalogo/lingua, zero risultati filtro, schedina piena
   (5), incompatibilità linguistica rossa, scadenza imminente.

### Fase 1 — Esplorazione `/design` (leggera)
Per ciascuna variante:
- **V1 "Guida calda"**: ariosa, Bricolage protagonista, Wiz presente (hero + stati vuoti + conferme), ambra su CTA, missione e scadenze.
- **V2 "Strumento chiaro"**: compatta, titoli sobri, dati/semafori protagonisti, Wiz solo in onboarding, ambra solo scadenze e CTA primaria.
- **V3 "Equilibrio"**: densità media, Wiz solo onboarding + stati vuoti, ambra su CTA e scadenze.

Artboard, esattamente **3 per variante = 9 totali**:
1. **Style tile**: scala tipografica, bottoni (default/hover/focus/disabled),
   chip, card meta, semaforo (colore + testo/icona), countdown, input/select.
2. **Mete a 390px** (schermata stress) con fixture limite.
3. **LA Workspace a 1280px**, obbligatorio per tutte le varianti (stress test di densità).

La canvas usa **i valori reali di `:root` di `css/style.css`**: il blocco token
viene estratto da script (`scripts/confronta-token.mjs --estrai`) e incollato
verbatim nella canvas; lo stesso script confronta poi il blocco presente nella
canvas pubblicata/esportata e fallisce su divergenze. Varia solo tipografia,
spaziatura, densità, uso di Wiz/ambra.

### Fase 2 — Scelta e specifica
6. Nicola sceglie. Ibridi ammessi **solo asse per asse** (densità / tipografia /
   Wiz+ambra), poi si ricompone un foglio componenti completo.
7. Per la direzione scelta si producono gli artboard mancanti (Oggi, onboarding,
   Percorso, Profilo, LA) e la **scheda componente**: token usati, misure,
   stati (hover/focus/active/disabled/errore/vuoto/overflow), wrapping,
   comportamento a 320/390/768/1280, regole d'uso di Wiz e ambra (contesti
   ammessi e vietati). Registrata in `DISEGNO_BRAND.md` come nuova sezione.
8. Nuovi token (scala tipografica, spaziature, densità) entrano **una sola
   volta** in `:root` di `style.css`, poi riallineati via script.

### Fase 3 — Ondata sistema
9. Sostituzione hex→token secondo il censimento.
10. Rifinitura dei componenti condivisi in `css/style.css`: nessun nuovo
    `!important`; nuove regole in sezioni ordinate per componente, specificità
    ≤ una classe + stato; DOM, ruoli, aria e classi del contratto test invariati.
    Se una classe di presentazione deve cambiare, si aggiunge prima un
    `data-testid` e si migra il test nello stesso commit.

### Fase 4 — Ondata schermate
11. Ordine: onboarding → Oggi → Mete (percorso Bruno) → Percorso → Profilo → LA
    Workspace. Il LA però è già **stress test** in Fase 1 (artboard desktop) per
    non invalidare la densità a fine lavoro.

### Verifica (gate a ogni commit di ondata)
- `node --check` sui JS toccati; **intera** suite unit + Playwright verde
  (non un numero fisso).
- Playwright fallisce su `pageerror`, errori console inattesi e risposte 4xx/5xx
  (hook aggiunto in Fase 0 se assente).
- Confronto con baseline e canvas: Chromium a 320/390/768/1280, entrambi gli
  atenei, fixture limite; WebKit a 390 per il percorso Bruno.
- Accessibilità: contrasto calcolato e registrato per ogni coppia testo/sfondo
  negli stati; focus visibile; tastiera; zoom testo 200% senza scroll
  orizzontale; target ≥44px; `prefers-reduced-motion`; semaforo mai solo colore.
- Performance: script perf esistente verde + peso CSS e font misurati prima/dopo
  (nessun nuovo peso/famiglia di font senza motivazione); budget asset nuovi ≤100 KB.
- Rollback: ogni commit di ondata è verificato prima del successivo.

## Key decisions & tradeoffs
- **Rifinitura, non nuova identità**: palette e ruolo di Wiz non si riaprono.
- **Solo tema giorno**: il ritorno del notte è un progetto separato.
- **Sistema prima delle schermate**; LA usato come stress test già in esplorazione.
- **Esplorazione leggera (9 artboard)**: il resto si disegna solo per la direzione scelta.
- **Runtime token = `:root` di `style.css`**; i file in `design/tokens/` sono allineati da script, non modificati a mano in parallelo.
- **Nessun framework/build step**.
- **DOM/ruoli/classi del contratto test invariati**; migrazione a `data-testid` solo dove serve, non come progetto a sé.

## Rejected from Codex review (with reason)
- Migrare **tutti** i test a `data-testid` prima di iniziare: scope creep; si migra solo il selettore toccato.
- Lighthouse CI con soglie LCP/INP: sito statico piccolo con script perf già esistente; si misura peso CSS/font.
- Firefox e forced-colors come gate: pubblico mobile; Chromium + WebKit bastano come gate, il resto è controllo occasionale.
- Snapshot visivi come asserzioni bloccanti: fragili su font CDN; tenuti come baseline di confronto.

## Risks / open questions
- Il worktree richiede un commit pulito di base: quale commit (f953939 o uno nuovo con il lavoro dati) lo decide Nicola prima di Fase 0.
- Test con persone reali (Bruno) non fatto: il redesign non deve bloccarlo.

## Out of scope
- Architettura dell'informazione, navigazione, flussi, router, DOM semantico.
- Tema notte; nuova palette; nuova mascotte.
- Dati delle mete e pipeline.
