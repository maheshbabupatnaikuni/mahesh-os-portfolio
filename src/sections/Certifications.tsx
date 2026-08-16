import { Award, ExternalLink } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { visibleCertifications } from '../data/certifications'

export function Certifications() {
  if (!visibleCertifications.length) return null

  return <section id="certifications" className="section certifications story-section">
    <SectionHeading index="04+" eyebrow="VERIFIED LEARNING / CERTIFICATIONS" title="Credentials I can genuinely verify." description="Only completed and verified credentials appear here."/>
    <div className="certification-grid">{visibleCertifications.map((certification) => <article key={`${certification.issuer}-${certification.title}`}><Award size={22}/><div><span>{certification.issuer}{certification.year ? ` / ${certification.year}` : ''}</span><h3>{certification.title}</h3></div>{certification.credentialUrl && <a href={certification.credentialUrl} target="_blank" rel="noreferrer" aria-label={`View ${certification.title} credential`}><ExternalLink size={18}/></a>}</article>)}</div>
  </section>
}
