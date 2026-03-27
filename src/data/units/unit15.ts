import type {
  ExampleItem,
  PracticeExample,
  PracticeQuestion,
  PracticeSection,
  Unit,
} from '../../types/unit';

const resultExamples: ExampleItem[] = [
  {
    english: 'Noah has switched off the lights, so the room is dark now.',
    russian: 'Ноа выключил свет, поэтому сейчас в комнате темно.',
    highlight: 'has switched off',
  },
  {
    english: 'I have dropped my phone, and the screen is cracked now.',
    russian: 'Я уронил(а) телефон, и теперь экран треснул.',
    highlight: 'have dropped',
  },
  {
    english: 'Mira has gone upstairs, so she is not in the kitchen now.',
    russian: 'Мира поднялась наверх, поэтому её сейчас нет на кухне.',
    highlight: 'has gone',
  },
  {
    english: 'We have ordered the tickets, so our seats are ready now.',
    russian: 'Мы заказали билеты, поэтому наши места уже оформлены.',
    highlight: 'have ordered',
  },
  {
    english: 'Leo has left his bag in the car, so he does not have it with him now.',
    russian: 'Лео оставил сумку в машине, поэтому сейчас она не с ним.',
    highlight: 'has left',
  },
  {
    english: 'Have you packed your charger? We need to leave now.',
    russian: 'Ты уже положил(а) зарядку? Нам нужно выходить сейчас.',
    highlight: 'Have you packed',
  },
];

const formExamples: ExampleItem[] = [
  {
    english: "I've washed the cups.",
    russian: 'Я вымыл(а) чашки.',
    highlight: "I've washed",
  },
  {
    english: "We've started the meeting.",
    russian: 'Мы начали встречу.',
    highlight: "We've started",
  },
  {
    english: "She's broken her glasses.",
    russian: 'Она сломала очки.',
    highlight: "She's broken",
  },
  {
    english: "They've gone home.",
    russian: 'Они ушли домой.',
    highlight: "They've gone",
  },
  {
    english: 'Have you seen my notebook?',
    russian: 'Ты видел(а) мою тетрадь?',
    highlight: 'Have you seen',
  },
  {
    english: "He hasn't written the email.",
    russian: 'Он не написал письмо.',
    highlight: "hasn't written",
  },
];

const meaningExamples: ExampleItem[] = [
  {
    english: "I've forgotten the code, so I can't open the door now.",
    russian: 'Я забыл(а) код, поэтому сейчас не могу открыть дверь.',
    highlight: "I've forgotten",
  },
  {
    english: 'Sofia has invited the neighbours, so we are expecting guests tonight.',
    russian: 'София пригласила соседей, поэтому сегодня вечером мы ждём гостей.',
    highlight: 'has invited',
  },
  {
    english: 'The printer has stopped, so we need a technician now.',
    russian: 'Принтер остановился, поэтому нам сейчас нужен техник.',
    highlight: 'has stopped',
  },
  {
    english: 'Has Tom gone to the bank? I need him in the office now.',
    russian: 'Том ушёл в банк? Он нужен мне сейчас в офисе.',
    highlight: 'Has Tom gone',
  },
  {
    english: "We haven't found the tickets, so we are still searching the hall.",
    russian: 'Мы не нашли билеты, поэтому всё ещё ищем их в холле.',
    highlight: "haven't found",
  },
  {
    english: 'I have finished the report, so you can read it now.',
    russian: 'Я закончил(а) отчёт, поэтому ты можешь прочитать его сейчас.',
    highlight: 'have finished',
  },
];

const exercise1Examples: PracticeExample[] = [
  {
    cue: 'Model',
    answer: 'He has taken off his coat.',
    note: 'Describe the finished action that explains the picture now.',
  },
];

