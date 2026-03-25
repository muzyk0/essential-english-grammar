import type {
  ExampleItem,
  PracticeExample,
  PracticeQuestion,
  PracticeSection,
  Unit,
} from '../../types/unit';

const interruptingExamples: ExampleItem[] = [
  {
    english: 'Nina was writing an email when the fire alarm rang.',
    russian: 'Нина писала письмо, когда сработала пожарная сигнализация.',
    highlight: 'was writing',
  },
  {
    english: 'What happened? The alarm rang at 6.15.',
    russian: 'Что произошло? Сигнализация сработала в 6:15.',
    highlight: 'rang',
  },
  {
    english: 'What was Nina doing when it rang? She was writing an email.',
    russian: 'Что делала Нина, когда это случилось? Она писала письмо.',
    highlight: 'was writing an email',
  },
  {
    english: 'Everyone left the building a minute later.',
    russian: 'Минутой позже все вышли из здания.',
    highlight: 'left',
  },
  {
    english: 'The children were playing outside when it started to rain.',
    russian: 'Дети играли на улице, когда начался дождь.',
    highlight: 'were playing',
  },
  {
    english: 'I was talking to Sam when my train arrived.',
    russian: 'Я разговаривал(а) с Сэмом, когда пришёл мой поезд.',
    highlight: 'arrived',
  },
];

const comparisonExamples: ExampleItem[] = [
  {
    english: 'We played tennis from ten until twelve.',
    russian: 'Мы играли в теннис с десяти до двенадцати.',
    highlight: 'played',
  },
  {
    english: 'At 10.30 we were playing tennis.',
    russian: 'В 10:30 мы играли в теннис.',
    highlight: 'were playing',
  },
  {
    english: 'Luca watched the whole film last night.',
    russian: 'Лука посмотрел весь фильм прошлой ночью.',
    highlight: 'watched',
  },
  {
    english: 'At 9.15 he was watching the middle of it.',
    russian: 'В 9:15 он смотрел его середину.',
    highlight: 'was watching',
  },
  {
    english: 'Did you listen to the news yesterday evening?',
    russian: 'Ты слушал(а) новости вчера вечером?',
    highlight: 'Did you listen',
  },
  {
    english: 'Were you listening when I sent the message?',
    russian: 'Ты слушал(а), когда я отправил(а) сообщение?',
    highlight: 'Were you listening',
  },
];

const whenWhileExamples: ExampleItem[] = [
  {
    english: 'I was walking home when I saw Clara.',
    russian: 'Я шёл(шла) домой, когда увидел(а) Клару.',
    highlight: 'was walking',
  },
  {
    english: 'While I was waiting for the bus, I read two emails.',
    russian: 'Пока я ждал(а) автобус, я прочитал(а) два письма.',
    highlight: 'was waiting',
  },
  {
    english: 'The lights went out while we were having dinner.',
    russian: 'Свет погас, пока мы ужинали.',
    highlight: 'went out',
  },
  {
    english: 'While Ben was cooking, the phone rang twice.',
    russian: 'Пока Бен готовил, телефон звонил два раза.',
    highlight: 'rang',
  },
  {
    english: 'It was snowing when we left the cafe.',
    russian: 'Когда мы вышли из кафе, шёл снег.',
    highlight: 'was snowing',
  },
  {
    english: 'The dog barked while the baby was sleeping.',
    russian: 'Собака залаяла, пока ребёнок спал.',
    highlight: 'was sleeping',
  },
];

const exercise1Examples: PracticeExample[] = [
  {
    cue: 'Model',
    answer: 'Ava was fixing a shelf when it fell down. She hurt her hand.',
    note: 'Past continuous = background action. Past simple = event and result.',
  },
];

