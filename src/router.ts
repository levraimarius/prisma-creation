import { createRouter, createWebHistory } from "vue-router";
import Home from './sections/Home.vue';
import PrivacyPolicy from "./sections/PrivacyPolicy.vue";
import TermsOfUse from "./sections/TermsOfUse.vue";

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
