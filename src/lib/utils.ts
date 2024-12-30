import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (str: String, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
