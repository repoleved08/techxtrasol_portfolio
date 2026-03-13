<template>
  <section class="py-20 bg-gradient-to-b from-white to-slate-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Choose the plan that fits your business needs. All plans include support and updates.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.id"
          :class="[
            'border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2',
            plan.featured ? 'border-blue-600 bg-blue-50 md:scale-105' : 'border-slate-200 bg-white'
          ]"
        >
          <div v-if="plan.featured" class="inline-block mb-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
            MOST POPULAR
          </div>
          
          <h3 class="text-2xl font-bold text-slate-900 mb-2">{{ plan.name }}</h3>
          <p class="text-slate-600 text-sm mb-6">{{ plan.description }}</p>
          
          <div class="mb-6">
            <span class="text-5xl font-bold text-slate-900">{{ plan.price }}</span>
            <span class="text-slate-600 ml-2">{{ plan.billing }}</span>
          </div>

          <button
            :class="[
              'w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 mb-8',
              plan.featured
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
            ]"
          >
            Get Started
          </button>

          <ul class="space-y-4">
            <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-slate-700">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: '$2,500',
    billing: '/ month',
    featured: false,
    features: [
      'Basic custom solution',
      'Up to 3 integrations',
      'Email support',
      'Monthly updates',
      '1 deployment environment',
    ],
  },
  {
    id: 2,
    name: 'Professional',
    description: 'Best for growing companies',
    price: '$7,500',
    billing: '/ month',
    featured: true,
    features: [
      'Full-featured solution',
      'Unlimited integrations',
      'Priority support 24/7',
      'Weekly updates & features',
      '3 deployment environments',
      'Advanced analytics',
      'Team training included',
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    billing: 'contact sales',
    featured: false,
    features: [
      'Fully custom solution',
      'Dedicated support team',
      'Real-time support',
      'Daily updates & monitoring',
      'Unlimited deployments',
      'Custom integrations',
      'SLA guaranteed',
      'On-site training',
    ],
  },
]
</script>
