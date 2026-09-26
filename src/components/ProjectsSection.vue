<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="section-label">{{ t('projects.label') }}</p>
          <h2 class="section-title">{{ t('projects.title') }}</h2>
        </div>
        <p class="section-intro">{{ t('projects.intro') }}</p>
      </div>

      <article v-if="featured" class="featured-project">
        <button
          class="featured-visual"
          type="button"
          :aria-label="t('projects.viewShots')"
          @click="openGallery(featured)"
        >
          <img :src="shotSrc(featured.shots[0])" :alt="featured.name[locale]" />
          <span class="visual-hint">{{ t('projects.viewCase') }}</span>
        </button>

        <div class="featured-copy">
          <div class="project-meta">
            <span>{{ featured.eyebrow[locale] }}</span>
            <span class="badge" :class="featured.badgeStyle">{{ featured.badge[locale] }}</span>
          </div>
          <h3>{{ featured.name[locale] }}</h3>
          <p class="project-desc">{{ featured.description[locale] }}</p>
          <ul class="project-highlights">
            <li v-for="item in featured.highlights[locale]" :key="item">{{ item }}</li>
          </ul>
          <div class="project-footer">
            <div class="card-stack">
              <span v-for="tech in featured.stack" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <a :href="featured.link" target="_blank" rel="noopener" class="primary-link">
              {{ featured.linkLabel[locale] }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>

      <div class="projects-grid">
        <article v-for="project in regularProjects" :key="project.id" class="project-card">
          <button
            v-if="project.shots"
            class="card-preview"
            type="button"
            :aria-label="`${t('projects.viewShots')}: ${project.name[locale]}`"
            @click="openGallery(project)"
          >
            <img :src="shotSrc(project.shots[0])" :alt="project.name[locale]" loading="lazy" />
          </button>
          <div v-else class="card-mark" aria-hidden="true">
            <span class="card-icon" v-html="categoryIcon(project.category)" />
            <span>{{ project.name[locale].split('—')[0].trim() }}</span>
          </div>

          <div class="card-body">
            <div class="project-meta">
              <span>{{ project.eyebrow[locale] }}</span>
              <span v-if="project.badge" class="badge" :class="project.badgeStyle || 'private'">
                {{ project.badge[locale] }}
              </span>
            </div>
            <h3 class="card-name">{{ project.name[locale] }}</h3>
            <p class="card-desc">{{ project.description[locale] }}</p>
            <div class="card-stack">
              <span v-for="tech in project.stack" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>

          <div class="card-actions">
            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="card-link">
              {{ project.linkLabel?.[locale] || t('projects.open') }}
            </a>
            <button v-if="project.shots" class="card-link text-button" type="button" @click="openGallery(project)">
              {{ t('projects.viewShots') }}
            </button>
          </div>
        </article>
      </div>
    </div>

    <div v-if="gallery" class="lightbox" role="dialog" aria-modal="true" @click="closeGallery">
      <button class="lb-close" type="button" :aria-label="t('projects.close')" @click="closeGallery">×</button>
      <button v-if="gallery.length > 1" class="lb-nav lb-prev" type="button" :aria-label="t('projects.previous')" @click.stop="step(-1)">‹</button>
      <img :src="shotSrc(gallery[index])" class="lb-img" alt="" @click.stop />
      <button v-if="gallery.length > 1" class="lb-nav lb-next" type="button" :aria-label="t('projects.next')" @click.stop="step(1)">›</button>
      <div v-if="gallery.length > 1" class="lb-counter">{{ index + 1 }} / {{ gallery.length }}</div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { t, locale } from '../i18n.js'
import { projects } from '../data/projects.js'
import globeIcon from '../assets/icons/globe.svg?raw'
import telegramIcon from '../assets/icons/telegram.svg?raw'
import mobileIcon from '../assets/icons/mobile.svg?raw'

const featured = computed(() => projects.find(project => project.featured))
const regularProjects = computed(() => projects.filter(project => !project.featured))
const gallery = ref(null)
const index = ref(0)

const shotSrc = shot => import.meta.env.BASE_URL + 'shots/' + shot

function openGallery(project) {
  if (!project.shots?.length) return
  gallery.value = project.shots
  index.value = 0
  document.body.style.overflow = 'hidden'
}

function closeGallery() {
  gallery.value = null
  document.body.style.overflow = ''
}

function step(direction) {
  const count = gallery.value.length
  index.value = (index.value + direction + count) % count
}

function onKey(event) {
  if (!gallery.value) return
  if (event.key === 'Escape') closeGallery()
  else if (event.key === 'ArrowLeft') step(-1)
  else if (event.key === 'ArrowRight') step(1)
}

function categoryIcon(category) {
  return { web: globeIcon, mobile: mobileIcon, miniapp: telegramIcon }[category] ?? globeIcon
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.projects-section {
  overflow: hidden;
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 390px);
  gap: 48px;
  align-items: end;
  margin-bottom: 42px;
}

.section-heading .section-title {
  margin-bottom: 0;
}

.section-intro {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
}

.featured-project {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  overflow: hidden;
  margin-bottom: 20px;
  background: var(--bg-card);
  border: 1px solid rgba(124, 106, 247, 0.45);
  border-radius: 18px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.24);
}

