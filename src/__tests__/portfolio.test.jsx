import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ActionButtons from 'pages/HomePage/components/ActionButtons'
import ArchitectureFlow from 'components/ArchitectureFlow'
import CaseStudyCard from 'components/CaseStudyCard'
import ContactForm from 'components/ContactForm'
import EngineeringStories from 'components/EngineeringStories'
import ProjectNav from 'components/ProjectNav'
import Social from 'components/Social'
import { featuredCaseStudies } from 'data/caseStudies'
import architectureFlows from 'data/architectureFlows'
import { cvAsset, hero, seo, person, contact } from 'data/site'
import { scrollToTheElement } from 'utils'

jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: {
    send: jest.fn().mockResolvedValue({ status: 200 }),
  },
}))

jest.mock('hooks/useWindowSize', () => ({
  useWindowSize: () => ({ width: 1200, height: 800 }),
}))

jest.mock('components/Image', () => ({
  __esModule: true,
  default: ({ alt = '' }) => <img alt={alt} data-testid="mock-image" />,
}))

jest.mock('utils', () => {
  const actual = jest.requireActual('utils')
  return {
    ...actual,
    scrollToTheElement: jest.fn(),
  }
})

describe('hero CTAs', () => {
  beforeEach(() => {
    scrollToTheElement.mockClear()
  })

  it('scrolls to selected work and contact', async () => {
    render(
      <MemoryRouter>
        <ActionButtons />
      </MemoryRouter>
    )

    await userEvent.click(
      screen.getByRole('button', { name: hero.ctas.work.label })
    )
    expect(scrollToTheElement).toHaveBeenCalledWith(hero.ctas.work.targetId)

    await userEvent.click(
      screen.getByRole('button', { name: hero.ctas.contact.label })
    )
    expect(scrollToTheElement).toHaveBeenCalledWith(hero.ctas.contact.targetId)

    expect(
      screen.queryByRole('link', { name: cvAsset.label })
    ).not.toBeInTheDocument()
  })
})

describe('CaseStudyCard', () => {
  it('includes Duga among featured case studies', () => {
    expect(
      featuredCaseStudies.some((study) => study.slug === 'duga')
    ).toBe(true)
  })

  it('renders featured project data with contribution hierarchy', () => {
    const study = featuredCaseStudies.find((item) => item.highlight)
    expect(study).toBeTruthy()

    render(
      <MemoryRouter>
        <CaseStudyCard study={study} />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: study.title })).toBeInTheDocument()
    expect(screen.getByText(study.summary)).toBeInTheDocument()
    expect(screen.getByText(study.highlight)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /read the case study/i })
    ).toHaveClass('case-study-card__btn')
  })

  it('marks Trimbox as the flagship featured project', () => {
    const trimbox = featuredCaseStudies.find((item) => item.slug === 'trimbox')
    expect(trimbox.emphasis).toBe('primary')
    expect(trimbox.image).toMatch(/trimbox\/paywall/)

    render(
      <MemoryRouter>
        <CaseStudyCard study={trimbox} />
      </MemoryRouter>
    )

    expect(screen.getByText(/featured/i)).toBeInTheDocument()
  })

  it('renders safely when optional fields are missing', () => {
    render(
      <MemoryRouter>
        <CaseStudyCard
          study={{
            slug: 'minimal',
            title: 'Minimal',
            summary: 'A minimal study.',
            role: 'Engineer',
            context: 'Context',
            responsibilities: [],
            challenges: [],
            solution: [],
            outcomes: [],
            technologies: [],
          }}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Minimal' })).toBeInTheDocument()
  })
})

