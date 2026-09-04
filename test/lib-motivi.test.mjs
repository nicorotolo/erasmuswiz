import assert from "node:assert/strict";
import test from "node:test";
import {
  CAMPI_MOTIVATI, classificatori, forzaMotivo, motiviDelLink, unisciMotivi,
} from "../scripts/lib-motivi.mjs";
import { MOTIVATE_PER_CAMPO, TETTO_MOTIVATE, TETTO_PAGINE, daAccodare, paginaSalvata, posteggia } from "../scripts/raccogli-partner.mjs";
import { scegliPagine } from "../scripts/leggi-partner.mjs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// I quattro classificatori, uno per volta: interrogarli separatamente e' l'unico
// modo per vedere QUALE dizionario sbaglia quando un conteggio cambia.
test("motivi: il catalogo si riconosce nelle lingue che compaiono davvero", () => {
  const si = ["Vorlesungsverzeichnis", "Course Catalogue", "Studienangebot",
    "Offre de formation", "Catalogo dei corsi", "Book of Modules",
    "Modulhandbuch", "Study programmes", "Guía docente", "Unidades curriculares",
    "Katalog przedmiotów", "Ders kataloğu", "Kursutbud"];
  for (const t of si) assert.equal(classificatori.linkCatalogo(t), true, `doveva scattare: ${t}`);
  // Falsi positivi che costerebbero uno dei due posti disponibili.
  const no = ["Erasmus incoming students", "News", "Contact the international office",
    "Application deadlines", "Language requirements"];
  for (const t of no) assert.equal(classificatori.linkCatalogo(t), false, `non doveva scattare: ${t}`);
});

test("motivi: gli altri tre dizionari scattano e non si pestano i piedi", () => {
  assert.equal(classificatori.scadenzeOspitante("Bewerbungsschluss"), true);
  assert.equal(classificatori.scadenzeOspitante("Application deadline"), true);
  assert.equal(classificatori.requisitoLingua("Sprachnachweis"), true);
  assert.equal(classificatori.requisitoLingua("Requisitos de idioma"), true);
  assert.equal(classificatori.notaDisponibilita("Restrictions for exchange students"), true);
  assert.equal(classificatori.notaDisponibilita("Plazas disponibles"), true);
  // Un dizionario non deve rispondere per un altro: se "deadline" scattasse
  // anche per il catalogo, i due posti del catalogo se li prenderebbero le
  // pagine delle scadenze.
  assert.equal(classificatori.linkCatalogo("Application deadline"), false);
  assert.equal(classificatori.scadenzeOspitante("Course catalogue"), false);
  assert.equal(classificatori.requisitoLingua("Course catalogue"), false);
});

// La misura del 03/09: cercando le radici anche nell'indirizzo, "studienangebot"
// scattava 9.344 volte perche' sta nel PERCORSO di ogni pagina di corso di
// laurea austriaca. Un partner arrivava a 744 falsi positivi.
test("motivi: si guarda il testo del link, non l'indirizzo", () => {
  assert.equal(
    motiviDelLink("Digital Energy Solutions").includes("linkCatalogo"), false,
    "una pagina di un singolo corso non e' il catalogo, per quanto stia sotto /studienangebot/",
  );
  assert.equal(motiviDelLink("Studienangebot").includes("linkCatalogo"), true);
  // E il contratto va fissato, non solo l'esito: oggi l'indirizzo non puo'
  // arrivare al classificatore perche' la firma non lo prevede, ma una firma si
  // cambia in un secondo e senza accorgersene. Questa riga fa fallire il
  // ripensamento invece di lasciarlo passare.
  assert.equal(
    classificatori.linkCatalogo("Digital Energy Solutions", "https://fh.test/studienangebot/digital-energy"),
    false, "un secondo argomento non deve poter riportare dentro l'indirizzo",
  );
});

