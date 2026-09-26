<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-heading">
        <p class="section-label">{{ t('contact.label') }}</p>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="contact-sub">{{ t('contact.sub') }}</p>
      </div>

      <div class="contact-layout">
        <form
          class="project-form"
          action="https://t.me/danekzov"
          method="get"
          target="_blank"
          rel="noopener"
        >
          <input type="hidden" name="text" :value="telegramMessage" />

          <div class="form-grid">
            <label class="field">
              <span>{{ t('contact.form.name') }}</span>
              <input
                v-model.trim="form.name"
                type="text"
                autocomplete="name"
                :placeholder="t('contact.form.namePlaceholder')"
                required
              />
            </label>

            <label class="field">
              <span>{{ t('contact.form.projectType') }}</span>
              <select v-model="form.projectType" required>
                <option value="" disabled>{{ t('contact.form.projectTypePlaceholder') }}</option>
                <option v-for="option in projectTypes" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>

            <label class="field field-deadline">
              <span>{{ t('contact.form.deadline') }}</span>
              <input
                v-model.trim="form.deadline"
                type="text"
                :placeholder="t('contact.form.deadlinePlaceholder')"
              />
            </label>
          </div>

          <label class="field field-wide">
            <span>{{ t('contact.form.details') }}</span>
            <textarea
              v-model.trim="form.details"
              rows="5"
              :placeholder="t('contact.form.detailsPlaceholder')"
              required
            />
          </label>

          <div class="form-submit-row">
            <button type="submit" class="submit-button">
              <span>{{ t('contact.form.submit') }}</span>
              <span aria-hidden="true">↗</span>
            </button>
            <p class="form-note">{{ t('contact.form.privacy') }}</p>
          </div>
        </form>

        <aside class="direct-contact">
          <div class="direct-copy">
            <p class="direct-kicker">@danekzov</p>
            <h3>{{ t('contact.directTitle') }}</h3>
            <p>{{ t('contact.directText') }}</p>
          </div>

          <a href="https://t.me/danekzov" target="_blank" rel="noopener" class="telegram-card">
            <span class="contact-icon telegram-icon" v-html="telegramIcon" />
            <span>
              <span class="contact-name">{{ t('contact.telegram') }}</span>
              <span class="contact-val">@danekzov</span>
            </span>
            <span class="contact-arrow" aria-hidden="true">↗</span>
          </a>

          <div class="secondary-links">
            <a href="https://github.com/razievdaniil-rgb" target="_blank" rel="noopener" class="secondary-link">
              <span class="contact-icon" v-html="githubIcon" />
              <span>{{ t('contact.github') }}</span>
            </a>
            <a href="mailto:razievdaniil@gmail.com" class="secondary-link">
              <span class="contact-icon" v-html="gmailIcon" />
              <span>{{ t('contact.email') }}</span>
            </a>
            <a href="https://kwork.ru/user/daniil051234" target="_blank" rel="noopener" class="secondary-link">
              <span class="contact-icon" v-html="kworkIcon" />
              <span>{{ t('contact.kwork') }}</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <span class="footer-copy">© {{ year }} Daniil Raziev</span>
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

const form = reactive({
  name: '',
  projectType: '',
  deadline: '',
  details: '',
})

const telegramMessage = computed(() => [
  t('contact.form.greeting'),
  '',
  `${t('contact.form.name')}: ${form.name}`,
  `${t('contact.form.projectType')}: ${form.projectType}`,
  `${t('contact.form.deadline')}: ${form.deadline || t('contact.form.notSpecified')}`,
  '',
  `${t('contact.form.details')}:`,
  form.details,
].join('\n'))
</script>

<style scoped>
.contact-heading {
  max-width: 620px;
}

.contact-heading .section-title {
  margin-bottom: 16px;
}

.contact-sub {
  max-width: 540px;
  margin-bottom: 42px;
  color: var(--text-muted);
  line-height: 1.7;
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(270px, 0.7fr);
  gap: 20px;
  align-items: stretch;
}

.project-form,
.direct-contact {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--bg-card);
}

.project-form {
  padding: 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.field {
  display: grid;
  gap: 8px;
}

.field > span {
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 8px;
  outline: none;
  background: var(--bg);
  color: var(--text);
  font: inherit;
  font-size: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field input,
.field select {
  height: 48px;
  padding: 0 14px;
}

.field textarea {
  min-height: 132px;
  padding: 13px 14px;
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-dim);
}

.field select:invalid,
.field select option[value=''] {
  color: var(--text-dim);
}

.field select option {
  background: var(--bg-card);
  color: var(--text);
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.field-wide {
  margin-top: 20px;
}

.field-deadline {
  grid-column: 1 / -1;
}

.form-submit-row {
  display: grid;
  grid-template-columns: minmax(210px, 0.75fr) minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  margin-top: 22px;
}

.submit-button {
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 17px;
  border: 0;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-family: inherit;
  font-size: 13px;
  font-weight: 650;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.submit-button:focus-visible,
.telegram-card:focus-visible,
.secondary-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.form-note {
  color: var(--text-dim);
  font-size: 11px;
  line-height: 1.55;
}

.direct-contact {
  display: flex;
  flex-direction: column;
  padding: 28px;
  background:
    linear-gradient(145deg, rgba(124, 106, 247, 0.12), transparent 54%),
    var(--bg-card);
}

.direct-copy {
  margin-bottom: 30px;
}

.direct-kicker {
  margin-bottom: 14px;
  color: var(--accent);
  font-family: var(--mono);
  font-size: 11px;
}

.direct-copy h3 {
  margin-bottom: 12px;
  color: var(--text);
  font-size: 23px;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.direct-copy > p:last-child {
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.65;
}

.telegram-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: center;
  padding: 17px;
  border: 1px solid rgba(124, 106, 247, 0.35);
  border-radius: 10px;
  background: rgba(124, 106, 247, 0.1);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.telegram-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.contact-icon {
  display: inline-flex;
  width: 19px;
  height: 19px;
  flex-shrink: 0;
}

.telegram-icon {
  width: 24px;
  height: 24px;
}

.contact-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.contact-name,
.contact-val {
  display: block;
}

.contact-name {
  margin-bottom: 2px;
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-val {
  color: var(--text);
  font-size: 14px;
  font-weight: 600;
}

.contact-arrow {
  color: var(--accent);
}

.secondary-links {
  display: grid;
  gap: 4px;
  margin-top: auto;
  padding-top: 28px;
}

.secondary-link {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px 4px;
  color: var(--text-muted);
  font-size: 12px;
  transition: color 0.2s ease;
}

.secondary-link:hover {
  color: var(--text);
}

.footer {
  border-top: 1px solid var(--border);
  padding: 24px 0;
}

.footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-copy,
.footer-made {
  color: var(--text-dim);
  font-size: 13px;
}

.footer-made {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer-icon {
  display: inline-flex;
  width: 13px;
  height: 13px;
}

.footer-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

@media (max-width: 780px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .direct-contact {
    min-height: 330px;
  }
}

@media (max-width: 560px) {
  .contact-sub {
    margin-bottom: 28px;
  }

  .project-form,
  .direct-contact {
    padding: 22px 18px;
  }

  .form-grid,
  .form-submit-row {
    grid-template-columns: 1fr;
  }

  .form-submit-row {
    gap: 12px;
  }

  .footer .container {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .submit-button,
  .telegram-card {
    transition: none;
  }
}
</style>
