# GATE 2 — revisione d'insieme del redesign v2, guidata

_Preparata il 2026-07-26 da Claude Code, alla chiusura di F4._

Questo è il copione della revisione che Nicola ha rimandato il 25/07 dicendo
«poi rivedremo tutto insieme alla fine». La fine è arrivata: **F0→F4 sono chiuse
e tutto è online**. Manca solo il giudizio a video, che è l'unica cosa che il
codice non può darsi da sé.

**Durata realistica: 30-40 minuti.** Non serve prepararsi: basta aprire il sito.

---

## Come si apre la prossima chat

Incolla questa riga:

> Facciamo la revisione d'insieme del redesign (GATE 2). Guidami tu, segui
> `design/redesign-2026-07/GATE2-revisione-guidata.md`.

Da lì in avanti **guido io**: ti dico cosa aprire, a che larghezza e cosa
guardare, una domanda alla volta. Tu rispondi «va bene» / «non mi convince» /
«cambiamo». Alla fine riempio la tabella dei verdetti in fondo a questo file e
apro i lavori che decidi.

---

## Preparazione (2 minuti)

Avvia il server locale — in PowerShell, separatore `;`:

```bash
cd "C:\erasmuswiz"; python -m http.server 8001
```

Apri **http://localhost:8001**.

**Stato di prova** (lo stesso su cui sono state fatte tutte le misure di
F0→F4): Ca' Foscari · Economia · Triennale · Inglese B2, onboarding completato.
Puoi rifarlo a mano, oppure incollare questo in console (F12 → Console) e
ricaricare:

```js
localStorage.setItem("erasmuswiz-zaino", JSON.stringify({v:2,zaini:{cafoscari:{profilo:{nome:"Nicola",area:"0311",dipartimento:"0311",livello:"triennale",lingue:[{lingua:"Inglese",livello:"B2",certificata:true}]},checklist:{},metePreferite:[],schedina:[],fase:"domanda",checklistPost:{},onboardingFatto:true,autoverifica:{},zainoCelebrato:true,wizardMete:true,la:{metaAperta:null,bozzePerMeta:{}}}}})); location.reload();
```

**Le tre larghezze**: F12 → `Ctrl+Shift+M` (device toolbar) → scrivi a mano
**390**, **768**, **1280** nel campo della larghezza.

---

## Cosa NON guardare — è già misurato, e ridiscuterlo è tempo perso

Questa parte è chiusa. Se qualcosa qui sotto ti sembra sbagliato **a video**,
dimmelo subito: significa che una misura mente, ed è una notizia. Ma non serve
andarla a cercare.

| Già verificato | Esito | Dove sta la prova |
|---|---|---|
| Scroll orizzontale sui 4 tab × 3 larghezze | 0 ovunque | `PLAN_REDESIGN_V2.md` §«Esiti di F4», punto 2 |
| Bersagli sotto 44px | lista vuota, salvo 4 link inline dichiarati | `baseline/README.md` + F4 punto 4 |
| Anello di focus da tastiera / assenza al mouse | 110 fermate di Tab reali, tutte a posto | F4 punto 3 |
| Contrasto testo/fondo | ~45 coppie misurate in F2, tutte sopra soglia | «Esiti di F2» |
| `prefers-reduced-motion` | nessuna informazione persa | F4 punto 7 |
| Righe vuote nella griglia di Oggi | nessuna, nei 3 stati | F4 punto 6 |
| Marker e binario della timeline | allineati a 0,00px | «Esiti di F3» |

**Oggetto della revisione è solo il giudizio**: gerarchia, densità, leggibilità,
coerenza. Cioè le cose che una misura non decide.

---

## Parte A — le 4 decisioni aperte

Queste vengono prima del giro generale, perché sono le uniche che possono
produrre lavoro vero. Per ognuna: dove guardare, la domanda, **cosa
raccomando io** e quanto costa cambiare idea.

### D1 · Il claim del hero è troppo piccolo?

**Dove**: tab **Oggi**, in cima, a **390** e poi a **1280**. È la riga piccola
grigio-azzurra sotto il saluto («Scopri dove può portarti…»).

**Il fatto**: il canvas indica `.home-hero-claim` come consumatore di
`--fs-hero` (30-40px). Oggi vive a **13-14,5px** in `--night-muted`. Applicare
il token la porterebbe a essere grande quanto il saluto.

**La domanda**: quella riga è una didascalia o è il claim del sito?

