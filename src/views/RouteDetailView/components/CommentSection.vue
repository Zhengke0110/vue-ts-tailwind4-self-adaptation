<template>
  <!-- 根容器添加响应式间距 -->
  <div
    class="space-y-6 transition-all duration-300"
    :class="{
      'p-4': deviceType.isMobile,
      'p-6': deviceType.isTablet,
      'p-8': deviceType.isDesktop,
    }"
  >
    <!-- 评分统计区域优化 -->
    <div class="rating-stats">
      <div
        class="flex flex-col gap-4 transition-all duration-300"
        :class="{
          'md:flex-row md:items-center md:justify-between':
            !deviceType.isMobile,
          'animate-fade-in-down': true,
        }"
      >
        <!-- 评分展示区域 -->
        <div
          class="flex flex-col space-y-2"
          :class="{
            'md:flex-row md:items-baseline md:space-y-0 md:space-x-4':
              !deviceType.isMobile,
          }"
        >
          <!-- 分数显示 -->
          <div class="score-display flex items-baseline space-x-2">
            <span
              class="transition-all duration-300"
              :class="{
                'text-3xl': deviceType.isMobile,
                'text-4xl': deviceType.isTablet,
                'text-5xl': deviceType.isDesktop,
              }"
            >
              {{ averageRating }}
            </span>
            <div class="rating-stars flex items-center space-x-1">
              <div class="stars flex">
                <i
                  v-for="i in 5"
                  :key="i"
                  class="fas fa-star transition-all duration-300"
                  :class="[
                    i <= Math.round(averageRating)
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    {
                      'text-sm': deviceType.isMobile,
                      'text-base': deviceType.isTablet,
                      'text-lg': deviceType.isDesktop,
                    },
                  ]"
                ></i>
              </div>
              <span
                class="review-count text-gray-500"
                :class="{
                  'text-sm': deviceType.isMobile,
                  'text-base': !deviceType.isMobile,
                }"
              >
                {{ comments.length }}条评价
              </span>
            </div>
          </div>
        </div>

        <!-- 写评价按钮 -->
        <button
          class="write-review-btn transform transition-all duration-300"
          :class="{
            'w-full rounded-full bg-orange-500 text-white': true,
            'py-3 text-sm': deviceType.isMobile,
            'py-2 text-base': !deviceType.isMobile,
            'hover:bg-orange-600 hover:shadow-lg': !deviceType.isMobile,
            'active:scale-95 active:transform': deviceType.isMobile,
          }"
          @click="showCommentModal = true"
        >
          写评价
        </button>
      </div>
    </div>

    <!-- 评论列表区域优化 -->
    <div
      class="comments-list space-y-6"
      :class="{
        'md:space-y-8': !deviceType.isMobile,
      }"
    >
      <TransitionGroup
        :enter-active-class="getEnterActiveClass"
        :enter-from-class="getEnterFromClass"
        :move-class="getMoveClass"
      >
        <div
          v-for="(comment, index) in comments"
          :key="comment.id"
          class="comment-card transform rounded-lg bg-white shadow-sm transition-all duration-300"
          :class="getCommentCardClasses(index)"
          :style="getCommentCardStyles(index)"
        >
          <!-- 评论卡片头部 -->
          <div
            class="comment-header flex items-start justify-between p-4"
            :class="{
              'p-6': !deviceType.isMobile,
            }"
          >
            <!-- 用户信息区域 -->
            <div class="user-info flex items-center space-x-3">
              <!-- 头像 -->
              <div
                class="avatar-container overflow-hidden rounded-full transition-all duration-300"
                :class="{
                  'h-10 w-10': deviceType.isMobile,
                  'h-12 w-12': deviceType.isTablet,
                  'h-14 w-14': deviceType.isDesktop,
                }"
              >
                <img
                  v-if="comment.avatar"
                  :src="comment.avatar"
                  :alt="comment.username"
                  class="h-full w-full object-cover"
                />
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center bg-orange-100"
                >
                  <i class="fas fa-user text-orange-300"></i>
                </div>
              </div>

              <!-- 用户名和评分 -->
              <div class="user-details">
                <h4
                  class="username font-medium text-gray-900"
                  :class="{
                    'text-base': deviceType.isMobile,
                    'text-lg': deviceType.isTablet,
                    'text-xl': deviceType.isDesktop,
                  }"
                >
                  {{ comment.username }}
                </h4>
                <div class="rating-info mt-1 flex items-center space-x-2">
                  <div class="stars flex">
                    <i
                      v-for="i in 5"
                      :key="i"
                      class="fas fa-star"
                      :class="[
                        i <= comment.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        {
                          'text-xs': deviceType.isMobile,
                          'text-sm': !deviceType.isMobile,
                        },
                      ]"
                    ></i>
                  </div>
                  <span
                    class="date text-gray-500"
                    :class="{
                      'text-xs': deviceType.isMobile,
                      'text-sm': !deviceType.isMobile,
                    }"
                  >
                    {{ comment.date }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 删除按钮 -->
            <button
              v-if="comment.userId === currentUserId"
              class="delete-btn p-2 text-gray-400 transition-colors hover:text-red-500"
              @click="deleteComment(comment.id)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>

          <!-- 评论内容 -->
          <div
            class="comment-content px-4 pb-4"
            :class="{
              'px-6 pb-6': !deviceType.isMobile,
            }"
          >
            <p
              class="text-gray-700"
              :class="{
                'text-sm leading-relaxed': deviceType.isMobile,
                'text-base leading-relaxed': deviceType.isTablet,
                'text-lg leading-relaxed': deviceType.isDesktop,
              }"
            >
              {{ comment.content }}
            </p>

            <!-- 评论图片 -->
            <div
              v-if="comment.images?.length"
              class="image-grid mt-4"
              :class="{
                'mt-6': !deviceType.isMobile,
              }"
            >
              <div
                class="grid gap-2 transition-all duration-300"
                :class="{
                  'grid-cols-2': deviceType.isMobile,
                  'grid-cols-3': deviceType.isTablet,
                  'grid-cols-4': deviceType.isDesktop,
                  'gap-3': !deviceType.isMobile,
                }"
              >
                <div
                  v-for="(image, imgIndex) in comment.images"
                  :key="imgIndex"
                  class="image-container group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                >
                  <img
                    :src="image"
                    alt="评论图片"
                    class="h-full w-full cursor-pointer object-cover transition-all duration-300"
                    :class="{
                      'group-hover:scale-105': !deviceType.isMobile,
                      'active:scale-95': deviceType.isMobile,
                    }"
                    @click="handleImageClick(image, '评论图片')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- 评论模态框 -->
    <TransitionRoot appear :show="showCommentModal" as="template">
      <Dialog as="div" class="relative z-50" @close="showCommentModal = false">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900 md:text-xl"
                >
                  写评价
                </DialogTitle>

                <div class="mt-4">
                  <div class="flex items-center space-x-2">
                    <span class="text-sm text-gray-700 md:text-base">评分</span>
                    <div class="flex space-x-1">
                      <button
                        v-for="i in 5"
                        :key="i"
                        class="text-2xl md:text-3xl"
                        :class="
                          i <= newRating ? 'text-yellow-400' : 'text-gray-300'
                        "
                        @click="newRating = i"
                      >
                        <i class="fas fa-star"></i>
                      </button>
                    </div>
                  </div>
                  <textarea
                    v-model="newComment"
                    rows="4"
                    placeholder="分享你的体验..."
                    class="mt-4 w-full rounded-lg border border-gray-200 p-3 text-base focus:border-orange-500 focus:outline-none md:text-lg"
                  ></textarea>
                  <div class="mt-6 flex justify-end space-x-3">
                    <button
                      class="rounded-lg px-4 py-2 text-gray-500 transition hover:bg-gray-100 md:px-6"
                      @click="showCommentModal = false"
                    >
                      取消
                    </button>
                    <button
                      class="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600 md:px-6"
                      @click="submitComment"
                      :disabled="!newComment.trim() || !newRating"
                    >
                      发布
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { deviceType } from "@/utils/flexible";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { type Comment, mockCommentsData } from "../index";

