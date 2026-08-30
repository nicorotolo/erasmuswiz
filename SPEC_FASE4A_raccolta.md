# SPEC FASE 4a — LA RACCOLTA — **CONGELATA 2026-08-30**

> Ordine di lavoro per Codex. Chi esegue non prende decisioni di progetto: se
> qualcosa qui e' ambiguo, si ferma e chiede invece di scegliere.
> Contesto: `DISEGNO_PIPELINE_DATI.md` (pipeline V2, "scarica poi leggi").
>
> **Perimetro: UN solo script nuovo, `scripts/raccogli-partner.mjs`.**
> La lettura col modello, i cancelli e l'applicazione ai dati sono la Fase 4b e
> **non** fanno parte di questo lavoro. Questo pezzo non chiama nessun modello,
> non ha bisogno di chiavi, non tocca i file dati e non usa git.

---

## 0. PRIMA DI SCRIVERE CODICE: COSA ESISTE GIA'

Questo progetto ha gia' pagato una volta il costo di far ricostruire cose che
c'erano. Leggere questi file prima di progettare qualunque cosa, e **riusarli**:

| File | Cosa fa gia' | Regola |
|---|---|---|
| `scripts/lib-mete.mjs` | carica le mete (`caricaMete`), legge/scrive campi nel testo (`valoreCampo`, `impostaCampo`, `spanTutteMete`), e definisce **cosa vuol dire vuoto** (`campoVuoto`, `campoVuotoValore`, `statoCampo`) | usare queste. **Non** scrivere un'altra definizione di "vuoto": ce n'erano cinque e il 30/08 sono state unificate apposta |
| `scripts/verifica-completezza.mjs` | scarica i 18 export ufficiali Sapienza in `fonti/sapienza/goerasmus/<AMBITO>.csv` e li confronta col sito | riusare i CSV che lascia in cache; **non** riscrivere il download |
| `scripts/verifica-link.mjs` | controlla via HTTP che un URL risponda | riusare in Fase 4b, non qui |
| `scripts/propaga-tutto.mjs` | condivide i dati fra mete con lo stesso codice | non toccare |
| `mappatura-stato.json` | stato autorevole della mappatura | **sola lettura** in questo lavoro |

L'elenco ufficiale porta gia' il **sito web di ogni partner** (colonna
`Sito Web`, presente per il 99% degli accordi): e' il punto di partenza della
raccolta e non va cercato altrove.

---

## 1. COSA DEVE FARE

`scripts/raccogli-partner.mjs` mette in cache locale, per ogni ateneo partner,
le pagine del suo sito che possono contenere le informazioni per gli studenti
Erasmus in arrivo. Scarica e basta: non interpreta, non estrae dati, non
giudica.

**Perche' cosi', e perche' non va "migliorato":** il metodo precedente chiedeva
a un modello di *cercare sul web*, ed e' il compito in cui i modelli rendono
meno — il catalogo corsi risultava trovato nel 7% dei casi. Misurato su 40
partner presi a caso, l'ingresso giusto si trova **senza nessuna AI nell'80%
dei casi** sommando tre segnali (link in homepage 58%, sitemap 45%,
sottodominio 30%). Questo script raccoglie quel materiale; sara' la Fase 4b a
farlo leggere a un modello, che a quel punto ha la pagina davanti.

---

## 2. IL CONTRATTO

### 2.1 L'elenco dei partner

Prima cosa: costruire l'elenco di lavoro e scriverlo in `raccolta/partner.json`.

Fonti, in quest'ordine:
1. i CSV in `fonti/sapienza/goerasmus/*.csv` (se mancano, scaricarli dallo
   stesso endpoint che usa `verifica-completezza.mjs`) — danno codice Erasmus,
   ateneo, citta', paese e **sito ufficiale**;
2. i file `js/atenei/**/dati-mete*.js` — danno i partner di Ca' Foscari, che
   negli export Sapienza non ci sono, e il `linkSito` gia' noto.

