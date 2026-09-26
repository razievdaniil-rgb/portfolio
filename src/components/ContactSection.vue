<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-heading">
        <p class="section-label">{{ t('contact.label') }}</p>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="contact-sub">{{ t('contact.sub') }}</p>
      </div>

      <div class="contact-layout">
        <form class="project-form" action="https://t.me/danekzov" method="get" target="_blank" rel="noopener">
          <input type="hidden" name="text" :value="telegramMessage" />
          <div class="form-grid">
            <label class="field">
              <span>{{ t('contact.form.projectType') }}</span>
              <select v-model="form.projectType" required>
                <option value="" disabled>{{ t('contact.form.projectTypePlaceholder') }}</option>
                <option v-for="option in projectTypes" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>
            <label class="field">
              <span>{{ t('contact.form.deadline') }}</span>
              <input v-model.trim="form.deadline" type="text" :placeholder="t('contact.form.deadlinePlaceholder')" />
            </label>
          </div>

          <label class="field field-wide">
            <span>{{ t('contact.form.details') }}</span>
            <textarea v-model.trim="form.details" rows="5" :placeholder="t('contact.form.detailsPlaceholder')" required />
          </label>
          <p class="data-hint"><span aria-hidden="true">!</span>{{ t('contact.form.dataHint') }}</p>

          <label class="consent-row">
            <input v-model="form.consent" type="checkbox" required />
            <span class="checkmark" aria-hidden="true" />
            <span><a :href="consentHref" target="_blank" rel="noopener">{{ t('contact.form.consent') }}</a></span>
          </label>

          <div class="form-submit-row">
            <button type="submit" class="submit-button" :disabled="!form.consent">
              <span>{{ t('contact.form.submit') }}</span><span aria-hidden="true">↗</span>
            </button>
            <p class="form-note">{{ t('contact.form.privacy') }} <a :href="privacyHref" target="_blank" rel="noopener">{{ t('contact.form.policy') }}</a>.</p>
          </div>
        </form>

        <aside class="direct-contact">
          <div class="direct-copy"><p class="direct-kicker">@danekzov</p><h3>{{ t('contact.directTitle') }}</h3><p>{{ t('contact.directText') }}</p></div>
          <a href="https://t.me/danekzov" target="_blank" rel="noopener" class="telegram-card">
            <span class="contact-icon telegram-icon" v-html="telegramIcon" /><span><span class="contact-name">{{ t('contact.telegram') }}</span><span class="contact-val">@danekzov</span></span><span class="contact-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="secondary-links">
            <a href="https://github.com/razievdaniil-rgb" target="_blank" rel="noopener" class="secondary-link"><span class="contact-icon" v-html="githubIcon" /><span>{{ t('contact.github') }}</span></a>
            <a href="mailto:razievdaniil@gmail.com" class="secondary-link"><span class="contact-icon" v-html="gmailIcon" /><span>{{ t('contact.email') }}</span></a>
            <a href="https://kwork.ru/user/daniil051234" target="_blank" rel="noopener" class="secondary-link"><span class="contact-icon" v-html="kworkIcon" /><span>{{ t('contact.kwork') }}</span></a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <span class="footer-copy">© {{ year }} Daniil Raziev</span>
      <div class="footer-legal"><a :href="privacyHref">{{ t('contact.form.policy') }}</a><a :href="consentHref">{{ t('contact.form.consent') }}</a></div>
      <span class="footer-made">{{ t('footer.made') }} <span class="footer-icon" v-html="vueIcon" /></span>
    </div>
  </footer>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { t } from '../i18n.js'
import telegramIcon from '../assets/icons/telegram.svg?raw'
import githubIcon from '../assets/icons/github.svg?raw'
import gmailIcon from '../assets/icons/gmail.svg?raw'
import kworkIcon from '../assets/icons/kwork.svg?raw'
import vueIcon from '../assets/icons/vuedotjs.svg?raw'

const year = new Date().getFullYear()
const projectTypes = t('contact.form.projectTypes')
const privacyHref = import.meta.env.BASE_URL + 'privacy.html'
const consentHref = import.meta.env.BASE_URL + 'consent.html'
const form = reactive({ projectType: '', deadline: '', details: '', consent: false })
const telegramMessage = computed(() => [t('contact.form.greeting'),'',`${t('contact.form.projectType')}: ${form.projectType}`,`${t('contact.form.deadline')}: ${form.deadline || t('contact.form.notSpecified')}`,'',`${t('contact.form.details')}:`,form.details,'',t('contact.form.consentMessage')].join('\n'))
</script>

