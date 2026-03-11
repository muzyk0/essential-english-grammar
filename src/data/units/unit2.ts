import type { Unit } from '../../types/unit';

// Unit 2: am/is/are (questions)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 2)
const unit2: Unit = {
  id: 'unit2',
  number: 2,
  title: {
    en: 'am/is/are (questions)',
    ru: 'am/is/are (вопросы)',
  },
  description: {
    en: 'Yes/No questions, short answers, and Wh- questions with "to be".',
    ru: 'Вопросы да/нет, краткие ответы и вопросы с вопросительными словами.',
  },
  steps: [
    // ─── Step 1: Yes/No questions — word order ───────────────────────────────
    {
      id: 'step-1-yes-no',
      type: 'theory',
      left: {
        en: {
          title: 'Yes/No questions — word order',
          explanation:
            'To make a yes/no question, <b>swap the subject and am/is/are</b>. ' +
            'The verb moves to the front of the sentence.',
          table: {
            headers: ['Statement', 'Question'],
            rows: [
              ['I am late.', 'Am I late?'],
              ['He is a doctor.', 'Is he a doctor?'],
              ['She is at home.', 'Is she at home?'],
              ['It is cold.', 'Is it cold?'],
              ['We are ready.', 'Are we ready?'],
              ['You are a student.', 'Are you a student?'],
              ['They are from Italy.', 'Are they from Italy?'],
            ],
          },
          notes: [
            'Statement: subject → verb. Question: verb → subject.',
            'We do NOT use contractions in short positive answers: "Yes, I am." (NOT "Yes, I\'m.")',
          ],
        },
        ru: {
          title: 'Вопросы да/нет — порядок слов',
          explanation:
            'Чтобы задать вопрос, <b>поменяйте местами подлежащее и am/is/are</b>. ' +
            'Глагол переходит на первое место.',
          table: {
            headers: ['Утверждение', 'Вопрос'],
            rows: [
              ['I am late.', 'Am I late?'],
              ['He is a doctor.', 'Is he a doctor?'],
              ['She is at home.', 'Is she at home?'],
              ['It is cold.', 'Is it cold?'],
              ['We are ready.', 'Are we ready?'],
              ['You are a student.', 'Are you a student?'],
              ['They are from Italy.', 'Are they from Italy?'],
            ],
          },
          notes: [
            'Утверждение: подлежащее → глагол. Вопрос: глагол → подлежащее.',
            'В кратких положительных ответах НЕ используем краткую форму: "Yes, I am." (НЕ "Yes, I\'m.")',
          ],
        },
      },
      right: {
        en: {
          title: 'Short answers',
          intro: 'We use short answers in everyday English instead of repeating the whole sentence.',
          items: [
            { english: 'Are you tired? — Yes, I am. / No, I\'m not.', russian: 'Ты устал? — Да. / Нет.' },
            { english: 'Is he a teacher? — Yes, he is. / No, he isn\'t.', russian: 'Он учитель? — Да. / Нет.' },
            { english: 'Is she at home? — Yes, she is. / No, she isn\'t.', russian: 'Она дома? — Да. / Нет.' },
            { english: 'Is it expensive? — Yes, it is. / No, it isn\'t.', russian: 'Это дорого? — Да. / Нет.' },
            { english: 'Are they from Spain? — Yes, they are. / No, they aren\'t.', russian: 'Они из Испании? — Да. / Нет.' },
            { english: 'Are we late? — No, we aren\'t.', russian: 'Мы опоздали? — Нет.' },
          ],
        },
        ru: {
          title: 'Краткие ответы',
          intro: 'В повседневном английском используем краткие ответы вместо повтора всего предложения.',
          items: [
            { english: 'Are you tired? — Yes, I am. / No, I\'m not.', russian: 'Ты устал? — Да. / Нет.' },
            { english: 'Is he a teacher? — Yes, he is. / No, he isn\'t.', russian: 'Он учитель? — Да. / Нет.' },
            { english: 'Is she at home? — Yes, she is. / No, she isn\'t.', russian: 'Она дома? — Да. / Нет.' },
            { english: 'Is it expensive? — Yes, it is. / No, it isn\'t.', russian: 'Это дорого? — Да. / Нет.' },
            { english: 'Are they from Spain? — Yes, they are. / No, they aren\'t.', russian: 'Они из Испании? — Да. / Нет.' },
            { english: 'Are we late? — No, we aren\'t.', russian: 'Мы опоздали? — Нет.' },
          ],
        },
      },
    },

    // ─── Step 2: Wh- questions ────────────────────────────────────────────────
    {
      id: 'step-2-wh-questions',
      type: 'examples',
      left: {
        en: {
          title: 'Wh- questions',
          explanation:
            'Wh- questions ask for specific information. The question word comes first, ' +
            'then <b>am/is/are</b>, then the subject.',
          table: {
            headers: ['Pattern', 'Example'],
            rows: [
              ['Where + is/are + subject?', 'Where is Tom?'],
              ['What + is/are + subject?', 'What is your name?'],
              ['Who + is + subject?', 'Who is that woman?'],
              ['How + is/are + subject?', 'How are you?'],
              ['How old + is/are + subject?', 'How old is she?'],
              ['What time + is + it?', 'What time is it?'],
              ['Why + is/are + subject?', 'Why are you late?'],
            ],
          },
          notes: [
            '"What is" → "What\'s" and "Where is" → "Where\'s" are common contractions in speech.',
            '"Who is" → "Who\'s" — careful: "whose" is a different word (possessive).',
          ],
        },
        ru: {
          title: 'Вопросительные слова (Wh-)',
          explanation:
            'Wh-вопросы запрашивают конкретную информацию. Вопросительное слово стоит первым, ' +
            'затем <b>am/is/are</b>, затем подлежащее.',
          table: {
            headers: ['Структура', 'Пример'],
            rows: [
              ['Where + is/are + подлежащее?', 'Where is Tom?'],
              ['What + is/are + подлежащее?', 'What is your name?'],
              ['Who + is + подлежащее?', 'Who is that woman?'],
              ['How + is/are + подлежащее?', 'How are you?'],
              ['How old + is/are + подлежащее?', 'How old is she?'],
              ['What time + is + it?', 'What time is it?'],
              ['Why + is/are + подлежащее?', 'Why are you late?'],
            ],
          },
          notes: [
            '"What is" → "What\'s" и "Where is" → "Where\'s" — распространённые сокращения в речи.',
            '"Who is" → "Who\'s" — осторожно: "whose" — другое слово (притяжательное).',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Wh- questions in context',
          items: [
            { english: "Where is the station? — It's on King Street.", russian: 'Где вокзал? — На Кинг-стрит.', highlight: 'Where is' },
            { english: "What's your name? — My name is Anna.", russian: 'Как вас зовут? — Меня зовут Анна.', highlight: "What's" },
            { english: "How old is he? — He's 30.", russian: 'Сколько ему лет? — 30.', highlight: 'How old is' },
            { english: "Who is that man? — He's my brother.", russian: 'Кто этот мужчина? — Мой брат.', highlight: 'Who is' },
            { english: "Why are you angry? — Because I'm tired.", russian: 'Почему ты злишься? — Потому что я устал.', highlight: 'Why are' },
            { english: "What time is it? — It's half past two.", russian: 'Который час? — Половина третьего.', highlight: 'What time is' },
            { english: "How are you? — Fine, thanks.", russian: 'Как дела? — Хорошо, спасибо.', highlight: 'How are' },
          ],
        },
        ru: {
          title: 'Примеры — Wh-вопросы в контексте',
          items: [
            { english: "Where is the station? — It's on King Street.", russian: 'Где вокзал? — На Кинг-стрит.', highlight: 'Where is' },
            { english: "What's your name? — My name is Anna.", russian: 'Как вас зовут? — Меня зовут Анна.', highlight: "What's" },
            { english: "How old is he? — He's 30.", russian: 'Сколько ему лет? — 30.', highlight: 'How old is' },
            { english: "Who is that man? — He's my brother.", russian: 'Кто этот мужчина? — Мой брат.', highlight: 'Who is' },
            { english: "Why are you angry? — Because I'm tired.", russian: 'Почему ты злишься? — Потому что я устал.', highlight: 'Why are' },
            { english: "What time is it? — It's half past two.", russian: 'Который час? — Половина третьего.', highlight: 'What time is' },
            { english: "How are you? — Fine, thanks.", russian: 'Как дела? — Хорошо, спасибо.', highlight: 'How are' },
          ],
        },
      },
    },

    // ─── Step 3: Practice A — form the question ──────────────────────────────
    {
      id: 'step-3-practice-a',
      type: 'practice',
      left: {
        en: {
          title: 'Question order',
          explanation:
            'To build a question, put <b>am/is/are before the subject</b>. ' +
            'With Wh- questions, the question word comes first.',
          table: {
            headers: ['Words given', 'Pattern', 'Complete question'],
            rows: [
              ['your sister / at work', 'Is + subject + place?', 'Is your sister at work?'],
              ['your neighbours / ready', 'Are + subject + adjective?', 'Are your neighbours ready?'],
              ['why / you / late', 'Why + are + subject + adjective?', 'Why are you late?'],
            ],
          },
          notes: [
            'Write the whole question in the blank, not just am/is/are.',
            'Keep the order: question word → am/is/are → subject.',
          ],
        },
        ru: {
          title: 'Порядок слов в вопросе',
          explanation:
            'Чтобы построить вопрос, ставьте <b>am/is/are перед подлежащим</b>. ' +
            'В Wh-вопросах вопросительное слово стоит первым.',
          table: {
            headers: ['Даны слова', 'Схема', 'Готовый вопрос'],
            rows: [
              ['your sister / at work', 'Is + subject + place?', 'Is your sister at work?'],
              ['your neighbours / ready', 'Are + subject + adjective?', 'Are your neighbours ready?'],
              ['why / you / late', 'Why + are + subject + adjective?', 'Why are you late?'],
            ],
          },
          notes: [
            'В пустое место нужно вписать весь вопрос, а не только am/is/are.',
            'Сохраняйте порядок: вопросительное слово → am/is/are → подлежащее.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Make the question',
          instructions: 'Write the complete question using the words in brackets.',
          questions: [
            {
              id: 'p2-1',
              type: 'fill-blank',
              prompt: '(your sister / at work) → ___',
              translation: 'Твоя сестра на работе?',
              correctAnswer: 'Is your sister at work?',
              altAnswers: ['Is your sister at work'],
              explanation: 'Start with Is, then add the subject: Is your sister at work?',
            },
            {
              id: 'p2-2',
              type: 'fill-blank',
              prompt: '(these bags / yours) → ___',
              translation: 'Эти сумки твои?',
              correctAnswer: 'Are these bags yours?',
              altAnswers: ['Are these bags yours'],
              explanation: 'Yes/no question: Are + subject + complement?',
            },
            {
              id: 'p2-3',
              type: 'fill-blank',
              prompt: '(why / you / late) → ___',
              translation: 'Почему ты опоздал(а)?',
              correctAnswer: 'Why are you late?',
              altAnswers: ['Why are you late'],
              explanation: 'With why: question word + are + subject + adjective.',
            },
            {
              id: 'p2-4',
              type: 'fill-blank',
              prompt: '(the bank / near here) → ___',
              translation: 'Банк рядом?',
              correctAnswer: 'Is the bank near here?',
              altAnswers: ['Is the bank near here'],
              explanation: 'Use Is before the subject in a yes/no question.',
            },
            {
              id: 'p2-5',
              type: 'fill-blank',
              prompt: '(where / your children) → ___',
              translation: 'Где твои дети?',
              correctAnswer: 'Where are your children?',
              altAnswers: ['Where are your children'],
              explanation: '"Children" is plural, so use are.',
            },
            {
              id: 'p2-6',
              type: 'fill-blank',
              prompt: '(your neighbours / from Brazil) → ___',
              translation: 'Твои соседи из Бразилии?',
              correctAnswer: 'Are your neighbours from Brazil?',
              altAnswers: ['Are your neighbours from Brazil'],
              explanation: 'Use Are with the plural subject "your neighbours".',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Постройте вопрос',
          instructions: 'Напишите полный вопрос, используя слова в скобках.',
          questions: [
            {
              id: 'p2-1',
              type: 'fill-blank',
              prompt: '(your sister / at work) → ___',
              translation: 'Твоя сестра на работе?',
              correctAnswer: 'Is your sister at work?',
              altAnswers: ['Is your sister at work'],
              explanation: 'Начинаем с Is, затем ставим подлежащее: Is your sister at work?',
            },
            {
              id: 'p2-2',
              type: 'fill-blank',
              prompt: '(these bags / yours) → ___',
              translation: 'Эти сумки твои?',
              correctAnswer: 'Are these bags yours?',
              altAnswers: ['Are these bags yours'],
              explanation: 'Вопрос да/нет: Are + подлежащее + дополнение?',
            },
            {
              id: 'p2-3',
              type: 'fill-blank',
              prompt: '(why / you / late) → ___',
              translation: 'Почему ты опоздал(а)?',
              correctAnswer: 'Why are you late?',
              altAnswers: ['Why are you late'],
              explanation: 'С why порядок такой: вопросительное слово + are + подлежащее + прилагательное.',
            },
            {
              id: 'p2-4',
              type: 'fill-blank',
              prompt: '(the bank / near here) → ___',
              translation: 'Банк рядом?',
              correctAnswer: 'Is the bank near here?',
              altAnswers: ['Is the bank near here'],
              explanation: 'В вопросе да/нет ставим Is перед подлежащим.',
            },
            {
              id: 'p2-5',
              type: 'fill-blank',
              prompt: '(where / your children) → ___',
              translation: 'Где твои дети?',
              correctAnswer: 'Where are your children?',
              altAnswers: ['Where are your children'],
              explanation: '"Children" — множественное число, поэтому нужен are.',
            },
            {
              id: 'p2-6',
              type: 'fill-blank',
              prompt: '(your neighbours / from Brazil) → ___',
              translation: 'Твои соседи из Бразилии?',
              correctAnswer: 'Are your neighbours from Brazil?',
              altAnswers: ['Are your neighbours from Brazil'],
              explanation: 'С подлежащим во множественном числе "your neighbours" используем Are.',
            },
          ],
        },
      },
    },

    // ─── Step 4: Practice B — question words ─────────────────────────────────
    {
      id: 'step-4-practice-b',
      type: 'practice',
      left: {
        en: {
          title: 'Wh- words',
          explanation:
            'A Wh- question begins with the question word. ' +
            'After that, use <b>am/is/are</b>, then the subject.',
          table: {
            headers: ['Question word', 'Use it for', 'Example'],
            rows: [
              ['Who', 'person', 'Who is that man?'],
              ['Where', 'place', 'Where are your keys?'],
              ['What', 'thing / colour / time', 'What colour is your car?'],
              ['How', 'condition / age', 'How old is your sister?'],
              ['Why', 'reason', 'Why are you upset?'],
            ],
          },
          notes: [
            'Complete the question word first, then check the order: Wh-word + am/is/are + subject.',
            'Use What in common patterns like "What colour...?" and "What time...?"',
          ],
        },
        ru: {
          title: 'Wh-вопросительные слова',
          explanation:
            'Wh-вопрос начинается с вопросительного слова. ' +
            'После него идёт <b>am/is/are</b>, а затем подлежащее.',
          table: {
            headers: ['Слово', 'Когда используем', 'Пример'],
            rows: [
              ['Who', 'человек', 'Who is that man?'],
              ['Where', 'место', 'Where are your keys?'],
              ['What', 'предмет / цвет / время', 'What colour is your car?'],
              ['How', 'состояние / возраст', 'How old is your sister?'],
              ['Why', 'причина', 'Why are you upset?'],
            ],
          },
          notes: [
            'Сначала выберите вопросительное слово, затем проверьте порядок: Wh-слово + am/is/are + подлежащее.',
            'What используется в шаблонах вроде "What colour...?" и "What time...?"',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise B — Complete the question',
          instructions: 'Complete each question with the correct question word.',
          questions: [
            {
              id: 'p3-1',
              type: 'fill-blank',
              prompt: '___ are your parents today? — They\'re fine.',
              translation: 'Как твои родители сегодня? — Они в порядке.',
              correctAnswer: 'How',
              explanation: 'Use How to ask about someone\'s condition.',
            },
            {
              id: 'p3-2',
              type: 'fill-blank',
              prompt: '___ is your notebook? — On the desk.',
              translation: 'Где твоя тетрадь? — На столе.',
              correctAnswer: 'Where',
              explanation: 'Use Where to ask about place.',
            },
            {
              id: 'p3-3',
              type: 'fill-blank',
              prompt: '___ is that woman? — She\'s our new teacher.',
              translation: 'Кто эта женщина? — Это наша новая учительница.',
              correctAnswer: 'Who',
              explanation: 'Use Who when you ask about a person.',
            },
            {
              id: 'p3-4',
              type: 'fill-blank',
              prompt: '___ colour is your car? — Dark blue.',
              translation: 'Какого цвета твоя машина? — Тёмно-синяя.',
              correctAnswer: 'What',
              explanation: 'Use What in the pattern "What colour...?"',
            },
            {
              id: 'p3-5',
              type: 'fill-blank',
              prompt: '___ old is your sister? — She\'s nineteen.',
              translation: 'Сколько лет твоей сестре? — Ей девятнадцать.',
              correctAnswer: 'How',
              explanation: 'Use How in the pattern "How old...?"',
            },
            {
              id: 'p3-6',
              type: 'fill-blank',
              prompt: '___ are you upset? — Because I\'m very tired.',
              translation: 'Почему ты расстроен(а)? — Потому что я очень устал(а).',
              correctAnswer: 'Why',
              explanation: 'Use Why when you ask for a reason.',
            },
          ],
        },
        ru: {
          title: 'Упражнение B — Дополните вопрос',
          instructions: 'Дополните каждый вопрос подходящим вопросительным словом.',
          questions: [
            {
              id: 'p3-1',
              type: 'fill-blank',
              prompt: '___ are your parents today? — They\'re fine.',
              translation: 'Как твои родители сегодня? — Они в порядке.',
              correctAnswer: 'How',
              explanation: 'How используем, когда спрашиваем о состоянии.',
            },
            {
              id: 'p3-2',
              type: 'fill-blank',
              prompt: '___ is your notebook? — On the desk.',
              translation: 'Где твоя тетрадь? — На столе.',
              correctAnswer: 'Where',
              explanation: 'Where используем, когда спрашиваем о месте.',
            },
            {
              id: 'p3-3',
              type: 'fill-blank',
              prompt: '___ is that woman? — She\'s our new teacher.',
              translation: 'Кто эта женщина? — Это наша новая учительница.',
              correctAnswer: 'Who',
              explanation: 'Who используем, когда спрашиваем о человеке.',
            },
            {
              id: 'p3-4',
              type: 'fill-blank',
              prompt: '___ colour is your car? — Dark blue.',
              translation: 'Какого цвета твоя машина? — Тёмно-синяя.',
              correctAnswer: 'What',
              explanation: 'What используем в шаблоне "What colour...?"',
            },
            {
              id: 'p3-5',
              type: 'fill-blank',
              prompt: '___ old is your sister? — She\'s nineteen.',
              translation: 'Сколько лет твоей сестре? — Ей девятнадцать.',
              correctAnswer: 'How',
              explanation: 'How используем в шаблоне "How old...?"',
            },
            {
              id: 'p3-6',
              type: 'fill-blank',
              prompt: '___ are you upset? — Because I\'m very tired.',
              translation: 'Почему ты расстроен(а)? — Потому что я очень устал(а).',
              correctAnswer: 'Why',
              explanation: 'Why используем, когда спрашиваем о причине.',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — am/is/are (questions)',
          description: 'Choose the correct option for each question.',
          questions: [
            {
              id: 'q2-1',
              question: 'Which question is correct?',
              options: ['He is a student?', 'Is he a student?', 'Does he is a student?'],
              correctIndex: 1,
              explanation: 'Move "is" before the subject: Is he…?',
            },
            {
              id: 'q2-2',
              question: '"Are you ready?" — which answer is correct?',
              options: ["Yes, I'm.", 'Yes, I am.', 'Yes, am I.'],
              correctIndex: 1,
              explanation: 'Short positive answers cannot use contractions: "Yes, I am." ✓',
            },
            {
              id: 'q2-3',
              question: 'How do you ask "Где Том?" in English?',
              options: ['Where Tom is?', 'Where is Tom?', 'Tom is where?'],
              correctIndex: 1,
              explanation: 'Wh- questions: question word + is/are + subject.',
            },
            {
              id: 'q2-4',
              question: '"Is she happy?" — negative short answer:',
              options: ["No, she's not. / No, she isn't.", "No, she isn't. (only)", "No, she's. (only)"],
              correctIndex: 0,
              explanation: 'Both "she\'s not" and "she isn\'t" are equally correct.',
            },
            {
              id: 'q2-5',
              question: 'Complete: "___ time is it?"',
              options: ['Which', 'How', 'What'],
              correctIndex: 2,
              explanation: 'We always say "What time is it?" — not "Which time" or "How time".',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — am/is/are (вопросы)',
          description: 'Выберите правильный вариант для каждого вопроса.',
          questions: [
            {
              id: 'q2-1',
              question: 'Какой вопрос правильный?',
              options: ['He is a student?', 'Is he a student?', 'Does he is a student?'],
              correctIndex: 1,
              explanation: 'Переносим "is" перед подлежащим: Is he…?',
            },
            {
              id: 'q2-2',
              question: '"Are you ready?" — какой ответ правильный?',
              options: ["Yes, I'm.", 'Yes, I am.', 'Yes, am I.'],
              correctIndex: 1,
              explanation: 'В кратких положительных ответах нельзя использовать краткую форму: "Yes, I am." ✓',
            },
            {
              id: 'q2-3',
              question: 'Как спросить "Где Том?" по-английски?',
              options: ['Where Tom is?', 'Where is Tom?', 'Tom is where?'],
              correctIndex: 1,
              explanation: 'Wh-вопросы: вопросительное слово + is/are + подлежащее.',
            },
            {
              id: 'q2-4',
              question: '"Is she happy?" — краткий отрицательный ответ:',
              options: ["No, she's not. / No, she isn't.", "No, she isn't. (только)", "No, she's. (только)"],
              correctIndex: 0,
              explanation: 'Оба варианта "she\'s not" и "she isn\'t" одинаково правильны.',
            },
            {
              id: 'q2-5',
              question: 'Дополните: "___ time is it?"',
              options: ['Which', 'How', 'What'],
              correctIndex: 2,
              explanation: 'Всегда говорим "What time is it?" — не "Which time" или "How time".',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────
    {
      id: 'step-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — am/is/are (questions)',
          points: [
            'Yes/No questions: move <b>am/is/are before the subject</b> → Is he? / Are they?',
            'Short positive answers use <b>full form</b>: "Yes, I am." / "Yes, she is." (NOT "Yes, she\'s.")',
            'Short negative answers use contractions: "No, I\'m not." / "No, he isn\'t." / "No, they aren\'t."',
            'Wh- questions: <b>question word + is/are + subject</b> → Where is Tom? / How old are you?',
            'Common Wh- words: <b>where, what, who, why, how, how old, what time</b>',
            '"What is" → "What\'s" / "Where is" → "Where\'s" are common contractions in speech.',
          ],
          nextUnit: 'Unit 3 — I am doing (present continuous)',
        },
        ru: {
          title: 'Итоги — am/is/are (вопросы)',
          points: [
            'Вопросы да/нет: ставим <b>am/is/are перед подлежащим</b> → Is he? / Are they?',
            'Краткие положительные ответы — <b>полная форма</b>: "Yes, I am." / "Yes, she is." (НЕ "Yes, she\'s.")',
            'Краткие отрицательные ответы используют краткие формы: "No, I\'m not." / "No, he isn\'t." / "No, they aren\'t."',
            'Wh-вопросы: <b>вопросительное слово + is/are + подлежащее</b> → Where is Tom? / How old are you?',
            'Основные вопросительные слова: <b>where, what, who, why, how, how old, what time</b>',
            '"What is" → "What\'s" / "Where is" → "Where\'s" — распространённые сокращения в речи.',
          ],
          nextUnit: 'Юнит 3 — I am doing (настоящее длительное)',
        },
      },
    },
  ],
};

export default unit2;
