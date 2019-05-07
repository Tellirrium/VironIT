/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/App */ \"./src/modules/App.js\");\n\r\n\r\n\r\nlet app = new _modules_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\napp.addAtm();\r\napp.addAtm();\r\napp.start(app);\r\napp.display();\r\n\r\nconst add = document.getElementsByClassName('addAtm')[0];\r\n\r\nadd.addEventListener( 'click', () => app.addAtm() );\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Atm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Atm */ \"./src/modules/Atm.js\");\n/* harmony import */ var _AtmUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AtmUI */ \"./src/modules/AtmUI.js\");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logger */ \"./src/modules/Logger.js\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Queue */ \"./src/modules/Queue.js\");\n/* harmony import */ var _QueueUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueueUI */ \"./src/modules/QueueUI.js\");\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass App extends _EventEmitor__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.queue = new _Queue__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\t\tthis.queue.on('queueCount', () => {\r\n\t\t\tthis.infOfWork();\r\n\t\t\t// this.queueUI.span.innerText = this.queue.countPeople;\r\n\t\t\tthis.queueUI.viewCount(this.queue.countPeople);\r\n\t\t});\r\n\t\tthis.atmTable = [];\r\n\t\tthis.atmUITable = [];\r\n\t\tthis.waitAtmTable = [];\r\n\t\tthis.logger = new _Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\t\tthis.counter = -1;\r\n\t\tthis.queueUI = new _QueueUI__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n\t\tthis.queueUI.view();\r\n\t}\r\n\tdisplay() {\r\n\t\tthis.queue.on('queueCount', () => this.logger.viewQueue(this.queue.getCount()));\r\n\t\t// this.atmTable.forEach( elem => elem.on('busy', () => this.logger.atmBusy()) );\r\n\t\t// this.atmTable.forEach( elem => elem.on('free', () => this.logger.atmFree()) );\r\n\t}\r\n\tgenerator(n, m) {\r\n\t\tsetTimeout(() => {\r\n\t\t\tthis.queue.addPerson();\r\n\t\t\tthis.generator(n, m);\r\n\t\t}, this.rand(n, m));\r\n\t}\r\n\trand(n, m) {\r\n\t\treturn (Math.floor(Math.random() * (m - n + 1) + n)) * 1000;\r\n\t}\r\n\t\r\n\taddAtm() {\r\n\t\tthis.counter++;\r\n\r\n\t\tconst atm = new _Atm__WEBPACK_IMPORTED_MODULE_0__[\"default\"](6000, 8000);\r\n\t\tconst atmUI = new _AtmUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"](atm);\r\n\t\t\r\n\t\tatmUI.view(this.counter);\r\n\r\n\t\tatm.on('free', () => this.logger.atmFree());\r\n\t\tatm.on('busy', () => this.logger.atmBusy());\r\n\r\n\t\tatm.on('free', () => {\r\n\t\t\tthis.waitAtmTable = this.waitAtmTable.filter( a => a !== atm );\r\n\t\t\tconsole.log(this.waitAtmTable);\r\n\t\t\tthis.infOfWork();\r\n\t\t});\r\n\t\tatm.on('busy', () => {\r\n\t\t  setTimeout(() => {\r\n\t\t\t  atm.free();\r\n\t\t  }, atm.rand() );\r\n\t\t});\r\n\r\n\t\tthis.atmTable.push(atm);\r\n\t\tthis.atmUITable.push(atmUI);\r\n\t  }\r\n\r\n\tinfOfWork () {\r\n\t\tlet freeAtm = this.freeAtmFunc();\r\n\t\tconsole.log(this.waitAtmTable);\r\n\t\t\tif (freeAtm && freeAtm.getStatus() === 'free' && this.queue.getCount() > 0) {\r\n\t\t\t\tthis.waitAtmTable.push(freeAtm);\r\n\t\t\t\tthis.queue.removePerson();\r\n\t\t\t\t// freeAtm.status = 'wait';\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tfreeAtm.busy();\r\n\t\t\t\t}, 1000);\r\n\t\t\t} else if (!freeAtm && this.queue.getCount() > 0) {\r\n\t\t\t\tconsole.log('All atms are busy');\r\n\t\t\t}\r\n\t}\r\n\r\n\tstart(app) {\r\n\t\t// this.queue.on('queueCount', () => {\r\n\t\t// \tthis.infOfWork();\r\n\t\t// \t// this.queueUI.span.innerText = this.queue.countPeople;\r\n\t\t// \tthis.queueUI.viewCount(this.queue.countPeople);\r\n\t\t// });\r\n\t\tapp.generator(1, 4);\r\n\t}\r\n\r\n\tfreeAtmFunc() {\r\n\t\treturn this.atmTable.filter(atm => this.waitAtmTable.indexOf(atm) < 0).find( (atm) => atm.status === 'free');\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack:///./src/modules/App.js?");

/***/ }),

