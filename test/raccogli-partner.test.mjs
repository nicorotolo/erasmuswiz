import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { caricaPartner, costruisciPartner, normalizzaPaese, Limitatore, linkSalvati, punteggioLink, paginaSalvata, registraTentativo, separaCollisioni, validaPartner } from "../scripts/raccogli-partner.mjs";
import { codiceCanonico } from "../scripts/lib-mete.mjs";

test("0b: una chiave canonica vede Aachen e isola entrambi i record", () => {
  assert.equal(codiceCanonico(" D Aachen 01 "), "DAACHEN01");
  assert.equal(codiceCanonico("D AACHEN01"), "DAACHEN01");
  const a = { codice: "D AACHEN 01", codiceNorm: "D AACHEN 01" };
  const b = { codice: "D AACHEN01", codiceNorm: "D AACHEN01" };
  const sano = { codice: "A GRAZ02", codiceNorm: "A GRAZ02" };
  const esito = separaCollisioni([a, sano, b]);
  assert.deepEqual(esito.sani, [sano], "i collisi non devono entrare nel lavoro ordinario");
  assert.equal(esito.collisioni.length, 1);
  assert.equal(esito.collisioni[0].codiceCanonico, "DAACHEN01");
  assert.deepEqual(esito.collisioni[0].record, [a, b]);
});

const elencoPartner = (totale = 615) => Array.from({ length: totale }, (_, i) => ({
  codice: `TEST ${String(i).padStart(4, "0")}`,
  codiceNorm: `TEST ${String(i).padStart(4, "0")}`,
  campiMancanti: [],
}));

test("0a: un elenco con tutte le mete piene e' valido", () => {
  assert.equal(validaPartner(elencoPartner()).length, 615);
});

test("0a: un duplicato non dichiarato viene fermato", () => {
  const partner = elencoPartner();
  partner[1] = { ...partner[1], codice: "T EST0000", codiceNorm: "T EST0000" };
  assert.throws(() => validaPartner(partner), /collisione non dichiarata: TEST0000/);
});

test("0a: un duplicato dichiarato isola entrambi i record", () => {
  const partner = elencoPartner();
  partner[1] = { ...partner[1], codice: "T EST0000", codiceNorm: "T EST0000" };
  const sani = validaPartner(partner, [{ codiceCanonico: "TEST0000", record: [partner[0], partner[1]] }]);
  assert.equal(sani.length, 613);
  assert.equal(sani.some((record) => codiceCanonico(record.codiceNorm) === "TEST0000"), false);
});

test("0a: un elenco di 400 partner e' corrotto", () => {
  assert.throws(() => validaPartner(elencoPartner(400)), /400 partner/);
});

test("0d: la ricostruzione ignora un partner.json vecchio", async (t) => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-partner-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "partner.json"), JSON.stringify([{ codiceNorm: "VECCHIO" }]));
  const righe = elencoPartner().map((record) => ({ codice: record.codice }));
  const ricostruiti = await costruisciPartner({ radice, caricaCsv: async () => righe });
  assert.equal(ricostruiti.length, 615);
  assert.equal(ricostruiti.some((record) => record.codiceNorm === "VECCHIO"), false);
  assert.equal(JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "partner.json"))).length, 615);
});

test("0b: costruisciPartner registra una collisione nuova e prosegue con gli altri", async (t) => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-collisione-nuova-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  const righe = elencoPartner().map((record) => ({ codice: record.codice }));
  righe[1] = { codice: "T EST0000" };
  const messaggi = [];
  const partner = await costruisciPartner({ radice, caricaCsv: async () => righe, segnala: (riga) => messaggi.push(riga) });
  assert.equal(partner.length, 613, "i due collisi sono isolati, gli altri proseguono");
  const collisioni = JSON.parse(fs.readFileSync(path.join(radice, "raccolta", "collisioni.json")));
  assert.equal(collisioni.length, 1);
  assert.equal(collisioni[0].codiceCanonico, "TEST0000");
  assert.match(messaggi[0], /TEST0000.*TEST 0000.*T EST0000/);
});

