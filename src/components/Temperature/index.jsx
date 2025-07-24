import { useEffect, useState } from 'react'
import useTemperature from 'hooks/useTemperature'
import { ThreeDots } from 'react-loader-spinner'
import { useLocalStorage } from '@uidotdev/usehooks'

const Temperature = () => {
  const [isDarkLocalStorage] = useLocalStorage('dark-mode', false)

  const [temperature, setTemperature] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const temperatureData = useTemperature()

  const getTemperatureMood = (temperature) => {
    if (temperature < 10) return 'cold'
    if (temperature >= 10 && temperature < 20) return 'moderate'
    if (temperature >= 20 && temperature < 30) return 'warm'
    if (temperature >= 30) return 'hot'
  }

  useEffect(() => {
    if (temperatureData) {
      setTemperature(temperatureData.current.temperature_2m)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [temperatureData])

  if (isLoading)
    return (
      <ThreeDots
        wrapperStyle={{ display: 'inline' }}
        color={isDarkLocalStorage ? 'var(--color-white)' : 'var(--color-black)'}
        height={20}
        width={20}
      />
    )
  return <span className="normal-font">{getTemperatureMood(temperature)}</span>
}

export default Temperature
