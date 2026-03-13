<template>
  <section class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-40 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Main about content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <!-- Left side -->
        <div class="space-y-8 animate-slide-in">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span class="text-sm font-medium text-primary-300">About Us</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
              Driven by Excellence
            </h2>
          </div>

          <p class="text-lg text-slate-300 leading-relaxed">
            TechXtraSol is a forward-thinking technology company dedicated to delivering enterprise-grade solutions.
            With expertise in Laravel, Vue.js, and modern DevOps practices, we help businesses transform their operations.
          </p>

          <!-- Key stats -->
          <div class="grid grid-cols-3 gap-6 py-8 border-y border-slate-700/50">
            <div class="space-y-2">
              <div class="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                10+
              </div>
              <p class="text-sm text-slate-400">Successful Projects</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                50+
              </div>
              <p class="text-sm text-slate-400">Deployment Sites</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                99.9%
              </div>
              <p class="text-sm text-slate-400">Uptime SLA</p>
            </div>
          </div>

          <!-- Core values -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white">Our Core Values</h3>
            <ul class="space-y-3">
              <li v-for="value in coreValues" :key="value" class="flex items-start gap-3">
                <div class="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="text-slate-300">{{ value }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right side - Visual -->
        <div class="grid grid-cols-2 gap-6">
          <div
            class="bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl p-8 space-y-4 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
          >
            <div class="text-5xl">🏢</div>
            <h4 class="font-bold text-white">Enterprise Focus</h4>
            <p class="text-sm text-slate-300">We specialize in building solutions for large organizations with complex requirements</p>
          </div>

          <div
            class="bg-gradient-to-br from-accent-500/20 to-accent-600/20 border border-accent-500/30 rounded-2xl p-8 space-y-4 hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300"
          >
            <div class="text-5xl">🎯</div>
            <h4 class="font-bold text-white">Goal-Oriented</h4>
            <p class="text-sm text-slate-300">Every project is aligned with your business objectives and KPIs</p>
          </div>

          <div
            class="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-8 space-y-4 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div class="text-5xl">🔧</div>
            <h4 class="font-bold text-white">Technical Excellence</h4>
            <p class="text-sm text-slate-300">We employ best practices and modern technologies in every project</p>
          </div>

          <div
            class="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-8 space-y-4 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div class="text-5xl">🚀</div>
            <h4 class="font-bold text-white">Continuous Improvement</h4>
            <p class="text-sm text-slate-300">We stay updated with the latest technologies and best practices</p>
          </div>
        </div>
      </div>

      <!-- Team section -->
      <div class="space-y-8">
        <div class="text-center space-y-3">
          <h3 class="text-3xl font-bold text-white">Our Team</h3>
          <p class="text-slate-400">Experts dedicated to your success</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-500/50 rounded-2xl p-8 space-y-4 text-center hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
          >
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-3xl">
              👤
            </div>
            <div class="space-y-2">
              <h4 class="text-xl font-bold text-white">{{ member.name }}</h4>
              <p class="text-primary-300 font-semibold">{{ member.role }}</p>
              <p class="text-slate-400 text-sm">{{ member.bio }}</p>
            </div>
            <div class="pt-4 border-t border-slate-700/50">
              <p class="text-xs font-semibold text-slate-400 mb-2">EXPERTISE</p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="skill in member.expertise.split(', ')"
                  :key="skill"
                  class="px-2 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs rounded"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { teamMembers } from '../../data/portfolio'

const coreValues = [
  'Innovation and continuous learning',
  'Client success is our priority',
  'Quality over quick fixes',
  'Transparency in communication',
  'Security and compliance first',
  'Scalable and maintainable code',
]
</script>
