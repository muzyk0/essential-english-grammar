import type { Unit } from '../../types/unit';

// Unit 12: I didn't ... / Did you ...? (past simple — negative and questions)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 12)
const unit12: Unit = {
  id: 'unit12',
  number: 12,
  title: {
    en: "I didn't ... / Did you ...?",
    ru: "I didn't ... / Did you ...?",
  },
  description: {
    en: 'Past simple — negative (didn\'t) and question (Did ...?) forms.',
    ru: 'Прошедшее простое время — отрицание (didn\'t) и вопросы (Did ...?).',
  },
  steps: [
    // ─── Step 1: Negative — didn't + base form ───────────────────────────────
    {
      id: 'step-1-negative',
      type: 'theory',
      left: {
        en: {
          title: "Negative — didn't",
          explanation:
            'To make a negative sentence in the past simple, use <b>didn\'t</b> (did not) + the <b>base form</b> of the verb. ' +
            'This is the same for all verbs — regular and irregular — and for all persons.',
          table: {
            headers: ['Positive', 'Negative'],
            rows: [
              ['I watched TV.', "I didn't watch TV."],
              ['She played tennis.', "She didn't play tennis."],
              ['He went to work.', "He didn't go to work."],
              ['We had breakfast.', "We didn't have breakfast."],
              ['They saw the film.', "They didn't see the film."],
              ['It rained yesterday.', "It didn't rain yesterday."],
            ],
          },
          notes: [
            "After didn't, always use the BASE form: didn't go (NOT didn't went).",
            "didn't = did not. The full form is more formal.",
          ],
        },
        ru: {
          title: "Отрицание — didn't",
          explanation:
            'Для отрицания в прошедшем простом времени используем <b>didn\'t</b> (did not) + <b>основу</b> глагола. ' +
            'Это одинаково для всех глаголов — правильных и неправильных — и для всех лиц.',
          table: {
            headers: ['Утверждение', 'Отрицание'],
            rows: [
              ['I watched TV.', "I didn't watch TV."],
              ['She played tennis.', "She didn't play tennis."],
              ['He went to work.', "He didn't go to work."],
              ['We had breakfast.', "We didn't have breakfast."],
              ['They saw the film.', "They didn't see the film."],
              ['It rained yesterday.', "It didn't rain yesterday."],
            ],
          },
          notes: [
            "После didn't всегда используем ОСНОВУ глагола: didn't go (НЕ didn't went).",
            "didn't = did not. Полная форма более формальна.",
          ],
        },
      },
      right: {
        en: {
          title: "Examples — Negative with didn't",
          intro: "Study these sentences. Notice that after didn't we always use the base form of the verb.",
          items: [
            { english: "I didn't go out last night. I stayed at home.", russian: 'Я не выходил(а) вчера вечером. Я остался(лась) дома.', highlight: "didn't go" },
            { english: "She didn't want any dinner.", russian: 'Она не хотела ужинать.', highlight: "didn't want" },
            { english: "They didn't enjoy the party.", russian: 'Им не понравилась вечеринка.', highlight: "didn't enjoy" },
            { english: "He didn't do his homework.", russian: 'Он не сделал домашнее задание.', highlight: "didn't do" },
            { english: "We didn't have time to finish.", russian: 'У нас не было времени закончить.', highlight: "didn't have" },
            { english: "I didn't sleep well last night.", russian: 'Я плохо спал(а) прошлой ночью.', highlight: "didn't sleep" },
            { english: "The bus didn't come on time.", russian: 'Автобус не пришёл вовремя.', highlight: "didn't come" },
          ],
        },
        ru: {
          title: "Примеры — Отрицание с didn't",
          intro: "Изучите эти предложения. Обратите внимание, что после didn't всегда стоит основа глагола.",
          items: [
            { english: "I didn't go out last night. I stayed at home.", russian: 'Я не выходил(а) вчера вечером. Я остался(лась) дома.', highlight: "didn't go" },
            { english: "She didn't want any dinner.", russian: 'Она не хотела ужинать.', highlight: "didn't want" },
            { english: "They didn't enjoy the party.", russian: 'Им не понравилась вечеринка.', highlight: "didn't enjoy" },
            { english: "He didn't do his homework.", russian: 'Он не сделал домашнее задание.', highlight: "didn't do" },
            { english: "We didn't have time to finish.", russian: 'У нас не было времени закончить.', highlight: "didn't have" },
            { english: "I didn't sleep well last night.", russian: 'Я плохо спал(а) прошлой ночью.', highlight: "didn't sleep" },
            { english: "The bus didn't come on time.", russian: 'Автобус не пришёл вовремя.', highlight: "didn't come" },
          ],
        },
      },
    },

    // ─── Step 2: Questions — Did ... ? ────────────────────────────────────────
    {
      id: 'step-2-questions',
      type: 'examples',
      left: {
        en: {
          title: 'Questions — Did ... ?',
          explanation:
            'To make a question in the past simple, use <b>Did</b> + subject + <b>base form</b>. ' +
            'Like the negative, we use the base form after Did — for all verbs and all persons.',
          table: {
            headers: ['Statement', 'Question'],
            rows: [
              ['You went out.', 'Did you go out?'],
              ['She played tennis.', 'Did she play tennis?'],
              ['He saw the film.', 'Did he see the film?'],
              ['They had a good time.', 'Did they have a good time?'],
              ['It rained.', 'Did it rain?'],
            ],
          },
          notes: [
            'After Did, always use the BASE form: Did you go? (NOT Did you went?)',
            'Did is the same for all persons: Did I / Did you / Did he / Did they, etc.',
          ],
        },
        ru: {
          title: 'Вопросы — Did ... ?',
          explanation:
            'Для вопроса в прошедшем простом используем <b>Did</b> + подлежащее + <b>основу глагола</b>. ' +
            'Как и в отрицании, после Did стоит основа глагола — для всех глаголов и всех лиц.',
          table: {
            headers: ['Утверждение', 'Вопрос'],
            rows: [
              ['You went out.', 'Did you go out?'],
              ['She played tennis.', 'Did she play tennis?'],
              ['He saw the film.', 'Did he see the film?'],
              ['They had a good time.', 'Did they have a good time?'],
              ['It rained.', 'Did it rain?'],
            ],
          },
          notes: [
            'После Did всегда используем ОСНОВУ глагола: Did you go? (НЕ Did you went?)',
            'Did одинаково для всех лиц: Did I / Did you / Did he / Did they и т.д.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Questions with Did',
          intro: 'Study these questions and answers. The main verb is always in the base form after Did.',
          items: [
            { english: 'Did you go out last night?', russian: 'Ты выходил(а) вчера вечером?', highlight: 'Did you go' },
            { english: 'Did she call you yesterday?', russian: 'Она звонила тебе вчера?', highlight: 'Did she call' },
            { english: 'Did it rain on Sunday?', russian: 'В воскресенье шёл дождь?', highlight: 'Did it rain' },
            { english: 'Did they enjoy the holiday?', russian: 'Им понравился отпуск?', highlight: 'Did they enjoy' },
            { english: 'Did he have a good trip?', russian: 'У него была хорошая поездка?', highlight: 'Did he have' },
            { english: 'Did you watch the match last night?', russian: 'Ты смотрел(а) матч вчера вечером?', highlight: 'Did you watch' },
            { english: 'What time did you get up this morning?', russian: 'Во сколько ты встал(а) сегодня утром?', highlight: 'did you get' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы с Did',
          intro: 'Изучите эти вопросы и ответы. После Did основной глагол всегда стоит в форме основы.',
          items: [
            { english: 'Did you go out last night?', russian: 'Ты выходил(а) вчера вечером?', highlight: 'Did you go' },
            { english: 'Did she call you yesterday?', russian: 'Она звонила тебе вчера?', highlight: 'Did she call' },
            { english: 'Did it rain on Sunday?', russian: 'В воскресенье шёл дождь?', highlight: 'Did it rain' },
            { english: 'Did they enjoy the holiday?', russian: 'Им понравился отпуск?', highlight: 'Did they enjoy' },
            { english: 'Did he have a good trip?', russian: 'У него была хорошая поездка?', highlight: 'Did he have' },
            { english: 'Did you watch the match last night?', russian: 'Ты смотрел(а) матч вчера вечером?', highlight: 'Did you watch' },
            { english: 'What time did you get up this morning?', russian: 'Во сколько ты встал(а) сегодня утром?', highlight: 'did you get' },
          ],
        },
      },
    },

    // ─── Step 3: Short answers + Wh- questions ──────────────────────────────────
    {
      id: 'step-3-short-answers',
      type: 'theory',
      left: {
        en: {
          title: 'Short answers & Wh- questions',
          explanation:
            'Short answers to <b>Did ...?</b> questions use <b>Yes, ... did.</b> or <b>No, ... didn\'t.</b> ' +
            'We can also use question words (<em>what, where, when, why, how, who</em>) with <b>did</b>.',
          table: {
            headers: ['Question', 'Short answer'],
            rows: [
              ['Did you like the film?', 'Yes, I did. / No, I didn\'t.'],
              ['Did she go to work?', 'Yes, she did. / No, she didn\'t.'],
              ['Did they come to the party?', 'Yes, they did. / No, they didn\'t.'],
              ['Where did you go?', '(full answer)'],
              ['What did she buy?', '(full answer)'],
              ['Why did he leave early?', '(full answer)'],
            ],
          },
          notes: [
            'Short answers: Yes, I did. (NOT Yes, I went.)',
            'Wh-questions: What/Where/When/Why/How + did + subject + base form?',
          ],
        },
        ru: {
          title: 'Краткие ответы и вопросы с Wh-',
          explanation:
            'Краткие ответы на вопросы <b>Did ...?</b> — это <b>Yes, ... did.</b> или <b>No, ... didn\'t.</b> ' +
            'Мы также можем использовать вопросительные слова (<em>what, where, when, why, how, who</em>) с <b>did</b>.',
          table: {
            headers: ['Вопрос', 'Краткий ответ'],
            rows: [
              ['Did you like the film?', 'Yes, I did. / No, I didn\'t.'],
              ['Did she go to work?', 'Yes, she did. / No, she didn\'t.'],
              ['Did they come to the party?', 'Yes, they did. / No, they didn\'t.'],
              ['Where did you go?', '(полный ответ)'],
              ['What did she buy?', '(полный ответ)'],
              ['Why did he leave early?', '(полный ответ)'],
            ],
          },
          notes: [
            'Краткие ответы: Yes, I did. (НЕ Yes, I went.)',
            'Вопросы с Wh-: What/Where/When/Why/How + did + подлежащее + основа глагола?',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Short answers & Wh- questions',
          items: [
            { english: 'Did you enjoy the party? — Yes, I did.', russian: 'Тебе понравилась вечеринка? — Да.', highlight: 'Yes, I did' },
            { english: "Did he pass the exam? — No, he didn't.", russian: 'Он сдал экзамен? — Нет.', highlight: "No, he didn't" },
            { english: "Did they come by car? — No, they didn't. They walked.", russian: 'Они приехали на машине? — Нет. Они пришли пешком.', highlight: "No, they didn't" },
            { english: 'Where did you go on holiday? — To Spain.', russian: 'Куда ты ездил(а) в отпуск? — В Испанию.', highlight: 'Where did you go' },
            { english: 'What did she say? — Nothing.', russian: 'Что она сказала? — Ничего.', highlight: 'What did she say' },
            { english: 'How did you get to work? — By bus.', russian: 'Как ты добрался(лась) до работы? — На автобусе.', highlight: 'How did you get' },
            { english: 'When did they arrive? — Last Friday.', russian: 'Когда они приехали? — В прошлую пятницу.', highlight: 'When did they arrive' },
          ],
        },
        ru: {
          title: 'Примеры — Краткие ответы и Wh-вопросы',
          items: [
            { english: 'Did you enjoy the party? — Yes, I did.', russian: 'Тебе понравилась вечеринка? — Да.', highlight: 'Yes, I did' },
            { english: "Did he pass the exam? — No, he didn't.", russian: 'Он сдал экзамен? — Нет.', highlight: "No, he didn't" },
            { english: "Did they come by car? — No, they didn't. They walked.", russian: 'Они приехали на машине? — Нет. Они пришли пешком.', highlight: "No, they didn't" },
            { english: 'Where did you go on holiday? — To Spain.', russian: 'Куда ты ездил(а) в отпуск? — В Испанию.', highlight: 'Where did you go' },
            { english: 'What did she say? — Nothing.', russian: 'Что она сказала? — Ничего.', highlight: 'What did she say' },
            { english: 'How did you get to work? — By bus.', russian: 'Как ты добрался(лась) до работы? — На автобусе.', highlight: 'How did you get' },
            { english: 'When did they arrive? — Last Friday.', russian: 'Когда они приехали? — В прошлую пятницу.', highlight: 'When did they arrive' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────────
    {
      id: 'step-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Form', 'Structure', 'Example'],
            rows: [
              ['Positive', 'subject + past form', 'She went home.'],
              ['Negative', "subject + didn't + base form", "She didn't go home."],
              ['Question', 'Did + subject + base form?', 'Did she go home?'],
              ['Short answer', 'Yes, ... did. / No, ... didn\'t.', 'Yes, she did.'],
            ],
          },
          notes: ["Always use the base form after didn't and Did."],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Форма', 'Структура', 'Пример'],
            rows: [
              ['Утверждение', 'подлежащее + форма прошедшего', 'She went home.'],
              ['Отрицание', "подлежащее + didn't + основа", "She didn't go home."],
              ['Вопрос', 'Did + подлежащее + основа?', 'Did she go home?'],
              ['Краткий ответ', 'Yes, ... did. / No, ... didn\'t.', 'Yes, she did.'],
            ],
          },
          notes: ["После didn't и Did всегда используем основу глагола."],
        },
      },
      right: {
        en: {
          title: 'Exercise — Fill in the blanks',
          instructions: "Complete the sentences with the correct negative or question form. Use didn't or Did.",
          questions: [
            {
              id: 'p12-1',
              type: 'fill-blank',
              prompt: "I ___ watch TV last night. (negative)",
              correctAnswer: "didn't",
              explanation: "Negative: subject + didn't + base form → I didn't watch.",
            },
            {
              id: 'p12-2',
              type: 'fill-blank',
              prompt: '___ you go out yesterday? (question)',
              correctAnswer: 'Did',
              explanation: 'Question: Did + subject + base form → Did you go?',
            },
            {
              id: 'p12-3',
              type: 'fill-blank',
              prompt: "She ___ like the food. (negative)",
              correctAnswer: "didn't",
              explanation: "Negative: She didn't like (base form after didn't).",
            },
            {
              id: 'p12-4',
              type: 'fill-blank',
              prompt: 'What time ___ he arrive? (question)',
              correctAnswer: 'did',
              explanation: 'Wh-question: What time + did + subject + base form?',
            },
            {
              id: 'p12-5',
              type: 'fill-blank',
              prompt: "We ___ have any money. (negative)",
              correctAnswer: "didn't",
              explanation: "Negative: We didn't have (use base form 'have', not 'had').",
            },
            {
              id: 'p12-6',
              type: 'fill-blank',
              prompt: '___ they enjoy the concert? — Yes, they ___.',
              correctAnswer: 'Did ... did',
              explanation: 'Question: Did they enjoy? Short answer: Yes, they did.',
            },
          ],
        },
        ru: {
          title: 'Упражнение — Вставьте пропущенное слово',
          instructions: "Дополните предложения правильной формой отрицания или вопроса. Используйте didn't или Did.",
          questions: [
            {
              id: 'p12-1',
              type: 'fill-blank',
              prompt: "I ___ watch TV last night. (отрицание)",
              correctAnswer: "didn't",
              explanation: "Отрицание: подлежащее + didn't + основа → I didn't watch.",
            },
            {
              id: 'p12-2',
              type: 'fill-blank',
              prompt: '___ you go out yesterday? (вопрос)',
              correctAnswer: 'Did',
              explanation: 'Вопрос: Did + подлежащее + основа → Did you go?',
            },
            {
              id: 'p12-3',
              type: 'fill-blank',
              prompt: "She ___ like the food. (отрицание)",
              correctAnswer: "didn't",
              explanation: "Отрицание: She didn't like (основа глагола после didn't).",
            },
            {
              id: 'p12-4',
              type: 'fill-blank',
              prompt: 'What time ___ he arrive? (вопрос)',
              correctAnswer: 'did',
              explanation: 'Wh-вопрос: What time + did + подлежащее + основа?',
            },
            {
              id: 'p12-5',
              type: 'fill-blank',
              prompt: "We ___ have any money. (отрицание)",
              correctAnswer: "didn't",
              explanation: "Отрицание: We didn't have (основа 'have', а не 'had').",
            },
            {
              id: 'p12-6',
              type: 'fill-blank',
              prompt: '___ they enjoy the concert? — Yes, they ___.',
              correctAnswer: 'Did ... did',
              explanation: 'Вопрос: Did they enjoy? Краткий ответ: Yes, they did.',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────────
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: "Quick Quiz — didn't / Did ...?",
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q12-1',
              question: 'Which sentence is correct?',
              options: ["I didn't went to the shop.", "I didn't go to the shop.", "I not went to the shop."],
              correctIndex: 1,
              explanation: "After didn't we use the base form: didn't go (NOT didn't went).",
            },
            {
              id: 'q12-2',
              question: 'How do you make a past simple question?',
              options: ['Went you home?', 'Did you went home?', 'Did you go home?'],
              correctIndex: 2,
              explanation: 'Did + subject + base form: Did you go home?',
            },
            {
              id: 'q12-3',
              question: 'Complete: "___  she like the film?" — "No, she ___."',
              options: ['Did ... did', "Did ... didn't", "Does ... didn't"],
              correctIndex: 1,
              explanation: "Past simple question: Did she like? Negative short answer: No, she didn't.",
            },
            {
              id: 'q12-4',
              question: 'Which is the correct negative?',
              options: ["He didn't saw the accident.", "He didn't see the accident.", 'He not see the accident.'],
              correctIndex: 1,
              explanation: "didn't + base form: didn't see (NOT didn't saw).",
            },
            {
              id: 'q12-5',
              question: 'Complete: "Where ___ you buy that jacket?"',
              options: ['do', 'did', 'was'],
              correctIndex: 1,
              explanation: 'Past simple Wh-question: Where + did + subject + base form?',
            },
          ],
        },
        ru: {
          title: "Быстрый квиз — didn't / Did ...?",
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q12-1',
              question: 'Какое предложение правильное?',
              options: ["I didn't went to the shop.", "I didn't go to the shop.", "I not went to the shop."],
              correctIndex: 1,
              explanation: "После didn't используем основу глагола: didn't go (НЕ didn't went).",
            },
            {
              id: 'q12-2',
              question: 'Как задать вопрос в прошедшем простом?',
              options: ['Went you home?', 'Did you went home?', 'Did you go home?'],
              correctIndex: 2,
              explanation: 'Did + подлежащее + основа глагола: Did you go home?',
            },
            {
              id: 'q12-3',
              question: 'Дополните: "___ she like the film?" — "No, she ___."',
              options: ['Did ... did', "Did ... didn't", "Does ... didn't"],
              correctIndex: 1,
              explanation: "Вопрос в прошедшем: Did she like? Краткий ответ: No, she didn't.",
            },
            {
              id: 'q12-4',
              question: 'Какое отрицание правильное?',
              options: ["He didn't saw the accident.", "He didn't see the accident.", 'He not see the accident.'],
              correctIndex: 1,
              explanation: "didn't + основа: didn't see (НЕ didn't saw).",
            },
            {
              id: 'q12-5',
              question: 'Дополните: "Where ___ you buy that jacket?"',
              options: ['do', 'did', 'was'],
              correctIndex: 1,
              explanation: 'Wh-вопрос в прошедшем: Where + did + подлежащее + основа?',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────────
    {
      id: 'step-6-summary',
      type: 'summary',
      content: {
        en: {
          title: "Summary — didn't / Did ...?",
          points: [
            "Negative: subject + <b>didn't</b> + base form → I <b>didn't go</b>, she <b>didn't play</b>.",
            "After didn't, always use the <b>base form</b> — NOT the past form (didn't go, NOT didn't went).",
            'Questions: <b>Did</b> + subject + base form? → <b>Did you go?</b> <b>Did she play?</b>',
            "Short answers: <b>Yes, I did.</b> / <b>No, I didn't.</b> (NOT Yes, I went.)",
            'Wh-questions: What/Where/When/Why/How + <b>did</b> + subject + base form? → <b>Where did you go?</b>',
            '<b>Did</b> and <b>didn\'t</b> are the same for all persons (I, you, he, she, it, we, they).',
          ],
          nextUnit: 'Unit 13 — I was doing (past continuous)',
        },
        ru: {
          title: "Итоги — didn't / Did ...?",
          points: [
            "Отрицание: подлежащее + <b>didn't</b> + основа → I <b>didn't go</b>, she <b>didn't play</b>.",
            "После didn't всегда используем <b>основу</b> глагола — НЕ форму прошедшего (didn't go, НЕ didn't went).",
            'Вопросы: <b>Did</b> + подлежащее + основа? → <b>Did you go?</b> <b>Did she play?</b>',
            "Краткие ответы: <b>Yes, I did.</b> / <b>No, I didn't.</b> (НЕ Yes, I went.)",
            'Wh-вопросы: What/Where/When/Why/How + <b>did</b> + подлежащее + основа? → <b>Where did you go?</b>',
            '<b>Did</b> и <b>didn\'t</b> одинаковы для всех лиц (I, you, he, she, it, we, they).',
          ],
          nextUnit: 'Юнит 13 — I was doing (прошедшее длительное)',
        },
      },
    },
  ],
};

export default unit12;
