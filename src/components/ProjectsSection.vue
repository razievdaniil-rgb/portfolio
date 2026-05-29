<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label">// projects</p>
      <h2 class="section-title">Проекты</h2>

      <div class="filters">
        <button
          v-for="cat in categories"
          :key="cat.key"
          class="filter-btn"
          :class="{ active: active === cat.key }"
          @click="active = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="projects-grid">
        <div
          v-for="p in filtered"
          :key="p.id"
          class="project-card"
        >
          <div class="card-top">
            <div class="card-header">
              <span class="card-icon">{{ categoryIcon(p.category) }}</span>
              <div class="card-badges">
                <span v-if="p.wip" class="badge wip">В разработке</span>
                <span v-else-if="!p.link" class="badge private">Приватный</span>
              </div>
            </div>
            <h3 class="card-name">{{ p.name }}</h3>
            <p class="card-desc">{{ p.description }}</p>
          </div>
          <div class="card-bottom">
            <div class="card-stack">
              <span v-for="t in p.stack" :key="t" class="tech-tag">{{ t }}</span>
            </div>
            <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="card-link">
              Открыть →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects, categories } from '../data/projects.js'

const active = ref('all')

const filtered = computed(() =>
  active.value === 'all' ? projects : projects.filter(p => p.category === active.value)
)

function categoryIcon(cat) {
  const map = { web: '🌐', miniapp: '💬', wip: '🚧' }
  return map[cat] ?? '📁'
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 7px 18px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: var(--accent);
  color: var(--text);
}

.filter-btn.active {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}

.project-card:hover {
  border-color: var(--accent);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
}

.card-top {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-icon {
  font-size: 22px;
}

.card-badges {
  display: flex;
  gap: 6px;
}

.badge {
  font-size: 11px;
  font-family: var(--mono);
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.badge.wip {
  background: rgba(251, 191, 36, 0.12);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.25);
}

.badge.private {
  background: rgba(110, 110, 138, 0.12);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

.card-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
}

.card-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-size: 11px;
  font-family: var(--mono);
  color: var(--text-dim);
  padding: 2px 7px;
  background: rgba(124, 106, 247, 0.07);
  border-radius: 4px;
  border: 1px solid var(--text-dim);
}

.card-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  white-space: nowrap;
  transition: opacity 0.2s;
}

.card-link:hover {
  opacity: 0.75;
}
</style>
