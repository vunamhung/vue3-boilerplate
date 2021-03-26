import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';
import svg from 'vite-plugin-vue-svg';
import pluginImport from 'vite-plugin-importer';
import radar from 'vite-plugin-radar';

export default defineConfig({
  plugins: [
    vue(),
    svg(),
    pwa({ workbox: { cleanupOutdatedCaches: true, skipWaiting: true, clientsClaim: true } }),
    pluginImport({
      libraryName: 'element-plus',
      libraryDirectory: 'es',
      // customStyleName: (name) => resolve(__dirname, `./src/assets/theme-chalk/${name.replace('el-', '')}.css`),
    }),
    radar({
      analytics: { id: 'G-XXXXX' },
      gtm: [{ id: 'GTM-XXXXX' }],
      pixel: [{ id: 'XXXXXXX' }],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~', replacement: resolve(__dirname, 'node_modules') },
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
    ],
  },
});
