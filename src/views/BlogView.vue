<template>
  <div>
    <!-- Blog Section from component -->
    <BlogSection />
    
    <!-- Full Blog Listing -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">All Articles</h2>
          <p class="text-xl text-slate-600">Insights on Laravel, Vue.js, DevOps, and more</p>
        </div>

        <!-- Search & Filter -->
        <div class="mb-12 flex flex-col md:flex-row gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles..."
            class="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            v-model="selectedCategory"
            class="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">All Categories</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="DevOps">DevOps</option>
            <option value="Security">Security</option>
          </select>
        </div>

        <!-- Articles Grid -->
        <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="post in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div class="p-6 h-full flex flex-col">
              <!-- Category Badge -->
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {{ post.category }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 flex-grow">
                {{ post.title }}
              </h3>

              <!-- Excerpt -->
              <p class="text-slate-600 text-sm mb-4">{{ post.excerpt }}</p>

              <!-- Meta -->
              <div class="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>{{ formatDate(post.date) }}</span>
                <span>{{ post.readTime }} min read</span>
              </div>
            </div>
          </RouterLink>
        </div>

        <!-- No Results -->
        <div v-else class="text-center py-12">
          <p class="text-slate-600 text-lg mb-4">No articles found matching your search.</p>
          <button
            @click="resetFilters"
            class="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Clear filters
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import BlogSection from '../components/sections/BlogSection.vue'
import { blogPosts } from '../data/portfolio'

const searchQuery = ref('')
const selectedCategory = ref('')

const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = !selectedCategory.value || post.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
