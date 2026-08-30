import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import { JourneyTimeline } from '@/components/site/journey-timeline'

export const metadata: Metadata = {
  title: 'Journey — From Kigoma to Alfred',
  description:
    'The chronological story: childhood making, VETA electronics training, national recognition, LIYSF London, STEM teaching, and Alfred University.',
}

export default function JourneyPage() {
  return (
    <div className="surface-dark">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 lg:pb-20 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative">
          <Reveal className="tech-label text-electric">Journey</Reveal>
          <h1 className="mt-6 display max-w-4xl text-arctic">One long line, drawn in order.</h1>
          <Reveal delay={120} className="mt-7 max-w-2xl body-lg text-mist/70">
            No shortcuts in this story — just a sequence of things built, taught, and learned between
            Kigoma, Dar es Salaam, London, and Alfred, New York.
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <JourneyTimeline />
        </div>
      </section>
    </div>
  )
}
