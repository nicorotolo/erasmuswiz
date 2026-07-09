# DISEGNO OPERATIONS — sessioni OP1–OP13 (ondate MERCATO-1 e MERCATO-2)

> **Specifica vincolante** delle sessioni OP della `ROADMAP.md` v2, nello
> stesso spirito di `DISEGNO_BRAND.md` (che ha funzionato: BR0–BR7 eseguite
> una a sessione senza contesto extra). Scritto il 2026-07-07 (sessione 29)
> per essere eseguito da QUALSIASI modello Claude (Opus/Sonnet, chat o
> Claude Code) senza bisogno di questa conversazione.
>
> **Come usare questo documento (per il modello):**
> 1. Leggi in ordine: `CLAUDE.md` → `PROGETTO_ERASMUS.md` → `STATO_DEL_SITO.md`
>    → `ROADMAP.md` → il TUO blocco qui sotto. Non serve altro.
> 2. Esegui SOLO il blocco assegnato. Le correzioni non richieste si
>    segnalano in STATO, non si eseguono.
> 3. Ogni blocco ha: Obiettivo, Dipendenze, File, Specifica, Test, Non
>    toccare. Se una dipendenza non è soddisfatta, fermati e dillo a Nicola.
> 4. Fine sessione: `node --check` sui .js toccati, verifica a video
>    (mobile ~390px + desktop 1280px, chiaro e notte, ENTRAMBI gli atenei),
>    aggiorna `STATO_DEL_SITO.md`, spunta il blocco in `ROADMAP.md`.
> 5. Regole d'oro sempre valide (bussola §6): codice separato dai dati;
>    zaino unico in localStorage; AI mai nel runtime; niente framework/
>    backend/build step. NO git da bash (usa i `.bat` su Windows).

---

## ONDATA MERCATO-1 (luglio–settembre 2026)

### OP1 — Fix UI dal feedback UX6 (1 sessione, Claude Code)

**Obiettivo:** chiudere i 4 fix puntuali emersi dal test con Bruno (05/07).
**Dipendenze:** nessuna. **File:** `index.html`, `js/app.js`, `css/style.css`.

Specifica:
1. Rinominare la sezione "Informazioni importanti" (nome poco parlante —
   scegliere un titolo che dica cosa contiene, es. "Cosa devi sapere ora";
   verificare il punto esatto in `FEEDBACK_UTENTI.md`).
2. Stellina preferiti: spostarla in alto a destra della card meta (oggi
   poco visibile; Bruno non la trovava).
3. De-enfatizzare il link "Portale Sapienza" (oggi sembra la CTA principale;
   deve essere un link secondario — siamo la guida, non il portale).