const exercise1Questions: PracticeQuestion[] = [
  {
    id: 'u14-ex1-1',
    displayNumber: '1',
    type: 'fill-blank',
    visual: {
      emoji: '🎨',
      title: 'Emma',
      description: 'paint the kitchen / fall off the chair',
    },
    cue: '(happen) (paint) (fall)',
    prompt: 'Emma hurt her wrist last Saturday. It ___ while she ___ the kitchen. She ___ off the chair.',
    translation: 'В прошлую субботу Эмма повредила запястье. Это случилось, когда она красила кухню. Она упала со стула.',
    correctAnswer: 'happened ... was painting ... fell',
    blankAnswers: [
      { correctAnswer: 'happened' },
      { correctAnswer: 'was painting' },
      { correctAnswer: 'fell' },
    ],
    explanation: 'The accident and the fall are completed events, but the painting was already in progress.',
  },
  {
    id: 'u14-ex1-2',
    displayNumber: '2',
    type: 'fill-blank',
    visual: {
      emoji: '🚌',
      title: 'Leo',
      description: 'bus arrives / get off / friends wait',
    },
    cue: '(arrive) (get off) (wait)',
    prompt: 'The bus ___ and Leo ___ . Two friends of his ___ outside to meet him.',
    translation: 'Автобус приехал, и Лео вышел. Двое его друзей ждали снаружи, чтобы встретить его.',
    correctAnswer: 'arrived ... got off ... were waiting',
    blankAnswers: [
      { correctAnswer: 'arrived' },
      { correctAnswer: 'got off' },
      { correctAnswer: 'were waiting' },
    ],
    explanation: 'The arrival and getting off happened once; the waiting was the background action.',
  },
  {
    id: 'u14-ex1-3',
    displayNumber: '3',
    type: 'fill-blank',
    visual: {
      emoji: '🚶',
      title: 'Sara and Ben',
      description: 'walk through the park / meet / go to the station / carry a guitar / stop to talk',
    },
    cue: '(walk) (meet) (go) (carry) (stop)',
    prompt: 'Sara ___ through the park when she ___ Ben. He ___ to the station and he ___ a guitar. They ___ to talk for a minute.',
    translation: 'Сара шла через парк, когда встретила Бена. Он шёл на станцию и нёс гитару. Они остановились поговорить на минуту.',
    correctAnswer: 'was walking ... met ... was going ... was carrying ... stopped',
    blankAnswers: [
      { correctAnswer: 'was walking' },
      { correctAnswer: 'met' },
      { correctAnswer: 'was going' },
      { correctAnswer: 'was carrying' },
      { correctAnswer: 'stopped' },
    ],
    explanation: 'Use past continuous for the two background actions and past simple for the meeting and the stop.',
  },
];

const exercise2Examples: PracticeExample[] = [
  {
    cue: '(wake up) / (snow)',
    answer: 'What was the weather like when you woke up? It was snowing.',
    note: 'Model item.',
  },
];

