/**
 * Debounced window size via resize events (not ResizeObserver).
 * Avoids the common "ResizeObserver loop completed with undelivered notifications"
 * feedback loop that ResizeObserver-based hooks can trigger with layout libraries.
 */
import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    let frameId = 0

    const handleResize = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        setWindowSize((previous) => {
          const next = {
            width: window.innerWidth,
            height: window.innerHeight,
          }
          if (
            previous.width === next.width &&
            previous.height === next.height
          ) {
            return previous
          }
          return next
        })
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
