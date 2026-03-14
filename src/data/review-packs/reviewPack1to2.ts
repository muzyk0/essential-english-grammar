/* eslint-disable no-useless-escape */
import type { ReviewPack } from '../../types/unit';

const reviewPack1to2: ReviewPack = {
  id: 'review-pack-1-2',
  title: {
    en: 'Core Check - be: statements and questions',
    ru: 'Повторение - be: утверждения и вопросы',
  },
  description: {
    en: 'A mixed review for Units 1-2: am / is / are, negatives, yes/no questions, and short answers.',
    ru: 'Смешанное повторение по юнитам 1-2: am / is / are, отрицания, вопросы да/нет и краткие ответы.',
  },
  coverageLabel: {
    en: 'Units 1-2',
    ru: 'Юниты 1-2',
  },
  coversUnits: [1, 2],
  steps: [
    {
      id: 'review-1-2-map',
      type: 'theory',
      left: {
        en: {
          title: 'Review map - statements and questions',
          explanation:
            'In Units 1-2, the verb <b>be</b> changes with the subject: <b>am / is / are</b>. ' +
            'In statements the subject comes first, and in questions the verb moves before the subject.',
          table: {
            headers: ['Subject', 'Statement', 'Negative', 'Question'],
            rows: [
              ['I', 'I am late.', "I\'m not late.", 'Am I late?'],
              ['he / she / it', 'She is ready.', "She isn\'t ready.", 'Is she ready?'],
              ['we / you / they', 'They are here.', "They aren\'t here.", 'Are they here?'],
            ],
          },
          notes: [
            'Positive short answers keep the full verb: Yes, I am. Yes, she is. Yes, they are.',
            'Contractions are common in normal statements and negatives: I\'m, she\'s, they aren\'t.',
          ],
        },
        ru: {
          title: 'Схема повторения - утверждения и вопросы',
          explanation:
            'В юнитах 1-2 глагол <b>be</b> меняется в зависимости от подлежащего: <b>am / is / are</b>. ' +
            'В утверждениях подлежащее стоит первым, а в вопросах глагол переходит перед подлежащим.',
          table: {
            headers: ['Подлежащее', 'Утверждение', 'Отрицание', 'Вопрос'],
            rows: [
              ['I', 'I am late.', "I\'m not late.", 'Am I late?'],
              ['he / she / it', 'She is ready.', "She isn\'t ready.", 'Is she ready?'],
              ['we / you / they', 'They are here.', "They aren\'t here.", 'Are they here?'],
            ],
          },
          notes: [
            'В кратких положительных ответах используем полную форму: Yes, I am. Yes, she is. Yes, they are.',
            'В обычных утверждениях и отрицаниях часто используются сокращения: I\'m, she\'s, they aren\'t.',
          ],
        },
      },
      right: {
        en: {
          title: 'Mixed examples',
          intro: 'These examples combine statements, negatives, and questions with the same verb pattern.',
          items: [
            { english: "I\'m late, but I\'m ready.", russian: 'Я опаздываю, но я готов(а).', highlight: "I\'m" },
            { english: "Is your sister at home? - No, she isn\'t.", russian: 'Твоя сестра дома? - Нет.', highlight: 'Is' },
            { english: "They\'re in the kitchen, and the coffee is hot.", russian: 'Они на кухне, и кофе горячий.', highlight: "They\'re" },
            { english: 'Are you tired? - Yes, I am.', russian: 'Ты устал(а)? - Да.', highlight: 'Are' },
            { english: "My keys aren\'t in my bag.", russian: 'Моих ключей нет в сумке.', highlight: "aren\'t" },
            { english: "It\'s a small hotel near the station.", russian: 'Это маленький отель рядом со станцией.', highlight: "It\'s" },
            { english: 'Are those your books? - Yes, they are.', russian: 'Это твои книги? - Да.', highlight: 'Are' },
            { english: "We aren\'t hungry, but we are thirsty.", russian: 'Мы не голодны, но хотим пить.', highlight: "aren\'t" },
          ],
        },
        ru: {
          title: 'Смешанные примеры',
          intro: 'В этих примерах объединены утверждения, отрицания и вопросы с одной и той же моделью.',
          items: [
            { english: "I\'m late, but I\'m ready.", russian: 'Я опаздываю, но я готов(а).', highlight: "I\'m" },
            { english: "Is your sister at home? - No, she isn\'t.", russian: 'Твоя сестра дома? - Нет.', highlight: 'Is' },
            { english: "They\'re in the kitchen, and the coffee is hot.", russian: 'Они на кухне, и кофе горячий.', highlight: "They\'re" },
            { english: 'Are you tired? - Yes, I am.', russian: 'Ты устал(а)? - Да.', highlight: 'Are' },
            { english: "My keys aren\'t in my bag.", russian: 'Моих ключей нет в сумке.', highlight: "aren\'t" },
            { english: "It\'s a small hotel near the station.", russian: 'Это маленький отель рядом со станцией.', highlight: "It\'s" },
            { english: 'Are those your books? - Yes, they are.', russian: 'Это твои книги? - Да.', highlight: 'Are' },
            { english: "We aren\'t hungry, but we are thirsty.", russian: 'Мы не голодны, но хотим пить.', highlight: "aren\'t" },
          ],
        },
      },
    },
    {
      id: 'review-1-2-contrasts',
      type: 'examples',
      left: {
        en: {
          title: 'Common contrast points',
          explanation:
            'Most mistakes in this area come from <b>word order</b> and <b>short answers</b>. ' +
            'Check whether you are making a statement, a negative sentence, or a question.',
          table: {
            headers: ['What to check', 'Correct pattern'],
            rows: [
              ['Question order', 'Are you ready? / Is he here?'],
              ['Negative with I', "I\'m not ..."],
              ['Positive short answer', 'Yes, I am. / Yes, she is.'],
              ['Plural subject', 'The keys are ... / My parents are ...'],
            ],
          },
          notes: [
            'A noun phrase can behave like he / she / it / they. Example: my parents = they, the weather = it.',
            'Do not use contractions in positive short answers: Yes, I am. (not Yes, I\'m.)',
          ],
        },
        ru: {
          title: 'Частые точки проверки',
          explanation:
            'Большинство ошибок здесь связано с <b>порядком слов</b> и <b>краткими ответами</b>. ' +
            'Сначала определите, вы строите утверждение, отрицание или вопрос.',
          table: {
            headers: ['Что проверить', 'Правильная модель'],
            rows: [
              ['Порядок слов в вопросе', 'Are you ready? / Is he here?'],
              ['Отрицание с I', "I\'m not ..."],
              ['Краткий положительный ответ', 'Yes, I am. / Yes, she is.'],
              ['Множественное число', 'The keys are ... / My parents are ...'],
            ],
          },
          notes: [
            'Существительное может вести себя как he / she / it / they. Например: my parents = they, the weather = it.',
            'В кратких положительных ответах не используем сокращение: Yes, I am. (не Yes, I\'m.)',
          ],
        },
      },
      right: {
        en: {
          title: 'Mini-dialogues',
          intro: 'Read the exchanges and notice the form that changes each time.',
          items: [
            { english: "Where are your glasses? - They aren\'t on the table.", russian: 'Где твои очки? - Их нет на столе.', highlight: 'are' },
            { english: 'Is Alex a student? - Yes, he is.', russian: 'Алекс студент? - Да.', highlight: 'is' },
            { english: 'Am I in the right room? - Yes, you are.', russian: 'Я в правильной аудитории? - Да.', highlight: 'Am I' },
            { english: "Are the children asleep? - No, they aren\'t.", russian: 'Дети спят? - Нет.', highlight: "aren\'t" },
            { english: 'What is your name? - My name is Emma.', russian: 'Как тебя зовут? - Меня зовут Эмма.', highlight: 'is' },
            { english: "Is the weather cold today? - No, it\'s fine.", russian: 'Сегодня холодная погода? - Нет, всё нормально.', highlight: 'Is' },
            { english: "Are you from Madrid? - No, I\'m from Seville.", russian: 'Ты из Мадрида? - Нет, я из Севильи.', highlight: 'Are' },
          ],
        },
        ru: {
          title: 'Мини-диалоги',
          intro: 'Прочитайте короткие обмены репликами и обратите внимание, какая форма меняется.',
          items: [
            { english: "Where are your glasses? - They aren\'t on the table.", russian: 'Где твои очки? - Их нет на столе.', highlight: 'are' },
            { english: 'Is Alex a student? - Yes, he is.', russian: 'Алекс студент? - Да.', highlight: 'is' },
            { english: 'Am I in the right room? - Yes, you are.', russian: 'Я в правильной аудитории? - Да.', highlight: 'Am I' },
            { english: "Are the children asleep? - No, they aren\'t.", russian: 'Дети спят? - Нет.', highlight: "aren\'t" },
            { english: 'What is your name? - My name is Emma.', russian: 'Как тебя зовут? - Меня зовут Эмма.', highlight: 'is' },
            { english: "Is the weather cold today? - No, it\'s fine.", russian: 'Сегодня холодная погода? - Нет, всё нормально.', highlight: 'Is' },
            { english: "Are you from Madrid? - No, I\'m from Seville.", russian: 'Ты из Мадрида? - Нет, я из Севильи.', highlight: 'Are' },
          ],
        },
      },
    },
    {
      id: 'review-1-2-practice-a',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use these patterns while you complete the mixed review.',
          table: {
            headers: ['Statement', 'Negative', 'Question', 'Short answer'],
            rows: [
              ["I\'m", "I\'m not", 'Am I ...?', 'Yes, I am.'],
              ["he\'s / she\'s / it\'s", "he isn\'t / she isn\'t / it isn\'t", 'Is he / she / it ...?', 'Yes, he is.'],
              ["we\'re / you\'re / they\'re", "we aren\'t / you aren\'t / they aren\'t", 'Are we / you / they ...?', 'Yes, they are.'],
            ],
          },
          notes: ['Write one missing word or contraction in each gap.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эти модели, пока выполняете смешанное повторение.',
          table: {
            headers: ['Утверждение', 'Отрицание', 'Вопрос', 'Краткий ответ'],
            rows: [
              ["I\'m", "I\'m not", 'Am I ...?', 'Yes, I am.'],
              ["he\'s / she\'s / it\'s", "he isn\'t / she isn\'t / it isn\'t", 'Is he / she / it ...?', 'Yes, he is.'],
              ["we\'re / you\'re / they\'re", "we aren\'t / you aren\'t / they aren\'t", 'Are we / you / they ...?', 'Yes, they are.'],
            ],
          },
          notes: ['В каждый пропуск впишите одно слово или сокращение.'],
        },
      },
      right: {
        en: {
          title: 'Extra practice A - Complete the sentence',
          instructions: 'Write one missing word or contraction. Use short forms when they sound natural.',
          questions: [
            {
              id: 'rp12-p1',
              type: 'fill-blank',
              prompt: 'I ___ from Poland.',
              translation: 'Я из Польши.',
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: 'With I, the verb is am. The short form is I\'m.',
            },
            {
              id: 'rp12-p2',
              type: 'fill-blank',
              prompt: 'The shop ___ open today.',
              translation: 'Магазин сегодня открыт.',
              correctAnswer: 'is',
              explanation: 'The shop = it, so we use is.',
            },
            {
              id: 'rp12-p3',
              type: 'fill-blank',
              prompt: 'My friends ___ at the station.',
              translation: 'Мои друзья на станции.',
              correctAnswer: 'are',
              explanation: 'My friends is plural, so we use are.',
            },
            {
              id: 'rp12-p4',
              type: 'fill-blank',
              prompt: 'She ___ a teacher. She works in a bank.',
              translation: 'Она не учитель. Она работает в банке.',
              correctAnswer: "isn\'t",
              altAnswers: ["\'s not", 'is not'],
              explanation: 'This sentence needs a negative form with she: she isn\'t.',
            },
            {
              id: 'rp12-p5',
              type: 'fill-blank',
              prompt: '___ he at work today?',
              translation: 'Он сегодня на работе?',
              correctAnswer: 'Is',
              explanation: 'Questions with he start with Is.',
            },
            {
              id: 'rp12-p6',
              type: 'fill-blank',
              prompt: '___ you cold?',
              translation: 'Тебе холодно?',
              correctAnswer: 'Are',
              explanation: 'Questions with you start with Are.',
            },
            {
              id: 'rp12-p7',
              type: 'fill-blank',
              prompt: 'We ___ ready yet.',
              translation: 'Мы ещё не готовы.',
              correctAnswer: "aren\'t",
              altAnswers: ["\'re not", 'are not'],
              explanation: 'With we, the negative form is aren\'t or we\'re not.',
            },
            {
              id: 'rp12-p8',
              type: 'fill-blank',
              prompt: 'Are they at home? - Yes, they ___.',
              translation: 'Они дома? - Да.',
              correctAnswer: 'are',
              explanation: 'Positive short answers use the full verb: Yes, they are.',
            },
          ],
        },
        ru: {
          title: 'Дополнительная практика A - Дополните предложение',
          instructions: 'Впишите одно пропущенное слово или сокращение. Используйте краткие формы, когда они звучат естественно.',
          questions: [
            {
              id: 'rp12-p1',
              type: 'fill-blank',
              prompt: 'I ___ from Poland.',
              translation: 'Я из Польши.',
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: 'С I используется am. Краткая форма: I\'m.',
            },
            {
              id: 'rp12-p2',
              type: 'fill-blank',
              prompt: 'The shop ___ open today.',
              translation: 'Магазин сегодня открыт.',
              correctAnswer: 'is',
              explanation: 'The shop = it, поэтому используем is.',
            },
            {
              id: 'rp12-p3',
              type: 'fill-blank',
              prompt: 'My friends ___ at the station.',
              translation: 'Мои друзья на станции.',
              correctAnswer: 'are',
              explanation: 'My friends - множественное число, поэтому используем are.',
            },
            {
              id: 'rp12-p4',
              type: 'fill-blank',
              prompt: 'She ___ a teacher. She works in a bank.',
              translation: 'Она не учитель. Она работает в банке.',
              correctAnswer: "isn\'t",
              altAnswers: ["\'s not", 'is not'],
              explanation: 'Здесь нужна отрицательная форма с she: she isn\'t.',
            },
            {
              id: 'rp12-p5',
              type: 'fill-blank',
              prompt: '___ he at work today?',
              translation: 'Он сегодня на работе?',
              correctAnswer: 'Is',
              explanation: 'Вопросы с he начинаются с Is.',
            },
            {
              id: 'rp12-p6',
              type: 'fill-blank',
              prompt: '___ you cold?',
              translation: 'Тебе холодно?',
              correctAnswer: 'Are',
              explanation: 'Вопросы с you начинаются с Are.',
            },
            {
              id: 'rp12-p7',
              type: 'fill-blank',
              prompt: 'We ___ ready yet.',
              translation: 'Мы ещё не готовы.',
              correctAnswer: "aren\'t",
              altAnswers: ["\'re not", 'are not'],
              explanation: 'С we отрицание образуется как aren\'t или we\'re not.',
            },
            {
              id: 'rp12-p8',
              type: 'fill-blank',
              prompt: 'Are they at home? - Yes, they ___.',
              translation: 'Они дома? - Да.',
              correctAnswer: 'are',
              explanation: 'В кратком положительном ответе используем полную форму: Yes, they are.',
            },
          ],
        },
      },
    },
    {
      id: 'review-1-2-practice-b',
      type: 'practice',
      left: {
        en: {
          title: 'Question and answer patterns',
          explanation: 'This second round mixes wh- questions, negatives, and short answers.',
          table: {
            headers: ['Pattern', 'Example'],
            rows: [
              ['Wh-word + be', 'Where is your bag? / What are their names?'],
              ['Negative answer', "No, she isn\'t. / No, they aren\'t."],
              ['Positive answer', 'Yes, I am. / Yes, we are.'],
            ],
          },
          notes: ['Look at the subject carefully before you choose is or are.'],
        },
        ru: {
          title: 'Модели вопросов и ответов',
          explanation: 'Во втором раунде смешаны специальные вопросы, отрицания и краткие ответы.',
          table: {
            headers: ['Модель', 'Пример'],
            rows: [
              ['Wh-word + be', 'Where is your bag? / What are their names?'],
              ['Отрицательный ответ', "No, she isn\'t. / No, they aren\'t."],
              ['Положительный ответ', 'Yes, I am. / Yes, we are.'],
            ],
          },
          notes: ['Сначала определите подлежащее, а потом выбирайте is или are.'],
        },
      },
      right: {
        en: {
          title: 'Extra practice B - Short answers and questions',
          instructions: 'Complete each line with one missing word or contraction.',
          questions: [
            {
              id: 'rp12-p9',
              type: 'fill-blank',
              prompt: 'Where ___ your phone?',
              translation: 'Где твой телефон?',
              correctAnswer: 'is',
              explanation: 'The subject is your phone, so we use is.',
            },
            {
              id: 'rp12-p10',
              type: 'fill-blank',
              prompt: 'My parents ___ at home. They\'re at work.',
              translation: 'Моих родителей нет дома. Они на работе.',
              correctAnswer: "aren\'t",
              altAnswers: ["\'re not", 'are not'],
              explanation: 'My parents is plural, so the negative form is aren\'t.',
            },
            {
              id: 'rp12-p11',
              type: 'fill-blank',
              prompt: '___ this your seat?',
              translation: 'Это твоё место?',
              correctAnswer: 'Is',
              explanation: 'Questions with this use Is.',
            },
            {
              id: 'rp12-p12',
              type: 'fill-blank',
              prompt: 'No, I ___ not tired.',
              translation: 'Нет, я не устал(а).',
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: 'With I, the negative form is I\'m not.',
            },
            {
              id: 'rp12-p13',
              type: 'fill-blank',
              prompt: 'What ___ your names?',
              translation: 'Как вас зовут?',
              correctAnswer: 'are',
              explanation: 'Names is plural here, so we use are.',
            },
            {
              id: 'rp12-p14',
              type: 'fill-blank',
              prompt: 'Am I late? - No, you ___.',
              translation: 'Я опоздал(а)? - Нет.',
              correctAnswer: "aren\'t",
              altAnswers: ['are not'],
              explanation: 'The correct short answer is No, you aren\'t.',
            },
            {
              id: 'rp12-p15',
              type: 'fill-blank',
              prompt: 'The windows ___ closed.',
              translation: 'Окна закрыты.',
              correctAnswer: 'are',
              explanation: 'The windows is plural, so we use are.',
            },
            {
              id: 'rp12-p16',
              type: 'fill-blank',
              prompt: '___ Lisa and Ben from Canada?',
              translation: 'Лиза и Бен из Канады?',
              correctAnswer: 'Are',
              explanation: 'Lisa and Ben is a plural subject, so the question starts with Are.',
            },
          ],
        },
        ru: {
          title: 'Дополнительная практика B - Краткие ответы и вопросы',
          instructions: 'Дополните каждую строку одним словом или сокращением.',
          questions: [
            {
              id: 'rp12-p9',
              type: 'fill-blank',
              prompt: 'Where ___ your phone?',
              translation: 'Где твой телефон?',
              correctAnswer: 'is',
              explanation: 'Подлежащее - your phone, поэтому используем is.',
            },
            {
              id: 'rp12-p10',
              type: 'fill-blank',
              prompt: 'My parents ___ at home. They\'re at work.',
              translation: 'Моих родителей нет дома. Они на работе.',
              correctAnswer: "aren\'t",
              altAnswers: ["\'re not", 'are not'],
              explanation: 'My parents - множественное число, поэтому отрицательная форма будет aren\'t.',
            },
            {
              id: 'rp12-p11',
              type: 'fill-blank',
              prompt: '___ this your seat?',
              translation: 'Это твоё место?',
              correctAnswer: 'Is',
              explanation: 'Вопросы с this начинаются с Is.',
            },
            {
              id: 'rp12-p12',
              type: 'fill-blank',
              prompt: 'No, I ___ not tired.',
              translation: 'Нет, я не устал(а).',
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: 'С I отрицание выглядит как I\'m not.',
            },
            {
              id: 'rp12-p13',
              type: 'fill-blank',
              prompt: 'What ___ your names?',
              translation: 'Как вас зовут?',
              correctAnswer: 'are',
              explanation: 'Здесь names стоит во множественном числе, поэтому используем are.',
            },
            {
              id: 'rp12-p14',
              type: 'fill-blank',
              prompt: 'Am I late? - No, you ___.',
              translation: 'Я опоздал(а)? - Нет.',
              correctAnswer: "aren\'t",
              altAnswers: ['are not'],
              explanation: 'Правильный краткий ответ: No, you aren\'t.',
            },
            {
              id: 'rp12-p15',
              type: 'fill-blank',
              prompt: 'The windows ___ closed.',
              translation: 'Окна закрыты.',
              correctAnswer: 'are',
              explanation: 'The windows - множественное число, поэтому используем are.',
            },
            {
              id: 'rp12-p16',
              type: 'fill-blank',
              prompt: '___ Lisa and Ben from Canada?',
              translation: 'Лиза и Бен из Канады?',
              correctAnswer: 'Are',
              explanation: 'Lisa and Ben - это множественное подлежащее, поэтому вопрос начинается с Are.',
            },
          ],
        },
      },
    },
    {
      id: 'review-1-2-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Review quiz - Units 1-2',
          description: 'Choose the best answer in each mixed review question.',
          questions: [
            {
              id: 'rp12-q1',
              question: 'Which sentence is correct?',
              options: ['He am ready.', 'He is ready.', 'He are ready.'],
              correctIndex: 1,
              explanation: 'With he, the present form of be is is.',
            },
            {
              id: 'rp12-q2',
              question: 'Complete the question: ___ you busy?',
              options: ['Am', 'Is', 'Are'],
              correctIndex: 2,
              explanation: 'Questions with you begin with Are.',
            },
            {
              id: 'rp12-q3',
              question: 'Choose the best negative answer to "Is Emma at home?"',
              options: ['No, she not.', "No, she isn\'t.", 'No, she aren\'t.'],
              correctIndex: 1,
              explanation: 'The correct negative short answer is No, she isn\'t.',
            },
            {
              id: 'rp12-q4',
              question: 'Which short answer is correct?',
              options: ["Yes, I\'m.", 'Yes, I am.', 'Yes, I is.'],
              correctIndex: 1,
              explanation: 'Positive short answers use the full form: Yes, I am.',
            },
            {
              id: 'rp12-q5',
              question: 'Pick the correct sentence for a plural subject.',
              options: ['The keys is on the desk.', 'The keys are on the desk.', 'The keys am on the desk.'],
              correctIndex: 1,
              explanation: 'The keys is plural, so the verb must be are.',
            },
          ],
        },
        ru: {
          title: 'Квиз на повторение - юниты 1-2',
          description: 'Выберите лучший ответ в каждом смешанном вопросе на повторение.',
          questions: [
            {
              id: 'rp12-q1',
              question: 'Какое предложение правильное?',
              options: ['He am ready.', 'He is ready.', 'He are ready.'],
              correctIndex: 1,
              explanation: 'С he форма глагола be в настоящем времени - is.',
            },
            {
              id: 'rp12-q2',
              question: 'Дополните вопрос: ___ you busy?',
              options: ['Am', 'Is', 'Are'],
              correctIndex: 2,
              explanation: 'Вопросы с you начинаются с Are.',
            },
            {
              id: 'rp12-q3',
              question: 'Выберите лучший отрицательный ответ на "Is Emma at home?"',
              options: ['No, she not.', "No, she isn\'t.", 'No, she aren\'t.'],
              correctIndex: 1,
              explanation: 'Правильный краткий отрицательный ответ: No, she isn\'t.',
            },
            {
              id: 'rp12-q4',
              question: 'Какой краткий ответ правильный?',
              options: ["Yes, I\'m.", 'Yes, I am.', 'Yes, I is.'],
              correctIndex: 1,
              explanation: 'В кратких положительных ответах используется полная форма: Yes, I am.',
            },
            {
              id: 'rp12-q5',
              question: 'Выберите правильное предложение с подлежащим во множественном числе.',
              options: ['The keys is on the desk.', 'The keys are on the desk.', 'The keys am on the desk.'],
              correctIndex: 1,
              explanation: 'The keys - множественное число, поэтому нужен глагол are.',
            },
          ],
        },
      },
    },
    {
      id: 'review-1-2-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary - review pack 1-2',
          points: [
            'Choose <b>am</b> with I, <b>is</b> with he/she/it, and <b>are</b> with we/you/they.',
            'Negative sentences add <b>not</b>: I\'m not, isn\'t, aren\'t.',
            'Yes/no questions move the verb before the subject: <b>Is she...?</b> <b>Are they...?</b>',
            'Positive short answers use the full form: <b>Yes, I am.</b> <b>Yes, they are.</b>',
            'Noun subjects follow the same rule: the weather = it, my parents = they.',
            'If you hesitate, check the subject first and then choose am / is / are.',
          ],
          nextUnit: 'Continue with Unit 3 - I am doing (present continuous)',
        },
        ru: {
          title: 'Итоги - пакет повторения 1-2',
          points: [
            'Используйте <b>am</b> с I, <b>is</b> с he/she/it и <b>are</b> с we/you/they.',
            'В отрицательных предложениях добавляется <b>not</b>: I\'m not, isn\'t, aren\'t.',
            'В вопросах да/нет глагол ставится перед подлежащим: <b>Is she...?</b> <b>Are they...?</b>',
            'В кратких положительных ответах используется полная форма: <b>Yes, I am.</b> <b>Yes, they are.</b>',
            'Подлежащие-существительные подчиняются тем же правилам: the weather = it, my parents = they.',
            'Если сомневаетесь, сначала определите подлежащее, а потом выбирайте am / is / are.',
          ],
          nextUnit: 'Дальше можно перейти к юниту 3 - I am doing (present continuous)',
        },
      },
    },
  ],
};

export default reviewPack1to2;
