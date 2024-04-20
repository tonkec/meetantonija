import { useState, useEffect, useCallback } from 'react'

const useImage = (image) => {
  const [loading, setLoading] = useState(true)

  const getImage = useCallback(() => {
    let img = new Image()
    img.src = image
    img.onload = function () {
      setLoading(false)
    }
  }, [image])

  useEffect(() => {
    getImage()
  }, [loading, getImage])

  return loading
}

export default useImage
