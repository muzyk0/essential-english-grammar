import type { Unit } from '../../types/unit';

// Unit 3: I am doing (present continuous)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 3)
const unit3: Unit = {
  id: 'unit3',
  number: 3,
  title: {
    en: 'I am doing (present continuous)',
    ru: 'I am doing (настоящее длительное)',
  },
  description: {
    en: 'The present continuous tense — how to form it and use it for actions happening right now.',
    ru: 'Настоящее длительное время — образование и употребление для действий, происходящих прямо сейчас.',
  },
  steps: [
    // ─── Step 1: Positive forms (theory + examples) ──────────────────────────
    {
      id: 'step-3-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'Present continuous — positive forms',
          explanation:
            'We use the <b>present continuous</b> for things happening <em>at the moment of speaking</em>. ' +
            'Form: <b>am / is / are + verb-ing</b> (the -ing form of the main verb).',
          table: {
            headers: ['Subject', 'am/is/are', 'verb-ing', 'Contraction'],
            rows: [
              ['I', 'am', 'working', "I'm working"],
              ['he / she / it', 'is', 'working', "he's / she's / it's working"],
              ['we / you / they', 'are', 'working', "we're / you're / they're working"],
            ],
          },
          notes: [
            'The -ing form is also called the present participle.',
            'We nearly always use contractions in speech: "I\'m reading", "She\'s sleeping".',
          ],
        },
        ru: {
          title: 'Настоящее длительное — утвердительные формы',
          explanation:
            'Мы используем <b>настоящее длительное время</b> для действий, происходящих <em>в момент речи</em>. ' +
            'Образование: <b>am / is / are + глагол-ing</b> (форма основного глагола с окончанием -ing).',
          table: {
            headers: ['Подлежащее', 'am/is/are', 'глагол-ing', 'Краткая форма'],
            rows: [
              ['I (я)', 'am', 'working', "I'm working"],
              ['he / she / it (он/она/оно)', 'is', 'working', "he's / she's / it's working"],
              ['we / you / they (мы/вы/они)', 'are', 'working', "we're / you're / they're working"],
            ],
          },
          notes: [
            'Форма на -ing называется причастием настоящего времени.',
            'В разговорной речи почти всегда используются краткие формы: "I\'m reading", "She\'s sleeping".',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Actions happening now',
          intro: 'These things are happening right now, at the moment of speaking.',
          items: [
            { english: "Please be quiet. I'm working.", russian: 'Пожалуйста, потише. Я работаю.', highlight: "I'm working" },
            { english: "Tom is watching TV at the moment.", russian: 'Том сейчас смотрит телевизор.', highlight: 'is watching' },
            { english: "She's reading a book.", russian: 'Она читает книгу.', highlight: "She's reading" },
            { english: "It's raining outside.", russian: 'На улице идёт дождь.', highlight: "It's raining" },
            { english: "We're having dinner.", russian: 'Мы ужинаем.', highlight: "We're having" },
            { english: "Look! They're running.", russian: 'Смотри! Они бегут.', highlight: "They're running" },
            { english: "You're making too much noise!", russian: 'Ты слишком шумишь!', highlight: "You're making" },
            { english: "The baby is sleeping.", russian: 'Ребёнок спит.', highlight: 'is sleeping' },
            { english: "I'm learning English.", russian: 'Я учу английский.', highlight: "I'm learning" },
          ],
        },
        ru: {
          title: 'Примеры — Действия, происходящие сейчас',
          intro: 'Эти действия происходят прямо сейчас, в момент речи.',
          items: [
            { english: "Please be quiet. I'm working.", russian: 'Пожалуйста, потише. Я работаю.', highlight: "I'm working" },
            { english: "Tom is watching TV at the moment.", russian: 'Том сейчас смотрит телевизор.', highlight: 'is watching' },
            { english: "She's reading a book.", russian: 'Она читает книгу.', highlight: "She's reading" },
            { english: "It's raining outside.", russian: 'На улице идёт дождь.', highlight: "It's raining" },
            { english: "We're having dinner.", russian: 'Мы ужинаем.', highlight: "We're having" },
            { english: "Look! They're running.", russian: 'Смотри! Они бегут.', highlight: "They're running" },
            { english: "You're making too much noise!", russian: 'Ты слишком шумишь!', highlight: "You're making" },
            { english: "The baby is sleeping.", russian: 'Ребёнок спит.', highlight: 'is sleeping' },
            { english: "I'm learning English.", russian: 'Я учу английский.', highlight: "I'm learning" },
          ],
        },
      },
    },

    // ─── Step 2: Negative forms ───────────────────────────────────────────────
    {
      id: 'step-3-2-negative',
      type: 'examples',
      left: {
        en: {
          title: 'Negative forms',
          explanation:
            'To make a negative present continuous, add <b>not</b> after am / is / are. ' +
            'In speech we use contractions: <b>isn\'t</b> or <b>aren\'t</b>.',
          table: {
            headers: ['Full form', 'Contraction'],
            rows: [
              ['I am not working', "I'm not working"],
              ['he / she / it is not working', "he isn't working  /  he's not working"],
              ['we / you / they are not working', "we aren't working  /  we're not working"],
            ],
          },
          notes: [
            '"I\'m not" is the only contraction for I am not. (NOT "I amn\'t")',
            'Both "isn\'t" and "\'s not" are correct for he/she/it.',
          ],
        },
        ru: {
          title: 'Отрицательные формы',
          explanation:
            'Чтобы образовать отрицание настоящего длительного, добавьте <b>not</b> после am / is / are. ' +
            'В разговорной речи используем краткие формы: <b>isn\'t</b> или <b>aren\'t</b>.',
          table: {
            headers: ['Полная форма', 'Краткая форма'],
            rows: [
              ['I am not working', "I'm not working"],
              ['he / she / it is not working', "he isn't working  /  he's not working"],
              ['we / you / they are not working', "we aren't working  /  we're not working"],
            ],
          },
          notes: [
            '"I\'m not" — единственная краткая форма для I am not. (НЕ "I amn\'t")',
            'Оба варианта — "isn\'t" и "\'s not" — правильны для he/she/it.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negative sentences',
          intro: 'Compare what IS and IS NOT happening right now.',
          items: [
            { english: "I'm reading but I'm not watching TV.", russian: 'Я читаю, но не смотрю телевизор.', highlight: "I'm not watching" },
            { english: "She isn't working today. She's on holiday.", russian: 'Сегодня она не работает. Она в отпуске.', highlight: "isn't working" },
            { english: "They aren't playing football — they're swimming.", russian: 'Они не играют в футбол — они плавают.', highlight: "aren't playing" },
            { english: "It isn't raining now.", russian: 'Сейчас не идёт дождь.', highlight: "isn't raining" },
            { english: "We aren't waiting for anyone.", russian: 'Мы никого не ждём.', highlight: "aren't waiting" },
            { english: "He isn't sleeping — he's just resting.", russian: 'Он не спит — он просто отдыхает.', highlight: "isn't sleeping" },
            { english: "I'm not complaining. I'm just explaining.", russian: 'Я не жалуюсь. Я просто объясняю.', highlight: "I'm not complaining" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицательные предложения',
          intro: 'Сравните, что происходит и что НЕ происходит прямо сейчас.',
          items: [
            { english: "I'm reading but I'm not watching TV.", russian: 'Я читаю, но не смотрю телевизор.', highlight: "I'm not watching" },
            { english: "She isn't working today. She's on holiday.", russian: 'Сегодня она не работает. Она в отпуске.', highlight: "isn't working" },
            { english: "They aren't playing football — they're swimming.", russian: 'Они не играют в футбол — они плавают.', highlight: "aren't playing" },
            { english: "It isn't raining now.", russian: 'Сейчас не идёт дождь.', highlight: "isn't raining" },
            { english: "We aren't waiting for anyone.", russian: 'Мы никого не ждём.', highlight: "aren't waiting" },
            { english: "He isn't sleeping — he's just resting.", russian: 'Он не спит — он просто отдыхает.', highlight: "isn't sleeping" },
            { english: "I'm not complaining. I'm just explaining.", russian: 'Я не жалуюсь. Я просто объясняю.', highlight: "I'm not complaining" },
          ],
        },
      },
    },

    // ─── Step 3: Happening now + -ing spelling ────────────────────────────────
    {
      id: 'step-3-3-now-spelling',
      type: 'theory',
      left: {
        en: {
          title: 'Happening now & -ing spelling',
          explanation:
            'We use the <b>present continuous</b> for actions happening now or around now. ' +
            'We also need the correct spelling before <b>-ing</b>.',
          table: {
            headers: ['Focus', 'Rule / meaning', 'Example'],
            rows: [
              ['now', 'action happening at this moment', "I'm talking to you now."],
              ['around now', 'temporary action in progress this period', "We're staying with friends this week."],
              ['spelling: drop -e', 'remove final -e before -ing', 'write → writing'],
              ['spelling: double consonant', 'double after a short stressed vowel', 'sit → sitting'],
              ['spelling: -ie → y', 'change -ie before -ing', 'lie → lying'],
            ],
          },
          notes: [
            'Common time expressions are <b>now</b>, <b>right now</b>, <b>at the moment</b>, <b>today</b> and <b>this week</b>.',
            'This unit focuses on actions in progress, not on routine actions.',
          ],
        },
        ru: {
          title: 'Сейчас происходит + правописание -ing',
          explanation:
            'Мы используем <b>present continuous</b> для действий, которые происходят сейчас или в текущий период. ' +
            'Также важно правильно писать форму с <b>-ing</b>.',
          table: {
            headers: ['Фокус', 'Правило / значение', 'Пример'],
            rows: [
              ['now', 'действие происходит прямо в этот момент', "I'm talking to you now."],
              ['around now', 'временная ситуация в текущий период', "We're staying with friends this week."],
              ['правописание: drop -e', 'убираем конечную -e перед -ing', 'write → writing'],
              ['правописание: двойная согласная', 'удваиваем после короткого ударного гласного', 'sit → sitting'],
              ['правописание: -ie → y', 'меняем -ie перед -ing', 'lie → lying'],
            ],
          },
          notes: [
            'Часто используются слова <b>now</b>, <b>right now</b>, <b>at the moment</b>, <b>today</b> и <b>this week</b>.',
            'Этот юнит про действия в процессе, а не про регулярные привычки.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — happening now',
          items: [
            { english: "Please don't turn off the light. I'm reading.", russian: 'Пожалуйста, не выключай свет. Я читаю.', highlight: "I'm reading" },
            { english: "Look at Eva. She's wearing two different shoes.", russian: 'Посмотри на Еву. На ней две разные туфли.', highlight: "She's wearing" },
            { english: "We're staying with my aunt this week.", russian: 'На этой неделе мы живём у моей тёти.', highlight: "We're staying" },
            { english: 'The dog is lying in the sun.', russian: 'Собака лежит на солнце.', highlight: 'is lying' },
            { english: 'The students are writing a test right now.', russian: 'Студенты прямо сейчас пишут тест.', highlight: 'are writing' },
            { english: "Tom isn't cooking tonight. He's eating out.", russian: 'Том сегодня не готовит. Он ужинает вне дома.', highlight: "isn't cooking" },
            { english: 'The bus is coming now. Let\'s go.', russian: 'Автобус сейчас подъезжает. Пойдём.', highlight: 'is coming' },
          ],
        },
        ru: {
          title: 'Примеры — Что происходит сейчас',
          items: [
            { english: "Please don't turn off the light. I'm reading.", russian: 'Пожалуйста, не выключай свет. Я читаю.', highlight: "I'm reading" },
            { english: "Look at Eva. She's wearing two different shoes.", russian: 'Посмотри на Еву. На ней две разные туфли.', highlight: "She's wearing" },
            { english: "We're staying with my aunt this week.", russian: 'На этой неделе мы живём у моей тёти.', highlight: "We're staying" },
            { english: 'The dog is lying in the sun.', russian: 'Собака лежит на солнце.', highlight: 'is lying' },
            { english: 'The students are writing a test right now.', russian: 'Студенты прямо сейчас пишут тест.', highlight: 'are writing' },
            { english: "Tom isn't cooking tonight. He's eating out.", russian: 'Том сегодня не готовит. Он ужинает вне дома.', highlight: "isn't cooking" },
            { english: 'The bus is coming now. Let\'s go.', russian: 'Автобус сейчас подъезжает. Пойдём.', highlight: 'is coming' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step-3-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Form', 'Pattern', 'Example'],
            rows: [
              ['Positive', "I'm / he's / they're + -ing", "I'm eating"],
              ['Negative', "I'm not / isn't / aren't + -ing", "She isn't working"],
              ['Spelling', 'drop -e / double consonant / -ie → y', 'write → writing / sit → sitting / lie → lying'],
            ],
          },
          notes: [
            'For short verbs ending in a vowel + consonant (sit, run), double the consonant: sitting, running.',
            'Drop the final -e before -ing: have → having, write → writing.',
          ],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Форма', 'Схема', 'Пример'],
            rows: [
              ['Утверждение', "I'm / he's / they're + -ing", "I'm eating"],
              ['Отрицание', "I'm not / isn't / aren't + -ing", "She isn't working"],
              ['Правописание', 'drop -e / двойная согласная / -ie → y', 'write → writing / sit → sitting / lie → lying'],
            ],
          },
          notes: [
            'Для коротких глаголов, оканчивающихся на гласный + согласный (sit, run), удваивайте согласную: sitting, running.',
            'Перед -ing убирайте конечное -e: have → having, write → writing.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Write the correct present continuous form. Use contractions where possible.',
          questions: [
            {
              id: 'p3-1',
              type: 'fill-blank',
              prompt: 'She ___ (read) a magazine at the moment.',
              translation: "Сейчас она читает журнал.",
              correctAnswer: "is reading",
              altAnswers: ["'s reading"],
              explanation: "she + is + read-ing → she is reading (or she's reading)",
            },
            {
              id: 'p3-2',
              type: 'fill-blank',
              prompt: 'I ___ (not/watch) TV right now.',
              translation: "Сейчас я не смотрю телевизор.",
              correctAnswer: "am not watching",
              altAnswers: ["'m not watching"],
              explanation: "I am not + watch-ing → I'm not watching",
            },
            {
              id: 'p3-3',
              type: 'fill-blank',
              prompt: 'They ___ (wait) for the bus.',
              translation: "Они ждут автобус.",
              correctAnswer: 'are waiting',
              altAnswers: ["'re waiting"],
              explanation: "they + are + wait-ing → they're waiting / they are waiting",
            },
            {
              id: 'p3-4',
              type: 'fill-blank',
              prompt: 'He ___ (sit) on the floor.',
              translation: "Он сидит на полу.",
              correctAnswer: 'is sitting',
              altAnswers: ["'s sitting"],
              explanation: 'sit → sitting (double t). he + is + sitting',
            },
            {
              id: 'p3-5',
              type: 'fill-blank',
              prompt: 'We ___ (have) lunch now.',
              translation: "Мы сейчас обедаем.",
              correctAnswer: 'are having',
              altAnswers: ["'re having"],
              explanation: 'have → having (drop e). we + are + having',
            },
            {
              id: 'p3-6',
              type: 'fill-blank',
              prompt: 'It ___ (rain). Take an umbrella!',
              translation: "Идёт дождь. Возьми зонтик!",
              correctAnswer: 'is raining',
              altAnswers: ["'s raining"],
              explanation: 'it + is + rain-ing → it is raining',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Напишите правильную форму настоящего длительного. По возможности используйте краткие формы.',
          questions: [
            {
              id: 'p3-1',
              type: 'fill-blank',
              prompt: 'She ___ (read) a magazine at the moment.',
              translation: "Сейчас она читает журнал.",
              correctAnswer: 'is reading',
              altAnswers: ["'s reading"],
              explanation: "she + is + read-ing → she is reading (или she's reading)",
            },
            {
              id: 'p3-2',
              type: 'fill-blank',
              prompt: 'I ___ (not/watch) TV right now.',
              translation: "Сейчас я не смотрю телевизор.",
              correctAnswer: 'am not watching',
              altAnswers: ["'m not watching"],
              explanation: "I am not + watch-ing → I'm not watching",
            },
            {
              id: 'p3-3',
              type: 'fill-blank',
              prompt: 'They ___ (wait) for the bus.',
              translation: "Они ждут автобус.",
              correctAnswer: 'are waiting',
              altAnswers: ["'re waiting"],
              explanation: "they + are + wait-ing → they're waiting / they are waiting",
            },
            {
              id: 'p3-4',
              type: 'fill-blank',
              prompt: 'He ___ (sit) on the floor.',
              translation: "Он сидит на полу.",
              correctAnswer: 'is sitting',
              altAnswers: ["'s sitting"],
              explanation: 'sit → sitting (удвоение t). he + is + sitting',
            },
            {
              id: 'p3-5',
              type: 'fill-blank',
              prompt: 'We ___ (have) lunch now.',
              translation: "Мы сейчас обедаем.",
              correctAnswer: 'are having',
              altAnswers: ["'re having"],
              explanation: 'have → having (убираем e). we + are + having',
            },
            {
              id: 'p3-6',
              type: 'fill-blank',
              prompt: 'It ___ (rain). Take an umbrella!',
              translation: "Идёт дождь. Возьми зонтик!",
              correctAnswer: 'is raining',
              altAnswers: ["'s raining"],
              explanation: 'it + is + rain-ing → it is raining',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-3-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — present continuous',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q3-1',
              question: 'Which sentence is correct?',
              options: [
                "She is read a book.",
                "She's reading a book.",
                "She reading a book.",
              ],
              correctIndex: 1,
              explanation: 'Present continuous = is + verb-ing. "She\'s reading" is correct.',
            },
            {
              id: 'q3-2',
              question: 'What is the -ing form of "sit"?',
              options: ['siting', 'sitting', 'siteing'],
              correctIndex: 1,
              explanation: 'Short verb ending in vowel + consonant: double the consonant → sitting.',
            },
            {
              id: 'q3-3',
              question: 'How do you say "Он не работает" (right now) in English?',
              options: [
                "He doesn't working.",
                "He not working.",
                "He isn't working.",
              ],
              correctIndex: 2,
              explanation: 'Negative present continuous: he + isn\'t + working.',
            },
            {
              id: 'q3-4',
              question: 'What is the -ing form of "write"?',
              options: ['writeing', 'writting', 'writing'],
              correctIndex: 2,
              explanation: 'Verbs ending in -e: drop the e and add -ing → writing.',
            },
            {
              id: 'q3-5',
              question: 'Which sentence is about something happening now?',
              options: [
                'I go to work by bus.',
                "I'm waiting for the bus.",
                'I waited for the bus yesterday.',
              ],
              correctIndex: 1,
              explanation: 'The present continuous describes something happening now → "I\'m waiting for the bus."',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — настоящее длительное',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q3-1',
              question: 'Какое предложение правильное?',
              options: [
                "She is read a book.",
                "She's reading a book.",
                "She reading a book.",
              ],
              correctIndex: 1,
              explanation: 'Настоящее длительное = is + глагол-ing. "She\'s reading" — правильно.',
            },
            {
              id: 'q3-2',
              question: 'Какова форма -ing от глагола "sit"?',
              options: ['siting', 'sitting', 'siteing'],
              correctIndex: 1,
              explanation: 'Короткий глагол, оканчивающийся на гласный + согласный: удваиваем согласную → sitting.',
            },
            {
              id: 'q3-3',
              question: 'Как сказать "Он не работает" (прямо сейчас) по-английски?',
              options: [
                "He doesn't working.",
                "He not working.",
                "He isn't working.",
              ],
              correctIndex: 2,
              explanation: 'Отрицательное настоящее длительное: he + isn\'t + working.',
            },
            {
              id: 'q3-4',
              question: 'Какова форма -ing от глагола "write"?',
              options: ['writeing', 'writting', 'writing'],
              correctIndex: 2,
              explanation: 'Глаголы на -e: убираем e, добавляем -ing → writing.',
            },
            {
              id: 'q3-5',
              question: 'Какое предложение описывает действие, происходящее сейчас?',
              options: [
                'I go to work by bus.',
                "I'm waiting for the bus.",
                'I waited for the bus yesterday.',
              ],
              correctIndex: 1,
              explanation: 'Present continuous описывает то, что происходит сейчас → "I\'m waiting for the bus."',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-3-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — present continuous',
          points: [
            'Use <b>am / is / are + verb-ing</b> for actions happening <em>right now</em>.',
            'Contractions in speech: <b>I\'m working</b>, <b>she\'s reading</b>, <b>they\'re waiting</b>.',
            'Negative: <b>isn\'t</b> / <b>aren\'t</b> + -ing → "She isn\'t sleeping."',
            'Use it for actions happening <b>now</b> or for temporary situations <b>around now</b> → "We\'re staying with friends this week."',
            'Spelling: drop final <b>-e</b> (write → writing), double consonant for short verbs (sit → sitting).',
            'Short answers use the full auxiliary: "Yes, I <b>am</b>." / "No, she <b>isn\'t</b>."',
          ],
          nextUnit: 'Unit 4 — are you doing? (questions & negatives)',
        },
        ru: {
          title: 'Итоги — настоящее длительное',
          points: [
            'Используем <b>am / is / are + глагол-ing</b> для действий, происходящих <em>прямо сейчас</em>.',
            'Краткие формы в речи: <b>I\'m working</b>, <b>she\'s reading</b>, <b>they\'re waiting</b>.',
            'Отрицание: <b>isn\'t</b> / <b>aren\'t</b> + -ing → "She isn\'t sleeping."',
            'Используем это время для действий <b>сейчас</b> и временных ситуаций <b>в текущий период</b> → "We\'re staying with friends this week."',
            'Правописание: убираем конечное <b>-e</b> (write → writing), удваиваем согласную у коротких глаголов (sit → sitting).',
            'В кратких ответах используем вспомогательный глагол полностью: "Yes, I <b>am</b>." / "No, she <b>isn\'t</b>."',
          ],
          nextUnit: 'Юнит 4 — are you doing? (вопросы и отрицание)',
        },
      },
    },
  ],
};

export default unit3;
