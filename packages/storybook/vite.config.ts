import {default as tailwindcss} from "@tailwindcss/vite";
import {default as react} from "@vitejs/plugin-react";
import {defineConfig} from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Ensure a single React instance across all workspace packages.
    dedupe: ["react", "react-dom", "react-aria-components"],
  },
  optimizeDeps: {
    include: ["@mdx-js/react"],
    exclude: ["sb-vite"],
    esbuildOptions: {
      jsx: "automatic",
      jsxImportSource: "react",
    },
  },
});
