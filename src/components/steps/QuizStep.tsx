import { useState } from 'react';
import type { QuizStep as QuizStepType, Language } from '../../types/unit';
import { useLanguage } from '../../context/LanguageContext';

type Props = {
  step: QuizStepType;
  lang: Language;
};

export default function QuizStep({ step, lang }: Props) {
  const { t } = useLanguage();
  const content = step.content[lang];

  const [selected, setSelected] = useState<Record<string, number | null>>(
    Object.fromEntries(content.questions.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: string, idx: number) => {
    if (submitted) return;
    setSelected((prev) => ({ ...prev, [qId]: idx }));
  };

  const allAnswered = Object.values(selected).every((v) => v !== null);

  const score = submitted
    ? content.questions.filter((q) => selected[q.id] === q.correctIndex).length
    : 0;

  const total = content.questions.length;

  const handleSubmit = () => setSubmitted(true);

  const handleReset = () => {
    setSelected(Object.fromEntries(content.questions.map((q) => [q.id, null])));
    setSubmitted(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-inner">
        <h2 className="quiz-title">{content.title}</h2>
        {content.description && (
          <p className="quiz-description">{content.description}</p>
        )}

        <div className="quiz-questions">
          {content.questions.map((q, qIdx) => {
            const userAnswer = selected[q.id];
            const isCorrect = submitted && userAnswer === q.correctIndex;
            const isWrong = submitted && userAnswer !== q.correctIndex && userAnswer !== null;

            return (
              <div key={q.id} className="quiz-question">
                <p className="quiz-question-text">
                  <span className="quiz-question-num">{qIdx + 1}.</span> {q.question}
                </p>
                <ul className="quiz-options">
                  {q.options.map((opt, idx) => {
                    const isSelected = userAnswer === idx;
                    let optClass = 'quiz-option';
                    if (submitted) {
                      if (idx === q.correctIndex) optClass += ' quiz-option--correct';
                      else if (isSelected && idx !== q.correctIndex) optClass += ' quiz-option--wrong';
                    } else if (isSelected) {
                      optClass += ' quiz-option--selected';
                    }

                    return (
                      <li key={idx}>
                        <button
                          className={optClass}
                          onClick={() => handleSelect(q.id, idx)}
                          disabled={submitted}
                        >
                          <span className="quiz-option-letter">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          {opt}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {submitted && q.explanation && (
                  <div className={`quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : isWrong ? 'quiz-explanation--wrong' : ''}`}>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!submitted ? (
          <button
            className="btn btn--primary btn--large"
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            {t('btn.check')}
          </button>
        ) : (
          <div className="quiz-results">
            <div className="quiz-score">
              <span className="quiz-score-label">{t('quiz.score')}</span>
              <span className="quiz-score-value">{score} / {total}</span>
            </div>
            <p className="quiz-verdict">
              {score === total
                ? t('quiz.perfect')
                : score >= total / 2
                ? t('quiz.good')
                : t('quiz.tryAgain')}
            </p>
            <button className="btn btn--secondary" onClick={handleReset}>
              {t('btn.tryAgain')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
