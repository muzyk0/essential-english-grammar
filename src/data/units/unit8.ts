import type { Unit } from '../../types/unit';

// Unit 8: I am doing vs I do
// Based on Essential Grammar in Use by Raymond Murphy (Unit 8)
const unit8: Unit = {
  id: 'unit8',
  number: 8,
  title: {
    en: 'I am doing vs I do',
    ru: 'I am doing vs I do',
  },
  description: {
    en: 'When to use the present continuous (I am doing) and when to use the present simple (I do).',
    ru: 'Когда использовать настоящее длительное (I am doing) и когда — настоящее простое (I do).',
  },
  steps: [
    // ─── Step 1: Present continuous — happening now ───────────────────────────
    {
      id: 'step-1-continuous',
      type: 'theory',
      left: {
        en: {
          title: 'Present continuous — happening now',
          explanation:
            'We use the <b>present continuous</b> (am/is/are + -ing) for something ' +
            'that is happening <em>at the moment of speaking</em> or around the present time. ' +
            'It describes an action in progress — not yet finished.',
          table: {
            headers: ['Situation', 'Example'],
            rows: [
              ['Right now', '"Please be quiet. I\'m working."'],
              ['Around now (not this exact second)', '"She\'s looking for a new job."'],
              ['Today / this week', '"We\'re staying at a hotel this week."'],
              ['A temporary situation', '"I\'m living with friends at the moment."'],
            ],
          },
          notes: [
            'Key words: now, at the moment, today, this week, currently.',
            'The action started but has not finished yet.',
          ],
        },
        ru: {
          title: 'Настоящее длительное — происходит сейчас',
          explanation:
            'Мы используем <b>настоящее длительное</b> (am/is/are + -ing) для действий, ' +
            'которые происходят <em>в момент речи</em> или в текущий период. ' +
            'Это незавершённое, продолжающееся действие.',
          table: {
            headers: ['Ситуация', 'Пример'],
            rows: [
              ['Прямо сейчас', '"Please be quiet. I\'m working."'],
              ['В этот период (не обязательно в эту секунду)', '"She\'s looking for a new job."'],
              ['Сегодня / на этой неделе', '"We\'re staying at a hotel this week."'],
              ['Временная ситуация', '"I\'m living with friends at the moment."'],
            ],
          },
          notes: [
            'Ключевые слова: now, at the moment, today, this week, currently.',
            'Действие началось, но ещё не закончилось.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Present continuous',
          intro: 'These sentences all describe actions in progress now or around now.',
          items: [
            { english: "I'm reading a good book at the moment.", russian: 'Я сейчас читаю хорошую книгу.', highlight: "I'm reading" },
            { english: "She's talking on the phone.", russian: 'Она разговаривает по телефону.', highlight: "She's talking" },
            { english: "They're watching TV.", russian: 'Они смотрят телевизор.', highlight: "They're watching" },
            { english: 'It is raining outside.', russian: 'На улице идёт дождь.', highlight: 'is raining' },
            { english: "He's not working today — he's ill.", russian: 'Он сегодня не работает — он болен.', highlight: "He's not working" },
            { english: "We're learning English.", russian: 'Мы учим английский.', highlight: "We're learning" },
            { english: 'What are you doing? — I\'m cooking dinner.', russian: 'Что ты делаешь? — Я готовлю ужин.', highlight: "I'm cooking" },
            { english: "I'm not listening to music right now.", russian: 'Я сейчас не слушаю музыку.', highlight: "I'm not listening" },
          ],
        },
        ru: {
          title: 'Примеры — Настоящее длительное',
          intro: 'Все эти предложения описывают действия, происходящие сейчас или в текущий период.',
          items: [
            { english: "I'm reading a good book at the moment.", russian: 'Я сейчас читаю хорошую книгу.', highlight: "I'm reading" },
            { english: "She's talking on the phone.", russian: 'Она разговаривает по телефону.', highlight: "She's talking" },
            { english: "They're watching TV.", russian: 'Они смотрят телевизор.', highlight: "They're watching" },
            { english: 'It is raining outside.', russian: 'На улице идёт дождь.', highlight: 'is raining' },
            { english: "He's not working today — he's ill.", russian: 'Он сегодня не работает — он болен.', highlight: "He's not working" },
            { english: "We're learning English.", russian: 'Мы учим английский.', highlight: "We're learning" },
            { english: 'What are you doing? — I\'m cooking dinner.', russian: 'Что ты делаешь? — Я готовлю ужин.', highlight: "I'm cooking" },
            { english: "I'm not listening to music right now.", russian: 'Я сейчас не слушаю музыку.', highlight: "I'm not listening" },
          ],
        },
      },
    },

    // ─── Step 2: Present simple — habits and general facts ───────────────────
    {
      id: 'step-2-simple',
      type: 'examples',
      left: {
        en: {
          title: 'Present simple — habits and facts',
          explanation:
            'We use the <b>present simple</b> for things that happen <em>repeatedly</em> ' +
            '(habits, routines) or things that are <em>generally true</em>. ' +
            'It is not about what is happening right now.',
          table: {
            headers: ['Situation', 'Example'],
            rows: [
              ['Habit / routine', '"I get up at 7 every day."'],
              ['How often something happens', '"She goes to the gym twice a week."'],
              ['General / permanent fact', '"Water boils at 100°C."'],
              ['Things that are always true', '"He works in a bank."'],
            ],
          },
          notes: [
            'Key words: always, usually, often, sometimes, never, every day/week/year.',
            'Remember: he/she/it → verb + -s (works, goes, likes).',
          ],
        },
        ru: {
          title: 'Настоящее простое — привычки и факты',
          explanation:
            'Мы используем <b>настоящее простое</b> для действий, которые происходят ' +
            '<em>повторно</em> (привычки, распорядок) или для <em>общих фактов</em>. ' +
            'Это не о том, что происходит прямо сейчас.',
          table: {
            headers: ['Ситуация', 'Пример'],
            rows: [
              ['Привычка / распорядок', '"I get up at 7 every day."'],
              ['Как часто что-то происходит', '"She goes to the gym twice a week."'],
              ['Общий / постоянный факт', '"Water boils at 100°C."'],
              ['Всегда истинное утверждение', '"He works in a bank."'],
            ],
          },
          notes: [
            'Ключевые слова: always, usually, often, sometimes, never, every day/week/year.',
            'Помните: с he/she/it → глагол + -s (works, goes, likes).',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Present simple',
          intro: 'These sentences describe habits, routines, and general truths.',
          items: [
            { english: 'I work in an office.', russian: 'Я работаю в офисе.', highlight: 'work' },
            { english: 'She speaks three languages.', russian: 'Она говорит на трёх языках.', highlight: 'speaks' },
            { english: 'He always reads the newspaper in the morning.', russian: 'Он всегда читает газету по утрам.', highlight: 'reads' },
            { english: "I don't drink coffee.", russian: 'Я не пью кофе.', highlight: "don't drink" },
            { english: 'The train leaves at 8 o\'clock.', russian: 'Поезд отправляется в 8 часов.', highlight: 'leaves' },
            { english: 'Do you play the guitar? — Yes, I do.', russian: 'Ты играешь на гитаре? — Да.', highlight: 'play' },
            { english: "She doesn't eat meat.", russian: 'Она не ест мясо.', highlight: "doesn't eat" },
            { english: 'It snows a lot in winter here.', russian: 'Здесь зимой много снега.', highlight: 'snows' },
          ],
        },
        ru: {
          title: 'Примеры — Настоящее простое',
          intro: 'Эти предложения описывают привычки, распорядок и общие факты.',
          items: [
            { english: 'I work in an office.', russian: 'Я работаю в офисе.', highlight: 'work' },
            { english: 'She speaks three languages.', russian: 'Она говорит на трёх языках.', highlight: 'speaks' },
            { english: 'He always reads the newspaper in the morning.', russian: 'Он всегда читает газету по утрам.', highlight: 'reads' },
            { english: "I don't drink coffee.", russian: 'Я не пью кофе.', highlight: "don't drink" },
            { english: 'The train leaves at 8 o\'clock.', russian: 'Поезд отправляется в 8 часов.', highlight: 'leaves' },
            { english: 'Do you play the guitar? — Yes, I do.', russian: 'Ты играешь на гитаре? — Да.', highlight: 'play' },
            { english: "She doesn't eat meat.", russian: 'Она не ест мясо.', highlight: "doesn't eat" },
            { english: 'It snows a lot in winter here.', russian: 'Здесь зимой много снега.', highlight: 'snows' },
          ],
        },
      },
    },

    // ─── Step 3: Key contrast — same verb, different meaning ─────────────────
    {
      id: 'step-3-contrast',
      type: 'theory',
      left: {
        en: {
          title: 'Choosing the right tense',
          explanation:
            'The same verb can have a <b>different meaning</b> depending on which tense you use. ' +
            'Ask yourself: <em>Is this happening now (continuous)?</em> ' +
            'Or <em>Is this a habit / always true (simple)?</em>',
          table: {
            headers: ['Present continuous', 'Present simple'],
            rows: [
              ['"I\'m reading a book." (now)', '"I read every evening." (habit)'],
              ['"She\'s working." (right now)', '"She works in a hospital." (job)'],
              ['"He\'s living in Paris." (temporary)', '"He lives in Paris." (permanent)'],
              ['"We\'re having lunch." (now)', '"We have lunch at 1 pm." (routine)'],
            ],
          },
          notes: [
            'Some verbs are NOT normally used in the continuous: know, like, love, want, need, understand, believe.',
            'Say "I know" (NOT "I am knowing"); "She likes" (NOT "She is liking").',
          ],
        },
        ru: {
          title: 'Как выбрать нужное время',
          explanation:
            'Один и тот же глагол может иметь <b>разный смысл</b> в зависимости от времени. ' +
            'Спросите себя: <em>Это происходит сейчас (длительное)?</em> ' +
            'Или <em>Это привычка / всегда верно (простое)?</em>',
          table: {
            headers: ['Настоящее длительное', 'Настоящее простое'],
            rows: [
              ['"I\'m reading a book." (сейчас)', '"I read every evening." (привычка)'],
              ['"She\'s working." (прямо сейчас)', '"She works in a hospital." (работа)'],
              ['"He\'s living in Paris." (временно)', '"He lives in Paris." (постоянно)'],
              ['"We\'re having lunch." (сейчас)', '"We have lunch at 1 pm." (распорядок)'],
            ],
          },
          notes: [
            'Некоторые глаголы обычно НЕ используются в длительном времени: know, like, love, want, need, understand, believe.',
            'Говорим "I know" (НЕ "I am knowing"); "She likes" (НЕ "She is liking").',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Contrast in context',
          intro: 'Compare continuous and simple with the same or similar verbs.',
          items: [
            { english: "I'm working at home today. — I usually work in the office.", russian: 'Сегодня я работаю дома. — Обычно я работаю в офисе.', highlight: "I'm working" },
            { english: "Tom is playing football now. — He plays football every weekend.", russian: 'Том сейчас играет в футбол. — Он играет в футбол каждые выходные.', highlight: 'is playing' },
            { english: "Why is she crying? — She often cries at sad films.", russian: 'Почему она плачет? — Она часто плачет на грустных фильмах.', highlight: 'is she crying' },
            { english: "I'm not drinking alcohol this month. — He doesn't drink at all.", russian: 'В этом месяце я не пью алкоголь. — Он вообще не пьёт.', highlight: "I'm not drinking" },
            { english: "What are you thinking about? — I think it's a great idea.", russian: 'О чём ты думаешь? — Я думаю, это отличная идея.', highlight: 'are you thinking' },
            { english: "I'm staying with friends this week. — She stays at the same hotel every year.", russian: 'На этой неделе я живу у друзей. — Она каждый год останавливается в одном и том же отеле.', highlight: "I'm staying" },
            { english: "He's being very rude today. — He's usually very polite.", russian: 'Сегодня он очень груб. — Обычно он очень вежлив.', highlight: "He's being" },
          ],
        },
        ru: {
          title: 'Примеры — Сравнение времён в контексте',
          intro: 'Сравните длительное и простое время с одинаковыми или похожими глаголами.',
          items: [
            { english: "I'm working at home today. — I usually work in the office.", russian: 'Сегодня я работаю дома. — Обычно я работаю в офисе.', highlight: "I'm working" },
            { english: "Tom is playing football now. — He plays football every weekend.", russian: 'Том сейчас играет в футбол. — Он играет в футбол каждые выходные.', highlight: 'is playing' },
            { english: "Why is she crying? — She often cries at sad films.", russian: 'Почему она плачет? — Она часто плачет на грустных фильмах.', highlight: 'is she crying' },
            { english: "I'm not drinking alcohol this month. — He doesn't drink at all.", russian: 'В этом месяце я не пью алкоголь. — Он вообще не пьёт.', highlight: "I'm not drinking" },
            { english: "What are you thinking about? — I think it's a great idea.", russian: 'О чём ты думаешь? — Я думаю, это отличная идея.', highlight: 'are you thinking' },
            { english: "I'm staying with friends this week. — She stays at the same hotel every year.", russian: 'На этой неделе я живу у друзей. — Она каждый год останавливается в одном и том же отеле.', highlight: "I'm staying" },
            { english: "He's being very rude today. — He's usually very polite.", russian: 'Сегодня он очень груб. — Обычно он очень вежлив.', highlight: "He's being" },
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
          explanation: 'Use this table to help you choose the correct tense.',
          table: {
            headers: ['', 'Present continuous', 'Present simple'],
            rows: [
              ['Use for', 'now / in progress', 'habit / always true'],
              ['Signal words', 'now, at the moment, today', 'always, every day, usually'],
              ['Form', 'am/is/are + -ing', 'verb (+ -s for he/she/it)'],
              ['Negative', "isn't/aren't + -ing", "don't/doesn't + verb"],
            ],
          },
          notes: ['Some verbs (know, like, want, need) are NOT used in the continuous.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу для выбора правильного времени.',
          table: {
            headers: ['', 'Настоящее длительное', 'Настоящее простое'],
            rows: [
              ['Используется', 'сейчас / в процессе', 'привычка / всегда верно'],
              ['Ключевые слова', 'now, at the moment, today', 'always, every day, usually'],
              ['Форма', 'am/is/are + -ing', 'глагол (+ -s для he/she/it)'],
              ['Отрицание', "isn't/aren't + -ing", "don't/doesn't + глагол"],
            ],
          },
          notes: ['Некоторые глаголы (know, like, want, need) НЕ используются в длительном времени.'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Choose the correct form: present continuous or present simple.',
          questions: [
            {
              id: 'p8-1',
              type: 'fill-blank',
              prompt: "I ___ (work) in a school. (general fact)",
              correctAnswer: 'work',
              explanation: 'General fact (job) → present simple: I work.',
            },
            {
              id: 'p8-2',
              type: 'fill-blank',
              prompt: "Please be quiet — the baby ___ (sleep). (right now)",
              correctAnswer: 'is sleeping',
              explanation: 'Happening right now → present continuous: is sleeping.',
            },
            {
              id: 'p8-3',
              type: 'fill-blank',
              prompt: "She usually ___ (take) the bus to work. (habit)",
              correctAnswer: 'takes',
              explanation: 'Habit with "usually" → present simple: takes.',
            },
            {
              id: 'p8-4',
              type: 'fill-blank',
              prompt: "Look! It ___ (snow). (happening now)",
              correctAnswer: 'is snowing',
              explanation: '"Look!" signals something is happening now → present continuous: is snowing.',
            },
            {
              id: 'p8-5',
              type: 'fill-blank',
              prompt: "I ___ (not / understand) this question.",
              correctAnswer: "don't understand",
              explanation: '"Understand" is a state verb — not used in continuous → don\'t understand.',
            },
            {
              id: 'p8-6',
              type: 'fill-blank',
              prompt: "Where is Tom? — He ___ (have) a shower.",
              correctAnswer: 'is having',
              explanation: 'Happening right now (in progress) → present continuous: is having.',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Выберите правильную форму: настоящее длительное или настоящее простое.',
          questions: [
            {
              id: 'p8-1',
              type: 'fill-blank',
              prompt: "I ___ (work) in a school. (общий факт)",
              correctAnswer: 'work',
              explanation: 'Общий факт (работа) → настоящее простое: I work.',
            },
            {
              id: 'p8-2',
              type: 'fill-blank',
              prompt: "Please be quiet — the baby ___ (sleep). (прямо сейчас)",
              correctAnswer: 'is sleeping',
              explanation: 'Происходит прямо сейчас → настоящее длительное: is sleeping.',
            },
            {
              id: 'p8-3',
              type: 'fill-blank',
              prompt: "She usually ___ (take) the bus to work. (привычка)",
              correctAnswer: 'takes',
              explanation: 'Привычка с "usually" → настоящее простое: takes.',
            },
            {
              id: 'p8-4',
              type: 'fill-blank',
              prompt: "Look! It ___ (snow). (происходит сейчас)",
              correctAnswer: 'is snowing',
              explanation: '"Look!" говорит о том, что это происходит сейчас → настоящее длительное: is snowing.',
            },
            {
              id: 'p8-5',
              type: 'fill-blank',
              prompt: "I ___ (not / understand) this question.",
              correctAnswer: "don't understand",
              explanation: '"Understand" — глагол состояния, не используется в длительном → don\'t understand.',
            },
            {
              id: 'p8-6',
              type: 'fill-blank',
              prompt: "Where is Tom? — He ___ (have) a shower.",
              correctAnswer: 'is having',
              explanation: 'Происходит прямо сейчас → настоящее длительное: is having.',
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
          title: 'Quick Quiz — I am doing vs I do',
          description: 'Test yourself! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q8-1',
              question: 'Which sentence describes a habit?',
              options: [
                "I'm eating breakfast now.",
                'I eat breakfast every morning.',
                "I'm not eating today.",
              ],
              correctIndex: 1,
              explanation: '"Every morning" is a frequency expression → present simple describes a habit.',
            },
            {
              id: 'q8-2',
              question: 'Your friend calls. You say: "I can\'t talk — ___"',
              options: [
                'I drive.',
                "I'm driving.",
                'I drove.',
              ],
              correctIndex: 1,
              explanation: 'The action is happening right now, at this moment → present continuous: I\'m driving.',
            },
            {
              id: 'q8-3',
              question: 'Which is correct? "She ___ French."',
              options: [
                "She's knowing French.",
                'She knows French.',
                "She know French.",
              ],
              correctIndex: 1,
              explanation: '"Know" is a state verb — not used in the continuous. Use present simple: She knows.',
            },
            {
              id: 'q8-4',
              question: 'Complete: "Look at those children — they ___ in the pool."',
              options: [
                'swim',
                'are swimming',
                'swims',
              ],
              correctIndex: 1,
              explanation: '"Look!" tells us the action is visible right now → present continuous: are swimming.',
            },
            {
              id: 'q8-5',
              question: 'Which sentence is correct?',
              options: [
                "I'm usually going to work by bus.",
                'I usually go to work by bus.',
                'I am usually go to work by bus.',
              ],
              correctIndex: 1,
              explanation: '"Usually" signals a habit → present simple: I usually go.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — I am doing vs I do',
          description: 'Проверьте себя! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q8-1',
              question: 'Какое предложение описывает привычку?',
              options: [
                "I'm eating breakfast now.",
                'I eat breakfast every morning.',
                "I'm not eating today.",
              ],
              correctIndex: 1,
              explanation: '"Every morning" — выражение частоты → настоящее простое описывает привычку.',
            },
            {
              id: 'q8-2',
              question: 'Вам звонит друг. Вы говорите: "I can\'t talk — ___"',
              options: [
                'I drive.',
                "I'm driving.",
                'I drove.',
              ],
              correctIndex: 1,
              explanation: 'Действие происходит прямо сейчас → настоящее длительное: I\'m driving.',
            },
            {
              id: 'q8-3',
              question: 'Какой вариант правильный? "She ___ French."',
              options: [
                "She's knowing French.",
                'She knows French.',
                "She know French.",
              ],
              correctIndex: 1,
              explanation: '"Know" — глагол состояния, не используется в длительном. Настоящее простое: She knows.',
            },
            {
              id: 'q8-4',
              question: 'Дополните: "Look at those children — they ___ in the pool."',
              options: [
                'swim',
                'are swimming',
                'swims',
              ],
              correctIndex: 1,
              explanation: '"Look!" говорит о видимом действии прямо сейчас → настоящее длительное: are swimming.',
            },
            {
              id: 'q8-5',
              question: 'Какое предложение правильное?',
              options: [
                "I'm usually going to work by bus.",
                'I usually go to work by bus.',
                'I am usually go to work by bus.',
              ],
              correctIndex: 1,
              explanation: '"Usually" указывает на привычку → настоящее простое: I usually go.',
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
          title: 'Summary — I am doing vs I do',
          points: [
            'Use <b>present continuous</b> (am/is/are + -ing) for actions happening <em>now</em> or around now.',
            'Use <b>present simple</b> for habits, routines, and things that are generally true.',
            'Signal words for continuous: <b>now, at the moment, today, this week, currently</b>.',
            'Signal words for simple: <b>always, usually, often, sometimes, every day/week</b>.',
            'State verbs (know, like, love, want, need, understand) are <b>not</b> normally used in the continuous.',
            'Same verb, different meaning: <em>"I\'m living here"</em> (temporary) vs <em>"I live here"</em> (permanent).',
          ],
          nextUnit: 'Unit 9 — I have ... / I\'ve got ...',
        },
        ru: {
          title: 'Итоги — I am doing vs I do',
          points: [
            'Используем <b>настоящее длительное</b> (am/is/are + -ing) для действий, происходящих <em>сейчас</em> или в текущий период.',
            'Используем <b>настоящее простое</b> для привычек, распорядка и общих фактов.',
            'Ключевые слова для длительного: <b>now, at the moment, today, this week, currently</b>.',
            'Ключевые слова для простого: <b>always, usually, often, sometimes, every day/week</b>.',
            'Глаголы состояния (know, like, love, want, need, understand) обычно <b>не</b> используются в длительном времени.',
            'Один глагол — разный смысл: <em>"I\'m living here"</em> (временно) vs <em>"I live here"</em> (постоянно).',
          ],
          nextUnit: 'Юнит 9 — I have ... / I\'ve got ...',
        },
      },
    },
  ],
};

export default unit8;
