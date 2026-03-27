import type { Unit } from '../../types/unit';

const PLACE_WORD_PATTERN = "[a-z0-9]+(?:[.'’-][a-z0-9]+)*(?:['’.])?";
const PLACE_PHRASE_PATTERN = `${PLACE_WORD_PATTERN}(?:\\s+${PLACE_WORD_PATTERN})*`;
const WAS_LOCATION_PATTERNS = [
  `^was\\s+(?:at|in|on|under|near|inside|outside|behind|beside|by)\\s+${PLACE_PHRASE_PATTERN}(?:[.!?])?$`,
  '^was\\s+(?:home|here|there|upstairs|downstairs|away|abroad|inside|outside)(?:[.!?])?$',
];

// Unit 10: was / were
// Based on Essential Grammar in Use by Raymond Murphy (Unit 10)
const unit10: Unit = {
  id: 'unit10',
  number: 10,
  title: {
    en: 'was / were',
    ru: 'was / were',
  },
  description: {
    en: 'Past simple of the verb "to be" — positive, negative and question forms.',
    ru: 'Прошедшее простое время глагола "to be" — утвердительная, отрицательная и вопросительная формы.',
  },
  steps: [
    {
      id: 'step10-1-positive',
      type: 'theory',
      left: {
        en: {
          title: 'From am/is/are to was/were',
          explanation:
            '<b>Was</b> and <b>were</b> are the past forms of <em>am / is / are</em>. ' +
            'Use <b>was</b> with I, he, she, it and <b>were</b> with we, you, they when you talk about an earlier time.',
          table: {
            headers: ['Present', 'Past'],
            rows: [
              ['am / is', 'was'],
              ['are', 'were'],
            ],
          },
          notes: [
            'Use am/is/are for now and was/were for yesterday, last night, last week, and other past time expressions.',
            'Positive past forms do not contract: say "I was" and "they were".',
          ],
        },
        ru: {
          title: 'От am/is/are к was/were',
          explanation:
            '<b>Was</b> и <b>were</b> — это формы прошедшего времени для <em>am / is / are</em>. ' +
            'Используйте <b>was</b> с I, he, she, it, а <b>were</b> с we, you, they, когда говорите о прошлом.',
          table: {
            headers: ['Настоящее время', 'Прошедшее время'],
            rows: [
              ['am / is', 'was'],
              ['are', 'were'],
            ],
          },
          notes: [
            'Am/is/are говорят о настоящем, а was/were — о вчера, прошлой ночью, на прошлой неделе и другом прошедшем времени.',
            'В утвердительных предложениях past forms не сокращаются: говорим "I was" и "they were".',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — present and past be',
          intro: 'Compare a present sentence with a past sentence.',
          items: [
            { english: 'Mia is at work now.', russian: 'Сейчас Мия на работе.', highlight: 'is' },
            { english: 'At midnight she was in bed.', russian: 'В полночь она была в постели.', highlight: 'was' },
            { english: 'The weather is good today.', russian: 'Сегодня погода хорошая.', highlight: 'is' },
            { english: 'The weather was bad last weekend.', russian: 'В прошлые выходные погода была плохой.', highlight: 'was' },
            { english: 'You are late again.', russian: 'Ты снова опоздал(а).', highlight: 'are' },
            { english: 'You were late yesterday too.', russian: 'Вчера ты тоже опоздал(а).', highlight: 'were' },
            { english: 'Where are the keys now?', russian: 'Где сейчас ключи?', highlight: 'are' },
            { english: 'Where were the keys this morning?', russian: 'Где ключи были сегодня утром?', highlight: 'were' },
          ],
        },
        ru: {
          title: 'Примеры — be в настоящем и прошедшем',
          intro: 'Сравните предложение о настоящем с предложением о прошлом.',
          items: [
            { english: 'Mia is at work now.', russian: 'Сейчас Мия на работе.', highlight: 'is' },
            { english: 'At midnight she was in bed.', russian: 'В полночь она была в постели.', highlight: 'was' },
            { english: 'The weather is good today.', russian: 'Сегодня погода хорошая.', highlight: 'is' },
            { english: 'The weather was bad last weekend.', russian: 'В прошлые выходные погода была плохой.', highlight: 'was' },
            { english: 'You are late again.', russian: 'Ты снова опоздал(а).', highlight: 'are' },
            { english: 'You were late yesterday too.', russian: 'Вчера ты тоже опоздал(а).', highlight: 'were' },
            { english: 'Where are the keys now?', russian: 'Где сейчас ключи?', highlight: 'are' },
            { english: 'Where were the keys this morning?', russian: 'Где ключи были сегодня утром?', highlight: 'were' },
          ],
        },
      },
    },

    {
      id: 'step10-2-negative',
      type: 'examples',
      left: {
        en: {
          title: 'Negative forms — wasn\'t / weren\'t',
          explanation:
            'To make a negative sentence, add <b>not</b> after was / were. ' +
            'In everyday speech we often use the short forms <b>wasn\'t</b> and <b>weren\'t</b>.',
          table: {
            headers: ['Full form', 'Short form'],
            rows: [
              ['I / he / she / it was not', "wasn't"],
              ['we / you / they were not', "weren't"],
            ],
          },
          notes: [
            'Use wasn\'t / weren\'t for past negatives: "She wasn\'t at home."',
            'Full forms are also correct: "was not" / "were not".',
          ],
        },
        ru: {
          title: 'Отрицательные формы — wasn\'t / weren\'t',
          explanation:
            'Чтобы сделать отрицание, поставьте <b>not</b> после was / were. ' +
            'В речи очень часто используются краткие формы <b>wasn\'t</b> и <b>weren\'t</b>.',
          table: {
            headers: ['Полная форма', 'Краткая форма'],
            rows: [
              ['I / he / she / it was not', "wasn't"],
              ['we / you / they were not', "weren't"],
            ],
          },
          notes: [
            'Wasn\'t / weren\'t нужны для отрицания в прошлом: "She wasn\'t at home."',
            'Полные формы "was not" и "were not" тоже грамматически правильны.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — negative sentences',
          intro: 'Notice how the negative form changes the meaning.',
          items: [
            { english: "I was tired, but I wasn't sleepy.", russian: 'Я устал(а), но не хотел(а) спать.', highlight: "wasn't" },
            { english: "Nora wasn't at the meeting yesterday.", russian: 'Норы не было на встрече вчера.', highlight: "wasn't" },
            { english: "The hotel was comfortable, but it wasn't expensive.", russian: 'Отель был удобным, но не дорогим.', highlight: "wasn't" },
            { english: "We weren't ready for the test.", russian: 'Мы не были готовы к тесту.', highlight: "weren't" },
            { english: "They weren't at home when I called.", russian: 'Когда я позвонил(а), их не было дома.', highlight: "weren't" },
            { english: "The shops weren't open on Sunday.", russian: 'В воскресенье магазины были закрыты.', highlight: "weren't" },
          ],
        },
        ru: {
          title: 'Примеры — отрицательные предложения',
          intro: 'Посмотрите, как отрицательная форма меняет смысл.',
          items: [
            { english: "I was tired, but I wasn't sleepy.", russian: 'Я устал(а), но спать не хотел(а).', highlight: "wasn't" },
            { english: "Nora wasn't at the meeting yesterday.", russian: 'Норы не было на встрече вчера.', highlight: "wasn't" },
            { english: "The hotel was comfortable, but it wasn't expensive.", russian: 'Отель был удобным, но не дорогим.', highlight: "wasn't" },
            { english: "We weren't ready for the test.", russian: 'Мы не были готовы к тесту.', highlight: "weren't" },
            { english: "They weren't at home when I called.", russian: 'Когда я позвонил(а), их не было дома.', highlight: "weren't" },
            { english: "The shops weren't open on Sunday.", russian: 'В воскресенье магазины были закрыты.', highlight: "weren't" },
          ],
        },
      },
    },

    {
      id: 'step10-3-questions',
      type: 'theory',
      left: {
        en: {
          title: 'Questions and short answers',
          explanation:
            'To make a question, put <b>was / were before the subject</b>. ' +
            'Short answers repeat the same verb: <b>Yes, I was.</b> / <b>No, they weren\'t.</b>',
          table: {
            headers: ['Statement', 'Question', 'Short answer'],
            rows: [
              ['He was late.', 'Was he late?', 'Yes, he was. / No, he wasn\'t.'],
              ['They were here.', 'Were they here?', 'Yes, they were. / No, they weren\'t.'],
            ],
          },
          notes: [
            'Do not use contractions in positive short answers: say "Yes, she was."',
            'With question words, put the question word first: Where were you? Why was she upset?',
          ],
        },
        ru: {
          title: 'Вопросы и краткие ответы',
          explanation:
            'Чтобы задать вопрос, поставьте <b>was / were перед подлежащим</b>. ' +
            'В кратком ответе повторяется тот же глагол: <b>Yes, I was.</b> / <b>No, they weren\'t.</b>',
          table: {
            headers: ['Утверждение', 'Вопрос', 'Краткий ответ'],
            rows: [
              ['He was late.', 'Was he late?', 'Yes, he was. / No, he wasn\'t.'],
              ['They were here.', 'Were they here?', 'Yes, they were. / No, they weren\'t.'],
            ],
          },
          notes: [
            'В утвердительных кратких ответах не используйте сокращения: говорим "Yes, she was."',
            'Если есть вопросительное слово, оно стоит первым: Where were you? Why was she upset?',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — questions and short answers',
          items: [
            { english: 'Were you late? — No, I wasn\'t.', russian: 'Ты опоздал(а)? — Нет, не опоздал(а).' },
            { english: 'Was Tom at work yesterday? — Yes, he was.', russian: 'Том был вчера на работе? — Да, был.' },
            { english: 'Were Sara and Ben at the party? — No, they weren\'t.', russian: 'Сара и Бен были на вечеринке? — Нет, не были.' },
            { english: 'Was it a good film? — Yes, it was.', russian: 'Это был хороший фильм? — Да, был.' },
            { english: 'Where were you last night?', russian: 'Где ты был(а) прошлой ночью?' },
            { english: 'Why was she so upset?', russian: 'Почему она была так расстроена?' },
          ],
        },
        ru: {
          title: 'Примеры — вопросы и краткие ответы',
          items: [
            { english: 'Were you late? — No, I wasn\'t.', russian: 'Ты опоздал(а)? — Нет, не опоздал(а).' },
            { english: 'Was Tom at work yesterday? — Yes, he was.', russian: 'Том был вчера на работе? — Да, был.' },
            { english: 'Were Sara and Ben at the party? — No, they weren\'t.', russian: 'Сара и Бен были на вечеринке? — Нет, не были.' },
            { english: 'Was it a good film? — Yes, it was.', russian: 'Это был хороший фильм? — Да, был.' },
            { english: 'Where were you last night?', russian: 'Где ты был(а) прошлой ночью?' },
            { english: 'Why was she so upset?', russian: 'Почему она была так расстроена?' },
          ],
        },
      },
    },

    {
      id: 'step10-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Reference for the exercises',
          explanation:
            'These practice tasks move between present be, past be, negatives, and question word order. Keep each exercise type separate.',
          table: {
            headers: ['Subject', 'Present', 'Past', 'Negative past', 'Question past'],
            rows: [
              ['I / he / she / it', 'am / is', 'was', "wasn't", 'Was ... ?'],
              ['we / you / they', 'are', 'were', "weren't", 'Were ... ?'],
            ],
          },
          notes: [
            'Exercise 1 uses was/were + place for picture-style location answers.',
            'In Exercise 4, put was/were before the subject to build the question.',
          ],
        },
        ru: {
          title: 'Справка к упражнениям',
          explanation:
            'Эти задания чередуют be в настоящем и прошлом, отрицание и порядок слов в вопросе. Сохраняйте тип каждого упражнения.',
          table: {
            headers: ['Подлежащее', 'Настоящее', 'Прошедшее', 'Отрицание в прошедшем', 'Вопрос в прошедшем'],
            rows: [
              ['I / he / she / it', 'am / is', 'was', "wasn't", 'Was ... ?'],
              ['we / you / they', 'are', 'were', "weren't", 'Were ... ?'],
            ],
          },
          notes: [
            'В упражнении 1 ответ строится как was/were + место.',
            'В упражнении 4 ставьте was/were перед подлежащим, чтобы собрать вопрос.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercises 1-4 — was / were in context',
          instructions:
            'Keep the source exercise types separate: picture locations, present-or-past be choice, positive-or-negative completion, and question word order.',
          sections: [
            {
              id: 'u10-ex1-locations-en',
              title: 'Exercise 1 — Write where each person was',
              instructions: 'Use the visual clue and complete the sentence with was/were + place. The last item is about you.',
              examples: [
                {
                  cue: 'Picture 1',
                  answer: 'Leo was in bed.',
                  note: 'Model item.',
                },
              ],
              questions: [
                {
                  id: 'u10-ex1-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🎬',
                    title: 'Cinema seats',
                    description: 'Two friends are sitting in dark seats with popcorn.',
                  },
                  cue: 'Picture 2',
                  prompt: 'Maya and Dan ___.',
                  translation: 'Майя и Дэн были в кино.',
                  correctAnswer: 'were at the cinema',
                  altAnswers: ['were in the cinema'],
                  explanation: 'Use were for two people. Both at the cinema and in the cinema work here.',
                },
                {
                  id: 'u10-ex1-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🚉',
                    title: 'Station platform',
                    description: 'A woman is waiting with a suitcase beside the tracks.',
                  },
                  cue: 'Picture 3',
                  prompt: 'Ella ___.',
                  translation: 'Элла была на станции.',
                  correctAnswer: 'was at the station',
                  explanation: 'A station is treated as a place, so use was at the station.',
                },
                {
                  id: 'u10-ex1-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🍽️',
                    title: 'Dinner out',
                    description: 'A married couple are eating at a table in a restaurant.',
                  },
                  cue: 'Picture 4',
                  prompt: 'Mr and Mrs Green ___.',
                  translation: 'Мистер и миссис Грин были в ресторане.',
                  correctAnswer: 'were at a restaurant',
                  altAnswers: ['were in a restaurant'],
                  explanation: 'Use were with two people. At a restaurant and in a restaurant are both natural.',
                },
                {
                  id: 'u10-ex1-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🏖️',
                    title: 'By the sea',
                    description: 'A boy is sitting on the sand with a towel and a bag.',
                  },
                  cue: 'Picture 5',
                  prompt: 'Noah ___.',
                  translation: 'Ноа был на пляже.',
                  correctAnswer: 'was at the beach',
                  altAnswers: ['was on the beach', 'was at the seaside'],
                  explanation: 'Several place phrases are natural here, but the sentence must stay in the past.',
                },
                {
                  id: 'u10-ex1-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  answerMode: 'example',
                  cue: 'And you? Yesterday at three o\'clock, ...',
                  prompt: 'I ___.',
                  translation: 'Напишите одно правдивое предложение о том, где вы были вчера в три часа.',
                  correctAnswer: 'was at work',
                  acceptedPatterns: WAS_LOCATION_PATTERNS,
                  explanation: 'Use the frame I was ... and finish it with your real place.',
                },
              ],
            },
            {
              id: 'u10-ex2-present-past-en',
              title: 'Exercise 2 — Choose am/is/are or was/were',
              instructions: 'Choose the form of be that fits the time meaning: now/today or yesterday/last week.',
              examples: [
                {
                  cue: '1',
                  answer: 'Last year Lara was 24, so she is 25 now.',
                  note: 'Model item.',
                },
              ],
              questions: [
                {
                  id: 'u10-ex2-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'Today the cafes ___ busy, but on Monday they ___ almost empty.',
                  translation: 'Сегодня кафе оживлённые, а в понедельник они были почти пустыми.',
                  correctAnswer: 'are ... were',
                  blankAnswers: [
                    { correctAnswer: 'are' },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'Today gives a present form; on Monday needs a past form.',
                },
                {
                  id: 'u10-ex2-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'I ___ thirsty now. Can I have some water?',
                  translation: 'Я сейчас хочу пить. Можно воды?',
                  correctAnswer: 'am',
                  altAnswers: ["'m"],
                  explanation: 'Now shows a present situation, so use am.',
                },
                {
                  id: 'u10-ex2-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: 'I feel better this morning, but I ___ exhausted yesterday evening.',
                  translation: 'Сегодня утром мне лучше, но вчера вечером я был(а) очень уставшим(ей).',
                  correctAnswer: 'was',
                  explanation: 'Yesterday evening needs the past form was.',
                },
                {
                  id: 'u10-ex2-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'Where ___ you at two o\'clock yesterday afternoon?',
                  translation: 'Где ты был(а) вчера в два часа дня?',
                  correctAnswer: 'were',
                  explanation: 'The question is about a past time, so use were.',
                },
                {
                  id: 'u10-ex2-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'Don\'t buy those tickets. They ___ too expensive.',
                  translation: 'Не покупай эти билеты. Они слишком дорогие.',
                  correctAnswer: 'are',
                  altAnswers: ["'re"],
                  explanation: 'This sentence is about now, so use the present form are.',
                },
                {
                  id: 'u10-ex2-7',
                  displayNumber: '7',
                  type: 'fill-blank',
                  prompt: 'I like your new coat. ___ it expensive?',
                  translation: 'Мне нравится твоё новое пальто. Оно было дорогим?',
                  correctAnswer: 'Was',
                  explanation: 'The question asks about the time of buying, so it uses past was.',
                },
                {
                  id: 'u10-ex2-8',
                  displayNumber: '8',
                  type: 'fill-blank',
                  prompt: 'This time last month we ___ in Rome.',
                  translation: 'В это время в прошлом месяце мы были в Риме.',
                  correctAnswer: 'were',
                  explanation: 'Last month shows past time, so use were.',
                },
                {
                  id: 'u10-ex2-9',
                  displayNumber: '9',
                  type: 'fill-blank',
                  prompt: '"Where ___ Ava and Ben?" — "I don\'t know. They ___ here ten minutes ago."',
                  translation: '«Где Ава и Бен?» — «Не знаю. Десять минут назад они были здесь».',
                  correctAnswer: 'are ... were',
                  blankAnswers: [
                    { correctAnswer: 'are' },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'The question is about now, but ten minutes ago is in the past.',
                },
              ],
            },
            {
              id: 'u10-ex3-positive-negative-en',
              title: 'Exercise 3 — Choose was/were or wasn\'t/weren\'t',
              instructions: 'Complete each sentence with a positive or negative past form of be.',
              examples: [
                {
                  cue: '1',
                  answer: "We weren't happy with the hotel. Our room was tiny and it wasn't clean.",
                  note: 'Model item.',
                },
              ],
              questions: [
                {
                  id: 'u10-ex3-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'Olivia ___ at the office yesterday because she ___ ill.',
                  translation: 'Оливии вчера не было в офисе, потому что она была больна.',
                  correctAnswer: "wasn't ... was",
                  blankAnswers: [
                    { correctAnswer: "wasn't", altAnswers: ['was not'] },
                    { correctAnswer: 'was' },
                  ],
                  explanation: 'The first part is negative, but the reason clause is positive.',
                },
                {
                  id: 'u10-ex3-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'Saturday ___ a public holiday, so the banks ___ closed.',
                  translation: 'Суббота была выходным днём, поэтому банки были закрыты.',
                  correctAnswer: 'was ... were',
                  blankAnswers: [
                    { correctAnswer: 'was' },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'Use was with Saturday and were with the plural noun banks.',
                },
                {
                  id: 'u10-ex3-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: '"___ Nina and Omar at the concert?" — "Nina ___ there, but Omar ___."',
                  translation: '«Нина и Омар были на концерте?» — «Нина была там, а Омара не было».',
                  correctAnswer: "Were ... was ... wasn't",
                  blankAnswers: [
                    { correctAnswer: 'Were' },
                    { correctAnswer: 'was' },
                    { correctAnswer: "wasn't", altAnswers: ['was not'] },
                  ],
                  explanation: 'The question starts with Were, then the reply mixes one positive and one negative answer.',
                },
                {
                  id: 'u10-ex3-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'Where are my glasses? They ___ on the table this morning, but they are not there now.',
                  translation: 'Где мои очки? Утром они были на столе, но сейчас их там нет.',
                  correctAnswer: 'were',
                  explanation: 'This morning is a past time, so use were.',
                },
                {
                  id: 'u10-ex3-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'You ___ at home last night. Where ___ you?',
                  translation: 'Тебя вчера вечером не было дома. Где ты был(а)?',
                  correctAnswer: "weren't ... were",
                  blankAnswers: [
                    { correctAnswer: "weren't", altAnswers: ['were not'] },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'The first blank is a negative past form; the second is the question form.',
                },
              ],
            },
            {
              id: 'u10-ex4-word-order-en',
              title: 'Exercise 4 — Put the words in the right order',
              instructions: 'Build complete questions with was/were. Use the answer clue to check the meaning.',
              examples: [
                {
                  cue: '(late / you / this morning / why?) | Answer clue: "The buses were slow."',
                  answer: 'Why were you late this morning',
                  note: 'Model item.',
                },
              ],
              questions: [
                {
                  id: 'u10-ex4-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  cue: '(difficult / the interview?) | Answer clue: "No, it was easy."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Собеседование было трудным?»',
                  correctAnswer: 'Was the interview difficult',
                  explanation: 'Put was before the subject: Was the interview difficult?',
                },
                {
                  id: 'u10-ex4-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  cue: '(last weekend / where / your parents?) | Answer clue: "They were in the mountains."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Где были твои родители в прошлые выходные?»',
                  correctAnswer: 'Where were your parents last weekend',
                  explanation: 'With where-questions, keep where first and were before the subject.',
                },
                {
                  id: 'u10-ex4-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  cue: '(your new bike / how much?) | Answer clue: "Three hundred euros."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Сколько стоил твой новый велосипед?»',
                  correctAnswer: 'How much was your new bike',
                  explanation: 'How much comes first, then was, then the subject.',
                },
                {
                  id: 'u10-ex4-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  cue: '(upset / you / yesterday / why?) | Answer clue: "Because I missed the train."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Почему ты был(а) расстроен(а) вчера?»',
                  correctAnswer: 'Why were you upset yesterday',
                  explanation: 'Why goes first; were comes before you.',
                },
                {
                  id: 'u10-ex4-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  cue: '(warm / the water / on Sunday?) | Answer clue: "Yes, it was lovely."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Вода была тёплой в воскресенье?»',
                  correctAnswer: 'Was the water warm on Sunday',
                  explanation: 'This is a yes/no question, so start with Was.',
                },
              ],
            },
          ],
        },
        ru: {
          title: 'Упражнения 1-4 — was / were в контексте',
          instructions:
            'Сохраняйте четыре разных типа заданий из источника: места по картинкам, выбор be в настоящем или прошлом, положительные и отрицательные формы, а также порядок слов в вопросах.',
          sections: [
            {
              id: 'u10-ex1-locations-ru',
              title: 'Упражнение 1 — Напишите, где были люди',
              instructions: 'Смотрите на визуальную подсказку и дополняйте предложение с was/were + место. Последний пункт — про вас.',
              examples: [
                {
                  cue: 'Picture 1',
                  answer: 'Leo was in bed.',
                  note: 'Образец',
                },
              ],
              questions: [
                {
                  id: 'u10-ex1-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🎬',
                    title: 'Cinema seats',
                    description: 'Two friends are sitting in dark seats with popcorn.',
                  },
                  cue: 'Picture 2',
                  prompt: 'Maya and Dan ___.',
                  translation: 'Майя и Дэн были в кино.',
                  correctAnswer: 'were at the cinema',
                  altAnswers: ['were in the cinema'],
                  explanation: 'С двумя людьми нужен were. Здесь естественны и at the cinema, и in the cinema.',
                },
                {
                  id: 'u10-ex1-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🚉',
                    title: 'Station platform',
                    description: 'A woman is waiting with a suitcase beside the tracks.',
                  },
                  cue: 'Picture 3',
                  prompt: 'Ella ___.',
                  translation: 'Элла была на станции.',
                  correctAnswer: 'was at the station',
                  explanation: 'Это место, поэтому используем was at the station.',
                },
                {
                  id: 'u10-ex1-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🍽️',
                    title: 'Dinner out',
                    description: 'A married couple are eating at a table in a restaurant.',
                  },
                  cue: 'Picture 4',
                  prompt: 'Mr and Mrs Green ___.',
                  translation: 'Мистер и миссис Грин были в ресторане.',
                  correctAnswer: 'were at a restaurant',
                  altAnswers: ['were in a restaurant'],
                  explanation: 'С двумя людьми нужен were. Оба варианта места звучат естественно.',
                },
                {
                  id: 'u10-ex1-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🏖️',
                    title: 'By the sea',
                    description: 'A boy is sitting on the sand with a towel and a bag.',
                  },
                  cue: 'Picture 5',
                  prompt: 'Noah ___.',
                  translation: 'Ноа был на пляже.',
                  correctAnswer: 'was at the beach',
                  altAnswers: ['was on the beach', 'was at the seaside'],
                  explanation: 'Здесь подходят несколько фраз места, но форма должна оставаться в прошлом.',
                },
                {
                  id: 'u10-ex1-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  answerMode: 'example',
                  cue: 'And you? Yesterday at three o\'clock, ...',
                  prompt: 'I ___.',
                  translation: 'Напишите одно правдивое предложение о том, где вы были вчера в три часа.',
                  correctAnswer: 'was at work',
                  acceptedPatterns: WAS_LOCATION_PATTERNS,
                  explanation: 'Используйте рамку I was ... и дополните её своим местом.',
                },
              ],
            },
            {
              id: 'u10-ex2-present-past-ru',
              title: 'Упражнение 2 — Выберите am/is/are или was/were',
              instructions: 'Подставьте форму be по смыслу времени: now/today или yesterday/last week.',
              examples: [
                {
                  cue: '1',
                  answer: 'Last year Lara was 24, so she is 25 now.',
                  note: 'Образец',
                },
              ],
              questions: [
                {
                  id: 'u10-ex2-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'Today the cafes ___ busy, but on Monday they ___ almost empty.',
                  translation: 'Сегодня кафе оживлённые, а в понедельник они были почти пустыми.',
                  correctAnswer: 'are ... were',
                  blankAnswers: [
                    { correctAnswer: 'are' },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'Today требует настоящего времени, а on Monday — прошедшего.',
                },
                {
                  id: 'u10-ex2-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'I ___ thirsty now. Can I have some water?',
                  translation: 'Я сейчас хочу пить. Можно воды?',
                  correctAnswer: 'am',
                  altAnswers: ["'m"],
                  explanation: 'Now показывает настоящее, поэтому нужна форма am.',
                },
                {
                  id: 'u10-ex2-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: 'I feel better this morning, but I ___ exhausted yesterday evening.',
                  translation: 'Сегодня утром мне лучше, но вчера вечером я был(а) очень уставшим(ей).',
                  correctAnswer: 'was',
                  explanation: 'Yesterday evening требует прошедшей формы was.',
                },
                {
                  id: 'u10-ex2-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'Where ___ you at two o\'clock yesterday afternoon?',
                  translation: 'Где ты был(а) вчера в два часа дня?',
                  correctAnswer: 'were',
                  explanation: 'Это вопрос о прошлом моменте, поэтому используем were.',
                },
                {
                  id: 'u10-ex2-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'Don\'t buy those tickets. They ___ too expensive.',
                  translation: 'Не покупай эти билеты. Они слишком дорогие.',
                  correctAnswer: 'are',
                  altAnswers: ["'re"],
                  explanation: 'Речь идёт о ситуации сейчас, поэтому нужна форма are.',
                },
                {
                  id: 'u10-ex2-7',
                  displayNumber: '7',
                  type: 'fill-blank',
                  prompt: 'I like your new coat. ___ it expensive?',
                  translation: 'Мне нравится твоё новое пальто. Оно было дорогим?',
                  correctAnswer: 'Was',
                  explanation: 'Вопрос относится ко времени покупки, поэтому нужна форма was.',
                },
                {
                  id: 'u10-ex2-8',
                  displayNumber: '8',
                  type: 'fill-blank',
                  prompt: 'This time last month we ___ in Rome.',
                  translation: 'В это время в прошлом месяце мы были в Риме.',
                  correctAnswer: 'were',
                  explanation: 'Last month указывает на прошедшее время, поэтому используем were.',
                },
                {
                  id: 'u10-ex2-9',
                  displayNumber: '9',
                  type: 'fill-blank',
                  prompt: '"Where ___ Ava and Ben?" — "I don\'t know. They ___ here ten minutes ago."',
                  translation: '«Где Ава и Бен?» — «Не знаю. Десять минут назад они были здесь».',
                  correctAnswer: 'are ... were',
                  blankAnswers: [
                    { correctAnswer: 'are' },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'Первый пропуск про сейчас, а ten minutes ago — про прошлое.',
                },
              ],
            },
            {
              id: 'u10-ex3-positive-negative-ru',
              title: 'Упражнение 3 — Выберите was/were или wasn\'t/weren\'t',
              instructions: 'Дополните каждое предложение утвердительной или отрицательной формой be в прошедшем времени.',
              examples: [
                {
                  cue: '1',
                  answer: "We weren't happy with the hotel. Our room was tiny and it wasn't clean.",
                  note: 'Образец',
                },
              ],
              questions: [
                {
                  id: 'u10-ex3-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'Olivia ___ at the office yesterday because she ___ ill.',
                  translation: 'Оливии вчера не было в офисе, потому что она была больна.',
                  correctAnswer: "wasn't ... was",
                  blankAnswers: [
                    { correctAnswer: "wasn't", altAnswers: ['was not'] },
                    { correctAnswer: 'was' },
                  ],
                  explanation: 'Первая часть отрицательная, а причина — утвердительная.',
                },
                {
                  id: 'u10-ex3-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'Saturday ___ a public holiday, so the banks ___ closed.',
                  translation: 'Суббота была выходным днём, поэтому банки были закрыты.',
                  correctAnswer: 'was ... were',
                  blankAnswers: [
                    { correctAnswer: 'was' },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'С Saturday используем was, а с banks — were.',
                },
                {
                  id: 'u10-ex3-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: '"___ Nina and Omar at the concert?" — "Nina ___ there, but Omar ___."',
                  translation: '«Нина и Омар были на концерте?» — «Нина была там, а Омара не было».',
                  correctAnswer: "Were ... was ... wasn't",
                  blankAnswers: [
                    { correctAnswer: 'Were' },
                    { correctAnswer: 'was' },
                    { correctAnswer: "wasn't", altAnswers: ['was not'] },
                  ],
                  explanation: 'Вопрос начинается с Were, а в ответе одна часть утвердительная, другая отрицательная.',
                },
                {
                  id: 'u10-ex3-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'Where are my glasses? They ___ on the table this morning, but they are not there now.',
                  translation: 'Где мои очки? Утром они были на столе, но сейчас их там нет.',
                  correctAnswer: 'were',
                  explanation: 'This morning — это прошедшее время, поэтому нужна форма were.',
                },
                {
                  id: 'u10-ex3-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'You ___ at home last night. Where ___ you?',
                  translation: 'Тебя вчера вечером не было дома. Где ты был(а)?',
                  correctAnswer: "weren't ... were",
                  blankAnswers: [
                    { correctAnswer: "weren't", altAnswers: ['were not'] },
                    { correctAnswer: 'were' },
                  ],
                  explanation: 'Первый пропуск — отрицательная форма в прошедшем, второй — вопросительная.',
                },
              ],
            },
            {
              id: 'u10-ex4-word-order-ru',
              title: 'Упражнение 4 — Поставьте слова в правильном порядке',
              instructions: 'Соберите полные вопросы с was/were. Подсказка-ответ помогает проверить смысл.',
              examples: [
                {
                  cue: '(late / you / this morning / why?) | Answer clue: "The buses were slow."',
                  answer: 'Why were you late this morning',
                  note: 'Образец',
                },
              ],
              questions: [
                {
                  id: 'u10-ex4-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  cue: '(difficult / the interview?) | Answer clue: "No, it was easy."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Собеседование было трудным?»',
                  correctAnswer: 'Was the interview difficult',
                  explanation: 'Ставьте was перед подлежащим: Was the interview difficult?',
                },
                {
                  id: 'u10-ex4-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  cue: '(last weekend / where / your parents?) | Answer clue: "They were in the mountains."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Где были твои родители в прошлые выходные?»',
                  correctAnswer: 'Where were your parents last weekend',
                  explanation: 'В вопросе с where сначала идёт where, потом were перед подлежащим.',
                },
                {
                  id: 'u10-ex4-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  cue: '(your new bike / how much?) | Answer clue: "Three hundred euros."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Сколько стоил твой новый велосипед?»',
                  correctAnswer: 'How much was your new bike',
                  explanation: 'How much стоит первым, затем was, потом подлежащее.',
                },
                {
                  id: 'u10-ex4-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  cue: '(upset / you / yesterday / why?) | Answer clue: "Because I missed the train."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Почему ты был(а) расстроен(а) вчера?»',
                  correctAnswer: 'Why were you upset yesterday',
                  explanation: 'Why идёт первым, а were ставится перед you.',
                },
                {
                  id: 'u10-ex4-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  cue: '(warm / the water / on Sunday?) | Answer clue: "Yes, it was lovely."',
                  prompt: '___ ?',
                  translation: 'Соберите вопрос: «Вода была тёплой в воскресенье?»',
                  correctAnswer: 'Was the water warm on Sunday',
                  explanation: 'Это вопрос да/нет, поэтому начинаем с Was.',
                },
              ],
            },
          ],
        },
      },
    },

    {
      id: 'step10-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — was / were',
          description: 'Choose the correct answer in each sentence.',
          questions: [
            {
              id: 'q10-1',
              question: 'Which sentence is correct?',
              options: [
                'She were a nurse.',
                'She was a nurse.',
                'She be a nurse.',
              ],
              correctIndex: 1,
              explanation: 'With she, use was for the past.',
            },
            {
              id: 'q10-2',
              question: 'Choose the correct negative form: "They ___ happy."',
              options: ["wasn't", "weren't", 'didn\'t be'],
              correctIndex: 1,
              explanation: 'With they, use were, so the negative is weren\'t.',
            },
            {
              id: 'q10-3',
              question: 'Which question is correct?',
              options: [
                'Were he at home?',
                'Was he at home?',
                'Did he was at home?',
              ],
              correctIndex: 1,
              explanation: 'Questions with be use was/were before the subject.',
            },
            {
              id: 'q10-4',
              question: 'Choose the correct pair: "Today they ___ busy, but yesterday they ___ tired."',
              options: [
                'were / are',
                'are / were',
                'is / was',
              ],
              correctIndex: 1,
              explanation: 'Today needs are; yesterday needs were.',
            },
            {
              id: 'q10-5',
              question: 'What is the correct short answer to "Were you at school yesterday?"',
              options: ['Yes, I were.', 'Yes, I was.', "Yes, I'm."],
              correctIndex: 1,
              explanation: 'Positive short answers do not contract: Yes, I was.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — was / were',
          description: 'Выберите правильный ответ в каждом пункте.',
          questions: [
            {
              id: 'q10-1',
              question: 'Какое предложение правильное?',
              options: [
                'She were a nurse.',
                'She was a nurse.',
                'She be a nurse.',
              ],
              correctIndex: 1,
              explanation: 'С she в прошедшем времени используем was.',
            },
            {
              id: 'q10-2',
              question: 'Выберите правильную отрицательную форму: "They ___ happy."',
              options: ["wasn't", "weren't", 'didn\'t be'],
              correctIndex: 1,
              explanation: 'С they используется were, поэтому отрицание — weren\'t.',
            },
            {
              id: 'q10-3',
              question: 'Какой вопрос правильный?',
              options: [
                'Were he at home?',
                'Was he at home?',
                'Did he was at home?',
              ],
              correctIndex: 1,
              explanation: 'Вопросы с be строятся через was/were перед подлежащим.',
            },
            {
              id: 'q10-4',
              question: 'Выберите правильную пару: "Today they ___ busy, but yesterday they ___ tired."',
              options: [
                'were / are',
                'are / were',
                'is / was',
              ],
              correctIndex: 1,
              explanation: 'Today требует are, а yesterday — were.',
            },
            {
              id: 'q10-5',
              question: 'Какой краткий ответ правильный для "Were you at school yesterday?"',
              options: ['Yes, I were.', 'Yes, I was.', "Yes, I'm."],
              correctIndex: 1,
              explanation: 'В утвердительном кратком ответе сокращение не используется: Yes, I was.',
            },
          ],
        },
      },
    },

    {
      id: 'step10-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — was / were',
          points: [
            '<b>am / is</b> change to <b>was</b> in the past, and <b>are</b> changes to <b>were</b>',
            'Use <b>was / were</b> for past states, feelings, and places',
            'Negative forms: <b>wasn\'t</b> / <b>weren\'t</b>, but full forms <b>was not</b> / <b>were not</b> are also possible',
            'Questions put <b>was / were before the subject</b>: Was she there? Were they late?',
            'Positive short answers do not contract: <b>Yes, I was.</b> / <b>Yes, they were.</b>',
          ],
          nextUnit: 'Unit 11 — worked / got / went (past simple)',
        },
        ru: {
          title: 'Итоги — was / were',
          points: [
            'В прошлом <b>am / is</b> меняются на <b>was</b>, а <b>are</b> — на <b>were</b>',
            'Используйте <b>was / were</b> для состояний, чувств и мест в прошлом',
            'Отрицательные формы: <b>wasn\'t</b> / <b>weren\'t</b>, но возможны и полные формы <b>was not</b> / <b>were not</b>',
            'В вопросах <b>was / were ставятся перед подлежащим</b>: Was she there? Were they late?',
            'В утвердительных кратких ответах сокращений нет: <b>Yes, I was.</b> / <b>Yes, they were.</b>',
          ],
          nextUnit: 'Юнит 11 — worked / got / went (прошедшее простое)',
        },
      },
    },
  ],
};

export default unit10;
