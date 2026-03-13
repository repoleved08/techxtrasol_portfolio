<template>
  <section id="projects" class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-40 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full">
          <span class="text-sm font-medium text-accent-300">Our Portfolio</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
          Real Results, Real Projects
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          From concept to deployment, we deliver enterprise-grade solutions that drive real business value
        </p>
      </div>

      <!-- Category filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = selectedCategory === category ? null : category"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            selectedCategory === category
              ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
              : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:border-primary-500/50',
          ]"
        >
          {{ category === null ? 'All Projects' : category }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-accent-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10"
        >
          <!-- Image area -->
          <div class="relative h-48 bg-gradient-to-br from-accent-500/20 to-primary-500/20 flex items-center justify-center overflow-hidden">
            <div class="text-7xl group-hover:scale-110 transition-transform duration-300">{{ project.image }}</div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-8 space-y-6">
            <!-- Category badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full">
              <span class="text-xs font-semibold text-accent-300">{{ project.category }}</span>
            </div>

            <!-- Title & description -->
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-white group-hover:text-accent-300 transition-colors">{{ project.title }}</h3>
              <p class="text-slate-300 line-clamp-3">{{ project.description }}</p>
            </div>

            <!-- Technologies -->
            <div class="space-y-3">
              <p class="text-xs font-semibold text-slate-400">TECH STACK</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Results -->
            <div class="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
              <div v-for="result in project.results" :key="result" class="text-center">
                <p class="text-accent-400 font-semibold text-sm">{{ result }}</p>
              </div>
            </div>

            <!-- View project button -->
            <button
              class="w-full px-4 py-3 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 hover:border-accent-500/60 text-accent-300 hover:text-accent-200 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20 flex items-center justify-center gap-2 group/btn"
            >
              View Case Study
              <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../../data/portfolio'

const selectedCategory = ref<string | null>(null)

const categories = computed(() => {
  const cats = [...new Set(projects.map((p) => p.category))]
  return cats as string[]
})

const filteredProjects = computed(() => {
  if (!selectedCategory.value) return projects
  return projects.filter((p) => p.category === selectedCategory.value)
})
</script>
