/**
 * Centralized site copy and metadata.
 * Update availability and SEO here rather than scattering strings across components.
 *
 * Crawlability note: this site is a CRA SPA. Full Next/Astro migration would be
 * disproportionate for a portfolio. We ship complete Open Graph / Twitter / JSON-LD
 * and Person schema in the static HTML shell so crawlers and social previews receive
 * meaningful content without executing the app. Netlify `_redirects` keeps direct
 * URL refreshes working. Prefer prerender/SSG only if social crawlers prove insufficient.
 */

import cv from 'files/cv.pdf'

export const SITE_URL = 'https://meetantonija.com'

export const person = {
  name: 'Antonija Simić',
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
  title: 'Antonija Simić — Senior React Native & Frontend Engineer',
  description:
    'React Native and frontend engineer building production mobile products, subscriptions, analytics integrations, experiments, and maintainable TypeScript applications.',
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
    detail: 'in software development',
    // Verified: coding/working since 2015 (FAQ + marquee + Tint role from 2015).
  },
  {
    id: 'mobile',
    label: 'Production RN',
    detail: 'iOS & Android apps',
    // Verified via Trimbox React Native + Expo/EAS release work.
  },
  {
    id: 'fullstack',
    label: 'Full-stack',
    detail: 'product development',
    // Verified via Duga (React + Express/PostgreSQL) as creator & lead.
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    detail: 'day to day',
  },
  {
    id: 'speaking',
    label: 'Talks & mentoring',
    detail: 'sharing the craft',
    // Verified via Events section (JS Zagreb, DevSheGoes, CSS in Vienna)
    // and Code Institute mentoring role in projects data.
  },
]

export const hero = {
  eyebrow: 'Product engineer',
  headline: 'Senior React Native & Frontend Engineer',
  supporting:
    'I build production mobile and web products with React Native, React and TypeScript, with a focus on subscriptions, analytics, experimentation and complex product flows.',
  ctas: {
    work: { label: 'View selected work', targetId: 'selected-work' },
    cv: { label: 'Download CV' },
    contact: { label: 'Contact me', targetId: 'contact' },
  },
}

export const contact = {
  kicker: "Let's work together",
  headline:
    'Looking for someone to own complex React Native product work? Let’s talk.',
  body: 'Reach me by email, LinkedIn, or the form below. I reply to recruiter and client notes that are a good fit for React Native or frontend product work.',
  closingCta:
    'Available for part-time Senior React Native and frontend roles with remote international teams.',
  mailtoSubject: 'Hello from meetantonija.com',
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
