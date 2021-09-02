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
/* harmony export */   "convertToKPH": () => (/* binding */ convertToKPH)
/* harmony export */ });
const convertToCelsius = (kelvin) => {
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
};

const convertToKPH = (speed) => {
  const KPH = speed * 3.6;
  return KPH.toFixed(1);
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
    console.log(data);

    const weatherData = processData(data);

    (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayData)(weatherData);
    // console.log(weatherData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVLElBQUksYUFBYTtBQUN2RCwrQkFBK0IsVUFBVTtBQUN6QywrQkFBK0IsVUFBVTtBQUN6Qyx5REFBeUQsaUJBQWlCO0FBQzFFLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQSwyQkFBMkIsYUFBYTtBQUN4Qyw0QkFBNEIsY0FBYztBQUMxQyw2QkFBNkIsZ0JBQWdCO0FBQzdDLDRCQUE0QixlQUFlO0FBQzNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMEQ7QUFDckI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBZ0I7QUFDL0Isa0JBQWtCLHlEQUFnQjtBQUNsQyxrQkFBa0IseURBQWdCO0FBQ2xDLG9CQUFvQix5REFBZ0I7QUFDcEM7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVc7QUFDZjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2hEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBVTtBQUNaO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29udmVydFRvQ2Vsc2l1cyA9IChrZWx2aW4pID0+IHtcclxuICBjb25zdCBjZWxzaXVzID0gTWF0aC5yb3VuZChrZWx2aW4gLSAyNzMuMTUpO1xyXG4gIHJldHVybiBjZWxzaXVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb0tQSCA9IChzcGVlZCkgPT4ge1xyXG4gIGNvbnN0IEtQSCA9IHNwZWVkICogMy42O1xyXG4gIHJldHVybiBLUEgudG9GaXhlZCgxKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXBcIik7XHJcbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZS10ZW1wXCIpO1xyXG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtdGVtcFwiKTtcclxuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctdGVtcFwiKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kLXNwZWVkXCIpO1xyXG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKTtcclxuXHJcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEuY291bnRyeX1gO1xyXG4gIG1haW5XZWF0aGVyLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWlufWA7XHJcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9XFx4QjBDYDtcclxuICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVySWNvbn1AMngucG5nYDtcclxuICBmZWVsc0xpa2VUZW1wLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS5mZWVsc0xpa2V9XFx4QjBDYDtcclxuICBtYXhUZW1wLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS11cFwiPjwvaT5gO1xyXG4gIG1heFRlbXAuaW5uZXJIVE1MICs9IGAgJHtkYXRhLm1heFRlbXB9XFx4QjBDYDtcclxuICBtaW5UZW1wLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPmA7XHJcbiAgbWluVGVtcC5pbm5lckhUTUwgKz0gYCAke2RhdGEubWluVGVtcH1cXHhCMENgO1xyXG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX0lYDtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmRTcGVlZH0ga20vaGA7XHJcbiAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLnByZXNzdXJlfSBoUGFgO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjb252ZXJ0VG9DZWxzaXVzLCBjb252ZXJ0VG9LUEggfSBmcm9tIFwiLi9oZWxwZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheURhdGEgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5jb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2l0eSA9IGRhdGEubmFtZTtcclxuICBjb25zdCBjb3VudHJ5ID0gZGF0YS5zeXMuY291bnRyeTtcclxuICBjb25zdCBtYWluID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvbjtcclxuICBjb25zdCB0ZW1wID0gY29udmVydFRvQ2Vsc2l1cyhkYXRhLm1haW4udGVtcCk7XHJcbiAgY29uc3QgbWluVGVtcCA9IGNvbnZlcnRUb0NlbHNpdXMoZGF0YS5tYWluLnRlbXBfbWluKTtcclxuICBjb25zdCBtYXhUZW1wID0gY29udmVydFRvQ2Vsc2l1cyhkYXRhLm1haW4udGVtcF9tYXgpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZSA9IGNvbnZlcnRUb0NlbHNpdXMoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGNvbnZlcnRUb0tQSChkYXRhLndpbmQuc3BlZWQpO1xyXG4gIGNvbnN0IHByZXNzdXJlID0gZGF0YS5tYWluLnByZXNzdXJlO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcclxuICAgIGNpdHk6IGNpdHksXHJcbiAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgbWFpbjogbWFpbixcclxuICAgIHdlYXRoZXJJY29uOiB3ZWF0aGVySWNvbixcclxuICAgIHRlbXA6IHRlbXAsXHJcbiAgICBtaW5UZW1wOiBtaW5UZW1wLFxyXG4gICAgbWF4VGVtcDogbWF4VGVtcCxcclxuICAgIGZlZWxzTGlrZTogZmVlbHNMaWtlLFxyXG4gICAgaHVtaWRpdHk6IGh1bWlkaXR5LFxyXG4gICAgd2luZFNwZWVkOiB3aW5kU3BlZWQsXHJcbiAgICBwcmVzc3VyZTogcHJlc3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9M2VlYzRhNDY4YzEwZjI3NmNmNzU5MjllZjYwNzY1MThgKTtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBwcm9jZXNzRGF0YShkYXRhKTtcclxuXHJcbiAgICBkaXNwbGF5RGF0YSh3ZWF0aGVyRGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xyXG5cclxuY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpO1xyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5nZXRXZWF0aGVyKFwiVG9yb250b1wiKTtcclxuXHJcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBnZXRXZWF0aGVyKGNpdHkudmFsdWUpO1xyXG4gIGNpdHkuYmx1cigpO1xyXG4gIHNlYXJjaEZvcm0ucmVzZXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==