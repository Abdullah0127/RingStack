import PageHero from '../components/PageHero.jsx'
import { PostGrid } from '../sections/BlogSection.jsx'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The Ringstack journal"
        title="Make every campaign work harder."
        text="Straightforward advice on PPC, Google Ads, Meta Ads, and building a lead-generation engine that values quality as much as volume."
      />
      <section className="section section-white">
        <div className="container blog-archive">
          <div className="blog-archive-heading">
            <div>
              <p className="eyebrow">Latest articles</p>
              <h2 className="section-title">Ideas you can put to work</h2>
            </div>
            <p>Short, practical reads for teams looking to improve paid performance and turn more enquiries into customers.</p>
          </div>
          <PostGrid />
        </div>
      </section>
    </>
  )
}
