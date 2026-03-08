// StepRenderer acts as the "router" for step types.
// To add a new step type:
//   1. Define its interface in types/unit.ts
//   2. Create its component in this directory
//   3. Add a case here
import type { Step, Language } from '../../types/unit';
import TheoryStep from './TheoryStep';
import PracticeStep from './PracticeStep';
import QuizStep from './QuizStep';
import SummaryStep from './SummaryStep';

type Props = {
  step: Step;
  lang: Language;
};

export default function StepRenderer({ step, lang }: Props) {
  switch (step.type) {
    case 'theory':
    case 'examples':
      return <TheoryStep step={step} lang={lang} />;

    case 'practice':
      return <PracticeStep step={step} lang={lang} />;

    case 'quiz':
      return <QuizStep step={step} lang={lang} />;

    case 'summary':
      return <SummaryStep step={step} lang={lang} />;

    default: {
      // TypeScript exhaustiveness check — will error at compile time if a type is missed
      const _exhaustive: never = step;
      return <div>Unknown step type: {(_exhaustive as Step).type}</div>;
    }
  }
}
