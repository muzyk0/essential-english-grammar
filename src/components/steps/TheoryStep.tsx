import type { TheoryStep as TheoryStepType, ExamplesStep as ExamplesStepType, Language } from '../../types/unit';

type Props = {
  step: TheoryStepType | ExamplesStepType;
  lang: Language;
};

export default function TheoryStep({ step, lang }: Props) {
  const left = step.left[lang];
  const right = step.right[lang];

  return (
    <div className="book-spread">
      {/* Left page — theory */}
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

        {left.notes && left.notes.length > 0 && (
          <div className="notes-box">
            {left.notes.map((note, i) => (
              <p key={i} className="note-item">
                💡 {note}
              </p>
            ))}
          </div>
        )}
      </div>

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
