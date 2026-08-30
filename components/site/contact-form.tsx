'use client'

import { useState } from 'react'
import { ArrowRight, Check, Copy } from 'lucide-react'
import { site } from '@/lib/content/site'
import { Reveal } from '@/components/motion/reveal'

const topics = [
  'Collaboration',
  'STEM programme',
  'Speaking',
  'Research support',
  'Other',
] as const

type Errors = Partial<Record<'name' | 'email' | 'organization' | 'message', string>>

const fieldClass =
  'w-full rounded-control border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-arctic placeholder:text-steel transition-colors focus:border-electric/60 focus:outline-none'

const reasons = [
  'Building or testing a hardware prototype',
  'STEM outreach, workshops, or curriculum support',
  'Speaking about the journey from vocational training to innovation',
  'Student engineering project support',
  'Robotics and electronics collaboration',
]

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [draft, setDraft] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const hasEmail = Boolean(site.links.email)

  function validate(data: {
    name: string
    email: string
    organization: string
    message: string
  }): Errors {
    const next: Errors = {}
    if (!data.name.trim()) next.name = 'Please enter your name'
    else if (data.name.length > 100) next.name = 'Name must be under 100 characters'
    if (!data.email.trim()) next.email = 'Please enter your email address'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      next.email = 'Please enter a valid email address'
    if (data.organization.length > 120)
      next.organization = 'Organisation must be under 120 characters'
    if (data.message.trim().length < 10) next.message = 'Please write at least 10 characters'
    else if (data.message.length > 2000) next.message = 'Message must be under 2000 characters'
    return next
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const data = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      organization: String(form.get('organization') ?? ''),
      topic: String(form.get('topic') ?? 'Collaboration'),
      message: String(form.get('message') ?? ''),
    }

    const next = validate(data)
    if (Object.keys(next).length > 0) {
      setErrors(next)
      setDraft(null)
      return
    }

    setErrors({})
    const body = [
      `Subject: ${data.topic} — ${data.name}`,
      '',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.organization ? `Organisation: ${data.organization}` : null,
      `Topic: ${data.topic}`,
      '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n')

    if (hasEmail) {
      const href = `mailto:${site.links.email}?subject=${encodeURIComponent(
        `${data.topic} — ${data.name}`,
      )}&body=${encodeURIComponent(body)}`
      window.location.href = href
    }
    setDraft(body)
    setCopied(false)
  }

  async function copyDraft() {
    if (!draft) return
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <Reveal>
        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="tech-label text-steel">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={100}
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`mt-2.5 ${fieldClass}`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="tech-label text-steel">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={255}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`mt-2.5 ${fieldClass}`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="organization" className="tech-label text-steel">
                Organisation
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                maxLength={120}
                autoComplete="organization"
                aria-invalid={Boolean(errors.organization)}
                className={`mt-2.5 ${fieldClass}`}
                placeholder="Optional"
              />
              {errors.organization && (
                <p className="mt-2 text-xs text-destructive">{errors.organization}</p>
              )}
            </div>

            <div>
              <label htmlFor="topic" className="tech-label text-steel">
                Topic *
              </label>
              <select
                id="topic"
                name="topic"
                defaultValue="Collaboration"
                className={`mt-2.5 ${fieldClass}`}
              >
                {topics.map((t) => (
                  <option key={t} value={t} className="bg-navy text-arctic">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="tech-label text-steel">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              maxLength={2000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`mt-2.5 resize-y ${fieldClass}`}
              placeholder="What are you working on, and how could we work together?"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-control bg-signal px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-electric"
          >
            {hasEmail ? 'Send message' : 'Prepare message'}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {draft && (
            <div role="status" className="rounded-panel border border-electric/25 bg-signal/10 p-6">
              <p className="tech-label text-electric">
                {hasEmail ? 'Opening your email client' : 'Message ready to copy'}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist/80">
                {hasEmail
                  ? 'If nothing opened, copy the message below and send it manually.'
                  : "A public email address isn't published yet. Copy your message below and send it through whichever channel you already have."}
              </p>
              <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap rounded-control border border-white/10 bg-midnight/60 p-4 font-mono text-xs text-mist/80">
                {draft}
              </pre>
              <button
                type="button"
                onClick={copyDraft}
                className="mt-4 inline-flex items-center gap-2 rounded-control border border-white/15 px-4 py-2.5 text-sm text-arctic transition-colors hover:border-electric/50 hover:bg-white/5"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? 'Copied' : 'Copy message'}
              </button>
            </div>
          )}
        </form>
      </Reveal>

      <Reveal delay={120} className="space-y-4">
        <div className="panel-dark p-6 lg:p-8">
          <h2 className="tech-label text-electric">Good reasons to write</h2>
          <ul className="mt-5 space-y-3 text-sm text-mist/75">
            {reasons.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-electric" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-dark p-6 lg:p-8">
          <h2 className="tech-label text-steel">Based in</h2>
          <p className="mt-3 heading-md text-arctic">{site.location}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist/65">
            Currently at Alfred University, New York. Work and outreach history is largely in
            Tanzania.
          </p>
        </div>

        {(site.links.linkedin || site.links.github || site.links.email) && (
          <div className="panel-dark p-6 lg:p-8">
            <h2 className="tech-label text-steel">Elsewhere</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.links.email && (
                <li>
                  <a
                    href={`mailto:${site.links.email}`}
                    className="text-mist/80 transition-colors hover:text-electric"
                  >
                    {site.links.email}
                  </a>
                </li>
              )}
              {site.links.linkedin && (
                <li>
                  <a
                    href={site.links.linkedin}
                    className="text-mist/80 transition-colors hover:text-electric"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {site.links.github && (
                <li>
                  <a
                    href={site.links.github}
                    className="text-mist/80 transition-colors hover:text-electric"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </Reveal>
    </div>
  )
}
