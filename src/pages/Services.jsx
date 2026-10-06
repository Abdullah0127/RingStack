import PageHero from '../components/PageHero.jsx'
import { ServiceGrid } from '../sections/ServicesSection.jsx'
import CtaSection from '../sections/CtaSection.jsx'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services that actually move the needle"
        text="We focus on the channels and tactics that drive visibility, leads, and sales — without the fluff."
      />
      <section className="section section-light">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>
      <CtaSection />
    </>
  )
}
