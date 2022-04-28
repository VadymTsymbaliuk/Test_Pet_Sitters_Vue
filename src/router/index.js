import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeSecond from "@/views/HomeSecond";
import VJobs from "@/views/VJobs";
import SittersList from "@/views/SittersList";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home-second",
    name: "home-second",
    component: HomeSecond,
  },
  {
    path: "/jobs",
    name: "VJobs",
    component: VJobs,
  },
  {
    path: "/sitters-list",
    name: "SittersList",
    component: SittersList,
  },
  // {
  //   path: "/about",
  //   name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