defineProps<{
  itemId: number;
}>();

const emit = defineEmits<{
  (e: "update:comments", comments: Comment[]): void;
  (e: "preview-image", data: { image: string; title: string }): void;
}>();

// 模拟当前用户ID
const currentUserId = "user123";

const comments = ref<Comment[]>(mockCommentsData);

const averageRating = computed(() => {
  if (!comments.value.length) return 0;
  const sum = comments.value.reduce((acc, curr) => acc + curr.rating, 0);
  return Number((sum / comments.value.length).toFixed(1));
});

const showCommentModal = ref(false);
const newRating = ref(0);
const newComment = ref("");

// 动态计算过渡效果
const getEnterActiveClass = computed(() => {
  const duration = deviceType.value.isMobile
    ? "300"
    : deviceType.value.isTablet
      ? "400"
      : "500";
  return `transition-all duration-${duration} ease-out`;
});

const getEnterFromClass = computed(() => {
  const translate = deviceType.value.isMobile
    ? "4"
    : deviceType.value.isTablet
      ? "6"
      : "8";
  return `opacity-0 translate-y-${translate}`;
});

const getMoveClass = computed(() => {
  return deviceType.value.isMobile
    ? "transition-all duration-300"
    : "transition-all duration-500";
});

// 评论卡片样式计算
const getCommentCardClasses = (index: number) => ({
  "hover:-translate-y-1 hover:shadow-md": !deviceType.value.isMobile,
  "active:scale-98": deviceType.value.isMobile,
  "animate-fade-in-up": true,
});

const getCommentCardStyles = (index: number) => {
  const baseDelay = deviceType.value.isMobile
    ? 100
    : deviceType.value.isTablet
      ? 150
      : 200;
  return {
    animationDelay: `${index * baseDelay}ms`,
  };
};

const submitComment = () => {
  if (!newComment.value.trim() || !newRating.value) return;

  const comment: Comment = {
    id: Date.now().toString(),
    userId: currentUserId,
    username: "当前用户",
    rating: newRating.value,
    content: newComment.value,
    date: new Date().toISOString().split("T")[0],
  };

  comments.value.unshift(comment);
  emit("update:comments", comments.value);

  // 重置表单
  newRating.value = 0;
  newComment.value = "";
  showCommentModal.value = false;
};

const deleteComment = (commentId: string) => {
  const index = comments.value.findIndex((c) => c.id === commentId);
  if (index !== -1) {
    comments.value.splice(index, 1);
    emit("update:comments", comments.value);
  }
};

// 图片预览功能
const handleImageClick = (image: string, title: string) => {
  // 这里可以触发父组件的图片预览功能
  emit("preview-image", { image, title });
};
</script>

<style scoped>
/* 基础动画定义 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 设备特定的动画时长 */
@media (max-width: 768px) {
  .animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out forwards;
  }
}

@media (min-width: 769px) and (max-width: 1279px) {
  .animate-fade-in-up {
    animation: fadeInUp 0.4s ease-out forwards;
  }
}

@media (min-width: 1280px) {
  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
  }
}

/* 触摸设备优化 */
@media (hover: none) {
  .comment-card:active {
    transform: scale(0.98);
  }

  .image-container:active img {
    transform: scale(0.95);
  }
}
</style>
