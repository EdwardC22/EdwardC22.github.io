import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


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
      { find: "@langs", replacement: path.resolve(__dirname, "src/langs") },
      { find: "@", replacement: path.resolve(__dirname, "src") }
    ]
  }
});
