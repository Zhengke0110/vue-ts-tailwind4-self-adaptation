<template>
  <div class="min-h-screen bg-gray-50" :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }">
    <div :class="{
      'mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
        deviceType.isDesktop,
    }">
      <!-- Header Section -->
      <header class="relative h-48 w-full overflow-hidden md:h-56 lg:h-72">
        <img :src="Banner" alt="个性化推荐"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700" />
        <div class="absolute inset-0">
          <div class="absolute inset-0 backdrop-blur-[2px]"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
          <div class="absolute inset-0 bg-black/5"></div>
        </div>

        <div class="relative flex h-full flex-col px-4 py-4 md:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <button class="text-white transition-transform hover:scale-105" @click="router.back()">
              <i class="fas fa-arrow-left text-xl"></i>
            </button>
            <div class="flex items-center space-x-4">
              <button class="text-white transition-transform hover:scale-105" @click="toggleSearchModal">
                <i class="fas fa-search text-xl"></i>
              </button>
              <Menu as="div" class="relative">
                <MenuButton class="text-white">
                  <i class="fas fa-ellipsis-h text-xl"></i>
                </MenuButton>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <MenuItems
                    class="ring-opacity-5 absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 ring-1 shadow-lg ring-black focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <button class="flex w-full items-center px-4 py-2 text-sm" :class="active
                      ? 'bg-purple-50 text-purple-500'
                      : 'text-gray-700'
                      ">
                      <i class="fas fa-heart mr-3"></i>收藏
                    </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <button class="flex w-full items-center px-4 py-2 text-sm" :class="active
                      ? 'bg-purple-50 text-purple-500'
                      : 'text-gray-700'
                      ">
                      <i class="fas fa-share-alt mr-3"></i>分享
                    </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <div class="mt-auto space-y-2">
            <h1 class="text-2xl font-bold text-white drop-shadow-lg md:text-3xl lg:text-4xl">
              为您推荐
            </h1>
            <p class="text-sm text-white/90 drop-shadow md:text-base lg:w-2/3">
              探索金华独特体验，发现专属于您的精彩推荐
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="(label, category) in categoryLabel" :key="category"
                class="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                {{ label }}
              </span>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="relative px-4 py-4 md:px-6 lg:px-8 lg:py-8">
        <div :class="[
          'w-full',
          {
            'lg:grid lg:grid-cols-[300px_1fr] lg:gap-8': deviceType.isDesktop, // 增加左侧宽度
          },
        ]">
          <!-- Desktop Sidebar -->
          <aside v-if="deviceType.isDesktop" class="lg:sticky lg:top-8">
            <!-- 分类导航 -->
            <div class="rounded-xl bg-white p-6 shadow-sm">
              <h3 class="mb-4 text-lg font-semibold">推荐分类</h3>
              <div class="flex flex-col space-y-2">
                <button v-for="category in categories" :key="category.value"
                  class="flex min-w-0 items-center space-x-3 rounded-lg px-4 py-3 transition-all hover:bg-purple-50"
                  :class="selectedCategory === category.value
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600'
                    " @click="selectedCategory = category.value">
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

            <!-- 统计卡片 -->
            <div class="mt-6 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-6 text-white">
              <h4 class="mb-3 truncate font-semibold">推荐概览</h4>
              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <div class="truncate text-2xl font-bold">
                    {{ personalRecommendations.length }}
                  </div>
                  <div class="truncate text-sm text-white/80">总推荐数</div>
                </div>
                <div class="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <div class="truncate text-2xl font-bold">
                    {{ averageRating }}
                  </div>
                  <div class="truncate text-sm text-white/80">平均评分</div>
                </div>
              </div>
            </div>

            <!-- 热门标签云 -->
            <div class="mt-6 rounded-xl bg-white p-6 shadow-sm">
              <h4 class="mb-3 truncate font-semibold text-gray-900">
                热门标签
              </h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in popularTags" :key="tag.name"
                  class="max-w-[150px] truncate rounded-full px-3 py-1 text-sm transition-all duration-300"
                  :class="getTagStyle(tag.count)">
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </aside>

          <!-- Content Area -->
          <div class="flex-1">
            <!-- Mobile/Tablet Categories -->
            <div v-if="!deviceType.isDesktop" class="mb-6 overflow-x-auto">
              <div class="flex space-x-2 pb-2">
                <button v-for="category in categories" :key="category.value"
                  class="flex items-center space-x-2 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
                  :class="selectedCategory === category.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600'
                    " @click="selectedCategory = category.value">
                  <i :class="category.icon"></i>
                  <span>{{ category.label }}</span>
                </button>
              </div>
            </div>

            <!-- Grid Layout -->
            <div class="grid gap-6" :class="gridColumns">
              <TransitionGroup name="fade" appear>
                <RecommendationCard v-for="recommendation in filteredRecommendations" :key="recommendation.id"
                  :recommendation="recommendation" @click="handleRecommendationSelect(recommendation)" />
              </TransitionGroup>
            </div>
          </div>
        </div>
      </main>

      <!-- Modals -->
      <RecommendationDetailModal v-if="selectedRecommendation" :recommendation="selectedRecommendation"
        @close="selectedRecommendation = null" />

      <TransitionRoot appear :show="isSearchOpen" as="template">
        <Dialog as="div" class="relative z-50" @close="closeSearch">
          <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </TransitionChild>

          <div class="fixed inset-0">
            <div class="flex min-h-full items-start justify-center p-4">
              <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 -translate-y-4"
                enter-to="opacity-100 translate-y-0" leave="duration-200 ease-in" leave-from="opacity-100 translate-y-0"
                leave-to="opacity-0 -translate-y-4">
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div class="relative">
                    <input v-model="searchQuery" type="text" placeholder="搜索推荐..."
                      class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 focus:border-purple-500 focus:outline-none" />
                    <button v-if="searchQuery" class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                      @click="searchQuery = ''">
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
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { deviceType } from "@/utils/flexible";
import type { CategoryType, Recommendation } from "./index";
import { categoryLabel, Banner, categories } from "./index";
import RecommendationCard from "./components/RecommendationCard.vue";
import RecommendationDetailModal from "./components/RecommendationDetailModal.vue";
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
const selectedRecommendation = ref<Recommendation | null>(null);

