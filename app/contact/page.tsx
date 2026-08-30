import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = {
  title: 'Contact — Innocent Simon',
  description:
    'Get in touch with Innocent Simon about collaboration, STEM programmes, speaking, research support, or project work.',
}

export default function ContactPage() {
  return (
    <div className="surface-dark">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 lg:pb-20 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative">
          <Reveal className="tech-label text-electric">Contact</Reveal>
          <h1 className="mt-6 display max-w-4xl text-arctic">Tell me what you&apos;re building.</h1>
          <Reveal delay={120} className="mt-7 max-w-2xl body-lg text-mist/70">
            I&apos;m open to collaboration, STEM programmes, speaking, research support, and project
            work — in Tanzania, the United States, or anywhere the problem is interesting.
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <ContactForm />
      </section>
    </div>
  )
}
