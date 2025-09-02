import axios from "axios";

export const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    // 1. Get coordinates for city
    const geoRes = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    if (!geoRes.data.results || geoRes.data.results.length === 0) {
      return res.status(404).json({ error: "City not found" });
    }

    const { latitude, longitude, name, country } = geoRes.data.results[0];

    // 2. Get weather using coordinates
    const weatherRes = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    );

    res.json({
      location: `${name}, ${country}`,
      current: weatherRes.data.current_weather,
      forecast: weatherRes.data.daily
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
};