// Compute grid columns based on device type
const gridColumns = computed(() => ({
  "grid-cols-1": deviceType.value.isMobile,
  "grid-cols-2": deviceType.value.isTablet,
  "grid-cols-3": deviceType.value.isDesktop,
}));

const toggleSearchModal = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
  searchQuery.value = "";
};

const personalRecommendations = ref<Recommendation[]>([]);

const fetchPersonalRecommendations = async () => {
  // 模拟获取个性化推荐数据
  personalRecommendations.value = [
    {
      id: "1",
      title: "东阳婺剧体验",
      description:
        "感受浙江非遗文化的魅力，近距离体验传统戏曲艺术。由专业婺剧演员为您讲解基本功、表演技巧，并提供戏服试穿和基础表演教学。",
      category: "culture",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E5%A9%BA%E5%89%A7%E8%A1%A8%E6%BC%94%E8%89%BA%E6%9C%AF/%E5%A9%BA%E5%89%A7-4.jpg",
      rating: 4.8,
      tags: ["非遗文化", "传统艺术", "互动体验", "戏曲"],
    },
    {
      id: "2",
      title: "金华火腿品鉴之旅",
      description:
        "探访百年火腿制作工坊，了解金华火腿的历史渊源和制作工艺，品尝不同年份的火腿，感受'中国火腿之都'的独特魅力。",
      category: "food",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF%E6%96%87%E5%8C%96/%E7%81%AB%E8%85%BF%E6%96%87%E5%8C%96-1.jpg",
      rating: 4.9,
      tags: ["金华火腿", "美食文化", "传统工艺", "品鉴"],
    },
    {
      id: "3",
      title: "双龙洞探险",
      description:
        "穿越神秘的地下溶洞，欣赏钟乳石奇观，体验漂流探险，感受大自然的鬼斧神工。专业导游全程陪同，确保安全刺激。",
      category: "adventure",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%8F%8C%E9%BE%99%E6%B4%9E/%E5%8F%8C%E9%BE%99%E6%B4%9E-4.jpg",
      rating: 4.7,
      tags: ["溶洞探险", "地质奇观", "漂流", "自然探索"],
    },
    {
      id: "4",
      title: "金华山徒步摄影",
      description:
        "登临金华山，探访九龙祠、寿圣寺等人文古迹，在专业摄影师指导下捕捉最美金华山景。含专业器材租赁和后期指导。",
      category: "nature",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%B0%8F%E5%86%B0%E5%B2%9B-.jpg",
      rating: 4.6,
      tags: ["户外运动", "摄影创作", "古迹", "自然风光"],
    },
    {
      id: "5",
      title: "兰溪诗路文化游",
      description:
        "沿着江南诗路，探访兰溪古城，参观胡公庙、登临诗画山，品茶听诗，感受千年文脉。包含专业文化导游讲解。",
      category: "culture",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%85%B0%E6%BA%AA%E8%AF%B8%E8%91%9B%E5%85%AB%E5%8D%A6%E6%9D%91/%E5%85%AB%E5%8D%A6%E6%9D%91-3.jpg",
      rating: 4.8,
      tags: ["人文历史", "诗词文化", "古迹游览", "茶艺"],
    },
    {
      id: "6",
      title: "义乌小商品DIY",
      description:
        "走进义乌国际商贸城，参与手工艺品制作工坊，了解小商品产业发展历史，体验创意设计和制作过程。",
      category: "culture",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E4%B9%89%E4%B9%8C%E5%B0%8F%E5%95%86%E5%93%81/%E5%95%86%E5%93%81-1.jpg",
      rating: 4.5,
      tags: ["手工艺", "创意体验", "商贸文化", "DIY"],
    },
    {
      id: "7",
      title: "横店影视体验",
      description:
        "走进'中国好莱坞'，参观秦王宫、广州街等著名影视基地，体验戏份拍摄，与专业演员互动学习表演技巧。",
      category: "culture",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E6%99%AF%E7%82%B9/%E6%A8%AA%E5%BA%97%E5%BD%B1%E8%A7%86%E5%9F%8E.png",
      rating: 4.7,
      tags: ["影视文化", "互动表演", "场景体验", "娱乐"],
    },
    {
      id: "8",
      title: "磐安养生之旅",
      description:
        "深入磐安深山，采摘野生茶叶，体验传统制茶工艺，享受森林氧吧和温泉SPA，感受天然氧吧的滋养。",
      category: "nature",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E7%A3%90%E5%AE%89/%E6%99%AF%E7%82%B9/%E7%9B%98%E9%BE%99%E6%A2%AF%E7%94%B0.png",
      rating: 4.9,
      tags: ["养生度假", "茶文化", "温泉", "自然疗养"],
    },
    {
      id: "9",
      title: "永康厨具文化游",
      description:
        "探访永康刀具博物馆，了解千年制刀工艺，参与厨师掌勺教学，体验专业厨具的魅力。含大师授课和美食品鉴。",
      category: "food",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%B9%B0/%E6%B0%B8%E5%BA%B7%E4%BA%94%E9%87%91%E5%B7%A5%E5%85%B7.png",
      rating: 4.6,
      tags: ["厨艺文化", "工艺传承", "美食制作", "技艺学习"],
    },
    {
      id: "10",
      title: "武义温泉度假",
      description:
        "享受武义百度温泉，体验不同温泉池的养生功效，参与温泉瑜伽课程，放松身心。含专业SPA护理服务。",
      category: "nature",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E4%BD%8F/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%BA%84%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%94%90%E9%A3%8E%E6%B8%A9%E6%B3%89%E5%BA%A6%E5%81%87%E6%9D%91/%E5%94%90%E9%A3%8E%E6%B8%A9%E6%B3%89-1.jpg",
      rating: 4.8,
      tags: ["温泉养生", "休闲度假", "瑜伽", "SPA"],
    },
    {
      id: "11",
      title: "浦江水果采摘",
      description:
        "走进浦江果园，亲手采摘当季水果，了解生态种植技术，参与果酒制作工艺，享受田园时光。含农家美食体验。",
      category: "food",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E6%B5%A6%E6%B1%9F/%E6%99%AF%E7%82%B9/%E7%BD%97%E6%BA%90%E6%9D%91.png",
      rating: 4.7,
      tags: ["采摘体验", "田园生活", "农家乐", "美食"],
    },
    {
      id: "12",
      title: "东阳木雕工艺",
      description:
        "在东阳木雕大师指导下，了解木雕艺术的精髓，体验基础木雕技法，制作专属作品。含木雕博物馆参观和工具使用指导。",
      category: "culture",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E4%B8%9C%E9%98%B3/%E6%99%AF%E7%82%B9/%E4%B8%AD%E5%9B%BD%E6%9C%A8%E9%9B%95%E6%96%87%E5%8C%96%E5%8D%9A%E8%A7%88%E5%9F%8E.png",
      rating: 4.9,
      tags: ["木雕艺术", "非遗传承", "手工艺", "文化体验"],
    },
  ];
};

