import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import TanStackRouterVite from "@tanstack/router-plugin/vite"; // 👈 import plugin

export default defineConfig({
 plugins: [
    TanStackRouterVite({
      // Cấu hình để tránh permission issues
      generatedRouteTree: './src/routeTree.gen.ts',
      quoteStyle: 'single',
    }),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
