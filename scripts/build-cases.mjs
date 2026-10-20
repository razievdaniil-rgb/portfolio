import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { projects } from '../src/data/projects.js'
import { enrichCase } from './seo-cases.mjs'

const base = '/'
const origin = 'https://razievcode.ru'
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))
const details = {
  rfzavod: ['Помочь покупателю перейти от модели оборудования к спецификации для специалиста.', 'Поиск модели → подбор по рабочей точке → спецификация.', 'Каталог, инженерный подбор, AI-помощник и передача спецификации.'],
  fitdiary: ['Объединить программу силовых тренировок и запись результатов. При обновлении — сохранить введённые подходы при выходе и дать просматривать весь цикл программы.', 'Каталог без обязательной регистрации → выбор программы и недели → план тренировки → веса и повторы → сохранение выполненной части → история.', 'React Native и Expo: офлайн-хранение, восстановление черновика, отдельные отметки подходов, редактирование повторений и расписание напоминаний. На снимках — веб-предпросмотр обновлённого интерфейса от 11 октября 2026; публикация версии 1.1.0 в магазине здесь не подтверждается.'],
  'training-log': ['Дать пользователю тренировочный дневник без отдельной установки.', 'Открытие в Telegram → упражнения и подходы → история занятий.', 'Мини-приложение с записью тренировок внутри Telegram.'],
  learnjs: ['Организовать повторение JavaScript короткими сессиями.', 'Квиз → ответ → статистика → серия дней занятий.', 'Квизы, статистика ответов и ежедневные серии.'],
  kinetik: ['Исследовать интерактивную подачу спортивного продукта.', 'Просмотр продукта → взаимодействие с 3D → прокрутка.', 'Процедурная 3D-модель и облегчённый режим для слабых устройств.'],
  torque: ['Исследовать интерактивную витрину автозапчастей.', '3D-двигатель → прокрутка → просмотр товаров.', 'Управление моделью мышью и скроллом, drag-карусель товаров.'],
  caravela: ['Показать детали парусников через интерактивную презентацию.', 'Облёт модели → интерактивные точки → детали ручной работы.', 'Двуязычный лендинг с камерой, управляемой прокруткой.'],
}
const urls = []
for (const lang of ['ru', 'en']) {
  const ru = lang === 'ru'
  const home = base + (ru ? '' : 'en/')
  const root = home + 'work/'
  const label = (a,b) => ru ? a : b
  const img = (p,shot) => `<a href="${base}shots/${escape(shot)}" target="_blank" rel="noopener"><img src="/shots/${escape(shot)}" alt="${escape(p.name[lang])}" loading="lazy"></a>`
  const cards = list => list.map(p => `<article class="work-card"><a href="${root}${p.id}/">${p.shots?.length ? `<div class="work-preview ${p.category === 'mobile' ? 'phone' : ''}">${img(p,p.shots[0]).replace(/<a[^>]*>|<\/a>/g,'')}</div>` : `<div class="work-wordmark">${escape(p.name[lang].split('—')[0])}</div>`}<div class="work-copy"><p class="section-label">${escape(p.eyebrow[lang])}</p><h2>${escape(p.name[lang])}</h2><p>${escape(p.description[lang])}</p><span class="work-read">${label('Читать кейс','Read case')} ↗</span></div></a></article>`).join('')
  async function page(slug,title,description,body,image) {
    const path = root + slug
    const counterpart = base + (ru ? 'en/' : '') + 'work/' + slug
    const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} — ${label('Даниил Разиев','Daniil Raziev')}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${origin}${path}"><link rel="alternate" hreflang="${ru?'en':'ru'}" href="${origin}${counterpart}"><link rel="alternate" hreflang="${lang}" href="${origin}${path}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:type" content="website"><meta property="og:url" content="${origin}${path}">${image?`<meta property="og:image" content="${origin}${base}shots/${escape(image)}">`:''}<link rel="icon" href="${base}favicon.svg"><link rel="stylesheet" href="/src/style.css"><link rel="stylesheet" href="/src/work.css"></head><body><header class="work-nav container"><a class="work-logo" href="${home}">DR.</a><nav><a href="${root}">${label('Портфолио','Portfolio')}</a><a href="${counterpart}">${ru?'EN':'RU'}</a><a class="work-button" href="${home}#contact">${label('Обсудить проект','Discuss a project')} ↗</a></nav></header><main class="container work-main">${body}<footer class="work-contact"><h2>${label('Следующий продукт — ваш?','Your product could be next.')}</h2><a class="work-button" href="${home}#contact">${label('Обсудить задачу','Discuss your project')} ↗</a><a href="${root}">${label('Все проекты','All projects')} →</a></footer></main></body></html>`
    const folder = new URL('../' + (ru?'':'en/') + 'work/' + slug, import.meta.url)
    const output = ru && slug ? enrichCase(html, slug.replace(/\/$/, ''), title) : html
    await mkdir(folder,{recursive:true}); await writeFile(new URL('index.html',folder),output)
    urls.push(origin+path)
  }
  await page('',label('Портфолио: продукты и кейсы','Portfolio: products and cases'),label('Сайты, мобильные приложения и Telegram Mini Apps: задачи, интерфейсы и реализация.','Websites, mobile apps and Telegram Mini Apps: tasks, interfaces and implementation.'),`<section class="work-intro"><p class="section-label">${label('Продукты / Дизайн / Разработка','Products / Design / Development')}</p><h1>${label('Работы,<br>за которыми<br><em>стоит продукт.</em>','Work built<br>around<br><em>real products.</em>')}</h1><p>${label('Коммерческие проекты, собственные продукты и исследования интерфейсов. У каждой работы — свой контекст.','Commercial work, independent products and interface studies. Each project has its own context.')}</p></section><h2 class="work-group">${label('Продукты и приложения','Products and apps')}</h2><div class="work-grid">${cards(projects.filter(p=>p.badgeStyle!=='concept'))}</div><h2 class="work-group">${label('Интерактивные концепты','Interactive concepts')}</h2><div class="work-grid">${cards(projects.filter(p=>p.badgeStyle==='concept'))}</div>`,'rfzavod-live-card.png')
  for (const p of projects) {
    const sections = ru ? details[p.id] : ['Explore the product workflow and its interface.', p.description.en, p.stack.join(' · ')]
    await page(p.id+'/',p.name[lang],p.description[lang],`<section class="work-intro case-intro"><a href="${root}">← ${label('Портфолио','Portfolio')}</a><p class="section-label">${escape(p.eyebrow[lang])}</p><h1>${escape(p.name[lang])}</h1><p>${escape(p.description[lang])}</p><div class="work-tags">${p.stack.map(s=>`<span>${escape(s)}</span>`).join('')}</div>${p.link?`<a class="work-button" href="${escape(p.link)}" target="_blank" rel="noopener">${escape(p.linkLabel?.[lang]||label('Открыть проект','Open project'))} ↗</a>`:''}</section><div class="case-notes">${sections.map((text,i)=>`<section><h2>${[label('Задача','Context'),label('Сценарий','Workflow'),label('Реализация','Implementation')][i]}</h2><p>${escape(text)}</p></section>`).join('')}</div>${p.shots?.length?`<section class="case-gallery ${p.category==='mobile'?'mobile-gallery':''}" aria-label="${label('Экраны продукта','Product screens')}">${p.shots.map(shot=>img(p,shot)).join('')}</section>`:''}<p class="case-disclosure">${p.badgeStyle==='concept'?label('Концепт: демонстрация интерфейса и взаимодействий, не клиентский запуск.','Concept: an interface and interaction study, not a client launch.'):label('Показаны реализованные сценарии. Метрики выручки, конверсии и аудитории не заявлены.','Implemented workflows are shown. No revenue, conversion or audience metrics are claimed.')}</p>`,p.shots?.[0])
  }
}
const sitemapPath = new URL('../public/sitemap.xml',import.meta.url)
let sitemap = await readFile(sitemapPath,'utf8')
sitemap = sitemap.replace(/\s*<url>\s*<loc>[^<]*\/work\/[^<]*<\/loc>[\s\S]*?<\/url>/g,'')
await writeFile(sitemapPath,sitemap.replace('</urlset>',urls.map(url=>`  <url><loc>${url}</loc></url>`).join('\n')+'\n</urlset>'))
