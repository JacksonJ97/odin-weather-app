import getWeather from "./weatherData";

const city = document.getElementById("search-input");
const searchForm = document.querySelector("form");

getWeather("Toronto");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(city.value);
  city.blur();
  searchForm.reset();
});
