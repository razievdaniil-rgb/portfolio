<template>
  <section id="services" class="section services-section">
    <div class="container">
      <div class="services-heading">
        <div><p class="section-label">{{ t('services.label') }}</p><h2 class="section-title">{{ t('services.title') }}</h2></div>
        <p class="services-intro">{{ t('services.intro') }}</p>
      </div>
      <div class="services-grid">
        <article v-for="service in t('services.items')" :key="service.name" class="service-card">
          <header class="service-top"><span class="service-index">{{ service.index }}</span><span class="service-tag">{{ service.tag }}</span></header>
          <div class="service-main"><h3>{{ service.name }}</h3><p>{{ service.desc }}</p></div>
          <div class="service-result"><span>{{ t('services.resultLabel') }}</span><p>{{ service.result }}</p></div>
          <div class="service-includes"><span>{{ t('services.includesLabel') }}</span><ul><li v-for="feature in service.features" :key="feature">{{ feature }}</li></ul></div>
          <footer class="service-footer"><small>{{ service.case }}</small><a href="#contact">{{ t('services.cta') }}</a></footer>
        </article>
      </div>
      <div class="first-step">
        <span class="first-step-mark" aria-hidden="true">↳</span>
        <div><p>{{ t('services.firstStep') }}</p><h3>{{ t('services.firstStepText') }}</h3></div>
        <a href="#contact">{{ t('hero.btnContact') }} <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { t } from '../i18n.js'
</script>

<style scoped>
.services-section{background:#fff}.services-heading{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,430px);gap:40px;align-items:end;margin-bottom:44px}.services-heading .section-title{margin-bottom:0}.services-intro{color:var(--text-muted);font-size:16px;line-height:1.65}.services-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.service-card{display:flex;min-height:600px;flex-direction:column;overflow:hidden;border:1px solid var(--border);border-radius:24px;background:var(--bg);transition:transform .25s,border-color .25s,box-shadow .25s}.service-card:hover{transform:translateY(-5px);border-color:var(--text);box-shadow:0 20px 44px rgba(33,46,74,.1)}.service-card:nth-child(2){background:#edf2ff}.service-card:nth-child(3){border-color:var(--accent);background:var(--accent);color:#fff}.service-top{display:flex;min-height:62px;align-items:center;justify-content:space-between;gap:12px;padding:0 22px;border-bottom:1px solid var(--border)}.service-index{color:var(--accent);font-family:var(--mono);font-size:10px;font-weight:700}.service-tag{color:var(--text-muted);font-family:var(--mono);font-size:8px;letter-spacing:.08em;text-align:right;text-transform:uppercase}.service-main{padding:30px 22px 26px}.service-main h3{max-width:280px;font-family:var(--display);font-size:clamp(27px,2.7vw,38px);line-height:1;letter-spacing:-.055em}.service-main p{margin-top:18px;color:var(--text-muted);font-size:13px;line-height:1.65}.service-result,.service-includes{padding:22px;border-top:1px solid var(--border)}.service-result>span,.service-includes>span{display:block;margin-bottom:11px;color:var(--accent);font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.service-result p{font-size:13px;line-height:1.55}.service-includes ul{display:grid;gap:8px;list-style:none}.service-includes li{position:relative;padding-left:17px;color:var(--text-muted);font-size:12px}.service-includes li::before{content:'—';position:absolute;left:0;color:var(--accent)}.service-footer{display:grid;gap:15px;margin-top:auto;padding:22px;border-top:1px solid var(--border)}.service-footer small{min-height:30px;color:var(--text-dim);font-size:10px;line-height:1.45}.service-footer a{display:flex;min-height:44px;align-items:center;justify-content:center;border:1px solid var(--border-strong);border-radius:999px;font-size:12px;font-weight:700;transition:background .2s,color .2s,border-color .2s}.service-footer a:hover{border-color:var(--text);background:var(--text);color:#fff}.service-card:nth-child(3) .service-top,.service-card:nth-child(3) .service-result,.service-card:nth-child(3) .service-includes,.service-card:nth-child(3) .service-footer{border-color:rgba(255,255,255,.25)}.service-card:nth-child(3) .service-index,.service-card:nth-child(3) .service-result>span,.service-card:nth-child(3) .service-includes>span{color:#fff}.service-card:nth-child(3) .service-tag,.service-card:nth-child(3) .service-main p,.service-card:nth-child(3) .service-includes li,.service-card:nth-child(3) .service-footer small{color:rgba(255,255,255,.76)}.service-card:nth-child(3) .service-includes li::before{color:#fff}.service-card:nth-child(3) .service-footer a{border-color:rgba(255,255,255,.5);background:#fff;color:var(--accent)}.service-card:nth-child(3) .service-footer a:hover{background:var(--text);color:#fff}.first-step{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:24px;align-items:center;margin-top:18px;padding:28px 30px;border:1px solid var(--text);border-radius:24px;background:var(--text);color:#fff}.first-step-mark{color:#7aa0ff;font-family:var(--display);font-size:44px;line-height:1}.first-step p{margin-bottom:5px;color:#7aa0ff;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.first-step h3{max-width:700px;font-size:17px;font-weight:500;line-height:1.45}.first-step>a{display:flex;min-height:50px;align-items:center;justify-content:space-between;gap:24px;padding:0 18px;border-radius:999px;background:#fff;color:var(--text);font-size:12px;font-weight:700}@media(max-width:980px){.services-grid{grid-template-columns:1fr}.service-card{min-height:0}.service-main h3{font-size:36px}.first-step{grid-template-columns:auto 1fr}.first-step>a{grid-column:2}}@media(max-width:620px){.services-heading{grid-template-columns:1fr;gap:0}.services-grid{gap:10px}.service-main h3{font-size:31px}.first-step{grid-template-columns:1fr;padding:24px 20px}.first-step-mark{display:none}.first-step>a{grid-column:auto;width:100%}}@media(prefers-reduced-motion:reduce){.service-card,.service-footer a{transition:none}}
@media (min-width:621px) and (max-width:980px) {
  .services-heading {
    grid-template-columns: 1fr;
    gap: 18px;
    align-items: start;
  }

  .services-intro {
    max-width: 680px;
  }
}
</style>
