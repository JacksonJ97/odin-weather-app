export const convertToCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
};

export const convertToKPH = (speed) => {
  const KPH = speed * 3.6;
  return KPH.toFixed(1);
};

export const convertUnixTime = (timestamp, timezone) => {
  // Find local time of city
  const date = new Date(timestamp * 1000);
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;

  // Find local time of searched city
  const cityTime = utc + timezone * 1000;
  const time = new Date(cityTime);

  // Format time
  const hours = "0" + time.getHours();
  const minutes = "0" + time.getMinutes();
  const formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);

  return formattedTime;
};
