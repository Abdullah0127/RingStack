import { steps } from '../data/content.js'

export default function ProcessSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <p className="eyebrow">How we work</p>
        <h2 className="section-title">From first call to measurable results</h2>
        <p className="section-sub">A simple, transparent process with no surprises along the way.</p>
        <div className="grid grid-4">
          {steps.map((s, i) => (
            <article className="card" key={s.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
