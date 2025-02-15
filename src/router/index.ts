import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/routes/:id",
    name: "route-detail",
    component: () => import("@/views/RouteDetailView"),
  },
  {
    path: "/food",
    name: "food",
    component: () => import("@/views/FoodView"),
    meta: {
      title: "美食",
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
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/Error.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
