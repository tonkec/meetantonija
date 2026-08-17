import fs from 'fs'
import path from 'path'
import pagesMeta from 'data/pagesMeta.json'
import posts from 'data/posts'
import { formatNoteTitle } from 'utils'

const ROOT = path.join(__dirname, '..', '..')

describe('homepage metadata', () => {
  const home = pagesMeta.find((page) => page.path === '/')

  it('carries the current professional positioning', () => {
    expect(home.title).toMatch(/Antonija Šimić/)
    expect(home.title).toMatch(/Senior React Native/)
    expect(home.description).toMatch(/Senior React Native/)
  })

  it('never regresses to stale positioning copy', () => {
    const staleStrings = [
      'Currently crafting UIs',
      'React interfaces with product sense',
      'Available for React work',
    ]
    const serialized = JSON.stringify(pagesMeta)
    staleStrings.forEach((phrase) => {
      expect(serialized).not.toContain(phrase)
    })
  })

  it('exposes a Person schema with verified profile links', () => {
    const person = home.jsonLd.find((entry) => entry['@type'] === 'Person')
    expect(person).toBeTruthy()
    expect(person.sameAs).toEqual(
      expect.arrayContaining([
        expect.stringContaining('github.com'),
        expect.stringContaining('linkedin.com'),
      ])
    )
  })
})

describe('pagesMeta entries', () => {
  it('gives every route a title, description and canonical path', () => {
    pagesMeta.forEach((page) => {
      expect(page.path).toBeTruthy()
      expect(page.title).toBeTruthy()
      expect(page.description.length).toBeGreaterThan(0)
    })
  })
})

describe('notes/posts', () => {
  it('produces unique slugs, so prerendered note pages never collide', () => {
    const slugs = posts.map((post) => formatNoteTitle(post.title))
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('gives every note a title and an intro to use as its meta description', () => {
    posts.forEach((post) => {
      expect(post.title).toBeTruthy()
      expect(post.intro).toBeTruthy()
    })
  })
})

describe('robots.txt', () => {
  const robots = fs.readFileSync(path.join(ROOT, 'public/robots.txt'), 'utf8')

  it('allows crawling and references the sitemap', () => {
    expect(robots).not.toMatch(/Disallow:\s*\/\s*$/m)
    expect(robots).toMatch(
      /Sitemap:\s*https:\/\/meetantonija\.com\/sitemap\.xml/
    )
  })
})

describe('sitemap.xml', () => {
  const sitemap = fs.readFileSync(path.join(ROOT, 'public/sitemap.xml'), 'utf8')

  it('includes the homepage', () => {
    expect(sitemap).toContain('<loc>https://meetantonija.com/</loc>')
  })
})