4. Comunicare il limite delle 5 scelte nella schedina PRIMA che l'utente
   sbatta contro il limite: microcopy sullo slot ("Ne puoi scegliere 5:
   l'ordine conta") oppure — se dai dati del bando il limite non è 5 per
   tutte le facoltà — rendere il numero un dato per ateneo, non hardcoded.
5. (Accorpato, da OP7) Debug delle 2/55 mete Giurisprudenza non mappate:
   trovarle con `node scripts/...` o grep sui campi vuoti in
   `js/atenei/sapienza/dati-mete-giurisprudenza.js`, completarle a mano con
   fonte, o marcare `inVerifica`.

**Test:** i 4 punti verificati a video su entrambi gli atenei; nessuna
regressione su schedina/preferiti (riordino ▲▼, persistenza).
**Non toccare:** motore compatibilità, onboarding, dati mete (salvo le 2 di
Giurisprudenza).

### OP2 — Candidatura riformattata (1-2 sessioni, Claude Code)

**Obiettivo:** la vista Candidatura è risultata CONFUSA su mobile nel test
UX6. Ridisegno della presentazione; la logica dati (scadenze+checklist
fuse, `scadenzaId`, `voceScaduta()`, .ics) NON cambia.
**Dipendenze:** OP1 (per non lavorare due volte sugli stessi blocchi).
**File:** `index.html`, `js/app.js` (solo funzioni render), `css/style.css`.

Specifica:
- Ripartire dal principio "Ora tocca a te" (BR5): il mobile deve mostrare
  SOPRA la piega una sola cosa — il prossimo passo con la sua scadenza.
- Tutto il resto (capitoli, storico, scadenze passate) va sotto, ripiegato.
- Rivedere gerarchia tipografica e densità: nel test le card-scadenza e le
  voci si confondevano tra loro. Una scadenza = un blocco visivamente
  distinto; le voci dentro sono subordinate (indentazione/peso, non solo
  colore).
- Rimuovere la pagina Timeline nascosta (decisione BR7: ridondante,
  la rimozione era rimandata a dopo UX6 — questo è il momento). Attenzione
  a rimuovere anche i renderer e i dati orfani, non solo il link.
- Prima di scrivere codice: rileggere `FEEDBACK_UTENTI.md` (note UX6) e
  `DISEGNO_UX.md` §6 per non perdere i vincoli originali.

**Test:** flusso completo su mobile 390px con zaino in fase "domanda" e
"selezionato", entrambi gli atenei; spunte persistenti (stesse chiavi
zaino); .ics ancora funzionante; nessun residuo Timeline (grep su id/classi).
**Non toccare:** dati checklist/scadenze, motore temporale.

### OP3 — Filtro lingua nelle mete (1 sessione, Claude Code)

**Obiettivo:** il requisito di lingua è la PRIMA causa di esclusione
(bussola §2): chi non ha la certificazione deve vederlo subito.
**Dipendenze:** nessuna (il profilo lingue esiste già: `profilo.lingue`).
**File:** `js/app.js` (`renderMete()`, area filtri), `css/style.css`.

Specifica:
- Nuovo filtro tra i chip esistenti (Tutte/Compatibili/…): "Per la mia
  lingua" — mostra le mete il cui `requisitoLingua` è coperto dal profilo
  (riusare la logica già presente nel motore di compatibilità: NON
  duplicare le soglie CEFR, estrarre/riusare la funzione esistente).
- Le mete con lingua NON verificabile (campo vuoto/`inVerifica`) vanno
  mostrate con stato "da verificare", MAI nascoste in silenzio.
- Se il profilo non ha lingue: il chip porta al banner esistente
  ("Aggiungi le tue lingue…", BR4) — non un filtro che finge di funzionare.
- **Use case documentato che questo filtro serve** (dossier §1-ter A): a
  Giurisprudenza l'assegnazione è una riunione in diretta dove la tabella
  mete+requisiti lingua arriva 18 minuti prima e chi scende in graduatoria
  deve avere alternative pronte "in base ai propri requisiti di lingua".
  Il microcopy del filtro può dirlo: "Preparati alla riunione di
  assegnazione: queste sono le mete che le tue lingue coprono davvero."
- Fonte dati aggiuntiva per validare i requisiti lingua Giurisprudenza:
  la tabella ufficiale del 28/03/2025 nel corpus mail (dossier §1-ter A) —
  confrontarla coi 55 record di `dati-mete-giurisprudenza.js` in G4.

**Test:** profilo con B2 inglese → conteggi coerenti su un campione
verificato a mano (3 mete note); meta senza dato lingua visibile con stato
corretto; chip funziona in entrambi gli atenei.
**Non toccare:** pesi del motore (50/30/20), dati mete.

### OP4 — Stima borsa per gruppo-paese (1 sessione: ½ dati + ½ codice)

**Obiettivo:** nelle schede meta, la stima del contributo mensile UE per
gruppo-paese + rimando al contributo integrativo ISEE. Dato semplice,
aggiornamento annuale, alto valore percepito.
**Dipendenze:** fonti — Sapienza: `fonti/caso-bruno/
638864454957146686_INFORMAZIONI_GENERALI_25_26.pdf` pp. 3-4 (Gruppo 1
€350/mese, Gruppo 2 €300/mese, tabella CISM per fasce ISEE); Ca' Foscari:
recuperare l'equivalente dal bando in `fonti/` (se manca → chiedere a
Nicola, NON inventare).
**File:** NUOVO `js/atenei/<ateneo>/dati-borse.js` (uno per ateneo, stesso
schema), `index.html` (include), `js/app.js` (scheda meta).

Specifica:
- File dati: mappa paese → gruppo → importo/mese + tabella ISEE + campo
  `fonte` e `aggiornatoAl`. Il codice mappa la meta al paese (il dato paese
  esiste già nelle mete) e mostra: "Borsa UE stimata: ~€300/mese + integrazione
  in base all'ISEE (200–500€)" con disclaimer datato e link fonte.
