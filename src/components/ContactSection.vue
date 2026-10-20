<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <p class="section-label">{{ t('contact.label') }}</p>
      <div class="contact-panel">
        <div class="contact-copy">
          <h2 class="section-title">{{ t('contact.title') }}</h2>
          <p class="contact-sub">{{ t('contact.sub') }}</p>
        </div>
        <div class="contact-actions">
          <a href="https://t.me/danekzov" target="_blank" rel="noopener noreferrer" class="telegram-button">
            <span class="contact-icon" v-html="telegramIcon" />
            <span>{{ t('contact.writeTelegram') }}<small>@danekzov</small></span>
            <span class="contact-arrow" aria-hidden="true">↗</span>
          </a>
          <p class="contact-note">{{ t('contact.telegramNote') }}</p>
          <div class="secondary-links">
            <a href="mailto:razievdaniil@gmail.com"><span class="contact-icon" v-html="gmailIcon" />{{ t('contact.email') }}</a>
            <a href="https://kwork.ru/user/daniil051234" target="_blank" rel="noopener noreferrer"><span class="contact-icon" v-html="kworkIcon" />{{ t('contact.kwork') }}</a>
            <a href="https://github.com/razievdaniil-rgb" target="_blank" rel="noopener noreferrer"><span class="contact-icon" v-html="githubIcon" />{{ t('contact.github') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <span>© {{ year }} Daniil Raziev</span>
      <a :href="privacyHref">{{ t('contact.form.policy') }}</a>
      <span class="footer-made">{{ t('footer.made') }} <span class="footer-icon" v-html="vueIcon" /></span>
    </div>
  </footer>
</template>

<script setup>
import { t } from '../i18n.js'
import telegramIcon from '../assets/icons/telegram.svg?raw'
import githubIcon from '../assets/icons/github.svg?raw'
import gmailIcon from '../assets/icons/gmail.svg?raw'
import kworkIcon from '../assets/icons/kwork.svg?raw'
import vueIcon from '../assets/icons/vuedotjs.svg?raw'

const year = new Date().getFullYear()
const privacyHref = import.meta.env.BASE_URL + 'privacy.html'
</script>

<style scoped>
.contact-section { background:var(--text); color:#fff; }
.contact-section .section-label { color:#76a0ff; margin-bottom:24px; }
.contact-panel { display:grid; grid-template-columns:minmax(0,1.3fr) minmax(0,1fr); gap:clamp(30px,5vw,80px); align-items:center; padding:clamp(24px,4vw,60px); border:1px solid #303642; border-radius:24px; background:#171b23; }
.contact-copy,.contact-actions { min-width:0; }
.contact-copy .section-title { margin:0; color:#fff; font-size:clamp(32px,4vw,58px); }
.contact-sub { max-width:540px; margin-top:24px; color:#aeb5c3; font-size:16px; line-height:1.65; }
.telegram-button { display:flex; gap:16px; align-items:center; width:100%; padding:22px 24px; border-radius:18px; background:var(--accent); color:#fff; font-size:16px; font-weight:700; transition:transform .2s; }
.telegram-button:hover { transform:translateY(-2px); }
.telegram-button small { display:block; margin-top:6px; color:#dbe4ff; font-family:var(--mono); font-size:11px; font-weight:400; }
.contact-arrow { margin-left:auto; }
.contact-note { margin:14px 0 24px; color:#aeb5c3; font-size:12px; line-height:1.6; }
.contact-icon { display:inline-flex; flex-shrink:0; width:19px; height:19px; }
.telegram-button>.contact-icon { width:28px; height:28px; }
.contact-icon :deep(svg),.footer-icon :deep(svg) { width:100%; height:100%; }
.secondary-links { display:flex; flex-wrap:wrap; gap:12px 24px; padding-top:20px; border-top:1px solid #303642; }
.secondary-links a { display:inline-flex; align-items:center; gap:8px; padding:6px 0; color:#c4ccda; font-size:12px; }
.secondary-links a:hover { color:#fff; }
.telegram-button:focus-visible,.secondary-links a:focus-visible,.footer a:focus-visible { outline:2px solid #76a0ff; outline-offset:5px; }
.footer { padding:25px 0; background:var(--text); border-top:1px solid #303642; color:#7f899c; font-size:11px; }
.footer .container { display:grid; grid-template-columns:1fr auto 1fr; gap:24px; align-items:center; }
.footer a { font-size:10px; text-decoration:underline; text-underline-offset:3px; }
.footer-made { justify-self:end; display:inline-flex; align-items:center; gap:6px; }
.footer-icon { display:inline-flex; width:13px; height:13px; }
@media(max-width:820px) { .contact-panel{grid-template-columns:1fr;gap:30px}.footer .container{grid-template-columns:1fr}.footer-made{justify-self:start} }
@media(max-width:390px) { .contact-panel{padding:22px 18px}.telegram-button{padding:18px 14px;gap:10px;font-size:14px}.secondary-links{gap:12px 18px} }
@media(prefers-reduced-motion:reduce) { .telegram-button{transition:none} }
</style>
