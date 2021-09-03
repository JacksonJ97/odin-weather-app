/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToCelsius": () => (/* binding */ convertToCelsius),
/* harmony export */   "convertToKPH": () => (/* binding */ convertToKPH),
/* harmony export */   "convertUnixTime": () => (/* binding */ convertUnixTime)
/* harmony export */ });
const convertToCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
};

const convertToKPH = (speed) => {
  const KPH = speed * 3.6;
  return KPH.toFixed(1);
};

const convertUnixTime = (timestamp, timezone) => {
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


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayData": () => (/* binding */ displayData)
/* harmony export */ });
const displayData = (data) => {
  const location = document.getElementById("location");
  const mainWeather = document.getElementById("main-weather");
  const weatherIcon = document.getElementById("weather-icon");
  const currentTemp = document.getElementById("current-temp");
  const feelsLikeTemp = document.getElementById("feels-like-temp");
  const maxTemp = document.getElementById("high-temp");
  const minTemp = document.getElementById("low-temp");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const pressure = document.getElementById("pressure");

  location.textContent = `${data.city}, ${data.country}`;
  mainWeather.textContent = `${data.main}`;
  currentTemp.textContent = `${data.temp}\xB0C`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;
  feelsLikeTemp.textContent = `Feels like: ${data.feelsLike}\xB0C`;
  maxTemp.innerHTML = `<i class="fas fa-angle-up"></i>`;
  maxTemp.innerHTML += ` ${data.maxTemp}\xB0C`;
  minTemp.innerHTML = `<i class="fas fa-angle-down"></i>`;
  minTemp.innerHTML += ` ${data.minTemp}\xB0C`;
  humidity.textContent = `${data.humidity}%`;
  windSpeed.textContent = `${data.windSpeed} km/h`;
  sunrise.textContent = `${data.sunrise}`;
  sunset.textContent = `${data.sunset}`;
  pressure.textContent = `${data.pressure} hPa`;
};


/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");



const processData = (data) => {
  const city = data.name;
  const country = data.sys.country;
  const main = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;
  const temp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(data.main.temp);
  const minTemp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(data.main.temp_min);
  const maxTemp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(data.main.temp_max);
  const feelsLike = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertToKPH)(data.wind.speed);
  const sunrise = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertUnixTime)(data.sys.sunrise, data.timezone);
  const sunset = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.convertUnixTime)(data.sys.sunset, data.timezone);
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
    sunrise: sunrise,
    sunset: sunset,
    pressure: pressure,
  };

  return weatherData;
};

