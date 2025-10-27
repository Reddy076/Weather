import './WeatherCard.css'

function WeatherCard({ weather, icon, description, windDirection, uvIndex }) {
  // Helper function to get wind direction name
  const getWindDirection = (degrees) => {
    if (degrees === null || degrees === undefined) return 'N/A'
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    return directions[Math.round(degrees / 22.5) % 16]
  }

  // Helper function to get UV index category
  const getUVCategory = (uv) => {
    if (uv === null || uv === undefined) return { text: 'N/A', level: 'none' }
    if (uv <= 2) return { text: 'Low', level: 'low' }
    if (uv <= 5) return { text: 'Moderate', level: 'moderate' }
    if (uv <= 7) return { text: 'High', level: 'high' }
    if (uv <= 10) return { text: 'Very High', level: 'very-high' }
    return { text: 'Extreme', level: 'extreme' }
  }

  const uvCategory = getUVCategory(uvIndex)
  const windDir = getWindDirection(windDirection)

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="weather-location">
          <h2 className="weather-city">{weather.city}</h2>
          <p className="weather-country">{weather.region ? `${weather.region}, ${weather.country}` : weather.country}</p>
        </div>
        <div className="weather-icon">{icon}</div>
      </div>

      <div className="weather-main">
        <div className="weather-temp">
          <span className="temp-value">{weather.temperature}</span>
          <span className="temp-unit">°C</span>
        </div>
        <p className="weather-description">{description}</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <div className="detail-content">
            <p className="detail-label">Feels like</p>
            <p className="detail-value">{weather.apparentTemp}°C</p>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <div className="detail-content">
            <p className="detail-label">Humidity</p>
            <p className="detail-value">{weather.humidity}%</p>
          </div>
        </div>

        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <div className="detail-content">
            <p className="detail-label">Wind</p>
            <p className="detail-value">{weather.windSpeed} km/h</p>
            <p className="detail-value-small">{windDir}</p>
          </div>
        </div>

        <div className="detail-item uv-item">
          <span className="detail-icon">☀️</span>
          <div className="detail-content">
            <p className="detail-label">UV Index</p>
            <p className={`detail-value uv-${uvCategory.level}`}>
              {uvIndex !== null && uvIndex !== undefined ? uvIndex.toFixed(1) : 'N/A'}
            </p>
            <p className="detail-value-small">{uvCategory.text}</p>
          </div>
        </div>
      </div>

      <div className="weather-footer">
        <p className="weather-time">
          Last updated: {weather.timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}

export default WeatherCard

