---
# Create and QA Units 14 and 15 Through `$add-unit` and `$review-content`

## Overview
Implement repeatable explicit-unit support for `$add-unit <unit N>` and `$review-content <unit N>` by aligning the repo’s authoring prompts with the current `references/catalog` plus EPUB workflow, then using those flows to create and check Units 14 and 15. Reuse the existing `Unit` / `Step[]` model, file-backed storage in `src/data/units/`, shared practice validation, and automatic UI consumption from `src/data/units/index.ts`. Do not add an in-app command parser, backend service, or review-pack feature.

## Context
- Files involved:
  - `.agents/skills/add-unit/SKILL.md`
  - `.agents/skills/review-content/SKILL.md`
  - `.agents/skills/add-unit/agents/openai.yaml`
  - `.agents/skills/review-content/agents/openai.yaml`
  - `.claude/commands/add-unit.md`
  - `.claude/commands/review-content.md`
  - `README.md`
  - `AGENTS.md`
  - `CLAUDE.md`
  - `UNITS.md`
  - `src/types/unit.ts`
  - `src/components/steps/PracticeStep.tsx`
  - `src/components/steps/StepRenderer.tsx`
  - `src/components/steps/practiceValidation.ts`
  - `src/components/HomePage.tsx`
  - `src/components/layout/Sidebar.tsx`
  - `src/components/UnitPage.tsx`
  - `src/data/units/index.ts`
  - `src/data/units/unit14.ts`
  - `src/data/units/unit15.ts`
  - `tests/practiceValidation.test.ts`
  - `tests/unit14.test.ts`
  - `tests/unit15.test.ts`
  - `tests/authoringWorkflow.test.ts`
  - `references/catalog/units/unit-014.md`
  - `references/catalog/units/unit-015.md`
  - `references/EPUB/OEBPS/html/ESSB01U014P001.html`
  - `references/EPUB/OEBPS/html/ESSB01U014P002.html`
  - `references/EPUB/OEBPS/html/ESSB01U015P001.html`
  - `references/EPUB/OEBPS/html/ESSB01U015P002.html`
- Related patterns:
  - Units are represented as typed `Unit` objects in `src/data/units/unitN.ts` and registered in numeric order in `src/data/units/index.ts`.
  - The app UI already consumes registered units through `src/components/HomePage.tsx`, `src/components/layout/Sidebar.tsx`, and `src/components/UnitPage.tsx`, so adding units is a data change, not a routing change.
  - Practice modeling already supports sectioned exercises, cues, visuals, word banks, `blankAnswers`, `altAnswers`, `answerMode: 'example'`, and `acceptedPatterns`.
  - Existing adjacent content and test patterns live in `src/data/units/unit10.ts` through `src/data/units/unit13.ts`, `tests/unit10.test.ts` through `tests/unit13.test.ts`, and `tests/practiceValidation.test.ts`.
  - Repo-local command handling belongs in assistant metadata, not runtime application code: `.agents/skills/*` and `.claude/commands/*`.
- Dependencies:
  - Bun for `bun test`, `bun run build`, and `bun run lint`
  - Local EPUB reference files under `references/EPUB/OEBPS/html/`
  - Catalog metadata under `references/catalog/`
  - No backend service or database exists in this repository

## Development Approach
- Testing approach: Regular (command/prompt alignment first, then unit creation, then regression coverage)
- Complete each task fully before moving to the next.
- Keep the change minimal and repo-local: update assistant command/skill prompts, add `unit14` and `unit15`, and only touch shared practice model/UI code if Unit 14 or Unit 15 reveals a real representation gap.
- Reuse the current data flow through `src/data/units/unitN.ts` -> `src/data/units/index.ts` -> existing React pages instead of introducing new runtime command handling.
- CRITICAL: every implementation task must include new or updated tests.
- CRITICAL: task-level tests and `bun run build` must pass before starting the next implementation task.

## Implementation Steps

### Task 1: Align repo command prompts with explicit-unit create and check workflows

