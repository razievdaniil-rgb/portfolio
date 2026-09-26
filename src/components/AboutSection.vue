<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-copy">
          <p class="section-label">{{ t('about.label') }}</p>
          <h2 class="section-title">{{ t('about.title') }}</h2>
          <div class="about-text">
            <p>{{ t('about.p1') }}</p>
            <p>{{ t('about.p2') }}</p>
          </div>
        </div>

        <div class="process-block">
          <p class="process-label">{{ t('about.processLabel') }}</p>
          <ol class="process-list">
            <li v-for="(item, index) in process" :key="item.name">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <div>
                <h3>{{ item.name }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div class="stack-block">
        <p class="stack-label">{{ t('about.stackLabel') }}</p>
        <div class="stack-grid">
          <span v-for="tech in stack" :key="tech.name" class="stack-badge">
            <span class="stack-icon" v-html="tech.icon" />
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'
import jsIcon from '../assets/icons/javascript.svg?raw'
import vueIcon from '../assets/icons/vuedotjs.svg?raw'
import reactIcon from '../assets/icons/react.svg?raw'
import nodeIcon from '../assets/icons/nodedotjs.svg?raw'
import telegramIcon from '../assets/icons/telegram.svg?raw'

const process = t('about.process')

const stack = [
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'React', icon: reactIcon },
  { name: 'React Native', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Telegram Apps', icon: telegramIcon },
]
</script>

<style scoped>
.about-section {
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);
  gap: clamp(54px, 9vw, 120px);
  align-items: start;
}

.about-copy .section-title {
  max-width: 720px;
  margin-bottom: 28px;
}

.about-text {
  display: grid;
  max-width: 650px;
  gap: 15px;
}

.about-text p {
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.78;
}

.process-block {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 15px;
  background: var(--bg-card);
}

.process-label,
.stack-label {
  color: var(--signal);
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.process-label {
  padding: 20px 22px;
  border-bottom: 1px solid var(--border);
}

.process-list {
  list-style: none;
}

.process-list li {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 12px;
  padding: 20px 22px;
  border-bottom: 1px solid var(--border);
}

.process-list li:last-child {
  border-bottom: 0;
}

.process-list li > span {
  color: var(--text-dim);
  font-family: var(--mono);
  font-size: 10px;
}

.process-list h3 {
  margin-bottom: 5px;
  color: var(--text);
  font-size: 14px;
}

.process-list p {
  color: var(--text-muted);
  font-size: 12px;
  line-height: 1.6;
}

.stack-block {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 32px;
  align-items: center;
  margin-top: 70px;
  padding: 22px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 11px;
  color: var(--text-muted);
  font-size: 11px;
}

.stack-icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.stack-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

@media (max-width: 820px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .stack-block {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 48px;
  }
}
</style>
