'use client'

import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { projects, projectFilters } from '@/lib/data'
import { cn } from '@/lib/utils'

type Filter = 'All' | (typeof projectFilters)[number]

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>('All')

  const filters: Filter[] = ['All', ...projectFilters]

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.categoryTag === active)),
    [active],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {filters.map((f) => {
          const count =
            f === 'All' ? projects.length : projects.filter((p) => p.categoryTag === f).length
          const isActive = active === f
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
                isActive
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {f}
              <span
                className={cn(
                  'text-xs tabular-nums',
                  isActive ? 'text-primary-foreground/70' : 'text-muted-foreground/60',
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  )
}
