import { createRouter, createWebHistory } from "vue-router";
import Home from "@/sections/Home.vue"; // Mise à jour pour importer la nouvelle page d'accueil
import PrivacyPolicy from "@/sections/PrivacyPolicy.vue";
import TermsOfUse from "@/sections/TermsOfUse.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/terms-of-use",
    name: "TermsOfUse",
    component: TermsOfUse,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
