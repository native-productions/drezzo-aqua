'use client'

import React from 'react'
import Image from 'next/image'
import { fontBungee, fontInter, fontRubik } from '@/styles/fonts'
import { cn, createDropshadow } from '@/lib/utils/view'
import { useRouter } from 'next/navigation'
import DrezzoButton from '../common/drezzo-button'

function HeroSection() {
  const { push } = useRouter()

  return (
    <section className="flex flex-col items-center justify-center space-y-0 md:space-y-2">
      <Image
        src="/images/banner.png"
        alt="Teaser Poster"
        width={1150}
        height={0}
        className="rounded-3xl object-contain"
      />
      <div className="mt-6 md:mt-4">
        <TextPresentedBy />
        <TextCompetition />
      </div>
      <div className="flex w-full justify-center py-6">
        <DrezzoButton
          className="mx-auto h-12 text-lg md:mx-0"
          onClick={() => push('/submit')}
        >
          SUBMIT NOW!
        </DrezzoButton>
      </div>
    </section>
  )
}

// WIN AN EXCLUSIVE CHANCE TO INVESTOR MEET UP AND TRAVEL IN PHUKET,
// THAILAND (3 DAYS 2 NIGHTS)

function TextCompetition() {
  return (
    <div className="w-full text-center">
      <h1
        style={{
          textShadow: createDropshadow('#ffb0d9', 0.7),
        }}
        className={cn(
          'text-5xl text-[#FFB0F6] sm:text-[86px] md:text-8xl lg:text-9xl xl:text-[168px] xl:leading-[1]',
          fontBungee.inline.className,
        )}
      >
        <span>NFT PROJECT</span>
      </h1>
      <h1
        style={{
          textShadow: createDropshadow('#ffb0d9', 0.7),
        }}
        className={cn(
          'w-full break-before-avoid text-4xl text-[#FFB0F6] sm:text-[58px] sm:leading-[1] md:text-[64px] md:leading-[1] lg:text-[85px] xl:text-[112px] xl:leading-[1]',
          fontBungee.inline.className,
        )}
      >
        <span>Competition 2023</span>
      </h1>
    </div>
  )
}

function TextPresentedBy() {
  return (
    <div className="flex w-full items-center justify-center">
      <h1
        style={{
          textShadow: createDropshadow('#ffb0d9'),
        }}
        className={cn(
          'text-xl uppercase text-white md:text-3xl',
          fontInter.bold.className,
        )}
      >
        Presented By
      </h1>
      <div className="flex w-max items-center justify-center">
        <Image
          src="/logos/drezzo-logo.png"
          alt="Drezzo Logo"
          className="-mr-4 w-full max-w-[75px] object-contain md:max-w-[100px] lg:max-w-[120px]"
          width={120}
          height={0}
        />
        <span className="text-lg text-[#8A939E]">X</span>
        <Image
          src="/logos/aquacity-logo.png"
          alt="Aquacity Logo"
          className="-ml-4 w-full max-w-[75px] object-contain md:max-w-[100px] lg:max-w-[120px]"
          width={120}
          height={0}
        />
      </div>
    </div>
  )
}

export default HeroSection
