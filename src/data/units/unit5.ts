import type { Unit } from '../../types/unit';

// Unit 5: I do/work/like (present simple — positive)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 5)
const unit5: Unit = {
  id: 'unit5',
  number: 5,
  title: {
    en: 'I do / work / like (present simple)',
    ru: 'I do / work / like (настоящее простое)',
  },
  description: {
    en: 'How to form and use the present simple tense — positive forms, spelling rules, and typical uses.',
    ru: 'Как образовать и использовать настоящее простое время — утвердительные формы, правила правописания и типичные случаи употребления.',
  },
  steps: [
    // ─── Step 1: Positive forms (theory + examples) ───────────────────────────
    {
      id: 'step-5-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'Present simple — positive forms',
          explanation:
            'The <b>present simple</b> is the base form of the verb. ' +
            'We use it for habits, routines, and facts. ' +
            'Add <b>-s</b> (or <b>-es</b>) to the verb for <em>he / she / it</em>.',
          table: {
            headers: ['Subject', 'Verb form', 'Example'],
            rows: [
              ['I', 'work', 'I work in an office.'],
              ['you', 'work', 'You work hard.'],
              ['we', 'work', 'We work together.'],
              ['they', 'work', 'They work at night.'],
              ['he', 'work<b>s</b>', 'He works in a bank.'],
              ['she', 'work<b>s</b>', 'She works every day.'],
              ['it', 'work<b>s</b>', 'It works perfectly.'],
            ],
          },
          notes: [
            'I / you / we / they → base verb (no change): work, like, play',
            'he / she / it → add -s: works, likes, plays',
          ],
        },
        ru: {
          title: 'Настоящее простое — утвердительные формы',
          explanation:
            '<b>Настоящее простое время</b> образуется от основной формы глагола. ' +
            'Мы используем его для привычек, распорядка дня и фактов. ' +
            'К глаголу добавляем <b>-s</b> (или <b>-es</b>) для <em>he / she / it</em>.',
          table: {
            headers: ['Подлежащее', 'Форма глагола', 'Пример'],
            rows: [
              ['I (я)', 'work', 'I work in an office.'],
              ['you (ты/вы)', 'work', 'You work hard.'],
              ['we (мы)', 'work', 'We work together.'],
              ['they (они)', 'work', 'They work at night.'],
              ['he (он)', 'work<b>s</b>', 'He works in a bank.'],
              ['she (она)', 'work<b>s</b>', 'She works every day.'],
              ['it (оно)', 'work<b>s</b>', 'It works perfectly.'],
            ],
          },
          notes: [
            'I / you / we / they → основная форма глагола (без изменений): work, like, play',
            'he / she / it → добавляем -s: works, likes, plays',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Everyday habits and facts',
          intro: 'Study these sentences. Notice the verb form changes only for he / she / it.',
          items: [
            { english: 'I like coffee.', russian: 'Я люблю кофе.', highlight: 'like' },
            { english: 'She likes tea.', russian: 'Она любит чай.', highlight: 'likes' },
            { english: 'They live in Paris.', russian: 'Они живут в Париже.', highlight: 'live' },
            { english: 'He lives in Rome.', russian: 'Он живёт в Риме.', highlight: 'lives' },
            { english: 'We play football on Sundays.', russian: 'Мы играем в футбол по воскресеньям.', highlight: 'play' },
            { english: 'She plays the piano.', russian: 'Она играет на пианино.', highlight: 'plays' },
            { english: 'I read a lot.', russian: 'Я много читаю.', highlight: 'read' },
            { english: 'He reads every evening.', russian: 'Он читает каждый вечер.', highlight: 'reads' },
            { english: 'The sun rises in the east.', russian: 'Солнце встаёт на востоке.', highlight: 'rises' },
          ],
        },
        ru: {
          title: 'Примеры — Повседневные привычки и факты',
          intro: 'Изучите эти предложения. Обратите внимание: форма глагола меняется только для he / she / it.',
          items: [
            { english: 'I like coffee.', russian: 'Я люблю кофе.', highlight: 'like' },
            { english: 'She likes tea.', russian: 'Она любит чай.', highlight: 'likes' },
            { english: 'They live in Paris.', russian: 'Они живут в Париже.', highlight: 'live' },
            { english: 'He lives in Rome.', russian: 'Он живёт в Риме.', highlight: 'lives' },
            { english: 'We play football on Sundays.', russian: 'Мы играем в футбол по воскресеньям.', highlight: 'play' },
            { english: 'She plays the piano.', russian: 'Она играет на пианино.', highlight: 'plays' },
            { english: 'I read a lot.', russian: 'Я много читаю.', highlight: 'read' },
            { english: 'He reads every evening.', russian: 'Он читает каждый вечер.', highlight: 'reads' },
            { english: 'The sun rises in the east.', russian: 'Солнце встаёт на востоке.', highlight: 'rises' },
          ],
        },
      },
    },

    // ─── Step 2: Spelling rules for -s / -es ──────────────────────────────────
    {
      id: 'step-5-2-spelling',
      type: 'examples',
      left: {
        en: {
          title: 'Spelling: -s, -es, -ies',
          explanation:
            'Most verbs simply add <b>-s</b> in the third person. ' +
            'But some verbs need <b>-es</b> or change <b>-y → -ies</b>.',
          table: {
            headers: ['Rule', 'Ending', 'Example'],
            rows: [
              ['Most verbs', '+ s', 'work → works, like → likes'],
              ['Verbs ending in -sh, -ch, -ss, -x, -o', '+ es', 'wash → washes, watch → watches, go → goes, do → does'],
              ['Verbs ending in consonant + y', 'y → ies', 'study → studies, carry → carries, fly → flies'],
              ['Verbs ending in vowel + y', '+ s', 'play → plays, enjoy → enjoys, say → says'],
            ],
          },
          notes: [
            '"have" is irregular: I have → he has',
            '"do" and "go" add -es: he does, she goes',
          ],
        },
        ru: {
          title: 'Правописание: -s, -es, -ies',
          explanation:
            'Большинство глаголов просто добавляют <b>-s</b> в третьем лице. ' +
            'Но некоторые глаголы требуют <b>-es</b> или меняют <b>-y → -ies</b>.',
          table: {
            headers: ['Правило', 'Окончание', 'Пример'],
            rows: [
              ['Большинство глаголов', '+ s', 'work → works, like → likes'],
              ['Глаголы на -sh, -ch, -ss, -x, -o', '+ es', 'wash → washes, watch → watches, go → goes, do → does'],
              ['Глаголы на согласную + y', 'y → ies', 'study → studies, carry → carries, fly → flies'],
              ['Глаголы на гласную + y', '+ s', 'play → plays, enjoy → enjoys, say → says'],
            ],
          },
          notes: [
            '"have" — неправильный глагол: I have → he has',
            '"do" и "go" добавляют -es: he does, she goes',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Spelling in action',
          intro: 'Notice how the spelling changes in the third person singular.',
          items: [
            { english: 'She washes the dishes every morning.', russian: 'Она моет посуду каждое утро.', highlight: 'washes' },
            { english: 'He watches TV after dinner.', russian: 'Он смотрит телевизор после ужина.', highlight: 'watches' },
            { english: 'She goes to the gym three times a week.', russian: 'Она ходит в спортзал три раза в неделю.', highlight: 'goes' },
            { english: 'He does his homework in the evening.', russian: 'Он делает домашнюю работу вечером.', highlight: 'does' },
            { english: 'She studies French at university.', russian: 'Она изучает французский в университете.', highlight: 'studies' },
            { english: 'The bird flies south in winter.', russian: 'Птица летит на юг зимой.', highlight: 'flies' },
            { english: 'He has a good job.', russian: 'У него хорошая работа.', highlight: 'has' },
            { english: 'She enjoys cooking.', russian: 'Она любит готовить.', highlight: 'enjoys' },
          ],
        },
        ru: {
          title: 'Примеры — Правописание на практике',
          intro: 'Обратите внимание на изменения правописания в третьем лице единственного числа.',
          items: [
            { english: 'She washes the dishes every morning.', russian: 'Она моет посуду каждое утро.', highlight: 'washes' },
            { english: 'He watches TV after dinner.', russian: 'Он смотрит телевизор после ужина.', highlight: 'watches' },
            { english: 'She goes to the gym three times a week.', russian: 'Она ходит в спортзал три раза в неделю.', highlight: 'goes' },
            { english: 'He does his homework in the evening.', russian: 'Он делает домашнюю работу вечером.', highlight: 'does' },
            { english: 'She studies French at university.', russian: 'Она изучает французский в университете.', highlight: 'studies' },
            { english: 'The bird flies south in winter.', russian: 'Птица летит на юг зимой.', highlight: 'flies' },
            { english: 'He has a good job.', russian: 'У него хорошая работа.', highlight: 'has' },
            { english: 'She enjoys cooking.', russian: 'Она любит готовить.', highlight: 'enjoys' },
          ],
        },
      },
    },

    // ─── Step 3: When to use the present simple ───────────────────────────────
    {
      id: 'step-5-3-uses',
      type: 'theory',
      left: {
        en: {
          title: 'When do we use the present simple?',
          explanation:
            'The present simple describes <b>repeated actions</b>, <b>general truths</b>, and <b>permanent situations</b>. ' +
            'It is often used with <em>frequency adverbs</em>.',
          table: {
            headers: ['Use', 'Signal words', 'Example'],
            rows: [
              ['Habits & routines', 'always, usually, often, sometimes, never, every day', 'I always have breakfast.'],
              ['General truths & facts', '—', 'Water boils at 100°C.'],
              ['Permanent situations', 'live, work, come from', 'She lives in Madrid.'],
              ['Timetables & schedules', 'at 8 o\'clock, on Mondays', 'The train leaves at 7.'],
            ],
          },
          notes: [
            'Frequency adverbs go before the main verb: I <em>always</em> walk to work.',
            'But after "to be": She <em>is</em> always late.',
          ],
        },
        ru: {
          title: 'Когда мы используем настоящее простое?',
          explanation:
            'Настоящее простое описывает <b>повторяющиеся действия</b>, <b>общие истины</b> и <b>постоянные ситуации</b>. ' +
            'Часто используется с <em>наречиями частотности</em>.',
          table: {
            headers: ['Употребление', 'Слова-сигналы', 'Пример'],
            rows: [
              ['Привычки и распорядок', 'always, usually, often, sometimes, never, every day', 'I always have breakfast.'],
              ['Общие истины и факты', '—', 'Water boils at 100°C.'],
              ['Постоянные ситуации', 'live, work, come from', 'She lives in Madrid.'],
              ['Расписания', 'at 8 o\'clock, on Mondays', 'The train leaves at 7.'],
            ],
          },
          notes: [
            'Наречия частотности стоят перед основным глаголом: I <em>always</em> walk to work.',
            'Но после "to be": She <em>is</em> always late.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Uses of the present simple',
          items: [
            { english: 'I always get up at 7 o\'clock.', russian: 'Я всегда встаю в 7 часов.', highlight: 'always' },
            { english: 'She usually takes the bus to work.', russian: 'Она обычно едет на работу на автобусе.', highlight: 'usually' },
            { english: 'He sometimes works late.', russian: 'Иногда он работает допоздна.', highlight: 'sometimes' },
            { english: 'We never eat meat.', russian: 'Мы никогда не едим мясо.', highlight: 'never' },
            { english: 'The Earth goes around the Sun.', russian: 'Земля вращается вокруг Солнца.', highlight: 'goes' },
            { english: 'I come from Poland.', russian: 'Я из Польши.', highlight: 'come' },
            { english: 'The shop opens at 9 a.m.', russian: 'Магазин открывается в 9 утра.', highlight: 'opens' },
            { english: 'My sister works in a hospital.', russian: 'Моя сестра работает в больнице.', highlight: 'works' },
          ],
        },
        ru: {
          title: 'Примеры — Употребление настоящего простого',
          items: [
            { english: 'I always get up at 7 o\'clock.', russian: 'Я всегда встаю в 7 часов.', highlight: 'always' },
            { english: 'She usually takes the bus to work.', russian: 'Она обычно едет на работу на автобусе.', highlight: 'usually' },
            { english: 'He sometimes works late.', russian: 'Иногда он работает допоздна.', highlight: 'sometimes' },
            { english: 'We never eat meat.', russian: 'Мы никогда не едим мясо.', highlight: 'never' },
            { english: 'The Earth goes around the Sun.', russian: 'Земля вращается вокруг Солнца.', highlight: 'goes' },
            { english: 'I come from Poland.', russian: 'Я из Польши.', highlight: 'come' },
            { english: 'The shop opens at 9 a.m.', russian: 'Магазин открывается в 9 утра.', highlight: 'opens' },
            { english: 'My sister works in a hospital.', russian: 'Моя сестра работает в больнице.', highlight: 'works' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step-5-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Subject', 'Rule', 'Examples'],
            rows: [
              ['I / you / we / they', 'base verb', 'work, like, go, study'],
              ['he / she / it', 'verb + s', 'works, likes'],
              ['he / she / it', 'verb + es (-sh/-ch/-ss/-x/-o)', 'washes, watches, goes, does'],
              ['he / she / it', 'y → ies (consonant + y)', 'studies, carries, flies'],
              ['he / she / it', 'irregular', 'has (← have)'],
            ],
          },
          notes: ['Frequency adverbs (always, usually, often, etc.) go before the main verb.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Подлежащее', 'Правило', 'Примеры'],
            rows: [
              ['I / you / we / they', 'основная форма', 'work, like, go, study'],
              ['he / she / it', 'глагол + s', 'works, likes'],
              ['he / she / it', 'глагол + es (-sh/-ch/-ss/-x/-o)', 'washes, watches, goes, does'],
              ['he / she / it', 'y → ies (согласная + y)', 'studies, carries, flies'],
              ['he / she / it', 'исключение', 'has (← have)'],
            ],
          },
          notes: ['Наречия частотности (always, usually, often и др.) стоят перед основным глаголом.'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Write the correct present simple form of the verb in brackets.',
          questions: [
            {
              id: 'p5-1',
              type: 'fill-blank',
              prompt: 'She ___ (work) in a school.',
              translation: "Она работает в школе.",
              correctAnswer: 'works',
              explanation: 'he / she / it + works (-s added)',
            },
            {
              id: 'p5-2',
              type: 'fill-blank',
              prompt: 'He ___ (watch) the news every evening.',
              translation: "Он смотрит новости каждый вечер.",
              correctAnswer: 'watches',
              explanation: 'watch ends in -ch → add -es: watches',
            },
            {
              id: 'p5-3',
              type: 'fill-blank',
              prompt: 'My brother ___ (study) medicine.',
              translation: "Мой брат изучает медицину.",
              correctAnswer: 'studies',
              explanation: 'study ends in consonant + y → y → ies: studies',
            },
            {
              id: 'p5-4',
              type: 'fill-blank',
              prompt: 'They ___ (play) tennis at the weekend.',
              translation: "Они играют в теннис по выходным.",
              correctAnswer: 'play',
              explanation: 'they → base verb, no change: play',
            },
            {
              id: 'p5-5',
              type: 'fill-blank',
              prompt: 'She ___ (have) two children.',
              translation: "У неё двое детей.",
              correctAnswer: 'has',
              explanation: 'have is irregular: he/she/it has',
            },
            {
              id: 'p5-6',
              type: 'fill-blank',
              prompt: 'He always ___ (go) to bed early.',
              translation: "Он всегда ложится спать рано.",
              correctAnswer: 'goes',
              explanation: 'go ends in -o → add -es: goes',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Напишите правильную форму настоящего простого времени глагола в скобках.',
          questions: [
            {
              id: 'p5-1',
              type: 'fill-blank',
              prompt: 'She ___ (work) in a school.',
              translation: "Она работает в школе.",
              correctAnswer: 'works',
              explanation: 'he / she / it + works (добавляем -s)',
            },
            {
              id: 'p5-2',
              type: 'fill-blank',
              prompt: 'He ___ (watch) the news every evening.',
              translation: "Он смотрит новости каждый вечер.",
              correctAnswer: 'watches',
              explanation: 'watch оканчивается на -ch → добавляем -es: watches',
            },
            {
              id: 'p5-3',
              type: 'fill-blank',
              prompt: 'My brother ___ (study) medicine.',
              translation: "Мой брат изучает медицину.",
              correctAnswer: 'studies',
              explanation: 'study оканчивается на согласную + y → y → ies: studies',
            },
            {
              id: 'p5-4',
              type: 'fill-blank',
              prompt: 'They ___ (play) tennis at the weekend.',
              translation: "Они играют в теннис по выходным.",
              correctAnswer: 'play',
              explanation: 'they → основная форма без изменений: play',
            },
            {
              id: 'p5-5',
              type: 'fill-blank',
              prompt: 'She ___ (have) two children.',
              translation: "У неё двое детей.",
              correctAnswer: 'has',
              explanation: 'have — неправильный глагол: he/she/it → has',
            },
            {
              id: 'p5-6',
              type: 'fill-blank',
              prompt: 'He always ___ (go) to bed early.',
              translation: "Он всегда ложится спать рано.",
              correctAnswer: 'goes',
              explanation: 'go оканчивается на -o → добавляем -es: goes',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-5-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Present simple (positive)',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q5-1',
              question: 'Which is correct?',
              options: ['She work in a bank.', 'She works in a bank.', 'She working in a bank.'],
              correctIndex: 1,
              explanation: 'With he / she / it we add -s to the verb: works.',
            },
            {
              id: 'q5-2',
              question: 'Choose the correct form: "He ___ (go) to school every day."',
              options: ['go', 'gos', 'goes'],
              correctIndex: 2,
              explanation: '"go" ends in -o → add -es: goes.',
            },
            {
              id: 'q5-3',
              question: 'Which sentence uses the present simple correctly?',
              options: [
                'I am always drink coffee in the morning.',
                'I always drink coffee in the morning.',
                'I always drinking coffee in the morning.',
              ],
              correctIndex: 1,
              explanation: 'Present simple: subject + base verb. Frequency adverb goes before the main verb.',
            },
            {
              id: 'q5-4',
              question: 'What is the third person singular of "study"?',
              options: ['studys', 'studies', 'studyes'],
              correctIndex: 1,
              explanation: '"study" ends in consonant + y → change y to i and add -es: studies.',
            },
            {
              id: 'q5-5',
              question: 'Which sentence uses the present simple for a general truth?',
              options: [
                'She is eating an apple right now.',
                'The sun sets in the west.',
                'They are playing football today.',
              ],
              correctIndex: 1,
              explanation: '"The sun sets in the west" is a permanent fact → present simple.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Настоящее простое (утверждение)',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q5-1',
              question: 'Какой вариант правильный?',
              options: ['She work in a bank.', 'She works in a bank.', 'She working in a bank.'],
              correctIndex: 1,
              explanation: 'С he / she / it добавляем -s к глаголу: works.',
            },
            {
              id: 'q5-2',
              question: 'Выберите правильную форму: "He ___ (go) to school every day."',
              options: ['go', 'gos', 'goes'],
              correctIndex: 2,
              explanation: '"go" оканчивается на -o → добавляем -es: goes.',
            },
            {
              id: 'q5-3',
              question: 'В каком предложении настоящее простое употреблено правильно?',
              options: [
                'I am always drink coffee in the morning.',
                'I always drink coffee in the morning.',
                'I always drinking coffee in the morning.',
              ],
              correctIndex: 1,
              explanation: 'Настоящее простое: подлежащее + основная форма глагола. Наречие частотности стоит перед основным глаголом.',
            },
            {
              id: 'q5-4',
              question: 'Какова форма 3-го лица единственного числа глагола "study"?',
              options: ['studys', 'studies', 'studyes'],
              correctIndex: 1,
              explanation: '"study" оканчивается на согласную + y → y меняем на i и добавляем -es: studies.',
            },
            {
              id: 'q5-5',
              question: 'В каком предложении настоящее простое используется для общего факта?',
              options: [
                'She is eating an apple right now.',
                'The sun sets in the west.',
                'They are playing football today.',
              ],
              correctIndex: 1,
              explanation: '"The sun sets in the west" — постоянный факт → настоящее простое.',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-5-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — Present simple (positive)',
          points: [
            'Use the <b>base verb</b> for I / you / we / they: I work, they play.',
            'Add <b>-s</b> for he / she / it: she works, he plays.',
            'Add <b>-es</b> after -sh, -ch, -ss, -x, -o: watches, goes, does.',
            'Change <b>-y → -ies</b> after a consonant: studies, flies.',
            '<b>have</b> is irregular → he / she / it <b>has</b>.',
            'Use the present simple for habits, facts, and permanent situations — often with <em>always, usually, often, sometimes, never</em>.',
          ],
          nextUnit: 'Unit 6 — I don\'t ... (present simple negative)',
        },
        ru: {
          title: 'Итоги — Настоящее простое (утверждение)',
          points: [
            'С I / you / we / they используем <b>основную форму</b> глагола: I work, they play.',
            'К глаголу добавляем <b>-s</b> для he / she / it: she works, he plays.',
            'Добавляем <b>-es</b> после -sh, -ch, -ss, -x, -o: watches, goes, does.',
            'Меняем <b>-y → -ies</b> после согласной: studies, flies.',
            '<b>have</b> — исключение → he / she / it <b>has</b>.',
            'Настоящее простое используется для привычек, фактов и постоянных ситуаций — часто с <em>always, usually, often, sometimes, never</em>.',
          ],
          nextUnit: 'Юнит 6 — I don\'t ... (отрицание)',
        },
      },
    },
  ],
};

export default unit5;
