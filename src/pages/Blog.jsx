import PageHero from '../components/PageHero.jsx'
import { PostGrid } from '../sections/BlogSection.jsx'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The Ringstack journal"
        title="Practical insight. Better operations."
        text="Ideas for generating better leads, building stronger digital experiences, and keeping the technology behind your business dependable."
      />
      <section className="section section-white">
        <div className="container blog-archive">
          <div className="blog-archive-heading">
            <div>
              <p className="eyebrow">Latest articles</p>
              <h2 className="section-title">Ideas you can put to work</h2>
            </div>
            <p>Short, practical reads for teams responsible for growth and day-to-day operations.</p>
          </div>
          <PostGrid />
        </div>
      </section>
    </>
  )
}
