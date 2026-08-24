export type PortfolioMode = 'story' | 'recruiter'

export const getPortfolioMode = (pathname: string): PortfolioMode => pathname.startsWith('/recruiter') ? 'recruiter' : 'story'