- Il disclaimer segue la regola bussola §3: mai un'affermazione senza data
  e fonte. Formulazione "stima", mai "ti spetta".

**Test:** meta portoghese → €300; meta francese → €350; meta senza paese
riconosciuto → riga assente (nessun "undefined"); `node --check` sui file
dati; verificare che il totale non venga presentato come promessa.
**Non toccare:** schema esistente delle mete (si aggiunge un file, non campi).

### OP5 — SEO di base ONLINE (2-3 sessioni, Nicola + Claude)

**Obiettivo:** pagine indicizzabili online ENTRO L'AUTUNNO (Google ci mette
mesi — bussola §7: SEO sopra il social). Più: attivare finalmente
l'analytics (residuo ondata A: senza numeri non esiste trazione).
**Dipendenze:** per l'articolo caso-Bruno servono G2 (materiali) e l'ok di
Bruno sul testo anonimizzato. Gli altri articoli partono subito.
**File:** NUOVA cartella `guide/` con pagine HTML statiche autonome
(stesso CSS del sito), `sitemap.xml`, `robots.txt`, link dal footer.

Specifica:
- 3 pagine iniziali (una per sessione, qualità sopra quantità):
  1. "Come si fa il Learning Agreement alla Sapienza" — dal materiale del
     dossier (INFORMAZIONI GENERALI §LA + esperienza Bruno). È il cappello
     testuale del futuro LA Generator: quando OP8 esce, la pagina linka lo
     strumento.
  2. "Requisiti di lingua per l'Erasmus: come non farti escludere" — dal
     dato reale (prima causa di esclusione; il caso Madrid/Amsterdam,
     anonimo). Linka il filtro lingua (OP3).
  3. "Ho dovuto rifare il mio Learning Agreement a Lisbona" — il racconto
     caso-Bruno in prima persona (con suo ok). SEO + fiducia.
- Ogni pagina: title/description/OG dedicati, HTML semantico (h1 unico,
  FAQ in fondo), data di pubblicazione visibile, disclaimer standard,
  CTA verso lo strumento pertinente.
- `sitemap.xml` + `robots.txt`; registrare il sito su Google Search Console
  (azione umana di Nicola — istruzioni passo-passo da fornire a fine
  sessione).
- Analytics: GoatCounter o Plausible (1 riga, niente cookie banner) su
  TUTTE le pagine, sito incluso.

**Test:** Lighthouse SEO ≥ 90 su ogni pagina; pagine leggibili senza JS;
analytics riceve la visita di prova; nessun dato personale di Bruno nel
testo pubblicato (controllo esplicito: nome, date esatte, matricola, IBAN).
**Non toccare:** `index.html` salvo l'aggiunta di link footer e analytics.

### OP6 — Pilota matching L3 Giurisprudenza (parallelo, time-boxed, go/no-go a settembre)

**Obiettivo:** SOLO un esperimento: per le 55 mete di Giurisprudenza,
provare a costruire il dato "esami host compatibili con esami Sapienza",
con il caso reale di Bruno come ground truth.
**Dipendenze:** G2 — LA e Change Form ✅ consegnati (07/07, nel dossier
§1-bis): la fase 1 è SBLOCCATA. ToR + convalida (A4/A5, dopo il 12/07)
chiudono il cerchio. **File:** SOLO file di lavoro in `fonti/l3-pilota/`
e/o `batch/` — NIENTE nel sito fino al go.

**Lezione dalla ground truth (dossier §1-bis, VINCOLANTE per lo schema):**
il Change Form di Bruno cancella 6 corsi su 8 per "componente NON
disponibile presso l'ospitante" — il piano è saltato per DISPONIBILITÀ,
non per compatibilità. Lo schema del pilota deve trattare la disponibilità
(corso offerto agli incoming? in quale semestre?) come dimensione PRIMARIA,
prima della similarità dei contenuti. Il mapping reale è inoltre
molti-a-molti con vincolo sui totali (44-57 ECTS), mai 1:1.

