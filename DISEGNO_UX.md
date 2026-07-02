# DISEGNO UX — Il percorso ridisegnato (v3)

> Specifica del ridisegno UX deciso il 02/07/2026. È il documento di
> riferimento per le sessioni UX1–UX6 della ROADMAP. Claude Code deve
> leggerlo PRIMA di toccare il codice in quelle sessioni.
> Regola: una sessione = un blocco UX. Non anticipare i blocchi successivi.

---

## 0. PERCHÉ (il problema della UX attuale)

ErasmusWiz è un "traduttore della burocrazia" per studenti, ma la UX attuale
tradisce la promessa in 4 punti:

1. **Il primo minuto non dà valore.** Il nuovo utente atterra su "Ciao,
   Studente" e la prima cosa che il sito gli chiede è compilare un profilo
   (in un tab nascosto). Il modulo viene prima dell'aha moment.
2. **Il sito è organizzato per feature, lo studente ragiona per fasi.**
   Le sue domande sono in sequenza: "posso partire?" → "dove posso andare?"
   → "cosa devo fare e entro quando?" → "sono stato preso, e adesso?".
   I 4 tab spezzano questo filo in sezioni parallele.
3. **La "traduzione" non è visibile.** I dati sono puliti, ma lo studente
   non vede mai il confronto bando → significato → azione. È la feature
   identitaria e oggi non esiste in interfaccia.
4. **La retention è affidata alla memoria dello studente.** Nessun gancio
   che lo riporti al sito quando una scadenza si avvicina.

## 1. I 4 PRINCIPI DEL RIDISEGNO

- **P1 — Valore prima del modulo.** Mai chiedere dati prima di aver
  mostrato qualcosa di utile. Profilazione progressiva: si chiede un dato
  solo nel momento in cui serve, spiegando perché.
- **P2 — Una fase = una domanda = una azione primaria.** Ogni schermata
  risponde a UNA domanda dello studente e propone UN passo successivo.
- **P3 — Il traduttore è visibile.** Ogni requisito e voce di checklist ha
  tre registri: cosa dice il bando (citazione + fonte) / cosa significa /
  cosa devi fare.
- **P4 — La retention si aggancia fuori dal sito.** Le scadenze si
  esportano nel calendario dello studente (.ics). Il sito va dove lo
  studente già vive.

## 2. NUOVO MODELLO DI NAVIGAZIONE

### 2.1 La home È il percorso

La home non è più un cruscotto "Oggi" ma **il percorso a 4 fasi**, uno
stepper verticale. Ogni fase è una card con: stato (✅ fatta / ▶ attiva /
🔒 futura), la domanda-guida come titolo, un riassunto dello stato e UNA
call-to-action primaria. La "missione del giorno" resta in cima come
"Prossimo passo" ed è sempre derivata dalla fase attiva.

Le 4 fasi:

| Fase | Domanda-guida | Contenuto | Da dove viene |
|------|---------------|-----------|---------------|
| 1 | Posso partire? | Requisiti del bando tradotti + auto-verifica | tab Idoneità (oggi nascosto) |
| 2 | Dove posso andare? | Mete compatibili + preferite | tab Mete |
| 3 | La candidatura | Scadenze + checklist fuse + export calendario | tab Scadenze + tab Checklist |
| 4 | Sono stato preso! | Checklist post-selezione fino alla partenza | toggle attuale nel tab Checklist |

### 2.2 Nav inferiore ridotta

Da 4 tab a 3: **Percorso** (home) · **Mete** · **Candidatura**.
Quando `ZAINO.fase === "selezionato"`, il terzo tab diventa **Partenza**
(fase 4). I tab Idoneità e Profilo spariscono dalla navigazione: Idoneità
diventa il contenuto della fase 1; il profilo si modifica da un link
"Modifica profilo" nella home (riusa il form esistente).

### 2.3 Cosa NON cambia

`app.js` resta l'unica logica; i dati restano nei file `js/atenei/...`;
lo zaino resta l'unico stato; nessun framework, build step o backend.
Il motore di compatibilità (pesi 50/30/20, icone oneste) NON si tocca.

## 3. ONBOARDING — le 3 domande (30 secondi)

Al primo accesso (`ZAINO.profilo == null` e `ZAINO.onboardingFatto != true`)
si mostra un onboarding a schermo intero in 3 passi, SOLO selezioni
(niente campi di testo):

1. **Dove studi?** → ateneo (riusa il registro `ATENEI{}`).
2. **Cosa studi?** → dipartimento/facoltà (dalle mete dell'ateneo attivo).
3. **A che punto sei?** → livello (triennale/magistrale) — riusa i valori
   già usati dal motore di compatibilità.

Al termine, atterraggio sulla home-percorso con il **valore immediato**:
"Per te ci sono N mete a [dipartimento]. La prossima scadenza è [X], tra
[Y] giorni." Bottone unico: "Inizia il percorso →" (porta alla fase attiva).

**Le lingue NON si chiedono nell'onboarding.** Si chiedono nella fase 2
con un banner contestuale: "Aggiungi le tue lingue per vedere quali mete
sono compatibili con te" (P1: il perché è evidente nel momento della
richiesta). Finché mancano, le mete mostrano lo stato onesto già esistente
(🟡 "Idoneo — verifica la lingua").

