import "../styles/weather.css"
function WeatherCard({ current, location }) {
  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <p>🌡️ Temp: {current.temperature}°C</p>
      <p>💨 Wind: {current.windspeed} km/h</p>
    </div>
  );
}

export default WeatherCard;
