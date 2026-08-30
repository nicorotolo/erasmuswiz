# DISEGNO PIPELINE DATI — V2 "scarica, poi leggi"

> Riscritto il **2026-08-30**. Sostituisce integralmente la V1 del 2026-07-07
> (metodo T1 Gemini-cerca + T2 Codex-verifica) e manda in archivio
> `AUTOMAZIONE_GEMINI.md` e le sezioni di metodo di
> `PIANO_MAPPATURA_SAPIENZA.md`. Tutti i numeri qui sotto sono **misurati oggi**
> sul repo e sul web, non stimati: dove c'e' un numero, c'e' stato un conto.
>
> Obiettivo invariato: **copertura completa e precisa delle mete entro
> febbraio 2027**. Cambia il come, perche' il come precedente si e' fermato.

---

## 0. PERCHE' SERVE UNA V2

Tre fatti nuovi rispetto al 7 luglio.

1. **La pipeline e' ferma da un mese.** L'ultimo lotto pubblicato e'
   `mappatura/lotto-20260729-092017`, del **29 luglio**. Nei giorni buoni
   giravano 4-5 lotti al giorno; dal 30 luglio, zero. Nessuno se n'e' accorto
   perche' niente avvisa quando l'automazione smette di girare.
2. **Gemini CLI gratuito non esiste piu'.** Dal **18 giugno 2026** Google ha
   smesso di servire Gemini CLI e Code Assist agli account individuali
   (gratuiti, AI Pro e AI Ultra) e ha spostato tutti su Antigravity CLI, che
   **non ha una modalita' non interattiva** e ha quote settimanali. Quella
   strada, che sembrava la scorciatoia ovvia, e' chiusa: non va nemmeno
   tentata.
3. **Google AI Plus Student e' attivo** (dal 30/08/2026, gratis per 12 mesi).
   Va detto chiaro per non costruirci sopra un'illusione: **e' l'app Gemini
   per persone, non l'API**. Non da' chiavi, non da' quota automatizzabile,
   non entra nella pipeline notturna. Serve — ed e' prezioso — per il
   **controllo umano a campione** e per i casi difficili, dove un modello
   forte guidato a mano vale piu' di dieci run automatici.

---

## 1. DIAGNOSI MISURATA (30/08/2026)

**Copertura vera, contata per partner** — non per meta, perche' e' il partner
l'unita' di lavoro. Oggi ci sono **1.987 mete** e **745 codici distinti**:

| Campo | Partner con il dato | Partner vuoti |
|---|---:|---:|
| requisitoLingua | 498 (67%) | 247 |
| scadenzeOspitante | 571 (77%) | 174 |
| linkSito | 480 (64%) | 265 |
| **linkCatalogo** | **49 (7%)** | **696** |
| notaDisponibilita | 40 (5%) | 705 |

Otto difetti, in ordine di gravita'.

1. **I codici finti non sono mai stati sanati.** La V1 dichiarava il 14/07
   «codici sintetici sanati/verificati». Non e' vero: **183 mete** portano
   ancora codici inventati `SAP-*`, in tre file (Architettura 113,
   Giurisprudenza 55, Medicina-Psicologia area medica 15). Ogni codice finto
   e' un partner che il riuso non riconosce: sono 183 mete fuori dalla rete di
   propagazione, mappate a parte e mai riconciliate.
2. **Il catalogo corsi non arriva, e non e' colpa della coda.** Il campo
   `linkCatalogo` viene chiesto a ogni lotto — verificato in
   `prepara-batch.mjs`: i campi vuoti finiscono sempre in `campiDaRiempire`.
   Torna vuoto lo stesso: la resa reale della ricerca web sul catalogo e' fra
   il **5% e il 29%** a seconda della Facolta'. Il campo che serve al Learning
   Agreement e' proprio quello che il metodo attuale sa trovare meno.
