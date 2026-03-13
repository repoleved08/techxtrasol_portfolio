<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
    <!-- Subtle background accent -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full -ml-48 -mb-48"></div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div class="space-y-8 animate-slide-up">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span class="text-sm font-medium text-blue-600">Enterprise Solutions</span>
          </div>

          <!-- Main heading -->
          <h1 class="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Build Your
            <br />
            <span class="text-blue-600">Enterprise Solution</span>
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-md">
            Professional development services with expertise in Laravel, Vue.js, and modern architectures. We deliver scalable solutions that drive results.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 py-6 border-t border-b border-slate-200">
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-600">6+</div>
              <div class="text-sm text-slate-600">Services</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-600">10+</div>
              <div class="text-sm text-slate-600">Projects</div>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-blue-600">99.9%</div>
              <div class="text-sm text-slate-600">Uptime</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Get Started
            </button>
            <button class="px-8 py-3 border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        <!-- Right side - Showcase cards -->
        <div class="relative h-96 md:h-full animate-fade-in animation-delay-300">
          <div class="absolute top-0 right-0 w-72 h-40 bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <h3 class="font-semibold text-slate-900">POS Systems</h3>
            <p class="text-sm text-slate-600">Real-time inventory management</p>
          </div>

          <div class="absolute top-48 left-0 w-72 h-40 bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <h3 class="font-semibold text-slate-900">Hotel Management</h3>
            <p class="text-sm text-slate-600">Complete hospitality solutions</p>
          </div>

          <div class="absolute bottom-0 right-12 w-72 h-40 bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
            <h3 class="font-semibold text-slate-900">Financial Systems</h3>
            <p class="text-sm text-slate-600">Secure & compliant platforms</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm text-slate-600">Scroll to explore</span>
        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>
