<template>
  <div
    class="min-h-screen bg-orange-50"
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
        <!-- Background Image -->
        <img
          :src="Banner"
          alt="金华景点"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
        />

        <!-- Blur Overlay -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 backdrop-blur-[2px]"></div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"
          ></div>
          <div class="absolute inset-0 bg-black/5"></div>
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
                        :class="[
                          active
                            ? 'bg-green-50 text-green-600'
                            : 'text-gray-700',
                        ]"
                      >
                        <i class="fas fa-share-alt mr-3"></i>分享
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <!-- Title and Description -->
          <div class="mt-auto space-y-2">
            <h1
              class="text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"
            >
              金华景点
            </h1>
            <p class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3">
              探索金华名胜古迹，感受自然人文魅力，发现城市新风采
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['自然风光', '人文古迹', '名山古刹', '现代景观']"
                :key="tag"
                class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="relative px-4 py-4 md:px-6 lg:px-8 lg:py-8">
        <!-- Filters Section -->
        <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
          <!-- Categories -->
          <div
            class="w-full overflow-hidden lg:w-auto"
            :class="{ 'pr-4': !deviceType.isDesktop }"
          >
            <div
              class="scrollbar-hide flex gap-2 overflow-x-auto lg:flex-wrap"
              :class="{
                'snap-x snap-mandatory': !deviceType.isDesktop,
                '-mr-4': !deviceType.isDesktop,
              }"
            >
              <button
                v-for="category in categories"
                :key="category.value"
                class="flex-shrink-0 rounded-full px-4 py-2 text-sm transition-all duration-300"
                :class="[
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600',
                  { 'snap-start': !deviceType.isDesktop },
                ]"
                @click="selectedCategory = category.value"
              >
                <i :class="category.icon" class="mr-2"></i>
                {{ category.label }}
              </button>
            </div>
          </div>

          <!-- Sort Listbox -->
          <div class="relative ml-auto">
            <Listbox v-model="sortBy">
              <div class="relative">
                <ListboxButton
                  v-slot="{ open }"
                  class="relative w-44 cursor-pointer rounded-lg border border-gray-200 bg-white py-2 pr-10 pl-4 text-left text-sm focus:border-green-600 focus:outline-none"
                >
                  <span class="block truncate">{{ sortOptions[sortBy] }}</span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <i
                      class="fas fa-chevron-down text-xs text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': open }"
                    ></i>
                  </span>
                </ListboxButton>
                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="ring-opacity-5 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 ring-1 shadow-lg ring-black focus:outline-none"
                  >
                    <ListboxOption
                      v-for="(label, value) in sortOptions"
                      :key="value"
                      :value="value"
                      v-slot="{ active, selected }"
                    >
                      <li
                        :class="[
                          active
                            ? 'bg-green-50 text-green-600'
                            : 'text-gray-900',
                          'relative cursor-pointer py-2 pr-4 pl-10 select-none',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                        >
                          {{ label }}
                        </span>
                        <span
                          v-if="selected"
                          :class="[
                            active ? 'text-green-600' : 'text-green-600',
                            'absolute inset-y-0 left-0 flex items-center pl-3',
                          ]"
                        >
                          <i class="fas fa-check text-sm"></i>
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
        </div>

        <!-- Grid Layout -->
        <div
          class="grid gap-6"
          :class="{
            'sm:grid-cols-2': deviceType.isTablet,
            'lg:grid-cols-3': deviceType.isDesktop,
          }"
        >
          <TransitionGroup
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
            move-class="transition-transform duration-500"
          >
            <div
              v-for="attraction in sortedAndFilteredAttractions"
              :key="attraction.id"
              class="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:hover:shadow-xl"
              @click="handleAttractionClick(attraction)"
            >
              <!-- Card Image -->
              <div class="relative aspect-[4/3] overflow-hidden">
                <img
                  :src="attraction.image"
                  :alt="attraction.title"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                ></div>
                <span
                  class="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow-sm backdrop-blur-sm"
                >
                  {{ getCategoryLabel(attraction.category) }}
                </span>
              </div>

              <!-- Card Content -->
              <div class="p-4 lg:p-5">
                <h3
                  class="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-green-600"
                >
                  {{ attraction.title }}
                </h3>
                <p class="mt-2 line-clamp-2 text-sm text-gray-500">
                  {{ attraction.description }}
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <StarRating :rating="attraction.rating" />
                    <span class="text-sm text-gray-500">
                      {{ attraction.reviews }}条点评
                    </span>
                  </div>
                  <div
                    class="flex items-center space-x-2 text-xs text-gray-500"
                  >
                    <i class="fas fa-clock"></i>
                    <span>{{ attraction.suggestedTime }}</span>
                  </div>
                </div>
              </div>

              <!-- Hover Overlay -->
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
              >
                <button
                  class="transform rounded-full bg-white px-6 py-2 font-medium text-green-600 transition-transform duration-300 hover:scale-105"
                >
                  查看详情
                </button>
              </div>
            </div>
          </TransitionGroup>
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
            as="template"
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
                as="template"
              >
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all"
                >
                  <div class="relative">
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="搜索景点..."
                      class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-green-600 focus:outline-none"
                      @input="handleSearch"
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
import { attractions as Data, type Attraction, Banner } from "./index";