test("0d: il chiamante del flag non riusa la cache esistente", async (t) => {
  const radice = fs.mkdtempSync(path.join(os.tmpdir(), "erasmuswiz-flag-partner-"));
  t.after(() => fs.rmSync(radice, { recursive: true, force: true }));
  fs.mkdirSync(path.join(radice, "raccolta"), { recursive: true });
  fs.writeFileSync(path.join(radice, "raccolta", "partner.json"), JSON.stringify([{ codiceNorm: "VECCHIO" }]));
  let chiamate = 0;
  const nuovi = await caricaPartner({ radice, ricostruisci: true, costruisci: async () => { chiamate++; return [{ codiceNorm: "NUOVO" }]; } });
  assert.equal(chiamate, 1);
  assert.deepEqual(nuovi, [{ codiceNorm: "NUOVO" }]);
});

test("0e: ogni esito usa una causa chiusa e conserva lo stato HTTP", () => {
  const tentativi = [];
  registraTentativo(tentativi, "https://x.test/404", { ok: false, stato: 404 });
  registraTentativo(tentativi, "https://x.test/timeout", { errore: "timeout" });
  registraTentativo(tentativi, "https://x.test/robots", null, { esito: "saltato", causa: "robots" });
  registraTentativo(tentativi, "https://x.test/ok", { ok: true, stato: 200 });
  assert.deepEqual(tentativi.map((x) => [x.esito, x.causa, x.stato]), [
    ["fallito", "http4xx", 404], ["fallito", "timeout", null],
    ["saltato", "robots", null], ["riuscito", null, 200],
  ]);
  const cause = new Set(["nessunCandidato", "robots", "http4xx", "http5xx", "timeout", "paginaVuota", "dominioCambiato", "sconosciuta", null]);
  assert.equal(tentativi.every((x) => cause.has(x.causa)), true);
});

test("raccogli-partner normalizza il paese del CSV senza perdere le parole composte", () => {
  assert.equal(normalizzaPaese("AUSTRIA"), "Austria");
  assert.equal(normalizzaPaese("CZECH REPUBLIC"), "Czech Republic");
});

// Il 30/08 la raccolta e' morta con codice 13 ("unsettled top-level await"):
// il limitatore si era bloccato con la rete ferma. Caso costruito: un indirizzo
// che non e' un URL assoluto fa saltare le righe fra la presa del posto e il
// try/finally, e il posto non torna piu' indietro. Dopo tanti errori quanti
// sono i posti, nessuna richiesta parte piu', e non resta niente in coda che possa svegliarla.
test("il limitatore restituisce il posto anche quando l'indirizzo e' malformato", async () => {
  const lim = new Limitatore(2);
  for (let i = 0; i < 2; i++) await assert.rejects(() => lim.esegui("/sitemap.xml", async () => "mai"));
  assert.equal(lim.attivi, 0, "i posti presi vanno restituiti anche in caso di errore");
  const scaduto = Symbol("scaduto");
  const esito = await Promise.race([
    lim.esegui("https://esempio.it/", async () => "fatto"),
    new Promise((r) => setTimeout(() => r(scaduto), 500)),
  ]);
  assert.equal(esito, "fatto", "dopo due errori il limitatore deve ancora far passare una richiesta buona");
});

// Dal 31/08 la pagina salvata tiene anche i suoi link. Prima li buttava, e il
// modello non poteva restituire un indirizzo diverso da quello della pagina che
// gia' aveva in mano: 16 dei 17 linkCatalogo sbagliati nascevano da li'.
test("la pagina salvata tiene i link, anche fuori dominio e anche a punteggio zero", () => {
  const html = `<html><body>
    <a href="/en/deadlines">Deadlines and dates</a>
    <a href="https://ucc-ie-public.courseleaf.com/modules-visiting-student/">Book of Modules for Visiting Students</a>
    <a href="/files/catalogue_cours_engl_2025-2026.pdf">catalogue_cours_engl_2025-2026.pdf</a>
    <a href="/logo.png"><img src=x></a>
    <a href="mailto:io@example.edu">scrivici</a>
  </body></html>`;
  const link = linkSalvati(html, "https://www.ucc.ie/en/international/");
  const perUrl = Object.fromEntries(link.map((l) => [l.url, l.testo]));
  // Un altro dominio: il catalogo di Cork vive su courseleaf.com, e il filtro
  // stessoAteneo della discesa lo scarta. Qui non deve scartarlo nessuno.
  assert.equal(perUrl["https://ucc-ie-public.courseleaf.com/modules-visiting-student/"], "Book of Modules for Visiting Students");
  // Punteggio zero: "Book of Modules" non e' nel dizionario di punteggioLink,
  // quindi filtrare per punteggio butterebbe proprio il link che serve.
  assert.equal(punteggioLink("Book of Modules for Visiting Students", "https://ucc-ie-public.courseleaf.com/modules-visiting-student/"), 0);
  // Un PDF resta: e' il caso di Amiens, dove la citazione era il nome del file.
  assert.equal(perUrl["https://www.ucc.ie/files/catalogue_cours_engl_2025-2026.pdf"], "catalogue_cours_engl_2025-2026.pdf");
  // Immagini e mailto no.
  assert.ok(!link.some((l) => /logo\.png|mailto/.test(l.url)));
});

