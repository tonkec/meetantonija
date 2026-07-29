import { Link } from 'react-router-dom'
import { featuredCaseStudies } from 'data/caseStudies'
import { removeSpacesAndDashes } from 'utils'
import './ProjectNav.scss'

/**
 * Case-study navigation: previous / next featured projects.
 */
const ProjectNav = ({ currentSlug }) => {
  const featured = featuredCaseStudies
  const index = featured.findIndex((study) => study.slug === currentSlug)
  const previous = index > 0 ? featured[index - 1] : null
  const next =
    index >= 0 && index < featured.length - 1 ? featured[index + 1] : null

  if (!previous && !next) {
    return null
  }

  return (
    <nav className="project-nav" aria-label="Case study navigation">
      <div className="container project-nav__inner">
        <div className="project-nav__siblings">
          {previous ? (
            <Link
              to={`/project/${removeSpacesAndDashes(previous.title)}`}
              className="project-nav__link"
            >
              <span className="project-nav__label">Previous</span>
              <span className="project-nav__title">← {previous.title}</span>
            </Link>
          ) : (
            <span className="project-nav__placeholder" aria-hidden="true" />
          )}
          {next ? (
            <Link
              to={`/project/${removeSpacesAndDashes(next.title)}`}
              className="project-nav__link project-nav__link--next"
            >
              <span className="project-nav__label">Next</span>
              <span className="project-nav__title">{next.title} →</span>
            </Link>
          ) : (
            <span className="project-nav__placeholder" aria-hidden="true" />
          )}
        </div>
      </div>
    </nav>
  )
}

export default ProjectNav
