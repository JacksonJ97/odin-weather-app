import { convertToCelsius, convertToKPH } from "./helper";

const processData = (data) => {
  const temp = convertToCelsius(data.main.temp);
  const minTemp = convertToCelsius(data.main.temp_min);
  const maxTemp = convertToCelsius(data.main.temp_max);
  const feelsLike = convertToCelsius(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = convertToKPH(data.wind.speed);

  const weatherData = {
    temp: temp,
    minTemp: minTemp,
    maxTemp: maxTemp,
    feelsLike: feelsLike,
    humidity: humidity,
    windSpeed: windSpeed,
  };

  console.log(temp);
  console.log(minTemp);
  console.log(maxTemp);
  console.log(feelsLike);
  console.log(humidity);
  console.log(windSpeed);

  return weatherData;
};

const getWeather = async (city) => {
  try {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eec4a468c10f276cf75929ef6076518`);
    let data = await response.json();
    console.log(data);

    const weatherData = processData(data);

    console.log(weatherData);

    return weatherData;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default getWeather;
