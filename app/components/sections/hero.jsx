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
      <div className="flex w-full -translate-y-6 items-center space-x-1 md:-translate-y-0 md:justify-between">
        <TextCompetition />
        <Text2023 />
      </div>
      <TextPresentedBy />
      <div className="flex w-full -translate-y-8 flex-col justify-between md:-translate-y-0 md:flex-row md:items-center">
        <div className="text-[#e8e6e3ac]">
          <p className={cn(fontRubik.bold.className, 'text-xl md:text-3xl')}>
            SELECT YOUR PROJECT AND REGISTER HERE!
          </p>
          <p
            className={cn(
              fontInter.base.className,
              'max-w-2xl text-sm md:text-2xl',
            )}
          >
            NFT ART PROJECT, NFT PROJECT WITH UTILITIES & DIGITAL FASHION NFTs
            PROJECT
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
        'text-[2.7rem] text-white md:text-[9.2rem] md:leading-[0.80]',
        fontBungee.inline.className,
      )}
    >
      Competition
    </h1>
  )
}

function Text2023() {
  return (
    <div>
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
    <div className="flex -translate-y-14 items-center justify-start space-x-2 md:-translate-y-2 md:translate-x-4 md:justify-end">
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
      <div className="flex items-center">
        <Image
          src="/logos/drezzo-logo.png"
          alt="Drezzo Logo"
          width={
            (globalThis.window && globalThis.window?.innerWidth) > 768
              ? 100
              : 50 || 100
          }
          height={70}
        />
        <span className="text-lg text-[#8A939E]">X</span>
        <Image
          src="/logos/aquacity-logo.png"
          alt="Drezzo Logo"
          width={
            (globalThis.window && globalThis.window?.innerWidth) > 768
              ? 100
              : 50 || 100
          }
          height={70}
        />
      </div>
    </div>
  )
}

export default HeroSection
