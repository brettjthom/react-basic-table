(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["SimpleTable"] = factory(require("React"));
	else
		root["SimpleTable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	// Example 1
	var columns = ["Name", "State", "Age", "Note"];
	var rows = [[_react2["default"].createElement(
		"span",
		null,
		"Joe"
	), _react2["default"].createElement(
		"span",
		null,
		"PA"
	), _react2["default"].createElement(
		"span",
		null,
		"22"
	), _react2["default"].createElement("input", { type: "text" })], [_react2["default"].createElement(
		"span",
		null,
		"Jim"
	), _react2["default"].createElement(
		"span",
		null,
		"TX"
	), _react2["default"].createElement(
		"span",
		null,
		"55"
	), _react2["default"].createElement("input", { type: "text" })], [_react2["default"].createElement(
		"span",
		null,
		"John"
	), _react2["default"].createElement(
		"span",
		null,
		"NJ"
	), _react2["default"].createElement(
		"span",
		null,
		"34"
	), _react2["default"].createElement("input", { type: "text" })], [_react2["default"].createElement(
		"span",
		null,
		"Sam"
	), _react2["default"].createElement(
		"span",
		null,
		"CA"
	), _react2["default"].createElement(
		"span",
		null,
		"68"
	), _react2["default"].createElement("input", { type: "text" })], [_react2["default"].createElement(
		"span",
		null,
		"Steve"
	), _react2["default"].createElement(
		"span",
		null,
		"NY"
	), _react2["default"].createElement(
		"span",
		null,
		"12"
	), _react2["default"].createElement("input", { type: "text" })]];

	_react2["default"].render(_react2["default"].createElement(SimpleTable, { columns: columns, rows: rows }), document.getElementById('Example1'));

	// Example 2
	var i = 0;
	var rows = [];
	for (i = 0; i <= 2000; i++) {
		var item = [_react2["default"].createElement(
			"span",
			{ "data-simpletable-value": "Row" + i },
			"Row" + i
		), _react2["default"].createElement(
			"span",
			{ "data-simpletable-value": "Test" + i },
			"Test" + i
		), _react2["default"].createElement(
			"span",
			{ "data-simpletable-value": "Testing" + i },
			"Testing" + i
		), _react2["default"].createElement(
			"span",
			{ "data-simpletable-value": "End" + i },
			"End" + i
		)];

		rows.push(item);
	}

	_react2["default"].render(_react2["default"].createElement(SimpleTable, { columns: columns, rows: rows }), document.getElementById('Example2'));

	// Example 3

	var SimpleTableFilteringExample = (function (_React$Component) {
		_inherits(SimpleTableFilteringExample, _React$Component);

		function SimpleTableFilteringExample(props) {
			_classCallCheck(this, SimpleTableFilteringExample);

			_get(Object.getPrototypeOf(SimpleTableFilteringExample.prototype), "constructor", this).call(this, props);
			this.state = { filter: [{
					id: 0,
					match: ""
				}, {
					id: 1,
					match: ""
				}, {
					id: 2,
					match: ""
				}, {
					id: 3,
					match: ""
				}] };
		}

		_createClass(SimpleTableFilteringExample, [{
			key: "changeFilter",
			value: function changeFilter(column, event) {
				var newFilter = this.state.filter.slice();
				newFilter[column].match = event.target.value;
				this.setState({ filter: newFilter });
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"form",
						null,
						_react2["default"].createElement(
							"div",
							{ className: "form-group" },
							_react2["default"].createElement(
								"label",
								{ htmlFor: "filterColumn0" },
								"Column 0"
							),
							_react2["default"].createElement("input", { onChange: this.changeFilter.bind(this, 0), className: "form-control", id: "filterColumn0", placeholder: "Filter" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-group" },
							_react2["default"].createElement(
								"label",
								{ htmlFor: "filterColumn1" },
								"Column 1"
							),
							_react2["default"].createElement("input", { onChange: this.changeFilter.bind(this, 1), className: "form-control", id: "filterColumn1", placeholder: "Filter" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-group" },
							_react2["default"].createElement(
								"label",
								{ htmlFor: "filterColumn2" },
								"Column 2"
							),
							_react2["default"].createElement("input", { onChange: this.changeFilter.bind(this, 2), className: "form-control", id: "filterColumn2", placeholder: "Filter" })
						),
						_react2["default"].createElement(
							"div",
							{ className: "form-group" },
							_react2["default"].createElement(
								"label",
								{ htmlFor: "filterColumn3" },
								"Column 3"
							),
							_react2["default"].createElement("input", { onChange: this.changeFilter.bind(this, 3), className: "form-control", id: "filterColumn3", placeholder: "Filter" })
						)
					),
					_react2["default"].createElement(SimpleTable, { columns: this.props.columns, rows: this.props.rows, filter: this.state.filter })
				);
			}
		}]);

		return SimpleTableFilteringExample;
	})(_react2["default"].Component);

	_react2["default"].render(_react2["default"].createElement(SimpleTableFilteringExample, { columns: columns, rows: rows }), document.getElementById('Example3'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;