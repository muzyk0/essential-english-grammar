import type { ExampleItem, PracticeExample, PracticeQuestion, Unit } from '../../types/unit';

const ANSWER_WORD_PATTERN = "[a-z0-9]+(?:[:.,/'’\\-][a-z0-9]+)*(?:['’.])?";
const PAST_SIMPLE_PRE_VERB_MODIFIER_PATTERN =
  "(?:(?:just|only|really|finally|already|still|never|often|usually|always|sometimes|also|[a-z]+ly)\\s+)*";
const PAST_SIMPLE_REGULAR_VERB_PATTERN = "[a-z]+(?:ed|ied)";
const PAST_SIMPLE_DISTINCT_VERB_PATTERN = [
  'ate', 'became', 'began', 'bit', 'blew', 'bought', 'broke', 'brought', 'built', 'burned',
  'burnt', 'came', 'caught', 'chose', 'did', 'drank', 'dreamed', 'dreamt', 'drew', 'drove',
  'dug', 'fell', 'fed', 'felt', 'flew', 'fought', 'forgot', 'found', 'gave', 'got', 'grew',
  'had', 'heard', 'held', 'hid', 'hung', 'kept', 'knew', 'laid', 'lay', 'learned', 'learnt',
  'led', 'left', 'lent', 'lit', 'lost', 'made', 'meant', 'met', 'paid', 'rang', 'ran', 'rode',
  'rose', 'said', 'sang', 'sat', 'saw', 'sent', 'shone', 'shot', 'showed', 'slept', 'smelled',
  'smelt', 'sold', 'spent', 'spoke', 'stood', 'stole', 'stuck', 'stung', 'swept', 'swam',
  'swore', 'taught', 'thought', 'threw', 'told', 'took', 'tore', 'understood', 'went', 'won',
  'woke', 'wore', 'wrote',
].join('|');
const PAST_SIMPLE_SAME_FORM_VERB_PATTERN = [
  'beat', 'cost', 'cut', 'hit', 'hurt', 'let', 'put', 'read', 'set', 'shut',
].join('|');
const PAST_SIMPLE_POSITIVE_VERB_PATTERN = [
  PAST_SIMPLE_REGULAR_VERB_PATTERN,
  PAST_SIMPLE_DISTINCT_VERB_PATTERN,
  PAST_SIMPLE_SAME_FORM_VERB_PATTERN,
].join('|');
const YESTERDAY_I_POSITIVE_COMPLETION_PATTERNS = [
  `^${PAST_SIMPLE_PRE_VERB_MODIFIER_PATTERN}(?:${PAST_SIMPLE_POSITIVE_VERB_PATTERN})(?:\\s+${ANSWER_WORD_PATTERN})*(?:[.!?])?$`,
];

const regularExamples: ExampleItem[] = [
  {
    english: 'They watched a football match yesterday evening.',
    russian: 'Они смотрели футбольный матч вчера вечером.',
    highlight: 'watched',
  },
  {
    english: 'I cleaned my bike on Saturday morning.',
    russian: 'Я почистил(а) велосипед в субботу утром.',
    highlight: 'cleaned',
  },
  {
    english: 'The concert started at eight and finished before eleven.',
    russian: 'Концерт начался в восемь и закончился до одиннадцати.',
    highlight: 'started',
  },
  {
    english: 'We danced a lot at Mia\'s birthday party.',
    russian: 'Мы много танцевали на дне рождения Мии.',
    highlight: 'danced',
  },
  {
    english: 'It rained for most of the afternoon.',
    russian: 'Почти весь день после обеда шёл дождь.',
    highlight: 'rained',
  },
  {
    english: 'My grandparents stayed with us last weekend.',
    russian: 'Мои бабушка и дедушка гостили у нас в прошлые выходные.',
    highlight: 'stayed',
  },
];

