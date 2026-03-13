<template>
  <section id="services" class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
          <span class="text-sm font-medium text-primary-300">Our Services</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
          Enterprise Solutions That Deliver
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Comprehensive services built with cutting-edge technology and enterprise-grade standards
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-2"
        >
          <!-- Gradient overlay on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-2xl transition-all duration-300"
          ></div>

          <!-- Content -->
          <div class="relative z-10 space-y-6">
            <!-- Icon -->
            <div class="text-5xl">{{ service.icon }}</div>

            <!-- Title & description -->
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-white">{{ service.title }}</h3>
              <p class="text-slate-300">{{ service.description }}</p>
            </div>

            <!-- Technologies -->
            <div class="space-y-3">
              <p class="text-sm font-semibold text-primary-300">Technology Stack</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in service.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-medium rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <ul class="space-y-2">
              <li v-for="feature in service.features.slice(0, 3)" :key="feature" class="flex items-start gap-2 text-slate-300 text-sm">
                <svg class="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <button
              class="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 font-semibold transition-colors mt-4"
            >
              Learn More
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Banner -->
      <div
        class="relative bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-2xl p-8 md:p-12 overflow-hidden group"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-transparent to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="space-y-2">
            <h3 class="text-2xl md:text-3xl font-bold text-white">Ready to get started?</h3>
            <p class="text-slate-300">Let us help you build your next enterprise solution</p>
          </div>
          <button
            class="flex-shrink-0 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 whitespace-nowrap"
          >
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
