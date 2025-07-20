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
    <section className="container">
      <h2>{headline}</h2>

      <div ref={sliderRef} className="keen-slider">
        {items
          .sort((p1, p2) => p2.from - p1.from)
          .map((project) => {
            return (
              <div
                key={project.id}
                className="keen-slider__slide bg-pink-light small-padding border-radius"
              >
                <h3 className="small-margin-bottom">{project.title}</h3>
                <h5 className="small-margin-bottom">{project.headline}.</h5>
                <div className="small-margin-top small-margin-bottom flex flex-y-center flex-gap-small">
                  {project.skills.split('')}
                </div>

                <p>{truncateString(project.description, 200)}</p>

                <button
                  className="primary inline-block small-margin-top"
                  onClick={() => {
                    navigate(
                      `/project/${removeSpacesAndDashes(project.title.toLowerCase())}`
                    )
                  }}
                >
                  Read more 👉
                </button>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Slider
