<template>
  <div
    class="flex overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-orange-50/50 hover:shadow-lg"
    tabindex="0"
    role="article"
  >
    <img :src="image" :alt="name" class="h-24 w-24 object-cover" />
    <div class="flex-1 p-4">
      <h3 class="mb-1 font-semibold text-gray-900">{{ name }}</h3>
      <p class="line-clamp-2 text-sm text-gray-600">{{ description }}</p>
    </div>
    <div class="flex items-center pr-4">
      <button
        class="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-orange-100"
        aria-label="查看更多"
      >
        <i class="fas fa-chevron-right text-gray-400"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  image: string;
  description: string;
}>();
</script>
