import {
  clean,
  clearPackageJson,
  compileComponents,
  fetchSource,
  installDependencies,
  reset,
  updateComponentPaths,
  updateComponents,
  updatePackageJson,
} from '@zbiljic/utils/dist/build';

const workDir = process.cwd();

await reset(workDir);
if (!import.meta.env.SKIP_CLEAN) {
  await clean(workDir);
}
await fetchSource(workDir);
await clearPackageJson(workDir);
await installDependencies(workDir);
await updateComponents(workDir);
await updateComponentPaths(workDir);
await compileComponents(workDir);
await updatePackageJson(workDir);
