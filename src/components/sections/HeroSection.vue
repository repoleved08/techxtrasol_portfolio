<template>
  <section
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-40 -left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
      ></div>
      <div
        class="absolute top-40 -right-40 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div class="space-y-8 animate-slide-in">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
            <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            <span class="text-sm font-medium text-primary-300">Enterprise Solutions</span>
          </div>

          <!-- Main heading -->
          <h1
            class="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 bg-clip-text text-transparent"
          >
            Tech Excellence
            <br />
            Delivered
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-slate-300 leading-relaxed max-w-md">
            We build enterprise-grade solutions using cutting-edge technology. From POS systems to financial platforms,
            we deliver excellence.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 py-4">
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary-300">6+</div>
              <div class="text-sm text-slate-400">Services</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-accent-300">10+</div>
              <div class="text-sm text-slate-400">Projects</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-300">99.9%</div>
              <div class="text-sm text-slate-400">Uptime</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              class="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-1"
            >
              Start Your Project
            </button>
            <button
              class="px-8 py-4 border border-primary-500/50 hover:border-primary-400 text-primary-300 hover:text-primary-200 font-semibold rounded-lg transition-all duration-300 hover:bg-primary-500/10 backdrop-blur-sm"
            >
              Explore Our Work
            </button>
          </div>
        </div>

        <!-- Right side - Visual showcase -->
        <div class="relative h-96 md:h-full animate-fade-in animation-delay-300">
          <!-- Showcase cards -->
          <div
            class="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl backdrop-blur-lg p-6 space-y-3 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <div class="flex items-center gap-2">
              <span class="text-2xl">💳</span>
              <h3 class="font-semibold text-white">POS Systems</h3>
            </div>
            <p class="text-sm text-slate-300">Real-time inventory management</p>
          </div>

          <div
            class="absolute top-48 left-0 w-64 h-40 bg-gradient-to-br from-accent-500/20 to-accent-600/20 border border-accent-500/30 rounded-2xl backdrop-blur-lg p-6 space-y-3 hover:shadow-lg hover:shadow-accent-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <div class="flex items-center gap-2">
              <span class="text-2xl">🏨</span>
              <h3 class="font-semibold text-white">Hotel Management</h3>
            </div>
            <p class="text-sm text-slate-300">Complete hospitality solutions</p>
          </div>

          <div
            class="absolute bottom-0 right-12 w-64 h-40 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl backdrop-blur-lg p-6 space-y-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <div class="flex items-center gap-2">
              <span class="text-2xl">💰</span>
              <h3 class="font-semibold text-white">Financial Systems</h3>
            </div>
            <p class="text-sm text-slate-300">Secure & compliant platforms</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm text-slate-400">Scroll to explore</span>
        <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-300 {
  animation-delay: 300ms;
}
</style>
