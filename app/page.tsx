import { Hero } from '@/components/home/hero'
import { Snapshot } from '@/components/home/snapshot'
import { Impact } from '@/components/home/impact'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { ExperienceHighlights } from '@/components/home/experience-highlights'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Snapshot />
      <FeaturedProjects />
      <Impact />
      <ExperienceHighlights />
      <CtaBand />
    </>
  )
}
