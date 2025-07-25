import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["static/"],
  build: {
    outDir: "dist"
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  resolve: {
    alias: {
      "@langs": resolve(__dirname, "src/langs"),
      "@": resolve(__dirname, "src")
    }
  }
});
