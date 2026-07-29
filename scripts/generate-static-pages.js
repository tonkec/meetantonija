/**
 * Build-time static HTML for key routes (crawlability without Puppeteer).
 *
 * Reads build/index.html after CRA build, then writes per-route HTML with
 * route-specific meta + semantic content inside #root.
 *
 * Keep route data in sync with src/data/pagesMeta.json (single source of truth).
 */

const fs = require('fs')
const path = require('path')

const SITE_URL = 'https://meetantonija.com'
const BUILD_DIR = path.join(__dirname, '..', 'build')
const META_PATH = path.join(__dirname, '..', 'src', 'data', 'pagesMeta.json')

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function absoluteUrl(routePath) {
  return `${SITE_URL}${routePath === '/' ? '/' : routePath}`
}

function outputPathFor(routePath) {
  if (routePath === '/') {
    return path.join(BUILD_DIR, 'index.html')
  }
  const segments = routePath.replace(/^\//, '').split('/')
  return path.join(BUILD_DIR, ...segments, 'index.html')
}

/**
 * Replace or insert a <meta> tag matched by name= or property=.
 */
function upsertMeta(html, attrName, attrValue, content) {
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attrName}=["']${escapeRegExp(attrValue)}["'][^>]*>`,
    'i'
  )
  const tag = `<meta ${attrName}="${attrValue}" content="${escapeHtml(content)}" />`
  if (pattern.test(html)) {
    return html.replace(pattern, tag)
  }
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`)
}

function setTitle(html, title) {
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  }
  return html.replace(/<\/head>/i, `    <title>${escapeHtml(title)}</title>\n  </head>`)
}

function setCanonical(html, url) {
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`
  if (pattern.test(html)) {
    return html.replace(pattern, tag)
  }
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`)
}

function setJsonLd(html, jsonLd) {
  const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
  const script = `<script type="application/ld+json">\n${JSON.stringify(payload, null, 2)}\n    </script>`
  if (/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i.test(html)) {
    return html.replace(
      /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
      script
    )
  }
  return html.replace(/<\/head>/i, `    ${script}\n  </head>`)
}

function buildRootHtml(page) {
  const links = (page.links || [])
    .map(
      (link) =>
        `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`
    )
    .join('\n        ')

  const outcomes =
    page.outcomes && page.outcomes.length
      ? `<h2>Outcomes</h2>
      <ul>
        ${page.outcomes
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join('\n        ')}
      </ul>`
      : ''

  return `<main>
      <h1>${escapeHtml(page.heading || page.title)}</h1>
      <p>${escapeHtml(page.summary || page.description)}</p>
      ${outcomes}
      <nav aria-label="Primary">
        <ul>
        ${links}
        </ul>
      </nav>
    </main>`
}

function setRootContent(html, innerHtml) {
  if (/<div\s+id=["']root["']\s*>[\s\S]*?<\/div>/i.test(html)) {
    return html.replace(
      /<div\s+id=["']root["']\s*>[\s\S]*?<\/div>/i,
      `<div id="root">${innerHtml}</div>`
    )
  }
  return html.replace(
    /<div\s+id=["']root["']\s*\/?>/i,
    `<div id="root">${innerHtml}</div>`
  )
}

function applyPageMeta(templateHtml, page) {
  const url = absoluteUrl(page.path)
  const image = page.ogImage || `${SITE_URL}/favicon.ico`
  let html = templateHtml

  html = setTitle(html, page.title)
  html = upsertMeta(html, 'name', 'description', page.description)
  html = setCanonical(html, url)

  html = upsertMeta(html, 'property', 'og:type', page.type || 'website')
  html = upsertMeta(html, 'property', 'og:title', page.title)
  html = upsertMeta(html, 'property', 'og:description', page.description)
  html = upsertMeta(html, 'property', 'og:url', url)
  html = upsertMeta(html, 'property', 'og:image', image)

  html = upsertMeta(html, 'name', 'twitter:card', 'summary_large_image')
  html = upsertMeta(html, 'name', 'twitter:title', page.title)
  html = upsertMeta(html, 'name', 'twitter:description', page.description)
  html = upsertMeta(html, 'name', 'twitter:image', image)

  if (page.jsonLd) {
    html = setJsonLd(html, page.jsonLd)
  }

  html = setRootContent(html, buildRootHtml(page))
  return html
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
}

function main() {
  const indexPath = path.join(BUILD_DIR, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.error(
      `[generate-static-pages] Missing ${indexPath}. Run "react-scripts build" first.`
    )
    process.exit(1)
  }

  if (!fs.existsSync(META_PATH)) {
    console.error(`[generate-static-pages] Missing ${META_PATH}`)
    process.exit(1)
  }

  const pages = JSON.parse(fs.readFileSync(META_PATH, 'utf8'))
  const templateHtml = fs.readFileSync(indexPath, 'utf8')

  console.log('[generate-static-pages] Writing static HTML for crawlability…')

  pages.forEach((page) => {
    const html = applyPageMeta(templateHtml, page)
    const outPath = outputPathFor(page.path)
    ensureDir(outPath)
    fs.writeFileSync(outPath, html, 'utf8')
    console.log(`  wrote ${path.relative(path.join(__dirname, '..'), outPath)}`)
  })

  console.log(`[generate-static-pages] Done (${pages.length} pages).`)
}

main()
