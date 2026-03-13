<template>
  <div>
    <ServiceDetailSection :serviceId="serviceId" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ServiceDetailSection from '../components/sections/ServiceDetailSection.vue'

const route = useRoute()
const serviceId = parseInt(route.params.id as string) || 1
</script>
