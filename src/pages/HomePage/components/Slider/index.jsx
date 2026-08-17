import './Slider.scss'
import {
  formatProjectPeriod,
  removeSpacesAndDashes,
  truncateString,
} from 'utils'
import { useNavigate } from 'react-router-dom'

const Slider = ({ items, headline }) => {
  const navigate = useNavigate()
  const sortedItems = [...items].sort((p1, p2) => p2.from - p1.from)

  return (
    <section className="project-slider-section">
      <div className="container">
        <h2>{headline}</h2>

        <ul className="project-related-list">
          {sortedItems.map((project) => (
            <li key={project.id} className="project-slide">
              <div className="project-slide__meta">
                <span>{formatProjectPeriod(project)}</span>
                {project.company ? (
                  <span className="project-slide__company">
                    {project.company}
                  </span>
                ) : null}
              </div>

              <div className="project-slide__body">
                <h3>{project.title}</h3>
                <h4>{project.headline}</h4>
                <p>{truncateString(project.description, 140)}</p>
                <button
                  type="button"
                  className="project-slide__link"
                  onClick={() => {
                    navigate(
                      `/project/${removeSpacesAndDashes(project.title.toLowerCase())}`
                    )
                  }}
                >
                  Read case study
                  <span aria-hidden="true"> →</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Slider
