import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
};