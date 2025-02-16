<template>
  <TransitionGroup
    name="fade"
    appear
    tag="div"
    :class="[
      'grid gap-4 md:gap-6',
      {
        'grid-cols-1': deviceType.isMobile,
        'grid-cols-2': deviceType.isTablet,
        'grid-cols-2 xl:grid-cols-3': deviceType.isDesktop,
      },
    ]"
  >
    <div
      v-for="hotel in hotels"
      :key="hotel.id"
      class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      @click="handleHotelClick(hotel)"
    >
      <!-- 图片容器 -->
      <div class="relative aspect-[4/3] overflow-hidden">
        <img
          :src="hotel.image"
          :alt="hotel.title"
          class="h-full w-full object-cover transition-all duration-700 will-change-transform group-hover:scale-110"
          loading="lazy"
        />
        <!-- 渐变遮罩 -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
        <!-- 地址信息 -->
        <div
          class="absolute inset-x-0 bottom-0 translate-y-full p-4 text-white transition-transform duration-300 group-hover:translate-y-0"
        >
          <p class="truncate text-sm font-medium">
            <i class="fas fa-map-marker-alt mr-2"></i>
            {{ hotel.address }}
          </p>
        </div>
      </div>

      <!-- 内容区域 -->
      <div class="flex flex-col p-4">
        <!-- 标题和价格 -->
        <div class="mb-2 flex items-start justify-between gap-2">
          <h3
            class="line-clamp-1 flex-1 leading-tight font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-500"
          >
            {{ hotel.title }}
          </h3>
          <span
            class="flex-shrink-0 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-blue-500"
          >
            ¥{{ hotel.price }}起
          </span>
        </div>

        <!-- 描述文本 -->
        <p
          class="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500 transition-all duration-300 hover:line-clamp-none"
        >
          {{ hotel.description }}
        </p>

        <!-- 特色标签 -->
        <div class="mb-3 flex flex-wrap gap-1.5">
          <span
            v-for="feature in hotel.features.slice(0, 3)"
            :key="feature"
            class="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-100"
          >
            {{ feature }}
          </span>
          <span
            v-if="hotel.features.length > 3"
            class="cursor-help rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500 transition-colors duration-300 hover:bg-gray-100"
            :title="hotel.features.slice(3).join('、')"
          >
            +{{ hotel.features.length - 3 }}
          </span>
        </div>

        <!-- 底部信息栏 -->
        <div class="mt-auto flex items-center justify-between">
          <div class="flex items-center gap-2">
            <StarRating :rating="hotel.rating" />
            <span class="text-sm text-gray-500">
              {{ hotel.reviews }}条点评
            </span>
          </div>
          <button
            class="group/btn relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:bg-red-50"
            @click.stop="toggleFavorite(hotel)"
          >
            <i
              class="fas fa-heart text-lg transition-all duration-300"
              :class="[
                isFavorite(hotel)
                  ? 'scale-110 text-red-500'
                  : 'text-gray-400 group-hover/btn:text-red-400',
              ]"
            ></i>
            <span
              class="absolute -top-8 right-0 min-w-max rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover/btn:opacity-100"
            >
              {{ isFavorite(hotel) ? "取消收藏" : "收藏" }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";
import type { Hotel } from "../index";

defineProps<{
  hotels: Hotel[];
  deviceType: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}>();

const handleHotelClick = (hotel: Hotel) => {
  // 实现酒店详情页跳转
  console.log("Navigate to hotel detail:", hotel);
};

const toggleFavorite = (hotel: Hotel) => {
  // 实现收藏逻辑
  console.log("Toggle favorite:", hotel);
};

const isFavorite = (hotel: Hotel) => {
  console.log("isFavorite", hotel);
  // 实现收藏状态检查
  return false;
};

// 星级评分组件
const StarRating = defineComponent({
  props: {
    rating: Number,
  },
  setup(props) {
    return () =>
      h(
        "div",
        { class: "flex text-yellow-400" },
        Array.from({ length: 5 }, (_, i) =>
          h("i", {
            key: i,
            class: [
              "fas fa-star text-sm transition-all duration-300",
              i < (props.rating || 0) ? "text-yellow-400" : "text-gray-300",
            ],
          }),
        ),
      );
  },
});
</script>

<style scoped>
/* 平滑过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-active {
  position: absolute;
}

/* 优化图片加载 */
img {
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* 自定义滚动条 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 #f3f4f6;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #3b82f6;
  border-radius: 3px;
}

/* 文本悬停展开效果 */
.line-clamp-2:hover {
  -webkit-line-clamp: unset;
  max-height: none;
}

/* 卡片悬停效果优化 */
@media (min-width: 1024px) {
  .group {
    transform: translateY(0);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .group:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgb(0 0 0 / 0.15);
  }
}

/* 加载动画 */
@keyframes shimmer {
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 1000px 0;
  }
}

.loading {
  background: linear-gradient(90deg, #f3f4f6, #e5e7eb, #f3f4f6);

  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}
</style>