const irregularExamples: ExampleItem[] = [
  {
    english: 'I got up late on Sunday.',
    russian: 'В воскресенье я встал(а) поздно.',
    highlight: 'got',
  },
  {
    english: 'We did a lot before lunch.',
    russian: 'Мы многое сделали до обеда.',
    highlight: 'did',
  },
  {
    english: 'Nora went to the coast last weekend.',
    russian: 'В прошлые выходные Нора ездила на побережье.',
    highlight: 'went',
  },
  {
    english: 'My brother came in and sat by the fire.',
    russian: 'Мой брат вошёл и сел у камина.',
    highlight: 'came',
  },
  {
    english: 'She bought flowers for her grandmother.',
    russian: 'Она купила цветы для своей бабушки.',
    highlight: 'bought',
  },
  {
    english: 'Leo took a taxi home after the concert.',
    russian: 'Лео взял такси домой после концерта.',
    highlight: 'took',
  },
];

const spellingExamples: ExampleItem[] = [
  {
    english: 'She tried to phone me twice.',
    russian: 'Она дважды пыталась мне позвонить.',
    highlight: 'tried',
  },
  {
    english: 'We studied together before the exam.',
    russian: 'Мы вместе занимались перед экзаменом.',
    highlight: 'studied',
  },
  {
    english: 'I copied the address into my notebook.',
    russian: 'Я переписал(а) адрес в блокнот.',
    highlight: 'copied',
  },
  {
    english: 'The bus stopped outside the station.',
    russian: 'Автобус остановился у станции.',
    highlight: 'stopped',
  },
  {
    english: 'They planned everything carefully.',
    russian: 'Они всё тщательно спланировали.',
    highlight: 'planned',
  },
];

const exercise1Examples: PracticeExample[] = [
  {
    cue: '1',
    answer: 'I cleaned my teeth three times yesterday.',
  },
];

const exercise1Questions: PracticeQuestion[] = [
  {
    id: 'u11-ex1-2',
    displayNumber: '2',
    type: 'fill-blank',
    prompt: 'It was hot in the room, so I ___ the window.',
    translation: 'В комнате было жарко, поэтому я открыл(а) окно.',
    correctAnswer: 'opened',
  },
  {
    id: 'u11-ex1-3',
    displayNumber: '3',
    type: 'fill-blank',
    prompt: 'The film ___ at 7:15 and ___ at 10 o\'clock.',
    translation: 'Фильм начался в 7:15 и закончился в 10 часов.',
    correctAnswer: 'started ... finished',
    blankAnswers: [
      { correctAnswer: 'started' },
      { correctAnswer: 'finished' },
    ],
  },
  {
    id: 'u11-ex1-4',
    displayNumber: '4',
    type: 'fill-blank',
    prompt: 'When I was a child, I ___ to be a doctor.',
    translation: 'Когда я был(а) ребёнком, я хотел(а) стать врачом.',
    correctAnswer: 'wanted',
  },
  {
    id: 'u11-ex1-5',
    displayNumber: '5',
    type: 'fill-blank',
    prompt: 'The accident ___ last Sunday afternoon.',
    translation: 'Авария произошла в прошлое воскресенье днём.',
    correctAnswer: 'happened',
  },
  {
    id: 'u11-ex1-6',
    displayNumber: '6',
    type: 'fill-blank',
    prompt: 'The weather is nice today, but yesterday it ___ all day.',
    translation: 'Сегодня погода хорошая, а вчера дождь шёл весь день.',
    correctAnswer: 'rained',
  },
  {
    id: 'u11-ex1-7',
    displayNumber: '7',
    type: 'fill-blank',
    prompt: 'We ___ our holiday last year. We ___ at a very nice place.',
    translation: 'Нам очень понравился отпуск в прошлом году. Мы останавливались в очень приятном месте.',
    correctAnswer: 'enjoyed ... stayed',
    blankAnswers: [
      { correctAnswer: 'enjoyed' },
      { correctAnswer: 'stayed' },
    ],
  },
  {
    id: 'u11-ex1-8',
    displayNumber: '8',
    type: 'fill-blank',
    prompt: 'Anna\'s grandfather ___ when he was 90 years old.',
    translation: 'Дедушка Анны умер, когда ему было 90 лет.',
    correctAnswer: 'died',
  },
];

const exercise2Examples: PracticeExample[] = [
  {
    cue: '1 get',
    answer: 'got',
  },
];

