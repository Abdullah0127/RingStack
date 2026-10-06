import { stats } from '../data/content.js'

const metricContext = {
  'Verified phone leads': 'Qualified demand for your sales team',
  'Managed platform uptime': 'Stability for the systems you rely on',
  'Average IT response': 'A direct line to practical support',
}

export default function Stats() {
  return (
    <section className="section reliability-section">
      <div className="container reliability-container">
        <div className="reliability-heading">
          <p className="eyebrow eyebrow-grad">Operational Reliability</p>
          <h2 className="section-title light">Confidence built on clear outcomes</h2>
          <p className="reliability-intro">
            Keep growth moving with qualified conversations, dependable platforms, and responsive technical support.
            Here are the measures we keep in focus.
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
          Clear reporting across lead generation, web engineering, and IT support.
        </p>
      </div>
    </section>
  )
}
