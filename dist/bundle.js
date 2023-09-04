/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./first_game_field.js":
/*!*****************************!*\
  !*** ./first_game_field.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mineGameField: () => (/* binding */ mineGameField),\n/* harmony export */   renderHeder: () => (/* binding */ renderHeder)\n/* harmony export */ });\n// import { library } from \"webpack\"\r\n\r\n// Отрисовываем заголовок игрового поля\r\nconst renderHeder = () => {\r\n    return `\r\n<div class=\"game-field\">\r\n            <div class=\"heder\">\r\n                <div class=\"heder-time-box\">\r\n                    <div class=\"heder-time--text\">\r\n                        <p>min</p>\r\n                        <p>sek</p>\r\n                    </div>\r\n\r\n                    <div class=\"heder-time\">00.00</div>\r\n                </div>\r\n                <button class=\"new_Game-button\">Начать заново</button>\r\n            </div>\r\n            <div class=\"card-forView\"></div> \r\n            \r\n            </div>`\r\n}\r\n\r\nconst mineGameField = ({ difficultLevel }) => {\r\n    let playCards = 0\r\n    const arrCard = [\"A\", \"K\", \"Q\", \"J\", \"10\", \"9\", \"8\", \"7\", \"6\"]\r\n    const arrSuit = [\"Piki\", \"Cherv\", \"Bubn\", \"Krest\"]\r\n    const cardsField = []\r\n    let randCard = []\r\n    let randSuit = []\r\n    let totalRandCards = []\r\n    let totalRandSuits = []\r\n    let index = []\r\n    let cardIcon = \"\"\r\n\r\n    if (difficultLevel === \"1\") {\r\n        playCards = 3\r\n    }\r\n    if (difficultLevel === \"2\") {\r\n        playCards = 6\r\n    }\r\n    if (difficultLevel === \"3\") {\r\n        playCards = 9\r\n    }\r\n    // Создание массивов с случайными рангами и мастями\r\n    for (let i = 0; i <= playCards - 1; i++) {\r\n        randCard[i] = arrCard[Math.floor(Math.random() * arrCard.length)]\r\n        randSuit[i] = arrSuit[Math.floor(Math.random() * arrSuit.length)]\r\n    }\r\n    totalRandCards = randCard.concat(randCard)\r\n    totalRandSuits = randSuit.concat(randSuit)\r\n    console.log(totalRandCards)\r\n    console.log(totalRandSuits)\r\n\r\n    // totalRandCards = randCard.concat(randCard)\r\n    // totalRandSuits = randSuit.concat(randSuit)\r\n\r\n    // Перетасовываем карты\r\n    for (let i = 0; i < playCards * 2; i++) {\r\n        index[i] = i\r\n    }\r\n    index = index.sort(() => Math.random() - 0.5)\r\n\r\n    // console.log(totalRandCards)\r\n    // console.log(totalRandSuits)\r\n    // console.log(index)\r\n\r\n    // Вывод карт на просмотр\r\n    for (let i = 0; i < playCards * 2; i++) {\r\n        if (totalRandSuits[index[i]] === \"Piki\") {\r\n            cardIcon = \"iconPiki\"\r\n        }\r\n        if (totalRandSuits[index[i]] === \"Cherv\") {\r\n            cardIcon = \"iconCherv\"\r\n        }\r\n        if (totalRandSuits[index[i]] === \"Bubn\") {\r\n            cardIcon = \"iconBubn\"\r\n        }\r\n        if (totalRandSuits[index[i]] === \"Krest\") {\r\n            cardIcon = \"iconKrest\"\r\n        }\r\n\r\n        let cardElement = `\r\n                <div class=\"card-open\" data-id=\"${index[i]}\" data-card=\"${\r\n                    totalRandCards[index[i]]\r\n                }\" data-icon=\"${cardIcon}\" >\r\n                        <div class=\"cardIn card-heder\">${\r\n                            totalRandCards[index[i]]\r\n                        }</div>\r\n                        <div class=\"cardIn card-heder--${cardIcon} \"></div>\r\n                        <div class=\"cardIn card-middle--${cardIcon} \"></div>\r\n                        <div class=\"cardIn card-down--${cardIcon} \"></div>\r\n                        <div class=\"cardIn card-down \">${\r\n                            totalRandCards[index[i]]\r\n                        }</div>\r\n                \r\n                </div>`\r\n\r\n        cardsField.push(cardElement)\r\n    }\r\n\r\n    const fieldElement = document.querySelector(\".card-forView\")\r\n    for (let i of cardsField) {\r\n        fieldElement.innerHTML = fieldElement.innerHTML + i\r\n    }\r\n    console.log(fieldElement)\r\n    console.log({ index })\r\n    // Вызвать функцию которая закроет карты через 5 секунд\r\n\r\n    setTimeout(closeCardFunction, 3000)\r\n}\r\n\r\n// Функция закрытия карт\r\nconst closeCardFunction = () => {\r\n    const cardElements = document.querySelectorAll(\".card-open\")\r\n    const cardInElements = document.querySelectorAll(\".cardIn\")\r\n\r\n    for (const cardInElement of cardInElements) {\r\n        cardInElement.classList.add(\"displayNone\")\r\n    }\r\n\r\n    for (const cardElement of cardElements) {\r\n        cardElement.classList.add(\"card\")\r\n        cardElement.classList.remove(\"card-open\")\r\n    }\r\n\r\n    gamePlayFunction()\r\n}\r\n\r\nconst gamePlayFunction = () => {\r\n    // let openCardCount = 0;\r\n    const cardElements = document.querySelectorAll(\".card\")\r\n    console.log({ cardElements })\r\n    for (const cardElement of cardElements) {\r\n        cardElement.addEventListener(\"click\", () => {\r\n            // const cardChildElements = document.querySelectorAll(\".cardIn\").children\r\n            const cardChildElements = cardElement.children\r\n            console.log({ cardChildElements })\r\n            for (const cardChildElement of cardChildElements) {\r\n                cardChildElement.classList.remove(\"displayNone\")\r\n            }\r\n            cardElement.classList.add(\"card-open\")\r\n        })\r\n    }\r\n}\r\n\r\n// export const userGameField = ({ difficultLevel, index }) => {\r\n//     let playCards = 0\r\n//     const cardsCloseField = []\r\n//     if (difficultLevel === \"1\") {\r\n//         playCards = 3\r\n//     }\r\n//     if (difficultLevel === \"2\") {\r\n//         playCards = 6\r\n//     }\r\n//     if (difficultLevel === \"3\") {\r\n//         playCards = 9\r\n//     }\r\n//     for (let i = 0; i < playCards * 2; i++) {\r\n//         let cardCloseElement = `<div class=\"card\" data-id=\"${index[i]}\"></div>`\r\n//         cardsCloseField.push(cardCloseElement)\r\n//     }\r\n\r\n//     const fieldElement2 = document.querySelector(\".card-close\")\r\n//     fieldElement2.innerHTML = ``\r\n\r\n//     // Убираем div с показанными картами\r\n//     const cardOpenElement = document.querySelector(\".card-forView\")\r\n//     cardOpenElement.classList.add(\"displayNone\")\r\n//     // Убрали\r\n\r\n//     for (let i of cardsCloseField) {\r\n//         fieldElement2.innerHTML = fieldElement2.innerHTML + i\r\n//     }\r\n//     console.log(fieldElement2)\r\n\r\n//     gamePlayFunction({ index })\r\n// }\r\n\r\n// const gamePlayFunction = () => {\r\n// // let openCardCount = 0;\r\n// const cardElements3 = document.querySelectorAll(\".card-choice\")\r\n// console.log({cardElements3});\r\n\r\n// cardElements3.addEventListener(\"click\", () => {\r\n\r\n//        alert(\"переворачиваем карту\");\r\n\r\n// })\r\n\r\n// }\r\n\r\n// export const gamePlayFunction = ({ index }) => {\r\n//     let totalRandCards2 = [\"A\", \"9\", \"Q\", \"A\", \"9\", \"Q\"]\r\n//     let totalRandSuits2 = [\"Krest\", \"Bubn\", \"Piki\", \"Krest\", \"Bubn\", \"Piki\"]\r\n//     let cardElement = ``\r\n//     let cardIcon = \"\"\r\n//     const cardsField = []\r\n//     const clickCardElements = document.querySelectorAll(\".card\")\r\n//     for (const clickCardElement of clickCardElements) {\r\n//         clickCardElement.addEventListener(\"click\", () => {\r\n//             // Вызываем функцию отрисовки открытия карты по id\r\n//             let cardId = clickCardElement.dataset.id\r\n//             console.log(cardId)\r\n\r\n//             //    пускаем цикл по index\r\n//             for (let i = 0; i < index.length; i++) {\r\n//                 if (totalRandSuits2[index[i]] === \"Piki\") {\r\n//                     cardIcon = \"iconPiki\"\r\n//                 }\r\n//                 if (totalRandSuits2[index[i]] === \"Cherv\") {\r\n//                     cardIcon = \"iconCherv\"\r\n//                 }\r\n//                 if (totalRandSuits2[index[i]] === \"Bubn\") {\r\n//                     cardIcon = \"iconBubn\"\r\n//                 }\r\n//                 if (totalRandSuits2[index[i]] === \"Krest\") {\r\n//                     cardIcon = \"iconKrest\"\r\n//                 }\r\n//                 if (cardId == index[i]) {\r\n//                     cardElement = `\r\n//                     <div class=\"card-open\">\r\n//                         <div class=\"card-heder\">${\r\n//                             totalRandCards2[index[i]]\r\n//                         }</div>\r\n//                         <div class=\"card-heder--${cardIcon}\"></div>\r\n//                         <div class=\"card-middle--${cardIcon}\"></div>\r\n//                         <div class=\"card-down--${cardIcon}\"></div>\r\n//                         <div class=\"card-down\">${\r\n//                             totalRandCards2[index[i]]\r\n//                         }</div>\r\n//                     </div>`\r\n//                 } else {\r\n//                     cardElement = `<div class=\"card\" data-id=\"${index[i]}\"></div>`\r\n//                 }\r\n\r\n//                 cardsField.push(cardElement)\r\n//             }\r\n//             console.log(cardsField)\r\n\r\n//             const fieldElement = document.querySelector(\".card-close\")\r\n//             console.log(fieldElement)\r\n\r\n//             for (let i of cardsField) {\r\n//                 fieldElement.innerHTML = fieldElement.innerHTML + i\r\n//             }\r\n//             console.log(fieldElement.innerHTML)\r\n//         })\r\n//     }\r\n// }\r\n\n\n//# sourceURL=webpack://mind_games/./first_game_field.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _first_game_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first_game_field.js */ \"./first_game_field.js\");\n\r\n\r\nlet difficultLevel = 0\r\n// let totalRandCards = []\r\n// let totalRandSuits = []\r\n// let index = []\r\n// Функция выделения кнопки уровня сложности\r\n\r\nconst diffLevelButtonColor = () => {\r\n    // let difficultLevel = 0;\r\n    const difficulteElements = document.querySelectorAll(\r\n        \".start-box--difficultValue\",\r\n    )\r\n\r\n    // difficulteElement.classList.remove('color');\r\n\r\n    for (const difficulteElement of difficulteElements) {\r\n        difficulteElement.addEventListener(\"click\", () => {\r\n            if (difficultLevel !== difficulteElement.name) {\r\n                for (const difficulteElement of difficulteElements) {\r\n                    difficulteElement.classList.remove(\"color\")\r\n                }\r\n\r\n                difficulteElement.classList.add(\"color\")\r\n            }\r\n            // Записываем уровень сложности\r\n            return (difficultLevel = difficulteElement.name)\r\n        })\r\n    }\r\n}\r\n\r\ndiffLevelButtonColor()\r\n\r\n// Функция старта игры, выбор сложности\r\n\r\nconst startGame = () => {\r\n    const startElement = document.querySelector(\".start-box--button\")\r\n    const fieldElement = document.querySelector(\".start-game-field\")\r\n    startElement.addEventListener(\"click\", () => {\r\n        if (difficultLevel === 0) {\r\n            return alert(\"Выберите сложность игры\")\r\n        } else {\r\n            fieldElement.innerHTML = (0,_first_game_field_js__WEBPACK_IMPORTED_MODULE_1__.renderHeder)()\r\n            fieldElement.classList.remove(\"start-game-field\")\r\n            ;(0,_first_game_field_js__WEBPACK_IMPORTED_MODULE_1__.mineGameField)({ difficultLevel })\r\n        }\r\n    })\r\n}\r\n\r\nstartGame()\r\n\n\n//# sourceURL=webpack://mind_games/./main.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/stylelint-scss/src/index.js!./style.scss */ \"./node_modules/stylelint-scss/src/index.js!./style.scss\");\n/* harmony import */ var _node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_stylelint_scss_src_index_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);\n\n\n//# sourceURL=webpack://mind_games/./style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mind_games/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mind_games/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mind_games/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mind_games/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mind_games/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mind_games/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/stylelint-scss/src/index.js!./style.scss":
/*!***************************************************************!*\
  !*** ./node_modules/stylelint-scss/src/index.js!./style.scss ***!
  \***************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/stylelint-scss/src/index.js):\\nLoaderRunnerError: Module 'C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\stylelint-scss\\\\src\\\\index.js' is not a loader (must have normal or pitch function)\\n    at handleResult (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:49:19)\\n    at loadLoader (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:35:10)\\n    at iteratePitchingLoaders (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:182:2)\\n    at runLoaders (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:825:3)\\n    at NormalModule.build (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:969:15)\\n    at C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1377:12\\n    at NormalModule.needBuild (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:1257:32)\\n    at Compilation._buildModule (C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1358:10)\\n    at C:\\\\Users\\\\amkarmanov\\\\Desktop\\\\Game_card_repoz\\\\mind_games\\\\node_modules\\\\webpack\\\\lib\\\\util\\\\AsyncQueue.js:305:10\");\n\n//# sourceURL=webpack://mind_games/./style.scss?./node_modules/stylelint-scss/src/index.js");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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