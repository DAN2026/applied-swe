import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDefaultStartEndDates(): [string, string] {
  
  const pad = (n: number) => n.toString().padStart(2, "0"); // Ensures proper formatting to match stored DATE in the db, basically makes sure numbers are 2 digits

  const today = new Date();
  const endYear = today.getFullYear();
  const endMonth = today.getMonth(); 

  
  const lastDay = new Date(endYear, endMonth + 1, 0).getDate();
  const endDate = `${endYear}-${pad(endMonth + 1)}-${pad(lastDay)} 23:59:59.999`; // End date

  
  const startDateObj = new Date(endYear, endMonth - 5, 1);
  const startDate = `${startDateObj.getFullYear()}-${pad(startDateObj.getMonth() + 1)}-01 00:00:00.000`; // Start date

  return [startDate, endDate];
}

export function generateMonthNames(startDate: string, endDate: string): string[] {

  const start = new Date(startDate);
  const end = new Date(endDate);
  const months: string[] = [];

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const current = new Date(start.getFullYear(), start.getMonth(), 1);

  while (current <= end) {
    months.push(`${monthNames[current.getMonth()]} ${current.getFullYear()}`);
    current.setMonth(current.getMonth() + 1);
  }

  return months;
}

