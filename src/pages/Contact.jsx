import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { Mail, Pin, Phone } from '../components/Icons.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm((current) => ({ ...current, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}`)
    const body = encodeURIComponent([form.message, '', `From: ${form.name} (${form.email})`].join('\n'))
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let’s start a conversation." text="Tell us a little about what you’re looking for and we’ll be in touch." />
      <section className="section section-white">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-heading">
              <span className="contact-form-kicker">Contact</span>
              <h2>Send us a message</h2>
              <p>Share your details and your message will open in your email app, ready to send.</p>
            </div>
            <div className="contact-field-grid">
              <div className="contact-field"><label htmlFor="name">Your name <span aria-hidden="true">*</span></label><input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" placeholder="Name" /></div>
              <div className="contact-field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" placeholder="you@company.com" /></div>
              <div className="contact-field contact-field-wide"><label htmlFor="message">Your message <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows="6" value={form.message} onChange={onChange} required placeholder="How can we help?" /></div>
            </div>
            <div className="contact-submit-row"><button type="submit" className="btn btn-grad">Send message</button></div>
          </form>
          <aside className="contact-info">
            <span className="contact-info-kicker">Contact details</span>
            <h3>We’d be glad to hear from you.</h3>
            <p className="contact-info-intro">Get in touch by phone, email, or post.</p>
            <p><Phone size={18} /><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
            <p><Mail size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><Pin size={18} /><span>{site.address.street}<span className="contact-location-detail">{site.address.city}, {site.address.county} {site.address.postCode}</span></span></p>
          </aside>
        </div>
      </section>
    </>
  )
}
