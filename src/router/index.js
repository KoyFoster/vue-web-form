import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import SignupView from "../views/SignupView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/About",
    name: "About",
    component: AboutView,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
