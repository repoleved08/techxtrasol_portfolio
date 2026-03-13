<template>
  <section id="team" class="relative py-20 md:py-32 overflow-hidden bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Main about content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <!-- Left side -->
        <div class="space-y-8 animate-slide-up">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span class="text-sm font-medium text-blue-600">About Us</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
              Driven by Excellence
            </h2>
          </div>

          <p class="text-lg text-slate-600 leading-relaxed">
            TechXtraSol is a professional technology company dedicated to delivering enterprise-grade solutions. With deep expertise in Laravel, Vue.js, and modern architectures, we help businesses transform their operations.
          </p>

          <!-- Key stats -->
          <div class="grid grid-cols-3 gap-6 py-8 border-y border-slate-200">
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-600">10+</div>
              <p class="text-sm text-slate-600">Successful Projects</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-600">50+</div>
              <p class="text-sm text-slate-600">Deployment Sites</p>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-600">99.9%</div>
              <p class="text-sm text-slate-600">Uptime SLA</p>
            </div>
          </div>

          <!-- Core values -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-slate-900">Our Core Values</h3>
            <ul class="space-y-3">
              <li v-for="value in coreValues" :key="value" class="flex items-start gap-3">
                <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="text-slate-600">{{ value }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right side - Visual -->
        <div class="grid grid-cols-2 gap-6">
          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300">
            <h4 class="font-bold text-slate-900">Enterprise Focus</h4>
            <p class="text-sm text-slate-600">Specializing in solutions for large organizations</p>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300">
            <h4 class="font-bold text-slate-900">Goal-Oriented</h4>
            <p class="text-sm text-slate-600">Aligned with your business objectives</p>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300">
            <h4 class="font-bold text-slate-900">Technical Excellence</h4>
            <p class="text-sm text-slate-600">Best practices in every project</p>
          </div>

          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300">
            <h4 class="font-bold text-slate-900">Continuous Improvement</h4>
            <p class="text-sm text-slate-600">Always learning and evolving</p>
          </div>
        </div>
      </div>

      <!-- Team section -->
      <div class="space-y-8">
        <div class="text-center space-y-3">
          <h3 class="text-3xl font-bold text-slate-900">Our Team</h3>
          <p class="text-slate-600">Experts dedicated to your success</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <div class="text-3xl">👨‍💻</div>
            </div>
            <div class="space-y-2 text-center">
              <h4 class="text-xl font-bold text-slate-900">{{ member.name }}</h4>
              <p class="text-blue-600 font-semibold">{{ member.role }}</p>
              <p class="text-slate-600 text-sm">{{ member.bio }}</p>
            </div>
            <div class="pt-4 border-t border-slate-200 space-y-2">
              <p class="text-xs font-semibold text-slate-500 text-center">EXPERTISE</p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="skill in member.expertise.split(', ')"
                  :key="skill"
                  class="px-2 py-1 bg-blue-50 border border-blue-200 text-blue-600 text-xs rounded font-medium"
                >
                  {{ skill }}
                </span>
              </div>
              <p v-if="member.email" class="text-center text-xs text-slate-600 pt-2">
                {{ member.email }}
              </p>
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
