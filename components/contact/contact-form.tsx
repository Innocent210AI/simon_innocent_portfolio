'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { profile } from '@/lib/data'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="What's this about?" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project, opportunity, or question…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          <Send className="size-4" />
          Send message
        </Button>
        {sent ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            <Check className="size-4" />
            Opening your email app…
          </span>
        ) : null}
      </div>
      <p className="text-xs text-muted-foreground">
        This opens your email client with the message pre-filled. Prefer direct email? Reach me at{' '}
        <a href={`mailto:${profile.email}`} className="text-primary underline-offset-2 hover:underline">
          {profile.email}
        </a>
        .
      </p>
    </form>
  )
}
