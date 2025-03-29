// vite.config.js
export default {
  // Base public path when served in production
  base: "/",

  // Configure server options
  server: {
    port: 3000,
    open: true,
  },

  // Build options
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: true,
  },

  // Plugins can be added here if needed
  plugins: [],
}

