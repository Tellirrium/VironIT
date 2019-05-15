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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/App */ \"./src/modules/App.js\");\n\nvar app = new _modules_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.addAtm();\napp.addAtm();\napp.start(app); // app.display();\n\nvar add = document.getElementsByClassName('addAtm')[0];\nvar remove = document.getElementsByClassName('removeAtm')[0];\nadd.addEventListener('click', function () {\n  return app.addAtm();\n});\nremove.addEventListener('click', function () {\n  return app.removeAtm();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Atm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Atm */ \"./src/modules/Atm.js\");\n/* harmony import */ var _AtmUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AtmUI */ \"./src/modules/AtmUI.js\");\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logger */ \"./src/modules/Logger.js\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Queue */ \"./src/modules/Queue.js\");\n/* harmony import */ var _QueueUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueueUI */ \"./src/modules/QueueUI.js\");\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Person */ \"./src/modules/Person.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_EventEmitor) {\n  _inherits(App, _EventEmitor);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.queue = new _Queue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    _this.logger = new _Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    _this.queueUI = new _QueueUI__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n    _this.queueUI.view();\n\n    _this.queue.on('queueCount', function () {\n      _this.infOfWork(); // this.queueUI.span.innerText = this.queue.countPeople;\n\n\n      _this.queueUI.viewCount(_this.queue.getCount());\n\n      _this.logger.viewQueue(_this.queue.getCount());\n    });\n\n    _this.atmTable = [];\n    _this.atmUITable = [];\n    _this.waitAtmTable = [];\n    _this.counter = -1;\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"generator\",\n    value: function generator(n, m) {\n      var _this2 = this;\n\n      setTimeout(function () {\n        _this2.queue.addPerson();\n\n        _this2.generator(n, m);\n      }, this.rand(n, m));\n    }\n  }, {\n    key: \"rand\",\n    value: function rand(n, m) {\n      return Math.floor(Math.random() * (m - n + 1) + n) * 1000;\n    }\n  }, {\n    key: \"addAtm\",\n    value: function addAtm() {\n      var _this3 = this;\n\n      this.counter++;\n      var atm = new _Atm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      var atmUI = new _AtmUI__WEBPACK_IMPORTED_MODULE_1__[\"default\"](atm);\n      atmUI.view(this.counter);\n      atm.on('free', function () {\n        return _this3.logger.atmFree();\n      });\n      atm.on('busy', function () {\n        return _this3.logger.atmBusy();\n      });\n      atm.on('free', function () {\n        var people = atm.countServedPeople;\n        setTimeout(function () {\n          if (people == atm.countServedPeople && atm.status == 'free' && atmUI.realDivOfAtm.className == 'free' && _this3.queue.getCount() == 0) {\n            _this3.atmTable = _this3.atmTable.filter(function (a) {\n              return a != atm;\n            }); // this.waitAtmTable = this.waitAtmTable.filter( a => a !== atm );\n\n            _this3.atmUITable = _this3.atmUITable.filter(function (a) {\n              return a != atmUI;\n            });\n            atmUI.deleteAtm();\n          }\n        }, 6000);\n      });\n      atm.on('free', function () {\n        _this3.waitAtmTable = _this3.waitAtmTable.filter(function (a) {\n          return a !== atm;\n        }); // console.log(this.waitAtmTable);\n\n        _this3.infOfWork();\n      });\n      atm.on('busy', function (time) {\n        setTimeout(function () {\n          atm.free();\n        }, time);\n      });\n      atm.free();\n      this.atmTable.push(atm);\n      this.atmUITable.push(atmUI);\n    }\n  }, {\n    key: \"removeAtm\",\n    value: function removeAtm() {\n      this.atmTable.pop();\n      var main = document.getElementById('content');\n\n      try {\n        main.removeChild(main.lastChild);\n      } catch (_unused) {}\n    }\n  }, {\n    key: \"infOfWork\",\n    value: function infOfWork() {\n      var _this4 = this;\n\n      var freeAtm = this.freeAtmFunc();\n      console.log(this.atmTable);\n      console.log(this.atmTable.filter(function (atm) {\n        return _this4.waitAtmTable.indexOf(atm) < 0;\n      }));\n\n      if (freeAtm && freeAtm.getStatus() === 'free' && this.queue.getCount() > 0) {\n        this.waitAtmTable.push(freeAtm);\n        var person = this.queue.removePerson();\n        console.log(person);\n        setTimeout(function () {\n          freeAtm.busy(person);\n        }, 1000);\n      } else if (!freeAtm && this.queue.getCount() > 0) {\n        console.log('All atms are busy');\n      }\n    }\n  }, {\n    key: \"start\",\n    value: function start(app) {\n      app.generator(1, 3);\n    }\n  }, {\n    key: \"freeAtmFunc\",\n    value: function freeAtmFunc() {\n      var _this5 = this;\n\n      return this.atmTable.filter(function (atm) {\n        return _this5.waitAtmTable.indexOf(atm) < 0;\n      }).find(function (atm) {\n        return atm.status === 'free';\n      });\n    }\n  }]);\n\n  return App;\n}(_EventEmitor__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/App.js?");

