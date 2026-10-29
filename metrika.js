/*
  Яндекс.Метрика с загрузкой только после согласия посетителя.

  Скрипт самодостаточный и подключается на всех страницах сайта: на Vue-страницах
  (/ и /en/), на статических страницах услуг и на сгенерированных кейсах.
  Поэтому здесь нет импортов и сборки — обычный файл из public/ по адресу /metrika.js.

  До нажатия «Принять» ни tag.js, ни cookies Метрики не появляются.
  Стандартный <noscript><img src="mc.yandex.ru/watch/ID"></noscript> намеренно
  не используется: этот пиксель сработал бы в обход согласия.
*/
(function () {
  'use strict'

  /* Номер счётчика из интерфейса Метрики. 0 — счётчик выключен: баннер не
     показывается и ничего не загружается, сайт можно публиковать без него. */
  var COUNTER_ID = 113902669

  var STORAGE_KEY = 'rc:analytics-consent'
  var CONTACT_HREF = 't.me/danekzov'
  var CONTACT_GOAL = 'telegram_click'

  if (!COUNTER_ID) return

  var en = document.documentElement.lang.slice(0, 2) === 'en'
  var copy = en
    ? {
        text: 'This site uses Yandex Metrica to see which pages are useful. It stores cookies and records on-page actions, including mouse movement and scrolling. The counter does not load until you accept.',
        accept: 'Accept',
        decline: 'Decline',
        policy: 'Privacy policy',
        label: 'Analytics consent',
      }
    : {
        text: 'Сайт использует Яндекс.Метрику, чтобы понимать, какие страницы полезны. Метрика сохраняет cookies и записывает действия на странице, включая движение мыши и прокрутку. До вашего согласия счётчик не загружается.',
        accept: 'Принять',
        decline: 'Отказаться',
        policy: 'Политика обработки данных',
        label: 'Согласие на аналитику',
      }

  /* localStorage недоступен в приватном режиме и при запрете cookies —
     тогда согласие просто не запоминается и баннер покажется снова. */
  function readConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY)
    } catch (error) {
      return null
    }
  }

  function writeConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch (error) {
      /* не мешаем работе сайта */
    }
  }

  function loadMetrika() {
    ;(function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          ;(m[i].a = m[i].a || []).push(arguments)
        }
      m[i].l = 1 * new Date()
      for (var j = 0; j < e.scripts.length; j++) if (e.scripts[j].src === r) return
      k = e.createElement(t)
      a = e.getElementsByTagName(t)[0]
      k.async = 1
      k.src = r
      a.parentNode.insertBefore(k, a)
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

    window.ym(COUNTER_ID, 'init', {
      webvisor: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      /* главная — SPA с переходами по якорям (#services, #contact) */
      trackHash: true,
    })
  }

  /* Цель на переход в контактный Telegram. Слушатель на document ловит ссылку
     на любой странице, в том числе кнопку, которую Vue отрисует позже.
     Ссылки на демо-ботов проектов целью не считаются. */
  function trackContactClicks() {
    document.addEventListener(
      'click',
      function (event) {
        var node = event.target
        if (!node || typeof node.closest !== 'function') return
        var link = node.closest('a[href]')
        if (!link || link.href.indexOf(CONTACT_HREF) === -1) return
        if (typeof window.ym === 'function') window.ym(COUNTER_ID, 'reachGoal', CONTACT_GOAL)
      },
      true
    )
  }

  function enable() {
    loadMetrika()
    trackContactClicks()
  }

  function showBanner() {
    var style = document.createElement('style')
    style.textContent =
      '.rc-consent{position:fixed;z-index:9999;left:16px;right:16px;bottom:16px;max-width:560px;margin:0 auto;' +
      'padding:18px 20px;border:1px solid #d8dde7;border-radius:18px;background:#fff;' +
      'box-shadow:0 18px 44px rgba(16,19,26,.16);' +
      'font:14px/1.55 "Segoe UI Variable","Segoe UI",Arial,sans-serif;color:#3f4755}' +
      '.rc-consent p{margin:0 0 14px}' +
      '.rc-consent a{color:#175cff}' +
      '.rc-consent-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}' +
      '.rc-consent button{flex:0 0 auto;padding:10px 20px;border:1px solid #d8dde7;border-radius:999px;' +
      'background:#fff;color:#10131a;font:inherit;font-weight:600;cursor:pointer}' +
      '.rc-consent button.rc-accept{border-color:#175cff;background:#175cff;color:#fff}' +
      '.rc-consent button:hover{opacity:.88}' +
      '@media (max-width:420px){.rc-consent{left:10px;right:10px;bottom:10px;padding:14px 16px;' +
      'font-size:13px;line-height:1.45;border-radius:14px}' +
      '.rc-consent p{margin-bottom:11px}' +
      '.rc-consent button{flex:1 1 100%;padding:9px 16px}}'
    document.head.appendChild(style)

    var banner = document.createElement('div')
    banner.className = 'rc-consent'
    banner.setAttribute('role', 'dialog')
    banner.setAttribute('aria-label', copy.label)

    var text = document.createElement('p')
    text.textContent = copy.text + ' '
    var policy = document.createElement('a')
    policy.href = '/privacy.html'
    policy.textContent = copy.policy
    text.appendChild(policy)

    var row = document.createElement('div')
    row.className = 'rc-consent-row'

    var accept = document.createElement('button')
    accept.type = 'button'
    accept.className = 'rc-accept'
    accept.textContent = copy.accept

    var decline = document.createElement('button')
    decline.type = 'button'
    decline.textContent = copy.decline

    function close() {
      banner.remove()
      style.remove()
    }

    accept.addEventListener('click', function () {
      writeConsent('granted')
      close()
      enable()
    })

    decline.addEventListener('click', function () {
      writeConsent('denied')
      close()
    })

    row.appendChild(accept)
    row.appendChild(decline)
    banner.appendChild(text)
    banner.appendChild(row)
    document.body.appendChild(banner)
  }

  var consent = readConsent()
  if (consent === 'granted') enable()
  else if (consent !== 'denied') showBanner()
})()
