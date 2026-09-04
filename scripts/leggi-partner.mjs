import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { codiceCanonico, normalizzaNonTrovati } from "./lib-mete.mjs";
import { fetchSicuro } from "./lib-rete.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hash = (s) => createHash("sha256").update(s, "utf8").digest("hex");

export function tagliaParole(testo, massimo = 40000) {
  if (testo.length <= massimo) return { testo, tagliata: false };
  const pezzo = testo.slice(0, massimo), fine = Math.max(pezzo.lastIndexOf(" "), pezzo.lastIndexOf("\n"), pezzo.lastIndexOf("\t"));
  return { testo: pezzo.slice(0, fine > 0 ? fine : massimo), tagliata: true };
}

// Il testo di una pagina non contiene i suoi indirizzi: testoVisibile cancella
// i tag. Fino al 31/08 il modello leggeva "Course Catalogue here" e non sapeva
// dove portasse "here", quindi restituiva l'unico indirizzo che avesse - quello
// della pagina stessa. Misurato sui 53 linkCatalogo in cache: 16 errori su 17
// nascevano da li'. Ora la raccolta salva i link e la lettura ne allega una
// scelta. Il dizionario e' volutamente largo e NON contiene i nomi propri dei
// sistemi visti nel campione (BISON, courseleaf, qisserver): se li contenesse,
// la misura sui casi da cui e' nato tornerebbe buona per costruzione.
const PAROLE_CATALOGO = /(catalog|katalog|course|cours|kurs|kurz|curs|modul|curricul|syllabus|sylabus|subject|study guide|studiengang|studienangebot|lehrveranstaltung|vorlesungsverzeichnis|offre de formation|enseignement|asignatur|oferta acad|plan de estudios|guia docente|materias|insegnament|offerta formativa|piano di studi|disciplina|unidade curricular|cursus|studiegids|onderwijscatalogus|przedmiot|predmet|kolegij|ders|bologna|ects|opinto|kursutbud|studiehandbok|emne|tantargy|kurzus)/i;

// Quanti link allegare: 25 per pagina e 30.000 caratteri in tutto, contro i
// 250.000 del testo. Su Weimar una sola passata ne ha salvati 2.156: mandarli
// tutti costerebbe piu' del testo che dovrebbero spiegare.
export function linkPertinenti(link, tetto = 25) {
  const visti = new Set(); const scelti = [];
  for (const l of link || []) {
    if (!l || !l.url || visti.has(l.url)) continue;
    if (!PAROLE_CATALOGO.test(`${l.testo || ""} ${l.url}`)) continue;
    visti.add(l.url); scelti.push({ testo: String(l.testo || "").slice(0, 120), url: l.url });
    if (scelti.length >= tetto) break;
  }
  return scelti;
}

// Il brano allegato per una pagina e' testo PIU' link: e' questo che viene
// inviato, quindi e' questo che l'impronta SHA-256 deve coprire. Se coprisse
// il solo testo, una citazione presa dal testo di un link non sarebbe
// verificabile, e il vincolo "citazione nel brano davvero inviato" salterebbe.
export const INTESTAZIONE_LINK = "LINK DI QUESTA PAGINA (testo cliccabile -> indirizzo):";
export function branoPagina(testo, link) {
  const elenco = (link || []).map((l) => `- "${l.testo}" -> ${l.url}`).join("\n");
  return elenco ? `${testo}\n\n${INTESTAZIONE_LINK}\n${elenco}` : testo;
}

// La versione del PROMPT entra nell'impronta del materiale: cambiare le regole
// che il modello legge e' una ragione legittima per rileggere, e fino a oggi non
// era esprimibile. Si alza a mano quando il prompt cambia in modo sostanziale.
export const VERSIONE_PROMPT = "2026-09-03-nonTrovati-ambito";

// L'impronta dell'INGRESSO, da non confondere con `impronteLettura` in
// esegui-partner.mjs, che e' l'impronta dell'USCITA e serve ai cancelli.
// Qui la domanda e' un'altra: il materiale che manderemmo AL MODELLO e' ancora
// quello su cui la lettura si basa? Si calcola dal solo `indice.json`, non
// riaprendo le pagine: 585 partner per 25 pagine sarebbero quindicimila letture
// a ogni avvio.
//
// L'ordine e' per nome di file, non quello dell'indice: una ricostruzione che
// riordina le voci senza cambiare una pagina non deve invalidare nulla. Ed e'
// una LISTA, non un insieme: due pagine con lo stesso testo e indirizzi diversi
// non sono la stessa selezione.
//
// Torna `null` quando l'indice non porta ancora le impronte di contenuto: non
// sapere non e' come sapere che e' cambiato, e un `null` scambiato per
// "diverso" rimanderebbe alla lettura tutti i 479 partner gia' fatti.
// L'impronta del CONTENUTO di una pagina. Solo i campi che il modello legge:
// una nuova data di scaricamento non e' materiale nuovo, un testo diverso si'.
export function improntaPagina(pagina) {
  return hash(JSON.stringify({ tipo: pagina?.tipo ?? null, titolo: pagina?.titolo ?? null,
    testo: pagina?.testo ?? null, link: pagina?.link ?? [] }));
}

