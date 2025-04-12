<template>
  <div
    class="min-h-screen bg-orange-50"
    :class="{ 'lg:px-[var(--viewport-padding)] lg:py-8': deviceType.isDesktop }"
  >
    <!-- 桌面端容器 -->
    <div
      :class="{
        'mx-auto lg:max-w-md lg:overflow-hidden lg:rounded-2xl lg:bg-white lg:shadow-xl':
          deviceType.isDesktop,
      }"
    >
      <!-- Header Section -->
      <header
        class="relative h-[150px] w-full overflow-hidden md:h-[180px]"
        :class="{ 'lg:h-[220px] lg:rounded-t-2xl': deviceType.isDesktop }"
      >
        <img
          :src="registerBanner"
          alt="Register Banner"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
        >
          <div class="mx-auto h-full px-4 md:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex items-center justify-between pt-4">
              <button class="text-white" @click="handleBack">
                <i class="fas fa-chevron-left text-xl"></i>
              </button>
            </div>
            <h1
              class="animate-fade-in mt-4 text-2xl font-bold text-white md:mt-6 md:text-3xl lg:mt-8 lg:text-4xl"
            >
              用户注册
            </h1>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main
        class="relative z-10 mx-auto -mt-6 px-4 md:px-6"
        :class="{ 'lg:mt-0 lg:px-8 lg:py-8': deviceType.isDesktop }"
      >
        <!-- Register Form -->
        <div
          class="animate-slide-up rounded-xl bg-white p-4 shadow-lg md:p-6"
          :class="{
            'lg:rounded-xl lg:bg-gray-50/50 lg:p-8 lg:shadow-sm':
              deviceType.isDesktop,
          }"
        >
          <form @submit.prevent="handleRegister" class="space-y-4 md:space-y-6">
            <!-- Username Input -->
            <div>
              <label for="username" class="mb-2 block text-sm font-medium text-gray-700"
                >用户名</label
              >
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <i class="fas fa-user text-gray-400"></i>
                </div>
                <input
                  id="username"
                  v-model="registerForm.username"
                  type="text"
                  class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="请输入用户名"
                  required
                />
              </div>
            </div>

            <!-- Phone Input -->
            <div>
              <label for="phone" class="mb-2 block text-sm font-medium text-gray-700"
                >手机号</label
              >
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <i class="fas fa-mobile-alt text-gray-400"></i>
                </div>
                <input
                  id="phone"
                  v-model="registerForm.phone"
                  type="tel"
                  class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="请输入手机号"
                  required
                />
              </div>
              <p v-if="errors.phone" class="mt-1 text-xs text-red-500">
                {{ errors.phone }}
              </p>
            </div>

            <!-- Verification Code -->
            <div>
              <label for="verifyCode" class="mb-2 block text-sm font-medium text-gray-700"
                >验证码</label
              >
              <div class="relative flex space-x-2">
                <div class="relative flex-1">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <i class="fas fa-shield-alt text-gray-400"></i>
                  </div>
                  <input
                    id="verifyCode"
                    v-model="registerForm.verifyCode"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="请输入验证码"
                    required
                  />
                </div>
                <button
                  type="button"
                  class="whitespace-nowrap rounded-lg border border-orange-500 px-3 py-2 text-sm font-medium text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  :disabled="codeCountdown > 0"
                  @click="sendVerificationCode"
                >
                  {{ codeCountdown > 0 ? `${codeCountdown}s后重新获取` : '获取验证码' }}
                </button>
              </div>
            </div>

            <!-- Password Input -->
            <div>
              <label for="password" class="mb-2 block text-sm font-medium text-gray-700"
                >密码</label
              >
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  id="password"
                  v-model="registerForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 pr-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="请输入密码"
                  required
                />
                <button
                  type="button"
                  @click="toggleShowPassword"
                  class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <p v-if="errors.password" class="mt-1 text-xs text-red-500">
                {{ errors.password }}
              </p>
            </div>

            <!-- Confirm Password Input -->
            <div>
              <label for="confirmPassword" class="mb-2 block text-sm font-medium text-gray-700"
                >确认密码</label
              >
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  id="confirmPassword"
                  v-model="registerForm.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-10 pr-10 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="请再次输入密码"
                  required
                />
                <button
                  type="button"
                  @click="toggleShowConfirmPassword"
                  class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <i
                    :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  ></i>
                </button>
              </div>
              <p v-if="errors.confirmPassword" class="mt-1 text-xs text-red-500">
                {{ errors.confirmPassword }}
              </p>
            </div>

            <!-- Terms and Conditions -->
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input
                  id="terms"
                  v-model="registerForm.agreeTerms"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  required
                />
              </div>
              <div class="ml-2 text-sm">
                <label for="terms" class="text-gray-600">
                  我已阅读并同意
                  <a href="#" class="text-orange-500 hover:underline">用户协议</a>
                  和
                  <a href="#" class="text-orange-500 hover:underline">隐私政策</a>
                </label>
              </div>
            </div>

            <!-- Register Button -->
            <button
              type="submit"
              class="w-full rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              :class="{ 'opacity-70': isLoading }"
              :disabled="isLoading"
            >
              <span v-if="isLoading" class="inline-flex items-center">
                <i class="fas fa-circle-notch fa-spin mr-2"></i>
                注册中...
              </span>
              <span v-else>注册</span>
            </button>
          </form>

          <!-- Login Link -->
          <div class="mt-4 text-center">
            <span class="text-sm text-gray-600">已有账号? </span>
            <a href="#" class="text-sm text-orange-500 hover:underline">立即登录</a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { deviceType } from "@/utils/flexible";
