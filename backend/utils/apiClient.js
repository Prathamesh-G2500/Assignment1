import axios from "axios";

// Create a reusable axios instance
const apiClient = axios.create({
  timeout: 5000, // 5 seconds timeout
});

// Get coordinates from city name using Open-Meteo Geocoding API
export const getCoordinates = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
  const response = await apiClient.get(url);

  if (!response.data.results || response.data.results.length === 0) {
    throw new Error("City not found");
  }

  return response.data.results[0]; // { latitude, longitude, name, country }
};

// Get weather forecast from Open-Meteo API
export const getWeatherData = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

  const response = await apiClient.get(url);
  return response.data; // includes { current_weather, daily }
};
