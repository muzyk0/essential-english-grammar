import type {
  ExampleItem,
  PracticeExample,
  PracticeQuestion,
  PracticeSection,
  Unit,
} from '../../types/unit';

const actionExamples: ExampleItem[] = [
  {
    english: 'At four yesterday, Paul was at the sports club.',
    russian: 'Вчера в четыре Пол был в спортклубе.',
    highlight: 'was at the sports club',
  },
  {
    english: 'He was swimming in the pool then.',
    russian: 'В тот момент он плавал в бассейне.',
    highlight: 'was swimming',
  },
  {
    english: "He wasn't watching TV at that time.",
    russian: 'В это время он не смотрел телевизор.',
    highlight: "wasn't watching",
  },
  {
    english: "At 11.30 yesterday, Maya was working in her office.",
    russian: 'Вчера в 11:30 Майя работала у себя в офисе.',
    highlight: 'was working',
  },
  {
    english: "The children were playing outside at five o'clock.",
    russian: 'В пять часов дети играли на улице.',
    highlight: 'were playing',
  },
  {
    english: 'The sea was getting rough before lunch.',
    russian: 'Перед обедом море становилось бурным.',
    highlight: 'was getting',
  },
];

const formExamples: ExampleItem[] = [
  {
    english: "'What did he say?' 'I don't know. I wasn't listening.'",
    russian: '«Что он сказал?» «Не знаю. Я не слушал(а)».',
    highlight: "wasn't listening",
  },
  {
    english: 'It was raining, so we stayed inside.',
    russian: 'Шёл дождь, поэтому мы остались дома.',
    highlight: 'was raining',
  },
  {
    english: 'Back in 2009, we were living in Canada.',
    russian: 'Ещё в 2009 году мы жили в Канаде.',
    highlight: 'were living',
  },
  {
    english: "Today she's wearing jeans, but yesterday she was wearing trousers.",
    russian: 'Сегодня на ней джинсы, а вчера на ней были брюки.',
    highlight: 'was wearing',
  },
  {
    english: 'It was a beautiful morning. The sun was shining.',
    russian: 'Это было прекрасное утро. Светило солнце.',
    highlight: 'was shining',
  },
  {
    english: 'The birds were singing outside the window.',
    russian: 'За окном пели птицы.',
    highlight: 'were singing',
  },
  {
    english: "What were you doing at 11.30 yesterday? Were you working?",
    russian: 'Что ты делал(а) вчера в 11:30? Ты работал(а)?',
    highlight: 'were you doing',
  },
];

const contrastExamples: ExampleItem[] = [
  {
    english: "I'm working now, but I was sleeping at 10.30 last night.",
    russian: 'Сейчас я работаю, а вчера в 10:30 я спал(а).',
    highlight: 'was sleeping',
  },
  {
    english: "It isn't raining now, and it wasn't raining when we went out yesterday either.",
    russian: 'Сейчас дождя нет, и вчера, когда мы выходили, его тоже не было.',
    highlight: "wasn't raining",
  },
  {
    english: "What are you doing now? What were you doing at three o'clock yesterday?",
    russian: 'Что ты делаешь сейчас? Что ты делал(а) вчера в три часа?',
    highlight: 'were you doing',
  },
  {
    english: 'This week Eva is wearing boots, but last week she was wearing sandals.',
    russian: 'На этой неделе Ева носит ботинки, а на прошлой неделе она была в сандалиях.',
    highlight: 'was wearing',
  },
];

const exercise1Examples: PracticeExample[] = [
  {
    cue: 'Rachel',
    answer: 'Rachel was at home. She was watching TV.',
    note: 'Model item.',
  },
];