**Raccomando: lasciarla com'è.** Sembra un lapsus del canvas — il consumatore
naturale di `--fs-hero` è `.home-saluto`, non la riga sotto. E portarla a 30-40px
non è un cambio di scala, è un cambio di **gerarchia** del hero: due elementi
della stessa taglia uno sopra l'altro, senza un primo e un secondo. §3 è già
passata dal GATE 1 con questa gerarchia.

**Costo se cambi idea**: 1 riga di CSS. È la decisione più economica delle quattro.

---

### D2 · Il filetto colorato a sinistra è ormai troppo?

**Dove**: tab **Percorso**, a **1280** — **8 dei 9 stanno tutti lì**, quindi li
vedi quasi tutti in una schermata sola. Apri tutte le stazioni.

| Elemento | Filetto | Dove lo vedi |
|---|---|---|
| `.requisito-v2` | 3px grigio | stazione 1, ogni requisito |
| `.requisito-v2-citazione` | 3px chiaro | la citazione del bando dentro il requisito |
| `.idoneita-esito` | 3px verde | esito dell'idoneità |
| `.banner-in-verifica` | 3px oro | banner «in verifica» |
| `.banner-stato` (4 varianti) | 3px | i banner di stato |
| `.cand-scadenza-card` | 4px oro | stazione 2, card della scadenza |
| `.zaino-capitolo-testa` | 4px oro | stazione 5, testa di ogni capitolo |
| `.voce-checklist-v2.attiva` | 3px indaco | la voce di checklist corrente |
| `.la-storia-toggle` | 3px grigio | stazione 4, storia delle versioni |

**Il fatto**: §4.4 e §4.7 del canvas prescrivono il filetto come **grammatica
degli stati** — il colore a sinistra dice in che stato sei. Ma il detector
meccanico di `/impeccable` li segnala tutti e 9 come antipattern («side-tab
accent border»), ed è una voce indipendente che dice la stessa cosa.

**La domanda**: guardando il Percorso tutto insieme, i filetti leggono come un
sistema — o come una decorazione ripetuta?

**Raccomando: tenerli, ma togliere `.requisito-v2-citazione` dal conto.** Quello
non è uno stato: è una **citazione**, e il filetto a sinistra di una citazione è
una convenzione tipografica vecchia di secoli, non un tell. Sugli altri 8 il
motivo c'è ed è dichiarato. Detto questo: **questa è la decisione dove il tuo
occhio conta più del mio argomento** — il detector esiste apposta per contare
quello che a me sembra giustificato.

**Costo se cambi idea**: medio. Togliere il filetto significa dare agli stati
un'altra grammatica (fondo, badge, icona) — non basta cancellare 9 righe, o gli
stati diventano indistinguibili. Se decidi di ridurre, si fa per gradi:
prima i 4px oro (i più forti), poi si rivede.

---

### D3 · La tappa corrente: da oro a indaco

**Dove**: tab **Percorso**, a **390** e a **1280**. È la stazione «sei qui»:
marker pieno, pillola di stato al seguito.

**Il fatto**: era oro, F3 l'ha portata a indaco. **È la cosa più visibile di
tutto il redesign.** Non è un capriccio: è la grammatica che F2 aveva già dato a
`.voce-checklist-v2.attiva` (fondo `#EEF2FF` + indaco). Con solo metà cambiata,
la stazione corrente sarebbe rimasta mezza oro e mezza indaco.

**La domanda**: nel percorso, il «sei qui» si stacca abbastanza da «fatto»
(verde) e da «dopo» (contorno vuoto)? E l'oro ti manca?

**Raccomando: tenere l'indaco.** Verde = fatto, indaco = sei qui, contorno =
dopo: sono tre registri distinti e coerenti col resto dell'app. L'oro nel sito
significa **scadenza/urgenza** (countdown, card scadenza, capitoli dello zaino):
usarlo anche per «sei qui» faceva dire due cose diverse allo stesso colore.

**Costo se cambi idea**: basso sul marker, ma va rifatta anche la voce di
checklist attiva, o torna lo scucito mezzo-oro-mezzo-indaco.

---

### D4 · Le emoji — l'unico punto di §07 che F4 non ha potuto eseguire

**Dove**: dappertutto. Le più visibili: i chip filtro nelle Mete
(✅ ⚠️ 🔒 🗣️), i badge di stato, la nav.

**Il fatto**: la checklist §07 dice «nessuna emoji fuori dalle cinque
codificate» — ma **il canvas non elenca mai le cinque**, e ne usa 14 lui stesso.
In codice ce ne sono **13 in `index.html`** e **24 in `js/app.js`**.

**La domanda**: è un criterio che vuoi davvero, o è una riga scritta a orecchio
dal canvas?

