import type { Metadata } from 'next'
import { Mail, MapPin, ArrowUpRight, Briefcase, GraduationCap, Handshake } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { LinkedInIcon } from '@/components/icon'
import { profile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Innocent Simon for internships, collaborations, STEM education, speaking, or engineering opportunities.',
}

const openTo = [
  { icon: Briefcase, label: 'Internships & roles', body: 'Electronics, engineering, and innovation opportunities.' },
  { icon: Handshake, label: 'Collaborations', body: 'Projects, prototypes, and research partnerships.' },
  { icon: GraduationCap, label: 'STEM & speaking', body: 'Education, mentorship, and public presentations.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something together"
        description="I'm open to internships, collaborations, STEM education work, and conversations about engineering and innovation."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-mono-label text-[10px] text-muted-foreground">Email</span>
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {profile.email}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <LinkedInIcon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-mono-label text-[10px] text-muted-foreground">LinkedIn</span>
                    <span className="block truncate text-sm font-semibold text-foreground">
                      Connect with me
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-mono-label text-[10px] text-muted-foreground">Location</span>
                    <span className="block text-sm font-semibold text-foreground">{profile.location}</span>
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-mono-label text-xs font-semibold text-muted-foreground">
                  Open to
                </h2>
                <div className="mt-4 space-y-3">
                  {openTo.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <item.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                <span className="text-mono-label text-xs font-semibold text-primary">
                  Send a message
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy">Get in touch</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill out the form and I&apos;ll get back to you as soon as I can.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
