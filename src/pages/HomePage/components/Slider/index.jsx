import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import BrowserFrame from '../../../../components/BrowserFrame'
import './Slider.scss'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import Skills from '../../../../components/Skills'

const Slider = ({ items, headline }) => {
  const size = useWindowSize()
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      perView: size.width > 900 ? 2 : 1,
      origin: 'center',
      spacing: 0,
      offset: 0,
    },
  })
  return (
    <section className="container projects-container">
      <h3>{headline}</h3>

      <div ref={sliderRef} className="keen-slider">
        {items
          .sort((p1, p2) => p2.to - p1.to)
          .map((project) => {
            return (
              <div key={project.id} className="keen-slider__slide number-slide">
                <h3>{project.title}</h3>
                <BrowserFrame>
                  <p>{project.headline}.</p>
                  <a href={`/project/${project.id}`}>Read more</a>
                </BrowserFrame>
                <Skills skills={project.skills.split(',')} />
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Slider