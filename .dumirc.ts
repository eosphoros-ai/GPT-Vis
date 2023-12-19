import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [{ id: 'en-US', name: 'EN' }],
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components/' }],
  },
  themeConfig: {
    name: '',
    logo: '/logo.png',
    footer: false,
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
