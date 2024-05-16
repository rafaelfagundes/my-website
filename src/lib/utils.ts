import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateYearsOfExperience() {
  const currentYear = new Date().getFullYear();
  const startYear = 2012;
  return currentYear - startYear;
}
