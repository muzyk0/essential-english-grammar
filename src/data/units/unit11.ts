import type { Unit } from '../../types/unit';

// Unit 11: worked/got/went (past simple)
// Based on Essential Grammar in Use by Raymond Murphy (Unit 11)
const unit11: Unit = {
  id: 'unit11',
  number: 11,
  title: {
    en: 'worked / got / went (past simple)',
    ru: 'worked / got / went (прошедшее простое)',
  },
  description: {
    en: 'Past simple — regular verbs (worked, played) and irregular verbs (went, got, had).',
    ru: 'Прошедшее простое время — правильные глаголы (worked, played) и неправильные глаголы (went, got, had).',
  },
  steps: [
    // ─── Step 1: Regular verbs — past simple positive ───────────────────────────
    {
      id: 'step-1-regular',
      type: 'theory',
      left: {
        en: {
          title: 'Past simple — regular verbs',
          explanation:
            'We use the <b>past simple</b> to talk about things that happened in the past — yesterday, last week, two years ago, etc. ' +
            'For regular verbs, add <b>-ed</b> to the base form. The form is the same for all persons (I, you, he, she, etc.).',
          table: {
            headers: ['Base form', 'Past simple'],
            rows: [
              ['work', 'worked'],
              ['play', 'played'],
              ['clean', 'cleaned'],
              ['watch', 'watched'],
              ['start', 'started'],
              ['live', 'lived'],
              ['want', 'wanted'],
            ],
          },
          notes: [
            'The past simple form is the same for all subjects: I worked, you worked, he worked, they worked, etc.',
            'We often use past time words: yesterday, last week, ago, in 2010, etc.',
          ],
        },
        ru: {
          title: 'Прошедшее простое — правильные глаголы',
          explanation:
            'Мы используем <b>прошедшее простое время (past simple)</b> для событий в прошлом — вчера, на прошлой неделе, два года назад и т.д. ' +
            'У правильных глаголов добавляем <b>-ed</b> к основе. Форма одинакова для всех лиц (I, you, he, she и т.д.).',
          table: {
            headers: ['Основа', 'Прошедшее время'],
            rows: [
              ['work', 'worked'],
              ['play', 'played'],
              ['clean', 'cleaned'],
              ['watch', 'watched'],
              ['start', 'started'],
              ['live', 'lived'],
              ['want', 'wanted'],
            ],
          },
          notes: [
            'Форма прошедшего времени одинакова для всех лиц: I worked, you worked, he worked, they worked и т.д.',
            'Часто используются слова-маркеры прошлого: yesterday, last week, ago, in 2010 и т.д.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Regular verbs in past simple',
          intro: 'Study these sentences. All the verbs are regular — they end in -ed.',
          items: [
            { english: 'I cleaned my room yesterday.', russian: 'Я убрал(а) свою комнату вчера.', highlight: 'cleaned' },
            { english: 'She played tennis last Sunday.', russian: 'Она играла в теннис в прошлое воскресенье.', highlight: 'played' },
            { english: 'We watched a film last night.', russian: 'Мы смотрели фильм вчера вечером.', highlight: 'watched' },
            { english: 'It rained all day yesterday.', russian: 'Вчера весь день шёл дождь.', highlight: 'rained' },
            { english: 'They worked very hard last week.', russian: 'На прошлой неделе они работали очень усердно.', highlight: 'worked' },
            { english: 'He wanted a new bicycle for his birthday.', russian: 'Он хотел новый велосипед на день рождения.', highlight: 'wanted' },
            { english: 'I started a new job two weeks ago.', russian: 'Я начал(а) новую работу две недели назад.', highlight: 'started' },
          ],
        },
        ru: {
          title: 'Примеры — Правильные глаголы в прошедшем времени',
          intro: 'Изучите эти предложения. Все глаголы правильные — они оканчиваются на -ed.',
          items: [
            { english: 'I cleaned my room yesterday.', russian: 'Я убрал(а) свою комнату вчера.', highlight: 'cleaned' },
            { english: 'She played tennis last Sunday.', russian: 'Она играла в теннис в прошлое воскресенье.', highlight: 'played' },
            { english: 'We watched a film last night.', russian: 'Мы смотрели фильм вчера вечером.', highlight: 'watched' },
            { english: 'It rained all day yesterday.', russian: 'Вчера весь день шёл дождь.', highlight: 'rained' },
            { english: 'They worked very hard last week.', russian: 'На прошлой неделе они работали очень усердно.', highlight: 'worked' },
            { english: 'He wanted a new bicycle for his birthday.', russian: 'Он хотел новый велосипед на день рождения.', highlight: 'wanted' },
            { english: 'I started a new job two weeks ago.', russian: 'Я начал(а) новую работу две недели назад.', highlight: 'started' },
          ],
        },
      },
    },

    // ─── Step 2: Irregular verbs ────────────────────────────────────────────────
    {
      id: 'step-2-irregular',
      type: 'examples',
      left: {
        en: {
          title: 'Irregular verbs',
          explanation:
            'Many common verbs are <b>irregular</b> — they do not add -ed. ' +
            'Each irregular verb has its own past form that you need to learn.',
          table: {
            headers: ['Base form', 'Past simple'],
            rows: [
              ['go', 'went'],
              ['get', 'got'],
              ['have', 'had'],
              ['see', 'saw'],
              ['come', 'came'],
              ['buy', 'bought'],
              ['make', 'made'],
              ['eat', 'ate'],
              ['take', 'took'],
              ['do', 'did'],
            ],
          },
          notes: [
            'Irregular verbs must be learned by heart — there is no single rule for forming them.',
            'Some verbs do not change: put → put, cut → cut, shut → shut.',
          ],
        },
        ru: {
          title: 'Неправильные глаголы',
          explanation:
            'Многие распространённые глаголы <b>неправильные</b> — к ним не добавляется -ed. ' +
            'У каждого неправильного глагола своя форма прошедшего времени, которую нужно запомнить.',
          table: {
            headers: ['Основа', 'Прошедшее время'],
            rows: [
              ['go', 'went'],
              ['get', 'got'],
              ['have', 'had'],
              ['see', 'saw'],
              ['come', 'came'],
              ['buy', 'bought'],
              ['make', 'made'],
              ['eat', 'ate'],
              ['take', 'took'],
              ['do', 'did'],
            ],
          },
          notes: [
            'Неправильные глаголы нужно учить наизусть — единого правила нет.',
            'Некоторые глаголы не меняются: put → put, cut → cut, shut → shut.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Irregular verbs in past simple',
          intro: 'These sentences use common irregular verbs. Notice that the past form is different for each verb.',
          items: [
            { english: 'I went to the cinema last night.', russian: 'Я ходил(а) в кино вчера вечером.', highlight: 'went' },
            { english: 'She got a new phone for her birthday.', russian: 'Она получила новый телефон на день рождения.', highlight: 'got' },
            { english: 'We had a great time at the party.', russian: 'Мы отлично провели время на вечеринке.', highlight: 'had' },
            { english: 'He saw his friend at the station.', russian: 'Он увидел своего друга на станции.', highlight: 'saw' },
            { english: 'They came home very late.', russian: 'Они пришли домой очень поздно.', highlight: 'came' },
            { english: 'I bought some bread this morning.', russian: 'Я купил(а) хлеб сегодня утром.', highlight: 'bought' },
            { english: 'She made a cake for the children.', russian: 'Она испекла торт для детей.', highlight: 'made' },
            { english: 'We ate lunch in the park.', russian: 'Мы пообедали в парке.', highlight: 'ate' },
          ],
        },
        ru: {
          title: 'Примеры — Неправильные глаголы в прошедшем времени',
          intro: 'В этих предложениях используются распространённые неправильные глаголы. Обратите внимание, что у каждого глагола своя форма.',
          items: [
            { english: 'I went to the cinema last night.', russian: 'Я ходил(а) в кино вчера вечером.', highlight: 'went' },
            { english: 'She got a new phone for her birthday.', russian: 'Она получила новый телефон на день рождения.', highlight: 'got' },
            { english: 'We had a great time at the party.', russian: 'Мы отлично провели время на вечеринке.', highlight: 'had' },
            { english: 'He saw his friend at the station.', russian: 'Он увидел своего друга на станции.', highlight: 'saw' },
            { english: 'They came home very late.', russian: 'Они пришли домой очень поздно.', highlight: 'came' },
            { english: 'I bought some bread this morning.', russian: 'Я купил(а) хлеб сегодня утром.', highlight: 'bought' },
            { english: 'She made a cake for the children.', russian: 'Она испекла торт для детей.', highlight: 'made' },
            { english: 'We ate lunch in the park.', russian: 'Мы пообедали в парке.', highlight: 'ate' },
          ],
        },
      },
    },

    // ─── Step 3: Spelling rules for -ed ─────────────────────────────────────────
    {
      id: 'step-3-spelling',
      type: 'theory',
      left: {
        en: {
          title: 'Spelling rules for -ed',
          explanation:
            'Most regular verbs just add <b>-ed</b>, but some have spelling changes. ' +
            'Learn these rules to spell past simple forms correctly.',
          table: {
            headers: ['Rule', 'Example'],
            rows: [
              ['Most verbs: + ed', 'work → worked, play → played'],
              ['Verb ends in -e: + d', 'live → lived, like → liked'],
              ['Verb ends in consonant + y: change y to ied', 'try → tried, study → studied'],
              ['Verb ends in vowel + y: + ed', 'play → played, enjoy → enjoyed'],
              ['Short verb ends in vowel + consonant: double consonant + ed', 'stop → stopped, plan → planned'],
            ],
          },
          notes: [
            'Do not double w or x: snow → snowed, fix → fixed.',
            'Two-syllable verbs stressed on the first syllable do not double: visit → visited, happen → happened.',
          ],
        },
        ru: {
          title: 'Правила написания -ed',
          explanation:
            'Большинство правильных глаголов просто добавляют <b>-ed</b>, но у некоторых есть изменения в написании. ' +
            'Запомните эти правила, чтобы писать формы прошедшего времени правильно.',
          table: {
            headers: ['Правило', 'Пример'],
            rows: [
              ['Большинство глаголов: + ed', 'work → worked, play → played'],
              ['Глагол на -e: + d', 'live → lived, like → liked'],
              ['Глагол на согласную + y: меняем y на ied', 'try → tried, study → studied'],
              ['Глагол на гласную + y: + ed', 'play → played, enjoy → enjoyed'],
              ['Короткий глагол на гласную + согласную: удваиваем согласную + ed', 'stop → stopped, plan → planned'],
            ],
          },
          notes: [
            'Не удваиваем w и x: snow → snowed, fix → fixed.',
            'Двухсложные глаголы с ударением на первом слоге не удваиваются: visit → visited, happen → happened.',
          ],
        },
      },
      right: {
        en: {
          title: 'Examples — Spelling in context',
          items: [
            { english: 'She lived in Paris for five years.', russian: 'Она жила в Париже пять лет.', highlight: 'lived' },
            { english: 'He tried to call you yesterday.', russian: 'Он пытался позвонить тебе вчера.', highlight: 'tried' },
            { english: 'They studied English at school.', russian: 'Они учили английский в школе.', highlight: 'studied' },
            { english: 'We enjoyed the concert very much.', russian: 'Нам очень понравился концерт.', highlight: 'enjoyed' },
            { english: 'The bus stopped outside the station.', russian: 'Автобус остановился около станции.', highlight: 'stopped' },
            { english: 'I planned a trip to London.', russian: 'Я запланировал(а) поездку в Лондон.', highlight: 'planned' },
            { english: 'She liked the film a lot.', russian: 'Ей очень понравился фильм.', highlight: 'liked' },
          ],
        },
        ru: {
          title: 'Примеры — Написание в контексте',
          items: [
            { english: 'She lived in Paris for five years.', russian: 'Она жила в Париже пять лет.', highlight: 'lived' },
            { english: 'He tried to call you yesterday.', russian: 'Он пытался позвонить тебе вчера.', highlight: 'tried' },
            { english: 'They studied English at school.', russian: 'Они учили английский в школе.', highlight: 'studied' },
            { english: 'We enjoyed the concert very much.', russian: 'Нам очень понравился концерт.', highlight: 'enjoyed' },
            { english: 'The bus stopped outside the station.', russian: 'Автобус остановился около станции.', highlight: 'stopped' },
            { english: 'I planned a trip to London.', russian: 'Я запланировал(а) поездку в Лондон.', highlight: 'planned' },
            { english: 'She liked the film a lot.', russian: 'Ей очень понравился фильм.', highlight: 'liked' },
          ],
        },
      },
    },

    // ─── Step 4: Practice ─────────────────────────────────────────────────────────
    {
      id: 'step-4-practice',
      type: 'practice',
      left: {
        en: {
          title: 'Quick reference',
          explanation: 'Use this table to help you complete the exercises.',
          table: {
            headers: ['Type', 'Rule', 'Example'],
            rows: [
              ['Regular', '+ ed', 'worked, played'],
              ['Ends in -e', '+ d', 'lived, liked'],
              ['Consonant + y', 'y → ied', 'tried, studied'],
              ['Short vowel + consonant', 'double + ed', 'stopped, planned'],
              ['Irregular', 'learn by heart', 'went, got, had'],
            ],
          },
          notes: ['The past simple form is the same for all persons.'],
        },
        ru: {
          title: 'Краткий справочник',
          explanation: 'Используйте эту таблицу при выполнении упражнений.',
          table: {
            headers: ['Тип', 'Правило', 'Пример'],
            rows: [
              ['Правильный', '+ ed', 'worked, played'],
              ['На -e', '+ d', 'lived, liked'],
              ['Согласная + y', 'y → ied', 'tried, studied'],
              ['Гласная + согласная', 'удвоение + ed', 'stopped, planned'],
              ['Неправильный', 'учить наизусть', 'went, got, had'],
            ],
          },
          notes: ['Форма прошедшего времени одинакова для всех лиц.'],
        },
      },
      right: {
        en: {
          title: 'Exercise — Fill in the blanks',
          instructions: 'Write the past simple form of the verb in brackets.',
          questions: [
            {
              id: 'p11-1',
              type: 'fill-blank',
              prompt: 'I ___ to work yesterday. (walk)',
              translation: "Я вчера ходил(а) на работу пешком.",
              correctAnswer: 'walked',
              explanation: 'walk is regular: walk + ed = walked.',
            },
            {
              id: 'p11-2',
              type: 'fill-blank',
              prompt: 'She ___ a new dress last week. (buy)',
              translation: "На прошлой неделе она купила новое платье.",
              correctAnswer: 'bought',
              explanation: 'buy is irregular: buy → bought.',
            },
            {
              id: 'p11-3',
              type: 'fill-blank',
              prompt: 'We ___ football on Saturday. (play)',
              translation: "В субботу мы играли в футбол.",
              correctAnswer: 'played',
              explanation: 'play is regular: play + ed = played (vowel + y → just add -ed).',
            },
            {
              id: 'p11-4',
              type: 'fill-blank',
              prompt: 'He ___ home at 6 o\'clock. (come)',
              translation: "Он пришёл домой в шесть часов.",
              correctAnswer: 'came',
              explanation: 'come is irregular: come → came.',
            },
            {
              id: 'p11-5',
              type: 'fill-blank',
              prompt: 'They ___ very hard for the exam. (study)',
              translation: "Они усердно готовились к экзамену.",
              correctAnswer: 'studied',
              explanation: 'study ends in consonant + y: y → ied = studied.',
            },
            {
              id: 'p11-6',
              type: 'fill-blank',
              prompt: 'I ___ a letter to my friend. (write)',
              translation: "Я написал(а) письмо своему другу.",
              correctAnswer: 'wrote',
              explanation: 'write is irregular: write → wrote.',
            },
          ],
        },
        ru: {
          title: 'Упражнение — Вставьте пропущенное слово',
          instructions: 'Напишите форму прошедшего времени глагола в скобках.',
          questions: [
            {
              id: 'p11-1',
              type: 'fill-blank',
              prompt: 'I ___ to work yesterday. (walk)',
              translation: "Я вчера ходил(а) на работу пешком.",
              correctAnswer: 'walked',
              explanation: 'walk — правильный глагол: walk + ed = walked.',
            },
            {
              id: 'p11-2',
              type: 'fill-blank',
              prompt: 'She ___ a new dress last week. (buy)',
              translation: "На прошлой неделе она купила новое платье.",
              correctAnswer: 'bought',
              explanation: 'buy — неправильный глагол: buy → bought.',
            },
            {
              id: 'p11-3',
              type: 'fill-blank',
              prompt: 'We ___ football on Saturday. (play)',
              translation: "В субботу мы играли в футбол.",
              correctAnswer: 'played',
              explanation: 'play — правильный глагол: play + ed = played (гласная + y → просто добавляем -ed).',
            },
            {
              id: 'p11-4',
              type: 'fill-blank',
              prompt: 'He ___ home at 6 o\'clock. (come)',
              translation: "Он пришёл домой в шесть часов.",
              correctAnswer: 'came',
              explanation: 'come — неправильный глагол: come → came.',
            },
            {
              id: 'p11-5',
              type: 'fill-blank',
              prompt: 'They ___ very hard for the exam. (study)',
              translation: "Они усердно готовились к экзамену.",
              correctAnswer: 'studied',
              explanation: 'study оканчивается на согласную + y: y → ied = studied.',
            },
            {
              id: 'p11-6',
              type: 'fill-blank',
              prompt: 'I ___ a letter to my friend. (write)',
              translation: "Я написал(а) письмо своему другу.",
              correctAnswer: 'wrote',
              explanation: 'write — неправильный глагол: write → wrote.',
            },
          ],
        },
      },
    },

    // ─── Step 5: Quiz ─────────────────────────────────────────────────────────────
    {
      id: 'step-5-quiz',
      type: 'quiz',
      content: {
        en: {
          title: 'Quick Quiz — Past Simple',
          description: 'Test your knowledge! Choose the correct answer for each question.',
          questions: [
            {
              id: 'q11-1',
              question: 'What is the past simple of "go"?',
              options: ['goed', 'went', 'gone'],
              correctIndex: 1,
              explanation: 'go is irregular: go → went.',
            },
            {
              id: 'q11-2',
              question: 'Which sentence is correct?',
              options: ['She plaied tennis yesterday.', 'She played tennis yesterday.', 'She playied tennis yesterday.'],
              correctIndex: 1,
              explanation: 'play ends in vowel + y, so we just add -ed: played.',
            },
            {
              id: 'q11-3',
              question: 'What is the past simple of "stop"?',
              options: ['stoped', 'stopped', 'stopt'],
              correctIndex: 1,
              explanation: 'stop is a short verb ending in vowel + consonant: double the p → stopped.',
            },
            {
              id: 'q11-4',
              question: 'Complete: "They ___ dinner at a restaurant last night."',
              options: ['haved', 'has', 'had'],
              correctIndex: 2,
              explanation: 'have is irregular: have → had.',
            },
            {
              id: 'q11-5',
              question: 'What is the past simple of "study"?',
              options: ['studyed', 'studied', 'studed'],
              correctIndex: 1,
              explanation: 'study ends in consonant + y: change y to ied → studied.',
            },
          ],
        },
        ru: {
          title: 'Быстрый квиз — Прошедшее простое время',
          description: 'Проверьте свои знания! Выберите правильный ответ для каждого вопроса.',
          questions: [
            {
              id: 'q11-1',
              question: 'Какая форма прошедшего времени у "go"?',
              options: ['goed', 'went', 'gone'],
              correctIndex: 1,
              explanation: 'go — неправильный глагол: go → went.',
            },
            {
              id: 'q11-2',
              question: 'Какое предложение правильное?',
              options: ['She plaied tennis yesterday.', 'She played tennis yesterday.', 'She playied tennis yesterday.'],
              correctIndex: 1,
              explanation: 'play оканчивается на гласную + y, поэтому просто добавляем -ed: played.',
            },
            {
              id: 'q11-3',
              question: 'Какая форма прошедшего времени у "stop"?',
              options: ['stoped', 'stopped', 'stopt'],
              correctIndex: 1,
              explanation: 'stop — короткий глагол на гласную + согласную: удваиваем p → stopped.',
            },
            {
              id: 'q11-4',
              question: 'Дополните: "They ___ dinner at a restaurant last night."',
              options: ['haved', 'has', 'had'],
              correctIndex: 2,
              explanation: 'have — неправильный глагол: have → had.',
            },
            {
              id: 'q11-5',
              question: 'Какая форма прошедшего времени у "study"?',
              options: ['studyed', 'studied', 'studed'],
              correctIndex: 1,
              explanation: 'study оканчивается на согласную + y: меняем y на ied → studied.',
            },
          ],
        },
      },
    },

    // ─── Step 6: Summary ──────────────────────────────────────────────────────────
    {
      id: 'step-6-summary',
      type: 'summary',
      content: {
        en: {
          title: 'Summary — Past Simple',
          points: [
            'Regular verbs: add <b>-ed</b> → worked, played, cleaned.',
            'Verb ends in <b>-e</b>: just add <b>-d</b> → lived, liked.',
            'Consonant + <b>y</b>: change y to <b>ied</b> → tried, studied.',
            'Short verb ending in vowel + consonant: <b>double</b> the last letter + ed → stopped, planned.',
            'Irregular verbs have special forms: go → <b>went</b>, get → <b>got</b>, have → <b>had</b>, see → <b>saw</b>.',
            'The past simple form is the <b>same for all persons</b> (I went, she went, they went).',
          ],
          nextUnit: "Unit 12 — I didn't ... / Did you ...? (past simple)",
        },
        ru: {
          title: 'Итоги — Прошедшее простое время',
          points: [
            'Правильные глаголы: добавляем <b>-ed</b> → worked, played, cleaned.',
            'Глагол на <b>-e</b>: добавляем только <b>-d</b> → lived, liked.',
            'Согласная + <b>y</b>: меняем y на <b>ied</b> → tried, studied.',
            'Короткий глагол на гласную + согласную: <b>удваиваем</b> последнюю букву + ed → stopped, planned.',
            'Неправильные глаголы имеют особые формы: go → <b>went</b>, get → <b>got</b>, have → <b>had</b>, see → <b>saw</b>.',
            'Форма прошедшего времени <b>одинакова для всех лиц</b> (I went, she went, they went).',
          ],
          nextUnit: 'Юнит 12 — I didn\'t ... / Did you ...? (прошедшее простое)',
        },
      },
    },
  ],
};

export default unit11;
