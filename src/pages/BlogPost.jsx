import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from '../components/Icons.jsx'
import Media from '../components/Media.jsx'
import NotFound from './NotFound.jsx'
import { posts } from '../data/content.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug || item.aliases?.includes(slug))

  if (!post) return <NotFound />

  return (
    <article className="article-page">
      <header className="article-hero">
        <div className="container article-hero-inner">
          <Link to="/blog" className="article-back">
            <ArrowRight size={15} /> All articles
          </Link>
          <span className="article-category">{post.tag}</span>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <div className="article-meta">
            <span><Calendar size={15} /> {post.date}</span>
            <span><Clock size={15} /> {post.read}</span>
          </div>
        </div>
      </header>

      <div className="container article-layout">
        <aside className="article-aside" aria-label="Article contents">
          <span className="article-aside-label">In this article</span>
          <nav>
            {post.sections.map((section, index) => (
              <a href={`#article-section-${index + 1}`} key={section.heading}>
                {section.heading}
              </a>
            ))}
          </nav>
        </aside>

        <div className="article-main">
          <Media
            src={post.image}
            alt=""
            className="article-cover"
            width={1200}
            height={675}
            label={post.tag}
          />
          <p className="article-introduction">{post.introduction}</p>
          {post.sections.map((section, index) => (
            <section className="article-section" id={`article-section-${index + 1}`} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && (
                <ul className="article-points">
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </section>
          ))}
          <aside className="article-takeaway">
            <span>Key takeaway</span>
            <p>{post.takeaway}</p>
          </aside>
          <div className="article-footer">
            <Link to="/blog" className="learn">
              More practical insights <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
