import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.css";
import "./styles/tailwind.css";
import lazyLoad from "./directives/lazyLoad";

const app = createApp(App);
const head = createHead();

app.use(head);
app.directive("lazy", lazyLoad);
app.use(router);
app.mount("#app", true);