const handleRecommendationSelect = (recommendation: Recommendation) => {
  selectedRecommendation.value = recommendation;
};

onMounted(fetchPersonalRecommendations);

// 新增状态和计算属性
const selectedCategory = ref<CategoryType>("all");

const filteredRecommendations = computed(() => {
  if (selectedCategory.value === "all") {
    return personalRecommendations.value;
  }
  return personalRecommendations.value.filter(
    (item) => item.category === selectedCategory.value,
  );
});

// 计算平均评分
const averageRating = computed(() => {
  const avg =
    personalRecommendations.value.reduce((acc, curr) => acc + curr.rating, 0) /
    personalRecommendations.value.length;
  return avg.toFixed(1);
});

// 获取分类数量
const getCategoryCount = (category: CategoryType) => {
  if (category === "all") return personalRecommendations.value.length;
  return personalRecommendations.value.filter(
    (item) => item.category === category,
  ).length;
};

// 计算热门标签
const popularTags = computed(() => {
  const tagCount = new Map<string, number>();
  personalRecommendations.value.forEach((item) => {
    item.tags.forEach((tag) => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });
  return Array.from(tagCount.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);
});

// 标签样式
const getTagStyle = (count: number) => {
  const max = Math.max(...popularTags.value.map((t) => t.count));
  const intensity = (count / max) * 100;
  return {
    "bg-purple-50 text-purple-600": intensity < 33,
    "bg-purple-100 text-purple-700": intensity >= 33 && intensity < 66,
    "bg-purple-200 text-purple-800": intensity >= 66,
  };
};
</script>

<style scoped>
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Header animations */
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

/* Header hover effects */
header img {
  transition: transform 8s ease-out;
  will-change: transform;
}

header:hover img {
  transform: scale(1.1);
}

/* Glass effect hover */
header .backdrop-blur-md {
  transition: all 0.3s ease;
}

header:hover .backdrop-blur-md {
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.15);
}

/* 添加桌面端特有的样式 */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    top: 2rem;
    height: fit-content;
    width: 300px;
    /* 确保宽度固定 */
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

  /* 统计卡片渐变动画 */
  .from-purple-500.to-indigo-600 {
    background-size: 200% 200%;
    animation: gradientShift 8s ease infinite;
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
