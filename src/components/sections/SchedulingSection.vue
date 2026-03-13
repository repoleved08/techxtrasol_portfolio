<template>
  <section id="scheduling" class="py-20 bg-gradient-to-b from-white to-slate-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Schedule a Meeting
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Book a 15-minute consultation with our team to discuss your project needs and explore how we can help.
        </p>
      </div>

      <!-- Calendar Embed -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <div style="width: 100%; height: 100%; overflow: auto" id="my-cal-inline-15min"></div>
      </div>

      <!-- Fallback Info -->
      <div class="mt-12 text-center">
        <p class="text-slate-600 mb-4">
          Having trouble with the calendar? You can also reach us directly:
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:techxtrasol.design@gmail.com"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Email Us
          </a>
          <a
            :href="calendarLink"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Open Cal.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { companyData } from '@/data/portfolio'

const calendarLink = companyData.calendarLink

onMounted(() => {
  // Load Cal.com embed script
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.innerHTML = `
    (function (C, A, L) { 
      let p = function (a, ar) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "15min", {origin:"https://app.cal.com"});

    Cal.ns["15min"]("inline", {
      elementOrSelector:"#my-cal-inline-15min",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
      calLink: "norman-bii-08/15min",
    });

    Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  `
  document.body.appendChild(script)
})
</script>
