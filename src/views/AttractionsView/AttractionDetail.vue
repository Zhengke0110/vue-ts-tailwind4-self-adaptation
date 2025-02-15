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
      <!-- Loading Skeleton -->
      <div v-if="loading" class="space-y-4">
        <!-- Top Carousel Skeleton -->
        <div class="skeleton-carousel animate-pulse">
          <div class="h-[400px] w-full bg-gray-200"></div>
          <div
            class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2"
          >
            <div
              v-for="n in 3"
              :key="n"
              class="h-3 w-3 rounded-full bg-gray-300"
            ></div>
          </div>
        </div>

        <!-- Basic Information Skeleton -->
        <div class="skeleton-basic-info space-y-4 p-4">
          <div class="mb-2 h-8 w-3/4 bg-gray-200"></div>
          <div class="h-4 w-1/2 bg-gray-200"></div>
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 w-2/3 bg-gray-200"></div>
              <div class="h-3 w-1/2 bg-gray-200"></div>
            </div>
          </div>
        </div>

        <!-- Ticket/Details Skeleton -->
        <div class="skeleton-ticket-info space-y-4 p-4">
          <div class="mb-2 h-6 w-1/2 bg-gray-200"></div>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="n in 4"
              :key="n"
              class="h-20 rounded-lg bg-gray-200"
            ></div>
          </div>
        </div>

        <!-- Introduction/Guide Skeleton -->
        <div class="skeleton-introduction space-y-4 p-4">
          <div class="mb-2 h-6 w-1/2 bg-gray-200"></div>
          <div class="space-y-3">
            <div class="h-4 w-full bg-gray-200"></div>
            <div class="h-4 w-5/6 bg-gray-200"></div>
            <div class="h-4 w-3/4 bg-gray-200"></div>
            <div class="mt-4 h-40 w-full rounded-lg bg-gray-200"></div>
          </div>
        </div>

        <!-- Comments Skeleton -->
        <div class="skeleton-comments space-y-4 p-4">
          <div class="mb-2 h-6 w-1/2 bg-gray-200"></div>
          <div v-for="n in 3" :key="n" class="mb-4 flex space-x-4">
            <div class="h-12 w-12 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-3">
              <div class="h-4 w-2/3 bg-gray-200"></div>
              <div class="h-4 w-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      <template v-else>
        <!-- 图片轮播区域 -->
        <div
          class="relative h-64 md:h-80 lg:h-[480px]"
          :class="{ 'lg:rounded-t-2xl': deviceType.isDesktop }"
        >
          <!-- 轮播图片容器 -->
          <div class="relative h-full overflow-hidden">
            <div
              class="flex h-full transition-transform duration-500"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(image, index) in attractionData.image || [
                  attractionData.image,
                ]"
                :key="index"
                class="h-full w-full flex-shrink-0"
              >
                <img
                  :src="image"
                  :alt="`${attractionData.title} - 图片${index + 1}`"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>

            <!-- 图片指示器 -->
            <div
              class="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2"
            >
              <button
                v-for="(_, index) in attractionData.image || [1]"
                :key="index"
                class="h-1.5 w-6 rounded-full transition-colors duration-300"
                :class="currentSlide === index ? 'bg-white' : 'bg-white/40'"
                @click="currentSlide = index"
              ></button>
            </div>
          </div>

          <!-- 顶部导航栏 -->
          <div
            class="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 md:p-6"
          >
            <button
              class="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/30"
              @click="router.back()"
            >
              <i class="fas fa-arrow-left"></i>
            </button>
            <div class="flex space-x-3">
              <button
                class="rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/30"
                @click="handleShare"
              >
                <i class="fas fa-share-alt"></i>
              </button>
              <button
                class="rounded-full bg-black/20 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-black/30"
                :class="isFavorited ? 'text-red-500' : 'text-white'"
                @click="toggleFavorite"
              >
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>

          <!-- 图片渐变遮罩 -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          ></div>

          <!-- 底部信息 -->
          <div class="absolute right-0 bottom-0 left-0 p-4 md:p-6">
            <h1 class="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {{ attractionData.title }}
            </h1>
            <div class="mt-2 flex flex-wrap items-center gap-4 text-white/90">
              <span class="flex items-center">
                <i class="fas fa-star mr-1 text-yellow-400"></i>
                {{ attractionData.rating }}
              </span>
              <span class="flex items-center">
                <i class="fas fa-comment mr-1"></i>
                {{ attractionData.reviews }}条点评
              </span>
              <span class="flex items-center">
                <i class="fas fa-map-marker-alt mr-1"></i>
                {{ attractionData.location }}
              </span>
            </div>
          </div>
        </div>

        <!-- 主要内容区 -->
        <div class="p-4 md:p-6 lg:p-8">
          <!-- 景点标签和亮点 -->
          <section
            class="mb-8 overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md md:p-6"
          >
            <!-- 分类标签 -->
            <div class="mb-6 flex flex-wrap gap-2">
              <span
                class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600"
              >
                {{ getCategoryLabel(attractionData.category) }}
              </span>
              <span
                v-for="highlight in attractionData.detailedInfo.highlights.slice(
                  0,
                  3,
                )"
                :key="highlight"
                class="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600"
              >
                {{ highlight }}
              </span>
            </div>

            <!-- 景点描述 -->
            <p class="text-gray-600">{{ attractionData.description }}</p>

            <!-- 必看景点列表 -->
            <div class="mt-6">
              <h3 class="mb-4 text-lg font-medium text-gray-900">必看景点</h3>
              <div
                class="grid gap-4"
                :class="{
                  'md:grid-cols-2': deviceType.isTablet,
                  'lg:grid-cols-3': deviceType.isDesktop,
                }"
              >
                <div
                  v-for="spot in attractionData.detailedInfo.mustSee"
                  :key="spot"
                  class="flex items-center gap-3 rounded-lg bg-green-50/50 p-3"
                >
                  <i class="fas fa-check-circle text-green-500"></i>
                  <span class="text-gray-700">{{ spot }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- 通用信息卡片组件 -->
          <div
            class="grid gap-6"
            :class="{
              'md:grid-cols-2': deviceType.isTablet || deviceType.isDesktop,
            }"
          >
            <!-- 门票信息 -->
            <InfoCard title="门票信息" icon="ticket-alt">
              <template v-if="typeof attractionData.price === 'string'">
                <p class="text-lg font-medium text-green-600">
                  {{ attractionData.price }}
                </p>
              </template>
              <template v-else>
                <div class="space-y-2">
                  <div
                    v-for="(price, type) in attractionData.price"
                    :key="type"
                    class="flex justify-between"
                  >
                    <span class="text-gray-600">{{ getPriceLabel(type) }}</span>
                    <span class="font-medium text-green-600">{{ price }}</span>
                  </div>
                </div>
              </template>
            </InfoCard>

            <!-- 开放时间 -->
            <InfoCard title="开放时间" icon="clock">
              <p class="text-gray-600">{{ attractionData.openTime }}</p>
              <p class="mt-2 text-gray-600">
                建议游玩: {{ attractionData.suggestedTime }}
              </p>
            </InfoCard>

            <!-- 交通信息 -->
            <InfoCard
              title="交通指南"
              icon="bus"
              :class="{
                'md:col-span-2': deviceType.isTablet || deviceType.isDesktop,
              }"
            >
              <div class="space-y-4">
                <div
                  v-for="(info, type) in attractionData.transportation"
                  :key="type"
                >
                  <h4 class="mb-1 font-medium text-gray-900">
                    {{ getTransportLabel(type) }}
                  </h4>
                  <p class="text-gray-600">{{ info }}</p>
                </div>
              </div>
            </InfoCard>
          </div>

          <!-- 设施信息 -->
          <section class="mt-8">
            <h2 class="mb-4 text-lg font-bold text-gray-900">配套设施</h2>
            <div
              class="grid gap-4"
              :class="{
                'md:grid-cols-2': deviceType.isTablet,
                'lg:grid-cols-4': deviceType.isDesktop,
              }"
            >
              <FacilityCard
                v-for="(info, type) in attractionData.detailedInfo.facilities"
                :key="type"
                :type="type"
                :description="info"
              />
            </div>
          </section>

          <!-- 游玩贴士 -->
          <section class="mt-8">
            <h2 class="mb-4 text-lg font-bold text-gray-900">游玩贴士</h2>
            <div class="rounded-xl bg-orange-50/50 p-4">
              <p class="whitespace-pre-line text-gray-600">
                {{ attractionData.detailedInfo.tips }}
              </p>
            </div>
          </section>

          <!-- 最佳游玩时间 -->
          <section class="mt-8">
            <h2 class="mb-4 text-lg font-bold text-gray-900">最佳游玩时间</h2>
            <div
              class="overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6"
            >
              <div class="flex items-start space-x-4">
                <i class="fas fa-calendar-alt mt-1 text-xl text-green-500"></i>
                <div class="flex-1">
                  <p class="whitespace-pre-line text-gray-700">
                    {{ attractionData.detailedInfo.bestTime }}
                  </p>
                  <!-- 季节标签 -->
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span
                      v-for="season in ['春', '夏', '秋', '冬']"
                      :key="season"
                      class="flex items-center rounded-full bg-white px-4 py-1.5 text-sm text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {{ season }}季
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 联系方式 -->
          <section class="mt-8">
            <h2 class="mb-4 text-lg font-bold text-gray-900">联系方式</h2>
            <div
              class="grid gap-4"
              :class="{
                'md:grid-cols-2': deviceType.isTablet || deviceType.isDesktop,
              }"
            >
              <!-- 电话 -->
              <a
                :href="`tel:${attractionData.contact.phone}`"
                class="group flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="rounded-full bg-green-100 p-3 transition-colors group-hover:bg-green-200"
                  >
                    <i class="fas fa-phone text-green-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">电话咨询</p>
                    <p class="font-medium text-gray-900">
                      {{ attractionData.contact.phone }}
                    </p>
                  </div>
                </div>
                <i
                  class="fas fa-chevron-right text-gray-400 transition-transform group-hover:translate-x-1"
                ></i>
              </a>

              <!-- 官网 -->
              <a
                :href="attractionData.contact.website"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="rounded-full bg-green-100 p-3 transition-colors group-hover:bg-green-200"
                  >
                    <i class="fas fa-globe text-green-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">官方网站</p>
                    <p class="font-medium text-gray-900">访问网站</p>
                  </div>
                </div>
                <i
                  class="fas fa-external-link-alt text-gray-400 transition-transform group-hover:translate-x-1"
                ></i>
              </a>
            </div>
          </section>

          <!-- 推荐行程 -->
          <section class="mt-8">
            <h2 class="mb-4 text-lg font-bold text-gray-900">推荐行程</h2>
            <div
              class="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm"
            >
              <div class="absolute top-0 left-0 h-full w-1 bg-green-100"></div>

              <!-- 时间线 -->
              <div class="space-y-6">
                <div
                  v-for="(time, index) in ['上午', '中午', '下午']"
                  :key="time"
                  class="animate-fade-in-up relative flex opacity-0"
                  :style="{ animationDelay: `${index * 200}ms` }"
                >
                  <div
                    class="absolute -left-6 flex h-6 w-6 items-center justify-center"
                  >
                    <div class="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-medium text-gray-900">{{ time }}</h3>
                    <p class="mt-1 text-gray-600">
                      {{ getTimelineContent(index) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 紧急联系 -->
          <section class="mt-8 rounded-xl bg-orange-50 p-6">
            <div class="flex items-start space-x-4">
              <div class="rounded-full bg-orange-100 p-3">
                <i class="fas fa-exclamation-circle text-orange-500"></i>
              </div>
              <div>
                <h3 class="font-medium text-gray-900">紧急联系</h3>
                <p class="mt-1 text-sm text-gray-600">
                  如遇紧急情况，请拨打以下电话：
                </p>
                <div class="mt-3 space-y-2">
                  <p class="flex items-center text-sm text-gray-600">
                    <span class="mr-2 inline-block w-20">景区救援：</span>
                    <a href="tel:120" class="text-orange-500">120</a>
                  </p>
                  <p class="flex items-center text-sm text-gray-600">
                    <span class="mr-2 inline-block w-20">游客服务：</span>
                    <a
                      :href="`tel:${attractionData.contact.phone}`"
                      class="text-orange-500"
                    >
                      {{ attractionData.contact.phone }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineComponent, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import { type Attraction, attraction } from "./index";
import { deviceType } from "@/utils/flexible";

const router = useRouter();
const route = useRoute();

// 轮播相关
const currentSlide = ref(0);
const autoSlideInterval = ref<number | null>(null);

// 开启自动轮播
const startAutoSlide = () => {
  autoSlideInterval.value = window.setInterval(() => {
    currentSlide.value =
      (currentSlide.value + 1) % attractionData.value.image.length;
  }, 3000);
};

// 停止自动轮播
const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value);
    autoSlideInterval.value = null;
  }
};

