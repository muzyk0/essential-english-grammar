import type { TheoryStep as TheoryStepType, ExamplesStep as ExamplesStepType, Language } from '../../types/unit';
import TheoryPanel from './TheoryPanel';

type Props = {
  step: TheoryStepType | ExamplesStepType;
  lang: Language;
};

export default function TheoryStep({ step, lang }: Props) {
  const right = step.right[lang];

  return (
    <div className="book-spread">
      <TheoryPanel content={step.left[lang]} />

      {/* Right page — examples */}
      <div className="book-page book-page--right">
        <div className="page-label">B</div>
        <h2 className="page-title">{right.title}</h2>
        {right.intro && <p className="page-intro">{right.intro}</p>}

        <ul className="examples-list">
          {right.items.map((item, i) => (
            <li key={i} className="example-item">
              <span className="example-english">
                {item.highlight
                  ? renderHighlighted(item.english, item.highlight)
                  : item.english}
              </span>
              {item.russian && (
                <span className="example-russian">{item.russian}</span>
              )}
              {item.note && <span className="example-note">{item.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Wraps the highlighted part of a sentence in a <mark> element
function renderHighlighted(sentence: string, highlight: string) {
  const parts = sentence.split(highlight);
  if (parts.length === 1) return sentence;
  return (
    <>
      {parts[0]}
      <mark>{highlight}</mark>
      {parts.slice(1).join(highlight)}
    </>
  );
}
