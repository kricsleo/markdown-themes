/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import unpluginMarkdown from 'unplugin-markdown-2-html/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    // https://github.com/antfu/unocss => unocss.config.ts
    Unocss(),
    unpluginMarkdown(),
  ],
})
