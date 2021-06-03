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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// alert(\"Hello world\");\n\n//# sourceURL=webpack://blooming-game/./index.js?");

/***/ }),

/***/ "./js/classes/Asset.js":
/*!*****************************!*\
  !*** ./js/classes/Asset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Asset)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* owner: Player, type = {Real Estate/Business, Stocks/Funds}, owner may be null */\nvar Asset = function Asset(name, type, description, cost, owner) {\n  _classCallCheck(this, Asset);\n\n  this.name = name;\n  this.type = type;\n  this.description = description;\n  this.cost = cost;\n  this.owner = owner;\n};\n\n\n\n//# sourceURL=webpack://blooming-game/./js/classes/Asset.js?");

/***/ }),

/***/ "./js/classes/Card.js":
/*!****************************!*\
  !*** ./js/classes/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Opportunity\": () => (/* binding */ Opportunity),\n/* harmony export */   \"Market\": () => (/* binding */ Market),\n/* harmony export */   \"Doodad\": () => (/* binding */ Doodad),\n/* harmony export */   \"Profession\": () => (/* binding */ Profession),\n/* harmony export */   \"Congratulations\": () => (/* binding */ Congratulations),\n/* harmony export */   \"Editor\": () => (/* binding */ Editor)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* Contient la definition des cartes. Market card, Doodad, Opportunity(SmallDeal, BigDeal) */\n\n/* Profession card, Congratulations, Editor */\nvar Card = function Card(type) {\n  _classCallCheck(this, Card);\n\n  // le type de carte ex Market, Doodad, Opportunity, Profession, Congratulations, Editor, etc..\n  this.type = type;\n};\n/* dealType = {small, big}, asset: Asset */\n\n\nvar Opportunity = /*#__PURE__*/function (_Card) {\n  _inherits(Opportunity, _Card);\n\n  var _super = _createSuper(Opportunity);\n\n  function Opportunity(dealType, cost, asset) {\n    var _this;\n\n    _classCallCheck(this, Opportunity);\n\n    _this = _super.call(this, \"opportunity\");\n    _this.dealType = dealType;\n    _this.cost = cost;\n    _this.asset = asset;\n    return _this;\n  }\n\n  return Opportunity;\n}(Card);\nvar Market = /*#__PURE__*/function (_Card2) {\n  _inherits(Market, _Card2);\n\n  var _super2 = _createSuper(Market);\n\n  function Market(asset) {\n    var _this2;\n\n    _classCallCheck(this, Market);\n\n    _this2 = _super2.call(this, \"market\");\n    _this2.asset = asset;\n    return _this2;\n  }\n\n  return Market;\n}(Card);\n/* description may be null */\n\nvar Doodad = /*#__PURE__*/function (_Card3) {\n  _inherits(Doodad, _Card3);\n\n  var _super3 = _createSuper(Doodad);\n\n  function Doodad(name, cost, description) {\n    var _this3;\n\n    _classCallCheck(this, Doodad);\n\n    _this3 = _super3.call(this, \"doodad\");\n    _this3.name = name;\n    _this3.cost = cost;\n    _this3.description = description;\n    return _this3;\n  }\n\n  return Doodad;\n}(Card);\nvar Profession = /*#__PURE__*/function (_Card4) {\n  _inherits(Profession, _Card4);\n\n  var _super4 = _createSuper(Profession);\n\n  function Profession(name, monthlySalary) {\n    var _this4;\n\n    _classCallCheck(this, Profession);\n\n    _this4 = _super4.call(this, \"profession\");\n    _this4.name = name;\n    _this4.monthlySalary = monthlySalary;\n    return _this4;\n  }\n\n  return Profession;\n}(Card);\nvar Congratulations = /*#__PURE__*/function (_Card5) {\n  _inherits(Congratulations, _Card5);\n\n  var _super5 = _createSuper(Congratulations);\n\n  function Congratulations() {\n    _classCallCheck(this, Congratulations);\n\n    return _super5.call(this, \"congratulations\");\n  }\n\n  return Congratulations;\n}(Card);\nvar Editor = /*#__PURE__*/function (_Card6) {\n  _inherits(Editor, _Card6);\n\n  var _super6 = _createSuper(Editor);\n\n  function Editor() {\n    _classCallCheck(this, Editor);\n\n    return _super6.call(this, \"editor\");\n  }\n\n  return Editor;\n}(Card);\n\n//# sourceURL=webpack://blooming-game/./js/classes/Card.js?");

