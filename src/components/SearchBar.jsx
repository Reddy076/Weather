import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch, loading, searchHistory }) {
  const [cityName, setCityName] = useState('')
  const [showHistory, setShowHistory] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cityName.trim()) {
      onSearch(cityName.trim())
      setCityName('')
      setShowHistory(false)
    }
  }

  const handleHistoryClick = (historyItem) => {
    setCityName(historyItem)
    onSearch(historyItem)
    setShowHistory(false)
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Enter city name..."
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onFocus={() => setShowHistory(true)}
            disabled={loading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !cityName.trim()}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              '🔍'
            )}
          </button>
        </div>
      </form>

      {searchHistory.length > 0 && showHistory && (
        <div className="search-history">
          <p className="history-label">Recent searches:</p>
          {searchHistory.map((item, index) => (
            <button
              key={index}
              className="history-item"
              onClick={() => handleHistoryClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar

