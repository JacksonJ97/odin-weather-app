import format from "date-fns/format";

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

export const getDate = (timestamp, timezone) => {
  // Find local time of city
  const date = new Date(timestamp * 1000);
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;

  // Find local time of searched city
  const cityTime = utc + timezone * 1000;
  const cityDate = new Date(cityTime);

  // Format date
  const formattedDate = format(cityDate, "PPPP");

  return formattedDate;
};

export const getCity = () => {
  const locationElement = document.getElementById("location");
  const location = locationElement.textContent;
  const locationArray = location.split(",");
  const city = locationArray[0];

  return city;
};