3. **"Non trovabile" non esiste nei dati pubblicati.** Zero occorrenze in
   tutti i file dati. I 153 casi accertati vivono solo dentro
   `mappatura-stato.json`. Conseguenza: la definizione di "completo" scritta
   nella V1 — *ogni campo ha il dato con fonte, oppure e' marcato non
   trovabile* — **non e' verificabile sul sito**, e allo studente un campo
   cercato invano e un campo mai cercato appaiono identici.
4. **117 partner hanno un requisito di lingua diverso da un dipartimento
   all'altro.** Esempi reali: `D GOTTING01` e' "B1/B2 raccomandato" in un file
   e "B2 per corsi di Psicologia" in un altro; `CZ PRAHA07` e' vuoto in uno e
   pieno nell'altro. La propagazione scrive solo sui campi vuoti e non
   sovrascrive mai: chi arriva primo vince, nessuno riconcilia. E' questa la
   "imprecisione" percepita, ed e' strutturale.
5. **Nessun confronto con la fonte ufficiale.** Confrontando oggi il sito con
   l'export ufficiale Sapienza: **59 codici ufficiali non sono sul sito** (in
   larga parte gli stessi atenei nascosti dietro i codici finti) e **183
   codici sul sito non esistono nell'ufficiale**. Nessun controllo se ne
   accorge: se l'ufficio Erasmus aggiunge o toglie una destinazione, il sito
   non lo sa.
6. **La coda residua e' piccola e parziale.** 44 lotti, 256 mete, **tutti di
   tipo `scadenze+lingua`**: ~213 mete in attesa di lingua, ~211 di scadenze.
   Nulla di programmato per i 696 partner senza catalogo.
7. **Ogni lotto dipende da Codex.** Codex e' l'anello a credito, a limite
   orario, che chiede approvazioni e puo' restare appeso. E' anche l'anello
   che si e' rotto il 29 luglio. Un anello del genere non puo' stare *dentro*
   il ciclo che deve girare 700 volte.
8. **Nessun allarme.** Un mese di fermo senza che nulla lo segnalasse.

---

## 2. LE TRE DECISIONI DELLA V2

### D1 — L'unita' di lavoro e' il PARTNER, una volta sola

Non la meta (1.987), non il dipartimento. Dopo la bonifica dei codici finti
restano **circa 610 partner veri**. Un partner si visita **una volta**, si
raccolgono **tutti e cinque i campi**, e il risultato vale per tutte le mete
che lo condividono, in ogni dipartimento e in ogni ateneo. Non esistono piu'
"lotti per Facolta'": esiste una lista di partner.

### D2 — "Scarica, poi leggi" al posto di "chiedi all'AI di cercare"

Oggi si chiede a un modello di *cercare sul web* e di riportare cosa ha
trovato. E' il compito in cui i modelli sono piu' deboli, e i numeri lo
confermano (catalogo al 7%).

Nella V2 il lavoro si divide in due, e **la parte difficile diventa un
programma, non un modello**:

- **un programma scarica** le pagine del sito ufficiale del partner (gratis,
  illimitato, ripetibile);
- **un modello legge soltanto quelle pagine** ed estrae i cinque campi.
  Leggere una pagina che ha davanti e' il compito in cui anche il modello piu'
  economico e' affidabile.

Che il programma ce la faccia e' stato verificato, non supposto. Su un
campione casuale di **40 partner** presi dall'elenco ufficiale, l'ingresso
giusto (pagina Erasmus/incoming) si trova **senza nessuna AI** in tre modi che
si sommano:

| Segnale | Da solo |
|---|---:|
| Link nella homepage ufficiale | 58% |
| `sitemap.xml` del sito | 45% |
| Sottodominio `international.` / `erasmus.` | 30% |
| **Unione dei tre** | **80%** |

Il **20% che resta** (8 partner su 40: siti irraggiungibili, homepage senza
link utili, portali in sola lingua locale) va alla **ricerca web con
grounding**, che a quel punto e' un'eccezione da ~120 casi e non la regola da
700: sta comodamente dentro le **5.000 ricerche gratuite al mese** incluse sia
nel piano gratuito sia in quello a pagamento.

