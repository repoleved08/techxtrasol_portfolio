<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-lg text-slate-600">
          Find answers to common questions about our services and products.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
          >
            <h3 class="text-left font-semibold text-slate-900">{{ faq.question }}</h3>
            <svg
              :class="{ 'rotate-180': activeFaq === index }"
              class="w-6 h-6 text-blue-600 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
          <transition
            enter-active-class="transition duration-300"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition duration-300"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="activeFaq === index" class="px-6 pb-6 bg-slate-50 border-t border-slate-200">
              <p class="text-slate-700">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'How long does it take to build a custom solution?',
    answer: 'Project timelines vary based on complexity. Simple solutions take 4-8 weeks, while enterprise systems can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer comprehensive support packages including maintenance, updates, and 24/7 emergency support. All our solutions come with a minimum 1-year support guarantee.',
  },
  {
    question: 'What payment options do you accept?',
    answer: 'We accept all major payment methods including Stripe, PayPal, M-Pesa, bank transfer, and cryptocurrency. Custom payment plans available for enterprise clients.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely! Our team specializes in system integration. We can connect your new solution with existing software, databases, and APIs.',
  },
  {
    question: 'Is your software secure?',
    answer: 'Security is our top priority. We use military-grade encryption, HashiCorp Vault for secrets management, and follow OWASP security standards.',
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes, we provide comprehensive training for your team, including documentation, video tutorials, and hands-on sessions.',
  },
]
</script>
