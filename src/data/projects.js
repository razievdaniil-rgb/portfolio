export const projects = [
  {
    id: 1,
    name: 'Лендинг — комплекс для суставов',
    category: 'web',
    description: 'Продающий лендинг для биологически активного комплекса для суставов. Адаптивная вёрстка, анимации.',
    stack: ['HTML', 'CSS', 'JS'],
    link: 'http://razievlp.beget.tech/',
  },
  {
    id: 2,
    name: 'Лендинг — кафе Уют',
    category: 'web',
    description: 'Лендинг для кафе с меню, атмосферными блоками и формой бронирования.',
    stack: ['HTML', 'CSS', 'JS'],
    link: 'https://razievdaniil-rgb.github.io/uyt_kitchen/',
  },
  {
    id: 3,
    name: 'Training Log',
    category: 'miniapp',
    description: 'Telegram Mini App — тренировочный дневник. Запись упражнений, история тренировок.',
    stack: ['Vue', 'Node.js', 'grammY'],
    link: 'https://t.me/Training_log_off_bot',
  },
  {
    id: 4,
    name: 'LearnJS',
    category: 'miniapp',
    description: 'Telegram Mini App для повторения JavaScript через квизы. Статистика: дней подряд, правильных и неправильных ответов.',
    stack: ['Vue', 'Node.js'],
    link: null,
  },
  {
    id: 5,
    name: 'GymApp',
    category: 'wip',
    description: 'Мобильное приложение — соцсеть для Gymrat. Тренировочный дневник, дневник питания, ИИ-ассистент.',
    stack: ['React Native', 'Node.js'],
    link: null,
    wip: true,
  },
]

export const categories = [
  { key: 'all', label: 'Все' },
  { key: 'web', label: 'Веб' },
  { key: 'miniapp', label: 'Mini App' },
  { key: 'wip', label: 'В разработке' },
]
