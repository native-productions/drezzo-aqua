/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

'use client'

import { cn } from '@/lib/utils/view'
import { fontInter } from '@/styles/fonts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { termsContent, termsContent2 } from '@/lib/constants/terms'
import Image from 'next/image'
import React from 'react'
import Title from '@/components/common/title'

function TermsSection() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOpen2 = () => {
    setIsOpen2(!isOpen2)
  }

  return (
    <section id="terms-and-conditions">
      <header className="space-y-4">
        <Title className="mx-auto text-center md:text-left">
          TERMS AND CONDITION
        </Title>
        <p
          className={cn(
            'text-center text-base text-[#e8e6e3ac] md:text-left md:text-2xl',
            fontInter.base.className,
          )}
        >
          Please read these Terms and Conditions {`("Terms")`} carefully before
          participating in our NFT PROJECT COMPETITION 2023 {`("Competition")`}.
          By entering the Competition, you agree to comply with these Terms and
          any other rules or guidelines provided by the organizers of the
          Competition.
        </p>
      </header>
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-evenly">
        <Image
          src="/digital-fashion/terms1.png"
          alt="digital-fashion-drezzo"
          className="mb-8 max-w-[200px] md:mb-0 md:max-w-none md:-translate-y-6"
          width={430}
          height={430}
        />
        <Accordion
          type="single"
          collapsible
          className="mt-3 max-w-[260px] md:w-1/2 md:max-w-none"
        >
          {termsContent.map(({ id, title, content }) => (
            <AccordionItem key={id} value="item-1">
              <AccordionTrigger onClick={handleOpen}>
                <div className="flex items-center space-x-3">
                  <AccordionChip isOpen={isOpen} />
                  <Title
                    withoutDropShadow
                    className="flex items-center gap-x-2 text-base text-white md:text-2xl"
                  >
                    <span>{title}</span>
                  </Title>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {!!Array.isArray(content) &&
                  content.map((item, index) => (
                    <ul
                      key={index}
                      className="list-outside list-disc pl-12 text-sm text-[#e8e6e3ac]"
                    >
                      {!!Array.isArray(item) && (
                        <ul className="ml-6 -translate-x-14 list-outside list-[roman] pl-12">
                          {item.map((i, idx) => (
                            <li key={idx}>{i}</li>
                          ))}
                        </ul>
                      )}
                      {!Array.isArray(item) && <li>{item}</li>}
                    </ul>
                  ))}
                {!Array.isArray(content) && (
                  <p className="pl-9 text-sm text-[#e8e6e3ac]">{content}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <br className="hidden md:visible" />
      <br className="hidden md:visible" />
      <br className="hidden md:visible" />
      <br className="hidden md:visible" />
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-evenly">
        <Accordion
          type="single"
          collapsible
          className="mt-3 max-w-[260px] md:w-1/2 md:max-w-none"
        >
          {termsContent2.map(({ id, title, content }) => (
            <AccordionItem key={id} value="item-1">
              <AccordionTrigger onClick={handleOpen2}>
                <div className="flex items-center space-x-3">
                  <AccordionChip isOpen={isOpen2} />
                  <Title
                    withoutDropShadow
                    className="flex items-center gap-x-2 text-base text-white md:text-2xl"
                  >
                    <span>{title}</span>
                  </Title>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {!!Array.isArray(content) &&
                  content.map((item, index) => (
                    <ul
                      key={index}
                      className="list-outside list-disc pl-12 text-sm text-[#e8e6e3ac]"
                    >
                      {!!Array.isArray(item) && (
                        <ul className="list-outside list-[upper-roman]">
                          {item.map((i, idx) => (
                            <li key={idx}>{i}</li>
                          ))}
                        </ul>
                      )}
                      {!Array.isArray(item) && <li>{item}</li>}
                    </ul>
                  ))}
                {!Array.isArray(content) && (
                  <p className="text-sm text-[#e8e6e3ac]">{content}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Image
          src="/digital-fashion/terms2.png"
          alt="digital-fashion-drezzo"
          className="mt-8 max-w-[200px] md:mt-0 md:max-w-none md:-translate-y-6"
          width={430}
          height={430}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="mt-6 flex w-full flex-col items-center md:mt-12 md:flex-row md:items-start md:justify-evenly">
        <Image
          src="/digital-fashion/terms3.png"
          alt="digital-fashion-drezzo"
          className="max-w-[200px] md:max-w-none md:-translate-y-6"
          width={430}
          height={430}
        />
        <div className="mt-6 space-y-6 md:mt-0 md:w-1/2">
          <div className="flex flex-col justify-start">
            <Title className="text-2xl md:text-3xl">judging</Title>
            <ul className="ml-4 mt-2 list-decimal text-sm text-[#e8e6e3ac] md:text-lg">
              <li>
                Entries will be judged based on creativity, originality,
                technical execution, and adherence.
              </li>
              <li>
                The judging panel will consist of judges selected by the
                officials from DREZZO and AQUACITY.
              </li>
              <li>The decisions of the judges are final and binding.</li>
            </ul>
          </div>
          <div className="flex flex-col justify-start">
            <Title
              withoutDropShadow
              className="text-2xl text-white md:text-3xl"
            >
              Minting Process
            </Title>
            <p className="mt-2 text-sm text-[#e8e6e3ac] md:text-lg">
              All NFT project competitions are agree to be minted on platforms
              owned by DREZZO or associated platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AccordionChip({ isOpen }) {
  return <div className="text-base text-white">{!isOpen ? '[+]' : '[-]'}</div>
}

export default TermsSection
