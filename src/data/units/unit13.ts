import type { Unit } from '../../types/unit';

// Unit 13: I was doing (past continuous)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 13)
const unit13: Unit = {
  id: 'unit13',
  number: 13,
  title: {
    en: 'I was doing (past continuous)',
    ru: 'I was doing (прошедшее длительное)',
  },
  description: {
    en: 'Past continuous — was/were + -ing for actions in progress at a particular time in the past.',
    ru: 'Прошедшее длительное время — was/were + -ing для действий, которые происходили в определённый момент в прошлом.',
  },
  steps: [
    // ─── Step 1: Formation — positive forms ──────────────────────────────────
    {
      id: 'step-1-formation',
      type: 'theory',
      left: {
        en: {
          title: 'Past continuous — positive forms',
          explanation:
            'We use the <b>past continuous</b> (was/were + -ing) to say that somebody <b>was in the middle of doing something</b> at a certain time in the past. ' +
            'The action had already started before this time, but had not finished.',
          table: {
            headers: ['Subject', 'was/were', '+ verb-ing'],
            rows: [
              ['I', 'was', 'working'],
              ['he / she / it', 'was', 'working'],
              ['we', 'were', 'working'],
              ['you', 'were', 'working'],
              ['they', 'were', 'working'],
            ],
          },
          notes: [
            'Use "was" with I / he / she / it.',
            'Use "were" with we / you / they.',
          ],
        },
        ru: {
          title: 'Прошедшее длительное — утвердительные формы',
          explanation:
            'Мы используем <b>past continuous</b> (was/were + -ing), чтобы сказать, что кто-то <b>был в процессе действия</b> в определённый момент в прошлом. ' +
            'Действие началось раньше этого момента и ещё не закончилось.',
          table: {
            headers: ['Подлежащее', 'was/were', '+ глагол-ing'],
            rows: [
              ['I (я)', 'was', 'working'],
              ['he / she / it', 'was', 'working'],
              ['we (мы)', 'were', 'working'],
              ['you (ты/вы)', 'were', 'working'],
              ['they (они)', 'were', 'working'],
            ],
          },
          notes: [
            'С I / he / she / it используем "was".',
            'С we / you / they используем "were".',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — actions in progress',
          intro: 'These sentences describe what was happening at a particular time in the past.',
          items: [
            { english: 'I was watching TV at 9 o\'clock last night.', russian: 'Я смотрел телевизор в 9 часов вчера вечером.', highlight: 'was watching' },
            { english: 'At 8.30 this morning, she was driving to work.', russian: 'В 8.30 утра она ехала на работу.', highlight: 'was driving' },
            { english: 'It was raining when I got up.', russian: 'Шёл дождь, когда я проснулся.', highlight: 'was raining' },
            { english: 'What were you doing at 10 o\'clock?', russian: 'Что ты делал в 10 часов?', highlight: 'were you doing' },
            { english: 'We were having dinner when the phone rang.', russian: 'Мы ужинали, когда зазвонил телефон.', highlight: 'were having' },
            { english: 'He was reading a book in the garden.', russian: 'Он читал книгу в саду.', highlight: 'was reading' },
            { english: 'The children were playing in the park.', russian: 'Дети играли в парке.', highlight: 'were playing' },
          ],
        },
        ru: {
          title: 'Примеры — действия в процессе',
          intro: 'Эти предложения описывают, что происходило в определённый момент в прошлом.',
          items: [
            { english: 'I was watching TV at 9 o\'clock last night.', russian: 'Я смотрел телевизор в 9 часов вчера вечером.', highlight: 'was watching' },
            { english: 'At 8.30 this morning, she was driving to work.', russian: 'В 8.30 утра она ехала на работу.', highlight: 'was driving' },
            { english: 'It was raining when I got up.', russian: 'Шёл дождь, когда я проснулся.', highlight: 'was raining' },
            { english: 'What were you doing at 10 o\'clock?', russian: 'Что ты делал в 10 часов?', highlight: 'were you doing' },
            { english: 'We were having dinner when the phone rang.', russian: 'Мы ужинали, когда зазвонил телефон.', highlight: 'were having' },
            { english: 'He was reading a book in the garden.', russian: 'Он читал книгу в саду.', highlight: 'was reading' },
            { english: 'The children were playing in the park.', russian: 'Дети играли в парке.', highlight: 'were playing' },
          ],
        },
      },
    },

    // ─── Step 2: Usage — interrupted actions / background ─────────────────────
    {
      id: 'step-2-usage',
      type: 'examples',
      left: {
        en: {
          title: 'Past continuous + when / while',
          explanation:
            'We often use the past continuous with <b>when</b> or <b>while</b>. ' +
            'The past continuous describes the <b>longer background action</b>; the past simple describes the <b>shorter interrupting action</b>.',
          table: {
            headers: ['Background action (past continuous)', 'Interruption (past simple)'],
            rows: [
              ['I was walking home', 'when it started to rain.'],
              ['She was cooking dinner', 'when the doorbell rang.'],
              ['While I was sleeping,', 'someone stole my car.'],
              ['While they were talking,', 'the teacher came in.'],
            ],
          },
          notes: [
            '"When" usually comes before the past simple (short action).',
            '"While" usually comes before the past continuous (long action).',
          ],
        },
        ru: {
          title: 'Past continuous + when / while',
          explanation:
            'Мы часто используем past continuous с <b>when</b> (когда) или <b>while</b> (пока, в то время как). ' +
            'Past continuous описывает <b>длительное фоновое действие</b>, а past simple — <b>короткое прерывающее действие</b>.',
          table: {
            headers: ['Фоновое действие (past continuous)', 'Прерывание (past simple)'],
            rows: [
              ['I was walking home', 'when it started to rain.'],
              ['She was cooking dinner', 'when the doorbell rang.'],
              ['While I was sleeping,', 'someone stole my car.'],
              ['While they were talking,', 'the teacher came in.'],
            ],
          },
          notes: [
            '"When" обычно стоит перед past simple (короткое действие).',
            '"While" обычно стоит перед past continuous (длительное действие).',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — when and while',
          intro: 'Notice how the past continuous sets the scene and the past simple describes the event.',
          items: [
            { english: 'I was having a bath when the phone rang.', russian: 'Я принимал ванну, когда зазвонил телефон.', highlight: 'was having' },
            { english: 'While I was waiting for the bus, it started to snow.', russian: 'Пока я ждал автобус, пошёл снег.', highlight: 'was waiting' },
            { english: 'Tom was cooking when he burnt his hand.', russian: 'Том готовил, когда обжёг руку.', highlight: 'was cooking' },
            { english: 'I saw you in the park yesterday. You were sitting on the grass.', russian: 'Я видел тебя вчера в парке. Ты сидел на траве.', highlight: 'were sitting' },
            { english: 'While we were driving, we saw an accident.', russian: 'Пока мы ехали, мы увидели аварию.', highlight: 'were driving' },
            { english: 'She was walking to the station when she met David.', russian: 'Она шла на станцию, когда встретила Дэвида.', highlight: 'was walking' },
            { english: 'While Kate was studying, her brother was watching TV.', russian: 'Пока Кейт занималась, её брат смотрел телевизор.', highlight: 'was studying' },
          ],
        },
        ru: {
          title: 'Примеры — when и while',
          intro: 'Обратите внимание: past continuous создаёт фон, а past simple описывает событие.',
          items: [
            { english: 'I was having a bath when the phone rang.', russian: 'Я принимал ванну, когда зазвонил телефон.', highlight: 'was having' },
            { english: 'While I was waiting for the bus, it started to snow.', russian: 'Пока я ждал автобус, пошёл снег.', highlight: 'was waiting' },
            { english: 'Tom was cooking when he burnt his hand.', russian: 'Том готовил, когда обжёг руку.', highlight: 'was cooking' },
            { english: 'I saw you in the park yesterday. You were sitting on the grass.', russian: 'Я видел тебя вчера в парке. Ты сидел на траве.', highlight: 'were sitting' },
            { english: 'While we were driving, we saw an accident.', russian: 'Пока мы ехали, мы увидели аварию.', highlight: 'were driving' },
            { english: 'She was walking to the station when she met David.', russian: 'Она шла на станцию, когда встретила Дэвида.', highlight: 'was walking' },
            { english: 'While Kate was studying, her brother was watching TV.', russian: 'Пока Кейт занималась, её брат смотрел телевизор.', highlight: 'was studying' },
          ],
        },
      },
    },

    // ─── Step 3: Negative and question forms ─────────────────────────────────
    {
      id: 'step-3-negative-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Negative and question forms',
          explanation:
            'For <b>negatives</b>, add <b>not</b> after was/were → wasn\'t / weren\'t. ' +
            'For <b>questions</b>, put <b>was/were before the subject</b>.',
          table: {
            headers: ['Type', 'Form'],
            rows: [
              ['Positive', 'I was working / They were working'],
              ['Negative', "I wasn't working / They weren't working"],
              ['Question', 'Was I working? / Were they working?'],
              ['Wh- question', 'What were you doing?'],
              ['Short answer (+)', 'Yes, I was. / Yes, they were.'],
              ['Short answer (−)', "No, I wasn't. / No, they weren't."],
            ],
          },
          notes: [
            "wasn't = was not; weren't = were not.",
            'Short answers use was/were without -ing: "Yes, I was." (NOT "Yes, I was doing.")',
          ],
        },
        ru: {
          title: 'Отрицание и вопросы',
          explanation:
            'Для <b>отрицания</b> добавьте <b>not</b> после was/were → wasn\'t / weren\'t. ' +
            'Для <b>вопросов</b> поставьте <b>was/were перед подлежащим</b>.',
          table: {
            headers: ['Тип', 'Форма'],
            rows: [
              ['Утверждение', 'I was working / They were working'],
              ['Отрицание', "I wasn't working / They weren't working"],
              ['Вопрос', 'Was I working? / Were they working?'],
              ['Вопрос с вопр. словом', 'What were you doing?'],
              ['Краткий ответ (+)', 'Yes, I was. / Yes, they were.'],
              ['Краткий ответ (−)', "No, I wasn't. / No, they weren't."],
            ],
          },
          notes: [
            "wasn't = was not; weren't = were not.",
            'В кратких ответах используем was/were без -ing: "Yes, I was." (НЕ "Yes, I was doing.")',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negatives and questions',
          items: [
            { english: "I wasn't listening, so I missed what he said.", russian: 'Я не слушал, поэтому пропустил, что он сказал.', highlight: "wasn't listening" },
            { english: "They weren't working when the boss arrived.", russian: 'Они не работали, когда пришёл начальник.', highlight: "weren't working" },
            { english: 'Was it raining when you went out? — Yes, it was.', russian: 'Шёл дождь, когда ты вышел? — Да.', highlight: 'Was it raining' },
            { english: "Were you studying at 11 o'clock? — No, I wasn't.", russian: 'Ты учился в 11 часов? — Нет.', highlight: 'Were you studying' },
            { english: 'What was she wearing at the party?', russian: 'Что на ней было надето на вечеринке?', highlight: 'was she wearing' },
            { english: "He wasn't sleeping. He was reading.", russian: 'Он не спал. Он читал.', highlight: "wasn't sleeping" },
            { english: "Where were you going when I saw you?", russian: 'Куда ты шёл, когда я тебя увидел?', highlight: 'were you going' },
          ],
        },
        ru: {
          title: 'Примеры — Отрицания и вопросы',
          items: [
            { english: "I wasn't listening, so I missed what he said.", russian: 'Я не слушал, поэтому пропустил, что он сказал.', highlight: "wasn't listening" },
            { english: "They weren't working when the boss arrived.", russian: 'Они не работали, когда пришёл начальник.', highlight: "weren't working" },
            { english: 'Was it raining when you went out? — Yes, it was.', russian: 'Шёл дождь, когда ты вышел? — Да.', highlight: 'Was it raining' },
            { english: "Were you studying at 11 o'clock? — No, I wasn't.", russian: 'Ты учился в 11 часов? — Нет.', highlight: 'Were you studying' },
            { english: 'What was she wearing at the party?', russian: 'Что на ней было надето на вечеринке?', highlight: 'was she wearing' },
            { english: "He wasn't sleeping. He was reading.", russian: 'Он не спал. Он читал.', highlight: "wasn't sleeping" },
            { english: "Where were you going when I saw you?", russian: 'Куда ты шёл, когда я тебя увидел?', highlight: 'were you going' },
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
              ['I / he / she / it was doing', "wasn't doing", 'Was I / he / she / it doing?'],
              ['we / you / they were doing', "weren't doing", 'Were we / you / they doing?'],
            ],
          },
          notes: ['Remember: was/were + verb-ing.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Утверждение', 'Отрицание', 'Вопрос'],
            rows: [
              ['I / he / she / it was doing', "wasn't doing", 'Was I / he / she / it doing?'],
              ['we / you / they were doing', "weren't doing", 'Were we / you / they doing?'],
            ],
          },
          notes: ['Помните: was/were + глагол-ing.'],
        },
      },
      right: {
        en: {
          title: 'Exercise — Fill in the blanks',
          instructions: 'Complete the sentences with the past continuous (was/were + -ing).',
          questions: [
            {
              id: 'p13-1',
              type: 'fill-blank',
              prompt: 'I ___ (watch) TV at 9 o\'clock last night.',
              translation: "Вчера в девять вечера я смотрел(а) телевизор.",
              correctAnswer: 'was watching',
              explanation: 'I + was + watching → I was watching.',
            },
            {
              id: 'p13-2',
              type: 'fill-blank',
              prompt: 'It ___ (rain) when we went out.',
              translation: "Когда мы вышли, шёл дождь.",
              correctAnswer: 'was raining',
              explanation: 'It + was + raining → It was raining.',
            },
            {
              id: 'p13-3',
              type: 'fill-blank',
              prompt: 'They ___ (not/work) when the boss came.',
              translation: "Они не работали, когда пришёл начальник.",
              correctAnswer: "weren't working",
              altAnswers: ["were not working"],
              explanation: "They + weren't + working → They weren't working.",
            },
            {
              id: 'p13-4',
              type: 'fill-blank',
              prompt: 'What ___ (you/do) at 7 o\'clock yesterday?',
              translation: "Что ты делал(а) вчера в семь часов?",
              correctAnswer: 'were you doing',
              explanation: 'Question form: Were + you + doing → Were you doing?',
            },
            {
              id: 'p13-5',
              type: 'fill-blank',
              prompt: 'She ___ (sit) on the bus when I saw her.',
              translation: "Она сидела в автобусе, когда я её увидел(а).",
              correctAnswer: 'was sitting',
              explanation: 'She + was + sitting → She was sitting.',
            },
            {
              id: 'p13-6',
              type: 'fill-blank',
              prompt: 'We ___ (have) dinner when the phone rang.',
              translation: "Мы ужинали, когда зазвонил телефон.",
              correctAnswer: 'were having',
              explanation: 'We + were + having → We were having.',
            },
          ],
        },
        ru: {
          title: 'Упражнение — Вставьте пропущенное',
          instructions: 'Дополните предложения, используя past continuous (was/were + -ing).',
          questions: [
            {
              id: 'p13-1',
              type: 'fill-blank',
              prompt: 'I ___ (watch) TV at 9 o\'clock last night.',
              translation: "Вчера в девять вечера я смотрел(а) телевизор.",
              correctAnswer: 'was watching',
              explanation: 'I + was + watching → I was watching.',
            },
            {
              id: 'p13-2',
              type: 'fill-blank',
              prompt: 'It ___ (rain) when we went out.',
              translation: "Когда мы вышли, шёл дождь.",
              correctAnswer: 'was raining',
              explanation: 'It + was + raining → It was raining.',
            },
            {
              id: 'p13-3',
              type: 'fill-blank',
              prompt: 'They ___ (not/work) when the boss came.',
              translation: "Они не работали, когда пришёл начальник.",
              correctAnswer: "weren't working",
              altAnswers: ["were not working"],
              explanation: "They + weren't + working → They weren't working.",
            },
            {
              id: 'p13-4',
              type: 'fill-blank',
              prompt: 'What ___ (you/do) at 7 o\'clock yesterday?',
              translation: "Что ты делал(а) вчера в семь часов?",
              correctAnswer: 'were you doing',
              explanation: 'Вопрос: Were + you + doing → Were you doing?',
            },
            {
              id: 'p13-5',
              type: 'fill-blank',
              prompt: 'She ___ (sit) on the bus when I saw her.',
              translation: "Она сидела в автобусе, когда я её увидел(а).",
              correctAnswer: 'was sitting',
              explanation: 'She + was + sitting → She was sitting.',
            },
            {
              id: 'p13-6',
              type: 'fill-blank',
              prompt: 'We ___ (have) dinner when the phone rang.',
              translation: "Мы ужинали, когда зазвонил телефон.",
              correctAnswer: 'were having',
              explanation: 'We + were + having → We were having.',
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
          title: 'Quick Quiz — Past continuous',
          description: 'Choose the correct answer for each question.',
          questions: [
            {
              id: 'q13-1',
              question: 'Which is correct? "At 7 o\'clock yesterday, I ___."',
              options: ['was cooking dinner', 'cooked dinner', 'am cooking dinner'],
              correctIndex: 0,
              explanation: 'We use the past continuous for an action in progress at a specific time in the past.',
            },
            {
              id: 'q13-2',
              question: '"She ___ when the accident happened."',
              options: ['was driving', 'drove', 'is driving'],
              correctIndex: 0,
              explanation: 'The past continuous describes the background action; "happened" is the interruption.',
            },
            {
              id: 'q13-3',
              question: 'Which is the correct negative?',
              options: ["I wasn't sleeping.", "I weren't sleeping.", "I not was sleeping."],
              correctIndex: 0,
              explanation: "With I / he / she / it, we use \"wasn't\" (was not).",
            },
            {
              id: 'q13-4',
              question: '"___ they ___ when you arrived?"',
              options: ['Were ... working', 'Was ... working', 'Did ... working'],
              correctIndex: 0,
              explanation: 'With "they" we use "were" → Were they working?',
            },
            {
              id: 'q13-5',
              question: '"While I ___, the doorbell rang."',
              options: ['was having a shower', 'had a shower', 'have a shower'],
              correctIndex: 0,
              explanation: '"While" introduces the longer background action → past continuous.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Past continuous',
          description: 'Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q13-1',
              question: 'Какой вариант правильный? "At 7 o\'clock yesterday, I ___."',
              options: ['was cooking dinner', 'cooked dinner', 'am cooking dinner'],
              correctIndex: 0,
              explanation: 'Мы используем past continuous для действия, которое происходило в определённый момент в прошлом.',
            },
            {
              id: 'q13-2',
              question: '"She ___ when the accident happened."',
              options: ['was driving', 'drove', 'is driving'],
              correctIndex: 0,
              explanation: 'Past continuous описывает фоновое действие; "happened" — прерывание.',
            },
            {
              id: 'q13-3',
              question: 'Какое отрицание правильное?',
              options: ["I wasn't sleeping.", "I weren't sleeping.", "I not was sleeping."],
              correctIndex: 0,
              explanation: "С I / he / she / it используем \"wasn't\" (was not).",
            },
            {
              id: 'q13-4',
              question: '"___ they ___ when you arrived?"',
              options: ['Were ... working', 'Was ... working', 'Did ... working'],
              correctIndex: 0,
              explanation: 'С "they" используем "were" → Were they working?',
            },
            {
              id: 'q13-5',
              question: '"While I ___, the doorbell rang."',
              options: ['was having a shower', 'had a shower', 'have a shower'],
              correctIndex: 0,
              explanation: '"While" вводит длительное фоновое действие → past continuous.',
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
          title: 'Summary — Past continuous',
          points: [
            'Form: <b>was/were</b> + verb<b>-ing</b> → I was working, they were playing.',
            'Use <b>was</b> with I / he / she / it; use <b>were</b> with we / you / they.',
            'Use the past continuous for an action <b>in progress at a particular time</b> in the past.',
            'Negative: <b>wasn\'t / weren\'t</b> + -ing → She wasn\'t sleeping.',
            'Questions: <b>Was/Were</b> + subject + -ing → Were you listening?',
            'Use <b>when</b> before the short action (past simple) and <b>while</b> before the long action (past continuous).',
          ],
          nextUnit: 'Unit 14 — I was doing vs I did',
        },
        ru: {
          title: 'Итоги — Past continuous',
          points: [
            'Форма: <b>was/were</b> + глагол<b>-ing</b> → I was working, they were playing.',
            'С I / he / she / it используем <b>was</b>; с we / you / they — <b>were</b>.',
            'Используем past continuous для действия, которое <b>было в процессе в определённый момент</b> в прошлом.',
            'Отрицание: <b>wasn\'t / weren\'t</b> + -ing → She wasn\'t sleeping.',
            'Вопросы: <b>Was/Were</b> + подлежащее + -ing → Were you listening?',
            'Используем <b>when</b> перед коротким действием (past simple) и <b>while</b> перед длительным действием (past continuous).',
          ],
          nextUnit: 'Юнит 14 — I was doing vs I did',
        },
      },
    },
  ],
};

export default unit13;
