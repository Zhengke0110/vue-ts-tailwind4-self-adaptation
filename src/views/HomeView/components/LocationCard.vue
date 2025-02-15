<template>
  <div
    class="group flex overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-orange-50/50 hover:shadow-lg"
    tabindex="0"
    role="article"
  >
    <!-- 移动端布局 -->
    <template v-if="deviceType.isMobile">
      <img :src="image" :alt="name" class="h-20 w-20 object-cover" />
      <div class="flex flex-1 flex-col justify-center p-3">
        <h3
          class="text-sm font-semibold text-gray-900 group-hover:text-orange-600"
        >
          {{ name }}
        </h3>
        <p class="mt-1 line-clamp-2 text-xs text-gray-600">
          {{ description }}
        </p>
      </div>
      <div class="flex items-center pr-3">
        <button
          class="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 group-hover:text-orange-500 hover:bg-orange-100"
          aria-label="查看更多"
        >
          <i class="fas fa-chevron-right text-sm text-gray-400"></i>
        </button>
      </div>
    </template>

    <!-- 平板端布局 -->
    <template v-else-if="deviceType.isTablet">
      <div class="relative aspect-square w-full overflow-hidden">
        <img
          :src="image"
          :alt="name"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />
        <div class="absolute bottom-0 w-full p-4">
          <h3 class="text-base font-medium text-white">
            {{ name }}
          </h3>
        </div>
      </div>
    </template>

    <!-- 桌面端布局 -->
    <template v-else>
      <img :src="image" :alt="name" class="h-28 w-28 object-cover" />
      <div class="flex flex-1 flex-col justify-center p-4">
        <h3
          class="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600"
        >
          {{ name }}
        </h3>
        <p class="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {{ description }}
        </p>
      </div>
      <div class="flex items-center pr-4">
        <button
          class="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 group-hover:text-orange-500 hover:bg-orange-100"
          aria-label="查看更多"
        >
          <i class="fas fa-chevron-right text-base text-gray-400"></i>
        </button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { deviceType } from "@/utils/flexible";

defineProps<{
  name: string;
  image: string;
  description: string;
}>();
</script>
