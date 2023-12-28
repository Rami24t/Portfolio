import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.stl", "**/*.obj", "**/*.glb", "**/*.gltf"],
  plugins: [react()],
  base: "./",
  vercel: {
    rewrites: [
      {
        source: "/(.*)",
        destination: "/index.html",
      },
      {
        source: "/sitemap.xml",
        has: [
          {
            type: "host",
            value: "rami-al-saadi.vercel.app",
          },
        ],
        destination: "/sitemap-app.xml",
      },
      {
        source: "/sitemap.xml",
        has: [
          {
            type: "host",
            value: "www.ramidev.tech",
          },
        ],
        destination: "/sitemap-tech.xml",
      },
    ],
  },
});
