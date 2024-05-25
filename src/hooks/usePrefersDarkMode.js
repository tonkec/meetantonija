import { useEffect, useState } from 'react'

const usePrefersDarkMode = () => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (prefersDark) {
      setIsDark(true)
    }
  }, [])

  return isDark
}

export default usePrefersDarkMode
