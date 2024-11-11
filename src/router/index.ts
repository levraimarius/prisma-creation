import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: defineAsyncComponent(() => import("../pages/Home.vue")),
  },
  {
    path: "/politique-de-confidentialite",
    name: "PrivacyPolicy",
    component: defineAsyncComponent(() => import("../pages/PrivacyPolicy.vue")),
  },
  {
    path: "/conditions-utilisation",
    name: "TermsOfUse",
    component: defineAsyncComponent(() => import("../pages/TermsOfUse.vue")),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
