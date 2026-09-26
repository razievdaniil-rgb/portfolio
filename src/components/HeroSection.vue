<template>
  <section class="hero">
    <div class="container">
      <div class="hero-status">
        <p><span class="status-dot" />{{ t('hero.kicker') }}</p>
        <span class="status-place">{{ t('hero.metaWork') }}</span>
      </div>

      <div class="hero-grid">
        <div class="hero-copy">
          <h1 class="hero-title">
            {{ t('hero.titleLead') }}
            <span>{{ t('hero.titleAccent') }}</span>
            {{ t('hero.titleTail') }}
          </h1>
          <div class="hero-bottom">
            <p class="hero-desc">{{ t('hero.desc') }}</p>
            <div class="hero-actions">
              <a href="#projects" class="btn-primary">{{ t('hero.btnProjects') }} <span aria-hidden="true">↘</span></a>
              <a href="#contact" class="btn-ghost">{{ t('hero.btnContact') }}</a>
            </div>
          </div>
        </div>

        <aside class="hero-proof" :aria-label="t('hero.proofAria')">
          <div class="route-line" aria-hidden="true">
            <span>01</span><i /><span>LIVE</span>
          </div>
          <a href="https://rfzavod.com/" target="_blank" rel="noopener" class="proof-main">
            <div class="proof-window">
              <div class="window-bar"><strong>rfzavod.com</strong><span>↗</span></div>
              <img :src="shotSrc('rfzavod-live-card.png')" alt="АПГС — промышленный каталог" />
            </div>
            <div class="proof-caption">
              <div><p>{{ t('hero.proofLabel') }}</p><h2>{{ t('hero.proofTitle') }}</h2></div>
              <span class="case-year">2026</span>
            </div>
          </a>

          <div class="proof-row">
            <a href="https://www.rustore.ru/catalog/app/ru.daniil.fitdiary" target="_blank" rel="noopener" class="proof-mini">
              <span class="proof-index">02</span><span><strong>FitDiary</strong><small>{{ t('hero.fitdiaryLabel') }}</small></span><span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" class="proof-mini proof-cta">
              <span class="proof-index">03</span><span><strong>{{ t('hero.startTitle') }}</strong><small>{{ t('hero.startLabel') }}</small></span><span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>
      </div>

      <div class="hero-stack"><span>CORE STACK</span><p>{{ t('hero.metaStack') }}</p></div>
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'
const shotSrc = shot => import.meta.env.BASE_URL + 'shots/' + shot
</script>

