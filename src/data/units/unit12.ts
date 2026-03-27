import type { ExampleItem, PracticeExample, PracticeQuestion, Unit } from '../../types/unit';

const negativeExamples: ExampleItem[] = [
  {
    english: "I didn't watch TV yesterday evening.",
    russian: 'Я не смотрел(а) телевизор вчера вечером.',
    highlight: "didn't watch",
  },
  {
    english: "She didn't go away last week.",
    russian: 'Она не уезжала на прошлой неделе.',
    highlight: "didn't go",
  },
  {
    english: "We didn't enjoy the film, so we left early.",
    russian: 'Нам не понравился фильм, поэтому мы ушли рано.',
    highlight: "didn't enjoy",
  },
  {
    english: "He didn't have time to phone me.",
    russian: 'У него не было времени мне позвонить.',
    highlight: "didn't have",
  },
  {
    english: "They didn't do any work on Tuesday.",
    russian: 'Во вторник они совсем не работали.',
    highlight: "didn't do",
  },
  {
    english: "I played tennis yesterday, but I didn't win.",
    russian: 'Вчера я играл(а) в теннис, но не выиграл(а).',
    highlight: "didn't win",
  },
];

const questionExamples: ExampleItem[] = [
  {
    english: 'Did you watch TV last night?',
    russian: 'Ты смотрел(а) телевизор вчера вечером?',
    highlight: 'Did you watch',
  },
  {
    english: 'Did she have a good holiday?',
    russian: 'У неё был хороший отпуск?',
    highlight: 'Did she have',
  },
  {
    english: 'What time did you arrive?',
    russian: 'Во сколько ты пришёл(пришла)?',
    highlight: 'did you arrive',
  },
  {
    english: 'Where did they go for their holiday?',
    russian: 'Куда они поехали в отпуск?',
    highlight: 'did they go',
  },
  {
    english: 'Did it rain yesterday?',
    russian: 'Вчера шёл дождь?',
    highlight: 'Did it rain',
  },
  {
    english: 'How did the accident happen?',
    russian: 'Как произошла авария?',
    highlight: 'did the accident happen',
  },
];

const shortAnswerExamples: ExampleItem[] = [
  {
    english: "Did you see Joe yesterday? No, I didn't.",
    russian: 'Ты видел(а) Джо вчера? Нет, не видел(а).',
    highlight: "No, I didn't",
  },
  {
    english: 'Did it rain on Sunday? Yes, it did.',
    russian: 'В воскресенье шёл дождь? Да.',
    highlight: 'Yes, it did',
  },
  {
    english: "Did Helen come to the party? No, she didn't.",
    russian: 'Хелен пришла на вечеринку? Нет.',
    highlight: "No, she didn't",
  },
  {
    english: 'Did your parents have a good holiday? Yes, they did.',
    russian: 'Твои родители хорошо провели отпуск? Да.',
    highlight: 'Yes, they did',
  },
  {
    english: 'What did you do yesterday evening?',
    russian: 'Что ты делал(а) вчера вечером?',
    highlight: 'did you do',
  },
  {
    english: 'Where did your sister go last night?',
    russian: 'Куда твоя сестра ходила вчера вечером?',
    highlight: 'did your sister go',
  },
];

const exercise1Examples: PracticeExample[] = [
  {
    cue: '1',
    answer: "I saw Barbara, but I didn't see Jane.",
    note: 'Model item.',
  },
];

const exercise1Questions: PracticeQuestion[] = [
  {
    id: 'u12-ex1-2',
    displayNumber: '2',
    type: 'fill-blank',
    prompt: 'They worked on Monday, but they ___ on Tuesday.',
    translation: 'Они работали в понедельник, но во вторник не работали.',
    correctAnswer: "didn't work",
    altAnswers: ['did not work'],
    explanation: "After didn't, use the base form work.",
  },
  {
    id: 'u12-ex1-3',
    displayNumber: '3',
    type: 'fill-blank',
    prompt: 'We went to the post office, but we ___ to the bank.',
    translation: 'Мы ходили на почту, но не пошли в банк.',
    correctAnswer: "didn't go",
    altAnswers: ['did not go'],
    explanation: "After didn't, use go, not went.",
  },
  {
    id: 'u12-ex1-4',
    displayNumber: '4',
    type: 'fill-blank',
    prompt: 'She had a pen, but she ___ any paper.',
    translation: 'У неё была ручка, но бумаги не было.',
    correctAnswer: "didn't have",
    altAnswers: ['did not have'],
    explanation: "Have returns to the base form after didn't.",
  },
  {
    id: 'u12-ex1-5',
    displayNumber: '5',
    type: 'fill-blank',
    prompt: 'Jack did French at school, but he ___ German.',
    translation: 'Джек изучал французский в школе, но не изучал немецкий.',
    correctAnswer: "didn't do",
    altAnswers: ['did not do'],
    explanation: "After didn't, use do, not did.",
  },
];

