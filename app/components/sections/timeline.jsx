import Title from '@/components/common/title'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

function TimelineSection() {
  return (
    <section id="timeline" className="space-y-12 pb-6 pt-3 md:pt-0">
      <Title className="mx-auto text-center md:text-left">Timeline:</Title>
      <Image
        src="/images/timeline.png"
        alt="drezzo community gallery"
        className="w-full"
        draggable={false}
        width={1152}
        height={253}
      />
      <div>
        <Title
          className="text-2xl text-white md:text-left md:text-4xl"
          withoutDropShadow
        >
          finalist & rules:
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

export default TimelineSection
