import React from 'react'
import Title from '@/components/common/title'
import Image from 'next/image'
import { cn } from '@/lib/utils/view'
import { fontBungee, fontInter } from '@/styles/fonts'

const prizesContent = [
  {
    id: 2,
    title: '2ND WINNER',
    desc: '500 USD WORTH OF AQUACITY TOKEN',
    img: '/icons/silver.png',
  },
  {
    id: 1,
    title: '1ST WINNER',
    desc: `BUSINESS TRIP TO PHUKET, THAILAND (VALUE OF 1000 USD) & 1000 USD WORTH -OF AQUACITY TOKEN`,
    img: '/icons/gold.png',
  },
  {
    id: 3,
    title: '3RD WINNER',
    desc: '100 USD WORTH OF AQUACITY TOKEN',
    img: '/icons/bronze.png',
  },
]

function PrizesSection() {
  return (
    <section id="prizes">
      <Title>WIN THE PRIZES</Title>
      <div className="mt-8 grid grid-cols-3 gap-8">
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
    </section>
  )
}

function TrophyCard({ id, title, desc, img }) {
  return (
    <div
      className={cn(
        'h-[400px] w-[400px] rounded-2xl bg-border-blue-linear-gradient p-0.5',
        (id === 2 || id === 3) && 'scale-90',
      )}
    >
      <div className="nft-preview-dark grid h-full place-content-center rounded-2xl text-center">
        <div className="flex flex-col items-center justify-center">
          <Image src={img} width={210} height={170} alt={title} />
          <h1
            className={cn(
              'mb-2 text-2xl font-bold text-white',
              fontBungee.base.className,
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              'px-4 text-lg text-[#e8e6e3ac]',
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
