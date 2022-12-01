import { defineConfig } from 'tsup'

import tsupConfig from './tsup.config'

export default defineConfig({
  ...tsupConfig,
  watch: true,
  sourcemap: true,
  onSuccess: 'NODE_OPTIONS="--enable-source-maps" yarn start',
})
