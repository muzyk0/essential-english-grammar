import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Language } from '../types/unit';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

// UI strings for navigation / buttons — not part of unit content
const UI_STRINGS: Record<string, Record<Language, string>> = {
  'nav.home': { en: 'Home', ru: 'Главная' },
  'nav.units': { en: 'Units', ru: 'Юниты' },
  'nav.unit': { en: 'Unit', ru: 'Юнит' },
  'nav.reviews': { en: 'Extra Practice', ru: 'Доп. практика' },
  'nav.review': { en: 'Review Pack', ru: 'Пакет повторения' },
  'nav.pdfBook': { en: 'PDF Book', ru: 'PDF Книга' },
  'btn.prev': { en: '← Back', ru: '← Назад' },
  'btn.next': { en: 'Next →', ru: 'Вперёд →' },
  'btn.check': { en: 'Check', ru: 'Проверить' },
  'btn.tryAgain': { en: 'Try Again', ru: 'Попробовать снова' },
  'btn.showAnswer': { en: 'Show Answer', ru: 'Показать ответ' },
  'btn.showTranslation': { en: 'Show Translation', ru: 'Показать перевод' },
  'btn.startUnit': { en: 'Start Unit', ru: 'Начать юнит' },
  'btn.startReview': { en: 'Start Review', ru: 'Начать повторение' },
  'btn.backToHome': { en: '← Home', ru: '← Главная' },
  'btn.backToUnits': { en: '← All Units', ru: '← Все юниты' },
  'progress.step': { en: 'Step', ru: 'Шаг' },
  'progress.of': { en: 'of', ru: 'из' },
  'progress.complete': { en: 'Complete!', ru: 'Завершено!' },
  'practice.correct': { en: '✓ Correct!', ru: '✓ Верно!' },
  'practice.incorrect': { en: '✗ Incorrect', ru: '✗ Неверно' },
  'quiz.score': { en: 'Your score:', ru: 'Ваш результат:' },
  'quiz.perfect': { en: 'Perfect! 🎉', ru: 'Отлично! 🎉' },
  'quiz.good': { en: 'Good job! Keep practicing.', ru: 'Хорошо! Продолжайте практиковаться.' },
  'quiz.tryAgain': { en: 'Review the theory and try again.', ru: 'Повторите теорию и попробуйте снова.' },
  'pdf.title': { en: 'Original Book', ru: 'Оригинальная книга' },
  'pdf.message': { en: 'To access the original "Essential Grammar in Use" by Raymond Murphy, please purchase it from a bookstore or find it through your library. This interactive app is a learning companion, not a replacement for the book.', ru: 'Для доступа к оригинальной книге "Essential Grammar in Use" Раймонда Мёрфи приобретите её в книжном магазине или возьмите в библиотеке. Это интерактивное приложение является учебным дополнением, а не заменой книги.' },
  'pdf.amazon': { en: 'Buy on Amazon', ru: 'Купить на Amazon' },
  'home.title': { en: 'Essential Grammar in Use', ru: 'Essential Grammar in Use' },
  'home.subtitle': { en: 'Interactive English Grammar Course', ru: 'Интерактивный курс английской грамматики' },
  'home.author': { en: 'Based on the book by Raymond Murphy', ru: 'По книге Раймонда Мёрфи' },
  'home.selectUnit': { en: 'Select a unit to begin:', ru: 'Выберите юнит для начала:' },
  'home.selectReview': { en: 'Try an extra practice pack:', ru: 'Попробуйте пакет доп. практики:' },
  'home.steps': { en: 'steps', ru: 'шагов' },
  'review.covers': { en: 'Covers', ru: 'Охват' },
  'review.related': { en: 'Related review packs', ru: 'Связанные пакеты повторения' },
  'review.includedUnits': { en: 'Included units', ru: 'Юниты в подборке' },
  'summary.next': { en: 'Next:', ru: 'Дальше:' },
  'unit.theory': { en: 'Theory', ru: 'Теория' },
  'unit.examples': { en: 'Examples', ru: 'Примеры' },
  'unit.practice': { en: 'Practice', ru: 'Практика' },
  'unit.quiz': { en: 'Quiz', ru: 'Квиз' },
  'unit.summary': { en: 'Summary', ru: 'Итоги' },
  'unit.stub': { en: 'Coming soon — this unit is being prepared.', ru: 'Скоро — этот юнит готовится.' },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('ru');

  const t = (key: string): string => {
    const entry = UI_STRINGS[key];
    if (!entry) return key;
    return entry[lang] ?? entry['en'] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
