import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/politique-de-confidentialite",
    name: "PrivacyPolicy",
    component: () => import("../pages/PrivacyPolicy.vue"),
  },
  {
    path: "/conditions-utilisation",
    name: "TermsOfUse",
    component: () => import("../pages/TermsOfUse.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
