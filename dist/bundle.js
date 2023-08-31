/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./first_game_field.js":
/*!*****************************!*\
  !*** ./first_game_field.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mineGameField: () => (/* binding */ mineGameField),\n/* harmony export */   renderHeder: () => (/* binding */ renderHeder)\n/* harmony export */ });\n// import { library } from \"webpack\"\r\n\r\n// Отрисовываем заголовок игрового поля\r\nconst renderHeder = () => {\r\n    return `\r\n<div class=\"game-field\">\r\n            <div class=\"heder\">\r\n                <div class=\"heder-time-box\">\r\n                    <div class=\"heder-time--text\">\r\n                        <p>min</p>\r\n                        <p>sek</p>\r\n                    </div>\r\n\r\n                    <div class=\"heder-time\">00.00</div>\r\n                </div>\r\n                <button class=\"new_Game-button\">Начать заново</button>\r\n            </div>\r\n            <div class=\"card-forView\"></div> \r\n            \r\n            </div>`\r\n}\r\n\r\nconst mineGameField = ({ difficultLevel }) => {\r\n    let playCards = 0\r\n    const arrCard = [\"A\", \"K\", \"Q\", \"J\", \"10\", \"9\", \"8\", \"7\", \"6\"]\r\n    const arrSuit = [\"Piki\", \"Cherv\", \"Bubn\", \"Krest\"]\r\n    const cardsField = []\r\n    let randCard = []\r\n    let randSuit = []\r\n    let totalRandCards = []\r\n    let totalRandSuits = []\r\n    let index = []\r\n    let cardIcon = \"\"\r\n\r\n    if (difficultLevel === \"1\") {\r\n        playCards = 3\r\n    }\r\n    if (difficultLevel === \"2\") {\r\n        playCards = 6\r\n    }\r\n    if (difficultLevel === \"3\") {\r\n        playCards = 9\r\n    }\r\n    // Создание массивов с случайными рангами и мастями\r\n    for (let i = 0; i <= playCards - 1; i++) {\r\n        randCard[i] = arrCard[Math.floor(Math.random() * arrCard.length)]\r\n        randSuit[i] = arrSuit[Math.floor(Math.random() * arrSuit.length)]\r\n    }\r\n    totalRandCards = randCard.concat(randCard)\r\n    totalRandSuits = randSuit.concat(randSuit)\r\n    console.log(totalRandCards)\r\n    console.log(totalRandSuits)\r\n\r\n    // totalRandCards = randCard.concat(randCard)\r\n    // totalRandSuits = randSuit.concat(randSuit)\r\n\r\n    // Перетасовываем карты\r\n    for (let i = 0; i < playCards * 2; i++) {\r\n        index[i] = i\r\n    }\r\n    index = index.sort(() => Math.random() - 0.5)\r\n\r\n    // console.log(totalRandCards)\r\n    // console.log(totalRandSuits)\r\n    // console.log(index)\r\n\r\n    // Вывод карт на просмотр\r\n    for (let i = 0; i < playCards * 2; i++) {\r\n        if (totalRandSuits[index[i]] === \"Piki\") {\r\n            cardIcon = \"iconPiki\"\r\n        }\r\n        if (totalRandSuits[index[i]] === \"Cherv\") {\r\n            cardIcon = \"iconCherv\"\r\n        }\r\n        if (totalRandSuits[index[i]] === \"Bubn\") {\r\n            cardIcon = \"iconBubn\"\r\n        }\r\n        if (totalRandSuits[index[i]] === \"Krest\") {\r\n            cardIcon = \"iconKrest\"\r\n        }\r\n\r\n        let cardElement = `\r\n                <div class=\"card-open\" data-id=\"${index[i]}\" data-card=\"${\r\n                    totalRandCards[index[i]]\r\n                }\" data-icon=\"${cardIcon}\" >\r\n                        <div class=\"cardIn card-heder\">${\r\n                            totalRandCards[index[i]]\r\n                        }</div>\r\n                        <div class=\"cardIn card-heder--${cardIcon} \"></div>\r\n                        <div class=\"cardIn card-middle--${cardIcon} \"></div>\r\n                        <div class=\"cardIn card-down--${cardIcon} \"></div>\r\n                        <div class=\"cardIn card-down \">${\r\n                            totalRandCards[index[i]]\r\n                        }</div>\r\n                \r\n                </div>`\r\n\r\n        cardsField.push(cardElement)\r\n    }\r\n\r\n    const fieldElement = document.querySelector(\".card-forView\")\r\n    for (let i of cardsField) {\r\n        fieldElement.innerHTML = fieldElement.innerHTML + i\r\n    }\r\n    console.log(fieldElement)\r\n    console.log({ index })\r\n    // Вызвать функцию которая закроет карты через 5 секунд\r\n\r\n    setTimeout(closeCardFunction, 3000)\r\n}\r\n\r\n// Функция закрытия карт\r\nconst closeCardFunction = () => {\r\n    const cardElements = document.querySelectorAll(\".card-open\")\r\n    const cardInElements = document.querySelectorAll(\".cardIn\")\r\n\r\n    for (const cardInElement of cardInElements) {\r\n        cardInElement.classList.add(\"displayNone\")\r\n    }\r\n\r\n    for (const cardElement of cardElements) {\r\n        cardElement.classList.add(\"card\")\r\n        cardElement.classList.remove(\"card-open\")\r\n    }\r\n\r\n    gamePlayFunction()\r\n}\r\n\r\nconst gamePlayFunction = () => {\r\n    // let openCardCount = 0;\r\n    const cardElements = document.querySelectorAll(\".card\")\r\n    console.log({ cardElements })\r\n    for (const cardElement of cardElements) {\r\n        cardElement.addEventListener(\"click\", () => {\r\n            // const cardChildElements = document.querySelectorAll(\".cardIn\").children\r\n            const cardChildElements = cardElement.children\r\n            console.log({ cardChildElements })\r\n            for (const cardChildElement of cardChildElements) {\r\n                cardChildElement.classList.remove(\"displayNone\")\r\n            }\r\n            cardElement.classList.add(\"card-open\")\r\n        })\r\n    }\r\n}\r\n\r\n// export const userGameField = ({ difficultLevel, index }) => {\r\n//     let playCards = 0\r\n//     const cardsCloseField = []\r\n//     if (difficultLevel === \"1\") {\r\n//         playCards = 3\r\n//     }\r\n//     if (difficultLevel === \"2\") {\r\n//         playCards = 6\r\n//     }\r\n//     if (difficultLevel === \"3\") {\r\n//         playCards = 9\r\n//     }\r\n//     for (let i = 0; i < playCards * 2; i++) {\r\n//         let cardCloseElement = `<div class=\"card\" data-id=\"${index[i]}\"></div>`\r\n//         cardsCloseField.push(cardCloseElement)\r\n//     }\r\n\r\n//     const fieldElement2 = document.querySelector(\".card-close\")\r\n//     fieldElement2.innerHTML = ``\r\n\r\n//     // Убираем div с показанными картами\r\n//     const cardOpenElement = document.querySelector(\".card-forView\")\r\n//     cardOpenElement.classList.add(\"displayNone\")\r\n//     // Убрали\r\n\r\n//     for (let i of cardsCloseField) {\r\n//         fieldElement2.innerHTML = fieldElement2.innerHTML + i\r\n//     }\r\n//     console.log(fieldElement2)\r\n\r\n//     gamePlayFunction({ index })\r\n// }\r\n\r\n// const gamePlayFunction = () => {\r\n// // let openCardCount = 0;\r\n// const cardElements3 = document.querySelectorAll(\".card-choice\")\r\n// console.log({cardElements3});\r\n\r\n// cardElements3.addEventListener(\"click\", () => {\r\n\r\n//        alert(\"переворачиваем карту\");\r\n\r\n// })\r\n\r\n// }\r\n\r\n// export const gamePlayFunction = ({ index }) => {\r\n//     let totalRandCards2 = [\"A\", \"9\", \"Q\", \"A\", \"9\", \"Q\"]\r\n//     let totalRandSuits2 = [\"Krest\", \"Bubn\", \"Piki\", \"Krest\", \"Bubn\", \"Piki\"]\r\n//     let cardElement = ``\r\n//     let cardIcon = \"\"\r\n//     const cardsField = []\r\n//     const clickCardElements = document.querySelectorAll(\".card\")\r\n//     for (const clickCardElement of clickCardElements) {\r\n//         clickCardElement.addEventListener(\"click\", () => {\r\n//             // Вызываем функцию отрисовки открытия карты по id\r\n//             let cardId = clickCardElement.dataset.id\r\n//             console.log(cardId)\r\n\r\n//             //    пускаем цикл по index\r\n//             for (let i = 0; i < index.length; i++) {\r\n//                 if (totalRandSuits2[index[i]] === \"Piki\") {\r\n//                     cardIcon = \"iconPiki\"\r\n//                 }\r\n//                 if (totalRandSuits2[index[i]] === \"Cherv\") {\r\n//                     cardIcon = \"iconCherv\"\r\n//                 }\r\n//                 if (totalRandSuits2[index[i]] === \"Bubn\") {\r\n//                     cardIcon = \"iconBubn\"\r\n//                 }\r\n//                 if (totalRandSuits2[index[i]] === \"Krest\") {\r\n//                     cardIcon = \"iconKrest\"\r\n//                 }\r\n//                 if (cardId == index[i]) {\r\n//                     cardElement = `\r\n//                     <div class=\"card-open\">\r\n//                         <div class=\"card-heder\">${\r\n//                             totalRandCards2[index[i]]\r\n//                         }</div>\r\n//                         <div class=\"card-heder--${cardIcon}\"></div>\r\n//                         <div class=\"card-middle--${cardIcon}\"></div>\r\n//                         <div class=\"card-down--${cardIcon}\"></div>\r\n//                         <div class=\"card-down\">${\r\n//                             totalRandCards2[index[i]]\r\n//                         }</div>\r\n//                     </div>`\r\n//                 } else {\r\n//                     cardElement = `<div class=\"card\" data-id=\"${index[i]}\"></div>`\r\n//                 }\r\n\r\n//                 cardsField.push(cardElement)\r\n//             }\r\n//             console.log(cardsField)\r\n\r\n//             const fieldElement = document.querySelector(\".card-close\")\r\n//             console.log(fieldElement)\r\n\r\n//             for (let i of cardsField) {\r\n//                 fieldElement.innerHTML = fieldElement.innerHTML + i\r\n//             }\r\n//             console.log(fieldElement.innerHTML)\r\n//         })\r\n//     }\r\n// }\r\n\n\n//# sourceURL=webpack://mind_games/./first_game_field.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _first_game_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first_game_field.js */ \"./first_game_field.js\");\n\r\nlet difficultLevel = 0\r\n// let totalRandCards = []\r\n// let totalRandSuits = []\r\n// let index = []\r\n// Функция выделения кнопки уровня сложности\r\n\r\nconst diffLevelButtonColor = () => {\r\n    // let difficultLevel = 0;\r\n    const difficulteElements = document.querySelectorAll(\r\n        \".start-box--difficultValue\",\r\n    )\r\n\r\n    // difficulteElement.classList.remove('color');\r\n\r\n    for (const difficulteElement of difficulteElements) {\r\n        difficulteElement.addEventListener(\"click\", () => {\r\n            if (difficultLevel !== difficulteElement.name) {\r\n                for (const difficulteElement of difficulteElements) {\r\n                    difficulteElement.classList.remove(\"color\")\r\n                }\r\n\r\n                difficulteElement.classList.add(\"color\")\r\n            }\r\n            // Записываем уровень сложности\r\n            return (difficultLevel = difficulteElement.name)\r\n        })\r\n    }\r\n}\r\n\r\ndiffLevelButtonColor()\r\n\r\n// Функция старта игры, выбор сложности\r\n\r\nconst startGame = () => {\r\n    const startElement = document.querySelector(\".start-box--button\")\r\n    const fieldElement = document.querySelector(\".start-game-field\")\r\n    startElement.addEventListener(\"click\", () => {\r\n        if (difficultLevel === 0) {\r\n            return alert(\"Выберите сложность игры\")\r\n        } else {\r\n            fieldElement.innerHTML = (0,_first_game_field_js__WEBPACK_IMPORTED_MODULE_0__.renderHeder)()\r\n            fieldElement.classList.remove(\"start-game-field\")\r\n            ;(0,_first_game_field_js__WEBPACK_IMPORTED_MODULE_0__.mineGameField)({ difficultLevel })\r\n        }\r\n    })\r\n}\r\n\r\nstartGame()\r\n\n\n//# sourceURL=webpack://mind_games/./main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;