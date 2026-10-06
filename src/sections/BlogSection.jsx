import { Link } from 'react-router-dom'
import Media from '../components/Media.jsx'
import { ArrowRight, Calendar, Clock } from '../components/Icons.jsx'
import { posts } from '../data/content.js'

export function PostGrid() {
  return (
    <div className="grid grid-3">
      {posts.map((p) => (
        <article className="card post-card" key={p.slug}>
          <Media
            src={p.image}
            alt={p.title}
            className="thumb"
            width={640}
            height={360}
            label={p.tag}
          />
          <span className="post-tag">{p.tag}</span>
          <div className="post-meta">
            <span>
              <Calendar size={13} /> {p.date}
            </span>
            <span>
              <Clock size={13} /> {p.read}
            </span>
          </div>
          <h3>
            <Link className="post-title-link" to={`/blog/${p.slug}`}>
              {p.title}
            </Link>
          </h3>
          <p>{p.excerpt}</p>
          <Link to={`/blog/${p.slug}`} className="learn post-read-link">
            Read article <ArrowRight size={14} />
          </Link>
        </article>
      ))}
    </div>
  )
}

export default function BlogSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <p className="eyebrow">From our blog</p>
        <h2 className="section-title">Smarter thinking for paid growth</h2>
        <p className="section-sub">Practical guidance on PPC, Google Ads, Meta campaigns, and lead quality.</p>
        <PostGrid />
        <div className="center mt-40">
          <Link to="/blog" className="btn btn-orange">
            Explore the blog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
