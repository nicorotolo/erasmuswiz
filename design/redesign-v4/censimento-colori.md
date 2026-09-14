# Censimento colori esadecimali — `css/style.css`

_Redesign v4, Fase 0 punto 3a — 2026-09-14. Base: branch `redesign-v4` @ `f8bf58e`.
Documento di lavoro per la Fase 3 (sostituzione hex→token). **In Fase 0 non si
sostituisce nulla.** I numeri di riga si riferiscono a quel commit._

Conteggio (`grep -oE "#[0-9a-fA-F]{3,8}\b" css/style.css`): **74 occorrenze**.

| Gruppo | Occorrenze | Azione in Fase 3 |
|---|---:|---|
| A. Definizioni dei token in `:root` (righe 15–135) | 31 | Nessuna: sono la fonte di verità |
| B. Dentro commenti (motivazioni di contrasto) | 6 | Nessuna: citano valori scartati di proposito |
| C. Uso reale nelle regole | 37 | Sostituire secondo la tabella sotto |

Fuori dal perimetro del conteggio ma da tenere d'occhio in Fase 3: i colori
`rgba(...)` scritti a mano (ombre rosse di `.missione-urgente`, alone
`rgba(251,191,36,.26)` del focus oro, `rgba(255,255,255,.8)` della scena
d'ingresso). Non sono hex, quindi non sono nei 74; vanno censiti quando si
toccano quei componenti.

## B. Occorrenze in commento (non si toccano)

| Riga | Valore | Perché resta |
|---:|---|---|
| 251 | `#A5B4FC` | Spiega il contrasto di `--night-muted` |
| 1081, 1082 | `#10B981` | Verde del canvas rifiutato (bianco sopra = 2,6:1) |
| 1083 | `#0f7a3a` | Cita `--green` come alternativa corretta |
| 1387 | `#059669` | Verde del canvas rifiutato (3,4:1) |
| 1388 | `#0f7a3a` | Cita `--green` |

## C. Tabella hex → token semantico

Legenda stato: **=** il token esiste con valore identico (sostituzione a costo
visivo zero) · **≈** esiste un token vicino, la sostituzione cambia il colore di
poco e va vista sulla baseline · **nuovo** serve un token nuovo in `:root`
(Fase 2/3, una sola volta) · **eccezione** resta letterale, con motivo.

### Testo/icona bianchi su riempimento (12)

| Riga | Selettore | Hex | Token proposto | Stato |
|---:|---|---|---|---|
| 752 | `.btn-primary` | `#fff` | `--text-on-fill` (nuovo, = `#ffffff`) | nuovo |
| 1001 | `.toggle-fase-btn.fase-attiva` | `#fff` | `--text-on-fill` | nuovo |
| 1085 | `.stazione-fatta .stazione-punto` | `#fff` | `--text-on-fill` | nuovo |
| 1086 | `.stazione-attiva .stazione-punto` | `#fff` | `--text-on-fill` | nuovo |
| 1417 | `.chip-filtro.attivo` | `#fff` | `--text-on-fill` | nuovo |
| 1815 | `.scelta-percorso-btn` | `#fff` | `--text-on-fill` | nuovo |
| 1857 | `.mappa-pin-cluster .punto` | `#fff` | `--text-on-fill` | nuovo |
| 1863 | `.mappa-pin-ateneo .punto::after` (fill) | `#fff` | `--text-on-fill` | nuovo |
| 2019 | `.benvenuto-passo[data-attivo] .n` | `#fff` | `--text-on-fill` | nuovo |
| 2020 | `.benvenuto-passo[data-fatto] .n` | `#fff` | `--text-on-fill` | nuovo |
| 2220 | `.dett-link.primario` | `#fff` | `--text-on-fill` | nuovo |
| 2853 | `.guida-wrap a.btn-primary` | `#fff` | `--text-on-fill` | nuovo |

Motivo del token nuovo invece di `--night-text`: `--night-text` significa
"testo su inchiostro"; qui il fondo è indigo, verde o rosso. Stesso valore,
ruolo diverso: tenerli separati evita che un ritocco dell'inchiostro sbianchi i
bottoni.

### Testo bianco su superficie inchiostro (7)

| Riga | Selettore | Hex | Token proposto | Stato |
|---:|---|---|---|---|
| 1769 | `.celebrazione-titolo` | `#fff` | `--night-text` | = |
| 2073 | `.modo-scena .benvenuto-titolo` | `#fff` | `--night-text` | = |
| 2686 | `.modo-scena .benvenuto-claim` | `#fff` | `--night-text` | = |
| 2842 | `.guida-nav` | `#fff` | `--night-text` | = |
| 2844 | `.guida-nav a` | `#fff` | `--night-text` | = |
| 2884 | `.la-page-header` | `#fff` | `--night-text` | = |
| 2889 | `.la-back-link` | `#fff` | `--night-text` | = |

### Tinta indigo soffice (6)

| Riga | Selettore | Hex | Token proposto | Stato |
|---:|---|---|---|---|
| 722 | `.missione-tag` | `#EEF2FF` | `--primary-soft` (nuovo, = `--indigo-50`) | nuovo |
| 792 | `.btn-secondary:hover` | `#EEF2FF` | `--primary-soft` | nuovo |
| 956 | `.voce-checklist-v2:hover` | `#EEF2FF` | `--primary-soft` | nuovo |
| 962 | `.voce-checklist-v2.attiva` | `#EEF2FF` | `--primary-soft` | nuovo |
| 1119 | `.stazione-attiva .stazione-stato` | `#EEF2FF` | `--primary-soft` | nuovo |
| 2219 | `.dett-link:hover` | `#EEF2FF` | `--primary-soft` | nuovo |

Nota: **non** usare `--bg-card-hover` (`#F3F1FA`, neutro caldo): è un'altra
tinta, e l'hover dei secondari deve restare "indigo".

### Stati hover / varianti di colori esistenti (4)

| Riga | Selettore | Hex | Token proposto | Stato |
|---:|---|---|---|---|
| 800 | `.missione-urgente .btn-primary:hover` | `#9c1f14` | `--red-hover` (nuovo) | nuovo |
| 1496 | `.schedina-rimuovi:hover` | `#fbdada` | `--red-bg-hover` (nuovo) | nuovo |
| 1785 | `.celebrazione-btn:hover` | `#fcd34d` | `--gold-hover` (nuovo, = `--amber-300`) | nuovo |
| 904 | `.prep-barra-fill, .barra-riempimento` (fine gradiente) | `#6366F1` | `--primary-light` (nuovo, = `--indigo-500`) | nuovo |

### Superfici e testi su inchiostro (5)

| Riga | Selettore | Hex | Token proposto | Stato |
|---:|---|---|---|---|
| 1753 | `.celebrazione` gradiente radiale, centro | `#2A2652` | `--night-bg-glow` (nuovo) | nuovo |
| 1771 | `.celebrazione-sub` | `#C7C3E0` | `--night-text-soft` (nuovo) | nuovo |
| 2888 | `.la-page-header > p` | `#E9E7F4` | `--night-text-soft` | ≈ (unifica due grigi chiari molto vicini: verificare contrasto ≥4.5:1 su `--night-bg`) |
| 2886 | `.la-page-kicker` | `#E8D992` | `--night-kicker` (nuovo) oppure `--gold-border` `#FDE68A` | ≈ (decisione in Fase 2: è un oro spento usato solo qui) |
| 1836 | `.mappa-terra-casa` (fill SVG) | `#C7D2FE` | `--primary-tint` (nuovo, = `--indigo-200`) | nuovo |

### Eccezioni motivate (3)

| Riga | Selettore | Hex | Motivo |
|---:|---|---|---|
| 210 | `body` gradiente | `#FDFDFB` | Punto iniziale di una sfumatura quasi impercettibile verso `--bg-app`: un token dedicato non ha altro uso. Resta letterale **oppure** diventa `--bg-app-top` se la Fase 2 ritocca il fondo. |
| 836 | `.missione-urgente .countdown-dot` | `#ff7a6e` | Pallino pulsante su superficie inchiostro: `--red` (`#b42318`) su `--night-bg` è quasi invisibile. Serve un rosso chiaro "da notte"; se ricompare altrove diventa `--night-red`. L'alone `rgba(255,122,110,.30)` è lo stesso colore. |
| 2982 | `.la-mismatch-list` | `#7a4b00` | È il **fallback** di `var(--warning-text, …)`, e `--warning-text` **non è definito** da nessuna parte: oggi vince sempre il fallback. In Fase 3 sostituire con `var(--amber)` (`#9a5b08`, già il testo "attenzione") — piccolo cambio di tinta, da controllare sulla baseline LA. Segnalato come difetto latente, non come eccezione permanente. |

## Riepilogo token nuovi proposti

Tutti entrano **una sola volta** in `:root` di `css/style.css` (Fase 2/3) e poi
in `design/tokens/colors.css` tramite `scripts/confronta-token.mjs`.

| Token | Valore | Occorrenze coperte |
|---|---|---:|
| `--text-on-fill` | `#ffffff` | 12 |
| `--primary-soft` | `#EEF2FF` | 6 |
| `--primary-light` | `#6366F1` | 1 |
| `--primary-tint` | `#C7D2FE` | 1 |
| `--red-hover` | `#9c1f14` | 1 |
| `--red-bg-hover` | `#fbdada` | 1 |
| `--gold-hover` | `#FCD34D` | 1 |
| `--night-bg-glow` | `#2A2652` | 1 |
| `--night-text-soft` | `#C7C3E0` (o `#E9E7F4`, da decidere) | 2 |
| `--night-kicker` | `#E8D992` (o riuso `--gold-border`) | 1 |

Con token esistenti (`--night-text`): 7. Eccezioni: 3.

## Controllo del conteggio

Verificato con `grep -noE` (una sola occorrenza per riga ovunque):
31 in `:root` + 6 in commento + 37 in regole = **74**.
Gruppo C: 12 + 7 + 6 + 4 + 5 + 3 = **37**.
Righe in regola: 210, 722, 752, 792, 800, 836, 904, 956, 962, 1001, 1085,
1086, 1119, 1417, 1496, 1753, 1769, 1771, 1785, 1815, 1836, 1857, 1863, 2019,
2020, 2073, 2219, 2220, 2686, 2842, 2844, 2853, 2884, 2886, 2888, 2889, 2982.
