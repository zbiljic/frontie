import type { BuildConfig } from 'bun';
import isolatedDecl from 'bun-plugin-isolated-decl';
import { globby } from 'globby';

await Bun.$`rm -rf ./dist`;

const entrypoints = await globby('./src/**/*.ts');

const defaultBuildConfig: BuildConfig = {
  entrypoints: entrypoints,
  root: 'src',
  outdir: './dist',
  target: 'node',
  plugins: [
    isolatedDecl({
      forceGenerate: true,
    }),
  ],
};

await Promise.all([
  Bun.build({
    ...defaultBuildConfig,
    format: 'esm',
    naming: '[dir]/[name].js',
  }),
  Bun.build({
    ...defaultBuildConfig,
    format: 'cjs',
    naming: '[dir]/[name].cjs',
  }),
]);
