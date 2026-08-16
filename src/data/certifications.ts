export type Certification = { title: string; issuer: string; year?: string; credentialUrl?: string; asset?: string; verified: boolean; visibility: boolean }

export const certifications: Certification[] = [
  { title: 'Juniper Networking Virtual Internship', issuer: 'AICTE', verified: false, visibility: false },
  { title: 'Network Security Associate Virtual Internship', issuer: 'Fortinet / AICTE', verified: false, visibility: false },
  { title: 'Zscaler Virtual Internship', issuer: 'Zscaler', verified: false, visibility: false },
  { title: 'Privacy and Security in Online Social Media', issuer: 'NPTEL', verified: false, visibility: false },
  { title: 'Affective Computing', issuer: 'NPTEL', verified: false, visibility: false },
  { title: 'Prompt Engineering', issuer: 'Coursera', verified: false, visibility: false },
  { title: 'Red Hat Enterprise Linux 9 Fundamentals', issuer: 'edX', verified: false, visibility: false },
]

export const visibleCertifications = certifications.filter((item) => item.visibility && item.verified)
