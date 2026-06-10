# DISEGNO DATI — esempio reale validato (meta Aix-Marseille)

> Questo file accompagna PROGETTO_ERASMUS.md. Contiene:
> 1. La struttura dati validata sul bando + PDF reali di Ca' Foscari.
> 2. Una meta VERA completamente estratta (il "pezzo d'oro" da replicare).
> 3. La logica di compatibilità (area disciplinare + livello + lingua).
> 4. Spiegazione di ogni campo.
> Fonti: bando Erasmus+ studio Europa 2026/27 Ca' Foscari + fact sheet Aix-Marseille.

---

## 1. COME LEGGERE I DATI GREZZI DI CA' FOSCARI

Sul sito ufficiale ogni meta appare così (esempio reale):

    Aix-Marseille University - Faculty of Economics and Management  [F MARSEIL84]
    Area disciplinare: 0311 Economics
    Coordinatore: Bastianello Lorenzo
    Studenti/Mesi: 3 x 10 L, 6 x 5 LM

Tradotto in linguaggio umano (= il nostro valore aggiunto):
- 3 posti da 10 mesi per studenti TRIENNALI (L)
- 6 posti da 5 mesi per studenti MAGISTRALI (LM)

Il requisito linguistico, le scadenze dell'ateneo ospitante, i prerequisiti
NON sono in questa riga: stanno nel PDF "fact sheet" di ogni meta. Vanno
estratti a mano. QUESTO è il lavoro che nessun concorrente fa = il fossato.

---

## 2. STRUTTURA DATI — UNA META (validata)

Campi:
- id                  identificatore unico (es. "amu-eco-0311")
- universita          nome esteso ateneo partner
- citta               città (può differire dalla sede legale!)
- paese               dedotto dal codice (F=Francia, D=Germania, E=Spagna...)
- codice_erasmus      es. "F MARSEIL84"
- dipartimento_cf     dipartimento Ca' Foscari di riferimento
- aree_disciplinari   lista di codici+nome (è IL filtro principale)
- coordinatore_cf     docente referente a Ca' Foscari
- posti               lista di opzioni: {numero, mesi, livello, note}
- requisito_lingua    lista: {lingua, livello, condizione}
- prerequisiti        prerequisiti accademici richiesti dall'ospitante
- scadenze_ospitante  scadenze proprie dell'ateneo estero (≠ scadenze CF!)
- alloggio            note su alloggio studentesco
- visto               nota visto (UE / extra-UE)
- crediti             sistema crediti (ECTS, quanti a semestre)
- link_pdf            URL al fact sheet ufficiale
- link_sito           sito ufficiale ateneo partner
- note_pratiche       VALORE AGGIUNTO: consigli da studente, costo vita, ecc.

---

## 3. IL "PEZZO D'ORO" — META AIX-MARSEILLE, ESTRATTA DAL PDF REALE

(in formato JSON — è il file che Claude Code userà come dato di esempio)

```json
{
  "id": "amu-eco-0311",
  "universita": "Aix-Marseille University (AMU) - Faculty of Economics and Management",
  "citta": "Aix-en-Provence / Marseille",
  "paese": "Francia",
  "codice_erasmus": "F MARSEIL84",
  "dipartimento_cf": "Economia",
  "aree_disciplinari": [
    { "codice": "0311", "nome": "Economics" }
  ],
  "coordinatore_cf": "Bastianello Lorenzo",
  "posti": [
    { "numero": 3, "mesi": 10, "livello": "L",  "note": "" },
    { "numero": 6, "mesi": 5,  "livello": "LM", "note": "" }
  ],
  "requisito_lingua": [
    { "lingua": "Francese", "livello": "B1", "condizione": "per i corsi in francese" },
    { "lingua": "Inglese",  "livello": "B2", "condizione": "per i corsi in inglese" }
  ],
  "prerequisiti": "Corsi 3° anno triennale: min. 2 anni di studi in Economia o Management. Corsi magistrale: min. 3 anni in Economia o Management.",
  "scadenze_ospitante": [
    { "cosa": "Nomination (autunno/anno intero)", "periodo": "1 marzo - 1 aprile" },
    { "cosa": "Application (autunno/anno intero)", "periodo": "entro 15 aprile" },
    { "cosa": "Nomination (primavera)",            "periodo": "1 settembre - 1 ottobre" },
    { "cosa": "Application (primavera)",           "periodo": "entro 15 ottobre" }
  ],
  "alloggio": "Stanza in residenza su richiesta (con il nomination pack), assegnata a Aix-en-Provence o Marseille in base ai corsi scelti. CROUS Aix-Marseille.",
  "visto": "Cittadini UE: nessun visto. Extra-UE: visto obbligatorio, serve lettera di ammissione.",
  "crediti": "30 ECTS/semestre, 60 ECTS/anno (sistema ECTS A-F).",
  "link_pdf": "https://apps.unive.it/dati/web/attach/destinazioni_erasmus/3254565",
  "link_sito": "http://www.univ-amu.fr/en",
  "note_pratiche": "Devi scegliere UN solo campus (Aix o Marseille), niente pendolarismo. Almeno 80% dei corsi nello stesso programma per evitare sovrapposizioni orario. Corsi serali di francese (SUL) danno 4 crediti extra a semestre. Assicurazione di responsabilità civile obbligatoria."
}
```

