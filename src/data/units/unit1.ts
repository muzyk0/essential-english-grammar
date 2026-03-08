import type { Unit } from '../../types/unit';

// Unit 1: am / is / are
// Based on Essential Grammar in Use by Raymond Murphy (Units 1–2)
const unit1: Unit = {
  id: 'unit1',
  number: 1,
  title: {
    en: 'am / is / are',
    ru: 'am / is / are',
  },
  description: {
    en: 'Present simple of the verb "to be" — positive, negative and question forms.',
    ru: 'Настоящее простое время глагола "to be" — утвердительная, отрицательная и вопросительная формы.',
  },
  steps: [
    // ─── Step 1: Positive forms (theory + examples) ──────────────────────────
    {
      id: 'step-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'Positive forms of "to be"',
          explanation:
            'We use <b>am / is / are</b> as the present simple of the verb <em>to be</em>. ' +
            'The form depends on the subject (who or what we are talking about).',
          table: {
            headers: ['Subject', 'Full form', 'Contraction'],
            rows: [
              ['I', 'I am', "I'm"],
              ['he', 'he is', "he's"],
              ['she', 'she is', "she's"],
              ['it', 'it is', "it's"],
              ['we', 'we are', "we're"],
              ['you', 'you are', "you're"],
              ['they', 'they are', "they're"],
            ],
          },
          notes: [
            'In spoken and informal written English we almost always use contractions (I\'m, he\'s, etc.).',
            '"It" is used for things, animals and impersonal subjects (weather, time, etc.).',
          ],
        },
        ru: {
          title: 'Утвердительные формы глагола "to be"',
          explanation:
            'Мы используем <b>am / is / are</b> как настоящее простое время глагола <em>to be</em> (быть). ' +
            'Форма зависит от подлежащего (о ком или о чём идёт речь).',
          table: {
            headers: ['Подлежащее', 'Полная форма', 'Краткая форма'],
            rows: [
              ['I (я)', 'I am', "I'm"],
              ['he (он)', 'he is', "he's"],
              ['she (она)', 'she is', "she's"],
              ['it (оно)', 'it is', "it's"],
              ['we (мы)', 'we are', "we're"],
              ['you (ты/вы)', 'you are', "you're"],
              ['they (они)', 'they are', "they're"],
            ],
          },
          notes: [
            'В разговорной и неформальной письменной речи почти всегда используются краткие формы (I\'m, he\'s и т.д.).',
            '"It" используется для предметов, животных и безличных подлежащих (погода, время и т.д.).',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Positive sentences',
          intro: 'Study these sentences. Notice how we use am / is / are with different subjects.',
          items: [
            { english: "I'm tired.", russian: 'Я устал(а).', highlight: "I'm" },
            { english: "I'm 25 years old.", russian: 'Мне 25 лет.', highlight: "I'm" },
            { english: "I'm from London.", russian: 'Я из Лондона.', highlight: "I'm" },
            { english: "Tom is a student.", russian: 'Том — студент.', highlight: 'is' },
            { english: "She's a doctor.", russian: 'Она врач.', highlight: "She's" },
            { english: "It's cold today.", russian: 'Сегодня холодно.', highlight: "It's" },
            { english: "We're at home.", russian: 'Мы дома.', highlight: "We're" },
            { english: "They're from Spain.", russian: 'Они из Испании.', highlight: "They're" },
            { english: "My keys are on the table.", russian: 'Мои ключи на столе.', highlight: 'are' },
          ],
        },
        ru: {
          title: 'Примеры — Утвердительные предложения',
          intro: 'Изучите эти предложения. Обратите внимание, как используются am / is / are с разными подлежащими.',
          items: [
            { english: "I'm tired.", russian: 'Я устал(а).', highlight: "I'm" },
            { english: "I'm 25 years old.", russian: 'Мне 25 лет.', highlight: "I'm" },
            { english: "I'm from London.", russian: 'Я из Лондона.', highlight: "I'm" },
            { english: "Tom is a student.", russian: 'Том — студент.', highlight: 'is' },
            { english: "She's a doctor.", russian: 'Она врач.', highlight: "She's" },
            { english: "It's cold today.", russian: 'Сегодня холодно.', highlight: "It's" },
            { english: "We're at home.", russian: 'Мы дома.', highlight: "We're" },
            { english: "They're from Spain.", russian: 'Они из Испании.', highlight: "They're" },
            { english: "My keys are on the table.", russian: 'Мои ключи на столе.', highlight: 'are' },
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
            'To make a negative sentence, add <b>not</b> after am / is / are. ' +
            'We use contractions in everyday speech.',
          table: {
            headers: ['Full form', 'Contraction'],
            rows: [
              ['I am not', "I'm not"],
              ['he is not', "he isn't  / he's not"],
              ['she is not', "she isn't  / she's not"],
              ['it is not', "it isn't  / it's not"],
              ['we are not', "we aren't  / we're not"],
              ['you are not', "you aren't  / you're not"],
              ['they are not', "they aren't  / they're not"],
            ],
          },
          notes: [
            'Note: "I am not" has only one contraction: I\'m not. (NOT "I amn\'t")',
            'Both contractions for he/she/it/we/you/they are equally correct.',
          ],
        },
        ru: {
          title: 'Отрицательные формы',
          explanation:
            'Для образования отрицания добавьте <b>not</b> после am / is / are. ' +
            'В повседневной речи используют краткие формы.',
          table: {
            headers: ['Полная форма', 'Краткая форма'],
            rows: [
              ['I am not', "I'm not"],
              ['he is not', "he isn't  / he's not"],
              ['she is not', "she isn't  / she's not"],
              ['it is not', "it isn't  / it's not"],
              ['we are not', "we aren't  / we're not"],
              ['you are not', "you aren't  / you're not"],
              ['they are not', "they aren't  / they're not"],
            ],
          },
          notes: [
            'Внимание: "I am not" имеет только одну краткую форму: I\'m not. (НЕ "I amn\'t")',
            'Обе краткие формы для he/she/it/we/you/they одинаково правильны.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negative sentences',
          intro: 'Compare positive and negative forms in context.',
          items: [
            { english: "I'm tired but I'm not hungry.", russian: 'Я устал(а), но я не голоден(на).', highlight: "I'm not" },
            { english: "She isn't at home.", russian: 'Её нет дома.', highlight: "isn't" },
            { english: "He's a teacher. He isn't a doctor.", russian: 'Он учитель. Он не врач.', highlight: "isn't" },
            { english: "The weather isn't good today.", russian: 'Погода сегодня нехорошая.', highlight: "isn't" },
            { english: "They aren't from England.", russian: 'Они не из Англии.', highlight: "aren't" },
            { english: "We aren't late, are we?", russian: 'Мы не опоздали, правда?', highlight: "aren't" },
            { english: "My phone isn't new.", russian: 'Мой телефон не новый.', highlight: "isn't" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицательные предложения',
          intro: 'Сравните утвердительные и отрицательные формы в контексте.',
          items: [
            { english: "I'm tired but I'm not hungry.", russian: 'Я устал(а), но я не голоден(на).', highlight: "I'm not" },
            { english: "She isn't at home.", russian: 'Её нет дома.', highlight: "isn't" },
            { english: "He's a teacher. He isn't a doctor.", russian: 'Он учитель. Он не врач.', highlight: "isn't" },
            { english: "The weather isn't good today.", russian: 'Погода сегодня нехорошая.', highlight: "isn't" },
            { english: "They aren't from England.", russian: 'Они не из Англии.', highlight: "aren't" },
            { english: "We aren't late, are we?", russian: 'Мы не опоздали, правда?', highlight: "aren't" },
            { english: "My phone isn't new.", russian: 'Мой телефон не новый.', highlight: "isn't" },
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
            'To make a question, put <b>am / is / are before the subject</b>. ' +
            'The word order changes: Subject + is → Is + subject?',
          table: {
            headers: ['Statement', 'Question'],
            rows: [
              ['I am late.', 'Am I late?'],
              ['He is a teacher.', 'Is he a teacher?'],
              ['She is at home.', 'Is she at home?'],
              ['It is cold.', 'Is it cold?'],
              ['We are ready.', 'Are we ready?'],
              ['You are a student.', 'Are you a student?'],
              ['They are from Italy.', 'Are they from Italy?'],
            ],
          },
          notes: [
            'Short answers: "Yes, I am." / "No, I\'m not."',
            'Short answers: "Yes, he is." / "No, he isn\'t." (NOT "Yes, he\'s." )',
          ],
        },
        ru: {
          title: 'Вопросительные формы',
          explanation:
            'Чтобы задать вопрос, поставьте <b>am / is / are перед подлежащим</b>. ' +
            'Порядок слов меняется: Подлежащее + is → Is + подлежащее?',
          table: {
            headers: ['Утверждение', 'Вопрос'],
            rows: [
              ['I am late.', 'Am I late?'],
              ['He is a teacher.', 'Is he a teacher?'],
              ['She is at home.', 'Is she at home?'],
              ['It is cold.', 'Is it cold?'],
              ['We are ready.', 'Are we ready?'],
              ['You are a student.', 'Are you a student?'],
              ['They are from Italy.', 'Are they from Italy?'],
            ],
          },
          notes: [
            'Краткие ответы: "Yes, I am." / "No, I\'m not."',
            'Краткие ответы: "Yes, he is." / "No, he isn\'t." (НЕ "Yes, he\'s.")',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Questions & short answers',
          items: [
            { english: 'Are you tired? — Yes, I am.', russian: 'Ты устал(а)? — Да.' },
            { english: 'Is she a nurse? — Yes, she is.', russian: 'Она медсестра? — Да.' },
            { english: 'Is he at home? — No, he isn\'t.', russian: 'Он дома? — Нет.' },
            { english: 'Are they from France? — No, they aren\'t.', russian: 'Они из Франции? — Нет.' },
            { english: 'Is it expensive? — Yes, it is.', russian: 'Это дорого? — Да.' },
            { english: 'Are you from Russia? — Yes, I am.', russian: 'Ты из России? — Да.' },
            { english: 'Is the exam difficult? — No, it isn\'t.', russian: 'Экзамен трудный? — Нет.' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы и краткие ответы',
          items: [
            { english: 'Are you tired? — Yes, I am.', russian: 'Ты устал(а)? — Да.' },
            { english: 'Is she a nurse? — Yes, she is.', russian: 'Она медсестра? — Да.' },
            { english: 'Is he at home? — No, he isn\'t.', russian: 'Он дома? — Нет.' },
            { english: 'Are they from France? — No, they aren\'t.', russian: 'Они из Франции? — Нет.' },
            { english: 'Is it expensive? — Yes, it is.', russian: 'Это дорого? — Да.' },
            { english: 'Are you from Russia? — Yes, I am.', russian: 'Ты из России? — Да.' },
            { english: 'Is the exam difficult? — No, it isn\'t.', russian: 'Экзамен трудный? — Нет.' },
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
            headers: ['Positive', 'Negative', 'Question'],
            rows: [
              ["I'm", "I'm not", 'Am I?'],
              ["he's / she's / it's", "isn't", 'Is he/she/it?'],
              ["we're / you're / they're", "aren't", 'Are we/you/they?'],
            ],
          },
          notes: ['Use contractions where possible.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Утверждение', 'Отрицание', 'Вопрос'],
            rows: [
              ["I'm", "I'm not", 'Am I?'],
              ["he's / she's / it's", "isn't", 'Is he/she/it?'],
              ["we're / you're / they're", "aren't", 'Are we/you/they?'],
            ],
          },
          notes: ['По возможности используйте краткие формы.'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Write the correct form of "to be" (am / is / are). Use contractions where possible.',
          questions: [
            {
              id: 'p1',
              type: 'fill-blank',
              prompt: 'I ___ a student.',
              translation: "Я студент(ка).",
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: "I + am → I'm (contraction)",
            },
            {
              id: 'p2',
              type: 'fill-blank',
              prompt: 'She ___ from Brazil.',
              translation: "Она из Бразилии.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: "She + is → She's (contraction)",
            },
            {
              id: 'p3',
              type: 'fill-blank',
              prompt: 'They ___ at work.',
              translation: "Они на работе.",
              correctAnswer: "'re",
              altAnswers: ['are'],
              explanation: "They + are → They're (contraction)",
            },
            {
              id: 'p4',
              type: 'fill-blank',
              prompt: 'The book ___ on the shelf.',
              translation: "Книга на полке.",
              correctAnswer: 'is',
              explanation: 'The book = it → is',
            },
            {
              id: 'p5',
              type: 'fill-blank',
              prompt: 'My parents ___ at home.',
              translation: "Мои родители дома.",
              correctAnswer: 'are',
              explanation: 'My parents = they → are',
            },
            {
              id: 'p6',
              type: 'fill-blank',
              prompt: '___ you ready?',
              translation: "Ты готов(а)?",
              correctAnswer: 'Are',
              explanation: 'Question with "you" → Are you?',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Напишите правильную форму глагола "to be" (am / is / are). По возможности используйте краткие формы.',
          questions: [
            {
              id: 'p1',
              type: 'fill-blank',
              prompt: 'I ___ a student.',
              translation: "Я студент(ка).",
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: "I + am → I'm (краткая форма)",
            },
            {
              id: 'p2',
              type: 'fill-blank',
              prompt: 'She ___ from Brazil.',
              translation: "Она из Бразилии.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: "She + is → She's (краткая форма)",
            },
            {
              id: 'p3',
              type: 'fill-blank',
              prompt: 'They ___ at work.',
              translation: "Они на работе.",
              correctAnswer: "'re",
              altAnswers: ['are'],
              explanation: "They + are → They're (краткая форма)",
            },
            {
              id: 'p4',
              type: 'fill-blank',
              prompt: 'The book ___ on the shelf.',
              translation: "Книга на полке.",
              correctAnswer: 'is',
              explanation: 'The book = it → is',
            },
            {
              id: 'p5',
              type: 'fill-blank',
              prompt: 'My parents ___ at home.',
              translation: "Мои родители дома.",
              correctAnswer: 'are',
              explanation: 'My parents = they → are',
            },
            {
              id: 'p6',
              type: 'fill-blank',
              prompt: '___ you ready?',
              translation: "Ты готов(а)?",
              correctAnswer: 'Are',
              explanation: 'Вопрос с "you" → Are you?',
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
          title: 'Quick Quiz — am / is / are',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q1',
              question: 'Which is correct?',
              options: ['She am a teacher.', "She's a teacher.", 'She are a teacher.'],
              correctIndex: 1,
              explanation: 'We use "is" with he / she / it. Contraction: She\'s.',
            },
            {
              id: 'q2',
              question: 'How do you say "Я не голоден" in English?',
              options: ["I isn't hungry.", "I'm not hungry.", "I aren't hungry."],
              correctIndex: 1,
              explanation: '"I am not" has only one contraction: I\'m not.',
            },
            {
              id: 'q3',
              question: 'Which question is correct?',
              options: ['Is they happy?', 'Are they happy?', 'Am they happy?'],
              correctIndex: 1,
              explanation: 'With "they" we use "are" → Are they?',
            },
            {
              id: 'q4',
              question: 'Complete: "The keys ___ on the table."',
              options: ['am', 'is', 'are'],
              correctIndex: 2,
              explanation: '"The keys" is plural → we use "are".',
            },
            {
              id: 'q5',
              question: 'Short answer to "Is he a doctor?" (negative)',
              options: ["No, he isn't.", "No, he's not.", 'Both A and B are correct.'],
              correctIndex: 2,
              explanation: 'Both "he isn\'t" and "he\'s not" are correct contractions.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — am / is / are',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q1',
              question: 'Какой вариант правильный?',
              options: ['She am a teacher.', "She's a teacher.", 'She are a teacher.'],
              correctIndex: 1,
              explanation: 'С he / she / it используем "is". Краткая форма: She\'s.',
            },
            {
              id: 'q2',
              question: 'Как сказать "Я не голоден" по-английски?',
              options: ["I isn't hungry.", "I'm not hungry.", "I aren't hungry."],
              correctIndex: 1,
              explanation: '"I am not" имеет только одну краткую форму: I\'m not.',
            },
            {
              id: 'q3',
              question: 'Какой вопрос правильный?',
              options: ['Is they happy?', 'Are they happy?', 'Am they happy?'],
              correctIndex: 1,
              explanation: 'С "they" используем "are" → Are they?',
            },
            {
              id: 'q4',
              question: 'Дополните: "The keys ___ on the table."',
              options: ['am', 'is', 'are'],
              correctIndex: 2,
              explanation: '"The keys" — множественное число → используем "are".',
            },
            {
              id: 'q5',
              question: 'Краткий отрицательный ответ на "Is he a doctor?"',
              options: ["No, he isn't.", "No, he's not.", 'Оба варианта правильны.'],
              correctIndex: 2,
              explanation: 'Оба варианта — "he isn\'t" и "he\'s not" — правильны.',
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
          title: 'Summary — am / is / are',
          points: [
            'Use <b>am</b> with I → I am / I\'m',
            'Use <b>is</b> with he, she, it → He is / He\'s',
            'Use <b>are</b> with we, you, they → They are / They\'re',
            'Negative: add <b>not</b> → isn\'t / aren\'t / I\'m not',
            'Questions: move am/is/are <b>before</b> the subject → Is he? Are they?',
            'Short answers use the full form: "Yes, I <b>am</b>." (NOT "Yes, I\'m.")',
          ],
          nextUnit: 'Unit 2 — am/is/are (questions)',
        },
        ru: {
          title: 'Итоги — am / is / are',
          points: [
            'С I используем <b>am</b> → I am / I\'m',
            'С he, she, it используем <b>is</b> → He is / He\'s',
            'С we, you, they используем <b>are</b> → They are / They\'re',
            'Отрицание: добавляем <b>not</b> → isn\'t / aren\'t / I\'m not',
            'Вопросы: ставим am/is/are <b>перед</b> подлежащим → Is he? Are they?',
            'В кратких ответах используем полную форму: "Yes, I <b>am</b>." (НЕ "Yes, I\'m.")',
          ],
          nextUnit: 'Юнит 2 — am/is/are (вопросы)',
        },
      },
    },
  ],
};

export default unit1;
