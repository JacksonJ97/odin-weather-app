export const convertToCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
};

export const convertToKPH = (speed) => {
  const KPH = speed * 3.6;
  return KPH.toFixed(1);
};
