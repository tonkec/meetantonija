import useIsDarkMode from 'hooks/useIsDarkMode'

const DarkMode = () => {
  const [isDarkLocalStorage, saveIsDark] = useIsDarkMode()

  return (
    <span
      onClick={() => {
        saveIsDark(!isDarkLocalStorage)
      }}
      className="medium-margin-left pointer large-font"
    >
      {isDarkLocalStorage ? '🌞' : '🌙'}
    </span>
  )
}

export default DarkMode
