import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Icon, categoryIcon } from '@/components/icon'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="solid" className="shadow-sm">
            <Icon name={categoryIcon[project.categoryTag] ?? 'Sparkles'} className="size-3" />
            {project.categoryTag}
          </Badge>
        </div>
        <span className="absolute right-3 top-3 rounded-full bg-navy/80 px-2 py-0.5 text-xs font-medium text-navy-foreground backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <span className="text-mono-label text-[10px] text-primary">{project.type}</span>
          <span aria-hidden="true">·</span>
          <span>{project.status}</span>
        </div>
        <h3 className="text-pretty text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          View Case Study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