<style scoped>
.hero { min-height: 100svh; padding: 118px 0 44px; }
.hero-status { display:flex; align-items:center; justify-content:space-between; padding-bottom:18px; border-bottom:1px solid var(--border); color:var(--text-muted); font-family:var(--mono); font-size:10px; letter-spacing:.09em; text-transform:uppercase; }
.hero-status p { display:flex; align-items:center; gap:9px; }
.status-dot { width:8px; height:8px; border-radius:50%; background:#27b36a; box-shadow:0 0 0 5px rgba(39,179,106,.12); }
.hero-grid { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(400px,.92fr); gap:clamp(46px,6vw,88px); align-items:center; padding:clamp(46px,6vw,78px) 0 42px; }
.hero-title { max-width:760px; font-family:var(--display); font-size:clamp(54px,7vw,102px); font-weight:900; line-height:.88; letter-spacing:-.082em; }
.hero-title span { display:inline-block; margin:8px 0 9px; padding:4px 12px 10px; border-radius:6px; background:var(--accent); color:#fff; transform:rotate(-1deg); }
.hero-bottom { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:24px; align-items:end; margin-top:42px; }
.hero-desc { max-width:520px; color:var(--text-muted); font-size:17px; line-height:1.62; }
.hero-actions { display:grid; gap:9px; }
.btn-primary,.btn-ghost { display:flex; min-height:50px; align-items:center; justify-content:space-between; gap:28px; padding:0 17px; border-radius:999px; font-size:13px; font-weight:700; transition:transform .2s,background .2s; }
.btn-primary { min-width:210px; background:var(--text); color:#fff; }
.btn-ghost { justify-content:center; border:1px solid var(--border-strong); }
.btn-primary:hover,.btn-ghost:hover { transform:translateY(-2px); }
.btn-ghost:hover { background:#fff; }
.hero-proof { position:relative; }
.route-line { position:absolute; top:-28px; right:12px; left:12px; display:grid; grid-template-columns:auto 1fr auto; gap:10px; align-items:center; color:var(--accent); font-family:var(--mono); font-size:9px; letter-spacing:.12em; }
.route-line i { height:1px; background:var(--accent); }
.proof-main { display:block; overflow:hidden; border:1px solid var(--text); border-radius:24px; background:#fff; box-shadow:12px 12px 0 var(--accent); transition:transform .25s,box-shadow .25s; }
.proof-main:hover { transform:translate(-3px,-3px); box-shadow:16px 16px 0 var(--accent); }
.proof-window { overflow:hidden; background:#eef2f7; }
.window-bar { display:flex; height:38px; align-items:center; justify-content:space-between; padding:0 15px; border-bottom:1px solid var(--border); color:var(--text-muted); font-family:var(--mono); font-size:9px; }
.proof-window img { display:block; width:100%; height:320px; object-fit:cover; object-position:top center; }
.proof-caption { display:flex; align-items:flex-end; justify-content:space-between; gap:20px; padding:23px; }
.proof-caption p { margin-bottom:6px; color:var(--accent); font-family:var(--mono); font-size:9px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; }
.proof-caption h2 { max-width:390px; font-size:18px; line-height:1.28; letter-spacing:-.02em; }
.case-year { color:var(--text-dim); font-family:var(--mono); font-size:10px; }
.proof-row { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px; }
.proof-mini { display:grid; grid-template-columns:auto 1fr auto; gap:12px; align-items:center; min-height:83px; padding:14px; border:1px solid var(--border-strong); border-radius:16px; background:rgba(255,255,255,.76); transition:transform .2s,background .2s; }
.proof-mini:hover { transform:translateY(-3px); background:#fff; }
.proof-index { color:var(--accent); font-family:var(--mono); font-size:9px; }
.proof-mini strong,.proof-mini small { display:block; }
.proof-mini strong { font-size:12px; }
.proof-mini small { margin-top:3px; color:var(--text-muted); font-size:9px; }
.proof-cta { border-color:var(--signal); background:var(--signal); color:#fff; }
.proof-cta .proof-index,.proof-cta small { color:rgba(255,255,255,.74); }
.hero-stack { display:flex; align-items:center; justify-content:space-between; padding-top:20px; border-top:1px solid var(--border); font-family:var(--mono); font-size:10px; letter-spacing:.08em; }
.hero-stack span { color:var(--accent); font-weight:700; }
.hero-stack p { color:var(--text-muted); }
@media(max-width:980px){.hero-grid{grid-template-columns:1fr}.hero-copy{max-width:820px}.hero-proof{width:min(100%,700px)}}
@media(max-width:620px){.hero{padding-top:100px}.status-place{display:none}.hero-title{font-size:clamp(49px,15vw,72px)}.hero-bottom{grid-template-columns:1fr}.hero-actions{grid-template-columns:1fr 1fr}.btn-primary{min-width:0}.proof-window img{height:235px}.proof-row{grid-template-columns:1fr}.hero-stack{align-items:flex-start;flex-direction:column;gap:7px}.proof-main{box-shadow:7px 7px 0 var(--accent)}}
@media(max-width:420px){.hero-actions{grid-template-columns:1fr}.hero-title span{margin-left:-4px}.proof-caption{padding:18px}}
@media(prefers-reduced-motion:reduce){.proof-main,.proof-mini,.btn-primary,.btn-ghost{transition:none}}
</style>
