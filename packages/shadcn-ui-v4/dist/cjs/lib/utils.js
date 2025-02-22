'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

// src-gen/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var CONTENT = "./node_modules/@zbiljic/frontie-shadcn-ui-v4/dist/cjs/components/**/*.js";

exports.CONTENT = CONTENT;
exports.cn = cn;
