import PageHero from '../components/PageHero.jsx'
import { site } from '../data/site.js'

export default function Legal({ title }) {
  return (
    <>
      <PageHero title={title} />
      <section className="section section-white"><div className="container narrow">
        <p>The full {title.toLowerCase()} is being prepared. For questions, contact <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div></section>
    </>
  )
}
