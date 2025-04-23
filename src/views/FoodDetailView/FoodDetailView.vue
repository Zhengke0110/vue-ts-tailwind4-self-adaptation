<template>
    <div class="min-h-screen bg-orange-50" :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }">
        <!-- 加载状态 -->
        <div v-if="loading" class="flex h-screen w-full items-center justify-center">
            <div class="text-center">
                <div
                    class="mb-4 inline-block h-10 w-10 animate-spin rounded-full border-4 border-orange-300 border-t-orange-500">
                </div>
                <p class="text-gray-600">正在加载美食信息...</p>
            </div>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="flex h-screen w-full flex-col items-center justify-center p-4">
            <i class="fas fa-exclamation-circle mb-4 text-4xl text-red-500"></i>
            <h2 class="mb-2 text-xl font-bold text-gray-800">数据加载失败</h2>
            <p class="mb-6 text-center text-gray-600">{{ error }}</p>
            <button class="rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
                @click="router.back()">
                返回上一页
            </button>
        </div>

        <!-- 食品详情内容 -->
        <div v-else-if="food" :class="{
            'mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
                deviceType.isDesktop,
        }">
            <!-- 返回按钮 -->
            <button
                class="fixed left-4 top-4 z-50 rounded-full bg-white/80 p-2 text-gray-700 shadow-lg backdrop-blur-md transition-transform hover:scale-105 lg:absolute"
                @click="router.back()">
                <i class="fas fa-arrow-left"></i>
            </button>

            <!-- 顶部图片 -->
            <div class="relative bg-gray-100">
                <img :src="food.image" :alt="food.title" class="h-64 w-full object-cover md:h-80 lg:h-96" />

                <!-- 图片上的渐变遮罩 -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                <!-- 悬浮在图片上的食品信息 -->
                <div class="absolute bottom-0 left-0 w-full p-4 text-white md:p-6 lg:p-8">
                    <span
                        class="mb-2 inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                        {{ getCategoryLabel(food.category) }}
                    </span>
                    <h1 class="mb-2 text-2xl font-bold drop-shadow-lg md:text-3xl lg:text-4xl">
                        {{ food.title }}
                    </h1>

                    <div class="flex flex-wrap items-center gap-4">
                        <div class="flex items-center">
                            <StarRating :rating="food.rating" />
                            <span class="ml-2 text-sm">{{ food.rating }}/5</span>
                        </div>
                        <span class="flex items-center text-sm">
                            <i class="fas fa-comment mr-2"></i>
                            {{ food.reviews }}条点评
                        </span>
                    </div>
                </div>

                <!-- 收藏按钮 -->
                <button
                    class="absolute right-4 top-4 rounded-full bg-white/80 p-3 text-gray-700 shadow-lg backdrop-blur-md transition-transform hover:scale-105 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    @click.prevent="toggleFavorite">
                    <i class="fas fa-heart" :class="{ 'text-red-500': isFavorited }"></i>
                </button>
            </div>

            <!-- 主要内容区域 -->
            <div class="p-4 md:p-6 lg:p-8">
                <!-- 桌面端两列布局 -->
                <div class="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-8">
                    <!-- 左侧主要内容 -->
                    <div>
                        <!-- 详情部分 -->
                        <section class="mb-8 animate-fade-in">
                            <h2 class="mb-4 text-xl font-bold text-gray-800">美食描述</h2>
                            <p class="text-base leading-relaxed text-gray-600">
                                {{ food.description }}
                            </p>
                        </section>

                        <!-- 相关推荐(移动端) -->
                        <section v-if="!deviceType.isDesktop && relatedFoods.length > 0"
                            class="mb-8 animate-fade-in-delay-1">
                            <h2 class="mb-4 text-xl font-bold text-gray-800">相关推荐</h2>
                            <div class="space-y-4">
                                <div v-for="relatedFood in relatedFoods" :key="relatedFood.id"
                                    class="group flex cursor-pointer gap-3 rounded-lg p-2 transition-all hover:bg-orange-50"
                                    @click="navigateToFood(relatedFood.id)">
                                    <img :src="relatedFood.image" :alt="relatedFood.title"
                                        class="h-16 w-20 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div class="flex-1">
                                        <h4
                                            class="mb-1 font-medium text-gray-800 transition-colors group-hover:text-orange-500">
                                            {{ relatedFood.title }}
                                        </h4>
                                        <p class="line-clamp-2 text-xs text-gray-500">
                                            {{ relatedFood.description }}
                                        </p>
                                        <div class="mt-1 flex items-center text-xs">
                                            <i class="fas fa-star mr-1 text-yellow-400"></i>
                                            <span>{{ relatedFood.rating }}</span>
                                            <span class="mx-1 text-gray-400">•</span>
                                            <span class="text-gray-500">{{ relatedFood.reviews }} 条点评</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- 评论部分 -->
                        <section class="mb-8 animate-fade-in-delay-2">
                            <div class="mb-4 flex items-center justify-between">
                                <h2 class="text-xl font-bold text-gray-800">顾客评价</h2>
                                <button
                                    class="rounded-lg bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-200"
                                    @click="handleReviewClick">
                                    写评价
                                </button>
                            </div>

                            <!-- 评分统计 -->
                            <div class="mb-4 flex items-center rounded-lg bg-gray-50 p-4">
                                <div class="flex flex-col items-center pr-6 border-r border-gray-200">
                                    <div class="text-3xl font-bold text-orange-500">{{ food.rating }}</div>
                                    <StarRating :rating="food.rating" />
                                </div>
                                <div class="ml-6">
                                    <div class="text-sm text-gray-500">基于 {{ food.reviews }} 条评价</div>
                                </div>
                            </div>

                            <!-- 没有评论时的提示 -->
                            <div
                                class="flex flex-col items-center justify-center rounded-xl bg-gray-50 py-10 text-center">
                                <i class="fas fa-comment-slash mb-3 text-3xl text-gray-300"></i>
                                <p class="text-gray-500">暂无详细评价，快来添加第一条吧！</p>
                            </div>
                        </section>
                    </div>

                    <!-- 右侧侧边栏 -->
                    <div v-if="deviceType.isDesktop">
                        <!-- 相关推荐(桌面端) -->
                        <div v-if="relatedFoods.length > 0"
                            class="rounded-xl bg-white p-5 shadow-sm animate-fade-in-delay-1">
                            <h3 class="mb-4 text-lg font-medium text-gray-800">相关推荐</h3>
                            <div class="space-y-4">
                                <div v-for="relatedFood in relatedFoods" :key="relatedFood.id"
                                    class="group flex cursor-pointer gap-3 rounded-lg p-2 transition-all hover:bg-orange-50"
                                    @click="navigateToFood(relatedFood.id)">
                                    <img :src="relatedFood.image" :alt="relatedFood.title"
                                        class="h-16 w-20 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div class="flex-1">
                                        <h4
                                            class="mb-1 font-medium text-gray-800 transition-colors group-hover:text-orange-500">
                                            {{ relatedFood.title }}
                                        </h4>
                                        <p class="line-clamp-2 text-xs text-gray-500">
                                            {{ relatedFood.description }}
                                        </p>
                                        <div class="mt-1 flex items-center text-xs">
                                            <i class="fas fa-star mr-1 text-yellow-400"></i>
                                            <span>{{ relatedFood.rating }}</span>
                                            <span class="mx-1 text-gray-400">•</span>
                                            <span class="text-gray-500">{{ relatedFood.reviews }} 条点评</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 底部操作按钮（仅移动端显示） -->
            <div v-if="!deviceType.isDesktop"
                class="fixed bottom-0 left-0 z-10 flex w-full justify-end border-t border-gray-200 bg-white/90 px-4 py-3 backdrop-blur-md">
                <button
                    class="rounded-lg bg-orange-500 px-6 py-2 font-medium text-white transition-all hover:bg-orange-600 active:scale-95"
                    @click="handleActionClick">
                    了解更多
                </button>
            </div>
        </div>

        <!-- 找不到食品数据 -->
        <div v-else class="flex h-screen w-full flex-col items-center justify-center p-4">
            <i class="fas fa-search mb-4 text-4xl text-gray-400"></i>
            <h2 class="mb-2 text-xl font-bold text-gray-800">未找到相关美食</h2>
            <p class="mb-6 text-center text-gray-600">抱歉，无法找到ID为"{{ foodId }}"的美食信息</p>
            <button class="rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
                @click="router.push('/foods')">
                浏览全部美食
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineComponent, h } from "vue";
import { useRouter, useRoute } from "vue-router";
import { deviceType } from "@/utils/flexible";
import { getFoodById, getRelatedFoods } from "./index";
import type { Food } from "../FoodView/index";

