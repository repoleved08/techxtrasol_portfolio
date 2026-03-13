<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">TX</span>
          </div>
          <span class="hidden sm:inline text-xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent"
            >TechXtraSol</span
          >
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            href="#services"
            class="text-slate-300 hover:text-primary-300 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#projects"
            class="text-slate-300 hover:text-primary-300 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#technologies"
            class="text-slate-300 hover:text-primary-300 transition-colors font-medium"
          >
            Technologies
          </a>
          <a
            href="#blog"
            class="text-slate-300 hover:text-primary-300 transition-colors font-medium"
          >
            Blog
          </a>
          <a
            href="#contact"
            class="text-slate-300 hover:text-primary-300 transition-colors font-medium"
          >
            Contact
          </a>
        </div>

        <!-- CTA Button -->
        <button
          class="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-0.5 text-sm md:text-base"
        >
          Get Started
        </button>

        <!-- Mobile menu button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <svg class="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="md:hidden border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-lg">
          <div class="flex flex-col gap-4 px-4 py-4">
            <a
              href="#services"
              @click="isOpen = false"
              class="text-slate-300 hover:text-primary-300 transition-colors font-medium py-2"
            >
              Services
            </a>
            <a
              href="#projects"
              @click="isOpen = false"
              class="text-slate-300 hover:text-primary-300 transition-colors font-medium py-2"
            >
              Projects
            </a>
            <a
              href="#technologies"
              @click="isOpen = false"
              class="text-slate-300 hover:text-primary-300 transition-colors font-medium py-2"
            >
              Technologies
            </a>
            <a
              href="#blog"
              @click="isOpen = false"
              class="text-slate-300 hover:text-primary-300 transition-colors font-medium py-2"
            >
              Blog
            </a>
            <a
              href="#contact"
              @click="isOpen = false"
              class="text-slate-300 hover:text-primary-300 transition-colors font-medium py-2"
            >
              Contact
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
</script>
