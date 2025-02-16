<template>
  <div
    class="min-h-screen bg-slate-50"
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
          alt="金华住宿"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
        />

        <!-- Overlay -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 backdrop-blur-[2px]"></div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
          ></div>
          <div class="absolute inset-0 bg-black/5"></div>
        </div>

        <!-- Content -->
        <div class="relative flex h-full flex-col px-4 py-4 md:px-6 lg:px-8">
          <!-- Navigation -->
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
                          active ? 'bg-blue-50 text-blue-500' : 'text-gray-700',
                        ]"
                      >
                        <i class="fas fa-heart mr-3"></i>收藏
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        class="flex w-full items-center px-4 py-2 text-sm"
                        :class="[
                          active ? 'bg-blue-50 text-blue-500' : 'text-gray-700',
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
              金华住宿
            </h1>
            <p class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3">
              探索金华优质住宿，体验舒适温馨的入住体验
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['特色民宿', '豪华酒店', '度假村', '主题住宿']"
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
        <div
          :class="[
            'w-full',
            {
              'lg:grid lg:grid-cols-[280px_1fr] lg:gap-8': deviceType.isDesktop,
            },
          ]"
        >
          <!-- Desktop Sidebar -->
          <aside v-if="deviceType.isDesktop" class="lg:sticky lg:top-8">
            <div class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="mb-4 text-lg font-semibold">住宿分类</h3>
              <div class="flex flex-col space-y-2">
                <button
                  v-for="category in categories"
                  :key="category.value"
                  class="flex items-center space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-blue-50"
                  :class="
                    selectedCategory === category.value
                      ? 'bg-blue-50 text-blue-500'
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

          <!-- Content Area -->
          <div class="flex-1">
            <!-- Mobile/Tablet Categories -->
            <div v-if="!deviceType.isDesktop" class="mb-6 md:mb-8">
              <TabGroup>
                <TabList class="flex space-x-2 overflow-x-auto pb-2">
                  <Tab
                    v-for="category in categories"
                    :key="category.value"
                    as="template"
                    v-slot="{ selected }"
                  >
                    <button
                      class="flex items-center space-x-2 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors md:text-base"
                      :class="
                        selected
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-600'
                      "
                    >
                      <i :class="category.icon" class="mr-2"></i>
                      <span>{{ category.label }}</span>
                    </button>
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel
                    v-for="category in categories"
                    :key="category.value"
                    class="mt-4"
                  >
                    <HotelGrid
                      :hotels="filteredHotels(category.value)"
                      :device-type="deviceType"
                    />
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>

            <!-- Desktop Hotel Grid -->
            <div v-else>
              <HotelGrid
                :hotels="filteredHotels(selectedCategory)"
                :device-type="deviceType"
              />
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
                      placeholder="搜索住宿..."
                      class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { deviceType } from "@/utils/flexible";
import type { Hotel } from "./index";
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
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
import HotelGrid from "./components/HotelGrid.vue";
import { hotels as Data } from "./index";

const router = useRouter();
const isSearchOpen = ref(false);
const searchQuery = ref("");
const selectedCategory = ref("all");

const categories = [
  { value: "all", label: "全部", icon: "fas fa-th-large" },
  { value: "resort", label: "度假村", icon: "fas fa-umbrella-beach" },
  { value: "homestay", label: "民宿", icon: "fas fa-home" },
  { value: "hotel", label: "酒店", icon: "fas fa-building" },
];

const hotels = ref(Data);

const toggleSearchModal = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
  searchQuery.value = "";
};

const filteredHotels = (category: string) => {
  if (category === "all") {
    return hotels.value;
  }
  return hotels.value.filter((hotel: Hotel) => hotel.category === category);
};

const getCategoryCount = (category: string) => {
  if (category === "all") return hotels.value.length;
  return hotels.value.filter((hotel) => hotel.category === category).length;
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

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}

/* 新增动画样式 */
.v-move {
  transition: transform 0.5s ease;
}

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

/* 确保网格布局中的绝对定位元素正确工作 */
.contents > * {
  grid-column: auto;
}

/* 优化滚动行为 */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    align-self: start;
    top: 2rem;
  }
}

/* 添加header相关动画 */
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