**Raccomando: dichiararlo decaduto e chiudere il punto.** Un criterio che non
elenca il proprio insieme non è verificabile, e applicarlo «a sentimento»
significa toccare `index.html` — che il Goal del piano vieta esplicitamente — e
riscrivere copy in tutta l'app. Se invece l'uniformità delle emoji ti interessa
per conto suo, **è un mini-progetto e va aperto come tale**, non spuntato qui.

**Costo se lo vuoi fare**: alto e sparso. Da trattare come una sessione a sé.

---

## Parte B — il giro dei 4 tab × 3 larghezze

Qui non ci sono decisioni pre-confezionate: si guarda. Per ogni tab ti dico
**cosa ha cambiato il redesign**, così sai cosa stai giudicando, e ti faccio 3
domande secche. Ordine: **390 → 768 → 1280**, tab per tab.

### Oggi

Cambiato: hero a inchiostro con la nuova scala tipografica, missione e countdown
(il pallino pulsa **solo** se urgente), le card con corpo condiviso, e a ≥1024 la
griglia a 2 colonne con il Percorso sticky di fianco.

1. La prima schermata a 390 dice **una** cosa sola, o compete con se stessa?
2. A 1280 la colonna di destra (Percorso) sembra parte della pagina o un pezzo
   attaccato?
3. Il countdown si legge come informazione o come allarme?

### Mete

Cambiato: card meta ridisegnate, badge di stato, punteggio a semaforo, riga di
chip filtro, e **lo stato vuoto ricco** di F3 (mascotte + spiegazione + azione).

1. Cerca «zurigo» → nessun risultato. Lo stato vuoto **aiuta** o si limita a
   dire che non c'è niente?
2. Le card: la gerarchia è nome → luogo → punteggio, o l'occhio va altrove?
3. A 768 la griglia a 2 colonne respira o è stretta?

### Percorso

Cambiato: **tutta la timeline** (corsia da 38px, marker, binario continuo), gli
stati delle stazioni, la checklist, i requisiti a 3 registri, le barre di
progresso unificate. È il tab più toccato.

1. Il binario si legge come **un** percorso continuo, o come una serie di card?
2. Apri e chiudi due o tre stazioni: il marker sta fermo e resta leggibile?
3. La stazione corrente si trova a colpo d'occhio, senza cercarla?

### Profilo

Cambiato: form a 2 colonne a ≥768, campi e select a 44px, un solo anello di focus.

1. A 390 il form è una sequenza chiara o un muro di campi?
2. A 768/1280 le 2 colonne aiutano o spezzano la lettura?
3. Il bottone di salvataggio si trova senza scorrere a caso?

### Un passaggio finale, trasversale

Apri il **drawer** («☰ Altro») e una **modale** di meta a tutte e tre le
larghezze. Sono le due superfici che nessuno guarda mai e che F2 ha rifatto:
testa sticky del drawer, modale a foglio dal basso sotto i 1024.

---

## Tabella dei verdetti — la compilo io durante la revisione

| # | Oggetto | Verdetto | Nota |
|---|---|---|---|
| D1 | `--fs-hero` su `.home-hero-claim` | ⬜ | |
| D2 | Filetto di stato a sinistra (9) | ⬜ | |
| D3 | Tappa corrente oro → indaco | ⬜ | |
| D4 | Emoji (§07, punto 9) | ⬜ | |
| B1 | Oggi | ⬜ | |
| B2 | Mete | ⬜ | |
| B3 | Percorso | ⬜ | |
| B4 | Profilo | ⬜ | |
| B5 | Drawer e modale | ⬜ | |

Legenda: ✅ va bene · 🔧 da ritoccare · ⛔ da rifare.

---

## Dopo la revisione

- **Se tutto è ✅**: il GATE 2 si chiude, il redesign v2 è finito davvero, e
  `PLAN_REDESIGN_V2.md` va archiviato. Il progetto torna al cantiere che conta:
  contenuti (Ca' Foscari 8/8) e il test di replicabilità sulla Sapienza.
- **Se ci sono 🔧**: sono ritocchi CSS isolati, si fanno in una sessione sola con
  un commit per ritocco (la regola D1 del piano: `git revert` chirurgico).
- **Se c'è un ⛔**: si riapre la sezione del canvas corrispondente e si rifà quel
  pezzo, non tutto il resto.

Il sito è **online**: qualunque cosa si decida qui si applica a un sito già
visibile. Non è un rischio di stabilità — le invarianti erano verdi prima di
ogni push — ma è il motivo per cui vale la pena farla adesso e non fra un mese.
