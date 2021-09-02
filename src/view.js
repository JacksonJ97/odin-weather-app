export const displayData = (data) => {
  const location = document.getElementById("location");
  const mainWeather = document.getElementById("main-weather");
  const weatherIcon = document.getElementById("weather-icon");
  const currentTemp = document.getElementById("current-temp");
  const feelsLikeTemp = document.getElementById("feels-like-temp");
  const maxTemp = document.getElementById("high-temp");
  const minTemp = document.getElementById("low-temp");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const pressure = document.getElementById("pressure");

  location.textContent = `${data.city}, ${data.country}`;
  mainWeather.textContent = `${data.main}`;
  currentTemp.textContent = `${data.temp}\xB0C`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;
  feelsLikeTemp.textContent = `Feels like: ${data.feelsLike}\xB0C`;
  maxTemp.innerHTML = `<i class="fas fa-angle-up"></i>`;
  maxTemp.innerHTML += ` ${data.maxTemp}\xB0C`;
  minTemp.innerHTML = `<i class="fas fa-angle-down"></i>`;
  minTemp.innerHTML += ` ${data.minTemp}\xB0C`;
  humidity.textContent = `${data.humidity}%`;
  windSpeed.textContent = `${data.windSpeed} km/h`;
  pressure.textContent = `${data.pressure} hPa`;
};