const exercise1Questions: PracticeQuestion[] = [
  {
    id: 'u13-ex1-2',
    displayNumber: '2',
    type: 'fill-blank',
    visual: {
      emoji: '🎬',
      title: 'Jack and Kate',
      description: '3.00 yesterday: at the cinema / watch a film',
    },
    prompt: 'Jack and Kate ___ . They ___ .',
    translation: 'Джек и Кейт были в кино. Они смотрели фильм.',
    correctAnswer: 'were at the cinema ... were watching a film',
    blankAnswers: [
      { correctAnswer: 'were at the cinema' },
      { correctAnswer: 'were watching a film' },
    ],
    explanation: 'First write the place, then the activity.',
  },
  {
    id: 'u13-ex1-3',
    displayNumber: '3',
    type: 'fill-blank',
    visual: {
      emoji: '🚗',
      title: 'Tom',
      description: '3.00 yesterday: in his car / drive',
    },
    prompt: 'Tom ___ . He ___ .',
    translation: 'Том был в своей машине. Он вёл машину.',
    correctAnswer: 'was in his car ... was driving',
    blankAnswers: [
      { correctAnswer: 'was in his car' },
      { correctAnswer: 'was driving' },
    ],
    explanation: 'Use was for Tom in both parts.',
  },
  {
    id: 'u13-ex1-4',
    displayNumber: '4',
    type: 'fill-blank',
    visual: {
      emoji: '🚉',
      title: 'Tracey',
      description: '3.00 yesterday: at the station / wait for a train',
    },
    prompt: 'Tracey ___ . She ___ .',
    translation: 'Трейси была на станции. Она ждала поезд.',
    correctAnswer: 'was at the station ... was waiting for a train',
    blankAnswers: [
      { correctAnswer: 'was at the station' },
      { correctAnswer: 'was waiting for a train' },
    ],
    explanation: 'Keep the place and the action as two separate parts.',
  },
  {
    id: 'u13-ex1-5',
    displayNumber: '5',
    type: 'fill-blank',
    visual: {
      emoji: '🌳',
      title: 'Mr and Mrs Hall',
      description: '3.00 yesterday: in the park / walk',
    },
    prompt: 'Mr and Mrs Hall ___ . They ___ .',
    translation: 'Мистер и миссис Холл были в парке. Они гуляли.',
    correctAnswer: 'were in the park ... were walking',
    blankAnswers: [
      { correctAnswer: 'were in the park' },
      { correctAnswer: 'were walking' },
    ],
    explanation: 'Use were with a plural subject.',
  },
  {
    id: 'u13-ex1-6',
    displayNumber: '6',
    type: 'fill-blank',
    visual: {
      emoji: '🕒',
      title: 'And you?',
      description: 'Write your own place sentence and activity sentence.',
    },
    cue: 'Use a real or imagined answer for 3.00 yesterday afternoon.',
    prompt: 'I ___ . I ___ .',
    translation: 'О себе: напишите, где вы были вчера в три часа дня и что делали.',
    answerMode: 'example',
    correctAnswer: 'was at home ... was reading a book',
    blankAnswers: [
      {
        correctAnswer: 'was at home',
        acceptedPatterns: ['^was\\s+.+$'],
      },
      {
        correctAnswer: 'was reading a book',
        acceptedPatterns: ['^was\\s+.+ing(?:\\s+.+)?$'],
      },
    ],
    explanation: 'Use the first blank for place and the second blank for the activity in progress.',
  },
];

const exercise2Examples: PracticeExample[] = [
  {
    cue: '8.30-9.00: wash her car',
    answer: 'At 8.45 she was washing her car.',
    note: 'Model item.',
  },
];

