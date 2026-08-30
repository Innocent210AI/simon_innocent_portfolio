import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="tech-label flex items-center gap-2.5 text-electric">
          <span className="inline-block h-px w-8 bg-electric/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="heading-xl max-w-3xl text-arctic">{title}</h2>
      {description && <p className="max-w-2xl body-lg text-mist/70">{description}</p>}
      {children}
    </Reveal>
  )
}
