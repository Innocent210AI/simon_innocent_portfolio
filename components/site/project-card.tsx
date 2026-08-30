import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/content/projects'
import { ProjectVisual } from './project-visual'

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="electric-edge group flex flex-col overflow-hidden rounded-panel border border-white/10 bg-white/[0.02] transition-transform duration-500 hover:-translate-y-1"
    >
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            {typeof index === 'number' && (
              <span className="tech-label text-steel">{String(index + 1).padStart(2, '0')}</span>
            )}
            <h3 className="mt-1.5 text-lg font-semibold leading-snug text-arctic">{project.title}</h3>
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-steel transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-mist/70">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-steel"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
