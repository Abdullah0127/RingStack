import { lazy, Suspense } from 'react'
import Hero from '../sections/Hero.jsx'
import ServicesSection from '../sections/ServicesSection.jsx'
import LazyMount from '../components/LazyMount.jsx'

// Below-the-fold sections: code is only downloaded when the visitor scrolls near them.
const WhySection = lazy(() => import('../sections/WhySection.jsx'))
const ProcessSection = lazy(() => import('../sections/ProcessSection.jsx'))
const Stats = lazy(() => import('../sections/Stats.jsx'))
const Testimonials = lazy(() => import('../sections/Testimonials.jsx'))
const Faq = lazy(() => import('../sections/Faq.jsx'))
const CtaSection = lazy(() => import('../sections/CtaSection.jsx'))
const BlogSection = lazy(() => import('../sections/BlogSection.jsx'))

const Deferred = ({ children, minHeight }) => (
  <LazyMount minHeight={minHeight}>
    <Suspense fallback={null}>{children}</Suspense>
  </LazyMount>
)

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Deferred minHeight={640}>
        <WhySection />
      </Deferred>
      <Deferred minHeight={460}>
        <ProcessSection />
      </Deferred>
      <Deferred minHeight={380}>
        <Stats />
      </Deferred>
      <Deferred minHeight={560}>
        <Testimonials />
      </Deferred>
      <Deferred minHeight={620}>
        <BlogSection />
      </Deferred>
      <Deferred minHeight={520}>
        <Faq />
      </Deferred>
      <Deferred minHeight={460}>
        <CtaSection />
      </Deferred>
    </>
  )
}
