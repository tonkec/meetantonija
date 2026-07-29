import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'react-tooltip/dist/react-tooltip.css'

// Chrome reports a benign ResizeObserver safety deferral as an error.
// CRA's webpack-dev-server overlay surfaces it even though the app is fine.
const isResizeObserverNoise = (message = '') =>
  typeof message === 'string' && message.includes('ResizeObserver loop')

const dismissDevOverlay = () => {
  const overlay = document.getElementById('webpack-dev-server-client-overlay')
  const overlayDiv = document.getElementById(
    'webpack-dev-server-client-overlay-div'
  )
  if (overlay) {
    overlay.remove()
  }
  if (overlayDiv) {
    overlayDiv.remove()
  }
}

window.addEventListener(
  'error',
  (event) => {
    if (!isResizeObserverNoise(event.message)) {
      return
    }

    event.stopImmediatePropagation()
    event.preventDefault()
    dismissDevOverlay()
  },
  true
)

// Defer ResizeObserver callbacks one frame so libraries (tooltips, motion)
// don't trip Chrome's loop limit during layout thrash.
if (typeof window.ResizeObserver !== 'undefined') {
  const NativeResizeObserver = window.ResizeObserver
  window.ResizeObserver = class ResizeObserver extends NativeResizeObserver {
    constructor(callback) {
      super((entries, observer) => {
        window.requestAnimationFrame(() => {
          callback(entries, observer)
        })
      })
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
