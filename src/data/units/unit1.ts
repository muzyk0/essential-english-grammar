/* eslint-disable no-useless-escape */
import type { Unit } from '../../types/unit';

// Unit 1: am / is / are
// Based on Essential Grammar in Use by Raymond Murphy (Unit 1)
const unit1: Unit = {
  id: 'unit1',
  number: 1,
  title: {
    en: 'am / is / are',
    ru: 'am / is / are',
  },
  description: {
    en: 'Present simple of the verb "to be" — positive and negative forms, plus common short forms.',
    ru: 'Настоящее простое время глагола "to be" — утвердительная и отрицательная формы, а также распространённые краткие формы.',
  },
  steps: [
    // ─── Step 1: Positive forms (theory + examples) ──────────────────────────
    {
      id: 'step-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'Positive forms of "to be"',
          explanation:
            'We use <b>am / is / are</b> as the present simple of the verb <em>to be</em>. ' +
            'The form depends on the subject (who or what we are talking about).',
          table: {
            headers: ['Subject', 'Full form', 'Contraction'],
            rows: [
              ['I', 'I am', "I'm"],
              ['he', 'he is', "he's"],
              ['she', 'she is', "she's"],
              ['it', 'it is', "it's"],
              ['we', 'we are', "we're"],
              ['you', 'you are', "you're"],
              ['they', 'they are', "they're"],
            ],
          },
          notes: [
            'In spoken and informal written English we almost always use contractions (I\'m, he\'s, etc.).',
            '"It" is used for things, animals and impersonal subjects (weather, time, etc.).',
          ],
        },
        ru: {
          title: 'Утвердительные формы глагола "to be"',
          explanation:
            'Мы используем <b>am / is / are</b> как настоящее простое время глагола <em>to be</em> (быть). ' +
            'Форма зависит от подлежащего (о ком или о чём идёт речь).',
          table: {
            headers: ['Подлежащее', 'Полная форма', 'Краткая форма'],
            rows: [
              ['I (я)', 'I am', "I'm"],
              ['he (он)', 'he is', "he's"],
              ['she (она)', 'she is', "she's"],
              ['it (оно)', 'it is', "it's"],
              ['we (мы)', 'we are', "we're"],
              ['you (ты/вы)', 'you are', "you're"],
              ['they (они)', 'they are', "they're"],
            ],
          },
          notes: [
            'В разговорной и неформальной письменной речи почти всегда используются краткие формы (I\'m, he\'s и т.д.).',
            '"It" используется для предметов, животных и безличных подлежащих (погода, время и т.д.).',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Positive sentences',
          intro: 'Study these sentences. Notice how we use am / is / are with different subjects.',
          items: [
            { english: "I'm tired.", russian: 'Я устал(а).', highlight: "I'm" },
            { english: "I'm 25 years old.", russian: 'Мне 25 лет.', highlight: "I'm" },
            { english: "I'm from London.", russian: 'Я из Лондона.', highlight: "I'm" },
            { english: "Tom is a student.", russian: 'Том — студент.', highlight: 'is' },
            { english: "She's a doctor.", russian: 'Она врач.', highlight: "She's" },
            { english: "It's cold today.", russian: 'Сегодня холодно.', highlight: "It's" },
            { english: "We're at home.", russian: 'Мы дома.', highlight: "We're" },
            { english: "They're from Spain.", russian: 'Они из Испании.', highlight: "They're" },
            { english: 'Our bags are in the car.', russian: 'Наши сумки в машине.', highlight: 'are' },
          ],
        },
        ru: {
          title: 'Примеры — Утвердительные предложения',
          intro: 'Изучите эти предложения. Обратите внимание, как используются am / is / are с разными подлежащими.',
          items: [
            { english: "I'm tired.", russian: 'Я устал(а).', highlight: "I'm" },
            { english: "I'm 25 years old.", russian: 'Мне 25 лет.', highlight: "I'm" },
            { english: "I'm from London.", russian: 'Я из Лондона.', highlight: "I'm" },
            { english: "Tom is a student.", russian: 'Том — студент.', highlight: 'is' },
            { english: "She's a doctor.", russian: 'Она врач.', highlight: "She's" },
            { english: "It's cold today.", russian: 'Сегодня холодно.', highlight: "It's" },
            { english: "We're at home.", russian: 'Мы дома.', highlight: "We're" },
            { english: "They're from Spain.", russian: 'Они из Испании.', highlight: "They're" },
            { english: 'Our bags are in the car.', russian: 'Наши сумки в машине.', highlight: 'are' },
          ],
        },
      },
    },

    // ─── Step 2: Negative forms ───────────────────────────────────────────────
    {
      id: 'step-2-negative',
      type: 'examples',
      left: {
        en: {
          title: 'Negative forms',
          explanation:
            'To make a negative sentence, add <b>not</b> after am / is / are. ' +
            'We use contractions in everyday speech.',
          table: {
            headers: ['Full form', 'Contraction'],
            rows: [
              ['I am not', "I'm not"],
              ['he is not', "he isn't  / he's not"],
              ['she is not', "she isn't  / she's not"],
              ['it is not', "it isn't  / it's not"],
              ['we are not', "we aren't  / we're not"],
              ['you are not', "you aren't  / you're not"],
              ['they are not', "they aren't  / they're not"],
            ],
          },
          notes: [
            'Note: "I am not" has only one contraction: I\'m not. (NOT "I amn\'t")',
            'Both contractions for he/she/it/we/you/they are equally correct.',
          ],
        },
        ru: {
          title: 'Отрицательные формы',
          explanation:
            'Для образования отрицания добавьте <b>not</b> после am / is / are. ' +
            'В повседневной речи используют краткие формы.',
          table: {
            headers: ['Полная форма', 'Краткая форма'],
            rows: [
              ['I am not', "I'm not"],
              ['he is not', "he isn't  / he's not"],
              ['she is not', "she isn't  / she's not"],
              ['it is not', "it isn't  / it's not"],
              ['we are not', "we aren't  / we're not"],
              ['you are not', "you aren't  / you're not"],
              ['they are not', "they aren't  / they're not"],
            ],
          },
          notes: [
            'Внимание: "I am not" имеет только одну краткую форму: I\'m not. (НЕ "I amn\'t")',
            'Обе краткие формы для he/she/it/we/you/they одинаково правильны.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Negative sentences',
          intro: 'Compare positive and negative forms in context.',
          items: [
            { english: "I'm at home, but I'm not alone.", russian: 'Я дома, но не один(одна).', highlight: "I'm not" },
            { english: "She isn't at home.", russian: 'Её нет дома.', highlight: "isn't" },
            { english: "He's a teacher. He isn't a doctor.", russian: 'Он учитель. Он не врач.', highlight: "isn't" },
            { english: "The weather isn't good today.", russian: 'Погода сегодня нехорошая.', highlight: "isn't" },
            { english: "They aren't from England.", russian: 'Они не из Англии.', highlight: "aren't" },
            { english: "We aren't late today.", russian: 'Мы сегодня не опаздываем.', highlight: "aren't" },
            { english: "My phone isn't new.", russian: 'Мой телефон не новый.', highlight: "isn't" },
          ],
        },
        ru: {
          title: 'Примеры — Отрицательные предложения',
          intro: 'Сравните утвердительные и отрицательные формы в контексте.',
          items: [
            { english: "I'm at home, but I'm not alone.", russian: 'Я дома, но не один(одна).', highlight: "I'm not" },
            { english: "She isn't at home.", russian: 'Её нет дома.', highlight: "isn't" },
            { english: "He's a teacher. He isn't a doctor.", russian: 'Он учитель. Он не врач.', highlight: "isn't" },
            { english: "The weather isn't good today.", russian: 'Погода сегодня нехорошая.', highlight: "isn't" },
            { english: "They aren't from England.", russian: 'Они не из Англии.', highlight: "aren't" },
            { english: "We aren't late today.", russian: 'Мы сегодня не опаздываем.', highlight: "aren't" },
            { english: "My phone isn't new.", russian: 'Мой телефон не новый.', highlight: "isn't" },
          ],
        },
      },
    },

    // ─── Step 3: Common short forms ───────────────────────────────────────────
    {
      id: 'step-3-short-forms',
      type: 'theory',
      left: {
        en: {
          title: 'Common short forms',
          explanation:
            'Some very common expressions use <b>is</b> in a short form with words like ' +
            '<em>that</em>, <em>there</em> and <em>here</em>. We use these forms all the time in everyday English.',
          table: {
            headers: ['Full form', 'Short form', 'Typical use'],
            rows: [
              ['that is', "that's", 'pointing to a thing or idea'],
              ['there is', "there's", 'saying something is present'],
              ['here is', "here's", 'giving or showing something'],
            ],
          },
          notes: [
            'These short forms are very common in speech and informal writing.',
            '"There\'s" is singular here. A full lesson on there is / there are comes later.',
          ],
        },
        ru: {
          title: 'Распространённые краткие формы',
          explanation:
            'Некоторые очень частотные выражения используют <b>is</b> в краткой форме со словами ' +
            '<em>that</em>, <em>there</em> и <em>here</em>. Эти формы постоянно встречаются в повседневном английском.',
          table: {
            headers: ['Полная форма', 'Краткая форма', 'Обычное значение'],
            rows: [
              ['that is', "that's", 'указываем на предмет или идею'],
              ['there is', "there's", 'говорим, что что-то есть'],
              ['here is', "here's", 'даём или показываем что-то'],
            ],
          },
          notes: [
            'Эти краткие формы очень часто используются в речи и в неформальном письме.',
            '"There\'s" здесь употребляется с единственным числом. Отдельный урок про there is / there are будет позже.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — that\'s / there\'s / here\'s',
          items: [
            { english: "That's my umbrella.", russian: 'Это мой зонт.', highlight: "That's" },
            { english: "That's a good question.", russian: 'Это хороший вопрос.', highlight: "That's" },
            { english: "There's a pharmacy near the station.", russian: 'Рядом со станцией есть аптека.', highlight: "There's" },
            { english: "Look! There's Emma.", russian: 'Смотри! Вон Эмма.', highlight: "There's" },
            { english: "Here's your receipt.", russian: 'Вот ваш чек.', highlight: "Here's" },
            { english: "Here's the photo I promised you.", russian: 'Вот фотография, которую я обещал(а).', highlight: "Here's" },
          ],
        },
        ru: {
          title: 'Примеры — that\'s / there\'s / here\'s',
          items: [
            { english: "That's my umbrella.", russian: 'Это мой зонт.', highlight: "That's" },
            { english: "That's a good question.", russian: 'Это хороший вопрос.', highlight: "That's" },
            { english: "There's a pharmacy near the station.", russian: 'Рядом со станцией есть аптека.', highlight: "There's" },
            { english: "Look! There's Emma.", russian: 'Смотри! Вон Эмма.', highlight: "There's" },
            { english: "Here's your receipt.", russian: 'Вот ваш чек.', highlight: "Here's" },
            { english: "Here's the photo I promised you.", russian: 'Вот фотография, которую я обещал(а).', highlight: "Here's" },
          ],
        },
      },
    },

    // ─── Step 4: Practice A — fixed-answer tasks ─────────────────────────────
    {
      id: 'step-4-practice-fixed',
      type: 'practice',
      left: {
        en: {
          title: 'Fixed-answer practice',
          explanation:
            'These prompts have <b>one target answer</b>. Use the subject, the context, and the meaning ' +
            'to choose the correct form of <em>to be</em>.',
          table: {
            headers: ['Prompt type', 'What you decide', 'Example'],
            rows: [
              ['statement with a subject', 'am / is / are or a short form', 'She ___ at work.'],
              ['contrast with a negative idea', 'the missing form of be', "I\'m not hungry, but I ___ thirsty."],
              ['giving or handing something', 'the natural short form', '___ your coat.'],
            ],
          },
          notes: [
            'Use contractions where they sound natural.',
            'These items are not personal. The context decides the answer.',
          ],
        },
        ru: {
          title: 'Практика с одним ответом',
          explanation:
            'В этих заданиях есть <b>один основной ответ</b>. Опирайтесь на подлежащее, контекст и смысл, ' +
            'чтобы выбрать правильную форму глагола <em>to be</em>.',
          table: {
            headers: ['Тип задания', 'Что нужно решить', 'Пример'],
            rows: [
              ['обычное утверждение', 'am / is / are или краткую форму', 'She ___ at work.'],
              ['сопоставление с отрицанием', 'недостающую форму be', "I\'m not hungry, but I ___ thirsty."],
              ['когда что-то дают или показывают', 'естественную краткую форму', '___ your coat.'],
            ],
          },
          notes: [
            'Используйте краткие формы там, где они звучат естественно.',
            'Эти задания не про личное мнение. Ответ определяется самим контекстом.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fixed answers',
          instructions: 'Complete each sentence with the one form that fits the grammar and the context.',
          questions: [
            {
              id: 'u1-fixed-1',
              type: 'fill-blank',
              prompt: 'She ___ at work today.',
              translation: 'Она сегодня на работе.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: "She + is → She\'s.",
            },
            {
              id: 'u1-fixed-2',
              type: 'fill-blank',
              prompt: 'My keys ___ in my bag.',
              translation: 'Мои ключи в моей сумке.',
              correctAnswer: 'are',
              explanation: '"Keys" is plural, so we use are.',
            },
            {
              id: 'u1-fixed-3',
              type: 'fill-blank',
              prompt: 'That ___ my phone on the table.',
              translation: 'Это мой телефон на столе.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"That is" → That\'s.',
            },
            {
              id: 'u1-fixed-4',
              type: 'fill-blank',
              prompt: 'I\'m not hungry, but I ___ thirsty.',
              translation: 'Я не голоден(на), но хочу пить.',
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: 'After I, the missing form is am / I\'m.',
            },
            {
              id: 'u1-fixed-5',
              type: 'fill-blank',
              prompt: 'Catherine isn\'t at home. She ___ at work.',
              translation: 'Кэтрин не дома. Она на работе.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: 'With she, the natural short form is she\'s.',
            },
            {
              id: 'u1-fixed-6',
              type: 'fill-blank',
              prompt: 'Here ___ your coat. — Thanks.',
              translation: 'Вот твоё пальто. — Спасибо.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"Here is" often becomes "Here\'s", so both answers are accepted.',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Один ответ по контексту',
          instructions: 'Дополните предложения той формой, которая подходит по грамматике и по смыслу.',
          questions: [
            {
              id: 'u1-fixed-1',
              type: 'fill-blank',
              prompt: 'She ___ at work today.',
              translation: 'Она сегодня на работе.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: "She + is → She\'s.",
            },
            {
              id: 'u1-fixed-2',
              type: 'fill-blank',
              prompt: 'My keys ___ in my bag.',
              translation: 'Мои ключи в моей сумке.',
              correctAnswer: 'are',
              explanation: '"Keys" — множественное число, поэтому нужен are.',
            },
            {
              id: 'u1-fixed-3',
              type: 'fill-blank',
              prompt: 'That ___ my phone on the table.',
              translation: 'Это мой телефон на столе.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"That is" → That\'s.',
            },
            {
              id: 'u1-fixed-4',
              type: 'fill-blank',
              prompt: 'I\'m not hungry, but I ___ thirsty.',
              translation: 'Я не голоден(на), но хочу пить.',
              correctAnswer: "'m",
              altAnswers: ['am'],
              explanation: 'После I нужна форма am / I\'m.',
            },
            {
              id: 'u1-fixed-5',
              type: 'fill-blank',
              prompt: 'Catherine isn\'t at home. She ___ at work.',
              translation: 'Кэтрин не дома. Она на работе.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: 'С she естественно использовать краткую форму she\'s.',
            },
            {
              id: 'u1-fixed-6',
              type: 'fill-blank',
              prompt: 'Here ___ your coat. — Thanks.',
              translation: 'Вот твоё пальто. — Спасибо.',
              correctAnswer: "'s",
              altAnswers: ['is'],
              explanation: '"Here is" часто сокращается до "Here\'s", поэтому подходят оба ответа.',
            },
          ],
        },
      },
    },

    // ─── Step 5: Practice B — example answers about yourself ─────────────────
    {
      id: 'step-5-practice-example',
      type: 'practice',
      left: {
        en: {
          title: 'Example-answer practice',
          explanation:
            'Some tasks ask you to write <b>about yourself</b>. In these tasks there is no single correct sentence. ' +
            'The app can show a model answer, but your own true sentence is also fine.',
          table: {
            headers: ['Prompt', 'One model answer', 'Can your answer be different?'],
            rows: [
              ['(name?) My ...', 'My name is Robert.', 'yes'],
              ['(from?) I ...', 'I\'m from Australia.', 'yes'],
              ['(interested in ...?) I ...', 'I\'m interested in music.', 'yes'],
            ],
          },
          notes: [
            'Use the model answer as a pattern, not as the only solution.',
            'Write a complete sentence that is true for you.',
          ],
        },
        ru: {
          title: 'Практика с образцами ответов',
          explanation:
            'Некоторые задания предлагают написать <b>о себе</b>. В таких заданиях нет одного-единственного правильного ' +
            'предложения. Приложение может показать образец, но ваш собственный правдивый ответ тоже подходит.',
          table: {
            headers: ['Подсказка', 'Один образец', 'Ваш ответ может отличаться?'],
            rows: [
              ['(name?) My ...', 'My name is Robert.', 'да'],
              ['(from?) I ...', 'I\'m from Australia.', 'да'],
              ['(interested in ...?) I ...', 'I\'m interested in music.', 'да'],
            ],
          },
          notes: [
            'Используйте образец как модель, а не как единственно возможный ответ.',
            'Пишите полное предложение, которое правдиво для вас.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise B — About you',
          instructions: 'Complete each sentence with true information about yourself. The app accepts any complete answer and can show a model answer if you want.',
          questions: [
            {
              id: 'u1-example-1',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'My ___',
              translation: 'Напишите, как вас зовут.',
              correctAnswer: 'name is Robert.',
              altAnswers: ["name's Robert."],
              acceptedPatterns: ["^name\\s+(is|['’]s)\\s+.+[.!?]?$"],
              explanation: 'Any true name sentence is fine. This is only a model answer.',
            },
            {
              id: 'u1-example-2',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'I ___',
              translation: 'Напишите свой возраст.',
              correctAnswer: 'am 25 years old.',
              altAnswers: ["'m 25 years old."],
              acceptedPatterns: ["^(am|['’]m)\\s+\\d+([.,]\\d+)?(\\s+years?\\s+old)?[.!?]?$"],
              explanation: 'Any true age is fine. The sample answer just shows the pattern.',
            },
            {
              id: 'u1-example-3',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'I ___',
              translation: 'Напишите, откуда вы.',
              correctAnswer: 'am from Australia.',
              altAnswers: ["'m from Australia."],
              acceptedPatterns: ["^(am|['’]m)\\s+from\\s+.+[.!?]?$"],
              explanation: 'Write a true sentence about where you are from.',
            },
            {
              id: 'u1-example-4',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'My favourite colour ___',
              translation: 'Напишите свой любимый цвет.',
              correctAnswer: 'is blue.',
              altAnswers: ["'s blue."],
              acceptedPatterns: ["^(is|['’]s)\\s+.+[.!?]?$"],
              explanation: 'Any true colour sentence is acceptable.',
            },
            {
              id: 'u1-example-5',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'I ___',
              translation: 'Напишите, что вам интересно.',
              correctAnswer: 'am interested in music.',
              altAnswers: ["'m interested in music."],
              acceptedPatterns: ["^(am|['’]m)\\s+interested\\s+in\\s+.+[.!?]?$"],
              explanation: 'Any true interest sentence is acceptable.',
            },
          ],
        },
        ru: {
          title: 'Упражнение B — Напишите о себе',
          instructions: 'Дополните предложения правдивой информацией о себе. Приложение принимает любой полный ответ и при желании может показать образец.',
          questions: [
            {
              id: 'u1-example-1',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'My ___',
              translation: 'Напишите, как вас зовут.',
              correctAnswer: 'name is Robert.',
              altAnswers: ["name's Robert."],
              acceptedPatterns: ["^name\\s+(is|['’]s)\\s+.+[.!?]?$"],
              explanation: 'Подойдёт любое правдивое предложение с именем. Это только образец.',
            },
            {
              id: 'u1-example-2',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'I ___',
              translation: 'Напишите свой возраст.',
              correctAnswer: 'am 25 years old.',
              altAnswers: ["'m 25 years old."],
              acceptedPatterns: ["^(am|['’]m)\\s+\\d+([.,]\\d+)?(\\s+years?\\s+old)?[.!?]?$"],
              explanation: 'Подойдёт любой правдивый возраст. Образец просто показывает модель.',
            },
            {
              id: 'u1-example-3',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'I ___',
              translation: 'Напишите, откуда вы.',
              correctAnswer: 'am from Australia.',
              altAnswers: ["'m from Australia."],
              acceptedPatterns: ["^(am|['’]m)\\s+from\\s+.+[.!?]?$"],
              explanation: 'Напишите правдивое предложение о том, откуда вы.',
            },
            {
              id: 'u1-example-4',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'My favourite colour ___',
              translation: 'Напишите свой любимый цвет.',
              correctAnswer: 'is blue.',
              altAnswers: ["'s blue."],
              acceptedPatterns: ["^(is|['’]s)\\s+.+[.!?]?$"],
              explanation: 'Подойдёт любое правдивое предложение про любимый цвет.',
            },
            {
              id: 'u1-example-5',
              type: 'fill-blank',
              answerMode: 'example',
              prompt: 'I ___',
              translation: 'Напишите, что вам интересно.',
              correctAnswer: 'am interested in music.',
              altAnswers: ["'m interested in music."],
              acceptedPatterns: ["^(am|['’]m)\\s+interested\\s+in\\s+.+[.!?]?$"],
              explanation: 'Подойдёт любое правдивое предложение про ваши интересы.',
            },
          ],
        },
      },
    },

    // ─── Step 6: Practice C — true sentences, positive or negative ───────────
    {
      id: 'step-6-practice-true',
      type: 'practice',
      left: {
        en: {
          title: 'True sentences: positive or negative',
          explanation:
            'Some prompts ask for a <b>true sentence</b>. In these tasks, grammar may allow a positive or a negative answer, ' +
            'but real-world facts sometimes leave only one sensible choice.',
          table: {
            headers: ['Prompt', 'Possible answers', 'What decides?'],
            rows: [
              ['it / windy today', 'It\'s windy. / It isn\'t windy.', 'today\'s situation'],
              ['Brazil / a very big country', 'Brazil is a very big country.', 'general fact'],
              ['I / hungry right now', 'I\'m hungry. / I\'m not hungry.', 'your situation'],
            ],
          },
          notes: [
            'Read the rubric carefully: true-sentence tasks are different from fixed-answer tasks.',
            'When the prompt is about you or today, both polarities may be possible.',
          ],
        },
        ru: {
          title: 'Правдивые предложения: положительные или отрицательные',
          explanation:
            'Некоторые задания просят составить <b>правдивое предложение</b>. В таких заданиях грамматика может ' +
            'допускать и положительную, и отрицательную форму, но факты иногда оставляют только один разумный вариант.',
          table: {
            headers: ['Подсказка', 'Возможные ответы', 'Что решает?'],
            rows: [
              ['it / windy today', 'It\'s windy. / It isn\'t windy.', 'ситуация сегодня'],
              ['Brazil / a very big country', 'Brazil is a very big country.', 'общий факт'],
              ['I / hungry right now', 'I\'m hungry. / I\'m not hungry.', 'ваше состояние'],
            ],
          },
          notes: [
            'Внимательно читайте rubric: задания на правдивые предложения отличаются от заданий с одним ответом.',
            'Когда предложение про вас или про сегодня, часто возможны обе полярности.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise C — True sentences',
          instructions: 'Complete each prompt as a true sentence. Some items accept both positive and negative forms; others have only one sensible answer.',
          questions: [
            {
              id: 'u1-true-1',
              type: 'fill-blank',
              prompt: 'It ___ windy today.',
              translation: 'Составьте правдивое предложение о погоде сегодня.',
              correctAnswer: 'is',
              altAnswers: ["'s", "isn't", 'is not', "'s not"],
              explanation: 'Both positive and negative forms can be right here.',
            },
            {
              id: 'u1-true-2',
              type: 'fill-blank',
              prompt: 'My hands ___ cold.',
              translation: 'Составьте правдивое предложение про свои руки.',
              correctAnswer: 'are',
              altAnswers: ["aren't", 'are not'],
              explanation: 'This depends on your situation, so both polarities are possible.',
            },
            {
              id: 'u1-true-3',
              type: 'fill-blank',
              prompt: 'Brazil ___ a very big country.',
              translation: 'Бразилия — очень большая страна.',
              correctAnswer: 'is',
              explanation: 'This is a general fact, so only the positive form makes sense.',
            },
            {
              id: 'u1-true-4',
              type: 'fill-blank',
              prompt: 'Diamonds ___ cheap.',
              translation: 'Алмазы не дешёвые.',
              correctAnswer: "aren't",
              altAnswers: ['are not'],
              explanation: 'This is a general fact, so the negative answer is the sensible one.',
            },
            {
              id: 'u1-true-5',
              type: 'fill-blank',
              prompt: 'Toronto ___ in the US.',
              translation: 'Торонто не находится в США.',
              correctAnswer: "isn't",
              altAnswers: ['is not'],
              explanation: 'Toronto is in Canada, so the negative form is required.',
            },
            {
              id: 'u1-true-6',
              type: 'fill-blank',
              prompt: 'I ___ hungry right now.',
              translation: 'Составьте правдивое предложение о себе.',
              correctAnswer: "'m",
              altAnswers: ['am', "'m not", 'am not'],
              explanation: 'Both positive and negative answers are acceptable if they are true for you.',
            },
            {
              id: 'u1-true-7',
              type: 'fill-blank',
              prompt: 'I ___ a good swimmer.',
              translation: 'Составьте правдивое предложение о себе.',
              correctAnswer: "'m",
              altAnswers: ['am', "'m not", 'am not'],
              explanation: 'Both positive and negative answers are acceptable if they are true for you.',
            },
            {
              id: 'u1-true-8',
              type: 'fill-blank',
              prompt: 'I ___ interested in football.',
              translation: 'Составьте правдивое предложение о себе.',
              correctAnswer: "'m",
              altAnswers: ['am', "'m not", 'am not'],
              explanation: 'Both positive and negative answers are acceptable if they are true for you.',
            },
          ],
        },
        ru: {
          title: 'Упражнение C — Правдивые предложения',
          instructions: 'Дополните каждую подсказку как правдивое предложение. В одних пунктах подходят и положительная, и отрицательная форма, а в других разумен только один вариант.',
          questions: [
            {
              id: 'u1-true-1',
              type: 'fill-blank',
              prompt: 'It ___ windy today.',
              translation: 'Составьте правдивое предложение о погоде сегодня.',
              correctAnswer: 'is',
              altAnswers: ["'s", "isn't", 'is not', "'s not"],
              explanation: 'Здесь могут подойти и положительная, и отрицательная форма.',
            },
            {
              id: 'u1-true-2',
              type: 'fill-blank',
              prompt: 'My hands ___ cold.',
              translation: 'Составьте правдивое предложение про свои руки.',
              correctAnswer: 'are',
              altAnswers: ["aren't", 'are not'],
              explanation: 'Это зависит от вашей ситуации, поэтому возможны обе полярности.',
            },
            {
              id: 'u1-true-3',
              type: 'fill-blank',
              prompt: 'Brazil ___ a very big country.',
              translation: 'Бразилия — очень большая страна.',
              correctAnswer: 'is',
              explanation: 'Это общий факт, поэтому здесь подходит только положительная форма.',
            },
            {
              id: 'u1-true-4',
              type: 'fill-blank',
              prompt: 'Diamonds ___ cheap.',
              translation: 'Алмазы не дешёвые.',
              correctAnswer: "aren't",
              altAnswers: ['are not'],
              explanation: 'Это общий факт, поэтому разумен отрицательный ответ.',
            },
            {
              id: 'u1-true-5',
              type: 'fill-blank',
              prompt: 'Toronto ___ in the US.',
              translation: 'Торонто не находится в США.',
              correctAnswer: "isn't",
              altAnswers: ['is not'],
              explanation: 'Торонто находится в Канаде, поэтому нужна отрицательная форма.',
            },
            {
              id: 'u1-true-6',
              type: 'fill-blank',
              prompt: 'I ___ hungry right now.',
              translation: 'Составьте правдивое предложение о себе.',
              correctAnswer: "'m",
              altAnswers: ['am', "'m not", 'am not'],
              explanation: 'Подойдут и положительный, и отрицательный ответ, если они правдивы для вас.',
            },
            {
              id: 'u1-true-7',
              type: 'fill-blank',
              prompt: 'I ___ a good swimmer.',
              translation: 'Составьте правдивое предложение о себе.',
              correctAnswer: "'m",
              altAnswers: ['am', "'m not", 'am not'],
              explanation: 'Подойдут и положительный, и отрицательный ответ, если они правдивы для вас.',
            },
            {
              id: 'u1-true-8',
              type: 'fill-blank',
              prompt: 'I ___ interested in football.',
              translation: 'Составьте правдивое предложение о себе.',
              correctAnswer: "'m",
              altAnswers: ['am', "'m not", 'am not'],
              explanation: 'Подойдут и положительный, и отрицательный ответ, если они правдивы для вас.',
            },
          ],
        },
      },
    },

    // ─── Step 7: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-7-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — am / is / are',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q1',
              question: 'Which is correct?',
              options: ["I'm ready.", 'I are ready.', 'I is ready.'],
              correctIndex: 0,
              explanation: 'With "I" we use "am" → I\'m ready.',
            },
            {
              id: 'q2',
              question: 'Complete the sentence: "They ___ at home."',
              options: ["isn't", "aren't", 'am not'],
              correctIndex: 1,
              explanation: 'With "they" in the negative we use "aren\'t" / "are not".',
            },
            {
              id: 'q3',
              question: 'Choose the best short form for "That is my coat."',
              options: ["That's my coat.", "That're my coat.", "There's my coat."],
              correctIndex: 0,
              explanation: '"That is" → "That\'s".',
            },
            {
              id: 'q4',
              question: 'What fits here: "Look! There ___ your teacher."',
              options: ['am', 'is', 'are'],
              correctIndex: 1,
              explanation: 'After "there" with singular meaning, we use "is" → There\'s your teacher.',
            },
            {
              id: 'q5',
              question: 'Which sentence is NOT correct in standard English?',
              options: ["Here's your coffee.", "I'm not late.", "I amn't tired."],
              correctIndex: 2,
              explanation: '"I amn\'t" is not standard English. We say "I\'m not".',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — am / is / are',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q1',
              question: 'Какой вариант правильный?',
              options: ["I'm ready.", 'I are ready.', 'I is ready.'],
              correctIndex: 0,
              explanation: 'С "I" используем "am" → I\'m ready.',
            },
            {
              id: 'q2',
              question: 'Дополните предложение: "They ___ at home."',
              options: ["isn't", "aren't", 'am not'],
              correctIndex: 1,
              explanation: 'С "they" в отрицании используем "aren\'t" / "are not".',
            },
            {
              id: 'q3',
              question: 'Выберите лучшую краткую форму для "That is my coat."',
              options: ["That's my coat.", "That're my coat.", "There's my coat."],
              correctIndex: 0,
              explanation: '"That is" → "That\'s".',
            },
            {
              id: 'q4',
              question: 'Что подходит сюда: "Look! There ___ your teacher."',
              options: ['am', 'is', 'are'],
              correctIndex: 1,
              explanation: 'После "there" при единственном числе используем "is" → There\'s your teacher.',
            },
            {
              id: 'q5',
              question: 'Какое предложение НЕ является правильным в стандартном английском?',
              options: ["Here's your coffee.", "I'm not late.", "I amn't tired."],
              correctIndex: 2,
              explanation: '"I amn\'t" не считается стандартной формой. Говорим "I\'m not".',
            },
          ],
        },
      },
    },

    // ─── Step 8: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-8-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — am / is / are',
          points: [
            'Use <b>am</b> with I → I am / I\'m',
            'Use <b>is</b> with he, she, it → He is / He\'s',
            'Use <b>are</b> with we, you, they → They are / They\'re',
            'Negative: add <b>not</b> → isn\'t / aren\'t / I\'m not',
            'Some common short forms are <b>that\'s</b>, <b>there\'s</b> and <b>here\'s</b>',
            'Read the exercise type carefully: some tasks have one fixed answer, but personal or true-sentence tasks can allow more than one answer.',
            'Use short forms a lot in everyday English and informal writing.',
          ],
          nextUnit: 'Unit 2 — am/is/are (questions)',
        },
        ru: {
          title: 'Итоги — am / is / are',
          points: [
            'С I используем <b>am</b> → I am / I\'m',
            'С he, she, it используем <b>is</b> → He is / He\'s',
            'С we, you, they используем <b>are</b> → They are / They\'re',
            'Отрицание: добавляем <b>not</b> → isn\'t / aren\'t / I\'m not',
            'Частые краткие формы: <b>that\'s</b>, <b>there\'s</b> и <b>here\'s</b>',
            'Внимательно читайте тип упражнения: где-то есть один фиксированный ответ, а где-то допустимы разные правдивые варианты.',
            'Краткие формы очень часто используются в повседневной речи и неформальном письме.',
          ],
          nextUnit: 'Юнит 2 — am/is/are (вопросы)',
        },
      },
    },
  ],
};

export default unit1;
