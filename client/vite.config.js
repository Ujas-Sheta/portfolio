/**
 * vite.config.js
 *
 * Vite configuration for the React portfolio client.
 *
 * KEY SETTING — proxy:
 *   All /api/* requests during development are forwarded to the
 *   Express server on port 5000. No CORS issues in dev.
 *
 * HOW TO START:
 *   Terminal 1:  cd server && npm run dev
 *   Terminal 2:  cd client && npm run dev
 *   Open:        http://localhost:5173
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
