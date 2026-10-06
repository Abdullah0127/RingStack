import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { Mail, Pin } from '../components/Icons.jsx'
import { site } from '../data/site.js'
import { services } from '../data/content.js'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    monthlyAdSpend: '',
    website: '',
    message: '',
  })

  const onChange = (e) => setForm((current) => ({ ...current, [e.target.name]: e.target.value }))

  // No backend needed: opens the visitor's email app with the message filled in.
  // Swap this for a form service (Formspree, EmailJS, your own API) when ready.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${form.service} enquiry from ${form.name}`)
    const body = encodeURIComponent(
      [
        `Service of interest: ${form.service}`,
        `Monthly ad spend: ${form.monthlyAdSpend || 'Not provided'}`,
        `Website: ${form.website || 'Not provided'}`,
        '',
        'How can we help?',
        form.message,
        '',
        `From: ${form.name} (${form.email})`,
      ].join('\n'),
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s build your next growth channel."
        text="Tell us what you want to achieve and where you are investing today. We’ll help you find a practical way to generate better leads."
      />
      <section className="section section-white">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-heading">
              <span className="contact-form-kicker">Campaign enquiry</span>
              <h2>Tell us about your goals</h2>
              <p>Share a few details and your message will open in your email app, ready to send.</p>
            </div>

            <div className="contact-field-grid">
              <div className="contact-field">
                <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  autoComplete="name"
                  placeholder="Name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Work email <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="service">What do you need help with? <span aria-hidden="true">*</span></label>
                <select id="service" name="service" value={form.service} onChange={onChange} required>
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option value={service.title} key={service.slug}>{service.title}</option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="monthlyAdSpend">Approximate monthly ad spend</label>
                <select
                  id="monthlyAdSpend"
                  name="monthlyAdSpend"
                  value={form.monthlyAdSpend}
                  onChange={onChange}
                >
                  <option value="">Select a range (optional)</option>
                  <option value="Not currently spending">Not currently spending</option>
                  <option value="Under £1,000">Under £1,000</option>
                  <option value="£1,000–£3,000">£1,000–£3,000</option>
                  <option value="£3,000–£5,000">£3,000–£5,000</option>
                  <option value="£5,000–£10,000">£5,000–£10,000</option>
                  <option value="£10,000+">£10,000+</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              <div className="contact-field contact-field-wide">
                <label htmlFor="website">Website URL</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={form.website}
                  onChange={onChange}
                  autoComplete="url"
                  placeholder="https://yourwebsite.com"
                />
                <span className="contact-field-hint">Optional — include https:// if you have a website.</span>
              </div>

              <div className="contact-field contact-field-wide">
                <label htmlFor="message">What would you like to achieve? <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us about your goals, target customers, or current campaigns."
                />
              </div>
            </div>

            <div className="contact-submit-row">
              <button type="submit" className="btn btn-grad">
                Send campaign enquiry
              </button>
              <span>We’ll use these details to prepare a more useful first conversation.</span>
            </div>
          </form>

          <aside className="contact-info">
            <span className="contact-info-kicker">A real conversation</span>
            <h3>Talk to a growth partner</h3>
            <p className="contact-info-intro">
              No generic pitch. We’ll look at your goals, channel mix, and lead journey before recommending a next step.
            </p>
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
            <div className="contact-info-note">
              <strong>Focused on outcomes</strong>
              <span>PPC · Google Ads · Meta Ads · Lead generation</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
