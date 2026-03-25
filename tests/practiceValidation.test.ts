import { describe, expect, test } from 'bun:test';
import { isPracticeAnswerCorrect } from '../src/components/steps/practiceValidation';
import type { PracticeQuestion, Unit } from '../src/types/unit';
import unit7 from '../src/data/units/unit7';
import unit9 from '../src/data/units/unit9';
import unit10 from '../src/data/units/unit10';
import unit11 from '../src/data/units/unit11';
import unit12 from '../src/data/units/unit12';
import unit13 from '../src/data/units/unit13';
import unit14 from '../src/data/units/unit14';
import unit15 from '../src/data/units/unit15';

function getPracticeQuestion(unit: Unit, questionId: string): PracticeQuestion {
  for (const step of unit.steps) {
    if (step.type !== 'practice') continue;

    for (const section of step.right.en.sections ?? []) {
      const question = section.questions.find((item) => item.id === questionId);
      if (question) return question;
    }

    const question = step.right.en.questions?.find((item) => item.id === questionId);
    if (question) return question;
  }

  throw new Error(`Practice question not found: ${questionId}`);
}

describe('practice validation', () => {
  test('accepts short-answer variants for unit7 and rejects the wrong subject pattern', () => {
    const question = getPracticeQuestion(unit7, 'u7-ex4-2');

    expect(isPracticeAnswerCorrect(question, ['No, I do not.'])).toBe(true);
    expect(isPracticeAnswerCorrect(question, ['No, you do not.'])).toBe(false);
  });

  test('accepts bounded have and have got variants for unit9 and rejects cue drift', () => {
    const question = getPracticeQuestion(unit9, 'u9-ex3b-9');

    expect(isPracticeAnswerCorrect(question, ["I don't have any brothers or sisters"])).toBe(true);
    expect(isPracticeAnswerCorrect(question, ["I don't have any cousins"])).toBe(false);
  });

  test('keeps location answers bounded in unit10', () => {
    const question = getPracticeQuestion(unit10, 'u10-ex1-6');

    expect(isPracticeAnswerCorrect(question, ['was at home'])).toBe(true);
    expect(isPracticeAnswerCorrect(question, ['was tired'])).toBe(false);
  });

  test('accepts positive past-simple example answers in unit11 and rejects nonsense input', () => {
    const question = getPracticeQuestion(unit11, 'u11-ex5-2');

    expect(isPracticeAnswerCorrect(question, ['got up late'])).toBe(true);
    expect(isPracticeAnswerCorrect(question, ['go home'])).toBe(false);
  });

  test('checks both example-mode and exact answers in unit12', () => {
    const personalAnswer = getPracticeQuestion(unit12, 'u12-ex3-2');
    const cueQuestion = getPracticeQuestion(unit12, 'u12-ex4-8');

    expect(isPracticeAnswerCorrect(personalAnswer, ["didn't get up before 7 o'clock"])).toBe(true);
    expect(isPracticeAnswerCorrect(personalAnswer, ["didn't get up before 8 o'clock"])).toBe(false);
    expect(isPracticeAnswerCorrect(cueQuestion, ['did that happen'])).toBe(true);
    expect(isPracticeAnswerCorrect(cueQuestion, ['did this happen'])).toBe(false);
  });

  test('requires a location plus an in-progress activity in unit13', () => {
    const question = getPracticeQuestion(unit13, 'u13-ex1-6');

    expect(isPracticeAnswerCorrect(question, ['was at home', 'was reading a book'])).toBe(true);
    expect(isPracticeAnswerCorrect(question, ['was tired', 'was reading a book'])).toBe(false);
  });

  test('keeps Unit 14 picture stories exact and accepts bounded negative variants', () => {
    const pictureQuestion = getPracticeQuestion(unit14, 'u14-ex1-3');
    const drivingQuestion = getPracticeQuestion(unit14, 'u14-ex2-5');

    expect(isPracticeAnswerCorrect(
      pictureQuestion,
      ['was walking', 'met', 'was going', 'was carrying', 'stopped'],
    )).toBe(true);
    expect(isPracticeAnswerCorrect(
      pictureQuestion,
      ['walked', 'met', 'was going', 'was carrying', 'stopped'],
    )).toBe(false);

    expect(isPracticeAnswerCorrect(drivingQuestion, ['were you driving', 'came', 'was not driving'])).toBe(true);
    expect(isPracticeAnswerCorrect(drivingQuestion, ['did you drive', 'came', 'was not driving'])).toBe(false);
  });

  test('accepts contracted and full present-perfect answers in Unit 15 and rejects past-simple drift', () => {
    const goneQuestion = getPracticeQuestion(unit15, 'u15-ex2-3');
    const seenQuestion = getPracticeQuestion(unit15, 'u15-ex2-4');
    const negativeQuestion = getPracticeQuestion(unit15, 'u15-ex2-13');

    expect(isPracticeAnswerCorrect(goneQuestion, ["'s gone"])).toBe(true);
    expect(isPracticeAnswerCorrect(goneQuestion, ['has gone'])).toBe(true);
    expect(isPracticeAnswerCorrect(goneQuestion, ['went'])).toBe(false);

    expect(isPracticeAnswerCorrect(seenQuestion, ['Have', 'seen'])).toBe(true);
    expect(isPracticeAnswerCorrect(seenQuestion, ['Did', 'see'])).toBe(false);

    expect(isPracticeAnswerCorrect(negativeQuestion, ["haven't told"])).toBe(true);
    expect(isPracticeAnswerCorrect(negativeQuestion, ['have not told'])).toBe(true);
    expect(isPracticeAnswerCorrect(negativeQuestion, ["didn't tell"])).toBe(false);
  });
});
