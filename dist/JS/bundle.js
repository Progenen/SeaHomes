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

eval("class MinModalJS {\n\n    modalOpen () {\n        this.modal.classList.add('min-modal-js-active');\n        document.querySelector(\"html\").classList.add('lock');\n    }\n\n    modalClose () {\n        this.modal.classList.remove('min-modal-js-active');\n        document.querySelector(\"html\").classList.remove('lock');\n    }\n\n    modalDestroy() {\n        this.modal.remove();\n    }\n\n    constructor(inner, obj) {\n        if (obj.keyOpen === undefined) {\n            obj.keyOpen = 'Escape';\n        }\n\n        this.btns = document.querySelectorAll(obj.buttonsActive);\n        this.inner = document.querySelector(inner);\n        this.closeBtns = document.querySelectorAll(obj.buttonsDisActive);\n        this.keyOpen = obj.keyOpen;\n        this.modalOutsideClick = obj.modalOutsideClick;\n        this.modal = document.createElement('div');\n        this.modal.classList.add('modal-wrapper');\n\n        let modalOpen = () => {\n            this.modalOpen();\n        };\n        let modalClose = () => {\n            this.modalClose();\n        };\n\n        this.modal.append(this.inner);\n        document.body.append(this.modal);\n        \n        this.btns.forEach(element => {\n            element.addEventListener('click', (e) =>{\n                e.preventDefault();\n                modalOpen();\n            });\n        });\n\n        this.closeBtns.forEach(element => {\n            element.addEventListener('click', (e) =>{\n                e.preventDefault();\n                modalClose();\n            });\n        });\n\n        if (this.modalOutsideClick != false) {\n            this.modal.addEventListener('click', (e) => {\n                if (e.target === this.modal) {\n                    modalClose();\n                }\n            });\n        }\n\n        if (this.key != false) {\n            document.addEventListener('keydown', (e)=> {\n                if (e.key === this.keyOpen) { \n                    modalClose();\n                }\n            });\n        }\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const burger = document.querySelector(\".header__burger\");\n    const menu = document.querySelector(\".header__menu\");\n    const mobMenu = document.querySelector(\".mobmenu\");\n    const headerPhone = document.querySelector(\".header__contacts-item--phone\")\n    const header = document.querySelector(\"header\");\n    const dataTabParent = document.querySelectorAll(\"[data-tab-parent]\");\n    const contactsMapAdapt = document.querySelector(\".contacts__map-adapt\");\n    const contactsMap = document.querySelector(\".contacts__map\");\n    const callModal = new MinModalJS('.modal-call', {\n        buttonsActive: \".modal-call-open\",\n        buttonsDisActive: '.modal-call-close',\n        modalOutsideClick: true,\n    });\n\n    callModal.modalOpen();\n\n    dataTabParent.forEach((el, i) => {\n        const dataTabTitles = el.querySelectorAll(\"[data-tab-title]\");\n        const dataTabContents = el.querySelectorAll(\"[data-tab-content]\");\n\n        console.log(\"ok!\");\n        \n        dataTabTitles.forEach((el2, j) => {\n            console.log(\"ok!\");\n            el2.addEventListener(\"click\", (e) => {\n                if (el.classList.contains(\"active\") === true) {\n                    el2.classList.remove(\"active\");\n                    dataTabContents[j].classList.remove(\"active\");\n                } else {\n                    dataTabTitles.forEach((el3, d) => {\n                        el3.classList.remove(\"active\");\n                        dataTabContents[d].classList.remove(\"active\");\n                    })\n                    el2.classList.add(\"active\");\n                    dataTabContents[j].classList.add(\"active\");\n                }\n            })\n        })\n    });\n\n    if (window.innerWidth <= 992) {\n        mobMenu.append(menu);\n        mobMenu.style.paddingTop = header.getBoundingClientRect().height + \"px\";\n        burger.addEventListener(\"click\", () => {\n            burger.classList.toggle(\"active\");\n            mobMenu.classList.toggle(\"active\");\n            document.body.classList.toggle(\"lock\");\n        });\n\n        contactsMapAdapt.append(contactsMap);\n    }\n\n    if (window.innerWidth <= 768) {\n        mobMenu.append(headerPhone);\n    }\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

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