const exercise2Examples: PracticeExample[] = [
  {
    cue: '1',
    answer: 'Did you watch TV last night?',
    note: 'Model item.',
  },
];

const exercise2Questions: PracticeQuestion[] = [
  {
    id: 'u12-ex2-2',
    displayNumber: '2',
    type: 'fill-blank',
    cue: 'I enjoyed the party. How about you?',
    prompt: '___ ?',
    translation: 'Тебе понравилась вечеринка?',
    correctAnswer: 'Did you enjoy the party',
    explanation: 'Mirror the statement with Did you + base verb.',
  },
  {
    id: 'u12-ex2-3',
    displayNumber: '3',
    type: 'fill-blank',
    cue: 'I had a good holiday. How about you?',
    prompt: '___ ?',
    translation: 'У тебя был хороший отпуск?',
    correctAnswer: 'Did you have a good holiday',
    explanation: 'Use have in the base form after Did.',
  },
  {
    id: 'u12-ex2-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: 'I finished work early. How about you?',
    prompt: '___ ?',
    translation: 'Ты закончил(а) работу рано?',
    correctAnswer: 'Did you finish work early',
    explanation: 'Use finish, not finished, after Did.',
  },
  {
    id: 'u12-ex2-5',
    displayNumber: '5',
    type: 'fill-blank',
    cue: 'I slept well last night. How about you?',
    prompt: '___ ?',
    translation: 'Ты хорошо спал(а) прошлой ночью?',
    correctAnswer: 'Did you sleep well last night',
    explanation: 'The question uses the base form sleep.',
  },
];

const exercise3Examples: PracticeExample[] = [
  {
    cue: '1 (watch TV)',
    answer: "I watched TV. / I didn't watch TV.",
    note: 'Both answers are possible. Write the one that is true for you.',
  },
];

