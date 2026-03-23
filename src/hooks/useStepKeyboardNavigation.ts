import { useEffect } from 'react';

type Options = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onFirst: () => void;
  onLast: () => void;
  enabled?: boolean;
};

export default function useStepKeyboardNavigation({
  current,
  total,
  onPrevious,
  onNext,
  onFirst,
  onLast,
  enabled = true,
}: Options) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isEditableTarget(event.target)) return;

      switch (event.key) {
        case 'ArrowLeft':
          if (current <= 0) return;
          event.preventDefault();
          onPrevious();
          break;

        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;

        case 'Home':
          if (total === 0 || current === 0) return;
          event.preventDefault();
          onFirst();
          break;

        case 'End':
          if (total === 0 || current === total - 1) return;
          event.preventDefault();
          onLast();
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current, enabled, onFirst, onLast, onNext, onPrevious, total]);
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  const tagName = target.tagName;
  return (
    target.isContentEditable
    || tagName === 'INPUT'
    || tagName === 'TEXTAREA'
    || tagName === 'SELECT'
  );
}
