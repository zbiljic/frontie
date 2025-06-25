import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import Bun from 'bun';
// @ts-expect-error
import fetchRepoDir from 'fetch-repo-dir';
import {
  copySync,
  ensureDirSync,
  pathExistsSync,
  readJsonSync,
  writeJson,
} from 'fs-extra/esm';
import { globby } from 'globby';

import { fetchComponents } from './registry';

const getDirectories = async (source: string): Promise<string[]> =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const workDirectories = ['dist', 'src-gen', 'tmp'];
const workFilesPatterns = ['*.backup'];

const reset = (workDir: string): void => {
  console.log('resetting');

  const packageJsonBackupPath = join(workDir, 'package.json.backup');
  if (pathExistsSync(packageJsonBackupPath)) {
    console.log('restoring package.json');
    copySync(packageJsonBackupPath, join(workDir, 'package.json'));
  }
};

const clean = async (workDir: string): Promise<void> => {
  console.log('cleaning');

  console.log('removing work directories');
  for (const workDirectory of workDirectories) {
    const p = join(workDir, workDirectory);
    if (!pathExistsSync(p)) {
      continue;
    }
    console.log(`removing ${p}`);
    // biome-ignore lint/nursery/noAwaitInLoop: utils
    await Bun.$`rm -rf ${p}`;
  }

  console.log('removing work files');
  for (const workFilePattern of workFilesPatterns) {
    // biome-ignore lint/nursery/noAwaitInLoop: utils
    const workFiles = await globby(join(workDir, workFilePattern));
    for (const workFile of workFiles) {
      console.log(`removing ${workFile}`);
      // biome-ignore lint/nursery/noAwaitInLoop: utils
      await Bun.$`rm -rf ${workFile}`;
    }
  }
};

const fetchSource = async (workDir: string): Promise<void> => {
  console.log('fetching source');

  ensureDirSync('tmp');
  ensureDirSync('tmp/source');

  const packageJsonPath = join(workDir, 'package.json');
  const packageObject = readJsonSync(packageJsonPath);
  const packageConfig = packageObject.config;

  switch (packageConfig.source.type) {
    case 'git': {
      const sourcePackageJsonPath = join(workDir, 'tmp/source', 'package.json');

      if (pathExistsSync(sourcePackageJsonPath)) {
        console.log('source already exists');
        if (import.meta.env.FORCE_FETCH) {
          const tmpSourceDir = join(workDir, 'tmp/source');
          console.log(`removing ${tmpSourceDir}`);
          await Bun.$`rm -rf ${tmpSourceDir}`;
        } else {
          return;
        }
      }

      await fetchRepoDir({
        src: packageConfig.source.url,
        dir: join(workDir, 'tmp/source'),
      });

      break;
    }
    default:
      throw new Error('Unsupported source type');
  }
};

const clearPackageJson = async (workDir: string): Promise<void> => {
  console.log('clearing package.json');

  const packageJsonPath = join(workDir, 'package.json');

  copySync(packageJsonPath, `${packageJsonPath}.backup`);

  const packageJson = readJsonSync(packageJsonPath);

  if (!import.meta.env.SKIP_UPDATE) {
    packageJson.dependencies = undefined;
    packageJson.typesVersions = undefined;
    packageJson.exports = undefined;
  }

  packageJson.scripts.build = undefined;
  packageJson.devDependencies = undefined;
  packageJson.peerDependencies = undefined;
  packageJson.peerDependenciesMeta = undefined;

  await writeJson(packageJsonPath, packageJson, { spaces: 2 });
};

