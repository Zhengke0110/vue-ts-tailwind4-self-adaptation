import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/routes",
    name: "routes",
    component: () => import("@/views/RouteRecommendationView"),
    meta: {
      title: "路线推荐",
    },
  },
  {
    path: "/routes/:id",
    name: "route-detail",
    component: () => import("@/views/RouteDetailView"),
  },
  {
    path: "/foods",
    name: "foods",
    component: () => import("@/views/FoodView"),
    meta: {
      title: "美食",
    },
  },
  {
    path: "/food/:id",
    name: "food",
    component: () => import("@/views/FoodDetailView"),
    meta: {
      title: "美食详情",
    },
  },
  {
    path: "/attractions",
    name: "attractions",
    component: () => import("@/views/AttractionsView"),
    meta: {
      title: "景点",
    },
  },
  {
    path: "/attraction/:id",
    name: "attractionDetail",
    component: () => import("@/views/AttractionsView/AttractionDetail.vue"),
    meta: {
      title: "景点详情",
    },
  },
  {
    path: "/culture",
    name: "culture",
    component: () => import("@/views/CultureView"),
    meta: {
      title: "人文景艺",
    },
  },
  {
    path: "/hotels",
    name: "hotels",
    component: () => import("@/views/HotelsView"),
    meta: {
      title: "酒店民宿",
    },
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("@/views/ShoppingView"),
    meta: {
      title: "特产好物",
    },
  },
  {
    path: "/recommendations",
    name: "recommendations",
    component: () => import("@/views/Recommendations"),
    meta: {
      title: "好评榜",
    },
  },
  {
    path: "/custom",
    name: "custom",
    component: () => import("@/views/CustomView"),
    meta: {
      title: "行程定制",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/UserView"),
    meta: {
      title: "用户中心",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminView"),
    meta: {
      title: "管理中心",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/Error.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