/***/ }),

/***/ "./js/classes/Party.js":
/*!*****************************!*\
  !*** ./js/classes/Party.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Party)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n  * duration: game length in minutes, max is 2hours(120mins)\n */\nvar Party = function Party(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime) {\n  _classCallCheck(this, Party);\n\n  this.maxNumOfChildren = maxNumOfChildren;\n  this.maxSmallDealAmt = maxSmallDealAmt;\n  this.minBigDealAmt = minBigDealAmt;\n  this.loanInterestPercent = loanInterestPercent;\n  this.duration = duration;\n  this.startTime = startTime;\n  this.dreams = [];\n  this.players = [];\n  this.assets = [];\n  this.expenses = [];\n  this.professions = [];\n} // get remainingTime() {\n//\n// }\n;\n\n\n\n//# sourceURL=webpack://blooming-game/./js/classes/Party.js?");

/***/ }),

/***/ "./js/classes/Player.js":
/*!******************************!*\
  !*** ./js/classes/Player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SAVINGS_AMT = 10000;\n\nvar Player = // monthlyCashFlow is also the player's paycheck\nfunction Player(name, profession, monthlyCashFlow) {\n  _classCallCheck(this, Player);\n\n  this.name = name;\n  this.profession = profession;\n  this.cash = monthlyCashFlow + SAVINGS_AMT;\n  this.assets = [];\n  this.expenses = [];\n};\n\n\n\n//# sourceURL=webpack://blooming-game/./js/classes/Player.js?");

/***/ }),

