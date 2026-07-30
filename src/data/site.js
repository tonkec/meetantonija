/**
 * Centralized site copy and metadata.
 * Update availability and SEO here rather than scattering strings across components.
 *
 * Crawlability note: this site is a CRA SPA. Full Next/Astro migration would be
 * disproportionate for a portfolio. We ship Open Graph / Twitter / JSON-LD in the
 * static HTML shell, then generate per-route HTML after build
 * (`scripts/generate-static-pages.js`) so crawlers see route-specific meta and
 * semantic markup inside #root. Netlify serves those files first; `_redirects`
 * keeps SPA fallback working for other deep links.
 */

import cv from 'files/cv.pdf'

export const SITE_URL = 'https://meetantonija.com'

export const person = {
  name: 'Antonija Šimić',
  alternateName: 'Antonija Šimić',
  jobTitle: 'Senior React Native & Frontend Engineer',
  // "Senior" is verified via CV/project roles (Trimbox, Funder Pro, Casumo).
  location: {
    country: 'Croatia',
    // City-level only; do not expose a private street address.
    locality: 'Sveta Nedelja',
  },
  email: 'antonija1023@gmail.com',
  image: 'https://avatars.githubusercontent.com/u/5020758?v=4',
  sameAs: [
    'https://github.com/tonkec',
    'https://www.linkedin.com/in/antonija-simic/',
    'https://codepen.io/tonkec',
  ],
}

export const availability = {
  // Centralized availability copy — change here to update hero, contact, and marquees.
  short:
    'Open to part-time Senior React Native and frontend opportunities with remote international teams.',
  floatingLabel: 'Open to',
  floatingValue: 'Part-time RN roles',
  locationLine: 'Based in Croatia · Working remotely with international teams',
  heroCardLabel: 'Currently',
  heroCardValue: 'Trimbox · React Native',
}

export const seo = {
  title: 'Antonija Šimić — Senior React Native & Frontend Engineer',
  description:
    'Senior React Native and frontend engineer building production mobile products, subscription systems, experiments, and scalable frontend architecture.',
  // PLACEHOLDER: replace with a dedicated social-preview image when available.
  ogImage: 'https://avatars.githubusercontent.com/u/5020758?v=4',
  themeColor: '#f90093',
  locale: 'en',
}

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/tonkec',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antonija-simic/',
    icon: 'linkedin',
  },
  {
    id: 'codepen',
    name: 'CodePen',
    href: 'https://codepen.io/tonkec',
    icon: 'codepen',
  },
]

export const navigationLinks = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '/posts', label: 'Notes', id: 'notes' },
  { href: '/cv', label: 'CV', id: 'cv' },
  { href: '/contact', label: 'Contact', id: 'contact' },
]

export const cvAsset = {
  href: cv,
  downloadName: 'antonija_simic_cv',
  label: 'Download CV',
}

export const credibilityItems = [
  {
    id: 'years',
    label: '10+ years',
    detail: 'building production products',
  },
  {
    id: 'mobile',
    label: 'Production React Native & React',
    detail: 'shipped on mobile and web',
  },
  {
    id: 'impact',
    label: 'Measurable engineering impact',
    detail: 'API efficiency, performance, test coverage',
  },
]

export const hero = {
  eyebrow: 'Product engineer',
  headline: 'Senior React Native & Frontend Engineer',
  supporting:
    'I help companies build reliable React Native and React products, solve complex frontend architecture problems, and ship production software with confidence.',
  ctas: {
    work: { label: 'View selected work', targetId: 'selected-work' },
    contact: { label: 'Contact me', targetId: 'contact' },
  },
}

export const contact = {
  kicker: "Let's work together",
  headline:
    'Looking for someone to own complex React Native or frontend product work?',
  body: 'Let’s talk about your product, technical challenges, and where I can help. Reach me by email, LinkedIn, or the form below.',
  closingCta:
    'Available for part-time Senior React Native and frontend roles with remote international teams.',
  mailtoSubject: 'Hello from meetantonija.com',
  emailLabel: 'Email me',
  linkedInLabel: 'LinkedIn',
  closingNote:
    "Thanks for visiting. If you're building a React Native or frontend product, I'd love to hear about it.",
}

const site = {
  SITE_URL,
  person,
  availability,
  seo,
  socialLinks,
  navigationLinks,
  cvAsset,
  credibilityItems,
  hero,
  contact,
}

export default site
