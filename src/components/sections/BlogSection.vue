<template>
  <section id="blog" class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full">
          <span class="text-sm font-medium text-accent-300">Knowledge Hub</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
          Latest Articles & Insights
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Deep dives into technology, best practices, and industry insights
        </p>
      </div>

      <!-- Blog posts grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <article
          v-for="post in blogPosts"
          :key="post.id"
          class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-accent-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 flex flex-col"
        >
          <!-- Date indicator -->
          <div class="absolute top-4 right-4 z-20">
            <div class="bg-accent-500/20 border border-accent-500/30 rounded-lg px-3 py-2 text-center">
              <p class="text-xs font-semibold text-accent-300">
                {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}
              </p>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 space-y-6 flex flex-col flex-1">
            <!-- Category -->
            <div class="inline-flex items-center gap-2 w-fit px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span class="text-xs font-semibold text-primary-300">{{ post.category }}</span>
            </div>

            <!-- Title & excerpt -->
            <div class="space-y-3 flex-1">
              <h3 class="text-xl font-bold text-white group-hover:text-accent-300 transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-slate-300 text-sm line-clamp-3">
                {{ post.excerpt }}
              </p>
            </div>

            <!-- Footer -->
            <div class="pt-4 border-t border-slate-700/50 flex items-center justify-between">
              <span class="text-xs text-slate-400">{{ post.readTime }} min read</span>
              <button
                class="inline-flex items-center gap-1 text-accent-300 hover:text-accent-200 font-semibold transition-colors group/link"
              >
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
        <button
          class="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/50 transform hover:-translate-y-1"
        >
          View All Articles
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogPosts } from '../../data/portfolio'
</script>
