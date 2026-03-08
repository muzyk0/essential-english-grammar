# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

### `explanation` and `points` fields
These fields in `TheoryContent` and `SummaryContent` may contain simple inline HTML (`<b>`, `<em>`) and are rendered with `dangerouslySetInnerHTML`. Keep to those two tags only — no user-supplied content ever reaches these fields.
