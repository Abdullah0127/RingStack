import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

export default function CtaSection() {
  return (
    <section className="section section-white cta-wrap">
      <div className="container">
        <div className="cta">
          <p className="eyebrow eyebrow-grad">Get started</p>
          <h2>Build your direct pipeline</h2>
          <p>
            Explore our live service menu to select your required technical scope or book a direct strategy call with
            our senior engineering team.
          </p>
          <div className="hero-actions center-actions">
            <Link to="/services" className="btn btn-grad">
              Explore Service Menu
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Book a strategy call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
