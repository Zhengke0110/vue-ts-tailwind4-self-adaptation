<template>
  <div class="min-h-screen bg-orange-50" :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }">
    <div class="flex h-screen flex-col items-center justify-center px-4 text-center"
      :class="{ 'mx-auto lg:max-w-6xl lg:rounded-2xl lg:bg-white lg:shadow-xl': deviceType.isDesktop }">

      <!-- 错误图标 -->
      <div class="mb-8 animate-bounce rounded-full bg-orange-100 p-6">
        <i class="fas fa-exclamation-triangle text-6xl text-orange-500"></i>
      </div>

      <!-- 错误标题 -->
      <h1 class="mb-4 text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl">
        <span class="text-orange-500">404</span>
      </h1>

      <!-- 错误描述 -->
      <div class="animate-fade-in">
        <h2 class="mb-2 text-2xl font-bold text-gray-700 md:text-3xl">页面未找到</h2>
        <p class="mb-8 text-gray-600 md:text-lg">
          抱歉，您访问的页面不存在或已被删除
        </p>

        <!-- 建议链接 -->
        <div class="mb-8 flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
          <button
            class="flex items-center rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all hover:bg-orange-600 active:scale-95"
            @click="router.push('/')">
            <i class="fas fa-home mr-2"></i>
            返回首页
          </button>
          <button
            class="flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95"
            @click="router.go(-1)">
            <i class="fas fa-arrow-left mr-2"></i>
            返回上一页
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { deviceType } from '@/utils/flexible';

const router = useRouter();
</script>

<style scoped>
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

/* 跳跃动画 */
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite ease-in-out;
}

/* 改善按钮点击反馈 */
button {
  transition: transform 0.2s ease, background-color 0.3s ease, color 0.3s ease;
}

button:active:not(:disabled) {
  transform: scale(0.97);
}
</style>