const router = useRouter();
const route = useRoute();

// 状态
const food = ref<Food | null>(null);
const relatedFoods = ref<Food[]>([]);
const isFavorited = ref(false);
const loading = ref(true);
const error = ref<string | null>(null);
const foodId = ref(route.params.id as string);

// 在组件挂载时加载食品数据
onMounted(async () => {
    try {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500));

        // 获取食品数据
        const id = route.params.id as string;
        foodId.value = id;
        const foodData = getFoodById(id);

        if (!foodData) {
            // 食品不存在，设置为null
            food.value = null;
            loading.value = false;
            return;
        }

        // 设置食品数据
        food.value = foodData;

        // 加载相关推荐
        relatedFoods.value = getRelatedFoods(foodData, 3);

        // 检查是否收藏
        checkFavorite();

    } catch (err) {
        error.value = "加载美食数据失败，请稍后重试";
        console.error("Error loading food data:", err);
    } finally {
        loading.value = false;
    }
});

// 分类标签转换
const getCategoryLabel = (category: string) => {
    const map: Record<string, string> = {
        local: "本地特色",
        snack: "小吃",
        restaurant: "餐厅",
    };
    return map[category] || category;
};

// 检查是否已收藏
const checkFavorite = () => {
    // 这里可以实现从本地存储或API检查收藏状态的逻辑
    // 示例: 从localStorage检查
    const favorites = JSON.parse(localStorage.getItem('favoriteFoods') || '[]');
    if (food.value) {
        isFavorited.value = favorites.includes(food.value.id);
    }
};

