# Weather Now 🌤️

A modern, elegant weather application built with React and Vite, featuring a sophisticated black and white design with a stunning weather-themed background. Perfect for outdoor enthusiasts who need quick, real-time weather updates for any city worldwide.

![Weather Now](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![License](https://img.shields.io/badge/License-MIT-green) [![Live Demo](https://img.shields.io/badge/Live%20Demo-Weather%20Now-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://weather-silk-xi.vercel.app/)

<div align="center">
  <img src="https://images.unsplash.com/photo-1433863448220-78aaa064b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Weather Background" width="600"/>
  
  <h3>🚀 <a href="https://weather-silk-xi.vercel.app/" target="_blank">Live Demo</a> - Try it now!</h3>
</div>

## Features ✨

- 🌍 **Search Any City**: Get weather information for cities worldwide
- 🎨 **Elegant Black & White Design**: Sophisticated monochrome UI with stunning weather background image
- 🌄 **Beautiful Background**: Weather-themed background with subtle dark overlay
- 📱 **Fully Responsive**: Works perfectly on desktop and mobile devices
- ⚡ **Fast & Lightweight**: Built with Vite for optimal performance
- 🔄 **Recent Searches**: Quick access to previously searched locations
- 🌡️ **Detailed Weather Info**:
  - Current temperature with large, glowing display
  - Feels like temperature
  - Humidity percentage
  - Wind speed with compass direction indicator
  - UV Index with safety classification (crucial for outdoor activities)
  - Weather conditions with animated emoji icons
- 🎭 **Smooth Animations**:
  - Floating weather icons
  - Hover effects on interactive elements
  - Smooth card transitions
  - Loading animations
  - Shimmer effects

## Technology Stack 🛠️

- **React 18.2** - Modern UI library
- **Vite 5.0** - Lightning-fast build tool
- **CSS3** - Advanced styling with animations
- **Poppins Font** - Clean, modern typography
- **Open-Meteo API** - Free weather data (no authentication required)
- **Geocoding API** - Location search

## Design Philosophy 🎨

The application features a **minimalist black and white aesthetic** with:

- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Elegant Typography**: Clean Poppins font family
- **Subtle Animations**: Smooth transitions and hover effects
- **High Contrast**: Optimal readability with black cards and white text
- **Weather Theme**: Atmospheric background image enhances the weather experience

## Project Structure 📁

```
weather-now/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # City search with history
│   │   ├── SearchBar.css      # Elegant search styling
│   │   ├── WeatherCard.jsx    # Weather display component
│   │   ├── WeatherCard.css    # Beautiful card design
│   │   ├── ErrorMessage.jsx   # Error handling
│   │   └── ErrorMessage.css    # Error styling
│   ├── App.jsx                # Main application logic
│   ├── App.css                # App-specific styles
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles & background
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## Getting Started 🚀

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone or download this repository:
```bash
git clone <repository-url>
cd weather-now
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Usage 💡

1. **Search**: Enter a city name in the elegant search bar
2. **Submit**: Click the white search button or press Enter
3. **View**: See detailed weather information in beautiful black cards
4. **History**: Click the search bar to see recent searches
5. **Explore**: Search multiple cities to compare weather conditions

### Example Cities to Try

- New York, Tokyo, London, Paris, Sydney
- Dubai, Mumbai, São Paulo, Moscow, Seoul

## API Information 📡

This application uses the **Open-Meteo API** - completely free, no authentication required:

### Geocoding API
```
https://geocoding-api.open-meteo.com/v1/search
```
- Converts city names to latitude/longitude coordinates
- Returns city name, country, and region information
- Supports worldwide city search

### Weather API
```
https://api.open-meteo.com/v1/forecast
```
- Fetches real-time weather data
- Parameters include:
  - Temperature (actual and feels-like)
  - Humidity
  - Wind speed and direction
  - UV Index (important for outdoor safety)
  - Weather codes (WMO interpretation)

### Weather Code Icons

- ☀️ Clear sky (code 0)
- ⛅ Mainly clear / Partly cloudy (codes 1-3)
- ☁️ Overcast / Foggy (codes 45, 48)
- 🌧️ Rain (codes 51-67)
- ❄️ Snow (codes 71-86)
- ⛈️ Thunderstorm (codes 95-99)

## Styling Features 🎨

### Color Scheme
- **Background**: Weather-themed image with dark overlay
- **Primary**: Black cards with white text
- **Accents**: White borders and subtle highlights
- **Effects**: Glassmorphism with backdrop blur

### Visual Effects
- Gradient text on temperature display
- Animated top line on weather cards
- Shimmer effects on focus
- Floating animations on weather icons
- Smooth hover transformations
- Glowing temperature values

## Deployment 🌐

### 🚀 Live Demo

The application is currently deployed on **Vercel**:

**🔗 [Live Application](https://weather-silk-xi.vercel.app/)**

Visit the link above to see Weather Now in action!

### Quick Deployment Options

#### Vercel (Current Deployment)
This application is deployed on Vercel. To deploy your own version:

```bash
npm install -g vercel
vercel
```

**Live URL:** [https://weather-silk-xi.vercel.app/](https://weather-silk-xi.vercel.app/)

#### CodeSandbox
1. Visit [codesandbox.io](https://codesandbox.io)
2. Create new Vite sandbox or import from GitHub
3. Upload project files
4. Share the live URL

#### StackBlitz
1. Visit [stackblitz.com](https://stackblitz.com)
2. Use Vite + React template
3. Upload or import files
4. Get instant live preview

#### Netlify
- Drag and drop the `dist` folder after building
- Or connect via Git for automatic deployments

## Performance ⚡

- **Fast Loading**: Vite HMR for instant updates
- **Small Bundle**: Minimal dependencies
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Efficient API Calls**: Single request for complete weather data
- **Responsive Images**: Optimized background image loading

## Browser Support 🌐

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting 🔧

### API Not Working
- Verify internet connection
- Check Open-Meteo API status
- Some city names may not be in database

### Build Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Background Image Not Loading
- Check internet connection for Unsplash image
- Browser may be blocking external images

### Styling Issues
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

## Features in Detail 🎯

### Search Experience
- Real-time city search with geocoding
- Search history (stores last 5 searches)
- Smart error messages for invalid cities
- Loading spinner during API calls
- Elegant white search button

### Weather Display
- Large temperature display with glow effect
- Animated weather icons
- Four metric cards: Feels Like, Humidity, Wind, UV Index
- Timestamp showing last update
- Smooth card entrance animations

### Responsive Layout
- Mobile: Single column stack
- Tablet: 2-column grid
- Desktop: 4-column metric grid
- Touch-friendly interface elements

## Development Notes 📝

### State Management
- React hooks (useState) for local state
- No external state management library needed
- Search history stored in component state

### API Integration
- Two-step API calls (geocoding → weather)
- Comprehensive error handling
- Loading states for better UX
- Automatic timezone detection

## Contributing 🤝

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📝

This project is open source and available under the **MIT License**.

## Credits 🙏

- **Weather Data**: [Open-Meteo](https://open-meteo.com/) - Free, open-source weather API
- **Framework**: [React](https://react.dev/) - UI library
- **Build Tool**: [Vite](https://vitejs.dev/) - Next-generation frontend tooling
- **Typography**: [Poppins](https://fonts.google.com/) - Google Fonts
- **Background**: [Unsplash](https://unsplash.com/) - Beautiful weather photography

## Screenshots 📸

The application features:
- Elegant black cards with white text
- Stunning weather-themed background
- Smooth animations and transitions
- Modern glassmorphism effects
- Professional monochrome design

## Roadmap 🗺️

Potential future enhancements:
- [ ] 7-day weather forecast
- [ ] Hourly weather updates
- [ ] Weather alerts
- [ ] Multiple location comparison
- [ ] Weather history tracking
- [ ] Export weather data
- [ ] Dark/Light theme toggle
- [ ] Weather charts and graphs

---

<div align="center">

**Made with ❤️ for outdoor enthusiasts everywhere**

*Get the weather, plan your adventure*

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new)

</div>
