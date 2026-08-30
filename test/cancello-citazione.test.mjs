import test from "node:test";
import assert from "node:assert/strict";
import { citazioneValida } from "../scripts/cancelli.mjs";

test("il cancello della citazione normalizza accenti, spazi e virgolette", () => {
  const inviato = "L’Universität   richiede\n almeno il livello B2 per gli studenti in scambio.";
  assert.equal(citazioneValida("L'universitat richiede almeno il livello B2 per gli studenti in scambio", inviato).ok, true);
});

test("il cancello respinge citazioni assenti, fuori dal brano inviato o troppo brevi", () => {
  assert.equal(citazioneValida("Questa citazione non compare in alcun testo inviato al modello", "testo diverso").causa, "citazioneAssente");
  assert.equal(citazioneValida("Una citazione abbastanza lunga ma fuori dalla parte inviata", "prefisso inviato").causa, "citazioneAssente");
  assert.equal(citazioneValida("livello B2", "Il livello B2 e richiesto per tutti gli studenti incoming").causa, "citazioneFuoriMisura");
});
