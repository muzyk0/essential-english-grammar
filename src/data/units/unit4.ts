import type { Unit } from '../../types/unit';

// Unit 4: are you doing? (present continuous questions)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 4)
const unit4: Unit = {
  id: 'unit4',
  number: 4,
  title: {
    en: 'are you doing? (present continuous questions)',
    ru: 'are you doing? (вопросы в настоящем длительном)',
  },
  description: {
    en: 'How to ask present continuous questions, keep the words in the correct order, and use short answers.',
    ru: 'Как задавать вопросы в present continuous, сохранять правильный порядок слов и использовать краткие ответы.',
  },
  steps: [
    // Step 1: Main question form
    {
      id: 'step-4-1-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Questions in the present continuous',
          explanation:
            'To ask about something happening now, put <b>am / is / are before the subject</b>. ' +
            'With a question word, put the question word first and keep <b>am / is / are + subject + verb-ing</b> after it.',
          table: {
            headers: ['Type', 'Pattern', 'Example'],
            rows: [
              ['yes/no question', 'Am/Is/Are + subject + verb-ing?', 'Are they waiting outside?'],
              ['what-question', 'What + am/is/are + subject + verb-ing?', 'What is Nina writing?'],
              ['where-question', 'Where + am/is/are + subject + verb-ing?', 'Where are you hurrying?'],
              ['why-question', 'Why + am/is/are + subject + verb-ing?', 'Why is he smiling?'],
            ],
          },
          notes: [
            'Use am with I, is with he/she/it, and are with we/you/they.',
            'The -ing verb stays after the subject: "Is Leo driving?" not "Is driving Leo?"',
          ],
        },
        ru: {
          title: 'Вопросы в present continuous',
          explanation:
            'Чтобы спросить о действии, которое происходит сейчас, ставим <b>am / is / are перед подлежащим</b>. ' +
            'Если есть вопросительное слово, оно стоит первым, а дальше сохраняется порядок <b>am / is / are + подлежащее + глагол-ing</b>.',
          table: {
            headers: ['Тип', 'Структура', 'Пример'],
            rows: [
              ['вопрос да/нет', 'Am/Is/Are + подлежащее + глагол-ing?', 'Are they waiting outside?'],
              ['вопрос с what', 'What + am/is/are + подлежащее + глагол-ing?', 'What is Nina writing?'],
              ['вопрос с where', 'Where + am/is/are + подлежащее + глагол-ing?', 'Where are you hurrying?'],
              ['вопрос с why', 'Why + am/is/are + подлежащее + глагол-ing?', 'Why is he smiling?'],
            ],
          },
          notes: [
            'С I используем am, с he/she/it - is, с we/you/they - are.',
            'Глагол с -ing остаётся после подлежащего: "Is Leo driving?" а не "Is driving Leo?"',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples - asking about actions in progress',
          intro: 'These questions ask what is happening right now.',
          items: [
            { english: 'Are you using the printer?', russian: 'Ты пользуешься принтером?', highlight: 'Are you using' },
            { english: 'Is your sister studying in her room?', russian: 'Твоя сестра занимается в своей комнате?', highlight: 'Is your sister studying' },
            { english: 'What is Nina writing in her notebook?', russian: 'Что Нина пишет в своей тетради?', highlight: 'What is Nina writing' },
            { english: 'Where are the students going?', russian: 'Куда идут студенты?', highlight: 'Where are the students going' },
            { english: 'Why is Alex carrying two bags?', russian: 'Почему Алекс несёт две сумки?', highlight: 'Why is Alex carrying' },
            { english: 'Who are you waiting for?', russian: 'Кого ты ждёшь?', highlight: 'Who are you waiting for' },
            { english: 'What are your neighbours building in the yard?', russian: 'Что твои соседи строят во дворе?', highlight: 'What are your neighbours building' },
          ],
        },
        ru: {
          title: 'Примеры - вопросы о действиях в процессе',
          intro: 'Эти вопросы помогают спросить, что происходит прямо сейчас.',
          items: [
            { english: 'Are you using the printer?', russian: 'Ты пользуешься принтером?', highlight: 'Are you using' },
            { english: 'Is your sister studying in her room?', russian: 'Твоя сестра занимается в своей комнате?', highlight: 'Is your sister studying' },
            { english: 'What is Nina writing in her notebook?', russian: 'Что Нина пишет в своей тетради?', highlight: 'What is Nina writing' },
            { english: 'Where are the students going?', russian: 'Куда идут студенты?', highlight: 'Where are the students going' },
            { english: 'Why is Alex carrying two bags?', russian: 'Почему Алекс несёт две сумки?', highlight: 'Why is Alex carrying' },
            { english: 'Who are you waiting for?', russian: 'Кого ты ждёшь?', highlight: 'Who are you waiting for' },
            { english: 'What are your neighbours building in the yard?', russian: 'Что твои соседи строят во дворе?', highlight: 'What are your neighbours building' },
          ],
        },
      },
    },

    // Step 2: Word order
    {
      id: 'step-4-2-word-order',
      type: 'examples',
      left: {
        en: {
          title: 'Word order in questions',
          explanation:
            'The order is the same even when the subject is a name or a longer phrase: <b>am / is / are + subject + verb-ing</b>. ' +
            'With a question word, the order becomes <b>question word + am / is / are + subject + verb-ing</b>.',
          table: {
            headers: ['Pattern', 'Example'],
            rows: [
              ['am/is/are + subject + verb-ing', 'Is Daniel working today?'],
              ['question word + am/is/are + subject + verb-ing', 'Where are those people sitting?'],
              ['question word + named subject + verb-ing', 'Why is Laura carrying a suitcase?'],
            ],
          },
          notes: [
            'Do not move the subject after the -ing verb.',
            'Long subjects stay together after am/is/are: "Are your cousins staying with you?"',
          ],
        },
        ru: {
          title: 'Порядок слов в вопросах',
          explanation:
            'Порядок слов сохраняется даже если подлежащее выражено именем или длинной группой слов: <b>am / is / are + подлежащее + глагол-ing</b>. ' +
            'С вопросительным словом получаем схему <b>вопросительное слово + am / is / are + подлежащее + глагол-ing</b>.',
          table: {
            headers: ['Схема', 'Пример'],
            rows: [
              ['am/is/are + подлежащее + глагол-ing', 'Is Daniel working today?'],
              ['вопр. слово + am/is/are + подлежащее + глагол-ing', 'Where are those people sitting?'],
              ['вопр. слово + имя/подлежащее + глагол-ing', 'Why is Laura carrying a suitcase?'],
            ],
          },
          notes: [
            'Не переносите подлежащее после глагола с -ing.',
            'Длинное подлежащее целиком стоит после am/is/are: "Are your cousins staying with you?"',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples - correct word order',
          intro: 'Notice how the auxiliary comes before the subject in every question.',
          items: [
            { english: 'Is Daniel wearing headphones today?', russian: 'Даниэль сегодня в наушниках?', highlight: 'Is Daniel wearing' },
            { english: 'Where are those visitors waiting?', russian: 'Где ждут те посетители?', highlight: 'Where are those visitors waiting' },
            { english: 'Why is your phone making that noise?', russian: 'Почему твой телефон издаёт этот звук?', highlight: 'Why is your phone making' },
            { english: 'Are the children next door playing outside?', russian: 'Дети по соседству играют на улице?', highlight: 'Are the children next door playing' },
            { english: 'What is Emma cooking for dinner?', russian: 'Что Эмма готовит на ужин?', highlight: 'What is Emma cooking' },
            { english: 'Who are you talking to at the door?', russian: 'С кем ты разговариваешь у двери?', highlight: 'Who are you talking to' },
            { english: 'Are your friends from Prague staying nearby?', russian: 'Твои друзья из Праги остановились поблизости?', highlight: 'Are your friends from Prague staying' },
          ],
        },
        ru: {
          title: 'Примеры - правильный порядок слов',
          intro: 'Обратите внимание: во всех вопросах вспомогательный глагол стоит перед подлежащим.',
          items: [
            { english: 'Is Daniel wearing headphones today?', russian: 'Даниэль сегодня в наушниках?', highlight: 'Is Daniel wearing' },
            { english: 'Where are those visitors waiting?', russian: 'Где ждут те посетители?', highlight: 'Where are those visitors waiting' },
            { english: 'Why is your phone making that noise?', russian: 'Почему твой телефон издаёт этот звук?', highlight: 'Why is your phone making' },
            { english: 'Are the children next door playing outside?', russian: 'Дети по соседству играют на улице?', highlight: 'Are the children next door playing' },
            { english: 'What is Emma cooking for dinner?', russian: 'Что Эмма готовит на ужин?', highlight: 'What is Emma cooking' },
            { english: 'Who are you talking to at the door?', russian: 'С кем ты разговариваешь у двери?', highlight: 'Who are you talking to' },
            { english: 'Are your friends from Prague staying nearby?', russian: 'Твои друзья из Праги остановились поблизости?', highlight: 'Are your friends from Prague staying' },
          ],
        },
      },
    },

    // Step 3: Short answers
    {
      id: 'step-4-3-short-answers',
      type: 'theory',
      left: {
        en: {
          title: 'Short answers',
          explanation:
            'In short answers, we use only <b>am / is / are</b>. We do <b>not</b> repeat the main verb. ' +
            'Negative short answers use <b>I\'m not</b>, and with other subjects both <b>isn\'t / \'s not</b> and <b>aren\'t / \'re not</b> are possible.',
          table: {
            headers: ['Question', 'Positive answer', 'Negative answer'],
            rows: [
              ['Are you leaving now?', 'Yes, I am.', "No, I'm not."],
              ['Is he working today?', 'Yes, he is.', "No, he isn't. / No, he's not."],
              ['Are they staying here?', 'Yes, they are.', "No, they aren't. / No, they're not."],
            ],
          },
          notes: [
            'With I, the only short negative form is "I\'m not".',
            'With he/she/it and we/you/they, both negative short forms are common: "he isn\'t" / "he\'s not", "they aren\'t" / "they\'re not".',
            'Short answers sound natural in conversation: "Yes, she is." not "Yes, she is working."',
          ],
        },
        ru: {
          title: 'Краткие ответы',
          explanation:
            'В кратких ответах используем только <b>am / is / are</b>. Основной глагол не повторяем. ' +
            'В отрицательных кратких ответах используем <b>I\'m not</b>, а с другими подлежащими возможны оба варианта: <b>isn\'t / \'s not</b> и <b>aren\'t / \'re not</b>.',
          table: {
            headers: ['Вопрос', 'Положительный ответ', 'Отрицательный ответ'],
            rows: [
              ['Are you leaving now?', 'Yes, I am.', "No, I'm not."],
              ['Is he working today?', 'Yes, he is.', "No, he isn't. / No, he's not."],
              ['Are they staying here?', 'Yes, they are.', "No, they aren't. / No, they're not."],
            ],
          },
          notes: [
            'С I единственная краткая отрицательная форма - "I\'m not".',
            'С he/she/it и we/you/they употребляются оба варианта: "he isn\'t" / "he\'s not", "they aren\'t" / "they\'re not".',
            'Краткие ответы естественнее в разговоре: "Yes, she is." а не "Yes, she is working."',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples - short answers in conversation',
          intro: 'The answer repeats only the auxiliary, not the whole verb phrase.',
          items: [
            { english: 'Are you coming with us? - Yes, I am.', russian: 'Ты идёшь с нами? - Да.', highlight: 'Yes, I am' },
            { english: "Is Karim driving? - No, he isn't.", russian: 'Карим сейчас ведёт машину? - Нет.', highlight: "No, he isn't" },
            { english: "Are the lights working? - No, they're not.", russian: 'Свет работает? - Нет.', highlight: "they're not" },
            { english: 'Is your coat drying by the heater? - Yes, it is.', russian: 'Твоё пальто сохнет у обогревателя? - Да.', highlight: 'Yes, it is' },
            { english: 'Are we leaving now? - Yes, we are.', russian: 'Мы сейчас уходим? - Да.', highlight: 'Yes, we are' },
            { english: "Is the baby sleeping yet? - No, it isn't.", russian: 'Ребёнок уже спит? - Нет.', highlight: "No, it isn't" },
          ],
        },
        ru: {
          title: 'Примеры - краткие ответы в разговоре',
          intro: 'В ответе повторяется только вспомогательный глагол, а не вся форма с -ing.',
          items: [
            { english: 'Are you coming with us? - Yes, I am.', russian: 'Ты идёшь с нами? - Да.', highlight: 'Yes, I am' },
            { english: "Is Karim driving? - No, he isn't.", russian: 'Карим сейчас ведёт машину? - Нет.', highlight: "No, he isn't" },
            { english: "Are the lights working? - No, they're not.", russian: 'Свет работает? - Нет.', highlight: "they're not" },
            { english: 'Is your coat drying by the heater? - Yes, it is.', russian: 'Твоё пальто сохнет у обогревателя? - Да.', highlight: 'Yes, it is' },
            { english: 'Are we leaving now? - Yes, we are.', russian: 'Мы сейчас уходим? - Да.', highlight: 'Yes, we are' },
            { english: "Is the baby sleeping yet? - No, it isn't.", russian: 'Ребёнок уже спит? - Нет.', highlight: "No, it isn't" },
          ],
        },
      },
    },

    // Step 4: Practice
    {
      id: 'step-4-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use these patterns to complete the exercises.',
          table: {
            headers: ['Focus', 'Pattern', 'Example'],
            rows: [
              ['yes/no question', 'Am/Is/Are + subject + -ing?', 'Are they waiting?'],
              ['wh-question', 'Wh-word + am/is/are + subject + -ing?', 'What is she reading?'],
              ['short answer (+)', 'Yes, + subject + am/is/are.', 'Yes, she is.'],
              ['short answer (-)', 'No, + subject + am not / isn\'t / aren\'t / \'s not / \'re not.', "No, they aren't."],
            ],
          },
          notes: [
            'With I, use "I\'m not" in short negative answers.',
            'With he/she/it and we/you/they, both short negative forms are possible: "he isn\'t" / "he\'s not", "they aren\'t" / "they\'re not".',
            'Do not repeat the -ing form in a short answer: say "Yes, she is.", not "Yes, she is working."',
          ],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эти схемы при выполнении упражнений.',
          table: {
            headers: ['Фокус', 'Схема', 'Пример'],
            rows: [
              ['вопрос да/нет', 'Am/Is/Are + подлежащее + -ing?', 'Are they waiting?'],
              ['вопрос с вопр. словом', 'Вопр. слово + am/is/are + подлежащее + -ing?', 'What is she reading?'],
              ['краткий ответ (+)', 'Yes, + подлежащее + am/is/are.', 'Yes, she is.'],
              ['краткий ответ (-)', 'No, + подлежащее + am not / isn\'t / aren\'t / \'s not / \'re not.', "No, they aren't."],
            ],
          },
          notes: [
            'С I в кратком отрицательном ответе используем "I\'m not".',
            'С he/she/it и we/you/they возможны оба кратких отрицательных варианта: "he isn\'t" / "he\'s not", "they aren\'t" / "they\'re not".',
            'В кратком ответе не повторяем форму на -ing: говорим "Yes, she is.", а не "Yes, she is working."',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise A - Fill in the blanks',
          instructions: 'Write the missing word or short answer.',
          questions: [
            {
              id: 'p4-1',
              type: 'fill-blank',
              prompt: '___ your neighbours having a party?',
              translation: 'Твои соседи сейчас устраивают вечеринку?',
              correctAnswer: 'Are',
              explanation: 'Yes/no question with "your neighbours" -> Are your neighbours having ... ?',
            },
            {
              id: 'p4-2',
              type: 'fill-blank',
              prompt: 'Where ___ the students going?',
              translation: 'Куда идут студенты?',
              correctAnswer: 'are',
              explanation: 'Wh-question with "the students" -> Where are the students going?',
            },
            {
              id: 'p4-3',
              type: 'fill-blank',
              prompt: 'Why ___ Mia carrying an umbrella?',
              translation: 'Почему Миа несёт зонт?',
              correctAnswer: 'is',
              explanation: 'Wh-question with "Mia" -> Why is Mia carrying ... ?',
            },
            {
              id: 'p4-4',
              type: 'fill-blank',
              prompt: 'Are the shops closing now? - Yes, they ___.',
              translation: 'Магазины сейчас закрываются? - Да.',
              correctAnswer: 'are',
              explanation: 'Short positive answer with "they" -> Yes, they are.',
            },
            {
              id: 'p4-5',
              type: 'fill-blank',
              prompt: 'Is Daniel working today? - No, he ___.',
              translation: 'Даниэль сегодня работает? - Нет.',
              correctAnswer: "isn't",
              altAnswers: ['is not', "'s not"],
              explanation: 'Short negative answer with "he" -> No, he isn\'t. / No, he\'s not.',
            },
            {
              id: 'p4-6',
              type: 'fill-blank',
              prompt: 'Are your friends staying at a hotel? - No, they ___.',
              translation: 'Твои друзья остановились в отеле? - Нет.',
              correctAnswer: "aren't",
              altAnswers: ['are not', "'re not"],
              explanation: 'Short negative answer with "they" -> No, they aren\'t. / No, they\'re not.',
            },
            {
              id: 'p4-7',
              type: 'fill-blank',
              prompt: 'What ___ your brother looking for?',
              translation: 'Что ищет твой брат?',
              correctAnswer: 'is',
              explanation: 'Wh-question with "your brother" -> What is your brother looking for?',
            },
            {
              id: 'p4-8',
              type: 'fill-blank',
              prompt: 'Are you going now? - No, I ___ . I\'m waiting for Katya.',
              translation: 'Ты сейчас уходишь? - Нет. Я жду Катю.',
              correctAnswer: "'m not",
              altAnswers: ['am not'],
              explanation: 'With "I", the short negative answer is "I\'m not".',
            },
          ],
        },
        ru: {
          title: 'Упражнение A - Вставьте пропущенное слово',
          instructions: 'Напишите пропущенное слово или краткий ответ.',
          questions: [
            {
              id: 'p4-1',
              type: 'fill-blank',
              prompt: '___ your neighbours having a party?',
              translation: 'Твои соседи сейчас устраивают вечеринку?',
              correctAnswer: 'Are',
              explanation: 'Вопрос да/нет с "your neighbours" -> Are your neighbours having ... ?',
            },
            {
              id: 'p4-2',
              type: 'fill-blank',
              prompt: 'Where ___ the students going?',
              translation: 'Куда идут студенты?',
              correctAnswer: 'are',
              explanation: 'Вопрос с вопр. словом и "the students" -> Where are the students going?',
            },
            {
              id: 'p4-3',
              type: 'fill-blank',
              prompt: 'Why ___ Mia carrying an umbrella?',
              translation: 'Почему Миа несёт зонт?',
              correctAnswer: 'is',
              explanation: 'Вопрос с вопр. словом и "Mia" -> Why is Mia carrying ... ?',
            },
            {
              id: 'p4-4',
              type: 'fill-blank',
              prompt: 'Are the shops closing now? - Yes, they ___.',
              translation: 'Магазины сейчас закрываются? - Да.',
              correctAnswer: 'are',
              explanation: 'Краткий положительный ответ с "they" -> Yes, they are.',
            },
            {
              id: 'p4-5',
              type: 'fill-blank',
              prompt: 'Is Daniel working today? - No, he ___.',
              translation: 'Даниэль сегодня работает? - Нет.',
              correctAnswer: "isn't",
              altAnswers: ['is not', "'s not"],
              explanation: 'Краткий отрицательный ответ с "he" -> No, he isn\'t. / No, he\'s not.',
            },
            {
              id: 'p4-6',
              type: 'fill-blank',
              prompt: 'Are your friends staying at a hotel? - No, they ___.',
              translation: 'Твои друзья остановились в отеле? - Нет.',
              correctAnswer: "aren't",
              altAnswers: ['are not', "'re not"],
              explanation: 'Краткий отрицательный ответ с "they" -> No, they aren\'t. / No, they\'re not.',
            },
            {
              id: 'p4-7',
              type: 'fill-blank',
              prompt: 'What ___ your brother looking for?',
              translation: 'Что ищет твой брат?',
              correctAnswer: 'is',
              explanation: 'Вопрос с вопр. словом и "your brother" -> What is your brother looking for?',
            },
            {
              id: 'p4-8',
              type: 'fill-blank',
              prompt: 'Are you going now? - No, I ___ . I\'m waiting for Katya.',
              translation: 'Ты сейчас уходишь? - Нет. Я жду Катю.',
              correctAnswer: "'m not",
              altAnswers: ['am not'],
              explanation: 'С "I" в кратком отрицательном ответе используем "I\'m not".',
            },
          ],
        },
      },
    },

    // Step 5: Quiz
    {
      id: 'step-4-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz - present continuous questions',
          description: 'Choose the correct question form or short answer.',
          questions: [
            {
              id: 'q4-1',
              question: 'Which is the correct question?',
              options: [
                'Why Anna is wearing a scarf?',
                'Why is Anna wearing a scarf?',
                'Why wearing Anna a scarf?',
              ],
              correctIndex: 1,
              explanation: 'Question word + is + subject + verb-ing -> "Why is Anna wearing a scarf?"',
            },
            {
              id: 'q4-2',
              question: 'Complete: "___ you waiting for the manager?"',
              options: ['Is', 'Are', 'Am'],
              correctIndex: 1,
              explanation: 'With "you", use "are" -> Are you waiting ... ?',
            },
            {
              id: 'q4-3',
              question: 'Best short answer to "Are the children sleeping?"',
              options: ['Yes, they sleep.', 'Yes, they are.', 'Yes, they do.'],
              correctIndex: 1,
              explanation: 'Short answers repeat only the auxiliary -> "Yes, they are."',
            },
            {
              id: 'q4-4',
              question: 'Negative short answer to "Is Omar working today?"',
              options: ["No, he isn't.", 'No, he not.', "No, he doesn't."],
              correctIndex: 0,
              explanation: 'For a short negative answer with "he", use "isn\'t". "He\'s not" is also correct.',
            },
            {
              id: 'q4-5',
              question: 'Which question has the correct word order?',
              options: [
                'Where are those guests sitting?',
                'Where are sitting those guests?',
                'Where those guests are sitting?',
              ],
              correctIndex: 0,
              explanation: 'With a longer subject, keep the normal order: question word + are + subject + verb-ing.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз - вопросы в present continuous',
          description: 'Выберите правильную форму вопроса или краткого ответа.',
          questions: [
            {
              id: 'q4-1',
              question: 'Какой вопрос построен правильно?',
              options: [
                'Why Anna is wearing a scarf?',
                'Why is Anna wearing a scarf?',
                'Why wearing Anna a scarf?',
              ],
              correctIndex: 1,
              explanation: 'Схема: вопросительное слово + is + подлежащее + глагол-ing -> "Why is Anna wearing a scarf?"',
            },
            {
              id: 'q4-2',
              question: 'Дополните: "___ you waiting for the manager?"',
              options: ['Is', 'Are', 'Am'],
              correctIndex: 1,
              explanation: 'С "you" используем "are" -> Are you waiting ... ?',
            },
            {
              id: 'q4-3',
              question: 'Лучший краткий ответ на "Are the children sleeping?"',
              options: ['Yes, they sleep.', 'Yes, they are.', 'Yes, they do.'],
              correctIndex: 1,
              explanation: 'В кратком ответе повторяем только вспомогательный глагол -> "Yes, they are."',
            },
            {
              id: 'q4-4',
              question: 'Краткий отрицательный ответ на "Is Omar working today?"',
              options: ["No, he isn't.", 'No, he not.', "No, he doesn't."],
              correctIndex: 0,
              explanation: 'Для краткого отрицательного ответа с "he" используем "isn\'t". Вариант "he\'s not" тоже правильный.',
            },
            {
              id: 'q4-5',
              question: 'В каком вопросе порядок слов правильный?',
              options: [
                'Where are those guests sitting?',
                'Where are sitting those guests?',
                'Where those guests are sitting?',
              ],
              correctIndex: 0,
              explanation: 'С длинным подлежащим сохраняем обычный порядок: вопросительное слово + are + подлежащее + глагол-ing.',
            },
          ],
        },
      },
    },

    // Step 6: Summary
    {
      id: 'step-4-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary - present continuous questions',
          points: [
            'To make a present continuous question, put <b>am / is / are before the subject</b>.',
            'With a question word, keep the same order after it: <b>What / Where / Why + am/is/are + subject + -ing?</b>',
            'With names and longer subjects, the auxiliary still comes first: "Is Daniel working?"',
            'Short answers use only <b>am / is / are</b>: "Yes, she <b>is</b>." / "No, they <b>aren\'t</b>." / "No, they<b>\'re</b> not."',
            'Do not repeat the -ing verb in a short answer: say "Yes, she is.", not "Yes, she is working."',
            'Keep the same order with longer subjects too: "Where are those guests sitting?"',
          ],
          nextUnit: 'Unit 5 - I do/work/like (present simple)',
        },
        ru: {
          title: 'Итоги - вопросы в present continuous',
          points: [
            'Чтобы задать вопрос в present continuous, ставим <b>am / is / are перед подлежащим</b>.',
            'С вопросительным словом сохраняем тот же порядок: <b>What / Where / Why + am/is/are + подлежащее + -ing?</b>',
            'С именами и длинными подлежащими вспомогательный глагол всё равно стоит первым: "Is Daniel working?"',
            'В кратких ответах используем только <b>am / is / are</b>: "Yes, she <b>is</b>." / "No, they <b>aren\'t</b>." / "No, they<b>\'re</b> not."',
            'В кратком ответе не повторяем глагол с -ing: говорим "Yes, she is.", а не "Yes, she is working."',
            'Тот же порядок сохраняется и с длинными подлежащими: "Where are those guests sitting?"',
          ],
          nextUnit: 'Юнит 5 - I do/work/like (present simple)',
        },
      },
    },
  ],
};

export default unit4;
