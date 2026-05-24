import { useState } from 'react'
import Iframe from 'react-iframe'
import { LuMicroscope } from 'react-icons/lu'
import { FaDog } from 'react-icons/fa'
import { RiCactusFill } from 'react-icons/ri'
import { ThreeDots } from 'react-loader-spinner'

import './Previewer.scss'

const codeExperiments = [
  {
    title: 'CSS puppy',
    description: 'A tiny dog illustration built with pure CSS shapes.',
    url: 'https://codepen.io/tonkec/embed/preview/zYLbVXV?default-tab=result',
    icon: <FaDog />,
  },
  {
    title: 'Cactus study',
    description: 'Sharp edges, soft colors and no image assets.',
    url: 'https://codepen.io/tonkec/embed/preview/NWBoxKo?default-tab=result',
    icon: <RiCactusFill />,
  },
  {
    title: 'Microscope',
    description: 'A playful pure CSS object with layered details.',
    url: 'https://codepen.io/tonkec/embed/preview/jOrpPzL?default-tab=result',
    icon: <LuMicroscope />,
  },
]

const Previewer = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const activeExperiment = codeExperiments[activeIndex]

  return (
    <section className="code-lab-section">
      <div className="container code-lab">
        <div className="code-lab-header">
          <div>
            <p className="section-kicker">Code experiments</p>
            <h2>I design in code.</h2>
          </div>
          <p>
            Small interactive sketches are where I explore motion, composition
            and UI details before they become product patterns.
          </p>
        </div>

        <div className="code-lab-grid">
          <div className="experiment-list" aria-label="Code experiments">
            {codeExperiments.map((experiment, index) => (
              <button
                key={experiment.title}
                className={`experiment-card ${
                  index === activeIndex ? 'active' : ''
                }`}
                type="button"
                onClick={() => {
                  setActiveIndex(index)
                  setIsIframeLoading(true)
                }}
              >
                <span className="experiment-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <strong>{experiment.title}</strong>
                  <span>{experiment.description}</span>
                </span>
                <span className="experiment-icon">{experiment.icon}</span>
              </button>
            ))}
          </div>

          <div className="preview-panel">
            <div className="preview-toolbar">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <strong>{activeExperiment.title}</strong>
              <span>Live preview</span>
            </div>
            {isIframeLoading && (
              <div className="loader">
                <ThreeDots color="#000" height={100} width={100} />
              </div>
            )}
            <Iframe
              url={activeExperiment.url}
              width="100%"
              height="430"
              display="initial"
              position="relative"
              onLoad={() => {
                setIsIframeLoading(false)
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Previewer
