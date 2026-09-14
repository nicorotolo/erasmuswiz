# Contratto dei selettori — test Playwright (`test/ui/*.spec.cjs`)

_Redesign v4, Fase 0 punto 3b — 2026-09-14. Base: branch `redesign-v4` @ `f8bf58e`
(10 spec, 101 prove verdi)._

**Regola del redesign (PLAN_REDESIGN_V4 §Fase 3, punto 10):** tutto ciò che è
elencato qui resta com'è — id, classi, attributi `data-*`, ruoli, nomi
accessibili, testi esatti e relazioni DOM. Se una classe di presentazione deve
cambiare, **prima** si aggiunge un `data-testid`, e il test si migra **nello
stesso commit**. Non si rinomina "in blocco".

Il redesign tocca il CSS: le voci marcate **⚠ CSS** sono asserzioni che dipendono
dalla resa (geometria, visibilità, focus), quindi le può rompere anche un
cambiamento solo visivo, senza toccare il DOM. Sono le più delicate.

Legenda colonne: **Tipo** = id · classe · data · ruolo (getByRole) · aria
(attributo `aria-*`/`aria-label`) · testo (getByText / toHaveText esatto) ·
title (getByTitle) · geo (misura di layout).

---

## 1. Guscio: barra, navigazione, Menu (drawer)

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `.nav-item[data-tab]` | classe+data | **Esattamente 3** voci, in quest'ordine di `.nav-label`: «Mete», «Home», «Learning Agreement» | pre-bruno:109-110 |
| `.nav-item[data-tab="oggi"\|"mete"\|"learning-agreement"]` | data | Cliccabile; la voce attiva ha classe che contiene `attivo` | router, v3-entrata, v5, v6a |
| `.nav-item[data-tab="percorso"]` | data | **Deve NON esistere** (count 0): Percorso non è voce di nav | pre-bruno:114 |
| `.nav-item[data-tab] .nav-label` | classe | Figlio della voce, contiene il testo della voce | pre-bruno:110 |
| `#barra-alto #btn-drawer` | id | Il bottone Menu è **dentro** `#barra-alto` | pre-bruno:117 |
| `#btn-drawer` | id+aria | `aria-expanded` passa `false`→`true`→`false` | pre-bruno:151-177 |
| ⚠ CSS `#btn-drawer` geo | geo | A 375/390/768/1280: `top < 80`, distanza dal bordo destro `< 60px`, **non sovrapposto** a nessuna `.nav-item`, niente scroll orizzontale | pre-bruno:118-133 |
| `#drawer`, `#drawer-chiudi` | id | Pannello e bottone di chiusura | pre-bruno:152-175 |
| `[data-drawer-goto="percorso"\|"profilo"]` | data | Voci del Menu che portano alle rotte | router:99-105, pre-bruno:153, v5, v6a |
| `#drawer-cambia-ateneo` | id | Voce del Menu | router:217, 275 |
| `#tab-oggi`, `#tab-mete`, `#tab-percorso`, `#tab-profilo`, `#tab-learning-agreement` | id | Contenitori di sezione; visibili/nascosti per rotta; il tab attivo ha classe `attivo` | router, tutti |
| ⚠ CSS `#tab-mete` focus | geo | Al clic col mouse la sezione **non** è `:focus-visible`; al primo Tab l'elemento a fuoco è `:focus-visible` e ha **outline con larghezza > 0 oppure box-shadow ≠ none** | router:225-247 |
| ⚠ CSS nav | geo | Su Oggi/Mete/Percorso/Profilo a 390/768/1280: nav presente, visibile, `position: fixed` | router:352-380 |
| ⚠ CSS `html` | geo | `scroll-behavior` letto via `getComputedStyle` (rotta con fuoco) | router:278 |
| `body` classe | classe | `body` porta `modo-entrata` durante l'ingresso e la perde dopo | pre-bruno:598, v3-entrata:214-249 |

## 2. Invarianti di layout per sezione (router.spec «diff visivo nullo»)

