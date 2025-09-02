import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import { getWeather } from "../services/api";

function Home() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <div className="app">
      <h1>🌦️ Weather Now</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <>
          <WeatherCard current={weather.current} location={weather.location} />
          <Forecast forecast={weather.forecast} />
        </>
      )}
    </div>
  );
}

export default Home;
