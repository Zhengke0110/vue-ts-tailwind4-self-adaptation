<template>
  <div class="min-h-screen bg-orange-50">
    <!-- Header Section -->
    <header
      class="relative h-[200px] w-full overflow-hidden md:h-[250px] lg:h-[300px]"
    >
      <img
        :src="HomeBanner"
        alt="Sunset cityscape"
        class="h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
      >
        <div class="container mx-auto px-4 py-4 md:py-6">
          <div class="flex items-center justify-between">
            <button class="text-white" @click="handleBack">
              <i class="fas fa-chevron-left text-xl"></i>
            </button>
            <div class="flex items-center gap-4">
              <!-- Share Menu -->
              <Menu as="div" class="relative">
                <MenuButton
                  class="rounded-full p-1 text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                >
                  <i class="fas fa-share-alt text-xl"></i>
                </MenuButton>
                <TransitionRoot
                  enter="transition duration-200 ease-out"
                  enter-from="transform scale-95 opacity-0"
                  enter-to="transform scale-100 opacity-100"
                  leave="transition duration-150 ease-in"
                  leave-from="transform scale-100 opacity-100"
                  leave-to="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="ring-opacity-5 absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 ring-1 shadow-lg ring-black focus:outline-none"
                  >
                    <MenuItem
                      v-for="option in shareOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <button
                        class="flex w-full items-center px-4 py-2 text-sm"
                        :class="
                          active
                            ? 'bg-orange-50 text-orange-500'
                            : 'text-gray-700'
                        "
                      >
                        <i :class="[option.icon, 'mr-3 text-lg']"></i>
                        {{ option.name }}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </TransitionRoot>
              </Menu>

              <!-- More Menu -->
              <Menu as="div" class="relative">
                <MenuButton
                  class="rounded-full p-1 text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                >
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
                    <MenuItem
                      v-for="option in moreOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <button
                        class="flex w-full items-center px-4 py-2 text-sm"
                        :class="
                          active
                            ? 'bg-orange-50 text-orange-500'
                            : 'text-gray-700'
                        "
                      >
                        <i :class="[option.icon, 'mr-3 text-lg']"></i>
                        {{ option.name }}
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <h1
            class="animate-fade-in mt-4 text-2xl font-bold text-white md:mt-6 md:text-3xl lg:mt-8 lg:text-4xl"
          >
            金华
          </h1>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-10 container mx-auto -mt-6 px-4">
      <!-- Feature Grid -->
      <div
        class="animate-slide-up mb-4 rounded-xl bg-white p-4 shadow-lg md:mb-6 md:p-6"
      >
        <div
          class="grid grid-cols-4 gap-2 md:grid-cols-6 md:gap-4 lg:grid-cols-8"
        >
          <FeatureButton
            v-for="feature in features"
            :key="feature.id"
            v-bind="feature"
          />
        </div>
      </div>

      <!-- Route Recommendations -->
      <section class="animate-slide-up mb-4 delay-100 md:mb-6">
        <div class="mb-3 flex items-center justify-between md:mb-4">
          <h2 class="text-base font-semibold md:text-lg">路线推荐</h2>
          <button class="text-xs text-gray-500 md:text-sm">更多 ></button>
        </div>
        <div
          class="hide-scrollbar flex gap-3 overflow-x-auto pb-2 md:gap-4"
          :class="{
            'lg:grid lg:grid-cols-3': deviceType.isDesktop,
          }"
        >
          <RouteCard
            v-for="route in routes"
            :key="route.id"
            v-bind="route"
            @click="handleRouteClick(route)"
          />
        </div>
      </section>

      <!-- Route Detail Dialog -->
      <TransitionRoot appear :show="isRouteDetailOpen" as="template">
        <Dialog as="div" class="relative z-50" @close="closeRouteDetail">
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
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    {{ selectedRoute?.title }}
                  </DialogTitle>

                  <div class="mt-4">
                    <img
                      :src="selectedRoute?.image"
                      :alt="selectedRoute?.title"
                      class="h-48 w-full rounded-lg object-cover"
                    />
                  </div>

                  <div class="mt-4">
                    <p class="text-sm text-gray-500">
                      {{ selectedRoute?.description }}
                    </p>
                  </div>

                  <div class="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      @click="isRouteDetailOpen = false"
                    >
                      关闭
                    </button>
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                      查看详情
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Location Categories -->
      <section class="animate-slide-up mb-4 delay-200 md:mb-6">
        <TabGroup>
          <TabList
            class="hide-scrollbar mb-3 flex gap-2 overflow-x-auto md:mb-4"
          >
            <Tab
              v-for="tab in locationTabs"
              :key="tab.id"
              v-slot="{ selected }"
            >
              <button
                class="rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors focus:ring-2 focus:ring-orange-500 focus:outline-none md:text-base"
                :class="
                  selected
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                "
              >
                {{ tab.name }}
              </button>
            </Tab>
          </TabList>

          <TabPanels>
            <TransitionGroup
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-4"
            >
              <TabPanel
                v-for="tab in locationTabs"
                :key="tab.id"
                class="space-y-3 focus:outline-none md:space-y-4"
              >
                <div
                  class="grid gap-3 md:gap-4"
                  :class="{
                    'md:grid-cols-1': deviceType.isTablet,
                    'lg:grid-cols-3': deviceType.isDesktop,
                  }"
                >
                  <!-- 平板端横向滚动容器 -->
                  <div
                    v-if="deviceType.isTablet"
                    class="hide-scrollbar flex gap-4 overflow-x-auto pb-2"
                  >
                    <LocationCard
                      v-for="location in tab.locations"
                      :key="location.id"
                      v-bind="location"
                      class="md:w-[280px] md:flex-shrink-0"
                    />
                  </div>

                  <!-- 移动端和桌面端正常显示 -->
                  <template v-else>
                    <LocationCard
                      v-for="location in tab.locations"
                      :key="location.id"
                      v-bind="location"
                    />
                  </template>
                </div>
              </TabPanel>
            </TransitionGroup>
          </TabPanels>
        </TabGroup>
      </section>

      <!-- Popular Recommendations -->
      <section class="animate-slide-up mb-4 delay-300 md:mb-6">
        <h2 class="mb-3 text-base font-semibold md:mb-4 md:text-lg">
          人气推荐
        </h2>
        <div
          class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
        >
          <PopularCard
            v-for="item in popularItems"
            :key="item.id"
            v-bind="item"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { TransitionGroup } from "vue";
