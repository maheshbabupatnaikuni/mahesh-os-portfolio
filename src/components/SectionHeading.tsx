type Props = { index: string; eyebrow: string; title: string; description?: string }

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return <header className="section-heading">
    <span className="section-index">{index}</span>
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>
  </header>
}
