import Media from '../components/Media.jsx'
import { reasons } from '../data/content.js'

export default function WhySection() {
  return (
    <section className="section section-dark">
      <div className="container why-grid">
        <div>
          <p className="eyebrow eyebrow-grad left">Why Ringstack</p>
          <h2 className="section-title left light">
            Human-scale technology that <span className="grad-text">grows</span> with you
          </h2>
          <p className="section-sub left dim">
            One small, senior team covering customer acquisition, web engineering and IT support, so your growth never
            depends on juggling suppliers.
          </p>
          <div className="reasons">
            {reasons.map((r) => (
              <div className={`reason reason-${r.color}`} key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="why-media">
          <Media
            src="/images/why-ringstack.jpg"
            alt="Ringstack team working together on a project"
            width={640}
            height={640}
          />
        </div>
      </div>
    </section>
  )
}
