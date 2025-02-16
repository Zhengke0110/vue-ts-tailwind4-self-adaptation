<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 页面过渡动画包装器 -->
    <Transition
      appear
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
    >
      <div class="container mx-auto px-4 py-8">
        <!-- 页面标题 -->
        <div class="relative mb-12 text-center">
          <h1 class="text-4xl font-bold text-gray-900">金华旅行定制</h1>
          <div class="mt-2 text-gray-600">专属于您的行程规划</div>
          <div
            class="absolute -inset-x-1 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          ></div>
        </div>

        <!-- 表单部分 -->
        <div class="mx-auto max-w-2xl">
          <div class="rounded-xl bg-white p-6 ring-1 shadow-lg ring-black/5">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <!-- 基本信息 -->
              <div class="space-y-4">
                <h2
                  class="flex items-center text-xl font-semibold text-gray-900"
                >
                  <span
                    class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600"
                    >1</span
                  >
                  基本信息
                </h2>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div class="space-y-2">
                    <label class="text-sm font-medium text-gray-700"
                      >出行天数</label
                    >
                    <select
                      v-model="formData.days"
                      class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option v-for="i in 5" :key="i" :value="i">
                        {{ i }}天
                      </option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium text-gray-700"
                      >出行人数</label
                    >
                    <input
                      type="number"
                      v-model="formData.people"
                      min="1"
                      class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <!-- 预算范围 -->
              <div class="space-y-4">
                <h2
                  class="flex items-center text-xl font-semibold text-gray-900"
                >
                  <span
                    class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600"
                    >2</span
                  >
                  预算范围
                </h2>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">最低: ¥500</span>
                    <span class="text-sm font-medium text-blue-600"
                      >¥{{ formData.budget }}</span
                    >
                    <span class="text-sm text-gray-500">最高: ¥10000</span>
                  </div>
                  <input
                    type="range"
                    v-model.number="formData.budget"
                    min="500"
                    max="10000"
                    step="500"
                    class="range-slider w-full"
                  />
                </div>
              </div>

              <!-- 兴趣偏好 -->
              <div class="space-y-4">
                <h2
                  class="flex items-center text-xl font-semibold text-gray-900"
                >
                  <span
                    class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600"
                    >3</span
                  >
                  兴趣偏好
                </h2>
                <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <label
                    v-for="interest in interests"
                    :key="interest.value"
                    class="flex cursor-pointer items-center rounded-lg border border-gray-200 p-3 hover:border-blue-500"
                  >
                    <input
                      type="checkbox"
                      v-model="formData.selectedInterests"
                      :value="interest.value"
                      class="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span class="text-sm text-gray-700">{{
                      interest.label
                    }}</span>
                  </label>
                </div>
              </div>

              <!-- 特殊要求 -->
              <div class="space-y-4">
                <h2
                  class="flex items-center text-xl font-semibold text-gray-900"
                >
                  <span
                    class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600"
                    >4</span
                  >
                  特殊要求
                </h2>
                <textarea
                  v-model="formData.specialRequirements"
                  rows="3"
                  class="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="请输入您的特殊要求（选填）"
                ></textarea>
              </div>

              <!-- 错误提示 -->
              <div v-if="formErrors.length" class="rounded-md bg-red-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <div
                      v-for="error in formErrors"
                      :key="error"
                      class="text-sm text-red-700"
                    >
                      {{ error }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- 提交按钮 -->
              <button
                type="submit"
                :disabled="isLoading"
                class="btn-submit group relative w-full"
              >
                <span class="relative z-10 flex items-center justify-center">
                  <template v-if="isLoading">
                    <svg class="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                        fill="none"
                      />
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    生成中...
                  </template>
                  <template v-else>
                    <span class="flex items-center">
                      生成定制方案
                      <svg
                        class="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </template>
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- 推荐行程展示 -->
        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="transform translate-y-8 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
        >
          <div v-if="showRecommendation" class="mx-auto mt-12 max-w-4xl">
            <div
              class="overflow-hidden rounded-xl bg-white ring-1 shadow-lg ring-black/5"
            >
              <!-- 行程总览卡片 -->
              <div
                class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white"
              >
                <div class="flex items-center justify-between">
                  <h2 class="text-2xl font-bold">为您推荐的行程</h2>
                  <div class="flex space-x-3">
                    <button
                      @click="saveItinerary"
                      class="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/30"
                    >
                      保存行程
                    </button>
                    <button
                      @click="shareItinerary"
                      class="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/30"
                    >
                      分享
                    </button>
                  </div>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div class="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div class="text-sm opacity-80">总天数</div>
                    <div class="mt-1 text-2xl font-bold">
                      {{ formData.days }}天
                    </div>
                  </div>
                  <div class="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div class="text-sm opacity-80">总预算</div>
                    <div class="mt-1 text-2xl font-bold">
                      {{ formatCurrency(getTotalBudget()) }}
                    </div>
                  </div>
                  <div class="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div class="text-sm opacity-80">人均费用</div>
                    <div class="mt-1 text-2xl font-bold">
                      {{ formatCurrency(getTotalBudget() / formData.people) }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- 每日行程卡片 -->
              <div class="divide-y divide-gray-100">
                <div
                  v-for="(day, index) in recommendedItinerary"
                  :key="index"
                  class="p-6"
                >
                  <div class="mb-4 flex items-center">
                    <span
                      class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600"
                    >
                      {{ index + 1 }}
                    </span>
                    <h3 class="text-lg font-semibold">
                      第 {{ index + 1 }} 天行程
                    </h3>
                  </div>
                  <div class="space-y-4">
                    <div
                      v-for="(item, itemIndex) in day"
                      :key="itemIndex"
                      class="group relative rounded-lg border border-gray-200 p-4 hover:border-blue-200 hover:bg-blue-50"
                    >
                      <div class="flex items-start space-x-4">
                        <div
                          class="flex h-8 w-20 items-center justify-center rounded bg-gray-100 text-sm font-medium text-gray-600"
                        >
                          {{ item.time }}
                        </div>
                        <div class="flex-1">
                          <h4 class="font-medium text-gray-900">
                            {{ item.activity }}
                          </h4>
                          <div
                            v-if="getAttractionDetails(item.activity)"
                            class="mt-2"
                          >
                            <p class="text-sm text-gray-600">
                              {{
                                getAttractionDetails(item.activity)?.description
                              }}
                            </p>
                            <div class="mt-2 flex flex-wrap gap-2">
                              <span
                                class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                              >
                                建议游玩
                                {{
                                  getAttractionDetails(item.activity)?.duration
                                }}小时
                              </span>
                              <span
                                class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                              >
                                费用
                                {{
                                  formatCurrency(
                                    getAttractionDetails(item.activity)?.cost ||
                                      0,
                                  )
                                }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 温馨提示 -->
              <div class="border-t border-gray-100 bg-gray-50 p-6">
                <h4 class="mb-3 font-medium text-gray-900">温馨提示</h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-center">
                    <svg
                      class="mr-2 h-4 w-4 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                    建议提前预定酒店和景点门票
                  </li>
                  <li class="flex items-center">
                    <svg
                      class="mr-2 h-4 w-4 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                    请注意查看天气预报，合理安排室内外行程
                  </li>
                  <li class="flex items-center">
                    <svg
                      class="mr-2 h-4 w-4 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                    建议携带舒适的步行鞋，部分景点需要步行
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- 骨架屏加载状态 -->
    <div
      v-if="isLoading"
      class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div class="rounded-lg bg-white p-6 shadow-xl">
        <div class="flex items-center space-x-4">
          <div
            class="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"
          ></div>
          <span class="text-lg font-medium">正在生成您的专属行程...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { attractions, restaurants, budgetPlans } from "./mockData";

const interests = [
  { label: "历史古迹", value: "history" },
  { label: "自然风光", value: "nature" },
  { label: "美食探索", value: "food" },
  { label: "文化体验", value: "culture" },
  { label: "购物娱乐", value: "shopping" },
  { label: "休闲度假", value: "leisure" },
];

const formData = reactive({
  days: 1,
  people: 1,
  budget: 2000,
  selectedInterests: [] as string[],
  specialRequirements: "",
});

const showRecommendation = ref(false);
const recommendedItinerary = ref([
  [
    { time: "09:00", activity: "游览金华古城墙" },
    { time: "11:00", activity: "参观八咏楼" },
    { time: "12:30", activity: "品尝金华火腿美食" },
    { time: "14:30", activity: "游览双龙洞景区" },
    { time: "17:00", activity: "逛金华夜市" },
  ],
]);

// 添加预算等级计算
const budgetLevel = computed(() => {
  if (formData.budget <= 2000) return "low";
  if (formData.budget <= 5000) return "medium";
  return "high";
});

// 优化生成行程的函数
const generateItinerary = () => {
  const result = [];
  const daysCount = Number(formData.days);
  const level = budgetLevel.value;
  const selectedTypes = formData.selectedInterests;
  const usedAttractions = new Set(); // 用于追踪已使用的景点

  for (let day = 0; day < daysCount; day++) {
    const dayPlan = [];
    let currentBudget = 0;
    const dayBudget = budgetPlans[level].perDay;

    // 筛选符合条件且未使用的景点
    const availableAttractions = attractions.filter(
      (attr) =>
        attr.type.some((t) => selectedTypes.includes(t)) &&
        attr.cost + currentBudget <= dayBudget &&
        !usedAttractions.has(attr.id),
    );

    // 早上活动
    const morningAttr = availableAttractions.find((a) =>
      a.bestTimeSlot.includes("morning"),
    );
    if (morningAttr) {
      dayPlan.push({
        time: "09:00",
        activity: morningAttr.name,
        type: "attraction",
      });
      usedAttractions.add(morningAttr.id);
      currentBudget += morningAttr.cost;
    }

    // 午餐
    const lunch = restaurants[Math.floor(Math.random() * restaurants.length)];
    if (lunch && currentBudget + lunch.cost <= dayBudget) {
      dayPlan.push({
        time: "12:00",
        activity: `午餐 - ${lunch.name}`,
        type: "restaurant",
      });
      currentBudget += lunch.cost;
    }

    // 下午活动
    const remainingAttractions = availableAttractions.filter(
      (a) => !usedAttractions.has(a.id) && a.bestTimeSlot.includes("afternoon"),
    );
    const afternoonAttr = remainingAttractions[0];
    if (afternoonAttr && currentBudget + afternoonAttr.cost <= dayBudget) {
      dayPlan.push({
        time: "14:30",
        activity: afternoonAttr.name,
        type: "attraction",
      });
      usedAttractions.add(afternoonAttr.id);
      currentBudget += afternoonAttr.cost;
    }

    // 晚上活动
    if (
      (selectedTypes.includes("food") || selectedTypes.includes("leisure")) &&
      currentBudget + 100 <= dayBudget
    ) {
      dayPlan.push({
        time: "18:00",
        activity: "金华夜市美食之旅",
        type: "leisure",
      });
    }

    result.push(dayPlan);
  }

  return result;
};

// 表单验证错误
const formErrors = ref<string[]>([]);
const isLoading = ref(false);

// 格式化货币
const formatCurrency = (amount: number) => {
  return `¥${amount.toLocaleString()}`;
};

// 获取景点详情
const getAttractionDetails = (name: string) => {
  return attractions.find(
    (a) => a.name === name.replace("游览", "").replace("参观", ""),
  );
};

// 计算总预算
const getTotalBudget = () => {
  let total = 0;
  recommendedItinerary.value.forEach((day) => {
    day.forEach((item) => {
      const attraction = getAttractionDetails(item.activity);
      if (attraction) {
        total += attraction.cost;
      }
    });
  });
  return total;
};

// 表单验证
const validateForm = () => {
  formErrors.value = [];

  if (formData.days < 1) {
    formErrors.value.push("请选择有效的出行天数");
  }

  if (formData.people < 1) {
    formErrors.value.push("请输入有效的出行人数");
  }

  if (formData.selectedInterests.length === 0) {
    formErrors.value.push("请至少选择一个兴趣偏好");
  }

  return formErrors.value.length === 0;
};

// 保存行程
const saveItinerary = () => {
  // TODO: 实现保存功能
  alert("行程已保存");
};

// 分享行程
const shareItinerary = () => {
  // TODO: 实现分享功能
  const shareText = `我在Miss.Hui为您定制了${formData.days}天的金华旅行行程，快来看看吧！`;
  if (navigator.share) {
    navigator.share({
      title: "金华旅行定制行程",
      text: shareText,
      url: window.location.href,
    });
  } else {
    alert("已复制分享链接到剪贴板");
    navigator.clipboard.writeText(window.location.href);
  }
};

// 提交处理
const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isLoading.value = true;
  try {
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1500));
    recommendedItinerary.value = generateItinerary();
    showRecommendation.value = true;
  } catch (error) {
    formErrors.value.push("生成行程失败，请重试");
  } finally {
    isLoading.value = false;
  }
};
</script>
<style scoped>
.range-slider {
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e5e7eb;
  -webkit-appearance: none;
}

