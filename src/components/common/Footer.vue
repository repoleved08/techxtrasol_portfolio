<template>
  <footer class="relative border-t border-slate-200 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <!-- Company info -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">TX</span>
            </div>
            <h3 class="font-bold text-slate-900 text-lg">TechXtraSol</h3>
          </div>
          <p class="text-slate-600 text-sm leading-relaxed">
            Enterprise solutions built with excellence using Laravel, Vue.js, and modern architectures.
          </p>
          <!-- Social links -->
          <div class="flex gap-4 pt-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.link"
              :target="social.link !== '#' ? '_blank' : ''"
              :rel="social.link !== '#' ? 'noopener noreferrer' : ''"
              class="w-10 h-10 bg-slate-100 hover:bg-blue-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-300"
              :title="social.name"
            >
              <svg v-html="getSocialIcon(social.name)" class="w-5 h-5"></svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="space-y-4">
          <h4 class="font-bold text-slate-900">Services</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <a href="#" class="text-slate-600 hover:text-blue-600 text-sm transition-colors">{{ service }}</a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="space-y-4">
          <h4 class="font-bold text-slate-900">Resources</h4>
          <ul class="space-y-2">
            <li v-for="resource in resources" :key="resource">
              <a href="#" class="text-slate-600 hover:text-blue-600 text-sm transition-colors">{{ resource }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="font-bold text-slate-900">Contact</h4>
          <ul class="space-y-3">
            <li>
              <a :href="`mailto:${companyData.email}`" class="text-slate-600 hover:text-blue-600 text-sm transition-colors">
                {{ companyData.email }}
              </a>
            </li>
            <li class="text-slate-600 text-sm">
              {{ companyData.location }}<br />
              Kenya
            </li>
            <li>
              <a :href="companyData.calendarLink" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors">
                Schedule a Call
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-200"></div>

      <!-- Bottom footer -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
        <p class="text-slate-600 text-sm">
          &copy; 2024 TechXtraSol. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-slate-600 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
          <a href="#" class="text-slate-600 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
          <a href="#" class="text-slate-600 hover:text-blue-600 text-sm transition-colors">Cookie Policy</a>
        </div>
      </div>

      <!-- Scroll to top button -->
      <button
        @click="scrollToTop"
        class="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 z-40"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { companyData } from '../../data/portfolio'

const services = [
  'POS Systems',
  'Hotel Management',
  'Financial Systems',
  'Blog Platforms',
  'Company Profiles',
  'Payment Integration',
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

const socialIconSvgs: Record<string, string> = {
  GitHub: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
  LinkedIn: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.949v5.42h-3.554s.05-8.783 0-9.69h3.554v1.374c.429-.662 1.196-1.608 2.906-1.608 2.122 0 3.714 1.388 3.714 4.37v5.554zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.712 0-.951.771-1.712 1.96-1.712 1.188 0 1.914.761 1.938 1.712 0 .951-.75 1.712-1.983 1.712zm1.946 11.597H3.392V9.762h3.891v10.69zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  Twitter: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 11-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 5a9.5 9.5 0 0 0-9-5.5c4.75 2.35 7-7 7-11 1-.5 3-1.72 3-5.5z"/></svg>',
}

const socialLinks = [
  { name: 'GitHub', link: companyData.social.github },
  { name: 'LinkedIn', link: companyData.social.linkedin || '#' },
  { name: 'Twitter', link: companyData.social.twitter || '#' },
]

const getSocialIcon = (name: string): string => {
  return socialIconSvgs[name] || '<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
