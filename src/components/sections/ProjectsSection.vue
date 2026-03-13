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
            <svg v-html="getIcon(project.image)" class="w-16 h-16 text-slate-400 group-hover:scale-110 transition-transform duration-300"></svg>
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

const iconSvgs: Record<string, string> = {
  ChartBarIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 13.125V3.75a.75.75 0 0 1 .75-.75H20.25A.75.75 0 0 1 21 3.75v9.375m-18 0a6.375 6.375 0 0 0 12.318 3.75A6.375 6.375 0 0 0 21 13.125m-18 0V6.75a6.375 6.375 0 0 1 12.318-3.75A6.375 6.375 0 0 1 21 6.75v6.375m-18 0v6.75a.75.75 0 0 0 .75.75H3.75a.75.75 0 0 0 .75-.75v-6.75m12-6.75v6.75a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75v-6.75m0-3.75a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75m0 3.75a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75M4.5 9.75a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H4.5z"/></svg>',
  BuildingIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M5.25 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-4.5zm10.5 0a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-4.5zM8.25 6a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75zm0 4.5A.75.75 0 0 1 9 9.75h.01a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75zm0 4.5A.75.75 0 0 1 9 14.25h.01a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75z"/></svg>',
  CreditCardIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3.625 2.25A2.625 2.625 0 0 0 1 4.875v14.25A2.625 2.625 0 0 0 3.625 22h16.75A2.625 2.625 0 0 0 23 19.125V4.875A2.625 2.625 0 0 0 20.375 2.25H3.625zM19 5.25v2.25H5v-2.25h14zm0 12v2.25H5v-2.25h14z"/></svg>',
  BookOpenIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 6.042A8.967 8.967 0 0 0 6.75 12.75m5.25-6.708a9 9 0 0 1 5.25 6.708m-12 0a9 9 0 0 1 5.25-6.708m0 0H21a.75.75 0 0 1 .75.75v11.25A.75.75 0 0 1 21 20.25H3.75A.75.75 0 0 1 3 19.5V4.5a.75.75 0 0 1 .75-.75h2.25M9 12.75h.008v.008H9V12.75zm0 0h3v3H9v-3z"/></svg>',
  SparklesIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V1.5a.75.75 0 0 1 .75-.75zm0 18a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75zM4.471 4.471a.75.75 0 0 1 1.06 0l1.591 1.591a.75.75 0 1 1-1.06 1.06L4.471 5.53a.75.75 0 0 1 0-1.06zm12.728 12.728a.75.75 0 0 1 1.06 0l1.591 1.591a.75.75 0 1 1-1.06 1.06l-1.591-1.591a.75.75 0 0 1 0-1.06zm0-12.728a.75.75 0 0 1 0 1.06L16.94 7.061a.75.75 0 1 1-1.06-1.06l1.591-1.591a.75.75 0 0 1 1.06 0zM4.471 16.94a.75.75 0 0 1 0 1.06l-1.591 1.591a.75.75 0 1 1-1.06-1.06l1.591-1.591a.75.75 0 0 1 1.06 0z"/></svg>',
  ShoppingCartIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.375 3.375 0 0 0 3.273 2.373h7.1a3.375 3.375 0 0 0 3.273-2.373l2.558-9.592a.375.375 0 0 0-.362-.278H5.812m-8.562 6.963-2.558 9.592a.375.375 0 0 0 .362.278h14.172a.375.375 0 0 0 .362-.278l2.558-9.592M12 15.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/></svg>',
  CogIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.078 2.25c-.917 0-1.699.182-2.633.585a4.406 4.406 0 0 0-1.946 1.946c-.407.934-.59 1.716-.59 2.633v.081c0 .484-.297.968-.882 1.326-.585.357-.972.462-1.28.462-.417 0-.815-.132-1.14-.385a1.5 1.5 0 0 1-.572-1.093c-.021-.126-.063-.252-.125-.378A1.125 1.125 0 0 0 2.25 4.5c-.316 0-.612.144-.88.426a1.122 1.122 0 0 0-.266 1.646l.809 1.058c.063.066.132.132.203.203.051.051.102.102.153.203.023.04.046.082.068.123.511.883.704 1.78.704 2.72 0 .937-.193 1.823-.704 2.72-.022.04-.045.082-.068.123-.05.1-.102.152-.203.203a7.453 7.453 0 0 1-.203.203l-.809 1.058a1.122 1.122 0 0 0 .266 1.646c.268.282.564.426.88.426.316 0 .612-.144.88-.426l.809-1.058c.071-.093.142-.186.203-.279.357-.585.462-.972.462-1.28 0-.417-.132-.815-.385-1.14a1.5 1.5 0 0 0-1.093-.572c-.126-.021-.252-.063-.378-.125a1.125 1.125 0 0 0-1.125 1.125c0 .316.144.612.426.88l1.058.809c.066.063.132.132.203.203.051.051.102.102.153.203.023.04.046.082.068.123.511.883.704 1.78.704 2.72 0 .937-.193 1.823-.704 2.72-.022.04-.045.082-.068.123-.05.1-.102.152-.203.203a7.453 7.453 0 0 1-.203.203l-.809 1.058a1.122 1.122 0 0 0 .266 1.646c.268.282.564.426.88.426.316 0 .612-.144.88-.426l.809-1.058c.071-.093.142-.186.203-.279.357-.585.462-.972.462-1.28 0-.417-.132-.815-.385-1.14a1.5 1.5 0 0 0-1.093-.572c-.126-.021-.252-.063-.378-.125a1.125 1.125 0 0 0-1.125 1.125c0 .316.144.612.426.88l1.058.809c.066.063.132.132.203.203.051.051.102.102.153.203.023.04.046.082.068.123.511.883.704 1.78.704 2.72 0 .937-.193 1.823-.704 2.72-.022.04-.045.082-.068.123-.05.1-.102.152-.203.203a7.453 7.453 0 0 1-.203.203l-.809 1.058a1.122 1.122 0 0 0 .266 1.646c.268.282.564.426.88.426.316 0 .612-.144.88-.426l.809-1.058c.071-.093.142-.186.203-.279z"/></svg>',
}

const getIcon = (name: string): string => {
  return iconSvgs[name] || '<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
}

const categories = computed(() => {
  const cats = [...new Set(projects.map((p) => p.category))]
  return cats as string[]
})

const filteredProjects = computed(() => {
  if (!selectedCategory.value) return projects
  return projects.filter((p) => p.category === selectedCategory.value)
})
</script>
