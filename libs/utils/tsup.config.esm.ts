import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src-gen/**/*'],
  target: 'es2020',
  minify: false,
  outDir: './dist/esm',
  format: ['esm'],
  clean: true,
  tsconfig: './tsconfig.json',
  treeshake: 'recommended',
});
