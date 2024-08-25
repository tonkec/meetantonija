import { useLocalStorage } from '@uidotdev/usehooks'

const useIsDarkMode = () => {
  const [isDarkLocalStorage, saveIsDark] = useLocalStorage('dark-mode', false)
  return [isDarkLocalStorage, saveIsDark]
}

export default useIsDarkMode
