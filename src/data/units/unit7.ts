import type { Unit } from '../../types/unit';

// Unit 7: Do you ...? (present simple — questions)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 7)
const unit7: Unit = {
  id: 'unit7',
  number: 7,
  title: {
    en: 'Do you ...?',
    ru: 'Do you ...?',
  },
  description: {
    en: 'Forming questions in the present simple with do and does.',
    ru: 'Образование вопросов в настоящем простом времени с do и does.',
  },
  steps: [
    // ─── Step 1: Forming yes/no questions with do/does ───────────────────────
    {
      id: 'step7-1-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Questions with do / does',
          explanation:
            'To make a present simple question, put <b>do</b> or <b>does</b> before the subject. ' +
            'The main verb stays in the <b>base form</b> (no -s ending).',
          table: {
            headers: ['Subject', 'Auxiliary', 'Example question'],
            rows: [
              ['I / you / we / they', 'do', 'Do you like coffee?'],
              ['he / she / it', 'does', 'Does she work here?'],
            ],
          },
          notes: [
            'With he/she/it, the -s goes on "does" — the main verb has NO -s: Does he work? (NOT Does he works?)',
            'Word order: Do/Does + subject + base verb + ?',
          ],
        },
        ru: {
          title: 'Вопросы с do / does',
          explanation:
            'Для образования вопроса в настоящем простом времени поставьте <b>do</b> или <b>does</b> перед подлежащим. ' +
            'Главный глагол остаётся в <b>базовой форме</b> (без окончания -s).',
          table: {
            headers: ['Подлежащее', 'Вспом. глагол', 'Пример вопроса'],
            rows: [
              ['I / you / we / they', 'do', 'Do you like coffee?'],
              ['he / she / it', 'does', 'Does she work here?'],
            ],
          },
          notes: [
            'С he/she/it окончание -s ставится на "does" — у главного глагола -s НЕТ: Does he work? (НЕ Does he works?)',
            'Порядок слов: Do/Does + подлежащее + основной глагол + ?',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Yes/No questions',
          intro: 'Notice how do/does comes before the subject in each question.',
          items: [
            { english: 'Do you like music?', russian: 'Ты любишь музыку?', highlight: 'Do you' },
            { english: 'Do they live near here?', russian: 'Они живут рядом?', highlight: 'Do they' },
            { english: 'Do we need a ticket?', russian: 'Нам нужен билет?', highlight: 'Do we' },
            { english: 'Does he speak English?', russian: 'Он говорит по-английски?', highlight: 'Does he' },
            { english: 'Does she work in a hospital?', russian: 'Она работает в больнице?', highlight: 'Does she' },
            { english: 'Does it rain a lot here?', russian: 'Здесь часто идёт дождь?', highlight: 'Does it' },
            { english: 'Do your parents live in this city?', russian: 'Твои родители живут в этом городе?', highlight: 'Do your parents' },
            { english: 'Does your sister have a car?', russian: 'У твоей сестры есть машина?', highlight: 'Does your sister' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы да/нет',
          intro: 'Обратите внимание: do/does стоит перед подлежащим в каждом вопросе.',
          items: [
            { english: 'Do you like music?', russian: 'Ты любишь музыку?', highlight: 'Do you' },
            { english: 'Do they live near here?', russian: 'Они живут рядом?', highlight: 'Do they' },
            { english: 'Do we need a ticket?', russian: 'Нам нужен билет?', highlight: 'Do we' },
            { english: 'Does he speak English?', russian: 'Он говорит по-английски?', highlight: 'Does he' },
            { english: 'Does she work in a hospital?', russian: 'Она работает в больнице?', highlight: 'Does she' },
            { english: 'Does it rain a lot here?', russian: 'Здесь часто идёт дождь?', highlight: 'Does it' },
            { english: 'Do your parents live in this city?', russian: 'Твои родители живут в этом городе?', highlight: 'Do your parents' },
            { english: 'Does your sister have a car?', russian: 'У твоей сестры есть машина?', highlight: 'Does your sister' },
          ],
        },
      },
    },

    // ─── Step 2: Wh- questions ────────────────────────────────────────────────
    {
      id: 'step7-2-wh-questions',
      type: 'examples',
      left: {
        en: {
          title: 'Wh- questions',
          explanation:
            'For information questions, put the <b>question word first</b>, then do/does, then the subject and base verb. ' +
            'This is the same pattern as yes/no questions, just with a question word at the start.',
          table: {
            headers: ['Question word', 'do/does', 'Subject', 'Verb'],
            rows: [
              ['What', 'do', 'you', 'do?'],
              ['Where', 'does', 'she', 'live?'],
              ['When', 'do', 'they', 'start?'],
              ['Why', 'does', 'he', 'work late?'],
              ['How often', 'do', 'you', 'exercise?'],
            ],
          },
          notes: [
            '"What do you do?" is a common question meaning "What is your job?"',
          ],
        },
        ru: {
          title: 'Вопросительные слова (wh-questions)',
          explanation:
            'В вопросах с вопросительным словом сначала идёт <b>вопросительное слово</b>, затем do/does, затем подлежащее и основной глагол. ' +
            'Это та же схема, что и в вопросах да/нет, только с вопросительным словом в начале.',
          table: {
            headers: ['Вопрос. слово', 'do/does', 'Подлежащее', 'Глагол'],
            rows: [
              ['What', 'do', 'you', 'do?'],
              ['Where', 'does', 'she', 'live?'],
              ['When', 'do', 'they', 'start?'],
              ['Why', 'does', 'he', 'work late?'],
              ['How often', 'do', 'you', 'exercise?'],
            ],
          },
          notes: [
            '"What do you do?" — распространённый вопрос, означающий "Кем вы работаете?"',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Wh- questions',
          intro: 'Study the word order: question word → do/does → subject → verb.',
          items: [
            { english: 'What do you do?', russian: 'Кем вы работаете? / Что вы делаете?', highlight: 'What do you do' },
            { english: 'Where do you live?', russian: 'Где вы живёте?', highlight: 'Where do you live' },
            { english: 'What does she do?', russian: 'Кем она работает?', highlight: 'What does she do' },
            { english: 'Where does he work?', russian: 'Где он работает?', highlight: 'Where does he work' },
            { english: 'What time do they finish?', russian: 'В котором часу они заканчивают?', highlight: 'What time do they finish' },
            { english: 'Why does she always arrive late?', russian: 'Почему она всегда приходит поздно?', highlight: 'Why does she' },
            { english: 'How much does it cost?', russian: 'Сколько это стоит?', highlight: 'How much does it cost' },
            { english: 'How often do you go to the gym?', russian: 'Как часто вы ходите в спортзал?', highlight: 'How often do you' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы с вопросительными словами',
          intro: 'Запомните порядок слов: вопросительное слово → do/does → подлежащее → глагол.',
          items: [
            { english: 'What do you do?', russian: 'Кем вы работаете? / Что вы делаете?', highlight: 'What do you do' },
            { english: 'Where do you live?', russian: 'Где вы живёте?', highlight: 'Where do you live' },
            { english: 'What does she do?', russian: 'Кем она работает?', highlight: 'What does she do' },
            { english: 'Where does he work?', russian: 'Где он работает?', highlight: 'Where does he work' },
            { english: 'What time do they finish?', russian: 'В котором часу они заканчивают?', highlight: 'What time do they finish' },
            { english: 'Why does she always arrive late?', russian: 'Почему она всегда приходит поздно?', highlight: 'Why does she' },
            { english: 'How much does it cost?', russian: 'Сколько это стоит?', highlight: 'How much does it cost' },
            { english: 'How often do you go to the gym?', russian: 'Как часто вы ходите в спортзал?', highlight: 'How often do you' },
          ],
        },
      },
    },

    // ─── Step 3: Short answers ────────────────────────────────────────────────
    {
      id: 'step7-3-short-answers',
      type: 'theory',
      left: {
        en: {
          title: 'Short answers',
          explanation:
            'Answer yes/no questions with <b>do / does / don\'t / doesn\'t</b>. ' +
            'Do not repeat the main verb in a short answer.',
          table: {
            headers: ['Question', 'Positive answer', 'Negative answer'],
            rows: [
              ['Do you like it?', 'Yes, I do.', "No, I don't."],
              ['Do they know?', 'Yes, they do.', "No, they don't."],
              ['Does he play?', 'Yes, he does.', "No, he doesn't."],
              ['Does she work?', 'Yes, she does.', "No, she doesn't."],
            ],
          },
          notes: [
            'Never use a contraction in a positive short answer: "Yes, I do." (NOT "Yes, I does.")',
            '"Yes, he does." — never "Yes, he do."',
          ],
        },
        ru: {
          title: 'Краткие ответы',
          explanation:
            'Отвечайте на вопросы да/нет с помощью <b>do / does / don\'t / doesn\'t</b>. ' +
            'Основной глагол в кратком ответе не повторяется.',
          table: {
            headers: ['Вопрос', 'Положительный ответ', 'Отрицательный ответ'],
            rows: [
              ['Do you like it?', 'Yes, I do.', "No, I don't."],
              ['Do they know?', 'Yes, they do.', "No, they don't."],
              ['Does he play?', 'Yes, he does.', "No, he doesn't."],
              ['Does she work?', 'Yes, she does.', "No, she doesn't."],
            ],
          },
          notes: [
            'В положительном кратком ответе сокращение не используется: "Yes, I do." (НЕ "Yes, I does.")',
            '"Yes, he does." — но не "Yes, he do."',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Questions & short answers',
          items: [
            { english: 'Do you like football? — Yes, I do.', russian: 'Ты любишь футбол? — Да.' },
            { english: 'Do you like football? — No, I don\'t.', russian: 'Ты любишь футбол? — Нет.' },
            { english: 'Does Tom work here? — Yes, he does.', russian: 'Том работает здесь? — Да.' },
            { english: 'Does Tom work here? — No, he doesn\'t.', russian: 'Том работает здесь? — Нет.' },
            { english: 'Do they speak French? — Yes, they do.', russian: 'Они говорят по-французски? — Да.' },
            { english: 'Does it matter? — No, it doesn\'t.', russian: 'Это важно? — Нет.' },
            { english: 'Does she know the answer? — Yes, she does.', russian: 'Она знает ответ? — Да.' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы и краткие ответы',
          items: [
            { english: 'Do you like football? — Yes, I do.', russian: 'Ты любишь футбол? — Да.' },
            { english: 'Do you like football? — No, I don\'t.', russian: 'Ты любишь футбол? — Нет.' },
            { english: 'Does Tom work here? — Yes, he does.', russian: 'Том работает здесь? — Да.' },
            { english: 'Does Tom work here? — No, he doesn\'t.', russian: 'Том работает здесь? — Нет.' },
            { english: 'Do they speak French? — Yes, they do.', russian: 'Они говорят по-французски? — Да.' },
            { english: 'Does it matter? — No, it doesn\'t.', russian: 'Это важно? — Нет.' },
            { english: 'Does she know the answer? — Yes, she does.', russian: 'Она знает ответ? — Да.' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step7-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Subject', 'Question', 'Short answer'],
            rows: [
              ['I / you / we / they', 'Do you ...?', "Yes, I do. / No, I don't."],
              ['he / she / it', 'Does she ...?', "Yes, she does. / No, she doesn't."],
              ['wh- + I/you/we/they', 'Where do you ...?', '—'],
              ['wh- + he/she/it', 'Where does he ...?', '—'],
            ],
          },
          notes: ['Main verb is always base form (no -s) in questions.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Подлежащее', 'Вопрос', 'Краткий ответ'],
            rows: [
              ['I / you / we / they', 'Do you ...?', "Yes, I do. / No, I don't."],
              ['he / she / it', 'Does she ...?', "Yes, she does. / No, she doesn't."],
              ['wh- + I/you/we/they', 'Where do you ...?', '—'],
              ['wh- + he/she/it', 'Where does he ...?', '—'],
            ],
          },
          notes: ['Основной глагол в вопросе всегда в базовой форме (без -s).'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Complete each question with Do or Does.',
          questions: [
            {
              id: 'p7-1',
              type: 'fill-blank',
              prompt: '___ you speak Spanish?',
              translation: "Ты говоришь по-испански?",
              correctAnswer: 'Do',
              explanation: 'With "you" we use Do → Do you speak?',
            },
            {
              id: 'p7-2',
              type: 'fill-blank',
              prompt: '___ she live in London?',
              translation: "Она живёт в Лондоне?",
              correctAnswer: 'Does',
              explanation: 'With "she" we use Does → Does she live?',
            },
            {
              id: 'p7-3',
              type: 'fill-blank',
              prompt: '___ they work on weekends?',
              translation: "Они работают по выходным?",
              correctAnswer: 'Do',
              explanation: 'With "they" we use Do → Do they work?',
            },
            {
              id: 'p7-4',
              type: 'fill-blank',
              prompt: '___ he like spicy food?',
              translation: "Ему нравится острая еда?",
              correctAnswer: 'Does',
              explanation: 'With "he" we use Does → Does he like?',
            },
            {
              id: 'p7-5',
              type: 'fill-blank',
              prompt: 'Where ___ your parents live?',
              translation: "Где живут твои родители?",
              correctAnswer: 'do',
              explanation: 'With "your parents" (= they) we use do → Where do your parents live?',
            },
            {
              id: 'p7-6',
              type: 'fill-blank',
              prompt: 'What time ___ the shop open?',
              translation: "Во сколько открывается магазин?",
              correctAnswer: 'does',
              explanation: 'With "the shop" (= it) we use does → What time does the shop open?',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Дополните каждый вопрос словом Do или Does.',
          questions: [
            {
              id: 'p7-1',
              type: 'fill-blank',
              prompt: '___ you speak Spanish?',
              translation: "Ты говоришь по-испански?",
              correctAnswer: 'Do',
              explanation: 'С "you" используем Do → Do you speak?',
            },
            {
              id: 'p7-2',
              type: 'fill-blank',
              prompt: '___ she live in London?',
              translation: "Она живёт в Лондоне?",
              correctAnswer: 'Does',
              explanation: 'С "she" используем Does → Does she live?',
            },
            {
              id: 'p7-3',
              type: 'fill-blank',
              prompt: '___ they work on weekends?',
              translation: "Они работают по выходным?",
              correctAnswer: 'Do',
              explanation: 'С "they" используем Do → Do they work?',
            },
            {
              id: 'p7-4',
              type: 'fill-blank',
              prompt: '___ he like spicy food?',
              translation: "Ему нравится острая еда?",
              correctAnswer: 'Does',
              explanation: 'С "he" используем Does → Does he like?',
            },
            {
              id: 'p7-5',
              type: 'fill-blank',
              prompt: 'Where ___ your parents live?',
              translation: "Где живут твои родители?",
              correctAnswer: 'do',
              explanation: 'С "your parents" (= they) используем do → Where do your parents live?',
            },
            {
              id: 'p7-6',
              type: 'fill-blank',
              prompt: 'What time ___ the shop open?',
              translation: "Во сколько открывается магазин?",
              correctAnswer: 'does',
              explanation: 'С "the shop" (= it) используем does → What time does the shop open?',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step7-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Do you ...?',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q7-1',
              question: 'Which question is correct?',
              options: [
                'Does she works here?',
                'Does she work here?',
                'Do she work here?',
              ],
              correctIndex: 1,
              explanation: 'With "she" use Does, and the main verb stays in base form: Does she work? (NOT works)',
            },
            {
              id: 'q7-2',
              question: 'Choose the correct short answer to "Do you play tennis?"',
              options: [
                'Yes, I plays.',
                'Yes, I do.',
                'Yes, I does.',
              ],
              correctIndex: 1,
              explanation: 'Short answer with "I": Yes, I do. (Not "does" — that is for he/she/it)',
            },
            {
              id: 'q7-3',
              question: 'Which sentence is correct?',
              options: [
                'Where do he live?',
                'Where does he lives?',
                'Where does he live?',
              ],
              correctIndex: 2,
              explanation: 'With "he" use does, and the main verb is base form: Where does he live?',
            },
            {
              id: 'q7-4',
              question: 'How do you ask "Что она делает?" in English?',
              options: [
                'What does she does?',
                'What she does?',
                'What does she do?',
              ],
              correctIndex: 2,
              explanation: 'Wh- question with she: What + does + she + base verb → What does she do?',
            },
            {
              id: 'q7-5',
              question: 'Choose the correct negative short answer to "Does he know?"',
              options: [
                "No, he don't.",
                "No, he doesn't.",
                "No, he isn't.",
              ],
              correctIndex: 1,
              explanation: 'With "he" the negative short answer uses doesn\'t: No, he doesn\'t.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Do you ...?',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q7-1',
              question: 'Какой вопрос правильный?',
              options: [
                'Does she works here?',
                'Does she work here?',
                'Do she work here?',
              ],
              correctIndex: 1,
              explanation: 'С "she" используем Does, а главный глагол остаётся в базовой форме: Does she work? (НЕ works)',
            },
            {
              id: 'q7-2',
              question: 'Выберите правильный краткий ответ на "Do you play tennis?"',
              options: [
                'Yes, I plays.',
                'Yes, I do.',
                'Yes, I does.',
              ],
              correctIndex: 1,
              explanation: 'Краткий ответ с "I": Yes, I do. ("does" используется только с he/she/it)',
            },
            {
              id: 'q7-3',
              question: 'Какое предложение правильное?',
              options: [
                'Where do he live?',
                'Where does he lives?',
                'Where does he live?',
              ],
              correctIndex: 2,
              explanation: 'С "he" используем does, а главный глагол в базовой форме: Where does he live?',
            },
            {
              id: 'q7-4',
              question: 'Как по-английски спросить "Что она делает?"',
              options: [
                'What does she does?',
                'What she does?',
                'What does she do?',
              ],
              correctIndex: 2,
              explanation: 'Вопрос с wh- и she: What + does + she + базовый глагол → What does she do?',
            },
            {
              id: 'q7-5',
              question: 'Выберите правильный отрицательный краткий ответ на "Does he know?"',
              options: [
                "No, he don't.",
                "No, he doesn't.",
                "No, he isn't.",
              ],
              correctIndex: 1,
              explanation: 'С "he" в отрицательном кратком ответе используем doesn\'t: No, he doesn\'t.',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step7-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — Do you ...?',
          points: [
            'Use <b>do</b> in questions with I / you / we / they → Do you work?',
            'Use <b>does</b> in questions with he / she / it → Does she work?',
            'The main verb is always the <b>base form</b> — no -s ending in questions',
            'Wh- questions: question word + <b>do/does</b> + subject + verb → Where do you live?',
            'Short answers use <b>do/does/don\'t/doesn\'t</b> — do not repeat the main verb',
            'Negative short answers: <b>don\'t</b> (I/you/we/they) and <b>doesn\'t</b> (he/she/it)',
          ],
          nextUnit: 'Unit 8 — I am doing vs I do',
        },
        ru: {
          title: 'Итоги — Do you ...?',
          points: [
            'С I / you / we / they в вопросах используем <b>do</b> → Do you work?',
            'С he / she / it в вопросах используем <b>does</b> → Does she work?',
            'Главный глагол всегда в <b>базовой форме</b> — без окончания -s в вопросах',
            'Вопросы с вопросительным словом: вопрос. слово + <b>do/does</b> + подлежащее + глагол → Where do you live?',
            'В кратких ответах используем <b>do/does/don\'t/doesn\'t</b> — главный глагол не повторяем',
            'Отрицательные краткие ответы: <b>don\'t</b> (I/you/we/they) и <b>doesn\'t</b> (he/she/it)',
          ],
          nextUnit: 'Юнит 8 — I am doing vs I do',
        },
      },
    },
  ],
};

export default unit7;
