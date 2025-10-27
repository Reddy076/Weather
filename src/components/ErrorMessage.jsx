import './ErrorMessage.css'

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <p className="error-text">{message}</p>
    </div>
  )
}

export default ErrorMessage

