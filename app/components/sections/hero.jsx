'use client'

import React from 'react'
import Image from 'next/image'
import VideoCard from '@/components/common/video-card'
import { fontBungee, fontInter, fontRubik } from '@/styles/fonts'
import { cn, createDropshadow } from '@/lib/utils/view'
import DrezzoButton from '@/components/common/drezzo-button'
import { useRouter } from 'next/navigation'

function HeroSection() {
  const { push } = useRouter()

  return (
    <section className="flex flex-col space-y-3">
      <VideoCard />
      <TextNftProject />
      <div className="flex w-full items-center justify-between space-x-1">
        <TextCompetition />
        <Text2023 />
      </div>
      <TextPresentedBy />
      <div className="flex w-full items-center justify-between">
        <div className="text-[#e8e6e3ac]">
          <p className={cn(fontRubik.bold.className, 'text-3xl')}>
            SELECT YOUR PROJECT AND REGISTER HERE!
          </p>
          <p className={cn(fontInter.base.className, 'max-w-2xl text-2xl')}>
            NFT ART PROJECT, NFT PROJECT WITH UTILITIES & DIGITAL FASHION NFTs
            PROJECT
          </p>
        </div>
        <DrezzoButton
          onClick={() => push('/submit')}
          size="lg"
          className="text-lg"
        >
          SUBMIT NOW!
        </DrezzoButton>
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
        'pt-1.5 text-5xl text-[#FFB0F6]',
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
        'text-[9.2rem] leading-[0.80] text-white',
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
          'text-[65px] leading-[0.90] text-[#FFB0F6]',
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
          'text-[65px] leading-[0.90] text-[#FFB0F6]',
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
    <div className="flex -translate-y-6 translate-x-4 items-center justify-end space-x-2">
      <h1
        style={{
          textShadow: createDropshadow('#ffb0d9'),
        }}
        className={cn('text-5xl text-white', fontBungee.base.className)}
      >
        Presented By
      </h1>
      <div className="flex items-center">
        <Image
          src="/logos/drezzo-logo.png"
          alt="Drezzo Logo"
          width={100}
          height={70}
        />
        <span className="text-lg text-[#8A939E]">X</span>
        <Image
          src="/logos/aquacity-logo.png"
          alt="Drezzo Logo"
          width={100}
          height={70}
        />
      </div>
    </div>
  )
}

export default HeroSection
