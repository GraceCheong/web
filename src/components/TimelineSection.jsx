import TimelineItem from './TimelineItem'

export default function TimelineSection({ id, eyebrow, heading, lead, items, footer }) {
  return (
    <section className="wrap" id={id}>
      <div className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{heading}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      <ol className="tl2">
        {items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </ol>
      {footer}
    </section>
  )
}
