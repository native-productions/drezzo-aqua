import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const createDropshadow = (color, blur = 0.5) => `0 0 ${blur}rem ${color}`

export const capitalize = (string) => {
  const words = string.split(/(?=[A-Z])|\s+/)
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  )
  return capitalizedWords.join(' ')
}

export const redirectToGForm = () => {
  window.open(
    'https://forms.gle/iwDmz1eVrZc5ifvJA',
    '_blank',
  )
}