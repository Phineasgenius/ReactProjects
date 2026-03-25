import React from 'react'
import './App.css';
import axios from 'axios';

export default function Weather() {
    const [weatherData, setWeatherData] = React.useState(null)
    const [city, setCity] = React.useState('')
    const handleCityCahnge = (event) => {
        setCity(event.target.value)
    }
    const fetchWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5aee01627b2feacfb38c9a057faa06c1'}`)
            console.log(response.data)
            setWeatherData(response.data)
        }
        catch(error){
            console.error(error)
            alert('Error fetching weather data. Please try again.')
        }
    }
  return (
    <div className='wether-container'>
      <input type='text' placeholder='Enter city name' value={city} onChange={handleCityCahnge}></input>
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && <>
      <div className='wether-info'>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}K</p>
        <p>{weatherData.data}</p>
      </div>
      </>}
    </div>
  )
}
