import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocationNormalized } from "vue-router";
import Home from "../pages/Home.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import TermsOfUse from "../pages/TermsOfUse.vue";
import CityPage from "../pages/CityPage.vue";
import { cities } from "./cities";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/politique-de-confidentialite",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/conditions-utilisation",
    name: "TermsOfUse",
    component: TermsOfUse,
  },
  ...cities.map((city) => ({
    path: `/nos-agences/${city.region}/${city.department}/${city.city.toLowerCase().replace(/ /g, "-")}`,
    name: `AgenceWeb${city.city.replace(/[^a-zA-Z]/g, "")}`,
    component: CityPage,
  })),
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(
    to: RouteLocationNormalized,
    _: RouteLocationNormalized,
    savedPosition
  ) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});

router.beforeEach((to, _, next) => {
  if (to.path !== _.path) {
    window.scrollTo(0, 0);
  }
  next();
});

export default router;