### D3 — La verifica non e' un secondo modello: e' uno script

Qui esce Codex dal ciclo. Oggi Codex serve a controllare che il dato del primo
modello sia vero, riaprendo i link. Ma se **siamo noi ad aver scaricato la
pagina**, il controllo diventa deterministico e gratuito:

1. la **citazione** deve comparire davvero, lettera per lettera, nel testo che
   abbiamo scaricato (normalizzando spazi e accenti). Se non c'e', il modello
   se l'e' inventata e il campo viene scartato;
2. l'**URL** deve rispondere 200 (`verifica-link.mjs` c'e' gia');
3. il **livello CEFR** deve essere uno dei sei validi, o una forma dichiarata
   — questo chiude anche il difetto gia' noto dei livelli tipo "B1/B2";
4. **coerenza fra dipartimenti**: se lo stesso partner risulta con lingue
   diverse, il caso non viene pubblicato ma finisce in una lista di
   riconciliazione;
5. **coerenza con la fonte ufficiale**: il codice deve esistere nell'export.

Uno script che confronta stringhe non si stanca, non consuma credito, non
chiede approvazioni e non inventa. E' **piu' severo** del controllo di un
modello, non meno.

---

## 3. ARCHITETTURA NUOVA

| Livello | Chi | Cosa fa | Costo |
|---|---|---|---|
| **L0 — Fonte** | script | Scarica i **18 export ufficiali Sapienza** (endpoint pubblico, senza login) e costruisce l'elenco partner: codice vero, ateneo, citta', sito ufficiale. **Il 99% dei partner ha gia' il sito ufficiale qui dentro.** | zero |
| **L1 — Raccolta** | script (crawler) | Per ogni partner: homepage + sitemap + sottodomini, poi discesa guidata da un dizionario multilingue (incoming/exchange/erasmus/catalogue in 12 lingue), max ~25 pagine, cache su disco | zero |
| **L2 — Lettura** | Gemini Flash-Lite via API | **Una chiamata per partner**, con dentro il testo delle pagine migliori. Estrae i 5 campi + citazione testuale | ~zero (vedi §4) |
| **L3 — Cancelli** | script | Citazione presente nel testo, URL 200, CEFR valido, coerenza fra dipartimenti, coerenza con l'ufficiale | zero |
| **L4 — Riserva** | ricerca con grounding | Solo per i partner che L1 non ha saputo raggiungere (~20%) | dentro le 5.000 gratis/mese |
| **L5 — Campione umano** | Nicola, con **Google AI Plus** | 5% estratto a caso + tutti i casi di riconciliazione | tempo |

`applica-batch.mjs`, `valida-stato.mjs`, `verifica-pubblicazione.mjs` e la
propagazione restano quelli che sono: funzionano e sono la parte migliore
dell'impianto attuale.

---

## 4. QUANTO COSTA E QUANTO DURA (conti, non speranze)

**Scaricare le pagine**: gratis. E' solo banda.

**Leggere le pagine**: una chiamata per partner, ~8 pagine di testo pulito
dentro, ~50.000 token in ingresso, risposta breve. Per 610 partner:

