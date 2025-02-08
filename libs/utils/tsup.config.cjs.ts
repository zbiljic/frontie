import { defineConfig } from 'tsup';

import esmConfig from './tsup.config.esm';

export default defineConfig({
  ...esmConfig,
  outDir: './dist/cjs',
  format: ['cjs'],
  onSuccess: 'bun tsc -p ./tsconfig.types.json',
});
