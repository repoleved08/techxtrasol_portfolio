<template>
  <section id="electronics" class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Electronics & Laptops
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Premium laptops and electronics from trusted brands. Browse our latest collection of laptops for every need.
        </p>
      </div>

      <!-- Electronics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="item in electronics"
          :key="item.id"
          class="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Category Badge -->
          <div class="inline-block mb-4">
            <span class="px-3 py-1 text-xs md:text-sm font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-200">
              {{ item.category }}
            </span>
          </div>

          <!-- Product Name -->
          <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-2">
            {{ item.name }}
          </h3>

          <!-- Product Description -->
          <p class="text-slate-600 text-sm md:text-base mb-4">
            {{ item.description }}
          </p>

          <!-- Specs -->
          <div class="space-y-2 mb-6">
            <div v-for="(spec, index) in item.specs" :key="index" class="flex items-start gap-2">
              <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-slate-600 text-sm">{{ spec }}</span>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t border-slate-200 my-6"></div>

          <!-- CTA Buttons -->
          <div class="flex gap-3">
            <button
              @click="openWhatsApp"
              class="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-sm md:text-base flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
              </svg>
              WhatsApp
            </button>
            <button
              @click="openWebsite"
              class="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-sm md:text-base flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Website
            </button>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-8 md:p-12 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Browse Our Full Collection
        </h3>
        <p class="text-slate-600 mb-6 max-w-xl mx-auto">
          Check out our complete range of laptops and electronics available on WhatsApp and our website.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/c/254714000481"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
            </svg>
            Browse on WhatsApp Catalog
          </a>
          <a
            href="https://techxtrasol.tech"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Visit Our Website
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { electronics } from '@/data/portfolio'

const openWhatsApp = () => {
  window.open('https://wa.me/c/254714000481', '_blank')
}

const openWebsite = () => {
  window.open('https://techxtrasol.tech', '_blank')
}
</script>