Specifica:
- Fase 1 (1 sessione): definire lo schema dati del matching (esame Sapienza
  → esami host candidati con link, CFU, semestre, disponibilità incoming,
  note) e produrlo A MANO per la sola Católica Lisbona, confrontandolo col
  percorso vero di Bruno (LA originale → Change Form): il nostro sistema
  avrebbe evitato i 6 corsi non disponibili? avrebbe proposto i 10
  sostituti? Questo è il test di qualità.
- Fase 2 (se la 1 convince): stimare il costo di produzione per le altre 54
  mete (pipeline Codex? quanto tempo/meta?). Il numero decide il go/no-go.
- Criteri di NO-GO (fissati ORA, bussola §5): (a) il matching a mano sulla
  Católica sbaglia più di quanto aiuti (giudizio di Bruno); (b) il costo
  per meta rende irrealistico coprire Giurisprudenza entro dicembre;
  (c) ruba tempo a OP8 (il LA Generator L1+L2 ha SEMPRE la precedenza).
- Onestà nel comunicare (bussola §5): il LA viene spesso rifatto all'arrivo
  → L3 migliora la bozza, non elimina il problema.

**Test:** la fase 1 produce un confronto scritto "nostro matching vs
convalida reale" nel dossier. **Non toccare:** il sito. Tutto il pilota
vive fuori dal runtime.

*(OP7 — debug 2/55 mete: accorpato in OP1, punto 5.)*

---

## ONDATA MERCATO-2 (ottobre–dicembre 2026)

### OP8 — LA Generator L1 (2-3 sessioni, Claude Code)