// 切换收藏状态
const toggleFavorite = () => {
    if (!food.value) return;

    isFavorited.value = !isFavorited.value;

    // 持久化收藏状态
    // 示例: 使用localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteFood') || '[]');

    if (isFavorited.value) {
        // 添加到收藏
        favorites.push(food.value.id);
    } else {
        // 从收藏移除
        const index = favorites.indexOf(food.value.id);
        if (index !== -1) {
            favorites.splice(index, 1);
        }
    }

    localStorage.setItem('favoriteFood', JSON.stringify(favorites));
};

// 导航到其他食品详情页
const navigateToFood = (foodId: string) => {
    router.push(`/food/${foodId}`);
};

// 处理评价按钮点击
const handleReviewClick = () => {
    console.log("添加评价", food.value?.id);
};

// 处理底部操作按钮点击
const handleActionClick = () => {
    console.log("了解更多", food.value?.id);
};

// 星级评分组件
const StarRating = defineComponent({
    props: {
        rating: {
            type: Number,
            default: 0,
        },
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
                            i < Math.floor(props.rating || 0)
                                ? "fas fa-star"
                                : i < Math.ceil(props.rating || 0) && props.rating % 1 !== 0
                                    ? "fas fa-star-half-alt"
                                    : "far fa-star",
                            "text-sm"
                        ],
                    })
                )
            );
    },
});
</script>

<style scoped>
/* 基础过渡效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 渐入动画 */
@keyframes fadeIn {
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
    animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay-1 {
    animation: fadeIn 0.6s ease-out 0.2s forwards;
    opacity: 0;
}

.animate-fade-in-delay-2 {
    animation: fadeIn 0.6s ease-out 0.4s forwards;
    opacity: 0;
}

/* 添加悬停效果和阴影过渡 */
.shadow-sm,
.shadow-md,
.shadow-lg {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

/* 优化图片加载效果 */
img {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

/* 改善按钮点击反馈 */
button {
    transition: transform 0.2s ease, background-color 0.3s ease, color 0.3s ease;
}

button:active:not(:disabled) {
    transform: scale(0.97);
}

/* 优化滚动行为 */
@media (min-width: 1024px) {
    .lg\:sticky {
        position: sticky;
        align-self: start;
        top: 2rem;
    }
}

/* 加载动画 */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>