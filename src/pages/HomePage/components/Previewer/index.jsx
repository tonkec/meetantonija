import { useState, useRef } from 'react'
import Iframe from 'react-iframe'
import { LuMicroscope } from 'react-icons/lu'
import { FaDog } from 'react-icons/fa'
import { RiCactusFill } from 'react-icons/ri'
import { Triangle } from 'react-loader-spinner'
import './Previewer.scss'

const Previewer = () => {
  const [iframeUrl, setIframeUrl] = useState(
    'https://codepen.io/tonkec/embed/preview/zYLbVXV?default-tab=result'
  )
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const buttonWrapper = useRef(null)
  return (
    <section className="container">
      <h3>🔥 I design in code.</h3>

      <div className="flex codepen">
        <div ref={buttonWrapper}>
          <button
            className="active"
            onClick={() => {
              buttonWrapper.current.childNodes.forEach((button) => {
                button.classList.remove('active')
              })
              buttonWrapper.current.childNodes[0].classList.add('active')
              setIframeUrl(
                'https://codepen.io/tonkec/embed/preview/zYLbVXV?default-tab=result'
              )
              setIsIframeLoading(true)
            }}
          >
            <span>Dog </span>
            <FaDog className="icon" />
            <span>I bark in pure CSS</span>
          </button>
          <button
            onClick={() => {
              buttonWrapper.current.childNodes.forEach((button) => {
                button.classList.remove('active')
              })
              buttonWrapper.current.childNodes[1].classList.add('active')
              setIframeUrl(
                'https://codepen.io/tonkec/embed/preview/NWBoxKo?default-tab=result'
              )
              setIsIframeLoading(true)
            }}
          >
            <span>Cactus </span>
            <RiCactusFill className="icon" />

            <span>Watch out for my pure CSS spikes</span>
          </button>
          <button
            onClick={() => {
              buttonWrapper.current.childNodes.forEach((button) => {
                button.classList.remove('active')
              })
              buttonWrapper.current.childNodes[2].classList.add('active')
              setIframeUrl(
                'https://codepen.io/tonkec/embed/preview/jOrpPzL?default-tab=result'
              )
              setIsIframeLoading(true)
            }}
          >
            <span>Microscope</span>
            <LuMicroscope className="icon" />
            <span>I enlarge the world in pure CSS</span>
          </button>
        </div>

        <div className="preview">
          {isIframeLoading && (
            <div className="loader">
              <Triangle color="#f8f9fa" height={100} width={100} />
            </div>
          )}
          <Iframe
            url={iframeUrl}
            width="100%"
            height="500"
            display="initial"
            position="relative"
            onLoad={() => {
              setIsIframeLoading(false)
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Previewer
