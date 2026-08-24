import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { projects } from './src/data/projects'
import { getRouteMetadata } from './src/data/metadata'

const escapeAttribute = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function setHeadTag(html: string, pattern: RegExp, tag: string) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

function routePages() {
  return {
    name: 'portfolio-route-pages',
    apply: 'build' as const,
    async closeBundle() {
      const template = await readFile('dist/index.html', 'utf8')
      const paths = ['/recruiter', ...projects.flatMap((project) => [`/projects/${project.slug}`, `/projects/${project.slug}/demo`])]
      await Promise.all(paths.map(async (pathname) => {
        const metadata = getRouteMetadata(pathname)
        let html = template.replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`)
        html = setHeadTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${escapeAttribute(metadata.description)}" />`)
        html = setHeadTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escapeAttribute(metadata.canonicalUrl)}" />`)
        html = setHeadTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeAttribute(metadata.title)}" />`)
        html = setHeadTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeAttribute(metadata.socialDescription)}" />`)
        html = setHeadTag(html, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${metadata.type}" />`)
        html = setHeadTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${escapeAttribute(metadata.canonicalUrl)}" />`)
        html = setHeadTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${escapeAttribute(metadata.imageUrl)}" />`)
        html = setHeadTag(html, /<meta property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${escapeAttribute(metadata.imageAlt)}" />`)
        html = setHeadTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeAttribute(metadata.title)}" />`)
        html = setHeadTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeAttribute(metadata.socialDescription)}" />`)
        html = setHeadTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${escapeAttribute(metadata.imageUrl)}" />`)
        html = setHeadTag(html, /<meta name="twitter:image:alt"[^>]*>/, `<meta name="twitter:image:alt" content="${escapeAttribute(metadata.imageAlt)}" />`)
        const outputDirectory = `dist/${pathname.replace(/^\//, '')}`
        await mkdir(outputDirectory, { recursive: true })
        await writeFile(`${outputDirectory}/index.html`, html)
      }))
    },
  }
}

export default defineConfig({
  plugins: [react(), routePages()],
  base: '/mahesh-os-portfolio/',
  build: { target: 'es2020', cssCodeSplit: true },
})
