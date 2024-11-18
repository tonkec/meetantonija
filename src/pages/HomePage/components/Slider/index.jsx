import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import BrowserFrame from 'components/BrowserFrame'
import './Slider.scss'
import { useWindowSize } from 'hooks/useWindowSize'
import Skills from 'components/Skills'
import { removeSpacesAndDashes } from 'utils'

const Slider = ({ items, headline }) => {
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
              <div key={project.id} className="keen-slider__slide">
                <h3>{project.title}</h3>
                <BrowserFrame>
                  <p className="block">{project.headline}.</p>
                  <div className="small-margin-bottom small-margin-top">
                    <Skills
                      buttonClass="xs-font ternary"
                      skills={project.skills.split(',')}
                    />
                  </div>
                  <a
                    role="button"
                    className="primary inline-block no-margin-top"
                    href={`/project/${removeSpacesAndDashes(project.title.toLowerCase())}`}
                  >
                    Read more
                  </a>
                </BrowserFrame>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Slider