Una voce per **codice Erasmus normalizzato** (spazi compressi, maiuscolo: usare
la stessa normalizzazione degli altri script), con:

```json
{
  "codice": "A  SALZBUR01",
  "codiceNorm": "A SALZBUR01",
  "ateneo": "PARIS LODRON UNIVERSITÄT SALZBURG",
  "citta": "Salzburg",
  "paese": "Austria",
  "siti": ["https://www.plus.ac.at/"],
  "mete": 18,
  "campiMancanti": ["linkCatalogo", "notaDisponibilita"]
}
```

`campiMancanti` si calcola con `statoCampo()`: sono i campi che per **almeno
una** meta con quel codice non valgono `dato` ne' `nonTrovabile`. Un partner con
`campiMancanti` vuoto **non si raccoglie**.

Attesi **615 partner**, di cui **603** con almeno un campo mancante (misurato il
2026-08-30 con `statoCampo()`, contando i cinque campi). Se i numeri risultano
diversi di piu' del 5%, fermarsi e segnalare invece di proseguire: vuol dire che
i dati sono cambiati sotto i piedi o che l'elenco e' costruito male.

### 2.2 Trovare i punti d'ingresso

Per ogni partner, nell'ordine, fino a un massimo di 8 candidati:

1. **Homepage ufficiale**: scaricarla ed estrarne i link il cui testo o URL
   contiene una delle parole del dizionario (§2.5).
2. **Sitemap**: `robots.txt` → righe `Sitemap:`; in mancanza, `/sitemap.xml`.
   Se e' un indice di sitemap (contiene `.xml` nei `<loc>`), scendere di **un**
   livello, preferendo i figli il cui URL contiene una parola del dizionario, e
   al massimo 3 figli. Tenere i `<loc>` che contengono una parola del
   dizionario.
3. **Sottodomini**: `international.`, `erasmus.`, `io.`, `oia.` prefissi
   all'host senza `www.`. Vale come candidato se risponde 200 e il corpo supera
   1.500 byte.

Se nessuno dei tre da' candidati, il partner si chiude con esito
`nonRaggiunto` e **non e' un errore**: e' il ~20% previsto, che in Fase 4b
andra' alla ricerca web di riserva.

### 2.3 La discesa

Da ogni candidato, visita in ampiezza:
- **profondita' massima 3** (la homepage e' 0);
- **massimo 25 pagine salvate per partner**, poi si smette;
- si seguono solo link **dello stesso dominio registrabile** del candidato (i
  sottodomini dello stesso ateneo vanno bene);
- la coda si ordina per punteggio del link decrescente (§2.5): le pagine buone
  si visitano per prime, cosi' il tetto di 25 non si spreca;
- si scartano URL con estensioni non testuali (immagini, zip, video) e i
  duplicati dopo aver tolto frammento e parametri di tracciamento.

### 2.4 Cosa si salva

Sotto `raccolta/pagine/<codiceNorm senza spazi>/`:

- `indice.json`:
  ```json
  {
    "codice": "A  SALZBUR01",
    "esito": "raggiunto",
    "raccoltoIl": "2026-09-01T10:00:00.000Z",
    "candidati": ["https://..."],
    "pagine": [{ "file": "001.json", "url": "https://...", "punteggio": 7, "profondita": 1 }],
    "note": []
  }
  ```
- `001.json`, `002.json`, …:
  ```json
  {
    "url": "https://...",
    "urlFinale": "https://...",
    "stato": 200,
    "tipo": "html",
    "titolo": "Incoming exchange students",
    "testo": "…testo visibile ripulito…",
    "scaricataIl": "2026-09-01T10:00:03.000Z"
  }
  ```

Il `testo` e' il contenuto visibile: via `<script>`, `<style>`, `<nav>`,
`<footer>`, tag ridotti a spazi, spazi compressi. **Non** togliere gli accenti
e **non** tradurre: in Fase 4b la citazione dovra' ritrovarsi identica nella
pagina, e ogni ritocco qui rompe quel controllo.

