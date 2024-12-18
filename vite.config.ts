import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
import svgLoader from "vite-svg-loader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vue(), svgLoader()],
  optimizeDeps: {
    include: ["vue", "vue-router", "swiper"],
  },
  resolve: {
    alias: {
      "~/": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
