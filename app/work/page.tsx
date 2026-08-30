import type { Metadata } from 'next'
import { projects } from '@/lib/content/projects'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { WorkGrid } from '@/components/site/work-grid'

export const metadata: Metadata = {
  title: 'Work — Prototypes & Case Studies',
  description:
    'A catalogue of Innocent Simon\u2019s prototypes across robotics, electronics, STEM education, renewable energy, agriculture, software, and product design.',
}

export default function WorkPage() {
  return (
    <div className="surface-dark">
      <section className="relative overflow-hidden grain">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-70" />
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative pb-16 pt-32 lg:pt-40">
          <SectionHeading
            eyebrow="Selected work"
            title="Fifteen prototypes, from scrap-built models to industrial systems."
            description="Each project began with a specific observation. Filter by discipline, then open any project for the full story — context, process, challenges, and honest limitations."
          />
        </div>
      </section>

      <section className="border-t border-white/10 section-y">
        <div className="shell">
          <Reveal>
            <WorkGrid projects={projects} />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
