import { Link } from 'react-router-dom'
import { removeSpacesAndDashes } from 'utils'
import './CaseStudyCard.scss'

/**
 * Renders a featured case study summary.
 * Optional fields (image, liveUrl, repositoryUrl, confidential, outcomes)
 * are safely omitted when missing.
 */
const CaseStudyCard = ({ study }) => {
  if (!study) {
    return null
  }

  const projectPath = `/project/${removeSpacesAndDashes(study.title)}`

  return (
    <article className="case-study-card">
      {study.image ? (
        <div className="case-study-card__media">
          <img src={study.image} alt={`${study.title} preview`} />
        </div>
      ) : (
        <div
          className="case-study-card__media case-study-card__media--placeholder"
          aria-hidden="true"
        />
      )}

      <div className="case-study-card__body">
        <p className="section-kicker">
          {study.projectType
            ? study.projectType
            : study.company
              ? study.company
              : 'Selected work'}
          {study.period ? ` · ${study.period}` : ''}
        </p>
        <h3>{study.title}</h3>
        {study.company && study.projectType ? (
          <p className="case-study-card__company">{study.company}</p>
        ) : null}
        <p className="case-study-card__role">{study.role}</p>
        <p>{study.summary}</p>

        {study.outcomes?.length ? (
          <ul className="case-study-card__outcomes">
            {study.outcomes.slice(0, 3).map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        ) : null}

        {study.technologies?.length ? (
          <ul className="case-study-card__tech" aria-label="Technologies">
            {study.technologies.slice(0, 6).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : null}

        {study.confidential ? (
          <p className="case-study-card__note">
            Some product details remain confidential.
          </p>
        ) : null}

        <div className="case-study-card__actions">
          <Link
            to={projectPath}
            className="case-study-card__btn case-study-card__btn--primary"
          >
            Read the case study
          </Link>
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card__btn case-study-card__btn--ghost"
            >
              Visit site
            </a>
          ) : null}
          {study.repositoryUrl ? (
            <a
              href={study.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-card__btn case-study-card__btn--ghost"
            >
              Repository
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default CaseStudyCard