const getWeather = async (city) => {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eec4a468c10f276cf75929ef6076518`);
    let data = await response.json();
    console.log(data);

    const weatherData = processData(data);
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayData)(weatherData);
  } catch (error) {
    console.log("Error: ", error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");


const city = document.getElementById("search-input");
const searchForm = document.querySelector("form");

(0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.default)("Toronto");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.default)(city.value);
  city.blur();
  searchForm.reset();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUsSUFBSSxhQUFhO0FBQ3ZELCtCQUErQixVQUFVO0FBQ3pDLCtCQUErQixVQUFVO0FBQ3pDLHlEQUF5RCxpQkFBaUI7QUFDMUUsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLDRCQUE0QixjQUFjO0FBQzFDLDZCQUE2QixnQkFBZ0I7QUFDN0MsMkJBQTJCLGFBQWE7QUFDeEMsMEJBQTBCLFlBQVk7QUFDdEMsNEJBQTRCLGVBQWU7QUFDM0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIyRTtBQUN0QztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUFnQjtBQUMvQixrQkFBa0IseURBQWdCO0FBQ2xDLGtCQUFrQix5REFBZ0I7QUFDbEMsb0JBQW9CLHlEQUFnQjtBQUNwQztBQUNBLG9CQUFvQixxREFBWTtBQUNoQyxrQkFBa0Isd0RBQWU7QUFDakMsaUJBQWlCLHdEQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsS0FBSztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVc7QUFDZixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNsRDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSAoa2VsdmluKSA9PiB7XHJcbiAgY29uc3QgY2Vsc2l1cyA9IE1hdGgucm91bmQoa2VsdmluIC0gMjczLjE1KTtcclxuICByZXR1cm4gY2Vsc2l1cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0VG9LUEggPSAoc3BlZWQpID0+IHtcclxuICBjb25zdCBLUEggPSBzcGVlZCAqIDMuNjtcclxuICByZXR1cm4gS1BILnRvRml4ZWQoMSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVydFVuaXhUaW1lID0gKHRpbWVzdGFtcCwgdGltZXpvbmUpID0+IHtcclxuICAvLyBGaW5kIGxvY2FsIHRpbWUgb2YgY2l0eVxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTtcclxuICBjb25zdCBsb2NhbFRpbWUgPSBkYXRlLmdldFRpbWUoKTtcclxuICBjb25zdCBsb2NhbE9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xyXG4gIGNvbnN0IHV0YyA9IGxvY2FsVGltZSArIGxvY2FsT2Zmc2V0O1xyXG5cclxuICAvLyBGaW5kIGxvY2FsIHRpbWUgb2Ygc2VhcmNoZWQgY2l0eVxyXG4gIGNvbnN0IGNpdHlUaW1lID0gdXRjICsgdGltZXpvbmUgKiAxMDAwO1xyXG4gIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShjaXR5VGltZSk7XHJcblxyXG4gIC8vIEZvcm1hdCB0aW1lXHJcbiAgY29uc3QgaG91cnMgPSBcIjBcIiArIHRpbWUuZ2V0SG91cnMoKTtcclxuICBjb25zdCBtaW51dGVzID0gXCIwXCIgKyB0aW1lLmdldE1pbnV0ZXMoKTtcclxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gaG91cnMuc3Vic3RyKC0yKSArIFwiOlwiICsgbWludXRlcy5zdWJzdHIoLTIpO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVkVGltZTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXBcIik7XHJcbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZS10ZW1wXCIpO1xyXG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtdGVtcFwiKTtcclxuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctdGVtcFwiKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kLXNwZWVkXCIpO1xyXG4gIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1bnJpc2VcIik7XHJcbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5zZXRcIik7XHJcbiAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzdXJlXCIpO1xyXG5cclxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eX0sICR7ZGF0YS5jb3VudHJ5fWA7XHJcbiAgbWFpbldlYXRoZXIudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW59YDtcclxuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcH1cXHhCMENgO1xyXG4gIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJJY29ufUAyeC5wbmdgO1xyXG4gIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLmZlZWxzTGlrZX1cXHhCMENgO1xyXG4gIG1heFRlbXAuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXVwXCI+PC9pPmA7XHJcbiAgbWF4VGVtcC5pbm5lckhUTUwgKz0gYCAke2RhdGEubWF4VGVtcH1cXHhCMENgO1xyXG4gIG1pblRlbXAuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+YDtcclxuICBtaW5UZW1wLmlubmVySFRNTCArPSBgICR7ZGF0YS5taW5UZW1wfVxceEIwQ2A7XHJcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZFNwZWVkfSBrbS9oYDtcclxuICBzdW5yaXNlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5zdW5yaXNlfWA7XHJcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gYCR7ZGF0YS5zdW5zZXR9YDtcclxuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlc3N1cmV9IGhQYWA7XHJcbn07XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUb0NlbHNpdXMsIGNvbnZlcnRUb0tQSCwgY29udmVydFVuaXhUaW1lIH0gZnJvbSBcIi4vaGVscGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlEYXRhIH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuY29uc3QgcHJvY2Vzc0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNpdHkgPSBkYXRhLm5hbWU7XHJcbiAgY29uc3QgY291bnRyeSA9IGRhdGEuc3lzLmNvdW50cnk7XHJcbiAgY29uc3QgbWFpbiA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZGF0YS53ZWF0aGVyWzBdLmljb247XHJcbiAgY29uc3QgdGVtcCA9IGNvbnZlcnRUb0NlbHNpdXMoZGF0YS5tYWluLnRlbXApO1xyXG4gIGNvbnN0IG1pblRlbXAgPSBjb252ZXJ0VG9DZWxzaXVzKGRhdGEubWFpbi50ZW1wX21pbik7XHJcbiAgY29uc3QgbWF4VGVtcCA9IGNvbnZlcnRUb0NlbHNpdXMoZGF0YS5tYWluLnRlbXBfbWF4KTtcclxuICBjb25zdCBmZWVsc0xpa2UgPSBjb252ZXJ0VG9DZWxzaXVzKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBjb252ZXJ0VG9LUEgoZGF0YS53aW5kLnNwZWVkKTtcclxuICBjb25zdCBzdW5yaXNlID0gY29udmVydFVuaXhUaW1lKGRhdGEuc3lzLnN1bnJpc2UsIGRhdGEudGltZXpvbmUpO1xyXG4gIGNvbnN0IHN1bnNldCA9IGNvbnZlcnRVbml4VGltZShkYXRhLnN5cy5zdW5zZXQsIGRhdGEudGltZXpvbmUpO1xyXG4gIGNvbnN0IHByZXNzdXJlID0gZGF0YS5tYWluLnByZXNzdXJlO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcclxuICAgIGNpdHk6IGNpdHksXHJcbiAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgbWFpbjogbWFpbixcclxuICAgIHdlYXRoZXJJY29uOiB3ZWF0aGVySWNvbixcclxuICAgIHRlbXA6IHRlbXAsXHJcbiAgICBtaW5UZW1wOiBtaW5UZW1wLFxyXG4gICAgbWF4VGVtcDogbWF4VGVtcCxcclxuICAgIGZlZWxzTGlrZTogZmVlbHNMaWtlLFxyXG4gICAgaHVtaWRpdHk6IGh1bWlkaXR5LFxyXG4gICAgd2luZFNwZWVkOiB3aW5kU3BlZWQsXHJcbiAgICBzdW5yaXNlOiBzdW5yaXNlLFxyXG4gICAgc3Vuc2V0OiBzdW5zZXQsXHJcbiAgICBwcmVzc3VyZTogcHJlc3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2VlYzRhNDY4YzEwZjI3NmNmNzU5MjllZjYwNzY1MThgKTtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBwcm9jZXNzRGF0YShkYXRhKTtcclxuICAgIGRpc3BsYXlEYXRhKHdlYXRoZXJEYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XHJcblxyXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIik7XHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuXHJcbmdldFdlYXRoZXIoXCJUb3JvbnRvXCIpO1xyXG5cclxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGdldFdlYXRoZXIoY2l0eS52YWx1ZSk7XHJcbiAgY2l0eS5ibHVyKCk7XHJcbiAgc2VhcmNoRm9ybS5yZXNldCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9