const exercise1Questions: PracticeQuestion[] = [
  {
    id: 'u15-ex1-2',
    displayNumber: '2',
    type: 'fill-blank',
    visual: {
      emoji: '🪟',
      title: 'Ava',
      description: 'open window before -> closed window now',
    },
    prompt: 'She ___ .',
    translation: 'Она закрыла окно.',
    correctAnswer: 'has closed the window',
    altAnswers: ["'s closed the window"],
    explanation: 'Use present perfect because the action is finished and the result is visible now.',
  },
  {
    id: 'u15-ex1-3',
    displayNumber: '3',
    type: 'fill-blank',
    visual: {
      emoji: '🪜',
      title: 'Mia and Ben',
      description: 'downstairs before -> upstairs now',
    },
    prompt: 'They ___ .',
    translation: 'Они поднялись наверх.',
    correctAnswer: 'have gone upstairs',
    altAnswers: ["'ve gone upstairs"],
    explanation: 'Use have gone because the important fact is where they are now.',
  },
  {
    id: 'u15-ex1-4',
    displayNumber: '4',
    type: 'fill-blank',
    visual: {
      emoji: '🖼️',
      title: 'The picture',
      description: 'on the wall before -> on the floor now',
    },
    prompt: 'The picture ___ .',
    translation: 'Картина упала.',
    correctAnswer: 'has fallen down',
    altAnswers: ["'s fallen down"],
    explanation: 'The fall happened earlier, but the result on the floor matters now.',
  },
  {
    id: 'u15-ex1-5',
    displayNumber: '5',
    type: 'fill-blank',
    visual: {
      emoji: '🧃',
      title: 'Ethan',
      description: 'full glass before -> juice on his shirt now',
    },
    prompt: 'He ___ .',
    translation: 'Он пролил сок.',
    correctAnswer: 'has spilled the juice',
    altAnswers: ["'s spilled the juice"],
    explanation: 'The shirt is dirty now, so present perfect fits the result.',
  },
  {
    id: 'u15-ex1-6',
    displayNumber: '6',
    type: 'fill-blank',
    visual: {
      emoji: '💡',
      title: 'The lights',
      description: 'on before -> off now',
    },
    prompt: 'The lights ___ .',
    translation: 'Свет погас.',
    correctAnswer: 'have gone out',
    altAnswers: ["'ve gone out"],
    explanation: 'Use have gone out because the room is dark now.',
  },
];

const exercise2Examples: PracticeExample[] = [
  {
    cue: 'Model',
    answer: "I've lost my travel card. I can't use the metro now.",
    note: 'The loss happened before now, but the problem is current.',
  },
];

