import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    coverage: {
      all: true,
      includeSource: ["./src/**"],
      exclude: ["**/main.js", "**/test/*", "vite.config.js"]
    },
    environment: "jsdom"
  }
});
