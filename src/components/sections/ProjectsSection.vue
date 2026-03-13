<template>
  <section id="projects" class="relative py-20 md:py-32 overflow-hidden bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
          <span class="text-sm font-medium text-blue-600">Our Portfolio</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
          Real Results, Real Projects
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          From concept to deployment, we deliver solutions that drive real business value
        </p>
      </div>

      <!-- Category filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          @click="selectedCategory = null"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            !selectedCategory
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 border border-slate-200 text-slate-900 hover:border-blue-200',
          ]"
        >
          All Projects
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = selectedCategory === category ? null : category"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 border border-slate-200 text-slate-900 hover:border-blue-200',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <!-- Image area -->
          <div class="relative h-48 bg-slate-100 flex items-center justify-center overflow-hidden">
            <div class="text-5xl group-hover:scale-110 transition-transform duration-300">{{ project.image }}</div>
          </div>

          <!-- Content -->
          <div class="p-8 space-y-6">
            <!-- Category badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
              <span class="text-xs font-semibold text-blue-600">{{ project.category }}</span>
            </div>

            <!-- Title & description -->
            <div class="space-y-3">
              <h3 class="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
              <p class="text-slate-600 line-clamp-3">{{ project.description }}</p>
            </div>

            <!-- Technologies -->
            <div class="space-y-3">
              <p class="text-xs font-semibold text-slate-500">TECH STACK</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Results -->
            <div class="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div v-for="result in project.results" :key="result" class="text-center">
                <p class="text-blue-600 font-semibold text-sm">{{ result }}</p>
              </div>
            </div>

            <!-- View project button -->
            <button
              class="w-full px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
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
