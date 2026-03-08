import type { Unit } from '../../types/unit';

// Unit 4: are you doing? (present continuous — questions and negatives)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 4)
const unit4: Unit = {
  id: 'unit4',
  number: 4,
  title: {
    en: 'are you doing? (present continuous questions)',
    ru: 'are you doing? (вопросы в настоящем длительном)',
  },
  description: {
    en: 'How to form yes/no questions and wh-questions in the present continuous, and use short answers.',
    ru: 'Как образовывать вопросы (да/нет и с вопросительным словом) в настоящем длительном времени.',
  },
  steps: [
    // ─── Step 1: Yes/No questions (theory + examples) ────────────────────────
    {
      id: 'step-4-1-yes-no-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Yes/No questions — present continuous',
          explanation:
            'To make a question in the present continuous, put <b>am / is / are before the subject</b>. ' +
            'The verb-ing stays after the subject.',
          table: {
            headers: ['Statement', 'Question'],
            rows: [
              ["I'm working.", 'Am I working?'],
              ["He's sleeping.", 'Is he sleeping?'],
              ["She's cooking.", 'Is she cooking?'],
              ["It's raining.", 'Is it raining?'],
              ["We're waiting.", 'Are we waiting?'],
              ["You're joking.", 'Are you joking?'],
              ["They're leaving.", 'Are they leaving?'],
            ],
          },
          notes: [
            'Short answers use am / is / are — NOT the -ing verb.',
            '"Yes, I am." / "No, I\'m not."  — "Yes, she is." / "No, she isn\'t."',
          ],
        },
        ru: {
          title: 'Вопросы да/нет — настоящее длительное',
          explanation:
            'Чтобы образовать вопрос в настоящем длительном, ставим <b>am / is / are перед подлежащим</b>. ' +
            'Форма на -ing остаётся после подлежащего.',
          table: {
            headers: ['Утверждение', 'Вопрос'],
            rows: [
              ["I'm working.", 'Am I working?'],
              ["He's sleeping.", 'Is he sleeping?'],
              ["She's cooking.", 'Is she cooking?'],
              ["It's raining.", 'Is it raining?'],
              ["We're waiting.", 'Are we waiting?'],
              ["You're joking.", 'Are you joking?'],
              ["They're leaving.", 'Are they leaving?'],
            ],
          },
          notes: [
            'В кратких ответах используем am / is / are — НЕ глагол на -ing.',
            '"Yes, I am." / "No, I\'m not."  — "Yes, she is." / "No, she isn\'t."',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Questions & short answers',
          intro: 'Study these question-and-answer exchanges in the present continuous.',
          items: [
            { english: 'Are you working? — Yes, I am.', russian: 'Ты работаешь? — Да.', highlight: 'Are you working' },
            { english: "Is she sleeping? — No, she isn't.", russian: 'Она спит? — Нет.', highlight: 'Is she sleeping' },
            { english: 'Is it raining? — Yes, it is.', russian: 'Идёт дождь? — Да.', highlight: 'Is it raining' },
            { english: "Are they coming? — No, they aren't.", russian: 'Они идут сюда? — Нет.', highlight: 'Are they coming' },
            { english: "Is Tom watching TV? — Yes, he is.", russian: 'Том смотрит телевизор? — Да.', highlight: 'Is Tom watching' },
            { english: "Are you listening to me? — Yes, I am.", russian: 'Ты слушаешь меня? — Да.', highlight: 'Are you listening' },
            { english: "Is the bus coming? — No, it isn't.", russian: 'Автобус едет? — Нет.', highlight: 'Is the bus coming' },
            { english: "Are we going in the right direction? — Yes, we are.", russian: 'Мы идём в правильном направлении? — Да.', highlight: 'Are we going' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы и краткие ответы',
          intro: 'Изучите эти диалоги с вопросами в настоящем длительном времени.',
          items: [
            { english: 'Are you working? — Yes, I am.', russian: 'Ты работаешь? — Да.', highlight: 'Are you working' },
            { english: "Is she sleeping? — No, she isn't.", russian: 'Она спит? — Нет.', highlight: 'Is she sleeping' },
            { english: 'Is it raining? — Yes, it is.', russian: 'Идёт дождь? — Да.', highlight: 'Is it raining' },
            { english: "Are they coming? — No, they aren't.", russian: 'Они идут сюда? — Нет.', highlight: 'Are they coming' },
            { english: "Is Tom watching TV? — Yes, he is.", russian: 'Том смотрит телевизор? — Да.', highlight: 'Is Tom watching' },
            { english: "Are you listening to me? — Yes, I am.", russian: 'Ты слушаешь меня? — Да.', highlight: 'Are you listening' },
            { english: "Is the bus coming? — No, it isn't.", russian: 'Автобус едет? — Нет.', highlight: 'Is the bus coming' },
            { english: "Are we going in the right direction? — Yes, we are.", russian: 'Мы идём в правильном направлении? — Да.', highlight: 'Are we going' },
          ],
        },
      },
    },

    // ─── Step 2: Negatives in context ────────────────────────────────────────
    {
      id: 'step-4-2-negatives',
      type: 'examples',
      left: {
        en: {
          title: 'Negatives — isn\'t / aren\'t + -ing',
          explanation:
            'To say something is <b>not</b> happening, use <b>isn\'t</b> or <b>aren\'t</b> with the -ing form. ' +
            'Compare what IS happening with what is NOT happening.',
          table: {
            headers: ['Positive', 'Negative'],
            rows: [
              ["I'm working.", "I'm not working."],
              ["He's listening.", "He isn't listening."],
              ["She's cooking.", "She isn't cooking."],
              ["We're hurrying.", "We aren't hurrying."],
              ["They're playing.", "They aren't playing."],
            ],
          },
          notes: [
            '"I\'m not" is the only negative contraction for I: NOT "I amn\'t".',
            'Both "isn\'t" and "\'s not" work for he/she/it: "He isn\'t coming." = "He\'s not coming."',
          ],
        },
        ru: {
          title: 'Отрицание — isn\'t / aren\'t + -ing',
          explanation:
            'Чтобы сказать, что что-то <b>не</b> происходит, используем <b>isn\'t</b> или <b>aren\'t</b> с формой на -ing. ' +
            'Сравните, что ПРОИСХОДИТ и что НЕ ПРОИСХОДИТ.',
          table: {
            headers: ['Утверждение', 'Отрицание'],
            rows: [
              ["I'm working.", "I'm not working."],
              ["He's listening.", "He isn't listening."],
              ["She's cooking.", "She isn't cooking."],
              ["We're hurrying.", "We aren't hurrying."],
              ["They're playing.", "They aren't playing."],
            ],
          },
          notes: [
            '"I\'m not" — единственная отрицательная краткая форма для I: НЕ "I amn\'t".',
            '"isn\'t" и "\'s not" взаимозаменяемы для he/she/it: "He isn\'t coming." = "He\'s not coming."',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negatives in context',
          intro: 'These sentences show what is NOT happening at the moment.',
          items: [
            { english: "I'm not working today — I'm on holiday.", russian: 'Сегодня я не работаю — я в отпуске.', highlight: "I'm not working" },
            { english: "He isn't watching TV. He's reading.", russian: 'Он не смотрит телевизор. Он читает.', highlight: "isn't watching" },
            { english: "She isn't cooking. She's ordering pizza.", russian: 'Она не готовит. Она заказывает пиццу.', highlight: "isn't cooking" },
            { english: "They aren't playing outside. It's raining.", russian: 'Они не играют на улице. Идёт дождь.', highlight: "aren't playing" },
            { english: "We aren't going by car — we're walking.", russian: 'Мы едем не на машине — мы идём пешком.', highlight: "aren't going" },
            { english: "I'm not complaining, I'm just explaining.", russian: 'Я не жалуюсь, я просто объясняю.', highlight: "I'm not complaining" },
            { english: "It isn't getting warmer — it's getting colder!", russian: 'Не теплеет — становится холоднее!', highlight: "isn't getting" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицание в контексте',
          intro: 'Эти предложения показывают, что НЕ происходит в данный момент.',
          items: [
            { english: "I'm not working today — I'm on holiday.", russian: 'Сегодня я не работаю — я в отпуске.', highlight: "I'm not working" },
            { english: "He isn't watching TV. He's reading.", russian: 'Он не смотрит телевизор. Он читает.', highlight: "isn't watching" },
            { english: "She isn't cooking. She's ordering pizza.", russian: 'Она не готовит. Она заказывает пиццу.', highlight: "isn't cooking" },
            { english: "They aren't playing outside. It's raining.", russian: 'Они не играют на улице. Идёт дождь.', highlight: "aren't playing" },
            { english: "We aren't going by car — we're walking.", russian: 'Мы едем не на машине — мы идём пешком.', highlight: "aren't going" },
            { english: "I'm not complaining, I'm just explaining.", russian: 'Я не жалуюсь, я просто объясняю.', highlight: "I'm not complaining" },
            { english: "It isn't getting warmer — it's getting colder!", russian: 'Не теплеет — становится холоднее!', highlight: "isn't getting" },
          ],
        },
      },
    },

    // ─── Step 3: Wh-questions ─────────────────────────────────────────────────
    {
      id: 'step-4-3-wh-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Wh-questions in the present continuous',
          explanation:
            'Add a <b>question word</b> (what, where, who, why, how) before am / is / are to ask for information. ' +
            'The structure is: <b>Wh-word + am/is/are + subject + verb-ing?</b>',
          table: {
            headers: ['Question word', 'Example'],
            rows: [
              ['What', "What are you doing?"],
              ['Where', "Where is he going?"],
              ['Who', "Who are you talking to?"],
              ['Why', "Why is she crying?"],
              ['How', "How are you feeling?"],
              ['What … for', "What are you waiting for?"],
            ],
          },
          notes: [
            '"What" can ask about the action itself: "What are you doing?"',
            'When "who" or "what" is the subject, use "is": "Who is knocking?" (not "Who are")',
          ],
        },
        ru: {
          title: 'Вопросы с вопросительным словом в настоящем длительном',
          explanation:
            'Добавьте <b>вопросительное слово</b> (what, where, who, why, how) перед am / is / are, чтобы запросить информацию. ' +
            'Структура: <b>Вопр. слово + am/is/are + подлежащее + глагол-ing?</b>',
          table: {
            headers: ['Вопросительное слово', 'Пример'],
            rows: [
              ['What (что/чем)', "What are you doing?"],
              ['Where (где/куда)', "Where is he going?"],
              ['Who (с кем/кому)', "Who are you talking to?"],
              ['Why (почему)', "Why is she crying?"],
              ['How (как)', "How are you feeling?"],
              ['What … for (зачем)', "What are you waiting for?"],
            ],
          },
          notes: [
            '"What" спрашивает о самом действии: "What are you doing?" (Что ты делаешь?)',
            'Когда "who" или "what" — подлежащее, используем "is": "Who is knocking?" (НЕ "Who are")',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Wh-questions',
          items: [
            { english: 'What are you doing?', russian: 'Что ты делаешь?', highlight: 'What are you doing' },
            { english: "Where is she going?", russian: 'Куда она идёт?', highlight: 'Where is she going' },
            { english: "Why are they laughing?", russian: 'Почему они смеются?', highlight: 'Why are they laughing' },
            { english: "Who are you waiting for?", russian: 'Кого ты ждёшь?', highlight: 'Who are you waiting for' },
            { english: "How are you feeling today?", russian: 'Как ты себя чувствуешь сегодня?', highlight: 'How are you feeling' },
            { english: "What is the baby eating?", russian: 'Что ест малыш?', highlight: 'What is the baby eating' },
            { english: "Why are you wearing a coat? It's warm!", russian: 'Зачем ты надел пальто? Тепло же!', highlight: 'Why are you wearing' },
          ],
        },
        ru: {
          title: 'Примеры — Вопросы с вопросительным словом',
          items: [
            { english: 'What are you doing?', russian: 'Что ты делаешь?', highlight: 'What are you doing' },
            { english: "Where is she going?", russian: 'Куда она идёт?', highlight: 'Where is she going' },
            { english: "Why are they laughing?", russian: 'Почему они смеются?', highlight: 'Why are they laughing' },
            { english: "Who are you waiting for?", russian: 'Кого ты ждёшь?', highlight: 'Who are you waiting for' },
            { english: "How are you feeling today?", russian: 'Как ты себя чувствуешь сегодня?', highlight: 'How are you feeling' },
            { english: "What is the baby eating?", russian: 'Что ест малыш?', highlight: 'What is the baby eating' },
            { english: "Why are you wearing a coat? It's warm!", russian: 'Зачем ты надел пальто? Тепло же!', highlight: 'Why are you wearing' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────
    {
      id: 'step-4-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Type', 'Structure', 'Example'],
            rows: [
              ['Yes/No question', 'Am/Is/Are + subject + -ing?', 'Is she working?'],
              ['Short answer (+)', 'Yes, + subject + am/is/are.', 'Yes, she is.'],
              ["Short answer (−)", "No, + subject + isn't/aren't.", "No, she isn't."],
              ['Wh-question', 'Wh-word + am/is/are + subject + -ing?', 'What are you doing?'],
              ['Negative', 'Subject + isn\'t/aren\'t + -ing.', "He isn't coming."],
            ],
          },
          notes: ['Remember: "I\'m not" — NOT "I amn\'t".'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Тип', 'Структура', 'Пример'],
            rows: [
              ['Вопрос да/нет', 'Am/Is/Are + подлежащее + -ing?', 'Is she working?'],
              ['Краткий ответ (+)', 'Yes, + подлежащее + am/is/are.', 'Yes, she is.'],
              ['Краткий ответ (−)', "No, + подлежащее + isn't/aren't.", "No, she isn't."],
              ['Вопрос с вопр. словом', 'Вопр. слово + am/is/are + подлеж. + -ing?', 'What are you doing?'],
              ['Отрицание', "Подлежащее + isn't/aren't + -ing.", "He isn't coming."],
            ],
          },
          notes: ['"I\'m not" — НЕ "I amn\'t".'],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Write the correct present continuous question or negative form.',
          questions: [
            {
              id: 'p4-1',
              type: 'fill-blank',
              prompt: '___ you listening? — Yes, I am.',
              correctAnswer: 'Are',
              explanation: 'Yes/No question with "you" → Are you listening?',
            },
            {
              id: 'p4-2',
              type: 'fill-blank',
              prompt: 'She ___ sleeping. She\'s reading. (negative)',
              correctAnswer: "isn't",
              explanation: "she + isn't + sleeping → She isn't sleeping.",
            },
            {
              id: 'p4-3',
              type: 'fill-blank',
              prompt: 'What ___ he doing?',
              correctAnswer: 'is',
              explanation: 'Wh-question with "he" → What is he doing?',
            },
            {
              id: 'p4-4',
              type: 'fill-blank',
              prompt: 'They ___ waiting. The bus has already left. (negative)',
              correctAnswer: "aren't",
              explanation: "they + aren't + waiting → They aren't waiting.",
            },
            {
              id: 'p4-5',
              type: 'fill-blank',
              prompt: '___ it raining? — No, it isn\'t.',
              correctAnswer: 'Is',
              explanation: 'Yes/No question with "it" → Is it raining?',
            },
            {
              id: 'p4-6',
              type: 'fill-blank',
              prompt: 'Where ___ you going?',
              correctAnswer: 'are',
              explanation: 'Wh-question with "you" → Where are you going?',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Напишите правильную форму вопроса или отрицания в настоящем длительном.',
          questions: [
            {
              id: 'p4-1',
              type: 'fill-blank',
              prompt: '___ you listening? — Yes, I am.',
              correctAnswer: 'Are',
              explanation: 'Вопрос да/нет с "you" → Are you listening?',
            },
            {
              id: 'p4-2',
              type: 'fill-blank',
              prompt: 'She ___ sleeping. She\'s reading. (отрицание)',
              correctAnswer: "isn't",
              explanation: "she + isn't + sleeping → She isn't sleeping.",
            },
            {
              id: 'p4-3',
              type: 'fill-blank',
              prompt: 'What ___ he doing?',
              correctAnswer: 'is',
              explanation: 'Вопрос с вопр. словом, "he" → What is he doing?',
            },
            {
              id: 'p4-4',
              type: 'fill-blank',
              prompt: 'They ___ waiting. The bus has already left. (отрицание)',
              correctAnswer: "aren't",
              explanation: "they + aren't + waiting → They aren't waiting.",
            },
            {
              id: 'p4-5',
              type: 'fill-blank',
              prompt: '___ it raining? — No, it isn\'t.',
              correctAnswer: 'Is',
              explanation: 'Вопрос да/нет с "it" → Is it raining?',
            },
            {
              id: 'p4-6',
              type: 'fill-blank',
              prompt: 'Where ___ you going?',
              correctAnswer: 'are',
              explanation: 'Вопрос с вопр. словом, "you" → Where are you going?',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-4-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — present continuous questions',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q4-1',
              question: 'Which is the correct question form?',
              options: [
                'She is going where?',
                'Where is she going?',
                'Where she is going?',
              ],
              correctIndex: 1,
              explanation: 'Wh-question structure: Wh-word + is + subject + -ing? → "Where is she going?"',
            },
            {
              id: 'q4-2',
              question: 'Complete: "___ they watching the match?"',
              options: ['Is', 'Are', 'Am'],
              correctIndex: 1,
              explanation: '"They" takes "are" → Are they watching?',
            },
            {
              id: 'q4-3',
              question: 'How do you say "Он не слушает" (right now) in English?',
              options: [
                "He doesn't listening.",
                "He isn't listening.",
                "He not listening.",
              ],
              correctIndex: 1,
              explanation: 'Negative present continuous: he + isn\'t + listening.',
            },
            {
              id: 'q4-4',
              question: 'Short answer to "Are you coming?" (negative)',
              options: [
                "No, I isn't.",
                "No, I'm not.",
                "No, I not am.",
              ],
              correctIndex: 1,
              explanation: 'With "I", the only negative contraction is "I\'m not" (NOT "I isn\'t").',
            },
            {
              id: 'q4-5',
              question: 'Which sentence is correct?',
              options: [
                "They aren't playing — they're studying.",
                "They isn't playing — they're studying.",
                "They not are playing — they're studying.",
              ],
              correctIndex: 0,
              explanation: '"They" takes "aren\'t" in the negative → "They aren\'t playing."',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — вопросы в настоящем длительном',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q4-1',
              question: 'Какая форма вопроса правильная?',
              options: [
                'She is going where?',
                'Where is she going?',
                'Where she is going?',
              ],
              correctIndex: 1,
              explanation: 'Структура вопроса с вопр. словом: Вопр. слово + is + подлежащее + -ing? → "Where is she going?"',
            },
            {
              id: 'q4-2',
              question: 'Дополните: "___ they watching the match?"',
              options: ['Is', 'Are', 'Am'],
              correctIndex: 1,
              explanation: 'С "they" используем "are" → Are they watching?',
            },
            {
              id: 'q4-3',
              question: 'Как сказать "Он не слушает" (прямо сейчас) по-английски?',
              options: [
                "He doesn't listening.",
                "He isn't listening.",
                "He not listening.",
              ],
              correctIndex: 1,
              explanation: 'Отрицательное настоящее длительное: he + isn\'t + listening.',
            },
            {
              id: 'q4-4',
              question: 'Краткий отрицательный ответ на "Are you coming?"',
              options: [
                "No, I isn't.",
                "No, I'm not.",
                "No, I not am.",
              ],
              correctIndex: 1,
              explanation: 'С "I" единственная отрицательная краткая форма — "I\'m not" (НЕ "I isn\'t").',
            },
            {
              id: 'q4-5',
              question: 'Какое предложение правильное?',
              options: [
                "They aren't playing — they're studying.",
                "They isn't playing — they're studying.",
                "They not are playing — they're studying.",
              ],
              correctIndex: 0,
              explanation: 'С "they" в отрицании используем "aren\'t" → "They aren\'t playing."',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-4-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — present continuous questions & negatives',
          points: [
            'Yes/No questions: put <b>am / is / are before the subject</b> → "Is she working?"',
            'Wh-questions: add a question word first → <b>What / Where / Why + am/is/are + subject + -ing?</b>',
            'Short answers use the auxiliary only: "Yes, I <b>am</b>." / "No, she <b>isn\'t</b>."',
            'Negatives: subject + <b>isn\'t / aren\'t</b> + -ing → "They aren\'t waiting."',
            'With <b>I</b>, the only negative form is <b>I\'m not</b> — never "I amn\'t".',
            'When "who/what" is the <em>subject</em>, use "is": "Who is calling?" not "Who are calling?"',
          ],
          nextUnit: 'Unit 5 — I do/work/like (present simple)',
        },
        ru: {
          title: 'Итоги — вопросы и отрицание в настоящем длительном',
          points: [
            'Вопросы да/нет: ставим <b>am / is / are перед подлежащим</b> → "Is she working?"',
            'Вопросы с вопр. словом: сначала вопросительное слово → <b>What / Where / Why + am/is/are + подлежащее + -ing?</b>',
            'В кратких ответах используем только вспомогательный глагол: "Yes, I <b>am</b>." / "No, she <b>isn\'t</b>."',
            'Отрицание: подлежащее + <b>isn\'t / aren\'t</b> + -ing → "They aren\'t waiting."',
            'С <b>I</b> единственная отрицательная форма — <b>I\'m not</b> — никогда "I amn\'t".',
            'Когда "who/what" — <em>подлежащее</em>, используем "is": "Who is calling?" а не "Who are calling?"',
          ],
          nextUnit: 'Юнит 5 — I do/work/like (настоящее простое)',
        },
      },
    },
  ],
};

export default unit4;
