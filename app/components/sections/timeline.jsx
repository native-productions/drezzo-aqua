import Title from '@/components/common/title'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

function TimelineSection() {
  return (
    <section className="space-y-12 pb-6">
      <Title>Timeline of competition</Title>
      <Image
        src="/images/timeline.png"
        alt="drezzo community gallery"
        className="w-full"
        draggable={false}
        width={1152}
        height={253}
      />
      <div>
        <Title className="text-4xl text-white" withoutDropShadow>
          finalist rules
        </Title>
        <p className="mt-2 text-2xl text-[#e8e6e3ac]">
          We will choose 10 finalist only for the competition
        </p>
        <ul className="ml-8 w-full list-outside list-disc text-2xl text-[#e8e6e3ac] [&>li]:w-full">
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
