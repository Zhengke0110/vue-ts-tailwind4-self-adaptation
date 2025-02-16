import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/vue-ts-tailwind4-self-adaptation/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
