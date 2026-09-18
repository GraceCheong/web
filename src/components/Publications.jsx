import { publications, profile } from '../data/content'

export default function Publications() {
  return (
    <section className="wrap" id="publications">
      <div className="section-head split-head">
        <div>
          <span className="eyebrow">02 / Publications</span>
          <h2>Selected publications</h2>
        </div>
        <a className="text-link section-link" href={profile.scholarUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar &nearr;
        </a>
      </div>
      <div className="pub-list">
        {publications.map((pub) => (
          <article className="publication" id={pub.id} key={pub.id}>
            <div className="pub-year mono">{pub.year}</div>
            <div>
              <span className="pub-type">{pub.status ? `${pub.status} · ${pub.type}` : pub.type}</span>
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
              {pub.doiUrl && (
                <a className="text-link pub-doi" href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
                  DOI &nearr;
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
