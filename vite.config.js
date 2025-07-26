const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const { resolve } = require("path");

module.exports = defineConfig({
  plugins: [react()],
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