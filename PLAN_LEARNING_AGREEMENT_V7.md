# ErasmusWiz — Learning Agreement come dossier vivo

## Goal and release contract

Implement an app-first Learning Agreement dossier for Ca' Foscari and Sapienza, mobility for exams only. It must guide a student from a reusable Italian study plan through comparison of several destinations, explicit assignment of one destination per academic cycle, immutable submitted versions, university-specific procedural steps, changes during mobility, and manual recognition after return. The existing print/text export remains secondary. No PDF/Transcript import, Word generation, attachments, official submission, signature, approval, account, backend, sync, or runtime AI.

The CORE is the implementation target now: plan library, multi-destination dossiers, assignment, workflow, versions, university rules, guided copy, recognition, reliable persistence, backup/restore, analytics, and automated tests. Matching is a separate non-blocking pilot. Because no reviewed syllabus matrix is currently supplied, implement its static data contract and source gate with an empty dataset; the UI must remain hidden when no entry passes the gate. Never invent suggestions.

Create a tracked repository copy of this specification at `PLAN_LEARNING_AGREEMENT_V7.md`. Do not commit.

## User experience

- Add the route `#learning-agreement/<ateneo>`, with links from Home, Percorso, and destination surfaces where context exists. Preserve the active-ateneo isolation contract already used by deep routes.
- Present five stages in one dedicated screen: `Il mio piano`, `Confronta le mete`, `Prepara la proposta`, `Approva e modifica`, `Convalida`.
- Show one primary CTA, determined by save error, readiness blockers, lifecycle facts, backup reminder, then secondary actions in that order.
- A cold deep link without profile, plan, or destinations must still show the requested university's explanation and procedure plus `Inserisci il tuo piano`; do not force onboarding, create a dossier, or render empty selectors.
- Keep at most one non-archived dossier for each `metaId + ciclo`. Creating it again opens the existing dossier. Restarting requires explicit archive first.
- Preserve unassigned exploratory dossiers. Assignment is explicit, at most one operational dossier per cycle. Changing it before the first external event is reversible; after that require a strong confirmation, archive the previous operational dossier, and never delete its history.
- Keep home exams and host courses as two distinct sets connected many-to-many. Never imply one-to-one equivalence.
- Keep `Condividi o esporta` secondary and collapsed: field-by-field text copy plus browser print/PDF for the current version only. No Word or document bundle.

## LA schema v2

Only evolve the per-university `ZAINO.la` branch. Do not bump the general Zaino/container version solely for this feature.

```text
la: {
  schemaVersion: 2,
  nextId,
  examLibrary: { [examId]: { id, codice, nome, cfu, stato } },
  dossiersById: { [dossierId]: Dossier },
  openDossierId,
  assignedDossierIdByCycle: { [cycle]: dossierId },
  recovery?: { legacyRecovery?, legacyCorrupt? }
}
```

Allowed home-exam states: `da-sostenere`, `gia-sostenuto`, `fuori-piano`.

A dossier stores a stable id, `metaId`, readable meta snapshot, immutable university and cycle, timestamps, optional `archivedAt`, versions, per-version confirmations, lifecycle fact timestamps, and optional recognition. Operational/exploratory state is derived from `assignedDossierIdByCycle`, not duplicated.

Each version stores stable `versionId`, number, creation date, reason/note, optional `lockedAt`/`lockReason`, home-exam snapshots with a stable local snapshot id and optional `sourceExamId`, host-course snapshots with stable local snapshot ids, many-to-many groups referencing snapshot ids, and preflight checks. Host courses support optional code, name, positive ECTS, language, semester, official URL, availability state, and verification/source dates.

The current version is editable only until the first external fact: sent to coordinator, entered in official portal, or any external confirmation. That event freezes the exact version. Any later edit first clones it into a new version with no confirmations and resets preflight checks, then applies the edit. Old confirmations remain tied only to the submitted `versionId`. A new version during mobility does not move the lifecycle backward, but completing/resubmitting it becomes the primary task.

Persist canonical external step keys where applicable: `sent-home`, `entered-portal`, `student-signed`, `home-approved`, `host-approved`. Each record stores `versionId`, user-marked date/time, subject, and optional note. UI copy must always say `Segnato da te come…`; never claim ErasmusWiz detected an official approval.

Do not persist a mutable `phase`. Derive it purely from facts, in this precedence:

1. no assigned dossier for the active cycle -> `exploration`;
2. `recognitionRecordedAt` -> `closed`;
3. `returnedAt` -> `recognition`;
4. `mobilityStartedAt` -> `mobility`;
5. `firstExternalAt` -> `approval`;
6. otherwise assigned -> `preparation`.

