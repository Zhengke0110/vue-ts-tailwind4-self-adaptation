<template>
  <div
    class="min-h-screen bg-orange-50"
    :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }"
  >
    <div
      :class="{
        'mx-auto lg:grid lg:max-w-7xl lg:grid-cols-[280px_1fr] lg:gap-8 lg:px-0':
          deviceType.isDesktop,
        'overflow-hidden rounded-none bg-white': !deviceType.isDesktop,
      }"
    >
      <!-- 桌面端侧边栏 -->
      <aside
        v-if="deviceType.isDesktop"
        class="sticky top-8 h-fit rounded-2xl bg-white p-6 shadow-xl"
      >
        <div class="space-y-6">
          <!-- 筛选标题 -->
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">路线筛选</h3>
            <button
              v-if="isFiltered"
              class="text-sm text-orange-600 hover:text-orange-700"
              @click="resetFilters"
            >
              重置筛选
            </button>
          </div>

          <!-- 难度筛选 -->
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-gray-700">难度级别</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="level in difficultyLevels"
                :key="level.value"
                class="rounded-full px-4 py-1.5 text-sm transition-all"
                :class="[
                  selectedDifficulty === level.value
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-50 text-gray-600 hover:bg-orange-100',
                ]"
                @click="selectedDifficulty = level.value"
              >
                {{ level.label }}
              </button>
            </div>
          </div>

          <!-- 时长筛选 -->
          <div class="space-y-3">
            <h4 class="text-sm font-medium text-gray-700">建议时长</h4>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="duration in durations"
                :key="duration.value"
                class="rounded-full px-4 py-1.5 text-sm transition-all"
                :class="[
                  selectedDuration === duration.value
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-50 text-gray-600 hover:bg-orange-100',
                ]"
                @click="selectedDuration = duration.value"
              >
                {{ duration.label }}
              </button>
            </div>
          </div>

          <!-- 路线统计 -->
          <div class="rounded-xl bg-orange-50 p-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">符合条件路线</span>
              <span class="text-xl font-semibold text-orange-600">
                {{ filteredRoutes.length }}
              </span>
            </div>
            <div class="mt-2 text-xs text-gray-500">
              共包含 {{ getTotalAttractions(filteredRoutes) }} 个景点
            </div>
          </div>
        </div>
      </aside>

      <!-- 主内容区 -->
      <div
        :class="{
          'rounded-2xl bg-white shadow-xl': deviceType.isDesktop,
        }"
      >
        <!-- Header Section -->
        <header class="relative h-48 w-full overflow-hidden md:h-56 lg:h-72">
          <img
            :src="Banner"
            alt="金华旅游路线"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
          />

          <!-- Blur Overlay -->
          <div class="absolute inset-0">
            <div class="absolute inset-0 backdrop-blur-[2px]"></div>
            <div
              class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"
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
                <button class="text-white transition-transform hover:scale-105">
                  <i class="fas fa-share-alt text-xl"></i>
                </button>
              </div>
            </div>

            <!-- Title and Description -->
            <div class="mt-auto space-y-2">
              <h1
                class="text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl"
              >
                金华精选旅游路线
              </h1>
              <p
                class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3"
              >
                探索金华最佳旅游线路，体验自然人文之美
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in [
                    '文化体验',
                    '自然风光',
                    '休闲度假',
                    '特色产业',
                  ]"
                  :key="tag"
                  class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </header>

        <!-- 移动端/平板端筛选器 -->
        <div
          v-if="!deviceType.isDesktop"
          class="scrollbar-hide flex gap-2 overflow-x-auto px-4 py-4"
        >
          <button
            v-for="level in difficultyLevels"
            :key="level.value"
            class="flex-shrink-0 rounded-full px-4 py-1.5 text-sm"
            :class="[
              selectedDifficulty === level.value
                ? 'bg-orange-600 text-white'
                : 'bg-orange-50 text-gray-600',
            ]"
            @click="selectedDifficulty = level.value"
          >
            {{ level.label }}
          </button>
        </div>

        <!-- Main Content -->
        <main class="relative space-y-6 p-4 md:p-6 lg:p-8">
          <!-- 桌面端标题和排序 -->
          <div
            v-if="deviceType.isDesktop"
            class="flex items-center justify-between"
          >
            <h2 class="text-xl font-semibold text-gray-900">推荐路线</h2>
            <div class="flex items-center gap-4">
              <select
                v-model="sortBy"
                class="rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-orange-600 focus:outline-none"
              >
                <option value="recommended">推荐排序</option>
                <option value="duration">按时长</option>
                <option value="difficulty">按难度</option>
              </select>
            </div>
          </div>

          <!-- Routes Grid with Masonry Layout for Desktop -->
          <div
            class="grid gap-6"
            :class="{
              'sm:grid-cols-2': deviceType.isTablet,
              'lg:grid-cols-2 lg:gap-8': deviceType.isDesktop,
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
              <RouteCard
                v-for="route in filteredRoutes"
                :key="route.id"
                v-bind="{ ...route, image: route.coverImage }"
                class="group"
                @click="handleRouteSelect(route)"
              />
            </TransitionGroup>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredRoutes.length === 0"
            class="flex flex-col items-center justify-center py-12"
          >
            <img
              :src="Empty"
              alt="暂无数据"
              class="mb-4 h-32 w-32 opacity-75"
            />
            <p class="text-gray-500">暂无符合条件的路线</p>
          </div>
        </main>
      </div>

      <!-- Route Detail Modal -->
      <RouteDetailModal
        v-if="selectedRoute"
        :route="selectedRoute"
        @close="selectedRoute = null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// 仅保留必要的导入
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { deviceType } from "@/utils/flexible";
import RouteCard from "./components/RouteCard.vue";
import RouteDetailModal from "./components/RouteDetailModal.vue";
import { Banner, Empty, type Route, routes as Data } from "./index";

