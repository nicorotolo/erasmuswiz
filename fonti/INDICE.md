# Fonti ufficiali — Bando Erasmus+ studio (Europa) a.a. 2026/2027

Sono la **base dati** del sito: i file `js/atenei/<ateneo>/dati-*.js` derivano da
qui. Non modificare questi file: sono le fonti.

**I file nella radice di `fonti/` sono di Ca' Foscari.** Le fonti Sapienza stanno
in `fonti/sapienza/` (vedi in fondo): la cartella è nata il 2026-07-28, prima di
allora la Sapienza non aveva in repo nessuna fonte normativa e i suoi contenuti
erano marcati `inVerifica: true`.

| File | Cosa contiene | Uso nel progetto |
|------|---------------|------------------|
| `Lista_destinazioni_Erasmus__per_studio_europa_a.a._2026-2027.ods` | Elenco completo destinazioni per dipartimento (posti, mesi, livello, area ISCED, coordinatore, codice Erasmus). | **Fonte delle 58 mete** di Economia in `dati-mete.js`. |
| `Bando_Erasmus__per_studio__Europa__2026_2027.pdf` | Testo del bando: requisiti di idoneità, regole, scadenze. | Validare `dati-bando.js` e `dati-scadenze.js`. |
| `Legenda_sigle_e_acronimi_menu_a_tendina_destinazioni_dipartimenti.pdf` | Significato di L / LM / PhD, vincoli di semestre, EU/NON-EU, EUTOPIA. | Decodifica dei campi della lista destinazioni. |
| `Allegato_1.pdf` | **Importi borse** Erasmus+ (contributo mensile per paese di destinazione). | Possibile campo futuro "contributo" per meta. |
| `Allegato_2_-_Informativa_sul_trattamento_dei_dati_personali.pdf` | Informativa privacy del bando. | Riferimento legale (utile se in futuro si raccolgono dati utente). |
| `Guidelines_for_Online_Application_procedure_26-27.pdf` | Procedura passo-passo per la domanda online (Area Riservata). | Base per validare/aggiornare la checklist (`dati-checklist.js`). |
| `Info_day_Bando_Erasmus__per_studio_Europa_2026-2027.pdf` | Slide dell'info day del bando. | Contesto e dettagli pratici. |
| `Note_su_accordi_generali_EUTOPIA.pdf` | Referenti accademici degli accordi generali EUTOPIA. | Per eventuali mete EUTOPIA (non incluse nel set Economia attuale). |
| `Discover_EUTOPIA_destinations_.pdf` | Brochure destinazioni alleanza EUTOPIA. | Materiale informativo. |

**Dati ancora da estrarre da queste fonti** (vedi `STATO_DEL_SITO.md`, sez. 8):
requisiti di lingua per meta (dalle schede destinazione), dettagli-scheda
(scadenze ospitante, alloggio), e validazione di bando/checklist.

## Sapienza — `fonti/sapienza/`

| File | Cosa contiene | Uso nel progetto |
|------|---------------|------------------|
| `Bando_Erasmus_studio_Sapienza_2026_2027.pdf` | Bando di selezione a.a. 2026/2027, Decreto n. 3613/2025 del 16/12/2025. Requisiti (art. 5), candidatura e scadenze (art. 6), criteri di selezione e graduatorie (art. 7), Learning Agreement (art. 8), contributi e soglia CFU (art. 4). | **Fonte dei 9 requisiti** in `js/atenei/sapienza/dati-bando.js`, validati articolo per articolo il 2026-07-28. |

Fonte non normativa già in repo e usata per la checklist post-selezione Sapienza:
`fonti/caso-bruno/638864454957146686_INFORMAZIONI_GENERALI_25_26.pdf`
(*Informazioni generali — studenti Erasmus outgoing a.a. 2025/26*). È materiale
di un caso reale, non l'articolato: vale per la **procedura**, non per i requisiti.

⚠️ Il bando Sapienza esce a **dicembre** (questo è del 16/12/2025), quello di
Ca' Foscari a **gennaio** (DR 13/2026 del 14/01/2026). Serve a V5 per la finestra
di attesa: non è un'unica data per tutti gli atenei.

⚠️⚠️ **L'articolato non basta: i decreti successivi lo modificano.** Il bando
Sapienza fissava la 1ª scadenza al **12/02/2026**; il **Decreto n. 326/2026**
(prot. 0024622 del 17/02/2026, allegato «RIAPERTURA TERMINI» sulla stessa pagina)
l'ha portata al **27/02/2026 ore 13.00** per un incidente informatico, cambiando
anche la procedura (candidature via moduli Google per Facoltà). `dati-scadenze.js`
porta già la data giusta: chi validasse solo sul PDF del bando la
"correggerebbe" introducendo un errore. Prima di toccare una data, guardare gli
allegati della pagina, non solo l'articolato.
