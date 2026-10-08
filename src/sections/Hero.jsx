import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

const channels = [
  { number: '01', title: 'Capture intent', channel: 'Google Ads' },
  { number: '02', title: 'Create demand', channel: 'Meta Ads' },
  { number: '03', title: 'Start conversations', channel: 'Pay-per-call' },
]

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="pill">PAID MEDIA · LEAD GENERATION</span>
            <h1>Turn paid media into <span className="accent">qualified leads.</span></h1>
            <p>Build a connected acquisition plan across Google Ads, Meta campaigns, and pay-per-call, focused on enquiries your team can turn into customers.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-grad">Plan my campaigns <ArrowRight size={17} /></Link>
              <Link to="/services" className="btn btn-outline">Explore our services</Link>
            </div>
            <p className="hero-note">Clear strategy. Better measurement. More useful conversations.</p>
          </div>
          <div className="hero-system" aria-label="A connected lead generation approach">
            <div className="hero-system-head"><span className="hero-system-indicator" /><span>THE ACQUISITION SYSTEM</span><span className="hero-system-rule" /></div>
            <p className="hero-system-title">One clear path from attention to enquiry.</p>
            <div className="hero-system-flow">
              {channels.map((item) => (
                <div className="hero-system-step" key={item.number}>
                  <span className="hero-step-number">{item.number}</span>
                  <span className="hero-step-copy"><strong>{item.title}</strong><small>{item.channel}</small></span>
                  <span className="hero-step-mark" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
            <div className="hero-system-foot"><span>Campaigns</span><span>Landing journeys</span><span>Lead quality</span></div>
          </div>
        </div>
      </section>
      <section className="home-capabilities" aria-label="Ringstack capabilities">
        <div className="container home-capabilities-inner"><span>Built around your growth goals</span><div><span>Paid search</span><i /><span>Paid social</span><i /><span>Lead generation</span><i /><span>Web &amp; IT</span></div></div>
      </section>
    </>
  )
}
