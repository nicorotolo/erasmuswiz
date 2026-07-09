# PLAYBOOK TEAM — chi fa cosa (Nicola + Bruno)

> Creato il 2026-07-07 (sessione 29). Da leggere insieme a `ROADMAP.md` v2.
> Scopo: dividere il lavoro tra Nicola e Bruno E permettere a entrambi di
> lavorare con Claude in autonomia (i prompt pronti sono in §4).
> Ruoli dalla bussola §8: Nicola = prodotto/tecnica/pipeline/Ca' Foscari;
> Bruno = validazione contenuti Giurisprudenza (il rischio n.1), canale
> Sapienza, owner social.

---

## 1. LA REGOLA DI DIVISIONE

- **Passa da Nicola** tutto ciò che tocca: codice, pipeline dati, deploy
  (`PUBBLICA.bat`), struttura dei file, decisioni di prodotto.
- **Passa da Bruno** tutto ciò che tocca: verità dei contenuti Sapienza
  (nessun dato Giurisprudenza va online senza il suo sguardo), rapporti con
  l'ufficio Erasmus/RAM, canali studenteschi Sapienza, social.
- **Insieme** (una chiamata breve, non una riunione): go/no-go pilota L3
  (settembre), product freeze (7 gennaio), bilancio (maggio 2027).

## 2. COMPITI DI BRUNO (in ordine di urgenza)

| # | Compito | Quando | Rif. |
|---|---|---|---|
| B-1 | Inviare la mail all'ufficio Erasmus (bozza pronta) | SUBITO — blocca il LA Generator | `fonti/caso-bruno/LISTA_MATERIALI_BRUNO.md` §E |
| B-2 | Consegnare i materiali del suo percorso | luglio | idem, §A-§D |
| B-3 | Validare contenuti Sapienza (requisiti, checklist, scadenze) man mano che escono dalle sessioni G4/OP | continuo | prompt §4.1 |
| B-4 | Rileggere e approvare l'articolo SEO col suo racconto | quando OP5 lo produce | prompt §4.2 |
| B-5 | Giudizio di qualità sul pilota L3 (il nostro matching vs la sua convalida vera) | agosto-settembre | `DISEGNO_OPERATIONS.md` §OP6 |
| B-6 | Warm-up social (owner) | da dicembre | prompt §4.3 |
| B-7 | Seeding gruppi WhatsApp/Telegram Sapienza | gennaio-febbraio | §5 |

## 3. COMPITI DI NICOLA

| # | Compito | Quando |
|---|---|---|
| N-1 | Girare a Bruno la lista materiali + bozza mail | subito |
| N-2 | Sessioni Claude Code: OP1→OP2, poi OP3/OP4 | luglio-agosto |
| N-3 | SEO online + analytics + Search Console (OP5) | entro autunno |
| N-4 | Pilota L3 con Claude in chat (OP6), quando arriva A5 | agosto |
| N-5 | LA Generator (OP8-9) e PWA/push (OP10-11) | ottobre-dicembre |
| N-6 | Pipeline dati bando 27/28 (OP12) + lanci Codex pianificati | da novembre |
| N-7 | Recuperare tabelle borse Ca' Foscari (serve a OP4) | luglio |
| N-8 | Canale Ca' Foscari (rete Pisa Network) — speculare a B-7 | gennaio-febbraio |

## 4. PROMPT PRONTI PER BRUNO (da incollare in Claude)

> Bruno lavora in chat su claude.ai (non serve Claude Code). Ogni prompt è
> autosufficiente: incollare, allegare i file indicati, seguire le domande.
> Regola d'oro anche per lui: Claude PROPONE, Bruno decide — soprattutto
> quando si tratta di dire "questo dato è vero/falso".

### 4.1 Validazione contenuti Sapienza

```
Sono uno studente di Giurisprudenza alla Sapienza che ha appena finito un
Erasmus a Lisbona. Con mio fratello sto costruendo ErasmusWiz, una guida
web per studenti Erasmus. Il mio ruolo è validare che i contenuti su
Sapienza siano VERI.

Ti incollo qui sotto [oppure: ti allego] un elenco di requisiti/scadenze/
voci di checklist che il sito mostrerà agli studenti di Giurisprudenza.
Per ogni voce aiutami a controllare tre cose:
1. È vera? (confrontala con la mia esperienza che ti racconto e coi
   documenti che ti allego)
2. È scritta in modo che uno studente al primo anno la capisca al volo?
   Se no, proponi una versione più chiara SENZA cambiare il significato.
3. Manca qualcosa che a me è successo davvero e qui non è previsto?

Procedi voce per voce, chiedimi conferma su ogni dubbio invece di
correggere in silenzio. Alla fine dammi l'elenco delle voci in tre gruppi:
CONFERMATE / DA CORREGGERE (con la correzione) / DA VERIFICARE CON
L'UFFICIO. Il risultato lo passo a mio fratello, che aggiorna il sito.

[incolla qui le voci da validare]
```

