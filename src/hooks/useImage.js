import { useState, useEffect } from 'react'

/**
 * Returns true while the image is still loading.
 * Sets onload/onerror before src to avoid cached-image races.
 */
const useImage = (image) => {
  const [loading, setLoading] = useState(Boolean(image))

  useEffect(() => {
    if (!image) {
      setLoading(false)
      return
    }

    let cancelled = false
    const img = new Image()

    const settle = () => {
      if (!cancelled) {
        setLoading(false)
      }
    }

    setLoading(true)
    img.onload = settle
    img.onerror = settle
    img.src = image

    if (img.complete) {
      settle()
    }

    return () => {
      cancelled = true
      img.onload = null
      img.onerror = null
    }
  }, [image])

  return loading
}

export default useImage
