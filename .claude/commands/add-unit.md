Add or update one grammar unit in the Essential Grammar in Use app.

Examples:
- `$add-unit 14`
- `$add-unit 15`
- `$add-unit next`

Treat `$add-unit <unit N>` as the create stage for a specific unit. This is a repo authoring workflow, not a runtime app feature.

## Step 0 - Resolve the unit number

Read `UNITS.md` first.

- If `$ARGUMENTS` is `next`:
  - Prefer running `bun run unit:next --json` and use its result directly.
  - If the helper is unavailable, choose the first row whose status is `stub` or `—`.
- If `$ARGUMENTS` is a number such as `14` or a label such as `unit14`, normalize it to that unit number directly.
- Announce the resolved unit number before editing.

Call the resolved number `N` for the rest of this prompt.

## Step 1 - Read context

Read these files before writing content:
- `CLAUDE.md`
- `AGENTS.md`
- `UNITS.md`
- `src/types/unit.ts`
- `src/data/units/index.ts`
- one nearby completed unit such as `src/data/units/unit13.ts`
- `references/catalog/README.md`
- `references/catalog/units/unit-NNN.md` for Unit `N`

Follow the repo's current editorial flow:
- `references/catalog/units/unit-NNN.md`
- linked EPUB HTML files under `references/EPUB/OEBPS/html/`
- `src/data/units/unitN.ts`
- `src/data/units/index.ts`

When reading the EPUB HTML:
- inspect hidden answer and example blocks as well as visible prompts
- note whether the source uses picture prompts, word banks, cues, bounded alternatives, worked examples, or subsection headings
- preserve those exercise boundaries in the app instead of flattening them

Read `references/catalog/additional-exercises/page-XXX.md` only when the unit catalog entry points there and the page helps confirm scope or difficulty.

## Step 2 - Write or update `src/data/units/unitN.ts`

Create or update `src/data/units/unitN.ts` and export a typed `Unit`.

Requirements:
- keep all user-facing content bilingual with `en` and `ru`
- keep the grammar meaning faithful to Murphy, but write theory, examples, practice, quiz, and summary content in original wording
- reuse the existing `Unit` and `Step[]` model unless the source task reveals a real representation gap
- preserve the source exercise shape honestly with `sections`, `cue`, `visual`, `wordBank`, `blankAnswers`, `altAnswers`, `answerMode: 'example'`, and `acceptedPatterns` where needed
- use strict validation for bounded tasks
- use `altAnswers` for acceptable contracted or full-form variants
- keep `highlight` as a literal substring of `english`
- keep ids stable and unique, for example `p14-1` or `q14-1`
- use only `<b>` and `<em>` inside `explanation` and `points`

## Step 3 - Register the unit

Update `src/data/units/index.ts`:
- add the import for `unitN`
- register it in numeric order

Update `UNITS.md`:
- mark Unit `N` as `done`

## Step 4 - Verify

Run `bun run build` and fix any TypeScript or Vite errors before finishing.

## Step 5 - Report

Report briefly:
- the resolved unit number
- the unit file path: `src/data/units/unitN.ts`
- the catalog entry and EPUB HTML files consulted
- whether `src/data/units/index.ts` and `UNITS.md` were updated
- any source ambiguities or modeling assumptions

Do not commit unless the user explicitly asks.
