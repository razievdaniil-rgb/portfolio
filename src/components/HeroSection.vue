<template>
  <section class="hero">
    <div class="container">
      <p class="hero-greeting">Привет, я</p>
      <h1 class="hero-name">Daniil Raziev</h1>
      <p class="hero-role">Fullstack Developer <span class="sep">/</span> Bot Developer</p>
      <p class="hero-desc">
        Разрабатываю веб-приложения, Telegram Mini Apps и мобильные приложения.<br />
        Люблю чистый код и продуманные интерфейсы.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">Посмотреть проекты</a>
        <a href="#contact" class="btn-ghost">Связаться</a>
      </div>
    </div>
    <div class="hero-glow" />
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 106, 247, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  pointer-events: none;
}

.hero-greeting {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--accent);
  margin-bottom: 12px;
  letter-spacing: 0.06em;
}

.hero-name {
  font-size: clamp(48px, 8vw, 80px);
  font-weight: 700;
  line-height: 1.05;
  color: var(--text);
  margin-bottom: 16px;
}

.hero-role {
  font-size: 20px;
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 24px;
}

.sep {
  color: var(--text-dim);
  margin: 0 8px;
}

.hero-desc {
  font-size: 16px;
  color: var(--text-muted);
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-block;
  padding: 12px 28px;
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.btn-ghost {
  display: inline-block;
  padding: 12px 28px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--text);
  transform: translateY(-1px);
}
</style>
