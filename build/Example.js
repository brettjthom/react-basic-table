// Example 1
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var columns = ["Name", "State", "Age", "Note"];
var rows = [[React.createElement(
	"span",
	null,
	"Joe"
), React.createElement(
	"span",
	null,
	"PA"
), React.createElement(
	"span",
	null,
	"22"
), React.createElement("input", { type: "text" })], [React.createElement(
	"span",
	null,
	"Jim"
), React.createElement(
	"span",
	null,
	"TX"
), React.createElement(
	"span",
	null,
	"55"
), React.createElement("input", { type: "text" })], [React.createElement(
	"span",
	null,
	"John"
), React.createElement(
	"span",
	null,
	"NJ"
), React.createElement(
	"span",
	null,
	"34"
), React.createElement("input", { type: "text" })], [React.createElement(
	"span",
	null,
	"Sam"
), React.createElement(
	"span",
	null,
	"CA"
), React.createElement(
	"span",
	null,
	"68"
), React.createElement("input", { type: "text" })], [React.createElement(
	"span",
	null,
	"Steve"
), React.createElement(
	"span",
	null,
	"NY"
), React.createElement(
	"span",
	null,
	"12"
), React.createElement("input", { type: "text" })]];

React.render(React.createElement(SimpleTable, { columns: columns, rows: rows }), document.getElementById('Example1'));

// Example 2
var i = 0;
var rows = [];
for (i = 0; i <= 2000; i++) {
	var item = [React.createElement(
		"span",
		{ "data-simpletable-value": "Row" + i },
		"Row" + i
	), React.createElement(
		"span",
		{ "data-simpletable-value": "Test" + i },
		"Test" + i
	), React.createElement(
		"span",
		{ "data-simpletable-value": "Testing" + i },
		"Testing" + i
	), React.createElement(
		"span",
		{ "data-simpletable-value": "End" + i },
		"End" + i
	)];

	rows.push(item);
}

React.render(React.createElement(SimpleTable, { columns: columns, rows: rows }), document.getElementById('Example2'));

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
			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					null,
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							{ htmlFor: "filterColumn0" },
							"Column 0"
						),
						React.createElement("input", { onChange: this.changeFilter.bind(this, 0), className: "form-control", id: "filterColumn0", placeholder: "Filter" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							{ htmlFor: "filterColumn1" },
							"Column 1"
						),
						React.createElement("input", { onChange: this.changeFilter.bind(this, 1), className: "form-control", id: "filterColumn1", placeholder: "Filter" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							{ htmlFor: "filterColumn2" },
							"Column 2"
						),
						React.createElement("input", { onChange: this.changeFilter.bind(this, 2), className: "form-control", id: "filterColumn2", placeholder: "Filter" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							{ htmlFor: "filterColumn3" },
							"Column 3"
						),
						React.createElement("input", { onChange: this.changeFilter.bind(this, 3), className: "form-control", id: "filterColumn3", placeholder: "Filter" })
					)
				),
				React.createElement(SimpleTable, { columns: this.props.columns, rows: this.props.rows, filter: this.state.filter })
			);
		}
	}]);

	return SimpleTableFilteringExample;
})(React.Component);

React.render(React.createElement(SimpleTableFilteringExample, { columns: columns, rows: rows }), document.getElementById('Example3'));