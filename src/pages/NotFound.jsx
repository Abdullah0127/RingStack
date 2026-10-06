import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" text="The page you're looking for doesn't exist or has moved." />
      <section className="section section-white">
        <div className="container center">
          <Link to="/" className="btn btn-grad">
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
