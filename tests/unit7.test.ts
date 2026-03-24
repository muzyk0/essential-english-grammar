import { describe, expect, test } from 'bun:test';
import unit7 from '../src/data/units/unit7';

describe('unit7', () => {
  const practiceStep = unit7.steps.find((step) => step.id === 'step7-4-practice');

  test('keeps the source exercise split into four practice sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(4);
    expect(practiceStep.right.ru.sections).toHaveLength(4);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Build questions from statements',
      'Exercise 2 — Put the words in the right order',
      'Exercise 3 — Complete the question frames',
      'Exercise 4 — Write short answers',
    ]);
  });

  test('uses bounded short-answer validation for the final exercise', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const shortAnswerSection = practiceStep.right.en.sections?.[3];
    expect(shortAnswerSection?.questions).toHaveLength(4);

    for (const question of shortAnswerSection?.questions ?? []) {
      expect(question.answerMode).toBe('example');
      expect(question.acceptedPatterns?.length).toBeGreaterThan(0);
      expect(question.altAnswers?.length).toBeGreaterThan(0);
    }
  });

  test('keeps the job meaning of "What does she do?" explicit in the quiz', () => {
    const quizStep = unit7.steps.find((step) => step.id === 'step7-5-quiz');
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');

    if (!quizStep || quizStep.type !== 'quiz') return;

    const question = quizStep.content.en.questions.find((item) => item.id === 'q7-4');
    expect(question?.correctIndex).toBe(0);
    expect(question?.options[0]).toBe('What does she do?');
    expect(question?.explanation).toContain('job');
  });
});
