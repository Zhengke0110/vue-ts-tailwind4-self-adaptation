<template>
  <router-link
    :to="route"
    class="group flex min-w-[80px] flex-col items-center gap-2 rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:outline-none"
    :aria-label="name"
  >
    <div
      class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:bg-orange-200"
    >
      {{ icon }}
    </div>
    <span
      class="text-sm whitespace-nowrap text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-orange-600"
    >
      {{ name }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
  route: string;
}>();
</script>
