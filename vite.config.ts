import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Specify your app's base URL if necessary
  build: {
    outDir: "build", // Specify your output directory
    emptyOutDir: true, // Clear output directory before building
    manifest: true, // Generate manifest.json for PWA
    rollupOptions: {
      // Add any rollup options here
    },
  },
});
