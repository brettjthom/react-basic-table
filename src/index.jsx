import React, { PropTypes } from 'react';
import { isArrayEqual } from './utils.js';
import PagingMain from './paging-main';
import filterTable from './filtering';
import sortTable from './sorting';

export default class ReactBasicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            numPages: 1,
            sortedBy: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        // New props... reset to page 1
        if (!isArrayEqual(this.props.filter, nextProps.filter)) {
            this.setState({ page: 1 });
        }
    }

    setPage(newPage) {
        this.setState({ page: newPage });
    }

    sortColumn(index) {
        // if column is not a sortable column... return
        if (this.props.sort.indexOf(index) === -1) {
            return;
        }

        if (this.state.sortedBy.column !== index) {
            this.setState({ sortedBy: { column: index, mode: 'Asc' } });
        } else {
            this.setState({ sortedBy: {
                column: index,
                mode: this.state.sortedBy.mode === 'Asc' ? 'Desc' : 'Asc' } });
        }
    }

    render() {
        let items;
        const headers = this.props.columns.map((header, index) => {
            return (
                <th key={`header${index}`}
                  style={this.props.hideColumns.indexOf(index) !== -1 ?
                        { display: 'none' } : {}} onClick={this.sortColumn.bind(this, index)}
                >
                    {header}
                </th>
            );
        });

        // Apply the filter criteria
        const filteredRows = filterTable(this.props.rows, this.props.filter, this.props.filterMode);

        // Sort the rows for the final render
        let rows = sortTable(filteredRows, this.state.sortedBy)
            .slice((this.state.page - 1) * this.props.pageSize,
                this.state.page * this.props.pageSize)
            .map((row, index) => {
                items = row.map((td, tdIndex) => {
                    return (
                        <td key={`row${index}item${tdIndex}`}
                          style={this.props.hideColumns.indexOf(tdIndex) !== -1 ?
                                { display: 'none' } : {}}
                        >
                            {td}
                        </td>
                    );
                });
                return (
                    <tr key={`row${index}`}>
                        {items}
                    </tr>
                );
            });

        if (rows.length === 0) {
            rows =
                (<tr key={"rowempty"}>
                    <td valign="top" colSpan={headers.length} className="dataTables_empty">
                        No matching records found.
                    </td>
                </tr>);
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
                <PagingMain page={this.state.page}
                  numPages={Math.ceil(filteredRows.length / this.props.pageSize)}
                  setPage={this.setPage.bind(this)}
                />
            </div>
        );
    }
}

ReactBasicTable.defaultProps = {
    rows: [],
    columns: [],
    pageSize: 10,
    hideColumns: [],
    filter: [],
    sort: [],
    filterMode: 'Or',
};

ReactBasicTable.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    pageSize: PropTypes.number,
    hideColumns: PropTypes.array,
    filter: PropTypes.array,
    sort: PropTypes.array,
    filterMode: PropTypes.string,
};