import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import JobsView from "../views/jobs/JobsView";
import JobsViewDetails from "../views/jobs/JobsViewDetails";
import SignupView from "../views/SignupView";
import NotFoundView from "../views/NotFoundView";

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
    name: "Job Details",
    component: JobsViewDetails,
    props: true,
  },
  {
    path: "/SignUp",
    name: "Sign Up",
    component: SignupView,
  },
  // redirects
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // catch all 404 or default
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
