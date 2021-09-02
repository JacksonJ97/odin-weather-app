export const displayData = (data) => {
  const location = document.getElementById("location");
  const mainWeather = document.getElementById("main-weather");
  const weatherDescription = document.getElementById("weather-description");
  const currentTemp = document.getElementById("current-temp");
  const feelsLikeTemp = document.getElementById("feels-like-temp");
  const maxTemp = document.getElementById("high-temp");
  const minTemp = document.getElementById("low-temp");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const pressure = document.getElementById("pressure");

  location.textContent = `${data.city}, ${data.country}`;
  mainWeather.textContent = `${data.main}`;
  currentTemp.textContent = `${data.temp}\xB0 C`;
  feelsLikeTemp.textContent = `Feels like: ${data.feelsLike}\xB0 C`;
  maxTemp.textContent = `H: ${data.maxTemp}\xB0 C`;
  minTemp.textContent = `L: ${data.minTemp}\xB0 C`;
  weatherDescription.textContent = `${data.description}`;
  humidity.textContent = `${data.humidity}%`;
  windSpeed.textContent = `${data.windSpeed} km/h`;
  pressure.textContent = `${data.pressure} hPa`;
};
