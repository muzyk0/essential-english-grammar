# Essential English Grammar

Interactive grammar-learning app based on *Essential Grammar in Use* by Raymond Murphy.

The app is a bilingual (`en` / `ru`) learning companion. It should stay faithful to the book's grammar scope and exercise logic without turning into a page-by-page digital copy.

## Commands

```bash
bun dev
bun run build
bun run lint
bun run preview
bun run unit:next
bun run review-pack:next
```

`bun run build` is the main correctness check. There is no separate test suite.

## Content Structure

- Book units live in `src/data/units/`
- Multi-unit review packs live in `src/data/review-packs/`
- Shared content types live in `src/types/unit.ts`
- Step rendering lives in `src/components/steps/`
- Editorial references live under `references/`

## Editorial Rules

- Rewrite theory in original words, but keep the grammar meaning accurate to the book.
- Keep practice and quiz content original, but preserve the source task mode as closely as possible.
- If the book separates fixed-answer work, personal example answers, picture prompts, word-bank tasks, or `positive / negative` truth tasks, keep those modes separate in the app too.
- If the current UI cannot represent a source task honestly, change the data model or interface first instead of weakening the content.
- Validation should match the real openness of the source task:
  - fixed-answer tasks -> exact answer
  - bounded variants -> `altAnswers`
  - personal/example-answer tasks with a fixed frame -> `answerMode: 'example'` plus `acceptedPatterns`
  - truly open tasks -> only then allow open validation
- Never reuse the book's artwork, images, audio, or fixed-layout page design in shipped content.

## Source of Truth

- Primary source: `references/EPUB/OEBPS/html/`
- Catalog/index layer: `references/catalog/`

Use the catalog to find the correct EPUB pages, then inspect the real HTML when accuracy matters. Hidden answer/example blocks inside the EPUB are part of the editorial source and should be checked during content work.