Usa `design/redesign-2026-07/baseline/probe-invarianti.js`. **⚠ CSS, tutto.** A
390/768/1280, per ciascuna sezione: `overflowX = 0`, nessun elemento sporgente,
**nessun testo tagliato**, **nessuna card sovrapposta**, e i blocchi figli
diretti compaiono **in quest'ordine** (il selettore di ogni blocco deve
*iniziare* con):

| Sezione | Ordine dei blocchi |
|---|---|
| Oggi | `div.home-header` → `div#missione-card.missione-card` → `div.percorso-wrap` |
| Mete | `div.sezione-header` → `div#profilo-strip` → `div.cerca-mete-barra` → `div#filtri-mete-chip` → `div#card-mappa-mete` → `div#sezione-preferite` → `div#annunci-scelte` → `div#griglia-mete-v2` |
| Percorso | `div.sezione-header` → `ol.stazioni` |
| Profilo | `div.sezione-header` → `form#form-profilo-v2` |

Conseguenza pratica: **il redesign non può aggiungere wrapper `div` fra la
sezione e questi blocchi**, né cambiare il tag (`div`→`section`), né togliere le
classi/id che ne formano il selettore.

## 3. Onboarding / Benvenuto (`#home-benvenuto`)

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `#home-benvenuto` | id+classe | Porta la classe `modo-scena` nella scena d'ingresso, la perde dopo il CTA | v3-entrata:102-203, la-v2:110, pre-bruno:597 |
| `#benvenuto-inizia` | id | CTA della scena | pre-bruno (8×) |
| `#benvenuto-scelte` | id | Contenitore delle domande; `data-coda-sveglia="true"` nella coda | pre-bruno, v5:79-80 |
| `#benvenuto-scelte .benvenuto-scelta` | classe | **Discendente** di `#benvenuto-scelte`; filtrata con `hasText` («Ca' Foscari», «Sapienza», «Triennale», «Magistrale», «Fatto») | pre-bruno, v3-entrata, v5 |
| `#benvenuto-scelte .benvenuto-scelte-riga .benvenuto-scelta` | classe | La scelta deve stare **dentro** `.benvenuto-scelte-riga` | pre-bruno:92, v5:227 |
| `#benvenuto-scelte select` | tag | Due `select` (lingua, livello), in quest'ordine | v5:234-235 |
| `#benvenuto-scelte [data-fase='esplorando'\|'selezionato']` | data | Scelte di fase | pre-bruno, v5 |
| `#benvenuto-scelte .benvenuto-landing-titolo` | classe | ⚠ CSS: `top ≥ 0` nella coda a 375×812 | v5:273 |
| `.benvenuto-passo[data-passo='3']` | classe+data | Ha `data-attivo` | v3-entrata:157-158 |
| `.benvenuto-manuale summary` | classe | `<details>` con `summary` cliccabile | pre-bruno:88, 261, 286 |
| `#benvenuto-facolta-manuale` | id | Input con `maxlength` | pre-bruno:89, 288 |
| `[data-facolta-manuale='conferma']` | data | Bottone | pre-bruno:90 |
| `#benvenuto-errore-salvataggio`, `[data-riprova-onboarding='1']` | id, data | Stato di salvataggio fallito | pre-bruno:566-583 |
| `[data-ripresa-onboarding='true']`, `[data-ripresa='riprendi'\|'ricomincia']` | data | Ripresa onboarding | pre-bruno:537-546 |
| `[data-lavoro='primo'\|'modifica']`, `[data-ciclo='2024/25'\|'2026/27']` | data | `data-ciclo` storico ha `data-storico` | pre-bruno |
| `[data-esito-mete='si'\|'salta']` | data | ⚠ CSS: a 375×812 l'ultimo bottone (`salta`) ha `bottom ≤ innerHeight` e `top ≥ 0` | v3-entrata, v5:262-265 |
| `[data-sveglia='si'\|'no']` | data | ⚠ CSS: `no` con `bottom ≤ innerHeight` a 375×812 | v3-entrata:134, v5 |
| `closest("#home-benvenuto")` | relazione | Elementi della scena sono **discendenti** di `#home-benvenuto` | v3-entrata:68 |

## 4. Mappa

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `#mappa-benvenuto .mappa-pin`, `#mappa-mete .mappa-pin` | id+classe | Pin **discendenti** della mappa; ricreati al resize | v3-entrata:344-428 |
| `.mappa-pin[tabindex='-1']` / `:not([tabindex='-1'])` | attr | Pin fuori dalla sequenza Tab vs raggiungibili | v3-entrata:109-121 |
| `.mappa-pin-layer` | classe | `aria-hidden` verificato | v3-entrata:122 |
| `#mappa-tooltip` | id | Usa l'attributo `hidden`; compare su `mouseenter`/`focus` di un pin **dentro** una mappa del sito, non in un layer esterno | v3-entrata:316-338 |
| API globali | JS | `mappaCostruisci`, `mappaRenderPins`, `apriDettaglioMeta`, `apriListaCluster`, `coordDiMeta`, `METE` | v3-entrata |

## 5. Oggi (Home)

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `#tab-oggi .home-saluto` | classe | Ha un `id`; testo con il nome o neutro | v4-regressioni:45-51 |
| `#missione-card`, `#missione-titolo`, `#missione-dettaglio`, `#btn-fatto` | id | Testi esatti (es. «Il bando 2027/28 non è ancora uscito», «Esplora le mete») | porte-v2, v4, v5 |
| `#badge-bando` | id | Testo esatto; visibilità letta da **`style.display` inline** (`!== "none"`) — non spostare il nascondimento in una classe CSS | porte-v2:258, 319 |
| ⚠ CSS 390×844 | geo | `.percorso-wrap.top < #missione-card.top`; `#missione-titolo` e `#btn-fatto` con `bottom ≤ innerHeight` (primo schermo) | porte-v2:247-280 |
| `.home-hero-claim`, `#card-mappa-home`, `.percorso-modifica-profilo` | classe/id | **Devono NON esistere** in Home pre-bando | porte-v2:265-267 |
| `[data-offerta-sveglia-home='true']`, `#btn-come` | data, id | Offerta sveglia solo in pre-bando | v5:171-184 |

## 6. Mete

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `#cerca-mete` | id | Campo di ricerca | v5:115 |
| ⚠ CSS ordine verticale | geo | A 390/768/1280: `.cerca-mete-barra` sopra `#filtri-mete-chip`; tutti con riquadro > 0 (anche `#sezione-preferite`, `#griglia-mete-v2`). Con mappa disegnata: **< 768** `#sezione-preferite` e `#griglia-mete-v2` sopra `#card-mappa-mete`; **≥ 768** la mappa sopra l'elenco | v6a:221-265 |
| `#sezione-preferite` | id | Contenitore della schedina | v6a:74 |
| `.schedina-slot` | classe | Uno per meta preferita (anche > 5); ordine persistente; `closest(".schedina-slot")` dal bottone | v6a:115-182 |
| `.schedina-nome` | classe | **Dentro** `.schedina-slot`; testo = nome meta | v6a |
| `.schedina-slot-rimosso`, `.schedina-slot-orfano` | classe | Stato rimosso (con «Annulla») e meta sparita dai dati | v6a:173-197 |
| title «Sposta su», «Sposta giù», «Rimuovi dalle tue preferite» | title | Bottoni **dentro** lo slot, trovati via `title`: il `title` va conservato anche se si aggiunge un'etichetta | v6a:131-197 |
| ruolo button «Annulla» | ruolo | Nome accessibile esatto | v6a:172 |
| `#annunci-scelte` | id | Regione di annuncio (live) del riordino da tastiera | v6a:128-149 |
| `.btn-preferita`, `.btn-preferita.preferita` | classe | Stellina; lo stato è la classe `preferita` | v6a:113 |
| `.card-meta-v2` | classe | Card della griglia, cliccabile | la-v2:211, 235 |
| `#profilo-strip`, `#filtri-mete-chip`, `#griglia-mete-v2`, `#card-mappa-mete` | id | Vedi §2 | router, v6a |

## 7. Percorso

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `.stazioni > .stazione` | classe | Figli **diretti** | porte-v2:149 |
| `.stazioni > .stazione > details > summary, .stazioni > .stazione > button` | relazione | **Esattamente 6** controlli, tutti focalizzabili | porte-v2:150-158 |
| `#stazione-requisiti\|esito\|la\|partenza > details` | id | `details` figlio diretto; attributo `open` verificato | porte-v2:57-99 |
| `#stazione-requisiti .stazione-titolo`, `.stazioni .stazione-titolo` | classe | Titoli | porte-v2:132, 138 |
| `#stazione-partenza .gruppo-post > .gruppo-post-titolo` | relazione | Titolo figlio diretto del gruppo | porte-v2:83 |
| `#stazione-candidatura .stazione-testa` | classe | | v5:199 |
| `#fase-esplorando` | id+aria | `aria-pressed` | porte-v2:59 |
| `#fase-stepper .fase-card` (`.fase-fatto`), `.fase-cta`, `.fase-domanda`, `.fase-riassunto` | classe | `.fase-domanda` **dentro** la prima `.fase-card` | porte-v2:113-148 |
| `#attesa-info`, `#attesa-info .gruppo-post` | id | | porte-v2:68-72 |
| `.percorso-link-rapido` | classe | Link da Home a Percorso | pre-bruno:145 |
| `.cand-btn-ics`, `.cand-btn-ics-tutte` | classe | Testo esatto «🗓 Aggiungi al calendario» sui singoli | v5:191-203 |

## 8. Profilo

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `#form-profilo-v2 button[type='submit']` | id+tag | Submit **dentro** il form | porte-v2:230 |
| `#extra-ue-v2`, `#ricerca-tesi-v2` | id | Controlli del profilo | porte-v2:228-229 |
| `.profilo-post-invito` | classe | | porte-v2:212 |
| `.zaino-da-sapere input[type='checkbox']`, `.zaino-opzioni input[type='checkbox']` | relazione | Checkbox **dentro** i due gruppi | porte-v2:213-215 |

## 9. Learning Agreement

| Selettore | Tipo | Relazione / vincolo | Spec |
|---|---|---|---|
| `#la-v2-app .btn-primary` | relazione | CTA d'ingresso dentro l'app LA | la-v2:103, 248 |
| `.la-stage`, `.la-stage.attiva` | classe | Fasi; quella corrente ha `attiva` | la-v2:102, 167 |
| `#la-guide`, `#la-guide a[href*=…]` | id | Link della guida **dell'altro ateneo assenti** | la-v2:105-109, pre-bruno:374 |
| testo «Inserisci il tuo piano» (exact) | testo | | la-v2:104, 238 |
| `#la-meta-select` (+ `option`), `.la-suggestions`, `#la-meta-cerca` | id/classe | | la-v2, pre-bruno |
| `.la-meta-manuale` (`summary`, `button`), `#la-meta-manuale-universita\|citta\|paese` | classe/id | `<details>` con summary | pre-bruno:278-412 |
| `#la-avviso-fuori-ambito`, `[data-avviso-manuale='dossier'\|'ripristino']` | id, data | | pre-bruno |
| `.la-create-dossier button` | relazione | | pre-bruno:336 |
| `#la-intento` + `button` «Crea il dossier» / «Annulla» | id+testo | Bottoni **dentro** `#la-intento` | pre-bruno:214-663 |
| `#la-plan-paste` | id | Textarea incolla piano | la-v2, pre-bruno |
| ruoli button: «Mostra anteprima», «Conferma il piano», «Assegna questa meta al ciclo», «Segna come inviata al referente», «Segna come approvata dall'ateneo di casa», «Segna l'inizio della mobilità», «Segna il rientro», «Segna la convalida come registrata dall'università», «Apri dossier», «Rendi questa la meta operativa», «Conferma e sostituisci solo il Learning Agreement», «Scarica recupero delle modifiche non salvate», «Importa tutto in una volta», «Conferma la fotografia riepilogativa», «Registra quello che è successo» | ruolo | **Nome accessibile esatto**: non sostituire il testo con icone senza `aria-label` identico | la-v2, pre-bruno, tranche2, validazione-bruno |
| ruoli button regex `/Mostra anteprima — corsi dell'università ospitante/i`, `/Mostra anteprima — esami del mio ateneo/i` | ruolo | Nome accessibile che contiene la frase | tranche2 |
| `.la-import-row` (`.ambigua`, `.ambigua select`), `[data-kind]` | classe+data | Ordine delle righe: `valid`, `incomplete`, `ambiguous`, `duplicate` | la-v2:127-129, tranche2:138-144 |
| `[data-anteprima-import="host"\|"casa"] .la-import-row` | relazione | | tranche2 |
| `#la-import-host`, `#la-import-casa`, `#la-import-multiplo`, `.la-import-messaggio` | id/classe | | tranche2 |
| `.la-exam-row`, `input[aria-label="Nome dell'esame in libreria"]` | classe+aria | Input **dentro** la riga | la-v2:131-139 |
| `#la-dossier` (+ `.la-panel-title`, `.la-muted`, `.la-host-row`, `input[aria-label='Nome esame di casa']`) | id | | la-v2, tranche2, validazione-bruno |
| `input[aria-label="Nome corso host"\|"Lingua corso host"]`, `select[aria-label="Disponibilità del corso host"\|"Stato esame di casa nel dossier"\|"Percorso ufficiale usato per la pratica"]` | aria | `aria-label` esatti | la-v2:257-306 |
| `#la-workflow`, `#la-workflow input[type="date"]` | id | | la-v2 |
| `.la-recognition` | classe | | la-v2:169-287 |
| `#la-prepare` | id | | la-v2:166 |
| `.la-dossier-card` (hasText) | classe | | la-v2:339-346 |
| testi «Dossier archiviati (1)», «Modifiche non salvate», «Ripristino non salvato», «Ripristino completato.» | testo | | la-v2, validazione-bruno |
| `#la-restore-file`, `.la-restore-preview` (`.la-error`, `button`), `.la-backup` | id/classe | | la-v2, pre-bruno |
| `#la-fotografia`, `#la-ricostruzione`, `.la-ricostruzione-messaggio`, `[data-scollegato="home"\|"host"]` | id/data | | tranche2 |
| `input[data-fatto="sent-home"\|"home-approved"]`, `input[data-fatto-data="sent-home"]` | data | | tranche2:247-249 |
| ⚠ CSS LA 390×844 | geo | Con `colorScheme: dark` + `reducedMotion`: `scrollWidth === clientWidth`; **nessun discendente di `#tab-learning-agreement`** con `left < -1` o `right > innerWidth + 1`; il primo Tab porta il fuoco fuori da `body` | la-v2:485-500 |
| ⚠ CSS import 390×844 | geo | Dopo l'import di 10 corsi, niente scroll orizzontale | tranche2:290-299 |

## 10. Cosa NON è nel contratto (libero per il redesign)

- Colori, font, raggi, ombre, spaziature, purché le misure ⚠ CSS restino vere.
- Classi usate **solo** dal CSS e non elencate qui.
- Screenshot scritti in `test-results/` (porte-v2:282) — diagnostica, non asserzioni.

## 11. Rischi principali per la Fase 3/4

1. **§2 ordine blocchi**: aggiungere un contenitore per una griglia a due colonne rompe tre sezioni insieme.
2. **Primo schermo a 390 (Home) e a 375 (esito/sveglia)**: più aria verticale = bottoni sotto la piega.
3. **Menu a destra, non sovrapposto alla nav a 375**: allargare le etichette della nav può farla collidere.
4. **Anello di focus**: deve restare `outline` o `box-shadow` sull'elemento a fuoco, non su un pseudo-elemento.
5. **`#badge-bando` via `style.display`** inline.
6. **Testo tagliato** (probe): `text-overflow: ellipsis` o `line-clamp` nuovi fanno fallire le invarianti.
