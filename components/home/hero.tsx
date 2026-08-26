import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Compass, Mail, Linkedin, Download, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-grid-navy opacity-60" aria-hidden="true" />
      <div
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 md:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24 lg:px-8">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="text-mono-label text-[11px] text-navy-foreground/80">
              Open to internships & collaborations
            </span>
          </div>

          <h1
            className="animate-fade-up mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Innocent Simon
          </h1>

          <p
            className="animate-fade-up mt-4 text-pretty text-lg font-medium text-primary sm:text-xl"
            style={{ animationDelay: '140ms' }}
          >
            Innovator · STEM Educator · Electronics Technologist · Problem Solver
          </p>

          <p
            className="animate-fade-up mt-5 max-w-xl text-pretty text-base leading-relaxed text-navy-foreground/75 sm:text-lg"
            style={{ animationDelay: '200ms' }}
          >
            {profile.tagline}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: '260ms' }}
          >
            <Button size="lg" render={<Link href="/projects" />}>
              View My Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/journey" />}
              className="border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <Compass className="size-4" />
              Explore My Journey
            </Button>
          </div>

          <div
            className="animate-fade-up mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
            style={{ animationDelay: '320ms' }}
          >
            <Link href="/experience" className="inline-flex items-center gap-1.5 text-navy-foreground/70 transition-colors hover:text-navy-foreground">
              <Briefcase className="size-4 text-primary" />
              View Experience
            </Link>
            <Link href="/resume" className="inline-flex items-center gap-1.5 text-navy-foreground/70 transition-colors hover:text-navy-foreground">
              <Download className="size-4 text-primary" />
              Download Resume
            </Link>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-navy-foreground/70 transition-colors hover:text-navy-foreground">
              <Mail className="size-4 text-primary" />
              Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-navy-foreground/70 transition-colors hover:text-navy-foreground">
              <Linkedin className="size-4 text-primary" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: '260ms' }}>
          <div className="absolute -inset-3 rounded-3xl bg-primary/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-navy-foreground/15 shadow-2xl">
            <Image
              src={profile.heroImage || '/placeholder.svg'}
              alt="A hand-built robotics and electronics prototype on an engineering workbench"
              width={720}
              height={560}
              priority
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-navy-foreground/15 bg-navy/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-mono-label text-[10px] text-primary">Featured Build</p>
                <p className="text-sm font-semibold text-navy-foreground">Military Security Robot Prototype</p>
              </div>
              <Link
                href="/projects/military-security-robot"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform hover:scale-105"
                aria-label="View Military Security Robot Prototype case study"
              >
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
