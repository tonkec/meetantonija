import { useEffect, useState } from 'react'
const LATITUDE = 45.79
const LONGITUDE = 15.78
const baseURL = 'https://api.open-meteo.com/v1/forecast'
export const url = `${baseURL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`

const useTemperature = () => {
  const [temperatureData, setTemperatureData] = useState(0)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTemperatureData(data)
      })
  }, [])

  return temperatureData
}

export default useTemperature
