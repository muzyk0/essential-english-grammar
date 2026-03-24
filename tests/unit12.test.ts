import { describe, expect, test } from 'bun:test';
import unit12 from '../src/data/units/unit12';

describe('unit12', () => {
  const practiceStep = unit12.steps.find((step) => step.id === 'step-4-practice');
  const quizStep = unit12.steps.find((step) => step.id === 'step-5-quiz');

  test('keeps the source practice split into five sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(5);
    expect(practiceStep.right.ru.sections).toHaveLength(5);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 - Complete with the negative form',
      'Exercise 2 - Write questions with Did you ... ?',
      'Exercise 3 - Write a true positive or negative sentence',
      "Exercise 4 - Write B's questions",
      'Exercise 5 - Choose the correct past form',
    ]);
  });

  test('keeps bounded personal answers and cue-based questions aligned with the source', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const personalSection = practiceStep.right.en.sections?.[2];
    const questionSection = practiceStep.right.en.sections?.[3];

    const getUp = personalSection?.questions.find((question) => question.id === 'u12-ex3-2');
    expect(getUp?.altAnswers).toEqual(expect.arrayContaining([
      "didn't get up before 7 o'clock",
      "did not get up before 7 o'clock",
    ]));
    expect(getUp?.acceptedPatterns?.length).toBe(2);

    expect(questionSection?.wordBank).toContain('go to bed late');

    const happen = questionSection?.questions.find((question) => question.id === 'u12-ex4-8');
    expect(happen?.correctAnswer).toBe('did it happen');
    expect(happen?.altAnswers).toContain('did that happen');
  });

  test('keeps the quiz focused on base-form behavior after did and did not', () => {
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');

    if (!quizStep || quizStep.type !== 'quiz') return;

    const shortAnswerQuestion = quizStep.content.en.questions.find((question) => question.id === 'q12-3');
    expect(shortAnswerQuestion?.correctIndex).toBe(1);
    expect(shortAnswerQuestion?.explanation).toContain("did/didn't");

    const negativeQuestion = quizStep.content.en.questions.find((question) => question.id === 'q12-5');
    expect(negativeQuestion?.options[0]).toBe("He didn't have time.");
  });
});