test("motivi: un link puo' averne piu' di uno, e l'ordine e' stabile", () => {
  const due = motiviDelLink("Course catalogue and language requirements");
  assert.deepEqual(due, ["linkCatalogo", "requisitoLingua"]);
  // L'ordine segue CAMPI_MOTIVATI, non l'ordine di scoperta: i motivi entrano
  // nell'impronta del materiale, e due insiemi uguali non devono sembrare
  // diversi solo perche' sono stati trovati in sequenza diversa.
  assert.deepEqual(unisciMotivi(["requisitoLingua"], ["linkCatalogo"]), ["linkCatalogo", "requisitoLingua"]);
});

test("motivi: si uniscono, non si sovrascrivono", () => {
  assert.deepEqual(unisciMotivi(["linkCatalogo"], ["scadenzeOspitante"]),
    ["linkCatalogo", "scadenzeOspitante"]);
  assert.deepEqual(unisciMotivi(["linkCatalogo"], ["linkCatalogo"]), ["linkCatalogo"]);
  assert.deepEqual(unisciMotivi([], []), []);
});

// Con quindici candidati per partner e due posti, a decidere e' l'ordine.
test("motivi: un'etichetta esatta pesa piu' della stessa parola dentro una frase", () => {
  const esatta = forzaMotivo("Vorlesungsverzeichnis");
  const dentroUnaFrase = forzaMotivo("An overview of all courses offered in English is available here");
  assert.ok(esatta > dentroUnaFrase, `esatta ${esatta} deve battere ${dentroUnaFrase}`);
  assert.equal(forzaMotivo("Notizie"), 0, "senza motivo la forza e' zero");
  assert.ok(forzaMotivo("Course catalogue") > forzaMotivo("Read more about our course catalogue and how to use it"));
});

// La regola dei posti, provata da sola perche' nel ciclo non si vedrebbe.
test("posti: le motivate hanno un budget proprio e non rubano alle 25", () => {
  // Le ordinarie sono esaurite: una pagina senza motivi non entra piu'...
  assert.equal(posteggia([], { ordinarie: TETTO_PAGINE, motivate: 0 }).ammessa, false);
  // ...ma una motivata si', ed e' proprio il punto del passo.
  const m = posteggia(["linkCatalogo"], { ordinarie: TETTO_PAGINE, motivate: 0 });
  assert.equal(m.ammessa, true); assert.equal(m.comeMotivata, true);
  // Il budget motivato e' finito: resta solo la porta ordinaria.
  const esaurito = posteggia(["linkCatalogo"], { ordinarie: 0, motivate: TETTO_MOTIVATE });
  assert.equal(esaurito.comeMotivata, false); assert.equal(esaurito.ammessa, true);
  // E se sono finite entrambe, non entra nessuno.
  assert.equal(posteggia(["linkCatalogo"], { ordinarie: TETTO_PAGINE, motivate: TETTO_MOTIVATE }).ammessa, false);
});

test("posti: al piu' due per campo, cosi' un sito ripetitivo non svuota il budget", () => {
  const usiPerCampo = { linkCatalogo: MOTIVATE_PER_CAMPO };
  const terzo = posteggia(["linkCatalogo"], { ordinarie: 0, motivate: 2, usiPerCampo });
  assert.equal(terzo.comeMotivata, false, "il terzo catalogo non prende un posto motivato");
  // Ma un ALTRO campo ha ancora i suoi posti: i budget sono per motivo.
  const altro = posteggia(["scadenzeOspitante"], { ordinarie: 0, motivate: 2, usiPerCampo });
  assert.equal(altro.comeMotivata, true);
  assert.deepEqual(altro.campiLiberi, ["scadenzeOspitante"]);
  // Un link con due motivi di cui uno pieno passa per quello ancora libero.
  const misto = posteggia(["linkCatalogo", "requisitoLingua"], { ordinarie: 0, motivate: 2, usiPerCampo });
  assert.deepEqual(misto.campiLiberi, ["requisitoLingua"]);
});

