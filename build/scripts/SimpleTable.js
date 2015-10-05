"use strict";

function filterTable(rows, criterias) {
	var filteredCriterias = criterias.filter(function (criteria) {
		if (criteria.match && criteria.match !== "") return true;
	});
	if (filteredCriterias && filteredCriterias.length == 0) return rows;
	var newArray = rows.filter(function (row) {
		var keep = true;
		filteredCriterias.forEach(function (criteria) {
			if (row[criteria.id].props["data-simpletable-value"].toLowerCase().indexOf(criteria.match.toLowerCase()) == -1) keep = false;
		});

		return keep;
	});

	return newArray;
}
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTable = (function (_React$Component) {
    _inherits(SimpleTable, _React$Component);

    function SimpleTable(props) {
        _classCallCheck(this, SimpleTable);

        _get(Object.getPrototypeOf(SimpleTable.prototype), "constructor", this).call(this, props);
        this.state = {
            page: 1,
            numPages: 1,
            displayRows: []
        };
    }

    _createClass(SimpleTable, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            // Filter if you receive the filer prop
            var displayRows = nextProps.rows;
            if (nextProps.filter.length > 0 && nextProps.rows.length > 0) displayRows = filterTable(nextProps.rows, nextProps.filter);
            this.setState({ displayRows: displayRows });
            this.setState({ numPages: Math.ceil(displayRows.length / nextProps.pageSize) });
            if (!_.isEqual(this.props.filter, nextProps.filter)) {
                this.setState({ page: 1 });
            }
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            // Filter if you receive the filer prop
            var displayRows = this.props.rows;
            if (this.props.filter.length > 0 && this.props.rows.length > 0) displayRows = filterTable(this.props.rows, this.props.filter);
            this.setState({ displayRows: displayRows });
            this.setState({ numPages: Math.ceil(displayRows.length / this.props.pageSize) });
            this.setState({ page: 1 });
        }
    }, {
        key: "setPage",
        value: function setPage(newPage) {
            this.setState({ page: newPage });
        }
    }, {
        key: "render",
        value: function render() {
            var $component = this;
            var headers = this.props.columns.map(function (header, index) {
                return React.createElement(
                    "th",
                    { key: "header" + index, style: $component.props.hideColumns.indexOf(index) != -1 ? { display: "none" } : {} },
                    header
                );
            });

            var rows = this.state.displayRows.map(function (row, index) {
                if (index < ($component.state.page - 1) * $component.props.pageSize) return null;
                if (index >= $component.state.page * $component.props.pageSize) return null;

                var items = row.map(function (td, tdIndex) {
                    return React.createElement(
                        "td",
                        { key: "row" + index + "item" + tdIndex, style: $component.props.hideColumns.indexOf(tdIndex) != -1 ? { display: "none" } : {} },
                        td
                    );
                });
                return React.createElement(
                    "tr",
                    { key: "row" + index },
                    items
                );
            });

            if (rows.length == 0) {
                rows = React.createElement(
                    "tr",
                    { key: "rowempty" },
                    React.createElement(
                        "td",
                        { valign: "top", colSpan: headers.length, className: "dataTables_empty" },
                        "No matching records found."
                    )
                );
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12" },
                        React.createElement(
                            "table",
                            { className: "table" },
                            React.createElement(
                                "thead",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    headers
                                )
                            ),
                            React.createElement(
                                "tbody",
                                null,
                                rows
                            )
                        )
                    )
                ),
                React.createElement(SimpleTablePaging, { numPages: this.state.numPages, page: this.state.page, setPage: this.setPage.bind(this) })
            );
        }
    }]);

    return SimpleTable;
})(React.Component);

SimpleTable.defaultProps = { rows: [], columns: [], pageSize: 10, hideColumns: [], filter: [] };
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function2: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function2; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTablePaging = (function (_React$Component) {
    _inherits(SimpleTablePaging, _React$Component);

    function SimpleTablePaging(props) {
        _classCallCheck(this, SimpleTablePaging);

        _get(Object.getPrototypeOf(SimpleTablePaging.prototype), "constructor", this).call(this, props);
        this.state = {
            page: 1,
            numPages: 1
        };
    }

    _createClass(SimpleTablePaging, [{
        key: "nextPage",
        value: function nextPage(e) {
            if (this.props.page < this.props.numPages && this.props.numPages > 0) this.props.setPage(this.props.page + 1);
            e.preventDefault();
        }
    }, {
        key: "previousPage",
        value: function previousPage(e) {
            if (this.props.page > 1) this.props.setPage(this.props.page - 1);
            e.preventDefault();
        }
    }, {
        key: "setPage",
        value: function setPage(page, e) {
            this.props.setPage(page);
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            var previousClass = classNames("paginate_button", "previous", { "disabled": this.props.page == 1 });
            var nextClass = classNames("paginate_button", "next", { "disabled": this.props.page == this.props.numPages || this.props.numPages == 0 });

            // Create individual numbers
            var i = 1;
            var pagingNumbers = [];
            var lastNumberAdded = null;
            for (i = 1; i <= this.props.numPages; i++) {
                if (i !== 1 && i !== this.props.numPages && Math.abs(i - this.props.page) > 2) continue;

                var numberClassName = classNames("paginate_button", { "disabled": this.props.page == i });
                if (lastNumberAdded !== null && lastNumberAdded !== i - 1) pagingNumbers.push(React.createElement(
                    "li",
                    { key: "paging-...-" + i, className: "paginate_button disabled" },
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.setPage.bind(this, i) },
                        "..."
                    )
                ));

                pagingNumbers.push(React.createElement(
                    "li",
                    { key: "paging-" + i, className: numberClassName },
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.setPage.bind(this, i) },
                        i
                    )
                ));

                lastNumberAdded = i;
            }

            var paging = React.createElement(
                "ul",
                { className: "pagination" },
                React.createElement(
                    "li",
                    { key: "paging-previous", className: previousClass },
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.previousPage.bind(this) },
                        "Previous"
                    )
                ),
                pagingNumbers,
                React.createElement(
                    "li",
                    { key: "paging-next", className: nextClass },
                    React.createElement(
                        "a",
                        { href: "#", onClick: this.nextPage.bind(this) },
                        "Next"
                    )
                )
            );
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-xs-12" },
                    React.createElement(
                        "div",
                        { className: "dataTables_paginate paging_simple_numbers" },
                        paging
                    )
                )
            );
        }
    }]);

    return SimpleTablePaging;
})(React.Component);

SimpleTablePaging.defaultProps = { page: 1, pageNum: 1, setPage: { "function": function _function() {} } };