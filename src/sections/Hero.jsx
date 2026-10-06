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
          <span className="pill">PPC · Meta Ads · Google Ads</span>
          <h1>
            Turn paid media into <span className="accent">qualified leads</span>
          </h1>
          <p>
            We plan and manage Google Ads, Meta campaigns, and pay-per-call acquisition around one goal: a
            predictable flow of enquiries your team can turn into customers.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-grad">
              Plan my campaigns <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore paid media
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
