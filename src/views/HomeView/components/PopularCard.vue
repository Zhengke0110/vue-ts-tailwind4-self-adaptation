<template>
  <div
    class="transform overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
    tabindex="0"
    role="article"
  >
    <div class="relative">
      <img :src="image" :alt="title" class="h-40 w-full object-cover" />
      <div
        class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4"
      >
        <h3 class="font-semibold text-white">{{ title }}</h3>
      </div>
    </div>
    <div class="flex items-center gap-2 p-3">
      <img
        :src="author.avatar"
        :alt="author.name"
        class="h-6 w-6 rounded-full object-cover"
      />
      <span class="text-sm text-gray-600">{{ author.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Author {
  avatar: string;
  name: string;
}

defineProps<{
  image: string;
  title: string;
  author: Author;
}>();
</script>
