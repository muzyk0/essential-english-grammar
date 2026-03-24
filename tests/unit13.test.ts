import { describe, expect, test } from 'bun:test';
import unit13 from '../src/data/units/unit13';

describe('unit13', () => {
  const formsStep = unit13.steps.find((step) => step.id === 'step-2-usage');
  const contrastStep = unit13.steps.find((step) => step.id === 'step-3-negative-questions');
  const practiceStep = unit13.steps.find((step) => step.id === 'step-4-practice');
  const quizStep = unit13.steps.find((step) => step.id === 'step-5-quiz');

  test('keeps the source practice split into four sections in both languages', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    expect(practiceStep.right.en.sections).toHaveLength(4);
    expect(practiceStep.right.ru.sections).toHaveLength(4);
    expect(practiceStep.right.en.sections?.map((section) => section.title)).toEqual([
      'Exercise 1 — Write where they were and what they were doing',
      "Exercise 2 — Sarah's morning timeline",
      'Exercise 3 — Complete the questions',
      'Exercise 4 — Positive or negative picture sentences',
    ]);
  });

  test('models the paired picture answers with two blanks and a bounded about-you item', () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const pictureSection = practiceStep.right.en.sections?.[0];
    expect(pictureSection?.questions).toHaveLength(5);

    const jackAndKate = pictureSection?.questions.find((question) => question.id === 'u13-ex1-2');
    expect(jackAndKate?.blankAnswers?.map((blank) => blank.correctAnswer)).toEqual([
      'were at the cinema',
      'were watching a film',
    ]);

    const aboutYou = pictureSection?.questions.find((question) => question.id === 'u13-ex1-6');
    expect(aboutYou?.answerMode).toBe('example');
    expect(aboutYou?.prompt).toBe('I ___ . I ___ .');
    expect(aboutYou?.blankAnswers?.[0].acceptedPatterns).toEqual(['^was\\s+.+$']);
    expect(aboutYou?.blankAnswers?.[1].acceptedPatterns).toEqual(['^was\\s+.+ing(?:\\s+.+)?$']);
  });

  test("keeps Sarah's timeline answers and wh-question completion aligned with the source cues", () => {
    expect(practiceStep).toBeDefined();
    expect(practiceStep?.type).toBe('practice');

    if (!practiceStep || practiceStep.type !== 'practice') return;

    const timelineSection = practiceStep.right.en.sections?.[1];
    const questionSection = practiceStep.right.en.sections?.[2];

    const reading = timelineSection?.questions.find((question) => question.id === 'u13-ex2-3');
    expect(reading?.altAnswers).toEqual(expect.arrayContaining([
      'was reading a newspaper',
      'was reading the paper',
    ]));

    const cooking = timelineSection?.questions.find((question) => question.id === 'u13-ex2-4');
    expect(cooking?.altAnswers).toContain('was cooking');

    const sue = questionSection?.questions.find((question) => question.id === 'u13-ex3-4');
    expect(sue?.cue).toBe('(Sue/drive)');
    expect(sue?.correctAnswer).toBe('Why was Sue driving');

    const rain = questionSection?.questions.find((question) => question.id === 'u13-ex3-3');
    expect(rain?.prompt).toBe('___ when you got up?');
    expect(rain?.correctAnswer).toBe('Was it raining');
  });

  test('replaces the old when/while lesson with a present-vs-past contrast and quiz check', () => {
    expect(formsStep).toBeDefined();
    expect(formsStep?.type).toBe('examples');
    expect(contrastStep).toBeDefined();
    expect(contrastStep?.type).toBe('theory');
    expect(quizStep).toBeDefined();
    expect(quizStep?.type).toBe('quiz');

    if (
      !formsStep
      || formsStep.type !== 'examples'
      || !contrastStep
      || contrastStep.type !== 'theory'
      || !quizStep
      || quizStep.type !== 'quiz'
    ) return;

    expect(formsStep.left.en.title).toBe('Forms: positive, negative, and questions');
    expect(formsStep.right.en.title).not.toContain('when / while');
    expect(contrastStep.left.en.title).toBe('From present continuous to past continuous');
    expect(contrastStep.left.en.notes?.[0]).toContain('Use am / is / are + -ing');

    const finalQuestion = quizStep.content.en.questions.find((question) => question.id === 'q13-5');
    expect(finalQuestion?.options).toEqual([
      'I am working now. / I was working at 10.30 last night.',
      'I was working now. / I am working at 10.30 last night.',
      'I am working now. / I were working at 10.30 last night.',
    ]);
    expect(finalQuestion?.correctIndex).toBe(0);
  });
});
