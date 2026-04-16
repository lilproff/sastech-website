import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNGNtoUSD(ngnStr: string, rate: number) {
  // Handle ranges like "₦200k–₦550k"
  const rangeMatch = ngnStr.match(/₦?([\d.]+)([kM]?)–₦?([\d.]+)([kM]?)/);
  if (rangeMatch) {
    let low = parseFloat(rangeMatch[1]);
    let lowUnit = rangeMatch[2];
    let high = parseFloat(rangeMatch[3]);
    let highUnit = rangeMatch[4];

    if (lowUnit === 'k') low *= 1000;
    if (lowUnit === 'M') low *= 1000000;
    if (highUnit === 'k') high *= 1000;
    if (highUnit === 'M') high *= 1000000;

    return `$${Math.round(low / rate).toLocaleString()} – $${Math.round(high / rate).toLocaleString()}`;
  }

  // Handle single values like "₦178k+"
  const singleMatch = ngnStr.match(/₦?([\d.]+)([kM]?)\+?/);
  if (singleMatch) {
    let val = parseFloat(singleMatch[1]);
    let unit = singleMatch[2];
    if (unit === 'k') val *= 1000;
    if (unit === 'M') val *= 1000000;
    return `$${Math.round(val / rate).toLocaleString()}${ngnStr.includes('+') ? '+' : ''}`;
  }

  return ngnStr;
}