// La prova qui sopra copre linkSalvati; questa copre CHI la chiama. Rompendo il
// punto di scrittura (togliere "link" dall'oggetto salvato) le prove restavano
// verdi finche' quell'oggetto era costruito in linea dentro il ciclo.
test("l'oggetto scritto su disco porta i link, e per un PDF li porta vuoti", () => {
  const html = `<html><title>Exchange</title><body><a href="/bison">Course Catalogue</a>Testo</body></html>`;
  const risposta = { urlFinale: "https://x.edu/exchange", stato: 200 };
  const salvata = paginaSalvata({ url: "https://x.edu/exchange" }, risposta, html, false, "2026-08-31T00:00:00.000Z");
  assert.deepEqual(salvata.link, [{ testo: "Course Catalogue", url: "https://x.edu/bison" }]);
  assert.equal(salvata.tipo, "html");
  // Un PDF non ha link da estrarre, ma il campo deve esserci lo stesso: chi
  // legge non deve distinguere fra "nessun link" e "campo assente".
  const pdf = paginaSalvata({ url: "https://x.edu/f.pdf" }, { urlFinale: "https://x.edu/f.pdf", stato: 200 }, "", true, "2026-08-31T00:00:00.000Z");
  assert.deepEqual(pdf.link, []);
  assert.equal(pdf.testo, null);
});

// Lo stesso indirizzo compare spesso due volte: una come icona muta e una con
// la sua etichetta. Se si tiene il primo che capita, il modello riceve
// "" -> indirizzo e perde proprio il testo che dovra' citare come prova.
test("a parita' di indirizzo si tiene il testo piu' lungo, non il primo", () => {
  const html = `<html><body>
    <a href="/bison"><img src=x></a>
    <a href="/bison">Course Catalogue (BISON)</a>
  </body></html>`;
  const link = linkSalvati(html, "https://x.edu/");
  assert.equal(link.length, 1);
  assert.equal(link[0].testo, "Course Catalogue (BISON)");
});

// Dentro l'HTML la e commerciale di un indirizzo si scrive "&amp;". Fino al
// 31/08 restava tale e quale: 142 delle 5.555 pagine in cache sono state
// scaricate con l'indirizzo rotto, e il catalogo approvato di Dresda porta
// ancora "&amp;" dentro il valore, cioe' un link che al clic perde i parametri.
test("l'indirizzo di un link viene decodificato, non copiato con le entita'", () => {
  const html = `<a href="/sins_start?listView=1&amp;stichworte=+">Studienangebot</a>`;
  const [link] = linkSalvati(html, "https://tu-dresden.de/studium/");
  assert.equal(link.url, "https://tu-dresden.de/sins_start?listView=1&stichworte=+");
  assert.ok(!link.url.includes("&amp;"));
  // Anche la forma numerica, che alcuni CMS usano al posto di &amp;.
  const [numerico] = linkSalvati(`<a href="/a?x=1&#38;y=2">x</a>`, "https://x.edu/");
  assert.equal(numerico.url, "https://x.edu/a?x=1&y=2");
});

// Il modello cita il TESTO del link e il cancello della citazione lo cerca
// dentro il testo della pagina, che testoVisibile ha gia' ripulito. Se le due
// decodifiche divergono, la citazione non si ritrova e il dato buono viene
// scartato: un errore che nessuno vedrebbe, perche' somiglia a un no del modello.
test("il testo del link e' decodificato come il testo della pagina", () => {
  const html = `<a href="/c">Cours &amp; s&eacute;minaires&nbsp;2026</a>`;
  const [link] = linkSalvati(html, "https://x.edu/");
  assert.equal(link.testo, "Cours & s&eacute;minaires 2026");
  assert.ok(!link.testo.includes("&amp;"), "la e commerciale va decodificata");
  assert.ok(!link.testo.includes("&nbsp;"), "lo spazio unificatore va decodificato");
});