const exercise3Questions: PracticeQuestion[] = [
  {
    id: 'u12-ex3-2',
    displayNumber: '2',
    type: 'fill-blank',
    answerMode: 'example',
    cue: "(get up before 7 o'clock)",
    prompt: 'I ___.',
    translation: 'О себе: я встал(а) до семи часов.',
    correctAnswer: "got up before 7 o'clock",
    altAnswers: ["didn't get up before 7 o'clock", "did not get up before 7 o'clock"],
    acceptedPatterns: [
      "^got\\s+up\\s+before\\s+7\\s+o['’]?clock$",
      "^(didn['’]t|did\\s+not)\\s+get\\s+up\\s+before\\s+7\\s+o['’]?clock$",
    ],
    explanation: 'Write a true positive or negative sentence, but keep the cue unchanged.',
  },
  {
    id: 'u12-ex3-3',
    displayNumber: '3',
    type: 'fill-blank',
    answerMode: 'example',
    cue: '(have a shower)',
    prompt: 'I ___.',
    translation: 'О себе: я принял(а) душ.',
    correctAnswer: 'had a shower',
    altAnswers: ["didn't have a shower", 'did not have a shower'],
    acceptedPatterns: [
      '^had\\s+a\\s+shower$',
      "^(didn['’]t|did\\s+not)\\s+have\\s+a\\s+shower$",
    ],
    explanation: 'Use either a true positive form or a true negative form.',
  },
  {
    id: 'u12-ex3-4',
    displayNumber: '4',
    type: 'fill-blank',
    answerMode: 'example',
    cue: '(buy a magazine)',
    prompt: 'I ___.',
    translation: 'О себе: я купил(а) журнал.',
    correctAnswer: 'bought a magazine',
    altAnswers: ["didn't buy a magazine", 'did not buy a magazine'],
    acceptedPatterns: [
      '^bought\\s+a\\s+magazine$',
      "^(didn['’]t|did\\s+not)\\s+buy\\s+a\\s+magazine$",
    ],
    explanation: 'Keep the exact cue idea, but choose the version that is true for you.',
  },
  {
    id: 'u12-ex3-5',
    displayNumber: '5',
    type: 'fill-blank',
    answerMode: 'example',
    cue: '(eat meat)',
    prompt: 'I ___.',
    translation: 'О себе: я ел(а) мясо.',
    correctAnswer: 'ate meat',
    altAnswers: ["didn't eat meat", 'did not eat meat'],
    acceptedPatterns: [
      '^ate\\s+meat$',
      "^(didn['’]t|did\\s+not)\\s+eat\\s+meat$",
    ],
    explanation: 'Both a positive and a negative sentence are acceptable here.',
  },
  {
    id: 'u12-ex3-6',
    displayNumber: '6',
    type: 'fill-blank',
    answerMode: 'example',
    cue: '(go to bed before 10.30)',
    prompt: 'I ___.',
    translation: 'О себе: я лёг(легла) спать до 10:30.',
    correctAnswer: 'went to bed before 10.30',
    altAnswers: ["didn't go to bed before 10.30", 'did not go to bed before 10.30'],
    acceptedPatterns: [
      '^went\\s+to\\s+bed\\s+before\\s+10(?:[.:]30)$',
      "^(didn['’]t|did\\s+not)\\s+go\\s+to\\s+bed\\s+before\\s+10(?:[.:]30)$",
    ],
    explanation: 'Use the same time phrase from the cue and answer truthfully.',
  },
];

const exercise4Examples: PracticeExample[] = [
  {
    cue: '1',
    answer: 'A: We went to New York last month. B: Where did you stay? A: With some friends.',
    note: 'Model item. The example already uses stay.',
  },
];

const exercise4Questions: PracticeQuestion[] = [
  {
    id: 'u12-ex4-2',
    displayNumber: '2',
    type: 'fill-blank',
    cue: 'A: I was late for the meeting. A: Half past nine.',
    prompt: 'What time ___ ?',
    translation: 'Во сколько ты пришёл(пришла)?',
    correctAnswer: 'did you arrive',
    explanation: 'Use did + you + arrive from the word bank.',
  },
  {
    id: 'u12-ex4-3',
    displayNumber: '3',
    type: 'fill-blank',
    cue: 'A: I played tennis this afternoon. A: No, I lost.',
    prompt: '___ ?',
    translation: 'Ты выиграл(а)?',
    correctAnswer: 'Did you win',
    explanation: 'The cue win becomes Did you win?',
  },
  {
    id: 'u12-ex4-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: 'A: I had a nice holiday. A: To the mountains.',
    prompt: 'Good. Where ___ ?',
    translation: 'Хорошо. Куда ты ездил(а)?',
    correctAnswer: 'did you go',
    explanation: 'Use Where + did + subject + go.',
  },
  {
    id: 'u12-ex4-5',
    displayNumber: '5',
    type: 'fill-blank',
    cue: 'A: We came home by taxi. A: Ten pounds.',
    prompt: 'How much ___ ?',
    translation: 'Сколько это стоило?',
    correctAnswer: 'did it cost',
    explanation: 'Cost stays in the base form after did.',
  },
  {
    id: 'u12-ex4-6',
    displayNumber: '6',
    type: 'fill-blank',
    cue: "A: I'm tired this morning. A: No, but I didn't sleep very well.",
    prompt: '___ ?',
    translation: 'Ты поздно лёг(легла) спать?',
    correctAnswer: 'Did you go to bed late',
    explanation: 'This is a yes/no question from the cue go to bed late.',
  },
  {
    id: 'u12-ex4-7',
    displayNumber: '7',
    type: 'fill-blank',
    cue: 'A: We went to the beach yesterday. A: Yes, it was great.',
    prompt: '___ ?',
    translation: 'Вы хорошо провели время?',
    correctAnswer: 'Did you have a nice time',
    explanation: 'The cue becomes a full Did you ... ? question.',
  },
  {
    id: 'u12-ex4-8',
    displayNumber: '8',
    type: 'fill-blank',
    cue: "A: The window is broken. A: I don't know.",
    prompt: 'How ___ ?',
    translation: 'Как это произошло?',
    correctAnswer: 'did it happen',
    altAnswers: ['did that happen'],
    explanation: 'Both did it happen and did that happen are natural here.',
  },
];

