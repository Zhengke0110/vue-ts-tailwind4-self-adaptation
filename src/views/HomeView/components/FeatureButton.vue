<template>
  <router-link
    :to="route"
    class="group flex min-w-[70px] flex-col items-center gap-1 rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:outline-none md:min-w-[80px] md:gap-2"
    :aria-label="name"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:bg-orange-200 md:h-12 md:w-12 md:text-2xl"
    >
      {{ icon }}
    </div>
    <span
      class="text-xs whitespace-nowrap text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-orange-600 md:text-sm"
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
