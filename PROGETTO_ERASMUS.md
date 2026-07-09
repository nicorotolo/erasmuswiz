# PROGETTO ERASMUS — Documento-bussola v2

> Questo file è la "mappa" del progetto. Tienilo nella cartella del progetto e
> incollalo all'inizio di ogni nuova sessione con Claude (chat o Claude Code)
> per ripristinare il contesto. Va letto insieme a `STATO_DEL_SITO.md`.
>
> **v2 — riscritta il 2026-07-06** dopo la validazione con l'utente reale
> (Bruno, fratello di Nicola, Sapienza Giurisprudenza, Erasmus alla Católica
> di Lisbona — sessione UX6 del 05/07/2026). La v1 è in appendice come
> storico. **Limature del 06/07** (assessment critico, accettate da Nicola):
> natura del progetto esplicita (§3-bis), SEO sopra il social (§7), verifica
> ufficio Erasmus + nota OLA prima del codice (§4/§5), framing notifiche
> "promemoria non oracolo" (§4), soglie di successo con revisione a maggio
> 2027 (§9).

---

## 1. L'IDEA IN UNA FRASE

Il traduttore della burocrazia Erasmus: accompagna lo studente dal bando al
rientro, con il Learning Agreement e le scadenze al centro. È la "guida
all'asta", non l'asta: uno strumento di appoggio a cui lo studente si affianca,
non un sostituto dei portali ufficiali (Relint ecc.).

## 2. IL PROBLEMA — gerarchia validata sul campo

