import Link from 'next/link'
import { ArrowRight, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function CtaBand({
  title = "Let's build something meaningful.",
  description = 'Open to internship opportunities, technology collaborations, STEM education initiatives, innovation programs, and research.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-navy px-6 py-12 text-navy-foreground sm:px-12 sm:py-14">
          <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden="true" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-4 text-pretty leading-relaxed text-navy-foreground/75">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" render={<Link href="/contact" />}>
                <Mail className="size-4" />
                Contact Me
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/resume" />}
                className="border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
              >
                <Download className="size-4" />
                Resume
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
