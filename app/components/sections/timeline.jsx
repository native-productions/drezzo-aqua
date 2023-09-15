import Title from '@/components/common/title'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

function TimelineSection() {
  return (
    <section id="timeline" className="space-y-12 pb-6 pt-3 md:pt-0">
      <Title className="mx-auto text-center md:text-left">
        Timeline of competition
      </Title>
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
          finalist rules
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
