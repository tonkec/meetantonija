import { Link } from 'react-router-dom'
import { featuredCaseStudies } from 'data/caseStudies'
import { removeSpacesAndDashes } from 'utils'
import './ProjectNav.scss'

/**
 * Case-study navigation: back to home + next featured project.
 */
const ProjectNav = ({ currentSlug }) => {
  const featured = featuredCaseStudies
  const index = featured.findIndex((study) => study.slug === currentSlug)
  const next =
    index >= 0 && index < featured.length - 1 ? featured[index + 1] : null

  return (
    <nav className="project-nav" aria-label="Case study navigation">
      <div className="container project-nav__inner">
        <Link to="/" className="project-nav__back">
          Back to home
        </Link>

        {next && (
          <div className="project-nav__siblings">
            <Link
              to={`/project/${removeSpacesAndDashes(next.title)}`}
              className="project-nav__link project-nav__link--next"
            >
              <span className="project-nav__label">Next</span>
              <span className="project-nav__title">{next.title} →</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default ProjectNav
