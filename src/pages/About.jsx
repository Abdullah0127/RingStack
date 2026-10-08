import PageHero from '../components/PageHero.jsx'
import WhySection from '../sections/WhySection.jsx'
import CtaSection from '../sections/CtaSection.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Your paid growth partner" text="We help ambitious teams bring more structure, focus, and accountability to paid media and lead generation." />
      <section className="section section-white"><div className="container narrow">
        <p className="lead">{site.tagline}</p>
        <p>Our work centres on PPC, Google Ads, Meta Ads, and pay-per-call campaigns, connecting the right audience, message, and follow-up to create qualified opportunities. Web and IT expertise support the campaign experience where needed.</p>
      </div></section>
      <WhySection /><CtaSection />
    </>
  )
}