/***/ "./js/event-handlers.js":
/*!******************************!*\
  !*** ./js/event-handlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onChangeSmallDealAmt\": () => (/* binding */ onChangeSmallDealAmt),\n/* harmony export */   \"onClickPlayerSelectOption\": () => (/* binding */ onClickPlayerSelectOption),\n/* harmony export */   \"onClickStartButton\": () => (/* binding */ onClickStartButton),\n/* harmony export */   \"onChangeDream\": () => (/* binding */ onChangeDream),\n/* harmony export */   \"onChooseDream\": () => (/* binding */ onChooseDream)\n/* harmony export */ });\n/* harmony import */ var _classes_Party__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Party */ \"./js/classes/Party.js\");\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player */ \"./js/classes/Player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n/* evoquee lorsque la valeur du montant max de small deal est modifiee */\n\nfunction onChangeSmallDealAmt(event) {\n  var newMinBigDealAmt = 10 * parseInt(event.target.value);\n  var bigDealInput = document.querySelector(\".js-big-deal-setup__input\");\n  bigDealInput.min = newMinBigDealAmt;\n  bigDealInput.value = newMinBigDealAmt;\n}\n/* evoquee lorsque une option pour choisir le nombre de joueurs est clickee */\n\nfunction onClickPlayerSelectOption(event) {\n  var newNumOfPlayers = parseInt(event.target.value);\n  var playersTable = document.querySelector(\".js-players-table\");\n  var oldNumOfPlayers = 0;\n\n  var _iterator = _createForOfIteratorHelper(playersTable.children),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _player = _step.value;\n      var styles = window.getComputedStyle(_player);\n      if (styles.getPropertyValue(\"display\") === \"block\") oldNumOfPlayers++;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  if (oldNumOfPlayers === newNumOfPlayers) {\n    return;\n  } else if (newNumOfPlayers > oldNumOfPlayers) {\n    for (var i = 2; i <= newNumOfPlayers; i++) {\n      var player = document.querySelector(\".js-player-\".concat(i, \"-setup\"));\n      player.style.display = \"block\";\n    } // ou tout simplement else{...}\n\n  } else if (oldNumOfPlayers > newNumOfPlayers) {\n    for (var _i = oldNumOfPlayers; _i > newNumOfPlayers; _i--) {\n      // i-1 car l'indice va de 0 a length-1\n      playersTable.children[_i - 1].style.display = \"none\";\n    }\n  }\n}\n/* evoquee lorsque le bouton Commencer est clicke' (quand le formulaire est soumi) */\n\nfunction onClickStartButton(event) {\n  var form = document.forms[\"gameSetup\"];\n\n  var _iterator2 = _createForOfIteratorHelper(form.elements),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var input = _step2.value;\n\n      if (input.value === \"\") {\n        return false;\n      } // ajouter les conditions aux autres elements du formulaire\n      // ...\n\n    } // pour ne pas soumettre le formulaire et recharger la page\n\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  event.preventDefault();\n  var setupWrapper = document.querySelector(\".js-setup-forms-wrapper\");\n  setupWrapper.style.display = \"none\"; // Party(maxNumOfChildren, maxSmallDealAmt, minLargeDealAmt, loanInterestPercent, duration, startTime)\n  // obj: { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime };\n\n  var players = [];\n  var obj = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getPartyConstructorVals)();\n  var playerInputs = document.querySelectorAll(\".js-players-table__input\");\n\n  var _iterator3 = _createForOfIteratorHelper(playerInputs),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var _input = _step3.value;\n      var profession = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.randomProfession)(); // Player(name, profession, monthlyCashFlow)\n\n      players.push(new _classes_Player__WEBPACK_IMPORTED_MODULE_1__.default(_input.value, profession, profession.monthlySalary));\n    } // TODO: loop through players and display each choose dream form\n    //...\n\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  var gameBoard = document.querySelector('.js-game-board');\n  gameBoard.style.display = 'block';\n  var page = document.querySelector('.page');\n  page.style.background = 'aliceblue';\n  document.querySelector('.player-sheet').style.display = 'block';\n  /*\n  // let party = new Party(\n  //   obj.maxNumOfChildren,\n  //   obj.maxSmallDealAmt,\n  //   obj.minBigDealAmt,\n  //   obj.loanInterestPercent,\n  //   obj.duration,\n  //   obj.startTime\n  // );\n  // party.players = players;\n  // party.assets = assets;\n  // party.dreams = dreams;\n  */\n}\n/* ajouter l'evenement a effectuer lorsqu'un joueur choisir un autre reve (en parcourant les reves) */\n\nfunction onChangeDream() {\n  var position = 0;\n  document.querySelector(\".js-choose-dream-form__arrow--left\").addEventListener('click', function (e) {\n    position <= 0 ? position = _utils__WEBPACK_IMPORTED_MODULE_2__.DREAMS.length - 1 : position -= 1;\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDream)(_utils__WEBPACK_IMPORTED_MODULE_2__.DREAMS[position]);\n  });\n  document.querySelector(\".js-choose-dream-form__arrow--right\").addEventListener('click', function (e) {\n    position >= _utils__WEBPACK_IMPORTED_MODULE_2__.DREAMS.length - 1 ? position = 0 : position += 1;\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createDream)(_utils__WEBPACK_IMPORTED_MODULE_2__.DREAMS[position]);\n  });\n}\n/* lorsqu'un joueur choisit un reve */\n\nfunction onChooseDream(event) {\n  event.preventDefault();\n  var form = event.target;\n  console.log(form); // add player dream info to Party\n\n  form.style.display = \"none\";\n}\n\n//# sourceURL=webpack://blooming-game/./js/event-handlers.js?");

/***/ }),

