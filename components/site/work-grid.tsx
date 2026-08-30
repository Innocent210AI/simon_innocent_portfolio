'use client'

import { useMemo, useState } from 'react'
import type { Project, ProjectCategory } from '@/lib/content/projects'
import { projectCategories } from '@/lib/content/projects'
import { Reveal } from '@/components/motion/reveal'
import { ProjectCard } from '@/components/site/project-card'
import { cn } from '@/lib/utils'

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((category) => {
          const isActive = category === active
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-medium transition-colors',
                isActive
                  ? 'border-electric/60 bg-signal/15 text-arctic'
                  : 'border-white/12 text-steel hover:border-electric/40 hover:text-mist',
              )}
            >
              {category}
            </button>
          )
        })}
      </div>

      <p className="mt-6 tech-label text-steel">
        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 70}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
