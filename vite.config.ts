import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


export default defineConfig({
  base: '/EdwardC22.github.io/', // 关键：设置为你的仓库名
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
