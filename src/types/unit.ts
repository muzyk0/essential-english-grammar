// Core language type — all bilingual content uses this
export type Language = 'en' | 'ru';

// Wrapper for any content that has both language versions
export type Translated<T> = { en: T; ru: T };

// All possible step types — add new types here to extend the system
export type StepType = 'theory' | 'examples' | 'practice' | 'quiz' | 'summary';

// ─── Content shape interfaces ─────────────────────────────────────────────────

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface TheoryContent {
  title: string;
  explanation: string;     // May contain simple HTML like <b>, <em>
  table?: TableData;
  notes?: string[];        // Callout tips shown below the main content
}

export interface ExampleItem {
  english: string;
  russian?: string;
  note?: string;
  highlight?: string;      // Part of the sentence to highlight
}

export interface ExamplesContent {
  title: string;
  intro?: string;
  items: ExampleItem[];
}

export interface PracticeQuestion {
  id: string;
  type: 'fill-blank' | 'multiple-choice';
  prompt: string;          // Use ___ for blanks, e.g. "She ___ a teacher."
  translation?: string;    // Optional Russian translation shown on demand
  options?: string[];      // Only for multiple-choice
  correctAnswer: string;   // Exact correct answer text
  altAnswers?: string[];   // Alternative acceptable answers (e.g. full form when short form is preferred)
  explanation?: string;    // Shown after answering
}

export interface PracticeContent {
  title: string;
  instructions: string;
  questions: PracticeQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface QuizContent {
  title: string;
  description?: string;
  questions: QuizQuestion[];
}

export interface SummaryContent {
  title: string;
  points: string[];
  nextUnit?: string;
}

// ─── Step interfaces (discriminated union) ───────────────────────────────────
// Each step occupies the full "book spread" (left + right page).
// Theory/Examples/Practice: left page = explanation, right page = content.
// Quiz/Summary: centered layout (content field used instead).

export interface TheoryStep {
  id: string;
  type: 'theory';
  left: Translated<TheoryContent>;
  right: Translated<ExamplesContent>;
}

export interface ExamplesStep {
  id: string;
  type: 'examples';
  left: Translated<TheoryContent>;
  right: Translated<ExamplesContent>;
}

export interface PracticeStep {
  id: string;
  type: 'practice';
  left: Translated<TheoryContent>;   // Reference theory kept visible on left
  right: Translated<PracticeContent>;
}

export interface QuizStep {
  id: string;
  type: 'quiz';
  content: Translated<QuizContent>;
}

export interface SummaryStep {
  id: string;
  type: 'summary';
  content: Translated<SummaryContent>;
}

// Union of all step types — StepRenderer switches on `step.type`
export type Step = TheoryStep | ExamplesStep | PracticeStep | QuizStep | SummaryStep;

// ─── Unit ────────────────────────────────────────────────────────────────────

export interface Unit {
  id: string;
  number: number;
  title: Translated<string>;
  description: Translated<string>;
  steps: Step[];
}
