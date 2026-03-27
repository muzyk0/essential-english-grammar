Review and, by default, fix a specified grammar unit in the Essential Grammar in Use app.

Examples:
- `$review-content 14`
- `$review-content 15`
- `$review-content unit14`

Treat `$review-content <unit N>` as the QA and check stage after creating `src/data/units/unitN.ts`. This is a repo authoring workflow, not a runtime app feature and not review-pack generation.

## Step 0 - Resolve the target and mode

- If `$ARGUMENTS` is a number such as `14` or a label such as `unit14`, use `src/data/units/unitN.ts`.
- If `$ARGUMENTS` is a direct path to a unit file, use that file.
- If `$ARGUMENTS` is empty, inspect changed files and continue only when exactly one changed `src/data/units/unitN.ts` file is obvious.
- Default to `fix` mode. Switch to review-only only when the user explicitly asks for findings without edits.
- Announce the resolved unit file and mode before editing.

Call the resolved file `TARGET_FILE`.

## Step 1 - Read context

Always read:
- `CLAUDE.md`
- `AGENTS.md`
- `UNITS.md`
- `src/types/unit.ts`
- `src/data/units/index.ts`
- `TARGET_FILE`
- `references/catalog/README.md`
- `references/catalog/units/unit-NNN.md` for the target unit

Follow the repo's current QA flow:
- `references/catalog/units/unit-NNN.md`
- linked EPUB HTML files under `references/EPUB/OEBPS/html/`
- `src/data/units/unitN.ts`
- `src/data/units/index.ts`

When reading the EPUB HTML:
- inspect hidden answer and example blocks as well as visible prompts
- capture exercise boundaries, worked examples, cues, picture prompts, subsection headings, and word banks
- use those signals to judge whether the unit preserved the source task shape honestly

Read nearby app units only when they help with continuity or terminology.

## Step 2 - Review checklist

Check editorial accuracy:
- grammar meaning matches the source unit
- wording stays original and not too close to the book
- the content follows the catalog-to-EPUB source path rather than old generated markdown notes

Check structure and data integrity:
- `TARGET_FILE` is a valid `Unit`
- user-facing fields are bilingual
- `highlight` is a literal substring of `english`
- ids are unique
- `correctIndex` is 0-based
- `altAnswers` exist when multiple bounded answers should be accepted
- `explanation` and `points` use only `<b>` and `<em>`
- source exercise boundaries are preserved instead of flattened away
- `src/data/units/index.ts` registration and `UNITS.md` status are still correct

## Step 3 - Fix in place

In fix mode:
- edit `TARGET_FILE` directly
- prefer targeted corrections over a full rewrite
- keep the existing `Unit` and `Step[]` architecture unless the source task reveals a real representation gap
- if the unit needs a shared validation or renderer fix to represent the task honestly, make that shared change instead of leaving a content workaround

In review-only mode:
- do not edit files
- report findings first, ordered by severity

## Step 4 - Verify

Run `bun run build` unless the user explicitly says not to. Run any targeted `bun test ...` commands needed for files changed as part of the QA pass.

## Step 5 - Report

In fix mode, report briefly:
- the resolved unit number or file
- what was corrected in `src/data/units/unitN.ts`
- the catalog entry and EPUB HTML files checked
- whether `src/data/units/index.ts` or `UNITS.md` also changed
- any remaining ambiguities or risks

In review-only mode:
- findings first, ordered by severity
- file references where possible
- assumptions or open questions after the findings
- a short summary last

Do not commit unless the user explicitly asks.
