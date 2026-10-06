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
        <p className="eyebrow">Core Pillars</p>
        <h2 className="section-title">Three distinct growth paths</h2>
        <p className="section-sub">
          Engineered to deliver verified inbound inquiries, resilient web architecture, and dependable technical
          operations.
        </p>
        <ServiceGrid />
      </div>
    </section>
  )
}
