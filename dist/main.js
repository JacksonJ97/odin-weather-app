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
    // console.log(data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVLElBQUksYUFBYTtBQUN2RCwrQkFBK0IsVUFBVTtBQUN6QywrQkFBK0IsVUFBVTtBQUN6Qyx5REFBeUQsaUJBQWlCO0FBQzFFLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQSwyQkFBMkIsYUFBYTtBQUN4Qyw0QkFBNEIsY0FBYztBQUMxQyw2QkFBNkIsZ0JBQWdCO0FBQzdDLDRCQUE0QixlQUFlO0FBQzNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMEQ7QUFDckI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBZ0I7QUFDL0Isa0JBQWtCLHlEQUFnQjtBQUNsQyxrQkFBa0IseURBQWdCO0FBQ2xDLG9CQUFvQix5REFBZ0I7QUFDcEM7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFXO0FBQ2Y7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUMvQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVU7QUFDWjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSAoa2VsdmluKSA9PiB7XHJcbiAgY29uc3QgY2Vsc2l1cyA9IE1hdGgucm91bmQoa2VsdmluIC0gMjczLjE1KTtcclxuICByZXR1cm4gY2Vsc2l1cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0VG9LUEggPSAoc3BlZWQpID0+IHtcclxuICBjb25zdCBLUEggPSBzcGVlZCAqIDMuNjtcclxuICByZXR1cm4gS1BILnRvRml4ZWQoMSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBkaXNwbGF5RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xyXG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXdlYXRoZXJcIik7XHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaWNvblwiKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wXCIpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2UtdGVtcFwiKTtcclxuICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdoLXRlbXBcIik7XHJcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93LXRlbXBcIik7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1zcGVlZFwiKTtcclxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVcIik7XHJcblxyXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLmNvdW50cnl9YDtcclxuICBtYWluV2VhdGhlci50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbn1gO1xyXG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wfVxceEIwQ2A7XHJcbiAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlckljb259QDJ4LnBuZ2A7XHJcbiAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEuZmVlbHNMaWtlfVxceEIwQ2A7XHJcbiAgbWF4VGVtcC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+YDtcclxuICBtYXhUZW1wLmlubmVySFRNTCArPSBgICR7ZGF0YS5tYXhUZW1wfVxceEIwQ2A7XHJcbiAgbWluVGVtcC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT5gO1xyXG4gIG1pblRlbXAuaW5uZXJIVE1MICs9IGAgJHtkYXRhLm1pblRlbXB9XFx4QjBDYDtcclxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9JWA7XHJcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7ZGF0YS53aW5kU3BlZWR9IGttL2hgO1xyXG4gIHByZXNzdXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5wcmVzc3VyZX0gaFBhYDtcclxufTtcclxuIiwiaW1wb3J0IHsgY29udmVydFRvQ2Vsc2l1cywgY29udmVydFRvS1BIIH0gZnJvbSBcIi4vaGVscGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlEYXRhIH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuY29uc3QgcHJvY2Vzc0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IGNpdHkgPSBkYXRhLm5hbWU7XHJcbiAgY29uc3QgY291bnRyeSA9IGRhdGEuc3lzLmNvdW50cnk7XHJcbiAgY29uc3QgbWFpbiA9IGRhdGEud2VhdGhlclswXS5tYWluO1xyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZGF0YS53ZWF0aGVyWzBdLmljb247XHJcbiAgY29uc3QgdGVtcCA9IGNvbnZlcnRUb0NlbHNpdXMoZGF0YS5tYWluLnRlbXApO1xyXG4gIGNvbnN0IG1pblRlbXAgPSBjb252ZXJ0VG9DZWxzaXVzKGRhdGEubWFpbi50ZW1wX21pbik7XHJcbiAgY29uc3QgbWF4VGVtcCA9IGNvbnZlcnRUb0NlbHNpdXMoZGF0YS5tYWluLnRlbXBfbWF4KTtcclxuICBjb25zdCBmZWVsc0xpa2UgPSBjb252ZXJ0VG9DZWxzaXVzKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBjb252ZXJ0VG9LUEgoZGF0YS53aW5kLnNwZWVkKTtcclxuICBjb25zdCBwcmVzc3VyZSA9IGRhdGEubWFpbi5wcmVzc3VyZTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSB7XHJcbiAgICBjaXR5OiBjaXR5LFxyXG4gICAgY291bnRyeTogY291bnRyeSxcclxuICAgIG1haW46IG1haW4sXHJcbiAgICB3ZWF0aGVySWNvbjogd2VhdGhlckljb24sXHJcbiAgICB0ZW1wOiB0ZW1wLFxyXG4gICAgbWluVGVtcDogbWluVGVtcCxcclxuICAgIG1heFRlbXA6IG1heFRlbXAsXHJcbiAgICBmZWVsc0xpa2U6IGZlZWxzTGlrZSxcclxuICAgIGh1bWlkaXR5OiBodW1pZGl0eSxcclxuICAgIHdpbmRTcGVlZDogd2luZFNwZWVkLFxyXG4gICAgcHJlc3N1cmU6IHByZXNzdXJlLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTNlZWM0YTQ2OGMxMGYyNzZjZjc1OTI5ZWY2MDc2NTE4YCk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gcHJvY2Vzc0RhdGEoZGF0YSk7XHJcbiAgICBkaXNwbGF5RGF0YSh3ZWF0aGVyRGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xyXG5cclxuY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpO1xyXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcblxyXG5nZXRXZWF0aGVyKFwiVG9yb250b1wiKTtcclxuXHJcbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBnZXRXZWF0aGVyKGNpdHkudmFsdWUpO1xyXG4gIGNpdHkuYmx1cigpO1xyXG4gIHNlYXJjaEZvcm0ucmVzZXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==