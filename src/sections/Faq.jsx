import { faqs } from '../data/content.js'

export default function Faq() {
  return (
    <section className="section section-white">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-sub">Everything you need to know before we start working together.</p>

        <div className="faq">
          {faqs.map((f, i) => (
            <details key={f.q}>
              <summary>
                <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q">{f.q}</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
