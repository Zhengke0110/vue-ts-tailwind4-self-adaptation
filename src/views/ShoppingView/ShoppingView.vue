<template>
  <div
    class="min-h-screen bg-orange-50"
    :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }"
  >
    <!-- 桌面端容器 -->
    <div
      :class="{
        'mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
          deviceType.isDesktop,
      }"
    >
      <!-- 页面头部 -->
      <header class="relative h-48 w-full overflow-hidden md:h-56 lg:h-72">
        <!-- 背景图片 -->
        <img
          :src="Banner"
          alt="金华特色购物"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
        />

        <!-- 毛玻璃效果和渐变叠加层 -->
        <div class="absolute inset-0">
          <!-- 毛玻璃背景 -->
          <div class="absolute inset-0 backdrop-blur-[2px]"></div>
          <!-- 渐变叠加层 -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"
          ></div>
          <!-- 额外的纹理效果 -->
          <div class="absolute inset-0 bg-black/5"></div>
        </div>

        <!-- 内容 -->
        <div class="relative flex h-full flex-col px-4 py-4 md:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <button
              class="text-white transition-transform hover:scale-105"
              @click="router.back()"
            >
              <i class="fas fa-arrow-left text-xl"></i>
            </button>
            <div class="flex items-center space-x-4">
              <button
                class="text-white transition-transform hover:scale-105"
                @click="toggleSearchModal"
              >
                <i class="fas fa-search text-xl"></i>
              </button>
            </div>
          </div>

          <!-- 标题区域 -->
          <div class="mt-auto space-y-2">
            <h1
              class="text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"
            >
              特色购物
            </h1>
            <p class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3">
              探索金华特色商品，体验本地购物文化
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['地方特产', '工艺品', '批发市场', '文创商品']"
                :key="tag"
                class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- 主要内容区域 -->
      <main class="relative px-4 py-4 md:px-6 lg:px-8 lg:py-8">
        <div
          :class="[
            'w-full',
            {
              'lg:grid lg:grid-cols-[280px_1fr] lg:gap-8': deviceType.isDesktop,
            },
          ]"
        >
          <!-- 桌面端侧边栏 -->
          <aside v-if="deviceType.isDesktop" class="lg:sticky lg:top-8">
            <div class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="mb-4 text-lg font-semibold">商品分类</h3>
              <div class="flex flex-col space-y-2">
                <button
                  v-for="category in categories"
                  :key="category.value"
                  class="flex items-center space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-orange-50"
                  :class="
                    selectedCategory === category.value
                      ? 'bg-orange-50 text-orange-500'
                      : 'text-gray-600'
                  "
                  @click="selectedCategory = category.value"
                >
                  <i :class="[category.icon, 'w-5']"></i>
                  <span class="flex-1 text-left">{{ category.label }}</span>
                  <span class="text-sm text-gray-400">{{
                    getCategoryCount(category.value)
                  }}</span>
                </button>
              </div>
            </div>
          </aside>

          <!-- 内容区域 -->
          <div class="flex-1">
            <!-- 移动端/平板端分类 -->
            <div v-if="!deviceType.isDesktop" class="mb-6 md:mb-8">
              <div class="hide-scrollbar flex space-x-2 overflow-x-auto pb-2">
                <button
                  v-for="category in categories"
                  :key="category.value"
                  class="flex items-center space-x-2 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
                  :class="
                    activeCategory === category.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600'
                  "
                  @click="activeCategory = category.value"
                >
                  <i :class="category.icon"></i>
                  <span>{{ category.label }}</span>
                </button>
              </div>
            </div>

            <!-- 商品网格 -->
            <div
              class="grid gap-4 md:gap-6"
              :class="{
                'grid-cols-1': deviceType.isMobile,
                'grid-cols-2': deviceType.isTablet,
                'grid-cols-2 xl:grid-cols-3': deviceType.isDesktop,
              }"
            >
              <TransitionGroup name="fade" appear tag="div" class="contents">
                <div
                  v-for="item in filteredItems"
                  :key="item.id"
                  class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  @click="handleItemClick(item)"
                >
                  <div class="relative aspect-[4/3] overflow-hidden">
                    <img
                      :src="item.image"
                      :alt="item.title"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    ></div>
                  </div>
                  <div class="p-4">
                    <div class="mb-2 flex items-center justify-between">
                      <h3
                        class="font-medium text-gray-900 transition-colors duration-300 group-hover:text-orange-500"
                      >
                        {{ item.title }}
                      </h3>
                      <span
                        class="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-500"
                      >
                        ¥{{ item.price }}
                      </span>
                    </div>
                    <p class="mb-3 line-clamp-2 text-sm text-gray-500">
                      {{ item.description }}
                    </p>
                    <div class="mb-3 flex flex-wrap gap-2">
                      <span
                        v-for="tag in item.tags"
                        :key="tag"
                        class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                      >
                        {{ tag }}
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-1">
                        <StarRating :rating="item.rating" />
                        <span class="text-sm text-gray-500"
                          >{{ item.reviews }}条点评</span
                        >
                      </div>
                      <button
                        class="transform text-gray-400 transition-all duration-300 hover:scale-110 hover:text-orange-500"
                        @click.stop="toggleFavorite(item)"
                      >
                        <i
                          class="fas fa-heart"
                          :class="{ 'text-red-500': isFavorite(item) }"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </main>

      <!-- 搜索模态框 -->
      <TransitionRoot appear :show="isSearchOpen" as="template">
        <Dialog as="div" class="relative z-50" @close="closeSearch">
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

          <div class="fixed inset-0">
            <div class="flex min-h-full items-start justify-center p-4">
              <TransitionChild
                enter="duration-300 ease-out"
                enter-from="opacity-0 -translate-y-4"
                enter-to="opacity-100 translate-y-0"
                leave="duration-200 ease-in"
                leave-from="opacity-100 translate-y-0"
                leave-to="opacity-0 -translate-y-4"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"
                >
                  <div class="relative">
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="搜索商品..."
                      class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-orange-500 focus:outline-none"
                    />
                    <button
                      v-if="searchQuery"
                      class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                      @click="searchQuery = ''"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineComponent, h } from "vue";