/***/ "./js/pre-init.js":
/*!************************!*\
  !*** ./js/pre-init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Card */ \"./js/classes/Card.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\n/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-handlers */ \"./js/event-handlers.js\");\n\n\n\n\n(function () {\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateAssets)();\n  var smallDealInput = document.querySelector('.js-small-deal-setup__input');\n  smallDealInput.addEventListener('change', _event_handlers__WEBPACK_IMPORTED_MODULE_2__.onChangeSmallDealAmt);\n  var playerSelectOptions = document.querySelectorAll(\".js-player-select__option\");\n\n  for (var i = 0; i < playerSelectOptions.length; i++) {\n    var option = playerSelectOptions[i];\n    option.addEventListener(\"click\", _event_handlers__WEBPACK_IMPORTED_MODULE_2__.onClickPlayerSelectOption);\n  }\n\n  var gameSetupForm = document.querySelector('.js-game-setup-form');\n  gameSetupForm.addEventListener('submit', _event_handlers__WEBPACK_IMPORTED_MODULE_2__.onClickStartButton);\n  var chooseDreamForms = document.querySelectorAll('.js-choose-dream-form');\n\n  for (var _i = 0; _i < chooseDreamForms.length; _i++) {\n    chooseDreamForms[_i].addEventListener('submit', _event_handlers__WEBPACK_IMPORTED_MODULE_2__.onChooseDream);\n  } // inserer le reve initial dans le html\n\n\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDream)(_utils__WEBPACK_IMPORTED_MODULE_1__.DREAMS[0]); // ajouter l'evenement a effectuer lorsqu'un joueur parcour les reves\n\n  (0,_event_handlers__WEBPACK_IMPORTED_MODULE_2__.onChangeDream)(); // initialiser tous les tooltips de bootstrap\n\n  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'));\n  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\n    return new bootstrap.Tooltip(tooltipTriggerEl);\n  });\n})();\n\n//# sourceURL=webpack://blooming-game/./js/pre-init.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SAVINGS_AMT\": () => (/* binding */ SAVINGS_AMT),\n/* harmony export */   \"numPlayers\": () => (/* binding */ numPlayers),\n/* harmony export */   \"BUSINESS_INVESTMENTS\": () => (/* binding */ BUSINESS_INVESTMENTS),\n/* harmony export */   \"DREAMS\": () => (/* binding */ DREAMS),\n/* harmony export */   \"randomProfession\": () => (/* binding */ randomProfession),\n/* harmony export */   \"createDream\": () => (/* binding */ createDream),\n/* harmony export */   \"generateAssets\": () => (/* binding */ generateAssets),\n/* harmony export */   \"getPartyConstructorVals\": () => (/* binding */ getPartyConstructorVals)\n/* harmony export */ });\n/* harmony import */ var _classes_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Card */ \"./js/classes/Card.js\");\n/* harmony import */ var _classes_Asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Asset */ \"./js/classes/Asset.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** Contient les constantes importantes et fonctions d'utilites */\n\n\nvar PROFESSIONS_AND_SALARIES = {\n  'Docteur': 500000,\n  'Ingenieur': 400000,\n  'Enseignant': 300000,\n  'Infirmier': 50000,\n  'Policier': 60000\n};\nvar SAVINGS_AMT = 10000;\n/* retourne le nombre de joueurs de la partie */\n\nfunction numPlayers() {// TODO: implement\n} // les investissements de la partie Fast Track\n\nvar BUSINESS_INVESTMENTS = [{\n  title: 'business 1',\n  bought: false,\n  downPayment: 100000,\n  // the cost of the investment\n  description: 'This is the first business'\n}, {\n  title: 'business 2',\n  bought: false,\n  downPayment: 200000,\n  description: 'This is the first business'\n}, {\n  title: 'business 3',\n  bought: false,\n  downPayment: 300000,\n  description: 'This is the first business'\n}]; // certains reves\n\nvar DREAMS = [{\n  name: 'dream one',\n  description: 'this is the first dream',\n  cost: 10,\n  buyers: [] // liste des joueurs qui ont achete ce reve\n\n}, {\n  name: 'dream two',\n  description: 'this is the second dream',\n  cost: 20,\n  buyers: []\n}, {\n  name: 'dream three',\n  description: 'this is the third dream',\n  cost: 30,\n  buyers: []\n}, {\n  name: 'dream four',\n  description: 'this is the fourth dream',\n  cost: 40,\n  buyers: []\n}];\n/* retourne un tableau des instances de Profession disponible */\n\nfunction getProfessions() {\n  var professionsList = [];\n\n  for (var entry in PROFESSIONS_AND_SALARIES) {\n    professionsList.push(new _classes_Card__WEBPACK_IMPORTED_MODULE_0__.Profession(entry, PROFESSIONS_AND_SALARIES[entry]));\n  }\n\n  return professionsList;\n}\n/* retourne un metier aleatoire de a liste des metiers */\n\n\nfunction randomProfession() {\n  var professions = getProfessions(),\n      n = professions.length;\n  return professions[Math.floor(Math.random() * n)];\n}\n/* pour creer un reve (l'inserer dans le html) */\n\nfunction createDream(dream) {\n  var dreamContent = document.querySelector(\".dream-block\");\n  dreamContent.innerHTML = \"<p class=\\\"dream-title\\\">\".concat(dream.name, \"</p>\\n                            <p class=\\\"dream-description\\\">\").concat(dream.description, \"</p>\");\n}\n/* Generer la liste des atouts disponible */\n\nfunction generateAssets() {\n  // initialement, il y a un asset dans div.assets-list (voir html)\n  var assetsList = document.querySelector('.js-assets-list');\n  var ASSET_TYPES = ['Small real estate', 'Big real estate', \"Short-term investments\", \"Cash\", 'Stocks', \"Mutuals\", \"Cars & Trucks\", \"Inventory\"]; // HTML Structure\n\n  /* <div class=\"form-check\">\n    <label>\n      <span class=\"form-check-label\">nomAtout</span>\n      <input class=\"form-check-input\" type=\"checkbox\">\n    </label>\n  </div>\n  */\n\n  for (var _i = 0, _ASSET_TYPES = ASSET_TYPES; _i < _ASSET_TYPES.length; _i++) {\n    var assetName = _ASSET_TYPES[_i];\n    var div = document.createElement('div');\n    div.classList.add('form-check');\n    var label = document.createElement('label');\n    var span = document.createElement('span');\n    span.classList.add('form-check-label'); // classe bootstrap\n\n    span.textContent = assetName;\n    label.appendChild(span);\n    var input = document.createElement('input');\n    input.type = \"checkbox\";\n    input.classList.add('form-check-input'); // classe bootstrap\n\n    label.appendChild(input);\n    div.appendChild(label);\n    assetsList.append(div);\n  }\n}\n/* retourner les valeurs pour instancier la partie */\n\nfunction getPartyConstructorVals() {\n  // Party(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime)\n  var maxNumOfChildren = parseInt(document.querySelector('.js-children-number-setup__input').value);\n  var maxSmallDealAmt = parseInt(document.querySelector('.js-small-deal-setup__input').value);\n  var minBigDealAmt = parseInt(document.querySelector('.js-big-deal-setup__input').value);\n  var loanInterestPercent = parseInt(document.querySelector('.js-loan-interest-percent-setup__input').value);\n  var durationInputs = document.getElementsByClassName('js-duration-setup__input');\n  var duration;\n\n  var _iterator = _createForOfIteratorHelper(durationInputs),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var input = _step.value;\n\n      // au moins un input sera coche'\n      if (input.checked) {\n        duration = parseInt(input.value);\n        break;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var date = new Date();\n  var startTime = \"\".concat(date.getHours(), \":\").concat(date.getMinutes());\n  return {\n    maxNumOfChildren: maxNumOfChildren,\n    maxSmallDealAmt: maxSmallDealAmt,\n    minBigDealAmt: minBigDealAmt,\n    loanInterestPercent: loanInterestPercent,\n    duration: duration,\n    startTime: startTime\n  };\n}\n\n//# sourceURL=webpack://blooming-game/./js/utils.js?");

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
/******/ 	__webpack_require__("./index.js");
/******/ 	__webpack_require__("./js/pre-init.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/event-handlers.js");
/******/ 	
/******/ })()
;