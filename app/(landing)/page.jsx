import HeroSection from '@/components/sections/hero'
import PrizesSection from '@/components/sections/prizes'
import TermsSection from '@/components/sections/terms'
import TimelineSection from '@/components/sections/timeline'

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <PrizesSection />
      <TermsSection />
      <TimelineSection />
    </div>
  )
}