const exercise2Questions: PracticeQuestion[] = [
  { id: 'u11-ex2-2', displayNumber: '2', type: 'fill-blank', prompt: 'see -> ___', correctAnswer: 'saw' },
  { id: 'u11-ex2-3', displayNumber: '3', type: 'fill-blank', prompt: 'play -> ___', correctAnswer: 'played' },
  { id: 'u11-ex2-4', displayNumber: '4', type: 'fill-blank', prompt: 'pay -> ___', correctAnswer: 'paid' },
  { id: 'u11-ex2-5', displayNumber: '5', type: 'fill-blank', prompt: 'visit -> ___', correctAnswer: 'visited' },
  { id: 'u11-ex2-6', displayNumber: '6', type: 'fill-blank', prompt: 'buy -> ___', correctAnswer: 'bought' },
  { id: 'u11-ex2-7', displayNumber: '7', type: 'fill-blank', prompt: 'go -> ___', correctAnswer: 'went' },
  { id: 'u11-ex2-8', displayNumber: '8', type: 'fill-blank', prompt: 'think -> ___', correctAnswer: 'thought' },
  { id: 'u11-ex2-9', displayNumber: '9', type: 'fill-blank', prompt: 'copy -> ___', correctAnswer: 'copied' },
  { id: 'u11-ex2-10', displayNumber: '10', type: 'fill-blank', prompt: 'know -> ___', correctAnswer: 'knew' },
  { id: 'u11-ex2-11', displayNumber: '11', type: 'fill-blank', prompt: 'put -> ___', correctAnswer: 'put' },
  { id: 'u11-ex2-12', displayNumber: '12', type: 'fill-blank', prompt: 'speak -> ___', correctAnswer: 'spoke' },
];

const exercise3Examples: PracticeExample[] = [
  {
    cue: '1 fly',
    answer: 'Last Tuesday Lisa flew from London to Madrid.',
  },
];

const exercise3Questions: PracticeQuestion[] = [
  {
    id: 'u11-ex3-2-3',
    displayNumber: '2-3',
    type: 'fill-blank',
    cue: 'get / have',
    prompt: 'She ___ up at six o\'clock in the morning and ___ a cup of coffee.',
    correctAnswer: 'got ... had',
    blankAnswers: [
      { correctAnswer: 'got' },
      { correctAnswer: 'had' },
    ],
  },
  {
    id: 'u11-ex3-4',
    displayNumber: '4',
    type: 'fill-blank',
    cue: 'leave',
    prompt: 'At 6:30 she ___ home.',
    correctAnswer: 'left',
  },
  {
    id: 'u11-ex3-5-6',
    displayNumber: '5-6',
    type: 'fill-blank',
    cue: 'drive / get',
    prompt: 'Then she ___ to the airport. When she ___ there, ...',
    correctAnswer: 'drove ... got',
    blankAnswers: [
      { correctAnswer: 'drove' },
      { correctAnswer: 'got' },
    ],
  },
  {
    id: 'u11-ex3-7-8',
    displayNumber: '7-8',
    type: 'fill-blank',
    cue: 'park / walk',
    prompt: '... she ___ the car and ___ to the terminal.',
    correctAnswer: 'parked ... walked',
    blankAnswers: [
      { correctAnswer: 'parked' },
      { correctAnswer: 'walked' },
    ],
  },
  {
    id: 'u11-ex3-9-10',
    displayNumber: '9-10',
    type: 'fill-blank',
    cue: 'check / have',
    prompt: 'She ___ in. Then she ___ breakfast at a cafe.',
    correctAnswer: 'checked ... had',
    blankAnswers: [
      { correctAnswer: 'checked' },
      { correctAnswer: 'had' },
    ],
  },
  {
    id: 'u11-ex3-11',
    displayNumber: '11',
    type: 'fill-blank',
    cue: 'wait',
    prompt: 'After that she ___ for her flight.',
    correctAnswer: 'waited',
  },
  {
    id: 'u11-ex3-12-13',
    displayNumber: '12-13',
    type: 'fill-blank',
    cue: 'depart / arrive',
    prompt: 'The plane ___ on time and ___ in Madrid two hours later.',
    correctAnswer: 'departed ... arrived',
    blankAnswers: [
      { correctAnswer: 'departed' },
      { correctAnswer: 'arrived' },
    ],
  },
  {
    id: 'u11-ex3-14',
    displayNumber: '14',
    type: 'fill-blank',
    cue: 'take',
    prompt: 'Finally she ___ a taxi to her hotel in the city centre.',
    correctAnswer: 'took',
  },
];

