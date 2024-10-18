import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importer le routeur
import "./styles/tailwind.css";

const app = createApp(App);

app.use(router); // Utiliser le routeur dans l'application
app.mount("#app");
