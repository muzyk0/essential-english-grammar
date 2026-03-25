---
name: add-unit
description: Create or update a specific grammar unit in the `essential-english-grammar` project. Use when the user asks to add a unit such as `$add-unit 14`, `$add-unit 15`, add the next unit, complete a stub unit, or turn a book unit into the app's bilingual `Unit` format under `src/data/units/`.
---

# Add Unit

Create or update one full grammar unit for the `essential-english-grammar` app.

Treat `$add-unit <unit N>` as the create stage for a specified unit. This is a repo authoring workflow, not a runtime app feature.

## Workflow

### 1. Resolve the unit number

- If the user says `next`, prefer running `bun run unit:next --json` inside the repo.
- If the helper is unavailable, read `UNITS.md` and choose the first row whose status is `stub` or `—`.
- If the user provides a number such as `14` or a label such as `unit14`, normalize it to that unit directly.
- Announce the resolved unit before writing files.

### 2. Build context

- Read `CLAUDE.md`, `AGENTS.md`, and `UNITS.md`.
- Read `src/types/unit.ts`, `src/data/units/index.ts`, and one nearby completed unit such as `src/data/units/unit13.ts`.
- Read `references/catalog/README.md` and `references/catalog/units/unit-NNN.md` for the matching unit.
- Use the unit catalog entry to find the real EPUB HTML source pages under `references/EPUB/OEBPS/html/`, then inspect those HTML files when theory accuracy, answers, or page structure matters.
- Follow the repo's current editorial path: `references/catalog/units/unit-NNN.md` -> linked EPUB HTML -> `src/data/units/unitN.ts` -> `src/data/units/index.ts`.
- When reading the exercises HTML, inspect hidden answer and example blocks too. The EPUB may embed acceptable answers in the same file instead of providing a separate keys page.
- Note the visible rubric for each exercise and whether the book shows a worked example, word bank, cue, picture prompt, or subsection heading. Those signals are part of the task design and should survive adaptation.
- Read `references/catalog/additional-exercises/page-XXX.md` only when the unit catalog entry points to relevant Additional exercises pages.
- Read nearby units only when needed for continuity, contrast, or `nextUnit` wording.

### 3. Write or update the unit

- Create or update `src/data/units/unitN.ts`.
- Export a `Unit` object.
- Reuse the existing `Unit` and `Step[]` architecture unless the source task reveals a genuine representation gap.
- Keep the order and exercise boundaries close to the book unless there is a clear product reason to change them.
- Do not compress distinct source exercise modes into one blurred practice step when the book clearly separates them.
- If the source shows a worked example item, example answers, sub-rubrics, picture prompts, or word banks, represent those explicitly in the app instead of silently dropping them.
- Keep every user-facing field bilingual with `en` and `ru`.
- Keep theory accurate in meaning to Murphy, but rewrite it from scratch.
- Write fresh examples, practice prompts, quiz options, explanations, and summary points.
- Use `altAnswers` whenever more than one bounded answer should be accepted.
- For open personal or example-answer prompts, prefer `answerMode: 'example'` together with `acceptedPatterns` instead of accepting any non-empty text.
- When the source task is bounded but not single-answer, prefer strict bounded validation over loose free text.
- Use `PracticeContent.sections`, `cue`, `wordBank`, and `visual` fields when they help preserve the source task honestly.
- Keep `highlight` as a literal substring of `english`.
- Use only `<b>` and `<em>` inside `explanation` and `points`.
- Use stable ids such as `p14-1` and `q14-1`.

### 4. Register the unit

- Add the import to `src/data/units/index.ts`.
- Insert the unit into the exported array in numeric order.
- Update the corresponding row in `UNITS.md` to `done`.

### 5. Verify

- Run `bun run build`.
- Fix any TypeScript or Vite issues before finishing.

### 6. Report

- Report the resolved unit number.
- Report the created or updated unit path: `src/data/units/unitN.ts`.
- Report the catalog entry and EPUB HTML files consulted.
- Report whether `src/data/units/index.ts` and `UNITS.md` were updated.
- Note any content assumptions or source ambiguities.
- Do not commit unless the user explicitly asks.

## Content Rules

- Never copy or closely paraphrase the book's explanations, tables, examples, exercise wording, answer order, answer key, images, audio, or layout.
- Use the real EPUB HTML pages as the primary editorial reference for scope and correctness.
- Use `references/catalog/` only as a navigation and index layer into those source pages.
- Treat embedded answer blocks and example answers in the EPUB as part of the editorial source. They can show that a task has several acceptable answers or no single fixed answer.
- Additional exercises may confirm difficulty and topic coverage for the unit, but should not be transcribed into the app.
- Match the app's existing structure and tone.
- Add a new step type only if the UI genuinely requires a new interaction.
