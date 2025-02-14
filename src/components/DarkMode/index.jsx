import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import './DarkMode.scss'
import useIsDarkMode from 'hooks/useIsDarkMode'

const DarkMode = () => {
  const [isDarkLocalStorage, saveIsDark] = useIsDarkMode()

  return (
    <div className="small-padding">
      <label className="flex flex-y-center space-between">
        <h4 className="small-margin-right">Toggle the mood </h4>{' '}
        <Toggle
          checked={isDarkLocalStorage}
          onChange={({ target }) => saveIsDark(target.checked)}
          icons={{ checked: '🌙', unchecked: '🔆' }}
          aria-label="Dark mode toggle"
          className="small-margin-right"
        />
      </label>
    </div>
  )
}

export default DarkMode