const installDependencies = async (workDir: string): Promise<void> => {
  console.log('installing dependencies');

  const packageJsonPath = join(workDir, 'package.json');
  const packageObject = readJsonSync(packageJsonPath);
  const packageConfig = packageObject.config;

  const sourcePackageJsonPath = join(
    workDir,
    'tmp/source',
    packageConfig.source.directory || '',
    'package.json'
  );

  if (!pathExistsSync(sourcePackageJsonPath)) {
    throw new Error('Source package.json not found');
  }

  const sourcePackageJson = readJsonSync(sourcePackageJsonPath);

  packageObject.dependencies = packageObject.dependencies || {};
  packageObject.devDependencies = packageObject.devDependencies || {};
  packageObject.peerDependencies = packageObject.peerDependencies || {};

  for (const dependency of packageConfig.source.use.dependencies || []) {
    packageObject.dependencies[dependency] =
      sourcePackageJson.dependencies[dependency];
  }
  for (const dependency of packageConfig.source.use.devDependencies || []) {
    packageObject.devDependencies[dependency] =
      sourcePackageJson.devDependencies[dependency];
  }
  for (const dependency of packageConfig.source.use.peerDependencies || []) {
    packageObject.peerDependencies[dependency] =
      sourcePackageJson.dependencies[dependency];
  }

  await writeJson(packageJsonPath, packageObject, { spaces: 2 });

  await Bun.$`bun install --cwd ${workDir}`;
};

const updateComponents = async (workDir: string): Promise<void> => {
  console.log('updating components');

  const packageJsonPath = join(workDir, 'package.json');
  const packageObject = readJsonSync(packageJsonPath);
  const packageConfig = packageObject.config;

  const sourceDirPath = join(
    workDir,
    'tmp/source',
    packageConfig.source.directory || ''
  );
  const sourcePackageJsonPath = join(sourceDirPath, 'package.json');

  if (!pathExistsSync(sourcePackageJsonPath)) {
    throw new Error('Source package.json not found');
  }

  const sourcePackageJson = readJsonSync(sourcePackageJsonPath);

  const installDir = join(workDir, 'src-gen', 'components');

  if (!pathExistsSync(installDir)) {
    console.log('remove old components');
    await rm(installDir, {
      force: true,
      recursive: true,
    });
  }

  const libDir = join(workDir, 'src-gen', 'lib');
  const stylesFile = join(libDir, 'styles.ts');

  await mkdir(libDir, {
    recursive: true,
  });

  const registryDir = join(
    workDir,
    'tmp/source',
    packageConfig.source.directory || '',
    'registry'
  );

  const styles = await getDirectories(registryDir);
  const components = await fetchComponents();

  console.log('installing components');

  const componentDependencies = components
    .flatMap((comp) => comp.dependencies ?? [])
    .filter((dep) => (dep ? dep : false));

  for (const dep of componentDependencies) {
    const depWithVersion = `${dep}@${sourcePackageJson.dependencies[dep] ?? 'latest'}`;

    if (packageObject.dependencies[dep]) {
      console.log(`already installed ${depWithVersion}`);
      continue;
    }

    // biome-ignore lint/nursery/noAwaitInLoop: utils
    await Bun.$`bun install --cwd ${workDir} ${depWithVersion}`;
  }

  console.log('creating styles');

  await writeFile(
    stylesFile,
    `export const styles = ${JSON.stringify(styles, undefined, 2)};`
  );

  for (const name of styles) {
    console.log(`copying components for ${name}`);

    const styleSrcDir = join(sourceDirPath, `registry/${name}`);
    const styleDstDir = join(workDir, `src-gen/components/${name}`);

    const dirs = ['hooks', 'lib', 'ui'];

    for (const dir of dirs) {
      const srcDir = join(styleSrcDir, dir);
      const dstDir = join(styleDstDir, dir);

      ensureDirSync(`${dstDir}`);

      console.log(`copying ${srcDir} to ${dstDir}`);
      copySync(srcDir, dstDir);
    }
  }
};

