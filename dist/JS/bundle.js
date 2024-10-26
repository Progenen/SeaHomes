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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n    const burger = document.querySelector(\".header__burger\");\n    const menu = document.querySelector(\".header__menu\");\n    const mobMenu = document.querySelector(\".mobmenu\");\n    const headerPhone = document.querySelector(\".header__contacts-item--phone\")\n    const header = document.querySelector(\"header\");\n    const dataTabParent = document.querySelectorAll(\"[data-tab-parent]\");\n\n    dataTabParent.forEach((el, i) => {\n        const dataTabTitles = el.querySelectorAll(\"[data-tab-title]\");\n        const dataTabContents = el.querySelectorAll(\"[data-tab-content]\");\n\n        console.log(\"ok!\");\n        \n        dataTabTitles.forEach((el2, j) => {\n            console.log(\"ok!\");\n            el2.addEventListener(\"click\", (e) => {\n                if (el.classList.contains(\"active\") === true) {\n                    el2.classList.remove(\"active\");\n                    dataTabContents[j].classList.remove(\"active\");\n                } else {\n                    dataTabTitles.forEach((el3, d) => {\n                        el3.classList.remove(\"active\");\n                        dataTabContents[d].classList.remove(\"active\");\n                    })\n                    el2.classList.add(\"active\");\n                    dataTabContents[j].classList.add(\"active\");\n                }\n            })\n        })\n    });\n\n    if (window.innerWidth <= 992) {\n        mobMenu.append(menu);\n        mobMenu.style.paddingTop = header.getBoundingClientRect().height + \"px\";\n        burger.addEventListener(\"click\", () => {\n            burger.classList.toggle(\"active\");\n            mobMenu.classList.toggle(\"active\");\n            document.body.classList.toggle(\"lock\");\n        });\n    }\n\n    if (window.innerWidth <= 768) {\n        mobMenu.append(headerPhone);\n    }\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;