export const VERSIONE_SELEZIONE = "2026-09-03-motivate-per-prime";

export function improntaMateriale(indice) {
  const voci = [...(indice?.pagine || [])].map((r) => ({
    url: r.url, file: r.file, contenuto: r.improntaContenuto || null,
    motivi: r.motivi || [],
    // Il PUNTEGGIO entra nell'impronta perche' entra nella selezione: e' lui a
    // decidere l'ordine fra pagine non motivate, e quindi quali cadono fuori dal
    // taglio dei 250.000 caratteri. Senza, cambiare i punteggi cambierebbe cio'
    // che il modello vede lasciando l'impronta identica.
    punteggio: r.punteggio ?? null,
  })).sort((a, b) => String(a.file).localeCompare(String(b.file)));
  if (!voci.length || voci.some((v) => !v.contenuto)) return null;
  // Anche la VERSIONE DELL'ALGORITMO di selezione: il 03/09 le pagine motivate
  // sono passate davanti a tutte, e quel cambiamento vale una rilettura tanto
  // quanto una pagina nuova.
  return hash(JSON.stringify({ voci, prompt: VERSIONE_PROMPT, selezione: VERSIONE_SELEZIONE }));
}

// Migra un indice: calcola le impronte di contenuto mancanti aprendo le pagine.
// Serve una volta sola per indice, ed e' il prezzo di non aver avuto le impronte
// dal principio. Senza questo passo `improntaMateriale` resta `null` per sempre
// su tutti i 585 indici esistenti, e l'intero versionamento delle letture e'
// codice morto: torna `null`, `letturaDaRifare` risponde "non si puo' dire", e
// nessuno si accorge mai che il materiale e' cambiato.
export function migraImpronteIndice(indice, cartella, { leggi = null, riconcilia = false } = {}) {
  let migrate = 0;
  for (const riga of indice?.pagine || []) {
    if (riga.improntaContenuto && !riconcilia) continue;
    const pagina = leggi ? leggi(riga.file) : (() => {
      try { return JSON.parse(fs.readFileSync(path.join(cartella, riga.file), "utf8")); } catch { return null; }
    })();
    if (!pagina) continue;
    const nuova = improntaPagina(pagina);
    if (riga.improntaContenuto === nuova) continue;
    riga.improntaContenuto = nuova;
    migrate++;
  }
  return migrate;
}

// Una sola regola per due posti: `statoPartner` la usa per decidere se il
// partner torna in coda, e la lettura per decidere se rifare la chiamata. Se le
// due divergessero, il partner resterebbe "da leggere" per sempre senza che
// nessuno lo rilegga - un capolinea mancante come quello di `senzaTestoUtile`.
export function letturaDaRifare(indice, lettura) {
  if (!lettura) return true;
  const attuale = improntaMateriale(indice);
  if (!attuale || !lettura.improntaMateriale) return false;
  return lettura.improntaMateriale !== attuale;
}

// Chi cambia una pagina aggiorna l'indice, altrimenti il materiale cambia di
// nascosto e l'impronta continua a giurare che sia lo stesso. Il caso vero e'
// `riscarica-pdf.mjs`, che riempie il testo dei PDF DOPO la raccolta e non ha
// mai avuto ragione di toccare l'indice: da oggi ce l'ha.
export function aggiornaImprontaIndice(filePagina, paginaAggiornata) {
  const cartella = path.dirname(filePagina);
  const indiceFile = path.join(cartella, "indice.json");
  if (!fs.existsSync(indiceFile)) return false;
  let indice; try { indice = JSON.parse(fs.readFileSync(indiceFile, "utf8")); } catch { return false; }
  const nome = path.basename(filePagina);
  const riga = (indice.pagine || []).find((r) => r.file === nome);
  if (!riga) return false;
  riga.improntaContenuto = improntaPagina(paginaAggiornata);
  indice.improntaMateriale = improntaMateriale(indice);
  const tmp = indiceFile + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(indice, null, 2) + "\n");
  fs.renameSync(tmp, indiceFile);
  return true;
}

