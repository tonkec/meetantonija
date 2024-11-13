import { useState, useRef, forwardRef } from 'react'
import Iframe from 'react-iframe'
import { LuMicroscope } from 'react-icons/lu'
import { FaDog } from 'react-icons/fa'
import { RiCactusFill } from 'react-icons/ri'
import { Triangle } from 'react-loader-spinner'
import './Previewer.scss'

const Previewer = forwardRef(function Previewer(_, ref) {
  const [iframeUrl, setIframeUrl] = useState(
    'https://codepen.io/tonkec/embed/preview/zYLbVXV?default-tab=result'
  )
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const buttonWrapper = useRef(null)
  return (
    <section ref={ref}>
      <div className="container">
        <h2>🔥 I design in code.</h2>

        <div className="flex codepen">
          <div ref={buttonWrapper}>
            <button
              className="active primary text-left small-padding xs-margin-bottom"
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
              <FaDog className="icon" />
              <p>I bark in pure CSS</p>
            </button>
            <button
              className="primary text-left small-padding xs-margin-bottom"
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
              <RiCactusFill className="icon" />

              <p className="max-w-50-xs">Watch out for my pure CSS spikes</p>
            </button>
            <button
              className="primary text-left small-padding xs-margin-bottom"
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
              <LuMicroscope className="icon" />
              <p className="max-w-50-xs">I enlarge the world in pure CSS</p>
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
      </div>
    </section>
  )
})

export default Previewer
