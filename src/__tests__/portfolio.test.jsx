import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ActionButtons from 'pages/HomePage/components/ActionButtons'
import CaseStudyCard from 'components/CaseStudyCard'
import ContactForm from 'components/ContactForm'
import EngineeringStories from 'components/EngineeringStories'
import Social from 'components/Social'
import { featuredCaseStudies } from 'data/caseStudies'
import { cvAsset, hero, seo, person } from 'data/site'
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

  it('scrolls to selected work, links the CV download, and scrolls to contact', async () => {
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

    const cvLink = screen.getByRole('link', { name: cvAsset.label })
    expect(cvLink).toHaveAttribute('download', cvAsset.downloadName)
    expect(cvLink.getAttribute('href')).toContain('.pdf')
  })
})

describe('CaseStudyCard', () => {
  it('includes Duga among featured case studies', () => {
    expect(
      featuredCaseStudies.some((study) => study.slug === 'duga')
    ).toBe(true)
  })

  it('renders featured project data', () => {
    const study = featuredCaseStudies[0]
    render(
      <MemoryRouter>
        <CaseStudyCard study={study} />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: study.title })).toBeInTheDocument()
    expect(screen.getByText(study.summary)).toBeInTheDocument()
    if (study.image) {
      expect(
        screen.getByRole('img', { name: `${study.title} preview` })
      ).toHaveAttribute('src', study.image)
    }
    expect(
      screen.getByRole('link', { name: /read the case study/i })
    ).toHaveAttribute('href', expect.stringContaining('/project/'))
    expect(
      screen.getByRole('link', { name: /read the case study/i })
    ).toHaveClass('case-study-card__btn')
  })

  it('does not break when optional fields are missing', () => {
    render(
      <MemoryRouter>
        <CaseStudyCard
          study={{
            slug: 'minimal',
            title: 'Minimal',
            summary: 'A minimal study',
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
    expect(screen.queryByText(/confidential/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /visit site/i })).not.toBeInTheDocument()
  })
})

describe('ContactForm', () => {
  const emailjs = require('@emailjs/browser').default

  beforeEach(() => {
    emailjs.send.mockClear()
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test_public_key'
  })

  it('validates required fields and prevents empty submission', async () => {
    render(<ContactForm />)

    await userEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument()
    expect(screen.getByText(/please enter your email/i)).toBeInTheDocument()
    expect(screen.getByText(/please include a short message/i)).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('shows success state and disables duplicate submission after success', async () => {
    render(<ContactForm />)

    await userEvent.type(screen.getByLabelText(/^name$/i), 'Recruiter')
    await userEvent.type(screen.getByLabelText(/^email$/i), 'recruiter@example.com')
    await userEvent.type(
      screen.getByLabelText(/^message$/i),
      'Looking for a React Native engineer for a product team.'
    )
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /message sent/i })).toBeDisabled()
    })

    expect(emailjs.send).toHaveBeenCalledTimes(1)
    expect(emailjs.send).toHaveBeenCalledWith(
      'service_bzujth7',
      'template_49np9nm',
      expect.objectContaining({
        from_name: 'Recruiter',
        from_email: 'recruiter@example.com',
        reply_to: 'recruiter@example.com',
      }),
      { publicKey: 'test_public_key' }
    )
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
  it('renders one story per featured product', async () => {
    render(
      <MemoryRouter>
        <EngineeringStories />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /production problems i have owned/i,
      })
    ).toBeInTheDocument()

    expect(document.querySelectorAll('.engineering-story')).toHaveLength(3)
    expect(
      screen.getAllByText('Trimbox', { selector: '.engineering-story__meta' })
    ).toHaveLength(1)
    expect(
      screen.getAllByText('Duga', { selector: '.engineering-story__meta' })
    ).toHaveLength(1)
    expect(
      screen.getAllByText('FunderPro', {
        selector: '.engineering-story__meta',
      })
    ).toHaveLength(1)

    expect(
      screen.getByText(/preventing duplicate paywalls/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/auth sessions that revoke immediately/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/reducing redundant api traffic/i)
    ).toBeInTheDocument()
  })

  it('filters stories when a projectSlug is provided', () => {
    render(
      <MemoryRouter>
        <EngineeringStories
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
      screen.queryByRole('link', { name: /view duga case study/i })
    ).not.toBeInTheDocument()
  })
})

describe('featured work set', () => {
  it('features Trimbox, Duga and FunderPro', () => {
    const slugs = featuredCaseStudies.map((study) => study.slug)
    expect(slugs).toEqual(['trimbox', 'duga', 'funderpro'])

    const funder = featuredCaseStudies.find((study) => study.slug === 'funderpro')
    expect(funder.title).toBe('FunderPro')
    expect(funder.period).toMatch(/September 2023/i)
    expect(funder.outcomes[0]).toMatch(/40%/)
    expect(funder.technologies).toEqual([
      'React',
      'TypeScript',
      'React Query',
      'JavaScript',
      'CSS',
      'Frontend Architecture',
      'API Integration',
    ])
  })
})

describe('site SEO content', () => {
  it('exposes the verified professional title and description', () => {
    expect(seo.title).toContain(person.name)
    expect(seo.title).toMatch(/Senior React Native/i)
    expect(seo.description).toMatch(/subscriptions/i)
    expect(seo.description).toMatch(/experiments/i)
  })
})
