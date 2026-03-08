import type { Unit } from '../../types/unit';

// Unit 6: I don't ... (present simple — negative)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 6)
const unit6: Unit = {
  id: 'unit6',
  number: 6,
  title: {
    en: "I don't ... (present simple negative)",
    ru: 'I don\'t ... (отрицание в настоящем простом)',
  },
  description: {
    en: 'How to make negative sentences in the present simple using don\'t and doesn\'t.',
    ru: 'Как образовывать отрицательные предложения в настоящем простом времени с помощью don\'t и doesn\'t.',
  },
  steps: [
    // ─── Step 1: Negative forms — don't / doesn't ────────────────────────────
    {
      id: 'step-6-1-negative',
      type: 'theory',
      left: {
        en: {
          title: "Negative forms: don't / doesn't",
          explanation:
            'To make a negative in the present simple, use <b>do not (don\'t)</b> or ' +
            '<b>does not (doesn\'t)</b> before the base verb. ' +
            'The choice depends on the subject.',
          table: {
            headers: ['Subject', 'Negative helper', 'Base verb', 'Example'],
            rows: [
              ['I', "don't", 'work', "I don't work at weekends."],
              ['you', "don't", 'like', "You don't like tea."],
              ['we', "don't", 'have', "We don't have a car."],
              ['they', "don't", 'live', "They don't live here."],
              ['he', "doesn't", 'work', "He doesn't work at weekends."],
              ['she', "doesn't", 'like', "She doesn't like tea."],
              ['it', "doesn't", 'matter', "It doesn't matter."],
            ],
          },
          notes: [
            "Use <b>don't</b> with I / you / we / they.",
            "Use <b>doesn't</b> with he / she / it.",
          ],
        },
        ru: {
          title: "Отрицательные формы: don't / doesn't",
          explanation:
            'Для образования отрицания в настоящем простом используйте <b>do not (don\'t)</b> или ' +
            '<b>does not (doesn\'t)</b> перед основной формой глагола. ' +
            'Выбор зависит от подлежащего.',
          table: {
            headers: ['Подлежащее', 'Вспомогательный глагол', 'Основной глагол', 'Пример'],
            rows: [
              ['I (я)', "don't", 'work', "I don't work at weekends."],
              ['you (ты/вы)', "don't", 'like', "You don't like tea."],
              ['we (мы)', "don't", 'have', "We don't have a car."],
              ['they (они)', "don't", 'live', "They don't live here."],
              ['he (он)', "doesn't", 'work', "He doesn't work at weekends."],
              ['she (она)', "doesn't", 'like', "She doesn't like tea."],
              ['it (оно)', "doesn't", 'matter', "It doesn't matter."],
            ],
          },
          notes: [
            "<b>don't</b> используется с I / you / we / they.",
            "<b>doesn't</b> используется с he / she / it.",
          ],
        },
      },
      right: {
        en: {
          title: "Examples — Negative sentences",
          intro: "Study these sentences. Notice don't with I/you/we/they, and doesn't with he/she/it.",
          items: [
            { english: "I don't drink coffee.", russian: 'Я не пью кофе.', highlight: "don't" },
            { english: "You don't understand.", russian: 'Ты не понимаешь.', highlight: "don't" },
            { english: "We don't work on Sundays.", russian: 'Мы не работаем по воскресеньям.', highlight: "don't" },
            { english: "They don't live in London.", russian: 'Они не живут в Лондоне.', highlight: "don't" },
            { english: "He doesn't eat meat.", russian: 'Он не ест мясо.', highlight: "doesn't" },
            { english: "She doesn't like horror films.", russian: 'Она не любит фильмы ужасов.', highlight: "doesn't" },
            { english: "It doesn't rain much here.", russian: 'Здесь мало дождей.', highlight: "doesn't" },
            { english: "My brother doesn't have a car.", russian: 'У моего брата нет машины.', highlight: "doesn't" },
            { english: "The shop doesn't open on Mondays.", russian: 'Магазин не работает по понедельникам.', highlight: "doesn't" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицательные предложения',
          intro: "Изучите эти предложения. Обратите внимание: don't с I/you/we/they, doesn't с he/she/it.",
          items: [
            { english: "I don't drink coffee.", russian: 'Я не пью кофе.', highlight: "don't" },
            { english: "You don't understand.", russian: 'Ты не понимаешь.', highlight: "don't" },
            { english: "We don't work on Sundays.", russian: 'Мы не работаем по воскресеньям.', highlight: "don't" },
            { english: "They don't live in London.", russian: 'Они не живут в Лондоне.', highlight: "don't" },
            { english: "He doesn't eat meat.", russian: 'Он не ест мясо.', highlight: "doesn't" },
            { english: "She doesn't like horror films.", russian: 'Она не любит фильмы ужасов.', highlight: "doesn't" },
            { english: "It doesn't rain much here.", russian: 'Здесь мало дождей.', highlight: "doesn't" },
            { english: "My brother doesn't have a car.", russian: 'У моего брата нет машины.', highlight: "doesn't" },
            { english: "The shop doesn't open on Mondays.", russian: 'Магазин не работает по понедельникам.', highlight: "doesn't" },
          ],
        },
      },
    },

    // ─── Step 2: The -s rule — doesn't takes the -s ───────────────────────────
    {
      id: 'step-6-2-no-s',
      type: 'examples',
      left: {
        en: {
          title: "doesn't absorbs the -s",
          explanation:
            'In the positive, we add <b>-s / -es</b> to the verb for he / she / it. ' +
            'In the negative, <b>doesn\'t</b> carries that meaning — so the main verb ' +
            'goes back to the <b>base form</b> (no -s).',
          table: {
            headers: ['Positive', 'Negative (correct)', 'Negative (wrong)'],
            rows: [
              ['He work<b>s</b>.', "He doesn't work.", "He doesn't work<b>s</b>. ✗"],
              ['She like<b>s</b> tea.', "She doesn't like tea.", "She doesn't like<b>s</b> tea. ✗"],
              ['He go<b>es</b> to the gym.', "He doesn't go to the gym.", "He doesn't go<b>es</b> to the gym. ✗"],
              ['She ha<b>s</b> a dog.', "She doesn't have a dog.", "She doesn't ha<b>s</b> a dog. ✗"],
            ],
          },
          notes: [
            'The <b>-s / -es</b> belongs to <em>doesn\'t</em>, not to the main verb.',
            '"have" reverts to "have" after doesn\'t: she doesn\'t <b>have</b> (NOT doesn\'t has).',
          ],
        },
        ru: {
          title: "doesn't берёт на себя -s",
          explanation:
            'В утвердительных предложениях мы добавляем <b>-s / -es</b> к глаголу для he / she / it. ' +
            'В отрицательных <b>doesn\'t</b> уже содержит это значение — поэтому основной глагол ' +
            'возвращается в <b>базовую форму</b> (без -s).',
          table: {
            headers: ['Утверждение', 'Отрицание (правильно)', 'Отрицание (неправильно)'],
            rows: [
              ['He work<b>s</b>.', "He doesn't work.", "He doesn't work<b>s</b>. ✗"],
              ['She like<b>s</b> tea.', "She doesn't like tea.", "She doesn't like<b>s</b> tea. ✗"],
              ['He go<b>es</b> to the gym.', "He doesn't go to the gym.", "He doesn't go<b>es</b> to the gym. ✗"],
              ['She ha<b>s</b> a dog.', "She doesn't have a dog.", "She doesn't ha<b>s</b> a dog. ✗"],
            ],
          },
          notes: [
            'Окончание <b>-s / -es</b> принадлежит <em>doesn\'t</em>, а не основному глаголу.',
            '"have" возвращается в форму "have" после doesn\'t: she doesn\'t <b>have</b> (НЕ doesn\'t has).',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Base form after doesn\'t',
          intro: 'Compare the positive and negative forms. The main verb stays in the base form after doesn\'t.',
          items: [
            { english: "He works in a bank. / He doesn't work in a bank.", russian: 'Он работает в банке. / Он не работает в банке.', highlight: "doesn't work" },
            { english: "She speaks Spanish. / She doesn't speak Spanish.", russian: 'Она говорит по-испански. / Она не говорит по-испански.', highlight: "doesn't speak" },
            { english: "My cat eats fish. / My cat doesn't eat fish.", russian: 'Моя кошка ест рыбу. / Моя кошка не ест рыбу.', highlight: "doesn't eat" },
            { english: "Tom studies hard. / Tom doesn't study hard.", russian: 'Том усердно учится. / Том не учится усердно.', highlight: "doesn't study" },
            { english: "She has a bike. / She doesn't have a bike.", russian: 'У неё есть велосипед. / У неё нет велосипеда.', highlight: "doesn't have" },
            { english: "He goes swimming on Fridays. / He doesn't go swimming on Fridays.", russian: 'Он ходит плавать по пятницам. / Он не ходит плавать по пятницам.', highlight: "doesn't go" },
            { english: "It costs a lot. / It doesn't cost a lot.", russian: 'Это стоит много. / Это не стоит много.', highlight: "doesn't cost" },
          ],
        },
        ru: {
          title: "Примеры — Базовая форма после doesn't",
          intro: "Сравните утвердительные и отрицательные формы. Основной глагол остаётся в базовой форме после doesn't.",
          items: [
            { english: "He works in a bank. / He doesn't work in a bank.", russian: 'Он работает в банке. / Он не работает в банке.', highlight: "doesn't work" },
            { english: "She speaks Spanish. / She doesn't speak Spanish.", russian: 'Она говорит по-испански. / Она не говорит по-испански.', highlight: "doesn't speak" },
            { english: "My cat eats fish. / My cat doesn't eat fish.", russian: 'Моя кошка ест рыбу. / Моя кошка не ест рыбу.', highlight: "doesn't eat" },
            { english: "Tom studies hard. / Tom doesn't study hard.", russian: 'Том усердно учится. / Том не учится усердно.', highlight: "doesn't study" },
            { english: "She has a bike. / She doesn't have a bike.", russian: 'У неё есть велосипед. / У неё нет велосипеда.', highlight: "doesn't have" },
            { english: "He goes swimming on Fridays. / He doesn't go swimming on Fridays.", russian: 'Он ходит плавать по пятницам. / Он не ходит плавать по пятницам.', highlight: "doesn't go" },
            { english: "It costs a lot. / It doesn't cost a lot.", russian: 'Это стоит много. / Это не стоит много.', highlight: "doesn't cost" },
          ],
        },
      },
    },

    // ─── Step 3: Common mistakes + "I don't" in short answers ────────────────
    {
      id: 'step-6-3-mistakes',
      type: 'theory',
      left: {
        en: {
          title: 'Common mistakes & short answers',
          explanation:
            'Two very common errors: using <b>don\'t</b> instead of <b>doesn\'t</b> for he / she / it, ' +
            'and keeping the <b>-s</b> on the main verb after doesn\'t. ' +
            'Also, short negative answers use <b>don\'t / doesn\'t</b> on their own.',
          table: {
            headers: ['Wrong', 'Correct', 'Rule'],
            rows: [
              ["He don't work.", "He doesn't work.", "he/she/it → doesn't"],
              ["She doesn't works.", "She doesn't work.", 'Base verb after doesn\'t'],
              ["They doesn't eat.", "They don't eat.", "they → don't"],
              ["Does he work? — No, he not.", "No, he doesn't.", "Short answer: doesn't"],
              ["Do you like it? — No, I not.", "No, I don't.", "Short answer: don't"],
            ],
          },
          notes: [
            'Short answers: "Do you like it?" → "Yes, I do." / "No, I don\'t."',
            'Short answers: "Does she work?" → "Yes, she does." / "No, she doesn\'t."',
          ],
        },
        ru: {
          title: 'Типичные ошибки и краткие ответы',
          explanation:
            'Две очень распространённые ошибки: использование <b>don\'t</b> вместо <b>doesn\'t</b> для he / she / it, ' +
            'и сохранение <b>-s</b> у основного глагола после doesn\'t. ' +
            'Кроме того, в кратких отрицательных ответах используется <b>don\'t / doesn\'t</b> самостоятельно.',
          table: {
            headers: ['Неправильно', 'Правильно', 'Правило'],
            rows: [
              ["He don't work.", "He doesn't work.", "he/she/it → doesn't"],
              ["She doesn't works.", "She doesn't work.", "Базовая форма после doesn't"],
              ["They doesn't eat.", "They don't eat.", "they → don't"],
              ["Does he work? — No, he not.", "No, he doesn't.", "Краткий ответ: doesn't"],
              ["Do you like it? — No, I not.", "No, I don't.", "Краткий ответ: don't"],
            ],
          },
          notes: [
            '"Do you like it?" → "Yes, I do." / "No, I don\'t."',
            '"Does she work?" → "Yes, she does." / "No, she doesn\'t."',
          ],
        },
      },
      right: {
        en: {
          title: "Examples — Correct negatives & short answers",
          items: [
            { english: "Do you like classical music? — No, I don't.", russian: 'Ты любишь классическую музыку? — Нет.', highlight: "don't" },
            { english: "Does he drive to work? — No, he doesn't.", russian: 'Он ездит на работу на машине? — Нет.', highlight: "doesn't" },
            { english: "Do they speak French? — No, they don't.", russian: 'Они говорят по-французски? — Нет.', highlight: "don't" },
            { english: "Does your sister live here? — No, she doesn't.", russian: 'Твоя сестра живёт здесь? — Нет.', highlight: "doesn't" },
            { english: "I don't watch much TV. Do you? — No, I don't.", russian: 'Я почти не смотрю телевизор. А ты? — Я тоже нет.', highlight: "don't" },
            { english: "He doesn't like sport. Does she? — No, she doesn't.", russian: 'Он не любит спорт. А она? — Тоже нет.', highlight: "doesn't" },
            { english: "We don't know the answer.", russian: 'Мы не знаем ответа.', highlight: "don't" },
          ],
        },
        ru: {
          title: "Примеры — Правильные отрицания и краткие ответы",
          items: [
            { english: "Do you like classical music? — No, I don't.", russian: 'Ты любишь классическую музыку? — Нет.', highlight: "don't" },
            { english: "Does he drive to work? — No, he doesn't.", russian: 'Он ездит на работу на машине? — Нет.', highlight: "doesn't" },
            { english: "Do they speak French? — No, they don't.", russian: 'Они говорят по-французски? — Нет.', highlight: "don't" },
            { english: "Does your sister live here? — No, she doesn't.", russian: 'Твоя сестра живёт здесь? — Нет.', highlight: "doesn't" },
            { english: "I don't watch much TV. Do you? — No, I don't.", russian: 'Я почти не смотрю телевизор. А ты? — Я тоже нет.', highlight: "don't" },
            { english: "He doesn't like sport. Does she? — No, she doesn't.", russian: 'Он не любит спорт. А она? — Тоже нет.', highlight: "doesn't" },
            { english: "We don't know the answer.", russian: 'Мы не знаем ответа.', highlight: "don't" },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step-6-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Subject', 'Negative form', 'Key rule'],
            rows: [
              ['I / you / we / they', "don't + base verb", "don't work, don't like"],
              ['he / she / it', "doesn't + base verb", "doesn't work, doesn't like"],
              ['he / she / it ✗', "doesn't + verb-s", "NEVER: doesn't works"],
              ['Short answer (–)', "No, I don't. / No, he doesn't.", ''],
            ],
          },
          notes: [
            "After doesn't, always use the base verb (no -s).",
            '"have" → doesn\'t have (NOT doesn\'t has)',
          ],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Подлежащее', 'Отрицательная форма', 'Ключевое правило'],
            rows: [
              ['I / you / we / they', "don't + основной глагол", "don't work, don't like"],
              ['he / she / it', "doesn't + основной глагол", "doesn't work, doesn't like"],
              ['he / she / it ✗', "doesn't + глагол-s", "НИКОГДА: doesn't works"],
              ['Краткий ответ (–)', "No, I don't. / No, he doesn't.", ''],
            ],
          },
          notes: [
            "После doesn't всегда используйте базовую форму глагола (без -s).",
            '"have" → doesn\'t have (НЕ doesn\'t has)',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: "Write don't or doesn't to complete each sentence.",
          questions: [
            {
              id: 'p6-1',
              type: 'fill-blank',
              prompt: "I ___ like cold weather.",
              correctAnswer: "don't",
              explanation: "I → don't",
            },
            {
              id: 'p6-2',
              type: 'fill-blank',
              prompt: "She ___ drink coffee.",
              correctAnswer: "doesn't",
              explanation: "she → doesn't",
            },
            {
              id: 'p6-3',
              type: 'fill-blank',
              prompt: "They ___ live near here.",
              correctAnswer: "don't",
              explanation: "they → don't",
            },
            {
              id: 'p6-4',
              type: 'fill-blank',
              prompt: "My brother ___ have a car.",
              correctAnswer: "doesn't",
              explanation: "my brother = he → doesn't",
            },
            {
              id: 'p6-5',
              type: 'fill-blank',
              prompt: "We ___ work on Saturdays.",
              correctAnswer: "don't",
              explanation: "we → don't",
            },
            {
              id: 'p6-6',
              type: 'fill-blank',
              prompt: "It ___ matter.",
              correctAnswer: "doesn't",
              explanation: "it → doesn't",
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: "Вставьте don't или doesn't, чтобы завершить каждое предложение.",
          questions: [
            {
              id: 'p6-1',
              type: 'fill-blank',
              prompt: "I ___ like cold weather.",
              correctAnswer: "don't",
              explanation: "I → don't",
            },
            {
              id: 'p6-2',
              type: 'fill-blank',
              prompt: "She ___ drink coffee.",
              correctAnswer: "doesn't",
              explanation: "she → doesn't",
            },
            {
              id: 'p6-3',
              type: 'fill-blank',
              prompt: "They ___ live near here.",
              correctAnswer: "don't",
              explanation: "they → don't",
            },
            {
              id: 'p6-4',
              type: 'fill-blank',
              prompt: "My brother ___ have a car.",
              correctAnswer: "doesn't",
              explanation: "my brother = he → doesn't",
            },
            {
              id: 'p6-5',
              type: 'fill-blank',
              prompt: "We ___ work on Saturdays.",
              correctAnswer: "don't",
              explanation: "we → don't",
            },
            {
              id: 'p6-6',
              type: 'fill-blank',
              prompt: "It ___ matter.",
              correctAnswer: "doesn't",
              explanation: "it → doesn't",
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-6-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: "Quick Quiz — don't / doesn't",
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q6-1',
              question: 'Which sentence is correct?',
              options: [
                "He don't eat meat.",
                "He doesn't eat meat.",
                "He doesn't eats meat.",
              ],
              correctIndex: 1,
              explanation: "he → doesn't. The main verb stays in the base form: eat (not eats).",
            },
            {
              id: 'q6-2',
              question: 'Complete: "They ___ speak English very well."',
              options: ["doesn't", "don't", "not"],
              correctIndex: 1,
              explanation: "they → don't",
            },
            {
              id: 'q6-3',
              question: 'Which is the correct negative of "She has a dog."?',
              options: [
                "She doesn't has a dog.",
                "She don't have a dog.",
                "She doesn't have a dog.",
              ],
              correctIndex: 2,
              explanation: "she → doesn't. After doesn't, use the base form: have (not has).",
            },
            {
              id: 'q6-4',
              question: '"Do you like jazz?" — What is the correct short negative answer?',
              options: ["No, I not.", "No, I don't.", "No, I doesn't."],
              correctIndex: 1,
              explanation: "Short negative answer with I → No, I don't.",
            },
            {
              id: 'q6-5',
              question: 'Which sentence has a mistake?',
              options: [
                "I don't know the answer.",
                "She doesn't go to the gym.",
                "My parents doesn't have a computer.",
              ],
              correctIndex: 2,
              explanation: "my parents = they (plural) → don't, not doesn't. Correct: My parents don't have a computer.",
            },
          ],
        },
        ru: {
          title: "Быстрый квиз — don't / doesn't",
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q6-1',
              question: 'Какое предложение правильное?',
              options: [
                "He don't eat meat.",
                "He doesn't eat meat.",
                "He doesn't eats meat.",
              ],
              correctIndex: 1,
              explanation: "he → doesn't. Основной глагол остаётся в базовой форме: eat (не eats).",
            },
            {
              id: 'q6-2',
              question: 'Дополните: "They ___ speak English very well."',
              options: ["doesn't", "don't", "not"],
              correctIndex: 1,
              explanation: "they → don't",
            },
            {
              id: 'q6-3',
              question: 'Какое правильное отрицание предложения "She has a dog."?',
              options: [
                "She doesn't has a dog.",
                "She don't have a dog.",
                "She doesn't have a dog.",
              ],
              correctIndex: 2,
              explanation: "she → doesn't. После doesn't используем базовую форму: have (не has).",
            },
            {
              id: 'q6-4',
              question: '"Do you like jazz?" — Какой правильный краткий отрицательный ответ?',
              options: ["No, I not.", "No, I don't.", "No, I doesn't."],
              correctIndex: 1,
              explanation: "Краткий отрицательный ответ с I → No, I don't.",
            },
            {
              id: 'q6-5',
              question: 'В каком предложении есть ошибка?',
              options: [
                "I don't know the answer.",
                "She doesn't go to the gym.",
                "My parents doesn't have a computer.",
              ],
              correctIndex: 2,
              explanation: "my parents = they (множественное число) → don't, не doesn't. Правильно: My parents don't have a computer.",
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-6-6-summary',
      type: 'summary',
      content: {
        en: {
          title: "Summary — don't / doesn't",
          points: [
            "Use <b>don't</b> (do not) with <em>I / you / we / they</em>: I don't like, they don't work.",
            "Use <b>doesn't</b> (does not) with <em>he / she / it</em>: she doesn't live, it doesn't matter.",
            "After <b>doesn't</b>, always use the <b>base verb</b> — never add -s: she doesn't <b>work</b> (NOT doesn't works).",
            '"have" → doesn\'t <b>have</b> (NOT doesn\'t has): She doesn\'t have a cat.',
            'Short negative answers: "No, I <b>don\'t</b>." / "No, she <b>doesn\'t</b>."',
            'Common mistake: <em>He don\'t work</em> ✗ — always <em>He <b>doesn\'t</b> work</em> ✓.',
          ],
          nextUnit: "Unit 7 — Do you ...? (present simple questions)",
        },
        ru: {
          title: "Итоги — don't / doesn't",
          points: [
            "<b>don't</b> (do not) используется с <em>I / you / we / they</em>: I don't like, they don't work.",
            "<b>doesn't</b> (does not) используется с <em>he / she / it</em>: she doesn't live, it doesn't matter.",
            "После <b>doesn't</b> всегда используется <b>базовая форма</b> глагола — без -s: she doesn't <b>work</b> (НЕ doesn't works).",
            '"have" → doesn\'t <b>have</b> (НЕ doesn\'t has): She doesn\'t have a cat.',
            'Краткие отрицательные ответы: "No, I <b>don\'t</b>." / "No, she <b>doesn\'t</b>."',
            'Типичная ошибка: <em>He don\'t work</em> ✗ — правильно: <em>He <b>doesn\'t</b> work</em> ✓.',
          ],
          nextUnit: 'Юнит 7 — Do you ...? (вопросы в настоящем простом)',
        },
      },
    },
  ],
};

export default unit6;