**Files:**
- Modify: `.agents/skills/add-unit/SKILL.md`
- Modify: `.agents/skills/review-content/SKILL.md`
- Modify if needed: `.agents/skills/add-unit/agents/openai.yaml`
- Modify if needed: `.agents/skills/review-content/agents/openai.yaml`
- Modify: `.claude/commands/add-unit.md`
- Modify: `.claude/commands/review-content.md`
- Create: `tests/authoringWorkflow.test.ts`

- [x] Make explicit unit-number input first-class for both workflows so repeated calls like `$add-unit 14`, `$review-content 14`, `$add-unit 15`, `$review-content 15` are documented and supported without hardcoding any unit number.
- [x] Align all prompt layers on the real editorial flow: `references/catalog/units/unit-NNN.md` -> EPUB HTML -> `src/data/units/unitN.ts` -> `src/data/units/index.ts`.
- [x] Frame `$review-content <unit N>` as the QA/check stage for a specified unit file, not as review-pack generation and not as a runtime app feature.
- [x] Normalize examples and reporting guidance to current repo patterns, including current unit file locations and existing test/build commands.
- [x] Add a regression test that asserts the skill and command files reference `references/catalog`, point at `src/data/units/unitN.ts`, and stay aligned on the explicit-unit create/check workflow.
- [x] Run `bun test tests/authoringWorkflow.test.ts`
- [x] Run `bun run build`

### Task 2: Implement Unit 14 through the `$add-unit` path and validate it through `$review-content`

**Files:**
- Create: `src/data/units/unit14.ts`
- Modify: `src/data/units/index.ts`
- Modify: `UNITS.md`
- Create: `tests/unit14.test.ts`
- Modify: `tests/practiceValidation.test.ts`
- Modify if needed: `src/types/unit.ts`
- Modify if needed: `src/components/steps/PracticeStep.tsx`
- Modify if needed: `src/components/steps/StepRenderer.tsx`
- Modify if needed: `src/components/steps/practiceValidation.ts`

- [ ] Use `references/catalog/units/unit-014.md` and the linked EPUB HTML files to create original bilingual Unit 14 content in `src/data/units/unit14.ts`.
- [ ] Preserve the observed source exercise structure instead of flattening it: picture-led past continuous vs past simple work and mixed-tense completion with bounded answers.
- [ ] Reuse the existing practice model first: sectioned practice, `visual` or cue-style prompts, multi-blank answers, and strict exact validation.
- [ ] Register `unit14` in numeric order in `src/data/units/index.ts` and mark Unit 14 as `done` in `UNITS.md`.
- [ ] Run the review-content workflow against Unit 14 and fold any content-accuracy or exercise-shape corrections into the same task before proceeding.
- [ ] If Unit 14 reveals a genuine representation gap, make the smallest shared change necessary in the unit types or practice renderer instead of encoding a content-level workaround.
- [ ] Add tests for Unit 14 structure, preserved exercise boundaries, and at least one representative validation rule from the new practice content.
- [ ] Run `bun test tests/unit14.test.ts tests/practiceValidation.test.ts`
- [ ] Run `bun run build`

### Task 3: Implement Unit 15 through the `$add-unit` path and validate it through `$review-content`

**Files:**
- Create: `src/data/units/unit15.ts`
- Modify: `src/data/units/index.ts`
- Modify: `UNITS.md`
- Create: `tests/unit15.test.ts`
- Modify: `tests/practiceValidation.test.ts`
- Modify if needed: `src/types/unit.ts`
- Modify if needed: `src/components/steps/PracticeStep.tsx`
- Modify if needed: `src/components/steps/StepRenderer.tsx`
- Modify if needed: `src/components/steps/practiceValidation.ts`

