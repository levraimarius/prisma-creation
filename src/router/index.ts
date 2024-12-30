import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocationNormalized } from "vue-router";
import { routes } from "./routes";

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