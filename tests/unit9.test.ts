import { describe, expect, test } from 'bun:test';
import unit9 from '../src/data/units/unit9';

describe('unit9', () => {
  const practiceStep = unit9.steps.find((step) => step.id === 'step-4-practice');
  const quizStep = unit9.steps.find((step) => step.id === 'step-5-quiz');

  test('keeps the source practice split into six bounded sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(6);
    expect(practiceStep.right.ru.sections).toHaveLength(6);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Rewrite with got',
      "Exercise 2 — Rewrite with do / does / don't / doesn't",
      'Exercise 3A — Read the answers and write about Leo',
      'Exercise 3B — What about you?',
      "Exercise 4 — Complete with have / has / don't have / doesn't have",
      "Exercise 5 — Complete with have got / hasn't got",
    ]);
  });

  test('keeps equivalent have and have got variants available where the source allows them', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const rewriteWithGot = practiceStep.right.en.sections?.[0];
    const leoProfile = practiceStep.right.en.sections?.[2];
    const gotCompletion = practiceStep.right.en.sections?.[5];

    const lena = rewriteWithGot?.questions.find((question) => question.id === 'u9-ex1-2');
    expect(lena?.correctAnswer).toBe("Lena's got a new laptop");
    expect(lena?.altAnswers).toContain('Lena has got a new laptop');

    const leoDog = leoProfile?.questions.find((question) => question.id === 'u9-ex3a-3');
    expect(leoDog?.altAnswers).toEqual(expect.arrayContaining([
      'He has not got a dog',
      "He doesn't have a dog",
      'He does not have a dog',
    ]));

    const mia = gotCompletion?.questions.find((question) => question.id === 'u9-ex5-2');
    expect(mia?.correctAnswer).toBe('has got a lot of friends');
    expect(mia?.altAnswers).toContain("'s got a lot of friends");
  });

  test('uses bounded example-mode validation for the personal possession prompts', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const aboutYou = practiceStep.right.en.sections?.[3];
    expect(aboutYou?.questions).toHaveLength(3);

    for (const question of aboutYou?.questions ?? []) {
      expect(question.answerMode).toBe('example');
      expect(question.acceptedPatterns?.length).toBeGreaterThan(0);
    }

    const siblings = aboutYou?.questions.find((question) => question.id === 'u9-ex3b-9');
    expect(siblings?.acceptedPatterns?.some((pattern) => pattern.includes('brothers\\s+or\\s+sisters'))).toBe(true);
    expect(siblings?.altAnswers).toEqual(expect.arrayContaining([
      "I haven't got any brothers or sisters",
      "I don't have any brothers or sisters",
    ]));
  });

  test('replaces the ambiguous quiz distractor with an unambiguously wrong have sentence', () => {
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');

    if (!quizStep || quizStep.type !== 'quiz') return;

    const finalQuestion = quizStep.content.en.questions.find((question) => question.id === 'q9-5');
    expect(finalQuestion?.options).toEqual([
      "I don't got a car.",
      "I don't have a car.",
      "I doesn't have a car.",
    ]);
    expect(finalQuestion?.options).not.toContain("I haven't a car.");
  });

  test('keeps both short-answer families explicit in the summary', () => {
    const summaryStep = unit9.steps.find((step) => step.id === 'step-6-summary');
    expect(summaryStep).toBeDefined();
    expect(summaryStep?.type).toBe('summary');

    if (!summaryStep || summaryStep.type !== 'summary') return;

    const shortAnswers = summaryStep.content.en.points[5] ?? '';
    expect(shortAnswers).toContain('Yes, I do.');
    expect(shortAnswers).toContain("No, I don't.");
    expect(shortAnswers).toContain('Yes, I have.');
    expect(shortAnswers).toContain("No, I haven't.");
  });
});
