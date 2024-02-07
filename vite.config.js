import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set your preferred chunk size limit in KB
    rollupOptions: {
      output: {
        manualChunks: {
          // Specify your manual chunking rules here if needed
        },
      },
    },
  },
});
