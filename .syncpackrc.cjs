// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  source: ['package.json', 'packages/*/package.json'],
  sortFirst: [
    'name',
    'version',
    'description',
    'homepage',
    'packageManager',
    'license',
    'private',
    'author',
    'keywords',
    'sideEffects',
    'main',
    'module',
    'types',
    'exports',
    'repository',
    'engines',
    'workspaces',
    'scripts',
    'peerDependencies',
    'dependencies',
    'devDependencies',
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
      dependencies: ['@types/**'],
      dependencyTypes: ['!dev'],
      isBanned: true,
      label: '@types packages should only be under devDependencies',
    },
  ],
};

module.exports = config;
