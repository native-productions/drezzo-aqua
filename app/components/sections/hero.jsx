'use client'

import React from 'react'
import Image from 'next/image'
import VideoCard from '@/components/common/video-card'
import { fontBungee, fontInter, fontRubik } from '@/styles/fonts'
import { cn, createDropshadow } from '@/lib/utils/view'

function HeroSection() {
  return (
    <section className="flex flex-col space-y-3">
      <VideoCard />
      <TextNftProject />
      <div className="flex w-full -translate-y-6 items-center md:-translate-y-0 md:justify-between">
        <TextCompetition />
        <Text2023 className="md:hidden" />
      </div>
      <p
        style={{
          textShadow: createDropshadow('#ffb0d9'),
        }}
        className={cn(
          '-translate-y-10 font-bold text-gray-200 md:-translate-y-0 md:text-xl',
          fontBungee.base.className,
        )}
      >
        WIN AN EXCLUSIVE CHANCE TO INVESTOR MEET UP AND TRAVEL IN PHUKET,
        THAILAND (3 DAYS 2 NIGHTS)
      </p>
      <TextPresentedBy />
      <div className="flex w-full -translate-y-8 flex-col justify-between md:-translate-y-0 md:flex-row md:items-center">
        <div className="text-[#e8e6e3ac]">
          <p className={cn(fontRubik.bold.className, 'text-xl md:text-3xl')}>
            SUBMIT YOUR NFT PROJECT
          </p>
          <p
            className={cn(
              fontInter.base.className,
              'max-w-2xl text-sm md:text-2xl',
            )}
          >
            REAL ESTATE, HEALTH ENTERTAINMENT, PFP, 1/1, ART, DIGITAL FASHION,
            GAMING, AND OTHERS
          </p>
        </div>
      </div>
    </section>
  )
}

function TextNftProject() {
  return (
    <h1
      style={{
        textShadow: createDropshadow('#ffb0d9'),
      }}
      className={cn(
        'pt-1.5 text-[1rem] text-[#FFB0F6] md:text-5xl',
        fontBungee.base.className,
      )}
    >
      NFT PROJECT
    </h1>
  )
}

function TextCompetition() {
  return (
    <h1
      style={{
        textShadow: createDropshadow('#ffb0d9', 0.7),
      }}
      className={cn(
        'flex text-[2.7rem] text-white md:break-all md:text-[8.2rem] md:leading-[0.80] lg:text-[9.2rem] xl:break-normal',
        fontBungee.inline.className,
      )}
    >
      <span>Competition</span> <Text2023 className="hidden md:block" />
    </h1>
  )
}

function Text2023({ props, className }) {
  return (
    <div {...props} className={cn(className)}>
      <h1
        style={{
          textShadow: createDropshadow('#9051D4', 0.7),
        }}
        className={cn(
          'text-xl text-[#FFB0F6] md:text-[65px] md:leading-[0.90]',
          fontBungee.inline.className,
        )}
      >
        20
      </h1>
      <h1
        style={{
          textShadow: createDropshadow('#9051D4', 0.7),
        }}
        className={cn(
          '-mt-3 text-xl text-[#FFB0F6] md:-mt-0 md:text-[65px] md:leading-[0.90]',
          fontBungee.inline.className,
        )}
      >
        23
      </h1>
    </div>
  )
}

function TextPresentedBy() {
  return (
    <div className="flex -translate-y-14 flex-col justify-start pt-4 md:-translate-y-2 md:translate-x-4 md:flex-row md:items-center md:justify-end md:space-x-2 md:pt-0">
      <h1
        style={{
          textShadow: createDropshadow('#ffb0d9'),
        }}
        className={cn(
          'text-2xl text-white md:text-5xl',
          fontBungee.base.className,
        )}
      >
        Presented By
      </h1>
      <div className="flex w-full items-center justify-center md:w-max md:justify-end">
        <Image
          src="/logos/drezzo-logo.png"
          alt="Drezzo Logo"
          width={120}
          height={0}
        />
        <span className="text-lg text-[#8A939E]">X</span>
        <Image
          src="/logos/aquacity-logo.png"
          alt="Drezzo Logo"
          width={120}
          height={0}
        />
      </div>
    </div>
  )
}

export default HeroSection
