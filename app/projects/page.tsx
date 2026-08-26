import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProjectsGrid } from '@/components/projects/projects-grid'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A portfolio of hands-on projects by Innocent Simon — robotics, electronics, STEM education models, renewable energy, agriculture, and engineering design.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Prototypes built to solve real problems"
        description="From robotics and renewable energy to STEM education tools and agricultural machines — explore the projects behind the journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <ProjectsGrid />
      </section>

      <CtaBand />
    </>
  )
}
