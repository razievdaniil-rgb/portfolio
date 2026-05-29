<template>
  <section id="contact" class="section">
    <div class="container">
      <p class="section-label">// contact</p>
      <h2 class="section-title">Контакты</h2>
      <p class="contact-sub">Открыт к фрилансу и интересным проектам. Напишите — отвечу быстро.</p>
      <div class="contact-links">
        <a href="https://t.me/danekzov" target="_blank" rel="noopener" class="contact-item">
          <span class="contact-icon">✈️</span>
          <div>
            <p class="contact-name">Telegram</p>
            <p class="contact-val">@danekzov</p>
          </div>
        </a>
        <a href="https://github.com/razievdaniil-rgb" target="_blank" rel="noopener" class="contact-item">
          <span class="contact-icon">🐙</span>
          <div>
            <p class="contact-name">GitHub</p>
            <p class="contact-val">razievdaniil-rgb</p>
          </div>
        </a>
        <a href="mailto:razievdaniil@gmail.com" class="contact-item">
          <span class="contact-icon">📧</span>
          <div>
            <p class="contact-name">Email</p>
            <p class="contact-val">razievdaniil@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <span class="footer-copy">© 2025 Daniil Raziev</span>
      <span class="footer-made">Built with Vue 3 ⚡</span>
    </div>
  </footer>
</template>

<style scoped>
.contact-sub {
  color: var(--text-muted);
  max-width: 420px;
  margin-bottom: 48px;
  line-height: 1.7;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: border-color 0.2s, transform 0.2s;
}

.contact-item:hover {
  border-color: var(--accent);
  transform: translateX(4px);
}

.contact-icon {
  font-size: 22px;
  flex-shrink: 0;
}

.contact-name {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 2px;
  font-family: var(--mono);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.contact-val {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
}

.footer {
  border-top: 1px solid var(--border);
  padding: 24px 0;
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copy,
.footer-made {
  font-size: 13px;
  color: var(--text-dim);
}
</style>