// 模拟数据
const attractionData = ref<Attraction>(attraction);

// 收藏相关
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
        title: attractionData.value.title,
        text: attractionData.value.description,
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

const loading = ref(true);

onMounted(() => {
  // 启动自动轮播
  startAutoSlide();
  // TODO: 根据路由参数获取景点数据
  console.log("Attraction ID:", route.params.id);

  // Simulate data loading
  setTimeout(() => {
    loading.value = false;
    // Fetch actual content here
  }, 1500);
});

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoSlide();
});

// 新增组件和工具函数
const InfoCard = defineComponent({
  props: {
    title: String,
    icon: String,
  },
  setup(props, { slots }) {
    return () =>
      h(
        "div",
        {
          class:
            "rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md md:p-6",
        },
        [
          h(
            "h3",
            {
              class: "mb-4 flex items-center text-lg font-medium text-gray-900",
            },
            [
              h("i", {
                class: ["fas", `fa-${props.icon}`, "mr-2", "text-green-500"],
              }),
              props.title,
            ],
          ),
          slots.default?.(),
        ],
      );
  },
});

const FacilityCard = defineComponent({
  props: {
    type: String,
    description: String,
  },
  setup(props) {
    const iconMap: Record<string, string> = {
      dining: "utensils",
      parking: "parking",
      restroom: "restroom",
      rest: "couch",
    };

    const labelMap: Record<string, string> = {
      dining: "餐饮设施",
      parking: "停车设施",
      restroom: "卫生间",
      rest: "休息区",
    };

    return () =>
      h(
        "div",
        {
          class:
            "rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md",
        },
        [
          h(
            "div",
            {
              class: "mb-3 flex items-center",
            },
            [
              h("i", {
                class: [
                  "fas",
                  `fa-${iconMap[props.type || ""]}`,
                  "text-green-500",
                ],
              }),
              h(
                "span",
                {
                  class: "ml-2 font-medium text-gray-900",
                },
                labelMap[props.type || ""],
              ),
            ],
          ),
          h(
            "p",
            {
              class: "text-sm text-gray-600",
            },
            props.description,
          ),
        ],
      );
  },
});

