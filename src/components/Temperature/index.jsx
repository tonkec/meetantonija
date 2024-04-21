import { useEffect, useState } from 'react'
import useTemperature from '../../hooks/useTemperature'
import { Triangle } from 'react-loader-spinner'

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
  }, [temperatureData])

  if (isLoading) return <Triangle color="#000" height={50} width={50} />
  return <span>{getTemperatureMood(temperature)}</span>
}

export default Temperature
