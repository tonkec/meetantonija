import './DarkMode.scss'
import useIsDarkMode from 'hooks/useIsDarkMode'

const DarkMode = () => {
  const [isDarkLocalStorage, saveIsDark] = useIsDarkMode()

  return (
    <span
      onClick={() => {
        saveIsDark(!isDarkLocalStorage)
      }}
      className="small-margin-left pointer"
    >
      {isDarkLocalStorage ? '🌞' : '🌙'}
    </span>
  )
}

export default DarkMode
