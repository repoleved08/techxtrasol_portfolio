<template>
  <section id="technologies" class="relative py-20 md:py-32 overflow-hidden bg-slate-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
          <span class="text-sm font-medium text-blue-600">Tech Stack</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
          Technologies We Master
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          We leverage proven technologies to build robust, scalable, and secure solutions
        </p>
      </div>

      <!-- Technology categories -->
      <div class="space-y-12">
        <div v-for="category in groupedTechs" :key="category.name" class="space-y-6">
          <h3 class="text-2xl font-bold text-slate-900">{{ category.name }}</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="tech in category.items"
              :key="tech.name"
              class="group relative bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <!-- Content -->
              <div class="space-y-3">
                <h4 class="text-xl font-bold text-slate-900">{{ tech.name }}</h4>
                <p class="text-slate-600 text-sm">{{ tech.description }}</p>

                <!-- Proficiency -->
                <div class="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div class="flex-1">
                    <div class="flex justify-between items-center mb-1">
                      <span class="text-xs font-semibold text-slate-500">Proficiency</span>
                      <span class="text-xs font-bold text-blue-600">{{ tech.proficiency }}</span>
                    </div>
                    <div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        :class="[
                          'h-full bg-blue-600 rounded-full transition-all duration-500',
                          tech.proficiency === 'Expert' ? 'w-full' : tech.proficiency === 'Advanced' ? 'w-4/5' : 'w-3/5',
                        ]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology capabilities -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="capability in capabilities" :key="capability.title" class="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-3">
          <h4 class="font-bold text-slate-900">{{ capability.title }}</h4>
          <p class="text-sm text-slate-600">{{ capability.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { technologies } from '../../data/portfolio'

const groupedTechs = computed(() => {
  const grouped: Record<string, typeof technologies> = {}

  technologies.forEach((tech) => {
    if (!grouped[tech.category]) {
      grouped[tech.category] = []
    }
    grouped[tech.category]!.push(tech)
  })

  return Object.entries(grouped).map(([name, items]) => ({
    name,
    items,
  }))
})

const capabilities = [
  {
    title: 'High Performance',
    description: 'Optimized solutions that deliver sub-100ms response times',
  },
  {
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance standards',
  },
  {
    title: 'Scalability',
    description: 'Systems that grow with your business needs',
  },
  {
    title: 'DevOps Excellence',
    description: 'Automated deployments with zero-downtime updates',
  },
]
</script>