const exercise4Examples: PracticeExample[] = [
  {
    cue: '1 James always goes to work by car.',
    answer: 'Yesterday he went to work by car.',
  },
];

const exercise4Questions: PracticeQuestion[] = [
  {
    id: 'u11-ex4-2',
    displayNumber: '2',
    type: 'fill-blank',
    prompt: 'Rachel often loses her keys. She ___ last week.',
    translation: 'Рэйчел часто теряет ключи. На прошлой неделе она потеряла их.',
    correctAnswer: 'lost her keys',
  },
  {
    id: 'u11-ex4-3',
    displayNumber: '3',
    type: 'fill-blank',
    prompt: 'Kate meets her friends every evening. She ___ yesterday evening.',
    translation: 'Кейт встречается с друзьями каждый вечер. Вчера вечером она встретилась с ними.',
    correctAnswer: 'met her friends',
  },
  {
    id: 'u11-ex4-4',
    displayNumber: '4',
    type: 'fill-blank',
    prompt: 'I buy a newspaper every day. Yesterday I ___.',
    translation: 'Я покупаю газету каждый день. Вчера я купил(а) газету.',
    correctAnswer: 'bought a newspaper',
  },
  {
    id: 'u11-ex4-5',
    displayNumber: '5',
    type: 'fill-blank',
    prompt: 'We often go to the cinema at weekends. Last Sunday we ___.',
    translation: 'Мы часто ходим в кино по выходным. В прошлое воскресенье мы ходили в кино.',
    correctAnswer: 'went to the cinema',
  },
  {
    id: 'u11-ex4-6',
    displayNumber: '6',
    type: 'fill-blank',
    prompt: 'I eat an orange every day. Yesterday I ___.',
    translation: 'Я ем апельсин каждый день. Вчера я съел(а) апельсин.',
    correctAnswer: 'ate an orange',
  },
  {
    id: 'u11-ex4-7',
    displayNumber: '7',
    type: 'fill-blank',
    prompt: 'Tom always has a shower in the morning. This morning he ___.',
    translation: 'Том всегда принимает душ утром. Сегодня утром он принял душ.',
    correctAnswer: 'had a shower',
  },
  {
    id: 'u11-ex4-8',
    displayNumber: '8',
    type: 'fill-blank',
    prompt: 'Our friends often come to see us. They ___ last Friday.',
    translation: 'Наши друзья часто приходят к нам. В прошлую пятницу они пришли к нам.',
    correctAnswer: 'came to see us',
  },
];

const exercise5Examples: PracticeExample[] = [
  {
    cue: '1',
    answer: 'Yesterday I went to the theatre.',
  },
];

const exercise5Questions: PracticeQuestion[] = [
  {
    id: 'u11-ex5-2',
    displayNumber: '2',
    type: 'fill-blank',
    answerMode: 'example',
    prompt: 'Yesterday I ___.',
    translation: 'Напишите собственное предложение о том, что вы делали вчера.',
    correctAnswer: 'got up late',
    acceptedPatterns: YESTERDAY_I_POSITIVE_COMPLETION_PATTERNS,
  },
  {
    id: 'u11-ex5-3',
    displayNumber: '3',
    type: 'fill-blank',
    answerMode: 'example',
    prompt: 'Yesterday I ___.',
    translation: 'Напишите собственное предложение о том, что вы делали вчера.',
    correctAnswer: 'met some friends at lunchtime',
    acceptedPatterns: YESTERDAY_I_POSITIVE_COMPLETION_PATTERNS,
  },
  {
    id: 'u11-ex5-4',
    displayNumber: '4',
    type: 'fill-blank',
    answerMode: 'example',
    prompt: 'Yesterday I ___.',
    translation: 'Напишите собственное предложение о том, что вы делали вчера.',
    correctAnswer: 'went to the supermarket',
    acceptedPatterns: YESTERDAY_I_POSITIVE_COMPLETION_PATTERNS,
  },
  {
    id: 'u11-ex5-5',
    displayNumber: '5',
    type: 'fill-blank',
    answerMode: 'example',
    prompt: 'Yesterday I ___.',
    translation: 'Напишите собственное предложение о том, что вы делали вчера.',
    correctAnswer: 'phoned a lot of people',
    acceptedPatterns: YESTERDAY_I_POSITIVE_COMPLETION_PATTERNS,
  },
  {
    id: 'u11-ex5-6',
    displayNumber: '6',
    type: 'fill-blank',
    answerMode: 'example',
    prompt: 'Yesterday I ___.',
    translation: 'Напишите собственное предложение о том, что вы делали вчера.',
    correctAnswer: 'lost my keys',
    acceptedPatterns: YESTERDAY_I_POSITIVE_COMPLETION_PATTERNS,
  },
];

