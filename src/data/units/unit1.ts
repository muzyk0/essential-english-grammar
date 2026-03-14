/* eslint-disable no-useless-escape */
import type { Unit } from '../../types/unit';

// Unit 1: am / is / are
// Based on Essential Grammar in Use by Raymond Murphy (Unit 1)
const unit1: Unit = {
  id: 'unit1',
  number: 1,
  title: {
    en: 'am / is / are',
    ru: 'am / is / are',
  },
  description: {
    en: 'Present simple of the verb "to be" — positive and negative forms, plus common short forms.',
    ru: 'Настоящее простое время глагола "to be" — утвердительная и отрицательная формы, а также распространённые краткие формы.',
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
            { english: "We aren't late today.", russian: 'Мы сегодня не опоздали.', highlight: "aren't" },
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
            { english: "We aren't late today.", russian: 'Мы сегодня не опоздали.', highlight: "aren't" },
            { english: "My phone isn't new.", russian: 'Мой телефон не новый.', highlight: "isn't" },
          ],
        },
      },
    },

    // ─── Step 3: Common short forms ───────────────────────────────────────────
    {
      id: 'step-3-short-forms',
      type: 'theory',
      left: {
        en: {
          title: 'Common short forms',
          explanation:
            'Some very common expressions use <b>is</b> in a short form with words like ' +
            '<em>that</em>, <em>there</em> and <em>here</em>. We use these forms all the time in everyday English.',
          table: {
            headers: ['Full form', 'Short form', 'Typical use'],
            rows: [
              ['that is', "that's", 'pointing to a thing or idea'],
              ['there is', "there's", 'saying something is present'],
              ['here is', "here's", 'giving or showing something'],
            ],
          },
          notes: [
            'These short forms are very common in speech and informal writing.',
            '"There\'s" is singular here. A full lesson on there is / there are comes later.',
          ],
        },
        ru: {
          title: 'Распространённые краткие формы',
          explanation:
            'Некоторые очень частотные выражения используют <b>is</b> в краткой форме со словами ' +
            '<em>that</em>, <em>there</em> и <em>here</em>. Эти формы постоянно встречаются в повседневном английском.',
          table: {
            headers: ['Полная форма', 'Краткая форма', 'Обычное значение'],
            rows: [
              ['that is', "that's", 'указываем на предмет или идею'],
              ['there is', "there's", 'говорим, что что-то есть'],
              ['here is', "here's", 'даём или показываем что-то'],
            ],
          },
          notes: [
            'Эти краткие формы очень часто используются в речи и в неформальном письме.',
            '"There\'s" здесь употребляется с единственным числом. Отдельный урок про there is / there are будет позже.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — that\'s / there\'s / here\'s',
          items: [
            { english: "That's my umbrella.", russian: 'Это мой зонт.', highlight: "That's" },
            { english: "That's a good question.", russian: 'Это хороший вопрос.', highlight: "That's" },
            { english: "There's a pharmacy near the station.", russian: 'Рядом со станцией есть аптека.', highlight: "There's" },
            { english: "Look! There's Emma.", russian: 'Смотри! Вон Эмма.', highlight: "There's" },
            { english: "Here's your receipt.", russian: 'Вот ваш чек.', highlight: "Here's" },
            { english: "Here's the photo I promised you.", russian: 'Вот фотография, которую я обещал(а).', highlight: "Here's" },
          ],
        },
        ru: {
          title: 'Примеры — that\'s / there\'s / here\'s',
          items: [
            { english: "That's my umbrella.", russian: 'Это мой зонт.', highlight: "That's" },
            { english: "That's a good question.", russian: 'Это хороший вопрос.', highlight: "That's" },
            { english: "There's a pharmacy near the station.", russian: 'Рядом со станцией есть аптека.', highlight: "There's" },
            { english: "Look! There's Emma.", russian: 'Смотри! Вон Эмма.', highlight: "There's" },
            { english: "Here's your receipt.", russian: 'Вот ваш чек.', highlight: "Here's" },
            { english: "Here's the photo I promised you.", russian: 'Вот фотография, которую я обещал(а).', highlight: "Here's" },
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
            headers: ['Subject / word', 'Common form', 'Negative form'],
            rows: [
              ['I', "I\'m", "I\'m not"],
              ['he / she / it', "he\'s / she\'s / it\'s", "isn\'t / he\'s not"],
              ['we / you / they', "we\'re / you\'re / they\'re", "aren\'t / we\'re not"],
              ['that / there / here', "that\'s / there\'s / here\'s", 'full form: that is / there is / here is'],
            ],
          },
          notes: ['Use contractions where possible.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Подлежащее / слово', 'Обычная форма', 'Отрицательная форма'],
            rows: [
              ['I', "I\'m", "I\'m not"],
              ['he / she / it', "he\'s / she\'s / it\'s", "isn\'t / he\'s not"],
              ['we / you / they', "we\'re / you\'re / they\'re", "aren\'t / we\'re not"],
              ['that / there / here', "that\'s / there\'s / here\'s", 'полная форма: that is / there is / here is'],
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
              prompt: 'I ___ from St Petersburg.',
              translation: "Я из Санкт-Петербурга.",
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: "I + am → I'm (contraction)",
            },
            {
              id: 'p2',
              type: 'fill-blank',
              prompt: 'She ___ at work today.',
              translation: "Она сегодня на работе.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: "She + is → She's (contraction)",
            },
            {
              id: 'p3',
              type: 'fill-blank',
              prompt: 'We ___ not ready yet.',
              translation: "Мы ещё не готовы.",
              correctAnswer: "aren't",
              altAnswers: ['are not', "'re not"],
              explanation: 'With "we" in the negative, common answers are "aren\'t" or "we\'re not".',
            },
            {
              id: 'p4',
              type: 'fill-blank',
              prompt: 'My keys ___ in my bag.',
              translation: "Мои ключи в моей сумке.",
              correctAnswer: 'are',
              explanation: '"My keys" is plural → are',
            },
            {
              id: 'p5',
              type: 'fill-blank',
              prompt: 'That ___ my phone on the table.',
              translation: "Это мой телефон на столе.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"That is" → That\'s',
            },
            {
              id: 'p6',
              type: 'fill-blank',
              prompt: 'Look! There ___ our bus.',
              translation: "Смотри! Вон наш автобус.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"There is" → There\'s',
            },
            {
              id: 'p7',
              type: 'fill-blank',
              prompt: 'Here ___ your ticket.',
              translation: "Вот твой билет.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"Here is" → Here\'s',
            },
            {
              id: 'p8',
              type: 'fill-blank',
              prompt: 'It ___ warm today.',
              translation: "Сегодня не тепло.",
              correctAnswer: "isn't",
              altAnswers: ['is not', "'s not"],
              explanation: 'Negative with "it" → isn\'t / it\'s not',
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
              prompt: 'I ___ from St Petersburg.',
              translation: "Я из Санкт-Петербурга.",
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: "I + am → I'm (краткая форма)",
            },
            {
              id: 'p2',
              type: 'fill-blank',
              prompt: 'She ___ at work today.',
              translation: "Она сегодня на работе.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: "She + is → She's (краткая форма)",
            },
            {
              id: 'p3',
              type: 'fill-blank',
              prompt: 'We ___ not ready yet.',
              translation: "Мы ещё не готовы.",
              correctAnswer: "aren't",
              altAnswers: ['are not', "'re not"],
              explanation: 'С "we" в отрицании часто используем "aren\'t" или "we\'re not".',
            },
            {
              id: 'p4',
              type: 'fill-blank',
              prompt: 'My keys ___ in my bag.',
              translation: "Мои ключи в моей сумке.",
              correctAnswer: 'are',
              explanation: '"My keys" — множественное число → are',
            },
            {
              id: 'p5',
              type: 'fill-blank',
              prompt: 'That ___ my phone on the table.',
              translation: "Это мой телефон на столе.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"That is" → That\'s',
            },
            {
              id: 'p6',
              type: 'fill-blank',
              prompt: 'Look! There ___ our bus.',
              translation: "Смотри! Вон наш автобус.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"There is" → There\'s',
            },
            {
              id: 'p7',
              type: 'fill-blank',
              prompt: 'Here ___ your ticket.',
              translation: "Вот твой билет.",
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"Here is" → Here\'s',
            },
            {
              id: 'p8',
              type: 'fill-blank',
              prompt: 'It ___ warm today.',
              translation: "Сегодня не тепло.",
              correctAnswer: "isn't",
              altAnswers: ['is not', "'s not"],
              explanation: 'Отрицание с "it" → isn\'t / it\'s not',
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
              options: ["I'm ready.", 'I are ready.', 'I is ready.'],
              correctIndex: 0,
              explanation: 'With "I" we use "am" → I\'m ready.',
            },
            {
              id: 'q2',
              question: 'Complete the sentence: "They ___ at home."',
              options: ["isn't", "aren't", 'am not'],
              correctIndex: 1,
              explanation: 'With "they" in the negative we use "aren\'t" / "are not".',
            },
            {
              id: 'q3',
              question: 'Choose the best short form for "That is my coat."',
              options: ["That's my coat.", "That're my coat.", "There's my coat."],
              correctIndex: 0,
              explanation: '"That is" → "That\'s".',
            },
            {
              id: 'q4',
              question: 'What fits here: "Look! There ___ your teacher."',
              options: ['am', 'is', 'are'],
              correctIndex: 1,
              explanation: 'After "there" with singular meaning, we use "is" → There\'s your teacher.',
            },
            {
              id: 'q5',
              question: 'Which sentence is NOT correct in standard English?',
              options: ["Here's your coffee.", "I'm not late.", "I amn't tired."],
              correctIndex: 2,
              explanation: '"I amn\'t" is not standard English. We say "I\'m not".',
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
              options: ["I'm ready.", 'I are ready.', 'I is ready.'],
              correctIndex: 0,
              explanation: 'С "I" используем "am" → I\'m ready.',
            },
            {
              id: 'q2',
              question: 'Дополните предложение: "They ___ at home."',
              options: ["isn't", "aren't", 'am not'],
              correctIndex: 1,
              explanation: 'С "they" в отрицании используем "aren\'t" / "are not".',
            },
            {
              id: 'q3',
              question: 'Выберите лучшую краткую форму для "That is my coat."',
              options: ["That's my coat.", "That're my coat.", "There's my coat."],
              correctIndex: 0,
              explanation: '"That is" → "That\'s".',
            },
            {
              id: 'q4',
              question: 'Что подходит сюда: "Look! There ___ your teacher."',
              options: ['am', 'is', 'are'],
              correctIndex: 1,
              explanation: 'После "there" при единственном числе используем "is" → There\'s your teacher.',
            },
            {
              id: 'q5',
              question: 'Какое предложение НЕ является правильным в стандартном английском?',
              options: ["Here's your coffee.", "I'm not late.", "I amn't tired."],
              correctIndex: 2,
              explanation: '"I amn\'t" не считается стандартной формой. Говорим "I\'m not".',
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
            'Some common short forms are <b>that\'s</b>, <b>there\'s</b> and <b>here\'s</b>',
            'Use short forms a lot in everyday English and informal writing.',
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
            'Частые краткие формы: <b>that\'s</b>, <b>there\'s</b> и <b>here\'s</b>',
            'Краткие формы очень часто используются в повседневной речи и неформальном письме.',
          ],
          nextUnit: 'Юнит 2 — am/is/are (вопросы)',
        },
      },
    },
  ],
};

export default unit1;
