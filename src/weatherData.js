import { convertToKPH, convertUnixTime, getDate } from "./helper";
import { displayData } from "./view";

const processData = (data, units) => {
  let windSpeed;
  const city = data.name;
  const country = data.sys.country;
  const main = data.weather[0].main;
  const date = getDate(data.dt, data.timezone);
  const weatherIcon = data.weather[0].icon;
  const temp = Math.round(data.main.temp);
  const minTemp = Math.round(data.main.temp_min);
  const maxTemp = Math.round(data.main.temp_max);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);
  const sunrise = convertUnixTime(data.sys.sunrise, data.timezone);
  const sunset = convertUnixTime(data.sys.sunset, data.timezone);
  const pressure = data.main.pressure;

  if (units === "metric") {
    windSpeed = convertToKPH(data.wind.speed);
  } else if (units === "imperial") {
    windSpeed = data.wind.speed.toFixed(1);
  }

  const weatherData = {
    city: city,
    country: country,
    main: main,
    date: date,
    weatherIcon: weatherIcon,
    temp: temp,
    minTemp: minTemp,
    maxTemp: maxTemp,
    feelsLike: feelsLike,
    humidity: humidity,
    windSpeed: windSpeed,
    sunrise: sunrise,
    sunset: sunset,
    pressure: pressure,
  };

  return weatherData;
};

const getWeather = async (city, units) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=3eec4a468c10f276cf75929ef6076518`
    );
    if (!response.ok) throw new Error(`City not found`);
    let data = await response.json();

    const weatherData = processData(data, units);
    displayData(weatherData, units);
  } catch (error) {
    alert(error);
  }
};

export default getWeather;
