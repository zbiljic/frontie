import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// src-gen/components/new-york-v4/lib/utils.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { cn };