<style scoped>
.contact-section { background:var(--text); color:#fff; }
.contact-section :deep(.section-label) { color:#76a0ff; }
.contact-section :deep(.section-title) { color:#fff; }
.contact-heading { display:grid; grid-template-columns:minmax(0,1fr) minmax(280px,460px); gap:40px; align-items:end; margin-bottom:45px; }
.contact-heading .section-label { grid-column:1/-1; margin-bottom:-15px; }
.contact-heading .section-title { margin:0; }
.contact-sub { color:#aeb5c3; font-size:16px; line-height:1.65; }
.contact-layout { display:grid; grid-template-columns:minmax(0,1.5fr) minmax(280px,.7fr); gap:16px; }
.project-form,.direct-contact { border:1px solid #303642; border-radius:24px; background:#171b23; }
.project-form { padding:clamp(22px,3vw,38px); }
.form-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
.field { display:grid; gap:9px; }
.field>span { color:#9ca5b5; font-family:var(--mono); font-size:9px; letter-spacing:.1em; text-transform:uppercase; }
.field input,.field select,.field textarea { width:100%; border:1px solid #343b49; border-radius:12px; outline:none; background:#0e1117; color:#fff; font-size:14px; transition:border-color .2s,box-shadow .2s; }
.field input,.field select { height:54px; padding:0 15px; }
.field textarea { min-height:142px; padding:15px; resize:vertical; }
.field input::placeholder,.field textarea::placeholder,.field select:invalid { color:#667084; }
.field select option { background:#171b23; color:#fff; }
.field input:focus,.field select:focus,.field textarea:focus { border-color:#76a0ff; box-shadow:0 0 0 3px rgba(118,160,255,.14); }
.field-wide { margin-top:16px; }
.data-hint { display:flex; gap:9px; margin-top:12px; color:#818b9e; font-size:11px; line-height:1.5; }
.data-hint span { display:grid; width:17px; height:17px; flex:0 0 auto; place-items:center; border:1px solid #4a5262; border-radius:50%; font-family:var(--mono); font-size:9px; }
.consent-row { position:relative; display:grid; grid-template-columns:20px 1fr; gap:10px; align-items:start; margin-top:22px; color:#b4bcc9; font-size:12px; line-height:1.5; cursor:pointer; }
.consent-row input { position:absolute; opacity:0; pointer-events:none; }
.checkmark { display:grid; width:19px; height:19px; place-items:center; border:1px solid #626c7f; border-radius:5px; background:#0e1117; }
.consent-row input:checked + .checkmark { border-color:#76a0ff; background:var(--accent); }
.consent-row input:checked + .checkmark::after { content:'✓'; color:#fff; font-size:12px; }
.consent-row input:focus-visible + .checkmark { outline:2px solid #76a0ff; outline-offset:3px; }
.consent-row a,.form-note a { color:#fff; text-decoration:underline; text-decoration-color:#59657a; text-underline-offset:3px; }
.form-submit-row { display:grid; grid-template-columns:minmax(220px,.72fr) minmax(0,1fr); gap:18px; align-items:center; margin-top:20px; }
.submit-button { display:flex; min-height:54px; align-items:center; justify-content:space-between; gap:16px; padding:0 18px; border:0; border-radius:999px; background:var(--accent); color:#fff; font-size:13px; font-weight:700; cursor:pointer; transition:transform .2s,opacity .2s; }
.submit-button:hover:not(:disabled) { transform:translateY(-2px); }
.submit-button:disabled { opacity:.35; cursor:not-allowed; }
.form-note { color:#798398; font-size:10px; line-height:1.55; }
.direct-contact { display:flex; flex-direction:column; padding:30px; background:var(--accent); border-color:var(--accent); }
.direct-copy { margin-bottom:30px; }
.direct-kicker { margin-bottom:34px; color:#cad8ff; font-family:var(--mono); font-size:11px; }
.direct-copy h3 { margin-bottom:13px; color:#fff; font-family:var(--display); font-size:30px; line-height:1.05; letter-spacing:-.045em; }
.direct-copy>p:last-child { color:#dbe4ff; font-size:13px; line-height:1.65; }
.telegram-card { display:grid; grid-template-columns:auto 1fr auto; gap:14px; align-items:center; padding:17px; border:1px solid rgba(255,255,255,.3); border-radius:15px; background:rgba(255,255,255,.12); color:#fff; transition:transform .2s,background .2s; }
.telegram-card:hover { transform:translateY(-2px); background:rgba(255,255,255,.18); }
.contact-icon { display:inline-flex; width:19px; height:19px; flex-shrink:0; }.telegram-icon{width:25px;height:25px}.contact-icon :deep(svg){width:100%;height:100%}
.contact-name,.contact-val{display:block}.contact-name{margin-bottom:2px;color:#c7d6ff;font-family:var(--mono);font-size:9px;letter-spacing:.08em;text-transform:uppercase}.contact-val{font-size:14px;font-weight:700}
.secondary-links { display:grid; gap:2px; margin-top:auto; padding-top:30px; }
.secondary-link { display:flex; align-items:center; gap:11px; padding:9px 3px; color:#dbe4ff; font-size:12px; }
.footer { padding:25px 0; background:var(--text); border-top:1px solid #303642; color:#7f899c; }
.footer .container { display:grid; grid-template-columns:1fr auto 1fr; gap:24px; align-items:center; }
.footer-made { justify-self:end; }.footer-legal{display:flex;gap:18px}.footer-legal a{font-size:10px;text-decoration:underline;text-underline-offset:3px}.footer-copy,.footer-made{font-size:11px}.footer-made{display:inline-flex;align-items:center;gap:6px}.footer-icon{display:inline-flex;width:13px;height:13px}.footer-icon :deep(svg){width:100%;height:100%}
@media(max-width:820px){.contact-heading{grid-template-columns:1fr}.contact-heading .section-label{margin-bottom:-5px}.contact-layout{grid-template-columns:1fr}.direct-contact{min-height:350px}.footer .container{grid-template-columns:1fr}.footer-made{justify-self:start}}
@media(max-width:560px){.form-grid,.form-submit-row{grid-template-columns:1fr}.project-form,.direct-contact{padding:22px 18px}.footer-legal{flex-direction:column;gap:6px}}
@media(prefers-reduced-motion:reduce){.submit-button,.telegram-card{transition:none}}
</style>
