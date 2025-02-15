<template>
  <div
    class="w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
    tabindex="0"
    role="button"
    @click="$emit('click')"
    :aria-label="`查看${title}路线详情`"
  >
    <img :src="image" :alt="title" class="h-40 w-full object-cover" />
    <div class="p-4">
      <h3 class="mb-2 line-clamp-1 font-semibold text-gray-900">{{ title }}</h3>
      <p class="line-clamp-2 text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  image: string;
  description: string;
}>();

defineEmits<{
  (e: "click"): void;
}>();
</script>

<style scoped>
/* 移除之前的样式，因为已经通过 Tailwind 类实现了 */
</style>
