import { convertToCelsius, convertToKPH } from "./helper";
import { displayData } from "./view";

const processData = (data) => {
  const city = data.name;
  const country = data.sys.country;
  const main = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;
  const temp = convertToCelsius(data.main.temp);
  const minTemp = convertToCelsius(data.main.temp_min);
  const maxTemp = convertToCelsius(data.main.temp_max);
  const feelsLike = convertToCelsius(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = convertToKPH(data.wind.speed);
  const pressure = data.main.pressure;

  const weatherData = {
    city: city,
    country: country,
    main: main,
    weatherIcon: weatherIcon,
    temp: temp,
    minTemp: minTemp,
    maxTemp: maxTemp,
    feelsLike: feelsLike,
    humidity: humidity,
    windSpeed: windSpeed,
    pressure: pressure,
  };

  return weatherData;
};

const getWeather = async (city) => {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eec4a468c10f276cf75929ef6076518`);
    let data = await response.json();
    // console.log(data);

    const weatherData = processData(data);
    displayData(weatherData);
    // console.log(weatherData);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default getWeather;
