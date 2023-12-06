import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [{ id: 'en-US', name: 'EN' }],
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'src/components/' },
      { type: 'tool', dir: '/src/tools' },
    ],
  },
  themeConfig: {
    name: '',
    logo: 'https://dbgpt.site/LOGO_1.png',
    footer: false,
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