import FeatureButton from "./components/FeatureButton.vue";
import RouteCard from "./components/RouteCard.vue";
import LocationCard from "./components/LocationCard.vue";
import PopularCard from "./components/PopularCard.vue";

import { HomeBanner } from "./index";
import {
  routeRecommendations,
  features,
  locationTabs,
  popularItems,
} from "./index";
import type { Route } from "./index";

import { deviceType } from "@/utils/flexible";

const routes = ref<Route[]>(routeRecommendations);

const isRouteDetailOpen = ref(false);
const selectedRoute = ref<Route | null>(null);

const handleRouteClick = (route: Route) => {
  selectedRoute.value = route;
  isRouteDetailOpen.value = true;
};

const handleBack = () => {
  window.history.back();
};

const closeRouteDetail = () => {
  isRouteDetailOpen.value = false;
};

const shareOptions = [
  { name: "微信", icon: "fab fa-weixin" },
  { name: "朋友圈", icon: "fas fa-users" },
  { name: "复制链接", icon: "fas fa-link" },
];

const moreOptions = [
  { name: "收藏", icon: "fas fa-star" },
  { name: "举报", icon: "fas fa-flag" },
  { name: "设置", icon: "fas fa-cog" },
];
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

/* 添加新的动画类 */
.tab-enter-active,
.tab-leave-active {
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.tab-enter-to,
.tab-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
