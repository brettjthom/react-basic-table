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
            numPages: 1
        };
    }

    _createClass(SimpleTable, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ numPages: Math.ceil(nextProps.rows.length / nextProps.pageSize) });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({ numPages: Math.ceil(this.props.rows.length / this.props.pageSize) });
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
            var headers = this.props.columns.map(function (header) {
                return React.createElement("th", null, header);
            });
            var rows = this.props.rows.map(function (row, index) {
                if (index < ($component.state.page - 1) * $component.props.pageSize) return null;
                if (index >= $component.state.page * $component.props.pageSize) return null;
                return React.createElement("tr", null, row);
            });

            return React.createElement("div", null, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-xs-12" }, React.createElement("table", { className: "table" }, React.createElement("thead", null, React.createElement("tr", null, headers)), React.createElement("tbody", null, rows)))), React.createElement(SimpleTablePaging, { numPages: this.state.numPages, page: this.state.page, setPage: this.setPage.bind(this) }));
        }
    }]);

    return SimpleTable;
})(React.Component);

SimpleTable.defaultProps = { rows: [], columns: [], pageSize: 10 };
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
        value: function nextPage() {
            if (this.props.page < this.props.numPages) this.props.setPage(this.props.page + 1);
            return false;
        }
    }, {
        key: "previousPage",
        value: function previousPage() {
            if (this.props.page > 1) this.props.setPage(this.props.page - 1);
            return false;
        }
    }, {
        key: "setPage",
        value: function setPage(page) {
            this.props.setPage(page);
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            var previousClass = classNames("paginate_button", "previous", { "disabled": this.props.page == 1 });
            var nextClass = classNames("paginate_button", "next", { "disabled": this.props.page == this.props.numPages });

            // Create individual numbers
            var i = 1;
            var pagingNumbers = [];
            var lastNumberAdded = null;
            for (i = 1; i <= this.props.numPages; i++) {
                if (i !== 1 && i !== this.props.numPages && Math.abs(i - this.props.page) > 2) continue;

                var numberClassName = classNames("paginate_button", { "disabled": this.props.page == i });
                if (lastNumberAdded !== null && lastNumberAdded !== i - 1) pagingNumbers.push(React.createElement("li", { className: "paginate_button disabled" }, React.createElement("a", { href: "#", onClick: this.setPage.bind(this, i) }, "...")));

                pagingNumbers.push(React.createElement("li", { className: numberClassName }, React.createElement("a", { href: "#", onClick: this.setPage.bind(this, i) }, i)));

                lastNumberAdded = i;
            }

            var paging = React.createElement("ul", { className: "pagination" }, React.createElement("li", { className: previousClass }, React.createElement("a", { href: "#", onClick: this.previousPage.bind(this) }, "Previous")), pagingNumbers, React.createElement("li", { className: nextClass }, React.createElement("a", { href: "#", onClick: this.nextPage.bind(this) }, "Next")));
            return React.createElement("div", { classNameName: "row" }, React.createElement("div", { className: "col-xs-12" }, React.createElement("div", { className: "dataTables_paginate paging_simple_numbers" }, paging)));
        }
    }]);

    return SimpleTablePaging;
})(React.Component);

SimpleTablePaging.defaultProps = { page: 1, pageNum: 1, setPage: { "function": function _function() {} } };