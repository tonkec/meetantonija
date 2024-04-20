import { useEffect, useState } from 'react'
import useTemperature from '../../hooks/useTemperature'



const Temperature = () => {
  const [temperature, setTemperature] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const temperatureData = useTemperature()
  const getTemperatureMood = (temperature) => {
    if (Number(temperature) < 20) {
      return 'cold'
    }

    if (Number(temperature) > 20) {
      return 'warm'
    }

    if (Number(temperature) > 30) {
      return 'hot'
    }

    return 'unknown'
  }

  useEffect(() => {
    if (temperatureData) {
      setTemperature(temperatureData.current.temperature_2m)
      setIsLoading(false)
    }
  }, [
    temperatureData,
  ])

  if (isLoading) return <span>Loading weather data...</span>
  return <span>{getTemperatureMood(temperature)}</span>
}

export default Temperature