// Invalidare una lettura non e' cancellarla: e' archiviarla E dichiarare che
// tutto cio' che ne discendeva non vale piu'. Senza azzerare `applicato` e
// `campiDaApplicare`, `bloccoZero()` - che gira PRIMA della rilettura -
// applicherebbe proposte nate da materiale che abbiamo appena superato.
//
// `avanzamento` puo' essere un oggetto in memoria (lo muta e lascia al chiamante
// il compito di salvarlo) oppure `undefined`: in quel caso legge e riscrive lui
// `avanzamento.json`, atomicamente. La seconda forma esiste perche' anche la
// LETTURA deve poter invalidare, e la lettura non possiede l'avanzamento: senza,
// una lettura invecchiata per un PDF riscaricato o per un prompt cambiato
// verrebbe sovrascritta in silenzio, perdendo lo storico e lasciando in piedi lo
// stato derivato.
export function invalidaLettura(radice, codice, avanzamento) {
  const c = codiceCanonico(codice);
  const cartellaLetture = path.join(radice, "raccolta", "letture");
  const file = path.join(cartellaLetture, `${c}.json`);
  if (!fs.existsSync(file)) return { archiviata: false };
  const storico = path.join(cartellaLetture, "storico");
  fs.mkdirSync(storico, { recursive: true });
  const quando = new Date().toISOString().replace(/[:.]/g, "-");
  const destinazione = path.join(storico, `${c}-${quando}.json`);
  fs.renameSync(file, destinazione);

  const azzera = (voce) => {
    const { improntaLettura, fuso, applicato, campiDaApplicare, ...resto } = voce;
    return { ...resto, fuso: false, applicato: false, campiDaApplicare: [] };
  };
  if (avanzamento && avanzamento[c]) { avanzamento[c] = azzera(avanzamento[c]); return { archiviata: true, destinazione }; }
  if (avanzamento === undefined) {
    const fileAvanz = path.join(radice, "raccolta", "avanzamento.json");
    let stato = {}; try { stato = JSON.parse(fs.readFileSync(fileAvanz, "utf8")); } catch { stato = null; }
    if (stato && stato[c]) {
      stato[c] = azzera(stato[c]);
      const tmp = fileAvanz + ".tmp";
      fs.writeFileSync(tmp, JSON.stringify(stato, null, 2) + "\n");
      fs.renameSync(tmp, fileAvanz);
    }
  }
  return { archiviata: true, destinazione };
}

export function scegliPagine(indice, cartella) {
  let resto = 250000, restoLink = 30000, n = 0; const scelte = [];
  // Le pagine MOTIVATE vanno per prime, fuori concorso: sono state scaricate
  // perche' il loro link si chiamava "catalogo", "scadenze", "lingua" o "posti".
  // Senza questa riga il lavoro della raccolta non arriva a destinazione: il
  // budget di 250.000 caratteri taglia gia' oggi in 3 partner su 4, quindi una
  // pagina appena aggiunta finirebbe in fondo alla fila e al modello non
  // arriverebbe lo stesso. Fra motivate, e fra non motivate, decide il punteggio.
  const motivata = (r) => ((r.motivi || []).length > 0 ? 1 : 0);
  // Lo SPAREGGIO sul nome del file non e' un dettaglio: le pagine recuperate
  // hanno tutte punteggio zero, quindi finivano a pari merito e a decidere
  // restava l'ordine dell'indice - che l'impronta del materiale non guarda,
  // perche' ordina per file. Senza questa riga, riordinare l'indice cambiava
  // cosa il modello riceve lasciando l'impronta identica.
  for (const riga of [...(indice.pagine || [])].sort((a, b) => (motivata(b) - motivata(a))
    || (b.punteggio - a.punteggio) || String(a.file).localeCompare(String(b.file)))) {
    if (resto < 200) break;
    const pagina = JSON.parse(fs.readFileSync(path.join(cartella, riga.file), "utf8"));
    if (typeof pagina.testo !== "string" || pagina.testo.length < 200) continue;
    const taglio = tagliaParole(pagina.testo, Math.min(40000, resto));
    if (taglio.testo.length < 200) continue;
    const link = restoLink > 0 ? linkPertinenti(pagina.link) : [];
    const brano = branoPagina(taglio.testo, link);
    restoLink -= brano.length - taglio.testo.length;
    scelte.push({ n: ++n, file: riga.file, url: pagina.url, titolo: pagina.titolo, caratteri: taglio.testo.length, tagliata: taglio.tagliata, link, impronta: hash(brano), testo: brano });
    resto -= taglio.testo.length;
  }
  return scelte;
}

