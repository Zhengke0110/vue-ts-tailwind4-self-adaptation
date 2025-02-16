<template>
  <div
    class="min-h-screen bg-indigo-50"
    :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }"
  >
    <div
      :class="{
        'mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
          deviceType.isDesktop,
      }"
    >
      <!-- Header Section -->
      <header class="relative h-48 w-full overflow-hidden md:h-56 lg:h-72">
        <img
          :src="Banner"
          alt="金华文化"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
        />

        <!-- Overlay -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 backdrop-blur-[2px]"></div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent"
          ></div>
        </div>

        <!-- Content -->
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
              <Menu as="div" class="relative">
                <MenuButton class="text-white">
                  <i class="fas fa-ellipsis-h text-xl"></i>
                </MenuButton>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="ring-opacity-5 absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 ring-1 shadow-lg ring-black focus:outline-none"
                  >
                    <MenuItem v-slot="{ active }">
                      <button
                        class="flex w-full items-center px-4 py-2 text-sm"
                        :class="
                          active
                            ? 'bg-indigo-50 text-indigo-500'
                            : 'text-gray-700'
                        "
                      >
                        <i class="fas fa-heart mr-3"></i>收藏
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        class="flex w-full items-center px-4 py-2 text-sm"
                        :class="
                          active
                            ? 'bg-indigo-50 text-indigo-500'
                            : 'text-gray-700'
                        "
                      >
                        <i class="fas fa-share-alt mr-3"></i>分享
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <div class="mt-auto space-y-2">
            <h1
              class="text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"
            >
              金华文化
            </h1>
            <p class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3">
              探索金华传统文化，感受非遗魅力，传承历史记忆
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['非遗文化', '历史典故', '艺术表演', '传统工艺']"
                :key="tag"
                class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="relative px-4 py-4 md:px-6 lg:px-8 lg:py-8">
        <div
          :class="[
            'w-full',
            {
              'lg:grid lg:grid-cols-[300px_1fr] lg:gap-8': deviceType.isDesktop,
            },
          ]"
        >
          <!-- Desktop Sidebar -->
          <aside v-if="deviceType.isDesktop" class="lg:sticky lg:top-8">
            <div class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="mb-4 truncate text-lg font-semibold">文化分类</h3>
              <div class="flex flex-col space-y-2">
                <button
                  v-for="category in categories"
                  :key="category.value"
                  class="flex min-w-0 items-center space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-indigo-50"
                  :class="
                    selectedCategory === category.value
                      ? 'bg-indigo-50 text-indigo-500'
                      : 'text-gray-600'
                  "
                  @click="selectedCategory = category.value"
                >
                  <i :class="[category.icon, 'w-5 flex-shrink-0']"></i>
                  <span class="flex-1 truncate text-left">{{
                    category.label
                  }}</span>
                  <span class="flex-shrink-0 text-sm text-gray-400">{{
                    getCategoryCount(category.value)
                  }}</span>
                </button>
              </div>
            </div>
          </aside>

          <!-- Content Area -->
          <div class="flex-1">
            <!-- Mobile/Tablet Categories -->
            <div v-if="!deviceType.isDesktop" class="mb-6 md:mb-8">
              <div class="hide-scrollbar flex space-x-2 overflow-x-auto pb-2">
                <button
                  v-for="category in categories"
                  :key="category.value"
                  class="inline-flex shrink-0 items-center space-x-2 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
                  :class="
                    activeCategory === category.value
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-gray-600'
                  "
                  @click="activeCategory = category.value"
                >
                  <i :class="category.icon"></i>
                  <span>{{ category.label }}</span>
                </button>
              </div>
            </div>

            <!-- Culture Grid -->
            <div
              class="grid gap-4 sm:gap-6 lg:gap-8"
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
                  class="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
                  <div class="flex flex-1 flex-col p-4">
                    <div class="mb-2 flex items-start justify-between gap-2">
                      <h3
                        class="truncate font-medium text-gray-900 transition-colors duration-300 group-hover:text-indigo-500"
                      >
                        {{ item.title }}
                      </h3>
                      <span
                        class="flex-shrink-0 rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-500"
                      >
                        {{ getCategoryLabel(item.category) }}
                      </span>
                    </div>
                    <p class="mb-3 line-clamp-2 flex-1 text-sm text-gray-500">
                      {{ item.description }}
                    </p>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-1">
                        <StarRating :rating="item.rating" />
                        <span class="text-xs text-gray-500"
                          >{{ item.reviews }}条点评</span
                        >
                      </div>
                      <button
                        class="transform text-gray-400 transition-all duration-300 hover:scale-110 hover:text-indigo-500"
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

      <!-- Search Modal -->
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
                      placeholder="搜索文化内容..."
                      class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-indigo-500 focus:outline-none"
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
import type { CulturalNote } from "./index";
import { culturalNotes } from "./index";
import { Banner } from "./index";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";

