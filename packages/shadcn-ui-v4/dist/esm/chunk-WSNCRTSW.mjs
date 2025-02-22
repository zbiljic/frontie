import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// src-gen/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var CONTENT = "./node_modules/@zbiljic/frontie-shadcn-ui-v4/dist/cjs/components/**/*.js";

export { CONTENT, cn };
