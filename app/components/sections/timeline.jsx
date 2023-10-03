import Title from '@/components/common/title'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils/view'
import { jetbrainsMono } from '@/styles/fonts'
import Image from 'next/image'

function TimelineSection() {
  return (
    <section id="timeline" className="w-full space-y-10 pb-6 pt-3 md:pt-0">
      <div className="space-y-4 md:space-y-8">
        <Title className="mx-auto text-center md:text-left">
          Timeline of competition:
        </Title>
        <div className="w-full md:flex md:justify-center">
          <TimelineSteps />
        </div>
      </div>
      <div>
        <Title
          className="text-2xl text-white md:text-left md:text-4xl"
          withoutDropShadow
        >
          finalist rules:
        </Title>
        <p className="mt-2 text-lg text-[#e8e6e3ac] md:text-2xl">
          We will choose 10 finalist only for the competition
        </p>
        <ul className="w-full list-inside list-disc text-lg text-[#e8e6e3ac] md:ml-8 md:list-outside md:text-2xl [&>li]:w-full">
          <li>
            Finalist will be notified by Telegram or through the contact
            information provided during the entry submission process
          </li>
          <li>Finalist must respond to the notification within 3 days</li>
          <li>
            If winner does not respond within the specified timeframe, the
            organizers may select an alternate finalist
          </li>
          <li>
            The prizes are entirely the rights of the organizer, that all
            winners are required to follow the schedule provided by the
            committee within an implementation period of 1 year or with
            amplification from the organizer to the winners.
          </li>
          <li>
            If within this time period the organizer is unable to implement the
            prize, the organizer will provide a replacement in the form of
            assets worth 750 USD for the 1st winner, 500 USD for the 2nd winner,
            250 UD for the 3rd winner.
          </li>
        </ul>
      </div>
      <Card className="h-[541] w-full overflow-hidden border-none bg-transparent p-0">
        <Image
          src="/community-images/gallery.png"
          alt="drezzo community gallery"
          className="w-full"
          draggable={false}
          width={1152}
          height={541}
        />
      </Card>
    </section>
  )
}

function TimelineSteps() {
  return (
    <>
      <div className="flex w-full flex-col items-center space-y-3 md:hidden [&>section]:max-w-xs">
        <Step id="#1" title="competition open" icon="/icons/t1.png" size={48} />
        <Step
          id="#2"
          title="submission process"
          icon="/icons/t2.png"
          size={48}
        />
        <Step id="#3" title="judging process" icon="/icons/t3.png" size={48} />
        <Step
          id="#4"
          title="10 finalist announcement"
          icon="/icons/t4.png"
          size={48}
        />
        <Step
          id="#5"
          title="awarding for three winners"
          icon="/icons/t5.png"
          size={48}
        />
      </div>
      <div className="hidden space-x-10 md:flex">
        <div className="grid grid-cols-1">
          <Step
            id="#1"
            title="competition open"
            className="max-w-[306px] justify-end text-right"
          />
          <div className="flex w-full justify-end">
            <Image
              src="/icons/t2.png"
              alt="arrow"
              width={188}
              height={0}
              draggable={false}
              className="scale-125"
            />
          </div>
          <Step
            id="#3"
            title="judging process"
            className="max-w-[306px] justify-end text-right"
          />
          <div className="flex w-full justify-end">
            <Image
              src="/icons/t4.png"
              alt="arrow"
              width={188}
              height={0}
              draggable={false}
            />
          </div>
          <Step
            id="#5"
            title="awarding for three winners"
            className="max-w-[306px] justify-end text-right"
          />
        </div>
        <div className="relative flex h-full w-1.5 max-w-[6px] justify-center overflow-visible rounded-full bg-[#FA5002]">
          {new Array(5).fill(0).map((_, i) => (
            <Dots
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              isActive={false}
              pos={
                (i === 0 && 'top-10') ||
                (i === 1 && 'top-48') ||
                (i === 2 && 'top-[47%]') ||
                (i === 3 && 'bottom-56') ||
                (i === 4 && 'bottom-12')
              }
            />
          ))}
        </div>
        <div className="grid grid-cols-1">
          <div className="flex w-full justify-start">
            <Image
              src="/icons/t1.png"
              alt="arrow"
              width={148}
              height={0}
              draggable={false}
              className="mb-1 -translate-y-3 scale-[1.3]"
            />
          </div>
          <Step
            id="#1"
            title="competition open"
            className="h-max max-w-[306px] pl-1"
          />
          <div className="flex w-full justify-start">
            <Image
              src="/icons/t3.png"
              alt="arrow"
              width={188}
              height={0}
              draggable={false}
            />
          </div>
          <Step
            id="#3"
            title="judging process"
            className="h-max max-w-[306px] pl-1"
          />
          <div className="flex w-full justify-start">
            <Image
              src="/icons/t5.png"
              alt="arrow"
              width={188}
              height={0}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function Dots({ isActive, pos }) {
  return (
    <div
      className={cn(
        'absolute h-[18px] w-[18px] rounded-full border-[2.5px] border-blue-600 bg-white',
        isActive && 'border-blue-600 bg-[#FA5002]',
        pos,
      )}
    />
  )
}

function Step({ id, title, icon, size, ...rest }) {
  return (
    <section
      {...rest}
      className={cn(
        'flex w-full items-center space-x-3 rounded-lg border-none bg-[#262626] py-2 pl-3 pr-4 md:py-4',
        rest.className,
      )}
    >
      <div className="md:hidden">
        <Image
          src={icon}
          alt="arrow"
          width={size}
          height={0}
          draggable={false}
        />
      </div>
      <div className="flex flex-col">
        <div
          className={cn(
            'text-xs text-[#648DC8] md:text-xl',
            jetbrainsMono.className,
          )}
        >
          {id}
        </div>
        <Title
          className="pt-0 text-sm text-white md:text-left md:text-2xl"
          withoutDropShadow
        >
          {title}
        </Title>
      </div>
    </section>
  )
}

export default TimelineSection
