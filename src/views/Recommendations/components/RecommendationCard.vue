<template>
  <div
    class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    @click="$emit('click')"
    role="button"
    tabindex="0"
  >
    <!-- 图片容器 -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        :src="recommendation.image"
        :alt="recommendation.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <!-- 渐变遮罩 -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>
      <!-- 分类标签 -->
      <span
        class="absolute top-4 left-4 rounded-full px-3 py-1 text-sm backdrop-blur-md"
        :class="categoryClasses[recommendation.category]"
      >
        {{ categoryLabel[recommendation.category] }}
      </span>
    </div>

    <!-- 内容区域 -->
    <div class="p-4">
      <div class="mb-2 flex items-start justify-between">
        <h3
          class="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600"
        >
          {{ recommendation.title }}
        </h3>
        <div
          class="flex items-center space-x-1 rounded-lg bg-purple-50 px-2 py-1"
        >
          <i class="fas fa-star text-sm text-yellow-400"></i>
          <span class="text-sm font-medium text-purple-700">{{
            recommendation.rating.toFixed(1)
          }}</span>
        </div>
      </div>

      <p
        class="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-900"
      >
        {{ recommendation.description }}
      </p>

      <!-- 标签容器 -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in recommendation.tags.slice(0, 3)"
          :key="tag"
          class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 transition-all duration-300 group-hover:bg-purple-100 group-hover:text-purple-700"
        >
          {{ tag }}
        </span>
        <span
          v-if="recommendation.tags.length > 3"
          class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500"
        >
          +{{ recommendation.tags.length - 3 }}
        </span>
      </div>
    </div>

    <!-- 悬浮操作按钮 -->
    <div
      class="absolute top-4 right-4 flex -translate-y-2 items-center space-x-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
    >
      <button
        class="rounded-full bg-white/90 p-2 text-gray-700 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white"
        @click.stop="$emit('favorite')"
      >
        <i class="fas fa-heart text-sm"></i>
      </button>
      <button
        class="rounded-full bg-white/90 p-2 text-gray-700 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white"
        @click.stop="$emit('share')"
      >
        <i class="fas fa-share-alt text-sm"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Recommendation } from "../index";
import { categoryLabel } from "../index";

defineProps<{
  recommendation: Recommendation;
}>();

defineEmits(["click", "favorite", "share"]);

// 分类样式映射
const categoryClasses = computed(() => ({
  culture: "bg-purple-500/20 text-purple-700 border border-purple-200",
  nature: "bg-green-500/20 text-green-700 border border-green-200",
  food: "bg-orange-500/20 text-orange-700 border border-orange-200",
  adventure: "bg-blue-500/20 text-blue-700 border border-blue-200",
}));
</script>

<style scoped>
.recommendation-card {
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease;
}
.recommendation-card:hover {
  transform: scale(1.05);
}
</style>
