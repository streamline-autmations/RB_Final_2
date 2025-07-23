import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src', // Tell Vite to treat /src as the project root
  plugins: [react()],
  build: {
    outDir: '../dist', // Output still goes to root-level dist
    emptyOutDir: true, // Clears old build before building
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