describe('ContactForm', () => {
  it('validates required fields and prevents empty submission', async () => {
    const emailjs = require('@emailjs/browser').default
    emailjs.send.mockClear()

    render(<ContactForm />)

    await userEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('exposes email and LinkedIn CTAs', () => {
    render(<ContactForm />)

    expect(
      screen.getByRole('link', { name: contact.emailLabel })
    ).toHaveAttribute('href', expect.stringContaining('mailto:'))
    expect(
      screen.getByRole('link', { name: contact.linkedInLabel })
    ).toHaveAttribute('href', expect.stringContaining('linkedin'))
  })
})

describe('Social links', () => {
  it('opens external profiles with safe rel attributes', () => {
    render(<Social />)

    const github = screen.getByRole('link', { name: /github/i })
    const linkedin = screen.getByRole('link', { name: /linkedin/i })

    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', expect.stringContaining('noopener'))
    expect(linkedin).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
  })
})

describe('EngineeringStories', () => {
  it('renders curated homepage engineering challenge previews', () => {
    render(
      <MemoryRouter>
        <EngineeringStories mode="homepage" previewOnly />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /selected engineering challenges/i,
      })
    ).toBeInTheDocument()

    expect(screen.queryAllByRole('button')).toHaveLength(0)
    expect(
      screen.getByText(/preventing duplicate paywalls/i)
    ).toBeInTheDocument()
    expect(screen.getAllByText(/^Trimbox · React Native$/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/^FunderPro · React · React Query$/i)).toBeInTheDocument()
    expect(
      screen.getByText(/coordinating app-open ui/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/reducing redundant api calls by 40%/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/modernizing fintech onboarding/i)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/building a real-time communication product/i)
    ).not.toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /read trimbox case study/i }).length
    ).toBeGreaterThan(0)
  })

  it('filters stories when a projectSlug is provided', () => {
    render(
      <MemoryRouter>
        <EngineeringStories
          mode="project"
          projectSlug="duga"
          showProjectLinks={false}
          heading="Selected Duga engineering stories."
        />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /selected duga engineering stories/i,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/auth sessions that revoke immediately/i)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/preventing duplicate paywalls/i)
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /read duga case study/i })
    ).not.toBeInTheDocument()
  })

  it('supports expandable story accessibility attributes', async () => {
    render(
      <MemoryRouter>
        <EngineeringStories mode="project" projectSlug="trimbox" />
      </MemoryRouter>
    )

    const toggle = screen.getByRole('button', {
      name: /preventing duplicate paywalls/i,
    })
    expect(toggle).toHaveAttribute('aria-controls')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('heading', { level: 4, name: /context/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: /problem/i })
    ).toBeInTheDocument()
  })
})

describe('ArchitectureFlow', () => {
  it('renders accessible step labels for Trimbox', () => {
    render(<ArchitectureFlow flow={architectureFlows.trimbox} />)

    expect(
      screen.getByRole('heading', { name: /trimbox app-open flow/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/popup coordinator/i)).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: /trimbox app-open flow/i })
    ).toBeInTheDocument()
  })
})

describe('ProjectNav', () => {
  it('links back to selected work and sibling featured projects', () => {
    render(
      <MemoryRouter>
        <ProjectNav currentSlug="funderpro" />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('link', { name: /back to selected work/i })
    ).toHaveAttribute('href', '/#selected-work')
    expect(screen.getByRole('link', { name: /trimbox/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /duga/i })).toBeInTheDocument()
  })
})

describe('featured work set', () => {
  it('features Trimbox, FunderPro and Duga in that order', () => {
    const slugs = featuredCaseStudies.map((study) => study.slug)
    expect(slugs).toEqual(['trimbox', 'funderpro', 'duga'])

    expect(featuredCaseStudies[0].workType).toMatch(/professional/i)
    expect(featuredCaseStudies[1].workType).toMatch(/professional/i)
    expect(featuredCaseStudies[2].workType).toMatch(/independent/i)

    const funder = featuredCaseStudies.find((study) => study.slug === 'funderpro')
    expect(funder.title).toBe('FunderPro')
    expect(funder.period).toMatch(/September 2023.*March 2026/i)
    expect(funder.context).toMatch(/proprietary trading company/i)
    expect(funder.context).not.toMatch(/bank|brokerage/i)
    expect(funder.outcomes[0]).toMatch(/40%/)
    expect(funder.technologies).toEqual([
      'React',
      'TypeScript',
      'React Query',
      'JavaScript',
    ])
  })
})

describe('site SEO content', () => {
  it('exposes the verified professional title and description', () => {
    expect(seo.title).toContain(person.name)
    expect(seo.title).toMatch(/Senior React Native/i)
    expect(seo.description).toMatch(/subscription systems/i)
    expect(seo.description).toMatch(/experiments/i)
    expect(hero.supporting).toMatch(/reliable React Native and React products/i)
    expect(hero.headline).toBe('Senior React Native & Frontend Engineer')
    expect(contact.headline).toMatch(/React Native or frontend/i)
    expect(contact.closingNote).toMatch(/Thanks for visiting/i)
  })
})