/***/ }),

/***/ "./src/modules/Atm.js":
/*!****************************!*\
  !*** ./src/modules/Atm.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Atm; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Atm =\n/*#__PURE__*/\nfunction (_EventEmitor) {\n  _inherits(Atm, _EventEmitor);\n\n  function Atm() {\n    var _this;\n\n    _classCallCheck(this, Atm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Atm).call(this));\n    _this.status = 'free';\n    _this.countServedPeople = 0;\n    return _this;\n  }\n\n  _createClass(Atm, [{\n    key: \"getStatus\",\n    value: function getStatus() {\n      return this.status;\n    }\n  }, {\n    key: \"busy\",\n    value: function busy(person) {\n      this.countServedPeople++;\n      this.status = 'busy';\n      var time = person.randTime;\n      this.emit('busy', time);\n    }\n  }, {\n    key: \"free\",\n    value: function free() {\n      this.status = 'free';\n      this.emit('free');\n    }\n  }]);\n\n  return Atm;\n}(_EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/Atm.js?");

/***/ }),

/***/ "./src/modules/AtmUI.js":
/*!******************************!*\
  !*** ./src/modules/AtmUI.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AtmUI; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar AtmUI =\n/*#__PURE__*/\nfunction (_EventEmitor) {\n  _inherits(AtmUI, _EventEmitor);\n\n  function AtmUI(atm) {\n    var _this;\n\n    _classCallCheck(this, AtmUI);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AtmUI).call(this));\n    _this.realDivOfAtm = null;\n    atm.on('busy', function () {\n      return _this.setBusy();\n    });\n    atm.on('free', function () {\n      return _this.setFree();\n    });\n    return _this;\n  }\n\n  _createClass(AtmUI, [{\n    key: \"view\",\n    value: function view(counter) {\n      var mainDiv = document.getElementById('content');\n      var divOfAtm = document.createElement('div');\n      divOfAtm.setAttribute('id', \"atm\".concat(counter + 1));\n      divOfAtm.setAttribute('class', 'free');\n      this.realDivOfAtm = divOfAtm;\n\n      if (mainDiv) {\n        mainDiv.appendChild(this.realDivOfAtm);\n      }\n    }\n  }, {\n    key: \"setFree\",\n    value: function setFree() {\n      this.realDivOfAtm.setAttribute('class', 'free');\n    }\n  }, {\n    key: \"setBusy\",\n    value: function setBusy() {\n      this.realDivOfAtm.setAttribute('class', 'busy');\n    }\n  }, {\n    key: \"deleteAtm\",\n    value: function deleteAtm() {\n      var mainDiv = document.getElementById('content');\n\n      if (mainDiv) {\n        var elements = [].slice.call(mainDiv.children);\n\n        if (elements.indexOf(this.realDivOfAtm) != -1 && this.realDivOfAtm.className == 'free') {\n          mainDiv.removeChild(this.realDivOfAtm);\n          this.clear();\n        }\n      }\n    }\n  }]);\n\n  return AtmUI;\n}(_EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/AtmUI.js?");

/***/ }),

