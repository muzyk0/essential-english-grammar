import type { Unit } from '../../types/unit';

const unit1: Unit = {
  id: 'unit1',
  number: 1,
  title: {
    en: 'am / is / are',
    ru: 'am / is / are',
  },
  description: {
    en: 'Present forms of "to be": personal information, positive and negative sentences, and common short forms.',
    ru: 'Формы глагола "to be" в настоящем времени: личная информация, утвердительные и отрицательные предложения, а также частые краткие формы.',
  },
  steps: [
    {
      id: 'step-1-theory-a',
      type: 'theory',
      left: {
        en: {
          title: 'A. Basic information with am / is / are',
          explanation:
            'We use <b>am / is / are</b> to give simple information about a person: a name, age, country, job, likes and interests. ' +
            'English needs a verb here, so we say <em>I am 24</em>, <em>My name is Nina</em>, <em>I am from Poland</em>.',
          table: {
            headers: ['Pattern', 'Typical meaning'],
            rows: [
              ['My name is ...', 'name'],
              ["I'm 24.", 'age'],
              ["I'm from Warsaw.", 'country or city'],
              ["I'm a designer.", 'job or role'],
              ['My favourite colour is green.', 'preferences'],
              ["I'm interested in music.", 'interests'],
            ],
          },
          notes: [
            'Age uses am / is / are in English: I am 24. Do not translate this from Russian word by word.',
            'This unit starts with simple statements. Questions with am / is / are come in Unit 2.',
          ],
        },
        ru: {
          title: 'A. Простая информация с am / is / are',
          explanation:
            'Мы используем <b>am / is / are</b>, когда сообщаем простую информацию о человеке: имя, возраст, страну, профессию, ' +
            'предпочтения и интересы. В английском здесь нужен глагол, поэтому мы говорим <em>I am 24</em>, <em>My name is Nina</em>, <em>I am from Poland</em>.',
          table: {
            headers: ['Модель', 'Что это значит'],
            rows: [
              ['My name is ...', 'имя'],
              ["I'm 24.", 'возраст'],
              ["I'm from Warsaw.", 'страна или город'],
              ["I'm a designer.", 'профессия или роль'],
              ['My favourite colour is green.', 'предпочтения'],
              ["I'm interested in music.", 'интересы'],
            ],
          },
          notes: [
            'Возраст в английском выражается через am / is / are: I am 24. Не переводите это дословно с русского.',
            'В этом юните мы разбираем утверждения. Вопросы с am / is / are будут в Unit 2.',
          ],
        },
      },
      right: {
        en: {
          title: 'Example profile',
          intro: 'These sentences all describe one person. Notice how often am / is / are appears in very basic information.',
          items: [
            { english: 'My name is Nina.', russian: 'Меня зовут Нина.', highlight: 'is' },
            { english: "I'm 24.", russian: 'Мне 24 года.', highlight: "I'm" },
            { english: "I'm Polish. I'm from Warsaw.", russian: 'Я полька. Я из Варшавы.', highlight: "I'm" },
            { english: "I'm an architect.", russian: 'Я архитектор.', highlight: "I'm" },
            { english: 'My father is a cook and my mother is a teacher.', russian: 'Мой отец повар, а мама учитель.', highlight: 'is' },
            { english: 'My favourite colour is green.', russian: 'Мой любимый цвет зелёный.', highlight: 'is' },
            { english: 'My favourite sports are cycling and tennis.', russian: 'Мои любимые виды спорта - велоспорт и теннис.', highlight: 'are' },
            { english: "I'm interested in photography.", russian: 'Я интересуюсь фотографией.', highlight: "I'm" },
            { english: "I'm not interested in politics.", russian: 'Я не интересуюсь политикой.', highlight: "I'm not" },
          ],
        },
        ru: {
          title: 'Пример анкеты',
          intro: 'Все эти предложения описывают одного человека. Обратите внимание, как часто am / is / are используется в самой базовой информации.',
          items: [
            { english: 'My name is Nina.', russian: 'Меня зовут Нина.', highlight: 'is' },
            { english: "I'm 24.", russian: 'Мне 24 года.', highlight: "I'm" },
            { english: "I'm Polish. I'm from Warsaw.", russian: 'Я полька. Я из Варшавы.', highlight: "I'm" },
            { english: "I'm an architect.", russian: 'Я архитектор.', highlight: "I'm" },
            { english: 'My father is a cook and my mother is a teacher.', russian: 'Мой отец повар, а мама учитель.', highlight: 'is' },
            { english: 'My favourite colour is green.', russian: 'Мой любимый цвет зелёный.', highlight: 'is' },
            { english: 'My favourite sports are cycling and tennis.', russian: 'Мои любимые виды спорта - велоспорт и теннис.', highlight: 'are' },
            { english: "I'm interested in photography.", russian: 'Я интересуюсь фотографией.', highlight: "I'm" },
            { english: "I'm not interested in politics.", russian: 'Я не интересуюсь политикой.', highlight: "I'm not" },
          ],
        },
      },
    },

    {
      id: 'step-2-theory-b',
      type: 'examples',
      left: {
        en: {
          title: 'B. Positive and negative forms',
          explanation:
            'Use <b>am / is / are</b> for positive statements and add <b>not</b> for the negative. ' +
            'In everyday English we usually use contractions such as <em>I\'m</em>, <em>she\'s</em>, <em>isn\'t</em> and <em>aren\'t</em>.',
          table: {
            headers: ['Subject', 'Positive', 'Negative'],
            rows: [
              ['I', 'I am / I\'m', 'I am not / I\'m not'],
              ['he, she, it', 'he is / he\'s', 'he is not / he isn\'t / he\'s not'],
              ['we, you, they', 'we are / we\'re', 'we are not / we aren\'t / we\'re not'],
            ],
          },
          notes: [
            'Standard English has no form "I amn\'t". Use I\'m not.',
            'For he / she / it / we / you / they, both negative contractions are correct: he isn\'t and he\'s not.',
          ],
        },
        ru: {
          title: 'B. Утвердительная и отрицательная формы',
          explanation:
            'Для утвердительных предложений используйте <b>am / is / are</b>, а для отрицания добавляйте <b>not</b>. ' +
            'В повседневном английском обычно используются краткие формы: <em>I\'m</em>, <em>she\'s</em>, <em>isn\'t</em>, <em>aren\'t</em>.',
          table: {
            headers: ['Подлежащее', 'Утверждение', 'Отрицание'],
            rows: [
              ['I', 'I am / I\'m', 'I am not / I\'m not'],
              ['he, she, it', 'he is / he\'s', 'he is not / he isn\'t / he\'s not'],
              ['we, you, they', 'we are / we\'re', 'we are not / we aren\'t / we\'re not'],
            ],
          },
          notes: [
            'Форма "I amn\'t" в стандартном английском не используется. Нужно говорить I\'m not.',
            'Для he / she / it / we / you / they корректны оба отрицательных сокращения: he isn\'t и he\'s not.',
          ],
        },
      },
      right: {
        en: {
          title: 'Positive and negative in context',
          intro: 'Read the sentences as pairs. The form changes with the subject and with positive or negative meaning.',
          items: [
            { english: "I'm cold. Can you close the window?", russian: 'Мне холодно. Можешь закрыть окно?', highlight: "I'm" },
            { english: 'Ben is in the kitchen. He\'s busy.', russian: 'Бен на кухне. Он занят.', highlight: "He's" },
            { english: 'Our neighbours are very friendly.', russian: 'Наши соседи очень дружелюбные.', highlight: 'are' },
            { english: "I'm not ready yet.", russian: 'Я ещё не готов(а).', highlight: "I'm not" },
            { english: "Mila isn't afraid of dogs.", russian: 'Мила не боится собак.', highlight: "isn't" },
            { english: "The shops aren't open now.", russian: 'Магазины сейчас не открыты.', highlight: "aren't" },
            { english: "It's sunny, but it isn't warm.", russian: 'Солнечно, но не тепло.', highlight: "isn't" },
            { english: "They aren't Canadian. They're Australian.", russian: 'Они не канадцы. Они австралийцы.', highlight: "They're" },
          ],
        },
        ru: {
          title: 'Утверждение и отрицание в контексте',
          intro: 'Прочитайте предложения парами. Форма меняется в зависимости от подлежащего и от того, утвердительное это предложение или отрицательное.',
          items: [
            { english: "I'm cold. Can you close the window?", russian: 'Мне холодно. Можешь закрыть окно?', highlight: "I'm" },
            { english: 'Ben is in the kitchen. He\'s busy.', russian: 'Бен на кухне. Он занят.', highlight: "He's" },
            { english: 'Our neighbours are very friendly.', russian: 'Наши соседи очень дружелюбные.', highlight: 'are' },
            { english: "I'm not ready yet.", russian: 'Я ещё не готов(а).', highlight: "I'm not" },
            { english: "Mila isn't afraid of dogs.", russian: 'Мила не боится собак.', highlight: "isn't" },
            { english: "The shops aren't open now.", russian: 'Магазины сейчас не открыты.', highlight: "aren't" },
            { english: "It's sunny, but it isn't warm.", russian: 'Солнечно, но не тепло.', highlight: "isn't" },
            { english: "They aren't Canadian. They're Australian.", russian: 'Они не канадцы. Они австралийцы.', highlight: "They're" },
          ],
        },
      },
    },

    {
      id: 'step-3-theory-c',
      type: 'theory',
      left: {
        en: {
          title: 'C. that\'s / there\'s / here\'s',
          explanation:
            'Some short forms with <b>is</b> are especially common: <b>that\'s</b>, <b>there\'s</b> and <b>here\'s</b>. ' +
            'We use them when we point something out, say that something exists, or give something to somebody.',
          table: {
            headers: ['Short form', 'Full form', 'Typical use'],
            rows: [
              ["that's", 'that is', 'pointing to something'],
              ["there's", 'there is', 'saying something is there'],
              ["here's", 'here is', 'giving or showing something'],
            ],
          },
          notes: [
            '"There\'s" is singular here. A separate unit later explains there is / there are in detail.',
            'These short forms are very common in speech and informal writing.',
          ],
        },
        ru: {
          title: 'C. that\'s / there\'s / here\'s',
          explanation:
            'Некоторые сокращения с <b>is</b> особенно частотны: <b>that\'s</b>, <b>there\'s</b> и <b>here\'s</b>. ' +
            'Мы используем их, когда указываем на что-то, сообщаем о наличии чего-то или что-то передаём.',
          table: {
            headers: ['Краткая форма', 'Полная форма', 'Типичное значение'],
            rows: [
              ["that's", 'that is', 'указываем на что-то'],
              ["there's", 'there is', 'говорим, что что-то есть'],
              ["here's", 'here is', 'даём или показываем что-то'],
            ],
          },
          notes: [
            '"There\'s" здесь используется с единственным числом. Отдельный урок про there is / there are будет позже.',
            'Эти краткие формы очень часто встречаются в речи и неформальном письме.',
          ],
        },
      },
      right: {
        en: {
          title: 'Common short forms in sentences',
          items: [
            { english: "That's my bus.", russian: 'Это мой автобус.', highlight: "That's" },
            { english: "That's a good idea.", russian: 'Это хорошая идея.', highlight: "That's" },
            { english: "Look! There's Leo.", russian: 'Смотри! Вон Лео.', highlight: "There's" },
            { english: "There's a bank near the station.", russian: 'Возле станции есть банк.', highlight: "There's" },
            { english: "Here's your coffee.", russian: 'Вот ваш кофе.', highlight: "Here's" },
            { english: "Here's the file you asked for.", russian: 'Вот файл, который вы просили.', highlight: "Here's" },
          ],
        },
        ru: {
          title: 'Частые краткие формы в предложениях',
          items: [
            { english: "That's my bus.", russian: 'Это мой автобус.', highlight: "That's" },
            { english: "That's a good idea.", russian: 'Это хорошая идея.', highlight: "That's" },
            { english: "Look! There's Leo.", russian: 'Смотри! Вон Лео.', highlight: "There's" },
            { english: "There's a bank near the station.", russian: 'Возле станции есть банк.', highlight: "There's" },
            { english: "Here's your coffee.", russian: 'Вот ваш кофе.', highlight: "Here's" },
            { english: "Here's the file you asked for.", russian: 'Вот файл, который вы просили.', highlight: "Here's" },
          ],
        },
      },
    },

    {
      id: 'step-4-exercise-1',
      type: 'practice',
      left: {
        en: {
          title: 'Exercise 1 strategy',
          explanation:
            'This exercise asks for the <b>short form</b>. Write the contraction itself, not the full form. ' +
            'When the source phrase is negative, use the natural negative contraction.',
          table: {
            headers: ['Full form', 'Short form'],
            rows: [
              ['he is', "he's"],
              ['we are', "we're"],
              ['I am not', "I'm not"],
              ['they are not', "they aren't / they're not"],
            ],
          },
          notes: [
            'Keep the whole phrase in the short form: for example, I am not -> I\'m not.',
            'Some negatives have two correct contractions: they aren\'t and they\'re not.',
          ],
        },
        ru: {
          title: 'Как делать упражнение 1',
          explanation:
            'В этом упражнении нужно написать <b>краткую форму</b>. Пишите именно сокращение, а не полную форму. ' +
            'Если исходная фраза отрицательная, используйте естественное отрицательное сокращение.',
          table: {
            headers: ['Полная форма', 'Краткая форма'],
            rows: [
              ['he is', "he's"],
              ['we are', "we're"],
              ['I am not', "I'm not"],
              ['they are not', "they aren't / they're not"],
            ],
          },
          notes: [
            'Сокращать нужно всю фразу: например, I am not -> I\'m not.',
            'У некоторых отрицаний есть два правильных сокращения: they aren\'t и they\'re not.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise 1 — Write the short form',
          sections: [
            {
              id: 'u1-ex1-main-en',
              examples: [
                { cue: '1', answer: "she is -> she's", note: 'Example' },
              ],
              questions: [
                {
                  id: 'u1-ex1-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'they are -> ___',
                  correctAnswer: "they're",
                },
                {
                  id: 'u1-ex1-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'it is not -> ___',
                  correctAnswer: "it isn't",
                  altAnswers: ["it's not"],
                },
                {
                  id: 'u1-ex1-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: 'that is -> ___',
                  correctAnswer: "that's",
                },
                {
                  id: 'u1-ex1-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'I am not -> ___',
                  correctAnswer: "I'm not",
                },
                {
                  id: 'u1-ex1-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'you are not -> ___',
                  correctAnswer: "you aren't",
                  altAnswers: ["you're not"],
                },
              ],
            },
          ],
        },
        ru: {
          title: 'Упражнение 1 — Напишите краткую форму',
          sections: [
            {
              id: 'u1-ex1-main-ru',
              examples: [
                { cue: '1', answer: "she is -> she's", note: 'Пример' },
              ],
              questions: [
                {
                  id: 'u1-ex1-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'they are -> ___',
                  correctAnswer: "they're",
                },
                {
                  id: 'u1-ex1-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'it is not -> ___',
                  correctAnswer: "it isn't",
                  altAnswers: ["it's not"],
                },
                {
                  id: 'u1-ex1-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: 'that is -> ___',
                  correctAnswer: "that's",
                },
                {
                  id: 'u1-ex1-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'I am not -> ___',
                  correctAnswer: "I'm not",
                },
                {
                  id: 'u1-ex1-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'you are not -> ___',
                  correctAnswer: "you aren't",
                  altAnswers: ["you're not"],
                },
              ],
            },
          ],
        },
      },
    },

    {
      id: 'step-5-exercise-2',
      type: 'practice',
      left: {
        en: {
          title: 'Exercise 2 strategy',
          explanation:
            'This exercise checks whether you can choose <b>am</b>, <b>is</b> or <b>are</b> from the subject. ' +
            'Read the whole sentence because one item may contain two different blanks.',
          table: {
            headers: ['Subject', 'Form'],
            rows: [
              ['I', 'am / \'m'],
              ['he / she / it / singular noun', 'is / \'s'],
              ['we / you / they / plural noun', 'are / \'re'],
            ],
          },
          notes: [
            'Before not, the book accepts both the full form and the natural contraction where it fits.',
            'Look carefully at plural nouns such as rooms, children, friends, keys.',
          ],
        },
        ru: {
          title: 'Как делать упражнение 2',
          explanation:
            'В этом упражнении нужно выбрать <b>am</b>, <b>is</b> или <b>are</b> по подлежащему. ' +
            'Читайте всё предложение целиком, потому что в одном пункте может быть два разных пропуска.',
          table: {
            headers: ['Подлежащее', 'Форма'],
            rows: [
              ['I', 'am / \'m'],
              ['he / she / it / существительное в ед. числе', 'is / \'s'],
              ['we / you / they / существительное во мн. числе', 'are / \'re'],
            ],
          },
          notes: [
            'Перед not источник допускает как полную форму, так и естественное сокращение там, где оно подходит.',
            'Внимательно смотрите на множественное число: rooms, children, friends, keys.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise 2 — Write am, is or are',
          sections: [
            {
              id: 'u1-ex2-main-en',
              examples: [
                { cue: '1', answer: 'The soup is hot today.', note: 'Example' },
              ],
              questions: [
                {
                  id: 'u1-ex2-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'I ___ not sleepy.',
                  correctAnswer: "'m",
                  altAnswers: ['am'],
                },
                {
                  id: 'u1-ex2-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'This sandwich ___ fresh.',
                  correctAnswer: 'is',
                },
                {
                  id: 'u1-ex2-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: 'These rooms ___ very quiet.',
                  correctAnswer: 'are',
                },
                {
                  id: 'u1-ex2-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'Look! There ___ Maya.',
                  correctAnswer: "'s",
                  altAnswers: ['is'],
                },
                {
                  id: 'u1-ex2-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'My cousins and I ___ ready.',
                  correctAnswer: 'are',
                },
                {
                  id: 'u1-ex2-7',
                  displayNumber: '7',
                  type: 'fill-blank',
                  prompt: 'Oliver ___ at home. His parents ___ at work.',
                  correctAnswer: 'is ... are',
                  blankAnswers: [
                    { correctAnswer: 'is' },
                    { correctAnswer: 'are' },
                  ],
                },
                {
                  id: 'u1-ex2-8',
                  displayNumber: '8',
                  type: 'fill-blank',
                  prompt: 'I ___ a designer. My brother ___ a pilot.',
                  correctAnswer: "'m ... is",
                  blankAnswers: [
                    { correctAnswer: "'m", altAnswers: ['am'] },
                    { correctAnswer: 'is' },
                  ],
                },
              ],
            },
          ],
        },
        ru: {
          title: 'Упражнение 2 — Вставьте am, is или are',
          sections: [
            {
              id: 'u1-ex2-main-ru',
              examples: [
                { cue: '1', answer: 'The soup is hot today.', note: 'Пример' },
              ],
              questions: [
                {
                  id: 'u1-ex2-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: 'I ___ not sleepy.',
                  correctAnswer: "'m",
                  altAnswers: ['am'],
                },
                {
                  id: 'u1-ex2-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'This sandwich ___ fresh.',
                  correctAnswer: 'is',
                },
                {
                  id: 'u1-ex2-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: 'These rooms ___ very quiet.',
                  correctAnswer: 'are',
                },
                {
                  id: 'u1-ex2-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'Look! There ___ Maya.',
                  correctAnswer: "'s",
                  altAnswers: ['is'],
                },
                {
                  id: 'u1-ex2-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: 'My cousins and I ___ ready.',
                  correctAnswer: 'are',
                },
                {
                  id: 'u1-ex2-7',
                  displayNumber: '7',
                  type: 'fill-blank',
                  prompt: 'Oliver ___ at home. His parents ___ at work.',
                  correctAnswer: 'is ... are',
                  blankAnswers: [
                    { correctAnswer: 'is' },
                    { correctAnswer: 'are' },
                  ],
                },
                {
                  id: 'u1-ex2-8',
                  displayNumber: '8',
                  type: 'fill-blank',
                  prompt: 'I ___ a designer. My brother ___ a pilot.',
                  correctAnswer: "'m ... is",
                  blankAnswers: [
                    { correctAnswer: "'m", altAnswers: ['am'] },
                    { correctAnswer: 'is' },
                  ],
                },
              ],
            },
          ],
        },
      },
    },

    {
      id: 'step-6-exercise-3',
      type: 'practice',
      left: {
        en: {
          title: 'Exercise 3 strategy',
          explanation:
            'Here you complete the sentence with the <b>missing phrase</b>, not just one word. ' +
            'Use the context to decide whether the missing part should be a pronoun + be form, or a short form like <em>Here\'s</em>.',
          table: {
            headers: ['Context', 'Possible answer'],
            rows: [
              ['person mentioned before', 'He\'s / She\'s / They\'re ...'],
              ['comment about the weather', 'It\'s / It is ...'],
              ['giving something', 'Here\'s / Here is ...'],
            ],
          },
          notes: [
            'Write the whole missing phrase: for example, He\'s, not only is.',
            'The answer may be contracted or full where both forms are natural.',
          ],
        },
        ru: {
          title: 'Как делать упражнение 3',
          explanation:
            'Здесь нужно дописать <b>недостающую фразу</b>, а не только одно слово. ' +
            'По контексту решайте, нужна ли форма типа pronoun + be или короткая форма вроде <em>Here\'s</em>.',
          table: {
            headers: ['Контекст', 'Возможный ответ'],
            rows: [
              ['человек уже упомянут', 'He\'s / She\'s / They\'re ...'],
              ['комментарий о погоде', 'It\'s / It is ...'],
              ['когда что-то дают', 'Here\'s / Here is ...'],
            ],
          },
          notes: [
            'Пишите всю недостающую фразу: например, He\'s, а не только is.',
            'Если по смыслу естественны обе формы, подходят и краткая, и полная.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise 3 — Complete the sentences',
          sections: [
            {
              id: 'u1-ex3-main-en',
              examples: [
                { cue: '1', answer: "Sam is ill. He's in bed.", note: 'Example' },
              ],
              questions: [
                {
                  id: 'u1-ex3-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: "I'm not tired, but ___ thirsty.",
                  correctAnswer: "I'm",
                  altAnswers: ['I am'],
                },
                {
                  id: 'u1-ex3-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'Mrs Allen is a very old woman. ___ 94.',
                  correctAnswer: "She's",
                  altAnswers: ['She is'],
                },
                {
                  id: 'u1-ex3-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: "These shoes aren't expensive, but ___ comfortable.",
                  correctAnswer: "they're",
                  altAnswers: ['they are'],
                },
                {
                  id: 'u1-ex3-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'The weather is nice today. ___ bright and warm.',
                  correctAnswer: "It's",
                  altAnswers: ['It is'],
                },
                {
                  id: 'u1-ex3-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: "'___ late.' 'No, I'm not. I'm early!'",
                  correctAnswer: "You're",
                  altAnswers: ['You are'],
                },
                {
                  id: 'u1-ex3-7',
                  displayNumber: '7',
                  type: 'fill-blank',
                  prompt: "Emma isn't in the office. ___ at home today.",
                  correctAnswer: "She's",
                  altAnswers: ['She is'],
                },
                {
                  id: 'u1-ex3-8',
                  displayNumber: '8',
                  type: 'fill-blank',
                  prompt: "'___ your ticket.' 'Thanks.'",
                  correctAnswer: "Here's",
                  altAnswers: ['Here is'],
                },
              ],
            },
          ],
        },
        ru: {
          title: 'Упражнение 3 — Дополните предложения',
          sections: [
            {
              id: 'u1-ex3-main-ru',
              examples: [
                { cue: '1', answer: "Sam is ill. He's in bed.", note: 'Пример' },
              ],
              questions: [
                {
                  id: 'u1-ex3-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  prompt: "I'm not tired, but ___ thirsty.",
                  correctAnswer: "I'm",
                  altAnswers: ['I am'],
                },
                {
                  id: 'u1-ex3-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  prompt: 'Mrs Allen is a very old woman. ___ 94.',
                  correctAnswer: "She's",
                  altAnswers: ['She is'],
                },
                {
                  id: 'u1-ex3-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  prompt: "These shoes aren't expensive, but ___ comfortable.",
                  correctAnswer: "they're",
                  altAnswers: ['they are'],
                },
                {
                  id: 'u1-ex3-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  prompt: 'The weather is nice today. ___ bright and warm.',
                  correctAnswer: "It's",
                  altAnswers: ['It is'],
                },
                {
                  id: 'u1-ex3-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  prompt: "'___ late.' 'No, I'm not. I'm early!'",
                  correctAnswer: "You're",
                  altAnswers: ['You are'],
                },
                {
                  id: 'u1-ex3-7',
                  displayNumber: '7',
                  type: 'fill-blank',
                  prompt: "Emma isn't in the office. ___ at home today.",
                  correctAnswer: "She's",
                  altAnswers: ['She is'],
                },
                {
                  id: 'u1-ex3-8',
                  displayNumber: '8',
                  type: 'fill-blank',
                  prompt: "'___ your ticket.' 'Thanks.'",
                  correctAnswer: "Here's",
                  altAnswers: ['Here is'],
                },
              ],
            },
          ],
        },
      },
    },

    {
      id: 'step-7-exercise-4',
      type: 'practice',
      left: {
        en: {
          title: 'Exercise 4 strategy',
          explanation:
            'This exercise is <b>about you</b>. Keep the sentence frame from the cue, but fill it with your own real information. ' +
            'The pattern stays the same even though the details are personal.',
          table: {
            headers: ['Cue', 'Required frame'],
            rows: [
              ['(name?)', 'My name is ...'],
              ['(age?)', 'I am / I\'m ...'],
              ['(from?)', 'I am / I\'m from ...'],
              ['(job?)', 'I am / I\'m ...'],
              ['(interested in ... ?)', 'I am / I\'m interested in ...'],
            ],
          },
          notes: [
            'Model answers are only examples. Your true details can be different.',
            'Use the cue to keep the right sentence shape: for example, My name is ... or I\'m from ...',
          ],
        },
        ru: {
          title: 'Как делать упражнение 4',
          explanation:
            'Это упражнение <b>о вас</b>. Подсказка задаёт каркас предложения, а личную информацию вы подставляете свою. ' +
            'Сама модель остаётся той же, даже если факты у каждого разные.',
          table: {
            headers: ['Подсказка', 'Нужная модель'],
            rows: [
              ['(name?)', 'My name is ...'],
              ['(age?)', 'I am / I\'m ...'],
              ['(from?)', 'I am / I\'m from ...'],
              ['(job?)', 'I am / I\'m ...'],
              ['(interested in ... ?)', 'I am / I\'m interested in ...'],
            ],
          },
          notes: [
            'Образцы ответов - только примеры. Ваши правдивые данные могут быть другими.',
            'Ориентируйтесь на подсказку и сохраняйте нужную модель: например, My name is ... или I\'m from ...',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise 4 — Write sentences about yourself',
          instructions: 'Look at the cue and complete the sentence about yourself. Model answers are shown only as patterns.',
          questions: [
            {
              id: 'u1-ex4-1',
              displayNumber: '1',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(name?)',
              prompt: 'My ___',
              translation: 'Напишите, как вас зовут.',
              correctAnswer: 'name is Elena.',
              altAnswers: ["name's Elena."],
              acceptedPatterns: ["^name\\s+(is|['’]s)\\s+.+[.!?]?$"],
              explanation: 'Use the frame My name is ... / My name\'s ...',
            },
            {
              id: 'u1-ex4-2',
              displayNumber: '2',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(age?)',
              prompt: 'I ___',
              translation: 'Напишите свой возраст.',
              correctAnswer: 'am 29.',
              altAnswers: ["'m 29.", 'am 29 years old.', "'m 29 years old."],
              acceptedPatterns: ["^(am|['’]m)\\s+\\d+([.,]\\d+)?(\\s+years?\\s+old)?[.!?]?$"],
              explanation: 'Use I am / I\'m + age.',
            },
            {
              id: 'u1-ex4-3',
              displayNumber: '3',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(from?)',
              prompt: 'I ___',
              translation: 'Напишите, откуда вы.',
              correctAnswer: 'am from Georgia.',
              altAnswers: ["'m from Georgia."],
              acceptedPatterns: ["^(am|['’]m)\\s+from\\s+.+[.!?]?$"],
              explanation: 'Use I am / I\'m from ...',
            },
            {
              id: 'u1-ex4-4',
              displayNumber: '4',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(job? / student?)',
              prompt: 'I ___',
              translation: 'Напишите, кто вы по профессии или что вы студент(ка).',
              correctAnswer: 'am a graphic designer.',
              altAnswers: ["'m a graphic designer.", 'am a student.', "'m a student."],
              acceptedPatterns: ["^(am|['’]m)\\s+((a|an)\\s+.+|retired|unemployed|self-employed)[.!?]?$"],
              explanation: 'Use I am / I\'m + job or role.',
            },
            {
              id: 'u1-ex4-5',
              displayNumber: '5',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(favourite colour or colours?)',
              prompt: 'My ___',
              translation: 'Напишите про любимый цвет или любимые цвета.',
              correctAnswer: 'favourite colour is green.',
              altAnswers: ['favourite colours are green and black.'],
              acceptedPatterns: ["^(favourite\\s+colour\\s+(is|['’]s)|favourite\\s+colours\\s+are)\\s+.+[.!?]?$"],
              explanation: 'Use My favourite colour is ... or My favourite colours are ...',
            },
            {
              id: 'u1-ex4-6',
              displayNumber: '6',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(interested in ... ?)',
              prompt: 'I ___',
              translation: 'Напишите, чем вы интересуетесь.',
              correctAnswer: 'am interested in cinema.',
              altAnswers: ["'m interested in cinema.", 'am not interested in sport.', "'m not interested in sport."],
              acceptedPatterns: ["^(am|['’]m)\\s+(not\\s+)?interested\\s+in\\s+.+[.!?]?$"],
              explanation: 'Use interested in ... or not interested in ...',
            },
          ],
        },
        ru: {
          title: 'Упражнение 4 — Напишите предложения о себе',
          instructions: 'Смотрите на подсказку и дополняйте предложение информацией о себе. Образцы ответов показаны только как модели.',
          questions: [
            {
              id: 'u1-ex4-1',
              displayNumber: '1',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(name?)',
              prompt: 'My ___',
              translation: 'Напишите, как вас зовут.',
              correctAnswer: 'name is Elena.',
              altAnswers: ["name's Elena."],
              acceptedPatterns: ["^name\\s+(is|['’]s)\\s+.+[.!?]?$"],
              explanation: 'Используйте модель My name is ... / My name\'s ...',
            },
            {
              id: 'u1-ex4-2',
              displayNumber: '2',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(age?)',
              prompt: 'I ___',
              translation: 'Напишите свой возраст.',
              correctAnswer: 'am 29.',
              altAnswers: ["'m 29.", 'am 29 years old.', "'m 29 years old."],
              acceptedPatterns: ["^(am|['’]m)\\s+\\d+([.,]\\d+)?(\\s+years?\\s+old)?[.!?]?$"],
              explanation: 'Используйте I am / I\'m + возраст.',
            },
            {
              id: 'u1-ex4-3',
              displayNumber: '3',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(from?)',
              prompt: 'I ___',
              translation: 'Напишите, откуда вы.',
              correctAnswer: 'am from Georgia.',
              altAnswers: ["'m from Georgia."],
              acceptedPatterns: ["^(am|['’]m)\\s+from\\s+.+[.!?]?$"],
              explanation: 'Используйте I am / I\'m from ...',
            },
            {
              id: 'u1-ex4-4',
              displayNumber: '4',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(job? / student?)',
              prompt: 'I ___',
              translation: 'Напишите, кто вы по профессии или что вы студент(ка).',
              correctAnswer: 'am a graphic designer.',
              altAnswers: ["'m a graphic designer.", 'am a student.', "'m a student."],
              acceptedPatterns: ["^(am|['’]m)\\s+((a|an)\\s+.+|retired|unemployed|self-employed)[.!?]?$"],
              explanation: 'Используйте I am / I\'m + профессия или роль.',
            },
            {
              id: 'u1-ex4-5',
              displayNumber: '5',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(favourite colour or colours?)',
              prompt: 'My ___',
              translation: 'Напишите про любимый цвет или любимые цвета.',
              correctAnswer: 'favourite colour is green.',
              altAnswers: ['favourite colours are green and black.'],
              acceptedPatterns: ["^(favourite\\s+colour\\s+(is|['’]s)|favourite\\s+colours\\s+are)\\s+.+[.!?]?$"],
              explanation: 'Используйте My favourite colour is ... или My favourite colours are ...',
            },
            {
              id: 'u1-ex4-6',
              displayNumber: '6',
              type: 'fill-blank',
              answerMode: 'example',
              cue: '(interested in ... ?)',
              prompt: 'I ___',
              translation: 'Напишите, чем вы интересуетесь.',
              correctAnswer: 'am interested in cinema.',
              altAnswers: ["'m interested in cinema.", 'am not interested in sport.', "'m not interested in sport."],
              acceptedPatterns: ["^(am|['’]m)\\s+(not\\s+)?interested\\s+in\\s+.+[.!?]?$"],
              explanation: 'Используйте interested in ... или not interested in ...',
            },
          ],
        },
      },
    },

    {
      id: 'step-8-exercise-5',
      type: 'practice',
      left: {
        en: {
          title: 'Exercise 5 strategy',
          explanation:
            'This is a <b>picture sentence</b> exercise. Look at the picture, choose the right adjective from the word bank, and make a sentence with <em>is</em> or <em>are</em>.',
          table: {
            headers: ['Picture shows ...', 'What to write'],
            rows: [
              ['one person', 'He\'s ... / She\'s ... or the full form'],
              ['two or more people', 'They\'re ... / They are ...'],
              ['no subject is given', 'write the whole sentence yourself'],
            ],
          },
          notes: [
            'Use only the adjectives from the word bank.',
            'Sometimes the subject is already there, and sometimes you need to choose he, she or they from the picture.',
          ],
        },
        ru: {
          title: 'Как делать упражнение 5',
          explanation:
            'Это упражнение на <b>картинки и предложения</b>. Посмотрите на картинку, выберите нужное прилагательное из набора слов и составьте предложение с <em>is</em> или <em>are</em>.',
          table: {
            headers: ['На картинке ...', 'Что написать'],
            rows: [
              ['один человек', 'He\'s ... / She\'s ... или полная форма'],
              ['двое или больше', 'They\'re ... / They are ...'],
              ['подлежащее не дано', 'нужно написать всё предложение целиком'],
            ],
          },
          notes: [
            'Используйте только прилагательные из набора слов.',
            'Иногда подлежащее уже дано, а иногда его нужно выбрать по картинке: he, she или they.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise 5 — Write sentences for the pictures',
          sections: [
            {
              id: 'u1-ex5-main-en',
              instructions: 'Use the remaining words in the box to complete the picture sentences.',
              wordBank: ['angry', 'cold', 'hot', 'hungry', 'scared'],
              examples: [
                { cue: '1', answer: "She's thirsty.", note: 'Example' },
              ],
              questions: [
                {
                  id: 'u1-ex5-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🥶',
                    title: 'Two hikers',
                    description: 'They are standing outside in the snow.',
                  },
                  prompt: 'They ___',
                  correctAnswer: 'are cold.',
                  altAnswers: ["'re cold."],
                },
                {
                  id: 'u1-ex5-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🥵',
                    title: 'On the bus',
                    description: 'The man is fanning himself in a heavy coat.',
                  },
                  prompt: 'He ___',
                  correctAnswer: 'is hot.',
                  altAnswers: ["'s hot."],
                },
                {
                  id: 'u1-ex5-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  visual: {
                    emoji: '😨',
                    title: 'A boy and a dog',
                    description: 'He jumps back when the dog barks.',
                  },
                  prompt: '___',
                  correctAnswer: "He's scared.",
                  altAnswers: ['He is scared.'],
                },
                {
                  id: 'u1-ex5-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🍔',
                    title: 'After school',
                    description: 'The children are looking at the kitchen table.',
                  },
                  prompt: '___',
                  correctAnswer: "They're hungry.",
                  altAnswers: ['They are hungry.'],
                },
                {
                  id: 'u1-ex5-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  visual: {
                    emoji: '😠',
                    title: 'Broken toy',
                    description: 'She is looking at the toy on the floor.',
                  },
                  prompt: '___',
                  correctAnswer: "She's angry.",
                  altAnswers: ['She is angry.'],
                },
              ],
            },
          ],
        },
        ru: {
          title: 'Упражнение 5 — Напишите предложения по картинкам',
          sections: [
            {
              id: 'u1-ex5-main-ru',
              instructions: 'Используйте оставшиеся слова из набора, чтобы дополнить предложения по картинкам.',
              wordBank: ['angry', 'cold', 'hot', 'hungry', 'scared'],
              examples: [
                { cue: '1', answer: "She's thirsty.", note: 'Пример' },
              ],
              questions: [
                {
                  id: 'u1-ex5-2',
                  displayNumber: '2',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🥶',
                    title: 'Двое туристов',
                    description: 'Они стоят на улице в снегу.',
                  },
                  prompt: 'They ___',
                  correctAnswer: 'are cold.',
                  altAnswers: ["'re cold."],
                },
                {
                  id: 'u1-ex5-3',
                  displayNumber: '3',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🥵',
                    title: 'В автобусе',
                    description: 'Мужчина обмахивается рукой в тёплом пальто.',
                  },
                  prompt: 'He ___',
                  correctAnswer: 'is hot.',
                  altAnswers: ["'s hot."],
                },
                {
                  id: 'u1-ex5-4',
                  displayNumber: '4',
                  type: 'fill-blank',
                  visual: {
                    emoji: '😨',
                    title: 'Мальчик и собака',
                    description: 'Он отскакивает назад, когда собака лает.',
                  },
                  prompt: '___',
                  correctAnswer: "He's scared.",
                  altAnswers: ['He is scared.'],
                },
                {
                  id: 'u1-ex5-5',
                  displayNumber: '5',
                  type: 'fill-blank',
                  visual: {
                    emoji: '🍔',
                    title: 'После школы',
                    description: 'Дети смотрят на кухонный стол.',
                  },
                  prompt: '___',
                  correctAnswer: "They're hungry.",
                  altAnswers: ['They are hungry.'],
                },
                {
                  id: 'u1-ex5-6',
                  displayNumber: '6',
                  type: 'fill-blank',
                  visual: {
                    emoji: '😠',
                    title: 'Сломанная игрушка',
                    description: 'Она смотрит на игрушку на полу.',
                  },
                  prompt: '___',
                  correctAnswer: "She's angry.",
                  altAnswers: ['She is angry.'],
                },
              ],
            },
          ],
        },
      },
    },

    {
      id: 'step-9-exercise-6',
      type: 'practice',
      left: {
        en: {
          title: 'Exercise 6 strategy',
          explanation:
            'This exercise asks for <b>true sentences, positive or negative</b>. Some cues depend on today or on you, so either answer may be true. ' +
            'Other cues are general facts, so only one form makes sense.',
          table: {
            headers: ['Cue type', 'How to answer'],
            rows: [
              ['today / your situation', 'choose the true positive or negative form'],
              ['general fact', 'write the form that matches the fact'],
              ['I ... statements', 'keep the frame and decide if it is true for you'],
            ],
          },
          notes: [
            'Use only the forms asked for in the task: is / isn\'t, are / aren\'t, I\'m / I\'m not.',
            'Most of the sentence is already given. Your job is to choose the right be form and the right polarity.',
          ],
        },
        ru: {
          title: 'Как делать упражнение 6',
          explanation:
            'В этом упражнении нужны <b>правдивые предложения, положительные или отрицательные</b>. Одни подсказки зависят от сегодняшней ситуации или от вас, ' +
            'поэтому возможны оба варианта. Другие описывают факты, и там подходит только одна форма.',
          table: {
            headers: ['Тип подсказки', 'Как отвечать'],
            rows: [
              ['сегодня / ваша ситуация', 'выберите правдивую положительную или отрицательную форму'],
              ['общий факт', 'напишите форму, которая соответствует факту'],
              ['предложения с I ...', 'сохраните модель и решите, верно это для вас или нет'],
            ],
          },
          notes: [
            'Используйте только те формы, которые прямо указаны в задании: is / isn\'t, are / aren\'t, I\'m / I\'m not.',
            'Большая часть предложения уже дана. Ваша задача - выбрать правильную форму be и нужную полярность.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise 6 — True sentences, positive or negative',
          sections: [
            {
              id: 'u1-ex6-a-en',
              title: 'Use is / isn\'t or are / aren\'t',
              instructions: 'Write true sentences. Use is/isn\'t or are/aren\'t.',
              examples: [
                { cue: '1. (it / cold today)', answer: "It isn't cold today. or It's cold today.", note: 'Example' },
              ],
              questions: [
                {
                  id: 'u1-ex6-2',
                  displayNumber: '2',
                  cue: '(it / windy today)',
                  type: 'fill-blank',
                  prompt: 'It ___ windy today.',
                  correctAnswer: 'is',
                  altAnswers: ["'s", "isn't", "'s not", 'is not'],
                },
                {
                  id: 'u1-ex6-3',
                  displayNumber: '3',
                  cue: '(my hands / cold)',
                  type: 'fill-blank',
                  prompt: 'My hands ___ cold.',
                  correctAnswer: 'are',
                  altAnswers: ["aren't", 'are not'],
                },
                {
                  id: 'u1-ex6-4',
                  displayNumber: '4',
                  cue: '(Madrid / in Spain)',
                  type: 'fill-blank',
                  prompt: 'Madrid ___ in Spain.',
                  correctAnswer: 'is',
                },
                {
                  id: 'u1-ex6-5',
                  displayNumber: '5',
                  cue: '(ice / hot)',
                  type: 'fill-blank',
                  prompt: 'Ice ___ hot.',
                  correctAnswer: "isn't",
                  altAnswers: ['is not'],
                },
                {
                  id: 'u1-ex6-6',
                  displayNumber: '6',
                  cue: '(whales / fish)',
                  type: 'fill-blank',
                  prompt: 'Whales ___ fish.',
                  correctAnswer: "aren't",
                  altAnswers: ['are not'],
                },
              ],
            },
            {
              id: 'u1-ex6-b-en',
              title: 'Use I\'m / I\'m not',
              instructions: 'Write true sentences. Use I\'m / I\'m not.',
              examples: [
                { cue: '7. (tired)', answer: "I'm tired. or I'm not tired.", note: 'Example' },
              ],
              questions: [
                {
                  id: 'u1-ex6-8',
                  displayNumber: '8',
                  cue: '(hungry)',
                  type: 'fill-blank',
                  prompt: 'I ___ hungry.',
                  correctAnswer: "'m",
                  altAnswers: ['am', "'m not", 'am not'],
                },
                {
                  id: 'u1-ex6-9',
                  displayNumber: '9',
                  cue: '(ready for bed)',
                  type: 'fill-blank',
                  prompt: 'I ___ ready for bed.',
                  correctAnswer: "'m",
                  altAnswers: ['am', "'m not", 'am not'],
                },
                {
                  id: 'u1-ex6-10',
                  displayNumber: '10',
                  cue: '(interested in jazz)',
                  type: 'fill-blank',
                  prompt: 'I ___ interested in jazz.',
                  correctAnswer: "'m",
                  altAnswers: ['am', "'m not", 'am not'],
                },
              ],
            },
          ],
        },
        ru: {
          title: 'Упражнение 6 — Правдивые предложения, положительные или отрицательные',
          sections: [
            {
              id: 'u1-ex6-a-ru',
              title: 'Используйте is / isn\'t или are / aren\'t',
              instructions: 'Напишите правдивые предложения. Используйте is/isn\'t или are/aren\'t.',
              examples: [
                { cue: '1. (it / cold today)', answer: "It isn't cold today. or It's cold today.", note: 'Пример' },
              ],
              questions: [
                {
                  id: 'u1-ex6-2',
                  displayNumber: '2',
                  cue: '(it / windy today)',
                  type: 'fill-blank',
                  prompt: 'It ___ windy today.',
                  correctAnswer: 'is',
                  altAnswers: ["'s", "isn't", "'s not", 'is not'],
                },
                {
                  id: 'u1-ex6-3',
                  displayNumber: '3',
                  cue: '(my hands / cold)',
                  type: 'fill-blank',
                  prompt: 'My hands ___ cold.',
                  correctAnswer: 'are',
                  altAnswers: ["aren't", 'are not'],
                },
                {
                  id: 'u1-ex6-4',
                  displayNumber: '4',
                  cue: '(Madrid / in Spain)',
                  type: 'fill-blank',
                  prompt: 'Madrid ___ in Spain.',
                  correctAnswer: 'is',
                },
                {
                  id: 'u1-ex6-5',
                  displayNumber: '5',
                  cue: '(ice / hot)',
                  type: 'fill-blank',
                  prompt: 'Ice ___ hot.',
                  correctAnswer: "isn't",
                  altAnswers: ['is not'],
                },
                {
                  id: 'u1-ex6-6',
                  displayNumber: '6',
                  cue: '(whales / fish)',
                  type: 'fill-blank',
                  prompt: 'Whales ___ fish.',
                  correctAnswer: "aren't",
                  altAnswers: ['are not'],
                },
              ],
            },
            {
              id: 'u1-ex6-b-ru',
              title: 'Используйте I\'m / I\'m not',
              instructions: 'Напишите правдивые предложения. Используйте I\'m / I\'m not.',
              examples: [
                { cue: '7. (tired)', answer: "I'm tired. or I'm not tired.", note: 'Пример' },
              ],
              questions: [
                {
                  id: 'u1-ex6-8',
                  displayNumber: '8',
                  cue: '(hungry)',
                  type: 'fill-blank',
                  prompt: 'I ___ hungry.',
                  correctAnswer: "'m",
                  altAnswers: ['am', "'m not", 'am not'],
                },
                {
                  id: 'u1-ex6-9',
                  displayNumber: '9',
                  cue: '(ready for bed)',
                  type: 'fill-blank',
                  prompt: 'I ___ ready for bed.',
                  correctAnswer: "'m",
                  altAnswers: ['am', "'m not", 'am not'],
                },
                {
                  id: 'u1-ex6-10',
                  displayNumber: '10',
                  cue: '(interested in jazz)',
                  type: 'fill-blank',
                  prompt: 'I ___ interested in jazz.',
                  correctAnswer: "'m",
                  altAnswers: ['am', "'m not", 'am not'],
                },
              ],
            },
          ],
        },
      },
    },

    {
      id: 'step-10-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — am / is / are',
          description: 'Choose the best answer in each case.',
          questions: [
            {
              id: 'q1',
              question: 'Which sentence is correct?',
              options: ["I'm from Rome.", 'I are from Rome.', 'I is from Rome.'],
              correctIndex: 0,
              explanation: 'With I, use am / I\'m.',
            },
            {
              id: 'q2',
              question: 'Choose the correct negative form.',
              options: ["She aren't ready.", "She isn't ready.", "She am not ready."],
              correctIndex: 1,
              explanation: 'With she, the correct negative is she isn\'t / she is not.',
            },
            {
              id: 'q3',
              question: 'Complete the sentence: "Look! There ___ our teacher."',
              options: ['am', 'is', 'are'],
              correctIndex: 1,
              explanation: 'With singular there, use is / there\'s.',
            },
            {
              id: 'q4',
              question: 'Which short form matches "Here is your bag"?',
              options: ["Here's your bag.", "There's your bag.", "That's your bag."],
              correctIndex: 0,
              explanation: 'Here is -> Here\'s.',
            },
            {
              id: 'q5',
              question: 'Which sentence is not standard English?',
              options: ["We're late.", "I'm not ready.", "I amn't ready."],
              correctIndex: 2,
              explanation: 'Standard English uses I\'m not, not I amn\'t.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — am / is / are',
          description: 'Выберите лучший ответ в каждом случае.',
          questions: [
            {
              id: 'q1',
              question: 'Какое предложение правильное?',
              options: ["I'm from Rome.", 'I are from Rome.', 'I is from Rome.'],
              correctIndex: 0,
              explanation: 'С I используем am / I\'m.',
            },
            {
              id: 'q2',
              question: 'Выберите правильную отрицательную форму.',
              options: ["She aren't ready.", "She isn't ready.", "She am not ready."],
              correctIndex: 1,
              explanation: 'С she правильная отрицательная форма - she isn\'t / she is not.',
            },
            {
              id: 'q3',
              question: 'Дополните предложение: "Look! There ___ our teacher."',
              options: ['am', 'is', 'are'],
              correctIndex: 1,
              explanation: 'При singular there используем is / there\'s.',
            },
            {
              id: 'q4',
              question: 'Какая краткая форма соответствует "Here is your bag"?',
              options: ["Here's your bag.", "There's your bag.", "That's your bag."],
              correctIndex: 0,
              explanation: 'Here is -> Here\'s.',
            },
            {
              id: 'q5',
              question: 'Какое предложение не является стандартным английским?',
              options: ["We're late.", "I'm not ready.", "I amn't ready."],
              correctIndex: 2,
              explanation: 'В стандартном английском говорят I\'m not, а не I amn\'t.',
            },
          ],
        },
      },
    },

    {
      id: 'step-11-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — am / is / are',
          points: [
            'Use <b>am</b> with I, <b>is</b> with he/she/it and singular nouns, and <b>are</b> with we/you/they and plural nouns.',
            'Make the negative with <b>not</b>: I\'m not, isn\'t / is not, aren\'t / are not.',
            'Use these forms to give basic information such as your name, age, nationality, job, interests and favourite things.',
            'Short forms such as <b>I\'m</b>, <b>she\'s</b>, <b>that\'s</b>, <b>there\'s</b> and <b>here\'s</b> are very common in speech and informal writing.',
            'With plural subjects, use <b>are</b>: My favourite sports are ..., They are ..., We aren\'t ...',
            'Questions with <b>am / is / are</b> come next in Unit 2.',
          ],
          nextUnit: 'Unit 2 — am / is / are (questions)',
        },
        ru: {
          title: 'Итоги — am / is / are',
          points: [
            'Используйте <b>am</b> с I, <b>is</b> с he/she/it и существительными в единственном числе, а <b>are</b> с we/you/they и существительными во множественном числе.',
            'Отрицание образуется с <b>not</b>: I\'m not, isn\'t / is not, aren\'t / are not.',
            'Эти формы нужны, когда вы сообщаете базовую информацию: имя, возраст, национальность, профессию, интересы и любимые вещи.',
            'Краткие формы вроде <b>I\'m</b>, <b>she\'s</b>, <b>that\'s</b>, <b>there\'s</b> и <b>here\'s</b> очень частотны в речи и неформальном письме.',
            'С подлежащими во множественном числе используйте <b>are</b>: My favourite sports are ..., They are ..., We aren\'t ...',
            'Вопросы с <b>am / is / are</b> разбираются в Unit 2.',
          ],
          nextUnit: 'Юнит 2 — am / is / are (вопросы)',
        },
      },
    },
  ],
};

export default unit1;
