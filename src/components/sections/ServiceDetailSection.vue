<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Back Link -->
      <RouterLink to="/services" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Services
      </RouterLink>

      <div v-if="service" class="max-w-4xl">
        <!-- Service Header -->
        <div class="mb-12">
          <h1 class="text-5xl font-bold text-slate-900 mb-4">{{ service.title }}</h1>
          <p class="text-xl text-slate-600">{{ service.description }}</p>
        </div>

        <!-- Service Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-6">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Key Features</h3>
            <ul class="space-y-3">
              <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-slate-700">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in service.technologies" :key="tech" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p class="text-blue-100 mb-6">
            Let's discuss how {{ service.title }} can transform your business.
          </p>
          <RouterLink
            to="/contact"
            class="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300"
          >
            Schedule a Consultation
          </RouterLink>
        </div>
      </div>
      <div v-else class="text-center py-12">
        <p class="text-slate-600 text-lg">Service not found</p>
        <RouterLink to="/services" class="text-blue-600 hover:text-blue-700 font-semibold">Back to Services</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { services } from '../data/portfolio'

const route = useRoute()

const service = computed(() => {
  const id = parseInt(route.params.id as string)
  return services.find(s => s.id === id)
})
</script>
