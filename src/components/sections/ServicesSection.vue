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
</script>
