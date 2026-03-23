import { Fragment, useRef, useState } from 'react';
import type { KeyboardEvent, MutableRefObject } from 'react';
import type {
  PracticeContent,
  PracticeQuestion,
  PracticeSection,
  PracticeStep as PracticeStepType,
  Language,
} from '../../types/unit';
import { useLanguage } from '../../context/LanguageContext';
import TheoryPanel from './TheoryPanel';

type Props = {
  step: PracticeStepType;
  lang: Language;
};

type AnswerState = {
  values: string[];
  checked: boolean;
  correct: boolean | null;
  answerRevealed: boolean;
  translationVisible: boolean;
};

type BlankSpec = {
  correctAnswer: string;
  altAnswers?: string[];
  acceptedPatterns?: string[];
};

export default function PracticeStep({ step, lang }: Props) {
  const { t } = useLanguage();
  const right = step.right[lang];
  const sections = normalizePracticeSections(right);
  const allQuestions = sections.flatMap((section) => section.questions);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const [answers, setAnswers] = useState<Record<string, AnswerState>>(
    Object.fromEntries(allQuestions.map((q) => [q.id, createAnswerState(getBlankCount(q.prompt))]))
  );

  const handleInput = (id: string, blankIndex: number, value: string) => {
    setAnswers((prev) => {
      const prevState = prev[id] ?? createAnswerState(blankIndex + 1);
      const values = [...prevState.values];
      while (values.length <= blankIndex) values.push('');
      values[blankIndex] = value;

      return {
        ...prev,
        [id]: createAnswerState(Math.max(values.length, 1), values),
      };
    });
  };

  const handleCheck = (q: PracticeQuestion, options?: { focusNextOnSuccess?: boolean }) => {
    const state = answers[q.id] ?? createAnswerState(getBlankCount(q.prompt));
    const nextState = createCheckedState(q, state);

    setAnswers((prev) => ({
      ...prev,
      [q.id]: nextState,
    }));

    if (options?.focusNextOnSuccess && nextState.correct) {
      focusNextQuestion(q.id);
    }
  };

  const handleCheckAll = () => {
    const readyQuestions = allQuestions.filter((q) => {
      const state = answers[q.id] ?? createAnswerState(getBlankCount(q.prompt));
      return !state.checked && hasAllBlankValues(state, q);
    });

    if (readyQuestions.length === 0) return;

    setAnswers((prev) => {
      const next = { ...prev };
      for (const question of readyQuestions) {
        const state = next[question.id] ?? createAnswerState(getBlankCount(question.prompt));
        next[question.id] = createCheckedState(question, state);
      }
      return next;
    });

    const nextUnreadyQuestion = allQuestions.find((q) => {
      if (readyQuestions.some((ready) => ready.id === q.id)) return false;
      const state = answers[q.id] ?? createAnswerState(getBlankCount(q.prompt));
      return !state.checked;
    });

    if (nextUnreadyQuestion) {
      focusQuestionInput(nextUnreadyQuestion.id, 0);
    }
  };

  const handleRevealAnswer = (q: PracticeQuestion) => {
    setAnswers((prev) => ({
      ...prev,
      [q.id]: { ...(prev[q.id] ?? createAnswerState(getBlankCount(q.prompt))), answerRevealed: true },
    }));
  };

  const handleRevealTranslation = (q: PracticeQuestion) => {
    setAnswers((prev) => ({
      ...prev,
      [q.id]: { ...(prev[q.id] ?? createAnswerState(getBlankCount(q.prompt))), translationVisible: true },
    }));
  };

  const handleReset = (q: PracticeQuestion) => {
    setAnswers((prev) => ({
      ...prev,
      [q.id]: createAnswerState(getBlankCount(q.prompt)),
    }));

    focusQuestionInput(q.id, 0);
  };

  const handleBlankKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
    question: PracticeQuestion,
    blankIndex: number
  ) => {
    if (event.key !== 'Enter') return;

    event.preventDefault();

    if (event.metaKey || event.ctrlKey) {
      handleCheckAll();
      return;
    }

    const state = answers[question.id] ?? createAnswerState(getBlankCount(question.prompt));
    if (hasAllBlankValues(state, question)) {
      handleCheck(question, { focusNextOnSuccess: true });
      return;
    }

    const blankCount = getBlankCount(question.prompt);
    if (blankIndex < blankCount - 1) {
      focusQuestionInput(question.id, blankIndex + 1);
      return;
    }

    const firstEmptyIndex = state.values.findIndex((value) => !value.trim());
    if (firstEmptyIndex >= 0) {
      focusQuestionInput(question.id, firstEmptyIndex);
    }
  };

  const readyQuestionCount = allQuestions.filter((q) => {
    const state = answers[q.id] ?? createAnswerState(getBlankCount(q.prompt));
    return !state.checked && hasAllBlankValues(state, q);
  }).length;

  const focusQuestionInput = (questionId: string, blankIndex: number) => {
    requestAnimationFrame(() => {
      const input = inputRefs.current[getInputRefKey(questionId, blankIndex)];
      input?.focus();
      input?.select();
    });
  };

  const focusNextQuestion = (currentQuestionId: string) => {
    const currentIndex = allQuestions.findIndex((q) => q.id === currentQuestionId);
    if (currentIndex < 0) return;

    for (let index = currentIndex + 1; index < allQuestions.length; index += 1) {
      const question = allQuestions[index];
      const state = answers[question.id] ?? createAnswerState(getBlankCount(question.prompt));
      if (state.checked) continue;
      focusQuestionInput(question.id, 0);
      return;
    }
  };

  let questionCounter = 0;

  return (
    <div className="book-spread">
      <TheoryPanel content={step.left[lang]} />

      <div className="book-page book-page--right">
        <div className="page-label">B</div>
        <h2 className="page-title">{right.title}</h2>
        {right.instructions && <p className="page-intro">{right.instructions}</p>}

        <div className="practice-toolbar">
          <button
            className="btn btn--secondary btn--practice-bulk"
            onClick={handleCheckAll}
            disabled={readyQuestionCount === 0}
          >
            {t('btn.checkAll')}
          </button>
          <span className="practice-toolbar-hint">{t('practice.keyboardHint')}</span>
        </div>

        <div className="practice-sections">
          {sections.map((section) => {
            const startIndex = questionCounter;
            questionCounter += section.questions.length;

            return (
              <section key={section.id} className="practice-section">
                {section.title && <h3 className="practice-section-title">{section.title}</h3>}
                {section.instructions && <p className="practice-section-intro">{section.instructions}</p>}

                {section.wordBank && section.wordBank.length > 0 && (
                  <div className="practice-word-bank">
                    {section.wordBank.map((word) => (
                      <span key={word} className="practice-word-chip">{word}</span>
                    ))}
                  </div>
                )}

                {section.examples && section.examples.length > 0 && (
                  <div className="practice-example-list">
                    {section.examples.map((example, index) => (
                      <div key={`${section.id}-example-${index}`} className="practice-example-card">
                        {example.cue && <div className="practice-cue practice-cue--example">{example.cue}</div>}
                        <div className="practice-example-answer">{example.answer}</div>
                        {example.note && <div className="practice-example-note">{example.note}</div>}
                      </div>
                    ))}
                  </div>
                )}

                <ol className="practice-list">
                  {section.questions.map((q, index) => {
                    const state = answers[q.id] ?? createAnswerState(getBlankCount(q.prompt));
                    const answerMode = getAnswerMode(q);
                    const canShowTranslation = Boolean(q.translation)
                      && (answerMode === 'example' ? state.checked || state.answerRevealed : state.correct || state.answerRevealed);
                    const questionLabel = q.displayNumber ?? String(startIndex + index + 1);

                    return (
                      <li key={q.id} className="practice-item">
                        <div className="practice-item-shell">
                          <span className="practice-number">{questionLabel}</span>

                          <div className="practice-item-body">
                            {q.visual && (
                              <div className="practice-visual-card">
                                <div className="practice-visual-emoji" aria-hidden="true">{q.visual.emoji}</div>
                                {q.visual.title && <div className="practice-visual-title">{q.visual.title}</div>}
                                {q.visual.description && <div className="practice-visual-desc">{q.visual.description}</div>}
                              </div>
                            )}

                            {q.cue && <div className="practice-cue">{q.cue}</div>}

                            <div className="practice-prompt">
                              {renderPromptWithBlanks(q, state, handleInput, handleBlankKeyDown, inputRefs)}
                            </div>

                            {!state.checked ? (
                              <button
                                className="btn btn--check"
                                onClick={() => handleCheck(q)}
                                disabled={!hasAllBlankValues(state, q)}
                              >
                                {t('btn.check')}
                              </button>
                            ) : (
                              <>
                                <div className="practice-feedback">
                                  <span className={answerMode === 'example' || state.correct ? 'feedback--correct' : 'feedback--incorrect'}>
                                    {answerMode === 'example'
                                      ? state.correct
                                        ? t('practice.recorded')
                                        : t('practice.incorrect')
                                      : state.correct
                                        ? t('practice.correct')
                                        : t('practice.incorrect')}
                                  </span>

                                  {((answerMode === 'example' && state.answerRevealed) || (!state.correct && state.answerRevealed)) && (
                                    <span className="feedback-answer">→ {getAcceptedAnswerDisplay(q)}</span>
                                  )}

                                  {q.explanation && ((answerMode === 'example' && (state.correct || state.answerRevealed)) || state.correct || state.answerRevealed) && (
                                    <span className="feedback-explanation">{q.explanation}</span>
                                  )}
                                </div>

                                <div className="practice-actions">
                                  {((answerMode === 'example' && !state.correct && !state.answerRevealed)
                                    || (answerMode === 'exact' && !state.correct && !state.answerRevealed)) && (
                                    <button
                                      className="btn btn--secondary btn--practice-action"
                                      onClick={() => handleRevealAnswer(q)}
                                    >
                                      {answerMode === 'example' ? t('btn.showExample') : t('btn.showAnswer')}
                                    </button>
                                  )}

                                  {canShowTranslation && !state.translationVisible && (
                                    <button
                                      className="btn btn--secondary btn--practice-action"
                                      onClick={() => handleRevealTranslation(q)}
                                    >
                                      {t('btn.showTranslation')}
                                    </button>
                                  )}

                                  <button className="btn btn--reset" onClick={() => handleReset(q)}>
                                    {t('btn.tryAgain')}
                                  </button>
                                </div>

                                {state.translationVisible && q.translation && (
                                  <div className="practice-translation">{q.translation}</div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function createAnswerState(blankCount: number, values?: string[]): AnswerState {
  const filledValues = values
    ? [...values, ...Array(Math.max(blankCount - values.length, 0)).fill('')]
    : Array.from({ length: blankCount }, () => '');

  return {
    values: filledValues,
    checked: false,
    correct: null,
    answerRevealed: false,
    translationVisible: false,
  };
}

function normalizePracticeSections(content: PracticeContent): PracticeSection[] {
  if (content.sections?.length) return content.sections;

  return [{
    id: 'default-section',
    questions: content.questions ?? [],
  }];
}

function renderPromptWithBlanks(
  question: PracticeQuestion,
  state: AnswerState,
  onInput: (id: string, blankIndex: number, value: string) => void,
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>, question: PracticeQuestion, blankIndex: number) => void,
  inputRefs: MutableRefObject<Record<string, HTMLInputElement | null>>
) {
  const { prompt, id } = question;
  const parts = prompt.split('___');
  if (parts.length === 1) return <span>{prompt}</span>;
  const specs = getBlankSpecs(question);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${id}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <input
              type="text"
              className={`blank-input ${
                state.checked
                  ? state.correct
                    ? 'blank-input--correct'
                    : 'blank-input--incorrect'
                  : ''
              }`}
              value={state.values[index] ?? ''}
              onChange={(e) => onInput(id, index, e.target.value)}
              onKeyDown={(event) => onKeyDown(event, question, index)}
              disabled={state.checked && state.correct !== false}
              aria-label={`fill in the blank ${index + 1}`}
              ref={(node) => {
                inputRefs.current[getInputRefKey(id, index)] = node;
              }}
              style={getBlankInputStyle(specs[index]?.correctAnswer ?? '')}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}

function getBlankCount(prompt: string) {
  return Math.max(prompt.split('___').length - 1, 1);
}

function getBlankSpecs(question: PracticeQuestion): BlankSpec[] {
  const blankCount = getBlankCount(question.prompt);

  if (question.blankAnswers?.length === blankCount) {
    return question.blankAnswers;
  }

  if (blankCount === 1) {
    return [{
      correctAnswer: question.correctAnswer,
      altAnswers: question.altAnswers,
      acceptedPatterns: question.acceptedPatterns,
    }];
  }

  const separator = question.correctAnswer.includes(' ... ')
    ? ' ... '
    : question.correctAnswer.includes(' / ')
      ? ' / '
      : null;

  if (separator) {
    const parts = question.correctAnswer.split(separator).map((part) => part.trim());
    if (parts.length === blankCount) {
      return parts.map((part) => ({ correctAnswer: part }));
    }
  }

  return [
    { correctAnswer: question.correctAnswer, altAnswers: question.altAnswers },
    ...Array.from({ length: blankCount - 1 }, () => ({ correctAnswer: '' })),
  ];
}

function getAnswerMode(question: PracticeQuestion) {
  return question.answerMode ?? 'exact';
}

function hasAllBlankValues(state: AnswerState, question: PracticeQuestion) {
  return getBlankSpecs(question).every((_, index) => Boolean(state.values[index]?.trim()));
}

function getAcceptedAnswerDisplay(question: PracticeQuestion) {
  return getBlankSpecs(question)
    .map((spec) => formatAcceptedAnswers([spec.correctAnswer, ...(spec.altAnswers ?? [])]))
    .join(' ... ');
}

function createCheckedState(question: PracticeQuestion, state: AnswerState): AnswerState {
  const answerMode = getAnswerMode(question);
  const specs = getBlankSpecs(question);

  const correct = answerMode === 'example'
    ? specs.every((spec, index) => {
        const userAnswer = state.values[index]?.trim() ?? '';
        return matchesExampleAnswer(userAnswer, spec);
      })
    : specs.every((spec, index) => {
        const userAnswer = normalizeAnswer(state.values[index] ?? '');
        const allValid = [spec.correctAnswer, ...(spec.altAnswers ?? [])].map(normalizeAnswer);
        return allValid.includes(userAnswer);
      });

  return {
    ...state,
    checked: true,
    correct,
    answerRevealed: false,
    translationVisible: false,
  };
}

function matchesExampleAnswer(userAnswer: string, spec: BlankSpec) {
  const trimmed = userAnswer.trim();
  if (!trimmed) return false;

  if (!spec.acceptedPatterns?.length) return true;

  return spec.acceptedPatterns.some((pattern) => {
    try {
      return new RegExp(pattern, 'i').test(trimmed);
    } catch {
      return false;
    }
  });
}

function formatAcceptedAnswers(answers: string[]) {
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const answer of answers.map((value) => value.trim()).filter(Boolean)) {
    const normalized = normalizeAnswer(answer);
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    unique.push(answer);
  }

  return unique.join(' / ');
}

function normalizeAnswer(value: string) {
  return value.trim().toLowerCase();
}

function getBlankInputStyle(correctAnswer: string) {
  const width = `${Math.max(6, Math.min(correctAnswer.length + 2, 28))}ch`;
  return { width, maxWidth: '100%' };
}

function getInputRefKey(questionId: string, blankIndex: number) {
  return `${questionId}:${blankIndex}`;
}