const exercise5Examples: PracticeExample[] = [
  {
    cue: '1 (enjoy)',
    answer: "We didn't enjoy it.",
    note: 'Model item.',
  },
];

const exercise5Questions: PracticeQuestion[] = [
  {
    id: 'u12-ex5-2',
    displayNumber: '2',
    type: 'fill-blank',
    cue: '(buy)',
    prompt: 'Tom ___ some new clothes yesterday - two shirts, a jacket and a pullover.',
    translation: 'Том купил вчера новую одежду: две рубашки, куртку и пуловер.',
    correctAnswer: 'bought',
    explanation: 'This sentence needs a positive past form.',
  },
  {
    id: 'u12-ex5-3',
    displayNumber: '3',
    type: 'fill-blank',
    cue: '(rain)',
    prompt: '"___ yesterday?" - "No, it was a nice day."',
    translation: 'Вчера шёл дождь?',
    correctAnswer: 'Did it rain',
    explanation: 'Use Did it rain for a past simple question.',
  },
  {
    id: 'u12-ex5-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: '(stay)',
    prompt: 'We were tired, so we ___ long at the party.',
    translation: 'Мы устали, поэтому недолго оставались на вечеринке.',
    correctAnswer: "didn't stay",
    altAnswers: ['did not stay'],
    explanation: 'The meaning is negative, so use did not + stay.',
  },
  {
    id: 'u12-ex5-5',
    displayNumber: '5',
    type: 'fill-blank',
    cue: '(open)',
    prompt: 'It was very warm in the room, so I ___ a window.',
    translation: 'В комнате было очень жарко, поэтому я открыл(а) окно.',
    correctAnswer: 'opened',
    explanation: 'The past situation needs the positive past form opened.',
  },
  {
    id: 'u12-ex5-6',
    displayNumber: '6',
    type: 'fill-blank',
    cue: '(have)',
    prompt: '"Did you phone Chris this morning?" - "No, I ___ time."',
    translation: 'Ты звонил(а) Крису сегодня утром? Нет, у меня не было времени.',
    correctAnswer: "didn't have",
    altAnswers: ['did not have'],
    explanation: 'After did not, use have, not had.',
  },
  {
    id: 'u12-ex5-7',
    displayNumber: '7',
    type: 'fill-blank',
    cue: '(do)',
    prompt: '"I cut my hand this morning." - "How ___ that?"',
    translation: 'Я порезал(а) руку сегодня утром. Как ты это сделал(а)?',
    correctAnswer: 'did you do',
    explanation: 'The question form is did you do, not did you did.',
  },
  {
    id: 'u12-ex5-8',
    displayNumber: '8',
    type: 'fill-blank',
    cue: '(know)',
    prompt: "\"Why weren't you at the meeting yesterday?\" - \"I ___ about it.\"",
    translation: 'Почему тебя не было на встрече вчера? Я не знал(а) об этом.',
    correctAnswer: "didn't know",
    altAnswers: ['did not know'],
    explanation: 'After did not, use know in the base form.',
  },
];

