<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <span class="nav-logo">dr<span class="accent">.</span></span>
      <div class="nav-right">
        <ul class="nav-links">
          <li><a href="#about">{{ t('nav.about') }}</a></li>
          <li v-if="locale === 'en'"><a href="#services">{{ t('nav.services') }}</a></li>
          <li><a href="#projects">{{ t('nav.projects') }}</a></li>
          <li><a href="#contact">{{ t('nav.contact') }}</a></li>
        </ul>
        <div class="lang-switch">
          <a :href="ruHref" :class="{ active: locale === 'ru' }">RU</a>
          <span class="lang-sep">/</span>
          <a :href="enHref" :class="{ active: locale === 'en' }">EN</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { t, locale } from '../i18n.js'

const ruHref = import.meta.env.BASE_URL
const enHref = import.meta.env.BASE_URL + 'en/'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
  transition: background 0.3s, border-color 0.3s, padding 0.3s;
  border-bottom: 1px solid transparent;
}

.nav.scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-color: var(--border);
  padding: 14px 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--mono);
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
}

.accent {
  color: var(--accent);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 28px;
  min-width: 0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 14px;
  color: var(--text-muted);
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text);
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 12px;
  flex-shrink: 0;
}

.lang-switch a {
  color: var(--text-muted);
  transition: color 0.2s;
}

.lang-switch a:hover {
  color: var(--text);
}

.lang-switch a.active {
  color: var(--accent);
}

.lang-sep {
  color: var(--text-dim);
}

@media (max-width: 640px) {
  .nav-right {
    gap: 16px;
  }

  .nav-links {
    gap: 16px;
  }

  .nav-links a {
    font-size: 13px;
  }
}
</style>
