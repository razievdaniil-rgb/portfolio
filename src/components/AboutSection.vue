<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section-label">// about</p>
      <h2 class="section-title">Обо мне</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>
            Я fullstack-разработчик, специализирующийся на веб-приложениях, Telegram Mini Apps и мобильной разработке.
            Работаю с современным JS-стеком и люблю решать нетривиальные задачи.
          </p>
          <p>
            В свободное время развиваю собственные проекты — от ботов до мобильных приложений.
            Открыт к фрилансу и интересным коллаборациям.
          </p>
        </div>
        <div class="stack-block">
          <p class="stack-label">Стек технологий</p>
          <div class="stack-grid">
            <span v-for="tech in stack" :key="tech.name" class="stack-badge">
              <span class="stack-icon">{{ tech.icon }}</span>
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'React Native', icon: '📱' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'HTML / CSS', icon: '🎨' },
  { name: 'grammY', icon: '🤖' },
  { name: 'aiogram', icon: '🐍' },
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
  font-size: 14px;
}
</style>
