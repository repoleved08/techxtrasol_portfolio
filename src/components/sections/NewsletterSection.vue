<template>
  <section class="py-16 bg-gradient-to-r from-blue-50 to-slate-50 border-y border-blue-200">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Stay Updated
        </h3>
        <p class="text-slate-600 mb-6">
          Get the latest updates on our services, electronics, and industry insights delivered to your inbox.
        </p>
        
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3">
          <input
            v-model="newsletterEmail"
            type="email"
            placeholder="your@email.com"
            class="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
            required
          />
          <button
            type="submit"
            :disabled="isSubmittingNewsletter"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
          >
            {{ isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe' }}
          </button>
        </form>
        
        <div v-if="newsletterMessage" class="mt-4 p-3 rounded-lg" :class="newsletterSuccess ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'">
          {{ newsletterMessage }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newsletterEmail = ref('')
const isSubmittingNewsletter = ref(false)
const newsletterMessage = ref('')
const newsletterSuccess = ref(false)

const subscribeNewsletter = async () => {
  isSubmittingNewsletter.value = true
  newsletterMessage.value = ''
  
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail.value }),
    })
    
    const result = await response.json()
    
    if (response.ok) {
      newsletterSuccess.value = true
      newsletterMessage.value = 'Thank you for subscribing! Check your email.'
      newsletterEmail.value = ''
      
      setTimeout(() => {
        newsletterMessage.value = ''
      }, 5000)
    } else {
      throw new Error(result.error || 'Subscription failed')
    }
  } catch (error) {
    newsletterSuccess.value = false
    newsletterMessage.value = error instanceof Error ? error.message : 'Failed to subscribe'
  } finally {
    isSubmittingNewsletter.value = false
  }
}
</script>
