<template>
  <section class="relative py-20 md:py-32 overflow-hidden bg-slate-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
          <span class="text-sm font-medium text-blue-600">Knowledge Hub</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900">
          Latest Articles & Insights
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Deep dives into technology, best practices, and industry insights
        </p>
      </div>

      <!-- Blog posts grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <article
          v-for="post in blogPosts"
          :key="post.id"
          class="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col"
        >
          <!-- Date indicator -->
          <div class="absolute top-4 right-4 z-20">
            <div class="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-center">
              <p class="text-xs font-semibold text-blue-600">
                {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}
              </p>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 space-y-6 flex flex-col flex-1">
            <!-- Category -->
            <div class="inline-flex items-center gap-2 w-fit px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
              <span class="text-xs font-semibold text-blue-600">{{ post.category }}</span>
            </div>

            <!-- Title & excerpt -->
            <div class="space-y-3 flex-1">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-slate-600 text-sm line-clamp-3">
                {{ post.excerpt }}
              </p>
            </div>

            <!-- Footer -->
            <div class="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span class="text-xs text-slate-600">{{ post.readTime }} min read</span>
              <button class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors group/link">
                Read
                <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- View all button -->
      <div class="text-center">
        <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
          View All Articles
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from '../../data/portfolio'
</script>
