import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './Slider.scss'
import { useWindowSize } from 'hooks/useWindowSize'
import { removeSpacesAndDashes, truncateString } from 'utils'
import { useNavigate } from 'react-router-dom'

const Slider = ({ items, headline }) => {
  const navigate = useNavigate()
  const size = useWindowSize()
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: size.width > 900 ? 2 : 1,
      origin: 'center',
      spacing: 20,
      offset: 0,
    },
  })
  return (
    <section className="project-slider-section">
      <div className="container">
        <p className="section-kicker">More work</p>
        <h2>{headline}</h2>

        <div ref={sliderRef} className="keen-slider">
          {items
            .sort((p1, p2) => p2.from - p1.from)
            .map((project) => {
              return (
                <div key={project.id} className="keen-slider__slide project-slide">
                  <span>
                    {project.from} - {project.to || 'Present'}
                  </span>
                  <h3>{project.title}</h3>
                  <h4>{project.headline}</h4>

                  <p>{truncateString(project.description, 200)}</p>

                  <button
                    className="primary"
                    onClick={() => {
                      navigate(
                        `/project/${removeSpacesAndDashes(project.title.toLowerCase())}`
                      )
                    }}
                  >
                    Read case study
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Slider