Readiness is a pure function returning `{ state: "incomplete"|"ready", missingCodes: [] }`. `ready` requires: meta and cycle; at least one active host course and one home exam; non-empty names and positive numeric credits; every active item belongs to at least one many-to-many group; no orphan group references; no unresolved import row; all preflight attestations complete (`course-data-checked`, `credits-compared`, `mapping-reviewed`); and no applicable university rule of severity `block`. Return stable codes such as `missing-meta`, `missing-cycle`, `no-home-course`, `no-host-course`, `invalid-home-credits`, `invalid-host-credits`, `unmapped-home`, `unmapped-host`, `orphan-reference`, `unresolved-import`, `preflight:<key>`, and `rule:<id>`. Host code and exact ECTS/CFU equality are not common blockers.

Lifecycle CTA order is binding: unsaved recovery; first readiness blocker; action for derived phase; due backup reminder; secondary actions. Readiness must not prevent the student from recording an external fact that really happened, but show a strong warning first.

## Import, persistence, backup and recognition

Study-plan paste format is visibly documented as `codice; nome; CFU`. Also accept tabs, optional header, comma/dot decimals, whitespace, and empty lines. Always show a preview. Every ambiguous row must be fixed, explicitly excluded, or explicitly confirmed; silently dropping data is forbidden. Detect duplicates by normalized code, or normalized name+CFU when code is missing. Let the user merge or keep separate. Manual add/edit always remains available.

Change `salvaContenitore`/`salvaZaino` to return success/failure rather than swallowing storage errors. Existing surfaces may continue using them, but a general persistent storage-failure banner must be available. All LA mutations must go through a transactional helper: deep-clone the LA candidate, mutate the clone, serialize/write it, and only after success replace in-memory state and rerender. On failure, retain saved state as active, show persistent `Modifiche non salvate`, do not present the action as completed, retain the candidate in volatile memory, and offer immediate recovery JSON download. Critical actions including assignment, version creation, confirmation, and recognition are effective only after a successful write.

Provide visible LA-only JSON backup and restore. Suggest backup after assignment, first external event, each new version, and closing recognition. File envelope: format marker, schema version, university id, cycle/export timestamp, payload, and privacy warning. Restore shows preview, rejects malformed/future-schema/unknown-university files, and replaces only `ZAINO.la` for the university declared in the file after explicit confirmation and an opportunity to download current state. If the file belongs to another known university, restore into that university's container without switching or overwriting the active university, then offer to open it. State clearly there is no device sync and browser-data deletion can erase the dossier. Never store/upload signed LA files, Transcript originals, or attachments.

Recognition must reference one exact user-marked approved `approvedVersionId`. For each host-course snapshot persist `hostCourseSnapshotId`, `transcriptStatus` (`passed`, `failed`, `absent`), optional `transcriptTitle`, and optional positive `transcriptCredits`. Empty title means not transcribed, not equal. For each home-exam snapshot persist `pending`, `recognized`, or `not-recognized`. Highlight title/credit/missing-activity discrepancies. Do not store grades or calculate grade conversion. `closed` occurs only after manual `recognitionRecordedAt` with copy stating it was marked by the student as registered by the university.

## Migration

Normalization must recognize both legacy `bozzePerMeta` and v2 `dossiersById`. Generate deterministic legacy dossier ids from normalized `legacy:<ateneo>:<ciclo>:<metaId>`, with deterministic stable-order collision suffixes; version ids are `<dossierId>:v<number>`. Historical home exams remain snapshots without `sourceExamId` until the student explicitly copies them into the library. Never infer an assigned destination.

Use a verified two-save recovery sequence: first write schema v2 plus a `legacyRecovery` copy; read back and verify structure/counts; only then remove recovery and write again. If any step fails, keep recovery. Malformed legacy drafts go to `recovery.legacyCorrupt`, appear as recoverable, and are never dropped. Migration and normalizers must be pure/idempotent and preserve unknown future fields.

Cycle rules: the home exam library may be reused. Duplicating into a new cycle creates an exploratory dossier but must not transfer host courses, availability/source facts, workflow timestamps, confirmations, or suggestions without renewed verification.

## University rule data

Create a separate static rule data file loaded before `app.js`. Every rule contains stable id, university, valid cycle, faculty/scope, official source URL/title, `verifiedAt`, severity `block|warning|info`, and any relative-deadline base event. If cycle/scope does not match or required source metadata is invalid, show `Procedura da verificare`; never silently reuse a previous cycle.