import { registerBanner } from "./index";
import router from "@/router";

// Register form data
const registerForm = reactive({
  username: "",
  phone: "",
  verifyCode: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
});

// Form validation errors
const errors = reactive({
  phone: "",
  password: "",
  confirmPassword: "",
});

const isLoading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const codeCountdown = ref(0);

// Toggle password visibility
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

// Toggle confirm password visibility
const toggleShowConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

// Handle back button click
const handleBack = () => {
  window.history.back();
};

// Send verification code
const sendVerificationCode = async () => {
  // Validate phone number
  const phonePattern = /^1[3-9]\d{9}$/;
  if (!phonePattern.test(registerForm.phone)) {
    errors.phone = "请输入有效的手机号码";
    return;
  }
  
  errors.phone = "";
  
  try {
    // TODO: Add your verification code API request here
    console.log("Sending verification code to:", registerForm.phone);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Start countdown
    codeCountdown.value = 60;
    const timer = setInterval(() => {
      codeCountdown.value--;
      if (codeCountdown.value <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  } catch (error) {
    console.error("Failed to send verification code:", error);
  }
};

// Validate form
const validateForm = () => {
  let isValid = true;
  
  // Validate phone
  const phonePattern = /^1[3-9]\d{9}$/;
  if (!phonePattern.test(registerForm.phone)) {
    errors.phone = "请输入有效的手机号码";
    isValid = false;
  } else {
    errors.phone = "";
  }
  
  // Validate password
  if (registerForm.password.length < 6) {
    errors.password = "密码长度至少为6位";
    isValid = false;
  } else {
    errors.password = "";
  }
  
  // Validate confirm password
  if (registerForm.password !== registerForm.confirmPassword) {
    errors.confirmPassword = "两次输入的密码不一致";
    isValid = false;
  } else {
    errors.confirmPassword = "";
  }
  
  return isValid;
};

// Handle registration form submission
const handleRegister = async () => {
  if (!validateForm()) {
    return;
  }
  
  isLoading.value = true;
  
  try {
    // TODO: Add your registration API request here
    console.log("Registering with:", registerForm);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    router.push('/home');
    // Handle successful registration
    // Example: router.push('/login')
  } catch (error) {
    // Handle registration error
    console.error("Registration failed:", error);
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