Estensione zaino (con fallback per zaini vecchi, come sempre):
`ZAINO.onboardingFatto: boolean`. Chi ha già un profilo salvato NON rivede
l'onboarding (fallback: se `profilo != null` → `onboardingFatto = true`).

## 4. FASE 1 — "Posso partire?" (il traduttore sui requisiti)

Ogni requisito del bando diventa una card a tre registri:

- **In chiaro** (sempre visibile): la spiegazione umana + l'azione.
  Es.: "Ti serve una media di almeno 27. → Controllala sul tuo libretto."
- **Cosa dice il bando** (espandibile ▸): citazione testuale + riferimento
  articolo + link al PDF ufficiale. Costruisce fiducia, non rumore.
- **Auto-verifica**: checkbox "✓ Lo rispetto" per requisito, salvata nello
  zaino (`ZAINO.autoverifica: {}`). Quando tutte spuntate → esito onesto:
  "Sembri idoneo ✅ — fa sempre fede il bando ufficiale". La fase 1 si
  marca completata.

Modifica dati richiesta (schema, retrocompatibile): ogni voce di
`REQUISITI_BANDO` acquisisce i campi `spiegazione` (una frase umana),
`azione` (imperativo concreto), `citazione` (testo bando), `fonte`
(articolo + URL). Se un campo manca, la UI mostra il testo attuale
(nessuna rottura sui dati esistenti). **La scrittura dei contenuti
`spiegazione`/`azione` è lavoro di Nicola, non di Codex.**

## 5. FASE 2 — "Dove posso andare?"

Il tab Mete resta com'è (lista, filtri, punteggio, preferite ⭐) con due
modifiche:

- Banner lingue (vedi §3) finché `profilo.lingue` è vuoto.
- La fase 2 si considera "fatta" quando lo studente ha ≥1 meta preferita:
  il percorso in home avanza e la CTA della fase 3 diventa primaria.

## 6. FASE 3 — "La candidatura" (fusione Scadenze + Checklist)

Oggi scadenze e checklist sono due tab separati che parlano della stessa
cosa. Si fondono in un'unica vista cronologica: **ogni scadenza è un
"capitolo"** con dentro le voci di checklist che vanno fatte PRIMA di
quella data.

- Struttura: card-scadenza (data, countdown, cosa succede quel giorno) →
  sotto, le voci di checklist collegate, spuntabili come oggi.
- Collegamento dati: le voci di `CHECKLIST` acquisiscono il campo
  `scadenzaId` (id della tappa di `SCADENZE_*` entro cui vanno completate).
  Voci senza `scadenzaId` finiscono in un capitolo "Quando puoi".
- Ogni voce di checklist eredita il traduttore a 3 registri (§4) quando i
  campi ci sono.
- **Bottone "🗓 Aggiungi al calendario"** su ogni card-scadenza: genera un
  file `.ics` lato client (Blob + download, niente server) con titolo,
  data, descrizione e link al sito. È il gancio di retention (P4).
- La barra di progresso esistente resta, calcolata su tutte le voci.

## 7. FASE 4 — "Sono stato preso!"

Contenuto = l'attuale checklist post-selezione (già implementata, 5 fasi).
Cambia l'ingresso: non più toggle dentro il tab Checklist, ma passaggio di
fase esplicito e celebrato — in fondo alla fase 3 e nella home: "Sei stato
selezionato? 🎉 → Inizia la preparazione alla partenza" (aggiorna
`ZAINO.fase`, il terzo tab diventa "Partenza"). Il ritorno indietro resta
possibile da un link discreto ("Non ancora / errore").

## 8. TRASVERSALE — banner "dati in verifica"

Per gli atenei/sezioni con contenuti provvisori (oggi: bando/checklist
Sapienza) un banner visibile: "⚠️ Dati in corso di verifica sul bando
ufficiale — usali come traccia, non come fonte". Pilotato da un flag
`inVerifica: true` nei file dati (es. `BANDO_INFO`), niente hardcoding.

## 9. ORDINE DI IMPLEMENTAZIONE (= sessioni ROADMAP)

| Sessione | Cosa | Tocca |
|----------|------|-------|
| UX1 | Onboarding 3 domande + valore immediato | index.html, app.js, style.css, zaino |
| UX2 | Home-percorso (stepper 4 fasi) + nav a 3 tab | index.html, app.js, style.css |
| UX3 | Fusione Scadenze+Checklist + .ics | app.js, dati-checklist (campo scadenzaId), style.css |
| UX4 | Traduttore 3 registri (UI) + banner "in verifica" | app.js, style.css; dati: Nicola |
| UX5 | Contenuti traduttore Ca' Foscari + Sapienza | solo file dati (Nicola, con Claude in chat) |
| UX6 | Test con utente reale (fratello, Giurisprudenza Sapienza) | FEEDBACK_UTENTI.md |

Regole per ogni sessione: smallest reliable change; fallback per zaini
vecchi; `node --check` su ogni JS toccato; test a video su localhost:8000
con ENTRAMBI gli atenei; aggiornare STATO_DEL_SITO.md e spuntare la
ROADMAP a fine sessione.

## 10. COSA RESTA FUORI (non riaprire)

Account/login, backend, notifiche push, app native, framework. Il
ridisegno è riorganizzazione dell'esistente: quasi tutte le funzioni di
`app.js` (missione, percorso, countdown, checklist, compatibilità)
vengono riusate, non riscritte.
