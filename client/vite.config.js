import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.stl", "**/*.obj", "**/*.glb", "**/*.gltf"],
  plugins: [react()],
});
