import { Link } from 'react-router-dom'
import { removeSpacesAndDashes } from 'utils'
import './CaseStudyCard.scss'

/**
 * Featured case study summary.
 * Hierarchy: product → contribution → outcome → link → compact tech.
 */
const CaseStudyCard = ({ study }) => {
  if (!study) {
    return null
  }

  const projectPath = `/project/${removeSpacesAndDashes(study.title)}`
  const primaryOutcome = study.outcomes?.[0]
  const tech = study.technologies?.slice(0, 4) || []

  return (
    <article className="case-study-card">
      {study.image ? (
        <div className="case-study-card__media">
          <img
            src={study.image}
            alt={`${study.title} product preview`}
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div
          className="case-study-card__media case-study-card__media--placeholder"
          aria-hidden="true"
        />
      )}

      <div className="case-study-card__body">
        <p className="section-kicker">
          {study.projectType || study.company || 'Selected work'}
          {study.period ? ` · ${study.period}` : ''}
        </p>
        <h3>{study.title}</h3>
        <p className="case-study-card__role">{study.role}</p>
        <p>{study.summary}</p>

        {study.highlight ? (
          <p className="case-study-card__highlight">
            <span>Contribution</span>
            {study.highlight}
          </p>
        ) : null}

        {primaryOutcome ? (
          <p className="case-study-card__outcome">
            <span>Outcome</span>
            {primaryOutcome}
          </p>
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
        </div>

        {tech.length ? (
          <ul className="case-study-card__tech" aria-label="Technologies">
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default CaseStudyCard
