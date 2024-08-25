import { useEffect, useMemo } from 'react'
import Toggle from 'react-toggle'
import { useLocalStorage } from '@uidotdev/usehooks'
import 'react-toggle/style.css'
import './DarkMode.scss'

const DarkMode = () => {
  const [isDarkLocalStorage, saveIsDark] = useLocalStorage('dark-mode', false)
  const value = useMemo(() => !!isDarkLocalStorage, [isDarkLocalStorage])

  useEffect(() => {
    if (value) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [value])

  return (
    <div className="small-padding">
      <label className="flex flex-y-center space-between">
        <h2 className="small-margin-right">Toggle the mood </h2>{' '}
        <Toggle
          checked={isDarkLocalStorage}
          onChange={({ target }) => saveIsDark(target.checked)}
          icons={{ checked: '🌙', unchecked: '🔆' }}
          aria-label="Dark mode toggle"
          className="small-margin-right"
        />
      </label>

      <div className="divider"></div>
    </div>
  )
}

export default DarkMode
