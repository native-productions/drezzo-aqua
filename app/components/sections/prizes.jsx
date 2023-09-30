import React from 'react'
import Title from '@/components/common/title'
import Image from 'next/image'
import { cn } from '@/lib/utils/view'
import { fontBungee, fontInter } from '@/styles/fonts'

const prizesContent = [
  {
    id: 1,
    title: '1ST WINNER',
    desc: `VALUE WORTH 1000 USD AQUACITY TOKEN Investor Meetup and Travelling at Phuket, Thailand `,
    img: '/icons/gold.png',
  },
  {
    id: 2,
    title: '2ND WINNER',
    desc: 'VALUE WORTH 500 USD AQUACITY TOKEN Investor Meetup and Travelling at Phuket, Thailand',
    img: '/icons/silver.png',
  },

  {
    id: 3,
    title: '3RD WINNER',
    desc: 'VALUE WORTH 100 USD AQUACITY TOKEN Investor Meetup and Travelling at Phuket, Thailand',
    img: '/icons/bronze.png',
  },
]

function PrizesSection() {
  return (
    <section id="prizes" className="w-full">
      <Title className="mx-auto text-center md:text-left">WIN THE PRIZES</Title>
      <div className="mt-8 flex w-full flex-col items-center gap-4 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 lg:gap-8">
        {prizesContent.map((prize) => (
          <TrophyCard
            key={prize.id}
            id={prize.id}
            title={prize.title}
            desc={prize.desc}
            img={prize.img}
          />
        ))}
      </div>
      <div className="flex w-full justify-center py-8">
        <Image
          src="/images/Gallery.png"
          alt="Teaser Poster"
          width={1185}
          height={0}
          className="rounded-xl object-contain"
        />
      </div>
    </section>
  )
}

function TrophyCard({ id, title, desc, img }) {
  return (
    <div
      className={cn(
        'h-[300px] w-[300px] rounded-2xl bg-border-blue-linear-gradient p-0.5 md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px]',
        'transition-all duration-200 ease-in-out hover:z-40 lg:scale-90 lg:hover:scale-95',
        id === 1 && 'z-40',
        id === 2 && 'z-30',
        id === 3 && 'z-20',
      )}
    >
      <div className="nft-preview-dark grid h-full place-content-center rounded-2xl text-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={img}
            width={210}
            height={170}
            alt={title}
            className="max-w-[130px] lg:max-w-none"
          />
          <h1
            className={cn(
              'mb-2 text-lg font-bold text-white md:text-sm lg:text-2xl',
              fontBungee.base.className,
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              'px-4 text-xs text-[#e8e6e3ac] md:text-[10px] lg:text-base',
              fontInter.base.className,
            )}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrizesSection
