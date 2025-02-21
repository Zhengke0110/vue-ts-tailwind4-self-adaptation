# Vue 3 + TypeScript + Tailwind CSS 前端自适应模板

一个现代化的旅游应用前端开发模板，基于 Vue 3、TypeScript 和 Tailwind CSS，使用 Vite 作为构建工具。该模板提供了一个可扩展的架构，适用于构建响应式、高性能的 Web 应用。特别优化了多端适配方案，支持移动端、平板和桌面端的完美显示。

## 🎯 功能模块

- 🏠 首页展示
- 🗺️ 路线推荐
  - 路线列表
  - 路线详情
- 🍜 美食推荐
- 🏛️ 景点导览
  - 景点列表
  - 景点详情
- 🎭 人文景艺
- 🏨 酒店民宿
- 🛍️ 特产好物
- 📊 好评榜单
- ✨ 行程定制
- 🚀 智能推荐

## 🚀 特性

- ⚡️ [Vue 3](https://v3.vuejs.org/) - 渐进式 JavaScript 框架
- 🔥 [Vite](https://vitejs.dev/) - 下一代前端构建工具
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - 功能优先的 CSS 框架
- 📦 [Pinia](https://pinia.vuejs.org/) - Vue 的状态管理解决方案
- 🔧 [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- 🎭 [Headless UI](https://headlessui.com/) - 无样式 UI 组件
- 🔍 [VueUse](https://vueuse.org/) - Vue Composition API 工具集
- 🎯 Vue Router - 官方路由管理器
- 💾 持久化状态管理 - 通过 pinia-plugin-persistedstate

## 📁 项目结构

```
src/
├── assets/        # 静态资源文件
├── views/         # 页面视图组件
│   ├── HomeView/              # 首页
│   ├── RouteRecommendationView/  # 路线推荐
│   ├── FoodView/             # 美食推荐
│   ├── AttractionsView/      # 景点导览
│   ├── CultureView/          # 人文景艺
│   ├── HotelsView/           # 酒店民宿
│   ├── ShoppingView/         # 特产好物
│   ├── Recommendations/      # 好评榜单
│   ├── CustomView/           # 行程定制
│   └── Error.vue             # 错误页面
├── router/        # 路由配置
├── store/         # Pinia 状态管理
├── utils/         # 工具函数
│   └── flexible.ts    # 响应式布局工具
├── App.vue        # 根组件
├── main.ts        # 应用入口
└── global-style.css   # 全局样式
```

## 🛠️ 开发环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn 或 pnpm

## 📦 安装

```bash
# 克隆项目
git clone [项目地址]

# 进入项目目录
cd [项目名]

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

## 🚀 开发命令

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev

# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build

# 预览生产构建
npm run preview
# 或
yarn preview
# 或
pnpm preview
```

## 🔧 配置说明

### TypeScript 配置

项目使用 `tsconfig.json` 进行 TypeScript 配置，支持最新的 TypeScript 特性。

### Tailwind CSS 配置

使用 Tailwind CSS v4，支持：

- 自定义主题配置
- JIT（即时编译）模式
- 组件类提取
- 图标集成（通过 @iconify/tailwind）

### Vite 配置

项目使用 Vite 作为构建工具，提供：

- 快速的热模块替换（HMR）
- 优化的构建性能
- 灵活的插件系统

## 🎨 代码规范

项目集成了：

- Prettier 用于代码格式化
- TypeScript 严格模式
- Vue 3 组合式 API 规范

## 📚 状态管理

使用 Pinia 进行状态管理：

- 支持 Vue 3 组合式 API
- TypeScript 支持
- 开发工具集成
- 状态持久化支持

## 🔐 路由管理

使用 Vue Router 进行路由管理：

- 支持路由懒加载
- 类型安全的路由配置
- 导航守卫
- 路由元信息

## 🎯 最佳实践

- 使用组合式 API 和 `<script setup>` 语法
- 采用 TypeScript 类型检查
- 实现响应式设计
- 使用 Tailwind CSS 进行样式管理
- 组件化开发
- 状态管理规范

## 📄 许可证

[MIT](LICENSE)

## 📱 响应式设计

项目实现了完整的响应式布局系统：

### 设备适配

- 移动端：< 768px
- 平板设备：768px - 1280px
- 桌面端：≥ 1280px

### REM 适配方案

- 移动端基准字号：16px
- 平板设备基准字号：20px
- 桌面端基准字号：22px
- 最大字号限制：24px

### 智能缩放

- 基于 viewport 宽度动态计算字号
- 针对不同设备类型优化显示效果
- 自动处理极端尺寸场景

### 开发工具支持

- 提供`deviceType`响应式API
  - `isMobile`：移动端检测
  - `isTablet`：平板设备检测
  - `isDesktop`：桌面端检测
- 集成VueUse工具集，提供丰富的组合式API

## 🛣️ 路由配置

项目使用 Vue Router 进行路由管理，支持以下特性：

- 路由懒加载：所有页面组件都使用动态导入
- 路由元信息：支持页面标题等元数据配置
- 嵌套路由：支持多级路由嵌套（如景点详情页）
- 404处理：优雅处理未找到的路由
- 路由重定向：默认重定向到首页
