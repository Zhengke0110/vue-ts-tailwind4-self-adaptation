<template>
  <div
    class="min-h-screen bg-orange-50"
    :class="{ 'lg:px-[var(--viewport-padding)] lg:py-6': deviceType.isDesktop }"
  >
    <!-- 桌面端容器 -->
    <div
      :class="{
        'mx-auto transform transition-all duration-500 lg:max-w-5xl lg:overflow-hidden lg:rounded-xl lg:bg-white lg:shadow-lg':
          deviceType.isDesktop,
      }"
    >
      <!-- 顶部导航 -->
      <nav
        class="relative h-64 md:h-72"
        :class="{ 'lg:h-80 lg:rounded-t-xl': deviceType.isDesktop }"
      >
        <div class="absolute inset-0">
          <img
            :src="routeData.coverImage"
            :alt="routeData.title"
            class="h-full w-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"
          ></div>
        </div>
        <div class="relative flex h-full flex-col justify-between p-4">
          <div class="flex items-center justify-between">
            <button class="text-white" @click="router.back()">
              <i class="fas fa-arrow-left text-xl"></i>
            </button>
            <div class="flex items-center space-x-4">
              <button
                class="text-white transition-transform hover:scale-110 active:scale-95"
                @click="handleShare"
              >
                <i class="fas fa-share-alt text-xl"></i>
              </button>
              <button
                class="text-white transition-transform hover:scale-110 active:scale-95"
                @click="toggleFavorite"
              >
                <i
                  class="fas fa-heart text-xl transition-colors duration-300"
                  :class="isFavorited ? 'animate-bounce text-red-500' : ''"
                ></i>
              </button>
            </div>
          </div>
          <div class="text-white">
            <h1 class="text-2xl font-bold">{{ routeData.title }}</h1>
            <p class="mt-2 text-sm text-white/80">
              {{ routeData.description }}
            </p>
            <div class="mt-4 flex items-center space-x-4">
              <div class="flex items-center space-x-1">
                <i class="fas fa-clock"></i>
                <span>{{ routeData.duration }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ routeData.distance }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <i class="fas fa-yuan-sign"></i>
                <span>{{ routeData.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- 主要内容区 - 优化移动端边距 -->
      <div class="relative z-10 p-5 md:px-6 md:py-8">
        <!-- 路线标签和亮点 - 调整移动端间距 -->
        <section
          class="mb-8 transform overflow-hidden rounded-lg bg-white p-4 shadow-sm transition duration-300 hover:shadow-md md:mb-6 md:p-6"
        >
          <!-- 标签列表 -->
          <div class="mb-6 flex flex-wrap gap-2 md:mb-4">
            <span
              v-for="(tag, index) in routeData.tags"
              :key="tag"
              class="transform rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-200 hover:shadow-sm"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              {{ tag }}
            </span>
          </div>
          <!-- 亮点列表 -->
          <div
            class="grid gap-4 md:grid-cols-2"
            :class="{ 'lg:grid-cols-3': deviceType.isDesktop }"
          >
            <div
              v-for="(highlight, index) in routeData.highlights"
              :key="index"
              class="flex transform items-start space-x-2 rounded-lg p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50"
              :class="{ 'animate-fade-in': true }"
              :style="{ animationDelay: `${index * 150}ms` }"
            >
              <i class="fas fa-check-circle mt-1 text-orange-500"></i>
              <span class="text-sm text-gray-600 md:text-base">{{
                highlight
              }}</span>
            </div>
          </div>
        </section>

        <!-- 行程概览 - 优化移动端布局 -->
        <section class="mb-8 rounded-lg bg-white p-6 shadow-sm md:mb-6 md:p-6">
          <h2 class="flex items-center text-lg font-bold text-gray-900">
            <i class="fas fa-calendar-alt mr-2 text-orange-500"></i>
            行程概览
          </h2>
          <div class="mt-6 space-y-6 md:mt-4 md:space-y-4">
            <div
              v-for="(day, index) in routeData.itinerary"
              :key="index"
              class="transform transition-all duration-300 hover:translate-x-2"
              :class="{ 'animate-fade-in-up': true }"
              :style="{ animationDelay: `${index * 200}ms` }"
            >
              <h3 class="mb-2 text-base font-medium text-gray-900">
                <div class="flex items-center">
                  <span
                    class="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-sm text-white"
                  >
                    {{ index + 1 }}
                  </span>
                  <span class="ml-2">{{ day.title }}</span>
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ day.description }}</p>
              </h3>
              <div class="space-y-6 pl-4 md:pl-8">
                <div
                  v-for="(spot, spotIndex) in day.spots"
                  :key="spotIndex"
                  class="group relative transform overflow-hidden rounded-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  :class="{
                    'md:flex md:items-start':
                      deviceType.isTablet || deviceType.isDesktop,
                  }"
                >
                  <!-- 添加景点图片 -->
                  <div
                    class="relative h-56 overflow-hidden md:h-32 md:w-48 lg:h-40 lg:w-64"
                    :class="{
                      'w-full': deviceType.isMobile,
                    }"
                  >
                    <img
                      :src="spot.image"
                      :alt="spot.name"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    ></div>
                  </div>

                  <!-- 景点信息 -->
                  <div class="flex-1 p-6 md:p-4">
                    <div class="flex items-center justify-between">
                      <h4 class="font-medium text-gray-900">{{ spot.name }}</h4>
                      <span class="text-sm text-gray-500">{{
                        spot.duration
                      }}</span>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      {{ spot.description }}
                    </p>

                    <!-- 添加更多景点信息 -->
                    <div class="mt-4 flex flex-wrap items-center gap-4 md:mt-3">
                      <span class="text-sm text-gray-500">
                        <i class="fas fa-clock mr-1"></i>
                        {{ spot.openTime }}
                      </span>
                      <span class="text-sm text-gray-500">
                        <i class="fas fa-ticket-alt mr-1"></i>
                        {{ spot.ticket }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 景点详情 - 优化移动端卡片布局 -->
        <div class="mt-8 md:mt-6">
          <h2
            class="mb-6 text-xl font-bold text-gray-900 md:mb-4 md:text-lg lg:text-2xl"
          >
            景点详情
          </h2>
          <div
            class="grid gap-6 md:grid-cols-2"
            :class="{ 'lg:grid-cols-3': deviceType.isDesktop }"
          >
            <div
              v-for="(spot, index) in routeData.spots"
              :key="spot.id"
              class="group transform overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              :class="{ 'animate-fade-in-up': true }"
              :style="{ animationDelay: `${index * 150}ms` }"
            >
              <!-- 景点图片部分 - 调整移动端高度 -->
              <div class="relative h-64 overflow-hidden md:h-56 lg:h-64">
                <img
                  :src="spot.image"
                  :alt="spot.name"
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div class="absolute right-3 bottom-3 left-3 text-white">
                    <p class="font-medium">营业时间：{{ spot.openTime }}</p>
                    <p class="mt-1 text-sm">门票：{{ spot.ticket }}</p>
                    <p class="mt-1 text-sm">{{ spot.location }}</p>
                  </div>
                </div>
              </div>
              <!-- 景点信息部分 -->
              <div class="p-6 md:p-4">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ spot.name }}
                </h3>
                <p class="mt-2 line-clamp-2 text-sm text-gray-500">
                  {{ spot.description }}
                </p>
                <!-- 推荐美食（如果有） -->
                <div v-if="spot.recommendFood" class="mt-3">
                  <p class="text-sm font-medium text-gray-700">推荐美食：</p>
                  <div class="mt-1 flex flex-wrap gap-2">
                    <span
                      v-for="food in spot.recommendFood"
                      :key="food"
                      class="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-600"
                    >
                      {{ food }}
                    </span>
                  </div>
                </div>
                <!-- 评分和操作按钮 -->
                <div class="mt-3 flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <div class="flex text-yellow-400">
                      <i
                        v-for="i in 5"
                        :key="i"
                        class="fas fa-star text-sm"
                        :class="
                          i <= spot.rating ? 'text-yellow-400' : 'text-gray-300'
                        "
                      ></i>
                    </div>
                    <span class="text-sm text-gray-500"
                      >{{ spot.reviews }}条点评</span
                    >
                  </div>
                  <button
                    class="rounded-full bg-orange-500 px-4 py-1 text-sm text-white transition hover:bg-orange-600"
                    @click="router.push(`/attractions/${spot.id}`)"
                  >
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 交通建议 - 优化移动端间距 -->
        <section class="my-8 space-y-6 md:my-6 md:space-y-4">
          <h2 class="flex items-center text-lg font-bold text-gray-900">
            <i class="fas fa-route mr-2 text-orange-500"></i>
            交通建议
          </h2>
          <div
            v-for="(transport, index) in routeData.transportation"
            :key="transport.type"
            class="group transform overflow-hidden rounded-lg bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-4"
            :class="{ 'animate-fade-in-left': true }"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <!-- 交通方式标题 -->
            <div class="flex items-center">
              <i
                :class="[
                  transport.icon,
                  'mr-2 text-2xl text-orange-500 transition-transform group-hover:scale-110',
                ]"
              ></i>
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">{{ transport.type }}</h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ transport.description }}
                </p>
              </div>
            </div>

            <!-- 交通详情面板 -->
            <div
              v-if="transport.detail"
              class="mt-5 space-y-3 rounded-lg bg-orange-50/50 p-5"
            >
              <!-- 公交线路信息 -->
              <div v-if="transport.detail.lines?.length" class="space-y-2">
                <p class="font-medium text-gray-700">可乘线路：</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="line in transport.detail.lines"
                    :key="line"
                    class="rounded-full bg-white px-3 py-1 text-sm text-gray-600 shadow-sm"
                  >
                    {{ line }}
                  </span>
                </div>
              </div>

              <!-- 停车场信息 -->
              <div
                v-if="transport.detail.parkingLots"
                class="space-y-3 divide-y divide-gray-100"
              >
                <p class="font-medium text-gray-700">停车场信息：</p>
                <div
                  v-for="lot in transport.detail.parkingLots"
                  :key="lot.name"
                  class="pt-2"
                >
                  <p class="font-medium text-gray-800">{{ lot.name }}</p>
                  <div class="mt-1 space-y-1 text-sm text-gray-600">
                    <p>地址：{{ lot.address }}</p>
                    <p>车位数：{{ lot.spaces }}个</p>
                    <p>收费：{{ lot.rate }}</p>
                  </div>
                </div>
              </div>

              <!-- 其他交通信息 -->
              <div class="space-y-2 text-sm text-gray-600">
                <p v-if="transport.detail.stations">
                  站点：{{ transport.detail.stations }}
                </p>
                <p v-if="transport.detail.frequency">
                  发车频率：{{ transport.detail.frequency }}
                </p>
                <p v-if="transport.detail.operatingHours">
                  运营时间：{{ transport.detail.operatingHours }}
                </p>
                <p v-if="transport.detail.startPrice">
                  起步价：{{ transport.detail.startPrice }}
                </p>
                <p v-if="transport.detail.hotline">
                  服务热线：{{ transport.detail.hotline }}
                </p>
              </div>

              <!-- 推荐路线 -->
              <div v-if="transport.detail.routes?.length" class="space-y-2">
                <p class="font-medium text-gray-700">推荐路线：</p>
                <ul
                  class="list-inside list-disc space-y-1 text-sm text-gray-600"
                >
                  <li v-for="route in transport.detail.routes" :key="route">
                    {{ route }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- 住宿推荐 - 优化移动端布局 -->
        <section class="mb-8 md:mb-6">
          <h2 class="mb-6 text-xl font-bold text-gray-900 md:mb-4 md:text-lg">
            <i class="fas fa-bed mr-2 text-orange-500"></i>
            住宿推荐
          </h2>
          <div
            class="grid gap-5 md:grid-cols-2 md:gap-4"
            :class="{ 'lg:grid-cols-3': deviceType.isDesktop }"
          >
            <div
              v-for="(hotel, index) in routeData.accommodation.recommended"
              :key="hotel.name"
              class="group transform overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              :class="{ 'animate-fade-in-right': true }"
              :style="{ animationDelay: `${index * 150}ms` }"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ hotel.name }}
                </h3>
                <span class="text-lg font-medium text-orange-500">{{
                  hotel.price
                }}</span>
              </div>
              <div class="mt-2 space-y-2">
                <p class="text-sm text-gray-600">类型：{{ hotel.type }}</p>
                <p class="text-sm text-gray-600">地址：{{ hotel.address }}</p>
                <div class="flex items-center space-x-2">
                  <div class="flex text-yellow-400">
                    <i
                      v-for="i in 5"
                      :key="i"
                      class="fas fa-star text-sm"
                      :class="
                        i <= hotel.rating ? 'text-yellow-400' : 'text-gray-300'
                      "
                    ></i>
                  </div>
                  <span class="text-sm text-gray-500"
                    >{{ hotel.rating }}分</span
                  >
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="feature in hotel.features"
                    :key="feature"
                    class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 实用贴士 - 优化移动端间距 -->
        <section class="mb-8 rounded-lg bg-white p-6 shadow-sm md:mb-6 md:p-4">
          <h2 class="mb-4 flex items-center text-lg font-bold text-gray-900">
            <i class="fas fa-lightbulb mr-2 text-orange-500"></i>
            实用贴士
          </h2>
          <ul class="space-y-4 md:space-y-3">
            <li
              v-for="(tip, index) in routeData.tips"
              :key="index"
              class="flex transform items-start space-x-2 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 hover:bg-orange-50"
              :class="{ 'animate-fade-in-up': true }"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <i class="fas fa-info-circle mt-1 text-orange-500"></i>
              <span class="text-sm text-gray-600">{{ tip }}</span>
            </li>
          </ul>
        </section>

        <!-- 评论区域 - 增加移动端边距 -->
        <section class="mb-8 md:mb-6">
          <CommentSection :item-id="routeData.id" />
        </section>
      </div>

      <!-- 加载状态 -->
      <TransitionRoot :show="isLoading" as="template">
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
        >
          <div class="rounded-lg bg-white p-6 shadow-xl">
            <div
              class="h-10 w-10 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"
            ></div>
            <p class="mt-4 animate-pulse text-gray-600">加载中...</p>
          </div>
        </div>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import CommentSection from "./components/CommentSection.vue";
