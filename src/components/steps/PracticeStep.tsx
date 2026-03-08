import { useState } from 'react';
import type { PracticeStep as PracticeStepType, Language } from '../../types/unit';
import { useLanguage } from '../../context/LanguageContext';

type Props = {
  step: PracticeStepType;
  lang: Language;
};

type AnswerState = {
  value: string;
  checked: boolean;
  correct: boolean | null;
};

export default function PracticeStep({ step, lang }: Props) {
  const { t } = useLanguage();
  const left = step.left[lang];
  const right = step.right[lang];

  const [answers, setAnswers] = useState<Record<string, AnswerState>>(
    Object.fromEntries(
      right.questions.map((q) => [q.id, { value: '', checked: false, correct: null }])
    )
  );

  const handleInput = (id: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: { value, checked: false, correct: null },
    }));
  };

  const handleCheck = (id: string, correctAnswer: string) => {
    const userAnswer = answers[id].value.trim().toLowerCase();
    const correct = userAnswer === correctAnswer.toLowerCase();
    setAnswers((prev) => ({
      ...prev,
      [id]: { ...prev[id], checked: true, correct },
    }));
  };

  const handleReset = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: { value: '', checked: false, correct: null },
    }));
  };

  return (
    <div className="book-spread">
      {/* Left page — reference theory */}
      <div className="book-page book-page--left">
        <div className="page-label">A</div>
        <h2 className="page-title">{left.title}</h2>
        <p
          className="page-explanation"
          dangerouslySetInnerHTML={{ __html: left.explanation }}
        />
        {left.table && (
          <div className="grammar-table-wrapper">
            <table className="grammar-table">
              <thead>
                <tr>
                  {left.table.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {left.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {left.notes && (
          <div className="notes-box">
            {left.notes.map((note, i) => (
              <p key={i} className="note-item">💡 {note}</p>
            ))}
          </div>
        )}
      </div>

      {/* Right page — exercises */}
      <div className="book-page book-page--right">
        <div className="page-label">B</div>
        <h2 className="page-title">{right.title}</h2>
        <p className="page-intro">{right.instructions}</p>

        <ol className="practice-list">
          {right.questions.map((q) => {
            const state = answers[q.id];
            return (
              <li key={q.id} className="practice-item">
                <div className="practice-prompt">
                  {renderPromptWithBlank(q.prompt, state, q.id, handleInput)}
                </div>

                {!state.checked ? (
                  <button
                    className="btn btn--check"
                    onClick={() => handleCheck(q.id, q.correctAnswer)}
                    disabled={!state.value.trim()}
                  >
                    {t('btn.check')}
                  </button>
                ) : (
                  <div className="practice-feedback">
                    <span className={state.correct ? 'feedback--correct' : 'feedback--incorrect'}>
                      {state.correct ? t('practice.correct') : t('practice.incorrect')}
                    </span>
                    {!state.correct && (
                      <span className="feedback-answer">
                        → {q.correctAnswer}
                      </span>
                    )}
                    {q.explanation && state.checked && (
                      <span className="feedback-explanation">{q.explanation}</span>
                    )}
                    <button className="btn btn--reset" onClick={() => handleReset(q.id)}>
                      {t('btn.tryAgain')}
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function renderPromptWithBlank(
  prompt: string,
  state: AnswerState,
  id: string,
  onInput: (id: string, value: string) => void
) {
  const parts = prompt.split('___');
  if (parts.length === 1) return <span>{prompt}</span>;

  return (
    <>
      {parts[0]}
      <input
        type="text"
        className={`blank-input ${
          state.checked
            ? state.correct
              ? 'blank-input--correct'
              : 'blank-input--incorrect'
            : ''
        }`}
        value={state.value}
        onChange={(e) => onInput(id, e.target.value)}
        disabled={state.checked}
        aria-label="fill in the blank"
      />
      {parts.slice(1).join('___')}
    </>
  );
}