const unit11: Unit = {
  id: 'unit11',
  number: 11,
  title: {
    en: 'worked / got / went (past simple)',
    ru: 'worked / got / went (прошедшее простое)',
  },
  description: {
    en: 'Past simple positive forms with regular verbs, spelling changes, and common irregular verbs.',
    ru: 'Утвердительные формы past simple: правильные глаголы, изменения в написании и частые неправильные формы.',
  },
  steps: [
    {
      id: 'step-1-regular',
      type: 'theory',
      left: {
        en: {
          title: 'Past simple: regular verbs',
          explanation:
            'We use the <b>past simple</b> for finished actions in the past. Compare <b>They watch TV every evening</b> with <b>They watched TV yesterday evening</b>. With regular verbs, we usually add <b>-ed</b>, and the past form stays the same with all subjects.',
          table: {
            headers: ['Point', 'Example'],
            rows: [
              ['Present simple', 'They watch TV every evening.'],
              ['Past simple', 'They watched TV yesterday evening.'],
              ['Same form for all subjects', 'I watched / she watched / they watched'],
            ],
          },
          notes: [
            'Past simple often goes with finished time phrases such as yesterday, last week, or two years ago.',
            'Positive past simple does not change for I, you, he, she, we, or they.',
          ],
        },
        ru: {
          title: 'Past simple: правильные глаголы',
          explanation:
            'Мы используем <b>past simple</b> для законченных действий в прошлом. Сравните <b>They watch TV every evening</b> и <b>They watched TV yesterday evening</b>. У правильных глаголов мы обычно добавляем <b>-ed</b>, и форма одинакова со всеми подлежащими.',
          table: {
            headers: ['Идея', 'Пример'],
            rows: [
              ['Present simple', 'They watch TV every evening.'],
              ['Past simple', 'They watched TV yesterday evening.'],
              ['Одна форма для всех подлежащих', 'I watched / she watched / they watched'],
            ],
          },
          notes: [
            'Past simple часто употребляется со словами yesterday, last week, two years ago и другими завершёнными моментами.',
            'В утвердительной форме past simple не меняется для I, you, he, she, we и they.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Regular past forms',
          intro: 'These examples keep the focus on regular positive forms in the past.',
          items: regularExamples,
        },
        ru: {
          title: 'Примеры — Правильные формы в прошлом',
          intro: 'Здесь собраны примеры с правильными утвердительными формами в прошлом.',
          items: regularExamples,
        },
      },
    },
    {
      id: 'step-2-irregular',
      type: 'examples',
      left: {
        en: {
          title: 'Common irregular verbs',
          explanation:
            'Some verbs do <b>not</b> add <b>-ed</b>. Their past simple forms are irregular, so you need to learn them one by one.',
          table: {
            headers: ['Base form', 'Past simple'],
            rows: [
              ['begin', 'began'],
              ['buy', 'bought'],
              ['come', 'came'],
              ['do', 'did'],
              ['drink', 'drank'],
              ['eat', 'ate'],
              ['get', 'got'],
              ['go', 'went'],
              ['have', 'had'],
              ['know', 'knew'],
              ['make', 'made'],
              ['put', 'put'],
              ['read', 'read (red)'],
              ['say', 'said'],
              ['see', 'saw'],
              ['take', 'took'],
              ['write', 'wrote'],
            ],
          },
          notes: [
            'These forms must be learned; there is no single -ed rule for them.',
            'Some irregular verbs do not change in spelling, for example put -> put.',
          ],
        },
        ru: {
          title: 'Частые неправильные глаголы',
          explanation:
            'Некоторые глаголы <b>не</b> образуют past simple с помощью <b>-ed</b>. Их формы неправильные, поэтому их нужно запоминать отдельно.',
          table: {
            headers: ['Начальная форма', 'Past simple'],
            rows: [
              ['begin', 'began'],
              ['buy', 'bought'],
              ['come', 'came'],
              ['do', 'did'],
              ['drink', 'drank'],
              ['eat', 'ate'],
              ['get', 'got'],
              ['go', 'went'],
              ['have', 'had'],
              ['know', 'knew'],
              ['make', 'made'],
              ['put', 'put'],
              ['read', 'read (red)'],
              ['say', 'said'],
              ['see', 'saw'],
              ['take', 'took'],
              ['write', 'wrote'],
            ],
          },
          notes: [
            'Эти формы нужно запоминать отдельно: общего правила с -ed для них нет.',
            'Некоторые неправильные глаголы не меняются на письме, например put -> put.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Irregular forms in sentences',
          intro: 'Notice how the past form changes from verb to verb.',
          items: irregularExamples,
        },
        ru: {
          title: 'Примеры — Неправильные формы в предложениях',
          intro: 'Обратите внимание, что у каждого такого глагола своя форма прошедшего времени.',
          items: irregularExamples,
        },
      },
    },
    {
      id: 'step-3-spelling',
      type: 'theory',
      left: {
        en: {
          title: 'Spelling changes with -ed',
          explanation:
            'Most regular verbs simply add <b>-ed</b>, but some common spelling patterns change before that ending.',
          table: {
            headers: ['Pattern', 'Examples'],
            rows: [
              ['consonant + y -> ied', 'try -> tried, study -> studied, copy -> copied'],
              ['short vowel + consonant -> double + ed', 'stop -> stopped, plan -> planned'],
            ],
          },
          notes: [
            'These are spelling changes inside regular past forms.',
            'The book points to Appendix 5 if you want to review more spelling patterns.',
          ],
        },
        ru: {
          title: 'Изменения в написании с -ed',
          explanation:
            'Большинство правильных глаголов просто получают <b>-ed</b>, но в некоторых частых моделях написание меняется.',
          table: {
            headers: ['Модель', 'Примеры'],
            rows: [
              ['согласная + y -> ied', 'try -> tried, study -> studied, copy -> copied'],
              ['краткая гласная + согласная -> удвоение + ed', 'stop -> stopped, plan -> planned'],
            ],
          },
          notes: [
            'Это изменения написания внутри правильных форм past simple.',
            'В юните есть ссылка на Appendix 5, если нужно повторить больше орфографических моделей.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Spelling in context',
          intro: 'These sentences show the spelling changes inside complete past simple sentences.',
          items: spellingExamples,
        },
        ru: {
          title: 'Примеры — Написание в контексте',
          intro: 'Эти предложения показывают орфографические изменения внутри полных форм past simple.',
          items: spellingExamples,
        },
      },
    },
    {
      id: 'step-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Keep these form groups separate while you work through the exercises.',
          table: {
            headers: ['Type', 'Pattern', 'Examples'],
            rows: [
              ['Regular', 'verb + ed', 'worked, cleaned'],
              ['Consonant + y', 'y -> ied', 'tried, copied'],
              ['Short vowel + consonant', 'double + ed', 'stopped, planned'],
              ['Irregular', 'learn the form', 'went, got, had'],
            ],
          },
          notes: [
            'Positive past simple uses one form for all subjects.',
            'The exercises move from controlled forms to a short narrative and your own past sentences.',
          ],
        },
        ru: {
          title: 'Краткая опора',
          explanation: 'Во время упражнений держите эти группы форм отдельно друг от друга.',
          table: {
            headers: ['Тип', 'Модель', 'Примеры'],
            rows: [
              ['Правильные', 'verb + ed', 'worked, cleaned'],
              ['Согласная + y', 'y -> ied', 'tried, copied'],
              ['Краткая гласная + согласная', 'double + ed', 'stopped, planned'],
              ['Неправильные', 'нужно запомнить', 'went, got, had'],
            ],
          },
          notes: [
            'В утвердительном past simple используется одна и та же форма для всех подлежащих.',
            'Упражнения идут от контролируемых форм к короткому рассказу и вашим собственным предложениям о прошлом.',
          ],
        },
      },
      right: {
        en: {
          title: 'Exercises — Past simple forms',
          instructions: 'Work through the sections in order: regular forms, mixed past forms, a short story, and personal examples.',
          sections: [
            {
              id: 'u11-ex1-regular-en',
              title: 'Exercise 1 — Complete with a verb from the box',
              instructions: 'Use each verb once in the past simple.',
              wordBank: ['die', 'enjoy', 'finish', 'happen', 'open', 'rain', 'start', 'stay', 'want'],
              examples: exercise1Examples,
              questions: exercise1Questions,
            },
            {
              id: 'u11-ex2-list-en',
              title: 'Exercise 2 — Write the past simple forms',
              instructions: 'Write the past simple form of each verb.',
              examples: exercise2Examples,
              questions: exercise2Questions,
            },
            {
              id: 'u11-ex3-narrative-en',
              title: 'Exercise 3 — Lisa\'s journey to Madrid',
              instructions: 'Put the verbs in the correct past simple form to complete the narrative.',
              examples: exercise3Examples,
              questions: exercise3Questions,
            },
            {
              id: 'u11-ex4-rewrite-en',
              title: 'Exercise 4 — Rewrite these as past events',
              instructions: 'Change the routine sentence into a past simple sentence with the time phrase.',
              examples: exercise4Examples,
              questions: exercise4Questions,
            },
            {
              id: 'u11-ex5-open-en',
              title: 'Exercise 5 — Write about what you did yesterday',
              instructions: 'Write your own past simple sentences. The model answers are only examples.',
              examples: exercise5Examples,
              questions: exercise5Questions,
            },
          ],
        },
        ru: {
          title: 'Упражнения — Формы past simple',
          instructions: 'Идите по порядку: правильные формы, смешанные прошедшие формы, короткий рассказ и собственные примеры о прошлом.',
          sections: [
            {
              id: 'u11-ex1-regular-ru',
              title: 'Упражнение 1 — Дополните глаголом из рамки',
              instructions: 'Используйте каждый глагол один раз в past simple.',
              wordBank: ['die', 'enjoy', 'finish', 'happen', 'open', 'rain', 'start', 'stay', 'want'],
              examples: exercise1Examples,
              questions: exercise1Questions,
            },
            {
              id: 'u11-ex2-list-ru',
              title: 'Упражнение 2 — Напишите формы past simple',
              instructions: 'Запишите форму past simple для каждого глагола.',
              examples: exercise2Examples,
              questions: exercise2Questions,
            },
            {
              id: 'u11-ex3-narrative-ru',
              title: 'Упражнение 3 — Поездка Лизы в Мадрид',
              instructions: 'Поставьте глаголы в правильную форму past simple, чтобы закончить рассказ.',
              examples: exercise3Examples,
              questions: exercise3Questions,
            },
            {
              id: 'u11-ex4-rewrite-ru',
              title: 'Упражнение 4 — Переделайте это в события прошлого',
              instructions: 'Преобразуйте предложение о привычке в предложение о прошлом с данным указателем времени.',
              examples: exercise4Examples,
              questions: exercise4Questions,
            },
            {
              id: 'u11-ex5-open-ru',
              title: 'Упражнение 5 — Напишите, что вы делали вчера',
              instructions: 'Напишите свои предложения в past simple. Образцы справа не являются единственно возможными ответами.',
              examples: exercise5Examples,
              questions: exercise5Questions,
            },
          ],
        },
      },
    },
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Past simple positive forms',
          description: 'Check regular spelling, irregular forms, and the unit\'s main exercise patterns.',
          questions: [
            {
              id: 'q11-1',
              question: 'Which sentence uses the correct regular past form?',
              options: [
                'They watchted TV yesterday evening.',
                'They watched TV yesterday evening.',
                'They watch TV yesterday evening.',
              ],
              correctIndex: 1,
              explanation: 'Regular verbs usually add -ed: watched.',
            },
            {
              id: 'q11-2',
              question: 'What is the past simple of "know"?',
              options: ['knowed', 'known', 'knew'],
              correctIndex: 2,
              explanation: 'know is irregular: know -> knew.',
            },
            {
              id: 'q11-3',
              question: 'Which spelling change is correct?',
              options: ['copy -> copyed', 'copy -> copied', 'copy -> coppied'],
              correctIndex: 1,
              explanation: 'With consonant + y, the y changes to i before -ed.',
            },
            {
              id: 'q11-4',
              question: 'Complete the story: "At the cafe Lisa ___ breakfast."',
              options: ['have', 'had', 'has'],
              correctIndex: 1,
              explanation: 'The story is in the past, and have is irregular: had.',
            },
            {
              id: 'q11-5',
              question: 'Complete the past event: "Yesterday Rachel ___ her keys."',
              options: ['lose', 'lost', 'losed'],
              correctIndex: 1,
              explanation: 'lose is irregular: lost.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Утвердительные формы past simple',
          description: 'Проверьте орфографию правильных форм, неправильные глаголы и основные модели этого юнита.',
          questions: [
            {
              id: 'q11-1',
              question: 'В каком предложении правильная регулярная форма прошедшего времени?',
              options: [
                'They watchted TV yesterday evening.',
                'They watched TV yesterday evening.',
                'They watch TV yesterday evening.',
              ],
              correctIndex: 1,
              explanation: 'У правильных глаголов обычно добавляется -ed: watched.',
            },
            {
              id: 'q11-2',
              question: 'Какая форма past simple у "know"?',
              options: ['knowed', 'known', 'knew'],
              correctIndex: 2,
              explanation: 'know — неправильный глагол: know -> knew.',
            },
            {
              id: 'q11-3',
              question: 'Какое изменение в написании верное?',
              options: ['copy -> copyed', 'copy -> copied', 'copy -> coppied'],
              correctIndex: 1,
              explanation: 'Если глагол заканчивается на согласную + y, перед -ed буква y меняется на i.',
            },
            {
              id: 'q11-4',
              question: 'Дополните рассказ: "At the cafe Lisa ___ breakfast."',
              options: ['have', 'had', 'has'],
              correctIndex: 1,
              explanation: 'Рассказ идёт в прошлом, а have — неправильный глагол: had.',
            },
            {
              id: 'q11-5',
              question: 'Дополните предложение о прошлом: "Yesterday Rachel ___ her keys."',
              options: ['lose', 'lost', 'losed'],
              correctIndex: 1,
              explanation: 'lose — неправильный глагол: lost.',
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
          title: 'Summary — worked / got / went',
          points: [
            'Use the <b>past simple</b> for finished actions in the past: yesterday, last week, two hours ago.',
            'Regular verbs usually add <b>-ed</b>: worked, cleaned, started.',
            'Some regular verbs change spelling: try -> <b>tried</b>, copy -> <b>copied</b>, stop -> <b>stopped</b>.',
            'Irregular verbs have their own forms: get -> <b>got</b>, go -> <b>went</b>, have -> <b>had</b>, take -> <b>took</b>.',
            'Positive past simple uses the <b>same verb form</b> with all subjects.',
            'Unit 12 builds on this by adding <b>did / didn\'t</b> for negatives and questions.',
          ],
          nextUnit: 'Unit 12 — I didn\'t ... / Did you ...?',
        },
        ru: {
          title: 'Итоги — worked / got / went',
          points: [
            'Используйте <b>past simple</b> для законченных действий в прошлом: yesterday, last week, two hours ago.',
            'Правильные глаголы обычно получают <b>-ed</b>: worked, cleaned, started.',
            'У некоторых правильных глаголов меняется написание: try -> <b>tried</b>, copy -> <b>copied</b>, stop -> <b>stopped</b>.',
            'У неправильных глаголов свои формы: get -> <b>got</b>, go -> <b>went</b>, have -> <b>had</b>, take -> <b>took</b>.',
            'В утвердительном past simple используется <b>одна и та же форма</b> со всеми подлежащими.',
            'В юните 12 к этим формам добавляются <b>did / didn\'t</b> для отрицаний и вопросов.',
          ],
          nextUnit: 'Юнит 12 — I didn\'t ... / Did you ...?',
        },
      },
    },
  ],
};

export default unit11;