import { useRouter } from "vue-router";
import { deviceType } from "@/utils/flexible";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import type { ShoppingItem, ShoppingCategory } from "./index";
import { shoppingItems as Data, Banner } from "./index";

const router = useRouter();
const isSearchOpen = ref(false);
const searchQuery = ref("");
const selectedCategory = ref("all");
const activeCategory = ref("all");

const categories: ShoppingCategory[] = [
  { value: "all", label: "全部", icon: "fas fa-th-large" },
  { value: "local", label: "特产", icon: "fas fa-gift" },
  { value: "craft", label: "工艺品", icon: "fas fa-palette" },
  { value: "market", label: "市场", icon: "fas fa-store-alt" },
];

const shoppingItems = ref<ShoppingItem[]>(Data);

// 商品过滤逻辑
const filteredItems = computed(() => {
  const category = deviceType.value.isDesktop
    ? selectedCategory.value
    : activeCategory.value;
  if (category === "all") {
    return shoppingItems.value;
  }
  return shoppingItems.value.filter((item) => item.category === category);
});

// 获取分类数量
const getCategoryCount = (category: string) => {
  if (category === "all") return shoppingItems.value.length;
  return shoppingItems.value.filter((item) => item.category === category)
    .length;
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

// 事件处理方法
const toggleSearchModal = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
  searchQuery.value = "";
};

const handleItemClick = (item: ShoppingItem) => {
  router.push(`/shopping/${item.id}`);
};

const toggleFavorite = (item: ShoppingItem) => {
  // 实现收藏逻辑
  console.log("Toggle favorite:", item);
};

const isFavorite = (item: ShoppingItem) => {
  // 实现收藏状态检查
  return false;
};
</script>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 动画效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  position: absolute;
}

/* 桌面端悬停效果 */
@media (min-width: 1024px) {
  .group:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
}

/* 滚动条美化 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #f97316 #fee2e2;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #fee2e2;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #f97316;
  border-radius: 3px;
}

/* 添加头部相关动画 */
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

header h1,
header p,
header .flex-wrap {
  animation: fadeInUp 0.8s ease-out forwards;
}

header p {
  animation-delay: 0.2s;
}

header .flex-wrap {
  animation-delay: 0.4s;
}

/* 优化图片加载效果 */
header img {
  transition: transform 8s ease-out;
}

header:hover img {
  transform: scale(1.1);
}

/* 优化图片加载和毛玻璃过渡效果 */
header {
  isolation: isolate;
}

header img {
  transition: transform 8s ease-out;
  will-change: transform;
}

header:hover img {
  transform: scale(1.1);
}

/* 毛玻璃悬停效果 */
header .backdrop-blur-md {
  transition: all 0.3s ease;
}

header:hover .backdrop-blur-md {
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.15);
}

/* 提升文字可读性 */
.drop-shadow {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.drop-shadow-lg {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
}
</style>
