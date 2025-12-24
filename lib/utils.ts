import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getContactEmail = (language: string) => {
  return language === 'no' ? 'martyna@expandnord.com' : 'klaudija@expandnord.com'
}

export const openContactEmail = (language: string) => {
  const email = getContactEmail(language)
  window.location.href = `mailto:${email}`
}