const updateComponentPaths = async (workDir: string): Promise<void> => {
  console.log('updating component paths');

  const packageJsonPath = join(workDir, 'package.json');
  const packageObject = readJsonSync(packageJsonPath);
  const packageConfig = packageObject.config;

  const registryDir = join(
    workDir,
    'tmp/source',
    packageConfig.source.directory || '',
    'registry'
  );

  const styles = await getDirectories(registryDir);

  const initialPaths = await globby(join(workDir, 'src-gen/**/*.{tsx,ts}'));

  await Promise.all(
    initialPaths
      .filter((path) => path.includes('components'))
      .map(async (path) => {
        console.log(`updating ${relative(workDir, path)}`);

        const contentsBuffer = await readFile(path);
        let contents = contentsBuffer.toString('utf8');

        for (const name of styles) {
          contents = contents.replaceAll(
            `@/registry/${name}/`,
            `@/components/${name}/`
          );
        }

        if (path.includes('ui')) {
          // BUG: Add the React import if it's missing. This is a bug in ui.shadcn.com.
          contents =
            contents.includes('import React from') ||
            contents.includes('import * as React from')
              ? contents
              : `import * as React from "react";\n${contents}`;
        }

        await writeFile(path, contents);
      })
  );

  const libDir = join(workDir, 'src-gen', 'lib');
  const utilsFile = join(libDir, 'utils.ts');

  await writeFile(
    utilsFile,
    `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const CONTENT = "./node_modules/${packageObject.name}/dist/cjs/components/**/*.js" as const;
`
  );
};

const compileComponents = async (workDir: string): Promise<void> => {
  console.log('compiling components');

  await Bun.$`bun run --cwd ${workDir} tsup-node --config ./node_modules/@zbiljic/utils/tsup.config.esm.ts'`;
  await Bun.$`bun run --cwd ${workDir} tsup-node --config ./node_modules/@zbiljic/utils/tsup.config.cjs.ts'`;
};

const updatePackageJson = async (workDir: string): Promise<void> => {
  console.log('updating package.json');

  const packageJsonPath = join(workDir, 'package.json');
  const packageObject = readJsonSync(packageJsonPath);

  const paths = await globby(join(workDir, 'dist/cjs/**/*.js'));

  packageObject.exports = Object.fromEntries(
    paths
      .filter((path) => !path.includes('chunk-'))
      .map((fullPath) => {
        const path = relative(workDir, fullPath);

        const withoutDistribution = path.replace('dist/cjs/', '');
        const withoutDistributionAndExtension = withoutDistribution.replace(
          /\.js$/u,
          ''
        );
        const cjsPath = `./${path}`;
        const esmPath = `./dist/esm/${withoutDistributionAndExtension}.mjs`;
        const typesPath = `./dist/types/${withoutDistributionAndExtension}.d.ts`;

        return [
          `./${withoutDistributionAndExtension.replace('/ui/', '/')}`.replace(
            './index',
            '.'
          ),
          {
            import: esmPath,
            require: cjsPath,
            types: typesPath,
          },
        ];
      })
  );

  packageObject.typesVersions = {
    '*': Object.fromEntries(
      Object.entries(packageObject.exports).map(([key, value]) => [
        key.replace('./', ''),
        // @ts-expect-error
        [value.types.replace('./', '')],
      ])
    ),
  };

  packageObject.peerDependenciesMeta = {
    '@radix-ui/react-icons': {
      optional: true,
    },
    'lucide-react': {
      optional: true,
    },
    react: {
      optional: false,
    },
    'react-dom': {
      optional: false,
    },
    tailwindcss: {
      optional: false,
    },
  };

  /*
   * packageObject.main = "./dist/index.js";
   * packageObject.types = "./dist/index.d.ts";
   */

  packageObject.main = undefined;
  packageObject.module = undefined;
  packageObject.types = undefined;

  await writeJson(packageJsonPath, packageObject, { spaces: 2 });

  await Bun.$`bun install --cwd ${workDir}`;
};

export {
  reset,
  clean,
  fetchSource,
  clearPackageJson,
  installDependencies,
  updateComponents,
  updateComponentPaths,
  compileComponents,
  updatePackageJson,
};
