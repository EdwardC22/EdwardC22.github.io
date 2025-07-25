import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath, URL } from 'node:url';

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
    alias: [
      { find: "@langs", replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src/langs") },
      { find: "@", replacement: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src") }
    ]
  }
});