const exercise2Questions: PracticeQuestion[] = [
  {
    id: 'u15-ex2-2',
    displayNumber: '2',
    type: 'fill-blank',
    prompt: 'I ___ a new desk lamp. Do you want to see it?',
    translation: 'Я купил(а) новую настольную лампу. Хочешь посмотреть?',
    correctAnswer: "'ve bought",
    altAnswers: ['have bought'],
    explanation: 'The buying is finished, and the lamp is here now.',
  },
  {
    id: 'u15-ex2-3',
    displayNumber: '3',
    type: 'fill-blank',
    prompt: "\"Where's Ella?\" \"She isn't here. She ___ out.\"",
    translation: '"Где Элла?" "Её здесь нет. Она ушла."',
    correctAnswer: "'s gone",
    altAnswers: ['has gone'],
    explanation: 'Use present perfect because the important point is that she is away now.',
  },
  {
    id: 'u15-ex2-4',
    displayNumber: '4',
    type: 'fill-blank',
    prompt: "I'm looking for Daniel. ___ you ___ him?",
    translation: 'Я ищу Дэниела. Ты его видел(а)?',
    correctAnswer: 'Have ... seen',
    blankAnswers: [
      { correctAnswer: 'Have' },
      { correctAnswer: 'seen' },
    ],
    explanation: 'Ask about the present situation with Have you seen ... ?',
  },
  {
    id: 'u15-ex2-5',
    displayNumber: '5',
    type: 'fill-blank',
    prompt: 'Look! Somebody ___ that chair.',
    translation: 'Смотри! Кто-то сломал этот стул.',
    correctAnswer: 'has broken',
    altAnswers: ["'s broken"],
    explanation: 'The chair is broken now, so present perfect is natural.',
  },
  {
    id: 'u15-ex2-6',
    displayNumber: '6',
    type: 'fill-blank',
    prompt: "\"Does Emma know the new address?\" \"Yes, I ___ her an email.\"",
    translation: '"Эмма знает новый адрес?" "Да, я отправил(а) ей письмо."',
    correctAnswer: "'ve sent",
    altAnswers: ['have sent'],
    explanation: 'The email has been sent, and that matters now.',
  },
  {
    id: 'u15-ex2-7',
    displayNumber: '7',
    type: 'fill-blank',
    prompt: "\"I can't find my notebook.\" \"Somebody ___ it.\"",
    translation: '"Я не могу найти свою тетрадь." "Кто-то её взял."',
    correctAnswer: 'has taken',
    altAnswers: ["'s taken"],
    explanation: 'The notebook is missing now, so use present perfect.',
  },
  {
    id: 'u15-ex2-8',
    displayNumber: '8',
    type: 'fill-blank',
    prompt: "\"Where are my keys?\" \"I don't know. I ___ them.\"",
    translation: '"Где мои ключи?" "Не знаю. Я их не нашёл(не нашла)."',
    correctAnswer: "haven't found",
    altAnswers: ['have not found'],
    explanation: 'Use the negative present perfect because the keys are still missing now.',
  },
  {
    id: 'u15-ex2-9',
    displayNumber: '9',
    type: 'fill-blank',
    prompt: "I'm looking for the manager. Where ___ he ___ ?",
    translation: 'Я ищу менеджера. Куда он ушёл?',
    correctAnswer: 'has ... gone',
    blankAnswers: [
      { correctAnswer: 'has' },
      { correctAnswer: 'gone' },
    ],
    explanation: 'Where has he gone? asks about a present result: he is not here now.',
  },
  {
    id: 'u15-ex2-10',
    displayNumber: '10',
    type: 'fill-blank',
    prompt: 'I know that actor, but I ___ his name.',
    translation: 'Я знаю этого актёра, но забыл(а) его имя.',
    correctAnswer: "'ve forgotten",
    altAnswers: ['have forgotten'],
    explanation: 'The forgetting matters now because the name is missing now.',
  },
  {
    id: 'u15-ex2-11',
    displayNumber: '11',
    type: 'fill-blank',
    prompt: "We're having people over tonight. We ___ the neighbours.",
    translation: 'Сегодня вечером к нам придут гости. Мы пригласили соседей.',
    correctAnswer: "'ve invited",
    altAnswers: ['have invited'],
    explanation: 'The invitation is finished, and the situation now is that guests are expected.',
  },
  {
    id: 'u15-ex2-12',
    displayNumber: '12',
    type: 'fill-blank',
    prompt: 'What are you going to do about the job? ___ you ___ ?',
    translation: 'Что ты собираешься делать с работой? Ты уже решил(а)?',
    correctAnswer: 'Have ... decided',
    blankAnswers: [
      { correctAnswer: 'Have' },
      { correctAnswer: 'decided' },
    ],
    explanation: 'Use Have you decided? when the decision is relevant now.',
  },
  {
    id: 'u15-ex2-13',
    displayNumber: '13',
    type: 'fill-blank',
    prompt: "A: Does Ben know about the room change? B: I don't think so. I ___ him.",
    translation: 'A: Бен знает о смене комнаты? B: Думаю, нет. Я ему не сказал(а).',
    correctAnswer: "haven't told",
    altAnswers: ['have not told'],
    explanation: 'Ben still does not know now, so use the negative present perfect.',
  },
  {
    id: 'u15-ex2-14',
    displayNumber: '14',
    type: 'fill-blank',
    prompt: 'I ___ with this crossword. Do you want the newspaper now?',
    translation: 'Я закончил(а) этот кроссворд. Хочешь теперь газету?',
    correctAnswer: "'ve finished",
    altAnswers: ['have finished'],
    explanation: 'The crossword is complete now, so the newspaper is free.',
  },
];

