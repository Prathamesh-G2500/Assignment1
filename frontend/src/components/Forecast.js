import "../styles/weather.css"
function Forecast({ forecast }) {
  return (
    <div className="forecast">
      <h3>3-Day Forecast</h3>
      <ul>
        {forecast.time.slice(0, 3).map((day, i) => (
          <li key={day}>
            {day} → Min {forecast.temperature_2m_min[i]}°C | Max {forecast.temperature_2m_max[i]}°C
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forecast;