const router = useRouter();
const isSearchOpen = ref(false);
const searchQuery = ref("");
const selectedCategory = ref("all");
const activeCategory = ref("all");
const sortOrder = ref<"default" | "rating" | "reviews">("default");

const categories = [
  { value: "all", label: "全部", icon: "fas fa-th-large" },
  { value: "heritage", label: "非遗文化", icon: "fas fa-landmark" },
  { value: "history", label: "历史典故", icon: "fas fa-book-open" },
  { value: "art", label: "艺术表演", icon: "fas fa-palette" },
];

const filteredItems = computed(() => {
  let items = [...culturalNotes]; // 创建数组副本以避免修改原数据

  // 1. 分类过滤
  const category = deviceType.value.isDesktop
    ? selectedCategory.value
    : activeCategory.value;
  if (category !== "all") {
    items = items.filter((item) => item.category === category);
  }

  // 2. 搜索过滤
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    items = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.features.some((feature) => feature.toLowerCase().includes(query))
      );
    });
  }

  // 3. 排序处理
  items.sort((a, b) => {
    switch (sortOrder.value) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        // 默认按推荐指数和评分综合排序
        const recommendDiff = b.recommendIndex - a.recommendIndex;
        if (recommendDiff !== 0) return recommendDiff;
        return b.rating - a.rating;
    }
  });

  return items;
});

const toggleSearchModal = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
  searchQuery.value = "";
};

const handleItemClick = (item: CulturalNote) => {
  router.push(`/culture/${item.id}`);
};

const getCategoryCount = (category: string) => {
  if (category === "all") return culturalNotes.length;
  return culturalNotes.filter((item) => item.category === category).length;
};

const getCategoryLabel = (categoryValue: string) => {
  const category = categories.find((c) => c.value === categoryValue);
  return category ? category.label : categoryValue;
};

const toggleFavorite = (item: CulturalNote) => {
  // 实现收藏逻辑
  console.log("Toggle favorite:", item);
};

const isFavorite = (item: CulturalNote) => {
  // 实现收藏状态检查
  return false;
};

// Star Rating Component
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

@media (min-width: 1024px) {
  .group:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
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

/* 添加空状态样式 */
.empty-state {
  text-align: center;
  padding: 2rem;
  color: #6b7280;
}

/* 优化过渡动画 */
.fade-move {
  transition: transform 0.6s ease-out;
}

/* 优化卡片样式 */
.group {
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* 优化图片加载性能 */
img {
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
}

/* 优化移动端滚动条 */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* 优化文字溢出 */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 优化移动端触摸体验 */
@media (hover: none) {
  .group:hover {
    transform: none;
  }
}

/* 优化动画性能 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* 添加桌面端特有的样式 */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    top: 2rem;
    height: fit-content;
    width: 300px; /* 确保宽度固定 */
  }

  /* 防止内容溢出 */
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 确保弹性布局项目不会收缩 */
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  /* 左侧边栏hover效果 */
  .lg\:sticky button:hover {
    transform: translateX(4px);
  }
}
</style>
