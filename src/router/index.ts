import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import LoginView from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(), // 不带“#”的路由模式
  routes: [
    { path: "/", component: HomeView },
    { path: "/login", component: LoginView },
  ],
});
export default router;