const practiceSectionsEn: PracticeSection[] = [
  {
    id: 'u15-ex1',
    title: 'Exercise 1 — Picture results you can see now',
    instructions: 'Choose one phrase from the word box and describe the finished action that explains each picture now.',
    wordBank: ['take off his coat', 'close the window', 'go upstairs', 'fall down', 'spill the juice', 'go out'],
    examples: exercise1Examples,
    questions: exercise1Questions,
  },
  {
    id: 'u15-ex2',
    title: 'Exercise 2 — Complete the sentences with the word box',
    instructions: 'Use each verb from the word box once. The model already uses lose.',
    wordBank: ['break', 'buy', 'decide', 'finish', 'forget', 'go', 'go', 'invite', 'lose', 'not/find', 'see', 'send', 'take', 'not/tell'],
    examples: exercise2Examples,
    questions: exercise2Questions,
  },
];

const practiceSectionsRu: PracticeSection[] = [
  {
    id: 'u15-ex1',
    title: 'Упражнение 1 — Картинки с результатом, который виден сейчас',
    instructions: 'Выберите одно сочетание из word bank и опишите завершённое действие, которое объясняет картинку сейчас.',
    wordBank: ['take off his coat', 'close the window', 'go upstairs', 'fall down', 'spill the juice', 'go out'],
    examples: exercise1Examples,
    questions: exercise1Questions,
  },
  {
    id: 'u15-ex2',
    title: 'Упражнение 2 — Дополните предложения по word bank',
    instructions: 'Используйте каждый глагол из word bank один раз. lose уже использован в образце.',
    wordBank: ['break', 'buy', 'decide', 'finish', 'forget', 'go', 'go', 'invite', 'lose', 'not/find', 'see', 'send', 'take', 'not/tell'],
    examples: exercise2Examples,
    questions: exercise2Questions,
  },
];

