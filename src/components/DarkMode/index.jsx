import useIsDarkMode from 'hooks/useIsDarkMode'
import { BiMoon, BiSun } from 'react-icons/bi'
import './DarkMode.scss'

const DarkMode = () => {
  const [isDarkLocalStorage, saveIsDark] = useIsDarkMode()

  return (
    <button
      type="button"
      className="dark-mode-toggle"
      onClick={() => {
        saveIsDark(!isDarkLocalStorage)
      }}
      aria-label={
        isDarkLocalStorage ? 'Switch to light mode' : 'Switch to dark mode'
      }
      title={isDarkLocalStorage ? 'Light mode' : 'Dark mode'}
    >
      {isDarkLocalStorage ? (
        <BiSun fontSize={22} aria-hidden />
      ) : (
        <BiMoon fontSize={22} aria-hidden />
      )}
    </button>
  )
}

export default DarkMode
