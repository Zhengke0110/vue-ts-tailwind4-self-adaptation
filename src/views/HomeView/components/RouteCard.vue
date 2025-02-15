<template>
  <div
    class="w-[280px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg lg:w-full lg:flex-shrink"
    tabindex="0"
    role="button"
    @click="$emit('click')"
    :aria-label="`查看${title}路线详情`"
  >
    <img
      :src="image"
      :alt="title"
      class="h-36 w-full object-cover md:h-40 lg:h-48"
    />
    <div class="p-3 md:p-4">
      <h3
        class="mb-1 line-clamp-1 text-sm font-semibold text-gray-900 md:mb-2 md:text-base"
      >
        {{ title }}
      </h3>
      <p class="line-clamp-2 text-xs text-gray-600 md:text-sm">
        {{ description }}
      </p>
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
