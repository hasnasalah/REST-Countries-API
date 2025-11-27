import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/UI',
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    outDir: '../../dist',   // from src/UI → root/dist
    emptyOutDir: true
  }
});