---

## 4. STRUTTURA DATI — SCADENZE DI CA' FOSCARI (comuni a tutte le mete)

```json
{
  "scadenze_cafoscari": [
    { "cosa": "Apertura candidature", "data": "2026-02-02T12:00", "descrizione": "Si aprono le candidature sul portale Ca' Foscari." },
    { "cosa": "Chiusura candidature", "data": "2026-02-25T12:00", "descrizione": "Ultimo momento per candidarsi. Nessuna proroga." }
  ]
}
```
(Fonte: bando ufficiale 2026/27. Le scadenze post-selezione — learning
agreement, ecc. — si aggiungono nella fase 2 del prodotto.)

---

## 5. STRUTTURA DATI — PROFILO STUDENTE

```json
{
  "dipartimento": "Economia",
  "area_disciplinare": "0311",
  "livello": "L",
  "lingue": [
    { "lingua": "Inglese",  "livello": "B2", "certificata": true },
    { "lingua": "Francese", "livello": "A2", "certificata": false }
  ]
}
```

---

## 6. LOGICA DI COMPATIBILITÀ (percentuale ponderata + filtro a monte)

PASSO 0 — FILTRO NETTO (a monte, prima del punteggio):
  AREA DISCIPLINARE: l'area della meta combacia con quella del profilo?
  - no -> la meta NON entra in classifica (esclusa)
  - sì -> entra in classifica e riceve un punteggio

PASSO 1 — PUNTEGGIO 0-100% su 3 criteri pesati:

  LINGUA (peso 50%):
    - livello richiesto posseduto E certificato        -> 50
    - livello posseduto ma NON certificato             -> 25
    - un livello sotto al richiesto                    -> 12
    - più di un livello sotto                          -> 0

  LIVELLO ACCADEMICO (peso 30%):
    - il livello dello studente (L/LM) è tra i posti   -> 30
    - non è tra i posti                                -> 0

  DISPONIBILITÀ POSTI (peso 20%):
    - scala in base al numero di posti per il suo livello
      (es. 1 posto -> ~5, 6+ posti -> 20). Più posti = più chance.

  Totale = somma dei tre. Serve a ORDINARE le mete dalla più alla meno
  compatibile.

PASSO 2 — ACCANTO AL PUNTEGGIO, SEMPRE: icona + spiegazione onesta
  ✅ (es. 80-100%) "Compatibile"
  ⚠️ (es. 40-79%)  "Possibile, ma: ti manca il B2 inglese certificato"
  🔒 (es. 0-39%)   "Non accessibile ora: requisito linguistico non raggiunto"

Il punteggio dà l'ORDINE; l'icona+testo danno l'ONESTÀ e il "cosa fare".
Pesi decisi: lingua 50 / livello 30 / posti 20. (Modificabili in un solo
punto del codice — chiedere a Claude Code di renderli una costante.)

---

## 7. ESTRAZIONE DATI DAI PDF — FLUSSO IBRIDO (importante)

Claude Code COSTRUISCE il sito; NON è responsabile della correttezza dei dati.
Il sito è STATICO: mostra dati già pronti, NON legge i PDF in tempo reale.
L'estrazione si fa PRIMA, a tavolino, e il risultato finisce nel file dati.

Flusso corretto per ogni meta:
  1. Estrazione-bozza: Claude (o Claude Code) legge il PDF e propone i campi
     compilati. Veloce.
  2. Validazione umana OBBLIGATORIA: tu o il contatto Ca' Foscari controlla e
     corregge. Qui sta la responsabilità e il valore — NON delegabile a un
     automatismo.
  3. Il dato validato entra nel file dati.

Il collo di bottiglia non sparisce: si SPOSTA dalla copiatura alla verifica,
che è dove deve stare. Rischio n.1 del progetto = un dato sbagliato fa
sbagliare una scadenza a uno studente. L'estrazione automatica non verificata
NON riduce questo rischio, lo nasconde.

Raccomandazione: parti dal dipartimento dove hai il contatto di validazione,
così le ore di lavoro sono anche controllo qualità e non sei solo.
