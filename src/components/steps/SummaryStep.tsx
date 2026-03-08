import type { SummaryStep as SummaryStepType, Language } from '../../types/unit';

type Props = {
  step: SummaryStepType;
  lang: Language;
};

export default function SummaryStep({ step, lang }: Props) {
  const content = step.content[lang];

  return (
    <div className="summary-container">
      <div className="summary-inner">
        <div className="summary-icon">✓</div>
        <h2 className="summary-title">{content.title}</h2>

        <ul className="summary-points">
          {content.points.map((point, i) => (
            <li
              key={i}
              className="summary-point"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          ))}
        </ul>

        {content.nextUnit && (
          <div className="summary-next">
            <span className="summary-next-label">Next:</span> {content.nextUnit}
          </div>
        )}
      </div>
    </div>
  );
}