**Obiettivo:** LA killer feature. Lo studente: (1) inserisce/carica gli
esami da convalidare (dal suo piano di studi), (2) incolla per ciascuno il
link + nome del corso host, (3) scarica un documento pulito e formattato
(Word/PDF) da inviare a Sapienza come bozza, con disclaimer datato.
**Dipendenze:** SCENARIO A CONFERMATO DALLA PRASSI (corpus mail, dossier
§1-ter B): il "prospetto" LA è un documento libero allegato via mail
all'ufficio di facoltà, giudicato nel merito e non nel formato — a Bruno
è stato rimbalzato per link rotti e per ECTS non corrispondenti ai link,
mai per il formato. G1 (mail all'ufficio) resta come CONFERMA non
bloccante (la prassi osservata è di UNA facoltà, un anno). Formato di
riferimento: `fonti/caso-bruno/LearningAgreement (3).pdf` + l'eventuale
Word del prospetto se Bruno lo ritrova (D7).

**Validazioni OBBLIGATORIE del Generator (= i due rimbalzi reali subiti
da Bruno, 03-04/06/2025):**
1. ogni corso host deve avere un link, e il documento deve invitare a
   verificarlo (non possiamo fetchare noi: sito statico) — checklist
   pre-invio "hai aperto tutti i link? funzionano?";
2. gli ECTS dichiarati devono corrispondere a quelli sul link — campo
   con doppia conferma esplicita ("ECTS come indicato sulla pagina del
   corso").

**Vincoli dalla ground truth (dossier §1-bis):**
- NON chiedere allo studente i codici dei corsi host: nel LA reale erano
  tutti "000" (non noti al momento della compilazione).
- Il paniere è molti-a-molti con vincolo sui totali crediti (Bruno: 8
  corsi/44 ECTS ↔ 6 esami/45 CFU): il Generator mostra i due totali a
  confronto, non coppie corso↔esame.
- Il LA ufficiale è GIÀ digitale end-to-end (sistema online Sapienza +
  EWP, approvazione RAM contestuale all'invio): il nostro output è la
  preparazione/bozza di lavoro, mai una replica del modulo.
- Campi visti nel LA reale da includere: livello lingua richiesto/dichiarato
  (B2 inglese), semestre per corso, link catalogo host.

- **Scenario A ("qualsiasi documento equivalente va bene")**: generatore di
  documento nostro — layout pulito, tabella esami (codice/nome/CFU Sapienza
  ↔ corso host/link), intestazione con dati studente/meta, footer con
  disclaimer. Generazione client-side (regola: niente backend): HTML
  stampabile → PDF via print, più export .doc (HTML con estensione .doc si
  apre in Word — verificare la resa).
- **Scenario B ("solo il loro template Word")**: compilatore del template —
  si parte dal Word vuoto Sapienza (G2-A1), si genera un file che replica
  ESATTAMENTE quella struttura. Attenzione: manipolare .docx client-side
  senza build step è più fragile — valutare docx.js da CDN vs HTML-che-Word-
  apre; scegliere la via più semplice che produce un file che il RAM accetta.

Specifica comune:
- I dati inseriti vivono nello zaino (`ZAINO.laGenerator = {...}`) —
  account-ready come tutto il resto.
- Integrazione con L2 (OP9): dal form, per la meta scelta, il link al
  catalogo host è già proposto.
- Microcopy: "bozza da inviare al RAM — il LA ufficiale si compila sul
  sistema online di ateneo" (posizionamento anti-OLA, bussola §4: siamo la
  PREPARAZIONE, mai il sostituto).
- KPI: contatore "LA generati" nell'analytics (evento, nessun dato
  personale).

**Test:** ricreare il LA di Bruno (dati dal dossier) e confrontare col suo
originale; generazione con 12 esami su mobile; zaino persistente dopo
reload; documento leggibile su Word e Google Docs.
**Non toccare:** motore compatibilità, checklist.

### OP9 — LA Generator L2: link cataloghi host (1-2 sessioni, pipeline + Code)

**Obiettivo:** per ogni meta, il link diretto al catalogo corsi
dell'università ospitante — elimina il "giorno perso a cercare dove stanno
gli esami" (bussola §4).
**Dipendenze:** nessuna dura; sinergia con OP8.
**File:** campo nuovo `linkCatalogo` nei `dati-mete-*.js` (riempito via
pipeline Codex — aggiornare `automazioni/PROMPT_CODEX_mappatura.md` e gli
script `batch/` come per gli altri campi); `js/app.js` (scheda meta + form
OP8).

Specifica:
- Il campo entra nello schema con la stessa filosofia del riuso/propagazione
  (stesso codice Erasmus → stesso link): aggiornare `setup-dipartimento.mjs`
  e `applica-batch.mjs` di conseguenza.
- In scheda meta: riga "📚 Catalogo corsi dell'ospitante" con link esterno e
  `aggiornatoAl`. Se assente: "non ancora mappato" (mai link rotti inventati).
- Partire da Giurisprudenza (beachhead) e dalle mete Ca' Foscari già ricche.
  Primo dato verificato su caso reale (P LISBOA01, dal LA di Bruno):
  `https://fd.lisboa.ucp.pt/sobre-fd/gabinetes-de-apoio/relacoes-internacionais/transnational-law-curriculum`.
- **Upgrade di valore dalla ground truth** (dossier §1-bis: 6 corsi su 8
  saltati per NON disponibilità): dove possibile, preferire il link alla
  pagina corsi PER INCOMING/Erasmus (non il catalogo generale di ateneo) e
  annotare nel campo una nota `disponibilita` quando la fonte distingue i
  corsi aperti agli Erasmus. È il dato che a Bruno avrebbe salvato il piano.

**Test:** 5 link a campione aperti e verificati a mano; scheda con e senza
campo; pipeline: `valida-stato` coerente dopo l'aggiunta del campo.
**Non toccare:** gli altri campi dei file mete.

### OP10 — PWA installabile: audit e completamento (1 sessione, Claude Code)

**Obiettivo:** `manifest.json` e `sw.js` ESISTONO GIÀ (network-first, senza
push, registrato da `index.html`). Portarli a "installabile bene" prima di
costruirci sopra le notifiche.
**Dipendenze:** nessuna. **File:** `manifest.json`, `sw.js`, `img/icon-*.png`.

Specifica:
- Verificare che `img/icon-192.png` e `img/icon-512.png` esistano davvero e
  siano il logo attuale (il manifest li dichiara; dopo BR0 il brand è
  cambiato — controllare che non siano icone vecchie o mancanti).
- `FILE_DA_CACHE` in `sw.js` cita `img/wiz-hero.png`: aggiornare la lista ai
  file reali post-BRAND (webp mascotte, css, js) senza esagerare (la
  strategia resta network-first, la cache è solo fallback).
- Versionare `CACHE_NOME` a ogni deploy che tocca la lista.
- Test installabilità: Lighthouse PWA + prova reale su Android e iOS
  ("Aggiungi a schermata Home" — su iOS documentare i limiti noti).

**Test:** Lighthouse PWA senza errori; installazione reale su un telefono;
il sito si apre offline (fallback cache) mostrando l'ultima versione vista.
**Non toccare:** logica app.

### OP11 — Notifiche push scadenze (2 sessioni, Claude Code)

**Obiettivo:** il motore di retention (bussola §4). Promemoria push sulle
scadenze del bando, opt-in esplicito.
**Dipendenze:** OP10. **File:** `sw.js`, `js/app.js`, `index.html`,
eventualmente un file dati per i testi.

Specifica:
- Architettura: push web SENZA server proprio non esiste in senso stretto —
  scegliere la via più semplice compatibile con "niente backend nostro":
  (a) notifiche LOCALI programmate quando l'app è aperta/installata
  (Notification API + trigger al load: zero infrastruttura, funziona bene
  come "promemoria al rientro"); (b) vero push remoto richiede un servizio
  (es. OneSignal free tier) — valutare costi/privacy e proporre a Nicola
  PRIMA di implementare. Non decidere in autonomia il punto (b).
- **Framing obbligatorio fino al microcopy** (bussola §4): "Verifica su
  Relint: si avvicina [scadenza]" con link alla fonte — MAI "la scadenza è
  X". Promemoria di controllo, non oracolo.
- Opt-in con spiegazione onesta; opt-out facile; KPI iscrizioni push
  nell'analytics (aspettative basse dichiarate in bussola — non è il KPI
  principe).

