import path from "path";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

/** @type {import('vite').UserConfig} */
export default {
  base: "/three-pinata/",
  build: {
    outDir: "./dist-demo",
    sourcemap: true,
    rollupOptions: {
      // Required to prevent Rapier issue: https://github.com/dimforge/rapier.js/issues/278
      treeshake: false,
    },
  },
  plugins: [wasm(), topLevelAwait()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
