import PageHero from '../components/PageHero.jsx'
import WhySection from '../sections/WhySection.jsx'
import CtaSection from '../sections/CtaSection.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your growth partner"
        text="We combine strategy, creativity, and technology so your brand stands out and your business grows — without the fluff."
      />
      <section className="section section-white">
        <div className="container narrow">
          <p className="lead">{site.tagline}</p>
          <p>
            From websites and SEO to ads and content, we keep it simple, focused, and built around what actually
            works for you. {site.fullName} is a company registered in England &amp; Wales with registration number{' '}
            {site.regNumber}.
          </p>
        </div>
      </section>
      <WhySection />
      <CtaSection />
    </>
  )
}
