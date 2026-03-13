<script setup lang="ts">
import NavigationBar from './components/common/NavigationBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import TechnologiesSection from './components/sections/TechnologiesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import BlogSection from './components/sections/BlogSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Footer from './components/common/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950">
    <NavigationBar />
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TechnologiesSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