.featured-visual,
.card-preview {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: #eaf0f7;
  cursor: zoom-in;
}

.featured-visual {
  min-height: 470px;
  border-right: 1px solid var(--border);
}

.featured-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.45s ease;
}

.featured-visual:hover img {
  transform: scale(1.025);
}

.visual-hint {
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  background: rgba(10, 10, 15, 0.82);
  color: var(--text);
  font-family: var(--mono);
  font-size: 11px;
  backdrop-filter: blur(12px);
}

.featured-copy {
  display: flex;
  flex-direction: column;
  padding: 38px;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.featured-copy h3 {
  max-width: 560px;
  margin-top: 25px;
  color: var(--text);
  font-size: clamp(25px, 3vw, 39px);
  line-height: 1.12;
  letter-spacing: -0.035em;
}

.project-desc {
  margin-top: 20px;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.72;
}

.project-highlights {
  display: grid;
  gap: 10px;
  margin: 26px 0 32px;
  list-style: none;
}

.project-highlights li {
  position: relative;
  padding-left: 20px;
  color: var(--text);
  font-size: 13px;
}

.project-highlights li::before {
  content: '';
  position: absolute;
  top: 0.7em;
  left: 0;
  width: 8px;
  height: 2px;
  background: var(--accent);
}

.project-footer {
  display: grid;
  gap: 24px;
  margin-top: auto;
}

.primary-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 100%;
  padding: 13px 16px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.primary-link:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.project-card {
  display: flex;
  min-height: 390px;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: rgba(124, 106, 247, 0.52);
  transform: translateY(-3px);
}

.card-preview {
  height: 215px;
  border-bottom: 1px solid var(--border);
}

.card-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.35s ease;
}

.card-preview:hover img {
  transform: scale(1.035);
}

.card-mark {
  display: flex;
  height: 142px;
  align-items: flex-end;
  justify-content: space-between;
  padding: 22px;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background:
    linear-gradient(135deg, rgba(124, 106, 247, 0.2), transparent 54%),
    repeating-linear-gradient(90deg, transparent 0 39px, rgba(255, 255, 255, 0.025) 40px);
  color: rgba(226, 226, 240, 0.38);
  font-family: var(--mono);
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.card-icon {
  display: inline-flex;
  width: 34px;
  height: 34px;
  color: var(--accent);
}

.card-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px 24px 18px;
}

.card-name {
  margin-top: 18px;
  color: var(--text);
  font-size: 19px;
  font-weight: 650;
  line-height: 1.28;
  letter-spacing: -0.02em;
}

.card-desc {
  margin: 12px 0 20px;
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.65;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.card-body .card-stack {
  margin-top: auto;
}

.tech-tag {
  padding: 3px 8px;
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 10px;
}

.badge {
  flex: 0 0 auto;
  padding: 3px 8px;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.badge.live {
  border-color: rgba(52, 211, 153, 0.28);
  background: rgba(52, 211, 153, 0.1);
  color: #6ee7b7;
}

.badge.concept {
  border-color: rgba(124, 106, 247, 0.3);
  background: var(--accent-dim);
  color: #aaa0ff;
}

.badge.private {
  color: var(--text-muted);
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 55px;
  padding: 0 24px;
  border-top: 1px solid var(--border);
}

.card-link {
  color: var(--accent);
  font-size: 12px;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.card-link:hover {
  opacity: 0.72;
}

.text-button {
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  cursor: pointer;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(5, 5, 8, 0.94);
  backdrop-filter: blur(8px);
}

.lb-img {
  max-width: min(1180px, 92vw);
  max-height: 88vh;
  object-fit: contain;
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
}

.lb-close,
.lb-nav {
  position: absolute;
  border: 1px solid var(--border);
  background: rgba(20, 20, 28, 0.82);
  color: var(--text);
  cursor: pointer;
}

.lb-close {
  top: 20px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 28px;
  line-height: 1;
}

.lb-nav {
  top: 50%;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 50%;
  font-size: 27px;
}

.lb-prev { left: 24px; }
.lb-next { right: 24px; }

.lb-counter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 12px;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

@media (max-width: 820px) {
  .section-heading,
  .featured-project {
    grid-template-columns: 1fr;
  }

  .featured-visual {
    min-height: 380px;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .section-heading {
    gap: 18px;
    margin-bottom: 28px;
  }

  .featured-visual {
    min-height: 250px;
  }

  .featured-copy {
    padding: 25px 20px;
  }

  .project-meta {
    align-items: flex-start;
  }

  .featured-copy h3 {
    margin-top: 20px;
  }

  .card-preview {
    height: 190px;
  }

  .lightbox {
    padding: 12px;
  }

  .lb-prev { left: 6px; }
  .lb-next { right: 6px; }
}

@media (prefers-reduced-motion: reduce) {
  .featured-visual img,
  .card-preview img,
  .project-card,
  .primary-link {
    transition: none;
  }
}
</style>
