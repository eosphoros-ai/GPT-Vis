import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve('./dev'),
  server: { port: 8080, open: '/' },
});
