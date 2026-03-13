<template>
  <section id="contact" class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-40 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Section header -->
        <div class="text-center space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
            <span class="text-sm font-medium text-primary-300">Get In Touch</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
            Let's Build Something Great
          </h2>
          <p class="text-lg text-slate-400">
            Have a project in mind? Get in touch and let's discuss how we can help
          </p>
        </div>

        <!-- Contact grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="contact in contactMethods"
            :key="contact.title"
            class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-primary-500/50 rounded-2xl p-8 text-center space-y-4 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
          >
            <div class="text-4xl">{{ contact.icon }}</div>
            <div class="space-y-2">
              <h3 class="font-bold text-white">{{ contact.title }}</h3>
              <p class="text-slate-400 text-sm">{{ contact.description }}</p>
              <a :href="contact.link" class="inline-block text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors">
                {{ contact.linkText }}
              </a>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div class="space-y-2">
              <label for="name" class="block text-sm font-semibold text-white">Full Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 focus:border-primary-500/50 rounded-lg text-white placeholder-slate-500 transition-colors focus:outline-none"
                required
              />
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-white">Email Address</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="john@example.com"
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 focus:border-primary-500/50 rounded-lg text-white placeholder-slate-500 transition-colors focus:outline-none"
                required
              />
            </div>

            <!-- Company -->
            <div class="space-y-2">
              <label for="company" class="block text-sm font-semibold text-white">Company (Optional)</label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                placeholder="Your Company"
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 focus:border-primary-500/50 rounded-lg text-white placeholder-slate-500 transition-colors focus:outline-none"
              />
            </div>

            <!-- Service -->
            <div class="space-y-2">
              <label for="service" class="block text-sm font-semibold text-white">Service Interest</label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 focus:border-primary-500/50 rounded-lg text-white transition-colors focus:outline-none"
                required
              >
                <option value="">Select a service</option>
                <option value="pos">POS Systems</option>
                <option value="hotel">Hotel Management</option>
                <option value="financial">Financial Systems</option>
                <option value="blog">Blog Platform</option>
                <option value="company">Company Profile</option>
                <option value="devops">DevOps & Deployment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Message -->
            <div class="space-y-2">
              <label for="message" class="block text-sm font-semibold text-white">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tell us about your project..."
                class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 focus:border-primary-500/50 rounded-lg text-white placeholder-slate-500 transition-colors focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    description: 'Send us an email and we will respond within 24 hours',
    link: 'mailto:hello@techxtrasol.com',
    linkText: 'hello@techxtrasol.com',
  },
  {
    icon: '📱',
    title: 'Phone',
    description: 'Call us for immediate assistance',
    link: 'tel:+1234567890',
    linkText: '+1 (234) 567-890',
  },
  {
    icon: '🌐',
    title: 'Address',
    description: 'Visit our office location',
    link: '#',
    linkText: 'Contact for Details',
  },
]

const form = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
})

const handleSubmit = async () => {
  // Here you would typically send the form data to a backend service
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  }
  alert('Thank you for your message! We will be in touch soon.')
}
</script>
