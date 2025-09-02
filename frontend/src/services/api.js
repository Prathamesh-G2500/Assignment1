export const getWeather = async (city) => {
  try {
    const res = await fetch(`http://localhost:5000/api/weather?city=${city}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};