export function costruisciPrompt(partner, pagine, oggi = new Date().toISOString().slice(0, 10)) {
  // Il prompt e' il pezzo che decide la resa e che nessuna prova puo' giudicare
  // da sola: test/leggi-partner-prompt.test.mjs blocca l'accordo fra quello che
  // il prompt chiede al modello e quello che i cancelli pretendono davvero.
  // Misurato il 30/08 sera su A GRAZ02: la versione in prosa senza esempio JSON
  // produceva 4 campi proposti e 0 approvati (chiavi in inglese, paginaCitata
  // come stringa, albero delle lingue inventato e lingua perduta).
  const chi = `${partner.ateneo || "l'ateneo partner"}${partner.citta ? ` (${partner.citta}${partner.paese ? `, ${partner.paese}` : ""})` : ""}`;
  const regole = `Sei un assistente di ricerca dati per ErasmusWiz.

ATENEO DI CUI DEVI PARLARE: ${chi}, codice Erasmus ${partner.codiceNorm}.
Le pagine allegate vengono dai suoi siti, ma possono nominare ALTRI atenei partner: un dato vale solo se riguarda ${partner.ateneo || "questo ateneo"}. Se riguarda un altro ateneo, non estrarlo.

Usa SOLO le pagine allegate qui sotto, numerate. Non usare la tua memoria, il web o altre fonti. Estrai SOLO questi campi, e solo per studenti Erasmus INCOMING: ${JSON.stringify(partner.campiMancanti)}.

COSA SIGNIFICA OGNI CAMPO
- requisitoLingua: le lingue e i livelli richiesti agli studenti in scambio.
- scadenzeOspitante: le scadenze di nomination e application per gli incoming (autunno e primavera se distinte).
- linkSito: l'URL della pagina ufficiale incoming/exchange dell'ateneo.
- linkCatalogo: l'URL del catalogo dei corsi aperto agli studenti in scambio, cioe' l'indirizzo dove si LEGGONO i corsi. NON e' la stessa cosa di linkSito: se trovi solo la pagina informativa, ometti linkCatalogo.
- notaDisponibilita: facolta, corsi o livelli aperti o esclusi agli incoming.

FORMA ESATTA DELLA RISPOSTA. Usa queste chiavi in italiano, alla lettera: "level" non esiste, si scrive "livello". "paginaCitata" e' un NUMERO JSON, non una stringa. Ogni campo trovato, senza eccezioni, e' un oggetto con tutte e cinque le chiavi valore/livello/ambito/paginaCitata/fonte: anche scadenzeOspitante, il cui array va DENTRO "valore" e non al posto dell'oggetto. Copia la struttura, non i contenuti:
{
  "campi": {
    "requisitoLingua": {
      "valore": { "op": "ANY", "figli": [ { "lingua": "Esperanto", "livello": "A1" }, { "lingua": "Latino", "livello": "A2", "condizione": "LA-CONDIZIONE-CHE-LEGGI" } ], "fonte": "https://esempio/pagina-3", "verificatoIl": "${oggi}" },
      "livello": "ateneo", "ambito": null, "paginaCitata": 3,
      "fonte": { "url": "https://esempio/pagina-3", "citazione": "LA-FRASE-COPIATA-CHE-NOMINA-LE-LINGUE-E-DICE-A1-E-A2", "verificataIl": "${oggi}" }
    },
    "scadenzeOspitante": {
      "valore": [ { "cosa": "CHE-SCADENZA-E", "periodo": "QUANDO-SCADE" } ],
      "livello": "ateneo", "ambito": null, "paginaCitata": 16,
      "fonte": { "url": "https://esempio/pagina-16", "citazione": "LA-FRASE-COPIATA-DALLA-PAGINA", "verificataIl": "${oggi}" }
    },
    "linkCatalogo": {
      "valore": "https://esempio/elenco-dei-corsi",
      "livello": "ateneo", "ambito": null, "paginaCitata": 23,
      "fonte": { "url": "https://esempio/pagina-23", "citazione": "IL-TESTO-DEL-LINK-COPIATO", "verificataIl": "${oggi}" }
    }
  },
  "nonTrovati": { "linkSito": { "paginaCitata": 1, "livello": "ateneo", "ambito": null } },
  "note": []
}

TUTTI i valori qui sopra sono finti, e alcuni sono volutamente assurdi (nessun ateneo chiede l'Esperanto): l'esempio mostra soltanto DOVE va ogni cosa. Non copiarne nemmeno uno - ne' le lingue, ne' i livelli, ne' gli indirizzi "esempio", ne' i numeri di pagina 3, 16 e 23, ne' le parole in MAIUSCOLO. Ogni valore che scrivi dev'essere letto sulle pagine allegate.

ALBERO DELLE LINGUE (solo per requisitoLingua)
- La radice ha SEMPRE quattro chiavi: "op" ("ANY" se basta una qualunque delle lingue, "ALL" se servono tutte, e ALL anche quando c'e' una sola foglia), "figli", "fonte" (l'URL della pagina citata) e "verificatoIl" (la data).
- Ogni foglia ha SOLO le chiavi "lingua", "livello" e, se serve, "condizione" (stringa) e "quando" ({"livello":"L"} per la triennale, {"livello":"LM"} per la magistrale). Nessun'altra chiave e' ammessa.
- "lingua" e' UNA lingua sola, scritta in italiano (Inglese, Tedesco, Francese, Spagnolo...). Mai "Tedesco o Inglese", mai "Francese/Inglese", mai "Non specificata": se la pagina dice "tedesco o inglese", scrivi due foglie sotto una radice ANY.
- "livello" e' SOLO A1, A2, B1, B2, C1 o C2. Valori come B1/B2, B1-B2, B2.1 o "almeno B2" sono ambigui: ometti requisitoLingua invece di tradurli.
- REGOLA PIU' IMPORTANTE DI TUTTE su questo campo: la sigla del livello (A1...C2) deve comparire ALLA LETTERA dentro la citazione che copi. Se la pagina dice quale lingua si usa ma non dice a che livello - per esempio "la lingua di insegnamento e' l'inglese", oppure "i corsi sono in inglese e spagnolo" - allora il livello NON esiste sulla pagina: ometti requisitoLingua e mettilo in nonTrovati. Non dedurlo, non stimarlo, non metterci il livello piu' comune. Un livello inventato e' l'errore piu' grave che puoi fare qui.
- Allo stesso modo, la LINGUA dev'essere nominata nella citazione. Se la pagina chiede "un certificato di lingua di livello B1" senza dire quale lingua, ometti il campo.

GLI INDIRIZZI (linkSito e linkCatalogo)
- Il testo di una pagina NON contiene i suoi indirizzi. Dopo il testo trovi i suoi LINK, nella forma "testo cliccabile" -> indirizzo. Un indirizzo puoi prenderlo SOLO da li', oppure dall'intestazione [PAGINA n]. Non comporlo, non indovinarlo, non completarlo a memoria.
- Quando il valore lo prendi da un link, la "citazione" e' il TESTO di quel link copiato alla lettera, e "fonte.url" resta l'URL della pagina che lo conteneva.
- linkCatalogo dev'essere UNA di queste due cose: l'indirizzo di un link che porta all'elenco dei corsi, oppure l'URL della pagina stessa quando e' quella pagina a ESSERE l'elenco dei corsi.
- LA PAGINA CHE PARLA DEL CATALOGO NON E' IL CATALOGO. Se la pagina dice "il catalogo lo trovi qui" ma fra i suoi LINK non c'e' nessun indirizzo che ci porti, allora il catalogo non ce l'hai: metti linkCatalogo in nonTrovati. Una pagina di scadenze, una di candidatura, la pagina internazionale dell'ateneo e la sua home non sono MAI un catalogo, per quanto lo nominino.
- E il contrario vale altrettanto: se una pagina o un link si chiama proprio "catalogo dei corsi" - course catalogue, course catalog, Vorlesungsverzeichnis, ders katalogu, catalogue de cours, oferta academica, opinto-opas - allora QUELLO E' il catalogo, e va proposto. La regola qui sopra serve a scartare le pagine che ne parlano, non a farti omettere un catalogo che hai davanti: omettere quando ce l'hai e' un errore quanto proporre la pagina sbagliata.
- Il catalogo della BIBLIOTECA non e' il catalogo dei corsi: library catalogue, Bibliothekskatalog, catalogo della biblioteca, katalog.ub... elencano libri, non insegnamenti. Non proporlo mai.

LA CITAZIONE
- Va COPIATA carattere per carattere dalla pagina allegata, senza correggere refusi, accenti o spazi, senza tradurla e senza riassumerla.
- Lunga fra 20 e 200 caratteri, al massimo 25 parole. Una citazione piu' corta di 20 caratteri viene rifiutata.
- Deve dimostrare da sola il dato che stai proponendo.
- "paginaCitata" e' il numero della pagina da cui l'hai copiata, e "fonte.url" dev'essere ESATTAMENTE l'URL di QUELLA pagina, copiato dalla sua intestazione [PAGINA n].

LIVELLO E AMBITO
- "livello": "ateneo" se la regola vale per tutto l'ateneo, "facolta" se vale solo per una facolta, un dipartimento o una scuola. Nel dubbio scrivi sempre "facolta".
- "ambito": null quando il livello e' "ateneo"; quando e' "facolta", il nome della facolta come e' scritto sulla pagina (per esempio "Fakultat fur Architektur").

REGOLE GENERALI
- Non confondere i requisiti per i DEGREE STUDENTS con quelli per gli studenti Erasmus/exchange: se la pagina non distingue, ometti il campo.
- OMETTI il campo se non sei sicuro. Non dedurre, non stimare, non indovinare.
- Ogni campo richiesto che non riesci a trovare va in "nonTrovati", nella forma {"nomeCampo": {"paginaCitata": <numero della pagina piu' pertinente che hai letto>, "livello": "ateneo" oppure "facolta", "ambito": null oppure il nome della facolta'}}. Il livello dice DOVE hai cercato: "ateneo" se la pagina parla di tutto l'ateneo, "facolta" se parla di una sola facolta' - e in quel caso "ambito" e' il nome della facolta' come e' scritto sulla pagina. Se non sei sicuro del livello, scrivi "livello": null: un ambito sbagliato e' peggio di un ambito mancante.
- Rispondi SOLO con l'oggetto JSON, senza testo attorno e senza blocchi markdown.`;
  const allegate = pagine.map((p) => `[PAGINA ${p.n}] URL: ${p.url}${p.titolo ? `\nTITOLO: ${p.titolo}` : ""}\n${p.testo}`).join("\n\n");
  return `${regole}\n\nPAGINE ALLEGATE:\n${allegate}`;
}

