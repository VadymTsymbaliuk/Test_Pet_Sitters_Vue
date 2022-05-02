import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeSecond from "@/views/HomeSecond";
import VJobs from "@/views/VJobs";
import SittersList from "@/views/SittersList";
import RegisterView from "@/views/RegisterView";
import LoginView from "@/views/LoginView";
import AllJobs from "@/views/AllJobs";
import AnimalsCard from "@/views/AnimalsCard";

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
    path: "/all-jobs",
    name: "AllJobs",
    component: AllJobs,
  },
  {
    path: "/animals-profile",
    name: "AnimalsCard",
    component: AnimalsCard,
  },
  {
    path: "/sitters-list",
    name: "SittersList",
    component: SittersList,
  },
  {
    path: "/register-login",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/register",
    name: "LoginView",
    component: LoginView,
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