.range-slider::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  appearance: none;
  border-radius: 50%;
  background-color: #2563eb;
  transition: all 0.15s ease-in-out;
  -webkit-appearance: none;
}

.range-slider::-webkit-slider-thumb:hover {
  height: 1.25rem;
  width: 1.25rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.btn-submit {
  border-radius: 0.5rem;
  background-color: #2563eb;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #ffffff;
  transition: all 0.15s ease-in-out;
}

.btn-submit:hover {
  background-color: #1d4ed8;
}

.btn-submit:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.btn-submit:disabled {
  background-color: #9ca3af;
}

/* 自定义滑块样式 */
input[type="range"] {
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e5e7eb;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
  appearance: none;
  border-radius: 50%;
  background-color: #2563eb;
  transition: all 0.15s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb:hover {
  height: 1.25rem;
  width: 1.25rem;
}

/* 添加页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}

/* 添加卡片悬浮效果 */
.card-hover {
  transition: transform 0.3s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-0.25rem);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 添加按钮点击效果 */
.btn-active:active {
  transform: scale(0.95);
}

/* 添加加载动画 */
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 响应式布局调整 */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}

/* 滚动条美化 */
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  border-radius: 50%;
  background-color: #f3f4f6;
}

::-webkit-scrollbar-thumb {
  border-radius: 50%;
  background-color: #d1d5db;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #9ca3af;
}
</style>
