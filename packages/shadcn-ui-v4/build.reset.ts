import { $ } from 'bun';

// reset package.json
await $`cp -v ./package.json.backup ./package.json || true`;
await $`rm -v -f ./package.json.backup || true`;