import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const router = useRouter();
const isSearchOpen = ref(false);
const searchQuery = ref("");
const attractions = ref<Attraction[]>(Data);

const getCategoryLabel = (category: string) => {
  const categoryMap: Record<string, string> = {
    natural: "自然风光",
    historical: "历史遗迹",
    cultural: "文化景点",
  };
  return categoryMap[category] || category;
};

const filteredAttractions = computed(() => {
  if (!searchQuery.value) return attractions.value;
  const query = searchQuery.value.toLowerCase();
  return attractions.value.filter(
    (attraction) =>
      attraction.title.toLowerCase().includes(query) ||
      attraction.description.toLowerCase().includes(query),
  );
});

const toggleSearchModal = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
  searchQuery.value = "";
};

const handleSearch = () => {
  // 搜索逻辑已通过 computed 属性实现
};

const handleAttractionClick = (attraction: Attraction) => {
  router.push(`/attractions/${attraction.id}`);
};

const categories = [
  { value: "all", label: "全部景点", icon: "fas fa-globe-asia" },
  { value: "natural", label: "自然风光", icon: "fas fa-mountain" },
  { value: "historical", label: "历史遗迹", icon: "fas fa-landmark" },
  { value: "cultural", label: "文化景点", icon: "fas fa-theater-masks" },
];

const selectedCategory = ref("all");
type SortOption = "rating" | "reviews" | "distance" | "newest";
const sortBy = ref<SortOption>("rating");

// 排序选项
const sortOptions: Record<SortOption, string> = {
  rating: "按评分排序",
  reviews: "按评论数排序",
  distance: "距离最近",
  newest: "最新添加",
};

// 排序和筛选逻辑
const sortedAndFilteredAttractions = computed(() => {
  let result = filteredAttractions.value;

  // 应用分类筛选
  if (selectedCategory.value !== "all") {
    result = result.filter((a) => a.category === selectedCategory.value);
  }

  // 应用排序
  return result.sort((a, b) => {
    switch (sortBy.value) {
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      case "newest":
        return b.reviews - a.reviews; // Fallback to reviews as default sorting
      default:
        return 0;
    }
  });
});

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
              "fas fa-star text-sm",
              i < (props.rating || 0) ? "text-yellow-400" : "text-gray-300",
            ],
          }),
        ),
      );
  },
});
</script>

<style scoped>
/* Header animation */
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

/* Optimize image loading effect */
header img {
  transition: transform 8s ease-out;
  will-change: transform;
}

header:hover img {
  transform: scale(1.1);
}

/* 新增卡片悬停动画 */
.group:hover {
  transform: translateY(-4px);
}

/* 优化图片加载效果 */
img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 添加卡片内容过渡效果 */
.group:hover h3 {
  color: #16a34a;
}

/* 添加滚动条样式 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #16a34a #e5e7eb;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: "#e5e7eb";
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #16a34a;
  border-radius: 3px;
}

/* 添加页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 优化响应式布局 */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

/* 添加 Listbox 相关样式 */
.listbox-button-active {
  opacity: 0.5;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
    var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
    calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:
    var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: rgb(34 197 94 / 0.5);
}

/* 优化下拉菜单动画 */
.listbox-options-enter-active {
  transition:
    opacity 0.15s ease-out,
    transform 0.15s ease-out;
}

.listbox-options-leave-active {
  transition:
    opacity 0.15s ease-in,
    transform 0.15s ease-in;
}

.listbox-options-enter-from,
.listbox-options-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.listbox-options-enter-to,
.listbox-options-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* 隐藏滚动条但保持功能 */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* 平滑滚动效果 */
.snap-x {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* 优化触摸体验 */
@media (hover: none) {
  .snap-x {
    scroll-snap-type: x mandatory;
    scroll-padding: 0 1rem;
  }
}

/* 添加渐变遮罩效果 */
@media (max-width: 1024px) {
  .filters-wrapper {
    position: relative;
  }

  .filters-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 2rem;
    background: linear-gradient(to right, transparent, rgb(255 247 237 / 0.95));
    pointer-events: none;
  }
}
</style>
