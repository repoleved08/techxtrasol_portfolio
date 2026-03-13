<script setup lang="ts">
import NavigationBar from './components/common/NavigationBar.vue'
import Footer from './components/common/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <NavigationBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
* {
  font-family: 'Outfit', system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
