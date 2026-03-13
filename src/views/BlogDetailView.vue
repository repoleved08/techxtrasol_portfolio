<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Back Link -->
      <RouterLink to="/blog" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </RouterLink>

      <div v-if="post" class="max-w-3xl mx-auto">
        <!-- Blog Header -->
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">{{ post.category }}</span>
            <span class="text-slate-500 text-sm">{{ formattedDate }}</span>
            <span class="text-slate-500 text-sm">{{ post.readTime }} min read</span>
          </div>
          <h1 class="text-5xl font-bold text-slate-900 mb-4">{{ post.title }}</h1>
          <p class="text-xl text-slate-600 mb-6">{{ post.excerpt }}</p>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {{ post.author.charAt(0) }}
            </div>
            <div>
              <p class="font-semibold text-slate-900">{{ post.author }}</p>
              <p class="text-sm text-slate-600">Posted on {{ formattedDate }}</p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="my-12 border-t border-slate-200"></div>

        <!-- Blog Content -->
        <article class="prose prose-lg max-w-none mb-12">
          <div v-html="renderedContent" class="space-y-6 text-slate-700"></div>
        </article>

        <!-- Tags -->
        <div class="mb-12 pb-12 border-b border-slate-200">
          <h3 class="text-lg font-bold text-slate-900 mb-4">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <a v-for="tag in post.tags" :key="tag" href="#" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
              {{ tag }}
            </a>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <h2 class="text-2xl font-bold text-slate-900 mb-4">Need Expert Help?</h2>
          <p class="text-slate-600 mb-6">
            Have questions about {{ post.title.toLowerCase() }}? Let's discuss how we can help your project.
          </p>
          <RouterLink
            to="/contact"
            class="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Get in Touch
          </RouterLink>
        </div>

        <!-- Related Posts -->
        <div v-if="relatedPosts.length > 0" class="mt-16">
          <h2 class="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RouterLink
              v-for="relatedPost in relatedPosts"
              :key="relatedPost.id"
              :to="`/blog/${relatedPost.slug}`"
              class="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">{{ relatedPost.category }}</span>
                <span class="text-xs text-slate-500">{{ relatedPost.readTime }} min</span>
              </div>
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{{ relatedPost.title }}</h3>
              <p class="text-slate-600 text-sm">{{ relatedPost.excerpt }}</p>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Post Not Found -->
      <div v-else class="text-center py-12">
        <p class="text-slate-600 text-lg mb-4">Blog post not found</p>
        <RouterLink to="/blog" class="text-blue-600 hover:text-blue-700 font-semibold">Back to Blog</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { blogPosts } from '../data/portfolio'

const route = useRoute()

const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug)
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts
    .filter(p => p.category === post.value!.category && p.id !== post.value!.id)
    .slice(0, 2)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  return new Date(post.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

const renderedContent = computed(() => {
  if (!post.value) return ''
  // Simple markdown to HTML conversion for headers, code blocks, and bold text
  let content = post.value.content
  
  // Convert ### to h3
  content = content.replace(/### (.+)/g, '<h3 class="text-xl font-bold text-slate-900 mt-8 mb-4">$1</h3>')
  
  // Convert ## to h2
  content = content.replace(/## (.+)/g, '<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">$1</h2>')
  
  // Convert # to h1
  content = content.replace(/# (.+)/g, '<h1 class="text-3xl font-bold text-slate-900 mb-6">$1</h1>')
  
  // Convert **text** to bold
  content = content.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>')
  
  // Convert `code` to inline code
  content = content.replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-2 py-1 rounded text-red-600 font-mono">$1</code>')
  
  // Convert code blocks
  content = content.replace(/```(\w+)?([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-6"><code>$2</code></pre>')
  
  // Convert - list items
  content = content.replace(/^- (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
  
  // Convert numbered lists
  content = content.replace(/^\d+\. (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
  
  // Convert line breaks to paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim())
  return paragraphs.map(p => {
    if (p.includes('<h') || p.includes('<pre') || p.includes('<li')) {
      return p
    }
    return `<p class="mb-4 leading-relaxed">${p}</p>`
  }).join('')
})
</script>

<style scoped>
/* Prose styling for better readability */
:deep(strong) {
  @apply font-bold;
}

:deep(code) {
  @apply font-mono text-sm;
}

:deep(pre) {
  @apply overflow-x-auto;
}

:deep(ul) {
  @apply list-disc list-inside mb-4;
}

:deep(ol) {
  @apply list-decimal list-inside mb-4;
}
</style>
