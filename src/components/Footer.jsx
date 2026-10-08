import { Link } from 'react-router-dom'
import { LogoMark, Mail, Phone, Pin } from './Icons.jsx'
import { site, footerMenu } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Link to="/" className="logo" aria-label={`${site.fullName} home`}><LogoMark size={40} /><span>{site.name}</span></Link><p className="footer-about">{site.tagline}</p></div>
        <div><h4 className="footer-title">Menu</h4><ul className="footer-links">{footerMenu.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}</ul></div>
        <div><h4 className="footer-title">Contact</h4><ul className="footer-contacts"><li><Mail size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li><li><Phone size={18} /><a href={`tel:${site.phoneHref}`}>{site.phone}</a></li><li><Pin size={18} /><span>{site.location}</span></li></ul></div>
        <div><h4 className="footer-title">Explore</h4><ul className="footer-links"><li><Link to="/services">Our services</Link></li><li><Link to="/contact">Contact us</Link></li><li><Link to="/privacy-policy">Privacy Policy</Link></li><li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li></ul></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {site.name}.</p><p className="strapline">{site.strapline}</p></div>
    </footer>
  )
}