// Senza questa riga tutto il passo non arriva a destinazione: il budget di
// 250.000 caratteri taglia in 3 partner su 4, quindi una pagina appena
// scaricata resterebbe in fondo alla fila e al modello non arriverebbe.
test("lettura: una pagina motivata precede una non motivata con punteggio piu' alto", () => {
  const cartella = fs.mkdtempSync(path.join(os.tmpdir(), "motivi-"));
  const scrivi = (nome, testo) => fs.writeFileSync(path.join(cartella, nome),
    JSON.stringify({ url: `https://x.test/${nome}`, titolo: nome, testo, link: [] }));
  scrivi("001.json", "a".repeat(500));
  scrivi("002.json", "b".repeat(500));
  const indice = { pagine: [
    { file: "001.json", url: "https://x.test/001.json", punteggio: 99, motivi: [] },
    { file: "002.json", url: "https://x.test/002.json", punteggio: 1, motivi: ["linkCatalogo"] },
  ] };
  const scelte = scegliPagine(indice, cartella);
  assert.equal(scelte[0].file, "002.json", "la motivata va per prima anche con 1 punto contro 99");
  assert.equal(scelte[1].file, "001.json");
  fs.rmSync(cartella, { recursive: true, force: true });
});

// La provenienza serve a sostenere che una fonte su dominio esterno sia davvero
// indicata dall'ateneo: senza sapere da quale pagina ci si e' arrivati, e con
// quale etichetta, "fonte ufficiale" e' una parola vuota.
test("crawler: una pagina motivata conserva da dove e' stata scoperta", () => {
  const salvata = paginaSalvata(
    { url: "https://courseleaf.test/modules", motivi: ["linkCatalogo"],
      scopertaDa: "https://ateneo.test/exchange", testoLink: "Book of Modules" },
    { urlFinale: "https://courseleaf.test/modules", stato: 200,
      catena: ["https://ateneo.test/go", "https://courseleaf.test/modules"] },
    "<html><body>corsi</body></html>", false, "2026-09-03T00:00:00.000Z",
  );
  assert.deepEqual(salvata.motivi, ["linkCatalogo"]);
  assert.equal(salvata.scopertaDa, "https://ateneo.test/exchange");
  assert.equal(salvata.testoLink, "Book of Modules");
  assert.deepEqual(salvata.catenaRedirect, ["https://ateneo.test/go", "https://courseleaf.test/modules"]);
  // Una pagina ordinaria non inventa una provenienza che non ha.
  const ordinaria = paginaSalvata({ url: "https://ateneo.test/x" },
    { urlFinale: "https://ateneo.test/x", stato: 200 }, "<html></html>", false, "2026-09-03T00:00:00.000Z");
  assert.deepEqual(ordinaria.motivi, []);
  assert.equal(ordinaria.scopertaDa, null);
});

test("motivi: i quattro campi sono quelli deboli, e nessun altro", () => {
  assert.deepEqual(CAMPI_MOTIVATI,
    ["linkCatalogo", "notaDisponibilita", "scadenzeOspitante", "requisitoLingua"]);
});

// Il pezzo che sblocca davvero i cataloghi: erano esclusi DUE volte, dal
// punteggio e dal dominio, e il commento di linkSalvati lo diceva gia'.
test("coda: un link motivato entra anche a zero punti e anche su un altro host", () => {
  const cork = "https://courseleaf.test/modules";
  const ateneo = "https://ucc.test/exchange";
  assert.equal(daAccodare(["linkCatalogo"], 0, ateneo, cork), true,
    "Book of Modules vale zero punti e sta fuori dominio: prima era escluso due volte");
  // Senza motivo restano le due condizioni di sempre, invariate.
  assert.equal(daAccodare([], 0, ateneo, `${ateneo}/altro`), false, "zero punti, niente coda");
  assert.equal(daAccodare([], 5, ateneo, cork), false, "punti ma fuori dominio: resta fuori");
  assert.equal(daAccodare([], 5, ateneo, "https://ucc.test/corsi"), true);
});
