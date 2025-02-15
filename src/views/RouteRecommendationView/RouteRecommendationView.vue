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
            <p class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3">
              探索金华最佳旅游线路，体验自然人文之美
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['文化体验', '自然风光', '休闲度假', '特色产业']"
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
      <main class="relative px-4 py-6 md:px-6 lg:px-8 lg:py-8">
        <!-- Routes Grid -->
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
            <RouteCard
              v-for="route in routes"
              :key="route.id"
              :title="route.title"
              :image="route.coverImage"
              :description="route.description"
              :duration="route.duration"
              :difficulty="route.difficulty"
              :attractions="route.attractions"
              :highlights="route.highlights"
              class="group"
              @click="handleRouteSelect(route)"
            />
          </TransitionGroup>
        </div>
      </main>

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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { deviceType } from "@/utils/flexible";
import RouteCard from "./components/RouteCard.vue";
import RouteDetailModal from "./components/RouteDetailModal.vue";
import { Banner, type Route, routes as Data } from "./index";
const router = useRouter();

const routes = ref<Route[]>(Data);

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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
