(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../../handsontable"));
	else if(typeof define === 'function' && define.amd)
		define(["../../handsontable"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../../handsontable")) : factory(root["Handsontable"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Stefan Salzl
                                                                                                                                                                                                                   * Last updated: Jan 08, 2018
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for German - Switzerland language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'de-CH'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Zeile einf??gen oberhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Zeile einf??gen unterhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Spalte einf??gen links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Spalte einf??gen rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Zeile l??schen', 'Zeilen l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Spalte l??schen', 'Spalten l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'R??ckgangig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Wiederholen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Nur Lesezugriff'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Spalteninhalt l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Ausrichtung'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Linksb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Zentriert'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechtsb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Blocksatz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Mitte'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Spalte fixieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Spaltenfixierung aufheben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Kein Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Kommentar hinzuf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Kommentar bearbeiten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Kommentar l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Schreibschutz Kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Zellen verbinden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zellen teilen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Ausschneiden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Nachfolgerzeile einf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Von Vorg??ngerzeile abkoppeln'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Spalte ausblenden', 'Spalten ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Spalte einblenden', 'Spalten einblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Zeile ausblenden', 'Zeilen ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zeile einblenden', 'Zeilen einblenden']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Kein Filter'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Ist leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Ist nicht leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Ist gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Ist ungleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Beginnt mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Endet mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Enth??lt'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Enth??lt nicht'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Gr??sser als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Gr??sser gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Kleiner als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Kleiner gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Zwischen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Ausserhalb'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Nach'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Vor'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Heute'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Gestern'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Leere Zellen'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Per Bedingung filtern'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Nach Zahlen filtern'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Und'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Oder'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Alles ausw??hlen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Auswahl aufheben'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Abbrechen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Suchen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wert'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Alternativwert'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Stefan Salzl
                                                                                                                                                                                                                   * Last updated: Jan 08, 2018
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for German - Germany language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'de-DE'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Zeile einf??gen oberhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Zeile einf??gen unterhalb'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Spalte einf??gen links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Spalte einf??gen rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Zeile l??schen', 'Zeilen l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Spalte l??schen', 'Spalten l??schen']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'R??ckgangig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Wiederholen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Nur Lesezugriff'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Spalteninhalt l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Ausrichtung'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Linksb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Zentriert'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Rechtsb??ndig'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Blocksatz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Mitte'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Spalte fixieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Spaltenfixierung aufheben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Oben'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Rechts'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Unten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Links'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Kein Rahmen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Kommentar hinzuf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Kommentar bearbeiten'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Kommentar l??schen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Schreibschutz Kommentar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Zellen verbinden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Zellen teilen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopieren'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Ausschneiden'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Nachfolgerzeile einf??gen'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Von Vorg??ngerzeile abkoppeln'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Spalte ausblenden', 'Spalten ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Spalte einblenden', 'Spalten einblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Zeile ausblenden', 'Zeilen ausblenden']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Zeile einblenden', 'Zeilen einblenden']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Kein Filter'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Ist leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Ist nicht leer'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Ist gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Ist ungleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Beginnt mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Endet mit'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Enth??lt'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Enth??lt nicht'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Gr????er als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Gr????er gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Kleiner als'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Kleiner gleich'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Zwischen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Au??erhalb'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Nach'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Vor'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Heute'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Morgen'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Gestern'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Leere Zellen'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Per Bedingung filtern'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Nach Zahlen filtern'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Und'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Oder'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Alles ausw??hlen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Auswahl aufheben'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Abbrechen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Suchen'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Wert'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Alternativwert'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Handsoncode
                                                                                                                                                                                                                   * Last updated: Nov 15, 2017
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for English - United States language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'en-US'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Insert row above'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Insert row below'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Insert column left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Insert column right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Remove row', 'Remove rows']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Remove column', 'Remove columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Undo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Redo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Read only'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Clear column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alignment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Center'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justify'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Top'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Middle'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Bottom'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Freeze column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Unfreeze column'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Borders'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Top'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Right'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Bottom'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Left'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Remove border(s)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Add comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edit comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Delete comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Read-only comment'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Merge cells'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Unmerge cells'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copy'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Cut'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Insert child row'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Detach from parent'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Hide column', 'Hide columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Show column', 'Show columns']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Hide row', 'Hide rows']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Show row', 'Show rows']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'None'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Is empty'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Is not empty'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Is equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Is not equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Begins with'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Ends with'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Contains'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Does not contain'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Greater than'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Greater than or equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Less than'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Less than or equal to'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Is between'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Is not between'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'After'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Before'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Today'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Tomorrow'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Yesterday'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Blank cells'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filter by condition'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filter by value'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'And'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Or'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Select all'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Clear'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Cancel'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Search'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Value'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Second value'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: hand-dot
                                                                                                                                                                                                                   * Last updated: Jan 28, 2018
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for Japanese - Japan language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'ja-JP'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '????????????(??????)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '??????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '???'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '?????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '??????????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '???????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '?????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['???????????????', '???????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['????????????', '????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['???????????????', '???????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['????????????', '????????????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '???????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '???????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '?????????????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '??????????????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '??????'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '?????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '???????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '???'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '???2'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Handsoncode
                                                                                                                                                                                                                   * Last updated: Nov 17, 2017
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for Polish - Poland language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'pl-PL'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Wstaw wiersz powy??ej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Wstaw wiersz poni??ej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Wstaw kolumn?? z lewej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Wstaw kolumn?? z prawej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Usu?? wiersz', 'Usu?? wiersze']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Usu?? kolumn??', 'Usu?? kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Cofnij'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Pon??w'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Tylko do odczytu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Wyczy???? kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Wyr??wnanie'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Do lewej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Do ??rodka'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Do prawej'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Wyjustuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Do g??ry'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Wy??rodkuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Do do??u'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Zablokuj kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Odblokuj kolumn??'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Obramowanie'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Kraw??d?? g??rna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Kraw??d?? prawa'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Kraw??d?? dolna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Kraw??d?? lewa'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Usu?? obramowanie(a)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Dodaj komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Edytuj komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Usu?? komentarz'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Komentarz tylko do odczytu'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Scal kom??rki'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Rozdziel kom??rki'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Kopiuj'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Wytnij'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Wstaw wiersz podrz??dny'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Od????cz od nadrz??dnego'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ukryj kolumn??', 'Ukryj kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Poka?? kolumn??', 'Poka?? kolumny']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ukryj wiersz', 'Ukryj wiersze']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Poka?? wiersz', 'Poka?? wiersze']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Brak'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, 'Kom??rka jest pusta'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'Kom??rka nie jest pusta'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, 'Jest r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, 'Jest r????ne od'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Tekst zaczyna si?? od'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Tekst ko??czy si?? na'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Tekst zawiera fragment'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'Tekst nie zawiera fragmentu'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Wi??ksze ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Wi??ksze lub r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Mniejsze ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Mniejsze lub r??wne'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Jest pomi??dzy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'Nie jest pomi??dzy'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Data p????niejsza ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Data wcze??niejsza ni??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Dzisiaj'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Jutro'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Wczoraj'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'Puste miejsca'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtruj wg warunku'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtruj wg warto??ci'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'Oraz'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Lub'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Zaznacz wszystko'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Wyczy????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Anuluj'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Szukaj'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Warto????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Druga warto????'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: J??lio C. Zuppa
                                                                                                                                                                                                                   * Last updated: Jan 12, 2018
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for Portuguese - Brazil language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'pt-BR'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, 'Inserir linha acima'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, 'Inserir linha abaixo'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, 'Inserir coluna esquerda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, 'Inserir coluna direita'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['Excluir linha', 'Excluir linhas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['Excluir coluna', 'Excluir colunas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, 'Desfazer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, 'Refazer'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, 'Somente leitura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, 'Limpar coluna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, 'Alinhamento'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, 'Esquerda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, 'Centralizado'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, 'Direita'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, 'Justificado'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, 'Superior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, 'Meio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, 'Inferior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, 'Congelar coluna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, 'Descongelar coluna'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, 'Bordas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, 'Superior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, 'Direita'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, 'Inferior'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, 'Esquerda'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, 'Excluir bordas(s)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, 'Incluir coment??rio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, 'Editar coment??rio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, 'Remover coment??rio'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, 'Coment??rio somente leitura'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, 'Mesclar c??lulas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, 'Desfazer mesclagem de c??lulas'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, 'Copiar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, 'Recortar'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, 'Inserir linha filha'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, 'Desanexar da linha pai'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['Ocultar coluna', 'Ocultar colunas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['Exibir coluna', 'Exibir colunas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['Ocultar linha', 'Ocultar linhas']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['Exibir linha', 'Exibir linhas']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, 'Nenhum'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '?? vazio'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, 'N??o ?? vazio'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '?? igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '?? diferente de'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, 'Come??a com'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, 'Termina com'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, 'Cont??m'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, 'N??o cont??m'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, 'Maior que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, 'Maior ou igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, 'Menor que'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, 'Maior ou igual a'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, 'Est?? entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, 'N??o est?? entre'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, 'Depois'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, 'Antes'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, 'Hoje'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, 'Amanh??'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, 'Ontem'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, 'C??lulas vazias'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, 'Filtrar por condi????o'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, 'Filtrar por valor'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, 'E'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, 'Ou'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, 'Selecionar tudo'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, 'Limpar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, 'Cancelar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, 'Localizar'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, 'Valor'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, 'Segundo valor'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dictionary;

var _handsontable = __webpack_require__(0);

var _handsontable2 = _interopRequireDefault(_handsontable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @preserve
                                                                                                                                                                                                                   * Authors: Alexey Rogachev
                                                                                                                                                                                                                   * Last updated: Feb 28, 2018
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Description: Definition file for Russian - Russia language-country.
                                                                                                                                                                                                                   */


var C = _handsontable2.default.languages.dictionaryKeys;

var dictionary = (_dictionary = {
  languageCode: 'ru-RU'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '???????????????? ???????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '???????????????? ???????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '???????????????? ?????????????? ??????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '???????????????? ?????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['?????????????? ????????????', '?????????????? ????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['?????????????? ??????????????', '?????????????? ??????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '??????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '???????????? ?????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '???????????????? ??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '????????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '???? ???????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '???? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '???? ?????????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '???? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '???? ???????????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '???? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '???? ?????????????? ????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '?????????????????? ??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '?????????????????? ??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '??????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '??????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '??????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '?????????????? ??????????????(??)'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '???????????????? ??????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '?????????????????????????? ??????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '?????????????? ??????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '?????????????????????? ???????????? ?????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '???????????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '?????????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '????????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '???????????????? ???????????????? ????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '???????????????? ???? ????????????????'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['???????????? ??????????????', '???????????? ??????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['???????????????? ??????????????', '???????????????? ??????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['???????????? ????????????', '???????????? ????????????']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['???????????????? ????????????', '???????????????? ????????????']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '??????????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '???? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '???? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '???????????????????? ????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '?????????????????????????? ????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '???? ????????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '???????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '???????????? ?????? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '???????????? ??????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '???????????? ?????? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '???? ??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '??????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '??????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '????????????'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '??????????'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '???????????? ????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '???????????? ???? ??????????????'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '???????????? ???? ????????????????'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '??'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '?????????????? ??????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, 'OK'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '??????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '????????????????'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '???????????? ????????????????'), _dictionary);

_handsontable2.default.languages.registerLanguageDictionary(dictionary);

exports.default = dictionary;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ruRU = exports.ptBR = exports.plPL = exports.jaJP = exports.enUS = exports.deDE = exports.deCH = undefined;

var _deCH = __webpack_require__(1);

var _deCH2 = _interopRequireDefault(_deCH);

var _deDE = __webpack_require__(2);

var _deDE2 = _interopRequireDefault(_deDE);

var _enUS = __webpack_require__(3);

var _enUS2 = _interopRequireDefault(_enUS);

var _jaJP = __webpack_require__(4);

var _jaJP2 = _interopRequireDefault(_jaJP);

var _plPL = __webpack_require__(5);

var _plPL2 = _interopRequireDefault(_plPL);

var _ptBR = __webpack_require__(6);

var _ptBR2 = _interopRequireDefault(_ptBR);

var _ruRU = __webpack_require__(7);

var _ruRU2 = _interopRequireDefault(_ruRU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.deCH = _deCH2.default;
exports.deDE = _deDE2.default;
exports.enUS = _enUS2.default;
exports.jaJP = _jaJP2.default;
exports.plPL = _plPL2.default;
exports.ptBR = _ptBR2.default;
exports.ruRU = _ruRU2.default; /* eslint-disable import/prefer-default-export */

/***/ })
/******/ ])["___"];
});