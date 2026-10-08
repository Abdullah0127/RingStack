import Media from '../components/Media.jsx'
import { reasons } from '../data/content.js'

export default function WhySection() {
  return (
    <section className="section section-dark">
      <div className="container why-grid">
        <div>
          <p className="eyebrow eyebrow-grad left">Why Ringstack</p>
          <h2 className="section-title left light">
            Paid campaigns built to drive <span className="grad-text">better leads</span>
          </h2>
          <p className="section-sub left dim">
            One accountable team across PPC, Google Ads, Meta Ads, and pay-per-call—measuring the journey from first
            click through to qualified enquiry.
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
            src="/images/why-ringstack-v2.jpg"
            alt="Business professionals discussing a project around a table"
            width={640}
            height={640}
          />
        </div>
      </div>
    </section>
  )
}