### 4.2 Rilettura articolo SEO (il suo racconto)

```
Ti allego la bozza di un articolo che racconta in prima persona la MIA
esperienza col Learning Agreement in Erasmus (l'ha scritta un'AI partendo
dai miei documenti). Aiutami a: (1) verificare che ogni fatto raccontato
sia successo davvero come scritto — segnala tutto ciò che è impreciso o
romanzato; (2) controllare che NON ci siano miei dati personali (nome,
date troppo precise, nomi di persone, università riconoscibili se non
voluto); (3) rendere la voce più mia — ti dirò io come parlo. Procediamo
paragrafo per paragrafo.
```

### 4.3 Contenuti social (da dicembre)

```
Gestisco i social di ErasmusWiz, una guida web gratuita per studenti che
fanno domanda Erasmus (Sapienza e Ca' Foscari). Ho fatto l'Erasmus a
Lisbona da studente di Giurisprudenza. Tono: uno studente che parla a
studenti, concreto, zero aziendalese, zero promesse ("verifica sempre sul
bando ufficiale" è il nostro mantra).

Oggi voglio preparare [N] post su [tema — es: "3 errori che ho fatto col
Learning Agreement"]. Formato: [Instagram/TikTok/Telegram]. Propormi 3
tagli diversi, poi sviluppiamo insieme quello che scelgo. Ogni post deve
chiudere con un motivo concreto per aprire il sito (non "link in bio"
generico ma "lì trovi X").
```

### 4.4 Preparazione incontri con l'ufficio Erasmus / RAM

```
Devo [scrivere a / incontrare] [l'ufficio Erasmus Sapienza / il RAM di
facoltà]. Obiettivo: [es. capire se accettano una bozza di LA generata da
uno strumento esterno]. Aiutami a preparare: (1) le 3 domande essenziali
formulate in modo che un ufficio burocratico risponda facilmente (sì/no o
scelta tra opzioni, non domande aperte); (2) cosa NON dire (siamo uno
strumento di appoggio non ufficiale, niente che suoni come richiesta di
endorsement); (3) come registrare la risposta in modo utilizzabile
(la giro a mio fratello per il progetto).
```

## 5. SEEDING GENNAIO-FEBBRAIO (promemoria per entrambi)

- Il messaggio nei gruppi lo scrive UNO STUDENTE (Bruno per Sapienza, un
  contatto studente per Ca' Foscari) — mai tono aziendale.
- Prima il valore, poi il link: "ho messo insieme le scadenze del bando in
  un posto solo" batte "provate il nostro sito".
- Tracciare da dove arriva il traffico (parametri `?src=` negli URL diversi
  per canale — così i KPI di §9 della bussola si leggono per canale).
- Mai spam: un messaggio per gruppo, poi si risponde a chi chiede.

## 6. COME LAVORARE CON I MODELLI CLAUDE (handoff — per Nicola)

- Ogni sessione (chat o Claude Code) parte SEMPRE da: `CLAUDE.md` →
  `PROGETTO_ERASMUS.md` → `STATO_DEL_SITO.md` → `ROADMAP.md` → il disegno
  dell'ondata (`DISEGNO_OPERATIONS.md` per le OP). I documenti sono scritti
  per bastare da soli: se il modello chiede contesto che sta lì, indicagli
  il file invece di rispiegare.
- UNA sessione = UN blocco della roadmap. Se il modello propone di fare di
  più, rifiuta: è nella natura dei blocchi essere piccoli e verificabili.
- Fine sessione: pretendere l'aggiornamento di `STATO_DEL_SITO.md` e la
  spunta in `ROADMAP.md` (è nel `CLAUDE.md`, i modelli lo leggono).
- Trappole d'ambiente note (il modello le trova anche in memoria/STATO):
  niente git da bash (OneDrive corrompe `.git` — usare i `.bat`); il mount
  bash può servire file stale (verificare col Read tool nel dubbio);
  porta 8000 spesso occupata → usare 8001.