const unit15: Unit = {
  id: 'unit15',
  number: 15,
  title: {
    en: 'I have done (present perfect 1)',
    ru: 'I have done (present perfect 1)',
  },
  description: {
    en: 'Use the present perfect for a past action when the result matters now.',
    ru: 'Используйте present perfect для действия в прошлом, если его результат важен сейчас.',
  },
  steps: [
    {
      id: 'step-1-result-now',
      type: 'theory',
      left: {
        en: {
          title: 'Past action, present result',
          explanation:
            'Use the <b>present perfect</b> when something happened before now and the <b>result is important now</b>. ' +
            'We are not only talking about the past action. We are explaining the present situation.',
          table: {
            headers: ['Focus', 'Example'],
            rows: [
              ['what has changed now', 'Noah has switched off the lights.'],
              ['what is true now', 'The room is dark now.'],
              ['why we use present perfect', 'The earlier action explains the situation now.'],
            ],
          },
          notes: [
            'Think: what is different now because of the earlier action?',
            'The action is finished, but its result is still visible or relevant.',
          ],
        },
        ru: {
          title: 'Действие в прошлом, результат сейчас',
          explanation:
            'Используйте <b>present perfect</b>, когда что-то произошло до настоящего момента, а <b>результат важен сейчас</b>. ' +
            'Мы говорим не только о самом прошлом действии, а объясняем текущую ситуацию.',
          table: {
            headers: ['Фокус', 'Пример'],
            rows: [
              ['что изменилось сейчас', 'Noah has switched off the lights.'],
              ['что верно сейчас', 'The room is dark now.'],
              ['почему нужен present perfect', 'Предыдущее действие объясняет ситуацию сейчас.'],
            ],
          },
          notes: [
            'Спросите себя: что изменилось сейчас из-за более раннего действия?',
            'Действие уже завершено, но его результат всё ещё виден или важен.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — the situation now',
          intro: 'Each sentence links an earlier action to a present result.',
          items: resultExamples,
        },
        ru: {
          title: 'Примеры — ситуация сейчас',
          intro: 'Каждое предложение связывает более раннее действие с нынешним результатом.',
          items: resultExamples,
        },
      },
    },
    {
      id: 'step-2-form',
      type: 'examples',
      left: {
        en: {
          title: 'Form: have/has + past participle',
          explanation:
            'The present perfect uses <b>have</b> or <b>has</b> plus the <b>past participle</b>. ' +
            'Regular verbs usually end in <b>-ed</b>, but many irregular verbs have special participles such as <em>gone</em>, <em>seen</em>, and <em>broken</em>.',
          table: {
            headers: ['Pattern', 'Example'],
            rows: [
              ['I / you / we / they + have', "They've packed the bags."],
              ['he / she / it + has', "She's broken her glasses."],
              ['negative', "He hasn't written the email."],
              ['question', 'Have you seen my notebook?'],
              ['regular participle', 'wash -> washed, start -> started'],
              ['irregular participle', 'go -> gone, break -> broken, see -> seen'],
            ],
          },
          notes: [
            'Short forms are common: I\'ve, she\'s, we\'ve, hasn\'t.',
            'Do not use the past simple form after have/has. Say has gone, not has went.',
          ],
        },
        ru: {
          title: 'Форма: have/has + past participle',
          explanation:
            'Present perfect строится с помощью <b>have</b> или <b>has</b> и формы <b>past participle</b>. ' +
            'У правильных глаголов это обычно форма на <b>-ed</b>, а у многих неправильных есть особые формы: <em>gone</em>, <em>seen</em>, <em>broken</em>.',
          table: {
            headers: ['Схема', 'Пример'],
            rows: [
              ['I / you / we / they + have', "They've packed the bags."],
              ['he / she / it + has', "She's broken her glasses."],
              ['отрицание', "He hasn't written the email."],
              ['вопрос', 'Have you seen my notebook?'],
              ['правильный participle', 'wash -> washed, start -> started'],
              ['неправильный participle', 'go -> gone, break -> broken, see -> seen'],
            ],
          },
          notes: [
            'Краткие формы встречаются очень часто: I\'ve, she\'s, we\'ve, hasn\'t.',
            'После have/has нельзя ставить past simple. Нужно has gone, а не has went.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — forms and participles',
          intro: 'Notice the auxiliary and the participle in each sentence.',
          items: formExamples,
        },
        ru: {
          title: 'Примеры — формы и participle',
          intro: 'Обратите внимание на вспомогательный глагол и participle в каждом примере.',
          items: formExamples,
        },
      },
    },
    {
      id: 'step-3-meaning',
      type: 'theory',
      left: {
        en: {
          title: 'Why present perfect here?',
          explanation:
            'We choose the present perfect when the <b>present situation</b> is the main point. ' +
            'The action happened earlier, but we mention it because it explains a problem, a change, or a question <b>now</b>.',
          table: {
            headers: ['Situation now', 'Present perfect sentence'],
            rows: [
              ["I can't open the door.", "I've forgotten the code."],
              ['Ben is not in his office.', 'He has gone out.'],
              ['You need the report now.', 'Have you finished it?'],
            ],
          },
          notes: [
            'In this unit, the present result matters more than the exact past time.',
            'Questions like Have you seen ... ? ask about the situation now, not about one finished time in the past.',
          ],
        },
        ru: {
          title: 'Почему здесь нужен present perfect?',
          explanation:
            'Мы выбираем present perfect, когда главный смысл связан с <b>нынешней ситуацией</b>. ' +
            'Действие произошло раньше, но мы упоминаем его, потому что оно объясняет проблему, изменение или вопрос <b>сейчас</b>.',
          table: {
            headers: ['Ситуация сейчас', 'Предложение с present perfect'],
            rows: [
              ['Я не могу открыть дверь.', 'I\'ve forgotten the code.'],
              ['Бена нет в кабинете.', 'He has gone out.'],
              ['Тебе нужен отчёт сейчас.', 'Have you finished it?'],
            ],
          },
          notes: [
            'В этом юните важнее нынешний результат, а не точный момент в прошлом.',
            'Вопросы типа Have you seen ... ? спрашивают о ситуации сейчас, а не об одном завершённом времени в прошлом.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — result now in context',
          intro: 'The present situation is the reason for using the tense.',
          items: meaningExamples,
        },
        ru: {
          title: 'Примеры — результат сейчас в контексте',
          intro: 'Именно нынешняя ситуация объясняет выбор времени.',
          items: meaningExamples,
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
            'Keep the two exercise types separate. Exercise 1 asks you to look at a picture result <b>now</b>. ' +
            'Exercise 2 mixes positive, negative, and question forms built from the word box.',
          table: {
            headers: ['Meaning', 'Form', 'Example'],
            rows: [
              ['finished action with result now', 'have / has + past participle', 'She has closed the window.'],
              ['negative result now', "haven't / hasn't + past participle", "I haven't found my keys."],
              ['question about the situation now', 'Have / Has + subject + past participle?', 'Have you seen Daniel?'],
            ],
          },
          notes: [
            'Accept both contracted and full forms when the auxiliary is part of the blank.',
            'For multi-blank questions, check each part separately: Have + seen, has + gone, Have + decided.',
          ],
        },
        ru: {
          title: 'Краткая памятка',
          explanation:
            'Сохраняйте два типа упражнений отдельно. В упражнении 1 нужно посмотреть на результат на картинке <b>сейчас</b>. ' +
            'В упражнении 2 смешаны утвердительные, отрицательные и вопросительные формы из word bank.',
          table: {
            headers: ['Значение', 'Форма', 'Пример'],
            rows: [
              ['завершённое действие с результатом сейчас', 'have / has + past participle', 'She has closed the window.'],
              ['отрицательный результат сейчас', "haven't / hasn't + past participle", "I haven't found my keys."],
              ['вопрос о ситуации сейчас', 'Have / Has + subject + past participle?', 'Have you seen Daniel?'],
            ],
          },
          notes: [
            'Если вспомогательный глагол входит в пропуск, принимайте и краткую, и полную форму.',
            'В заданиях с несколькими пропусками проверяйте каждую часть отдельно: Have + seen, has + gone, Have + decided.',
          ],
        },
      },
      right: {
        en: {
          title: 'Practice — present perfect with a result now',
          sections: practiceSectionsEn,
        },
        ru: {
          title: 'Практика — present perfect с результатом сейчас',
          sections: practiceSectionsRu,
        },
      },
    },
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Unit 15',
          description: 'Check the form and the result-now meaning of the present perfect.',
          questions: [
            {
              id: 'q15-1',
              question: 'Which sentence best explains a present situation?',
              options: [
                "I've lost my travel card, so I can't use the metro.",
                'I lost my travel card yesterday at 8.15.',
                'I have lose my travel card now.',
              ],
              correctIndex: 0,
              explanation: 'The present perfect links the earlier loss to the problem now.',
            },
            {
              id: 'q15-2',
              question: 'Choose the correct form.',
              options: [
                'She has gone out.',
                'She has went out.',
                'She is gone out.',
              ],
              correctIndex: 0,
              explanation: 'After has, use the past participle gone.',
            },
            {
              id: 'q15-3',
              question: 'Which question is correct?',
              options: [
                'Have you seen Daniel?',
                'Did you have seen Daniel?',
                'Has you seen Daniel?',
              ],
              correctIndex: 0,
              explanation: 'Questions use Have + subject + past participle.',
            },
            {
              id: 'q15-4',
              question: 'Which participle is correct for break?',
              options: ['broken', 'broke', 'breaked'],
              correctIndex: 0,
              explanation: 'break is irregular: break -> broke -> broken.',
            },
            {
              id: 'q15-5',
              question: 'Complete the sentence: "I ___ with this crossword. Do you want the newspaper?"',
              options: [
                "'ve finished",
                'finished',
                'have finish',
              ],
              correctIndex: 0,
              explanation: 'Use the present perfect because the finished crossword matters now.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Юнит 15',
          description: 'Проверьте форму и значение present perfect, когда важен результат сейчас.',
          questions: [
            {
              id: 'q15-1',
              question: 'Какое предложение лучше всего объясняет нынешнюю ситуацию?',
              options: [
                "I've lost my travel card, so I can't use the metro.",
                'I lost my travel card yesterday at 8.15.',
                'I have lose my travel card now.',
              ],
              correctIndex: 0,
              explanation: 'Present perfect связывает более раннюю потерю с проблемой сейчас.',
            },
            {
              id: 'q15-2',
              question: 'Выберите правильную форму.',
              options: [
                'She has gone out.',
                'She has went out.',
                'She is gone out.',
              ],
              correctIndex: 0,
              explanation: 'После has нужна форма past participle: gone.',
            },
            {
              id: 'q15-3',
              question: 'Какой вопрос правильный?',
              options: [
                'Have you seen Daniel?',
                'Did you have seen Daniel?',
                'Has you seen Daniel?',
              ],
              correctIndex: 0,
              explanation: 'Вопрос строится по схеме Have + subject + past participle.',
            },
            {
              id: 'q15-4',
              question: 'Какой participle правильный у глагола break?',
              options: ['broken', 'broke', 'breaked'],
              correctIndex: 0,
              explanation: 'break — неправильный глагол: break -> broke -> broken.',
            },
            {
              id: 'q15-5',
              question: 'Дополните предложение: "I ___ with this crossword. Do you want the newspaper?"',
              options: [
                "'ve finished",
                'finished',
                'have finish',
              ],
              correctIndex: 0,
              explanation: 'Нужен present perfect, потому что кроссворд уже закончен и это важно сейчас.',
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
          title: 'Summary — Unit 15',
          points: [
            'Use <b>present perfect</b> for a finished action when the <b>result matters now</b>.',
            'Build the tense with <b>have / has + past participle</b>.',
            'Regular participles usually end in <b>-ed</b>, but many common verbs are irregular: <b>gone</b>, <b>seen</b>, <b>broken</b>.',
            'Use <b>have</b> with I / you / we / they and <b>has</b> with he / she / it.',
            'Questions use <b>Have / Has + subject + past participle?</b>',
            'Negative forms use <b>haven\'t</b> or <b>hasn\'t</b> when the result is still negative now.',
          ],
        },
        ru: {
          title: 'Итоги — Юнит 15',
          points: [
            'Используйте <b>present perfect</b> для завершённого действия, если <b>результат важен сейчас</b>.',
            'Это время строится по схеме <b>have / has + past participle</b>.',
            'У правильных глаголов participle обычно заканчивается на <b>-ed</b>, но у многих частотных глаголов формы неправильные: <b>gone</b>, <b>seen</b>, <b>broken</b>.',
            'С I / you / we / they используйте <b>have</b>, а с he / she / it — <b>has</b>.',
            'Вопросы строятся по схеме <b>Have / Has + subject + past participle?</b>',
            'Отрицательные формы используют <b>haven\'t</b> или <b>hasn\'t</b>, когда отрицательный результат всё ещё сохраняется сейчас.',
          ],
        },
      },
    },
  ],
};

export default unit15;