- **Piano gratuito** (la chiave che esiste gia'): il limite e' il numero di
  richieste al giorno, non i token. 610 richieste → **circa 3 giorni** di
  macchina, **costo zero**.
- **A pagamento, se si vuole finire in un pomeriggio**: Flash-Lite costa 0,30 $
  per milione di token in ingresso, e la modalita' batch costa la meta'. 610
  partner × ~50k token ≈ 30 milioni di token ≈ **4-9 dollari una tantum**.

E' questo il punto economico della V2: **la mappatura che manca costa zero
euro e tre giorni, oppure meno di dieci dollari e un pomeriggio.** Il costo
non e' piu' una variabile da difendere. E **il credito Codex smette di essere
il collo di bottiglia**, perche' Codex non sta piu' nel ciclo.

---

## 5. LE FASI, IN ORDINE

Ogni fase ha un criterio di uscita misurabile. Non si passa alla successiva
senza.

### Fase 0 — Riaccendere e capire perche' si e' fermata *(mezz'ora, PC aziendale)*
Guardare i log in `%LOCALAPPDATA%\ErasmusWiz\logs` dal 29/07 in poi e lanciare
a mano il preflight. Serve sapere se e' stato Codex (credito), la rete, o il
Task Scheduler.
**Uscita:** una riga scritta qui che dice cos'era. Anche se la V2 togliera'
Codex dal ciclo, la causa va conosciuta: se e' il Task Scheduler, si ripete.

### Fase 1 — Bonifica dei codici finti *(una sessione)*
Sostituire i 183 `SAP-*` con i codici veri dell'export ufficiale.
**Gia' provato: un abbinamento automatico per nome riconosce 170 casi su 183
(93%); i 13 restanti sono riconoscibili a occhio** (Gustave Eiffel, Sorbonne,
RWTH Aachen, Koln, Hildesheim, Greifswald, Lubecca...).
Guadagno immediato misurato: 26 requisiti di lingua e 23 scadenze si riversano
su partner oggi vuoti, 105 link sito tornano indietro, e 183 mete rientrano
nella rete di propagazione.
**Uscita:** zero `SAP-` nei file dati; i partner scendono da 745 a circa 610.

### Fase 2 — Il cancello di completezza *(mezza sessione)*
Script che scarica i 18 export ufficiali e confronta con il pubblicato:
destinazioni ufficiali mancanti, destinazioni pubblicate non piu' ufficiali,
differenze di posti/mesi/livello. Gira ogni notte.
**Uscita:** il report esiste ed e' a zero differenze non spiegate. Da qui in
avanti «manca una meta» e' una domanda con risposta automatica.

### Fase 3 — Il campo che manca: `nonTrovabile` *(mezza sessione)*
Aggiungere ai dati il campo che oggi vive solo nel file di stato, con la fonte
tentata e la data. Il sito deve poter dire *"cercato, non pubblicato
dall'ateneo"*, che e' un'informazione onesta e utile, diversa da un vuoto.
**Uscita:** i 153 casi gia' accertati sono nei dati; "completo" diventa
verificabile con uno script.

### Fase 4 — Costruire crawler, lettore e cancelli *(2 sessioni, a Codex come specifica congelata)*
Tre script nuovi (`raccogli-partner.mjs`, `leggi-partner.mjs`, `cancelli.mjs`)
piu' un `esegui-partner.mjs` che li incatena. Riuso quasi integrale di
`applica-batch.mjs` e `valida-*.mjs`.
**Uscita:** su 20 partner di prova, ≥80% raggiunto senza ricerca web e zero
citazioni che non compaiono nella pagina scaricata.

### Fase 5 — La passata completa *(3-5 giorni di macchina)*
610 partner, cinque campi, una visita ciascuno.
**Uscita:** catalogo ≥70%, lingua ≥90%, scadenze ≥90% — contando come coperto
anche il `nonTrovabile` onesto.

### Fase 6 — Riconciliazione dei 117 conflitti *(una sessione + campione umano)*
Dove lo stesso partner ha requisiti diversi, vince la fonte piu' recente e piu'
specifica; i casi ambigui li guarda Nicola con Gemini (Google AI Plus).
**Uscita:** zero partner con requisiti di lingua contraddittori.

### Fase 7 — Campione umano e firma *(mezza giornata)*
5% estratto a caso (~30 partner), confronto dato-fonte a mano.
**Uscita:** ≥95% di corrispondenza. Sotto, si torna alla Fase 5.

### Fase 8 — Refresh del bando 27/28 *(dicembre-febbraio)*
Con l'impianto sopra, il refresh e' una passata di aggiornamento sulle
scadenze, non una nuova mappatura.

**Calendario realistico:** Fasi 0-4 entro meta' settembre, Fase 5 entro fine
settembre, Fasi 6-7 entro meta' ottobre. **Quattro mesi di margine** sulla
scadenza di febbraio.

---

## 6. COSA VUOL DIRE "COMPLETO", ADESSO CHE E' VERIFICABILE

Un partner e' completo quando, per ognuno dei cinque campi, vale una di due
cose:

- c'e' il **dato**, con URL della fonte, citazione testuale **presente nella
  pagina scaricata** e data di verifica; oppure
- c'e' **`nonTrovabile`**, con l'URL della pagina dove e' stato cercato e la
  data.

Un campo riempito senza citazione verificabile non e' un dato: e' un rischio.
Resta il principio numero uno del progetto — un dato sbagliato costa un anno a
uno studente — solo che adesso e' uno script a farlo rispettare, non la buona
volonta' di un modello.

---

## 7. COSA ESCE DI SCENA

- **Codex dentro il ciclo per-lotto.** Resta utile per costruire gli script
  (Fase 4, con specifica congelata, come sempre) e per revisioni a campione.
  Non deve piu' essere attraversato 700 volte.
- **`AUTOMAZIONE_GEMINI.md`**: archiviato; descrive il flusso Gemini-cerca +
  Codex-verifica che qui viene sostituito.
- **La coda per Facolta' in `mappatura-stato.json`**: sostituita dall'elenco
  partner. Il file resta come stato e come storico.
- **Gemini CLI**: mai adottato, e ora impossibile. Antigravity CLI non serve a
  questo lavoro (niente modalita' automatica).

---

## 8. RISCHI, E COSA FARE

- **Siti che si difendono dai bot (403/429).** Un ritardo fra le richieste, un
  solo dominio alla volta, rispetto di `robots.txt`. Se un sito respinge, il
  partner va alla riserva L4.
- **Pagine costruite in JavaScript** (il testo non c'e' nell'HTML).
  Riconoscibili perche' la pagina scaricata e' quasi vuota: vanno anche loro a L4.
- **PDF.** Molte factsheet vivono in PDF; il crawler li raccoglie e il testo si
  estrae come per l'HTML. Sono spesso la fonte migliore.
- **L'ateneo cambia sito.** Le date di verifica sono gia' nei dati: si
  ricontrolla cio' che e' piu' vecchio di N mesi, partendo dai partner piu' usati.
- **Un altro mese di silenzio.** Serve un allarme: se non arrivano lotti per 48
  ore, deve arrivare una notifica. Costo: dieci righe.
- **Ca' Foscari non ha un export pubblico equivalente.** I suoi 392 posti
  restano sul flusso attuale; la lettura L2 vale comunque anche per loro,
  perche' parte dal sito del partner, non dall'export.

---

## 9. COSA NON FARE

- Non rimettere un modello a **cercare** cio' che un programma puo' **scaricare**.
- Non far dipendere il ciclo da uno strumento a credito o a limite orario.
- Non pubblicare un dato la cui citazione non compare nella pagina scaricata,
  per nessun motivo e da nessun modello.
- Non usare Claude per la mappatura di massa: resta su specifica, revisione e
  sviluppo.
- Non contare su Google AI Plus per l'automazione: **e' l'app, non l'API**.
- Non aggiungere campi allo schema: i cinque bastano, e tre sono ancora sotto
  il 10%.

---

## 10. LA PRIMA COSA, DOMATTINA

Sul PC aziendale, nella cartella del repo:

```
node scripts/esegui-lotto-automatico.mjs --preflight --online
```

Serve a sapere **perche' si e' fermata il 29 luglio**. E' l'unica cosa da fare
prima di costruire qualsiasi pezzo della V2: se la causa e' il Task Scheduler o
la rete, tornera' a mordere anche la pipeline nuova.
