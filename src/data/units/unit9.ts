import type { Unit } from '../../types/unit';

// Unit 9: I have ... / I've got ...
// Based on Essential Grammar in Use by Raymond Murphy (Unit 9)
const unit9: Unit = {
  id: 'unit9',
  number: 9,
  title: {
    en: "I have ... / I've got ...",
    ru: "I have ... / I've got ...",
  },
  description: {
    en: 'Two ways to talk about possession — "have" and "have got" — positive, negative and question forms.',
    ru: 'Два способа говорить о владении — "have" и "have got" — утвердительная, отрицательная и вопросительная формы.',
  },
  steps: [
    // ─── Step 1: Positive forms ───────────────────────────────────────────────
    {
      id: 'step-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'Positive forms — have / have got',
          explanation:
            'We can use <b>have</b> or <b>have got</b> to talk about possession. ' +
            'Both forms are correct. <em>Have got</em> is more common in British English; ' +
            '<em>have</em> is more common in American English.',
          table: {
            headers: ['Subject', 'have', 'have got'],
            rows: [
              ['I', 'I have', "I've got"],
              ['you', 'you have', "you've got"],
              ['he', 'he has', "he's got"],
              ['she', 'she has', "she's got"],
              ['it', 'it has', "it's got"],
              ['we', 'we have', "we've got"],
              ['they', 'they have', "they've got"],
            ],
          },
          notes: [
            "With have got we use contractions: I've got, he's got, we've got, etc.",
            'Both "I have a car." and "I\'ve got a car." mean the same thing.',
          ],
        },
        ru: {
          title: 'Утвердительные формы — have / have got',
          explanation:
            'Для выражения владения можно использовать <b>have</b> или <b>have got</b>. ' +
            'Обе формы правильны. <em>Have got</em> чаще используется в британском английском, ' +
            '<em>have</em> — в американском.',
          table: {
            headers: ['Подлежащее', 'have', 'have got'],
            rows: [
              ['I (я)', 'I have', "I've got"],
              ['you (ты/вы)', 'you have', "you've got"],
              ['he (он)', 'he has', "he's got"],
              ['she (она)', 'she has', "she's got"],
              ['it (оно)', 'it has', "it's got"],
              ['we (мы)', 'we have', "we've got"],
              ['they (они)', 'they have', "they've got"],
            ],
          },
          notes: [
            "С have got используются краткие формы: I've got, he's got, we've got и т.д.",
            '"I have a car." и "I\'ve got a car." означают одно и то же.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Positive sentences',
          intro: 'Notice how have and have got are used interchangeably.',
          items: [
            { english: "I've got a new phone.", russian: 'У меня новый телефон.', highlight: "I've got" },
            { english: 'I have a new phone.', russian: 'У меня новый телефон.', highlight: 'have' },
            { english: "She's got two brothers.", russian: 'У неё два брата.', highlight: "She's got" },
            { english: 'She has two brothers.', russian: 'У неё два брата.', highlight: 'has' },
            { english: "We've got a big garden.", russian: 'У нас большой сад.', highlight: "We've got" },
            { english: "He's got brown eyes.", russian: 'У него карие глаза.', highlight: "He's got" },
            { english: 'They have three children.', russian: 'У них трое детей.', highlight: 'have' },
            { english: "The hotel has got a swimming pool.", russian: 'В отеле есть бассейн.', highlight: 'has got' },
            { english: "I've got a headache.", russian: 'У меня болит голова.', highlight: "I've got" },
          ],
        },
        ru: {
          title: 'Примеры — Утвердительные предложения',
          intro: 'Обратите внимание, что have и have got взаимозаменяемы.',
          items: [
            { english: "I've got a new phone.", russian: 'У меня новый телефон.', highlight: "I've got" },
            { english: 'I have a new phone.', russian: 'У меня новый телефон.', highlight: 'have' },
            { english: "She's got two brothers.", russian: 'У неё два брата.', highlight: "She's got" },
            { english: 'She has two brothers.', russian: 'У неё два брата.', highlight: 'has' },
            { english: "We've got a big garden.", russian: 'У нас большой сад.', highlight: "We've got" },
            { english: "He's got brown eyes.", russian: 'У него карие глаза.', highlight: "He's got" },
            { english: 'They have three children.', russian: 'У них трое детей.', highlight: 'have' },
            { english: "The hotel has got a swimming pool.", russian: 'В отеле есть бассейн.', highlight: 'has got' },
            { english: "I've got a headache.", russian: 'У меня болит голова.', highlight: "I've got" },
          ],
        },
      },
    },

    // ─── Step 2: Negative forms ───────────────────────────────────────────────
    {
      id: 'step-2-negative',
      type: 'examples',
      left: {
        en: {
          title: 'Negative forms',
          explanation:
            'With <b>have</b>, use <b>don\'t have / doesn\'t have</b> for negatives. ' +
            'With <b>have got</b>, use <b>haven\'t got / hasn\'t got</b>.',
          table: {
            headers: ['Subject', "don't/doesn't have", "haven't/hasn't got"],
            rows: [
              ['I / you / we / they', "don't have", "haven't got"],
              ['he / she / it', "doesn't have", "hasn't got"],
            ],
          },
          notes: [
            '"I haven\'t a car." (without got) is possible but old-fashioned. Use "I don\'t have" or "I haven\'t got".',
            'Do NOT say "I haven\'t got no car." — this is a double negative.',
          ],
        },
        ru: {
          title: 'Отрицательные формы',
          explanation:
            'С <b>have</b> для отрицания используйте <b>don\'t have / doesn\'t have</b>. ' +
            'С <b>have got</b> используйте <b>haven\'t got / hasn\'t got</b>.',
          table: {
            headers: ['Подлежащее', "don't/doesn't have", "haven't/hasn't got"],
            rows: [
              ['I / you / we / they', "don't have", "haven't got"],
              ['he / she / it', "doesn't have", "hasn't got"],
            ],
          },
          notes: [
            '"I haven\'t a car." (без got) возможно, но устарело. Используйте "I don\'t have" или "I haven\'t got".',
            'НЕ говорите "I haven\'t got no car." — это двойное отрицание.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negative sentences',
          intro: 'Both forms mean the same thing — choose one and use it consistently.',
          items: [
            { english: "I don't have a car.", russian: 'У меня нет машины.', highlight: "don't have" },
            { english: "I haven't got a car.", russian: 'У меня нет машины.', highlight: "haven't got" },
            { english: "She doesn't have any money.", russian: 'У неё нет денег.', highlight: "doesn't have" },
            { english: "She hasn't got any money.", russian: 'У неё нет денег.', highlight: "hasn't got" },
            { english: "We don't have a garden.", russian: 'У нас нет сада.', highlight: "don't have" },
            { english: "He hasn't got a brother.", russian: 'У него нет брата.', highlight: "hasn't got" },
            { english: "They don't have enough time.", russian: 'У них нет достаточно времени.', highlight: "don't have" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицательные предложения',
          intro: 'Обе формы означают одно и то же — выберите одну и используйте её последовательно.',
          items: [
            { english: "I don't have a car.", russian: 'У меня нет машины.', highlight: "don't have" },
            { english: "I haven't got a car.", russian: 'У меня нет машины.', highlight: "haven't got" },
            { english: "She doesn't have any money.", russian: 'У неё нет денег.', highlight: "doesn't have" },
            { english: "She hasn't got any money.", russian: 'У неё нет денег.', highlight: "hasn't got" },
            { english: "We don't have a garden.", russian: 'У нас нет сада.', highlight: "don't have" },
            { english: "He hasn't got a brother.", russian: 'У него нет брата.', highlight: "hasn't got" },
            { english: "They don't have enough time.", russian: 'У них нет достаточно времени.', highlight: "don't have" },
          ],
        },
      },
    },

    // ─── Step 3: Questions ────────────────────────────────────────────────────
    {
      id: 'step-3-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Question forms',
          explanation:
            'With <b>have</b>, use <b>Do you have ...? / Does she have ...?</b> ' +
            'With <b>have got</b>, use <b>Have you got ...? / Has she got ...?</b>',
          table: {
            headers: ['', 'have', 'have got'],
            rows: [
              ['Question (I/you/we/they)', 'Do you have ...?', 'Have you got ...?'],
              ['Question (he/she/it)', 'Does she have ...?', 'Has she got ...?'],
              ['Short answer (yes)', 'Yes, I do.', 'Yes, I have.'],
              ['Short answer (no)', "No, I don't.", "No, I haven't."],
            ],
          },
          notes: [
            'With "have got" questions, Have / Has comes before the subject: "Have you got?" (not "Do you have got?")',
            'Short answers for "have got": "Yes, I have." / "No, I haven\'t." (not "Yes, I\'ve.")',
          ],
        },
        ru: {
          title: 'Вопросительные формы',
          explanation:
            'С <b>have</b> используйте <b>Do you have ...? / Does she have ...?</b> ' +
            'С <b>have got</b> используйте <b>Have you got ...? / Has she got ...?</b>',
          table: {
            headers: ['', 'have', 'have got'],
            rows: [
              ['Вопрос (I/you/we/they)', 'Do you have ...?', 'Have you got ...?'],
              ['Вопрос (he/she/it)', 'Does she have ...?', 'Has she got ...?'],
              ['Краткий ответ (да)', 'Yes, I do.', 'Yes, I have.'],
              ['Краткий ответ (нет)', "No, I don't.", "No, I haven't."],
            ],
          },
          notes: [
            'В вопросах с "have got" Have / Has ставится перед подлежащим: "Have you got?" (НЕ "Do you have got?")',
            'Краткие ответы с "have got": "Yes, I have." / "No, I haven\'t." (НЕ "Yes, I\'ve.")',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Questions and short answers',
          items: [
            { english: 'Have you got a pen? — Yes, I have.', russian: 'У тебя есть ручка? — Да.' },
            { english: "Do you have a pen? — Yes, I do.", russian: 'У тебя есть ручка? — Да.' },
            { english: "Has she got a driving licence? — No, she hasn't.", russian: 'У неё есть водительское удостоверение? — Нет.' },
            { english: "Does he have a car? — No, he doesn't.", russian: 'У него есть машина? — Нет.' },
            { english: 'Have they got any children? — Yes, they have.', russian: 'У них есть дети? — Да.' },
            { english: "Do you have time? — No, I don't.", russian: 'У тебя есть время? — Нет.' },
            { english: "Has the hotel got a gym? — Yes, it has.", russian: 'В отеле есть спортзал? — Да.' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы и краткие ответы',
          items: [
            { english: 'Have you got a pen? — Yes, I have.', russian: 'У тебя есть ручка? — Да.' },
            { english: "Do you have a pen? — Yes, I do.", russian: 'У тебя есть ручка? — Да.' },
            { english: "Has she got a driving licence? — No, she hasn't.", russian: 'У неё есть водительское удостоверение? — Нет.' },
            { english: "Does he have a car? — No, he doesn't.", russian: 'У него есть машина? — Нет.' },
            { english: 'Have they got any children? — Yes, they have.', russian: 'У них есть дети? — Да.' },
            { english: "Do you have time? — No, I don't.", russian: 'У тебя есть время? — Нет.' },
            { english: "Has the hotel got a gym? — Yes, it has.", russian: 'В отеле есть спортзал? — Да.' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Form', 'have', 'have got'],
            rows: [
              ['Positive', 'I have / she has', "I've got / she's got"],
              ['Negative', "I don't have / she doesn't have", "I haven't got / she hasn't got"],
              ['Question', 'Do you have? / Does she have?', 'Have you got? / Has she got?'],
            ],
          },
          notes: ['Both forms are correct — choose one and use it consistently.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Форма', 'have', 'have got'],
            rows: [
              ['Утверждение', 'I have / she has', "I've got / she's got"],
              ['Отрицание', "I don't have / she doesn't have", "I haven't got / she hasn't got"],
              ['Вопрос', 'Do you have? / Does she have?', 'Have you got? / Has she got?'],
            ],
          },
          notes: ['Обе формы правильны — выберите одну и используйте её последовательно.'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: "Complete the sentences using have got (positive or negative) or the correct question form.",
          questions: [
            {
              id: 'p9-1',
              type: 'fill-blank',
              prompt: "I ___ got a headache. (positive)",
              correctAnswer: "'ve",
              altAnswers: ["have"],
              explanation: "I have got → I've got (contraction)",
            },
            {
              id: 'p9-2',
              type: 'fill-blank',
              prompt: "She ___ got a driving licence. (negative)",
              correctAnswer: "hasn't",
              altAnswers: ["has not"],
              explanation: "She has not got → She hasn't got",
            },
            {
              id: 'p9-3',
              type: 'fill-blank',
              prompt: "___ you got a moment? (question)",
              correctAnswer: 'Have',
              explanation: "Question with you/have got → Have you got?",
            },
            {
              id: 'p9-4',
              type: 'fill-blank',
              prompt: "They ___ have a garden. (negative with have)",
              correctAnswer: "don't",
              altAnswers: ["do not"],
              explanation: "Negative with have: don't have",
            },
            {
              id: 'p9-5',
              type: 'fill-blank',
              prompt: "He ___ got blue eyes. (positive)",
              correctAnswer: "'s",
              altAnswers: ["has"],
              explanation: "He has got → He's got (contraction)",
            },
            {
              id: 'p9-6',
              type: 'fill-blank',
              prompt: "___ she have a car? (question with have)",
              correctAnswer: 'Does',
              explanation: "Question with she/have → Does she have?",
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: "Дополните предложения, используя have got (утвердительная или отрицательная форма) или правильную вопросительную форму.",
          questions: [
            {
              id: 'p9-1',
              type: 'fill-blank',
              prompt: "I ___ got a headache. (утверждение)",
              correctAnswer: "'ve",
              altAnswers: ["have"],
              explanation: "I have got → I've got (краткая форма)",
            },
            {
              id: 'p9-2',
              type: 'fill-blank',
              prompt: "She ___ got a driving licence. (отрицание)",
              correctAnswer: "hasn't",
              altAnswers: ["has not"],
              explanation: "She has not got → She hasn't got",
            },
            {
              id: 'p9-3',
              type: 'fill-blank',
              prompt: "___ you got a moment? (вопрос)",
              correctAnswer: 'Have',
              explanation: "Вопрос с you/have got → Have you got?",
            },
            {
              id: 'p9-4',
              type: 'fill-blank',
              prompt: "They ___ have a garden. (отрицание с have)",
              correctAnswer: "don't",
              altAnswers: ["do not"],
              explanation: "Отрицание с have: don't have",
            },
            {
              id: 'p9-5',
              type: 'fill-blank',
              prompt: "He ___ got blue eyes. (утверждение)",
              correctAnswer: "'s",
              altAnswers: ["has"],
              explanation: "He has got → He's got (краткая форма)",
            },
            {
              id: 'p9-6',
              type: 'fill-blank',
              prompt: "___ she have a car? (вопрос с have)",
              correctAnswer: 'Does',
              explanation: "Вопрос с she/have → Does she have?",
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: "Quick Quiz — have / have got",
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q9-1',
              question: "Which sentence is correct?",
              options: ["She have got a cat.", "She's got a cat.", "She's have a cat."],
              correctIndex: 1,
              explanation: "With she/he/it we use has got → contraction: she's got.",
            },
            {
              id: 'q9-2',
              question: 'How do you say "У него нет машины." using have got?',
              options: ["He doesn't got a car.", "He hasn't got a car.", "He isn't got a car."],
              correctIndex: 1,
              explanation: "Negative of have got with he: hasn't got.",
            },
            {
              id: 'q9-3',
              question: 'Which question is correct?',
              options: ['Do you have got a pen?', 'Have you got a pen?', 'Are you having a pen?'],
              correctIndex: 1,
              explanation: "With have got: Have you got? (not Do you have got?)",
            },
            {
              id: 'q9-4',
              question: 'Short answer (yes) to "Have they got children?"',
              options: ["Yes, they've.", "Yes, they have.", "Yes, they do."],
              correctIndex: 1,
              explanation: "Short answers with have got: Yes, they have. (not Yes, they've.)",
            },
            {
              id: 'q9-5',
              question: 'Which sentence uses "have" correctly for negation?',
              options: ["I haven't a car.", "I don't have a car.", "I amn't having a car."],
              correctIndex: 1,
              explanation: "Negative of have (present simple): don't have / doesn't have.",
            },
          ],
        },
        ru: {
          title: "Быстрый квиз — have / have got",
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q9-1',
              question: "Какое предложение правильное?",
              options: ["She have got a cat.", "She's got a cat.", "She's have a cat."],
              correctIndex: 1,
              explanation: "С she/he/it используем has got → краткая форма: she's got.",
            },
            {
              id: 'q9-2',
              question: 'Как сказать "У него нет машины." используя have got?',
              options: ["He doesn't got a car.", "He hasn't got a car.", "He isn't got a car."],
              correctIndex: 1,
              explanation: "Отрицание have got с he: hasn't got.",
            },
            {
              id: 'q9-3',
              question: 'Какой вопрос правильный?',
              options: ['Do you have got a pen?', 'Have you got a pen?', 'Are you having a pen?'],
              correctIndex: 1,
              explanation: "С have got: Have you got? (НЕ Do you have got?)",
            },
            {
              id: 'q9-4',
              question: 'Краткий утвердительный ответ на "Have they got children?"',
              options: ["Yes, they've.", "Yes, they have.", "Yes, they do."],
              correctIndex: 1,
              explanation: "Краткие ответы с have got: Yes, they have. (НЕ Yes, they've.)",
            },
            {
              id: 'q9-5',
              question: 'В каком предложении "have" используется правильно для отрицания?',
              options: ["I haven't a car.", "I don't have a car.", "I amn't having a car."],
              correctIndex: 1,
              explanation: "Отрицание have (настоящее простое): don't have / doesn't have.",
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-6-summary',
      type: 'summary',
      content: {
        en: {
          title: "Summary — have / have got",
          points: [
            'Use <b>have</b> or <b>have got</b> for possession — both are correct.',
            'With I/you/we/they: <b>have</b> → <em>I have</em> / <em>I\'ve got</em>',
            'With he/she/it: <b>has</b> → <em>she has</em> / <em>she\'s got</em>',
            'Negative: <b>don\'t/doesn\'t have</b> or <b>haven\'t/hasn\'t got</b>',
            'Questions: <b>Do/Does ... have?</b> or <b>Have/Has ... got?</b>',
            'Short answers with <em>have got</em>: "Yes, I <b>have</b>." / "No, I <b>haven\'t</b>." (NOT "Yes, I\'ve.")',
          ],
          nextUnit: 'Unit 10 — was / were',
        },
        ru: {
          title: "Итоги — have / have got",
          points: [
            'Для выражения владения используйте <b>have</b> или <b>have got</b> — обе формы правильны.',
            'С I/you/we/they: <b>have</b> → <em>I have</em> / <em>I\'ve got</em>',
            'С he/she/it: <b>has</b> → <em>she has</em> / <em>she\'s got</em>',
            'Отрицание: <b>don\'t/doesn\'t have</b> или <b>haven\'t/hasn\'t got</b>',
            'Вопросы: <b>Do/Does ... have?</b> или <b>Have/Has ... got?</b>',
            'Краткие ответы с <em>have got</em>: "Yes, I <b>have</b>." / "No, I <b>haven\'t</b>." (НЕ "Yes, I\'ve.")',
          ],
          nextUnit: 'Юнит 10 — was / were',
        },
      },
    },
  ],
};

export default unit9;
