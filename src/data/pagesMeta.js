/**
 * Route metadata for SEO, social previews, and build-time static HTML.
 * Source of truth: pagesMeta.json (also read by scripts/generate-static-pages.js).
 */
import pages from './pagesMeta.json'
import { SITE_URL, seo } from './site'

export const pagesMeta = pages

/**
 * @param {string} path pathname such as `/` or `/project/trimbox`
 * @returns {typeof pages[number] | null}
 */
export function getPageMeta(path) {
  if (!path) {
    return null
  }
  const normalized = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path
  return pages.find((page) => page.path === normalized) || null
}

/**
 * Absolute URL for a route path.
 * @param {string} path
 */
export function getPageUrl(path = '/') {
  return `${SITE_URL}${path === '/' ? '' : path}`
}

/**
 * Defaults used when a route has no pagesMeta entry.
 */
export function getDefaultPageMeta() {
  return {
    path: '/',
    title: seo.title,
    description: seo.description,
    type: 'website',
    ogImage: seo.ogImage,
  }
}

export default pages
