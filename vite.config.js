import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import unocssPresetIcons from '@unocss/preset-icons'

export default defineConfig({
  // env vars
  envDir: './src/env',
  envPrefix: '_',

  // building
  publicDir: './src/static',
  // assetsInclude: ['**/*.gltf'],
  resolve: {
    alias: {
      src:    '/src',
      lib:    '/src/lib',
      pages:  '/src/pages',
      store:  '/src/store',
    },
    // dedupe: [],
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    outDir: 'public',
    assetsDir: 'bundled',
    sourcemap: true,
    // minify: 'esbuild',
    // write: true,
    // assetsInlineLimit: 4096,
    // cssCodeSplit: true,
    // chunkSizeWarningLimit: 500,
    // manifest: false,
    // ssrManifest: false,
    // watch: null,
  },

  // plugins
  plugins: [
    react(),
    unocss({
      presets: [
        unocssPresetIcons({
          // scale: 2,
          // prefix: 'i-',
          // mode: 'auto',
          // warn: false,
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
            // 'background-color': 'red',
          }
        }),
      ]
    }),
    beep(),
  ],

  // web server
  // base: '/app/',   // assets get affected
  server: {
    port: 3000,
    host: true,
    // cors: true,
  },
  preview: {
    port: 3000,
    host: true,
    // cors: true,
  },

  // cli
  logLevel: 'info',
  clearScreen: true,
})


// beeps on build error
function beep() {
  return {
    name: 'beep',
    buildEnd(err) {
      if (err) process.stderr.write('\x07')
      // console.log("asdasdasd1")
    },
    handleHotUpdate(ctx) {
      // console.log(ctx)
    }
  }
}
