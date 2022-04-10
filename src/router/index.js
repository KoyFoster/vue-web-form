import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import JobsView from "../views/jobs/JobsView";
import JobsViewDetails from "../views/jobs/JobsViewDetails";
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
    path: "/Jobs",
    name: "Jobs",
    component: JobsView,
  },
  {
    path: "/Jobs/:id",
    name: "JobsDetails",
    component: JobsViewDetails,
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