La v1 lo intuiva ("il dolore vero è gestire un processo nel tempo, non
scegliere le mete"); il test del 05/07 lo ha confermato e ordinato:

1. **Learning Agreement** — la parte più complessa in assoluto. Nessun format
   ufficiale Sapienza (solo un Word vuoto con tabella), va inviato come bozza e
   poi rifatto ufficialmente, spesso stravolto all'arrivo. Trovare gli esami
   compatibili sui siti delle università ospitanti costa giorni.
2. **Scadenze dimenticate** — caso reale: accordo finanziario non accettato per
   mesi dopo la selezione, scoperto a 5 giorni dalla partenza. Le comunicazioni
   arrivano via mail in burocratese, sepolte tra migliaia di altre.
3. **Requisiti di lingua** — prima causa di esclusione in graduatoria (caso
   reale: Madrid e Amsterdam perse per certificazione mancante, non controllata).
4. **Scelta mete** — il pezzo più costruito finora, ma il MENO doloroso: le
   mete per dipartimento sono poche, la scelta è guidata dal gusto.

## 3. POSIZIONAMENTO

- Strumento di appoggio, NON sostitutivo: lo studente compila comunque su
  Relint; noi rendiamo intelligibile cosa fare, quando e come.
- NESSUNA partnership con università in questa fase (burocrazia bloccante,
  tempi incompatibili). Se ne riparla con trazione dimostrata.
- Responsabilità sempre allo studente: ogni dato derivato porta il disclaimer
  "Dati aggiornati al [data] — verifica sempre sulla fonte ufficiale" e il
  link alla fonte. Mai un'affermazione senza data e fonte.

## 3-bis. NATURA DEL PROGETTO — detto onestamente

- Il churn è strutturale: ogni studente fa l'Erasmus UNA volta e poi sparisce.
  Non esiste accumulo di base utenti anno su anno; si riacquisisce il 100%
  degli utenti a ogni coorte. Gli unici asset che si accumulano nel tempo
  sono la reputazione tra coorti (il passaparola verso l'anno successivo)
  e il posizionamento SEO.
- I volumi italiani sono piccoli: a scala nazionale e con esecuzione
  perfetta, la monetizzazione diretta (pubblicità, premium, partner alloggi)
  vale un side business, non uno stipendio. Va bene COSÌ, e va detto ora
  per non deludersi a marzo.
- **Il vero valore economico è l'ASSET**: il dataset validato e
  auto-aggiornante di mete/requisiti/scadenze/cataloghi, con la pipeline che
  lo mantiene. Interessa a chi gira intorno agli studenti Erasmus
  (piattaforme alloggi, scuole di lingua, ESN, le università stesse a
  traffico dimostrato). Il KPI traffico serve a VALORIZZARE l'asset —
  partnership o acquisizione sono l'uscita più plausibile, non i banner.

## 4. LA FORMA DEL PRODOTTO

Spina dorsale invariata: il PERCORSO in 4 fasi (idoneità → mete → candidatura →
zaino post-selezione), con lo zaino unico in localStorage. Sopra questa spina
dorsale, tre motori:

1. **LA Generator (killer feature)** — a livelli:
   - L1: carichi piano di studi/transcript → spunti gli esami da convalidare →
     incolli i link ai corsi host → esce un documento pulito e formattato
     (Word/PDF) da inviare alla Sapienza, con disclaimer datato.
   - L2: per ogni meta, link diretto al catalogo corsi dell'università
     ospitante (dato in parte già mappato) — elimina il "giorno perso a
     cercare dove stanno gli esami".
   - L3 (esperimento, NON MVP): suggerimento esami compatibili. Vedi §5.
   - **Posizionamento rispetto all'OLA**: il LA ufficiale passa già da un
     sistema online con accesso via credenziali di ateneo (quello usato da
     Bruno — quasi certamente l'Online Learning Agreement / Erasmus Without
     Paper europeo). Il nostro strumento è la PREPARAZIONE al LA ufficiale
     (trovare gli esami, preparare la bozza-Word che Sapienza chiede prima,
     monitorare gli esami spariti), MAI un suo sostituto o duplicato.
2. **Scadenze con countdown + notifiche push (PWA)** — il motore di retention.
   Decisione architetturale presa: PWA con service worker (gratis, coerente col
   sito statico; su iOS richiede installazione a schermata home). Countdown
   in-app ripristinato; export .ics resta.
   - **Framing obbligatorio fino al microcopy**: le notifiche dicono
     "Verifica su Relint: si avvicina X" con link alla fonte — MAI "la
     scadenza è X". Promemoria di controllo, non oracolo: il disclaimer
     protegge legalmente, solo questo framing protegge la reputazione.
   - Aspettative oneste: l'opt-in alle push web è storicamente basso; il
     KPI push può deludere senza che il prodotto stia fallendo. Non
     appendere la tesi della retention a quel solo numero.
3. **Compatibilità v2** — filtro lingua nelle mete (prima causa di esclusione)
   + stima borsa per gruppo-paese nelle schede (dato semplice, aggiornamento
   annuale). L'algoritmo resta un albero decisionale: AI MAI nel runtime
   dell'app, solo nella pipeline di aggiornamento dati.

## 5. CONFINI — v2-mercato, esperimento, parcheggiati

### v2-mercato (da finire entro GENNAIO 2027 — poi product freeze)
- **PRIMA DEL CODICE (luglio, costa una mail di Bruno)**: verificare con
  l'ufficio Erasmus (a) se un LA generato da noi, ben formattato, viene
  accettato come bozza — o se pretendono il loro Word (allora si costruisce
  un compilatore del LORO template, non un generatore); (b) il rapporto
  esatto col sistema OLA ufficiale (§4). L'esito determina la forma del
  LA Generator.
- **Raccolta caso-Bruno**: salvare in `fonti/caso-bruno/` (in `.gitignore`,
  MAI su GitHub: dati personali) tutti i documenti del suo percorso — LA
  originale, change form, mail dell'ufficio, scadenze vissute. È la ground
  truth del LA Generator e del pilota L3, più materiale per i contenuti SEO.
- Fix UI dal feedback: rinominare "Informazioni importanti", stellina
  preferiti in alto a destra, de-enfatizzare "Portale Sapienza", comunicare
  il limite 5 scelte (o selezione libera + scelta finale tra i preferiti).
- Sezione Candidatura riformattata da zero (confusa su mobile).
- LA Generator L1 + L2, testato sul caso reale Lisbona.
- PWA: manifest + service worker + notifiche push sulle scadenze.
- Filtro lingua + stima borsa nelle schede mete.
- Debug ultime 2/55 mete Giurisprudenza non mappate.

### Esperimento parallelo (go/no-go separato)
- Matching esami L3 SOLO su Sapienza Giurisprudenza (55 mete), con
  l'esperienza Lisbona di Bruno come ground truth. È un secondo progetto
  di mappatura: si scala solo se il pilota convince. Se fallisce, L1+L2
  restano un prodotto utile; se si parte da L3 e fallisce, non resta niente.
  Nota di onestà: il LA viene comunque spesso rifatto all'arrivo → L3 migliora
  la bozza, non elimina il problema. Comunicarlo così.

### Parcheggiati esplicitamente (decisione consapevole, non dimenticanza)
- Mappa interattiva stile Airbnb (il "dessert").
- Estensione Chrome guida-Relint (rischio blocco su siti con credenziali).
- Garanzia depositi affitti (idea collaterale del fratello — altro business).
- Partnership università, account/login/backend, app native, monetizzazione
  (premium/pubblicità/partner alloggi: tutte POST-traffico dimostrato).

## 6. ARCHITETTURA — le regole d'oro (invariate + una)

1. CODICE separato dai DATI (`js/dati-*.js`, `js/atenei/**`) — aggiornare una
   scadenza = una riga in un file dati, mai toccare il codice.
2. "ACCOUNT-READY" — zaino unico in localStorage; il giorno degli account
   cambia DOVE si salva, non COSA.
3. **AI fuori dall'app**: l'AI (Codex/Claude) mantiene aggiornati i file dati
   e costruisce gli algoritmi, ma NON gira nel runtime (costo insostenibile).
   Unica aggiunta architetturale della v2: la PWA (manifest + service worker).

## 7. DISTRIBUZIONE (nuova sezione — il rischio più sottovalutato)

Beachhead doppio, misurato separatamente:
- **Sapienza Giurisprudenza** — dati più profondi (55 mete), Bruno insider
  e canale diretto, caso di test reale.
- **Ca' Foscari** — contatti diretti di Nicola con università e studenti
  (rete Pisa Network).

Gerarchia canali (in ordine di priorità e di timing):
1. **WhatsApp/Telegram** (gruppi di corso, canali Erasmus) — canale primario,
   effetto immediato: seeding all'apertura del bando (gennaio-febbraio).
   Owner: Bruno (Sapienza) + Nicola (Ca' Foscari).
2. **SEO — SUBITO, e SOPRA il social nella priorità d'investimento**: è
   l'unico canale che si accumula tra le coorti (churn 100%/anno, §3-bis) —
   ogni coorte googla le stesse domande, una pagina posizionata lavora
   gratis per anni, mentre il social parla a un'audience che churna con te.
   Google impiega settimane/mesi a posizionare → pagine online entro
   l'autunno: "come si fa il Learning Agreement Sapienza" (= il LA
   Generator con un cappello testuale), "requisiti lingua Erasmus [città]"
   (= il filtro lingua), il racconto del caso-Bruno ("come ho rifatto il
   mio LA a Lisbona": SEO + fiducia).
3. **Social organico** — amplificatore, non pilastro: warm-up da dicembre
   con contenuti leggeri ("cosa avrei voluto sapere prima dell'Erasmus",
   errori comuni, scadenze), pieno regime da gennaio col product freeze.
   Serve UN owner con nome e cognome (candidato: Bruno).

Regola di fase: da GENNAIO il lavoro si sposta da prodotto a promozione.

## 8. TEAM

- **Nicola** — prodotto, tecnica, pipeline dati, canale Ca' Foscari.
- **Bruno** (fratello di Nicola) — owner della validazione contenuti
  Giurisprudenza (il rischio n.1 del progetto), canale diretto Sapienza,
  candidato owner social. Ha esperienza Erasmus diretta e dati reali
  (LA, change form, scadenze — da raccogliere in `fonti/caso-bruno/`, §5).

## 9. KPI E SOGLIE DI SUCCESSO (febbraio–aprile 2027) — traffico, non revenue

Cosa si misura:
- Utenti unici durante la finestra del bando, per ateneo.
- % di ritorno dopo la prima visita (retention nel percorso — il KPI principe).
- Numero di LA generati (proxy della killer feature).
- Iscrizioni alle notifiche push (proxy secondario — vedi aspettative in §4).

**Soglie di successo (revisione onesta a MAGGIO 2027):**
- ≥ 500 utenti unici nei due beachhead durante la finestra del bando;
- ≥ 30% di ritorno (almeno una seconda visita);
- ≥ 50 Learning Agreement generati;
- ≥ 5 condivisioni spontanee nei gruppi (link postato da qualcuno che non
  siamo noi).

Sopra le soglie → si scala (più università). Sotto → revisione onesta del
progetto a maggio, non insistenza per inerzia: senza criteri di fallimento
predefiniti non si può mai fallire, e quindi nemmeno imparare. L'asset dati
resta comunque valorizzabile (§3-bis) anche in caso di revisione.

## 10. RISCHI (in ordine)

1. **Accuratezza dei contenuti** — invariato dalla v1, mitigato dal fratello
   come validatore. Un'info sbagliata costa un anno a uno studente: disclaimer
   e link a fonte ovunque, sempre.
2. **Distribuzione che parte tardi** — social a febbraio = parlare a zero
   follower nel mese decisivo; SEO a gennaio = invisibile a febbraio.
   Mitigazione: timing di §7.
3. **Scope creep del matching L3** — può divorare l'MVP. Mitigazione: è un
   esperimento con go/no-go, mai un prerequisito.
4. **Sovrapposizione dati/sviluppo** — la finestra critica di aggiornamento
   dati (novembre-febbraio, bando a febbraio) coincide con le ultime ondate
   di sviluppo. La pipeline Codex deve reggere da sola in quel periodo.
5. **Digitalizzazione ufficiale del LA (OLA/EWP)** — se atenei e UE
   digitalizzano bene il Learning Agreement, un generatore che duplica il
   modulo diventa ridondante. Mitigazione: posizionarsi a monte (§4) —
   preparazione, ricerca esami, bozza, monitoraggio — mai compilazione
   sostitutiva. La verifica di luglio (§5) chiarisce i confini esatti.
6. **Sostituto invisibile: ChatGPT/Claude** — lo studente può incollare il
   bando in una chat AI gratis. Il nostro valore deve stare dove l'AI
   generica fallisce: dati verificati e datati, workflow con stato salvato,
   scadenze strutturate, documento pronto. Se una feature non batte "lo
   chiedo a ChatGPT", non va costruita.

## 11. CALENDARIO A RITROSO (bando: febbraio 2027)

- **Luglio–settembre 2026** — fix UI dal feedback, Candidatura riformattata,
  filtro lingua + stima borsa, SEO di base online, pilota matching L3
  (Giurisprudenza) in parallelo con go/no-go a settembre.
- **Ottobre–dicembre 2026** — LA Generator L1+L2, PWA + notifiche push,
  debug 2/55 mete; da novembre la pipeline dati lavora sull'aggiornamento
  bando 27/28; da dicembre warm-up social.
- **Gennaio 2027** — PRODUCT FREEZE. Solo promozione: seeding gruppi, social
  a regime, verifica finale dati.
- **Febbraio–aprile 2027** — bando aperto: misurare i KPI di §9, raccogliere
  feedback, decidere la fase successiva coi numeri in mano.

---
---

# APPENDICE — Bussola v1 (storico, superata dal 2026-07-06)

## 1. L'IDEA IN UNA FRASE (v1)

Un cruscotto web che accompagna lo studente nella pratica Erasmus dall'inizio
alla partenza: inserisci i tuoi dati una volta, vedi solo le mete possibili per
te, e vieni guidato con scadenze e checklist passo-passo.

## 2. IL PROBLEMA (v1)

La pratica Erasmus è lunga, ramificata e ansiogena. Le scadenze, se sbagliate,
costano un anno. Le informazioni sono sparse e in burocratese. Nessuno
accompagna lo studente passo-passo. Il dolore vero NON è "scegliere tra troppe
mete" (sono poche per dipartimento) ma "gestire un processo nel tempo senza
sbagliare i tempi".

## 3. LA FORMA DEL PRODOTTO (v1)

NON è un wizard (non serve: poche mete per dipartimento).
È un CRUSCOTTO con tre blocchi + una fase successiva:

1. IDONEITÀ — requisiti del bando in chiaro (media, CFU, anno, lingua).
2. METE COMPATIBILI — solo le destinazioni accessibili al profilo, con indice
   di compatibilità. Lista chiara e filtrabile, non un albero decisionale.
3. TIMELINE DELLA DOMANDA — il cuore: scadenze reali, countdown, checklist
   "cosa fare e quando". È ciò che fa tornare lo studente più volte.
4. (Fase successiva) POST-SELEZIONE — quando sei stato preso, la checklist
   cambia e ti guida verso la partenza (learning agreement, alloggio, documenti).

## 4. CONFINI v1 (storico)

- v1: profilo in localStorage, mete filtrate, scadenze+checklist+countdown,
  responsive, UNA università (Ca' Foscari), tutto statico e gratuito.
- Nice-to-have: post-selezione, PWA, più dipartimenti.
- Avanzate: altre università, terzo pagante.
- Da non costruire: account, server, app native.

## 5-9. (v1)

Architettura (2 regole d'oro), piano in fasi 1-5, ripartizione 3-5 h/settimana
(superata: disponibilità oraria maggiore + fratello nel team), rischi
(accuratezza, traffico mono-ateneo, replicabilità della fiducia), costi
(~0€ + dominio): vedi la storia git per il testo integrale della v1.