/***/ "./src/modules/EventEmitor.js":
/*!************************************!*\
  !*** ./src/modules/EventEmitor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitor; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventEmitor =\n/*#__PURE__*/\nfunction () {\n  function EventEmitor() {\n    _classCallCheck(this, EventEmitor);\n\n    this.eventTable = {};\n  }\n\n  _createClass(EventEmitor, [{\n    key: \"on\",\n    value: function on(eventName, handler) {\n      var _this = this;\n\n      if (!this.eventTable[eventName]) {\n        this.eventTable[eventName] = [];\n      }\n\n      this.eventTable[eventName].push(handler);\n      return function () {\n        return _this.eventTable[eventName].splice(_this.eventTable[eventName].indexOf(handler), 1);\n      };\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(eventName) {\n      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        params[_key - 1] = arguments[_key];\n      }\n\n      var event = this.eventTable[eventName];\n\n      if (event) {\n        this.eventTable[eventName].forEach(function (elem) {\n          return elem.apply(null, params);\n        });\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      var arrayEvent = Object.keys(this.eventTable);\n\n      for (var i = 0; i < arrayEvent.length; i += 1) {\n        this.eventTable[arrayEvent[i]] = null;\n        delete this.eventTable[arrayEvent[i]];\n      }\n    }\n  }]);\n\n  return EventEmitor;\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/EventEmitor.js?");

/***/ }),

/***/ "./src/modules/Logger.js":
/*!*******************************!*\
  !*** ./src/modules/Logger.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logger; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger() {\n    _classCallCheck(this, Logger);\n  }\n\n  _createClass(Logger, [{\n    key: \"viewQueue\",\n    value: function viewQueue(count) {\n      console.log(\"counter \".concat(count));\n    }\n  }, {\n    key: \"atmFree\",\n    value: function atmFree() {\n      console.log(\"Atm is free\");\n    }\n  }, {\n    key: \"atmBusy\",\n    value: function atmBusy() {\n      console.log(\"Atm is busy\");\n    }\n  }]);\n\n  return Logger;\n}();\n\n\n\n//# sourceURL=webpack:///./src/modules/Logger.js?");

/***/ }),

/***/ "./src/modules/Person.js":
/*!*******************************!*\
  !*** ./src/modules/Person.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Person = function Person() {\n  _classCallCheck(this, Person);\n\n  this.randTime = Math.floor(Math.random() * (9000 - 3000 + 1) + 3000);\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/Person.js?");

/***/ }),

/***/ "./src/modules/Queue.js":
/*!******************************!*\
  !*** ./src/modules/Queue.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Person */ \"./src/modules/Person.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Queue =\n/*#__PURE__*/\nfunction (_EventEmitor) {\n  _inherits(Queue, _EventEmitor);\n\n  function Queue() {\n    var _this;\n\n    _classCallCheck(this, Queue);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Queue).call(this));\n    _this.countPeople = [];\n    return _this;\n  }\n\n  _createClass(Queue, [{\n    key: \"addPerson\",\n    value: function addPerson() {\n      var person = new _Person__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      this.countPeople.push(person);\n      this.emit('queueCount', this.countPeople.length);\n    }\n  }, {\n    key: \"removePerson\",\n    value: function removePerson() {\n      var remPer;\n\n      if (this.countPeople.length != 0) {\n        remPer = this.countPeople.shift();\n      }\n\n      this.emit('queueCount', this.countPeople.length);\n      return remPer;\n    }\n  }, {\n    key: \"getCount\",\n    value: function getCount() {\n      return this.countPeople.length;\n    }\n  }]);\n\n  return Queue;\n}(_EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/Queue.js?");

/***/ }),

/***/ "./src/modules/QueueUI.js":
/*!********************************!*\
  !*** ./src/modules/QueueUI.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QueueUI; });\n/* harmony import */ var _EventEmitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitor */ \"./src/modules/EventEmitor.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar QueueUI =\n/*#__PURE__*/\nfunction (_EventEmitor) {\n  _inherits(QueueUI, _EventEmitor);\n\n  function QueueUI() {\n    var _this;\n\n    _classCallCheck(this, QueueUI);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(QueueUI).call(this));\n    _this.span = null;\n    return _this;\n  }\n\n  _createClass(QueueUI, [{\n    key: \"view\",\n    value: function view() {\n      var mainDiv = document.getElementById('divOfQueue') || document.createElement('div');\n      var divOfQueue = document.createElement('div');\n      mainDiv.appendChild(divOfQueue);\n      var realDivOfQueue = mainDiv.getElementsByTagName('div')[0];\n      realDivOfQueue.setAttribute('id', 'queue');\n      realDivOfQueue.innerHTML = '<span></span>';\n      var counter = realDivOfQueue.getElementsByTagName('span')[0];\n      this.span = counter;\n      this.span.setAttribute('id', 'queueCount');\n    }\n  }, {\n    key: \"viewCount\",\n    value: function viewCount(length) {\n      this.span.innerText = length;\n    }\n  }]);\n\n  return QueueUI;\n}(_EventEmitor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/QueueUI.js?");

/***/ })

/******/ });