const exercise2Questions: PracticeQuestion[] = [
  {
    id: 'u13-ex2-2',
    displayNumber: '2',
    type: 'fill-blank',
    visual: {
      emoji: '🎾',
      title: '10.15-11.45',
      description: 'play tennis',
    },
    prompt: 'At 10.45 she ___ .',
    translation: 'В 10:45 она играла в теннис.',
    correctAnswer: 'was playing tennis',
    explanation: '10.45 is inside the tennis block, so use was playing.',
  },
  {
    id: 'u13-ex2-3',
    displayNumber: '3',
    type: 'fill-blank',
    visual: {
      emoji: '📰',
      title: '7.30-8.10',
      description: 'read the paper',
    },
    prompt: "At 8 o'clock she ___ .",
    translation: 'В восемь часов она читала газету.',
    correctAnswer: 'was reading the newspaper',
    altAnswers: ['was reading a newspaper', 'was reading the paper'],
    explanation: 'Use the action that covers 7.30-8.10.',
  },
  {
    id: 'u13-ex2-4',
    displayNumber: '4',
    type: 'fill-blank',
    visual: {
      emoji: '🍳',
      title: '12.00-12.45',
      description: 'cook lunch',
    },
    prompt: 'At 12.10 she ___ .',
    translation: 'В 12:10 она готовила обед.',
    correctAnswer: 'was cooking lunch',
    altAnswers: ['was cooking'],
    explanation: 'Both was cooking lunch and was cooking fit this picture.',
  },
  {
    id: 'u13-ex2-5',
    displayNumber: '5',
    type: 'fill-blank',
    visual: {
      emoji: '🥣',
      title: '7.10-7.25',
      description: 'have breakfast',
    },
    prompt: 'At 7.15 she ___ .',
    translation: 'В 7:15 она завтракала.',
    correctAnswer: 'was having breakfast',
    explanation: '7.15 is during breakfast time.',
  },
  {
    id: 'u13-ex2-6',
    displayNumber: '6',
    type: 'fill-blank',
    visual: {
      emoji: '🧽',
      title: '9.20-10.00',
      description: 'clean the kitchen',
    },
    prompt: 'At 9.30 she ___ .',
    translation: 'В 9:30 она убирала кухню.',
    correctAnswer: 'was cleaning the kitchen',
    explanation: 'Choose the activity that matches the 9.20-10.00 slot.',
  },
];

const exercise3Examples: PracticeExample[] = [
  {
    cue: '(you/live)',
    answer: 'Where were you living in 2012?',
    note: 'Model question.',
  },
];

const exercise3Questions: PracticeQuestion[] = [
  {
    id: 'u13-ex3-2',
    displayNumber: '2',
    type: 'fill-blank',
    cue: '(you/do)',
    prompt: "___ at 2 o'clock?",
    translation: 'Что ты делал(а) в два часа?',
    correctAnswer: 'What were you doing',
    explanation: 'Use What because the answer is about an activity.',
  },
  {
    id: 'u13-ex3-3',
    displayNumber: '3',
    type: 'fill-blank',
    cue: '(it/rain)',
    prompt: '___ when you got up?',
    translation: 'Шёл ли дождь, когда ты встал(а)?',
    correctAnswer: 'Was it raining',
    explanation: 'Yes/no question: Was + it + raining.',
  },
  {
    id: 'u13-ex3-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: '(Sue/drive)',
    prompt: '___ so fast?',
    translation: 'Почему Сью ехала так быстро?',
    correctAnswer: 'Why was Sue driving',
    explanation: 'Use Why because the answer gives a reason.',
  },
  {
    id: 'u13-ex3-5',
    displayNumber: '5',
    type: 'fill-blank',
    cue: '(Tom/wear)',
    prompt: '___ a suit yesterday?',
    translation: 'Был ли Том вчера в костюме?',
    correctAnswer: 'Was Tom wearing',
    explanation: 'Use Was with Tom and keep the -ing form.',
  },
];

const exercise4Examples: PracticeExample[] = [
  {
    cue: '(wear / a jacket)',
    answer: "He wasn't wearing a jacket.",
    note: 'Model item.',
  },
];

