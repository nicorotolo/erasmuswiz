const test = require("node:test");
const assert = require("node:assert/strict");
const {
  creaZainoV3,
  migraContenitoreZainoV3,
} = require("../js/puro.js");

const ATENEI = ["cafoscari", "sapienza"];
const CICLI = {
  cicloDati: "2026/27",
  cicloPercorsoLegacy: "2026/27",
  cicloPercorsoNuovo: "2027/28",
  atenei: ATENEI,
};

function ramoLA(presente) {
  return presente
    ? {
        metaAperta: "meta-prova",
        bozzePerMeta: {
          "meta-prova": {
            meta: { id: "meta-prova", universita: "Università prova" },
            titolo: "Bozza da non perdere",
            versioni: [{
              numero: 1,
              esamiCasa: [{ id: "e1", nome: "Diritto", cfu: 6 }],
              corsiHost: [{ id: "c1", nome: "Law", ects: 6 }],
              gruppi: [{ id: "g1", esami: ["e1"], corsi: ["c1"] }],
              preInvio: { linkAperti: true, ectsConfrontati: true },
            }],
          },
        },
      }
    : undefined;
}

function zainoFixture(tipo, conLA) {
  const base = {
    checklist: { "passo-legacy": true },
    metePreferite: ["meta-legacy"],
    marcatoreFixture: tipo,
  };
  if (conLA) base.la = ramoLA(true);

  if (tipo === "domanda") base.fase = "domanda";
  if (tipo === "selezionato") base.fase = "selezionato";
  if (tipo === "sconosciuto") base.fase = "valore-mai-esistito";
  if (tipo === "corrotto") {
    base.fase = "domanda";
    base.checklist = "non-e-un-oggetto";
    base.metePreferite = null;
    if (conLA) {
      base.la = {
        bozzePerMeta: null,
        residuoDaConservare: "presente",
      };
    }
  }
  // "assente" non riceve deliberatamente il campo fase.
  return base;
}

function migra(tipo, ateneo, conLA) {
  const zaino = zainoFixture(tipo, conLA);
  if (tipo === "piatto") {
    return migraContenitoreZainoV3(zaino, {
      ...CICLI,
      migraPiatto: piatto => ({
        v: 2,
        zaini: { [ateneo]: piatto },
      }),
    });
  }
  const zaini = { [ateneo]: zaino };
  if (tipo === "corrotto") {
    const altro = ATENEI.find(chiave => chiave !== ateneo);
    zaini[altro] = "casella-illeggibile-da-conservare";
  }
  return migraContenitoreZainoV3({
    v: 2,
    zaini,
  }, CICLI);
}

const TIPI = [
  "domanda",
  "selezionato",
  "assente",
  "sconosciuto",
  "corrotto",
  "piatto",
];

for (const tipo of TIPI) {
  for (const ateneo of ATENEI) {
    for (const conLA of [false, true]) {
      test(`migrazione v2→v3 — ${tipo}, ${ateneo}, LA ${conLA ? "presente" : "assente"}`, () => {
        const migrato = migra(tipo, ateneo, conLA);
        const zaino = migrato.zaini[ateneo];

        assert.equal(migrato.v, 3);
        assert.equal(
          zaino.fase,
          tipo === "selezionato" ? "selezionato" : "esplorando"
        );
        assert.equal(zaino.cicloDati, "2026/27");
        assert.equal(zaino.cicloPercorso, "2026/27");
        assert.equal(zaino.marcatoreFixture, tipo);
        assert.ok(zaino.la && typeof zaino.la === "object");
        assert.equal(zaino.la.schemaVersion, 2);
        assert.ok(zaino.la.dossiersById && typeof zaino.la.dossiersById === "object");

        if (conLA && tipo !== "corrotto") {
          const dossier = Object.values(zaino.la.dossiersById)[0];
          assert.equal(dossier.titolo, "Bozza da non perdere");
          assert.equal(dossier.cycle, "2026/27");
          assert.equal(dossier.university, ateneo);
          assert.equal(dossier.versions[0].versionId, `${dossier.id}:v1`);
          assert.ok(zaino.la.recovery.legacyRecovery);
        } else {
          assert.deepEqual(zaino.la.dossiersById, {});
        }

        if (tipo === "corrotto") {
          assert.deepEqual(zaino.checklist, {});
          assert.deepEqual(zaino.metePreferite, []);
          if (conLA) {
            assert.equal(zaino.la.residuoDaConservare, "presente");
            assert.ok(Object.prototype.hasOwnProperty.call(
              zaino.la.recovery.legacyCorrupt, "__bozzePerMeta"
            ));
          }
          const altro = ATENEI.find(chiave => chiave !== ateneo);
          assert.equal(
            migrato.zaini[altro].recuperoLegacy,
            "casella-illeggibile-da-conservare"
          );
        } else {
          assert.equal(zaino.checklist["passo-legacy"], true);
          assert.deepEqual(zaino.metePreferite, ["meta-legacy"]);
        }
      });
    }
  }
}

test("uno zaino davvero nuovo punta al ciclo successivo ma dichiara il ciclo dei dati", () => {
  const nuovo = creaZainoV3(CICLI);
  assert.equal(nuovo.fase, "esplorando");
  assert.equal(nuovo.cicloPercorso, "2027/28");
  assert.equal(nuovo.cicloDati, "2026/27");
});

test("la migrazione v2→v3 è idempotente", () => {
  const unaVolta = migra("selezionato", "sapienza", true);
  const dueVolte = migraContenitoreZainoV3(unaVolta, CICLI);
  assert.deepEqual(dueVolte, unaVolta);
});

test("la normalizzazione conserva le due risposte V4 del profilo ed è idempotente", () => {
  const contenitore = {
    v: 3,
    zaini: {
      cafoscari: {
        profilo: {
          area: "0311",
          livello: "L",
          lingue: [],
          extraUE: true,
          ricercaTesi: false,
        },
        cicloDati: "2026/27",
        cicloPercorso: "2027/28",
      },
    },
  };
  const unaVolta = migraContenitoreZainoV3(contenitore, CICLI);
  const dueVolte = migraContenitoreZainoV3(unaVolta, CICLI);
  assert.equal(unaVolta.zaini.cafoscari.profilo.extraUE, true);
  assert.equal(unaVolta.zaini.cafoscari.profilo.ricercaTesi, false);
  assert.deepEqual(dueVolte, unaVolta);
});
