'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

// src-gen/components/new-york-v4/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

exports.cn = cn;
