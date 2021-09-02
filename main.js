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
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1JPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVLElBQUksYUFBYTtBQUN2RCwrQkFBK0IsVUFBVTtBQUN6QywrQkFBK0IsVUFBVTtBQUN6Qyx3REFBd0QsaUJBQWlCO0FBQ3pFLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQSwyQkFBMkIsYUFBYTtBQUN4Qyw0QkFBNEIsY0FBYztBQUMxQyw2QkFBNkIsZ0JBQWdCO0FBQzdDLDRCQUE0QixlQUFlO0FBQzNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCMEQ7QUFDckI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBZ0I7QUFDL0Isa0JBQWtCLHlEQUFnQjtBQUNsQyxrQkFBa0IseURBQWdCO0FBQ2xDLG9CQUFvQix5REFBZ0I7QUFDcEM7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVc7QUFDZjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2hEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBVTtBQUNaO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29udmVydFRvQ2Vsc2l1cyA9IChrZWx2aW4pID0+IHtcclxuICBjb25zdCBjZWxzaXVzID0gTWF0aC5yb3VuZChrZWx2aW4gLSAyNzMuMTUpO1xyXG4gIHJldHVybiBjZWxzaXVzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb0tQSCA9IChzcGVlZCkgPT4ge1xyXG4gIGNvbnN0IEtQSCA9IHNwZWVkICogMy42O1xyXG4gIHJldHVybiBLUEgudG9GaXhlZCgxKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4td2VhdGhlclwiKTtcclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pY29uXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXBcIik7XHJcbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZS10ZW1wXCIpO1xyXG4gIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2gtdGVtcFwiKTtcclxuICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3ctdGVtcFwiKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kLXNwZWVkXCIpO1xyXG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKTtcclxuXHJcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHl9LCAke2RhdGEuY291bnRyeX1gO1xyXG4gIG1haW5XZWF0aGVyLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWlufWA7XHJcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9XFx4QjBDYDtcclxuICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJJY29ufUAyeC5wbmdgO1xyXG4gIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLmZlZWxzTGlrZX1cXHhCMENgO1xyXG4gIG1heFRlbXAuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXVwXCI+PC9pPmA7XHJcbiAgbWF4VGVtcC5pbm5lckhUTUwgKz0gYCAke2RhdGEubWF4VGVtcH1cXHhCMENgO1xyXG4gIG1pblRlbXAuaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+YDtcclxuICBtaW5UZW1wLmlubmVySFRNTCArPSBgICR7ZGF0YS5taW5UZW1wfVxceEIwQ2A7XHJcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZFNwZWVkfSBrbS9oYDtcclxuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke2RhdGEucHJlc3N1cmV9IGhQYWA7XHJcbn07XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUb0NlbHNpdXMsIGNvbnZlcnRUb0tQSCB9IGZyb20gXCIuL2hlbHBlclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5RGF0YSB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmNvbnN0IHByb2Nlc3NEYXRhID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBjaXR5ID0gZGF0YS5uYW1lO1xyXG4gIGNvbnN0IGNvdW50cnkgPSBkYXRhLnN5cy5jb3VudHJ5O1xyXG4gIGNvbnN0IG1haW4gPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gIGNvbnN0IHRlbXAgPSBjb252ZXJ0VG9DZWxzaXVzKGRhdGEubWFpbi50ZW1wKTtcclxuICBjb25zdCBtaW5UZW1wID0gY29udmVydFRvQ2Vsc2l1cyhkYXRhLm1haW4udGVtcF9taW4pO1xyXG4gIGNvbnN0IG1heFRlbXAgPSBjb252ZXJ0VG9DZWxzaXVzKGRhdGEubWFpbi50ZW1wX21heCk7XHJcbiAgY29uc3QgZmVlbHNMaWtlID0gY29udmVydFRvQ2Vsc2l1cyhkYXRhLm1haW4uZmVlbHNfbGlrZSk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XHJcbiAgY29uc3Qgd2luZFNwZWVkID0gY29udmVydFRvS1BIKGRhdGEud2luZC5zcGVlZCk7XHJcbiAgY29uc3QgcHJlc3N1cmUgPSBkYXRhLm1haW4ucHJlc3N1cmU7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0ge1xyXG4gICAgY2l0eTogY2l0eSxcclxuICAgIGNvdW50cnk6IGNvdW50cnksXHJcbiAgICBtYWluOiBtYWluLFxyXG4gICAgd2VhdGhlckljb246IHdlYXRoZXJJY29uLFxyXG4gICAgdGVtcDogdGVtcCxcclxuICAgIG1pblRlbXA6IG1pblRlbXAsXHJcbiAgICBtYXhUZW1wOiBtYXhUZW1wLFxyXG4gICAgZmVlbHNMaWtlOiBmZWVsc0xpa2UsXHJcbiAgICBodW1pZGl0eTogaHVtaWRpdHksXHJcbiAgICB3aW5kU3BlZWQ6IHdpbmRTcGVlZCxcclxuICAgIHByZXNzdXJlOiBwcmVzc3VyZSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0zZWVjNGE0NjhjMTBmMjc2Y2Y3NTkyOWVmNjA3NjUxOGApO1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHByb2Nlc3NEYXRhKGRhdGEpO1xyXG5cclxuICAgIGRpc3BsYXlEYXRhKHdlYXRoZXJEYXRhKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XHJcblxyXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIik7XHJcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuXHJcbmdldFdlYXRoZXIoXCJUb3JvbnRvXCIpO1xyXG5cclxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGdldFdlYXRoZXIoY2l0eS52YWx1ZSk7XHJcbiAgY2l0eS5ibHVyKCk7XHJcbiAgc2VhcmNoRm9ybS5yZXNldCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9