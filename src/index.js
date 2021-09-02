import getWeather from "./weatherData";

const city = document.getElementById("search-input");
const searchBtn = document.querySelector("button");

getWeather("Toronto");

searchBtn.addEventListener("click", () => {
  getWeather(city.value);
});
