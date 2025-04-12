<template>
    <div class="min-h-screen bg-orange-50" :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }">
        <!-- 桌面端容器 -->
        <div :class="{
            'mx-auto lg:max-w-md lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
                deviceType.isDesktop,
        }">
            <!-- Header Section -->
            <header class="relative h-[150px] w-full overflow-hidden md:h-[180px]"
                :class="{ 'lg:h-[220px] lg:rounded-t-2xl': deviceType.isDesktop }">
                <img :src="loginBanner" alt="Login Banner" class="h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30">
                    <div class="mx-auto h-full px-4 md:px-6 lg:max-w-7xl lg:px-8">
                        <div class="flex items-center justify-between pt-4">
                            <button class="text-white" @click="handleBack">
                                <i class="fas fa-chevron-left text-xl"></i>
                            </button>
                        </div>
                        <h1
                            class="animate-fade-in mt-4 text-2xl font-bold text-white md:mt-6 md:text-3xl lg:mt-8 lg:text-4xl">
                            欢迎登录
                        </h1>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <main class="relative z-10 mx-auto -mt-6 px-4 md:px-6"
                :class="{ 'lg:mt-0 lg:px-8 lg:py-8': deviceType.isDesktop }">
                <!-- Login Form -->
                <div class="animate-slide-up rounded-xl bg-white p-4 shadow-lg md:p-6" :class="{
                    'lg:rounded-xl lg:bg-gray-50/50 lg:p-8 lg:shadow-sm':
                        deviceType.isDesktop,
                }">
                    <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
                        <!-- Username/Phone Input -->
                        <div>
                            <label for="username" class="mb-2 block text-sm font-medium text-gray-700">用户名/手机号</label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="fas fa-user text-gray-400"></i>
                                </div>
                                <input id="username" v-model="loginForm.username" type="text"
                                    class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="请输入用户名或手机号" required />
                            </div>
                        </div>

                        <!-- Password Input -->
                        <div>
                            <label for="password" class="mb-2 block text-sm font-medium text-gray-700">密码</label>
                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="fas fa-lock text-gray-400"></i>
                                </div>
                                <input id="password" v-model="loginForm.password"
                                    :type="showPassword ? 'text' : 'password'"
                                    class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 pr-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="请输入密码" required />
                                <button type="button" @click="toggleShowPassword"
                                    class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Remember Me & Forgot Password -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember" v-model="loginForm.rememberMe" type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                <label for="remember" class="ml-2 text-sm text-gray-600">记住我</label>
                            </div>
                            <a href="#" class="text-sm text-orange-500 hover:underline">忘记密码?</a>
                        </div>

                        <!-- Login Button -->
                        <button type="submit"
                            class="w-full rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            :class="{ 'opacity-70': isLoading }" :disabled="isLoading">
                            <span v-if="isLoading" class="inline-flex items-center">
                                <i class="fas fa-circle-notch fa-spin mr-2"></i>
                                登录中...
                            </span>
                            <span v-else>登录</span>
                        </button>
                    </form>

                    <!-- Register Link -->
                    <div class="mt-4 text-center">
                        <span class="text-sm text-gray-600">还没有账号? </span>
                        <a href="#" class="text-sm text-orange-500 hover:underline">立即注册</a>
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { deviceType } from "@/utils/flexible";
import { loginBanner } from "./index";
import router from "@/router";

// Login form data
const loginForm = reactive({
    username: "",
    password: "",
    rememberMe: false,
});

const isLoading = ref(false);
const showPassword = ref(false);

// Toggle password visibility
const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
};

// Handle back button click
const handleBack = () => {
    window.history.back();
};

// Handle login form submission
const handleLogin = async () => {
    isLoading.value = true;

    try {
        // TODO: Add your login API request here
        console.log("Logging in with:", loginForm);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Handle successful login
        // Example: router.push('/home')

        router.push("/home");
    } catch (error) {
        // Handle login error
        console.error("Login failed:", error);
    } finally {
        isLoading.value = false;
    }
};
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

@media (min-width: 1280px) {
    :root {
        --viewport-padding: calc(100vw * 0.1);
    }
}
</style>