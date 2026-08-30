import test from "node:test";
import assert from "node:assert/strict";
import { normalizzaPaese } from "../scripts/raccogli-partner.mjs";

test("raccogli-partner normalizza il paese del CSV senza perdere le parole composte", () => {
  assert.equal(normalizzaPaese("AUSTRIA"), "Austria");
  assert.equal(normalizzaPaese("CZECH REPUBLIC"), "Czech Republic");
});
