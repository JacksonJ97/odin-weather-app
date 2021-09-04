export const displayData = (data, units) => {
  const location = document.getElementById("location");
  const mainWeather = document.getElementById("main-weather");
  const date = document.getElementById("date");
  const weatherIcon = document.getElementById("weather-icon");
  const currentTemp = document.getElementById("current-temp");
  const feelsLikeTemp = document.getElementById("feels-like-temp");
  const maxTemp = document.getElementById("high-temp");
  const minTemp = document.getElementById("low-temp");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const pressure = document.getElementById("pressure");

  if (units === "metric") {
    currentTemp.textContent = `${data.temp}\xB0C`;
    feelsLikeTemp.textContent = `Feels like: ${data.feelsLike}\xB0C`;
    maxTemp.innerHTML = `<i class="fas fa-angle-up"></i>`;
    maxTemp.innerHTML += ` ${data.maxTemp}\xB0C`;
    minTemp.innerHTML = `<i class="fas fa-angle-down"></i>`;
    minTemp.innerHTML += ` ${data.minTemp}\xB0C`;
    windSpeed.textContent = `${data.windSpeed} km/h`;
  } else if (units === "imperial") {
    currentTemp.textContent = `${data.temp}\xB0F`;
    feelsLikeTemp.textContent = `Feels like: ${data.feelsLike}\xB0F`;
    maxTemp.innerHTML = `<i class="fas fa-angle-up"></i>`;
    maxTemp.innerHTML += ` ${data.maxTemp}\xB0F`;
    minTemp.innerHTML = `<i class="fas fa-angle-down"></i>`;
    minTemp.innerHTML += ` ${data.minTemp}\xB0F`;
    windSpeed.textContent = `${data.windSpeed} mph`;
  }

  location.textContent = `${data.city}, ${data.country}`;
  mainWeather.textContent = `${data.main}`;
  date.textContent = `${data.date}`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;
  humidity.textContent = `${data.humidity}%`;
  sunrise.textContent = `${data.sunrise}`;
  sunset.textContent = `${data.sunset}`;
  pressure.textContent = `${data.pressure} hPa`;
};
