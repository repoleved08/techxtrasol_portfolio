<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          What Our Clients Say
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Real feedback from companies we've partnered with to build their digital solutions.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
          </div>

          <!-- Quote -->
          <p class="text-slate-700 mb-6 italic">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="border-t border-slate-200 pt-4">
            <p class="font-semibold text-slate-900">{{ testimonial.author }}</p>
            <p class="text-sm text-slate-600">{{ testimonial.role }} at {{ testimonial.company }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonial CTA -->
      <div class="mt-16 text-center">
        <p class="text-slate-600 mb-6">
          Join 50+ companies that trust TechXtraSol for their digital transformation.
        </p>
        <RouterLink
          to="/contact"
          class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get Started Today
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const testimonials = [
  {
    id: 1,
    quote: 'TechXtraSol transformed our retail operations with their POS system. Our sales increased by 40% in the first quarter.',
    author: 'Sarah Muthoni',
    role: 'CEO',
    company: 'RetailCo Kenya',
  },
  {
    id: 2,
    quote: 'The team at TechXtraSol delivered a world-class hotel management system. Customer service improved dramatically.',
    author: 'James Kipchoge',
    role: 'Operations Manager',
    company: 'Serena Hotels',
  },
  {
    id: 3,
    quote: 'Their DevOps expertise helped us reduce deployment time from hours to minutes. Highly recommended!',
    author: 'David Omondi',
    role: 'Tech Lead',
    company: 'StartupHub',
  },
  {
    id: 4,
    quote: 'Payment integration with their system was seamless. Zero downtime, perfect execution.',
    author: 'Grace Wangari',
    role: 'Finance Director',
    company: 'EcommercePlus',
  },
  {
    id: 5,
    quote: 'The financial platform they built for us has military-grade security. Exactly what we needed.',
    author: 'Peter Kariuki',
    role: 'CTO',
    company: 'FinanceSecure Ltd',
  },
  {
    id: 6,
    quote: 'Professional, responsive, and always available. TechXtraSol is our go-to tech partner.',
    author: 'Margaret Odero',
    role: 'Managing Director',
    company: 'Digital Marketing Pro',
  },
]
</script>
