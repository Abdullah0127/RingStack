import { useEffect, useRef } from 'react'
import './particles.css'

const COLORS = ['255,255,255', '255,122,47', '236,72,153', '139,92,246']

// Lightweight canvas particles: capped pixel ratio, small particle count,
// pauses when the hero is off-screen or the tab is hidden, and stays still
// for visitors who prefer reduced motion.
export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let raf = 0
    let particles = []
    let inView = true
    let running = false

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = parent.clientWidth
      h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(70, Math.max(24, (w * h) / 22000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        a: Math.random() * 0.5 + 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const maxD = 110
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        else if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        else if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.fillStyle = `rgba(${p.c},${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, 6.283)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < maxD * maxD) {
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - Math.sqrt(d2) / maxD)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      if (!running) return
      draw()
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running || reduceMotion || !inView || document.hidden) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    init()
    draw()
    start()

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (inView) start()
      else stop()
    })
    io.observe(parent)

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        init()
        draw()
      }, 150)
    }
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      io.disconnect()
      clearTimeout(resizeTimer)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />
}
