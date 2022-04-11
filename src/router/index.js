import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import JobsView from "../views/jobs/JobsView";
import JobsViewDetails from "../views/jobs/JobsViewDetails";
import SignupView from "../views/SignupView";
import NotFoundView from "../views/NotFoundView";
import DetailsView from "../views/DetailsView";

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
  // redirects
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  {
    path: "/Jobs/:id",
    name: "JobDetails",
    component: JobsViewDetails,
    props: true,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignupView,
  },
  {
    path: "/path/:id",
    name: "Details",
    component: DetailsView,
    props: true,
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
