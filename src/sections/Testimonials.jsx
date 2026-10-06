import { useState } from 'react'
import Media from '../components/Media.jsx'
import { ChevronLeft, ChevronRight, Star } from '../components/Icons.jsx'
import { testimonials } from '../data/content.js'

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')

export default function Testimonials() {
  const n = testimonials.length
  const [active, setActive] = useState(1)
  const prev = () => setActive((i) => (i - 1 + n) % n)
  const next = () => setActive((i) => (i + 1) % n)

  const visible = [(active - 1 + n) % n, active, (active + 1) % n]

  return (
    <section className="section section-light">
      <div className="container">
        <p className="eyebrow">Client feedback</p>
        <h2 className="section-title">Trusted by growing businesses</h2>
        <p className="section-sub">Real feedback from companies that rely on us to grow their digital presence.</p>

        <div className="t-row" aria-live="polite">
          {visible.map((idx, pos) => {
            const t = testimonials[idx]
            return (
              <figure className={`t-card ${pos === 1 ? 't-active' : 't-side'}`} key={t.name}>
                <Media
                  src={t.image}
                  alt={t.name}
                  className="avatar"
                  width={64}
                  height={64}
                  label={initials(t.name)}
                />
                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={16} />
                  ))}
                </div>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <div className="t-nav">
          <button type="button" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={next} aria-label="Next testimonial">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
