import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {resolve} from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/auto-details-shop/',
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {find: '@features', replacement: resolve(__dirname, 'src/features')},
      {find: '@shared', replacement: resolve(__dirname, 'src/shared')},
      {find: '@core', replacement: resolve(__dirname, 'src/core')},
      {find: '@store', replacement: resolve(__dirname, 'src/store')},
    ],
  },
});
