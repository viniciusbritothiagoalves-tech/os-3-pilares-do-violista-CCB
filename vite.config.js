import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        politicas: resolve(__dirname, 'politicas.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
