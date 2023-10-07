import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@vue/reactivity':
        './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
    }
  }
})
