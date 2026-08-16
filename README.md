# MAHESH OS — Personal Portfolio

A premium, responsive personal portfolio for P. Mahesh Babu, designed as a cinematic digital workspace. It presents IT support capabilities, software projects, education, experience and contact details through reusable data-driven components.

Live site: [maheshbabupatnaikuni.github.io/mahesh-os-portfolio](https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/)

## Technology

- React, TypeScript and Vite
- Tailwind CSS with a custom design layer
- Framer Motion, GSAP and Lenis
- React Router and Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create `.env` from `.env.example` when connecting the contact form.

## Production build

```bash
npm run build
npm run preview
```

The optimized output is generated in `dist/`. Both `vercel.json` and `netlify.toml` include SPA route fallbacks for project case studies.

## Update portfolio content

Content lives in `src/data/`:

- `profile.ts` — name, biography, social links, statistics and contact details
- `projects.ts` — project cards and full case-study content
- `skills.ts` — grouped skills and hover descriptions
- `experience.ts` — timeline entries
- `education.ts` — degrees and education details

### Add a project

Add a new object to the `projects` array in `src/data/projects.ts`, add its thumbnail under `public/projects/`, and use a unique URL-safe `slug`. The card and `/projects/:slug` page are generated automatically.

### Replace the profile photo

The supplied portrait is stored at `public/images/mahesh-profile.jpg`. Replace this file with the same filename when updating the photograph.

### Update the resume

The site supports separate resumes for software engineering, application support, IT support and cybersecurity roles. Add PDFs using the filenames documented in `public/resume/README.txt`, then change the matching `available` value to `true` in `src/data/profile.ts`. Unavailable resumes automatically show “Coming Soon” without broken links.

### Connect the contact form

Create a Formspree form or another endpoint that accepts `POST` form data, then set:

```env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

No secret key should be placed in frontend environment variables. For sensitive email services, proxy requests through a serverless function.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the detected Vite settings (`npm run build`, output `dist`).
4. Add `VITE_CONTACT_ENDPOINT` in project environment variables.
5. Deploy and update canonical, Open Graph and sitemap URLs from `your-domain.com`.

## GitHub Pages

Pushes to `main` automatically build and deploy the site through `.github/workflows/pages.yml`. The workflow installs locked dependencies, builds the Vite application, adds the single-page route fallback, and publishes `dist/` to GitHub Pages.

## Custom domain

Add the domain in the Vercel or Netlify site settings, follow the provided DNS instructions, then update the canonical URL and metadata in `index.html`, plus `public/sitemap.xml` and `public/robots.txt`.

## Final placeholders to replace

- Diploma institution in `src/data/education.ts`
- Profile portrait in `public/images/`
- Role-specific resume PDFs in `public/resume/`
- Additional public source or live links as the remaining projects are implemented
- Production domain metadata and sitemap after a domain is confirmed