Seed only the following verified 2026/27 rules, with `verifiedAt: 2026-08-02` and the cited official sources:

- Sapienza general guide: `https://www.uniroma1.it/sites/default/files/field_file_allegati/guida_erasmus_2026_2027.pdf`. Home exams proposed must be not yet passed (`block`); outside-study-plan activities require prior plan approval (`warning`); guide the user to record EWP vs traditional route; every change uses the personal page; names should match the Transcript. Any free preliminary-proposal practice must be scoped only to Giurisprudenza and presented as practice, not general rule.
- Ca' Foscari procedure: `https://www.unive.it/pag/49168/` and official FAQ `https://www.unive.it/pag/fileadmin/user_upload/ateneo/internazionale/documenti/andare_estero/studio/erasmus_studio/erasmus_out_2026_2027/FAQs_-_OLA__ENG_.pdf`. Draft goes to academic coordinator before OLA; home code blocks readiness; host code is optional; exact ECTS/CFU equality is only a warning; the 30-day change reminder is calculated only from the class-start date entered by the student; at least one OLA activity passed is recognition-stage information, not proposal readiness.

Render only the active university/cycle/scope guide. Official portals remain external: present the relevant fields and targeted copy buttons, without submission, signature, or synchronization.

## Matching pilot contract

Create a separate static suggestion data file and pure source-gate function. V1 accepts only human-reviewed similarity between official Sapienza Giurisprudenza syllabi. Each entry requires official stable program URLs for both courses, explicit cycle/reusability, verification date, human reviewer, and rationale covering contents, credits, semester, language, and missing data. Label it `Corso da valutare`; no percentage or equivalence statement. Suggestions are never inserted automatically; student accepts/ignores them.

Historical precedents are entirely out of scope. With the current empty verified dataset, suggestions remain hidden and the core remains fully functional. Add tests proving inaccessible, stale, incomplete, or unreviewed data cannot render.

## Files and architecture

- Keep rendering/event wiring in `js/app.js` and pure schema, migration, parser, readiness, lifecycle, rule-gate, matching-gate and recognition comparison functions in `js/puro.js`.
- Add `js/la-regole.js` and `js/la-suggerimenti.js`, loaded before `app.js`.
- Add only LA-specific markup/hooks in `index.html` and LA-specific responsive styles in `css/style.css`; preserve V6a design and router invariants.
- Add focused unit tests in `test/la-v2.test.cjs` and browser flows in `test/ui/la-v2.spec.cjs`; extend router tests only where the new recognized route changes expectations.
- Update `STATO_DEL_SITO.md` factually at the end. Do not alter unrelated roadmap/design specifications. Add the tracked `PLAN_LEARNING_AGREEMENT_V7.md`, copied from this spec.

## Analytics and acceptance

GoatCounter may receive only fixed event names: `la-open`, `la-plan-confirmed`, `la-ready`, `la-version-created`, `la-recognition-closed`, `la-suggestion-used`. Never send university, meta, course, identifiers, user text, or academic data.

Automated acceptance includes:

- parser, ambiguity and duplicate decisions;
- migration idempotency/no loss/corrupt recovery;
- immutable snapshots and freeze at first external event;
- new version resets confirmations;
- complete readiness truth table and phase derivation;
- university/cycle/scope/stale rules;
- recognition tied to the correct version and title/credit discrepancies;
- transactional storage failure, quota, backup/restore, corrupt/future JSON and cross-university restore;
- cold deep link without profile;
- two destinations, assignment without loss, change before/after official process;
- full Ca' Foscari and Sapienza browser flows;
- new cycle without improper reuse;
- unavailable host course and recognition mismatches;
- guide isolation, offline operation, keyboard flow, light/dark, and no horizontal scroll at 390px;
- analytics payloads contain fixed event names only.

Run syntax checks, all unit tests, all Playwright UI tests, and the existing performance benchmark. Release blockers are data loss, silent save failure, wrong university rule, false approval, dropped import row, recognition against wrong version, mobile blocker, unverified suggestion, or academic/user data in analytics.

External student validation is a rollout gate, not fabricatable in code: one returned Sapienza case, one returned Ca' Foscari case, and one first-time LA student for each university must validate the finished feature before public release. Report this as outstanding unless evidence already exists in the repo.

## Non-goals

Thesis/research/PhD mobility, accounts, backend, cloud sync, runtime AI, direct portal integration, official submission/signature/approval, PDF or Transcript parsing, grades and conversion, attachments, Word generation, historical-precedent matching, universal matching coverage, and unrelated UI refactors.
