import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeSecond from "@/views/HomeSecond";
import VJobs from "@/views/VJobs";
import SittersList from "@/views/SittersList";
import RegisterView from "@/views/RegisterView";
import LoginView from "@/views/LoginView";
import AllJobs from "@/views/AllJobs";
import AnimalsCard from "@/views/AnimalsCard";
import DogWalkerPage from "@/views/DogWalkerPage";

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
  {
    path: "/dog-walker",
    name: "DogWalkerPage",
    component: DogWalkerPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
