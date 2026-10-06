import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { Mail, Pin } from '../components/Icons.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend needed: opens the visitor's email app with the message filled in.
  // Swap this for a form service (Formspree, EmailJS, your own API) when ready.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Ready to grow?"
        text="Tell us what you're trying to achieve. We'll get back with honest advice and a plan that fits."
      />
      <section className="section section-white">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
            />

            <label htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" rows="6" value={form.message} onChange={onChange} required />

            <button type="submit" className="btn btn-grad">
              Start a conversation
            </button>
          </form>

          <aside className="contact-info">
            <h3>Contact details</h3>
            <p>
              <Mail size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <Pin size={18} />
              <span>
                <strong>Based in London</strong>
                <span className="contact-location-detail">{site.location}</span>
              </span>
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
