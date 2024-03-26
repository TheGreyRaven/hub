import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// @ts-expect-error Stupid type props that I'm to lazy to add.
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
