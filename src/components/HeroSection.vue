<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="hero-kicker"><span class="status-dot" />{{ t('hero.kicker') }}</p>
        <h1 class="hero-title">
          {{ t('hero.titleLead') }}
          <span>{{ t('hero.titleAccent') }}</span>
          {{ t('hero.titleTail') }}
        </h1>
        <p class="hero-desc">{{ t('hero.desc') }}</p>

        <div class="hero-actions">
          <a href="#projects" class="btn-primary">
            {{ t('hero.btnProjects') }}
            <span aria-hidden="true">↓</span>
          </a>
          <a v-if="showFiverr" :href="FIVERR_URL" target="_blank" rel="noopener" class="btn-ghost">{{ t('hero.btnFiverr') }}</a>
          <a v-else href="#contact" class="btn-ghost">{{ t('hero.btnContact') }}</a>
        </div>

        <div class="hero-meta">
          <span>{{ t('hero.metaStack') }}</span>
          <span>{{ t('hero.metaWork') }}</span>
        </div>
      </div>

      <aside class="hero-proof" :aria-label="t('hero.proofAria')">
        <a href="https://rfzavod.com/" target="_blank" rel="noopener" class="proof-main">
          <div class="proof-window">
            <div class="window-bar">
              <span /><span /><span />
              <em>rfzavod.com</em>
            </div>
            <img :src="shotSrc('rfzavod-live-card.png')" alt="АПГС — промышленный каталог" />
          </div>
          <div class="proof-caption">
            <div>
              <p>{{ t('hero.proofLabel') }}</p>
              <h2>{{ t('hero.proofTitle') }}</h2>
            </div>
            <span aria-hidden="true">↗</span>
          </div>
        </a>

        <div class="proof-row">
          <a href="https://www.rustore.ru/catalog/app/ru.daniil.fitdiary" target="_blank" rel="noopener" class="proof-mini">
            <span class="proof-index">02</span>
            <span>
              <strong>FitDiary</strong>
              <small>{{ t('hero.fitdiaryLabel') }}</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" class="proof-mini proof-cta">
            <span class="proof-index">03</span>
            <span>
              <strong>{{ t('hero.startTitle') }}</strong>
              <small>{{ t('hero.startLabel') }}</small>
            </span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
    </div>
    <div class="hero-rule" aria-hidden="true" />
  </section>
</template>

<script setup>
import { t, locale } from '../i18n.js'

const FIVERR_URL = ''
const showFiverr = locale === 'en' && FIVERR_URL !== ''
const shotSrc = shot => import.meta.env.BASE_URL + 'shots/' + shot
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  min-height: 100svh;
  align-items: center;
  overflow: hidden;
  padding: 130px 0 78px;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent 49.92%, rgba(255, 255, 255, 0.026) 50%, transparent 50.08%),
    radial-gradient(circle at 77% 40%, rgba(107, 203, 255, 0.075), transparent 29%);
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(390px, 0.98fr);
  gap: clamp(48px, 7vw, 100px);
  align-items: center;
}

.hero-copy {
  max-width: 650px;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  color: var(--text-muted);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 5px rgba(107, 203, 255, 0.08);
}

.hero-title {
  max-width: 690px;
  color: var(--text);
  font-family: var(--display);
  font-size: clamp(39px, 5.1vw, 72px);
  font-weight: 650;
  line-height: 1.02;
  letter-spacing: -0.055em;
}

.hero-title span {
  display: inline;
  color: var(--signal);
}

.hero-desc {
  max-width: 575px;
  margin: 30px 0 38px;
  color: var(--text-muted);
  font-size: clamp(15px, 1.45vw, 18px);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-ghost {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: 0 18px;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 650;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.btn-primary {
  min-width: 210px;
  background: var(--accent);
  color: #fff;
}

.btn-ghost {
  border: 1px solid var(--border-strong);
  color: var(--text);
}

.btn-primary:hover,
.btn-ghost:hover {
  transform: translateY(-2px);
}

.btn-ghost:hover {
  border-color: var(--signal);
  background: rgba(107, 203, 255, 0.05);
}

.hero-meta {
  display: flex;
  gap: 24px;
  margin-top: 35px;
  color: var(--text-dim);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-proof {
  transform: rotate(1.1deg);
}

.proof-main {
  display: block;
  overflow: hidden;
  border: 1px solid var(--border-strong);
  border-radius: 18px;
  background: var(--bg-card);
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.35);
  transition: transform 0.28s ease, border-color 0.28s ease;
}

.proof-main:hover {
  transform: translateY(-5px) rotate(-0.5deg);
  border-color: rgba(107, 203, 255, 0.45);
}

.proof-window {
  overflow: hidden;
  background: #f4f7fb;
}

.window-bar {
  display: flex;
  height: 34px;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  border-bottom: 1px solid #dfe5ee;
  background: #edf1f6;
}

.window-bar span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c6ced9;
}

.window-bar em {
  margin-left: auto;
  color: #8290a2;
  font-family: var(--mono);
  font-size: 8px;
  font-style: normal;
}

.proof-window img {
  display: block;
  width: 100%;
  height: 340px;
  object-fit: cover;
  object-position: top center;
}

.proof-caption {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding: 22px;
}

.proof-caption p {
  margin-bottom: 5px;
  color: var(--signal);
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.proof-caption h2 {
  color: var(--text);
  font-size: 18px;
  line-height: 1.3;
}

.proof-caption > span {
  color: var(--signal);
  font-size: 19px;
}

.proof-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.proof-mini {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  min-height: 82px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(18, 20, 28, 0.82);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.proof-mini:hover {
  transform: translateY(-2px);
  border-color: var(--border-strong);
}

.proof-index {
  color: var(--text-dim);
  font-family: var(--mono);
  font-size: 9px;
}

.proof-mini strong,
.proof-mini small {
  display: block;
}

.proof-mini strong {
  color: var(--text);
  font-size: 12px;
}

.proof-mini small {
  margin-top: 2px;
  color: var(--text-muted);
  font-size: 9px;
}

.proof-mini > span:last-child {
  color: var(--accent);
}

.proof-cta {
  background: var(--accent);
}

.proof-cta .proof-index,
.proof-cta small,
.proof-cta > span:last-child {
  color: rgba(255, 255, 255, 0.68);
}

.proof-cta strong {
  color: #fff;
}

.hero-rule {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
}

@media (max-width: 940px) {
  .hero {
    min-height: auto;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    max-width: 760px;
  }

  .hero-proof {
    width: min(100%, 680px);
    transform: none;
  }
}

@media (max-width: 560px) {
  .hero {
    padding: 112px 0 64px;
  }

  .hero-title {
    font-size: clamp(37px, 12vw, 52px);
  }

  .hero-meta {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }

  .proof-window img {
    height: 240px;
  }

  .proof-row {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .proof-main,
  .proof-mini,
  .btn-primary,
  .btn-ghost {
    transition: none;
  }
}
</style>
