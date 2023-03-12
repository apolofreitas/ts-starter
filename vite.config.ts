import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '~': '/src',
      },
    },
    build: {
      outDir: 'build',
      assetsDir: '',
      minify: false,
      rollupOptions: {
        preserveEntrySignatures: 'strict',
        input: '/src/main.ts',
        output: {
          format: 'cjs',
          preserveModules: true,
          entryFileNames: '[name].js',
        },
      },
    },
  }
})
