import { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

// Loaded as a separate chunk, after the page is idle, so it never delays first paint.
const Particles = lazy(() => import('./Particles.jsx'))

export default function Hero() {
  const [showFx, setShowFx] = useState(false)

  useEffect(() => {
    const start = () => setShowFx(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 })
      return () => window.cancelIdleCallback(id)
    }
    const t = setTimeout(start, 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero">
      {showFx && (
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      )}
      <div className="container">
        <div className="hero-copy">
          <span className="pill">Direct Leads &amp; Tech</span>
          <h1>
            Technology built for <span className="accent">commercial growth</span>
          </h1>
          <p>
            We unite targeted pay-per-call customer acquisition, custom web engineering, and dependable UK
            infrastructure support under one transparent partnership.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-grad">
              Reserve a Discovery Call <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              View Service Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
