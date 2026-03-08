Add a new unit to the Essential Grammar in Use interactive app.

## Your task

Create a full unit for **Unit $ARGUMENTS** of "Essential Grammar in Use" by Raymond Murphy.

Follow these steps exactly:

### 1. Read context files first

Read these files before writing anything:
- `CLAUDE.md` — project rules and architecture
- `src/types/unit.ts` — all TypeScript types you must conform to
- `src/data/units/unit1.ts` — reference implementation (structure and content depth to match)
- `src/data/units/index.ts` — where you will register the new unit

### 2. Determine the unit topic

Look up what **Unit $ARGUMENTS** covers in "Essential Grammar in Use" (Murphy). Use your knowledge of the book. Common units:
- Unit 3: I am doing (present continuous — positive)
- Unit 4: are you doing? (present continuous — questions/negative)
- Unit 5: I do/work/like (present simple — positive)
- Unit 6: I don't... (present simple — negative)
- Unit 7: Do you...? (present simple — questions)
- Unit 8: I am doing vs I do
- Unit 9: I have / I've got
- Unit 10: was/were
- Unit 11: worked/got/went (past simple — positive)
- Unit 12: I didn't... Did you...? (past simple — negative/questions)
- Unit 13: I was doing (past continuous)
- Unit 14: I was doing vs I did

If the unit number is outside your knowledge, state what you believe the topic is and proceed with that.

### 3. Write the unit file

Create `src/data/units/unit$ARGUMENTS.ts` with **exactly this structure**:

```typescript
import type { Unit } from '../../types/unit';

const unitN: Unit = {
  id: 'unitN',
  number: N,
  title: { en: '...', ru: '...' },
  description: { en: '...', ru: '...' },
  steps: [ /* 6 steps — see below */ ],
};

export default unitN;
```

**Required 6 steps in order:**

| # | type | left page | right page |
|---|------|-----------|------------|
| 1 | `theory` | Main grammar rule + conjugation/form table | 7–9 positive examples with `highlight` and `russian` |
| 2 | `examples` | Secondary rule or contrast (e.g. negative/question) + table | 7–9 examples for that rule |
| 3 | `theory` | Third aspect (e.g. wh-questions, contractions, usage) + table | Examples for that aspect |
| 4 | `practice` | Quick-reference table (copy key rows from steps 1–3) | 6 fill-blank questions, each with `explanation` |
| 5 | `quiz` | — | 5 multiple-choice questions, each with `explanation` |
| 6 | `summary` | — | 6 bullet points (key rules), `nextUnit` pointing to the next unit |

**Rules for content quality:**
- Every step must have both `en` and `ru` versions for ALL fields (title, explanation, table headers/rows, notes, items, questions, options, explanations, points).
- `explanation` fields in `TheoryContent` may use `<b>` and `<em>` HTML tags — nothing else.
- `points` in `SummaryContent` may use `<b>` tags.
- `highlight` in `ExampleItem` must be a substring that literally appears in the `english` string.
- Practice `correctAnswer` must exactly match what a user would type (including contractions like `'m`, `'re`).
- Quiz `correctIndex` is 0-based.
- Each question `id` must be unique within the unit (e.g. `p3-1`, `q3-1`).

### 4. Register the unit

Edit `src/data/units/index.ts`:
- Add `import unitN from './unitN';` with the other imports
- Add `unitN` to the array in the correct numeric position

### 5. Build check

Run `bun run build` and fix any TypeScript errors before finishing.

### 6. Report

After a successful build, summarise:
- Unit number and topic
- How many steps were created
- Any grammar points where you were uncertain about the Murphy book content
