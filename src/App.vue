<template>
  <NavBar />
  <main>
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
