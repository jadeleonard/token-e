/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TokenUi"] = factory();
	else
		root["TokenUi"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button.ts":
/*!**********************************!*\
  !*** ./src/components/button.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Button = function Button(props) {\n  var button = document.createElement('button');\n  if (props[\"class\"]) button.className = props[\"class\"];\n  if (props.id) button.id = props.id;\n  if (props.name) button.name = props.name;\n  if (props.title) button.title = props.title;\n  if (props.textContent) button.textContent = props.textContent;\n  if (props.formnovalidate) button.formNoValidate = props.formnovalidate;\n  if (props.formaction) button.formAction = props.formaction;\n  if (props.formtarget) button.formTarget = props.formtarget;\n  if (props.style) button.style.cssText = props.style;\n  if (props.autofocus) button.autofocus = props.autofocus;\n  if (props.disabled) button.disabled = props.disabled;\n  if (props.type) button.type = props.type;\n  if (props.value) button.value = props.value;\n  return button;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://TokenUi/./src/components/button.ts?");

/***/ }),

/***/ "./src/components/input.ts":
/*!*********************************!*\
  !*** ./src/components/input.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Input = function Input(props) {\n  var input = document.createElement('input');\n  if (props.type) input.type = props.type;\n  if (props.name) input.name = props.name;\n  if (props.value !== undefined) input.value = String(props.value); // Ensure value is a string\n  if (props.id) input.id = props.id;\n  if (props[\"class\"]) input.className = props[\"class\"];\n  if (props.style) input.style.cssText = props.style;\n  if (props.title) input.title = props.title;\n  if (props.disabled) input.disabled = props.disabled;\n  if (props.readonly) input.readOnly = props.readonly;\n  if (props.placeholder) input.placeholder = props.placeholder;\n  if (props.maxlength) input.maxLength = props.maxlength;\n  if (props.minlength) input.minLength = props.minlength;\n  if (props.size) input.size = props.size;\n  if (props.autocomplete) input.autocomplete = props.autocomplete;\n  if (props.required) input.required = props.required;\n  if (props.pattern) input.pattern = props.pattern;\n  if (props.min !== undefined) input.min = String(props.min); // Ensure min is a string\n  if (props.max !== undefined) input.max = String(props.max); // Ensure max is a string\n  if (props.step !== undefined) input.step = String(props.step);\n  if (props.accept) input.accept = props.accept;\n  if (props.form) input.setAttribute('form', props.form); // Set form attribute\n  if (props.formaction) input.setAttribute('formaction', props.formaction);\n  if (props.formenctype) input.setAttribute('formenctype', props.formenctype);\n  if (props.formmethod) input.setAttribute('formmethod', props.formmethod);\n  if (props.formnovalidate) input.setAttribute('formnovalidate', props.formnovalidate.toString());\n  if (props.formtarget) input.setAttribute('formtarget', props.formtarget);\n  if (props.autofocus) input.autofocus = props.autofocus;\n  if (props.multiple) input.multiple = props.multiple;\n  if (props.capture) input.capture = props.capture;\n  return input;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://TokenUi/./src/components/input.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: () => (/* reexport safe */ _components_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Input: () => (/* reexport safe */ _components_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button */ \"./src/components/button.ts\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input */ \"./src/components/input.ts\");\n\n\n\n\n//# sourceURL=webpack://TokenUi/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});