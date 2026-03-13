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
              <!-- Icon -->
              <div class="mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                <svg v-html="getIcon(tech.logo)" class="w-6 h-6 text-blue-600"></svg>
              </div>

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

const iconSvgs: Record<string, string> = {
  CogIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.078 2.25c-.917 0-1.699.182-2.633.585a4.406 4.406 0 0 0-1.946 1.946c-.407.934-.59 1.716-.59 2.633v.081c0 .484-.297.968-.882 1.326-.585.357-.972.462-1.28.462-.417 0-.815-.132-1.14-.385a1.5 1.5 0 0 1-.572-1.093c-.021-.126-.063-.252-.125-.378A1.125 1.125 0 0 0 2.25 4.5c-.316 0-.612.144-.88.426a1.122 1.122 0 0 0-.266 1.646l.809 1.058c.063.066.132.132.203.203.051.051.102.102.153.203.023.04.046.082.068.123.511.883.704 1.78.704 2.72 0 .937-.193 1.823-.704 2.72-.022.04-.045.082-.068.123-.05.1-.102.152-.203.203a7.453 7.453 0 0 1-.203.203l-.809 1.058a1.122 1.122 0 0 0 .266 1.646c.268.282.564.426.88.426.316 0 .612-.144.88-.426l.809-1.058c.071-.093.142-.186.203-.279.357-.585.462-.972.462-1.28 0-.417-.132-.815-.385-1.14a1.5 1.5 0 0 0-1.093-.572c-.126-.021-.252-.063-.378-.125a1.125 1.125 0 0 0-1.125 1.125c0 .316.144.612.426.88l1.058.809c.066.063.132.132.203.203.051.051.102.102.153.203.023.04.046.082.068.123.511.883.704 1.78.704 2.72 0 .937-.193 1.823-.704 2.72-.022.04-.045.082-.068.123-.05.1-.102.152-.203.203a7.453 7.453 0 0 1-.203.203l-.809 1.058a1.122 1.122 0 0 0 .266 1.646c.268.282.564.426.88.426.316 0 .612-.144.88-.426l.809-1.058c.071-.093.142-.186.203-.279.357-.585.462-.972.462-1.28 0-.417-.132-.815-.385-1.14a1.5 1.5 0 0 0-1.093-.572c-.126-.021-.252-.063-.378-.125a1.125 1.125 0 0 0-1.125 1.125c0 .316.144.612.426.88l1.058.809c.066.063.132.132.203.203.051.051.102.102.153.203.023.04.046.082.068.123.511.883.704 1.78.704 2.72 0 .937-.193 1.823-.704 2.72-.022.04-.045.082-.068.123-.05.1-.102.152-.203.203a7.453 7.453 0 0 1-.203.203l-.809 1.058a1.122 1.122 0 0 0 .266 1.646c.268.282.564.426.88.426.316 0 .612-.144.88-.426l.809-1.058c.071-.093.142-.186.203-.279z"/></svg>',
  SparkIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 16.875h-3L6 4.5h3l4.5 12.375zm-6-13.5h3l1.5 4.5h-3L7.5 3.375z"/></svg>',
  CircleStackIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25c-5.376 0-9.75 3.375-9.75 7.5s4.374 7.5 9.75 7.5 9.75-3.375 9.75-7.5-4.374-7.5-9.75-7.5zM2.25 9.75c0-2.391 2.25-4.5 4.5-4.5.375 0 .75.024 1.125.075C6.375 6.375 4.5 8.25 4.5 10.5c0 .375.024.75.075 1.125-2.391 0-4.5-2.25-4.5-4.5zm0 6.75c0 3.75 4.374 6.75 9.75 6.75s9.75-3 9.75-6.75V11.25h1.5v-1.5h-1.5v-1.5h1.5V6.75h-1.5V4.5h1.5V3h-1.5v1.5h-1.5v1.5h-1.5V3h-1.5v1.5h-1.5V3h-1.5v1.5H12V3h-1.5v1.5h-1.5V3h-1.5v1.5H6v1.5h-1.5V3h-1.5v1.5H1.5V6.75h1.5v1.5H1.5v1.5h1.5v1.5H1.5v1.5h1.5z"/></svg>',
  BoltIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3.478 2.405a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .578-1.227L11.328 2.89a.75.75 0 1 0-1.227.578L16.5 6.75H3.75a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 .75.75h12.75a.75.75 0 1 0 0-1.5H4.5V9.75h12a.75.75 0 0 0 .75-.75v-4.5h2.25v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-2.25V3a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75z"/></svg>',
  LockClosedIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M5.338 7.59a2.25 2.25 0 0 1 4.172.081l.312.966a.75.75 0 0 0 .71.522h.32a.75.75 0 0 0 .71-.522l.312-.966a2.25 2.25 0 0 1 4.172-.081l.004.033a2.25 2.25 0 0 1 -.002.5H19.5a3 3 0 0 1 3 3v8.25a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-8.25a3 3 0 0 1 3-3h2.25a2.25 2.25 0 0 1 -.002-.5l.004-.033zM12 16.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>',
  RocketLaunchIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M15.54 1.534A9 9 0 1 0 22.5 10.5M7.5 3v5.25m.006.001h-.016a.75.75 0 1 0 0 1.5h.016a.75.75 0 0 0 0-1.5zM7.5 9v5.25m.006.001h-.016a.75.75 0 1 0 0 1.5h.016a.75.75 0 0 0 0-1.5z"/></svg>',
  PaintBrushIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.332 2.39c1.5.406 3.169.406 4.669.406 1.141 0 2.25-.096 3.330-.196C16.5 20.573 19.948 19.9 21.75 18.604.75.75a4.76 4.76 0 0 1-4.996-4.96c-.313-2.995-2.852-5.288-5.595-5.292a3 3 0 0 0-3.637 3.636c.027.20.055.408.083.622.481 3.21.292 6.422-.034 9.374-.38 3.963-1.囲.75-2.25 2.25z"/></svg>',
  UserGroupIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm6-10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-13.5 12.75a6 6 0 0 1-3.098-5.753 4.875 4.875 0 0 1 7.530-2.514N15 19.128m-7.5-6.75a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/></svg>',
  CreditCardIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3.625 2.25A2.625 2.625 0 0 0 1 4.875v14.25A2.625 2.625 0 0 0 3.625 22h16.75A2.625 2.625 0 0 0 23 19.125V4.875A2.625 2.625 0 0 0 20.375 2.25H3.625zM19 5.25v2.25H5v-2.25h14zm0 12v2.25H5v-2.25h14z"/></svg>',
  DevicePhoneMobileIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M10.5 1.5H6.75a2.25 2.25 0 0 0-2.25 2.25v15a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H10.5zm0 3h3v10.5h-3V4.5zm-3 15.75h9v-1.5h-9v1.5z"/></svg>',
  CurrencyDollarIcon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 15a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5zm0-9a1.5 1.5 0 0 0-1.5 1.5v1.5H10.5a.75.75 0 0 0 0 1.5h.75V14.25a.75.75 0 0 0 1.5 0v-1.5h.75a.75.75 0 0 0 0-1.5H12.75V11.25a.75.75 0 0 1 1.5 0 .75.75 0 0 0 1.5 0 2.25 2.25 0 0 0-2.25-2.25z"/></svg>',
}

const getIcon = (name: string): string => {
  return iconSvgs[name] || '<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
}

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
