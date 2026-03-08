# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project context

This repository is an interactive grammar-learning app based on *Essential Grammar in Use* by Raymond Murphy.
It adapts the book's material into bilingual (`en`/`ru`) theory, examples, practice, quizzes, and summaries.
Treat the app as a learning companion to the original book, not a replacement for it.

## Commands

```bash
bun dev          # start dev server at http://localhost:5173
bun run build    # type-check (tsc -b) then build to dist/
bun run lint     # ESLint
bun run preview  # serve the production build locally
```

No test suite is configured — use `bun run build` as the correctness check (TypeScript + Vite).

## Architecture

### Data flow
All content lives in `src/data/units/`. The sidebar, home page, and routing consume the single exported array from `src/data/units/index.ts` — **no other file needs to change when adding a unit**.

### Adding a unit
1. Create `src/data/units/unitN.ts` (copy an existing unit as template).
2. Import it and append to the array in `src/data/units/index.ts`.
3. For practice fill-blank questions with contractions, always set `altAnswers` with the alternative form (e.g. `correctAnswer: "'m", altAnswers: ["am"]` or `correctAnswer: "isn't", altAnswers: ["is not"]`). Both contracted and full forms must be accepted.

### Adding a step type
1. Add the type literal to `StepType` in `src/types/unit.ts`.
2. Add a discriminated-union interface for the step in the same file.
3. Create `src/components/steps/NewTypeStep.tsx`.
4. Add a `case 'newtype':` branch in `src/components/steps/StepRenderer.tsx`. The `default` branch has a TypeScript exhaustiveness check — the build will fail if a case is missing.

### Step layout contract
- `theory` / `examples` / `practice` steps: two-page book spread (`left` = `TheoryContent`, `right` = `ExamplesContent` or `PracticeContent`). Both sides are `Translated<T>` objects with `en` and `ru` keys.
- `quiz` / `summary` steps: centred single-page layout, use a `content: Translated<...>` field instead of `left`/`right`.

### i18n
- **Unit content** (titles, explanations, examples, questions): bilingual inline in the unit file via `Translated<T> = { en: T; ru: T }`.
- **UI strings** (buttons, labels): added to the `UI_STRINGS` map in `src/context/LanguageContext.tsx` and accessed anywhere with `const { t } = useLanguage(); t('key')`.
- The global language state (`lang: 'en' | 'ru'`) lives in `LanguageContext` and defaults to `'ru'`.

### Styling
All styles are in `src/index.css` (no CSS modules or framework). Design tokens are CSS variables at the top of the file. `src/App.css` is intentionally empty. The book-spread layout uses a two-column CSS grid that collapses to single column at `<900px`; the sidebar hides at `<768px`.

### Practice answer validation
`PracticeQuestion` has an optional `altAnswers: string[]` field for alternative acceptable answers. `PracticeStep.tsx` checks user input against both `correctAnswer` and all `altAnswers`. Use this whenever a question has grammatically valid variants (contracted vs full verb forms).

### `explanation` and `points` fields
These fields in `TheoryContent` and `SummaryContent` may contain simple inline HTML (`<b>`, `<em>`) and are rendered with `dangerouslySetInnerHTML`. Keep to those two tags only — no user-supplied content ever reaches these fields.
