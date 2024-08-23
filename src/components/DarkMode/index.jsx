import { useEffect, useMemo } from 'react'
import Toggle from 'react-toggle'
import { useLocalStorage } from '@uidotdev/usehooks'
import 'react-toggle/style.css'
import './DarkMode.scss'

const DarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage('dark-mode', false)
  const value = useMemo(() => !!isDark, [isDark])

  useEffect(() => {
    if (value) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [value])

  return (
   <div>
     <label className="flex flex-y-center">
      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: '🌙', unchecked: '🔆' }}
        aria-label="Dark mode toggle"
        className="small-margin-right"
      />
    </label>
   </div>
  )
}

export default DarkMode
