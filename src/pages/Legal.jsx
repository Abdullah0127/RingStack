import PageHero from '../components/PageHero.jsx'
import { site } from '../data/site.js'

// Placeholder: paste your real legal text here.
export default function Legal({ title }) {
  return (
    <>
      <PageHero title={title} />
      <section className="section section-white">
        <div className="container narrow">
          <p>
            Add the full {title.toLowerCase()} for {site.fullName} here. Questions in the meantime? Email{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
