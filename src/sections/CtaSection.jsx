import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

export default function CtaSection() {
  return (
    <section className="section section-white cta-wrap">
      <div className="container">
        <div className="cta">
          <p className="eyebrow eyebrow-grad">Get started</p>
          <h2>Ready to make paid media work harder?</h2>
          <p>
            Tell us about your goals, audience, and current campaigns. We’ll help you find a practical next step for
            PPC and lead generation.
          </p>
          <div className="hero-actions center-actions">
            <Link to="/services" className="btn btn-grad">
              Explore campaign services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Plan a discovery call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