const erroreSeRispostaTroncata = (res) => {
  if (res.troncato) throw new Error(`Risposta Gemini troncata a ${res.corpo?.length || 0} byte`);
};

export async function elencaModelliVeri({ fetchHttp = fetchSicuro } = {}) {
  if (!process.env.GEMINI_API_KEY) throw new Error("Manca GEMINI_API_KEY.");
  const res = await fetchHttp("https://generativelanguage.googleapis.com/v1beta/models", { headers: { "x-goog-api-key": process.env.GEMINI_API_KEY } });
  erroreSeRispostaTroncata(res);
  if (!res.ok) throw new Error(`Gemini API errore ${res.status}: ${await res.text()}`);
  return (await res.json()).models?.map((m) => m.name.replace(/^models\//, "")) || [];
}

// Senza scadenza una sola connessione appesa blocca una passata di ore:
// fetch di Node non ha un timeout suo. Come in gemini-sgrossatura.mjs, 300s.
export async function chiamaGeminiVero(prompt, modello, { fetchHttp = fetchSicuro } = {}) {
  if (!process.env.GEMINI_API_KEY) throw new Error("Manca GEMINI_API_KEY.");
  const taglia = AbortSignal.timeout(Number(process.env.GEMINI_TIMEOUT_MS || 300000));
  const res = await fetchHttp(`https://generativelanguage.googleapis.com/v1beta/models/${modello}:generateContent`, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY }, signal: taglia, timeoutMs: Number(process.env.GEMINI_TIMEOUT_MS || 300000), scadenzaTotaleMs: null, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json", thinkingConfig: { thinkingLevel: (process.env.GEMINI_THINKING_LEVEL || "LOW").toUpperCase() } } }) });
  erroreSeRispostaTroncata(res);
  if (!res.ok) { const e = new Error(`Gemini API errore ${res.status}: ${await res.text()}`); e.status = res.status; throw e; }
  const testo = (await res.json()).candidates?.[0]?.content?.parts?.map((p) => p.text).join("");
  if (!testo) throw new Error("Risposta Gemini vuota.");
  return JSON.parse(testo.replace(/^```json\s*|```\s*$/g, ""));
}

// E4: la scelta va fatta sul NUMERO di versione, non in ordine alfabetico.
// Misurato il 30/08 sulla chiave: .sort().at(-1) restituiva
// 'gemini-flash-lite-latest' (un alias mobile) invece di 'gemini-3.5-flash-lite'.
// Si tengono solo i nomi 'gemini-<versione>-flash-lite' esatti: niente alias
// '-latest', niente '-preview', niente '-image'.
export function scegliFlashLite(modelli = []) {
  const versionati = modelli
    .map((m) => ({ nome: m, v: (/^gemini-(\d+(?:\.\d+)?)-flash-lite$/.exec(m) || [])[1] }))
    .filter((x) => x.v !== undefined)
    .sort((a, b) => Number(a.v) - Number(b.v));
  return versionati.at(-1)?.nome;
}

// Non tutti i 429 sono il tetto del giorno, e la differenza cambia tutto.
// Misurato il 30/08 sera: dopo 5 partner arriva
//   quotaId "GenerateContentInputTokensPerModelPerMinute-FreeTier", valore
//   250000, retryDelay 25s
// cioe' il tetto dei token in INGRESSO AL MINUTO, non quello giornaliero: la
// mediana di 215.000 caratteri per partner fa ~54.000 token, e cinque chiamate
// di fila lo saturano. Fermandosi li' si leggerebbero 5 partner al giorno
// invece di 245, e il tetto giornaliero non si misurerebbe mai.
// Il tetto giornaliero (quotaId con "PerDay") resta invece un vero stop: §3.2.
export function attesaDa429(messaggio = "") {
  const giornaliero = /PerDay/i.test(messaggio);
  const secondi = Number((/"?retryDelay"?:\s*"?(\d+(?:\.\d+)?)s/i.exec(messaggio) || [])[1]);
  // Un margine sopra il retryDelay: la finestra del minuto e' scorrevole e
  // ripartire sul filo si riprende un altro 429 subito.
  return { giornaliero, attesaMs: Number.isFinite(secondi) ? Math.round(secondi * 1000) + 5000 : 60000 };
}

// Il 5xx non e' un rifiuto, e' un "adesso non ce la faccio". Fino al 04/09
// veniva trattato come un errore qualunque: contato e via, il partner saltato
// all'istante senza un secondo tentativo. Misurato quel giorno sulla passata
// vera: 175 partner su 198 persi in un giro solo per `HTTP 503`, e una sonda
// successiva 119 su 122 - mentre le chiamate riuscite dimostravano che la
// richiesta era valida e il modello raggiungibile. Era saturazione, cioe'
// esattamente la cosa che passa se si aspetta.
//
// L'attesa CRESCE (5s, 15s, 45s) e non e' un vezzo: un sovraccarico non si
// scioglie in mezzo secondo, e ritentare subito e' il modo migliore per
// contribuire al sovraccarico. Se il corpo dichiara un `retryDelay` si crede a
// quello, con lo stesso margine che si usa per il 429.
const ATTESE_5XX = [5000, 15000, 45000];
export function attesaDa5xx(tentativo = 0, messaggio = "") {
  const secondi = Number((/"?retryDelay"?:\s*"?(\d+(?:\.\d+)?)s/i.exec(messaggio) || [])[1]);
  if (Number.isFinite(secondi)) return Math.round(secondi * 1000) + 5000;
  return ATTESE_5XX[tentativo] ?? ATTESE_5XX.at(-1);
}

const insieme = (filtro) => new Set(String(filtro).split(",").map(codiceCanonico).filter(Boolean));

export async function leggiPartner({ radice = RADICE, limite = Infinity, partner: filtro, chiamaModello = chiamaGeminiVero, elencaModelli = elencaModelliVeri, attendi = (ms) => new Promise((r) => setTimeout(r, ms)), maxAttese = 3, maxAttese5xx = 3, maxConsecutivi5xx = 8 } = {}) {
  // Consecutivi, non totali: un 503 ogni tanto in mezzo a letture riuscite e'
  // rumore normale e non deve fermare niente. Otto di fila senza un successo
  // in mezzo sono un'altra cosa.
  let consecutivi5xx = 0;
  const raccolta = path.join(radice, "raccolta"), letture = path.join(raccolta, "letture"); fs.mkdirSync(letture, { recursive: true });
  const modelli = await elencaModelli(); const modello = process.env.GEMINI_MODEL || scegliFlashLite(modelli);
  if (!modello || !modelli.includes(modello) || !/flash-lite/i.test(modello)) throw new Error("Nessun modello Flash-Lite disponibile: non avvio la lettura.");
  const esito = { partnerLetti: 0, chiamateRiuscite: 0, chiamateFallite: {}, campiProposti: {}, nonTrovati: {}, caratteriInviati: { mediana: 0, massimo: 0 }, modelli, modello, quota429: false }, dimensioni = [];
  for (const p of JSON.parse(fs.readFileSync(path.join(raccolta, "partner.json"), "utf8"))) {
    // --partner accetta anche un elenco separato da virgole: serve a rileggere
    // gli STESSI casi su cui una correzione e' stata trovata, invece di un
    // campione nuovo a ogni giro.
    if (esito.partnerLetti >= limite || (filtro && !insieme(filtro).has(codiceCanonico(p.codiceNorm))) || !(p.campiMancanti || []).length) continue;
    const dir = path.join(raccolta, "pagine", codiceCanonico(p.codiceNorm)), indiceFile = path.join(dir, "indice.json"), fuori = path.join(letture, `${codiceCanonico(p.codiceNorm)}.json`);
    if (!fs.existsSync(indiceFile)) continue;
    const indice = JSON.parse(fs.readFileSync(indiceFile, "utf8")); if (indice.esito !== "raggiunto") continue;
    // Fino al 03/09 questa riga scartava INCONDIZIONATAMENTE ogni partner che
    // avesse gia' una lettura: aggiungere pagine non bastava a farlo rileggere,
    // e il recupero dei link avrebbe scaricato migliaia di pagine che nessuno
    // leggeva. Ora si rilegge quando il materiale e' cambiato davvero.
    if (fs.existsSync(fuori)) {
      let vecchia = null; try { vecchia = JSON.parse(fs.readFileSync(fuori, "utf8")); } catch { vecchia = null; }
      if (vecchia && !letturaDaRifare(indice, vecchia)) continue;
      // Non si sovrascrive: si INVALIDA. Sovrascrivere perderebbe lo storico e
      // lascerebbe in piedi `fuso`/`applicato`/`campiDaApplicare` della lettura
      // vecchia. Questa e' la sola porta, e ci passano tutti i motivi di
      // invecchiamento: pagine aggiunte, PDF riscaricato, prompt cambiato.
      invalidaLettura(radice, p.codiceNorm);
    }
    const pagine = scegliPagine(indice, dir); if (!pagine.length) continue;
    // Sullo stesso partner: se il 429 e' quello al minuto si aspetta e si
    // riprova, se e' quello del giorno ci si ferma pulito (§3.2). Il 5xx ha la
    // sua attesa e il SUO contatore: con un contatore solo, un partner che
    // incontra due 429 e due 503 esaurirebbe il bilancio a meta' di entrambi, e
    // il numero di tentativi dipenderebbe da quale guasto capita prima.
    let risposta, fermati = false, tentativi429 = 0, tentativi5xx = 0;
    for (;;) {
      try { risposta = await chiamaModello(costruisciPrompt(p, pagine), modello); break; }
      catch (e) {
        if (e.status === 429) {
          const { giornaliero, attesaMs } = attesaDa429(e.message);
          esito.messaggio429 = e.message.slice(0, 1500);
          if (!giornaliero && tentativi429 < maxAttese) {
            tentativi429++;
            esito.attese429 = (esito.attese429 || 0) + 1; esito.msAttesi = (esito.msAttesi || 0) + attesaMs;
            await attendi(attesaMs); continue;
          }
          esito.quota429 = true; esito.quota429Giornaliera = giornaliero; fermati = true; break;
        }
        const cinquecento = Number.isInteger(e.status) && e.status >= 500 && e.status <= 599;
        if (cinquecento && tentativi5xx < maxAttese5xx) {
          const attesaMs = attesaDa5xx(tentativi5xx, e.message);
          tentativi5xx++;
          esito.attese5xx = (esito.attese5xx || 0) + 1; esito.msAttesi = (esito.msAttesi || 0) + attesaMs;
          await attendi(attesaMs); continue;
        }
        const motivo = e.status ? `HTTP ${e.status}` : e.name || "errore";
        esito.chiamateFallite[motivo] = (esito.chiamateFallite[motivo] || 0) + 1; risposta = null;
        // Il salvagente: se il servizio e' giu' davvero, ritentare partner dopo
        // partner li brucia tutti e li lascia comunque da leggere. Dopo N
        // partner CONSECUTIVI che esauriscono le attese ci si ferma pulito,
        // come per il tetto giornaliero. Il 04/09 questa uscita non c'era, e la
        // coda e' stata consumata per intero senza leggere quasi niente.
        if (cinquecento) {
          consecutivi5xx++;
          if (consecutivi5xx >= maxConsecutivi5xx) {
            esito.servizioNonDisponibile = true;
            esito.messaggio5xx = String(e.message || "").slice(0, 500);
            fermati = true;
          }
        }
        break;
      }
    }
    if (fermati) break;
    if (!risposta) continue;
    // Le assenze si normalizzano PRIMA di finire su disco: una voce storta
    // entrata qui diventerebbe una frase mostrata allo studente.
    const assenze = normalizzaNonTrovati(risposta.nonTrovati);
    const note = [...(risposta.note || [])];
    if (assenze.scartati.length) note.push(`nonTrovati non interpretabili: ${assenze.scartati.join(", ")}`);
    const lettura = { codiceNorm: p.codiceNorm, lettoIl: new Date().toISOString(), modello,
      // Su quale materiale si basa questa lettura: senza, non c'e' modo di
      // sapere che e' invecchiata quando le pagine cambiano.
      improntaMateriale: improntaMateriale(indice),
      pagineInviate: pagine.map(({ testo, ...meta }) => meta), campi: risposta.campi || {}, nonTrovati: assenze.nonTrovati, note };
    fs.writeFileSync(fuori, JSON.stringify(lettura, null, 2) + "\n"); esito.partnerLetti++; esito.chiamateRiuscite++; consecutivi5xx = 0; dimensioni.push(pagine.reduce((a, x) => a + x.caratteri, 0));
    for (const c of Object.keys(lettura.campi)) esito.campiProposti[c] = (esito.campiProposti[c] || 0) + 1;
    for (const c of Object.keys(lettura.nonTrovati)) esito.nonTrovati[c] = (esito.nonTrovati[c] || 0) + 1;
  }
  if (dimensioni.length) { const d = dimensioni.sort((a,b) => a-b); esito.caratteriInviati.mediana = d[Math.floor(d.length / 2)]; esito.caratteriInviati.massimo = d.at(-1); }
  fs.writeFileSync(path.join(raccolta, "lettura-resoconto.json"), JSON.stringify(esito, null, 2) + "\n"); return esito;
}

async function main() { const a = Object.fromEntries(process.argv.slice(2).map((x) => { const [k,v] = x.replace(/^--/, "").split("="); return [k,v]; })); console.log(JSON.stringify(await leggiPartner({ limite: a.limite ? Number(a.limite) : Infinity, partner: a.partner }), null, 2)); }
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch((e) => { console.error(e.message); process.exitCode = 1; });