**PDF**: si salvano con `"tipo": "pdf"`, `"testo": null` e il `url`. Estrarne il
testo richiederebbe una libreria nuova, e qui **non si aggiungono dipendenze**:
i PDF sono materiale per la Fase 4b, che decidera' come leggerli.

### 2.5 Il dizionario e il punteggio

Un link vale la somma dei punti delle **radici** che compaiono nel suo testo o
nel suo URL (senza accenti, minuscolo).

> ⚠️ **Corretto il 2026-08-30, dopo la misura sul campo.** La prima versione di
> questo elenco usava parole intere, e perdeva ingressi che esistevano:
> `internazionalità` non conteneva `internazionale`, `Studentenaustausch` non
> conteneva `austauschstudierende`, e `student exchange` — la forma piu' comune
> in inglese — non conteneva `exchange student`. Due regole che ne derivano:
> **si usano radici, non parole flesse**, e **due radici non devono contenersi
> a vicenda**, altrimenti lo stesso testo viene contato due volte e il
> punteggio si gonfia senza motivo.

- **+4** ingresso: `incoming`, `exchange student`, `student exchange`,
  `erasmus`, `study abroad`, `studenti in scambio`, `austausch`,
  `etudiants en echange`, `intercambio`, `wymiana`, `değişim`, `degisim`,
  `csereprogram`, `schimb`, `utbytesstudent`;
- **+3** catalogo: `course catalog(ue)`, `module catalog`, `programme
  catalogue`, `vorlesungsverzeichnis`, `modulhandbuch`, `studienangebot`,
  `catalogue de cours`, `offre de formation`, `oferta academica`, `guia
  docente`, `catalogo dei corsi`, `ders katalogu`, `katalog przedmiotow`,
  `kursutbud`;
- **+3** requisiti: `language requirement`, `sprachnachweis`, `niveau de
  langue`, `requisitos de idioma`, `language of instruction`, `cefr`;
- **+2** scadenze: `deadline`, `nomination`, `application period`, `frist`,
  `bewerbungsschluss`, `date limite`, `plazo`, `termin`, `son basvuru`;
- **+1** generico: `internation`, `internazional`, `internacional`,
  `nemzetkozi`, `mezinarodni`, `uluslararasi`, `mobilit`, `movilidad`;
- **−3** rumore: `news`, `notizie`, `alumni`, `press`, `vacancies`, `research`,
  `phd`, `doctoral`, `outgoing`, `staff mobility`, `summer school`.

Si accodano solo i link con punteggio **> 0**. La funzione che calcola il
punteggio deve essere **pura ed esportata**: e' l'unica parte con una prova
unitaria (§4).

### 2.6 Ripartenza

Prima di lavorare un partner, se esiste `indice.json` con `esito` valorizzato e
`raccoltoIl` piu' recente di **30 giorni**, si salta. Con `--riprendi-tutto` si
ignora la cache. Ogni partner completato scrive subito il suo `indice.json`:
chiudere il portatile a meta' raccolta non deve costare piu' del partner in
corso.

---

## 3. REGOLE NON NEGOZIABILI

1. **Nessuna dipendenza nuova.** Solo Node 22 e la sua libreria standard
   (`fetch` c'e'). Niente cheerio, niente axios, niente parser PDF.
2. **Educazione verso i siti**: `robots.txt` rispettato; **una richiesta alla
   volta per dominio** con almeno **1 secondo** di pausa fra due richieste allo
   stesso dominio; nessuna pausa fra domini diversi. User-agent dichiarato:
   `ErasmusWizBot/1.0 (+https://nicorotolo.github.io/erasmuswiz)`.
3. **Concorrenza fra domini diversi: 6**, configurabile con `--paralleli=N`.
4. **Timeout 20 secondi per pagina**; su timeout o errore di rete si annota e si
   passa oltre, non si ritenta piu' di una volta.
