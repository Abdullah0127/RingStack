import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoMark, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Pin } from './Icons.jsx'
import { site, footerMenu } from '../data/site.js'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your email service (Mailchimp, Brevo, etc.).
    setSubscribed(true)
  }

  const socials = [
    { label: 'Facebook', href: site.social.facebook, Icon: Facebook },
    { label: 'Twitter', href: site.social.twitter, Icon: Twitter },
    { label: 'LinkedIn', href: site.social.linkedin, Icon: Linkedin },
    { label: 'Instagram', href: site.social.instagram, Icon: Instagram },
  ]

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="logo" aria-label={`${site.fullName} home`}>
            <LogoMark size={40} />
            <span>{site.name}</span>
          </Link>
          <p className="footer-about">{site.tagline}</p>
          <div className="socials">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer-title">Menu</h4>
          <ul className="footer-links">
            {footerMenu.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Direct Line</h4>
          <ul className="footer-contacts">
            <li>
              <span className="ci ci-mail">
                <Mail size={18} />
              </span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="ci ci-phone">
                <Phone size={18} />
              </span>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <span className="ci ci-pin">
                <Pin size={18} />
              </span>
              <span>{site.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Useful Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            </li>
          </ul>
          <p className="loop-label">Stay in the loop</p>
          {subscribed ? (
            <p className="loop-thanks">Thanks for subscribing!</p>
          ) : (
            <form className="loop-form" onSubmit={onSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input id="footer-email" type="email" placeholder="Your email" required />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.fullName}. Registered in England &amp; Wales.
        </p>
        <p className="strapline">{site.strapline}</p>
      </div>
    </footer>
  )
}