const router = useRouter();
const routes = ref<Route[]>(Data);

// 筛选相关
const selectedDifficulty = ref("all");
const selectedDuration = ref("all");
const sortBy = ref("recommended");

// 筛选选项配置
const difficultyLevels = [
  { value: "all", label: "全部难度" },
  { value: "easy", label: "轻松" },
  { value: "moderate", label: "适中" },
  { value: "challenging", label: "挑战" },
];

const durations = [
  { value: "all", label: "全部时长" },
  { value: "half", label: "半天" },
  { value: "one", label: "1天" },
  { value: "two", label: "2天" },
  { value: "more", label: "2天以上" },
];

// 计算属性
const isFiltered = computed(
  () => selectedDifficulty.value !== "all" || selectedDuration.value !== "all",
);

const filteredRoutes = computed(() => {
  let result = [...routes.value];

  if (selectedDifficulty.value !== "all") {
    result = result.filter(
      (route) => route.difficulty === selectedDifficulty.value,
    );
  }

  if (selectedDuration.value !== "all") {
    result = result.filter((route) => {
      const duration = route.duration;
      switch (selectedDuration.value) {
        case "half":
          return duration.includes("半天");
        case "one":
          return duration.includes("1天");
        case "two":
          return duration.includes("2天");
        case "more":
          return (
            duration.includes("3天") ||
            parseInt(duration) > 2 ||
            duration.includes("以上")
          );
        default:
          return true;
      }
    });
  }

  if (sortBy.value !== "recommended") {
    result.sort((a, b) => {
      switch (sortBy.value) {
        case "duration":
          return getDurationValue(a.duration) - getDurationValue(b.duration);
        case "difficulty":
          return (
            getDifficultyValue(a.difficulty) - getDifficultyValue(b.difficulty)
          );
        default:
          return 0;
      }
    });
  }

  return result;
});

// 辅助函数
const getDurationValue = (duration: string): number => {
  if (duration.includes("半天")) return 0.5;
  if (duration.includes("1天")) return 1;
  if (duration.includes("2天")) return 2;
  return 3;
};

const getDifficultyValue = (difficulty: Route["difficulty"]): number => {
  const values = { easy: 1, moderate: 2, challenging: 3 };
  return values[difficulty];
};

const getTotalAttractions = (routes: Route[]): number => {
  return routes.reduce((acc, route) => acc + route.attractions.length, 0);
};

const resetFilters = () => {
  selectedDifficulty.value = "all";
  selectedDuration.value = "all";
  sortBy.value = "recommended";
};

const selectedRoute = ref<Route | null>(null);
const handleRouteSelect = (route: Route) => {
  selectedRoute.value = route;
};
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

/* Card hover effects */
.group {
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: #ffffff;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  -o-transition: all 300ms;
  transition: all 300ms;
}

.group:hover {
  -webkit-transform: translateY(-0.25rem);
  -moz-transform: translateY(-0.25rem);
  -ms-transform: translateY(-0.25rem);
  -o-transform: translateY(-0.25rem);
  transform: translateY(-0.25rem);
  -webkit-box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  -moz-box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 1024px) {
    -webkit-box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px;
  }
}

/* Page transition effects */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Responsive grid optimization */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* 优化卡片悬停效果 */
  .group {
    transform-origin: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .group:hover {
    transform: translateY(-0.5rem) scale(1.02);
  }

  /* 添加滚动条样式 */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #f97316 transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #f97316;
    border-radius: 3px;
  }
}

/* 优化动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 添加滚动渐变遮罩 */
.scroll-mask {
  position: relative;
}

.scroll-mask::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 2rem;
  background: linear-gradient(to right, transparent, rgb(255 247 237));
  pointer-events: none;
}
</style>
