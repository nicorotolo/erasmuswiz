# ErasmusWiz — Fase 1

Cruscotto web per studenti che fanno domanda Erasmus all'Università Ca' Foscari.
Questa è la **Fase 1**: dimostra che il sito **legge i dati da file separati
e li mostra**. Niente profilo, compatibilità, countdown o checklist (verranno dopo).

---

## A cosa serve ogni file

| File | A cosa serve |
|------|--------------|
| `index.html` | La pagina. Contiene la struttura (intestazione, sezioni vuote, piè di pagina). I contenuti li riempie il JavaScript. |
| `css/style.css` | Lo **stile**: colori, spazi, e la griglia che rende il sito responsive (una colonna su telefono, più colonne su desktop). |
| `js/dati-bando.js` | I **requisiti del bando** (sezione Idoneità). File di SOLI dati. |
| `js/dati-mete.js` | I **dati delle mete** (le destinazioni Erasmus). È un file di SOLI dati. |
| `js/dati-scadenze.js` | Le **scadenze di Ca' Foscari** (timeline + countdown). File di SOLI dati. |
| `js/dati-checklist.js` | I **passi della checklist**. File di SOLI dati (lo stato delle spunte è salvato a parte, nel dispositivo). |
| `js/app.js` | La **logica**: legge i file dati e costruisce le sezioni. NON contiene dati. |
| `README.md` | Questo file. |

**Regola più importante del progetto:** i dati (mete, scadenze) stanno SEMPRE nei
file `dati-*.js`, mai dentro `app.js`. Per aggiornare un contenuto modifichi un
file dati; il codice non si tocca.

---

## Come testare nel browser (importante)

⚠️ **Non aprire `index.html` con un doppio click.** Per sicurezza il browser, quando
apre un file locale con doppio click, **blocca il caricamento dei file dati separati**:
vedresti una pagina bianca. Non è un errore dei dati — è una regola di sicurezza.

La soluzione è avviare un piccolo **server locale** (un programmino che "serve" la
cartella al browser come farebbe un sito vero). Ecco come, passo-passo su Windows.

### Opzione A — con Python (se ce l'hai già installato)

1. Apri il **Prompt dei comandi** (cerca "cmd" nel menu Start).
2. Spostati nella cartella del progetto. Copia-incolla questo comando
   (è già il percorso giusto) e premi Invio:

   ```
   cd "C:\Users\ASUS\OneDrive - Presidenza del Consiglio dei ministri\Desktop\Me\6. Business AI\3. ErasmusWiz"
   ```

3. Avvia il server (prova prima `python`, se dice "non trovato" prova `py`):

   ```
   python -m http.server 8000
   ```

4. Apri il browser e vai all'indirizzo:

   **http://localhost:8000**

5. Per **spegnere** il server: torna sul Prompt dei comandi e premi `Ctrl + C`.

### Opzione B — con l'estensione "Live Server" di VS Code

Se usi VS Code: installa l'estensione **Live Server**, poi clic destro su
`index.html` → **Open with Live Server**. Si apre da solo nel browser.

---

## Cosa devi vedere (criterio di completamento Fase 1)

- La sezione **Scadenze Ca' Foscari** con le due scadenze e la data scritta in italiano.
- La sezione **Mete disponibili** con la card di **Aix-Marseille**: università, città+paese,
  dipartimento, area disciplinare, coordinatore, posti in linguaggio umano
  ("3 posti da 10 mesi - triennale"), requisiti linguistici e il pulsante alla scheda PDF.
- Restringendo/allargando la finestra il layout si adatta: su schermo stretto le card
  vanno in colonna, su schermo largo in griglia.

Se vedi tutto questo, la Fase 1 è completa.

---

## Come aggiungere una seconda meta (modificando SOLO `js/dati-mete.js`)

1. Apri `js/dati-mete.js`.
2. Dentro le parentesi quadre `[ ... ]` c'è già **un blocco** `{ ... }` (la meta di
   Aix-Marseille). **Copia tutto quel blocco**, dalla `{` iniziale alla `}` finale.
3. Incollalo subito dopo, **mettendo una virgola `,`** tra un blocco e l'altro. Schema:

   ```javascript
   const METE = [
     { ...prima meta... },   // <-- virgola dopo la graffa
     { ...nuova meta... }
   ];
   ```

4. Cambia i valori della copia con quelli della nuova destinazione (`id` deve essere
   diverso e unico, es. `"unibcn-eco-0311"`).
5. Salva il file e ricarica la pagina nel browser: la nuova card appare da sola.
   Non hai toccato nessun file di codice. 

> Lo stesso vale per le scadenze: si modificano in `js/dati-scadenze.js`.