5. **Nessun limite di tempo sull'esecuzione complessiva**: puo' durare ore.
6. **Non scrive niente** fuori da `raccolta/`. In particolare non tocca
   `js/atenei/**`, non tocca `mappatura-stato.json`, non chiama git.
7. `raccolta/` va aggiunta a `.gitignore`: sono decine di migliaia di pagine,
   non entrano nel repo.
8. Uscita **0** se la raccolta e' arrivata in fondo, anche con partner
   `nonRaggiunto`. Uscita **1** solo se non ha potuto nemmeno cominciare
   (elenco partner non costruibile).

---

## 4. COME SI PROVA CHE FUNZIONA

Nessuno di questi punti e' facoltativo; il lavoro si considera finito quando
tutti passano.

1. **Prova unitaria** in `test/raccolta-punteggio.test.mjs` sulla funzione di
   punteggio: un link "Incoming exchange students" batte "News"; un link con
   `outgoing` va sotto zero; il confronto ignora accenti e maiuscole. La prova
   va verificata **rompendola** (invertire il segno del punteggio deve farla
   diventare rossa) e il fatto va scritto nel resoconto.
2. **Prova sul campo, almeno 100 partner** (`--limite=100`, presi a intervalli
   regolari dall'elenco, non i primi che sono tutti austriaci).

   > ⚠️ **Correzione del 2026-08-30.** Questo criterio diceva "16 su 20", ed era
   > mal posto: su venti casi l'incertezza e' di circa ±9 punti, quindi 14/20 e
   > 16/20 non sono distinguibili. Con una soglia cosi' si finisce a ritoccare
   > il crawler finche' un numero rumoroso non la supera, cioe' a costruire
   > qualcosa che funziona su quei venti siti e basta.

   Soglia: almeno il **75% dei partner CHE HANNO UN INDIRIZZO** nell'accordo.
   Quelli senza indirizzo si contano a parte: non c'e' niente da scaricare, e
   non sono un difetto della raccolta.

   Riportare sempre i non raggiunti **divisi per causa** (irraggiungibile,
   nega 403/404, vietato da robots, raggiungibile ma nessun candidato, nessun
   indirizzo noto): e' quella divisione che dice se resta un difetto da
   correggere o se si e' arrivati al limite di cio' che si puo' scaricare.

   **Riferimento misurato il 2026-08-30**: **80 raggiunti su 100**, cioe' 80 su
   96 fra quelli con indirizzo. Non raggiunti: 6 raggiungibili ma senza
   candidati, 5 irraggiungibili, 4 senza indirizzo, 4 che negano, 1 altro.
   Chi tocca questo script rimisura e confronta con questi numeri.
3. **Ripartenza**: rilanciando subito lo stesso comando, zero richieste HTTP
   nuove e stesso esito.
4. **Interruzione**: interrotto a meta' (Ctrl-C) e rilanciato, riprende senza
   perdere i partner gia' chiusi.
5. **Educazione**: dal registro deve risultare che a nessun dominio sono state
   fatte due richieste a meno di un secondo di distanza. Basta un contatore
   stampato a fine corsa.
6. `npm run test:unit` resta verde (217 prove oggi).

---

## 5. COSA NON FARE

- Non chiamare nessun modello, non leggere `GEMINI_API_KEY`.
- Non estrarre dati dalle pagine: qui si raccoglie e basta.
- Non scrivere nei file dati ne' nello stato, per nessun motivo.
- Non aggiungere dipendenze, nemmeno "solo per il parsing HTML".
- Non riscrivere il download degli export ufficiali: c'e' gia'.
- Non introdurre una nuova definizione di "campo vuoto": usare `statoCampo()`.
- Non "migliorare" il perimetro aggiungendo la lettura o i cancelli: sono la
  Fase 4b, e vanno consegnati separatamente.
- Se una regola di questa specifica si rivela impossibile o sbagliata, **non
  aggirarla**: fermarsi e dirlo.
