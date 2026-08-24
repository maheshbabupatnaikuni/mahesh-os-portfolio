import { FormEvent, useState } from 'react'
import { Mail } from 'lucide-react'
import { profile } from '../data/profile'

export function ContactForm() {
  const [note, setNote] = useState('This form opens your email app. No message is stored by this website.')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const subject = String(form.get('subject') || 'Portfolio enquiry')
    const message = String(form.get('message') || '')
    const body = `Hello Mahesh,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNote('Your email application should open with this message. Please send it from there.')
  }
  return <form className="contact-form" onSubmit={submit} data-analytics-event="contact_click" data-analytics-method="email_form" data-analytics-location="contact_form"><div className="field-row"><label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label><label><span>Email</span><input type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label></div><label><span>Subject</span><input name="subject" required placeholder="Opportunity or project" /></label><label><span>Message</span><textarea name="message" rows={5} minLength={10} required placeholder="Tell me a little about the opportunity." /></label><button type="submit">OPEN EMAIL APP<Mail size={17}/></button><div className="form-status" aria-live="polite">{note}</div></form>
}
