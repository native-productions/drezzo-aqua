import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const createDropshadow = (color, blur = 0.5) => `0 0 ${blur}rem ${color}`
