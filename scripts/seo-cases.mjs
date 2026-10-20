const base = '/portfolio/'
const origin = 'https://razievdaniil-rgb.github.io'
const cases = {
  rfzavod: {
    service: 'web-development', label: 'Разработка сайтов и веб-приложений',
    context: 'АПГС — проект для поставщика промышленного оборудования. В каталоге покупателю нужно не только найти модель, но и сопоставить её характеристики с условиями своей задачи. В интерфейсе соединены просмотр оборудования, инженерный подбор и следующий шаг к специалисту.',
    decisions: 'В виджете подбора предусмотрены три входа: по рабочей точке Q/H, назначению или известной модели. Вердикт сопровождается причинами рекомендации или исключения, а Q-H график помогает прочитать результат. Сравнение ограничено тремя моделями, чтобы сохранять обозримость вариантов. Переход в карточку строится по XML_ID через настраиваемый URL.',
    limits: 'Отдельный локальный репозиторий виджета использует тестовые данные: живой поиск, цены, остатки и числовые кривые зависят от подключения API. Снимки демонстрируют интерфейс, а не подтверждают актуальные цены и наличие. Инженерный выбор требует проверки специалистом. Коммерческие метрики не измерены.',
    captions: ['Карточка оборудования на сайте rfzavod.com.', 'Десктопная версия интерфейса карточки: рабочая точка, вердикт и график. Данные демонстрационные.', 'Мобильный вариант карточки оборудования. Данные демонстрационные.'],
    sources: 'apgs-pump-selector-work/README.md; src/data/projects.js; изображения public/shots/pump-1.png и pump-2.png.'
  },
  fitdiary: {
    service: 'mobile-mvp', label: 'Разработка мобильных приложений и MVP',
    context: 'FitDiary — собственный офлайн-дневник силовых тренировок для Android. Он объединяет программы пауэрлифтинга, бодибилдинга и армрестлинга с записью фактических результатов. Главная задача — дать продолжить тренировку, не заставляя заново вводить уже заполненные подходы.',
    decisions: 'Каталог доступен без обязательной регистрации. Пользователь выбирает программу, просматривает недели цикла и задаёт расписание. Вес, повторы и выполнение подхода вводятся отдельно. Черновик восстанавливается после выхода; выполненную часть можно сохранить в историю. Это позволяет разделить план и фактическое выполнение, а не отмечать занятие только целиком.',
    limits: 'Данные хранятся локально; облачная синхронизация не заявлена. На снимках — веб-предпросмотр интерфейса от 11 октября 2026, он не заменяет проверку напоминаний и поведения на Android. Публикация обновления 1.1.0 в RuStore здесь не подтверждается. Число установок и удержание не заявлены.',
    captions: ['План занятия и начало тренировки. Веб-предпросмотр.', 'Раздельный ввод веса и повторений с сохранением черновика. Веб-предпросмотр.', 'Каталог программ силовых тренировок. Веб-предпросмотр.', 'Просмотр двенадцатой недели цикла. Веб-предпросмотр.'],
    sources: 'fitdiary-mobile/README.md; docs/UX-UPDATE.md; screenshots tmp/fitdiary-ux-qa от 11.10.2026.'
  },
  'training-log': {
    service: 'telegram-mini-app', label: 'Разработка Telegram Mini Apps',
    context: 'Training Log — сценарий тренировочного дневника внутри Telegram. Пользователю нужен интерфейс для записи упражнения, веса и повторений: вводить такие данные через экран удобнее, чем собирать длинную цепочку сообщений боту.',
    decisions: 'Пользователь открывает дневник из Telegram, выбирает план, записывает выполненные упражнения и возвращается к истории. В локальном прототипе workout-tg-app предусмотрены готовые и пользовательские планы; результаты и собственные планы сохраняются в localStorage. Этот пример показывает роль Mini App как полноценного интерфейса рядом с ботом.',
    limits: 'Локальное хранение привязано к браузеру или WebView и не доказывает синхронизацию между устройствами. Доступность опубликованного бота и серверное хранение отдельно не подтверждены. Скриншоты этого продукта пока не представлены; показатели аудитории не заявлены.',
    captions: [], sources: 'workout-tg-app/src/pages/Home.jsx, WorkoutLog.jsx, CustomWorkout.jsx и Plans.jsx; src/data/projects.js.'
  },
  learnjs: {
    service: 'telegram-mini-app', label: 'Разработка Telegram Mini Apps',
    context: 'LearnJS — учебное мини-приложение для повторения JavaScript короткими заданиями. Пользователь получает вопрос, выбирает ответ и видит статистику. Продуктовый сценарий соединяет обучение и возвращение к занятиям, не требуя отдельного мобильного приложения.',
    decisions: 'В серверной части описаны квизы, вопросы о результате кода, заполнение пропуска и карточки. Для ответа сохраняются тема и правильность; статистика и серия дней обновляются после занятия. Поэтому экран задания и экран прогресса связаны данными, а не существуют как независимые демонстрационные макеты.',
    limits: 'Публичная ссылка на запущенный продукт не представлена. Изображения показывают пример интерфейса: числа правильных ответов, точность и серия дней не являются статистикой аудитории или подтверждением эффективности обучения. Работоспособность публичного backend не заявлена.',
    captions: ['Пример вопроса на замыкания JavaScript.', 'Экран статистики с демонстрационными значениями: ответы, точность и серия дней.'],
    sources: 'jslearn-bot/server/app.js: типы вопросов, сохранение answers и расчёт streak; public/shots/learnjs-1.png и learnjs-2.png.'
  }
}
const escape = s => s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
export function enrichCase(html,id,title) {
  const c=cases[id]; if(!c) return html
  const style='<style>.seo-case-section{padding:32px 0;border-top:1px solid var(--border)}.seo-case-section h2{font-size:24px;margin-bottom:16px;line-height:1.2}.seo-case-section p{max-width:850px;color:var(--text-muted);line-height:1.8}.case-gallery figure{min-width:0;margin:0}.case-gallery figcaption{font-size:13px;color:var(--text-muted);margin:12px 0 24px}.seo-case-related{display:inline-block;margin:20px 0;color:var(--accent);font-weight:600}</style>'
  const breadcrumb={ '@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{ '@type':'ListItem',position:1,name:'Главная',item:origin+base},{ '@type':'ListItem',position:2,name:'Портфолио',item:origin+base+'work/'},{ '@type':'ListItem',position:3,name:title,item:origin+base+'work/'+id+'/'}]}
  html=html.replace('</head>',style+'<script type="application/ld+json">'+JSON.stringify(breadcrumb)+'</script></head>')
  html=html.replace(/(<div class="work-tags">[\s\S]*?<\/div>)/, '$1<a class="work-button seo-case-cta" style="margin:0 12px 12px 0" href="https://t.me/danekzov" target="_blank" rel="noopener">Обсудить похожий проект →</a>')
  html=html.replace('<div class="case-notes">',`<section class="seo-case-section"><h2>Контекст проекта</h2><p>${escape(c.context)}</p></section><div class="case-notes">`)
  html=html.replace(/(<section class="case-gallery[^>]*>)([\s\S]*?)(<\/section>)/,(all,start,images,end)=>{let i=0;return start+images.replace(/<a\b[^>]*><img\b[^>]*><\/a>/g,a=>{const caption=c.captions[i++]||title;return '<figure>'+a.replace(/alt="[^"]*"/,'alt="'+escape(caption)+'"')+'<figcaption>'+escape(caption)+'</figcaption></figure>'})+end})
  html=html.replace('<p class="case-disclosure">',`<section class="seo-case-section"><h2>Решения и их смысл</h2><p>${escape(c.decisions)}</p></section><section class="seo-case-section"><h2>Ограничения и статус</h2><p>${escape(c.limits)}</p><a class="seo-case-related" href="${base}services/${c.service}/">${c.label} →</a></section><p class="case-disclosure">`)
  return html
}
export const caseEvidence = cases
