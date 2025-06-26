import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/02-react-cafe/",
  build: {
    outDir: "docs",
    sourcemap: true,
  },
  plugins: [react()],
});