// 工具函数
const getPriceLabel = (type: string) => {
  const labels: Record<string, string> = {
    adult: "成人票",
    child: "儿童票",
    senior: "老年票",
    cableway: "缆车票",
  };
  return labels[type] || type;
};

const getTransportLabel = (type: string) => {
  const labels: Record<string, string> = {
    bus: "公交线路",
    drive: "自驾路线",
    recommended: "推荐方式",
  };
  return labels[type] || type;
};

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    natural: "自然景观",
    cultural: "文化古迹",
    leisure: "休闲娱乐",
    religious: "宗教场所",
  };
  return labels[category] || category;
};

// 添加推荐行程内容生成函数
const getTimelineContent = (index: number) => {
  const contents = {
    0:
      "游览主要景点，参观" +
      attractionData.value.detailedInfo.mustSee.slice(0, 2).join("、"),
    1: "在景区餐厅用餐，短暂休息",
    2:
      "继续游览" +
      attractionData.value.detailedInfo.mustSee.slice(2, 4).join("、"),
  };
  return contents[index as keyof typeof contents];
};
</script>

<style scoped>
/* 可以添加自定义样式 */
.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* 添加页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* 添加卡片悬停效果 */
.hover-card {
  transition: all 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-4px);
}

/* 优化图片加载效果 */
img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 添加渐变背景效果 */
.gradient-bg {
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
}

/* 优化响应式间距 */
@media (min-width: 768px) {
  .content-wrapper {
    max-width: 720px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .content-wrapper {
    max-width: 960px;
  }
}

/* 添加滚动条样式 */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #22c55e #e5e7eb;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #e5e7eb;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #22c55e;
  border-radius: 3px;
}

/* 添加渐入动画 */
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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* 添加时间线动画 */
.timeline-dot {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

/* 添加悬停效果 */
.contact-card {
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

/* 季节标签悬停效果 */
.season-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