const exercise2Questions: PracticeQuestion[] = [
  {
    id: 'u14-ex2-2',
    displayNumber: '2',
    type: 'fill-blank',
    cue: '(work)',
    prompt: 'Was Maya busy when you went to see her? Yes, she ___ on an important report.',
    translation: 'Майя была занята, когда ты пришёл(пришла) к ней? Да, она работала над важным отчётом.',
    correctAnswer: 'was working',
    explanation: 'Use past continuous for the activity that was in progress at that moment.',
  },
  {
    id: 'u14-ex2-3',
    displayNumber: '3',
    type: 'fill-blank',
    cue: '(Oliver / phone) (call) (make)',
    prompt: '___ you this morning? Yes, he ___ while I ___ coffee.',
    translation: 'Оливер звонил тебе сегодня утром? Да, он позвонил, пока я варил(а) кофе.',
    correctAnswer: 'Did Oliver phone ... called ... was making',
    blankAnswers: [
      { correctAnswer: 'Did Oliver phone' },
      { correctAnswer: 'called' },
      { correctAnswer: 'was making' },
    ],
    explanation: 'The phone call happened once, but the coffee-making was in progress.',
  },
  {
    id: 'u14-ex2-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: '(not/go)',
    prompt: 'Was Zoe at class yesterday? No, she ___ . She had a headache.',
    translation: 'Зои была на занятиях вчера? Нет, она не пошла. У неё болела голова.',
    correctAnswer: "didn't go",
    altAnswers: ['did not go'],
    explanation: 'This is a finished event in the past, so use past simple negative.',
  },
  {
    id: 'u14-ex2-5',
    displayNumber: '5',
    type: 'fill-blank',
    cue: '(you/drive) (come on) (not/drive)',
    prompt: 'How fast ___ when the red light ___ on? I ___ very fast.',
    translation: 'Как быстро ты ехал(а), когда загорелся красный свет? Я ехал(а) не очень быстро.',
    correctAnswer: 'were you driving ... came ... wasn\'t driving',
    blankAnswers: [
      { correctAnswer: 'were you driving' },
      { correctAnswer: 'came' },
      { correctAnswer: "wasn't driving", altAnswers: ['was not driving'] },
    ],
    explanation: 'The driving was in progress; the red light coming on was the event.',
  },
  {
    id: 'u14-ex2-6',
    displayNumber: '6',
    type: 'fill-blank',
    cue: '(your team / play) (not/play)',
    prompt: '___ the cup game yesterday? No, the weather was awful, so we ___ .',
    translation: 'Ваша команда играла вчера кубковый матч? Нет, погода была ужасная, поэтому мы не играли.',
    correctAnswer: 'Did your team play ... didn\'t play',
    blankAnswers: [
      { correctAnswer: 'Did your team play' },
      { correctAnswer: "didn't play", altAnswers: ['did not play'] },
    ],
    explanation: 'Both answers describe a finished event, so both use past simple.',
  },
  {
    id: 'u14-ex2-7',
    displayNumber: '7',
    type: 'fill-blank',
    cue: '(you/break) (play) (kick) (hit)',
    prompt: 'How ___ the kitchen window? We ___ football in the garden. I ___ the ball and it ___ the window.',
    translation: 'Как ты разбил(а) кухонное окно? Мы играли в футбол в саду. Я ударил(а) по мячу, и он попал в окно.',
    correctAnswer: 'did you break ... were playing ... kicked ... hit',
    blankAnswers: [
      { correctAnswer: 'did you break' },
      { correctAnswer: 'were playing' },
      { correctAnswer: 'kicked' },
      { correctAnswer: 'hit' },
    ],
    explanation: 'The game was in progress; the kick and the hit were completed events.',
  },
  {
    id: 'u14-ex2-8',
    displayNumber: '8',
    type: 'fill-blank',
    cue: '(you/see) (wear)',
    prompt: '___ Nora last night? Yes, she ___ a bright green coat.',
    translation: 'Ты видел(а) Нору вчера вечером? Да, на ней было ярко-зелёное пальто.',
    correctAnswer: 'Did you see ... was wearing',
    blankAnswers: [
      { correctAnswer: 'Did you see' },
      { correctAnswer: 'was wearing' },
    ],
    explanation: 'Seeing Nora is the event; wearing the coat describes the scene at that time.',
  },
  {
    id: 'u14-ex2-9',
    displayNumber: '9',
    type: 'fill-blank',
    cue: '(you/do)',
    prompt: 'What ___ at three o\'clock this morning?',
    translation: 'Что ты делал(а) сегодня ночью в три часа?',
    correctAnswer: 'were you doing',
    explanation: 'Ask about the activity in progress with were you doing.',
  },
  {
    id: 'u14-ex2-10',
    displayNumber: '10',
    type: 'fill-blank',
    cue: '(lose) (you/get) (climb)',
    prompt: 'I ___ my key card yesterday evening. How ___ into the flat? I ___ in through the kitchen window.',
    translation: 'Вчера вечером я потерял(а) пропуск-ключ. Как ты попал(а) в квартиру? Я залез(ла) через кухонное окно.',
    correctAnswer: 'lost ... did you get ... climbed',
    blankAnswers: [
      { correctAnswer: 'lost' },
      { correctAnswer: 'did you get' },
      { correctAnswer: 'climbed' },
    ],
    explanation: 'All three parts describe finished past events, so use past simple throughout.',
  },
];

const practiceSectionsEn: PracticeSection[] = [
  {
    id: 'u14-ex1',
    title: 'Exercise 1 — Picture stories with past continuous and past simple',
    instructions: 'Use the picture clues to decide what was already happening and what happened next.',
    examples: exercise1Examples,
    questions: exercise1Questions,
  },
  {
    id: 'u14-ex2',
    title: 'Exercise 2 — Choose the correct past form',
    instructions: 'Use the cue verbs in brackets. Choose past continuous for the background action and past simple for the event or finished action.',
    examples: exercise2Examples,
    questions: exercise2Questions,
  },
];

const practiceSectionsRu: PracticeSection[] = [
  {
    id: 'u14-ex1',
    title: 'Упражнение 1 — Сюжеты по картинкам: past continuous и past simple',
    instructions: 'По подсказкам на картинке решите, что уже происходило, а что произошло потом.',
    examples: exercise1Examples,
    questions: exercise1Questions,
  },
  {
    id: 'u14-ex2',
    title: 'Упражнение 2 — Выберите правильную форму прошедшего времени',
    instructions: 'Используйте глаголы из скобок. Past continuous нужен для фонового действия, а past simple — для события или завершённого действия.',
    examples: exercise2Examples,
    questions: exercise2Questions,
  },
];

