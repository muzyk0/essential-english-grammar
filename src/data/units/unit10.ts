import type { Unit } from '../../types/unit';

// Unit 10: was / were
// Based on Essential Grammar in Use by Raymond Murphy (Unit 10)
const unit10: Unit = {
  id: 'unit10',
  number: 10,
  title: {
    en: 'was / were',
    ru: 'was / were',
  },
  description: {
    en: 'Past simple of the verb "to be" — positive, negative and question forms.',
    ru: 'Прошедшее простое время глагола "to be" — утвердительная, отрицательная и вопросительная формы.',
  },
  steps: [
    // ─── Step 1: Positive forms ───────────────────────────────────────────────
    {
      id: 'step10-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'Positive forms — was / were',
          explanation:
            '<b>Was</b> and <b>were</b> are the past simple forms of the verb <em>to be</em>. ' +
            'Use <b>was</b> with I, he, she, it and <b>were</b> with we, you, they.',
          table: {
            headers: ['Subject', 'Past form'],
            rows: [
              ['I', 'was'],
              ['he', 'was'],
              ['she', 'was'],
              ['it', 'was'],
              ['we', 'were'],
              ['you', 'were'],
              ['they', 'were'],
            ],
          },
          notes: [
            'Was and were have no contractions in positive sentences.',
            'Use was/were to talk about states, feelings, or locations in the past.',
          ],
        },
        ru: {
          title: 'Утвердительные формы — was / were',
          explanation:
            '<b>Was</b> и <b>were</b> — формы прошедшего времени глагола <em>to be</em> (быть). ' +
            'Используйте <b>was</b> с I, he, she, it и <b>were</b> с we, you, they.',
          table: {
            headers: ['Подлежащее', 'Форма прошедшего времени'],
            rows: [
              ['I (я)', 'was'],
              ['he (он)', 'was'],
              ['she (она)', 'was'],
              ['it (оно)', 'was'],
              ['we (мы)', 'were'],
              ['you (ты/вы)', 'were'],
              ['they (они)', 'were'],
            ],
          },
          notes: [
            'Was и were не имеют кратких форм в утвердительных предложениях.',
            'Используйте was/were для описания состояний, чувств или местонахождения в прошлом.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Positive sentences',
          intro: 'Study these sentences. Notice how was and were are used in the past.',
          items: [
            { english: 'I was tired after work.', russian: 'Я был(а) уставшим(ей) после работы.', highlight: 'was' },
            { english: 'She was at home yesterday.', russian: 'Вчера она была дома.', highlight: 'was' },
            { english: 'He was a student in 2010.', russian: 'В 2010 году он был студентом.', highlight: 'was' },
            { english: 'It was cold last night.', russian: 'Прошлой ночью было холодно.', highlight: 'was' },
            { english: 'We were late for the meeting.', russian: 'Мы опоздали на встречу.', highlight: 'were' },
            { english: 'You were right about that.', russian: 'Ты был(а) прав(а) насчёт этого.', highlight: 'were' },
            { english: 'They were happy to see us.', russian: 'Они были рады нас видеть.', highlight: 'were' },
            { english: 'The film was very interesting.', russian: 'Фильм был очень интересным.', highlight: 'was' },
            { english: 'My keys were on the table.', russian: 'Мои ключи были на столе.', highlight: 'were' },
          ],
        },
        ru: {
          title: 'Примеры — Утвердительные предложения',
          intro: 'Изучите эти предложения. Обратите внимание, как используются was и were в прошедшем времени.',
          items: [
            { english: 'I was tired after work.', russian: 'Я был(а) уставшим(ей) после работы.', highlight: 'was' },
            { english: 'She was at home yesterday.', russian: 'Вчера она была дома.', highlight: 'was' },
            { english: 'He was a student in 2010.', russian: 'В 2010 году он был студентом.', highlight: 'was' },
            { english: 'It was cold last night.', russian: 'Прошлой ночью было холодно.', highlight: 'was' },
            { english: 'We were late for the meeting.', russian: 'Мы опоздали на встречу.', highlight: 'were' },
            { english: 'You were right about that.', russian: 'Ты был(а) прав(а) насчёт этого.', highlight: 'were' },
            { english: 'They were happy to see us.', russian: 'Они были рады нас видеть.', highlight: 'were' },
            { english: 'The film was very interesting.', russian: 'Фильм был очень интересным.', highlight: 'was' },
            { english: 'My keys were on the table.', russian: 'Мои ключи были на столе.', highlight: 'were' },
          ],
        },
      },
    },

    // ─── Step 2: Negative forms ───────────────────────────────────────────────
    {
      id: 'step10-2-negative',
      type: 'examples',
      left: {
        en: {
          title: 'Negative forms — wasn\'t / weren\'t',
          explanation:
            'To make a negative sentence, add <b>not</b> after was / were. ' +
            'In everyday speech we use the contractions <b>wasn\'t</b> and <b>weren\'t</b>.',
          table: {
            headers: ['Full form', 'Contraction'],
            rows: [
              ['I was not', "wasn't"],
              ['he was not', "wasn't"],
              ['she was not', "wasn't"],
              ['it was not', "wasn't"],
              ['we were not', "weren't"],
              ['you were not', "weren't"],
              ['they were not', "weren't"],
            ],
          },
          notes: [
            'Unlike "am not", both was not → wasn\'t and were not → weren\'t follow the same pattern.',
            'Use wasn\'t / weren\'t to correct or contradict something.',
          ],
        },
        ru: {
          title: 'Отрицательные формы — wasn\'t / weren\'t',
          explanation:
            'Для образования отрицания добавьте <b>not</b> после was / were. ' +
            'В повседневной речи используют краткие формы <b>wasn\'t</b> и <b>weren\'t</b>.',
          table: {
            headers: ['Полная форма', 'Краткая форма'],
            rows: [
              ['I was not', "wasn't"],
              ['he was not', "wasn't"],
              ['she was not', "wasn't"],
              ['it was not', "wasn't"],
              ['we were not', "weren't"],
              ['you were not', "weren't"],
              ['they were not', "weren't"],
            ],
          },
          notes: [
            'В отличие от "am not", обе формы was not → wasn\'t и were not → weren\'t образуются одинаково.',
            'Используйте wasn\'t / weren\'t для исправления или опровержения чего-либо.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negative sentences',
          intro: 'Compare positive and negative sentences in the past.',
          items: [
            { english: "I was tired but I wasn't hungry.", russian: 'Я устал(а), но не был(а) голоден(на).', highlight: "wasn't" },
            { english: "She wasn't at the party last night.", russian: 'Её не было на вечеринке прошлой ночью.', highlight: "wasn't" },
            { english: "He was friendly but he wasn't very talkative.", russian: 'Он был дружелюбным, но не очень разговорчивым.', highlight: "wasn't" },
            { english: "The weather wasn't good for a picnic.", russian: 'Погода не была хорошей для пикника.', highlight: "wasn't" },
            { english: "We weren't ready for the exam.", russian: 'Мы не были готовы к экзамену.', highlight: "weren't" },
            { english: "They weren't at home when I called.", russian: 'Когда я позвонил(а), их не было дома.', highlight: "weren't" },
            { english: "The shops weren't open on Sunday.", russian: 'В воскресенье магазины не работали.', highlight: "weren't" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицательные предложения',
          intro: 'Сравните утвердительные и отрицательные предложения в прошедшем времени.',
          items: [
            { english: "I was tired but I wasn't hungry.", russian: 'Я устал(а), но не был(а) голоден(на).', highlight: "wasn't" },
            { english: "She wasn't at the party last night.", russian: 'Её не было на вечеринке прошлой ночью.', highlight: "wasn't" },
            { english: "He was friendly but he wasn't very talkative.", russian: 'Он был дружелюбным, но не очень разговорчивым.', highlight: "wasn't" },
            { english: "The weather wasn't good for a picnic.", russian: 'Погода не была хорошей для пикника.', highlight: "wasn't" },
            { english: "We weren't ready for the exam.", russian: 'Мы не были готовы к экзамену.', highlight: "weren't" },
            { english: "They weren't at home when I called.", russian: 'Когда я позвонил(а), их не было дома.', highlight: "weren't" },
            { english: "The shops weren't open on Sunday.", russian: 'В воскресенье магазины не работали.', highlight: "weren't" },
          ],
        },
      },
    },

    // ─── Step 3: Question forms ───────────────────────────────────────────────
    {
      id: 'step10-3-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Question forms and short answers',
          explanation:
            'To make a question, put <b>was / were before the subject</b>. ' +
            'Short answers repeat was / were — do not use contractions in positive short answers.',
          table: {
            headers: ['Statement', 'Question', 'Short answer (yes)', 'Short answer (no)'],
            rows: [
              ['I was late.', 'Was I late?', 'Yes, I was.', "No, I wasn't."],
              ['He was tired.', 'Was he tired?', 'Yes, he was.', "No, he wasn't."],
              ['She was happy.', 'Was she happy?', 'Yes, she was.', "No, she wasn't."],
              ['It was cold.', 'Was it cold?', 'Yes, it was.', "No, it wasn't."],
              ['We were ready.', 'Were we ready?', 'Yes, we were.', "No, we weren't."],
              ['You were right.', 'Were you right?', 'Yes, you were.', "No, you weren't."],
              ['They were there.', 'Were they there?', 'Yes, they were.', "No, they weren't."],
            ],
          },
          notes: [
            'Positive short answers: "Yes, he was." — never use a contraction (NOT "Yes, he\'d.")',
            'Wh-questions: Where were you? / Why was she late? / Who was there?',
          ],
        },
        ru: {
          title: 'Вопросительные формы и краткие ответы',
          explanation:
            'Чтобы задать вопрос, поставьте <b>was / were перед подлежащим</b>. ' +
            'В кратких ответах повторяем was / were — в утвердительных кратких ответах краткие формы не используются.',
          table: {
            headers: ['Утверждение', 'Вопрос', 'Краткий ответ (да)', 'Краткий ответ (нет)'],
            rows: [
              ['I was late.', 'Was I late?', 'Yes, I was.', "No, I wasn't."],
              ['He was tired.', 'Was he tired?', 'Yes, he was.', "No, he wasn't."],
              ['She was happy.', 'Was she happy?', 'Yes, she was.', "No, she wasn't."],
              ['It was cold.', 'Was it cold?', 'Yes, it was.', "No, it wasn't."],
              ['We were ready.', 'Were we ready?', 'Yes, we were.', "No, we weren't."],
              ['You were right.', 'Were you right?', 'Yes, you were.', "No, you weren't."],
              ['They were there.', 'Were they there?', 'Yes, they were.', "No, they weren't."],
            ],
          },
          notes: [
            'Утвердительный краткий ответ: "Yes, he was." — никогда не используем краткую форму (НЕ "Yes, he\'d.")',
            'Вопросы с вопросительным словом: Where were you? / Why was she late? / Who was there?',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Questions and short answers',
          items: [
            { english: 'Was it a good film? — Yes, it was.', russian: 'Это был хороший фильм? — Да.' },
            { english: 'Was she at work yesterday? — No, she wasn\'t.', russian: 'Она была на работе вчера? — Нет.' },
            { english: 'Were you at the party? — Yes, I was.', russian: 'Ты был(а) на вечеринке? — Да.' },
            { english: 'Were they happy with the result? — No, they weren\'t.', russian: 'Они были довольны результатом? — Нет.' },
            { english: 'Was he a good student? — Yes, he was.', russian: 'Он был хорошим студентом? — Да.' },
            { english: 'Where were you last night?', russian: 'Где ты был(а) прошлой ночью?' },
            { english: 'Why was she so upset?', russian: 'Почему она была так расстроена?' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы и краткие ответы',
          items: [
            { english: 'Was it a good film? — Yes, it was.', russian: 'Это был хороший фильм? — Да.' },
            { english: 'Was she at work yesterday? — No, she wasn\'t.', russian: 'Она была на работе вчера? — Нет.' },
            { english: 'Were you at the party? — Yes, I was.', russian: 'Ты был(а) на вечеринке? — Да.' },
            { english: 'Were they happy with the result? — No, they weren\'t.', russian: 'Они были довольны результатом? — Нет.' },
            { english: 'Was he a good student? — Yes, he was.', russian: 'Он был хорошим студентом? — Да.' },
            { english: 'Where were you last night?', russian: 'Где ты был(а) прошлой ночью?' },
            { english: 'Why was she so upset?', russian: 'Почему она была так расстроена?' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step10-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Subject', 'Positive', 'Negative', 'Question'],
            rows: [
              ['I / he / she / it', 'was', "wasn't", 'Was I/he/she/it?'],
              ['we / you / they', 'were', "weren't", 'Were we/you/they?'],
            ],
          },
          notes: ['Remember: no contractions for positive was/were.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Подлежащее', 'Утверждение', 'Отрицание', 'Вопрос'],
            rows: [
              ['I / he / she / it', 'was', "wasn't", 'Was I/he/she/it?'],
              ['we / you / they', 'were', "weren't", 'Were we/you/they?'],
            ],
          },
          notes: ['Помните: у утвердительных was/were нет кратких форм.'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Write was, were, wasn\'t or weren\'t.',
          questions: [
            {
              id: 'p10-1',
              type: 'fill-blank',
              prompt: 'I ___ very tired after the long journey.',
              translation: "Я очень устал(а) после долгой поездки.",
              correctAnswer: 'was',
              explanation: 'I → was (past simple of "to be")',
            },
            {
              id: 'p10-2',
              type: 'fill-blank',
              prompt: 'They ___ at school yesterday — it was a holiday.',
              translation: "Их не было в школе вчера: был праздник.",
              correctAnswer: "weren't",
              altAnswers: ["were not"],
              explanation: 'They → were; negative → weren\'t',
            },
            {
              id: 'p10-3',
              type: 'fill-blank',
              prompt: '___ the film interesting?',
              translation: "Фильм был интересным?",
              correctAnswer: 'Was',
              explanation: 'Question with "the film" (= it) → Was it / Was the film?',
            },
            {
              id: 'p10-4',
              type: 'fill-blank',
              prompt: 'The windows ___ open, so the room was cold.',
              translation: "Окна не были открыты, поэтому в комнате было холодно.",
              correctAnswer: "weren't",
              altAnswers: ["were not"],
              explanation: 'The windows = they (plural) → negative → weren\'t',
            },
            {
              id: 'p10-5',
              type: 'fill-blank',
              prompt: 'She ___ born in 1990.',
              translation: "Она родилась в 1990 году.",
              correctAnswer: 'was',
              explanation: 'She → was',
            },
            {
              id: 'p10-6',
              type: 'fill-blank',
              prompt: '___ you at the concert on Saturday? — Yes, I ___.',
              translation: "Ты был(а) на концерте в субботу? — Да.",
              correctAnswer: 'Were / was',
              blankAnswers: [
                { correctAnswer: 'Were' },
                { correctAnswer: 'was' },
              ],
              explanation: 'Question → Were you? | Short positive answer → Yes, I was.',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Вставьте was, were, wasn\'t или weren\'t.',
          questions: [
            {
              id: 'p10-1',
              type: 'fill-blank',
              prompt: 'I ___ very tired after the long journey.',
              translation: "Я очень устал(а) после долгой поездки.",
              correctAnswer: 'was',
              explanation: 'I → was (прошедшее время глагола "to be")',
            },
            {
              id: 'p10-2',
              type: 'fill-blank',
              prompt: 'They ___ at school yesterday — it was a holiday.',
              translation: "Их не было в школе вчера: был праздник.",
              correctAnswer: "weren't",
              explanation: 'They → were; отрицание → weren\'t',
            },
            {
              id: 'p10-3',
              type: 'fill-blank',
              prompt: '___ the film interesting?',
              translation: "Фильм был интересным?",
              correctAnswer: 'Was',
              explanation: 'Вопрос с "the film" (= it) → Was it / Was the film?',
            },
            {
              id: 'p10-4',
              type: 'fill-blank',
              prompt: 'The windows ___ open, so the room was cold.',
              translation: "Окна не были открыты, поэтому в комнате было холодно.",
              correctAnswer: "weren't",
              altAnswers: ["were not"],
              explanation: 'The windows = they (мн. ч.) → отрицание → weren\'t',
            },
            {
              id: 'p10-5',
              type: 'fill-blank',
              prompt: 'She ___ born in 1990.',
              translation: "Она родилась в 1990 году.",
              correctAnswer: 'was',
              explanation: 'She → was',
            },
            {
              id: 'p10-6',
              type: 'fill-blank',
              prompt: '___ you at the concert on Saturday? — Yes, I ___.',
              translation: "Ты был(а) на концерте в субботу? — Да.",
              correctAnswer: 'Were / was',
              blankAnswers: [
                { correctAnswer: 'Were' },
                { correctAnswer: 'was' },
              ],
              explanation: 'Вопрос → Were you? | Краткий утвердительный ответ → Yes, I was.',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step10-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — was / were',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q10-1',
              question: 'Which sentence is correct?',
              options: [
                'She were a nurse.',
                'She was a nurse.',
                'She be a nurse.',
              ],
              correctIndex: 1,
              explanation: 'She → singular → was. (Not "were" — that is for we/you/they.)',
            },
            {
              id: 'q10-2',
              question: 'Choose the correct negative form: "They ___ happy."',
              options: ["wasn't", "weren't", "amn't"],
              correctIndex: 1,
              explanation: 'They → were → negative → weren\'t.',
            },
            {
              id: 'q10-3',
              question: 'Which question is correct?',
              options: [
                'Were he at home?',
                'Was he at home?',
                'Did he was at home?',
              ],
              correctIndex: 1,
              explanation: 'He → singular → Was he? (Not "Were" or "Did ... was".)',
            },
            {
              id: 'q10-4',
              question: 'Short answer to "Were you at school yesterday?" (positive)',
              options: ["Yes, I were.", 'Yes, I was.', "Yes, I'm."],
              correctIndex: 1,
              explanation: 'Short positive answer uses "was" for I, not "were". Never use contractions in positive short answers.',
            },
            {
              id: 'q10-5',
              question: 'Complete: "The rooms ___ very clean." (negative)',
              options: ["wasn't", "weren't", 'not were'],
              correctIndex: 1,
              explanation: '"The rooms" is plural (= they) → weren\'t. Correct contraction of "were not".',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — was / were',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q10-1',
              question: 'Какое предложение правильное?',
              options: [
                'She were a nurse.',
                'She was a nurse.',
                'She be a nurse.',
              ],
              correctIndex: 1,
              explanation: 'She → единственное число → was. (Не "were" — это для we/you/they.)',
            },
            {
              id: 'q10-2',
              question: 'Выберите правильную отрицательную форму: "They ___ happy."',
              options: ["wasn't", "weren't", "amn't"],
              correctIndex: 1,
              explanation: 'They → were → отрицание → weren\'t.',
            },
            {
              id: 'q10-3',
              question: 'Какой вопрос правильный?',
              options: [
                'Were he at home?',
                'Was he at home?',
                'Did he was at home?',
              ],
              correctIndex: 1,
              explanation: 'He → единственное число → Was he? (Не "Were" или "Did ... was".)',
            },
            {
              id: 'q10-4',
              question: 'Краткий утвердительный ответ на "Were you at school yesterday?"',
              options: ["Yes, I were.", 'Yes, I was.', "Yes, I'm."],
              correctIndex: 1,
              explanation: 'В кратком утвердительном ответе с I используем "was", не "were". Краткие формы в утвердительных ответах не употребляются.',
            },
            {
              id: 'q10-5',
              question: 'Дополните: "The rooms ___ very clean." (отрицание)',
              options: ["wasn't", "weren't", 'not were'],
              correctIndex: 1,
              explanation: '"The rooms" — множественное число (= they) → weren\'t. Краткая форма от "were not".',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step10-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — was / were',
          points: [
            'Use <b>was</b> with I, he, she, it → I was, she was',
            'Use <b>were</b> with we, you, they → we were, they were',
            'Negative: <b>was not → wasn\'t</b>, <b>were not → weren\'t</b>',
            'Questions: move was/were <b>before</b> the subject → Was he? Were they?',
            'Short answers repeat was/were: "Yes, I <b>was</b>." / "No, they <b>weren\'t</b>."',
            'Never use contractions in positive short answers: say "Yes, she <b>was</b>." — not "Yes, she\'d."',
          ],
          nextUnit: 'Unit 11 — worked / got / went (past simple)',
        },
        ru: {
          title: 'Итоги — was / were',
          points: [
            'С I, he, she, it используем <b>was</b> → I was, she was',
            'С we, you, they используем <b>were</b> → we were, they were',
            'Отрицание: <b>was not → wasn\'t</b>, <b>were not → weren\'t</b>',
            'Вопросы: ставим was/were <b>перед</b> подлежащим → Was he? Were they?',
            'В кратких ответах повторяем was/were: "Yes, I <b>was</b>." / "No, they <b>weren\'t</b>."',
            'В утвердительных кратких ответах краткие формы не используются: "Yes, she <b>was</b>." — не "Yes, she\'d."',
          ],
          nextUnit: 'Юнит 11 — worked / got / went (прошедшее простое)',
        },
      },
    },
  ],
};

export default unit10;
