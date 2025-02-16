<template>
  <TransitionRoot appear :show="true" as="template">
    <Dialog as="div" class="relative z-50" @close="$emit('close')">
      <!-- 背景遮罩 -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      </TransitionChild>

      <!-- 模态框内容 -->
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
        >
          <TransitionChild
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all"
            >
              <!-- 图片区域 -->
              <div class="relative aspect-video">
                <img
                  :src="recommendation.image"
                  :alt="recommendation.title"
                  class="h-full w-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                ></div>
                <!-- 关闭按钮 -->
                <button
                  class="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-gray-700 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white"
                  @click="$emit('close')"
                >
                  <i class="fas fa-times"></i>
                </button>
                <!-- 标题区域 -->
                <div class="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div class="mb-2 flex items-center space-x-2">
                    <span
                      class="rounded-full px-3 py-1 text-sm backdrop-blur-md"
                      :class="categoryClasses[recommendation.category]"
                    >
                      {{ categoryLabel[recommendation.category] }}
                    </span>
                    <div class="flex items-center space-x-1">
                      <i class="fas fa-star text-yellow-400"></i>
                      <span class="text-sm">{{
                        recommendation.rating.toFixed(1)
                      }}</span>
                    </div>
                  </div>
                  <h2 class="text-2xl font-bold">{{ recommendation.title }}</h2>
                </div>
              </div>

              <!-- 内容区域 -->
              <div class="p-6">
                <!-- 描述 -->
                <div class="mb-6">
                  <h3 class="mb-2 text-lg font-semibold text-gray-900">
                    活动详情
                  </h3>
                  <p class="text-gray-600">{{ recommendation.description }}</p>
                </div>

                <!-- 标签 -->
                <div class="mb-6">
                  <h3 class="mb-2 text-lg font-semibold text-gray-900">
                    特色标签
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in recommendation.tags"
                      :key="tag"
                      class="rounded-full bg-purple-50 px-3 py-1 text-sm text-purple-700 transition-colors hover:bg-purple-100"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- 推荐理由 -->
                <div class="mb-6">
                  <h3 class="mb-2 text-lg font-semibold text-gray-900">
                    推荐理由
                  </h3>
                  <div class="rounded-xl bg-purple-50 p-4">
                    <p class="text-sm leading-relaxed text-purple-700">
                      这是一个专门为您定制的个性化推荐，根据您的兴趣和偏好精心挑选。
                      {{
                        recommendation.title
                      }}将为您带来独特的体验和难忘的回忆。
                    </p>
                  </div>
                </div>

                <!-- 底部操作按钮 -->
                <div class="flex space-x-4">
                  <button
                    class="flex-1 rounded-xl bg-purple-600 py-3 text-white transition-all hover:bg-purple-700"
                    @click="handleBook"
                  >
                    立即预订
                  </button>
                  <button
                    class="rounded-xl bg-gray-100 px-4 text-gray-700 transition-all hover:bg-gray-200"
                    @click="handleShare"
                  >
                    <i class="fas fa-share-alt"></i>
                  </button>
                  <button
                    class="rounded-xl bg-gray-100 px-4 text-gray-700 transition-all hover:bg-gray-200"
                    @click="handleFavorite"
                  >
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import type { Recommendation } from "../index";
import { categoryLabel } from "../index";

const props = defineProps<{
  recommendation: Recommendation;
}>();

defineEmits(["close", "book", "share", "favorite"]);

// 分类样式映射
const categoryClasses = computed(() => ({
  culture: "bg-purple-500/20 text-white border border-purple-200/30",
  nature: "bg-green-500/20 text-white border border-green-200/30",
  food: "bg-orange-500/20 text-white border border-orange-200/30",
  adventure: "bg-blue-500/20 text-white border border-blue-200/30",
}));

// 处理函数
const handleBook = () => {
  // TODO: 实现预订逻辑
  console.log("预订:", props.recommendation.title);
};

const handleShare = () => {
  // TODO: 实现分享逻辑
  console.log("分享:", props.recommendation.title);
};

const handleFavorite = () => {
  // TODO: 实现收藏逻辑
  console.log("收藏:", props.recommendation.title);
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
