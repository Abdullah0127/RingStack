import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ServiceIcon } from '../components/Icons.jsx'
import NotFound from './NotFound.jsx'
import { services } from '../data/content.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFound />

  return (
    <>
      <section className="service-detail-hero">
        <div className="container service-detail-hero-grid">
          <div className="service-detail-copy">
            <Link to="/services" className="service-back">
              <ArrowRight size={15} /> All services
            </Link>
            <div className="service-detail-icon">
              <ServiceIcon name={service.icon} />
            </div>
            <p className="eyebrow eyebrow-grad">Ringstack services</p>
            <h1>{service.title}</h1>
            <p className="service-detail-lead">{service.detail}</p>
            <Link to="/contact" className="btn btn-grad">
              Talk through your requirements <ArrowRight size={16} />
            </Link>
          </div>
          <aside className="service-promise">
            <span className="service-promise-label">What you can expect</span>
            <h2>Useful work. Clear ownership. No unnecessary complexity.</h2>
            <p>
              We start with your goals and current setup, agree what good looks like, then keep the work visible as
              we deliver.
            </p>
            <Link to="/contact" className="service-promise-link">
              Start a conversation <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="container service-detail-outcomes">
          <div className="service-section-heading">
            <p className="eyebrow">Designed around your business</p>
            <h2 className="section-title">What this service helps you do</h2>
            <p className="section-sub">
              A focused scope, shaped around the outcomes your team needs rather than a one-size-fits-all package.
            </p>
          </div>
          <div className="service-outcome-grid">
            {service.outcomes.map((outcome, index) => (
              <article className="service-outcome" key={outcome}>
                <span className="service-outcome-number">0{index + 1}</span>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process-section">
        <div className="container">
          <p className="eyebrow eyebrow-grad">A clear path forward</p>
          <h2 className="section-title light">How we work together</h2>
          <p className="section-sub service-process-intro">
            A straightforward process keeps decisions clear and progress easy to follow.
          </p>
          <div className="service-process-grid">
            {service.process.map((step, index) => (
              <article className="service-process-card" key={step.title}>
                <span>STEP 0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-cta">
        <div className="container service-detail-cta-inner">
          <div>
            <p className="eyebrow eyebrow-grad">Make your next move</p>
            <h2>Let’s shape the right scope for your team.</h2>
            <p>Talk to us about where you are today and what a better outcome would look like.</p>
          </div>
          <Link to="/contact" className="btn btn-grad">
            Book a discovery call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
