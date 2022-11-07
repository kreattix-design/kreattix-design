import react from '@vitejs/plugin-react'
import CleanCss from 'clean-css'
import scss from 'rollup-plugin-scss'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx,js,jsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/**/*'],
    }),
    scss({
      failOnError: true,
      output: async function (styles) {
        const dirname = 'dist/css/'
        mkdirSync(dirname, { recursive: true })
        writeFileSync(dirname + 'kreattix-design.css', styles)
        const compressed = new CleanCss().minify(styles).styles
        writeFileSync(dirname + 'kreattix-design.min.css', compressed)
      },
    }),
  ],
  envPrefix: 'KREATTIX',
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'kreattix-design',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
}))