/***/ "./src/modules/Atm.js":
/*!****************************!*\
  !*** ./src/modules/Atm.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Atm; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n\r\n\r\n\r\nclass Atm extends _EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor(x, y) {\r\n\t\tsuper();\r\n\t\tthis.status = 'free';\r\n\t\tthis.countServedPeople = 0;\r\n\t\tthis.x = x;\r\n\t\tthis.y = y;\r\n\t}\r\n\tgetStatus() {\r\n\t\treturn this.status;\r\n\t}\r\n\tbusy() {\r\n\t\tthis.countServedPeople++;\r\n\t\tthis.status = 'busy';\r\n\t\tthis.emit('busy', this.status);\r\n\t}\r\n\tfree() {\r\n\t\tthis.status = 'free';\r\n\t\tthis.emit('free', this.status);\r\n\t}\r\n\trand() {\r\n\t\treturn (Math.floor(Math.random() * (this.y - this.x + 1) + this.x));\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/modules/Atm.js?");

/***/ }),

/***/ "./src/modules/AtmUI.js":
/*!******************************!*\
  !*** ./src/modules/AtmUI.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AtmUI; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n\r\n\r\nclass AtmUI extends _EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor(atm) {\r\n\t\tsuper();\r\n\t\tthis.realDivOfAtm = null;\r\n\t\tatm.on('busy', () => this.setBusy());\r\n\t\tatm.on('free', () => this.setFree());\r\n\t}\r\n\tview(counter) {\r\n\t\t\tlet mainDiv = document.getElementById('content');\r\n\t\t\tlet divOfAtm = document.createElement('div');\r\n\t\t\t\r\n\r\n\t\t\tdivOfAtm.setAttribute('id', `atm${counter + 1}`);\r\n\t\t\tdivOfAtm.setAttribute('class', 'free');\r\n\r\n\t\t\tthis.realDivOfAtm = divOfAtm;\r\n\t\t\tmainDiv.appendChild(this.realDivOfAtm);\r\n\t}\r\n\tsetFree() {\r\n\t\tthis.realDivOfAtm.setAttribute('class', 'free');\r\n\t}\r\n\tsetBusy() {\r\n\t\tthis.realDivOfAtm.setAttribute('class', 'busy');\r\n\t}\t\t\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/AtmUI.js?");

/***/ }),

/***/ "./src/modules/EventEmitor.js":
/*!************************************!*\
  !*** ./src/modules/EventEmitor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitor; });\nclass EventEmitor {\r\n\tconstructor() {\r\n\t\tthis.eventTable = {};\r\n\t}\r\n\ton(eventName, handler) {\r\n\t\tif (!this.eventTable[eventName]) {\r\n\t\t\tthis.eventTable[eventName] = [];\r\n\t\t}\r\n\t\tthis.eventTable[eventName].push(handler);\r\n\t\treturn () => this.eventTable[eventName].splice(this.eventTable[eventName].indexOf(handler), 1);\r\n\t}\r\n\temit(eventName, ...params) {\r\n\t\tconst event = this.eventTable[eventName];\r\n\t\tif (event) {\r\n\t\t\tthis.eventTable[eventName].forEach(elem => elem.apply(null, params));\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/modules/EventEmitor.js?");

/***/ }),

/***/ "./src/modules/Logger.js":
/*!*******************************!*\
  !*** ./src/modules/Logger.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logger; });\nclass Logger {\r\n\tviewQueue(count) {\r\n\t\tconsole.log(`counter ${count}`);\r\n\t}\r\n\tatmFree() {\r\n\t\tconsole.log(`Atm is free`);\r\n\t}\r\n\tatmBusy() {\r\n\t\tconsole.log(`Atm is busy`);\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/modules/Logger.js?");

/***/ }),

/***/ "./src/modules/Queue.js":
/*!******************************!*\
  !*** ./src/modules/Queue.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n\r\n\r\n\r\nclass Queue extends _EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.countPeople = 0;\r\n\t}\r\n\taddPerson() {\r\n\t\tthis.countPeople++;\r\n\t\tthis.emit('queueCount', this.countPeople);\r\n\t}\r\n\tremovePerson() {\r\n\t\tif (this.countPeople != 0) {\r\n\t\t\tthis.countPeople--;\r\n\t\t}\r\n\t\tthis.emit('queueCount', this.countPeople);\r\n\t}\r\n\tgetCount() {\r\n\t\treturn this.countPeople;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/modules/Queue.js?");

/***/ }),

/***/ "./src/modules/QueueUI.js":
/*!********************************!*\
  !*** ./src/modules/QueueUI.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QueueUI; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n\r\n\r\nclass QueueUI extends _EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.span = null;\r\n\t}\r\n\tview() {\r\n\t\t\tconst mainDiv = document.getElementById('divOfQueue');\r\n\t\t\tconst divOfQueue = document.createElement('div');\r\n\r\n\t\t\tmainDiv.appendChild(divOfQueue);\r\n\r\n\t\t\tconst realDivOfQueue = mainDiv.getElementsByTagName('div')[0];\r\n\r\n\t\t\trealDivOfQueue.setAttribute('id', 'queue');\r\n\t\t\trealDivOfQueue.innerHTML = '<span></span>';\r\n\r\n\t\t\tlet counter = realDivOfQueue.getElementsByTagName('span')[0];\r\n\t\t\tthis.span = counter;\r\n\t\t\tthis.span.setAttribute('id', 'queueCount');\r\n\t}\r\n\tviewCount(counter) {\r\n\t\tthis.span.innerText = counter;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/modules/QueueUI.js?");

/***/ })

/******/ });