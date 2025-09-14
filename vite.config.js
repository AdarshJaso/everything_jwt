import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // disable sourcemaps in production for smaller builds
    cssCodeSplit: true, // split CSS for better caching
    minify: 'esbuild', // fastest minifier
  },
  css: {
    postcss: './postcss.config.js', // ensure PostCSS uses your config
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
