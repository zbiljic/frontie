// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  sortFirst: [
    'name',
    'version',
    'description',
    'keywords',
    'homepage',
    'repository',
    'bugs',
    'license',
    'private',
    'author',
    'packageManager',
    'engines',
    'type',
    'bin',
    'types',
    'main',
    'module',
    'exports',
    'files',
    'config',
    'workspaces',
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'trustedDependencies',
  ],
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'exports',
    'keywords',
    'peerDependencies',
    'resolutions',
    'scripts',
    'trustedDependencies',
    'workspaces',
  ],
  customTypes: {
    engines: {
      path: 'engines',
      strategy: 'versionsByName',
    },
    packageManager: {
      path: 'packageManager',
      strategy: 'name@version',
    },
  },
  versionGroups: [
    {
      label: 'Use workspace protocol consuming local packages',
      packages: ['**'],
      dependencies: ['$LOCAL'],
      dependencyTypes: ['!local'],
      pinVersion: 'workspace:*',
    },
    {
      label: '@types packages should only be under devDependencies',
      dependencies: ['@types/**'],
      dependencyTypes: ['!dev'],
      isBanned: true,
    },
  ],
};

module.exports = config;
