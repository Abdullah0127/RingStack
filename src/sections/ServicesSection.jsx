import { Link } from 'react-router-dom'
import { ArrowRight, ServiceIcon } from '../components/Icons.jsx'
import { services } from '../data/content.js'

export function ServiceGrid() {
  return (
    <div className="grid grid-3">
      {services.map((s) => (
        <article className="card service-card" key={s.title}>
          <ServiceIcon name={s.icon} />
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <Link to={`/services/${s.slug}`} className="learn">
            Learn more <ArrowRight size={12} />
          </Link>
        </article>
      ))}
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <p className="eyebrow">Performance marketing</p>
        <h2 className="section-title">More of the right leads, from the right channels</h2>
        <p className="section-sub">
          PPC, Google Ads, Meta Ads, and pay-per-call campaigns planned around qualified enquiries and accountable
          growth. Website and IT support are available as complementary capabilities.
        </p>
        <ServiceGrid />
      </div>
    </section>
  )
}
