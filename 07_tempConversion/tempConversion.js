const convertToCelsius = function(Ftemp) {
  let tempCelsius = (Ftemp - 32) * 5 / 9;
  let roundedTempCelsius = Math.round(tempCelsius *10 ) / 10;
  return roundedTempCelsius;
};

const convertToFahrenheit = function(Ctemp) {
  let tempFahrenheit = (Ctemp * 9 / 5) + 32;
  let roundedTempFahrenheit = Math.round(tempFahrenheit *10 ) / 10;
  return roundedTempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
