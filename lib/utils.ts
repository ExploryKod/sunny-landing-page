import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names: clsx for conditionals / arrays, tailwind-merge so later
 * inputs win per Tailwind group (e.g. `p-2` overrides `p-4` from the base).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