const unit12: Unit = {
  id: 'unit12',
  number: 12,
  title: {
    en: "I didn't ... / Did you ...?",
    ru: "I didn't ... / Did you ...?",
  },
  description: {
    en: "Past simple negatives and questions with didn't and Did ... ?",
    ru: "Отрицания и вопросы в past simple с didn't и Did ... ?",
  },
  steps: [
    {
      id: 'step-1-negative',
      type: 'theory',
      left: {
        en: {
          title: "Past simple negatives with didn't",
          explanation:
            "Use <b>didn't</b> (did not) + the <b>base form</b> to make past simple negatives. " +
            "This pattern is the same with regular verbs, irregular verbs, and every subject.",
          table: {
            headers: ['Positive', 'Negative'],
            rows: [
              ['I played tennis yesterday.', "I didn't play tennis yesterday."],
              ['She started work at nine.', "She didn't start work at nine."],
              ['We watched the film.', "We didn't watch the film."],
              ['He had breakfast.', "He didn't have breakfast."],
              ['They saw Jane.', "They didn't see Jane."],
              ['I did the shopping.', "I didn't do the shopping."],
            ],
          },
          notes: [
            "After didn't, the main verb goes back to the base form: didn't go, didn't have, didn't do.",
            "didn't is used for I, you, he, she, it, we, and they.",
          ],
        },
        ru: {
          title: "Отрицание в past simple с didn't",
          explanation:
            "Чтобы сделать отрицание в past simple, используйте <b>didn't</b> (did not) + <b>основную форму</b> глагола. " +
            'Это работает одинаково с правильными, неправильными глаголами и со всеми подлежащими.',
          table: {
            headers: ['Утверждение', 'Отрицание'],
            rows: [
              ['I played tennis yesterday.', "I didn't play tennis yesterday."],
              ['She started work at nine.', "She didn't start work at nine."],
              ['We watched the film.', "We didn't watch the film."],
              ['He had breakfast.', "He didn't have breakfast."],
              ['They saw Jane.', "They didn't see Jane."],
              ['I did the shopping.', "I didn't do the shopping."],
            ],
          },
          notes: [
            "После didn't основной глагол возвращается к форме основы: didn't go, didn't have, didn't do.",
            "Форма didn't одинакова для I, you, he, she, it, we и they.",
          ],
        },
      },
      right: {
        en: {
          title: "Examples - negative forms",
          intro: "Notice how the verb after didn't is always the infinitive without to.",
          items: negativeExamples,
        },
        ru: {
          title: 'Примеры - отрицательные формы',
          intro: "Обратите внимание: после didn't всегда используется основная форма глагола.",
          items: negativeExamples,
        },
      },
    },
    {
      id: 'step-2-questions',
      type: 'examples',
      left: {
        en: {
          title: 'Past simple questions with Did',
          explanation:
            'Use <b>Did</b> + subject + <b>base form</b> for past simple questions. ' +
            'Question words come before <b>did</b>, but the verb after <b>did</b> stays in the base form.',
          table: {
            headers: ['Statement', 'Question'],
            rows: [
              ['You watched TV last night.', 'Did you watch TV last night?'],
              ['She had a good holiday.', 'Did she have a good holiday?'],
              ['They went away last week.', 'Did they go away last week?'],
              ['You arrived at nine.', 'What time did you arrive?'],
              ['The accident happened yesterday.', 'How did the accident happen?'],
            ],
          },
          notes: [
            'The verb after Did is never a past form: Did you go? not Did you went?',
            'Word order: question word + did + subject + base verb.',
          ],
        },
        ru: {
          title: 'Вопросы в past simple с Did',
          explanation:
            'Для вопроса в past simple используйте <b>Did</b> + подлежащее + <b>основную форму</b> глагола. ' +
            'Вопросительное слово ставится перед <b>did</b>, но сам глагол после <b>did</b> остаётся в основной форме.',
          table: {
            headers: ['Утверждение', 'Вопрос'],
            rows: [
              ['You watched TV last night.', 'Did you watch TV last night?'],
              ['She had a good holiday.', 'Did she have a good holiday?'],
              ['They went away last week.', 'Did they go away last week?'],
              ['You arrived at nine.', 'What time did you arrive?'],
              ['The accident happened yesterday.', 'How did the accident happen?'],
            ],
          },
          notes: [
            'После Did глагол не бывает в прошедшей форме: Did you go?, а не Did you went?',
            'Порядок слов: вопросительное слово + did + подлежащее + основная форма глагола.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples - question forms',
          intro: 'These examples show yes/no questions, Wh-questions, and the base form after did.',
          items: questionExamples,
        },
        ru: {
          title: 'Примеры - вопросительные формы',
          intro: 'Здесь есть и общие вопросы, и Wh-вопросы, и везде после did стоит основная форма глагола.',
          items: questionExamples,
        },
      },
    },
    {
      id: 'step-3-short-answers',
      type: 'theory',
      left: {
        en: {
          title: 'Short answers',
          explanation:
            "Short answers to <b>Did ... ?</b> questions use <b>did</b> and <b>didn't</b>: " +
            '<b>Yes, I did.</b> / <b>No, I didn\'t.</b> Use the short answer form, not the full past verb.',
          table: {
            headers: ['Question', 'Short answer'],
            rows: [
              ['Did you see Joe yesterday?', "No, I didn't."],
              ['Did it rain on Sunday?', 'Yes, it did.'],
              ['Did Helen come to the party?', "No, she didn't."],
              ['Did your parents have a good holiday?', 'Yes, they did.'],
            ],
          },
          notes: [
            "Say Yes, I did. or No, I didn't. Do not repeat the main past verb in the short answer.",
            'The same helper did/didn\'t is used for every subject.',
          ],
        },
        ru: {
          title: 'Краткие ответы',
          explanation:
            "Краткие ответы на вопросы <b>Did ... ?</b> строятся с <b>did</b> и <b>didn't</b>: " +
            "<b>Yes, I did.</b> / <b>No, I didn't.</b> В кратком ответе не повторяется основной глагол в past simple.",
          table: {
            headers: ['Вопрос', 'Краткий ответ'],
            rows: [
              ['Did you see Joe yesterday?', "No, I didn't."],
              ['Did it rain on Sunday?', 'Yes, it did.'],
              ['Did Helen come to the party?', "No, she didn't."],
              ['Did your parents have a good holiday?', 'Yes, they did.'],
            ],
          },
          notes: [
            "Говорите Yes, I did. или No, I didn't. Основной глагол в прошедшем не повторяется.",
            'Один и тот же did/didn\'t используется со всеми подлежащими.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples - short answers and follow-up questions',
          items: shortAnswerExamples,
        },
        ru: {
          title: 'Примеры - краткие ответы и уточняющие вопросы',
          items: shortAnswerExamples,
        },
      },
    },
    {
      id: 'step-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation:
            "Keep the source exercise types separate: exact negatives, mirrored Did you ... ? questions, bounded personal answers, cue-based B questions, and a mixed-form check.",
          table: {
            headers: ['Form', 'Structure', 'Example'],
            rows: [
              ['Negative', "subject + didn't + base form", "She didn't go."],
              ['Question', 'Did + subject + base form?', 'Did she go?'],
              ['Wh-question', 'Wh-word + did + subject + base form?', 'Where did she go?'],
              ['Short answer', "Yes, ... did. / No, ... didn't.", 'No, she did not.'],
            ],
          },
          notes: [
            'Exercise 3 accepts either a positive or a negative personal answer, but the cue phrase must stay the same.',
            'Exercise 4 uses a word bank, so match each cue to one exact question form.',
          ],
        },
        ru: {
          title: 'Краткая опора',
          explanation:
            'Сохраняйте типы упражнений раздельно: точные отрицания, зеркальные вопросы с Did you ... ?, ограниченные личные ответы, вопросы для B по подсказкам и смешанную проверку форм.',
          table: {
            headers: ['Форма', 'Структура', 'Пример'],
            rows: [
              ['Отрицание', "subject + didn't + основа", "She didn't go."],
              ['Вопрос', 'Did + subject + основа?', 'Did she go?'],
              ['Wh-вопрос', 'Wh-word + did + subject + основа?', 'Where did she go?'],
              ['Краткий ответ', "Yes, ... did. / No, ... didn't.", 'No, she did not.'],
            ],
          },
          notes: [
            'В упражнении 3 можно дать правдивый утвердительный или отрицательный ответ, но сама подсказка должна сохраниться.',
            'В упражнении 4 есть набор слов, поэтому каждую реплику нужно превратить в точный вопрос.',
          ],
        },
      },
      right: {
        en: {
          title: "Exercises 1-5 - didn't and Did in context",
          instructions:
            "Work through the source exercise modes in order: negative completion, Did you ... ? questions, true personal past statements, B's cue-based questions, and a mixed-form review.",
          sections: [
            {
              id: 'u12-ex1-en',
              title: 'Exercise 1 - Complete with the negative form',
              instructions: "Complete each sentence with didn't + the correct base verb.",
              examples: exercise1Examples,
              questions: exercise1Questions,
            },
            {
              id: 'u12-ex2-en',
              title: 'Exercise 2 - Write questions with Did you ... ?',
              instructions: 'Turn each statement into a matching question for the other person.',
              examples: exercise2Examples,
              questions: exercise2Questions,
            },
            {
              id: 'u12-ex3-en',
              title: 'Exercise 3 - Write a true positive or negative sentence',
              instructions: 'Answer about yourself. Both the positive and the negative form are acceptable if they match the cue.',
              examples: exercise3Examples,
              questions: exercise3Questions,
            },
            {
              id: 'u12-ex4-en',
              title: "Exercise 4 - Write B's questions",
              instructions: 'Use the cue and the word bank to build the exact question B should ask.',
              wordBank: ['arrive', 'cost', 'go', 'go to bed late', 'happen', 'have a nice time', 'win'],
              examples: exercise4Examples,
              questions: exercise4Questions,
            },
            {
              id: 'u12-ex5-en',
              title: 'Exercise 5 - Choose the correct past form',
              instructions: 'Decide whether each sentence needs a positive verb, a negative, or a question form.',
              examples: exercise5Examples,
              questions: exercise5Questions,
            },
          ],
        },
        ru: {
          title: "Упражнения 1-5 - didn't и Did в контексте",
          instructions:
            'Идите по порядку от типа задания к типу задания: отрицания, вопросы Did you ... ?, правдивые личные высказывания о прошлом, вопросы B по подсказкам и смешанная проверка форм.',
          sections: [
            {
              id: 'u12-ex1-ru',
              title: 'Упражнение 1 - Дополните отрицательной формой',
              instructions: "Вставьте didn't + нужную основную форму глагола.",
              examples: exercise1Examples,
              questions: exercise1Questions,
            },
            {
              id: 'u12-ex2-ru',
              title: 'Упражнение 2 - Составьте вопросы с Did you ... ?',
              instructions: 'Преобразуйте каждое утверждение в подходящий вопрос к собеседнику.',
              examples: exercise2Examples,
              questions: exercise2Questions,
            },
            {
              id: 'u12-ex3-ru',
              title: 'Упражнение 3 - Напишите правдивое утвердительное или отрицательное предложение',
              instructions: 'Пишите о себе. Можно использовать и утвердительную, и отрицательную форму, если она точно соответствует подсказке.',
              examples: exercise3Examples,
              questions: exercise3Questions,
            },
            {
              id: 'u12-ex4-ru',
              title: 'Упражнение 4 - Напишите вопросы B',
              instructions: 'Используйте подсказку и набор слов, чтобы составить точный вопрос, который должен задать B.',
              wordBank: ['arrive', 'cost', 'go', 'go to bed late', 'happen', 'have a nice time', 'win'],
              examples: exercise4Examples,
              questions: exercise4Questions,
            },
            {
              id: 'u12-ex5-ru',
              title: 'Упражнение 5 - Выберите правильную форму прошедшего',
              instructions: 'Решите, нужна ли здесь утвердительная форма, отрицание или вопрос.',
              examples: exercise5Examples,
              questions: exercise5Questions,
            },
          ],
        },
      },
    },
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: "Quick Quiz - didn't / Did ... ?",
          description: 'Check the base form after did/didn\'t, question order, and short answers.',
          questions: [
            {
              id: 'q12-1',
              question: 'Which sentence is correct?',
              options: ["I didn't went to the shop.", "I didn't go to the shop.", 'I not go to the shop.'],
              correctIndex: 1,
              explanation: "After didn't, use the base form go.",
            },
            {
              id: 'q12-2',
              question: 'Which question is correct?',
              options: ['Did you had a good holiday?', 'Did you have a good holiday?', 'Had you a good holiday?'],
              correctIndex: 1,
              explanation: 'After Did, use the base form have.',
            },
            {
              id: 'q12-3',
              question: 'Choose the correct short answer.',
              options: ['No, she came not.', "No, she didn't.", 'No, she did not came.'],
              correctIndex: 1,
              explanation: "Short answers use did/didn't, not the full past verb.",
            },
            {
              id: 'q12-4',
              question: 'Complete: "How ___ the accident happen?"',
              options: ['did', 'was', 'do'],
              correctIndex: 0,
              explanation: 'Wh-question order is How + did + subject + base verb.',
            },
            {
              id: 'q12-5',
              question: 'Which negative is correct?',
              options: ["He didn't have time.", "He didn't had time.", 'He not had time.'],
              correctIndex: 0,
              explanation: "Have returns to the base form after didn't.",
            },
          ],
        },
        ru: {
          title: "Быстрый квиз - didn't / Did ... ?",
          description: 'Проверьте форму глагола после did/didn\'t, порядок слов в вопросе и краткие ответы.',
          questions: [
            {
              id: 'q12-1',
              question: 'Какое предложение правильное?',
              options: ["I didn't went to the shop.", "I didn't go to the shop.", 'I not go to the shop.'],
              correctIndex: 1,
              explanation: "После didn't нужна основная форма go.",
            },
            {
              id: 'q12-2',
              question: 'Какой вопрос правильный?',
              options: ['Did you had a good holiday?', 'Did you have a good holiday?', 'Had you a good holiday?'],
              correctIndex: 1,
              explanation: 'После Did используется основная форма have.',
            },
            {
              id: 'q12-3',
              question: 'Выберите правильный краткий ответ.',
              options: ['No, she came not.', "No, she didn't.", 'No, she did not came.'],
              correctIndex: 1,
              explanation: "В кратком ответе используются did/didn't, а не полный глагол в past simple.",
            },
            {
              id: 'q12-4',
              question: 'Дополните: "How ___ the accident happen?"',
              options: ['did', 'was', 'do'],
              correctIndex: 0,
              explanation: 'Порядок в Wh-вопросе: How + did + подлежащее + основная форма.',
            },
            {
              id: 'q12-5',
              question: 'Какое отрицание правильное?',
              options: ["He didn't have time.", "He didn't had time.", 'He not had time.'],
              correctIndex: 0,
              explanation: "После didn't глагол have возвращается к основной форме.",
            },
          ],
        },
      },
    },
    {
      id: 'step-6-summary',
      type: 'summary',
      content: {
        en: {
          title: "Summary - didn't / Did ... ?",
          points: [
            "Use <b>didn't</b> + base form for negatives: <b>didn't go</b>, <b>didn't have</b>, <b>didn't do</b>.",
            'Use <b>Did</b> + subject + base form for questions: <b>Did you go?</b> <b>Did she have time?</b>',
            "The main verb never stays in the past form after <b>did</b> or <b>didn't</b>.",
            "Short answers use <b>did</b> and <b>didn't</b>: <b>Yes, I did.</b> / <b>No, I didn't.</b>",
            'Wh-questions keep the same pattern: <b>Where did you go?</b> <b>How did it happen?</b>',
            'Some tasks can have two true answers, but the verb phrase still has to match the cue exactly.',
          ],
          nextUnit: 'Unit 13 - I was doing (past continuous)',
        },
        ru: {
          title: "Итоги - didn't / Did ... ?",
          points: [
            "Используйте <b>didn't</b> + основную форму для отрицаний: <b>didn't go</b>, <b>didn't have</b>, <b>didn't do</b>.",
            'Для вопросов используйте <b>Did</b> + подлежащее + основную форму: <b>Did you go?</b> <b>Did she have time?</b>',
            "После <b>did</b> и <b>didn't</b> основной глагол не остаётся в форме past simple.",
            "Краткие ответы строятся с <b>did</b> и <b>didn't</b>: <b>Yes, I did.</b> / <b>No, I didn't.</b>",
            'Wh-вопросы сохраняют ту же модель: <b>Where did you go?</b> <b>How did it happen?</b>',
            'В некоторых заданиях возможны два правдивых ответа, но сама глагольная подсказка должна сохраняться точно.',
          ],
          nextUnit: 'Unit 13 - I was doing (past continuous)',
        },
      },
    },
  ],
};

export default unit12;
