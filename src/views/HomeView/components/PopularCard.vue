<template>
  <div
    class="transform overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
    tabindex="0"
    role="article"
  >
    <div class="relative">
      <img
        :src="image"
        :alt="title"
        class="h-32 w-full object-cover md:h-36 lg:h-40"
      />
      <div
        class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-4"
      >
        <h3 class="text-sm font-semibold text-white md:text-base">
          {{ title }}
        </h3>
      </div>
    </div>
    <div class="flex items-center gap-2 p-2 md:p-3">
      <img
        :src="author.avatar"
        :alt="author.name"
        class="h-5 w-5 rounded-full object-cover md:h-6 md:w-6"
      />
      <span class="text-xs text-gray-600 md:text-sm">
        {{ author.name }}
      </span>
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
