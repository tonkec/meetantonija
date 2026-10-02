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
  jobTitle: 'Senior Frontend & Full-Stack Engineer',
  // "Senior" is verified via CV/project roles (Trimbox, Funder Pro, Casumo).
  location: {
    country: 'Croatia',
    // City-level only; do not expose a private street address.
    locality: 'Zagreb',
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
    'Open to part-time Senior Frontend and Full-Stack opportunities with remote international teams.',
  statusLine:
    'Currently building Trimbox · Open to part-time senior engineering roles',
  locationLine: 'Based in Croatia · Working remotely with international teams',
  heroCardLabel: 'Currently',
  heroCardValue: 'Trimbox · React Native',
}

export const seo = {
  title: 'Antonija Šimić — Senior Frontend & Full-Stack Engineer',
  description:
    'Senior Frontend & Full-Stack Engineer specializing in React, React Native, TypeScript and Node.js, building production web and mobile products — from UI and product experiments to backend APIs and cloud deployment.',
  // PLACEHOLDER: replace with a dedicated social-preview image when available.
  ogImage: 'https://avatars.githubusercontent.com/u/5020758?v=4',
  themeColor: '#c2410c',
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
    id: 'stack',
    label: 'React · React Native · Node.js',
    detail: 'production mobile, web, and backend systems',
  },
  {
    id: 'impact',
    label: 'End-to-end product delivery',
    detail: 'architecture, APIs, databases, testing, and deployment',
  },
]

export const hero = {
  headline: 'Senior Frontend & Full-Stack Engineer',
  supporting:
    'I build production web and mobile products with React, React Native, TypeScript and Node.js — from polished user interfaces to APIs, databases and cloud deployment.',
  ctas: {
    work: { label: 'See my experience', targetId: 'experience' },
    contact: { label: 'Contact me', targetId: 'contact' },
  },
}

export const contact = {
  kicker: "Let's work together",
  headline:
    'Looking for a senior engineer who can own product work from frontend to backend?',
  body: 'Let’s talk about your product, technical challenges, and where I can help — whether that means React or React Native architecture, full-stack feature development, APIs, or production delivery.',
  closingCta:
    'Available for part-time Senior Frontend and Full-Stack roles with remote international teams.',
  mailtoSubject: 'Hello from meetantonija.com',
  emailLabel: 'Email me',
  linkedInLabel: 'LinkedIn',
  closingNote:
    "Thanks for visiting. If you're building a web or mobile product with React, React Native, TypeScript or Node.js, I'd love to hear about it.",
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
