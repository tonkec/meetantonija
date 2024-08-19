import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import BrowserFrame from '../../../../components/BrowserFrame'
import './Slider.scss'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import Skills from '../../../../components/Skills'
import { removeSpacesAndDashesFromString } from '../../../../utils'

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
          .sort((p1, p2) => p2.to - p1.to)
          .map((project) => {
            return (
              <div key={project.id} className="keen-slider__slide">
                <h3>{project.title}</h3>
                <BrowserFrame>
                  <p className="block">{project.headline}.</p>
                  <a
                    role="button"
                    className="ternary inline-block"
                    href={`/project/${removeSpacesAndDashesFromString(project.title.toLowerCase())}`}
                  >
                    Read more
                  </a>
                </BrowserFrame>
                <div className="small-margin-top">
                  <Skills skills={project.skills.split(',')} />
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Slider
