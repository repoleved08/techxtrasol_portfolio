<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 md:h-24">
        <!-- Logo with Company Name -->
        <div class="flex items-center gap-3 min-w-0 flex-shrink-0">
          <!-- Animated Logo Badge -->
          <div class="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
            <span class="text-white font-bold text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">TX</span>
            <div class="absolute inset-0 rounded-xl bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          
          <!-- Company Name -->
          <div class="flex flex-col items-start">
            <span class="hidden sm:inline text-lg md:text-xl font-bold text-slate-900 leading-tight">TechXtraSol</span>
            <span class="hidden sm:inline text-xs md:text-sm text-blue-600 font-semibold">Limited</span>
          </div>
        </div>

        <!-- Desktop Navigation Menu -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium relative group"
          >
            {{ item.label }}
            <span class="absolute bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-2 md:gap-4">
          <!-- CTA Button -->
          <button class="px-4 md:px-6 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Get Started
          </button>

          <!-- Mobile menu button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2.5 hover:bg-slate-100 rounded-lg transition-all duration-300 relative"
            :class="{ 'bg-slate-100': isOpen }"
          >
            <svg class="w-6 h-6 text-slate-900 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3 max-h-0"
        enter-to-class="opacity-100 translate-y-0 max-h-96"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 max-h-96"
        leave-to-class="opacity-0 -translate-y-3 max-h-0"
      >
        <div v-if="isOpen" class="md:hidden border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <div class="flex flex-col gap-1 px-4 py-4">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              @click="isOpen = false"
              class="px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium rounded-lg border-l-3 border-transparent hover:border-blue-600"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Electronics', href: '#electronics' },
  { label: 'Scheduling', href: '#scheduling' },
  { label: 'Contact', href: '#contact' },
]
</script>