const exercise4Questions: PracticeQuestion[] = [
  {
    id: 'u13-ex4-2',
    displayNumber: '2',
    type: 'fill-blank',
    cue: '(carry / a bag)',
    prompt: 'He ___ .',
    translation: 'На нём была сумка.',
    correctAnswer: 'was carrying a bag',
    explanation: 'The picture shows a positive action.',
  },
  {
    id: 'u13-ex4-3',
    displayNumber: '3',
    type: 'fill-blank',
    cue: '(go / to the dentist)',
    prompt: 'He ___ .',
    translation: 'Он не шёл к зубному врачу.',
    correctAnswer: "wasn't going to the dentist",
    altAnswers: ['was not going to the dentist'],
    explanation: 'This one needs a negative sentence.',
  },
  {
    id: 'u13-ex4-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: '(eat / an ice cream)',
    prompt: 'He ___ .',
    translation: 'Он ел мороженое.',
    correctAnswer: 'was eating an ice cream',
    altAnswers: ['was eating an ice-cream'],
    explanation: 'Use a positive sentence for the visible action.',
  },
  {
    id: 'u13-ex4-5',
    displayNumber: '5',
    type: 'fill-blank',
    cue: '(carry / an umbrella)',
    prompt: 'He ___ .',
    translation: 'Он не нёс зонт.',
    correctAnswer: "wasn't carrying an umbrella",
    altAnswers: ['was not carrying an umbrella'],
    explanation: 'The umbrella is not there, so the sentence is negative.',
  },
  {
    id: 'u13-ex4-6',
    displayNumber: '6',
    type: 'fill-blank',
    cue: '(go / home)',
    prompt: 'He ___ .',
    translation: 'Он не шёл домой.',
    correctAnswer: "wasn't going home",
    altAnswers: ['was not going home'],
    explanation: 'The speech bubble shows a different destination.',
  },
  {
    id: 'u13-ex4-7',
    displayNumber: '7',
    type: 'fill-blank',
    cue: '(wear / a hat)',
    prompt: 'He ___ .',
    translation: 'На нём была шляпа.',
    correctAnswer: 'was wearing a hat',
    explanation: 'Use was wearing for clothes visible in the picture.',
  },
  {
    id: 'u13-ex4-8',
    displayNumber: '8',
    type: 'fill-blank',
    cue: '(ride / a bicycle)',
    prompt: 'He ___ .',
    translation: 'Он не ехал на велосипеде.',
    correctAnswer: "wasn't riding a bicycle",
    altAnswers: ['was not riding a bicycle'],
    explanation: 'The picture shows him walking, not cycling.',
  },
];

const practiceSectionsEn: PracticeSection[] = [
  {
    id: 'u13-ex1',
    title: 'Exercise 1 — Write where they were and what they were doing',
    instructions: "Each answer needs two parts: a place sentence and an action sentence for three o'clock yesterday afternoon.",
    examples: exercise1Examples,
    questions: exercise1Questions,
  },
  {
    id: 'u13-ex2',
    title: "Exercise 2 — Sarah's morning timeline",
    instructions: 'Use the time labels and pictures to decide what Sarah was doing at each moment.',
    examples: exercise2Examples,
    questions: exercise2Questions,
  },
  {
    id: 'u13-ex3',
    title: 'Exercise 3 — Complete the questions',
    instructions: 'Use was / were + -ing. Add what, where, or why when the answer needs it.',
    examples: exercise3Examples,
    questions: exercise3Questions,
  },
  {
    id: 'u13-ex4',
    title: 'Exercise 4 — Positive or negative picture sentences',
    instructions: 'Look at Joe and decide whether each sentence should be positive or negative.',
    examples: exercise4Examples,
    questions: exercise4Questions,
  },
];

const practiceSectionsRu: PracticeSection[] = [
  {
    id: 'u13-ex1',
    title: 'Упражнение 1 — Напишите, где они были и что делали',
    instructions: 'В каждом ответе нужны две части: где человек был и что он делал вчера в три часа дня.',
    examples: exercise1Examples,
    questions: exercise1Questions,
  },
  {
    id: 'u13-ex2',
    title: 'Упражнение 2 — Утро Сары по времени',
    instructions: 'Смотрите на время и картинки и решайте, что Сара делала в каждый момент.',
    examples: exercise2Examples,
    questions: exercise2Questions,
  },
  {
    id: 'u13-ex3',
    title: 'Упражнение 3 — Дополните вопросы',
    instructions: 'Используйте was / were + -ing. При необходимости добавьте what, where или why.',
    examples: exercise3Examples,
    questions: exercise3Questions,
  },
  {
    id: 'u13-ex4',
    title: 'Упражнение 4 — Утвердительные или отрицательные предложения по картинке',
    instructions: 'Посмотрите на Джо и решите, какое предложение нужно: утвердительное или отрицательное.',
    examples: exercise4Examples,
    questions: exercise4Questions,
  },
];