import { mockRouteData } from "./index";
import type { TravelRoute } from "./index";
import { TransitionRoot } from "@headlessui/vue";
import { deviceType } from "@/utils/flexible";

const router = useRouter();
const currentRoute = useRoute();

// 修改变量名避免冲突
const routeData = ref<TravelRoute>(mockRouteData);

// 收藏功能
const isFavorited = ref(false);

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value;
  // TODO: 实现收藏逻辑
};

// 分享功能
const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: routeData.value.title,
        text: routeData.value.description,
        url: window.location.href,
      });
    } catch (error) {
      console.error("分享失败:", error);
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("链接已复制到剪贴板");
    } catch (error) {
      console.error("复制失败:", error);
    }
  }
};

// 加载状态
const isLoading = ref(false);

// 修改获取数据的方法，添加加载状态
const fetchRouteData = async () => {
  isLoading.value = true;
  try {
    // 模拟API请求
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // TODO: 实际的数据获取逻辑
  } catch (error) {
    console.error("获取数据失败:", error);
  } finally {
    isLoading.value = false;
  }
};

// 获取路线详情数据
onMounted(() => {
  // 从行程中提取所有景点
  routeData.value.spots = routeData.value.itinerary.reduce(
    (acc, day) => [...acc, ...day.spots],
    [] as typeof routeData.value.spots,
  );

  fetchRouteData();
  // 使用 currentRoute 替代 route
  console.log("Route ID:", currentRoute.params.id);
  // TODO: 根据 currentRoute.params.id 获取路线详情数据并更新 routeData
});
</script>

<style scoped>
/* 添加自定义动画类 */
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out forwards;
}

/* 添加图片过渡效果 */
.group:hover img {
  transform: scale(1.1);
}

/* 添加渐变遮罩过渡效果 */
.group:hover .from-black\/60 {
  opacity: 1;
}

/* 优化移动端触摸反馈 */
@media (max-width: 768px) {
  .group {
    -webkit-tap-highlight-color: transparent;
  }

  .group:active {
    transform: scale(0.98);
  }
}
</style>
