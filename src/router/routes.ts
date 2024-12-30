import Home from "../pages/Home.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import TermsOfUse from "../pages/TermsOfUse.vue";
import CityPage from "../pages/CityPage.vue";
import NotFound from "../pages/NotFound.vue";
import { cities } from "./cities";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];