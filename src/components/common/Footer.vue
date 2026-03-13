<template>
  <footer class="relative border-t border-slate-800/50 bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-md">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <!-- Company info -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">TX</span>
            </div>
            <h3 class="font-bold text-white text-lg">TechXtraSol</h3>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            Enterprise solutions built with excellence using Laravel, Vue.js, and modern DevOps practices.
          </p>
          <!-- Social links -->
          <div class="flex gap-4 pt-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.link"
              class="w-10 h-10 bg-slate-800/50 hover:bg-primary-500/20 border border-slate-700/50 hover:border-primary-500/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary-300 transition-all duration-300"
              :title="social.name"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-4">
          <h4 class="font-bold text-white">Services</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <a href="#" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">{{ service }}</a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="space-y-4">
          <h4 class="font-bold text-white">Resources</h4>
          <ul class="space-y-2">
            <li v-for="resource in resources" :key="resource">
              <a href="#" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">{{ resource }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="font-bold text-white">Contact</h4>
          <ul class="space-y-3">
            <li>
              <a href="mailto:hello@techxtrasol.com" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">
                hello@techxtrasol.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li class="text-slate-400 text-sm">
              123 Tech Street<br />
              Silicon Valley, CA 94000
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-800/50"></div>

      <!-- Bottom footer -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
        <p class="text-slate-400 text-sm">
          &copy; 2024 TechXtraSol. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">Privacy Policy</a>
          <a href="#" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">Terms of Service</a>
          <a href="#" class="text-slate-400 hover:text-primary-300 text-sm transition-colors">Cookie Policy</a>
        </div>
      </div>

      <!-- Scroll to top button -->
      <button
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-1 z-40"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
const services = [
  'POS Systems',
  'Hotel Management',
  'Financial Systems',
  'Blog Platforms',
  'Company Profiles',
  'DevOps & CI/CD',
]

const resources = [
  'Documentation',
  'API Reference',
  'Case Studies',
  'Blog',
  'Tutorials',
  'Support',
]

const socialLinks = [
  { name: 'GitHub', icon: '📦', link: '#' },
  { name: 'LinkedIn', icon: '💼', link: '#' },
  { name: 'Twitter', icon: '🐦', link: '#' },
  { name: 'Email', icon: '📧', link: '#' },
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
