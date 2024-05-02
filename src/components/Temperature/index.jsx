import { useEffect, useState } from 'react'
import useTemperature from '../../hooks/useTemperature'
import { Triangle } from 'react-loader-spinner'

const Temperature = () => {
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
      <Triangle
        wrapperStyle={{ display: 'inline' }}
        color="#000"
        height={50}
        width={50}
      />
    )
  return <span>{getTemperatureMood(temperature)}</span>
}

export default Temperature
