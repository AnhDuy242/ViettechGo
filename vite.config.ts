import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tanstackRouter from "@tanstack/router-plugin/vite"; // 👈 import plugin

export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
