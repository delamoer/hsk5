import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    // :id 对应 lesson 数据文件中的 id 字段（如 "lesson5"）
    path: "/lesson/:id",
    name: "LessonDetail",
    component: () => import("../views/LessonDetail.vue"),
    props: true,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  // hash 模式：URL 形如 /#/lesson/lesson5，GitHub Pages 无需额外配置
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
