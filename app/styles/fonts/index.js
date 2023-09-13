/* eslint-disable camelcase */
import { Inter, Bungee, Bungee_Inline, Rubik } from 'next/font/google'

const interBase = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
})

const interMedium = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: '500',
})

const interBold = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: '700',
})

const bungeeBase = Bungee({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
})

const rubikBold = Rubik({
  subsets: ['latin', 'latin-ext'],
  weight: '900',
})

const bungeeInline = Bungee_Inline({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
})

export const fontInter = {
  base: interBase,
  medium: interMedium,
  bold: interBold,
}

export const fontBungee = {
  base: bungeeBase,
  inline: bungeeInline,
}

export const fontRubik = {
  bold: rubikBold,
}
