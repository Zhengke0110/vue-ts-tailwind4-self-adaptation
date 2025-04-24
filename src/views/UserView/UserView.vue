<template>
  <div class="min-h-screen bg-orange-50" :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }">
    <!-- 桌面端容器 -->
    <div :class="{
      'mx-auto lg:max-w-6xl lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
        deviceType.isDesktop,
    }">
      <!-- 顶部信息区域 -->
      <div class="relative bg-gradient-to-r from-orange-500 to-orange-400">
        <div class="absolute inset-0 bg-pattern opacity-10"></div>

        <!-- 用户信息容器 -->
        <div class="relative px-4 py-8 text-center text-white md:px-6 md:py-10 lg:px-8">
          <transition name="fade" mode="out-in">
            <div v-if="isLoggedIn" key="logged-in" class="animate-fade-in">
              <!-- 已登录状态 -->
              <div class="mb-4 flex flex-col items-center">
                <div class="relative mb-3">
                  <img :src="userInfo.avatar" alt="用户头像"
                    class="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg" />
                  <span v-if="userInfo.vip"
                    class="absolute -right-2 -top-1 rounded-full bg-yellow-500 px-2 py-1 text-xs font-bold shadow-md">
                    VIP
                  </span>
                </div>
                <h1 class="text-2xl font-bold">{{ userInfo.name }}</h1>
                <p class="mt-1 text-sm text-white/80">{{ userInfo.bio }}</p>
              </div>

              <div class="flex justify-center space-x-6">
                <div class="flex flex-col">
                  <span class="text-xl font-bold">{{ userInfo.follows }}</span>
                  <span class="text-xs text-white/80">关注</span>
                </div>
                <div class="h-10 border-l border-white/20"></div>
                <div class="flex flex-col">
                  <span class="text-xl font-bold">{{ userInfo.fans }}</span>
                  <span class="text-xs text-white/80">粉丝</span>
                </div>
                <div class="h-10 border-l border-white/20"></div>
                <div class="flex flex-col">
                  <span class="text-xl font-bold">{{ userInfo.likes }}</span>
                  <span class="text-xs text-white/80">获赞</span>
                </div>
              </div>
            </div>

            <div v-else key="logged-out" class="animate-fade-in py-4">
              <!-- 未登录状态 -->
              <div class="mb-6 flex flex-col items-center">
                <div class="mb-4 rounded-full bg-white/10 p-6 backdrop-blur-sm">
                  <i class="fas fa-user text-4xl"></i>
                </div>
                <h2 class="text-xl font-bold">您尚未登录</h2>
                <p class="mt-2 text-sm text-white/80">登录后可以体验更多功能</p>
              </div>

              <div class="flex justify-center space-x-4">
                <button
                  class="rounded-full bg-white px-6 py-2 font-medium text-orange-500 transition-all hover:bg-orange-50"
                  @click="handleLogin">
                  登录
                </button>
                <button
                  class="rounded-full border border-white/60 px-6 py-2 font-medium text-white transition-all hover:bg-white/10"
                  @click="handleRegister">
                  注册
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- 主要内容区域 -->
      <div class="p-4 md:p-6 lg:p-8">
        <transition name="fade" mode="out-in">
          <div v-if="isLoggedIn" key="logged-in-content">
            <!-- 用户状态摘要 -->
            <div class="mb-6 grid grid-cols-3 gap-3 md:gap-6 lg:gap-8">
              <div class="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
                <div class="mb-2 rounded-full bg-orange-100 p-3">
                  <i class="fas fa-map-marker-alt text-lg text-orange-500"></i>
                </div>
                <span class="text-xl font-bold text-gray-800">{{ userStats.visitedPlaces }}</span>
                <span class="text-xs text-gray-500">去过的地方</span>
              </div>

              <div class="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
                <div class="mb-2 rounded-full bg-orange-100 p-3">
                  <i class="fas fa-utensils text-lg text-orange-500"></i>
                </div>
                <span class="text-xl font-bold text-gray-800">{{ userStats.tastedFood }}</span>
                <span class="text-xs text-gray-500">品尝的美食</span>
              </div>

              <div class="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
                <div class="mb-2 rounded-full bg-orange-100 p-3">
                  <i class="fas fa-camera text-lg text-orange-500"></i>
                </div>
                <span class="text-xl font-bold text-gray-800">{{ userStats.photos }}</span>
                <span class="text-xs text-gray-500">旅行照片</span>
              </div>
            </div>

            <!-- 已登录用户的功能模块 -->
            <div class="mb-8 rounded-xl bg-white p-5 shadow-sm animate-fade-in">
              <h3 class="mb-4 text-lg font-medium text-gray-800">我的行程</h3>
              <div class="flex flex-col space-y-3">
                <div v-if="userInfo.trips?.length" class="space-y-3">
                  <div v-for="trip in userInfo.trips" :key="trip.id"
                    class="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-3 transition-all hover:bg-orange-50">
                    <div class="flex items-center">
                      <i class="fas fa-route mr-3 text-orange-500"></i>
                      <div>
                        <div class="font-medium">{{ trip.name }}</div>
                        <div class="text-xs text-gray-500">{{ trip.date }}</div>
                      </div>
                    </div>
                    <i class="fas fa-chevron-right text-gray-400"></i>
                  </div>
                </div>
                <div v-else class="flex flex-col items-center justify-center py-6 text-center">
                  <i class="fas fa-route mb-3 text-3xl text-gray-300"></i>
                  <p class="text-gray-500">暂无行程规划</p>
                  <button class="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white">
                    开始规划行程
                  </button>
                </div>
              </div>
            </div>

            <div class="mb-8 rounded-xl bg-white p-5 shadow-sm animate-fade-in-delay-1">
              <h3 class="mb-4 text-lg font-medium text-gray-800">我的收藏</h3>
              <div class="flex flex-col space-y-3">
                <div v-if="userInfo.favorites?.length" class="space-y-3">
                  <div v-for="fav in userInfo.favorites" :key="fav.id"
                    class="group flex cursor-pointer gap-3 rounded-lg p-2 transition-all hover:bg-orange-50">
                    <img :src="fav.image" :alt="fav.title"
                      class="h-16 w-20 rounded-lg object-cover transition-transform group-hover:scale-105" />
                    <div class="flex-1">
                      <h4 class="mb-1 font-medium text-gray-800 group-hover:text-orange-500">{{ fav.title }}</h4>
                      <p class="line-clamp-1 text-xs text-gray-500">{{ fav.desc }}</p>
                      <div class="mt-1 text-xs text-gray-500">
                        <span>{{ fav.type }}</span>
                        <span class="mx-1">·</span>
                        <span>{{ fav.date }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="flex flex-col items-center justify-center py-6 text-center">
                  <i class="fas fa-heart mb-3 text-3xl text-gray-300"></i>
                  <p class="text-gray-500">暂无收藏内容</p>
                  <button class="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white"
                    @click="router.push('/foods')">
                    浏览美食
                  </button>
                </div>
              </div>
            </div>

            <!-- 用户发布的内容 -->
            <div class="mb-8 rounded-xl bg-white p-5 shadow-sm animate-fade-in-delay-2">
              <div class="mb-4 flex items-center justify-between">
                <h3 class="text-lg font-medium text-gray-800">我的发布</h3>
                <button class="text-orange-500 text-sm flex items-center">
                  查看全部
                  <i class="fas fa-angle-right ml-1"></i>
                </button>
              </div>

              <div class="space-y-4">
                <div v-for="(post, index) in userPosts" :key="index"
                  class="border-b border-gray-100 pb-4 last:border-0">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-medium">{{ post.title }}</h4>
                    <span class="text-xs text-gray-500">{{ post.date }}</span>
                  </div>
                  <p class="text-sm text-gray-600 mb-2">{{ post.content }}</p>

                  <div class="flex flex-wrap gap-2">
                    <img v-for="(img, i) in post.images" :key="i" :src="img" :alt="`图片${i + 1}`"
                      class="h-16 w-16 rounded-lg object-cover" />
                  </div>

                  <div class="mt-3 flex items-center text-sm text-gray-500">
                    <button class="mr-4 flex items-center">
                      <i class="far fa-thumbs-up mr-1"></i>
                      <span>{{ post.likes }}</span>
                    </button>
                    <button class="flex items-center">
                      <i class="far fa-comment mr-1"></i>
                      <span>{{ post.comments }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 退出登录按钮 -->
            <div class="mt-8 mb-20">
              <button @click="handleLogout"
                class="w-full rounded-lg border border-gray-300 bg-white py-3 text-center text-gray-700 transition-colors hover:bg-gray-50">
                退出登录
              </button>
            </div>
          </div>

          <div v-else key="logged-out-content">
            <!-- 未登录状态下的内容 -->
            <div class="mb-6 rounded-xl bg-white p-5 shadow-sm animate-fade-in">
              <h3 class="mb-4 text-lg font-medium text-gray-800">游客功能</h3>
              <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                <button v-for="feature in guestFeatures" :key="feature.id"
                  class="flex flex-col items-center rounded-lg p-4 transition-all hover:bg-orange-50"
                  @click="router.push(feature.route)">
                  <i :class="`fas ${feature.icon} text-2xl text-orange-500 mb-2`"></i>
                  <span class="text-sm">{{ feature.name }}</span>
                </button>
              </div>
            </div>

            <!-- 推荐内容 -->
            <div class="rounded-xl bg-white p-5 shadow-sm animate-fade-in-delay-1">
              <h3 class="mb-4 text-lg font-medium text-gray-800">为您推荐</h3>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="(item, index) in recommendItems" :key="index"
                  class="group cursor-pointer overflow-hidden rounded-lg bg-gray-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div class="relative aspect-video overflow-hidden">
                    <img :src="item.image" :alt="item.title"
                      class="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    </div>
                  </div>
                  <div class="p-3">
                    <h4 class="font-medium text-gray-800 group-hover:text-orange-500">{{ item.title }}</h4>
                    <p class="mt-1 text-xs text-gray-500">{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- 底部登录提示(未登录时显示) -->
      <div v-if="!isLoggedIn && !deviceType.isDesktop"
        class="fixed bottom-0 left-0 z-10 flex w-full justify-between border-t border-gray-200 bg-white/90 px-4 py-3 backdrop-blur-md">
        <div class="text-gray-700">
          <p class="text-sm">登录体验更多功能</p>
        </div>
        <button
          class="rounded-lg bg-orange-500 px-6 py-2 font-medium text-white transition-all hover:bg-orange-600 active:scale-95"
          @click="handleLogin">
          立即登录
        </button>
      </div>

      <!-- 会员购买按钮(已登录非VIP用户显示) -->
      <div v-if="isLoggedIn && !userInfo.vip && !deviceType.isDesktop"
        class="fixed bottom-0 left-0 z-10 flex w-full justify-between border-t border-gray-200 bg-white/90 px-4 py-3 backdrop-blur-md">
        <div class="text-gray-700">
          <p class="text-sm">开通VIP享专属服务</p>
        </div>
        <button
          class="rounded-lg bg-yellow-500 px-6 py-2 font-medium text-white transition-all hover:bg-yellow-600 active:scale-95"
          @click="handleBuyVIP">
          立即开通
        </button>
      </div>

      <!-- 顶部设置按钮(已登录显示) -->
      <button v-if="isLoggedIn"
        class="fixed right-4 top-4 z-50 rounded-full bg-white/80 p-2 text-gray-700 shadow-lg backdrop-blur-md transition-transform hover:scale-105 lg:absolute"
        @click="handleSettings">
        <i class="fas fa-cog"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { deviceType } from "@/utils/flexible";
import { Avatar } from './index'
const router = useRouter();


// 登录状态
const isLoggedIn = ref(false);

// 用户信息（已登录状态）
const userInfo = ref({
  name: "旅行者",
  avatar: Avatar,
  bio: "热爱旅行和美食的探索者",
  vip: false,
  follows: 28,
  fans: 156,
  likes: 2342,
  trips: [
    { id: 1, name: "金华三日游", date: "2023-10-15" },
    { id: 2, name: "义乌一日游", date: "2023-09-25" }
  ],
  favorites: [
    {
      id: 1,
      title: "金华火腿",
      desc: "中国四大火腿之一，以其独特的咸鲜味和浓郁的香气闻名",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF-3.jpg",
      type: "美食",
      date: "2023-10-05"
    },
    {
      id: 2,
      title: "金华山",
      desc: "金华山风景名胜区，以奇特的山体、丰富的人文古迹闻名于世。",
      image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%B0%8F%E5%86%B0%E5%B2%9B.jpg",
      type: "景点",
      date: "2023-09-28"
    }
  ]
});

// 用户统计数据
const userStats = ref({
  visitedPlaces: 12,
  tastedFood: 26,
  photos: 135
});

// 用户发布的内容
const userPosts = ref([
  {
    title: "在金华山的一天",
    date: "2023-10-12",
    content: "今天登上了金华山，风景真的太美了，俯瞰整个金华城区，感觉整个人都放松了！",
    images: [
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%B0%8F%E5%86%B0%E5%B2%9B.jpg",
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%A9%BA%E5%9F%8E/%E9%A5%AE%E9%A3%9F/%E6%B2%B9%E7%84%96%E6%98%A5%E7%AC%8B.png"
    ],
    likes: 32,
    comments: 8
  },
  {
    title: "尝试了当地特色小吃",
    date: "2023-09-20",
    content: "今天在老城区品尝了婺州麻糍，真的太好吃了，绝对是来金华必吃的美食！",
    images: [
      "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E5%A9%BA%E5%B7%9E%E9%BA%BB%E7%B3%8D/%E5%A1%94%E7%9F%B3%E9%BA%BB%E7%B3%8D.jpg"
    ],
    likes: 45,
    comments: 12
  }
]);

// 游客功能模块
const guestFeatures = [
  { id: 1, name: "景点", icon: "fa-mountain", route: "/attractions" },
  { id: 2, name: "美食", icon: "fa-utensils", route: "/foods" },
  { id: 3, name: "路线", icon: "fa-route", route: "/routes" },
  { id: 4, name: "住宿", icon: "fa-bed", route: "/hotels" }
];

// 推荐内容
const recommendItems = [
  {
    title: "金华火腿美食之旅",
    desc: "体验正宗金华火腿的制作工艺，品尝多种特色美食",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF-1.jpg"
  },
  {
    title: "双龙洞一日游",
    desc: "探索神秘的双龙洞，感受大自然的鬼斧神工",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%8F%8C%E9%BE%99%E6%B4%9E/%E5%8F%8C%E9%BE%99%E6%B4%9E-4.jpg"
  },
  {
    title: "婺州古城文化探索",
    desc: "漫步古城，感受历史文化的魅力，品尝地道美食",
    image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E5%8E%86%E5%8F%B2%E5%8F%A4%E8%BF%B9/%E4%B8%9C%E9%98%B3%E5%8D%A2%E5%AE%85.jpg"
  }
];

// 处理登录按钮点击
const handleLogin = () => {
  isLoggedIn.value = true;
};

// 处理注册按钮点击
const handleRegister = () => {
  console.log("点击注册按钮");
  // 这里可以添加实际的注册逻辑或导航到注册页面
  // router.push('/register');
};

// 处理设置按钮点击
const handleSettings = () => {
  console.log("点击设置按钮");
  // 这里可以添加导航到设置页面的逻辑
  // router.push('/settings');
};

// 处理购买VIP按钮点击
const handleBuyVIP = () => {
  // 更新VIP状态
  userInfo.value.vip = true;
  console.log("VIP已开通");
};

// 处理退出登录按钮点击
const handleLogout = () => {
  isLoggedIn.value = false;
  // 重置VIP状态
  userInfo.value.vip = false;
};
</script>

<style scoped>
/* 背景图案 */
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
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

/* 改善按钮点击反馈 */
button {
  transition: transform 0.2s ease, background-color 0.3s ease, color 0.3s ease;
}

button:active:not(:disabled) {
  transform: scale(0.97);
}

/* fade 过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>