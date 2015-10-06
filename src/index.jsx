'use strict';

import React from "react";
import _ from "underscore";
import SimpleTablePaging from "./paging.jsx";
import filterTable from "./filtering.jsx";
import classNames from 'classNames';

export default class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1,
            displayRows: []
        }
    }

    componentWillReceiveProps(nextProps) {
        // Filter if you receive the filer prop
        var displayRows = nextProps.rows;
        if (nextProps.filter.length > 0 && nextProps.rows.length > 0)
            displayRows= filterTable(nextProps.rows, nextProps.filter);
        this.setState({ displayRows: displayRows });
        this.setState({ numPages: Math.ceil(displayRows.length / nextProps.pageSize) });
        if (!_.isEqual(this.props.filter, nextProps.filter)) {
            this.setState({ page: 1 });
        }
    }

    componentWillMount() {
        // Filter if you receive the filer prop
        var displayRows = this.props.rows;
        if (this.props.filter.length > 0 && this.props.rows.length > 0)
            displayRows= filterTable(this.props.rows, this.props.filter);
        this.setState({ displayRows: displayRows });
        this.setState({ numPages: Math.ceil(displayRows.length / this.props.pageSize) });
        this.setState({ page: 1 });
    }

    setPage(newPage) {
        this.setState({ page: newPage });
    }

    render() {
        var $component = this;
        var headers = this.props.columns.map(function (header, index) {
            return (
                <th key={"header" + index} style={$component.props.hideColumns.indexOf(index) != -1 ? {display:"none"} : {} }>{header}</th>
            );
        });

        var rows = this.state.displayRows.map(function (row, index) {
            if (index < ($component.state.page - 1) * $component.props.pageSize) return null;
            if (index >= ($component.state.page) * $component.props.pageSize) return null;

            var items = row.map(function(td, tdIndex) {
                return (
                    <td key={"row" + index + "item" + tdIndex} style={$component.props.hideColumns.indexOf(tdIndex) != -1 ? {display:"none"} : {} }>{td}</td>
                );
            });
            return(
                <tr key={"row" + index}>
                    {items}
                </tr>
            );
        });


        if (rows.length == 0) {
            rows =
                <tr key={"rowempty"}>
                    <td valign="top" colSpan={headers.length} className="dataTables_empty">
                        No matching records found.
                    </td>
                </tr>
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    {headers}
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
                <SimpleTablePaging numPages={this.state.numPages} page={this.state.page} setPage={this.setPage.bind(this)} />
            </div>
        );
    }
}

SimpleTable.defaultProps = { rows: [], columns: [], pageSize: 10, hideColumns: [], filter: [] }