const unit13: Unit = {
  id: 'unit13',
  number: 13,
  title: {
    en: 'I was doing (past continuous)',
    ru: 'I was doing (прошедшее длительное)',
  },
  description: {
    en: 'Past continuous: was / were + -ing for actions in progress at a particular past time.',
    ru: 'Past continuous: was / were + -ing для действий, которые происходили в определённый момент в прошлом.',
  },
  steps: [
    {
      id: 'step-1-formation',
      type: 'theory',
      left: {
        en: {
          title: 'An action in progress at a past time',
          explanation:
            'Use the <b>past continuous</b> to talk about something that <b>was already happening at a particular moment in the past</b>. ' +
            'The action started before that moment and continued through it.',
          table: {
            headers: ['Time', 'What was happening?'],
            rows: [
              ['3.30', 'Paul started swimming'],
              ['4.00', 'He was swimming'],
              ['4.15', 'He finished swimming'],
            ],
          },
          notes: [
            'Past continuous = was / were + verb-ing.',
            "Ask about a past moment with a time phrase such as 'at four o'clock yesterday'.",
          ],
        },
        ru: {
          title: 'Действие в процессе в определённый момент прошлого',
          explanation:
            'Используйте <b>past continuous</b>, когда нужно сказать, что действие <b>уже происходило в конкретный момент в прошлом</b>. ' +
            'Оно началось раньше этого момента и продолжалось в него.',
          table: {
            headers: ['Время', 'Что происходило?'],
            rows: [
              ['3.30', 'Paul started swimming'],
              ['4.00', 'He was swimming'],
              ['4.15', 'He finished swimming'],
            ],
          },
          notes: [
            'Past continuous = was / were + глагол-ing.',
            "Часто рядом есть указание на время: например, at four o'clock yesterday.",
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — one moment in the past',
          intro: 'These sentences describe what was going on at a particular time, not a finished past event.',
          items: actionExamples,
        },
        ru: {
          title: 'Примеры — один момент в прошлом',
          intro: 'Эти предложения показывают, что происходило в определённый момент, а не уже завершённое действие.',
          items: actionExamples,
        },
      },
    },
    {
      id: 'step-2-usage',
      type: 'examples',
      left: {
        en: {
          title: 'Forms: positive, negative, and questions',
          explanation:
            'Build the form with <b>was / were + -ing</b>. Put <b>not</b> after was / were for negatives, ' +
            'and put <b>was / were before the subject</b> for questions.',
          table: {
            headers: ['Positive', 'Negative', 'Question'],
            rows: [
              ['I / he / she / it was doing', "I / he / she / it wasn't doing", 'Was I / he / she / it doing?'],
              ['we / you / they were doing', "we / you / they weren't doing", 'Were we / you / they doing?'],
            ],
          },
          notes: [
            "wasn't = was not; weren't = were not.",
            'Short answers stop at was / were: Yes, I was. No, they were not.',
          ],
        },
        ru: {
          title: 'Формы: утверждение, отрицание и вопрос',
          explanation:
            'Форма строится так: <b>was / were + -ing</b>. Для отрицания поставьте <b>not</b> после was / were, ' +
            'а для вопроса перенесите <b>was / were перед подлежащим</b>.',
          table: {
            headers: ['Утверждение', 'Отрицание', 'Вопрос'],
            rows: [
              ['I / he / she / it was doing', "I / he / she / it wasn't doing", 'Was I / he / she / it doing?'],
              ['we / you / they were doing', "we / you / they weren't doing", 'Were we / you / they doing?'],
            ],
          },
          notes: [
            "wasn't = was not; weren't = were not.",
            'В кратких ответах остаются только was / were: Yes, I was. No, they were not.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — negatives, questions, and background scenes',
          intro: 'Past continuous can describe what was happening, what was not happening, and the scene around a past moment.',
          items: formExamples,
        },
        ru: {
          title: 'Примеры — отрицания, вопросы и фон ситуации',
          intro: 'Past continuous может показывать, что происходило, чего не происходило и какой была обстановка в тот момент.',
          items: formExamples,
        },
      },
    },
    {
      id: 'step-3-negative-questions',
      type: 'theory',
      left: {
        en: {
          title: 'From present continuous to past continuous',
          explanation:
            'Compare <b>am / is / are + -ing</b> for <b>now</b> with <b>was / were + -ing</b> for a <b>past time</b>. ' +
            'The spelling rules stay the same: live -> living, run -> running, lie -> lying.',
          table: {
            headers: ['Now', 'At a past time'],
            rows: [
              ["I'm working.", 'I was working at 10.30 last night.'],
              ["It isn't raining.", "It wasn't raining when we went out."],
              ['What are you doing?', "What were you doing at three o'clock?"],
            ],
          },
          notes: [
            'Use am / is / are + -ing for what is happening now.',
            'Use was / were + -ing for what was in progress earlier.',
          ],
        },
        ru: {
          title: 'От present continuous к past continuous',
          explanation:
            'Сравните <b>am / is / are + -ing</b> для <b>сейчас</b> и <b>was / were + -ing</b> для <b>момента в прошлом</b>. ' +
            'Правила написания остаются теми же: live -> living, run -> running, lie -> lying.',
          table: {
            headers: ['Сейчас', 'В прошлом'],
            rows: [
              ["I'm working.", 'I was working at 10.30 last night.'],
              ["It isn't raining.", "It wasn't raining when we went out."],
              ['What are you doing?', "What were you doing at three o'clock?"],
            ],
          },
          notes: [
            'Форма am / is / are + -ing описывает то, что происходит сейчас.',
            'Форма was / were + -ing описывает то, что было в процессе раньше.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — now versus then',
          intro: 'The verb pattern stays similar, but the time reference changes from now to a past moment.',
          items: contrastExamples,
        },
        ru: {
          title: 'Примеры — сейчас и тогда',
          intro: 'Шаблон глагола похож, но время меняется: сейчас или определённый момент в прошлом.',
          items: contrastExamples,
        },
      },
    },
    {
      id: 'step-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Keep the exercise shapes separate: place + action, timed activity, question form, and positive or negative description.',
          table: {
            headers: ['Task', 'Structure', 'Example'],
            rows: [
              ['Place', 'was / were + place', 'She was at the station.'],
              ['Action', 'was / were + verb-ing', 'She was waiting for a train.'],
              ['Question', 'what / where / why + was / were + subject + -ing', 'Why was Sue driving so fast?'],
            ],
          },
          notes: [
            'Exercise 1 needs two parts: where and what.',
            'Exercise 4 depends on the picture, so choose positive or negative carefully.',
          ],
        },
        ru: {
          title: 'Краткая памятка',
          explanation: 'Сохраняйте типы заданий отдельно: место + действие, действие по времени, форма вопроса и утвердительное или отрицательное описание.',
          table: {
            headers: ['Задача', 'Структура', 'Пример'],
            rows: [
              ['Место', 'was / were + место', 'She was at the station.'],
              ['Действие', 'was / were + глагол-ing', 'She was waiting for a train.'],
              ['Вопрос', 'what / where / why + was / were + подлежащее + -ing', 'Why was Sue driving so fast?'],
            ],
          },
          notes: [
            'В упражнении 1 нужны две части: где и что.',
            'В упражнении 4 выбор зависит от картинки: утверждение или отрицание.',
          ],
        },
      },
      right: {
        en: {
          title: 'Practice — past continuous at a past time',
          sections: practiceSectionsEn,
        },
        ru: {
          title: 'Практика — past continuous в моменте прошлого',
          sections: practiceSectionsRu,
        },
      },
    },
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Past continuous',
          description: 'Choose the option that fits Unit 13 best.',
          questions: [
            {
              id: 'q13-1',
              question: "Which sentence shows an action in progress at four o'clock yesterday?",
              options: ["Paul was swimming at four o'clock.", "Paul swam at four o'clock.", "Paul is swimming at four o'clock."],
              correctIndex: 0,
              explanation: 'was swimming describes the activity in progress at that past time.',
            },
            {
              id: 'q13-2',
              question: 'Choose the correct question.',
              options: ["What were you doing at 2 o'clock?", "What did you doing at 2 o'clock?", "What was you doing at 2 o'clock?"],
              correctIndex: 0,
              explanation: 'Question order is What + were + subject + doing.',
            },
            {
              id: 'q13-3',
              question: 'Which negative form is correct?',
              options: ["She wasn't watching TV.", "She weren't watching TV.", "She wasn't watch TV."],
              correctIndex: 0,
              explanation: "With she, use wasn't + verb-ing.",
            },
            {
              id: 'q13-4',
              question: 'Complete the sentence: "At 8.45 Sarah ___."',
              options: ['was washing her car', 'washing her car', 'is washing her car'],
              correctIndex: 0,
              explanation: 'Unit 13 needs was / were + -ing for a past time in progress.',
            },
            {
              id: 'q13-5',
              question: 'Which pair compares now and a past time correctly?',
              options: [
                'I am working now. / I was working at 10.30 last night.',
                'I was working now. / I am working at 10.30 last night.',
                'I am working now. / I were working at 10.30 last night.',
              ],
              correctIndex: 0,
              explanation: 'Use am for now and was for a past time with I.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Past continuous',
          description: 'Выберите вариант, который лучше всего соответствует юниту 13.',
          questions: [
            {
              id: 'q13-1',
              question: 'Какое предложение показывает действие в процессе вчера в четыре часа?',
              options: ["Paul was swimming at four o'clock.", "Paul swam at four o'clock.", "Paul is swimming at four o'clock."],
              correctIndex: 0,
              explanation: 'was swimming показывает действие, которое происходило именно в тот момент.',
            },
            {
              id: 'q13-2',
              question: 'Выберите правильный вопрос.',
              options: ["What were you doing at 2 o'clock?", "What did you doing at 2 o'clock?", "What was you doing at 2 o'clock?"],
              correctIndex: 0,
              explanation: 'Порядок слов такой: What + were + subject + doing.',
            },
            {
              id: 'q13-3',
              question: 'Какая отрицательная форма правильная?',
              options: ["She wasn't watching TV.", "She weren't watching TV.", "She wasn't watch TV."],
              correctIndex: 0,
              explanation: "С she используем wasn't + глагол-ing.",
            },
            {
              id: 'q13-4',
              question: 'Дополните предложение: "At 8.45 Sarah ___."',
              options: ['was washing her car', 'washing her car', 'is washing her car'],
              correctIndex: 0,
              explanation: 'Для действия в процессе в прошлом нужен was / were + -ing.',
            },
            {
              id: 'q13-5',
              question: 'Какая пара правильно сравнивает сейчас и прошлый момент?',
              options: [
                'I am working now. / I was working at 10.30 last night.',
                'I was working now. / I am working at 10.30 last night.',
                'I am working now. / I were working at 10.30 last night.',
              ],
              correctIndex: 0,
              explanation: 'С I используем am для настоящего момента и was для прошлого.',
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
          title: 'Summary — Past continuous',
          points: [
            'Form: <b>was / were</b> + verb<b>-ing</b>.',
            'Use it for something <b>in progress at a particular time in the past</b>.',
            'The action started before that time and continued through it.',
            "Negatives use <b>wasn't / weren't</b>; questions begin with <b>Was / Were</b>.",
            'Use <b>what / where / why</b> when a question needs more than yes or no.',
            'Compare <b>am / is / are + -ing</b> for now with <b>was / were + -ing</b> for a past moment.',
          ],
          nextUnit: 'Unit 14 — I was doing vs I did',
        },
        ru: {
          title: 'Итоги — Past continuous',
          points: [
            'Форма: <b>was / were</b> + глагол<b>-ing</b>.',
            'Используйте её для действия, которое <b>происходило в определённый момент в прошлом</b>.',
            'Действие началось раньше этого момента и продолжалось в него.',
            "В отрицании используем <b>wasn't / weren't</b>, а вопросы начинаются с <b>Was / Were</b>.",
            'Добавляйте <b>what / where / why</b>, если нужен не только ответ yes / no.',
            'Сравнивайте <b>am / is / are + -ing</b> для настоящего момента и <b>was / were + -ing</b> для прошлого.',
          ],
          nextUnit: 'Юнит 14 — I was doing vs I did',
        },
      },
    },
  ],
};

export default unit13;
