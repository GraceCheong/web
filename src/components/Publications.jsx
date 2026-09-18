import { publications, profile } from '../data/content'

export default function Publications() {
  return (
    <section className="wrap" id="publications">
      <div className="section-head">
        <span className="eyebrow">03 / Publications</span>
        <h2>Selected publications</h2>
      </div>
      <div className="pub-list">
        {publications.map((pub) => (
          <article className="publication" id={pub.id} key={pub.id}>
            <div className="pub-year mono">{pub.year}</div>
            <div>
              <span className="pub-type">{pub.type}</span>
              <h3>{pub.title}</h3>
              <p>
                {pub.authors.map((author, i) => (
                  <span key={author.name}>
                    <span className={author.me ? 'me' : ''}>{author.name}</span>
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="venue">{pub.venue}</p>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link" href={profile.scholarUrl} target="_blank" rel="noopener">
        View Google Scholar &nearr;
      </a>
    </section>
  )
}
