<template>
  <section id="technologies" class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
          <span class="text-sm font-medium text-blue-300">Tech Stack</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
          Technologies We Master
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to build robust, scalable, and secure solutions
        </p>
      </div>

      <!-- Technology categories -->
      <div class="space-y-12">
        <div v-for="category in groupedTechs" :key="category.name" class="space-y-6">
          <h3 class="text-2xl font-bold text-white">{{ category.name }}</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="tech in category.items"
              :key="tech.name"
              class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
            >
              <!-- Icon -->
              <div
                class="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                {{ tech.logo }}
              </div>

              <!-- Content -->
              <div class="space-y-3">
                <h4 class="text-xl font-bold text-white">{{ tech.name }}</h4>
                <p class="text-slate-300 text-sm">{{ tech.description }}</p>

                <!-- Proficiency -->
                <div class="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <div class="flex-1">
                    <div class="flex justify-between items-center mb-1">
                      <span class="text-xs font-semibold text-slate-400">Proficiency</span>
                      <span class="text-xs font-bold text-blue-400">{{ tech.proficiency }}</span>
                    </div>
                    <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        :class="[
                          'h-full bg-gradient-to-r from-blue-500 to-primary-500 rounded-full transition-all duration-500',
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
      <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div v-for="capability in capabilities" :key="capability.title" class="text-center space-y-3">
          <div class="text-4xl">{{ capability.icon }}</div>
          <h4 class="font-semibold text-white">{{ capability.title }}</h4>
          <p class="text-sm text-slate-400">{{ capability.description }}</p>
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
    icon: '⚡',
    title: 'High Performance',
    description: 'Optimized solutions that deliver sub-100ms response times',
  },
  {
    icon: '🔐',
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance standards',
  },
  {
    icon: '📈',
    title: 'Scalability',
    description: 'Systems that grow with your business needs',
  },
  {
    icon: '🚀',
    title: 'DevOps Excellence',
    description: 'Automated deployments with zero-downtime updates',
  },
]
</script>
