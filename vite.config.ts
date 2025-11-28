import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vital for GitHub Pages: ensures assets use relative paths (e.g., "./script.js")
  // instead of absolute paths (e.g., "/script.js") which break in subdirectories.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});