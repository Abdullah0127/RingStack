import PageHero from '../components/PageHero.jsx'
import { ServiceGrid } from '../sections/ServicesSection.jsx'
import CtaSection from '../sections/CtaSection.jsx'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Paid media & lead generation"
        title="Turn ad spend into real opportunities"
        text="Plan and improve PPC, Google Ads, Meta Ads, and pay-per-call campaigns with qualified leads—not vanity metrics—as the goal."
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
