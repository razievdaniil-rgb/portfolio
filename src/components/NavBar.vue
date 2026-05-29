<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <span class="nav-logo">dr<span class="accent">.</span></span>
      <ul class="nav-links">
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#projects">Проекты</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
</style>
