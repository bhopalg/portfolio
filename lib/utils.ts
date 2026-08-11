import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function yearsSince2014(): number {
  const startDate = new Date(2014, 0, 1); // Jan 1, 2014
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();

  // If we haven't reached the anniversary yet this year, subtract 1
  const hasHadAnniversaryThisYear =
    now.getMonth() > startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() >= startDate.getDate());

  if (!hasHadAnniversaryThisYear) {
    years -= 1;
  }

  return years;
}
