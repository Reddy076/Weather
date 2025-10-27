import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

/**
 * Weather Now - Weather Application for Outdoor Enthusiasts
 * 
 * Uses Open-Meteo API (free, no authentication required):
 * - Geocoding API: https://geocoding-api.open-meteo.com/v1/search
 * - Weather API: https://api.open-meteo.com/v1/forecast
 * 
 * Built with React + Vite as specified in the requirements
 */
function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchHistory, setSearchHistory] = useState([])

  const handleSearch = async (cityName) => {
    setLoading(true)
    setError(null)
    
    try {
      // Step 1: Get city coordinates using Open-Meteo Geocoding API
      const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      
      const geocodeResponse = await fetch(geocodeUrl)
      if (!geocodeResponse.ok) {
        throw new Error('Failed to fetch location data. Please check your internet connection.')
      }
      
      const geocodeData = await geocodeResponse.json()
      
      if (!geocodeData.results || geocodeData.results.length === 0) {
        throw new Error(`City "${cityName}" not found. Please try a different city name.`)
      }
      
      const { latitude, longitude, name, country, admin1 } = geocodeData.results[0]
      
      // Step 2: Get current weather data using Open-Meteo Weather API
      // Including parameters relevant for outdoor enthusiasts
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&timezone=auto`
      
      const weatherResponse = await fetch(weatherUrl)
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data. The weather service may be temporarily unavailable.')
      }
      
      const weatherResult = await weatherResponse.json()
      
      const weather = {
        city: name,
        country: country,
        region: admin1 || '',
        temperature: Math.round(weatherResult.current.temperature_2m),
        apparentTemp: Math.round(weatherResult.current.apparent_temperature),
        humidity: weatherResult.current.relative_humidity_2m,
        windSpeed: Math.round(weatherResult.current.wind_speed_10m),
        windDirection: weatherResult.current.wind_direction_10m,
        uvIndex: weatherResult.current.uv_index,
        weatherCode: weatherResult.current.weather_code,
        timestamp: new Date()
      }
      
      setWeatherData(weather)
      
      // Add to search history
      const locationKey = admin1 ? `${name}, ${admin1}, ${country}` : `${name}, ${country}`
      if (!searchHistory.includes(locationKey)) {
        setSearchHistory(prev => [locationKey, ...prev].slice(0, 5))
      }
      
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  const getWeatherIcon = (code) => {
    // WMO Weather interpretation codes mapping
    const codes = {
      'clear': [0],
      'partly-cloudy': [1, 2, 3],
      'cloudy': [45, 48],
      'rain': [51, 53, 55, 56, 57, 61, 63, 65, 66, 67],
      'snow': [71, 73, 75, 77, 85, 86],
      'thunder': [95, 96, 99]
    }
    
    if (codes.clear.includes(code)) return '☀️'
    if (codes['partly-cloudy'].includes(code)) return '⛅'
    if (codes.cloudy.includes(code)) return '☁️'
    if (codes.rain.includes(code)) return '🌧️'
    if (codes.snow.includes(code)) return '❄️'
    if (codes.thunder.includes(code)) return '⛈️'
    return '☀️' // default
  }

  const getWeatherDescription = (code) => {
    const descriptions = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      56: 'Light freezing drizzle',
      57: 'Dense freezing drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      66: 'Light freezing rain',
      67: 'Heavy freezing rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    }
    return descriptions[code] || 'Unknown'
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Weather Now</h1>
          <p className="app-subtitle">Quick weather updates for outdoor enthusiasts</p>
        </header>

        <SearchBar 
          onSearch={handleSearch} 
          loading={loading}
          searchHistory={searchHistory}
        />

        {error && <ErrorMessage message={error} />}

        {weatherData && (
          <WeatherCard 
            weather={weatherData}
            icon={getWeatherIcon(weatherData.weatherCode)}
            description={getWeatherDescription(weatherData.weatherCode)}
            windDirection={weatherData.windDirection}
            uvIndex={weatherData.uvIndex}
          />
        )}

        {!weatherData && !error && !loading && (
          <div className="welcome-message">
            <p>🌤️ Enter a city name above to get started!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

