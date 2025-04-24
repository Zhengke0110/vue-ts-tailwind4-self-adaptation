<template>
    <div class="min-h-screen bg-orange-50 flex">
        <!-- 侧边栏 -->
        <div class="w-64 bg-white shadow-lg z-10 flex flex-col">
            <!-- Logo区域 -->
            <div class="p-6 border-b border-gray-100">
                <div class="flex items-center space-x-3">
                    <div
                        class="bg-gradient-to-r from-orange-500 to-orange-400 h-9 w-9 rounded-lg flex items-center justify-center">
                        <i class="icon-[material-symbols--restaurant-rounded] text-white"></i>
                    </div>
                    <h1 class="text-xl font-bold text-gray-800">金华旅游管理后台</h1>
                </div>
            </div>

            <!-- 管理员信息 -->
            <div class="p-4 border-b border-gray-100">
                <div class="flex items-center space-x-3">
                    <img :src="adminInfo.avatar" alt="管理员头像" class="h-10 w-10 rounded-full object-cover" />
                    <div>
                        <h3 class="font-medium text-gray-800">{{ adminInfo.name }}</h3>
                        <p class="text-xs text-gray-500">{{ adminInfo.role }}</p>
                    </div>
                </div>
            </div>

            <!-- 导航菜单 -->
            <div class="flex-1 overflow-y-auto py-4">
                <div class="px-3 mb-3">
                    <p class="text-xs font-medium text-gray-500 px-3 mb-2 uppercase">管理</p>
                    <nav>
                        <button v-for="(item, index) in navItems" :key="index" @click="activeNavIndex = index" :class="[
                            'w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 text-left',
                            activeNavIndex === index
                                ? 'bg-orange-50 text-orange-600'
                                : 'text-gray-700 hover:bg-gray-100'
                        ]">
                            <i :class="['fas', item.icon, 'w-5 text-center']"></i>
                            <span>{{ item.name }}</span>
                        </button>
                    </nav>
                </div>

                <!-- 系统功能 -->
                <div class="px-3 mb-3">
                    <p class="text-xs font-medium text-gray-500 px-3 mb-2 uppercase">系统</p>
                    <nav>
                        <button v-for="(item, index) in systemItems" :key="index" @click="activeSystemIndex = index"
                            :class="[
                                'w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg mb-1 text-left',
                                activeSystemIndex === index
                                    ? 'bg-orange-50 text-orange-600'
                                    : 'text-gray-700 hover:bg-gray-100'
                            ]">
                            <i :class="['fas', item.icon, 'w-5 text-center']"></i>
                            <span>{{ item.name }}</span>
                        </button>
                    </nav>
                </div>
            </div>

            <!-- 退出登录 -->
            <div class="p-4 border-t border-gray-100">
                <button
                    class="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                    @click="handleLogout">
                    <i class="icon-[material-symbols--logout-rounded] w-5 text-center"></i>
                    <span>退出登录</span>
                </button>
            </div>
        </div>

        <!-- 主内容区域 -->
        <div class="flex-1 flex flex-col">
            <!-- 顶部标题栏 -->
            <div class="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
                <div>
                    <h2 class="text-xl font-medium text-gray-800">{{ currentPageTitle }}</h2>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="relative p-2 text-gray-600 hover:text-orange-500">
                        <i class="icon-[material-symbols--notifications-outline-rounded]"></i>
                        <span class="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>
                    <button class="p-2 text-gray-600 hover:text-orange-500">
                        <i class="icon-[material-symbols--settings-outline-rounded]"></i>
                    </button>
                </div>
            </div>

            <!-- 内容区域 -->
            <div class="flex-1 p-8 overflow-y-auto">
                <!-- 数据概览卡片 -->
                <div class="mb-8">
                    <h3 class="text-lg font-medium text-gray-800 mb-4">数据概览</h3>
                    <div class="grid grid-cols-4 gap-6">
                        <div v-for="(stat, index) in statsData" :key="index"
                            class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <div class="flex items-center justify-between mb-3">
                                <div :class="[
                                    'h-10 w-10 rounded-lg flex items-center justify-center',
                                    `bg-${stat.color}-100 text-${stat.color}-500`
                                ]">
                                    <i :class="[stat.icon, 'text-lg']"></i>
                                </div>
                                <i :class="[
                                    stat.trend > 0 ? 'icon-[material-symbols--arrow-upward-alt-rounded] text-green-500' : 'icon-[material-symbols--arrow-downward-alt-rounded] text-red-500'
                                ]"></i>
                            </div>
                            <p class="text-gray-600 text-sm">{{ stat.title }}</p>
                            <div class="flex items-end justify-between mt-2">
                                <h4 class="text-2xl font-bold text-gray-800">{{ stat.value }}</h4>
                                <div :class="[
                                    'text-xs font-medium',
                                    stat.trend > 0 ? 'text-green-500' : 'text-red-500'
                                ]">
                                    {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 内容管理表格 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-medium text-gray-800">最新内容</h3>
                        <div class="flex items-center space-x-3">
                            <div class="relative">
                                <input type="text" placeholder="搜索..."
                                    class="pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                                <i
                                    class="icon-[material-symbols--search-rounded] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                            <button class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                                新建
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th
                                        class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        标题
                                    </th>
                                    <th
                                        class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        分类
                                    </th>
                                    <th
                                        class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        发布时间
                                    </th>
                                    <th
                                        class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        状态
                                    </th>
                                    <th
                                        class="px-4 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr v-for="(item, index) in contentItems" :key="index" class="hover:bg-gray-50">
                                    <td class="px-4 py-3 border-b border-gray-200 text-sm">
                                        {{ item.id }}
                                    </td>
                                    <td class="px-4 py-3 border-b border-gray-200">
                                        <div class="flex items-center">
                                            <img :src="item.image" class="h-10 w-10 rounded object-cover mr-3" />
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
                                                <div class="text-xs text-gray-500">{{ item.views }} 浏览</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 border-b border-gray-200 text-sm text-gray-800">
                                        {{ item.category }}
                                    </td>
                                    <td class="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">
                                        {{ item.date }}
                                    </td>
                                    <td class="px-4 py-3 border-b border-gray-200 text-sm">
                                        <span :class="[
                                            'px-2 py-1 rounded-full text-xs font-medium',
                                            item.status === '已发布' ? 'bg-green-100 text-green-800' :
                                                item.status === '草稿' ? 'bg-gray-100 text-gray-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                        ]">
                                            {{ item.status }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 border-b border-gray-200 text-sm text-right">
                                        <button class="text-gray-600 hover:text-orange-500 mr-3">
                                            <i class="icon-[material-symbols--edit-outline-rounded]"></i>
                                        </button>
                                        <button class="text-gray-600 hover:text-red-500">
                                            <i class="icon-[material-symbols--delete-outline-rounded]"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="flex items-center justify-between mt-6">
                        <div class="text-sm text-gray-600">
                            显示 <span class="font-medium">1</span> 到 <span class="font-medium">10</span> 条，共 <span
                                class="font-medium">{{ contentItems.length }}</span> 条
                        </div>
                        <div class="flex items-center space-x-2">
                            <button
                                class="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                                上一页
                            </button>
                            <button class="px-3 py-1 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600">
                                1
                            </button>
                            <button
                                class="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                                2
                            </button>
                            <button
                                class="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                                下一页
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 最近活动 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                    <h3 class="text-lg font-medium text-gray-800 mb-4">最近活动</h3>
                    <div class="space-y-4">
                        <div v-for="(activity, index) in activityLog" :key="index"
                            class="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                            <div :class="[
                                'h-8 w-8 rounded-full flex items-center justify-center mr-3',
                                `bg-${activity.color}-100 text-${activity.color}-500`
                            ]">
                                <i :class="activity.icon"></i>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between">
                                    <p class="text-sm text-gray-800">
                                        <span class="font-medium">{{ activity.user }}</span> {{ activity.action }}
                                    </p>
                                    <span class="text-xs text-gray-500">{{ activity.time }}</span>
                                </div>
                                <p v-if="activity.detail" class="text-xs text-gray-600 mt-1">{{ activity.detail }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Avatar } from './index'
// 管理员信息
const adminInfo = ref({
    name: "管理员",
    role: "超级管理员",
    avatar: Avatar
});

// 导航菜单项
const navItems = ref([
    { name: "仪表盘", icon: "icon-[material-symbols--settings-alert-outline]" },
    { name: "景点管理", icon: "icon-[material-symbols--settings-motion-mode-outline]" },
    { name: "美食管理", icon: "icon-[material-symbols--food-bank-outline-rounded]" },
    { name: "用户管理", icon: "icon-[material-symbols--user-attributes-outline-rounded]" },
    { name: "订单管理", icon: "icon-[material-symbols--garden-cart-outline]" },
    { name: "评论管理", icon: "icon-[material-symbols--mark-chat-unread-outline-rounded]" }
]);

// 系统菜单项
const systemItems = ref([
    { name: "系统设置", icon: "icon-[material-symbols--settings-alert-outline]" },
    { name: "权限管理", icon: "icon-[material-symbols--supervised-user-circle-outline]" },
    { name: "数据备份", icon: "icon-[material-symbols--database]" }
]);

// 活动菜单选中状态
const activeNavIndex = ref(0);
const activeSystemIndex = ref(-1);

// 获取当前页面标题
const currentPageTitle = ref("仪表盘");

// 数据概览
const statsData = ref([
    { title: "今日游客", value: "1,286", trend: 12.5, icon: "icon-[material-symbols--supervised-user-circle-outline]", color: "blue" },
    { title: "新增评论", value: "35", trend: 5.8, icon: "icon-[material-symbols--comment-outline]", color: "green" },
    { title: "景点浏览", value: "4,672", trend: -2.4, icon: "icon-[material-symbols--mountain-flag-outline-rounded]", color: "orange" },
    { title: "订单数量", value: "86", trend: 8.2, icon: "icon-[material-symbols--shopping-cart-outline-rounded]", color: "purple" }
]);

// 内容列表
const contentItems = ref([
    {
        id: "CM-1001",
        title: "金华火腿",
        image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF/%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF-1.jpg",
        category: "美食",
        date: "2023-10-15",
        status: "已发布",
        views: 562
    },
    {
        id: "CM-1002",
        title: "金华山",
        image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E9%87%91%E5%8D%8E%E5%B1%B1/%E9%87%91%E5%8D%8E%E5%B1%B1%E5%B0%8F%E5%86%B0%E5%B2%9B.jpg",
        category: "景点",
        date: "2023-10-12",
        status: "已发布",
        views: 1024
    },
    {
        id: "CM-1003",
        title: "双龙洞",
        image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E7%8E%A9/%E5%8F%8C%E9%BE%99%E6%B4%9E/%E5%8F%8C%E9%BE%99%E6%B4%9E-4.jpg",
        category: "景点",
        date: "2023-10-10",
        status: "草稿",
        views: 0
    },
    {
        id: "CM-1004",
        title: "婺州麻糍",
        image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E5%90%83/%E5%A9%BA%E5%B7%9E%E9%BA%BB%E7%B3%8D/%E5%A1%94%E7%9F%B3%E9%BA%BB%E7%B3%8D.jpg",
        category: "美食",
        date: "2023-10-08",
        status: "审核中",
        views: 78
    },
    {
        id: "CM-1005",
        title: "东阳卢宅",
        image: "https://33fei-1343409302.cos.ap-guangzhou.myqcloud.com/%E5%9B%BE/%E6%96%87%E5%8C%96/%E9%87%91%E5%8D%8E%E5%8E%86%E5%8F%B2%E5%8F%A4%E8%BF%B9/%E4%B8%9C%E9%98%B3%E5%8D%A2%E5%AE%85.jpg",
        category: "文化",
        date: "2023-10-05",
        status: "已发布",
        views: 392
    }
]);

// 活动日志
const activityLog = ref([
    {
        user: "管理员",
        action: "发布了新景点",
        detail: "发布景点'双龙洞'，待审核",
        time: "10分钟前",
        icon: "icon-[material-symbols--mountain-flag-outline-rounded]",
        color: "blue"
    },
    {
        user: "张三",
        action: "更新了美食信息",
        detail: "更新'金华火腿'的描述和图片",
        time: "1小时前",
        icon: "icon-[material-symbols--food-bank-outline-rounded]",
        color: "orange"
    },
    {
        user: "系统",
        action: "完成了数据库备份",
        time: "3小时前",
        icon: "icon-[material-symbols--database]",
        color: "green"
    },
    {
        user: "管理员",
        action: "删除了一条违规评论",
        time: "昨天",
        icon: "icon-[material-symbols--comment-banned-outline-rounded]",
        color: "red"
    },
    {
        user: "李四",
        action: "添加了新用户",
        detail: "添加了5个新的运营账号",
        time: "2天前",
        icon: "icon-[material-symbols--person-add-outline-rounded]",
        color: "purple"
    }
]);

// 处理退出登录
const handleLogout = () => {
    console.log('退出登录');
    // 这里可以添加实际的退出登录逻辑
};
</script>

<style scoped>
/* 使表格更美观 */
table {
    border-collapse: separate;
    border-spacing: 0;
}

th {
    font-weight: 600;
}

/* 给按钮添加过渡效果 */
button {
    transition: all 0.2s ease;
}

button:active:not(:disabled) {
    transform: scale(0.97);
}
</style>