<template>
  <section id="services" class="section">
    <div class="container">
      <p class="section-label">{{ t('services.label') }}</p>
      <h2 class="section-title">{{ t('services.title') }}</h2>
      <div class="services-grid">
        <div v-for="s in t('services.items')" :key="s.name" class="service-card">
          <h3 class="service-name">{{ s.name }}</h3>
          <p class="service-desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}

.service-card:hover {
  border-color: var(--accent);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
}

.service-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
}

.service-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
