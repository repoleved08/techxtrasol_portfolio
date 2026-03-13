<template>
  <section id="contact" class="relative py-20 md:py-32 overflow-hidden bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section header -->
        <div class="text-center space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span class="text-sm font-medium text-blue-600">Get In Touch</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
            Let's Build Something Great
          </h2>
          <p class="text-lg text-slate-600">
            Have a project in mind? Get in touch and let us discuss how we can help
          </p>
        </div>

        <!-- Contact grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="contact in contactMethods"
            :key="contact.title"
            class="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-all duration-300"
          >
            <div class="w-12 h-12 bg-blue-50 rounded-lg mx-auto flex items-center justify-center">
              <svg v-html="getContactIcon(contact.icon)" class="w-6 h-6 text-blue-600"></svg>
            </div>
            <div class="space-y-2">
              <h3 class="font-bold text-slate-900">{{ contact.title }}</h3>
              <p class="text-slate-600 text-sm">{{ contact.description }}</p>
              <a v-if="contact.link" :href="contact.link" target="_blank" rel="noopener noreferrer" class="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                {{ contact.linkText }}
              </a>
              <p v-else class="text-slate-600 font-semibold text-sm">{{ contact.linkText }}</p>
            </div>
          </div>
        </div>

        <!-- Schedule Call CTA -->
        <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 text-center mb-12 space-y-6">
          <h3 class="text-2xl md:text-3xl font-bold text-slate-900">Schedule a Meeting</h3>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Let's discuss your project requirements. Schedule a 30-minute call with our team to get started.
          </p>
          <a
            :href="companyData.calendarLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Book a Call
          </a>
        </div>

        <!-- Contact form -->
        <div class="bg-white border border-slate-200 rounded-2xl p-8 md:p-12">
          <!-- Status messages -->
          <div v-if="submitMessage" class="mb-6 p-4 rounded-lg" :class="submitStatus === 'success' ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'">
            {{ submitMessage }}
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div class="space-y-2">
              <label for="name" class="block text-sm font-semibold text-slate-900">Full Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg text-slate-900 placeholder-slate-500 transition-all focus:outline-none"
                required
              />
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-slate-900">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="john@example.com"
                class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg text-slate-900 placeholder-slate-500 transition-all focus:outline-none"
                required
              />
            </div>

            <!-- Company -->
            <div class="space-y-2">
              <label for="company" class="block text-sm font-semibold text-slate-900">Company (Optional)</label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                placeholder="Your Company"
                class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg text-slate-900 placeholder-slate-500 transition-all focus:outline-none"
              />
            </div>

            <!-- Service -->
            <div class="space-y-2">
              <label for="service" class="block text-sm font-semibold text-slate-900">Service Interest</label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg text-slate-900 transition-all focus:outline-none"
                required
              >
                <option value="">Select a service</option>
                <option value="pos">POS Systems</option>
                <option value="hotel">Hotel Management</option>
                <option value="financial">Financial Systems</option>
                <option value="blog">Blog Platform</option>
                <option value="company">Company Profile</option>
                <option value="payment">Payment Integration</option>
                <option value="devops">DevOps & Deployment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Message -->
            <div class="space-y-2">
              <label for="message" class="block text-sm font-semibold text-slate-900">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tell us about your project..."
                class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg text-slate-900 placeholder-slate-500 transition-all focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { companyData } from '../../data/portfolio'

const contactIconSvgs: Record<string, string> = {
  email: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 8l9.5 6L21 8M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8m0 0L12 14m0 0L3 8"/></svg>',
  location: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/></svg>',
  schedule: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>',
}

const contactMethods = [
  {
    icon: 'email',
    title: 'Email',
    description: 'Send us an email and we will respond within 24 hours',
    link: `mailto:${companyData.email}`,
    linkText: companyData.email,
  },
  {
    icon: 'location',
    title: 'Location',
    description: 'We are based in Kenya',
    link: null,
    linkText: companyData.location,
  },
  {
    icon: 'schedule',
    title: 'Schedule',
    description: 'Book a meeting with us',
    link: companyData.calendarLink,
    linkText: 'Schedule Now',
  },
]

const getContactIcon = (name: string): string => {
  return contactIconSvgs[name] || '<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
}

const form = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const submitMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = 'loading'
  submitMessage.value = ''

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: `Company: ${form.value.company || 'Not provided'}\nService Interest: ${form.value.service}\n\n${form.value.message}`,
        subject: `New inquiry about ${form.value.service || 'Services'}`,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Failed to send email')
    }

    const result = await response.json()
    
    if (result.success) {
      submitStatus.value = 'success'
      submitMessage.value = 'Thank you! We received your message and will get back to you soon.'
      form.value = {
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        submitStatus.value = 'idle'
        submitMessage.value = ''
      }, 5000)
    } else {
      throw new Error('Unexpected response from server')
    }
  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