**Test:** opt-in/opt-out; notifica di prova ricevuta su Android;
degradazione pulita su browser senza permessi/iOS non installata (nessun
errore console); microcopy conforme al framing.
**Non toccare:** dati scadenze (si leggono, non si modificano).

### OP12 — Pipeline dati bando 27/28 (da novembre, Nicola + Codex)

**Obiettivo:** la finestra critica (rischio n.4): i bandi 27/28 escono
tra dicembre e febbraio; i dati vanno aggiornati MENTRE si finisce OP8-11.
**Specifica:** processo, non codice — documentare in
`PROCESSO_AGGIORNAMENTO_ANNUALE.md`: come si fa il diff bando vecchio/nuovo,
quali campi cambiano (scadenze, mete nuove/rimosse, importi borse), come si
usa la pipeline Codex esistente (`mappatura-stato.json`, batch, riuso/
propagazione), chi valida (Bruno per Giurisprudenza). Reality-check dalla
memoria di progetto: Codex NON è un cron H24 — è locale, va lanciato;
pianificare i lanci, non presumerli.

### OP13 — Warm-up social (da dicembre, Bruno)

**Obiettivo:** amplificatore, non pilastro (bussola §7). Owner: Bruno.
**Specifica:** nel `PLAYBOOK_TEAM.md` §Bruno — formati, calendario, prompt
pronti per generare bozze di contenuti con Claude. Nessun codice.

---

## APPENDICE — Ordine consigliato e dipendenze

```
OP8: scenario A CONFERMATO dalla prassi (corpus mail) — G1 = solo conferma
G2 (materiali) — LA ✅ CF ✅ MAIL ✅ ─┬─► OP6 fase 1 SBLOCCATA (go/no-go
   restano: ToR/convalida/piano      │    set.; A4-A5 chiudono il cerchio)
   di studi dopo il 12/07,           ├─► OP8 (formato + validazioni ✅)
   risposte D2/D3/D5/D6/A2           ├─► OP5 (storia completa: candidatura
                                     │    → asta → prospetto → CF)
                                     └─► G4 (tabella lingue 28/03 per
                                          validare dati Giurisprudenza)
OP1 → OP2 (stessa area di codice, in sequenza)
OP3, OP4, OP5 (indipendenti, parallelizzabili)
OP10 → OP11 (PWA prima delle push)
OP9 in qualunque momento (pipeline) — valore ALZATO dalla ground truth
```

Priorità se il tempo stringe (bussola §5: v2-mercato entro GENNAIO):
OP1-2 (fix dal test) > OP5 (SEO: il tempo di indicizzazione non si
recupera) > OP3-4 > OP8-9 (killer feature) > OP10-11 > OP6 (esperimento:
si taglia per primo).
