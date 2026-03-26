import React, { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '5aee01627b2feacfb38c9a057faa06c1'; 

  const fetchWeather = async (selectedCity) => {
    if (!API_KEY) {
      setError('API key is missing. Add your API key in Weather.jsx API_KEY constant.');
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(selectedCity)}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error('City not found or API error.');
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  return (
    <div className="weather-card card p-3 my-3">
      <h3 className="mb-3">Weather</h3>
      <form className="d-flex gap-2 mb-3" onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          className="form-control"
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      {loading && <p>Loading weather...</p>}
      {error && <p className="text-danger">{error}</p>}

      {weatherData && (
        <div>
          <h4>{weatherData.name}, {weatherData.sys.country}</h4>
          <p>{Math.round(weatherData.main.temp)}°C / {Math.round((weatherData.main.temp * 9) / 5 + 32)}°F</p>
          <p>{weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {!API_KEY && <p className="text-warning small">Add OpenWeatherMap API key in src/Component/Weather.jsx API_KEY constant.</p>}
    </div>
  );
}

export default Weather;
