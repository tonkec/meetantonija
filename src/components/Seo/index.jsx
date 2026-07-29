import { Helmet } from 'react-helmet'
import { SITE_URL, person, seo } from 'data/site'
import { getPageMeta } from 'data/pagesMeta'

/**
 * Shared document head for titles, social previews and JSON-LD.
 * Homepage defaults live in public/index.html; build-time static HTML
 * (`scripts/generate-static-pages.js`) mirrors route meta for crawlers.
 * This component keeps client-routed pages in sync via react-helmet.
 */
const Seo = ({
  title,
  description,
  path = '/',
  image,
  type,
  jsonLd,
}) => {
  const pageMeta = getPageMeta(path)
  const resolvedTitle = title || pageMeta?.title || seo.title
  const resolvedDescription =
    description || pageMeta?.description || seo.description
  const resolvedImage = image || pageMeta?.ogImage || seo.ogImage
  const resolvedType = type || pageMeta?.type || 'website'
  const url = `${SITE_URL}${path === '/' ? '' : path}`

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    alternateName: person.alternateName,
    jobTitle: person.jobTitle,
    url: SITE_URL,
    image: person.image,
    email: `mailto:${person.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.location.locality,
      addressCountry: person.location.country,
    },
    sameAs: person.sameAs,
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: person.name,
    url: SITE_URL,
    description: seo.description,
    author: { '@id': `${SITE_URL}/#person` },
  }

  const defaultJsonLd = [personJsonLd, websiteJsonLd]
  const metaJsonLd = pageMeta?.jsonLd
  const structuredData =
    jsonLd ||
    (metaJsonLd
      ? Array.isArray(metaJsonLd)
        ? metaJsonLd
        : [metaJsonLd]
      : defaultJsonLd)

  return (
    <Helmet>
      <html lang="en" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content={seo.themeColor} />
      <meta name="robots" content="index,follow" />

      <meta property="og:type" content={resolvedType} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content={person.name} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />

      <script type="application/ld+json">
        {JSON.stringify(
          Array.isArray(structuredData) ? structuredData : [structuredData]
        )}
      </script>
    </Helmet>
  )
}

export default Seo
