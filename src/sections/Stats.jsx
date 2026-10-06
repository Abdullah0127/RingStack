import { stats } from '../data/content.js'

const metricContext = {
  'Verified phone leads': 'Demand generated through tracked campaigns',
  'Managed platform uptime': 'Dependable digital experiences behind every campaign',
  'Average IT response': 'Responsive support for the systems that keep work moving',
}

export default function Stats() {
  return (
    <section className="section reliability-section">
      <div className="container reliability-container">
        <div className="reliability-heading">
          <p className="eyebrow eyebrow-grad">Performance you can see</p>
          <h2 className="section-title light">Make growth accountable</h2>
          <p className="reliability-intro">
            We look beyond impressions and clicks to qualified calls, campaign outcomes, and the reliable systems
            that support your lead-generation engine.
          </p>
        </div>
        <div className="stats-grid" aria-label="Ringstack service performance">
          {stats.map((s) => (
            <article className="reliability-stat" key={s.label}>
              <span className="reliability-stat-label">{s.label}</span>
              <strong>{s.value}</strong>
              <span className="reliability-stat-context">{metricContext[s.label]}</span>
              <span className="reliability-stat-mark" aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="reliability-footnote">
          Clear reporting across PPC, Google Ads, Meta Ads, and pay-per-call lead generation.
        </p>
      </div>
    </section>
  )
}
