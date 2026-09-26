<template>
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection v-if="locale === 'en'" />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import { locale } from './i18n.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
