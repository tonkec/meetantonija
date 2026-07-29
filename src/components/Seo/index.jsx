import { Helmet } from 'react-helmet'
import { SITE_URL, person, seo } from 'data/site'

/**
 * Shared document head for titles, social previews and JSON-LD.
 * Homepage defaults live in public/index.html so crawlers see metadata
 * without executing the SPA; this component keeps routed pages in sync.
 */
const Seo = ({
  title = seo.title,
  description = seo.description,
  path = '/',
  image = seo.ogImage,
  type = 'website',
  jsonLd,
}) => {
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

  const structuredData = jsonLd || [personJsonLd, websiteJsonLd]

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content={seo.themeColor} />
      <meta name="robots" content="index,follow" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={person.name} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(
          Array.isArray(structuredData) ? structuredData : [structuredData]
        )}
      </script>
    </Helmet>
  )
}

export default Seo
