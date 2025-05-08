import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}
