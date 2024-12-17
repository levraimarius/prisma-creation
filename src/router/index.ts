import { createRouter, createWebHistory } from "vue-router";
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
  scrollBehavior(to, from, savedPosition) {
    // Handle anchor links within the same page
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80, // Offset for fixed header
      };
    }

    // Return to saved position when using browser back/forward
    if (savedPosition) {
      return savedPosition;
    }

    // Scroll to top for new page navigations
    return { top: 0 };
  },
});

// Navigation guard to ensure proper scroll behavior
router.beforeEach((to, from, next) => {
  // If it's a new navigation (not just a hash change)
  if (to.path !== from.path) {
    // Reset scroll position before navigation
    window.scrollTo(0, 0);
  }
  next();
});

export default router;
