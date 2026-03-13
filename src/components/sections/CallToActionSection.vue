<template>
  <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Transform Your Business?
      </h2>
      <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
        {{ cta }}
      </p>
      <RouterLink
        to="/contact"
        class="inline-block px-8 py-4 bg-white hover:bg-blue-50 text-blue-600 font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        Schedule Your Free Consultation
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  cta: string
}>()
</script>
