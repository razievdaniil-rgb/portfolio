<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section-label">{{ t('about.label') }}</p>
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
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
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'
import jsIcon from '../assets/icons/javascript.svg?raw'
import vueIcon from '../assets/icons/vuedotjs.svg?raw'
import reactIcon from '../assets/icons/react.svg?raw'
import nodeIcon from '../assets/icons/nodedotjs.svg?raw'
import htmlIcon from '../assets/icons/html5.svg?raw'
import cssIcon from '../assets/icons/css.svg?raw'
import telegramIcon from '../assets/icons/telegram.svg?raw'
import pythonIcon from '../assets/icons/python.svg?raw'

const stack = [
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'React', icon: reactIcon },
  { name: 'React Native', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'grammY', icon: telegramIcon },
  { name: 'aiogram', icon: pythonIcon },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

@media (max-width: 680px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-text p {
  color: var(--text-muted);
  line-height: 1.75;
}

.stack-label {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.stack-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
}

.stack-badge:hover {
  border-color: var(--accent);
  color: var(--text);
}

.stack-icon {
  display: inline-flex;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.stack-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
