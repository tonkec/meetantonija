import { Link } from 'react-router-dom'
import './ExperiencePreview.scss'

/**
 * Condensed homepage experience — one strong line per role, link to detail.
 */
const experienceEntries = [
  {
    id: 'trimbox',
    title: 'Senior Frontend & Full-Stack Engineer',
    company: 'Mode Mobile · Trimbox',
    dates: 'March 2026 – Present',
    summary:
      'Production React Native work on subscriptions, experiments, analytics, and app-open UI coordination.',
    href: '/project/trimbox',
    workType: 'Professional product work',
  },
  {
    id: 'funderpro',
    title: 'Senior React Developer',
    company: 'Mochalabs · FunderPro',
    dates: 'September 2023 – March 2026',
    summary:
      'Reduced redundant API calls by 40% with React Query while improving onboarding, KYC, affiliate, and coupon flows.',
    href: '/project/funderpro',
    workType: 'Professional product work',
  },
  {
    id: 'duga',
    title: 'Creator & lead full-stack engineer',
    company: 'Duga',
    dates: '2024 – Present',
    summary:
      'Independent product ownership across React, auth, realtime chat, backend architecture, and deployment.',
    href: '/project/duga',
    workType: 'Independent product',
  },
]

const ExperiencePreview = () => {
  return (
    <section
      className="home-section experience-preview"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <h2 id="experience-heading">Where the work happened.</h2>
        <p className="experience-preview__intro">
          Concise highlights — full context lives on each case study.
        </p>

        <ul className="experience-preview__list">
          {experienceEntries.map((entry) => (
            <li key={entry.id} className="experience-preview__row">
              <div className="experience-preview__when">
                <p className="experience-preview__dates">{entry.dates}</p>
                <p className="experience-preview__type">{entry.workType}</p>
              </div>
              <div className="experience-preview__what">
                <h3>{entry.title}</h3>
                <p className="experience-preview__meta">{entry.company}</p>
                <p>{entry.summary}</p>
                <Link to={entry.href} className="experience-preview__link">
                  Read {entry.company.split('·').pop().trim()} case study
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExperiencePreview
