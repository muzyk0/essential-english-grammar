import type { TheoryContent } from '../../types/unit';

type Props = {
  content: TheoryContent;
};

export default function TheoryPanel({ content }: Props) {
  return (
    <div className="book-page book-page--left">
      <div className="page-label">A</div>
      <h2 className="page-title">{content.title}</h2>
      <p
        className="page-explanation"
        dangerouslySetInnerHTML={{ __html: content.explanation }}
      />

      {content.table && (
        <div className="grammar-table-wrapper">
          <table className="grammar-table">
            <thead>
              <tr>
                {content.table.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.table.rows.map((row, i) => (
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

      {content.notes && content.notes.length > 0 && (
        <div className="notes-box">
          {content.notes.map((note, i) => (
            <p key={i} className="note-item">
              💡 {note}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
