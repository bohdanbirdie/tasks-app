/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// @ts-expect-error
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
