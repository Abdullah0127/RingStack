export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow eyebrow-grad">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
