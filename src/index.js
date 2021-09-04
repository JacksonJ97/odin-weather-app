import getWeather from "./weatherData";
import { getCity } from "./helper";

const city = document.getElementById("search-input");
const searchForm = document.querySelector("form");
const toggleBtn = document.getElementById("toggle-btn");
let imperial = false;

// Initial load
getWeather("Toronto", "metric");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(city.value, "metric");
  city.blur();
  searchForm.reset();
  imperial = false;
});

toggleBtn.addEventListener("click", async () => {
  const city = getCity();
  let units;

  if (!imperial) {
    imperial = true;
    console.log(1);
    units = "imperial";
  } else if (imperial) {
    imperial = false;
    console.log(2);
    units = "metric";
  }

  await getWeather(city, units);
});
