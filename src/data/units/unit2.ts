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
          title: 'Quick reference',
          explanation: 'Forming questions: move <b>am/is/are</b> before the subject.',
          table: {
            headers: ['Subject', 'Yes/No question', 'Wh- question'],
            rows: [
              ['I', 'Am I…?', 'Where am I?'],
              ['he/she/it', 'Is he…?', "Who's he?"],
              ['we/you/they', 'Are they…?', 'Why are they…?'],
            ],
          },
          notes: [
            'Short positive answers use the full form: "Yes, it is." not "Yes, it\'s."',
          ],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Образование вопроса: ставим <b>am/is/are</b> перед подлежащим.',
          table: {
            headers: ['Подлежащее', 'Вопрос да/нет', 'Wh-вопрос'],
            rows: [
              ['I', 'Am I…?', 'Where am I?'],
              ['he/she/it', 'Is he…?', "Who's he?"],
              ['we/you/they', 'Are they…?', 'Why are they…?'],
            ],
          },
          notes: [
            'В кратких положительных ответах полная форма: "Yes, it is." не "Yes, it\'s."',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercise A — Fill in the blanks',
          instructions: 'Write the correct question word or am/is/are to complete each question.',
          questions: [
            {
              id: 'p2-1',
              type: 'fill-blank',
              prompt: '___ she a nurse? — Yes, she is.',
              translation: "Она медсестра? — Да.",
              correctAnswer: 'Is',
              explanation: 'With "she" → Is she?',
            },
            {
              id: 'p2-2',
              type: 'fill-blank',
              prompt: '___ they from Japan? — No, they aren\'t.',
              translation: "Они из Японии? — Нет.",
              correctAnswer: 'Are',
              explanation: 'With "they" → Are they?',
            },
            {
              id: 'p2-3',
              type: 'fill-blank',
              prompt: 'Where ___ your keys?',
              translation: "Где твои ключи?",
              correctAnswer: 'are',
              explanation: '"your keys" is plural → are',
            },
            {
              id: 'p2-4',
              type: 'fill-blank',
              prompt: 'How old ___ your brother?',
              translation: "Сколько лет твоему брату?",
              correctAnswer: 'is',
              explanation: '"your brother" = he → is',
            },
            {
              id: 'p2-5',
              type: 'fill-blank',
              prompt: 'What time ___ it?',
              translation: "Который час?",
              correctAnswer: 'is',
              explanation: '"it" → is',
            },
            {
              id: 'p2-6',
              type: 'fill-blank',
              prompt: '___ I in the right room?',
              translation: "Я в нужной комнате?",
              correctAnswer: 'Am',
              explanation: 'With "I" → Am I?',
            },
          ],
        },
        ru: {
          title: 'Упражнение A — Вставьте пропущенное слово',
          instructions: 'Вставьте правильное вопросительное слово или am/is/are, чтобы завершить вопрос.',
          questions: [
            {
              id: 'p2-1',
              type: 'fill-blank',
              prompt: '___ she a nurse? — Yes, she is.',
              translation: "Она медсестра? — Да.",
              correctAnswer: 'Is',
              explanation: 'С "she" → Is she?',
            },
            {
              id: 'p2-2',
              type: 'fill-blank',
              prompt: '___ they from Japan? — No, they aren\'t.',
              translation: "Они из Японии? — Нет.",
              correctAnswer: 'Are',
              explanation: 'С "they" → Are they?',
            },
            {
              id: 'p2-3',
              type: 'fill-blank',
              prompt: 'Where ___ your keys?',
              translation: "Где твои ключи?",
              correctAnswer: 'are',
              explanation: '"your keys" — множественное число → are',
            },
            {
              id: 'p2-4',
              type: 'fill-blank',
              prompt: 'How old ___ your brother?',
              translation: "Сколько лет твоему брату?",
              correctAnswer: 'is',
              explanation: '"your brother" = he → is',
            },
            {
              id: 'p2-5',
              type: 'fill-blank',
              prompt: 'What time ___ it?',
              translation: "Который час?",
              correctAnswer: 'is',
              explanation: '"it" → is',
            },
            {
              id: 'p2-6',
              type: 'fill-blank',
              prompt: '___ I in the right room?',
              translation: "Я в нужной комнате?",
              correctAnswer: 'Am',
              explanation: 'С "I" → Am I?',
            },
          ],
        },
      },
    },

    // ─── Step 4: Practice B — short answers ──────────────────────────────────
    {
      id: 'step-4-practice-b',
      type: 'practice',
      left: {
        en: {
          title: 'Short answers — reminder',
          explanation: 'Match the question with the correct short answer.',
          table: {
            headers: ['Question', 'Yes', 'No'],
            rows: [
              ['Am I…?', 'Yes, you are.', "No, you aren't."],
              ['Is he/she/it…?', 'Yes, he/she/it is.', "No, he/she/it isn't."],
              ['Are you…?', 'Yes, I am.', "No, I'm not."],
              ['Are we/they…?', 'Yes, we/they are.', "No, we/they aren't."],
            ],
          },
          notes: ['Never contract the positive short answer: "Yes, I am." ✓ / "Yes, I\'m." ✗'],
        },
        ru: {
          title: 'Краткие ответы — напоминание',
          explanation: 'Сопоставьте вопрос с правильным кратким ответом.',
          table: {
            headers: ['Вопрос', 'Да', 'Нет'],
            rows: [
              ['Am I…?', 'Yes, you are.', "No, you aren't."],
              ['Is he/she/it…?', 'Yes, he/she/it is.', "No, he/she/it isn't."],
              ['Are you…?', 'Yes, I am.', "No, I'm not."],
              ['Are we/they…?', 'Yes, we/they are.', "No, we/they aren't."],
            ],
          },
          notes: ['В положительных кратких ответах не используем краткую форму: "Yes, I am." ✓ / "Yes, I\'m." ✗'],
        },
      },
      right: {
        en: {
          title: 'Exercise B — Short answers',
          instructions: 'Write a short answer (positive or negative) for each question.',
          questions: [
            {
              id: 'p3-1',
              type: 'fill-blank',
              prompt: 'Are you hungry? — Yes, ___ .',
              translation: "Ты голоден(голодна)? — Да.",
              correctAnswer: 'I am',
              explanation: 'Positive short answer with "you" question → Yes, I am.',
            },
            {
              id: 'p3-2',
              type: 'fill-blank',
              prompt: 'Is it raining? — No, ___ .',
              translation: "Идёт дождь? — Нет.",
              correctAnswer: "it isn't",
              altAnswers: ["it's not", "it is not"],
              explanation: "Negative short answer → No, it isn't.",
            },
            {
              id: 'p3-3',
              type: 'fill-blank',
              prompt: 'Are they students? — Yes, ___ .',
              translation: "Они студенты? — Да.",
              correctAnswer: 'they are',
              explanation: 'Positive short answer → Yes, they are.',
            },
            {
              id: 'p3-4',
              type: 'fill-blank',
              prompt: 'Is she French? — No, ___ .',
              translation: "Она француженка? — Нет.",
              correctAnswer: "she isn't",
              altAnswers: ["she's not", "she is not"],
              explanation: "Negative → No, she isn't.",
            },
            {
              id: 'p3-5',
              type: 'fill-blank',
              prompt: 'Are you from Moscow? — Yes, ___ .',
              translation: "Ты из Москвы? — Да.",
              correctAnswer: 'I am',
              explanation: 'Positive → Yes, I am.',
            },
          ],
        },
        ru: {
          title: 'Упражнение B — Краткие ответы',
          instructions: 'Напишите краткий ответ (положительный или отрицательный) на каждый вопрос.',
          questions: [
            {
              id: 'p3-1',
              type: 'fill-blank',
              prompt: 'Are you hungry? — Yes, ___ .',
              translation: "Ты голоден(голодна)? — Да.",
              correctAnswer: 'I am',
              explanation: 'Положительный краткий ответ на вопрос с "you" → Yes, I am.',
            },
            {
              id: 'p3-2',
              type: 'fill-blank',
              prompt: 'Is it raining? — No, ___ .',
              translation: "Идёт дождь? — Нет.",
              correctAnswer: "it isn't",
              altAnswers: ["it's not", "it is not"],
              explanation: "Отрицательный краткий ответ → No, it isn't.",
            },
            {
              id: 'p3-3',
              type: 'fill-blank',
              prompt: 'Are they students? — Yes, ___ .',
              translation: "Они студенты? — Да.",
              correctAnswer: 'they are',
              explanation: 'Положительный → Yes, they are.',
            },
            {
              id: 'p3-4',
              type: 'fill-blank',
              prompt: 'Is she French? — No, ___ .',
              translation: "Она француженка? — Нет.",
              correctAnswer: "she isn't",
              altAnswers: ["she's not", "she is not"],
              explanation: "Отрицательный → No, she isn't.",
            },
            {
              id: 'p3-5',
              type: 'fill-blank',
              prompt: 'Are you from Moscow? — Yes, ___ .',
              translation: "Ты из Москвы? — Да.",
              correctAnswer: 'I am',
              explanation: 'Положительный → Yes, I am.',
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
              explanation: 'Переносим "is" перед подлежащее: Is he…?',
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
