<template>
  <section id="services" class="relative py-20 md:py-32 overflow-hidden bg-slate-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
          <span class="text-sm font-medium text-blue-600">Our Services</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
          Enterprise Solutions That Work
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Comprehensive services built with proven technologies and best practices
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
        >
          <!-- Icon -->
          <div class="mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
            <svg v-html="getIcon(service.icon)" class="w-6 h-6 text-blue-600"></svg>
          </div>

          <!-- Content -->
          <div class="space-y-6">
            <!-- Title & description -->
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-slate-900">{{ service.title }}</h3>
              <p class="text-slate-600">{{ service.description }}</p>
            </div>

            <!-- Technologies -->
            <div class="space-y-3">
              <p class="text-sm font-semibold text-slate-700">Technology Stack</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in service.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-2">
              <li v-for="feature in service.features.slice(0, 3)" :key="feature" class="flex items-start gap-2 text-slate-600 text-sm">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <!-- Learn more link -->
            <button class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors mt-4">
              Learn More
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div class="relative bg-blue-600 rounded-2xl p-8 md:p-12 overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="space-y-2">
            <h3 class="text-2xl md:text-3xl font-bold text-white">Ready to get started?</h3>
            <p class="text-blue-100">Let us help you build your next enterprise solution</p>
          </div>
          <button class="flex-shrink-0 px-8 py-3 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '../../data/portfolio'

const iconSvgs: Record<string, string> = {
  CreditCardIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3.625 2.25A2.625 2.625 0 0 0 1 4.875v14.25A2.625 2.625 0 0 0 3.625 22h16.75A2.625 2.625 0 0 0 23 19.125V4.875A2.625 2.625 0 0 0 20.375 2.25H3.625zM19 5.25v2.25H5v-2.25h14zm0 12v2.25H5v-2.25h14z"/></svg>',
  BuildingLibraryIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>',
  BanknotesIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M10.5 1.5H3.75A2.25 2.25 0 0 0 1.5 3.75v16.5A2.25 2.25 0 0 0 3.75 22.5h16.5a2.25 2.25 0 0 0 2.25-2.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0v3h3v-3m0 0A2.25 2.25 0 0 0 10.5 3.75v.75h3v-.75a2.25 2.25 0 0 0-2.25-2.25zm6.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM15 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>',
  DocumentTextIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M5.625 1.5H3.375A1.875 1.875 0 0 0 1.5 3.375v17.25A1.875 1.875 0 0 0 3.375 22.5h17.25a1.875 1.875 0 0 0 1.875-1.875V3.375A1.875 1.875 0 0 0 20.625 1.5H5.625zM3.75 3.75h16.5v14.25H3.75V3.75zm4.125 6.75a.75.75 0 1 0 0 1.5h7.5a.75.75 0 1 0 0-1.5h-7.5zm0 3h7.5a.75.75 0 1 0 0-1.5h-7.5a.75.75 0 1 0 0 1.5z"/></svg>',
  GlobeAltIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zM2.25 12c0-1.896.356-3.709 1.007-5.368.659-1.705 1.642-3.223 2.884-4.465 1.242-1.242 2.76-2.225 4.465-2.884 1.66-.651 3.472-1.007 5.368-1.007s3.709.356 5.368 1.007c1.705.659 3.223 1.642 4.465 2.884 1.242 1.242 2.225 2.76 2.884 4.465.651 1.66 1.007 3.472 1.007 5.368s-.356 3.709-1.007 5.368c-.659 1.705-1.642 3.223-2.884 4.465-1.242 1.242-2.76 2.225-4.465 2.884-1.66.651-3.472 1.007-5.368 1.007s-3.709-.356-5.368-1.007c-1.705-.659-3.223-1.642-4.465-2.884-1.242-1.242-2.225-2.76-2.884-4.465-.651-1.66-1.007-3.472-1.007-5.368z"/></svg>',
  ShoppingCartIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.375 3.375 0 0 0 3.273 2.373h7.1a3.375 3.375 0 0 0 3.273-2.373l2.558-9.592a.375.375 0 0 0-.362-.278H5.812m-8.562 6.963-2.558 9.592a.375.375 0 0 0 .362.278h14.172a.375.375 0 0 0 .362-.278l2.558-9.592M12 15.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg>',
  RocketLaunchIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M15.54 1.534A9 9 0 1 0 22.5 10.5M7.5 3v5.25m.006.001h-.016a.75.75 0 1 0 0 1.5h.016a.75.75 0 0 0 0-1.5zM7.5 9v5.25m.006.001h-.016a.75.75 0 1 0 0 1.5h.016a.75.75 0 0 0 0-1.5z"/></svg>',
}

const getIcon = (name: string): string => {
  return iconSvgs[name] || '<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
}
</script>