const unit14: Unit = {
  id: 'unit14',
  number: 14,
  title: {
    en: 'I was doing (past continuous) and I did (past simple)',
    ru: 'I was doing и I did (past continuous и past simple)',
  },
  description: {
    en: 'Use past continuous for background actions in progress and past simple for the event or complete past action.',
    ru: 'Используйте past continuous для действия в процессе, а past simple — для события или завершённого действия в прошлом.',
  },
  steps: [
    {
      id: 'step-1-contrast',
      type: 'theory',
      left: {
        en: {
          title: 'What was happening, and what happened?',
          explanation:
            'Use <b>past continuous</b> for the action that <b>was already in progress</b> at a past moment. ' +
            'Use <b>past simple</b> for the thing that <b>happened</b> or changed the situation.',
          table: {
            headers: ['Question', 'Typical answer'],
            rows: [
              ['What was happening at that moment?', 'was / were + verb-ing'],
              ['What happened?', 'past simple'],
              ['What did the person do next?', 'past simple'],
            ],
          },
          notes: [
            'The longer background action often uses past continuous.',
            'The shorter event that interrupts it often uses past simple.',
          ],
        },
        ru: {
          title: 'Что происходило и что произошло?',
          explanation:
            'Используйте <b>past continuous</b> для действия, которое <b>уже шло</b> в определённый момент прошлого. ' +
            'Используйте <b>past simple</b> для того, что <b>произошло</b> или изменило ситуацию.',
          table: {
            headers: ['Вопрос', 'Типичный ответ'],
            rows: [
              ['Что происходило в тот момент?', 'was / were + глагол-ing'],
              ['Что произошло?', 'past simple'],
              ['Что человек сделал потом?', 'past simple'],
            ],
          },
          notes: [
            'Более длинное фоновое действие часто ставится в past continuous.',
            'Более короткое событие, которое его прерывает, часто стоит в past simple.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — background action and event',
          intro: 'Ask one question about the activity in progress and another about the event itself.',
          items: interruptingExamples,
        },
        ru: {
          title: 'Примеры — фоновое действие и событие',
          intro: 'Один вопрос относится к действию в процессе, а другой — к самому событию.',
          items: interruptingExamples,
        },
      },
    },
    {
      id: 'step-2-comparison',
      type: 'examples',
      left: {
        en: {
          title: 'Complete action or action in progress',
          explanation:
            'Past simple often describes a <b>whole completed action</b>. Past continuous shows what was happening <b>at a particular time inside that action</b>.',
          table: {
            headers: ['Meaning', 'Example'],
            rows: [
              ['whole action', 'We played tennis from ten until twelve.'],
              ['point inside the action', 'At 10.30 we were playing tennis.'],
              ['finished event', 'Luca watched the whole film.'],
              ['scene at one moment', 'At 9.15 he was watching it.'],
            ],
          },
          notes: [
            'Ask What did you do? for the whole event.',
            'Ask What were you doing at ... ? for the middle of an action.',
          ],
        },
        ru: {
          title: 'Завершённое действие или действие в процессе',
          explanation:
            'Past simple часто описывает <b>всё завершённое действие целиком</b>. Past continuous показывает, что происходило <b>в определённый момент внутри этого действия</b>.',
          table: {
            headers: ['Значение', 'Пример'],
            rows: [
              ['действие целиком', 'We played tennis from ten until twelve.'],
              ['точка внутри действия', 'At 10.30 we were playing tennis.'],
              ['завершённое событие', 'Luca watched the whole film.'],
              ['сцена в один момент', 'At 9.15 he was watching it.'],
            ],
          },
          notes: [
            'Вопрос What did you do? относится ко всему событию.',
            'Вопрос What were you doing at ... ? относится к моменту внутри действия.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — finished action versus midpoint',
          intro: 'The same real situation can be described in two ways depending on whether you mean the whole action or one moment inside it.',
          items: comparisonExamples,
        },
        ru: {
          title: 'Примеры — всё действие и момент внутри него',
          intro: 'Одну и ту же ситуацию можно описать по-разному: как всё действие целиком или как один момент внутри него.',
          items: comparisonExamples,
        },
      },
    },
    {
      id: 'step-3-when-while',
      type: 'theory',
      left: {
        en: {
          title: 'Using when and while',
          explanation:
            'When the sentence mixes the two past forms, the action in progress is often in <b>past continuous</b> and the event is in <b>past simple</b>. ' +
            '<b>when</b> often introduces the event, and <b>while</b> often goes with the longer background action.',
          table: {
            headers: ['Pattern', 'Example'],
            rows: [
              ['was / were + -ing when + past simple', 'I was walking home when I saw Clara.'],
              ['while + was / were + -ing, past simple', 'While I was waiting for the bus, I read two emails.'],
              ['past simple for the result', 'The lights went out while we were having dinner.'],
            ],
          },
          notes: [
            'Do not choose the tense by the word alone; choose it by the meaning.',
            'Past continuous shows the background scene, not a completed result.',
          ],
        },
        ru: {
          title: 'Как работают when и while',
          explanation:
            'Когда в предложении сочетаются две прошедшие формы, действие в процессе часто стоит в <b>past continuous</b>, а событие — в <b>past simple</b>. ' +
            '<b>when</b> часто вводит само событие, а <b>while</b> обычно связано с более длинным фоновым действием.',
          table: {
            headers: ['Схема', 'Пример'],
            rows: [
              ['was / were + -ing when + past simple', 'I was walking home when I saw Clara.'],
              ['while + was / were + -ing, past simple', 'While I was waiting for the bus, I read two emails.'],
              ['past simple для результата', 'The lights went out while we were having dinner.'],
            ],
          },
          notes: [
            'Выбирайте форму не по самому слову when или while, а по смыслу.',
            'Past continuous показывает фон ситуации, а не завершённый результат.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — mixed past forms',
          intro: 'These sentences combine the background action and the main event in one line.',
          items: whenWhileExamples,
        },
        ru: {
          title: 'Примеры — смешанные формы прошедшего времени',
          intro: 'В этих предложениях фоновое действие и главное событие соединены в одной фразе.',
          items: whenWhileExamples,
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
            'Keep the exercise types separate: picture stories first, then mixed tense completion. In every answer, decide whether you mean the <b>scene in progress</b> or the <b>event</b>.',
          table: {
            headers: ['Meaning', 'Form', 'Example'],
            rows: [
              ['background action', 'was / were + verb-ing', 'They were waiting outside.'],
              ['event / result', 'past simple', 'The bus arrived.'],
              ['mixed sentence', 'past continuous + when + past simple', 'Sara was walking when she met Ben.'],
            ],
          },
          notes: [
            'Exercise 1 uses picture-led stories with several blanks in one item.',
            'Exercise 2 mixes questions, answers, and negatives, so read the whole sentence before choosing the tense.',
          ],
        },
        ru: {
          title: 'Краткая памятка',
          explanation:
            'Сохраняйте типы заданий отдельно: сначала сюжеты по картинкам, потом смешанные формы. В каждом ответе решайте, что вы называете: <b>сцену в процессе</b> или <b>событие</b>.',
          table: {
            headers: ['Значение', 'Форма', 'Пример'],
            rows: [
              ['фоновое действие', 'was / were + глагол-ing', 'They were waiting outside.'],
              ['событие / результат', 'past simple', 'The bus arrived.'],
              ['смешанное предложение', 'past continuous + when + past simple', 'Sara was walking when she met Ben.'],
            ],
          },
          notes: [
            'В упражнении 1 используются сюжеты по картинкам с несколькими пропусками в одном пункте.',
            'В упражнении 2 есть вопросы, ответы и отрицания, поэтому сначала прочитайте всё предложение целиком.',
          ],
        },
      },
      right: {
        en: {
          title: 'Practice — past continuous and past simple together',
          sections: practiceSectionsEn,
        },
        ru: {
          title: 'Практика — past continuous и past simple вместе',
          sections: practiceSectionsRu,
        },
      },
    },
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Unit 14',
          description: 'Choose the option that matches the past continuous / past simple contrast.',
          questions: [
            {
              id: 'q14-1',
              question: 'Which question asks about the background action?',
              options: [
                'What were they doing when the alarm rang?',
                'What did they do when the alarm rang?',
                'What were they do when the alarm rang?',
              ],
              correctIndex: 0,
              explanation: 'Use were they doing to ask about the action already in progress.',
            },
            {
              id: 'q14-2',
              question: 'Choose the sentence about one moment inside a longer action.',
              options: [
                'At 10.30 we were playing tennis.',
                'We were played tennis.',
                'At 10.30 we played were tennis.',
              ],
              correctIndex: 0,
              explanation: 'At a particular time inside the action, use was / were + -ing.',
            },
            {
              id: 'q14-3',
              question: 'Which pair is correct?',
              options: [
                'The bus arrived and Leo got off.',
                'The bus was arriving and Leo was getting off to meet him.',
                'The bus arrived and Leo was get off.',
              ],
              correctIndex: 0,
              explanation: 'These are finished events, so both verbs are in past simple.',
            },
            {
              id: 'q14-4',
              question: 'Complete the sentence: "Sara ___ through the park when she ___ Ben."',
              options: [
                'was walking / met',
                'walked / was meeting',
                'was walking / was meeting',
              ],
              correctIndex: 0,
              explanation: 'The walking was already in progress; the meeting happened at that point.',
            },
            {
              id: 'q14-5',
              question: 'Which sentence describes a finished past event?',
              options: [
                'I lost my key card last night.',
                'I was losing my key card last night.',
                'I was lose my key card last night.',
              ],
              correctIndex: 0,
              explanation: 'lost is past simple, so it describes the completed event.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Юнит 14',
          description: 'Выберите вариант, который правильно передаёт разницу между past continuous и past simple.',
          questions: [
            {
              id: 'q14-1',
              question: 'Какой вопрос спрашивает о фоновом действии?',
              options: [
                'What were they doing when the alarm rang?',
                'What did they do when the alarm rang?',
                'What were they do when the alarm rang?',
              ],
              correctIndex: 0,
              explanation: 'Форма were they doing спрашивает о действии, которое уже шло в тот момент.',
            },
            {
              id: 'q14-2',
              question: 'Выберите предложение об одном моменте внутри более долгого действия.',
              options: [
                'At 10.30 we were playing tennis.',
                'We were played tennis.',
                'At 10.30 we played were tennis.',
              ],
              correctIndex: 0,
              explanation: 'Для определённого момента внутри действия нужна форма was / were + -ing.',
            },
            {
              id: 'q14-3',
              question: 'Какая пара правильная?',
              options: [
                'The bus arrived and Leo got off.',
                'The bus was arriving and Leo was getting off to meet him.',
                'The bus arrived and Leo was get off.',
              ],
              correctIndex: 0,
              explanation: 'Это завершённые события, поэтому оба глагола стоят в past simple.',
            },
            {
              id: 'q14-4',
              question: 'Дополните предложение: "Sara ___ through the park when she ___ Ben."',
              options: [
                'was walking / met',
                'walked / was meeting',
                'was walking / was meeting',
              ],
              correctIndex: 0,
              explanation: 'Ходьба была фоновым действием, а встреча произошла в определённый момент.',
            },
            {
              id: 'q14-5',
              question: 'Какое предложение описывает завершённое событие в прошлом?',
              options: [
                'I lost my key card last night.',
                'I was losing my key card last night.',
                'I was lose my key card last night.',
              ],
              correctIndex: 0,
              explanation: 'Форма lost стоит в past simple и описывает завершённое событие.',
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
          title: 'Summary — Unit 14',
          points: [
            'Use <b>past continuous</b> for an action that <b>was already in progress</b> at a past moment.',
            'Use <b>past simple</b> for the event that happened or for the whole finished action.',
            'Ask <b>What happened?</b> for the event, and <b>What was ... doing?</b> for the background action.',
            'At a time in the middle of an action, use <b>was / were + -ing</b>.',
            'In mixed sentences, the longer background action is often <b>past continuous</b> and the shorter event is often <b>past simple</b>.',
            '<b>when</b> often introduces the event, while <b>while</b> often goes with the action in progress.',
          ],
        },
        ru: {
          title: 'Итоги — Юнит 14',
          points: [
            'Используйте <b>past continuous</b> для действия, которое <b>уже происходило</b> в определённый момент прошлого.',
            'Используйте <b>past simple</b> для события, которое произошло, или для всего завершённого действия.',
            'Вопрос <b>What happened?</b> относится к событию, а <b>What was ... doing?</b> — к фоновому действию.',
            'Если речь о моменте внутри действия, используйте <b>was / were + -ing</b>.',
            'В смешанных предложениях более длинное фоновое действие часто стоит в <b>past continuous</b>, а короткое событие — в <b>past simple</b>.',
            '<b>when</b> часто вводит событие, а <b>while</b> обычно связано с действием в процессе.',
          ],
        },
      },
    },
  ],
};

export default unit14;