- [ ] Use `references/catalog/units/unit-015.md` and the linked EPUB HTML files to create original bilingual Unit 15 content in `src/data/units/unit15.ts`.
- [ ] Preserve the source exercise shape for Unit 15: picture/result-now prompts, a word box, and present perfect completion with contracted and full-form variants where appropriate.
- [ ] Prefer existing validation features such as `altAnswers` for contracted/full forms before widening shared validation behavior.
- [ ] Register `unit15` in numeric order in `src/data/units/index.ts` and mark Unit 15 as `done` in `UNITS.md`.
- [ ] Run the review-content workflow against Unit 15 after generation so the command pair is proven repeatable for another explicit unit number.
- [ ] Extend any shared model or UI changes only if Unit 15 needs the same real capability gap, not a second content-specific workaround.
- [ ] Add tests for Unit 15 structure, preserved practice sections, and at least one representative present-perfect validation rule.
- [ ] Run `bun test tests/unit15.test.ts tests/practiceValidation.test.ts`
- [ ] Run `bun run build`

### Task 4: Verify acceptance criteria

- [ ] Run `bun test`
- [ ] Run `bun run build`
- [ ] Run `bun run lint`
- [ ] Re-check that the feature remains repo-local: no new React route, no command UI in the app, no backend service, and no changes in `src/data/review-packs/` unless a real dependency is discovered.
- [ ] Document that the repository does not currently have coverage tooling; do not add a separate coverage system as part of this feature unless scope changes.

### Task 5: Update documentation

**Files:**
- Modify: `README.md`
- Modify if needed: `AGENTS.md`
- Modify if needed: `CLAUDE.md`
- Modify: `UNITS.md`
- Verify if needed: `docs/plans/`

- [ ] Update `README.md` so command guidance, validation guidance, and the presence of Bun tests match the actual repo state.
- [ ] Update `AGENTS.md` and `CLAUDE.md` only where command wording, test guidance, or source-path guidance still conflicts with the implemented `$add-unit` and `$review-content` workflows.
- [ ] Keep `UNITS.md` intro wording aligned with the supported authoring command wording and with Units 14 and 15 marked `done`.
- [ ] Re-run `bun test tests/authoringWorkflow.test.ts` after doc and prompt wording changes if those files are touched.
- [ ] Run `bun test`
- [ ] Run `bun run build`
- [ ] Run `bun run lint`
- [ ] After implementation is complete, move this plan to `docs/plans/completed/` only if that repository workflow is adopted and the destination directory is created.

## Validation Commands
- `bun test tests/authoringWorkflow.test.ts`
- `bun test tests/unit14.test.ts tests/practiceValidation.test.ts`
- `bun test tests/unit15.test.ts tests/practiceValidation.test.ts`
- `bun test`
- `bun run build`
- `bun run lint`

## Testing Tasks
- Add `tests/authoringWorkflow.test.ts` to prevent the assistant command and skill prompts from drifting back to stale reference paths or ambiguous unit-target behavior.
- Add `tests/unit14.test.ts` following the existing unit test pattern used for `unit10` through `unit13`.
- Add `tests/unit15.test.ts` following the same structural and exercise-shape assertions.
- Extend `tests/practiceValidation.test.ts` with representative Unit 14 and Unit 15 validation cases.

## Documentation Tasks
- Update the repo skill files and `.claude/commands/*.md` so `$add-unit <unit N>` is clearly the generation step and `$review-content <unit N>` is clearly the QA/check step for a specified unit.
- Update `README.md` so the repository no longer claims there is no separate test suite if Bun tests are part of the maintained workflow.
- Update `AGENTS.md` and `CLAUDE.md` only where their instructions still conflict with the implemented command wording, prompt flow, or test guidance.
- Update `UNITS.md` intro wording if needed so it matches the supported command language and current status tracking.

## Assumptions and Risks
- This feature means repo-skill support for authoring commands, not a new UI command box or backend command parser.
- The user will provide units manually one at a time and invoke the commands repeatedly, not as a batch list parsed in one call.
- `$review-content <unit N>` is the QA/check step after creation of a unit file and may correct that just-created file, but it is not review-pack generation.
- Unit 14 and Unit 15 appear to fit the current practice model, but either unit may still expose a small gap that requires a shared change in `src/types/unit.ts`, `PracticeStep.tsx`, `StepRenderer.tsx`, or `practiceValidation.ts`.
- This repository currently has Bun tests but no dedicated coverage tooling, so verification should rely on targeted tests, full `bun test`, `bun run build`, and `bun run lint`.
---
