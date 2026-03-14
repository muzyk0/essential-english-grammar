# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project context

This repository is an interactive grammar-learning app based on *Essential Grammar in Use* by Raymond Murphy.
It adapts the book's material into bilingual (`en`/`ru`) theory, examples, practice, quizzes, and summaries.
Treat the app as a learning companion to the original book, not a replacement for it.

## Content policy

- Keep theory accurate to the grammar point in *Essential Grammar in Use*, but write all user-facing theory in original words. Do not copy or closely paraphrase the book's explanations, example blocks, tables, or summaries sentence-by-sentence.
- Practice, quiz, and summary content should be original learning material. They may target the same grammar point as the book, but should not reproduce the book's exercise wording, answer order, examples, or answer keys 1:1.
- Short topic labels such as `am/is/are` or `present simple` may match the book, but the app must not become a page-for-page digital substitute for it.
- Never reuse the book's images, audio, page artwork, or fixed-layout page structure in shipped content.
- Use the local EPUB pages as the primary editorial source of truth for correctness and coverage.
- Use `references/catalog/` as a navigation/index layer into the EPUB, not as a reconstructed content source.
- Additional exercises may cover several units at once. Use them to confirm grammar scope, but do not transcribe them into the app.

## Commands

```bash
bun dev          # start dev server at http://localhost:5173
bun run build    # type-check (tsc -b) then build to dist/
bun run lint     # ESLint
bun run preview  # serve the production build locally
bun run extract:index  # rebuild references/catalog from local EPUB sources
bun run unit:next   # print the next auto-selected unit from UNITS.md
bun run review-pack:next   # print the next auto-selected review-pack scope
```

No test suite is configured — use `bun run build` as the correctness check (TypeScript + Vite).

## Architecture

### Data flow
Core unit content lives in `src/data/units/`. Multi-unit extra practice lives in `src/data/review-packs/`.
- The sidebar, home page, and routing consume `src/data/units/index.ts` for normal units.
- Extra practice / Additional exercises consume `src/data/review-packs/index.ts`.
- Book chapters stay as `Unit` records. Material derived from the book's `Additional exercises` should become `ReviewPack` content, not fake `unitN` entries.

### Routing
- `src/components/UnitPage.tsx` renders `/unit/:unitId`.
- `src/components/ReviewPage.tsx` renders `/review/:reviewId`.
- Review packs are linked from the home page, sidebar, and from related unit pages via `coversUnits`.

### Adding a unit
1. If the user wants the next unit automatically, run `bun run unit:next` first and use that number.
2. Create or update `src/data/units/unitN.ts` (copy an existing unit as template).
3. Import it and append to the array in `src/data/units/index.ts`.
4. For practice fill-blank questions with contractions, always set `altAnswers` with the alternative form (e.g. `correctAnswer: "'m", altAnswers: ["am"]` or `correctAnswer: "isn't", altAnswers: ["is not"]`). Both contracted and full forms must be accepted.
5. Keep theory faithful in meaning to Murphy, but rewrite it from scratch. Practice and quiz items should be newly authored rather than copied from the book.

### Adding a review pack
1. If the user wants the next pack automatically, run `bun run review-pack:next` first and use that scope.
2. Create `src/data/review-packs/reviewPackXtoY.ts` (or another descriptive name for the covered range/topic).
3. Import it and append it to `src/data/review-packs/index.ts`.
4. Fill `coverageLabel` and `coversUnits` accurately. `coversUnits` drives related links from unit pages.
5. Reuse the existing `Step[]` model (`theory`, `examples`, `practice`, `quiz`, `summary`). Do not add a special step type just for review packs unless the UI genuinely needs a new interaction.
6. Treat review packs as original mixed practice inspired by several units, not as a page recreation of the book's Additional exercises.

### Adding a step type
1. Add the type literal to `StepType` in `src/types/unit.ts`.
2. Add a discriminated-union interface for the step in the same file.
3. Create `src/components/steps/NewTypeStep.tsx`.
4. Add a `case 'newtype':` branch in `src/components/steps/StepRenderer.tsx`. The `default` branch has a TypeScript exhaustiveness check — the build will fail if a case is missing.

### Step layout contract
- `theory` / `examples` / `practice` steps: two-page book spread (`left` = `TheoryContent`, `right` = `ExamplesContent` or `PracticeContent`). Both sides are `Translated<T>` objects with `en` and `ru` keys.
- `quiz` / `summary` steps: centred single-page layout, use a `content: Translated<...>` field instead of `left`/`right`.
- `ReviewPack.steps` uses the same `Step[]` union as `Unit.steps`, so `StepRenderer` and `ProgressBar` work for both pages.

### i18n
- **Unit content** (titles, explanations, examples, questions): bilingual inline in the unit file via `Translated<T> = { en: T; ru: T }`.
- **Review pack content** uses the same bilingual inline approach as unit content.
- **UI strings** (buttons, labels): added to the `UI_STRINGS` map in `src/context/LanguageContext.tsx` and accessed anywhere with `const { t } = useLanguage(); t('key')`.
- The global language state (`lang: 'en' | 'ru'`) lives in `LanguageContext` and defaults to `'ru'`.

### Reference material
- Primary source: local EPUB HTML pages under `references/EPUB/OEBPS/html/`
- Navigation/index layer: `references/catalog/units/unit-NNN.md`, `references/catalog/additional-exercises/page-XXX.md`, and the matching `.json` files
- Use `references/catalog/README.md` as the entry point when you need to locate a unit, an Additional exercises page, or other reference pages.
- The catalog is metadata-first and intentionally does not reconstruct full lesson text. Use it to find the right source files, then inspect the real EPUB HTML pages when accuracy matters.
- These files are for editorial verification only. Use them to confirm topic coverage, scope, and difficulty, then write original app content.

### Auto-selecting the next unit
- Prefer `bun run unit:next` over hand-picking the next unit number.
- The helper chooses the first row in `UNITS.md` whose status is `stub` or `—`.
- Use that helper for `/add-unit next` style workflows so the command, skill, and repo rules stay aligned.

### Auto-selecting the next review pack
- Prefer `bun run review-pack:next` over hand-picking the next range.
- The helper should use `references/catalog/additional-exercises/` as the source for coverage lookup.
- It should skip mixed non-contiguous labels such as `Units 1–2, 5–7, 9` when choosing the next clean contiguous pack.
- It should skip ranges already covered by existing `ReviewPack.coversUnits`.
- It should skip ranges containing units that do not yet exist in `src/data/units/index.ts`.

### Styling
All styles are in `src/index.css` (no CSS modules or framework). Design tokens are CSS variables at the top of the file. `src/App.css` is intentionally empty. The book-spread layout uses a two-column CSS grid that collapses to single column at `<900px`; the sidebar hides at `<768px`.

### Practice answer validation
`PracticeQuestion` has an optional `altAnswers: string[]` field for alternative acceptable answers. `PracticeStep.tsx` checks user input against both `correctAnswer` and all `altAnswers`. Use this whenever a question has grammatically valid variants (contracted vs full verb forms).

### `explanation` and `points` fields
These fields in `TheoryContent` and `SummaryContent` may contain simple inline HTML (`<b>`, `<em>`) and are rendered with `dangerouslySetInnerHTML`. Keep to those two tags only — no user-supplied content ever reaches these fields.
