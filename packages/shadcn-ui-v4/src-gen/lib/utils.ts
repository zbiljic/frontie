import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const CONTENT = "./node_modules/@zbiljic/frontie-shadcn-ui-v4/dist/cjs/components/**/*.js" as const;
